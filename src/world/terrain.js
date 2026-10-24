// Terreno procedurale: lago lungo e stretto in una valle, colline boscose, montagne laterali,
// aeroporto con pista, piazzale e rampa per idrovolanti che scende nel lago.

import * as THREE from 'three';
import { createNoise2D, fbm, ridged, smoothstep, clamp, lerp, rng } from '../core/math.js';
import { tileableNoise, tileableWorley, dataTextureFromChannels, normalMapFromHeight, makeCanvas, canvasTexture } from '../core/textures.js';

const LAKE_ANGLE = 0.35;
const cosA = Math.cos(LAKE_ANGLE), sinA = Math.sin(LAKE_ANGLE);
export const DIR = { x: cosA, z: sinA }; // asse lungo del lago
export const NRM = { x: -sinA, z: cosA }; // verso sud

export const WORLD = {
  half: 12000,
  lake: { cx: 0, cz: 0, a: 3400, b: 900 },
  runway: { len: 1800, wid: 30, elev: 9, cx: 0, cz: 0, angle: LAKE_ANGLE },
  apron: { len: 260, wid: 110 },
  ramp: { wid: 24 },
  island: { u: 1500, v: 170, r: 160 },
  fireZones: [],
};
// Pista 1.7 km a nord del centro del lago, parallela al suo asse
WORLD.runway.cx = -NRM.x * 1750 + DIR.x * 250;
WORLD.runway.cz = -NRM.z * 1750 + DIR.z * 250;
WORLD.apron.cx = WORLD.runway.cx + NRM.x * 115;
WORLD.apron.cz = WORLD.runway.cz + NRM.z * 115;
WORLD.ramp.x0 = WORLD.apron.cx + NRM.x * 55;
WORLD.ramp.z0 = WORLD.apron.cz + NRM.z * 55;
// la rampa termina dentro il lago
WORLD.ramp.x1 = WORLD.ramp.x0 + NRM.x * 900;
WORLD.ramp.z1 = WORLD.ramp.z0 + NRM.z * 900;

// Zone degli incendi (sui versanti)
WORLD.fireZones = [
  { x: NRM.x * 2350 - DIR.x * 900, z: NRM.z * 2350 - DIR.z * 900, size: 768, name: 'Versante Sud — Pineta' },
  { x: NRM.x * 2700 + DIR.x * 1800, z: NRM.z * 2700 + DIR.z * 1800, size: 768, name: 'Collina di Monte Rosso' },
  { x: -NRM.x * 2900 + DIR.x * 3300, z: -NRM.z * 2900 + DIR.z * 3300, size: 768, name: 'Bosco del Nord-Est' },
  { x: NRM.x * 2200 - DIR.x * 4300, z: NRM.z * 2200 - DIR.z * 4300, size: 768, name: 'Valle Ovest' },
];

export function toLake(x, z) {
  const dx = x - WORLD.lake.cx, dz = z - WORLD.lake.cz;
  return { u: dx * cosA + dz * sinA, v: -dx * sinA + dz * cosA };
}
export function fromLake(u, v) {
  return { x: WORLD.lake.cx + u * cosA - v * sinA, z: WORLD.lake.cz + u * sinA + v * cosA };
}

function segDist(px, pz, x0, z0, x1, z1) {
  const vx = x1 - x0, vz = z1 - z0;
  const t = clamp(((px - x0) * vx + (pz - z0) * vz) / (vx * vx + vz * vz), 0, 1);
  const dx = px - (x0 + vx * t), dz = pz - (z0 + vz * t);
  return { d: Math.hypot(dx, dz), t };
}

// ---------------------------------------------------------------------------
export class HeightField {
  constructor(seed = 1415) {
    this.noise = createNoise2D(seed);
    this.noise2 = createNoise2D(seed + 11);
    this.noise3 = createNoise2D(seed + 23);
  }

  lakeE(x, z) {
    const { u, v } = toLake(x, z);
    const L = WORLD.lake;
    let e = Math.sqrt((u / L.a) ** 2 + (v / L.b) ** 2);
    e += 0.07 * this.noise(x / 800, z / 800) + 0.03 * this.noise2(x / 230, z / 230);
    // baia laterale
    const bay = Math.hypot((u + 1600) / 520, (v - 820) / 380);
    e = Math.min(e, bay * 0.98 + 0.02);
    return { e, u, v };
  }

