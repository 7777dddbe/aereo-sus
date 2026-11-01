// Estrae da Overture Maps (dati aperti su AWS, comprende OpenStreetMap) gli elementi del Garda nord:
// sagome degli edifici con altezza, strade (senza i tratti in galleria), uso del suolo (vigneti,
// frutteti, spiagge, porti...), fiumi e torrenti, moli e dighe foranee.
// Uscita: src/world/garda/osm.bin (formato compatto, vedi fondo del file) e osm.json (statistiche).
//
// Uso: NODE_USE_ENV_PROXY=1 node tools/garda/overture.mjs
// Licenze: Overture Maps (ODbL per i dati OpenStreetMap, CDLA/altre per il resto), vedi README.

import fs from 'fs';
import path from 'path';
import proj4 from 'proj4';
import { parquetMetadataAsync, parquetReadObjects } from 'hyparquet';
import { compressors } from 'hyparquet-compressors';

const BASE = 'https://overturemaps-us-west-2.s3.us-west-2.amazonaws.com/';
const RELEASE = 'release/2026-10-21.0/';
const OUT = path.resolve('src/world/garda');
const CACHE = path.resolve('tools/garda/.cache/overture');
fs.mkdirSync(CACHE, { recursive: true });
const meta = JSON.parse(fs.readFileSync(path.join(OUT, 'meta.json'), 'utf8'));
const { E0, N0 } = meta.utm;
const HALF = meta.half - 50;
const toUTM = proj4('EPSG:4326', '+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs');
const W = (lon, lat) => {
  const [e, n] = toUTM.forward([lon, lat]);
  return [e - E0, N0 - n];
};
const BOX = { x0: 10.667, x1: 11.009, y0: 45.716, y1: 45.948 };
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --- HTTP con tentativi ripetuti ---------------------------------------------
async function fetchRetry(url, opts = {}, tries = 7) {
  let err;
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, opts);
      if (!r.ok && r.status !== 206) throw new Error('HTTP ' + r.status);
      return r;
    } catch (e) {
      err = e;
      await sleep(1000 * 2 ** i);
    }
  }
  throw err;
}
async function remoteBuffer(url) {
  const h = await fetchRetry(url, { method: 'HEAD' });
  const byteLength = Number(h.headers.get('content-length'));
  return {
    byteLength,
    async slice(start, end = byteLength) {
      for (let i = 0; i < 7; i++) {
        try {
          const r = await fetchRetry(url, { headers: { Range: `bytes=${start}-${end - 1}` } });
          return await r.arrayBuffer();
        } catch (e) {
          await sleep(1000 * 2 ** i);
        }
      }
      throw new Error('lettura fallita ' + url);
    },
  };
}
async function list(prefix) {
  const cf = path.join(CACHE, 'list-' + prefix.replace(/[^a-z0-9]+/gi, '_') + '.json');
  if (fs.existsSync(cf)) return JSON.parse(fs.readFileSync(cf, 'utf8'));
  let keys = [], token = null;
  do {
    const u = `${BASE}?list-type=2&prefix=${encodeURIComponent(prefix)}${token ? '&continuation-token=' + encodeURIComponent(token) : ''}`;
    const t = await (await fetchRetry(u)).text();
    keys.push(...[...t.matchAll(/<Key>([^<]+)<\/Key>/g)].map((m) => m[1]));
    const m = t.match(/<NextContinuationToken>([^<]+)<\/NextContinuationToken>/);
    token = m ? m[1] : null;
  } while (token);
  keys = keys.filter((k) => !k.endsWith('/'));
  fs.writeFileSync(cf, JSON.stringify(keys));
  return keys;
}

