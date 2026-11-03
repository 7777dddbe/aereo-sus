// Strato di dettaglio disegnato sul terreno a partire dai dati reali (OSM/Overture): strade e
// ferrovie, campi (vigneti a filari, frutteti e uliveti a punti), spiagge di ghiaia, parcheggi,
// zone industriali, campi sportivi, il Sarca e i torrenti. Due livelli: tutto il mondo e una zona ad
// alta risoluzione su Riva, Torbole, Nago e Arco. Produce anche una maschera per non piantare
// alberi su strade, case e acqua, e per mettere gli ulivi negli uliveti.

import * as THREE from 'three';
import { OSM } from './osm.js';
import { WORLD } from './terrain.js';
import { GARDA } from './garda.js';

// larghezza (m) e colori per classe di strada
const ROADS = {
  1: [14, '#4c4e50'], 2: [11, '#505254'], 3: [9, '#535557'], 4: [8, '#56585a'], 5: [7, '#595b5d'], 6: [5.5, '#5d5f60'],
  7: [5.5, '#606263'], 8: [5, '#646566'], 9: [4, '#67686a'], 10: [4, '#b4ab9c'], 11: [2.6, '#7d7262'], 12: [1.2, '#9a8f7c'],
  13: [2.5, '#9d5b4c'], 20: [4.5, '#6a625a'],
};
// terreno naturale: 1 spiagge e ghiaia, 2 roccia, 3 ghiaione
const NATURAL = { 1: ['#d9d5c8', 0.92], 2: ['#a7a398', 0.5], 3: ['#b9b4a8', 0.55] };
// uso del suolo: [colore, opacità, motivo]
const LAND = {
  1: ['#56652c', 0.42, 'rows'], 2: ['#5a6b33', 0.38, 'dots'], 3: ['#8b8a55', 0.22], 4: ['#6c8a3c', 0.2], 5: ['#a79d8d', 0.1],
  6: ['#a3a39f', 0.38], 7: ['#cdc6b8', 0.5], 8: ['#7f8270', 0.4], 9: ['#4f7a34', 0.3], 10: ['#4a8f3e', 0.75, 'pitch'],
  11: ['#ddd6c4', 0.85], 13: ['#6e7a52', 0.25], 14: ['#d8dee2', 0.65, 'glass'], 15: ['#7c7c7a', 0.6], 18: ['#bdb8ad', 0.3],
};

function drawPoly(g, pts, T) {
  g.beginPath();
  for (let i = 0; i < pts.length; i += 2) {
    const [x, y] = T(pts[i], pts[i + 1]);
    i ? g.lineTo(x, y) : g.moveTo(x, y);
  }
  g.closePath();
}
function drawLine(g, pts, T) {
  g.beginPath();
  for (let i = 0; i < pts.length; i += 2) {
    const [x, y] = T(pts[i], pts[i + 1]);
    i ? g.lineTo(x, y) : g.moveTo(x, y);
  }
}
// direzione del lato più lungo (per orientare i filari)
function mainAngle(pts) {
  let best = 0, ang = 0;
  for (let i = 0; i < pts.length; i += 2) {
    const j = (i + 2) % pts.length;
    const dx = pts[j] - pts[i], dz = pts[j + 1] - pts[i + 1];
    const l = dx * dx + dz * dz;
    if (l > best) {
      best = l;
      ang = Math.atan2(dz, dx);
    }
  }
  return ang;
}

export class DetailOverlay {
  constructor({ quality = 'medium' } = {}) {
    const half = WORLD.half;
    this.global = this._paint({ x0: -half, z0: -half, size: 2 * half }, 2048, false);
    // zona ad alta risoluzione: Riva, Torbole, Nago, Monte Brione, Arco
    const hz = { x0: -1700, z0: -11500, size: 7800 };
    this.hires = this._paint(hz, quality === 'low' ? 2048 : quality === 'high' ? 4096 : 3072, true);
    this.cls = this._classes(hz, quality === 'low' ? 1024 : 2048);
    // altezza e copertura delle chiome (1 m, Meta/WRI) nella zona ad alta risoluzione
    this.chmTex = null;
    if (GARDA.chm) {
      const n = GARDA.chm.N;
      const t = new THREE.DataTexture(new Uint8Array(GARDA.chm.data.buffer.slice(GARDA.chm.data.byteOffset, GARDA.chm.data.byteOffset + n * n * 4)), n, n, THREE.RGBAFormat);
      t.magFilter = THREE.LinearFilter;
      t.minFilter = THREE.LinearFilter;
      t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
      t.needsUpdate = true;
      this.chmTex = t;
      this.chm = { data: GARDA.chm.data, N: n, x0: hz.x0, z0: hz.z0, size: hz.size };
    }
    this.rects = [new THREE.Vector4(-half, -half, 1 / (2 * half), 1), new THREE.Vector4(hz.x0, hz.z0, 1 / hz.size, 1)];
    this._mask(quality);
  }