  raw(x, z) {
    const n = this.noise, n2 = this.noise2, n3 = this.noise3;
    const { e, u, v } = this.lakeE(x, z);
    const corridor = smoothstep(700, 2900, Math.abs(v) + 0.25 * Math.max(0, Math.abs(u) - 5500));
    const far = smoothstep(1.05, 3.6, e);
    const rid = ridged(n, x / 3800 + 10, z / 3800 - 7, 5);
    const mountains = (0.18 + 0.82 * corridor) * Math.pow(far, 1.25) * (300 + 520 * rid);
    const hills = 38 * fbm(n2, x / 950, z / 950, 4) + 14 * fbm(n3, x / 260, z / 260, 3) + 4 * n3(x / 60, z / 60);
    const shoreRise = smoothstep(1.0, 1.7, e);
    let land = 3.5 + 7 * shoreRise + (hills + 22) * shoreRise * 0.75 + mountains;
    // lago
    const depth = -1.5 - 26 * smoothstep(0.98, 0.45, e) + 2.5 * fbm(n3, x / 400, z / 400, 3);
    let h;
    if (e < 0.97) h = depth;
    else if (e < 1.06) {
      const t = smoothstep(0.97, 1.06, e);
      h = lerp(depth, land, t);
    } else h = land;
    // isola
    const I = WORLD.island;
    const di = Math.hypot(u - I.u, v - I.v) / I.r;
    if (di < 1.6) h = Math.max(h, lerp(14 + 6 * n(x / 80, z / 80), -3, smoothstep(0.2, 1.4, di)));
    return h;
  }

  // altezza con aeroporto, rampa e piazzale spianati
  height(x, z) {
    let h = this.raw(x, z);
    const R = WORLD.runway;
    const dx = x - R.cx, dz = z - R.cz;
    const along = dx * DIR.x + dz * DIR.z;
    const across = dx * NRM.x + dz * NRM.z;
    // pista + strisce laterali + piazzale
    const mA = 1 - smoothstep(R.len / 2 + 120, R.len / 2 + 420, Math.abs(along));
    const mC = 1 - smoothstep(R.wid / 2 + 70, R.wid / 2 + 260, Math.abs(across - (across > 0 ? Math.min(across, 180) : 0)));
    const m = mA * mC;
    if (m > 0) h = lerp(h, R.elev, m);
    // rampa: dal piazzale scende nel lago
    const Rp = WORLD.ramp;
    const sd = segDist(x, z, Rp.x0, Rp.z0, Rp.x1, Rp.z1);
    const mr = 1 - smoothstep(Rp.wid / 2 + 4, Rp.wid / 2 + 60, sd.d);
    if (mr > 0) {
      const len = Math.hypot(Rp.x1 - Rp.x0, Rp.z1 - Rp.z0);
      const dist = sd.t * len;
      const shoreDist = this._rampShore || (this._rampShore = this._findRampShore());
      // pendenza costante ~7% negli ultimi 140 m fino a -3 m
      const hr = dist < shoreDist - 110 ? R.elev : lerp(R.elev, -3.2, clamp((dist - (shoreDist - 110)) / 170, 0, 1));
      h = lerp(h, hr, mr);
    }
    return h;
  }

  _findRampShore() {
    const Rp = WORLD.ramp;
    const len = Math.hypot(Rp.x1 - Rp.x0, Rp.z1 - Rp.z0);
    for (let d = 0; d < len; d += 2) {
      const x = Rp.x0 + ((Rp.x1 - Rp.x0) * d) / len;
      const z = Rp.z0 + ((Rp.z1 - Rp.z0) * d) / len;
      if (this.raw(x, z) < 0.5) return d;
    }
    return len * 0.7;
  }

