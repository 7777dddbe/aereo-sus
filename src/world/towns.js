// Paesi del Garda: edifici istanziati nei punti in cui ESA WorldCover vede superficie costruita
// (Riva, Torbole, Nago, Arco, Limone, Malcesine, Navene, Ledro...). Muri nei colori tipici del lago
// (ocra, crema, rosa, bianco) e tetti in coppi; orientamento coerente tra case vicine.

import * as THREE from 'three';
import { GARDA } from './garda.js';
import { createNoise2D } from '../core/math.js';

const WALLS = [0xe3c48c, 0xeadfc6, 0xdfae98, 0xefece4, 0xe8d39a, 0xd59d6f, 0xf0e2c8, 0xcfc2ae];
const ROOFS = [0xa4502f, 0x8f4428, 0xb35d38, 0x7a3c27, 0x9a5638, 0x6c6a66];

function wallGeometry() {
  // scatola con base all'origine; colori per vertice: zoccolo più scuro, finestre a fasce
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
  const v = [
    [-r, 0, -r], [r, 0, -r], [r, 0, r], [-r, 0, r],
    [-r + k, h, 0], [r - k, h, 0],
  ];
  const tri = [
    [0, 4, 5], [0, 5, 1], // falda nord
    [2, 5, 4], [2, 4, 3], // falda sud
    [1, 5, 2], // testata est
    [3, 4, 0], // testata ovest
  ];
  const pos = [];
  for (const t of tri) for (const i of t) pos.push(...v[i]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

export class Towns {
  constructor(scene, terrain, { quality = 'medium' } = {}) {
    const all = GARDA.buildings || [];
    const keep = quality === 'low' ? 0.45 : 1;
    const noise = createNoise2D(911);
    const list = [];
    for (let i = 0; i < all.length; i++) {
      const b = all[i];
      if (keep < 1 && ((i * 2654435761) >>> 0) / 4294967296 > keep) continue;
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
      // orientamento: campo continuo (case vicine allineate) + piccole variazioni
      const base = noise(b.x / 380, b.z / 380) * Math.PI * 0.9;
      const ang = base + (b.r < 0.5 ? 0 : Math.PI / 2) + (b.r - 0.5) * 0.12;
      q.setFromAxisAngle(up, ang);
      // sul pendio la casa affonda dal lato a valle
      const slopeDrop = Math.abs(terrain.heightAt(b.x + b.w * 0.5, b.z) - terrain.heightAt(b.x - b.w * 0.5, b.z)) + Math.abs(terrain.heightAt(b.x, b.z + b.d * 0.5) - terrain.heightAt(b.x, b.z - b.d * 0.5));
      const hWall = b.floors * 3.05 + 0.6 + slopeDrop * 0.6;
      const y0 = b.g - 0.6 - slopeDrop * 0.6;
      p.set(b.x, y0, b.z);
      s.set(b.w, hWall, b.d);
      m.compose(p, q, s);
      walls.setMatrixAt(i, m);
      c.setHex(WALLS[Math.floor(b.r * 977) % WALLS.length]);
      walls.setColorAt(i, c);
      // tetto: alto ~1/4 del lato corto, sporge un poco
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
      scene.add(im);
    }
    this.walls = walls;
    this.roofs = roofs;
  }
}
