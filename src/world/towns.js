// Paesi del Garda. Con i dati OSM/Overture: ogni edificio ha la sua sagoma e posizione reale
// (Riva vecchia, la Rocca, i capannoni della zona industriale, gli alberghi di Torbole...).
// Gli edifici quasi rettangolari diventano casette istanziate con tetto a padiglione in coppi;
// quelli dalla forma complessa (a L, a corte, isolati del centro storico) sono estrusi dalla sagoma.
// Senza dati OSM si ripiega sugli edifici stimati dalla copertura del suolo ESA.

import * as THREE from 'three';
import { GARDA } from './garda.js';
import { OSM } from './osm.js';
import { WORLD } from './terrain.js';
import { createNoise2D } from '../core/math.js';

const WALLS = [0xe3c48c, 0xeadfc6, 0xdfae98, 0xefece4, 0xe8d39a, 0xd59d6f, 0xf0e2c8, 0xcfc2ae, 0xe6cfa8, 0xd8b48a];
// coppi come si vedono dall'alto: terracotta sbiadita, rosata o bruna (dalle foto aeree di Riva e Torbole)
const ROOFS = [0xb4604c, 0xa9553f, 0xc06b55, 0x9d5a47, 0xb9705c, 0x8a5646, 0xc47a5f, 0x7f4f42, 0xa6644f, 0xb0705f];
const FLATS = [0xc9cbcc, 0xa8acae, 0xd6d4ce, 0x8e9294, 0xb9b4aa, 0x6c6f72, 0x5d6063, 0xdad8d2];

function wallGeometry() {
  const g = new THREE.BoxGeometry(1, 1, 1, 1, 4, 1);
  g.translate(0, 0.5, 0);
  const p = g.attributes.position;
  const col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i);
    const v = y < 0.05 ? 0.55 : y > 0.95 ? 0.95 : 0.88;
    col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = v;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

