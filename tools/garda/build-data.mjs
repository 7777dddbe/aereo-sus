// Costruisce i dati del mondo "Garda Nord" da fonti reali e aperte:
//   - altitudini: Copernicus DEM GLO-30 (30 m)          s3://copernicus-dem-30m
//   - copertura del suolo: ESA WorldCover 2021 (10 m)   s3://esa-worldcover
//   - immagine satellitare: Sentinel-2 L2A TCI (10 m)    s3://sentinel-cogs
// Uscita in src/world/garda/: altitudini (PNG 16 bit su R+G), copertura del suolo (PNG),
// immagine del terreno (JPG), anello lontano (PNG), edifici (bin) e metadati (JSON).
//
// Uso: NODE_USE_ENV_PROXY=1 node tools/garda/build-data.mjs [--preview]
// Il sistema di riferimento del mondo è UTM 32N centrato su (E0, N0): x = est, z = sud.

import fs from 'fs';
import path from 'path';
import { fromUrl } from 'geotiff';
import proj4 from 'proj4';
import { PNG } from 'pngjs';
import jpeg from 'jpeg-js';

const OUT = path.resolve('src/world/garda');
const CACHE = path.resolve('tools/garda/.cache');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(CACHE, { recursive: true });
const PREVIEW = process.argv.includes('--preview');

const UTM = '+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs';
const LL = 'EPSG:4326';
const toLL = proj4(UTM, LL); // [E,N] -> [lon,lat]
const toUTM = proj4(LL, UTM);

// --- area -------------------------------------------------------------------
const CENTER = { lat: 45.832, lon: 10.838 };
const [cE, cN] = toUTM.forward([CENTER.lon, CENTER.lat]);
const E0 = Math.round(cE / 10) * 10, N0 = Math.round(cN / 10) * 10;
const HALF = 12000; // mondo interno: 24 x 24 km
const FAR_HALF = 40000; // anello lontano: 80 x 80 km
const NH = 1025; // griglia delle altitudini interne (23,4 m)
const NLC = 1200; // griglia della copertura del suolo (20 m)
const NSAT = 2048; // immagine del terreno (11,7 m/pixel)
const NFAR = 257; // anello lontano (312 m)
const LAKE_MSL = 64.5; // livello del Garda nel DEM (m s.l.m.)
const SENTINEL = 'sentinel-s2-l2a-cogs/32/T/PR/2024/7/S2B_32TPR_20240731_0_L2A';
const SUN_S2 = { el: 59.5, az: 149 }; // sole al passaggio del satellite (dal JSON della scena)

const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);
const w2utm = (x, z) => [E0 + x, N0 - z];
const w2ll = (x, z) => toLL.forward(w2utm(x, z)); // [lon, lat]
const ll2w = (lon, lat) => {
  const [e, n] = toUTM.forward([lon, lat]);
  return [e - E0, N0 - n];
};

// --- lettura raster geografici (lat/lon) con finestra ------------------------
async function readLLWindow(url, lon0, lat0, lon1, lat1, imageIndex = 0, cacheName = null) {
  const tif = await fromUrl(url);
  const img = await tif.getImage(imageIndex);
  const base = await tif.getImage(0);
  const [bx0, by0, bx1, by1] = base.getBoundingBox();
  const W = img.getWidth(), H = img.getHeight();
  const rx = (bx1 - bx0) / W, ry = (by1 - by0) / H;
  const c0 = Math.max(0, Math.floor((lon0 - bx0) / rx) - 2), c1 = Math.min(W, Math.ceil((lon1 - bx0) / rx) + 2);
  const r0 = Math.max(0, Math.floor((by1 - lat1) / ry) - 2), r1 = Math.min(H, Math.ceil((by1 - lat0) / ry) + 2);
  let data;
  const cf = cacheName && path.join(CACHE, cacheName);
  if (cf && fs.existsSync(cf)) data = new Float32Array(fs.readFileSync(cf).buffer.slice(0));
  else {
    const r = await img.readRasters({ window: [c0, r0, c1, r1] });
    data = Float32Array.from(r[0]);
    if (cf) fs.writeFileSync(cf, Buffer.from(data.buffer));
  }
  return {
    w: c1 - c0, h: r1 - r0, data,
    lon0: bx0 + c0 * rx, lat1: by1 - r0 * ry, rx, ry,
  };
}
function sampleBil(R, lon, lat, nodata = -9999) {
  const fx = (lon - R.lon0) / R.rx - 0.5, fy = (R.lat1 - lat) / R.ry - 0.5;
  const i = Math.floor(fx), j = Math.floor(fy);
  if (i < 0 || j < 0 || i >= R.w - 1 || j >= R.h - 1) return nodata;
  const tx = fx - i, ty = fy - j;
  const d = R.data, w = R.w;
  const a = d[j * w + i], b = d[j * w + i + 1], c = d[(j + 1) * w + i], e = d[(j + 1) * w + i + 1];
  return (a * (1 - tx) + b * tx) * (1 - ty) + (c * (1 - tx) + e * tx) * ty;
}
function sampleNear(R, lon, lat) {
  const i = Math.floor((lon - R.lon0) / R.rx), j = Math.floor((R.lat1 - lat) / R.ry);
  if (i < 0 || j < 0 || i >= R.w || j >= R.h) return 0;
  return R.data[j * R.w + i];
}

