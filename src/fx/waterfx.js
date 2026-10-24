// Effetti dell'acqua: sgancio (colonna che si frantuma in gocce e nebbia), pescaggio con "coda di gallo",
// spruzzi dello scafo e dei galleggianti, impatti, troppo pieno, soffio delle eliche sull'acqua, scia di schiuma.

import * as THREE from 'three';
import { ParticleSystem } from './particles.js';
import { softSprite, tileableNoise, dataTextureFromChannels, sprayTexture } from '../core/textures.js';
import { clamp, lerp, rng } from '../core/math.js';
import { GEO } from '../aircraft/specs.js';

const R = Math.random;

export class WaterFX {
  constructor(scene, { quality = 'medium', world, onDeposit }) {
    this.world = world;
    this.onDeposit = onDeposit; // (x, z, litri, schiuma) -> deposito sul terreno (incendi)
    const q = quality === 'low' ? 0.5 : quality === 'high' ? 1.5 : 1;
    this.q = q;
    const sprayTex = sprayTexture(256, 3);
    const mistTex = softSprite(128, { power: 1.8, noise: 0.35, seed: 8 });
    const dropTex = softSprite(64, { power: 1.1, noise: 0.25, seed: 13 });
    // nucleo d'acqua dello sgancio (gocce grosse, allungate lungo la velocità)
    this.drop = new ParticleSystem({ max: Math.round(5000 * q), texture: dropTex, lit: 0.85, stretch: 0.9, name: 'dropCore', renderOrder: 6 });
    // velo di nebulizzazione
    this.mist = new ParticleSystem({ max: Math.round(2600 * q), texture: mistTex, lit: 0.9, name: 'mist', renderOrder: 7, nearFade: 1.0 });
    // spruzzi (scafo, sonde, impatti)
    this.spray = new ParticleSystem({ max: Math.round(6000 * q), texture: sprayTex, lit: 0.75, stretch: 0.25, name: 'spray', renderOrder: 6 });
    for (const s of [this.drop, this.mist, this.spray]) scene.add(s.mesh);
    this.wake = new Wake(scene);
    this._v = new THREE.Vector3();
    this._p = new THREE.Vector3();
    this._w = new THREE.Vector3();
    this._acc = { drop: [0, 0, 0, 0], scoop: 0, hull: 0, overflow: 0, prop: [0, 0] };
    this.windVec = new THREE.Vector3();
    this.cameraShake = 0;
    this.windscreenWet = 0;
  }

  // posizione e velocità nel mondo di un punto del corpo (coordinate di riferimento)
  _bodyPoint(fm, pBody, outP, outV) {
    const rb = this._w.copy(pBody).sub(fm.cg);
    outV.copy(fm.omega).cross(rb).applyQuaternion(fm.quat).add(fm.vel);
    outP.copy(rb).applyQuaternion(fm.quat).add(fm.pos);
  }

