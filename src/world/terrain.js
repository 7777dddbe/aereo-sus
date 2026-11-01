// Terreno reale del Garda Nord (Riva, Torbole, Limone, Malcesine, Monte Baldo, Valle di Ledro):
// altitudini Copernicus, immagine Sentinel-2 come colore di base con dettagli procedurali da vicino,
// anello di montagne lontane (Alpi), pista nella piana del Sarca con piazzale e hangar.

import * as THREE from 'three';
import { fbm, smoothstep, clamp, lerp, rng } from '../core/math.js';
import { tileableNoise, tileableWorley, dataTextureFromChannels, normalMapFromHeight, makeCanvas, canvasTexture } from '../core/textures.js';
import { GARDA, gardaHeight, farHeight, landcover, landClass } from './garda.js';

const M = GARDA.meta;
const RH = M.runway.heading;
export const DIR = { x: Math.sin(RH), z: -Math.cos(RH) }; // asse della pista
export const NRM = { x: -DIR.z * M.runway.apronSide, z: DIR.x * M.runway.apronSide }; // verso il piazzale

export const WORLD = {
  half: M.half,
  farHalf: M.farHalf,
  lake: { box: M.lakeBox, heading: M.lakeHeading },
  upperLakes: M.upperLakes,
  runway: { len: M.runway.len, wid: 30, elev: M.runway.elev, cx: M.runway.x, cz: M.runway.z, heading: RH },
  apron: { len: 260, wid: 110 },
  fireZones: M.fireZones,
  places: M.places,
};
WORLD.apron.cx = WORLD.runway.cx + NRM.x * 115;
WORLD.apron.cz = WORLD.runway.cz + NRM.z * 115;

// centro del Garda alla latitudine z (per le partenze): metà tra le due rive
export function lakeCenterAt(z) {
  const B = WORLD.lake.box;
  let x0 = null, x1 = null;
  for (let x = B.x0; x <= B.x1; x += 20) {
    if (landcover(x, z, 2) > 0.6 && gardaHeight(x, z) < -2) {
      if (x0 === null) x0 = x;
      x1 = x;
    }
  }
  return x0 === null ? 0 : (x0 + x1) / 2;
}

// ---------------------------------------------------------------------------
// Griglia non uniforme: un po' più fitta al centro, più rada ai bordi.
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

// maschera della zona aeroportuale (0..1) e spianamento
function runwayMask(x, z) {
  const R = WORLD.runway;
  const dx = x - R.cx, dz = z - R.cz;
  const along = dx * DIR.x + dz * DIR.z;
  const across = dx * NRM.x + dz * NRM.z;
  const mA = 1 - smoothstep(R.len / 2 + 120, R.len / 2 + 380, Math.abs(along));
  const mC = 1 - smoothstep(R.wid / 2 + 70, R.wid / 2 + 230, Math.abs(across - (across > 0 ? Math.min(across, 250) : 0)));
  return mA * mC;
}