  _paint(R, N, hi) {
    const c = document.createElement('canvas');
    c.width = c.height = N;
    const g = c.getContext('2d');
    const k = N / R.size;
    const T = (x, z) => [(x - R.x0) * k, (z - R.z0) * k];
    const inR = (pts) => {
      for (let i = 0; i < pts.length; i += 2) if (pts[i] > R.x0 && pts[i] < R.x0 + R.size && pts[i + 1] > R.z0 && pts[i + 1] < R.z0 + R.size) return true;
      return false;
    };
    g.lineJoin = 'round';
    g.lineCap = 'round';
    // uso del suolo
    for (const f of OSM.land) {
      const L = LAND[f.cls];
      if (!L || !inR(f.pts)) continue;
      g.globalAlpha = L[1];
      g.fillStyle = L[0];
      drawPoly(g, f.pts, T);
      g.fill();
    }
    // rocce, ghiaioni, spiagge e ghiaia di riva
    for (const f of OSM.natural) {
      const L = NATURAL[f.cls];
      if (!L || !inR(f.pts)) continue;
      g.globalAlpha = L[1];
      g.fillStyle = L[0];
      drawPoly(g, f.pts, T);
      g.fill();
    }
    // acque: il Sarca, i torrenti e le piscine
    for (const f of OSM.water) {
      if (!inR(f.pts)) continue;
      g.globalAlpha = 0.95;
      if (f.cls === 5) {
        if (!hi) continue;
        drawPoly(g, f.pts, T);
        g.fillStyle = '#3fb0d6';
        g.fill();
        g.globalAlpha = 0.85;
        g.strokeStyle = '#e8eef0';
        g.lineWidth = Math.max(0.8, 0.9 * k);
        g.stroke();
        continue;
      }
      if (f.flag) {
        g.strokeStyle = '#2c4f52';
        g.lineWidth = Math.max(1, (f.cls === 1 ? 10 : f.cls === 3 ? 5 : 3) * k);
        drawLine(g, f.pts, T);
        g.stroke();
      } else {
        g.fillStyle = '#2b5054';
        drawPoly(g, f.pts, T);
        g.fill();
        // rive di ghiaia
        g.globalAlpha = 0.6;
        g.strokeStyle = '#c9c2b2';
        g.lineWidth = 2.5 * k;
        g.stroke();
      }
    }
    // strade: bordo chiaro (marciapiedi) poi asfalto, dalle minori alle maggiori
    const order = [...OSM.roads].sort((a, b) => b.cls - a.cls);
    for (const pass of [0, 1]) {
      for (const f of order) {
        const S = ROADS[f.cls];
        if (!S || !inR(f.pts)) continue;
        // vista d'insieme: niente sentieri né piste forestali, niente bordi chiari
        if (!hi && (f.cls === 12 || f.cls === 13 || f.cls === 10 || f.cls === 11)) continue;
        const w = S[0] * k;
        if (pass === 0) {
          if (!hi || (f.cls >= 11 && f.cls !== 20)) continue;
          g.globalAlpha = 0.55;
          g.strokeStyle = f.cls === 20 ? '#8b8277' : '#9a958c';
          g.lineWidth = Math.max(1.2, w + 2.2 * k);
        } else {
          g.globalAlpha = f.cls === 12 ? 0.3 : f.cls === 11 ? 0.55 : hi ? 0.95 : f.cls <= 5 ? 0.75 : 0.45;
          g.strokeStyle = S[1];
          g.lineWidth = hi ? Math.max(f.cls <= 7 ? 1.2 : 0.8, w) : Math.max(0.6, w);
        }
        drawLine(g, f.pts, T);
        g.stroke();
        // binari: traversine scure
        if (pass === 1 && f.cls === 20 && hi) {
          g.strokeStyle = '#3a342e';
          g.lineWidth = 1.2 * k;
          g.setLineDash([0.4 * k, 0.6 * k]);
          g.stroke();
          g.setLineDash([]);
        }
        // mezzeria tratteggiata sulle strade principali
        if (pass === 1 && hi && f.cls >= 2 && f.cls <= 4) {
          g.globalAlpha = 0.8;
          g.strokeStyle = '#e8e6de';
          g.lineWidth = Math.max(0.6, 0.15 * k * 2);
          g.setLineDash([3 * k, 6 * k]);
          g.stroke();
          g.setLineDash([]);
        }
      }
    }
    // impronte delle case (ombra di contatto sotto i volumi 3D)
    if (hi) {
      g.globalAlpha = 0.35;
      g.fillStyle = '#2a2724';
      for (const f of OSM.buildings) {
        if (!inR(f.pts)) continue;
        drawPoly(g, f.pts, T);
        g.fill();
      }
    }
    g.globalAlpha = 1;
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    return { canvas: c, texture: tex, R };
  }

