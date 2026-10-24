// Geometria dello scafo/fusoliera: loft delle sezioni a V, finestrini ritagliati,
// guscio interno della cabina e funzioni di mappatura usate dalla livrea.

import * as THREE from 'three';
import { GEO, hullSection, roofTop, halfBeam } from './specs.js';

export const HULL_RES = { roof: 40, bottom: 10 };

// Finestrini della cabina di pilotaggio (coordinate scafo: s, |y|, h). Restituisce id o 0.
export function windowAt(s, y, h, margin = 0) {
  const ay = Math.abs(y);
  const top = roofTop(s);
  // parabrezza (due grandi pannelli con montante centrale)
  if (s > 1.2 - margin && s < 2.02 + margin) {
    const maxY = 0.93 - (s - 1.2) * 0.1 + margin;
    if (ay > 0.032 - margin && ay < maxY && h > top - 0.75) return 1;
  }
  // finestrini d'angolo accanto al parabrezza
  if (s > 1.32 - margin && s < 2.04 + margin) {
    const minY = 0.93 - (s - 1.2) * 0.1 + 0.075 - margin;
    if (ay > minY && h > 2.43 - margin && h < top - 0.04 + margin) return 5;
  }
  // finestrini laterali (anteriore apribile e posteriore)
  const hb = halfBeam(s);
  if (ay > hb * 0.62) {
    const hTop = Math.min(top - 0.3, 3.18) + margin;
    if (h > 2.43 - margin && h < hTop) {
      if (s > 2.13 - margin && s < 2.66 + margin) return 2;
      if (s > 2.74 - margin && s < 3.3 + margin && h < hTop - 0.03) return 3;
    }
  }
  // finestrini "sopracciglio" sul tetto (visibilità in virata)
  if (s > 2.12 - margin && s < 2.6 + margin && ay > 0.42 - margin && ay < 0.78 + margin && h > top - 0.2) return 4;
  return 0;
}

// Sezione destra completa come array di [y, h] (dal colmo alla chiglia) + indice dello spigolo.
export function rightSection(s) {
  const sec = hullSection(s, HULL_RES.roof, HULL_RES.bottom);
  return { roof: sec.roof, bottom: sec.bottom, sec };
}

// Parametro di perimetro normalizzato t (0 colmo .. 1 chiglia) per ogni punto della sezione.
export function sectionT(s) {
  const { roof, bottom } = rightSection(s);
  const pts = roof.concat(bottom);
  const cum = [0];
  for (let i = 1; i < pts.length; i++) {
    cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  }
  const total = cum[cum.length - 1] || 1;
  return { pts, t: cum.map((c) => c / total), nRoof: roof.length, total };
}

// t alla quota h lungo la fiancata (la quota decresce monotonamente col perimetro)
export function tOfHeight(s, h) {
  const { pts, t } = sectionT(s);
  if (h >= pts[0][1]) return 0;
  for (let i = 1; i < pts.length; i++) {
    if (pts[i][1] <= h) {
      const a = pts[i - 1], b = pts[i];
      const f = (a[1] - h) / (a[1] - b[1] || 1);
      return t[i - 1] + (t[i] - t[i - 1]) * f;
    }
  }
  return 1;
}

// t alla coordinata laterale y sull'arco superiore
export function tOfY(s, y) {
  const { pts, t } = sectionT(s);
  for (let i = 1; i < pts.length; i++) {
    if (pts[i][0] >= y) {
      const a = pts[i - 1], b = pts[i];
      const f = (y - a[0]) / (b[0] - a[0] || 1);
      return t[i - 1] + (t[i] - t[i - 1]) * f;
    }
  }
  return t[t.length - 1];
}

// punto (y, h) al parametro t
export function pointAtT(cache, tt) {
  const { pts, t } = cache;
  for (let i = 1; i < pts.length; i++) {
    if (t[i] >= tt) {
      const f = (tt - t[i - 1]) / (t[i] - t[i - 1] || 1);
      return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * f, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * f];
    }
  }
  return pts[pts.length - 1];
}

