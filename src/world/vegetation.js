// Vegetazione: pini domestici, conifere e lecci istanziati attorno alla telecamera,
// con diradamento in funzione della distanza e oscillazione al vento.

import * as THREE from 'three';
import { rng, clamp, createNoise2D } from '../core/math.js';
import { WORLD } from './terrain.js';

const CHUNK = 400;

function colorize(geo, fn) {
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const c = fn(pos.getX(i), pos.getY(i), pos.getZ(i), i);
    col[i * 3] = c[0];
    col[i * 3 + 1] = c[1];
    col[i * 3 + 2] = c[2];
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}

function merge(geos) {
  // unione semplice di geometrie non indicizzate con position/normal/color
  const list = geos.map((g) => (g.index ? g.toNonIndexed() : g));
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

function jitter(geo, amount, seed) {
  const r = rng(seed);
  const p = geo.attributes.position;
  const map = new Map();
  for (let i = 0; i < p.count; i++) {
    const key = `${p.getX(i).toFixed(3)},${p.getY(i).toFixed(3)},${p.getZ(i).toFixed(3)}`;
    let d = map.get(key);
    if (!d) {
      d = [(r() - 0.5) * amount, (r() - 0.5) * amount, (r() - 0.5) * amount];
      map.set(key, d);
    }
    p.setXYZ(i, p.getX(i) + d[0], p.getY(i) + d[1], p.getZ(i) + d[2]);
  }
  geo.computeVertexNormals();
  return geo;
}

const TRUNK = [0.11, 0.07, 0.04];

function trunkGeo(h, r0, r1) {
  const g = new THREE.CylinderGeometry(r1, r0, h, 5, 1, true);
  g.translate(0, h / 2, 0);
  return colorize(g, () => TRUNK);
}

function foliageColor(base, var1 = 0.25) {
  return (x, y, z, i) => {
    const s = 0.75 + var1 * Math.sin(i * 12.9898) * 0.5 + 0.25 * clamp(y / 10, 0, 1);
    return [base[0] * s, base[1] * s, base[2] * s];
  };
}

function umbrellaPine() {
  const t = trunkGeo(7.2, 0.32, 0.2);
  const c1 = new THREE.SphereGeometry(1, 8, 5);
  c1.scale(4.4, 1.55, 4.0);
  c1.translate(0.3, 8.0, 0);
  jitter(c1, 0.9, 3);
  colorize(c1, foliageColor([0.035, 0.065, 0.02]));
  const c2 = new THREE.SphereGeometry(1, 7, 4);
  c2.scale(2.6, 1.1, 2.4);
  c2.translate(-1.9, 7.3, 1.1);
  jitter(c2, 0.6, 4);
  colorize(c2, foliageColor([0.03, 0.06, 0.018]));
  return merge([t, c1, c2]);
}

function conifer() {
  const t = trunkGeo(3, 0.25, 0.18);
  const parts = [t];
  const tiers = [
    [2.5, 4.6, 2.2],
    [2.0, 4.0, 5.0],
    [1.35, 3.4, 7.6],
    [0.7, 2.6, 9.8],
  ];
  tiers.forEach(([r, h, y], k) => {
    const c = new THREE.ConeGeometry(r, h, 7, 1, true);
    c.translate(0, y, 0);
    jitter(c, 0.35, 10 + k);
    colorize(c, foliageColor([0.022, 0.05, 0.022], 0.35));
    parts.push(c);
  });
  return merge(parts);
}

function holmOak() {
  const t = trunkGeo(3.6, 0.3, 0.22);
  const parts = [t];
  const blobs = [
    [0, 5.2, 0, 2.9],
    [1.6, 4.6, 0.9, 2.1],
    [-1.4, 4.4, -0.8, 2.2],
    [0.3, 6.4, -0.6, 1.9],
  ];
  blobs.forEach(([x, y, z, r], k) => {
    const g = new THREE.IcosahedronGeometry(r, 1);
    g.translate(x, y, z);
    jitter(g, 0.7, 20 + k);
    colorize(g, foliageColor([0.04, 0.06, 0.02], 0.35));
    parts.push(g);
  });
  return merge(parts);
}

export class Vegetation {
  constructor(terrain, scene, { quality = 'medium' } = {}) {
    this.terrain = terrain;
    this.radius = quality === 'low' ? 800 : quality === 'high' ? 2200 : 1500;
    this.maxPerType = quality === 'low' ? 9000 : quality === 'high' ? 45000 : 26000;
    this.chunks = new Map();
    this.noise = createNoise2D(99);
    this.time = { value: 0 };
    this.burnFn = null;
    const geos = [umbrellaPine(), conifer(), holmOak()];
    this.meshes = geos.map((g, k) => {
      const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
      mat.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = this.time;
        shader.vertexShader = shader.vertexShader
          .replace('#include <common>', '#include <common>\nuniform float uTime;')
          .replace(
            '#include <begin_vertex>',
            `#include <begin_vertex>
            #ifdef USE_INSTANCING
              vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
              float sway = sin(uTime * 1.3 + ip.x * 0.05 + ip.z * 0.04) * 0.5 + sin(uTime * 2.7 + ip.x * 0.11) * 0.25;
              float hh = max(position.y - 2.5, 0.0) / 9.0;
              transformed.x += sway * hh * hh * 0.35;
              transformed.z += sway * hh * hh * 0.2;
            #endif`,
          );
      };
      const im = new THREE.InstancedMesh(g, mat, this.maxPerType);
      im.count = 0;
      im.frustumCulled = false;
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      im.setColorAt(0, new THREE.Color(1, 1, 1));
      im.instanceColor.setUsage(THREE.DynamicDrawUsage);
      im.name = 'trees' + k;
      scene.add(im);
      return im;
    });
    this.lastCenter = new THREE.Vector3(1e9, 0, 1e9);
    this.visible = [[], [], []];
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._s = new THREE.Vector3();
    this._p = new THREE.Vector3();
    this._c = new THREE.Color();
    this._pending = [];
  }

  _genChunk(cx, cz) {
    const key = cx + ',' + cz;
    let ch = this.chunks.get(key);
    if (ch) return ch;
    const r = rng((cx * 73856093) ^ (cz * 19349663));
    const list = [];
    const step = 9.5;
    const x0 = cx * CHUNK, z0 = cz * CHUNK;
    const T = this.terrain;
    for (let gz = 0; gz < CHUNK; gz += step) {
      for (let gx = 0; gx < CHUNK; gx += step) {
        const x = x0 + gx + (r() - 0.5) * step * 0.9;
        const z = z0 + gz + (r() - 0.5) * step * 0.9;
        const f = T.forestAt(x, z);
        if (f <= 0.02) continue;
        const dens = clamp(f * 1.25 + 0.25 * this.noise(x / 60, z / 60), 0, 1);
        if (r() > dens) continue;
        const h = T.heightAt(x, z);
        if (h < 2.5) continue;
        const nz = this.noise(x / 700 + 5, z / 700);
        let type = 0;
        const rr = r();
        if (h > 350 || nz > 0.35) type = rr < 0.7 ? 1 : 2;
        else if (nz < -0.25) type = rr < 0.75 ? 2 : 0;
        else type = rr < 0.6 ? 0 : rr < 0.8 ? 2 : 1;
        const s = 0.7 + r() * 0.65;
        list.push({ x, y: h - 0.2, z, type, s, rot: r() * Math.PI * 2, tint: 0.8 + r() * 0.45, hue: r(), rank: r() });
      }
    }
    ch = { list };
    this.chunks.set(key, ch);
    return ch;
  }

  update(camPos, dt, force = false) {
    this.time.value += dt;
    const dx = camPos.x - this.lastCenter.x, dz = camPos.z - this.lastCenter.z;
    const altFactor = clamp(1 + (camPos.y - 300) / 1500, 1, 2.2);
    if (!force && dx * dx + dz * dz < 140 * 140 && Math.abs(altFactor - (this._altF || 1)) < 0.2) return;
    this._altF = altFactor;
    this.lastCenter.copy(camPos);
    const R = this.radius * altFactor;
    const cmin = Math.floor((camPos.x - R) / CHUNK), cmax = Math.floor((camPos.x + R) / CHUNK);
    const zmin = Math.floor((camPos.z - R) / CHUNK), zmax = Math.floor((camPos.z + R) / CHUNK);
    const counts = [0, 0, 0];
    const vis = [[], [], []];
    const lim = WORLD.half - 200;
    for (let cz = zmin; cz <= zmax; cz++) {
      for (let cx = cmin; cx <= cmax; cx++) {
        if (Math.abs(cx * CHUNK) > lim || Math.abs(cz * CHUNK) > lim) continue;
        const ccx = (cx + 0.5) * CHUNK - camPos.x, ccz = (cz + 0.5) * CHUNK - camPos.z;
        if (ccx * ccx + ccz * ccz > (R + CHUNK) * (R + CHUNK)) continue;
        const ch = this._genChunk(cx, cz);
        for (const t of ch.list) {
          const d = Math.hypot(t.x - camPos.x, t.z - camPos.z);
          if (d > R) continue;
          // diradamento con la distanza
          const keep = d < R * 0.3 ? 1 : 1 - (d - R * 0.3) / (R * 0.7) * 0.8;
          if (t.rank > keep) continue;
          vis[t.type].push(t);
        }
      }
    }
    // limita al massimo per tipo tenendo i più vicini
    for (let k = 0; k < 3; k++) {
      let arr = vis[k];
      if (arr.length > this.maxPerType) {
        arr.sort((a, b) => (a.x - camPos.x) ** 2 + (a.z - camPos.z) ** 2 - ((b.x - camPos.x) ** 2 + (b.z - camPos.z) ** 2));
        arr = arr.slice(0, this.maxPerType);
      }
      this.visible[k] = arr;
      const im = this.meshes[k];
      for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        this._q.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, t.rot);
        this._s.set(t.s, t.s * (0.9 + t.hue * 0.25), t.s);
        this._p.set(t.x, t.y, t.z);
        this._m.compose(this._p, this._q, this._s);
        im.setMatrixAt(i, this._m);
      }
      im.count = arr.length;
      im.instanceMatrix.needsUpdate = true;
      counts[k] = arr.length;
    }
    this.refreshColors();
    this.counts = counts;
  }

  refreshColors() {
    for (let k = 0; k < 3; k++) {
      const arr = this.visible[k];
      const im = this.meshes[k];
      for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        const burnt = this.burnFn ? this.burnFn(t.x, t.z) : 0;
        const s = t.tint * (1 - burnt * 0.93);
        this._c.setRGB(s * (0.9 + 0.2 * t.hue), s, s * (0.85 + 0.2 * (1 - t.hue)));
        im.setColorAt(i, this._c);
      }
      if (im.instanceColor) im.instanceColor.needsUpdate = true;
    }
  }
}