  forest(x, z, h, slope) {
    if (h < 2.5) return 0;
    const R = WORLD.runway;
    const dx = x - R.cx, dz = z - R.cz;
    const along = dx * DIR.x + dz * DIR.z;
    const across = dx * NRM.x + dz * NRM.z;
    if (Math.abs(along) < R.len / 2 + 450 && across > -260 && across < 420) return 0;
    const Rp = WORLD.ramp;
    if (segDist(x, z, Rp.x0, Rp.z0, Rp.x1, Rp.z1).d < 70) return 0;
    let f = 0.55 + 0.6 * fbm(this.noise2, x / 1400 + 3, z / 1400 - 5, 4) + 0.25 * this.noise3(x / 300, z / 300);
    f *= smoothstep(2.5, 9, h);
    f *= 1 - smoothstep(780, 1050, h);
    f *= 1 - smoothstep(0.55, 0.8, slope);
    return clamp(f, 0, 1);
  }
}

// ---------------------------------------------------------------------------
// Griglia non uniforme: fitta al centro, rada ai bordi.
function gridCoords(N, S, a) {
  const xs = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const t = (i / (N - 1)) * 2 - 1;
    const at = Math.abs(t);
    xs[i] = Math.sign(t) * S * (a * at + (1 - a) * at * at * at);
  }
  return xs;
}

function findCell(xs, x) {
  let lo = 0, hi = xs.length - 1;
  if (x <= xs[0]) return 0;
  if (x >= xs[hi]) return hi - 1;
  while (hi - lo > 1) {
    const m = (lo + hi) >> 1;
    if (xs[m] > x) hi = m;
    else lo = m;
  }
  return lo;
}

export class Terrain {
  constructor({ quality = 'medium', seed = 1415 } = {}) {
    this.hf = new HeightField(seed);
    const N = quality === 'low' ? 360 : quality === 'high' ? 760 : 560;
    this.N = N;
    this.xs = gridCoords(N, WORLD.half, 0.3);
    this.zs = this.xs;
    this.heights = new Float32Array(N * N);
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        this.heights[j * N + i] = this.hf.height(this.xs[i], this.zs[j]);
      }
    }
  }

  // Altezza coerente con la mesh triangolata
  heightAt(x, z) {
    const N = this.N, xs = this.xs, zs = this.zs, H = this.heights;
    const i = findCell(xs, x), j = findCell(zs, z);
    const fx = clamp((x - xs[i]) / (xs[i + 1] - xs[i]), 0, 1);
    const fz = clamp((z - zs[j]) / (zs[j + 1] - zs[j]), 0, 1);
    const ha = H[j * N + i], hb = H[(j + 1) * N + i], hc = H[(j + 1) * N + i + 1], hd = H[j * N + i + 1];
    if (fx + fz <= 1) return ha + (hd - ha) * fx + (hb - ha) * fz;
    return hc + (hb - hc) * (1 - fx) + (hd - hc) * (1 - fz);
  }

  normalAt(x, z, out = new THREE.Vector3()) {
    const e = 4;
    const hx = this.heightAt(x + e, z) - this.heightAt(x - e, z);
    const hz = this.heightAt(x, z + e) - this.heightAt(x, z - e);
    return out.set(-hx, 2 * e, -hz).normalize();
  }

  isRunway(x, z) {
    const R = WORLD.runway;
    const dx = x - R.cx, dz = z - R.cz;
    const along = dx * DIR.x + dz * DIR.z;
    const across = dx * NRM.x + dz * NRM.z;
    if (Math.abs(along) < R.len / 2 && Math.abs(across) < R.wid / 2 + 3) return true;
    const A = WORLD.apron;
    const ax = x - A.cx, az = z - A.cz;
    if (Math.abs(ax * DIR.x + az * DIR.z) < A.len / 2 && Math.abs(ax * NRM.x + az * NRM.z) < A.wid / 2) return true;
    const Rp = WORLD.ramp;
    if (segDist(x, z, Rp.x0, Rp.z0, Rp.x1, Rp.z1).d < Rp.wid / 2) return true;
    // raccordo pista-piazzale
    if (Math.abs(along) < 15 && across > 0 && across < 70) return true;
    return false;
  }

  surfaceFriction(x, z) {
    return this.isRunway(x, z) ? 1 : 0.55;
  }

  // -------------------------------------------------------------------------
  buildMesh(fireAtlas) {
    const N = this.N;
    const pos = new Float32Array(N * N * 3);
    const forest = new Float32Array(N * N);
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const k = j * N + i;
        pos[k * 3] = this.xs[i];
        pos[k * 3 + 1] = this.heights[k];
        pos[k * 3 + 2] = this.zs[j];
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const idx = new Uint32Array((N - 1) * (N - 1) * 6);
    let p = 0;
    for (let j = 0; j < N - 1; j++) {
      for (let i = 0; i < N - 1; i++) {
        const a = j * N + i, b = (j + 1) * N + i, c = (j + 1) * N + i + 1, d = j * N + i + 1;
        idx[p++] = a; idx[p++] = b; idx[p++] = d;
        idx[p++] = b; idx[p++] = c; idx[p++] = d;
      }
    }
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.computeVertexNormals();
    const nrm = geo.attributes.normal.array;
    for (let k = 0; k < N * N; k++) {
      forest[k] = this.hf.forest(pos[k * 3], pos[k * 3 + 2], pos[k * 3 + 1], 1 - nrm[k * 3 + 1]);
    }
    this.forestGrid = forest;
    geo.setAttribute('aForest', new THREE.BufferAttribute(forest, 1));
    geo.computeBoundingSphere();

    const mat = createTerrainMaterial(fireAtlas);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    mesh.name = 'terrain';
    this.mesh = mesh;
    this.material = mat;
    return mesh;
  }

  forestAt(x, z) {
    const N = this.N;
    const i = findCell(this.xs, x), j = findCell(this.zs, z);
    return this.forestGrid ? this.forestGrid[j * N + i] : 0;
  }
}