// --- utilità immagini -----------------------------------------------------------
function writePNG(file, w, h, rgb) {
  const png = new PNG({ width: w, height: h, colorType: 2, inputColorType: 2, inputHasAlpha: false });
  png.data = Buffer.from(rgb);
  fs.writeFileSync(file, PNG.sync.write(png, { colorType: 2, inputColorType: 2, inputHasAlpha: false, deflateLevel: 9 }));
}
function writeJPG(file, w, h, rgb, quality = 85) {
  const rgba = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    rgba[i * 4] = rgb[i * 3];
    rgba[i * 4 + 1] = rgb[i * 3 + 1];
    rgba[i * 4 + 2] = rgb[i * 3 + 2];
    rgba[i * 4 + 3] = 255;
  }
  fs.writeFileSync(file, jpeg.encode({ data: rgba, width: w, height: h }, quality).data);
}
const kb = (f) => (fs.statSync(f).size / 1024).toFixed(0) + ' KB';

// ============================================================================
log('centro UTM', E0, N0);
const [lonA, latA] = w2ll(-HALF - 600, HALF + 600);
const [lonB, latB] = w2ll(HALF + 600, -HALF - 600);
const lonMin = Math.min(lonA, lonB, w2ll(-HALF - 600, -HALF - 600)[0]) - 0.005;
const lonMax = Math.max(lonA, lonB, w2ll(HALF + 600, HALF + 600)[0]) + 0.005;
const latMin = Math.min(latA, latB) - 0.005, latMax = Math.max(latA, latB) + 0.005;
log('finestra', lonMin.toFixed(3), latMin.toFixed(3), lonMax.toFixed(3), latMax.toFixed(3));

// --- 1. altitudini interne -----------------------------------------------------
const DEM_URL = (lat, lon) =>
  `https://copernicus-dem-30m.s3.amazonaws.com/Copernicus_DSM_COG_10_N${lat}_00_E0${lon}_00_DEM/Copernicus_DSM_COG_10_N${lat}_00_E0${lon}_00_DEM.tif`;
log('DEM interno…');
const dem = await readLLWindow(DEM_URL(45, 10), lonMin, latMin, lonMax, latMax, 0, 'dem-inner.f32');
log('DEM', dem.w, 'x', dem.h);

// --- 2. copertura del suolo (10 m) -------------------------------------------
const WC_URL = 'https://esa-worldcover.s3.eu-central-1.amazonaws.com/v200/2021/map/ESA_WorldCover_10m_2021_v200_N45E009_Map.tif';
log('WorldCover interno…');
const wc = await readLLWindow(WC_URL, lonMin, latMin, lonMax, latMax, 0, 'wc-inner.f32');
log('WorldCover', wc.w, 'x', wc.h);

// griglia a 10 m del mondo con la classe (serve per acqua, boschi, edifici)
const N10 = 2400, S10 = (2 * HALF) / N10;
const cls10 = new Uint8Array(N10 * N10);
for (let j = 0; j < N10; j++) {
  for (let i = 0; i < N10; i++) {
    const [lon, lat] = w2ll(-HALF + (i + 0.5) * S10, -HALF + (j + 0.5) * S10);
    cls10[j * N10 + i] = sampleNear(wc, lon, lat);
  }
}
log('classi a 10 m pronte');

