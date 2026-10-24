// Strumenti di modellazione procedurale: profili NACA, loft tra sezioni, solidi di rivoluzione.

import * as THREE from 'three';

// Profilo NACA a 4 cifre. Restituisce punti [x, y] (corda unitaria) da bordo d'uscita (dorso)
// al bordo d'attacco e ritorno al bordo d'uscita (ventre). n = punti per lato.
export function naca4(m, p, t, n = 24, closedTE = true) {
  const up = [];
  const lo = [];
  for (let i = 0; i <= n; i++) {
    const beta = (i / n) * Math.PI;
    const x = (1 - Math.cos(beta)) / 2;
    const yt = 5 * t * (0.2969 * Math.sqrt(x) - 0.126 * x - 0.3516 * x * x + 0.2843 * x ** 3 - (closedTE ? 0.1036 : 0.1015) * x ** 4);
    let yc = 0, dyc = 0;
    if (m > 0) {
      if (x < p) {
        yc = (m / (p * p)) * (2 * p * x - x * x);
        dyc = ((2 * m) / (p * p)) * (p - x);
      } else {
        yc = (m / ((1 - p) ** 2)) * (1 - 2 * p + 2 * p * x - x * x);
        dyc = ((2 * m) / ((1 - p) ** 2)) * (p - x);
      }
    }
    const th = Math.atan(dyc);
    up.push([x - yt * Math.sin(th), yc + yt * Math.cos(th)]);
    lo.push([x + yt * Math.sin(th), yc - yt * Math.cos(th)]);
  }
  // da TE (dorso) -> LE -> TE (ventre)
  const pts = [];
  for (let i = n; i >= 0; i--) pts.push(up[i]);
  for (let i = 1; i <= n; i++) pts.push(lo[i]);
  return pts;
}

// Interpola un profilo su un sottointervallo di corda [x0,x1] (per cassone alare / superfici mobili).
// Restituisce un contorno chiuso: dorso da x1 a x0, faccia verticale, ventre da x0 a x1.
export function airfoilSlice(foil, x0, x1, roundFront = false) {
  const n = (foil.length - 1) / 2;
  const up = foil.slice(0, n + 1).reverse(); // LE -> TE
  const lo = foil.slice(n); // LE -> TE
  const sample = (arr, x) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][0] >= x) {
        const a = arr[i - 1], b = arr[i];
        const t = (x - a[0]) / (b[0] - a[0] || 1);
        return a[1] + (b[1] - a[1]) * t;
      }
    }
    return arr[arr.length - 1][1];
  };
  const pts = [];
  const steps = 10;
  for (let i = steps; i >= 0; i--) {
    const x = x0 + ((x1 - x0) * i) / steps;
    pts.push([x, sample(up, x)]);
  }
  if (roundFront) {
    const yu = sample(up, x0), yl = sample(lo, x0);
    const cy = (yu + yl) / 2, r = (yu - yl) / 2;
    for (let i = 1; i < 6; i++) {
      const a = Math.PI / 2 + (i / 6) * Math.PI;
      pts.push([x0 + Math.cos(a) * r * 0.9, cy + Math.sin(a) * r]);
    }
  } else {
    const yu = sample(up, x0), yl = sample(lo, x0);
    for (let i = 1; i < 4; i++) pts.push([x0, yu + ((yl - yu) * i) / 4]);
  }
  for (let i = 0; i <= steps; i++) {
    const x = x0 + ((x1 - x0) * i) / steps;
    pts.push([x, sample(lo, x)]);
  }
  return pts;
}