// ---------------------------------------------------------------------------
let _terrainTextures = null;
function terrainTextures() {
  if (_terrainTextures) return _terrainTextures;
  const size = 512;
  const n = tileableNoise(size, 8, 6, 31, 0.55);
  const n2 = tileableNoise(size, 32, 3, 37, 0.5);
  const crowns = tileableWorley(size, 900, 41);
  const crownH = new Float32Array(size * size);
  for (let i = 0; i < crownH.length; i++) crownH[i] = Math.sqrt(Math.max(0, 1 - crowns[i] * 1.05)) * (0.7 + 0.6 * n2[i]);
  const noiseTex = dataTextureFromChannels(size, [n, n2, crownH, 1]);
  const crownNormal = normalMapFromHeight(crownH, size, 5);
  _terrainTextures = { noiseTex, crownNormal };
  return _terrainTextures;
}

function createTerrainMaterial(fireAtlas) {
  const { noiseTex, crownNormal } = terrainTextures();
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, metalness: 0 });
  const uniforms = {
    tNoise: { value: noiseTex },
    tCrown: { value: crownNormal },
    tBurn: { value: fireAtlas ? fireAtlas.texture : null },
    burnRects: { value: fireAtlas ? fireAtlas.rects : [new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4()] },
    uTime: { value: 0 },
  };
  mat.userData.uniforms = uniforms;
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        attribute float aForest;
        varying float vForest;
        varying vec3 vWPos;
        varying vec3 vWN;`,
      )
      .replace(
        '#include <project_vertex>',
        `#include <project_vertex>
        vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vWN = normalize(mat3(modelMatrix) * objectNormal);
        vForest = aForest;`,
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform sampler2D tNoise;
        uniform sampler2D tCrown;
        uniform sampler2D tBurn;
        uniform vec4 burnRects[4];
        uniform float uTime;
        varying float vForest;
        varying vec3 vWPos;
        varying vec3 vWN;
        vec4 burnSample(vec2 p) {
          vec4 r = vec4(0.0);
          for (int i = 0; i < 4; i++) {
            vec4 R = burnRects[i];
            if (R.z <= 0.0) continue;
            vec2 uv = (p - R.xy) / R.z;
            if (uv.x > 0.0 && uv.y > 0.0 && uv.x < 1.0 && uv.y < 1.0) {
              vec2 cell = vec2(mod(R.w, 2.0), floor(R.w / 2.0));
              r = max(r, texture2D(tBurn, (cell + uv) * 0.5));
            }
          }
          return r;
        }
        float tFor = 0.0;
        vec4 tBurnV = vec4(0.0);`,
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        {
          vec2 p = vWPos.xz;
          float h = vWPos.y;
          vec3 N = normalize(vWN);
          float slope = 1.0 - N.y;
          vec4 nA = texture2D(tNoise, p / 61.0);
          vec4 nB = texture2D(tNoise, p / 437.0 + 0.31);
          vec4 nC = texture2D(tNoise, p / 2900.0 + 0.77);
          float macro = nC.r;
          vec3 dryGrass = mix(vec3(0.19, 0.155, 0.06), vec3(0.15, 0.135, 0.05), nB.r);
          vec3 greenGrass = mix(vec3(0.085, 0.13, 0.035), vec3(0.14, 0.16, 0.05), nA.r);
          vec3 grass = mix(greenGrass, dryGrass, smoothstep(0.35, 0.75, macro + nB.g * 0.3));
          grass *= 0.8 + 0.4 * nA.g;
          vec3 rock = mix(vec3(0.17, 0.15, 0.13), vec3(0.28, 0.26, 0.23), nA.r) * (0.75 + 0.5 * nB.g);
          vec3 sand = mix(vec3(0.42, 0.36, 0.22), vec3(0.52, 0.45, 0.28), nA.g);
          vec3 wetSand = vec3(0.16, 0.13, 0.08);
          vec3 lakebed = mix(vec3(0.09, 0.085, 0.05), vec3(0.15, 0.13, 0.08), nA.r);
          // chiome del bosco
          float crown = texture2D(tNoise, p / 23.0).b;
          float crown2 = texture2D(tNoise, p / 9.0 + 0.5).b;
          vec3 canopyDark = vec3(0.016, 0.034, 0.011);
          vec3 canopyLight = mix(vec3(0.05, 0.085, 0.022), vec3(0.075, 0.09, 0.03), nB.r);
          vec3 canopy = mix(canopyDark, canopyLight, crown * 0.75 + crown2 * 0.35);
          canopy *= 0.75 + 0.5 * macro;
          tFor = smoothstep(0.25, 0.55, vForest + (nB.g - 0.5) * 0.35);
          vec3 col = mix(grass, canopy, tFor);
          col = mix(col, rock, smoothstep(0.42, 0.62, slope + (nA.r - 0.5) * 0.25) * (1.0 - tFor * 0.6));
          // spiagge e fondale
          float beach = 1.0 - smoothstep(1.8, 4.5 + nA.r * 2.0, h);
          col = mix(col, sand, beach * (1.0 - smoothstep(0.35, 0.6, slope)));
          col = mix(col, wetSand, 1.0 - smoothstep(-0.2, 0.8, h));
          col = mix(col, lakebed, 1.0 - smoothstep(-2.5, -0.3, h));
          // bruciato / bagnato
          tBurnV = burnSample(p);
          vec3 ash = mix(vec3(0.018, 0.016, 0.014), vec3(0.05, 0.047, 0.043), nA.g);
          col = mix(col, ash, smoothstep(0.05, 0.6, tBurnV.r));
          col *= 1.0 - 0.35 * tBurnV.b;
          // ritardante/schiuma lasciata a terra
          col = mix(col, vec3(0.45, 0.45, 0.43), tBurnV.a * 0.5);
          diffuseColor.rgb = col;
        }`,
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
        roughnessFactor = mix(0.97, 0.75, 1.0 - smoothstep(-0.2, 0.6, vWPos.y));
        roughnessFactor = mix(roughnessFactor, 0.6, tBurnV.b * 0.5);`,
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
        {
          float camD = length(vWPos - cameraPosition);
          float fade = 1.0 - smoothstep(1500.0, 5000.0, camD);
          vec3 cn = texture2D(tCrown, vWPos.xz / 23.0).xyz * 2.0 - 1.0;
          vec3 cn2 = texture2D(tCrown, vWPos.xz / 9.0 + 0.5).xyz * 2.0 - 1.0;
          vec3 bump = vec3(cn.x + cn2.x * 0.5, 0.0, cn.y + cn2.y * 0.5) * tFor * 0.9 * fade * (1.0 - tBurnV.r);
          normal = normalize(normal + (viewMatrix * vec4(bump, 0.0)).xyz);
        }`,
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        {
          float flick = 0.6 + 0.4 * sin(uTime * 7.0 + vWPos.x * 0.3) * sin(uTime * 5.3 + vWPos.z * 0.27);
          totalEmissiveRadiance += vec3(1.0, 0.38, 0.06) * tBurnV.g * tBurnV.g * 1.2 * flick;
        }`,
      );
  };
  return mat;
}