// componenti d'acqua: il Garda è la più grande; le altre (Ledro, Tenno) sono laghi in quota
const comp = new Int32Array(N10 * N10).fill(-1);
const comps = [];
{
  const stack = new Int32Array(N10 * N10);
  for (let k = 0; k < N10 * N10; k++) {
    if (cls10[k] !== 80 || comp[k] >= 0) continue;
    const id = comps.length;
    let sp = 0, n = 0, i0 = 1e9, i1 = -1, j0 = 1e9, j1 = -1, hs = [];
    stack[sp++] = k;
    comp[k] = id;
    while (sp) {
      const q = stack[--sp];
      n++;
      const i = q % N10, j = (q / N10) | 0;
      i0 = Math.min(i0, i); i1 = Math.max(i1, i); j0 = Math.min(j0, j); j1 = Math.max(j1, j);
      if (n % 7 === 0) {
        const [lon, lat] = w2ll(-HALF + (i + 0.5) * S10, -HALF + (j + 0.5) * S10);
        hs.push(sampleBil(dem, lon, lat));
      }
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const a = i + di, b = j + dj;
        if (a < 0 || b < 0 || a >= N10 || b >= N10) continue;
        const qq = b * N10 + a;
        if (cls10[qq] === 80 && comp[qq] < 0) {
          comp[qq] = id;
          stack[sp++] = qq;
        }
      }
    }
    hs.sort((a, b) => a - b);
    comps.push({ id, n, i0, i1, j0, j1, level: hs.length ? hs[hs.length >> 1] : 0 });
  }
}
comps.sort((a, b) => b.n - a.n);
const garda = comps[0];
log('Garda:', (garda.n * S10 * S10 / 1e6).toFixed(1), 'km², livello', garda.level.toFixed(1));
// laghi veri (non tratti di fiume): abbastanza grandi e compatti
const upper = comps.filter((c) => {
  const bw = c.i1 - c.i0 + 1, bh = c.j1 - c.j0 + 1;
  return c !== garda && c.n * S10 * S10 > 60000 && c.level > LAKE_MSL + 30 && c.n / (bw * bh) > 0.3 && Math.min(bw, bh) * S10 > 150;
});
for (const u of upper) log('lago in quota:', (u.n * S10 * S10 / 1e6).toFixed(2), 'km², livello', u.level.toFixed(1));
const isGarda = (k) => comp[k] === garda.id;

// distanza dalla riva (m) dentro il Garda: trasformata di distanza a due passate (chamfer)
const dist = new Float32Array(N10 * N10);
for (let k = 0; k < N10 * N10; k++) dist[k] = isGarda(k) ? 1e9 : 0;
{
  const D1 = S10, D2 = S10 * Math.SQRT2;
  for (let j = 0; j < N10; j++)
    for (let i = 0; i < N10; i++) {
      const k = j * N10 + i;
      if (!dist[k]) continue;
      let d = dist[k];
      if (i > 0) d = Math.min(d, dist[k - 1] + D1);
      if (j > 0) d = Math.min(d, dist[k - N10] + D1);
      if (i > 0 && j > 0) d = Math.min(d, dist[k - N10 - 1] + D2);
      if (i < N10 - 1 && j > 0) d = Math.min(d, dist[k - N10 + 1] + D2);
      dist[k] = d;
    }
  for (let j = N10 - 1; j >= 0; j--)
    for (let i = N10 - 1; i >= 0; i--) {
      const k = j * N10 + i;
      if (!dist[k]) continue;
      let d = dist[k];
      if (i < N10 - 1) d = Math.min(d, dist[k + 1] + D1);
      if (j < N10 - 1) d = Math.min(d, dist[k + N10] + D1);
      if (i < N10 - 1 && j < N10 - 1) d = Math.min(d, dist[k + N10 + 1] + D2);
      if (i > 0 && j < N10 - 1) d = Math.min(d, dist[k + N10 - 1] + D2);
      dist[k] = d;
    }
}
const at10 = (x, z) => {
  const i = Math.max(0, Math.min(N10 - 1, Math.floor((x + HALF) / S10)));
  const j = Math.max(0, Math.min(N10 - 1, Math.floor((z + HALF) / S10)));
  return j * N10 + i;
};
// frazione di Garda e profondità media attorno a un punto (raggio r in celle da 10 m)
function lakeAround(x, z, r) {
  let w = 0, n = 0, dsum = 0;
  const ci = Math.floor((x + HALF) / S10), cj = Math.floor((z + HALF) / S10);
  for (let dj = -r; dj <= r; dj++)
    for (let di = -r; di <= r; di++) {
      const i = ci + di, j = cj + dj;
      if (i < 0 || j < 0 || i >= N10 || j >= N10) continue;
      const k = j * N10 + i;
      n++;
      if (isGarda(k)) {
        w++;
        dsum += dist[k];
      }
    }
  return { frac: w / n, d: w ? dsum / w : 0 };
}