  update(dt, fm, sys, model, env, camera, time) {
    const world = this.world;
    const o = fm.out;
    env.windAt(fm.pos.x, 30, fm.pos.z, time, this.windVec);
    const wind = this.windVec;
    const P = this._p, V = this._v;
    const em = model.emitters;
    const down = new THREE.Vector3(0, -1, 0).applyQuaternion(fm.quat);
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(fm.quat);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(fm.quat);

    // ---------------- Sgancio ----------------
    for (let i = 0; i < 4; i++) {
      const flow = sys.outflow[i]; // L/s
      if (flow <= 0.5) continue;
      const foam = sys.foamMix[i] > 0.3;
      this._bodyPoint(fm, em.doors[i], P, V);
      const litersPer = 2.4 / this.q;
      this._acc.drop[i] += (flow * dt) / litersPer;
      let n = Math.floor(this._acc.drop[i]);
      this._acc.drop[i] -= n;
      const vexit = 3 + Math.sqrt(flow / 400) * 2.5;
      while (n-- > 0) {
        const sp = 0.9 + flow / 2500;
        const vx = V.x + down.x * vexit + (R() - 0.5) * sp * 2;
        const vy = V.y + down.y * vexit + (R() - 0.5) * sp;
        const vz = V.z + down.z * vexit + (R() - 0.5) * sp * 2;
        const ox = (R() - 0.5) * 0.5, oz = (R() - 0.5) * 0.9;
        // "breakup": velocità con cui il getto si frantuma (alto = gocce fini che rallentano)
        const brk = 0.05 + Math.pow(R(), 2.2) * (foam ? 0.9 : 0.65);
        this.drop.spawn(P.x + right.x * ox + fwd.x * oz, P.y - 0.1, P.z + right.z * ox + fwd.z * oz, vx, vy, vz, {
          life: 14,
          size0: 0.45 + R() * 0.35,
          size1: (foam ? 5 : 3.2) + R() * 2.2,
          alpha: foam ? 0.8 : 0.68,
          r: foam ? 0.98 : 0.86, g: foam ? 0.98 : 0.92, b: 0.98,
          drag: brk,
          grav: -9.81,
          fadeIn: 0.02,
          user: litersPer,
          user2: foam ? 1 : 0,
          rotV: (R() - 0.5) * 1.5,
        });
      }
    }
    // dinamica del getto: la resistenza cresce col tempo (frantumazione), nebbia che si stacca
    const d = this.drop;
    for (let i = 0; i < d.n; i++) {
      const age = d.age[i];
      d.drag[i] = Math.min(d.drag[i] * (1 + dt * 0.9), 1.6);
      if (age > 0.3 && R() < dt * (0.025 + d.drag[i] * 0.07) * this.q) {
        const k = i * 3;
        this.mist.spawn(d.p[k], d.p[k + 1], d.p[k + 2], d.v[k] * 0.35 + wind.x * 0.6, d.v[k + 1] * 0.25, d.v[k + 2] * 0.35 + wind.z * 0.6, {
          life: 5 + R() * 5, size0: 3 + R() * 2, size1: 12 + R() * 10, alpha: 0.22 + 0.1 * d.user2[i], r: 0.92, g: 0.95, b: 0.98,
          drag: 0.9, grav: -0.5, fadeIn: 0.15, rotV: (R() - 0.5) * 0.3,
        });
      }
    }
    const groundAt = (x, z) => Math.max(world.groundHeight(x, z), world.waterHeight(x, z, time));
    d.simulate(dt, wind, groundAt, (i, gy) => {
      const k = i * 3;
      const x = d.p[k], z = d.p[k + 2];
      const onWater = world.waterHeight(x, z, time) > world.groundHeight(x, z);
      if (!onWater && this.onDeposit) this.onDeposit(x, z, d.user[i], d.user2[i] > 0.5);
      if (R() < 0.05) {
        this.mist.spawn(x, gy + 1.5, z, wind.x * 0.5 + (R() - 0.5) * 4, 1 + R() * 2, wind.z * 0.5 + (R() - 0.5) * 4, {
          life: 4 + R() * 4, size0: 3, size1: 10 + R() * 8, alpha: 0.18, r: 0.9, g: 0.92, b: 0.94, drag: 0.8, grav: -0.2, fadeIn: 0.1,
        });
      }
      if (onWater && R() < 0.2) this._splash(x, gy, z, 0.4);
      return true;
    });

    // ---------------- Pescaggio: coda di gallo dietro le sonde ----------------
    const scoopRate = o.scoopRate || 0;
    const gs = o.gs;
    if (o.onWater && sys.probePos > 0.3 && o.probeImmersion > 0.05) {
      this._acc.scoop += dt * (130 + scoopRate * 0.35) * this.q;
      let n = Math.floor(this._acc.scoop);
      this._acc.scoop -= n;
      while (n-- > 0) {
        const pr = em.probes[R() < 0.5 ? 0 : 1];
        const pb = this._w.set(pr.position.x, pr.position.y - 0.85, pr.position.z);
        this._bodyPoint(fm, pb.clone(), P, V);
        const surf = world.waterHeight(P.x, P.z, time);
        // la "coda di gallo": getto che sale dietro le sonde e ricade verso poppa
        const back = 0.15 + R() * 0.45;
        const k = clamp(gs / 32, 0.4, 1.3);
        const up = (3.5 + R() * 5.5 + (R() < 0.15 ? 3 : 0)) * k;
        const lat = (R() - 0.5) * 3.5 + Math.sign(pr.position.x) * (0.5 + R() * 1.5);
        this.spray.spawn(P.x, surf + 0.25, P.z, V.x * back + right.x * lat, up, V.z * back + right.z * lat, {
          life: 1.1 + R() * 1.0, size0: 0.5 + R() * 0.4, size1: (1.8 + R() * 2.2) * k, alpha: 0.92, r: 0.97, g: 0.98, b: 1.0, drag: 0.35, grav: -9.81, fadeIn: 0.02,
          rotV: (R() - 0.5) * 2,
        });
        if (R() < 0.06) {
          this.mist.spawn(P.x - fwd.x * 8, surf + 2 + R() * 3, P.z - fwd.z * 8, V.x * 0.25 + wind.x, 1.0 + R(), V.z * 0.25 + wind.z, {
            life: 3 + R() * 3, size0: 3, size1: 9 + R() * 6, alpha: 0.14, r: 0.92, g: 0.94, b: 0.96, drag: 0.8, grav: -0.3, fadeIn: 0.1,
          });
        }
      }
      this.windscreenWet = Math.min(1, this.windscreenWet + dt * 0.25);
    }

    // ---------------- Troppo pieno ----------------
    if (sys.overflowRate > 5 && o.onWater) {
      this._acc.overflow += dt * 90 * this.q;
      let n = Math.floor(this._acc.overflow);
      this._acc.overflow -= n;
      while (n-- > 0) {
        const vp = em.overflow[R() < 0.5 ? 0 : 1];
        this._bodyPoint(fm, vp, P, V);
        const s = Math.sign(vp.x);
        this.spray.spawn(P.x, P.y, P.z, V.x * 0.7 + right.x * s * (2 + R() * 3), 3 + R() * 4, V.z * 0.7 + right.z * s * (2 + R() * 3), {
          life: 1.2 + R() * 0.8, size0: 0.3, size1: 2 + R() * 2, alpha: 0.8, r: 0.92, g: 0.95, b: 0.98, drag: 0.6, grav: -9.81,
        });
      }
    }

    // ---------------- Spruzzi dello scafo ----------------
    const nsp = fm.sprayCount;
    if (nsp > 0) {
      for (let k = 0; k < nsp; k++) {
        const sp = fm.sprayPoints[k];
        const vrel = Math.hypot(sp.vx, sp.vz);
        if (vrel < 2.5) continue;
        // il getto principale nasce dove lo scafo entra in acqua (parte anteriore della zona bagnata)
        const rate = clamp(sp.intensity, 0.1, 1.2) * (sp.float ? 8 : 14) * this.q * clamp(vrel / 15, 0.2, 1.5);
        let n = Math.floor(rate * dt + R());
        const side = sp.side;
        while (n-- > 0) {
          const out = 1.5 + vrel * (0.06 + R() * 0.1);
          const up = 1.0 + vrel * (0.04 + R() * 0.09);
          this.spray.spawn(sp.x + right.x * side * 0.4, sp.y + 0.15, sp.z + right.z * side * 0.4,
            sp.vx * (0.2 + R() * 0.35) + right.x * side * out, up, sp.vz * (0.2 + R() * 0.35) + right.z * side * out, {
              life: 0.6 + R() * 0.7, size0: 0.4, size1: 1 + R() * 1.8 * clamp(vrel / 20, 0.4, 1.4), alpha: 0.85, r: 0.95, g: 0.97, b: 0.99,
              drag: 0.4, grav: -9.81, fadeIn: 0.03, rotV: (R() - 0.5) * 2,
            });
        }
      }
      if (gs > 12) this.windscreenWet = Math.min(1, this.windscreenWet + dt * 0.05 * clamp(o.hullDepth * 3, 0, 1));
      // impatto all'ammaraggio
      if (o.impact > 1.2 && (this._lastImpactT || 0) < time - 0.5) {
        this._lastImpactT = time;
        const sp0 = fm.sprayPoints[0];
        const n = Math.min(400, Math.round(o.impact * 60 * this.q));
        for (let k = 0; k < n; k++) {
          const sp = fm.sprayPoints[Math.floor(R() * nsp)];
          const a = R() * Math.PI * 2;
          const sv = 2 + R() * o.impact * 2.5;
          this.spray.spawn(sp.x, sp.y + 0.1, sp.z, sp.vx * 0.3 + Math.cos(a) * sv, 2 + R() * o.impact * 2.2, sp.vz * 0.3 + Math.sin(a) * sv, {
            life: 1 + R() * 1.2, size0: 0.6, size1: 2.5 + R() * 3, alpha: 0.85, r: 0.93, g: 0.95, b: 0.97, drag: 0.3, grav: -9.81,
          });
        }
        this.cameraShake = Math.min(1, this.cameraShake + o.impact * 0.15);
        this.windscreenWet = Math.min(1, this.windscreenWet + o.impact * 0.15);
      }
    }

    // ---------------- Soffio delle eliche sull'acqua ----------------
    if (o.radAlt < 9 && o.surfaceUnder === 'water') {
      for (let e = 0; e < 2; e++) {
        const pw = sys.engines[e].pf;
        if (pw < 0.3) continue;
        this._acc.prop[e] += dt * pw * 25 * this.q * clamp(1 - o.radAlt / 9, 0, 1);
        let n = Math.floor(this._acc.prop[e]);
        this._acc.prop[e] -= n;
        this._bodyPoint(fm, em.props[e], P, V);
        const surf = world.waterHeight(P.x, P.z, time);
        while (n-- > 0) {
          this.mist.spawn(P.x - fwd.x * (4 + R() * 6) + (R() - 0.5) * 3, surf + 0.4, P.z - fwd.z * (4 + R() * 6) + (R() - 0.5) * 3,
            V.x * 0.6 - fwd.x * 8, 0.8 + R() * 1.2, V.z * 0.6 - fwd.z * 8, {
              life: 2 + R() * 2, size0: 1.5, size1: 6 + R() * 4, alpha: 0.18, r: 0.9, g: 0.93, b: 0.95, drag: 0.7, grav: 0,
            });
        }
      }
    }

    // ---------------- Scia ----------------
    this.wake.update(dt, fm, time);

    // simulazioni
    const waterKill = (x, z) => world.waterHeight(x, z, time) - 0.3;
    this.spray.simulate(dt, wind, (x, z) => Math.max(world.groundHeight(x, z), world.waterHeight(x, z, time) - 0.2));
    this.mist.simulate(dt, wind, null);
    this.windscreenWet = Math.max(0, this.windscreenWet - dt * (0.06 + o.ias * 0.004));
    this.cameraShake = Math.max(0, this.cameraShake - dt * 1.5);
  }

