// Vita sul lago: moli, dighe foranee e banchine dai dati OSM; barche ormeggiate nei porti (Riva,
// Torbole, Limone, Malcesine...), barche a vela e windsurf che navigano con l'Ora a nord del lago,
// traghetti di linea Riva - Limone - Malcesine. Solo grafica (nessuna collisione).

import * as THREE from 'three';
import { OSM } from './osm.js';
import { WORLD, lakeCenterAt } from './terrain.js';
import { landcover } from './garda.js';
import { mergeGeos } from '../aircraft/geom.js';

// unione di geometrie non indicizzate con position, normal e color
function mergeC(geos) {
  const list = geos.map((g) => (g.index ? g.toNonIndexed() : g));
  list.forEach((g) => g.attributes.normal || g.computeVertexNormals());
  let n = 0;
  list.forEach((g) => (n += g.attributes.position.count));
  const pos = new Float32Array(n * 3), nrm = new Float32Array(n * 3), col = new Float32Array(n * 3);
  let o = 0;
  for (const g of list) {
    pos.set(g.attributes.position.array, o * 3);
    nrm.set(g.attributes.normal.array, o * 3);
    col.set(g.attributes.color.array, o * 3);
    o += g.attributes.position.count;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  out.setAttribute('color', new THREE.BufferAttribute(col, 3));
  out.computeBoundingSphere();
  return out;
}

const rnd = (() => {
  let s = 1234567;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
})();

function colored(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.attributes.position.count;
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  return geo.index ? geo.toNonIndexed() : geo;
}
const tri = (a, b, c) => {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([...a, ...b, ...c], 3));
  g.computeVertexNormals();
  return g;
};
function hull(len, wid, h, hex) {
  // scafo affusolato a prua (verso -z)
  const g = new THREE.BoxGeometry(wid, h, len, 1, 1, 4);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const z = p.getZ(i);
    if (z < -len * 0.2) {
      const t = (-len * 0.2 - z) / (len * 0.3);
      p.setX(i, p.getX(i) * Math.max(0.08, 1 - t * 0.92));
    }
    if (p.getY(i) < 0) p.setX(i, p.getX(i) * 0.75);
  }
  g.computeVertexNormals();
  return colored(g, hex);
}

function sailboatGeo() {
  const parts = [hull(8, 2.6, 1.1, 0xf4f4f0)];
  const deck = new THREE.BoxGeometry(2.0, 0.08, 4.5);
  deck.translate(0, 0.58, 0.8);
  parts.push(colored(deck, 0xb08a5c));
  const mast = new THREE.CylinderGeometry(0.07, 0.09, 11, 6);
  mast.translate(0, 6, -0.6);
  parts.push(colored(mast, 0xd8dade));
  // randa e fiocco (vele bianche)
  const main = tri([0, 1.4, -0.5], [0, 11, -0.6], [0, 1.6, 3.4]);
  parts.push(colored(main, 0xf6f6f2));
  const jib = tri([0, 1.0, -3.8], [0, 9.5, -0.7], [0, 1.4, -0.9]);
  parts.push(colored(jib, 0xeeeeea));
  return mergeC(parts);
}
function motorboatGeo() {
  const parts = [hull(6.5, 2.3, 1.0, 0xf2f2ee)];
  const cab = new THREE.BoxGeometry(1.6, 0.9, 2.0);
  cab.translate(0, 0.9, 0.2);
  parts.push(colored(cab, 0xdfe3e6));
  const glass = new THREE.BoxGeometry(1.62, 0.4, 0.1);
  glass.translate(0, 1.05, -0.8);
  parts.push(colored(glass, 0x2a3540));
  return mergeC(parts);
}
function windsurfGeo() {
  const board = new THREE.BoxGeometry(0.65, 0.12, 2.5);
  board.translate(0, 0.06, 0);
  const parts = [colored(board, 0xf2f2ee)];
  const mast = new THREE.CylinderGeometry(0.03, 0.03, 4.6, 5);
  mast.translate(0, 2.4, 0);
  mast.rotateZ(0.25);
  parts.push(colored(mast, 0x333333));
  const sail = tri([0.1, 0.4, 0.05], [1.2, 4.7, 0.0], [0.15, 1.0, 2.1]);
  sail.rotateZ(0.2);
  parts.push(colored(sail, 0xffffff)); // colore dall'istanza
  return mergeC(parts);
}
function ferryGeo() {
  const parts = [hull(42, 8, 2.6, 0xf3f3f0)];
  const band = new THREE.BoxGeometry(6.4, 0.5, 30);
  band.translate(0, 0.9, 4);
  parts.push(colored(band, 0x1d4f9a));
  const deck1 = new THREE.BoxGeometry(6.6, 2.4, 26);
  deck1.translate(0, 2.5, 5);
  parts.push(colored(deck1, 0xf0f0ec));
  const win = new THREE.BoxGeometry(6.7, 0.9, 24);
  win.translate(0, 2.7, 5);
  parts.push(colored(win, 0x26323c));
  const bridge = new THREE.BoxGeometry(5, 2.2, 6);
  bridge.translate(0, 4.8, -2);
  parts.push(colored(bridge, 0xf7f7f4));
  const funnel = new THREE.CylinderGeometry(0.7, 0.8, 2.4, 10);
  funnel.translate(0, 5.6, 6);
  parts.push(colored(funnel, 0xc8a020));
  return mergeC(parts);
}