const upperIds = new Map(upper.map((u) => [u.id, u]));
function upperAround(x, z) {
  const ci = Math.floor((x + HALF) / S10), cj = Math.floor((z + HALF) / S10);
  let n = 0, w = 0, lake = null;
  for (let dj = -1; dj <= 1; dj++)
    for (let di = -1; di <= 1; di++) {
      const i = ci + di, j = cj + dj;
      if (i < 0 || j < 0 || i >= N10 || j >= N10) continue;
      n++;
      const u = upperIds.get(comp[j * N10 + i]);
      if (u) {
        w++;
        lake = u;
      }
    }
  return lake ? { level: lake.level, frac: w / n } : null;
}
// altitudini del mondo: y = quota - livello del lago; sott'acqua un fondale che scende ripido
const S_H = (2 * HALF) / (NH - 1);
const heights = new Float32Array(NH * NH);
for (let j = 0; j < NH; j++) {
  for (let i = 0; i < NH; i++) {
    const x = -HALF + i * S_H, z = -HALF + j * S_H;
    const [lon, lat] = w2ll(x, z);
    let h = sampleBil(dem, lon, lat) - LAKE_MSL;
    const L = lakeAround(x, z, 1);
    if (L.frac >= 0.5) {
      const depth = Math.min(3 + L.d * 0.55, 140);
      h = -depth;
    } else {
      // la terra non scende mai sotto il pelo dell'acqua (spiagge e moli a 0,3-1 m)
      h = Math.max(h, 0.35 + (1 - L.frac) * 0.4);
      // laghi in quota: fondale qualche metro sotto la superficie
      const up = upperAround(x, z);
      if (up) h = Math.min(h, up.level - LAKE_MSL - (up.frac >= 0.5 ? 6 : -0.4));
    }
    heights[j * NH + i] = h;
  }
}
log('altitudini interne: min', heights.reduce((a, b) => Math.min(a, b), 1e9).toFixed(1), 'max', heights.reduce((a, b) => Math.max(a, b), -1e9).toFixed(1));

// --- 3. pista: tratto più piano della piana del Sarca, lontano da case e acqua --------------
// ricerca in un rettangolo tra Riva, Arco e Torbole
function rwScore(cx, cz, ang, len) {
  const dx = Math.sin(ang), dz = -Math.cos(ang);
  const nx = -dz, nz = dx;
  let hs = [], built = 0, water = 0, n = 0;
  for (let a = -len / 2 - 150; a <= len / 2 + 150; a += 30)
    for (let c = -60; c <= 60; c += 30) {
      const x = cx + dx * a + nx * c, z = cz + dz * a + nz * c;
      const [lon, lat] = w2ll(x, z);
      hs.push(sampleBil(dem, lon, lat));
      const cl = cls10[at10(x, z)];
      if (cl === 50) built++;
      if (cl === 80) water++;
      n++;
    }
  const mean = hs.reduce((s, v) => s + v, 0) / hs.length;
  const sd = Math.sqrt(hs.reduce((s, v) => s + (v - mean) ** 2, 0) / hs.length);
  return { score: sd * 1.0 + (built / n) * 60 + water * 50, mean, sd, built: built / n };
}
const [rwSearchX0, rwSearchZ0] = ll2w(10.835, 45.915);
const [rwSearchX1, rwSearchZ1] = ll2w(10.885, 45.888);
let best = null;
const RW_LEN = 1600;
for (let z = rwSearchZ0; z <= rwSearchZ1; z += 90)
  for (let x = rwSearchX0; x <= rwSearchX1; x += 90)
    for (let a = -30; a <= 40; a += 5) {
      const s = rwScore(x, z, (a * Math.PI) / 180, RW_LEN);
      if (!best || s.score < best.score) best = { ...s, x, z, ang: (a * Math.PI) / 180 };
    }
log('pista:', best.x.toFixed(0), best.z.toFixed(0), 'rotta', ((best.ang * 180) / Math.PI).toFixed(0), 'quota', best.mean.toFixed(1), 'sd', best.sd.toFixed(2), 'case', best.built.toFixed(2));