function roofGeometry() {
  // tetto a padiglione: base 1x1, colmo lungo l'asse x
  const r = 0.5, h = 1, k = 0.22;
  const v = [[-r, 0, -r], [r, 0, -r], [r, 0, r], [-r, 0, r], [-r + k, h, 0], [r - k, h, 0]];
  const tri = [[0, 4, 5], [0, 5, 1], [2, 5, 4], [2, 4, 3], [1, 5, 2], [3, 4, 0]];
  const pos = [];
  for (const t of tri) for (const i of t) pos.push(...v[i]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

const hash = (i) => {
  let x = (i * 2654435761) >>> 0;
  x ^= x >>> 15;
  x = Math.imul(x, 0x2c1b3c6d) >>> 0;
  x ^= x >>> 12;
  return (x >>> 0) / 4294967296;
};

// rettangolo di area minima che contiene il poligono (inviluppo convesso + lati)
function minRect(pts) {
  const P = [];
  for (let i = 0; i < pts.length; i += 2) P.push([pts[i], pts[i + 1]]);
  P.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], hi = [];
  for (const p of P) {
    while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop();
    lo.push(p);
  }
  for (let i = P.length - 1; i >= 0; i--) {
    const p = P[i];
    while (hi.length >= 2 && cross(hi[hi.length - 2], hi[hi.length - 1], p) <= 0) hi.pop();
    hi.push(p);
  }
  const H = lo.slice(0, -1).concat(hi.slice(0, -1));
  let best = null;
  for (let i = 0; i < H.length; i++) {
    const a = H[i], b = H[(i + 1) % H.length];
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const c = Math.cos(ang), s = Math.sin(ang);
    let u0 = 1e9, u1 = -1e9, v0 = 1e9, v1 = -1e9;
    for (const p of H) {
      const u = p[0] * c + p[1] * s, v = -p[0] * s + p[1] * c;
      u0 = Math.min(u0, u); u1 = Math.max(u1, u); v0 = Math.min(v0, v); v1 = Math.max(v1, v);
    }
    const area = (u1 - u0) * (v1 - v0);
    if (!best || area < best.area) {
      const uc = (u0 + u1) / 2, vc = (v0 + v1) / 2;
      best = { area, ang, w: u1 - u0, d: v1 - v0, cx: uc * c - vc * s, cz: uc * s + vc * c };
    }
  }
  return best;
}
const polyArea = (pts) => {
  let s = 0;
  const n = pts.length / 2;
  for (let i = 0, j = n - 1; i < n; j = i++) s += (pts[j * 2] + pts[i * 2]) * (pts[j * 2 + 1] - pts[i * 2 + 1]);
  return Math.abs(s / 2);
};

// tetto: la scheda grafica disegna le file di coppi (visibili entro ~200 m); da lontano resta il colore medio
function roofMaterial() {
  const m = new THREE.MeshStandardMaterial({ roughness: 0.8, metalness: 0 });
  m.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vLoc;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        #ifdef USE_INSTANCING
          vLoc = position * vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
        #else
          vLoc = position;
        #endif`,
      );
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vLoc;')
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        {
          float fadeT = 1.0 - smoothstep(70.0, 260.0, length(vViewPosition));
          float row = floor(vLoc.z / 0.38);
          float fz = fract(vLoc.z / 0.38);
          float fx = fract(vLoc.x / 0.27 + row * 0.5);
          float course = 1.0 - 0.34 * (1.0 - smoothstep(0.0, 0.16, fz)) - 0.12 * (1.0 - smoothstep(0.0, 0.1, fx));
          float tint = 0.9 + 0.2 * fract(sin(dot(vec2(floor(vLoc.x / 0.27 + row * 0.5), row), vec2(12.9898, 78.233))) * 43758.5453);
          diffuseColor.rgb *= mix(0.9, course * tint, fadeT);
        }`,
      );
  };
  return m;
}

export class Towns {
  constructor(scene, terrain, { quality = 'medium' } = {}) {
    this.group = new THREE.Group();
    this.group.name = 'towns';
    scene.add(this.group);
    if (OSM.buildings.length) this._fromOsm(terrain, quality);
    else this._fromLandcover(terrain, quality);
  }

  _fromOsm(terrain, quality) {
    const riva = WORLD.places['Riva del Garda'] || { x: 0, z: 0 };
    const simple = [];
    const pos = [], col = [];
    const c = new THREE.Color(), c2 = new THREE.Color();
    let complex = 0;
    OSM.buildings.forEach((b, idx) => {
      const pts = b.pts;
      const n = pts.length / 2;
      if (n < 3) return;
      let cx = 0, cz = 0;
      for (let i = 0; i < n; i++) {
        cx += pts[i * 2];
        cz += pts[i * 2 + 1];
      }
      cx /= n;
      cz /= n;
      if (terrain.inAirfield(cx, cz)) return;
      const area = polyArea(pts);
      if (quality === 'low' && area < 60) return;
      // quota: il punto più basso della sagoma (la casa affonda nel pendio)
      let gmin = 1e9, gmax = -1e9;
      for (let i = 0; i < n; i++) {
        const g = terrain.heightAt(pts[i * 2], pts[i * 2 + 1]);
        gmin = Math.min(gmin, g);
        gmax = Math.max(gmax, g);
      }
      if (gmin < 0.25) gmin = Math.max(0.25, gmin);
      if (gmax < 0.3) return;
      const r = hash(idx + 7);
      const cls = b.cls;
      const flat = b.flag === 1 || cls === 3 || cls === 9 || (area > 1400 && cls !== 1 && cls !== 2 && cls !== 5);
      // altezza: dato reale se c'è, altrimenti stimata da tipo, superficie e vicinanza al centro storico
      let H = b.extra / 10;
      if (!H) {
        const dRiva = Math.hypot(cx - riva.x, cz - riva.z);
        if (area < 35 || cls === 8) H = 3 + r;
        else if (cls === 5) H = 13 + r * 4;
        else if (cls === 6) H = 12 + r * 6;
        else if (cls === 7) H = 20;
        else if (flat) H = 7 + r * 4;
        else if (dRiva < 420) H = 11 + r * 6;
        else if (area < 90) H = 4.5 + r * 2.5;
        else if (area < 350) H = 6.5 + r * 3.5;
        else H = 9 + r * 6;
      }
      const drop = gmax - gmin;
      const y0 = gmin - 0.5;
      const Ht = H + drop + 0.5;
      const wallHex = cls === 5 || cls === 6 ? 0xd9cfb8 : flat ? FLATS[Math.floor(r * 31) % FLATS.length] : WALLS[Math.floor(r * 977) % WALLS.length];
      const roofHex = flat ? FLATS[Math.floor(r * 53 + 2) % FLATS.length] : ROOFS[Math.floor(r * 613) % ROOFS.length];
      const R = minRect(pts);
      const rect = R && area / R.area > 0.84;
      if (rect && !flat && n <= 10) {
        // casetta istanziata: lato lungo sull'asse x del modello
        let { w, d, ang } = R;
        if (d > w) {
          [w, d] = [d, w];
          ang += Math.PI / 2;
        }
        simple.push({ x: R.cx, z: R.cz, w, d, ang, y0, Ht, wallHex, roofHex, pitch: Math.min(w, d) * (H > 12 ? 0.16 : 0.28) });
        return;
      }
      if (quality === 'low' && n > 24) return;
      // estrusione della sagoma: pareti + copertura
      complex++;
      let s = 0;
      for (let i = 0, j = n - 1; i < n; j = i++) s += (pts[j * 2] - pts[i * 2]) * (pts[j * 2 + 1] + pts[i * 2 + 1]);
      const ccw = s > 0; // orientamento nel piano x-z
      c.setHex(wallHex);
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        let ax = pts[i * 2], az = pts[i * 2 + 1], bx = pts[j * 2], bz = pts[j * 2 + 1];
        if (!ccw) [ax, az, bx, bz] = [bx, bz, ax, az];
        const y1 = y0 + Ht;
        pos.push(ax, y0, az, bx, y0, bz, bx, y1, bz, ax, y0, az, bx, y1, bz, ax, y1, az);
        for (let k = 0; k < 6; k++) {
          const sh = k === 0 || k === 1 || k === 3 ? 0.6 : 0.92;
          col.push(c.r * sh, c.g * sh, c.b * sh);
        }
      }
      const contour = [];
      for (let i = 0; i < n; i++) contour.push(new THREE.Vector2(pts[i * 2], pts[i * 2 + 1]));
      const tris = THREE.ShapeUtils.triangulateShape(contour, []);
      c2.setHex(roofHex);
      const yt = y0 + Ht + (flat ? 0 : 0.1);
      for (const t of tris) {
        // normale verso l'alto: ordine dei vertici secondo l'orientamento
        const [i0, i1, i2] = ccw ? t : [t[0], t[2], t[1]];
        for (const i of [i0, i2, i1]) {
          pos.push(pts[i * 2], yt, pts[i * 2 + 1]);
          col.push(c2.r, c2.g, c2.b);
        }
      }
    });
    // casette istanziate
    const wallMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.88, metalness: 0 });
    const roofMat = roofMaterial();
    const walls = new THREE.InstancedMesh(wallGeometry(), wallMat, simple.length);
    const roofs = new THREE.InstancedMesh(roofGeometry(), roofMat, simple.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    simple.forEach((b, i) => {
      q.setFromAxisAngle(up, -b.ang);
      p.set(b.x, b.y0, b.z);
      sc.set(b.w, b.Ht, b.d);
      m.compose(p, q, sc);
      walls.setMatrixAt(i, m);
      c.setHex(b.wallHex);
      walls.setColorAt(i, c);
      p.set(b.x, b.y0 + b.Ht, b.z);
      sc.set(b.w * 1.06, b.pitch, b.d * 1.08);
      m.compose(p, q, sc);
      roofs.setMatrixAt(i, m);
      c.setHex(b.roofHex);
      roofs.setColorAt(i, c);
    });
    for (const im of [walls, roofs]) {
      im.instanceMatrix.needsUpdate = true;
      if (im.instanceColor) im.instanceColor.needsUpdate = true;
      im.castShadow = quality === 'high';
      im.receiveShadow = true;
      im.frustumCulled = false;
      this.group.add(im);
    }
    // edifici estrusi
    if (pos.length) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      g.computeVertexNormals();
      g.computeBoundingSphere();
      const mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0, side: THREE.DoubleSide }));
      mesh.castShadow = quality === 'high';
      mesh.receiveShadow = true;
      this.group.add(mesh);
    }
    this.count = simple.length + complex;
  }

  // ripiego: edifici stimati dai pixel "costruito" della copertura del suolo
  _fromLandcover(terrain, quality) {
    const all = GARDA.buildings || [];
    const keep = quality === 'low' ? 0.45 : 1;
    const noise = createNoise2D(911);
    const list = [];
    for (let i = 0; i < all.length; i++) {
      const b = all[i];
      if (keep < 1 && hash(i) > keep) continue;
      if (terrain.inAirfield(b.x, b.z)) continue;
      const g = terrain.heightAt(b.x, b.z);
      if (g < 0.4) continue;
      list.push({ ...b, g });
    }
    this.count = list.length;
    const wallMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.88, metalness: 0 });
    const roofMat = new THREE.MeshStandardMaterial({ roughness: 0.78, metalness: 0 });
    const walls = new THREE.InstancedMesh(wallGeometry(), wallMat, list.length);
    const roofs = new THREE.InstancedMesh(roofGeometry(), roofMat, list.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    const c = new THREE.Color();
    const up = new THREE.Vector3(0, 1, 0);
    list.forEach((b, i) => {
      const base = noise(b.x / 380, b.z / 380) * Math.PI * 0.9;
      const ang = base + (b.r < 0.5 ? 0 : Math.PI / 2) + (b.r - 0.5) * 0.12;
      q.setFromAxisAngle(up, ang);
      const slopeDrop = Math.abs(terrain.heightAt(b.x + b.w * 0.5, b.z) - terrain.heightAt(b.x - b.w * 0.5, b.z)) + Math.abs(terrain.heightAt(b.x, b.z + b.d * 0.5) - terrain.heightAt(b.x, b.z - b.d * 0.5));
      const hWall = b.floors * 3.05 + 0.6 + slopeDrop * 0.6;
      const y0 = b.g - 0.6 - slopeDrop * 0.6;
      p.set(b.x, y0, b.z);
      s.set(b.w, hWall, b.d);
      m.compose(p, q, s);
      walls.setMatrixAt(i, m);
      c.setHex(WALLS[Math.floor(b.r * 977) % WALLS.length]);
      walls.setColorAt(i, c);
      const rh = Math.min(b.w, b.d) * (b.floors > 3 ? 0.12 : 0.27);
      p.set(b.x, y0 + hWall, b.z);
      s.set(b.w * 1.08, rh, b.d * 1.08);
      m.compose(p, q, s);
      roofs.setMatrixAt(i, m);
      c.setHex(ROOFS[Math.floor(b.r * 613) % ROOFS.length]);
      roofs.setColorAt(i, c);
    });
    for (const im of [walls, roofs]) {
      im.instanceMatrix.needsUpdate = true;
      if (im.instanceColor) im.instanceColor.needsUpdate = true;
      im.castShadow = quality === 'high';
      im.receiveShadow = true;
      im.frustumCulled = false;
      this.group.add(im);
    }
  }
}