// --- WKB -> coordinate ----------------------------------------------------------
function parseWKB(buf) {
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  let o = 0;
  const geom = () => {
    const le = dv.getUint8(o) === 1;
    o += 1;
    let type = dv.getUint32(o, le);
    o += 4;
    const hasZ = (type & 0x80000000) !== 0 || (type >= 1000 && type < 2000) || type >= 3000;
    type = type & 0xffff;
    type = type % 1000;
    const dim = hasZ ? 3 : 2;
    const pt = () => {
      const x = dv.getFloat64(o, le), y = dv.getFloat64(o + 8, le);
      o += 8 * dim;
      return [x, y];
    };
    const line = () => {
      const n = dv.getUint32(o, le);
      o += 4;
      const a = new Array(n);
      for (let i = 0; i < n; i++) a[i] = pt();
      return a;
    };
    const poly = () => {
      const n = dv.getUint32(o, le);
      o += 4;
      const rings = [];
      for (let i = 0; i < n; i++) rings.push(line());
      return rings;
    };
    if (type === 1) return { type: 'Point', coordinates: pt() };
    if (type === 2) return { type: 'LineString', coordinates: line() };
    if (type === 3) return { type: 'Polygon', coordinates: poly() };
    const n = dv.getUint32(o, le);
    o += 4;
    const parts = [];
    for (let i = 0; i < n; i++) parts.push(geom());
    if (type === 4) return { type: 'MultiPoint', coordinates: parts.map((p) => p.coordinates) };
    if (type === 5) return { type: 'MultiLineString', coordinates: parts.map((p) => p.coordinates) };
    if (type === 6) return { type: 'MultiPolygon', coordinates: parts.map((p) => p.coordinates) };
    return { type: 'GeometryCollection', geometries: parts };
  };
  return geom();
}
const asGeo = (g) => (g && g.type ? g : g instanceof Uint8Array || ArrayBuffer.isView(g) ? parseWKB(g) : typeof g === 'string' ? parseWKB(Buffer.from(g, 'binary')) : null);

// --- lettura di un tipo Overture limitata all'area -------------------------------------
async function readType(type, columns, filter) {
  const keys = await list(RELEASE + type + '/');
  const out = [];
  const cf = path.join(CACHE, 'rows-' + type.replace(/[^a-z0-9]+/gi, '_') + '.json');
  if (fs.existsSync(cf)) {
    log(type, 'dalla cache');
    return JSON.parse(fs.readFileSync(cf, 'utf8'));
  }
  let nk = 0;
  const only = process.env.ONLY ? [keys[Number(process.env.ONLY)]] : keys;
  for (const k of only) {
    nk++;
    const url = BASE + k;
    const file = await remoteBuffer(url);
    const md = await parquetMetadataAsync(file);
    const cols = md.row_groups[0].columns.map((c) => c.meta_data.path_in_schema.join('.'));
    const ix = (n) => cols.indexOf(n);
    let row = 0;
    for (const rg of md.row_groups) {
      const nrows = Number(rg.num_rows);
      const st = (n) => rg.columns[ix(n)].meta_data.statistics;
      const xmin = st('bbox.xmin'), xmax = st('bbox.xmax'), ymin = st('bbox.ymin'), ymax = st('bbox.ymax');
      const hit = xmin && !(Number(xmin.min_value) > BOX.x1 || Number(xmax.max_value) < BOX.x0 || Number(ymin.min_value) > BOX.y1 || Number(ymax.max_value) < BOX.y0);
      if (hit) {
        const rows = await parquetReadObjects({ file, metadata: md, compressors, columns: [...columns, 'bbox', 'geometry'], rowStart: row, rowEnd: row + nrows });
        let kept = 0;
        for (const r of rows) {
          const b = r.bbox;
          if (!b || b.xmin > BOX.x1 || b.xmax < BOX.x0 || b.ymin > BOX.y1 || b.ymax < BOX.y0) continue;
          const g = asGeo(r.geometry);
          if (!g) continue;
          const rec = filter(r, g);
          if (rec) {
            out.push(rec);
            kept++;
          }
        }
        log(type, `file ${nk}/${keys.length}`, 'gruppo', nrows, 'righe ->', kept);
      }
      row += nrows;
    }
  }
  fs.writeFileSync(cf, JSON.stringify(out));
  return out;
}