  // classi per i motivi disegnati dalla scheda grafica (zona ad alta risoluzione):
  // R = vigneto (B = direzione dei filari), G = frutteto/uliveto. Solo riempimenti piatti: veloce.
  _classes(R, N) {
    const c = document.createElement('canvas');
    c.width = c.height = N;
    const g = c.getContext('2d');
    const k = N / R.size;
    const T = (x, z) => [(x - R.x0) * k, (z - R.z0) * k];
    g.fillStyle = '#000';
    g.fillRect(0, 0, N, N);
    for (const f of OSM.land) {
      if (f.cls !== 1 && f.cls !== 2) continue;
      if (f.cls === 1) {
        let a = mainAngle(f.pts);
        if (a < 0) a += Math.PI;
        g.fillStyle = `rgb(255,0,${Math.round((a / Math.PI) * 255)})`;
      } else g.fillStyle = 'rgb(0,255,0)';
      drawPoly(g, f.pts, T);
      g.fill();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    return { canvas: c, texture: tex };
  }

  // maschera per la vegetazione: R = niente alberi (strade, case, acqua, spiagge, parcheggi...),
  // G = frutteti/uliveti, B = vigneti
  _mask(quality) {
    const N = quality === 'low' ? 1024 : 2048;
    const half = WORLD.half;
    const c = document.createElement('canvas');
    c.width = c.height = N;
    const g = c.getContext('2d', { willReadFrequently: true });
    const k = N / (2 * half);
    const T = (x, z) => [(x + half) * k, (z + half) * k];
    g.fillStyle = '#000';
    g.fillRect(0, 0, N, N);
    g.globalCompositeOperation = 'lighter';
    for (const f of OSM.land) {
      const col = f.cls === 2 ? '#00ff00' : f.cls === 1 ? '#0000ff' : [6, 7, 10, 11, 12, 14, 15].includes(f.cls) ? '#ff0000' : null;
      if (!col) continue;
      g.fillStyle = col;
      drawPoly(g, f.pts, T);
      g.fill();
    }
    g.fillStyle = '#ff0000';
    for (const f of OSM.buildings) {
      drawPoly(g, f.pts, T);
      g.fill();
    }
    g.strokeStyle = '#ff0000';
    for (const f of OSM.roads) {
      if (f.cls === 12) continue;
      g.lineWidth = Math.max(1, ((ROADS[f.cls] || [5])[0] + 4) * k);
      drawLine(g, f.pts, T);
      g.stroke();
    }
    for (const f of OSM.natural) {
      if (f.cls !== 1) continue;
      g.fillStyle = '#ff0000';
      drawPoly(g, f.pts, T);
      g.fill();
    }
    for (const f of OSM.water) {
      if (f.flag) {
        g.lineWidth = Math.max(1, 8 * k);
        drawLine(g, f.pts, T);
        g.stroke();
      } else {
        drawPoly(g, f.pts, T);
        g.fill();
      }
    }
    this.maskData = g.getImageData(0, 0, N, N).data;
    this.maskN = N;
    this.maskK = k;
  }

  // altezza (m) e copertura (0-1) della chioma nel punto, oppure null fuori dalla zona
  chmAt(x, z) {
    const C = this.chm;
    if (!C) return null;
    const i = Math.floor(((x - C.x0) / C.size) * C.N), j = Math.floor(((z - C.z0) / C.size) * C.N);
    if (i < 0 || j < 0 || i >= C.N || j >= C.N) return null;
    const k = (j * C.N + i) * 4;
    const v = C.data[k];
    return { h: v / 4, cov: Math.max(0, Math.min(1, (v - 8) / 20)) };
  }

  // 0..255 per canale: 0 = blocco, 1 = frutteto/uliveto, 2 = vigneto
  maskAt(x, z, ch) {
    const N = this.maskN;
    const i = Math.floor((x + WORLD.half) * this.maskK), j = Math.floor((z + WORLD.half) * this.maskK);
    if (i < 0 || j < 0 || i >= N || j >= N) return 0;
    return this.maskData[(j * N + i) * 4 + ch];
  }
}