// Loft: sections = array di array di THREE.Vector3 (stesso numero di punti).
// uvU: array dei valori u per sezione; uvV: array dei valori v per punto (opzionale).
export function loft(sections, { closed = false, capStart = false, capEnd = false, uvU = null, uvV = null, flip = false } = {}) {
  const ns = sections.length;
  const np = sections[0].length;
  const pos = [];
  const uv = [];
  for (let i = 0; i < ns; i++) {
    for (let j = 0; j < np; j++) {
      const p = sections[i][j];
      pos.push(p.x, p.y, p.z);
      uv.push(uvU ? uvU[i] : i / (ns - 1), uvV ? uvV[j] : j / (np - 1));
    }
  }
  const idx = [];
  const segs = closed ? np : np - 1;
  for (let i = 0; i < ns - 1; i++) {
    for (let j = 0; j < segs; j++) {
      const j1 = (j + 1) % np;
      const a = i * np + j, b = (i + 1) * np + j, c = (i + 1) * np + j1, d = i * np + j1;
      if (flip) idx.push(a, d, b, b, d, c);
      else idx.push(a, b, d, b, c, d);
    }
  }
  const addCap = (si, rev) => {
    const center = new THREE.Vector3();
    sections[si].forEach((p) => center.add(p));
    center.divideScalar(np);
    const ci = pos.length / 3;
    pos.push(center.x, center.y, center.z);
    uv.push(uvU ? uvU[si] : si / (ns - 1), 0.5);
    for (let j = 0; j < segs; j++) {
      const a = si * np + j, b = si * np + ((j + 1) % np);
      if (rev !== flip) idx.push(ci, a, b);
      else idx.push(ci, b, a);
    }
  };
  if (capStart) addCap(0, false);
  if (capEnd) addCap(ns - 1, true);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Superficie portante (ala, impennaggi, pale): sezioni di profilo disposte lungo una "spina".
// stations: [{ le: Vector3 (bordo d'attacco), chord, twist (rad), thick (scala y), span axis }]
// chordDir/upDir: assi del profilo nel sistema dell'oggetto.
export function liftingSurface(foil, stations, { chordDir, upDir, uvU = null, capStart = false, capEnd = true, foilV = null, flip = false } = {}) {
  const sections = stations.map((st) => {
    const c = chordDir.clone();
    const u = upDir.clone();
    if (st.twist) {
      const axis = new THREE.Vector3().crossVectors(c, u).normalize();
      c.applyAxisAngle(axis, st.twist);
      u.applyAxisAngle(axis, st.twist);
    }
    const f = st.foil || foil;
    return f.map(([x, y]) => st.le.clone().addScaledVector(c, x * st.chord).addScaledVector(u, y * st.chord * (st.thick || 1)));
  });
  let vv = foilV;
  if (!vv) {
    const f = stations[0].foil || foil;
    const n = (f.length - 1) / 2;
    vv = f.map((p, j) => (j <= n ? 0.5 - 0.5 * p[0] : 0.5 + 0.5 * p[0]));
  }
  return loft(sections, { uvU, uvV: vv, capStart, capEnd, flip });
}

// Solido di rivoluzione attorno all'asse Z (profilo [r, z])
export function lathe(profile, segments = 24, phase = 0) {
  const pts = profile.map(([r, z]) => new THREE.Vector2(Math.max(r, 0.0001), z));
  const g = new THREE.LatheGeometry(pts, segments, phase);
  // LatheGeometry ruota attorno a Y: lo riportiamo attorno a Z
  g.rotateX(Math.PI / 2);
  return g;
}

export function mirrorX(geo) {
  const g = geo.clone();
  g.scale(-1, 1, 1);
  // inverte l'ordine dei triangoli per mantenere le normali verso l'esterno
  const idx = g.index;
  if (idx) {
    const a = idx.array;
    for (let i = 0; i < a.length; i += 3) {
      const t = a[i + 1];
      a[i + 1] = a[i + 2];
      a[i + 2] = t;
    }
    idx.needsUpdate = true;
  }
  g.computeVertexNormals();
  return g;
}

export function mergeGeos(geos) {
  // unione di geometrie indicizzate con position/normal/uv
  let nv = 0, ni = 0;
  for (const g of geos) {
    nv += g.attributes.position.count;
    ni += g.index ? g.index.count : g.attributes.position.count;
  }
  const pos = new Float32Array(nv * 3), nrm = new Float32Array(nv * 3), uv = new Float32Array(nv * 2);
  const idx = new Uint32Array(ni);
  let ov = 0, oi = 0;
  for (const g of geos) {
    const c = g.attributes.position.count;
    pos.set(g.attributes.position.array, ov * 3);
    if (g.attributes.normal) nrm.set(g.attributes.normal.array, ov * 3);
    if (g.attributes.uv) uv.set(g.attributes.uv.array, ov * 2);
    if (g.index) {
      const a = g.index.array;
      for (let i = 0; i < a.length; i++) idx[oi + i] = a[i] + ov;
      oi += a.length;
    } else {
      for (let i = 0; i < c; i++) idx[oi + i] = i + ov;
      oi += c;
    }
    ov += c;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  out.setIndex(new THREE.BufferAttribute(idx, 1));
  out.computeBoundingSphere();
  return out;
}

// Tubo tra due punti (montanti, aste)
export function strut(a, b, r0, r1 = r0, seg = 8, flat = 1) {
  const d = new THREE.Vector3().subVectors(b, a);
  const len = d.length();
  const g = new THREE.CylinderGeometry(r1, r0, len, seg, 1, false);
  g.scale(flat, 1, 1);
  g.translate(0, len / 2, 0);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  g.applyQuaternion(q);
  g.translate(a.x, a.y, a.z);
  return g;
}