// --- 4. copertura del suolo a 20 m: R = classe dominante, G = alberi, B = acqua (Garda e laghi) ----
const S_LC = (2 * HALF) / NLC;
const lc = new Uint8Array(NLC * NLC * 3);
for (let j = 0; j < NLC; j++) {
  for (let i = 0; i < NLC; i++) {
    const counts = new Map();
    let trees = 0, water = 0;
    for (let b = 0; b < 2; b++)
      for (let a = 0; a < 2; a++) {
        const k = (j * 2 + b) * N10 + (i * 2 + a);
        const c = cls10[k];
        counts.set(c, (counts.get(c) || 0) + 1);
        if (c === 10) trees += 1;
        else if (c === 20) trees += 0.45;
        if (c === 80) water += 1;
      }
    let dom = 0, dn = -1;
    for (const [c, n] of counts) if (n > dn) { dom = c; dn = n; }
    const o = (j * NLC + i) * 3;
    lc[o] = dom;
    lc[o + 1] = Math.round((trees / 4) * 255);
    lc[o + 2] = Math.round((water / 4) * 255);
  }
}

// --- 5. edifici dai pixel "costruito" -------------------------------------------------------
function hash(i) {
  let x = (i * 2654435761) >>> 0;
  x ^= x >>> 15; x = Math.imul(x, 0x2c1b3c6d) >>> 0; x ^= x >>> 12; x = Math.imul(x, 0x297a2d39) >>> 0; x ^= x >>> 15;
  return (x >>> 0) / 4294967296;
}
const bld = [];
for (let j = 1; j < N10 - 1; j++) {
  for (let i = 1; i < N10 - 1; i++) {
    const k = j * N10 + i;
    if (cls10[k] !== 50) continue;
    // densità: centri storici fitti (molti vicini costruiti), periferie più rade
    let nb = 0;
    for (let b = -2; b <= 2; b++) for (let a = -2; a <= 2; a++) if (cls10[(j + b) * N10 + i + a] === 50) nb++;
    const dens = 0.035 + 0.075 * (nb / 25);
    if (hash(k) > dens) continue;
    const x = -HALF + (i + hash(k * 3 + 1)) * S10, z = -HALF + (j + hash(k * 7 + 2)) * S10;
    const [lon, lat] = w2ll(x, z);
    const g = sampleBil(dem, lon, lat) - LAKE_MSL;
    if (g < 0.5) continue;
    const big = hash(k * 11 + 5);
    const w = 7 + hash(k * 13 + 3) * 7 + (big > 0.93 ? 12 : 0);
    const d = 7 + hash(k * 17 + 4) * 6 + (big > 0.93 ? 8 : 0);
    const floors = nb > 18 ? 2 + Math.floor(hash(k * 19 + 6) * 3) : 1 + Math.floor(hash(k * 19 + 6) * 2.4);
    bld.push([x, z, w, d, floors, hash(k * 23 + 7)]);
  }
}
log('edifici:', bld.length);
{
  // binario: per edificio x,z (int16, unità 0,5 m), w,d (uint8, 0,25 m), piani (uint8), rotazione/colore (uint8)
  const buf = Buffer.alloc(bld.length * 8);
  bld.forEach(([x, z, w, d, f, r], n) => {
    buf.writeInt16LE(Math.round(x / 0.5), n * 8);
    buf.writeInt16LE(Math.round(z / 0.5), n * 8 + 2);
    buf.writeUInt8(Math.min(255, Math.round(w * 4)), n * 8 + 4);
    buf.writeUInt8(Math.min(255, Math.round(d * 4)), n * 8 + 5);
    buf.writeUInt8(f, n * 8 + 6);
    buf.writeUInt8(Math.round(r * 255), n * 8 + 7);
  });
  fs.writeFileSync(path.join(OUT, 'buildings.bin'), buf);
}