// --- geometria nel mondo -------------------------------------------------------------------
const ringW = (ring) => ring.map(([lon, lat]) => W(lon, lat));
function dp(pts, eps) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const st = [[0, pts.length - 1]];
  while (st.length) {
    const [a, b] = st.pop();
    const [ax, az] = pts[a], [bx, bz] = pts[b];
    const dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz);
    let md = -1, mi = -1;
    for (let i = a + 1; i < b; i++) {
      // anello chiuso (estremi coincidenti): distanza dal punto iniziale
      const d = L < 1e-6 ? Math.hypot(pts[i][0] - ax, pts[i][1] - az) : Math.abs((pts[i][0] - ax) * dz - (pts[i][1] - az) * dx) / L;
      if (d > md) { md = d; mi = i; }
    }
    if (md > eps) {
      keep[mi] = 1;
      st.push([a, mi], [mi, b]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}
const inside = (pts) => pts.some(([x, z]) => Math.abs(x) < HALF && Math.abs(z) < HALF);
const area = (r) => {
  let s = 0;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) s += (r[j][0] + r[i][0]) * (r[j][1] - r[i][1]);
  return s / 2;
};

// --- classi ------------------------------------------------------------------------------------
const ROAD = { motorway: 1, trunk: 2, primary: 3, secondary: 4, tertiary: 5, unclassified: 6, residential: 7, living_street: 8, service: 9, pedestrian: 10, track: 11, path: 12, footway: 12, cycleway: 13, steps: 12, bridleway: 12, unknown: 7 };
const LAND = {
  vineyard: 1, orchard: 2, farmland: 3, grass: 4, allotments: 3, plant_nursery: 2, greenhouse_horticulture: 14,
  residential: 5, industrial: 6, commercial: 6, retail: 6, construction: 6, quarry: 7, landfill: 7,
  cemetery: 8, park: 9, garden: 9, recreation_ground: 9, pitch: 10, stadium: 10, track: 10, golf_course: 9, playground: 9,
  beach: 11, beach_resort: 11, marina: 12, camp_site: 13, parking: 15, forest: 16, wood: 16, scrub: 17, heath: 17,
  rock: 18, bare_rock: 18, scree: 18, cliff: 18,
};
const INFRA = { pier: 1, breakwater: 2, groyne: 2, quay: 3, dam: 4, weir: 4, bridge: 5 };

log('area', BOX, 'origine UTM', E0, N0);

// edifici
const buildings = await readType('theme=buildings/type=building', ['height', 'num_floors', 'class', 'subtype', 'roof_shape', 'roof_color', 'is_underground'], (r, g) => {
  if (r.is_underground) return null;
  const polys = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
  const res = [];
  for (const p of polys) {
    let ring = dp(ringW(p[0]), 0.35);
    if (ring.length < 4 || !inside(ring)) continue;
    if (ring.length > 1 && ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]) ring = ring.slice(0, -1);
    const a = Math.abs(area(ring));
    if (a < 12) continue;
    res.push({ ring: ring.map(([x, z]) => [Math.round(x * 2), Math.round(z * 2)]), h: r.height || (r.num_floors ? r.num_floors * 3.1 : 0), cls: r.class || r.subtype || '', roof: r.roof_shape || '', rc: r.roof_color || '' });
  }
  return res.length ? res : null;
});
log('edifici:', buildings.flat().length);

// strade (senza gallerie) e ferrovie
const roads = await readType('theme=transportation/type=segment', ['subtype', 'class', 'road_flags'], (r, g) => {
  if (r.subtype !== 'road' && r.subtype !== 'rail') return null;
  if (g.type !== 'LineString') return null;
  let pts = ringW(g.coordinates);
  if (!inside(pts)) return null;
  // tratti in galleria: si tolgono (la Gardesana corre in molte gallerie)
  const flags = r.road_flags || [];
  const cuts = [];
  for (const f of flags) {
    const vals = f.values || [];
    if (vals.includes('is_tunnel')) cuts.push(f.between || [0, 1]);
  }
  const cls = r.subtype === 'rail' ? 20 : ROAD[r.class] || 7;
  const bridge = flags.some((f) => (f.values || []).includes('is_bridge'));
  if (!cuts.length) return [{ cls, bridge, pts: dp(pts, 1.0).map(([x, z]) => [Math.round(x * 2), Math.round(z * 2)]) }];
  // taglio per frazione di lunghezza
  const cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const L = cum[cum.length - 1] || 1;
  const at = (f) => {
    const d = f * L;
    let i = 1;
    while (i < cum.length - 1 && cum[i] < d) i++;
    const t = (d - cum[i - 1]) / Math.max(1e-9, cum[i] - cum[i - 1]);
    return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * t, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * t];
  };
  cuts.sort((a, b) => a[0] - b[0]);
  const keep = [];
  let s = 0;
  for (const [a, b] of cuts) {
    if (a > s) keep.push([s, a]);
    s = Math.max(s, b);
  }
  if (s < 1) keep.push([s, 1]);
  const res = [];
  for (const [a, b] of keep) {
    if (b - a < 0.01) continue;
    const seg = [at(a)];
    for (let i = 1; i < pts.length - 1; i++) if (cum[i] / L > a && cum[i] / L < b) seg.push(pts[i]);
    seg.push(at(b));
    res.push({ cls, bridge, pts: dp(seg, 1.0).map(([x, z]) => [Math.round(x * 2), Math.round(z * 2)]) });
  }
  return res.length ? res : null;
});
log('strade:', roads.flat().length);

