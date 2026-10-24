// Incendi boschivi: automa cellulare con combustibile, vento e pendenza; estinzione con l'acqua
// (livelli di copertura in L/m²) e schiuma; fiamme, fumo illuminato, braci e colonne termiche.

import * as THREE from 'three';
import { WORLD } from './terrain.js';
import { ParticleSystem } from '../fx/particles.js';
import { softSprite, tileableNoise, dataTextureFromChannels } from '../core/textures.js';
import { clamp, rng, DEG } from '../core/math.js';

const N = 96; // celle per lato di ogni zona
const R = Math.random;

function flameTexture() {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const img = g.createImageData(size, size);
  const n = tileableNoise(size, 8, 4, 71, 0.55);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = (x + 0.5) / size * 2 - 1;
      const v = (y + 0.5) / size; // 0 alto .. 1 basso
      const width = 0.25 + 0.6 * Math.pow(v, 0.7);
      let a = Math.max(0, 1 - Math.abs(u) / width);
      a *= Math.pow(v, 0.6) * (1 - Math.pow(v, 6));
      a *= 0.6 + 0.8 * n[y * size + x];
      a = Math.min(1, a * 1.4);
      const i = (y * size + x) * 4;
      const hot = Math.pow(v, 2) * (1 - Math.abs(u));
      img.data[i] = 255;
      img.data[i + 1] = 120 + 135 * hot;
      img.data[i + 2] = 40 + 160 * hot * hot;
      img.data[i + 3] = a * 255;
    }
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class FireSystem {
  constructor(scene, terrain, env, { quality = 'medium' } = {}) {
    this.terrain = terrain;
    this.env = env;
    const q = quality === 'low' ? 0.5 : quality === 'high' ? 1.4 : 1;
    this.q = q;
    this.zones = WORLD.fireZones.map((z, k) => {
      const size = z.size;
      const cell = size / N;
      const x0 = z.x - size / 2, z0 = z.z - size / 2;
      const fuel = new Float32Array(N * N);
      const heat = new Float32Array(N * N);
      const burnt = new Float32Array(N * N);
      const wet = new Float32Array(N * N);
      const foam = new Float32Array(N * N);
      const hgt = new Float32Array(N * N);
      for (let j = 0; j < N; j++) {
        for (let i = 0; i < N; i++) {
          const x = x0 + (i + 0.5) * cell, zz = z0 + (j + 0.5) * cell;
          const f = terrain.forestAt(x, zz);
          const h = terrain.heightAt(x, zz);
          hgt[j * N + i] = h;
          fuel[j * N + i] = h < 1 ? 0 : clamp(0.25 + 0.85 * f, 0, 1);
        }
      }
      return { ...z, k, size, cell, x0, z0, fuel, heat, burnt, wet, foam, hgt, active: false, burning: 0, burntCells: 0, state: 'quiete', cx: z.x, cz: z.z, intensity: 0, ignitedAt: -1 };
    });
    // atlante per il terreno (2x2 zone)
    this.atlasData = new Uint8Array(2 * N * 2 * N * 4);
    this.atlas = new THREE.DataTexture(this.atlasData, 2 * N, 2 * N, THREE.RGBAFormat);
    this.atlas.magFilter = THREE.LinearFilter;
    this.atlas.minFilter = THREE.LinearFilter;
    this.atlas.needsUpdate = true;
    this.rects = this.zones.map((z) => new THREE.Vector4(z.x0, z.z0, z.size, z.k));
    this.fireAtlas = { texture: this.atlas, rects: this.rects };

    this.flames = new ParticleSystem({ max: Math.round(3200 * q), texture: flameTexture(), blending: 'additive', name: 'flames', renderOrder: 8, emissive: 0.0 });
    this.smoke = new ParticleSystem({ max: Math.round(2600 * Math.max(q, 0.7)), texture: softSprite(128, { power: 1.25, noise: 0.45, seed: 21 }), lit: 1.0, sort: true, name: 'smoke', renderOrder: 9, growth: 0.85 });
    this.embers = new ParticleSystem({ max: Math.round(700 * q), texture: softSprite(32, { power: 2 }), blending: 'additive', name: 'embers', renderOrder: 8 });
    scene.add(this.flames.mesh, this.smoke.mesh, this.embers.mesh);
    this.tick = 0;
    this.time = 0;
    this.texTimer = 0;
    this.wind = new THREE.Vector3();
    this.events = [];
    this.totalWater = 0;
    this.effectiveWater = 0;
  }

  ignite(k, x, z, radius = 30) {
    const Z = this.zones[k];
    Z.active = true;
    if (Z.ignitedAt < 0) Z.ignitedAt = this.time;
    const ci = Math.floor((x - Z.x0) / Z.cell), cj = Math.floor((z - Z.z0) / Z.cell);
    const r = Math.ceil(radius / Z.cell);
    for (let j = cj - r; j <= cj + r; j++) {
      for (let i = ci - r; i <= ci + r; i++) {
        if (i < 1 || j < 1 || i >= N - 1 || j >= N - 1) continue;
        if (Math.hypot(i - ci, j - cj) > r) continue;
        const c = j * N + i;
        if (Z.fuel[c] > 0.1) Z.heat[c] = Math.max(Z.heat[c], 0.4 + R() * 0.4);
      }
    }
  }

  // Avvio scenario: incendi iniziali
  start(level = 1) {
    const z0 = this.zones[0];
    this.ignite(0, z0.x - 60, z0.z + 80, 45);
    this.ignite(0, z0.x + 50, z0.z + 120, 25);
    const z1 = this.zones[1];
    this.ignite(1, z1.x, z1.z, 35);
    this.nextIgnition = 300;
  }

  cellAt(x, z) {
    for (const Z of this.zones) {
      const i = Math.floor((x - Z.x0) / Z.cell), j = Math.floor((z - Z.z0) / Z.cell);
      if (i >= 0 && j >= 0 && i < N && j < N) return { Z, c: j * N + i, i, j };
    }
    return null;
  }

  burntAt(x, z) {
    const h = this.cellAt(x, z);
    if (!h) return 0;
    return Math.max(h.Z.burnt[h.c], h.Z.heat[h.c] > 0.5 ? 0.6 : 0);
  }

  // acqua che tocca il suolo: litri distribuiti sulle celle vicine
  deposit(x, z, liters, foam) {
    this.totalWater += liters;
    const h = this.cellAt(x, z);
    if (!h) return;
    const { Z } = h;
    const area = Z.cell * Z.cell;
    // dispersione su 3x3 celle
    for (let dj = -1; dj <= 1; dj++) {
      for (let di = -1; di <= 1; di++) {
        const i = h.i + di, j = h.j + dj;
        if (i < 0 || j < 0 || i >= N || j >= N) continue;
        const w = di === 0 && dj === 0 ? 0.4 : 0.075;
        const c = j * N + i;
        const lpm2 = (liters * w) / area; // L/m²
        const eff = foam ? 2.4 : 1;
        // livello di copertura ~2.5 L/m² per bosco fitto
        Z.wet[c] = Math.min(1.5, Z.wet[c] + (lpm2 / 2.5) * eff);
        if (foam) Z.foam[c] = Math.min(1, Z.foam[c] + lpm2 * 0.5);
        if (Z.heat[c] > 0) {
          this.effectiveWater += liters * w;
          Z.heat[c] = Math.max(0, Z.heat[c] - (lpm2 / 2.0) * eff * 1.3);
          if (R() < 0.3) this._steam(Z, c);
        }
      }
    }
  }

  _cellPos(Z, c) {
    const i = c % N, j = Math.floor(c / N);
    return [Z.x0 + (i + R()) * Z.cell, Z.hgt[c], Z.z0 + (j + R()) * Z.cell];
  }

  _steam(Z, c) {
    const [x, y, z] = this._cellPos(Z, c);
    this.smoke.spawn(x, y + 3, z, this.wind.x * 0.5, 3 + R() * 3, this.wind.z * 0.5, {
      life: 10 + R() * 8, size0: 8, size1: 40 + R() * 20, alpha: 0.35, r: 0.86, g: 0.86, b: 0.86, drag: 0.3, grav: 0, fadeIn: 0.05, user: 0.3,
    });
  }

  update(dt, time, cameraPos) {
    this.time = time;
    this.env.windAt(0, 200, 0, time, this.wind);
    const wind = this.wind;
    const wl = Math.hypot(wind.x, wind.z) || 1;
    const wdx = wind.x / wl, wdz = wind.z / wl;
    this.tick += dt;
    const thermals = [];
    if (this.tick >= 0.25) {
      const T = this.tick;
      this.tick = 0;
      for (const Z of this.zones) {
        if (!Z.active) continue;
        let burning = 0, burntCells = 0, sx = 0, sz = 0, sw = 0;
        const list = Z.list || (Z.list = new Int32Array(N * N));
        let nl = 0;
        const heat = Z.heat, fuel = Z.fuel, wet = Z.wet, burnt = Z.burnt, hg = Z.hgt;
        const next = this._next || (this._next = new Float32Array(N * N));
        next.set(heat);
        for (let j = 1; j < N - 1; j++) {
          for (let i = 1; i < N - 1; i++) {
            const c = j * N + i;
            // evaporazione
            if (wet[c] > 0) wet[c] = Math.max(0, wet[c] - T * (0.0018 + heat[c] * 0.02) * (Z.foam[c] > 0.2 ? 0.4 : 1));
            if (burnt[c] > 0.5) burntCells++;
            const hcur = heat[c];
            if (hcur <= 0.01) continue;
            burning++;
            if (hcur > 0.08) list[nl++] = c;
            sx += i * hcur;
            sz += j * hcur;
            sw += hcur;
            // crescita e consumo del combustibile
            const target = fuel[c] * (1 - clamp(wet[c] * 1.4, 0, 1));
            let h = hcur + (target - hcur) * T * 0.25;
            fuel[c] = Math.max(0, fuel[c] - hcur * T * 0.006);
            burnt[c] = Math.min(1, burnt[c] + hcur * T * 0.05);
            if (fuel[c] < 0.05) h *= 1 - T * 0.5;
            if (wet[c] > 0.3) h -= T * 0.2 * wet[c];
            next[c] = Math.max(0, h);
            // propagazione ai vicini (vento + pendenza)
            for (let dj = -1; dj <= 1; dj++) {
              for (let di = -1; di <= 1; di++) {
                if (!di && !dj) continue;
                const n = c + dj * N + di;
                if (heat[n] > 0.05 || fuel[n] < 0.12 || wet[n] > 0.25) continue;
                const dl = Math.hypot(di, dj);
                const align = (di * wdx + dj * wdz) / dl;
                const slope = (hg[n] - hg[c]) / (dl * Z.cell);
                const p = 0.018 * hcur * fuel[n] * Math.exp(1.2 * align * clamp(wl / 5, 0.3, 2.5)) * Math.exp(clamp(slope, -0.5, 0.8) * 3) * (1 - wet[n] * 3) / dl;
                if (R() < p * T * 4) next[n] = Math.max(next[n], 0.15 + 0.2 * R());
              }
            }
          }
        }
        heat.set(next);
        Z.burning = burning;
        Z.nList = nl;
        Z.burntCells = burntCells;
        if (sw > 0) {
          Z.cx = Z.x0 + (sx / sw + 0.5) * Z.cell;
          Z.cz = Z.z0 + (sz / sw + 0.5) * Z.cell;
        }
        Z.intensity = sw;
        const prev = Z.state;
        if (sw > 45) Z.wasActive = true;
        Z.state = burning === 0 ? (burntCells > 0 ? 'spento' : 'quiete') : sw < 15 && Z.wasActive ? 'contenuto' : 'attivo';
        if (prev !== Z.state && (Z.state === 'spento' || Z.state === 'contenuto')) {
          this.events.push({ type: 'fire', text: `${Z.name}: incendio ${Z.state.toUpperCase()}`, level: Z.state === 'spento' ? 'good' : 'info' });
        }
        if (burning === 0) Z.active = burntCells > 0 ? false : Z.active;
      }
      this._uploadAtlas();
      // nuovi focolai nel tempo (scenario dinamico)
      if (this.nextIgnition !== undefined && time > this.nextIgnition) {
        const quiet = this.zones.filter((z) => !z.active && z.burntCells === 0);
        if (quiet.length) {
          const Z = quiet[Math.floor(R() * quiet.length)];
          this.ignite(Z.k, Z.x + (R() - 0.5) * 200, Z.z + (R() - 0.5) * 200, 30);
          this.events.push({ type: 'fire', text: `NUOVO FOCOLAIO: ${Z.name}`, level: 'warn' });
        }
        this.nextIgnition = time + 360 + R() * 240;
      }
    }

    // colonne termiche per il modello di volo
    for (const Z of this.zones) {
      if (Z.intensity > 2) thermals.push({ x: Z.cx, z: Z.cz, r: 120 + Math.sqrt(Z.intensity) * 15, w: clamp(Z.intensity * 0.06, 1, 9), top: Z.hgt[(N * N) >> 1] + 900 });
    }
    this.env.thermals = thermals;

    // ---------------- Particelle ----------------
    const camDist = (x, z) => Math.hypot(x - cameraPos.x, z - cameraPos.z);
    for (const Z of this.zones) {
      if (!Z.burning) continue;
      const d = camDist(Z.cx, Z.cz);
      const lod = d > 7000 ? 0.15 : d > 3500 ? 0.4 : 1;
      // fiamme: campiona celle che bruciano
      if (!Z.nList) continue;
      const flameRate = Math.min(900, Z.burning * 3.2) * this.q * lod;
      let nf = Math.floor(flameRate * dt + R());
      while (nf-- > 0) {
        const c = Z.list[(R() * Z.nList) | 0];
        const h = Z.heat[c];
        if (h < 0.05) continue;
        const [x, y, z] = this._cellPos(Z, c);
        const s = 3 + h * 9 * (0.6 + R() * 0.8);
        this.flames.spawn(x, y + s * 0.35, z, wind.x * 0.2, 2.5 + R() * 3 * h, wind.z * 0.2, {
          life: 0.6 + R() * 0.9, size0: s * 0.6, size1: s, alpha: 0.75 + R() * 0.25, r: 1, g: 0.55 + R() * 0.25, b: 0.25,
          drag: 0.5, grav: 2, fadeIn: 0.15, rot: (R() - 0.5) * 0.3,
        });
        if (R() < 0.05) {
          this.embers.spawn(x, y + 2, z, wind.x * 0.5 + (R() - 0.5) * 3, 4 + R() * 8, wind.z * 0.5 + (R() - 0.5) * 3, {
            life: 2 + R() * 3, size0: 0.35, size1: 0.2, alpha: 1, r: 1, g: 0.5, b: 0.12, drag: 0.6, grav: -1,
          });
        }
      }
      // fumo
      const smokeRate = Math.min(22, 3 + Z.intensity * 0.2) * Math.max(0.6, this.q) * (lod < 1 ? 0.6 : 1);
      let ns = Math.floor(smokeRate * dt + R());
      while (ns-- > 0) {
        const c = Z.list[(R() * Z.nList) | 0];
        const h = Math.max(Z.heat[c], 0.1);
        const [x, y, z] = this._cellPos(Z, c);
        const dark = clamp(h * 0.8 + (1 - Z.fuel[c]) * 0.2, 0, 1);
        const base = 0.78 - dark * 0.3 + R() * 0.08;
        this.smoke.spawn(x, y + 10, z, wind.x * 0.4, 6 + h * 10 + R() * 3, wind.z * 0.4, {
          life: 70 + R() * 40, size0: 16 + R() * 12, size1: 200 + R() * 160, alpha: 0.55 + h * 0.25,
          r: base * 1.04, g: base, b: base * 0.93, drag: 0.08, grav: 0, fadeIn: 0.04, rotV: (R() - 0.5) * 0.05, user: 0.6 + h * 0.6,
        });
      }
    }
    // fumo: la spinta di galleggiamento cala con la quota, il vento lo piega
    const s = this.smoke;
    for (let i = 0; i < s.n; i++) {
      // galleggiamento dei gas caldi che si esaurisce raffreddandosi
      s.v[i * 3 + 1] += dt * 1.7 * Math.max(0, 1 - s.age[i] / 80) * s.user[i];
    }
    const windUp = this._windUp || (this._windUp = new THREE.Vector3());
    windUp.set(wind.x * 1.25, 0, wind.z * 1.25);
    s.simulate(dt, windUp, null);
    this.flames.simulate(dt, wind, null);
    this.embers.simulate(dt, wind, null);
  }

  _uploadAtlas() {
    const d = this.atlasData;
    const W = 2 * N;
    for (const Z of this.zones) {
      const ox = (Z.k % 2) * N, oy = Math.floor(Z.k / 2) * N;
      for (let j = 0; j < N; j++) {
        for (let i = 0; i < N; i++) {
          const c = j * N + i;
          const p = ((oy + j) * W + ox + i) * 4;
          d[p] = Math.min(255, Z.burnt[c] * 255);
          d[p + 1] = Math.min(255, Z.heat[c] * 255);
          d[p + 2] = Math.min(255, Z.wet[c] * 200);
          d[p + 3] = Math.min(255, Z.foam[c] * 255);
        }
      }
    }
    this.atlas.needsUpdate = true;
  }

  render(camera, env) {
    const sunC = new THREE.Color(1.0, 0.92, 0.82).multiplyScalar(1.7);
    const amb = new THREE.Color(0.7, 0.75, 0.84);
    this.smoke.setLighting(env.sunDir, camera, sunC, amb, env.scene.fog);
    this.flames.setLighting(env.sunDir, camera, null, null, env.scene.fog);
    this.embers.setLighting(env.sunDir, camera, null, null, env.scene.fog);
    this.smoke.upload(camera, (t) => Math.min(1, t * 15) * (1 - Math.max(0, (t - 0.5) / 0.5) ** 1.5));
    this.flames.upload(camera, (t) => Math.sin(Math.PI * t));
    this.embers.upload(camera, (t) => 1 - t);
  }

  summary() {
    let burning = 0, burntHa = 0, active = 0;
    for (const Z of this.zones) {
      burning += Z.burning;
      burntHa += (Z.burntCells * Z.cell * Z.cell) / 10000;
      if (Z.burning) active++;
    }
    return { burning, burntHa, active, zones: this.zones.map((z) => ({ name: z.name, state: z.state, x: z.cx, z: z.cz, burning: z.burning, intensity: z.intensity })) };
  }
}