export class Harbor {
  constructor(scene, terrain, { quality = 'medium' } = {}) {
    this.terrain = terrain;
    this.group = new THREE.Group();
    this.group.name = 'harbor';
    scene.add(this.group);
    this._piers();
    const q = quality === 'low' ? 0.5 : 1;
    this.water = (x, z, depth = 1) => {
      const B = WORLD.lake.box;
      if (x < B.x0 || x > B.x1 || z < B.z0 || z > B.z1) return false;
      return terrain.heightAt(x, z) < -depth && landcover(x, z, 2) > 0.5;
    };
    this._moored(Math.round(220 * q));
    this.movers = [];
    this._sailing(Math.round(26 * q), Math.round(45 * q));
    this._ferries();
  }

  // moli, dighe foranee e banchine (solo quelli sull'acqua o sulla riva)
  _piers() {
    const geos = { conc: [], rock: [] };
    const T = this.terrain;
    for (const f of OSM.infra) {
      if (f.cls === 5 || f.cls === 4) continue; // ponti e dighe di sbarramento: non qui
      const pts = f.pts;
      const n = pts.length / 2;
      const rock = f.cls === 2;
      const top = rock ? 1.4 : 0.9;
      if (f.flag) {
        const w = rock ? 6 : f.cls === 3 ? 4 : 3;
        for (let i = 0; i < n - 1; i++) {
          const ax = pts[i * 2], az = pts[i * 2 + 1], bx = pts[i * 2 + 2], bz = pts[i * 2 + 3];
          const mx = (ax + bx) / 2, mz = (az + bz) / 2;
          if (T.heightAt(mx, mz) > 1.5) continue;
          const L = Math.hypot(bx - ax, bz - az);
          if (L < 0.5) continue;
          const g = new THREE.BoxGeometry(w, top + 3, L + w * 0.5);
          g.rotateY(Math.atan2(bx - ax, bz - az));
          g.translate(mx, top - (top + 3) / 2, mz);
          (rock ? geos.rock : geos.conc).push(g);
        }
      } else {
        let cx = 0, cz = 0;
        for (let i = 0; i < n; i++) {
          cx += pts[i * 2];
          cz += pts[i * 2 + 1];
        }
        if (T.heightAt(cx / n, cz / n) > 1.5) continue;
        const shape = new THREE.Shape();
        for (let i = 0; i < n; i++) (i ? shape.lineTo : shape.moveTo).call(shape, pts[i * 2], -pts[i * 2 + 1]);
        const g = new THREE.ExtrudeGeometry(shape, { depth: top + 3, bevelEnabled: false });
        g.rotateX(-Math.PI / 2);
        g.translate(0, -3, 0);
        (rock ? geos.rock : geos.conc).push(g);
      }
    }
    const mk = (list, hex, rough) => {
      if (!list.length) return;
      const geo = mergeGeos(list.map((g) => {
        if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
        return g.index ? g.toNonIndexed() : g;
      }));
      geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: hex, roughness: rough }));
      m.receiveShadow = true;
      this.group.add(m);
    };
    mk(geos.conc, 0xb9b4aa, 0.9);
    mk(geos.rock, 0x8e8b85, 1.0);
  }

  // barche ormeggiate: nei porti turistici e lungo i moli
  _moored(max) {
    const spots = [];
    for (const f of OSM.land) {
      if (f.cls !== 12 || spots.length > max) continue;
      const pts = f.pts;
      let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
      for (let i = 0; i < pts.length; i += 2) {
        x0 = Math.min(x0, pts[i]); x1 = Math.max(x1, pts[i]); z0 = Math.min(z0, pts[i + 1]); z1 = Math.max(z1, pts[i + 1]);
      }
      for (let z = z0; z < z1; z += 9) for (let x = x0; x < x1; x += 4.2) {
        if (rnd() < 0.3 || !this.water(x, z, 0.5)) continue;
        spots.push({ x: x + (rnd() - 0.5), z, a: Math.PI / 2 + (rnd() - 0.5) * 0.1 });
      }
    }
    for (const f of OSM.infra) {
      if (f.cls !== 1 || !f.flag || spots.length > max) continue;
      const pts = f.pts;
      for (let i = 0; i < pts.length / 2 - 1; i++) {
        const ax = pts[i * 2], az = pts[i * 2 + 1], bx = pts[i * 2 + 2], bz = pts[i * 2 + 3];
        const L = Math.hypot(bx - ax, bz - az);
        const ux = (bx - ax) / L, uz = (bz - az) / L;
        for (let d = 4; d < L; d += 4.5) for (const s of [-1, 1]) {
          const x = ax + ux * d - uz * s * 6, z = az + uz * d + ux * s * 6;
          if (rnd() < 0.35 || !this.water(x, z, 0.5)) continue;
          spots.push({ x, z, a: Math.atan2(-uz * s, -ux * s) });
        }
      }
    }
    spots.length = Math.min(spots.length, max);
    const sail = new THREE.InstancedMesh(sailboatGeo(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, side: THREE.DoubleSide }), spots.length);
    const motor = new THREE.InstancedMesh(motorboatGeo(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.45 }), spots.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    let ns = 0, nm = 0;
    for (const s of spots) {
      e.set(0, s.a, 0);
      q.setFromEuler(e);
      m.compose(new THREE.Vector3(s.x, 0.05, s.z), q, new THREE.Vector3(1, 1, 1).multiplyScalar(0.8 + rnd() * 0.4));
      if (rnd() < 0.45) sail.setMatrixAt(ns++, m);
      else motor.setMatrixAt(nm++, m);
    }
    sail.count = ns;
    motor.count = nm;
    for (const im of [sail, motor]) {
      im.instanceMatrix.needsUpdate = true;
      im.frustumCulled = false;
      this.group.add(im);
    }
  }

  // vele e windsurf in navigazione a nord del lago (zona dell'Ora: Riva, Torbole, Pregasina)
  _sailing(nSail, nSurf) {
    const pick = (z0, z1) => {
      for (let k = 0; k < 200; k++) {
        const z = z0 + rnd() * (z1 - z0);
        const x = lakeCenterAt(z) + (rnd() - 0.5) * 2600;
        if (this.water(x, z, 8)) return [x, z];
      }
      return null;
    };
    const mkMesh = (geo, n, colors) => {
      const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, side: THREE.DoubleSide }), n);
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      im.frustumCulled = false;
      const c = new THREE.Color();
      for (let i = 0; i < n; i++) {
        c.setHex(colors[i % colors.length]);
        im.setColorAt(i, c);
      }
      this.group.add(im);
      return im;
    };
    this.sailMesh = mkMesh(sailboatGeo(), nSail, [0xffffff]);
    this.surfMesh = mkMesh(windsurfGeo(), nSurf, [0xff5a1a, 0x18a0ff, 0xffd400, 0xe02060, 0x30d070, 0xffffff]);
    for (let i = 0; i < nSail; i++) {
      const p = pick(-5800, 3000);
      if (!p) continue;
      this.movers.push({ mesh: this.sailMesh, i, x: p[0], z: p[1], hdg: rnd() * Math.PI * 2, v: 2.5 + rnd() * 2, heel: 0.12 + rnd() * 0.1, bob: rnd() * 6 });
    }
    for (let i = 0; i < nSurf; i++) {
      const p = pick(-5900, -2600);
      if (!p) continue;
      // l'Ora soffia da sud: i windsurf vanno al traverso, avanti e indietro tra le rive
      this.movers.push({ mesh: this.surfMesh, i, x: p[0], z: p[1], hdg: (rnd() < 0.5 ? 1 : -1) * (Math.PI / 2 + (rnd() - 0.5) * 0.6), v: 6 + rnd() * 4, heel: 0.3, bob: rnd() * 6, surf: true });
    }
  }

  // traghetti: Riva - Limone - Malcesine e ritorno
  _ferries() {
    const P = WORLD.places;
    const stops = ['Riva del Garda', 'Limone', 'Malcesine'].map((n) => P[n]).filter(Boolean);
    if (stops.length < 2) return;
    // punto d'acqua vicino a ogni approdo e punto centrale del lago tra uno e l'altro
    const near = (p) => {
      for (let r = 50; r < 1500; r += 50)
        for (let a = 0; a < Math.PI * 2; a += 0.3) {
          const x = p.x + Math.cos(a) * r, z = p.z + Math.sin(a) * r;
          if (this.water(x, z, 6)) return [x, z];
        }
      return [p.x, p.z];
    };
    const route = [];
    for (let i = 0; i < stops.length; i++) {
      const a = near(stops[i]);
      route.push(a);
      if (i < stops.length - 1) {
        const b = near(stops[i + 1]);
        const zm = (a[1] + b[1]) / 2;
        route.push([lakeCenterAt(zm), zm]);
      }
    }
    const full = route.concat(route.slice(1, -1).reverse());
    this.ferryRoute = full;
    const im = new THREE.InstancedMesh(ferryGeo(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 }), 2);
    im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    im.frustumCulled = false;
    this.group.add(im);
    this.ferryMesh = im;
    this.ferries = [{ seg: 0, t: 0.1 }, { seg: Math.floor(full.length / 2), t: 0.4 }];
  }

  update(dt, time) {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), s = new THREE.Vector3(1, 1, 1);
    for (const b of this.movers) {
      const nx = b.x + Math.sin(b.hdg) * b.v * dt, nz = b.z - Math.cos(b.hdg) * b.v * dt;
      // vicino alla riva si vira
      const ax = b.x + Math.sin(b.hdg) * 60, az = b.z - Math.cos(b.hdg) * 60;
      if (!this.water(ax, az, 3)) b.hdg += (b.surf ? Math.PI : 2.4) + (rnd() - 0.5) * 0.4;
      else {
        b.x = nx;
        b.z = nz;
      }
      const heelSide = Math.sin(b.hdg) > 0 ? 1 : -1;
      e.set(Math.sin(time * 0.9 + b.bob) * 0.03, -b.hdg, b.heel * heelSide + Math.sin(time * 1.3 + b.bob) * 0.04, 'YXZ');
      q.setFromEuler(e);
      p.set(b.x, 0.05 + Math.sin(time * 1.7 + b.bob) * 0.08, b.z);
      m.compose(p, q, s);
      b.mesh.setMatrixAt(b.i, m);
    }
    if (this.sailMesh) this.sailMesh.instanceMatrix.needsUpdate = true;
    if (this.surfMesh) this.surfMesh.instanceMatrix.needsUpdate = true;
    if (this.ferryMesh) {
      const R = this.ferryRoute;
      this.ferries.forEach((f, i) => {
        const a = R[f.seg % R.length], b = R[(f.seg + 1) % R.length];
        const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
        f.t += (8 * dt) / L;
        if (f.t >= 1) {
          f.t = 0;
          f.seg = (f.seg + 1) % R.length;
        }
        const x = a[0] + (b[0] - a[0]) * f.t, z = a[1] + (b[1] - a[1]) * f.t;
        e.set(0, -Math.atan2(b[0] - a[0], -(b[1] - a[1])), 0, 'YXZ');
        q.setFromEuler(e);
        p.set(x, 0.1, z);
        m.compose(p, q, s);
        this.ferryMesh.setMatrixAt(i, m);
      });
      this.ferryMesh.instanceMatrix.needsUpdate = true;
    }
  }
}