// --- 6. immagine satellitare ----------------------------------------------------------------
log('Sentinel-2…');
const tciUrl = `https://sentinel-cogs.s3.us-west-2.amazonaws.com/${SENTINEL}/TCI.tif`;
let tci;
{
  const cf = path.join(CACHE, 'tci.bin');
  const tif = await fromUrl(tciUrl);
  const img = await tif.getImage(0);
  const [bx0, by0, bx1, by1] = img.getBoundingBox();
  const res = (bx1 - bx0) / img.getWidth();
  const c0 = Math.floor((E0 - HALF - bx0) / res) - 4, r0 = Math.floor((by1 - (N0 + HALF)) / res) - 4;
  const n = Math.round((2 * HALF) / res) + 8;
  let data;
  if (fs.existsSync(cf)) data = fs.readFileSync(cf);
  else {
    const r = await img.readRasters({ window: [c0, r0, c0 + n, r0 + n], interleave: true });
    data = Buffer.from(r.buffer, r.byteOffset, r.byteLength);
    fs.writeFileSync(cf, data);
  }
  tci = { data, n, e0: bx0 + c0 * res, n1: by1 - r0 * res, res };
}
log('TCI', tci.n);
const sat = new Uint8Array(NSAT * NSAT * 3);
{
  const S = (2 * HALF) / NSAT;
  // direzione del sole del satellite (per togliere le ombre già presenti nella foto)
  const el = (SUN_S2.el * Math.PI) / 180, az = (SUN_S2.az * Math.PI) / 180;
  const sx = Math.cos(el) * Math.sin(az), sy = Math.sin(el), sz = -Math.cos(el) * Math.cos(az);
  const flat = sy;
  const hAt = (x, z) => {
    const fx = (x + HALF) / S_H, fz = (z + HALF) / S_H;
    const i = Math.max(0, Math.min(NH - 2, Math.floor(fx))), j = Math.max(0, Math.min(NH - 2, Math.floor(fz)));
    const tx = fx - i, tz = fz - j;
    const a = heights[j * NH + i], b = heights[j * NH + i + 1], c = heights[(j + 1) * NH + i], d = heights[(j + 1) * NH + i + 1];
    return (a * (1 - tx) + b * tx) * (1 - tz) + (c * (1 - tx) + d * tx) * tz;
  };
  for (let j = 0; j < NSAT; j++) {
    for (let i = 0; i < NSAT; i++) {
      const x = -HALF + (i + 0.5) * S, z = -HALF + (j + 0.5) * S;
      // campionamento bilineare della TCI (UTM nativo)
      const fx = (E0 + x - tci.e0) / tci.res - 0.5, fy = (tci.n1 - (N0 - z)) / tci.res - 0.5;
      const ii = Math.floor(fx), jj = Math.floor(fy), tx = fx - ii, ty = fy - jj;
      const rgb = [0, 0, 0];
      for (let c = 0; c < 3; c++) {
        const p = (a, b) => tci.data[((jj + b) * tci.n + (ii + a)) * 3 + c];
        rgb[c] = (p(0, 0) * (1 - tx) + p(1, 0) * tx) * (1 - ty) + (p(0, 1) * (1 - tx) + p(1, 1) * tx) * ty;
      }
      // normale del terreno e illuminazione al momento della foto
      const e = 20;
      const hx = hAt(x + e, z) - hAt(x - e, z), hz = hAt(x, z + e) - hAt(x, z - e);
      const nl = Math.hypot(hx, 2 * e, hz);
      const ndl = Math.max(0, (-hx * sx + 2 * e * sy - hz * sz) / nl);
      const shade = (0.38 + 0.62 * ndl) / (0.38 + 0.62 * flat);
      const k = Math.min(1.35, Math.max(0.75, Math.pow(1 / shade, 0.6)));
      // da sRGB a lineare, correzione d'ombra, poi di nuovo sRGB con un leggero ritocco
      const o = (j * NSAT + i) * 3;
      for (let c = 0; c < 3; c++) {
        let v = Math.pow(rgb[c] / 255, 2.2) * k * 1.05;
        v = Math.pow(Math.min(1, v), 1 / 2.2);
        sat[o + c] = Math.max(0, Math.min(255, Math.round(v * 255)));
      }
    }
  }
}

// --- 7. anello lontano (altitudini e colori dalla copertura del suolo) -----------------------
log('anello lontano…');
const farLL = [];
for (let j = 0; j < NFAR; j++)
  for (let i = 0; i < NFAR; i++) {
    const S = (2 * FAR_HALF) / (NFAR - 1);
    farLL.push(w2ll(-FAR_HALF + i * S, -FAR_HALF + j * S));
  }
let fl0 = 99, fl1 = -99, fa0 = 99, fa1 = -99;
for (const [lon, lat] of farLL) { fl0 = Math.min(fl0, lon); fl1 = Math.max(fl1, lon); fa0 = Math.min(fa0, lat); fa1 = Math.max(fa1, lat); }
const farDem = [];
for (const lat of [45, 46])
  for (const lon of [10, 11]) {
    const r = await readLLWindow(DEM_URL(lat, lon), Math.max(fl0, lon), Math.max(fa0, lat), Math.min(fl1, lon + 1), Math.min(fa1, lat + 1), 2, `dem-far-${lat}-${lon}.f32`);
    farDem.push(r);
  }