// ---------------------------------------------------------------------------
// Pista con segnaletica (texture disegnata su canvas)
export function buildAirfield(terrain) {
  const group = new THREE.Group();
  group.name = 'airfield';
  const R = WORLD.runway;
  const heading = ((Math.atan2(DIR.x, -DIR.z) * 180) / Math.PI + 360) % 360;
  const num1 = Math.round(heading / 10) % 36 || 36;
  const num2 = ((num1 + 17) % 36) + 1;

  // texture pista: 64 px/m in larghezza (30 m -> 512 px? usiamo 16 px/m)
  const pxm = 16;
  const W = R.wid * pxm; // 480
  const Lpx = 4096;
  const cv = makeCanvas(W, Lpx);
  const g = cv.getContext('2d');
  // asfalto con variazioni
  g.fillStyle = '#3a3a3c';
  g.fillRect(0, 0, W, Lpx);
  const rand = rng(77);
  for (let i = 0; i < 26000; i++) {
    const v = 40 + rand() * 30;
    g.fillStyle = `rgba(${v},${v},${v + 2},${0.25 + rand() * 0.3})`;
    g.fillRect(rand() * W, rand() * Lpx, 1 + rand() * 3, 1 + rand() * 3);
  }
  // tracce di pneumatici nelle zone di contatto
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 260; i++) {
      const y = k === 0 ? 300 + rand() * 900 : Lpx - 300 - rand() * 900;
      const x = W / 2 + (rand() - 0.5) * 8 * pxm;
      g.fillStyle = `rgba(15,15,15,${0.08 + rand() * 0.12})`;
      g.fillRect(x, y, 2 + rand() * 4, 60 + rand() * 200);
    }
  }
  const sy = Lpx / R.len; // px per metro in lunghezza
  g.fillStyle = '#e8e8e2';
  // linee di bordo
  g.fillRect(0.5 * pxm, 0, 0.9 * pxm, Lpx);
  g.fillRect(W - 1.4 * pxm, 0, 0.9 * pxm, Lpx);
  // asse tratteggiato
  for (let m = 70; m < R.len - 70; m += 50) {
    if (m > 110 && m < R.len - 110) g.fillRect(W / 2 - 0.45 * pxm, m * sy, 0.9 * pxm, 30 * sy);
  }
  // soglie a "pettine" e numeri
  const drawEnd = (flip, num) => {
    g.save();
    if (flip) {
      g.translate(W, Lpx);
      g.rotate(Math.PI);
    }
    for (let i = 0; i < 12; i++) {
      const x = 2.5 * pxm + i * 2.1 * pxm + (i >= 6 ? 3.2 * pxm : 0);
      g.fillRect(x, 6 * sy, 1.5 * pxm, 30 * sy);
    }
    g.font = `bold ${Math.round(9 * sy)}px Arial`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.save();
    g.translate(W / 2, 62 * sy);
    g.rotate(Math.PI); // leggibile da chi atterra su questa testata
    g.scale(1.6, 2.4);
    g.fillText(String(num).padStart(2, '0'), 0, 0);
    g.restore();
    // zona di contatto
    for (const m of [150, 300, 450]) {
      g.fillRect(W / 2 - 9 * pxm, m * sy, 1.8 * pxm, 22 * sy);
      g.fillRect(W / 2 + 7.2 * pxm, m * sy, 1.8 * pxm, 22 * sy);
    }
    g.fillRect(W / 2 - 10 * pxm, 300 * sy, 4 * pxm, 45 * sy);
    g.fillRect(W / 2 + 6 * pxm, 300 * sy, 4 * pxm, 45 * sy);
    g.restore();
  };
  // l'estremità a y=0 corrisponde alla testata percorsa nella direzione DIR (numero = heading)
  // in alto (v=1) c'è l'estremità verso +DIR: chi vi atterra vola verso -DIR (num2)
  drawEnd(false, num2);
  drawEnd(true, num1);
  const tex = canvasTexture(cv, { srgb: true, aniso: 16 });
  const rwGeo = new THREE.PlaneGeometry(R.wid, R.len, 1, 64);
  rwGeo.rotateX(-Math.PI / 2);
  const rwMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.88, metalness: 0 });
  const rw = new THREE.Mesh(rwGeo, rwMat);
  rw.receiveShadow = true;
  rw.position.set(R.cx, R.elev + 0.07, R.cz);
  rw.rotation.y = Math.atan2(-DIR.x, -DIR.z); // -z locale -> DIR
  group.add(rw);

  // piazzale e raccordo in calcestruzzo
  const cc = makeCanvas(512, 512);
  const cg = cc.getContext('2d');
  cg.fillStyle = '#8d8c86';
  cg.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 9000; i++) {
    const v = 120 + rand() * 40;
    cg.fillStyle = `rgba(${v},${v},${v - 4},0.35)`;
    cg.fillRect(rand() * 512, rand() * 512, 2, 2);
  }
  cg.strokeStyle = 'rgba(60,60,58,0.7)';
  cg.lineWidth = 2;
  for (let i = 0; i <= 512; i += 64) {
    cg.beginPath(); cg.moveTo(i, 0); cg.lineTo(i, 512); cg.stroke();
    cg.beginPath(); cg.moveTo(0, i); cg.lineTo(512, i); cg.stroke();
  }
  const ctex = canvasTexture(cc, { srgb: true, repeat: true });
  ctex.repeat.set(WORLD.apron.len / 40, WORLD.apron.wid / 40);
  const cMat = new THREE.MeshStandardMaterial({ map: ctex, roughness: 0.92 });
  const A = WORLD.apron;
  const apGeo = new THREE.PlaneGeometry(A.len, A.wid);
  apGeo.rotateX(-Math.PI / 2);
  const ap = new THREE.Mesh(apGeo, cMat);
  ap.position.set(A.cx, R.elev + 0.06, A.cz);
  ap.rotation.y = rw.rotation.y + Math.PI / 2;
  ap.receiveShadow = true;
  group.add(ap);
  const twGeo = new THREE.PlaneGeometry(22, 72);
  twGeo.rotateX(-Math.PI / 2);
  const tw = new THREE.Mesh(twGeo, cMat.clone());
  tw.material.map = ctex.clone();
  tw.material.map.repeat.set(0.6, 2);
  tw.position.set(R.cx + NRM.x * 52, R.elev + 0.055, R.cz + NRM.z * 52);
  tw.rotation.y = rw.rotation.y + Math.PI / 2;
  tw.receiveShadow = true;
  group.add(tw);

  // rampa per idrovolanti: segue il terreno
  const Rp = WORLD.ramp;
  const rlen = Math.hypot(Rp.x1 - Rp.x0, Rp.z1 - Rp.z0);
  const segs = 90;
  const rGeo = new THREE.PlaneGeometry(Rp.wid, rlen, 1, segs);
  rGeo.rotateX(-Math.PI / 2);
  const rp = rGeo.attributes.position;
  const ang = Math.atan2(NRM.x, NRM.z);
  const ca = Math.cos(ang), sa = Math.sin(ang);
  for (let i = 0; i < rp.count; i++) {
    const lx = rp.getX(i), lz = rp.getZ(i);
    // asse locale z lungo la rampa (da x0 a x1)
    const t = 0.5 - lz / rlen;
    const wx = Rp.x0 + (Rp.x1 - Rp.x0) * t + lx * NRM.z;
    const wz = Rp.z0 + (Rp.z1 - Rp.z0) * t - lx * NRM.x;
    rp.setXYZ(i, wx, terrain.heightAt(wx, wz) + 0.08, wz);
  }
  rGeo.computeVertexNormals();
  const rampMat = cMat.clone();
  rampMat.map = ctex.clone();
  rampMat.map.repeat.set(1, rlen / 30);
  const ramp = new THREE.Mesh(rGeo, rampMat);
  ramp.receiveShadow = true;
  group.add(ramp);

  buildBuildings(group, terrain, rw.rotation.y);
  return group;
}

