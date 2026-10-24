// Sistema di particelle a "billboard" istanziati (GPU), con dati in array tipizzati (CPU).
// Usato per acqua sganciata, nebulizzazione, spruzzi, schiuma, fiamme, fumo e nuvole.

import * as THREE from 'three';

const quad = (() => {
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2));
  g.setIndex([0, 1, 2, 0, 2, 3]);
  return g;
})();

export class ParticleSystem {
  constructor({
    max = 2000,
    texture,
    blending = 'normal',
    lit = 0.0, // 0 = colore piatto, 1 = illuminazione sferica col sole
    sort = false,
    stretch = 0, // allungamento lungo la velocità (gocce, scie)
    renderOrder = 5,
    name = 'particles',
    depthTest = true,
    fog = true,
    emissive = 0,
    growth = 0.5, // esponente della crescita della dimensione (0.5 = rapida all'inizio, 1 = lineare)
  }) {
    this.growth = growth;
    this.max = max;
    this.n = 0;
    this.sort = sort;
    const F = (k = 1) => new Float32Array(max * k);
    this.p = F(3);
    this.v = F(3);
    this.age = F();
    this.life = F();
    this.s0 = F();
    this.s1 = F();
    this.a0 = F();
    this.col = F(3);
    this.rot = F();
    this.rotV = F();
    this.drag = F();
    this.grav = F();
    this.fadeIn = F();
    this.user = F(); // dato libero (es. massa d'acqua)
    this.user2 = F();

    const geo = quad.clone();
    this.aPos = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    this.aExt = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('iPos', this.aPos);
    geo.setAttribute('iCol', this.aCol);
    geo.setAttribute('iExt', this.aExt); // size, rot, stretchX, stretchY (velocità in vista)
    geo.instanceCount = 0;
    this.geometry = geo;

    this.uniforms = {
      map: { value: texture },
      sunDirView: { value: new THREE.Vector3(0, 1, 0) },
      sunColor: { value: new THREE.Color(1, 0.96, 0.9) },
      ambColor: { value: new THREE.Color(0.55, 0.62, 0.72) },
      lit: { value: lit },
      stretch: { value: stretch },
      emissive: { value: emissive },
      fogColor: { value: new THREE.Color() },
      fogDensity: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      depthTest,
      blending: blending === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending,
      vertexShader: /* glsl */ `
        attribute vec3 iPos;
        attribute vec4 iCol;
        attribute vec4 iExt;
        uniform float stretch;
        varying vec2 vUv;
        varying vec4 vCol;
        varying float vFogDepth;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        void main() {
          vUv = uv;
          vCol = iCol;
          vec4 mv = viewMatrix * vec4(iPos, 1.0);
          float c = cos(iExt.y), s = sin(iExt.y);
          vec2 q = position.xy * iExt.x;
          vec2 d = iExt.zw;
          float dl = length(d);
          if (stretch > 0.0 && dl > 0.001) {
            vec2 dir = d / dl;
            vec2 perp = vec2(dir.y, -dir.x); // base destrorsa: il quadrato non viene specchiato
            float k = 1.0 + stretch * dl;
            q = dir * (position.y * iExt.x * k) + perp * (position.x * iExt.x);
          } else {
            q = vec2(c * q.x - s * q.y, s * q.x + c * q.y);
          }
          mv.xy += q;
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
          #include <logdepthbuf_vertex>
        }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D map;
        uniform vec3 sunDirView;
        uniform vec3 sunColor;
        uniform vec3 ambColor;
        uniform float lit;
        uniform float emissive;
        uniform vec3 fogColor;
        uniform float fogDensity;
        varying vec2 vUv;
        varying vec4 vCol;
        varying float vFogDepth;
        #include <common>
        #include <logdepthbuf_pars_fragment>
        void main() {
          #include <logdepthbuf_fragment>
          vec4 t = texture2D(map, vUv);
          float a = t.a * vCol.a;
          if (a < 0.003) discard;
          vec3 col = vCol.rgb * t.rgb;
          if (lit > 0.0) {
            vec2 c = vUv * 2.0 - 1.0;
            vec3 n = normalize(vec3(c, sqrt(max(0.0, 1.0 - dot(c, c))) + 0.35));
            float d = max(dot(n, sunDirView), 0.0);
            float back = pow(max(-sunDirView.z, 0.0), 2.0) * (1.0 - t.a) * 0.6; // luce che attraversa i bordi
            vec3 light = ambColor + sunColor * (d * 0.8 + back + 0.15);
            col = mix(col, col * light, lit);
          }
          col += vCol.rgb * emissive;
          float fogF = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
          col = mix(col, fogColor, fogF * (emissive > 0.0 ? 0.6 : 1.0));
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    this.material = mat;
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = renderOrder;
    this.mesh.name = name;
    this._order = new Uint32Array(max);
    this._depth = new Float32Array(max);
    this._v = new THREE.Vector3();
  }

  spawn(x, y, z, vx, vy, vz, { life = 2, size0 = 1, size1 = 2, alpha = 1, r = 1, g = 1, b = 1, rot = Math.random() * 6.28, rotV = 0, drag = 0.5, grav = 0, fadeIn = 0.1, user = 0, user2 = 0 } = {}) {
    if (this.n >= this.max) return -1;
    const i = this.n++;
    this.p[i * 3] = x; this.p[i * 3 + 1] = y; this.p[i * 3 + 2] = z;
    this.v[i * 3] = vx; this.v[i * 3 + 1] = vy; this.v[i * 3 + 2] = vz;
    this.age[i] = 0;
    this.life[i] = life;
    this.s0[i] = size0;
    this.s1[i] = size1;
    this.a0[i] = alpha;
    this.col[i * 3] = r; this.col[i * 3 + 1] = g; this.col[i * 3 + 2] = b;
    this.rot[i] = rot;
    this.rotV[i] = rotV;
    this.drag[i] = drag;
    this.grav[i] = grav;
    this.fadeIn[i] = fadeIn;
    this.user[i] = user;
    this.user2[i] = user2;
    return i;
  }

  kill(i) {
    const last = --this.n;
    if (i === last) return;
    const c3 = (arr) => {
      arr[i * 3] = arr[last * 3];
      arr[i * 3 + 1] = arr[last * 3 + 1];
      arr[i * 3 + 2] = arr[last * 3 + 2];
    };
    c3(this.p); c3(this.v); c3(this.col);
    this.age[i] = this.age[last];
    this.life[i] = this.life[last];
    this.s0[i] = this.s0[last];
    this.s1[i] = this.s1[last];
    this.a0[i] = this.a0[last];
    this.rot[i] = this.rot[last];
    this.rotV[i] = this.rotV[last];
    this.drag[i] = this.drag[last];
    this.grav[i] = this.grav[last];
    this.fadeIn[i] = this.fadeIn[last];
    this.user[i] = this.user[last];
    this.user2[i] = this.user2[last];
  }

  // integrazione: vento (vettore), ground(x,z) opzionale, onGround(i) -> true per eliminare
  simulate(dt, wind, ground, onGround) {
    const p = this.p, v = this.v;
    const wx = wind ? wind.x : 0, wy = wind ? wind.y : 0, wz = wind ? wind.z : 0;
    for (let i = this.n - 1; i >= 0; i--) {
      this.age[i] += dt;
      if (this.age[i] >= this.life[i]) {
        this.kill(i);
        continue;
      }
      const k = Math.min(1, this.drag[i] * dt);
      v[i * 3] += (wx - v[i * 3]) * k;
      v[i * 3 + 1] += (wy - v[i * 3 + 1]) * k + this.grav[i] * dt;
      v[i * 3 + 2] += (wz - v[i * 3 + 2]) * k;
      p[i * 3] += v[i * 3] * dt;
      p[i * 3 + 1] += v[i * 3 + 1] * dt;
      p[i * 3 + 2] += v[i * 3 + 2] * dt;
      this.rot[i] += this.rotV[i] * dt;
      if (ground) {
        const gy = ground(p[i * 3], p[i * 3 + 2]);
        if (p[i * 3 + 1] < gy) {
          if (!onGround || onGround(i, gy)) {
            this.kill(i);
            continue;
          }
        }
      }
    }
  }

  // scrive gli attributi per il rendering
  upload(camera, alphaCurve) {
    const n = this.n;
    const pos = this.aPos.array, col = this.aCol.array, ext = this.aExt.array;
    const view = camera.matrixWorldInverse.elements;
    let order = null;
    if (this.sort && n > 1) {
      order = this._order;
      const depth = this._depth;
      for (let i = 0; i < n; i++) {
        const x = this.p[i * 3], y = this.p[i * 3 + 1], z = this.p[i * 3 + 2];
        depth[i] = view[2] * x + view[6] * y + view[10] * z + view[14];
        order[i] = i;
      }
      const sub = order.subarray(0, n);
      sub.sort((a, b) => depth[a] - depth[b]); // più lontane prima (z vista più negativo)
    }
    const stretch = this.uniforms.stretch.value > 0;
    for (let k = 0; k < n; k++) {
      const i = order ? order[k] : k;
      const t = this.age[i] / this.life[i];
      pos[k * 3] = this.p[i * 3];
      pos[k * 3 + 1] = this.p[i * 3 + 1];
      pos[k * 3 + 2] = this.p[i * 3 + 2];
      let a = this.a0[i];
      const fi = this.fadeIn[i];
      if (t < fi) a *= t / fi;
      a *= alphaCurve ? alphaCurve(t, i) : 1 - t * t;
      col[k * 4] = this.col[i * 3];
      col[k * 4 + 1] = this.col[i * 3 + 1];
      col[k * 4 + 2] = this.col[i * 3 + 2];
      col[k * 4 + 3] = a;
      const size = this.s0[i] + (this.s1[i] - this.s0[i]) * (this.growth === 0.5 ? Math.sqrt(t) : Math.pow(t, this.growth));
      ext[k * 4] = size;
      ext[k * 4 + 1] = this.rot[i];
      if (stretch) {
        const vx = this.v[i * 3], vy = this.v[i * 3 + 1], vz = this.v[i * 3 + 2];
        const sx = view[0] * vx + view[4] * vy + view[8] * vz;
        const sy = view[1] * vx + view[5] * vy + view[9] * vz;
        ext[k * 4 + 2] = sx * 0.02;
        ext[k * 4 + 3] = sy * 0.02;
      } else {
        ext[k * 4 + 2] = 0;
        ext[k * 4 + 3] = 0;
      }
    }
    this.geometry.instanceCount = n;
    this.aPos.needsUpdate = true;
    this.aCol.needsUpdate = true;
    this.aExt.needsUpdate = true;
    this.aPos.clearUpdateRanges && this.aPos.clearUpdateRanges();
    if (this.aPos.addUpdateRange) {
      this.aPos.clearUpdateRanges();
      this.aPos.addUpdateRange(0, n * 3);
      this.aCol.clearUpdateRanges();
      this.aCol.addUpdateRange(0, n * 4);
      this.aExt.clearUpdateRanges();
      this.aExt.addUpdateRange(0, n * 4);
    }
  }

  setLighting(sunDirWorld, camera, sunColor, ambColor, fog) {
    this._v.copy(sunDirWorld).transformDirection(camera.matrixWorldInverse);
    this.uniforms.sunDirView.value.copy(this._v);
    if (sunColor) this.uniforms.sunColor.value.copy(sunColor);
    if (ambColor) this.uniforms.ambColor.value.copy(ambColor);
    if (fog) {
      this.uniforms.fogColor.value.copy(fog.color);
      this.uniforms.fogDensity.value = fog.density;
    }
  }
}