export function hullStations(s0 = 0, s1 = GEO.L) {
  const st = [];
  const add = (a, b, d) => {
    for (let s = a; s < b - 1e-6; s += d) if (s >= s0 - 1e-6 && s <= s1 + 1e-6) st.push(s);
  };
  add(0, 0.12, 0.02);
  add(0.12, 0.6, 0.04);
  add(0.6, 3.6, 0.045);
  add(3.6, 8.9, 0.18);
  add(8.9, 9.0, 0.05); // redan
  add(9.0, 15.4, 0.22);
  add(15.4, GEO.L, 0.12);
  if (st[st.length - 1] < Math.min(s1, GEO.L) - 1e-4) st.push(Math.min(s1, GEO.L));
  if (s0 > 0 && st[0] > s0 + 1e-4) st.unshift(s0);
  return st;
}

// Costruisce la fusoliera. opts: { s0, s1, inset (m, verso l'interno), inside (normali verso l'interno),
//   cutWindows, glass (raccoglie i triangoli dei finestrini), uv }
export function buildHull({ s0 = 0, s1 = GEO.L, inset = 0, inside = false, cutWindows = true, collectGlass = false, glassMargin = 0 } = {}) {
  const stations = hullStations(s0, s1);
  const L = GEO.L;
  const strips = [];
  const glass = { pos: [], idx: [] };
  for (const side of [1, -1]) {
    for (const part of ['roof', 'bottom']) {
      const pos = [];
      const uv = [];
      const idx = [];
      const hcoord = []; // coordinate scafo per il test dei finestrini
      let np = 0;
      for (const s of stations) {
        const cache = sectionT(s);
        const rs = rightSection(s);
        const pts = part === 'roof' ? rs.roof : rs.bottom;
        const t0 = part === 'roof' ? 0 : cache.nRoof;
        np = pts.length;
        for (let j = 0; j < pts.length; j++) {
          let [y, h] = pts[j];
          if (inset) {
            const a = pts[Math.max(0, j - 1)], b = pts[Math.min(pts.length - 1, j + 1)];
            let ny = b[1] - a[1], nh = -(b[0] - a[0]);
            const l = Math.hypot(ny, nh) || 1;
            ny /= l;
            nh /= l;
            y -= ny * inset;
            h -= nh * inset;
            if (y < 0) y = 0;
          }
          const tt = cache.t[t0 + j];
          pos.push(side * y, h - GEO.hCG, s - GEO.sCG);
          hcoord.push([s, y, h]);
          uv.push(s / L, side > 0 ? 0.5 * tt : 1 - 0.5 * tt);
        }
      }
      const ns = stations.length;
      for (let i = 0; i < ns - 1; i++) {
        for (let j = 0; j < np - 1; j++) {
          const a = i * np + j, b = (i + 1) * np + j, c = (i + 1) * np + j + 1, d = i * np + j + 1;
          let win = 0, gwin = 0;
          if (cutWindows || collectGlass) {
            const ha = hcoord[a], hc = hcoord[c];
            const ms = (ha[0] + hc[0]) / 2, my = (ha[1] + hc[1]) / 2, mh = (ha[2] + hc[2]) / 2;
            win = windowAt(ms, my, mh);
            gwin = glassMargin ? windowAt(ms, my, mh, glassMargin) : win;
          }
          // ordine dei vertici: normali verso l'esterno per il lato destro
          let tri = side > 0 ? [a, b, d, b, c, d] : [a, d, b, b, d, c];
          if (inside) tri = [tri[0], tri[2], tri[1], tri[3], tri[5], tri[4]];
          if (gwin && collectGlass) {
            const base = glass.pos.length / 3;
            const map = new Map();
            const out = [];
            for (const k of tri) {
              if (!map.has(k)) {
                map.set(k, base + map.size);
                glass.pos.push(pos[k * 3], pos[k * 3 + 1], pos[k * 3 + 2]);
              }
              out.push(map.get(k));
            }
            glass.idx.push(...out);
          }
          if (win && cutWindows) continue;
          idx.push(...tri);
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      g.setIndex(idx);
      g.computeVertexNormals();
      strips.push(g);
    }
  }
  let glassGeo = null;
  if (collectGlass && glass.pos.length) {
    glassGeo = new THREE.BufferGeometry();
    glassGeo.setAttribute('position', new THREE.Float32BufferAttribute(glass.pos, 3));
    glassGeo.setIndex(glass.idx);
    glassGeo.computeVertexNormals();
  }
  return { strips, glassGeo };
}