// uso del suolo
const land = await readType('theme=base/type=land_use', ['subtype', 'class'], (r, g) => {
  const c = LAND[r.class] || LAND[r.subtype];
  if (!c) return null;
  const polys = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
  const res = [];
  for (const p of polys) {
    const ring = dp(ringW(p[0]), 1.5);
    if (ring.length < 4 || !inside(ring) || Math.abs(area(ring)) < 150) continue;
    res.push({ cls: c, ring: ring.map(([x, z]) => [Math.round(x * 2), Math.round(z * 2)]) });
  }
  return res.length ? res : null;
});
log('uso del suolo:', land.flat().length);

// acqua: fiumi e torrenti (il Garda e i laghi ci sono già)
const water = await readType('theme=base/type=water', ['subtype', 'class'], (r, g) => {
  const res = [];
  const cls = r.subtype === 'river' || r.class === 'river' ? 1 : r.class === 'stream' || r.subtype === 'stream' ? 2 : r.class === 'canal' ? 3 : r.subtype === 'lake' || r.subtype === 'pond' || r.subtype === 'reservoir' ? 4 : 0;
  if (!cls) return null;
  if (g.type === 'LineString' || g.type === 'MultiLineString') {
    const lines = g.type === 'LineString' ? [g.coordinates] : g.coordinates;
    for (const l of lines) {
      const pts = dp(ringW(l), 1.0);
      if (pts.length >= 2 && inside(pts)) res.push({ cls, line: true, pts: pts.map(([x, z]) => [Math.round(x * 2), Math.round(z * 2)]) });
    }
  } else {
    const polys = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
    for (const p of polys) {
      const ring = dp(ringW(p[0]), 1.0);
      if (ring.length >= 4 && inside(ring) && Math.abs(area(ring)) > 100 && Math.abs(area(ring)) < 3e6) res.push({ cls, line: false, pts: ring.map(([x, z]) => [Math.round(x * 2), Math.round(z * 2)]) });
    }
  }
  return res.length ? res : null;
});
log('acque:', water.flat().length);

// infrastrutture: moli, dighe foranee, banchine, ponti
const infra = await readType('theme=base/type=infrastructure', ['subtype', 'class'], (r, g) => {
  const c = INFRA[r.class] || INFRA[r.subtype];
  if (!c) return null;
  const res = [];
  const add = (coords, line) => {
    const pts = dp(ringW(coords), 0.5);
    if (pts.length >= 2 && inside(pts)) res.push({ cls: c, line, pts: pts.map(([x, z]) => [Math.round(x * 2), Math.round(z * 2)]) });
  };
  if (g.type === 'LineString') add(g.coordinates, true);
  else if (g.type === 'MultiLineString') g.coordinates.forEach((l) => add(l, true));
  else if (g.type === 'Polygon') add(g.coordinates[0], false);
  else if (g.type === 'MultiPolygon') g.coordinates.forEach((p) => add(p[0], false));
  return res.length ? res : null;
});
log('infrastrutture:', infra.flat().length);

