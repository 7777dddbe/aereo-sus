// Dati reali del Garda Nord (vedi tools/garda/build-data.mjs): altitudini Copernicus 30 m,
// copertura del suolo ESA WorldCover 10 m, immagine Sentinel-2, edifici e anello di montagne lontane.
// I file sono incorporati nel bundle (funziona anche aprendo index.html dal disco).

import meta from './garda/meta.json';
import heightUrl from './garda/height.png';
import landcoverUrl from './garda/landcover.png';
import satelliteUrl from './garda/satellite.jpg';
import farUrl from './garda/far.png';
import buildingsBin from './garda/buildings.bin';
import chmUrl from './garda/chm.png';

export const GARDA = {
  meta,
  heights: null, // Float32Array NH*NH, metri sopra il lago (y del mondo)
  lc: null, // Uint8Array NLC*NLC*4: R classe ESA, G alberi 0-255, B acqua 0-255
  far: null, // Float32Array NFAR*NFAR
  farClass: null, // Uint8Array NFAR*NFAR
  satellite: null, // HTMLImageElement
  landcoverImage: null,
  buildings: null, // { count, data: Int16/Uint8 views }
  chm: null, // { data RGBA (R = altezza chioma * 4, G = copertura) } sulla zona meta.chm
  ready: false,
};

// decodifica un PNG senza alcuna conversione di colore (i valori sono dati, non colori)
// (niente fetch: negli Artifact la CSP blocca fetch anche sui data: URI)
function dataUrlToBlob(url) {
  const comma = url.indexOf(',');
  const mime = url.slice(5, url.indexOf(';'));
  const bin = atob(url.slice(comma + 1));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

async function pixels(url) {
  const blob = dataUrlToBlob(url);
  let w, h, data;
  try {
    const bmp = await createImageBitmap(blob, { colorSpaceConversion: 'none', premultiplyAlpha: 'none' });
    w = bmp.width;
    h = bmp.height;
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.drawImage(bmp, 0, 0);
    data = g.getImageData(0, 0, w, h).data;
    bmp.close && bmp.close();
  } catch (e) {
    const img = await image(url);
    w = img.width;
    h = img.height;
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.drawImage(img, 0, 0);
    data = g.getImageData(0, 0, w, h).data;
  }
  return { w, h, data };
}

function image(url) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = url;
  });
}

export async function loadGarda() {
  if (GARDA.ready) return GARDA;
  const M = meta;
  const [hp, lp, fp, sat] = await Promise.all([pixels(heightUrl), pixels(landcoverUrl), pixels(farUrl), image(satelliteUrl)]);
  const dec = (r, g) => (r * 256 + g) / M.heightScale - M.heightOffset;
  GARDA.heights = new Float32Array(hp.w * hp.h);
  for (let k = 0; k < GARDA.heights.length; k++) GARDA.heights[k] = dec(hp.data[k * 4], hp.data[k * 4 + 1]);
  GARDA.lc = lp.data;
  GARDA.far = new Float32Array(fp.w * fp.h);
  GARDA.farClass = new Uint8Array(fp.w * fp.h);
  for (let k = 0; k < GARDA.far.length; k++) {
    GARDA.far[k] = dec(fp.data[k * 4], fp.data[k * 4 + 1]);
    GARDA.farClass[k] = fp.data[k * 4 + 2];
  }
  GARDA.satellite = sat;
  if (M.chm) {
    const cp = await pixels(chmUrl);
    GARDA.chm = { data: cp.data, N: cp.w };
  }
  GARDA.landcoverImage = await image(landcoverUrl);
  const b = buildingsBin;
  const n = Math.floor(b.byteLength / 8);
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  const list = new Array(n);
  for (let i = 0; i < n; i++) {
    const o = i * 8;
    list[i] = { x: dv.getInt16(o, true) * 0.5, z: dv.getInt16(o + 2, true) * 0.5, w: dv.getUint8(o + 4) / 4, d: dv.getUint8(o + 5) / 4, floors: dv.getUint8(o + 6), r: dv.getUint8(o + 7) / 255 };
  }
  GARDA.buildings = list;
  GARDA.ready = true;
  return GARDA;
}

// campionamenti (coordinate del mondo: x est, z sud)
export function gardaHeight(x, z) {
  const M = meta, N = M.NH, H = GARDA.heights;
  const s = (2 * M.half) / (N - 1);
  const fx = (x + M.half) / s, fz = (z + M.half) / s;
  const i = Math.max(0, Math.min(N - 2, Math.floor(fx))), j = Math.max(0, Math.min(N - 2, Math.floor(fz)));
  const tx = Math.min(1, Math.max(0, fx - i)), tz = Math.min(1, Math.max(0, fz - j));
  const a = H[j * N + i], b = H[j * N + i + 1], c = H[(j + 1) * N + i], d = H[(j + 1) * N + i + 1];
  return (a * (1 - tx) + b * tx) * (1 - tz) + (c * (1 - tx) + d * tx) * tz;
}
export function farHeight(x, z) {
  const M = meta, N = M.NFAR, H = GARDA.far;
  const s = (2 * M.farHalf) / (N - 1);
  const fx = (x + M.farHalf) / s, fz = (z + M.farHalf) / s;
  const i = Math.max(0, Math.min(N - 2, Math.floor(fx))), j = Math.max(0, Math.min(N - 2, Math.floor(fz)));
  const tx = Math.min(1, Math.max(0, fx - i)), tz = Math.min(1, Math.max(0, fz - j));
  const a = H[j * N + i], b = H[j * N + i + 1], c = H[(j + 1) * N + i], d = H[(j + 1) * N + i + 1];
  return (a * (1 - tx) + b * tx) * (1 - tz) + (c * (1 - tx) + d * tx) * tz;
}
// canale della copertura del suolo (bilineare): 1 = alberi, 2 = acqua
export function landcover(x, z, ch) {
  const M = meta, N = M.NLC, L = GARDA.lc;
  const s = (2 * M.half) / N;
  const fx = (x + M.half) / s - 0.5, fz = (z + M.half) / s - 0.5;
  const i = Math.max(0, Math.min(N - 2, Math.floor(fx))), j = Math.max(0, Math.min(N - 2, Math.floor(fz)));
  const tx = Math.min(1, Math.max(0, fx - i)), tz = Math.min(1, Math.max(0, fz - j));
  const g = (a, b) => L[((j + b) * N + i + a) * 4 + ch];
  return ((g(0, 0) * (1 - tx) + g(1, 0) * tx) * (1 - tz) + (g(0, 1) * (1 - tx) + g(1, 1) * tx) * tz) / 255;
}
export function landClass(x, z) {
  const M = meta, N = M.NLC;
  const s = (2 * M.half) / N;
  const i = Math.max(0, Math.min(N - 1, Math.floor((x + M.half) / s))), j = Math.max(0, Math.min(N - 1, Math.floor((z + M.half) / s)));
  return GARDA.lc[(j * N + i) * 4];
}
