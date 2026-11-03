// Altezza della vegetazione a 1 m (Meta + World Resources Institute, CC BY 4.0) nella zona ad alta
// risoluzione (Riva - Torbole - Arco - Brione). Uscita: src/world/garda/chm.png a ~3,9 m/pixel:
//   R = altezza media delle chiome (passi di 0,25 m), G = copertura arborea (0-255).
// Uso: NODE_USE_ENV_PROXY=1 node tools/garda/build-chm.mjs

import fs from 'fs';
import path from 'path';
import { fromUrl } from 'geotiff';
import proj4 from 'proj4';
import { PNG } from 'pngjs';

const OUT = path.resolve('src/world/garda');
const CACHE = path.resolve('tools/garda/.cache');
const meta = JSON.parse(fs.readFileSync(path.join(OUT, 'meta.json'), 'utf8'));
const { E0, N0 } = meta.utm;
const toLL = proj4('+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs', 'EPSG:4326');
const R = 6378137;
const merc = (lon, lat) => [(lon * Math.PI * R) / 180, Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) * R];
const w2merc = (x, z) => {
  const [lon, lat] = toLL.forward([E0 + x, N0 - z]);
  return merc(lon, lat);
};
const ZONE = { x0: -1700, z0: -11500, size: 7800 };
const N = 2000;
const URLS = ['120221331'].map((t) => `https://dataforgood-fb-data.s3.amazonaws.com/forests/v1/alsgedi_global_v6_float/chm/${t}.tif`);

const tif = await fromUrl(URLS[0]);
const img = await tif.getImage();
const [bx0, by0, bx1, by1] = img.getBoundingBox();
const W = img.getWidth(), H = img.getHeight();
const rx = (bx1 - bx0) / W, ry = (by1 - by0) / H;
// angoli della zona in Mercatore (la griglia UTM è ruotata di pochi gradi rispetto al Mercatore)
const corners = [[ZONE.x0, ZONE.z0], [ZONE.x0 + ZONE.size, ZONE.z0], [ZONE.x0, ZONE.z0 + ZONE.size], [ZONE.x0 + ZONE.size, ZONE.z0 + ZONE.size]].map(([x, z]) => w2merc(x, z));
const mxs = corners.map((c) => c[0]), mys = corners.map((c) => c[1]);
const c0 = Math.max(0, Math.floor((Math.min(...mxs) - bx0) / rx) - 4), c1 = Math.min(W, Math.ceil((Math.max(...mxs) - bx0) / rx) + 4);
const r0 = Math.max(0, Math.floor((by1 - Math.max(...mys)) / ry) - 4), r1 = Math.min(H, Math.ceil((by1 - Math.min(...mys)) / ry) + 4);
console.log('finestra', c0, r0, c1, r1, 'px', (c1 - c0) * (r1 - r0) / 1e6, 'M');
const cf = path.join(CACHE, 'chm.u8');
let data;
if (fs.existsSync(cf)) data = new Uint8Array(fs.readFileSync(cf));
else {
  data = new Uint8Array((c1 - c0) * (r1 - r0));
  const TILE = 1024;
  for (let r = r0; r < r1; r += TILE) {
    for (let c = c0; c < c1; c += TILE) {
      const ce = Math.min(c + TILE, c1), re = Math.min(r + TILE, r1);
      let rast = null;
      for (let tries = 0; tries < 8 && !rast; tries++) {
        try {
          rast = await img.readRasters({ window: [c, r, ce, re], interleave: false });
        } catch (e) {
          console.log('rete: riprovo (', tries + 1, ')', String(e.cause?.code || e.message).slice(0, 60));
          await new Promise((res) => setTimeout(res, 1500 * (tries + 1)));
        }
      }
      if (!rast) throw new Error('lettura fallita');
      const w = ce - c;
      for (let j = 0; j < re - r; j++) data.set(rast[0].subarray(j * w, (j + 1) * w), (r - r0 + j) * (c1 - c0) + (c - c0));
    }
    console.log('riga', r, '/', r1);
  }
  fs.writeFileSync(cf, data);
}
const sw = c1 - c0;
const sample = (mx, my) => {
  const i = Math.floor((mx - bx0) / rx) - c0, j = Math.floor((by1 - my) / ry) - r0;
  if (i < 0 || j < 0 || i >= sw || j >= r1 - r0) return -1;
  return data[j * sw + i];
};
const rgb = new Uint8Array(N * N * 3);
const cell = ZONE.size / N;
let treeCells = 0;
for (let j = 0; j < N; j++) {
  for (let i = 0; i < N; i++) {
    let sum = 0, n = 0, cov = 0, tot = 0;
    // 3 x 3 campioni dentro la cella da 3,9 m
    for (let b = 0; b < 3; b++) for (let a = 0; a < 3; a++) {
      const x = ZONE.x0 + (i + (a + 0.5) / 3) * cell, z = ZONE.z0 + (j + (b + 0.5) / 3) * cell;
      const [mx, my] = w2merc(x, z);
      const v = sample(mx, my);
      if (v < 0) continue;
      tot++;
      if (v >= 2) { cov++; sum += v; n++; }
    }
    const k = (j * N + i) * 3;
    const h = n ? sum / n : 0;
    // quantizzato (passi di 2 m e di 0,2 di copertura): il PNG pesa un terzo e all'occhio non cambia nulla
    // un solo canale: 0 = niente albero, altrimenti altezza della chioma (passi di 2 m, R = altezza * 4)
    const tree = tot && cov / tot >= 0.4 && h >= 2.5;
    rgb[k] = tree ? Math.max(24, Math.min(248, Math.round(h / 2) * 8)) : 0;
    rgb[k + 1] = 0;
    if (cov > 3) treeCells++;
  }
}
const png = new PNG({ width: N, height: N, colorType: 0, inputColorType: 0, inputHasAlpha: false });
png.data = Buffer.alloc(N * N * 4);
for (let k = 0; k < N * N; k++) { const v = rgb[k * 3]; png.data[k * 4] = v; png.data[k * 4 + 1] = v; png.data[k * 4 + 2] = v; png.data[k * 4 + 3] = 255; }
fs.writeFileSync(path.join(OUT, 'chm.png'), PNG.sync.write(png, { colorType: 0, inputColorType: 2, inputHasAlpha: false, deflateLevel: 9 }));
meta.chm = { ...ZONE, N, heightScale: 4 };
fs.writeFileSync(path.join(OUT, 'meta.json'), JSON.stringify(meta, null, 1));
console.log('chm.png', (fs.statSync(path.join(OUT, 'chm.png')).size / 1024).toFixed(0), 'KB; celle con alberi', ((treeCells / (N * N)) * 100).toFixed(0) + '%');