// i sentieri (e le strade pedonali) servono solo nella zona ad alta risoluzione (Riva, Torbole, Arco)
const HZ = { x0: -1700, z0: -11500, x1: 6100, z1: -3700 };
const inHZ = (pts) => pts.some(([x, z]) => x / 2 > HZ.x0 && x / 2 < HZ.x1 && z / 2 > HZ.z0 && z / 2 < HZ.z1);
const roadsKept = roads.flat().filter((r) => !(r.cls === 12 || r.cls === 13 || r.cls === 10) || inHZ(r.pts));
const landKept = land.flat().filter((l) => l.cls !== 4 || inHZ(l.ring));

// --- scrittura del binario ------------------------------------------------------------------------
// sezioni: [tipo u8][numero u32] poi per ogni elemento: [classe u8][extra u16][flag u8][n punti u16][x,z i16 * n]
//   tipo 1 edifici (extra = altezza dm, flag: 1 tetto piano/industriale), 2 strade (flag 1 ponte),
//   3 uso del suolo, 4 acque (flag 1 linea), 5 infrastrutture (flag 1 linea)
// formato: [tipo u8][numero u32] poi per ogni elemento: [classe u8][extra u16][flag u8][n punti varint]
// [x0,z0 i16] e poi le differenze successive in varint zigzag (unità 0,5 m)
const chunks = [];
const varint = (arr, v) => {
  v = v >>> 0;
  while (v >= 0x80) {
    arr.push((v & 0x7f) | 0x80);
    v >>>= 7;
  }
  arr.push(v);
};
const zz = (v) => (v << 1) ^ (v >> 31);
const section = (type, items, enc) => {
  const h = Buffer.alloc(5);
  h.writeUInt8(type, 0);
  h.writeUInt32LE(items.length, 1);
  chunks.push(h);
  for (const it of items) {
    const { cls, extra, flag, pts } = enc(it);
    const a = [cls & 255];
    const ex = Math.max(0, Math.min(65535, Math.round(extra)));
    a.push(ex & 255, ex >> 8, flag);
    varint(a, pts.length);
    let px = 0, pz = 0;
    pts.forEach(([x, z], i) => {
      x = Math.max(-32768, Math.min(32767, x));
      z = Math.max(-32768, Math.min(32767, z));
      if (i === 0) {
        a.push(x & 255, (x >> 8) & 255, z & 255, (z >> 8) & 255);
      } else {
        varint(a, zz(x - px));
        varint(a, zz(z - pz));
      }
      px = x;
      pz = z;
    });
    chunks.push(Buffer.from(a));
  }
};
const BCLS = { house: 1, residential: 1, detached: 1, apartments: 2, industrial: 3, warehouse: 3, commercial: 4, retail: 4, office: 4, church: 5, chapel: 5, cathedral: 5, castle: 6, fort: 6, tower: 7, garage: 8, garages: 8, shed: 8, roof: 8, hotel: 2, school: 4, hospital: 4, greenhouse: 9 };
const bl = buildings.flat();
section(1, bl, (b) => {
  const flat = b.roof === 'flat' || ['industrial', 'warehouse', 'commercial', 'retail', 'greenhouse'].includes(b.cls) ? 1 : 0;
  return { cls: BCLS[b.cls] || 0, extra: (b.h || 0) * 10, flag: flat, pts: b.ring };
});
section(2, roadsKept, (r) => ({ cls: r.cls, extra: 0, flag: r.bridge ? 1 : 0, pts: r.pts }));
section(3, landKept, (l) => ({ cls: l.cls, extra: 0, flag: 0, pts: l.ring }));
section(4, water.flat(), (w) => ({ cls: w.cls, extra: 0, flag: w.line ? 1 : 0, pts: w.pts }));
section(5, infra.flat(), (w) => ({ cls: w.cls, extra: 0, flag: w.line ? 1 : 0, pts: w.pts }));
const buf = Buffer.concat(chunks);
fs.writeFileSync(path.join(OUT, 'osm.bin'), buf);
const stats = { release: RELEASE, buildings: bl.length, roads: roadsKept.length, land: landKept.length, water: water.flat().length, infra: infra.flat().length, bytes: buf.length };
fs.writeFileSync(path.join(OUT, 'osm.json'), JSON.stringify(stats, null, 1));
log('scritto osm.bin', (buf.length / 1024).toFixed(0), 'KB', stats);
