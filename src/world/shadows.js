// Ombre solari "cotte" (il sole del gioco è fisso: sud-ovest, 41° di elevazione).
//  - mondo intero (23 m): le montagne ombreggiano valli e lago, con penombra morbida;
//  - zona ad alta risoluzione (3,9 m): case, alberi (chioma a 1 m) e terrazzamenti sul terreno vero.
// Il risultato è una piccola texture (1 = luce, 0 = ombra) letta dai materiali del terreno, dell'acqua,
// delle case e degli alberi: dall'alto le ombre dànno subito profondità e realismo.

import * as THREE from 'three';
import { GARDA, gardaHeight } from './garda.js';
import { OSM } from './osm.js';
import { WORLD } from './terrain.js';

const tick = () => new Promise((r) => setTimeout(r, 0));

export class BakedShadows {
  constructor() {
    this.uniforms = {
      tShG: { value: null },
      tShH: { value: null },
      shRectG: { value: new THREE.Vector4(-WORLD.half, -WORLD.half, 1 / (2 * WORLD.half), 1) },
      shRectH: { value: new THREE.Vector4(0, 0, 0, 0) },
      uShadowK: { value: 1 },
    };
  }

  // sunDir: vettore unitario verso il sole (mondo). chm: { data(RGBA), N, x0, z0, size } oppure null
  async bake(sunDir, onStep = null) {
    const horiz = Math.hypot(sunDir.x, sunDir.z);
    const sx = sunDir.x / horiz, sz = sunDir.z / horiz; // verso il sole sul piano
    const tanEl = sunDir.y / horiz;
    await this._bakeGlobal(sx, sz, tanEl);
    if (onStep) await onStep();
    await this._bakeLocal(sx, sz, tanEl);
  }