export class Terrain {
  constructor({ quality = 'medium' } = {}) {
    const N = quality === 'low' ? 400 : quality === 'high' ? 900 : 640;
    this.N = N;
    this.xs = gridCoords(N, WORLD.half, 0.55);
    this.zs = this.xs;
    this.heights = new Float32Array(N * N);
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        this.heights[j * N + i] = this.height(this.xs[i], this.zs[j]);
      }
    }
  }

  // altitudine reale con la zona dell'aeroporto spianata
  height(x, z) {
    let h = gardaHeight(x, z);
    const m = runwayMask(x, z);
    if (m > 0) h = lerp(h, WORLD.runway.elev, m);
    return h;
  }

  // Altezza coerente con la mesh triangolata (fuori dal mondo interno: anello lontano)
  heightAt(x, z) {
    const S = WORLD.half;
    if (x < -S || x > S || z < -S || z > S) return farHeight(x, z);
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

  // copertura arborea reale (ESA WorldCover), niente alberi in aeroporto
  forestAt(x, z) {
    const S = WORLD.half - 20;
    if (x < -S || x > S || z < -S || z > S) return 0;
    if (runwayMask(x, z) > 0.05) return 0;
    return landcover(x, z, 1);
  }

  // zona dell'aeroporto (niente alberi né case)
  inAirfield(x, z) {
    return runwayMask(x, z) > 0.02;
  }

  landClassAt(x, z) {
    const S = WORLD.half - 20;
    if (x < -S || x > S || z < -S || z > S) return 0;
    return landClass(x, z);
  }

  // livello dei laghi in quota (Ledro, Tenno...) o null
  upperLakeAt(x, z) {
    for (const L of WORLD.upperLakes) {
      if (x < L.x0 || x > L.x1 || z < L.z0 || z > L.z1) continue;
      if (landcover(x, z, 2) > 0.5) return L.level;
    }
    return null;
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
    // raccordo pista-piazzale
    if (Math.abs(along) < 15 && across > 0 && across < 70) return true;
    return false;
  }

  surfaceFriction(x, z) {
    return this.isRunway(x, z) ? 1 : 0.55;
  }

  // -------------------------------------------------------------------------
  buildMesh(fireAtlas) {
    const N = this.N, S = WORLD.half;
    const nv = N * N + 4 * N; // griglia + bordo abbassato ("gonna" contro le fessure con l'anello lontano)
    const pos = new Float32Array(nv * 3);
    const uv = new Float32Array(nv * 2);
    const forest = new Float32Array(nv);
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const k = j * N + i;
        const x = this.xs[i], z = this.zs[j];
        pos[k * 3] = x;
        pos[k * 3 + 1] = this.heights[k];
        pos[k * 3 + 2] = z;
        uv[k * 2] = (x + S) / (2 * S);
        uv[k * 2 + 1] = (S - z) / (2 * S);
        forest[k] = this.forestAt(x, z);
      }
    }
    // bordo: 4 lati, vertici duplicati 150 m più in basso
    const border = [];
    for (let i = 0; i < N; i++) border.push(i); // nord
    for (let j = 0; j < N; j++) border.push(j * N + N - 1); // est
    for (let i = N - 1; i >= 0; i--) border.push((N - 1) * N + i); // sud
    for (let j = N - 1; j >= 0; j--) border.push(j * N); // ovest
    let v = N * N;
    const skirt = [];
    for (const k of border) {
      pos[v * 3] = pos[k * 3];
      pos[v * 3 + 1] = pos[k * 3 + 1] - 150;
      pos[v * 3 + 2] = pos[k * 3 + 2];
      uv[v * 2] = uv[k * 2];
      uv[v * 2 + 1] = uv[k * 2 + 1];
      forest[v] = 0;
      skirt.push([k, v]);
      v++;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setAttribute('aForest', new THREE.BufferAttribute(forest, 1));
    const idx = new Uint32Array((N - 1) * (N - 1) * 6 + skirt.length * 6);
    let p = 0;
    for (let j = 0; j < N - 1; j++) {
      for (let i = 0; i < N - 1; i++) {
        const a = j * N + i, b = (j + 1) * N + i, c = (j + 1) * N + i + 1, d = j * N + i + 1;
        idx[p++] = a; idx[p++] = b; idx[p++] = d;
        idx[p++] = b; idx[p++] = c; idx[p++] = d;
      }
    }
    for (let s = 0; s < skirt.length - 1; s++) {
      const [a, a2] = skirt[s], [b, b2] = skirt[s + 1];
      idx[p++] = a; idx[p++] = b; idx[p++] = a2;
      idx[p++] = b; idx[p++] = b2; idx[p++] = a2;
    }
    geo.setIndex(new THREE.BufferAttribute(idx.subarray(0, p), 1));
    geo.computeVertexNormals();
    this.forestGrid = forest;
    geo.computeBoundingSphere();

    const mat = createTerrainMaterial(fireAtlas);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    mesh.name = 'terrain';
    this.mesh = mesh;
    this.material = mat;
    return mesh;
  }

  // Anello lontano (80 x 80 km): le Alpi all'orizzonte, il Garda a sud, il Monte Baldo intero
  buildFarMesh() {
    const N = M.NFAR, S = M.farHalf, step = (2 * S) / (N - 1), H = WORLD.half;
    const pos = new Float32Array(N * N * 3), col = new Float32Array(N * N * 3);
    const C = {
      10: [0.03, 0.055, 0.022], 20: [0.07, 0.08, 0.04], 30: [0.1, 0.115, 0.05], 40: [0.13, 0.125, 0.065], 50: [0.2, 0.18, 0.16],
      60: [0.2, 0.19, 0.17], 70: [0.85, 0.87, 0.9], 80: [0.012, 0.03, 0.04], 90: [0.05, 0.07, 0.04], 95: [0.04, 0.06, 0.03], 100: [0.14, 0.14, 0.11],
    };
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const k = j * N + i;
        const x = -S + i * step, z = -S + j * step;
        let h = GARDA.far[k];
        // dentro il mondo interno resta sempre sotto il terreno dettagliato: minimo del terreno
        // vero nel raggio di una cella e mezza (così nessun triangolo lontano spunta nelle valli)
        if (Math.abs(x) < H + step && Math.abs(z) < H + step) {
          let mn = h;
          for (let dz = -450; dz <= 450; dz += 75)
            for (let dx = -450; dx <= 450; dx += 75) {
              const xx = x + dx, zz = z + dz;
              if (Math.abs(xx) < H && Math.abs(zz) < H) mn = Math.min(mn, gardaHeight(xx, zz));
            }
          h = Math.abs(x) < H && Math.abs(z) < H ? mn - 8 : Math.min(h, mn - 2);
        }
        pos[k * 3] = x;
        pos[k * 3 + 1] = h;
        pos[k * 3 + 2] = z;
        let c = C[GARDA.farClass[k]] || C[30];
        const alt = GARDA.far[k] + M.lakeMSL;
        if (alt > 2900 && GARDA.farClass[k] !== 80) c = C[70];
        else if (alt > 2200 && GARDA.farClass[k] !== 70) c = [0.16, 0.155, 0.14];
        col[k * 3] = c[0];
        col[k * 3 + 1] = c[1];
        col[k * 3 + 2] = c[2];
      }
    }
    const idx = new Uint32Array((N - 1) * (N - 1) * 6);
    let p = 0;
    for (let j = 0; j < N - 1; j++)
      for (let i = 0; i < N - 1; i++) {
        const a = j * N + i, b = (j + 1) * N + i, c = (j + 1) * N + i + 1, d = j * N + i + 1;
        idx[p++] = a; idx[p++] = b; idx[p++] = d;
        idx[p++] = b; idx[p++] = c; idx[p++] = d;
      }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.97, metalness: 0 }));
    mesh.name = 'farTerrain';
    mesh.receiveShadow = false;
    const group = new THREE.Group();
    group.add(mesh);
    // il Garda a sud del mondo interno: piano d'acqua attorno (con un buco al centro)
    const wm = new THREE.MeshStandardMaterial({ color: 0x0c2a33, roughness: 0.1, metalness: 0, envMapIntensity: 1.0 });
    for (const [cx, cz, w, d] of [
      [0, (H + S) / 2, 2 * S, S - H], [0, -(H + S) / 2, 2 * S, S - H], [(H + S) / 2, 0, S - H, 2 * H], [-(H + S) / 2, 0, S - H, 2 * H],
    ]) {
      const g = new THREE.PlaneGeometry(w, d);
      g.rotateX(-Math.PI / 2);
      const m = new THREE.Mesh(g, wm);
      m.position.set(cx, 0.05, cz);
      group.add(m);
    }
    return group;
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
  // immagine Sentinel-2 come colore di base (sRGB)
  const sat = new THREE.Texture(GARDA.satellite);
  sat.colorSpace = THREE.SRGBColorSpace;
  sat.anisotropy = 8;
  sat.wrapS = sat.wrapT = THREE.ClampToEdgeWrapping;
  sat.generateMipmaps = true;
  sat.minFilter = THREE.LinearMipmapLinearFilter;
  sat.needsUpdate = true;
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, map: sat, roughness: 0.95, metalness: 0 });
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
          float camD = length(vWPos - cameraPosition);
          float nearF = 1.0 - smoothstep(700.0, 3500.0, camD);
          // colore reale dal satellite (già lineare), leggermente meno saturo e più chiaro
          vec3 col = diffuseColor.rgb;
          float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
          col = mix(vec3(lum), col, 0.85) * 1.02;
          // dettagli da vicino: variazioni del suolo e chiome degli alberi
          col *= mix(1.0, 0.84 + 0.32 * nA.r, nearF);
          float crown = texture2D(tNoise, p / 23.0).b;
          float crown2 = texture2D(tNoise, p / 9.0 + 0.5).b;
          tFor = smoothstep(0.3, 0.75, vForest + (nB.g - 0.5) * 0.2);
          col *= mix(1.0, 0.62 + 0.55 * (crown * 0.7 + crown2 * 0.4), tFor * nearF);
          // pareti ripide: la foto dall'alto lì è "stirata"; si usa il colore medio della zona
          // con una roccia proiettata sui tre assi (strati e venature del calcare)
          float steep = smoothstep(0.32, 0.62, slope);
          if (steep > 0.0) {
            vec3 avg = texture2D(map, vMapUv, 3.5).rgb;
            float lavg = dot(avg, vec3(0.2126, 0.7152, 0.0722));
            avg = mix(vec3(lavg), avg, 0.6) * 0.92;
            vec3 an = abs(N);
            an /= (an.x + an.y + an.z);
            float tx = texture2D(tNoise, vWPos.zy / vec2(37.0, 9.0)).r;
            float ty = texture2D(tNoise, vWPos.xz / 41.0).r;
            float tz = texture2D(tNoise, vWPos.xy / vec2(37.0, 9.0)).r;
            float tri = tx * an.x + ty * an.y + tz * an.z;
            float tx2 = texture2D(tNoise, vWPos.zy / 7.0).g;
            float tz2 = texture2D(tNoise, vWPos.xy / 7.0).g;
            float tri2 = tx2 * an.x + tz2 * an.z + 0.5 * an.y;
            vec3 rockC = avg * (0.55 + 0.7 * tri) * (0.85 + 0.3 * tri2);
            col = mix(col, rockC, steep * (1.0 - tFor * 0.5));
          }
          // fondale del lago
          col = mix(col, col * 0.45 + vec3(0.012, 0.02, 0.016), 1.0 - smoothstep(-2.5, -0.2, h));
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
  g.fillStyle = '#45433f';
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