function buildBuildings(group, terrain, rot) {
  const R = WORLD.runway;
  const place = (obj, along, across) => {
    const x = R.cx + DIR.x * along + NRM.x * across;
    const z = R.cz + DIR.z * along + NRM.z * across;
    obj.position.set(x, R.elev, z);
    obj.rotation.y = rot;
    group.add(obj);
    return obj;
  };
  const wall = new THREE.MeshStandardMaterial({ color: 0xd8d2c4, roughness: 0.85 });
  const roofM = new THREE.MeshStandardMaterial({ color: 0x7a2f22, roughness: 0.7 });
  const metal = new THREE.MeshStandardMaterial({ color: 0xaab0b5, roughness: 0.45, metalness: 0.6 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x2a2d30, roughness: 0.6 });
  const redM = new THREE.MeshStandardMaterial({ color: 0xb01d16, roughness: 0.5 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x223040, roughness: 0.1, metalness: 0.8 });

  // hangar ad arco
  for (let k = 0; k < 2; k++) {
    const hg = new THREE.Group();
    const arch = new THREE.CylinderGeometry(18, 18, 40, 28, 1, true, -Math.PI / 2, Math.PI);
    arch.rotateZ(Math.PI / 2);
    arch.scale(1, 0.62, 1);
    const shell = new THREE.Mesh(arch, metal);
    shell.rotation.y = Math.PI / 2;
    shell.castShadow = true;
    shell.receiveShadow = true;
    hg.add(shell);
    const back = new THREE.Mesh(new THREE.CircleGeometry(18, 28, 0, Math.PI), wall);
    back.scale.y = 0.62;
    back.position.z = 20;
    back.rotation.y = Math.PI;
    hg.add(back);
    const door = new THREE.Mesh(new THREE.PlaneGeometry(30, 10), dark);
    door.position.set(0, 5, -20);
    door.rotation.y = Math.PI;
    hg.add(door);
    place(hg, -125 + k * 46, 205).rotation.y = rot + Math.PI / 2;
  }
  // torre di controllo
  const tower = new THREE.Group();
  const tb = new THREE.Mesh(new THREE.BoxGeometry(6, 14, 6), wall);
  tb.position.y = 7;
  tb.castShadow = true;
  tower.add(tb);
  const cab = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4, 3.4, 8), glass);
  cab.position.y = 15.7;
  tower.add(cab);
  const cabRoof = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 5.2, 0.6, 8), dark);
  cabRoof.position.y = 17.7;
  tower.add(cabRoof);
  place(tower, 55, 200);
  // caserma dei vigili del fuoco + edifici
  const st = new THREE.Group();
  const sb = new THREE.Mesh(new THREE.BoxGeometry(36, 7, 16), wall);
  sb.position.y = 3.5;
  sb.castShadow = true;
  st.add(sb);
  const sr = new THREE.Mesh(new THREE.BoxGeometry(37, 0.6, 17), roofM);
  sr.position.y = 7.3;
  st.add(sr);
  for (let i = 0; i < 4; i++) {
    const d = new THREE.Mesh(new THREE.PlaneGeometry(6, 5), redM);
    d.position.set(-12 + i * 8, 2.6, -8.05);
    d.rotation.y = Math.PI;
    st.add(d);
  }
  place(st, 120, 190);
  // serbatoi carburante
  for (let i = 0; i < 2; i++) {
    const tk = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 7, 20), new THREE.MeshStandardMaterial({ color: 0xe0e0dc, roughness: 0.5 }));
    tk.position.y = 3.5;
    tk.castShadow = true;
    const gg = new THREE.Group();
    gg.add(tk);
    place(gg, 170 + i * 11, 215);
  }
  // manica a vento
  const ws = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 6, 6), metal);
  pole.position.y = 3;
  ws.add(pole);
  const sock = new THREE.Mesh(new THREE.ConeGeometry(0.45, 3.2, 12, 1, true), new THREE.MeshStandardMaterial({ color: 0xff5a1a, roughness: 0.8, side: THREE.DoubleSide }));
  sock.rotation.z = Math.PI / 2;
  sock.position.set(1.7, 5.8, 0);
  ws.add(sock);
  ws.userData.sock = sock;
  place(ws, -R.len / 2 + 250, -45);
  group.userData.windsock = ws;
}