  _splash(x, y, z, k) {
    const n = Math.round(4 * k * this.q) + 1;
    for (let i = 0; i < n; i++) {
      this.spray.spawn(x, y + 0.1, z, (R() - 0.5) * 3, 2 + R() * 3, (R() - 0.5) * 3, {
        life: 0.8 + R() * 0.6, size0: 0.4, size1: 1.5 + R(), alpha: 0.7, r: 0.93, g: 0.95, b: 0.97, drag: 0.3, grav: -9.81,
      });
    }
  }

  render(camera, env) {
    // l'acqua nebulizzata è molto chiara: stessa intensità del sole usata per le superfici
    const sunC = new THREE.Color(1.0, 0.96, 0.9).multiplyScalar(2.3);
    const amb = new THREE.Color(0.95, 1.02, 1.12);
    for (const s of [this.drop, this.mist, this.spray]) {
      s.setLighting(env.sunDir, camera, sunC, amb, env.scene.fog);
    }
    this.drop.upload(camera, (t) => (t < 0.85 ? 1 : 1 - (t - 0.85) / 0.15));
    this.spray.upload(camera, (t) => 1 - t * t);
    this.mist.upload(camera, (t) => Math.sin(Math.PI * Math.min(1, t * 1.15)) * (1 - t * 0.3));
    this.wake.mat.uniforms.fogColor.value.copy(env.scene.fog.color);
    this.wake.mat.uniforms.fogDensity.value = env.scene.fog.density;
    this.wake.render();
  }