  // ----- montagne: griglia dei dati (1025 x 1025) -----
  async _bakeGlobal(sx, sz, tanEl) {
    const M = GARDA.meta, N = M.NH;
    // sul lago la "terra" è la superficie dell'acqua (quota 0), non il fondale
    const H = new Float32Array(GARDA.heights.length);
    for (let k = 0; k < H.length; k++) H[k] = GARDA.heights[k] > 0 ? GARDA.heights[k] : 0;
    const cell = (2 * M.half) / (N - 1);
    const out = new Uint8Array(N * N);
    const hb = (fx, fz) => {
      const i = fx | 0, j = fz | 0;
      if (i < 0 || j < 0 || i >= N - 1 || j >= N - 1) return -1e9;
      const tx = fx - i, tz = fz - j;
      const a = H[j * N + i], b = H[j * N + i + 1], c = H[(j + 1) * N + i], d = H[(j + 1) * N + i + 1];
      return (a * (1 - tx) + b * tx) * (1 - tz) + (c * (1 - tx) + d * tx) * tz;
    };
    const maxT = 3600; // m: ombre fino a 3,6 km (montagne da 2000 m)
    const steps = Math.ceil(maxT / cell);
    const stepx = sx * cell / cell, stepz = sz * cell / cell; // in celle
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const h0 = H[j * N + i] + 1.5;
        let shade = 0;
        let fx = i, fz = j;
        for (let k = 1; k <= steps; k++) {
          fx += stepx;
          fz += stepz;
          if (fx < 0 || fz < 0 || fx >= N - 1 || fz >= N - 1) break;
          const t = k * cell;
          const over = hb(fx, fz) - (h0 + t * tanEl); // quanto il rilievo supera il raggio
          if (over > 0) {
            // penombra: più il rilievo è lontano e più la transizione è morbida
            const soft = 6 + t * 0.012;
            const s = over / soft;
            if (s > shade) shade = s > 1 ? 1 : s;
            if (shade >= 1) break;
          }
        }
        out[j * N + i] = Math.round((1 - shade * 0.74) * 255);
      }
      if ((j & 63) === 0) await tick();
    }
    this.global = out;
    const tex = new THREE.DataTexture(out, N, N, THREE.RedFormat);
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearFilter;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.unpackAlignment = 1; // righe da 1025 byte: senza questo la scheda grafica le legge sfalsate
    tex.needsUpdate = true;
    this.uniforms.tShG.value = tex;
  }

  // ----- case, alberi, terreno: zona ad alta risoluzione -----
  async _bakeLocal(sx, sz, tanEl) {
    const C = GARDA.meta.chm;
    if (!C) {
      // senza zona locale: texture neutra
      const t = new THREE.DataTexture(new Uint8Array([255]), 1, 1, THREE.RedFormat);
      t.unpackAlignment = 1;
      t.needsUpdate = true;
      this.uniforms.tShH.value = t;
      return;
    }
    const N = C.N, size = C.size, cell = size / N;
    // altezza delle strutture: case dai dati OSM, alberi dalla chioma
    const objc = document.createElement('canvas');
    objc.width = objc.height = N;
    const g = objc.getContext('2d', { willReadFrequently: true });
    g.fillStyle = '#000';
    g.fillRect(0, 0, N, N);
    g.globalCompositeOperation = 'lighten';
    const k = N / size;
    for (const b of OSM.buildings) {
      const p = b.pts;
      let inside = false;
      for (let i = 0; i < p.length; i += 2) if (p[i] > C.x0 && p[i] < C.x0 + size && p[i + 1] > C.z0 && p[i + 1] < C.z0 + size) { inside = true; break; }
      if (!inside) continue;
      const hh = b.extra ? b.extra / 10 : 8.5;
      const v = Math.max(1, Math.min(255, Math.round(hh * 4)));
      g.fillStyle = `rgb(${v},${v},${v})`;
      g.beginPath();
      for (let i = 0; i < p.length; i += 2) {
        const x = (p[i] - C.x0) * k, y = (p[i + 1] - C.z0) * k;
        i ? g.lineTo(x, y) : g.moveTo(x, y);
      }
      g.closePath();
      g.fill();
    }
    const bld = g.getImageData(0, 0, N, N).data;
    const chm = GARDA.chm; // RGBA: R = altezza*4, G = copertura
    const E = new Float32Array(N * N); // quota della superficie (terreno + oggetti)
    const G0 = new Float32Array(N * N);
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const x = C.x0 + (i + 0.5) * cell, z = C.z0 + (j + 0.5) * cell;
        const gh = Math.max(0, gardaHeight(x, z)); // sul lago il "suolo" è la superficie dell'acqua
        const kk = j * N + i;
        const tree = chm ? chm.data[kk * 4] / 4 : 0;
        const bh = bld[kk * 4] / 4;
        G0[kk] = gh;
        E[kk] = gh + Math.max(tree * 0.9, bh);
      }
      if ((j & 127) === 0) await tick();
    }
    const eb = (fx, fz) => {
      const i = fx | 0, j = fz | 0;
      if (i < 0 || j < 0 || i >= N - 1 || j >= N - 1) return -1e9;
      const tx = fx - i, tz = fz - j;
      const a = E[j * N + i], b = E[j * N + i + 1], c = E[(j + 1) * N + i], d = E[(j + 1) * N + i + 1];
      return (a * (1 - tx) + b * tx) * (1 - tz) + (c * (1 - tx) + d * tx) * tz;
    };
    const raw = new Float32Array(N * N);
    const maxT = 160;
    const stepC = 0.75; // celle per passo: nessun salto di celle, niente righe
    const steps = Math.ceil(maxT / (cell * stepC));
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const kk = j * N + i;
        const h0 = E[kk] + 0.5;
        let shade = 0;
        let fx = i + 0.5, fz = j + 0.5;
        for (let s = 1; s <= steps; s++) {
          fx += sx * stepC;
          fz += sz * stepC;
          if (fx < 0 || fz < 0 || fx >= N - 1 || fz >= N - 1) break;
          const t = s * stepC * cell;
          const over = eb(fx, fz) - (h0 + t * tanEl);
          if (over > 0) {
            const v = over / (1.5 + t * 0.05); // penombra più larga con la distanza
            if (v > shade) shade = v > 1 ? 1 : v;
            if (shade >= 1) break;
          }
        }
        raw[kk] = shade;
      }
      if ((j & 63) === 0) await tick();
    }
    // sfocatura 5x5 separabile: chiome e tetti danno ombre morbide, non a puntini
    const tmp = new Float32Array(N * N);
    for (let j = 0; j < N; j++)
      for (let i = 0; i < N; i++) {
        let a = 0, w = 0;
        for (let d = -2; d <= 2; d++) {
          const ii = i + d;
          if (ii < 0 || ii >= N) continue;
          a += raw[j * N + ii];
          w++;
        }
        tmp[j * N + i] = a / w;
      }
    const out = new Uint8Array(N * N);
    for (let j = 0; j < N; j++)
      for (let i = 0; i < N; i++) {
        let a = 0, w = 0;
        for (let d = -2; d <= 2; d++) {
          const jj = j + d;
          if (jj < 0 || jj >= N) continue;
          a += tmp[jj * N + i];
          w++;
        }
        out[j * N + i] = Math.round((1 - (a / w) * 0.78) * 255);
      }
    await tick();
    const tex = new THREE.DataTexture(out, N, N, THREE.RedFormat);
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearFilter;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.unpackAlignment = 1;
    tex.needsUpdate = true;
    this.uniforms.tShH.value = tex;
    this.uniforms.shRectH.value.set(C.x0, C.z0, 1 / size, 1);
    this.local = out;
  }

  // ---- GLSL condiviso ----
  static get GLSL_DECL() {
    return `
      uniform sampler2D tShG;
      uniform sampler2D tShH;
      uniform vec4 shRectG;
      uniform vec4 shRectH;
      uniform float uShadowK;
      float bakedShade(vec3 wp) {
        vec2 ug = (wp.xz - shRectG.xy) * shRectG.z;
        float s = texture2D(tShG, ug).r;
        if (shRectH.w > 0.5) {
          vec2 uh = (wp.xz - shRectH.xy) * shRectH.z;
          if (uh.x > 0.0 && uh.y > 0.0 && uh.x < 1.0 && uh.y < 1.0) {
            float e = smoothstep(0.0, 0.02, min(min(uh.x, uh.y), min(1.0 - uh.x, 1.0 - uh.y)));
            s = min(s, mix(1.0, texture2D(tShH, uh).r, e));
          }
        }
        return s;
      }`;
  }
  static GLSL_APPLY(worldExpr) {
    // vicino alla camera le ombre in tempo reale hanno la precedenza: l'ombra cotta svanisce
    return `
      {
        vec3 bsWp = ${worldExpr};
        float bsFade = smoothstep(18.0, 140.0, length(bsWp - cameraPosition));
        float bsh = mix(1.0, bakedShade(bsWp), uShadowK * bsFade);
        reflectedLight.directDiffuse *= bsh;
        reflectedLight.directSpecular *= bsh;
      }`;
  }

  // aggancia l'ombra cotta a un materiale con luci (Standard o Lambert). Per i materiali istanziati o
  // senza posizione nel mondo, la posizione si calcola nel vertex shader.
  attach(material, { instanced = true } = {}) {
    const prev = material.onBeforeCompile;
    const uni = this.uniforms;
    material.onBeforeCompile = (shader, renderer) => {
      if (prev) prev(shader, renderer);
      Object.assign(shader.uniforms, uni);
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vBW;')
        .replace(
          '#include <project_vertex>',
          `#include <project_vertex>
          {
            vec4 bw = vec4(transformed, 1.0);
            #ifdef USE_INSTANCING
              bw = instanceMatrix * bw;
            #endif
            vBW = (modelMatrix * bw).xyz;
          }`,
        );
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\nvarying vec3 vBW;\n${BakedShadows.GLSL_DECL}`)
        .replace('#include <aomap_fragment>', `${BakedShadows.GLSL_APPLY('vBW')}\n#include <aomap_fragment>`);
    };
    material.customProgramCacheKey = () => 'baked1' + (prev ? 'p' : '');
    material.needsUpdate = true;
  }
}