const wcFarTif = await fromUrl(WC_URL);
const nImg = await wcFarTif.getImageCount();
let wcIdx = 0;
for (let k = 0; k < nImg; k++) {
  const im = await wcFarTif.getImage(k);
  if (im.getWidth() <= 9000) { wcIdx = k; break; }
}
const wcFar = await readLLWindow(WC_URL, fl0, fa0, fl1, fa1, wcIdx, 'wc-far.f32');
const far = new Uint8Array(NFAR * NFAR * 3);
const farCls = new Uint8Array(NFAR * NFAR);
for (let k = 0; k < NFAR * NFAR; k++) {
  const [lon, lat] = farLL[k];
  let h = -9999;
  for (const r of farDem) {
    const v = sampleBil(r, lon, lat);
    if (v > -9000) { h = v; break; }
  }
  if (h < -9000) h = 0;
  const cl = sampleNear(wcFar, lon, lat);
  if (cl === 80 && h < LAKE_MSL + 0.6) h = LAKE_MSL - 40; // Garda a sud: fondale sotto il pelo dell'acqua
  const v = Math.max(0, Math.round((h - LAKE_MSL + 300) * 4));
  far[k * 3] = v >> 8;
  far[k * 3 + 1] = v & 255;
  far[k * 3 + 2] = sampleNear(wcFar, lon, lat);
  farCls[k] = far[k * 3 + 2];
}

// --- 8. scrittura ---------------------------------------------------------------------------
{
  const rgb = new Uint8Array(NH * NH * 3);
  for (let k = 0; k < NH * NH; k++) {
    const v = Math.max(0, Math.min(65535, Math.round((heights[k] + 300) * 4)));
    rgb[k * 3] = v >> 8;
    rgb[k * 3 + 1] = v & 255;
    rgb[k * 3 + 2] = 0;
  }
  writePNG(path.join(OUT, 'height.png'), NH, NH, rgb);
}
writePNG(path.join(OUT, 'landcover.png'), NLC, NLC, lc);
writeJPG(path.join(OUT, 'satellite.jpg'), NSAT, NSAT, sat, 84);
writePNG(path.join(OUT, 'far.png'), NFAR, NFAR, far);

// lato del piazzale: quello più piano
function sideSd(sgn) {
  const dx = Math.sin(best.ang), dz = -Math.cos(best.ang), nx = -dz, nz = dx;
  const hs = [];
  let built = 0;
  for (let a = -400; a <= 400; a += 40)
    for (let c = 90; c <= 260; c += 30) {
      const x = best.x + dx * a + nx * c * sgn, z = best.z + dz * a + nz * c * sgn;
      const [lon, lat] = w2ll(x, z);
      hs.push(sampleBil(dem, lon, lat));
      if (cls10[at10(x, z)] === 50) built++;
    }
  const mean = hs.reduce((s, v) => s + v, 0) / hs.length;
  return Math.sqrt(hs.reduce((s, v) => s + (v - mean) ** 2, 0) / hs.length) + built * 0.5;
}
const apronSide = sideSd(1) <= sideSd(-1) ? 1 : -1;
log('piazzale sul lato', apronSide);

// incendi: nel punto più boscoso vicino a luoghi veri, su versanti (non in cima, non in paese)
function forestFrac(x, z, r) {
  let t = 0, n = 0, b = 0;
  for (let dz = -r; dz <= r; dz += 20)
    for (let dx = -r; dx <= r; dx += 20) {
      const c = cls10[at10(x + dx, z + dz)];
      n++;
      if (c === 10) t++;
      if (c === 50 || c === 80) b++;
    }
  return (t - b * 3) / n;
}
function placeFire(name, lon, lat, radius) {
  const [cx, cz] = ll2w(lon, lat);
  let bestF = null;
  for (let dz = -radius; dz <= radius; dz += 60)
    for (let dx = -radius; dx <= radius; dx += 60) {
      const x = cx + dx, z = cz + dz;
      const [lo, la] = w2ll(x, z);
      const h = sampleBil(dem, lo, la) - LAKE_MSL;
      if (h < 60 || h > 1100) continue;
      const f = forestFrac(x, z, 260) - Math.hypot(dx, dz) / radius * 0.15;
      if (!bestF || f > bestF.f) bestF = { x, z, f };
    }
  log('incendio', name, bestF.x.toFixed(0), bestF.z.toFixed(0), 'bosco', bestF.f.toFixed(2));
  return { x: Math.round(bestF.x), z: Math.round(bestF.z), size: 768, name };
}
const fireZones = [
  placeFire('Monte Brione', 10.8725, 45.8875, 500),
  placeFire('Sopra Limone', 10.7800, 45.8200, 900),
  placeFire('Monte Baldo — Navene', 10.8350, 45.7930, 900),
  placeFire('Ponale — Pregasina', 10.8150, 45.8580, 800),
];