  stats() {
    return { drop: this.drop.n, mist: this.mist.n, spray: this.spray.n };
  }
}

// ---------------------------------------------------------------------------
// Scia di schiuma sull'acqua: nastro che si allarga e svanisce col tempo
class Wake {
  constructor(scene) {
    this.max = 900;
    this.pts = []; // { x, z, dx, dz, t, w, k }
    const geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(this.max * 2 * 3);
    this.uv = new Float32Array(this.max * 2 * 2);
    this.ext = new Float32Array(this.max * 2 * 2); // età, intensità
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('uv', new THREE.BufferAttribute(this.uv, 2).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aExt', new THREE.BufferAttribute(this.ext, 2).setUsage(THREE.DynamicDrawUsage));
    const idx = [];
    for (let i = 0; i < this.max - 1; i++) {
      const a = i * 2, b = i * 2 + 1, c = i * 2 + 2, d = i * 2 + 3;
      idx.push(a, c, b, b, c, d);
    }
    geo.setIndex(idx);
    geo.setDrawRange(0, 0);
    this.geo = geo;
    const n = tileableNoise(256, 12, 5, 55, 0.6);
    const foamTex = dataTextureFromChannels(256, [n, n, n, 1]);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { tFoam: { value: foamTex }, uTime: { value: 0 }, fogColor: { value: new THREE.Color() }, fogDensity: { value: 0 } },
      transparent: true,
      depthWrite: false,
      vertexShader: `
        attribute vec2 aExt; varying vec2 vUv; varying vec2 vExt; varying vec3 vW; varying float vFog;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        void main(){ vUv = uv; vExt = aExt; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mv = viewMatrix * w; vFog = -mv.z; gl_Position = projectionMatrix * mv;
        #include <logdepthbuf_vertex>
        }`,
      fragmentShader: `
        uniform sampler2D tFoam; uniform float uTime; uniform vec3 fogColor; uniform float fogDensity;
        varying vec2 vUv; varying vec2 vExt; varying vec3 vW; varying float vFog;
        #include <common>
        #include <logdepthbuf_pars_fragment>
        void main(){
          #include <logdepthbuf_fragment>
          float age = vExt.x; float k = vExt.y;
          float x = abs(vUv.x * 2.0 - 1.0);
          float n = texture2D(tFoam, vW.xz / 6.0).r;
          float n2 = texture2D(tFoam, vW.xz / 1.7 + 0.3).r;
          // turbolenza centrale (giovane) + creste laterali della scia di Kelvin (persistenti)
          float core = (1.0 - smoothstep(0.0, 0.6, x)) * exp(-age / 12.0);
          float edge = smoothstep(0.72, 0.9, x) * (1.0 - smoothstep(0.9, 1.0, x)) * exp(-age / 45.0);
          float cells = smoothstep(0.42, 0.62, n * 0.7 + n2 * 0.5);
          float foam = (core * 1.4 + edge * 0.8) * mix(cells, 1.0, exp(-age / 2.5) * 0.7);
          float a = clamp(foam * k, 0.0, 0.92) * smoothstep(0.0, 0.4, age);
          if (a < 0.01) discard;
          vec3 col = vec3(1.6, 1.65, 1.65);
          float f = 1.0 - exp(-fogDensity * fogDensity * vFog * vFog);
          col = mix(col, fogColor, f);
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 2;
    this.mesh.name = 'wake';
    scene.add(this.mesh);
    this.time = 0;
    this.last = null;
  }

  update(dt, fm, time) {
    this.time = time;
    const o = fm.out;
    const inWater = o.onWater && o.gs > 1.5;
    // punto di riferimento: redan dello scafo
    const step = new THREE.Vector3(0, GEO.sStep ? 0 : 0, GEO.sStep - GEO.sCG).sub(fm.cg).applyQuaternion(fm.quat).add(fm.pos);
    if (inWater) {
      const k = clamp(o.hullDepth * 2.5 + o.gs / 25, 0.2, 1) * (o.planing ? 1 : 0.8);
      if (!this.last || Math.hypot(step.x - this.last.x, step.z - this.last.z) > 2.0) {
        const dx = step.x - (this.last ? this.last.x : step.x - fm.vel.x * 0.05);
        const dz = step.z - (this.last ? this.last.z : step.z - fm.vel.z * 0.05);
        const l = Math.hypot(dx, dz) || 1;
        this.pts.push({ x: step.x, z: step.z, dx: dx / l, dz: dz / l, t: time, k, gap: !this.last });
        if (this.pts.length > this.max) this.pts.shift();
        this.last = { x: step.x, z: step.z };
      }
    } else {
      this.last = null;
    }
    while (this.pts.length && time - this.pts[0].t > 160) this.pts.shift();
  }

  render() {
    const n = this.pts.length;
    if (n < 2) {
      this.geo.setDrawRange(0, 0);
      return;
    }
    for (let i = 0; i < n; i++) {
      const p = this.pts[i];
      const age = this.time - p.t;
      const w = 2.2 + age * 0.9 + Math.sqrt(age) * 1.5;
      const nx = -p.dz, nz = p.dx;
      const k = p.gap || (i + 1 < n && this.pts[i + 1].gap) ? 0 : p.k;
      for (let s = 0; s < 2; s++) {
        const sg = s === 0 ? -1 : 1;
        const j = i * 2 + s;
        this.pos[j * 3] = p.x + nx * w * sg;
        this.pos[j * 3 + 1] = 0.07;
        this.pos[j * 3 + 2] = p.z + nz * w * sg;
        this.uv[j * 2] = s;
        this.uv[j * 2 + 1] = i;
        this.ext[j * 2] = age;
        this.ext[j * 2 + 1] = k;
      }
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.uv.needsUpdate = true;
    this.geo.attributes.aExt.needsUpdate = true;
    this.geo.setDrawRange(0, (n - 1) * 6);
  }
}