const P = (lon, lat) => {
  const [x, z] = ll2w(lon, lat);
  return { x: Math.round(x), z: Math.round(z) };
};
// asse del lago a nord: da Malcesine a Riva
const m = P(10.8095, 45.7642), r = P(10.8419, 45.8835);
const lakeHdg = Math.atan2(r.x - m.x, -(r.z - m.z));
const cellToW = (i, j) => [-HALF + (i + 0.5) * S10, -HALF + (j + 0.5) * S10];
const meta = {
  source: 'Copernicus DEM GLO-30, ESA WorldCover 2021 v200, Sentinel-2 L2A ' + SENTINEL.split('/').pop(),
  utm: { zone: 32, E0, N0 },
  half: HALF, farHalf: FAR_HALF, heightScale: 4, heightOffset: 300, NH, NLC, NFAR, lakeMSL: LAKE_MSL,
  lakeBox: (() => {
    const [x0, z0] = cellToW(garda.i0, garda.j0), [x1, z1] = cellToW(garda.i1, garda.j1);
    return { x0: Math.round(x0 - 200), z0: Math.round(z0 - 200), x1: Math.round(x1 + 200), z1: Math.round(z1 + 200) };
  })(),
  lakeHeading: lakeHdg,
  upperLakes: upper.map((u) => {
    const [x0, z0] = cellToW(u.i0, u.j0), [x1, z1] = cellToW(u.i1, u.j1);
    return { level: +(u.level - LAKE_MSL).toFixed(2), x0: Math.round(x0 - 30), z0: Math.round(z0 - 30), x1: Math.round(x1 + 30), z1: Math.round(z1 + 30) };
  }),
  runway: { x: Math.round(best.x), z: Math.round(best.z), heading: best.ang, len: RW_LEN, elev: +(best.mean - LAKE_MSL).toFixed(1), apronSide },
  fireZones,
  places: {
    'Riva del Garda': P(10.8417, 45.8856), Torbole: P(10.8745, 45.8710), Nago: P(10.8912, 45.8770), Arco: P(10.8860, 45.9187),
    Limone: P(10.7920, 45.8130), Malcesine: P(10.8090, 45.7630), Navene: P(10.8170, 45.7900), Pregasina: P(10.8170, 45.8510),
    'Monte Brione': P(10.8730, 45.8880), 'Monte Altissimo': P(10.8868, 45.8061), 'Lago di Ledro': P(10.7600, 45.8760),
    Campione: P(10.7520, 45.7570),
  },
  buildings: bld.length,
};
fs.writeFileSync(path.join(OUT, 'meta.json'), JSON.stringify(meta, null, 1));
for (const f of ['height.png', 'landcover.png', 'satellite.jpg', 'far.png', 'buildings.bin', 'meta.json']) log(f, kb(path.join(OUT, f)));

if (PREVIEW) {
  // anteprime per il controllo a occhio
  const pv = new Uint8Array(NLC * NLC * 3);
  const col = { 10: [20, 90, 30], 20: [120, 140, 50], 30: [170, 190, 90], 40: [220, 200, 90], 50: [200, 40, 40], 60: [160, 150, 140], 70: [250, 250, 250], 80: [30, 80, 200], 90: [60, 160, 160], 95: [0, 120, 90], 100: [200, 220, 160] };
  for (let k = 0; k < NLC * NLC; k++) pv.set(col[lc[k * 3]] || [0, 0, 0], k * 3);
  writePNG(path.join(CACHE, 'preview-lc.png'), NLC, NLC, pv);
  const hs = new Uint8Array(NH * NH * 3);
  for (let k = 0; k < NH * NH; k++) {
    const v = Math.max(0, Math.min(255, (heights[k] + 30) / 9));
    hs[k * 3] = hs[k * 3 + 1] = hs[k * 3 + 2] = heights[k] < 0 ? 0 : v;
    if (heights[k] < 0) hs[k * 3 + 2] = 120;
  }
  writePNG(path.join(CACHE, 'preview-h.png'), NH, NH, hs);
}
log('fatto');
