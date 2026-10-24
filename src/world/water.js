// Superficie del lago: riflessi planari reali, increspature da vento, fresnel, riflesso del sole,
// colore in funzione della profondità, schiuma sulla riva. Include la funzione d'onda usata dalla fisica.

import * as THREE from 'three';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
import { waterNormalTexture, dataTextureFromChannels, tileableNoise } from '../core/textures.js';
import { WORLD } from './terrain.js';

// Onde del lago (fisica + grafica). Ampiezza modesta (lago, vento 8-12 kt).
export class Waves {
  constructor() {
    this.amp = 0.09;
    this.waves = [
      { kx: 0.52, kz: 0.21, a: 0.45, w: 2.2, p: 0.0 },
      { kx: 0.31, kz: -0.44, a: 0.3, w: 1.7, p: 1.3 },
      { kx: 0.95, kz: 0.6, a: 0.15, w: 3.0, p: 2.1 },
      { kx: -0.2, kz: 0.83, a: 0.1, w: 2.8, p: 0.6 },
    ];
  }
  height(x, z, t) {
    let h = 0;
    for (const w of this.waves) h += w.a * Math.sin(w.kx * x + w.kz * z - w.w * t + w.p);
    return h * this.amp;
  }
}

export class Water {
  constructor({ terrain, sunDir, quality = 'medium', renderer }) {
    this.waves = new Waves();
    const L = WORLD.lake;
    const size = 2 * (L.a + 900);
    const geo = new THREE.PlaneGeometry(size, size, 1, 1);
    const res = quality === 'low' ? 0.35 : quality === 'high' ? 0.75 : 0.5;
    const w = Math.round(window.innerWidth * res * Math.min(window.devicePixelRatio, 1.5));
    const h = Math.round(window.innerHeight * res * Math.min(window.devicePixelRatio, 1.5));

    // profondità del lago in una texture (per colore, trasparenza e schiuma della riva)
    const dRes = 512;
    const depth = new Float32Array(dRes * dRes);
    const x0 = L.cx - size / 2, z0 = L.cz - size / 2;
    for (let j = 0; j < dRes; j++) {
      for (let i = 0; i < dRes; i++) {
        const x = x0 + ((i + 0.5) / dRes) * size;
        const z = z0 + ((j + 0.5) / dRes) * size;
        const hh = terrain.heightAt(x, z);
        depth[j * dRes + i] = Math.max(0, Math.min(1, -hh / 25));
      }
    }
    const depthTex = dataTextureFromChannels(dRes, [depth, 0, 0, 1], { repeat: false });
    depthTex.flipY = false;
    depthTex.needsUpdate = true;
    const foamN = tileableNoise(256, 16, 4, 91, 0.6);
    const foamTex = dataTextureFromChannels(256, [foamN, foamN, foamN, 1]);
    this.normalTex = waterNormalTexture(512, 7);

    const shader = {
      name: 'LakeWater',
      uniforms: {
        color: { value: new THREE.Color() },
        tDiffuse: { value: null },
        textureMatrix: { value: null },
        tNormal: { value: this.normalTex },
        tDepth: { value: depthTex },
        tFoam: { value: foamTex },
        depthRect: { value: new THREE.Vector4(x0, z0, 1 / size, 1 / size) },
        uTime: { value: 0 },
        sunDir: { value: sunDir.clone() },
        sunColor: { value: new THREE.Color(1.0, 0.93, 0.82).multiplyScalar(3.2) },
        skyColor: { value: new THREE.Color(0.32, 0.45, 0.6) },
        deepColor: { value: new THREE.Color(0.006, 0.03, 0.035) },
        shallowColor: { value: new THREE.Color(0.06, 0.13, 0.11) },
        windDir: { value: new THREE.Vector2(0.86, 0.5) },
        fogColor: { value: new THREE.Color(0.6, 0.68, 0.75) },
        fogDensity: { value: 0.00005 },
        reflStrength: { value: 1.0 },
      },
      vertexShader: /* glsl */ `
        uniform mat4 textureMatrix;
        varying vec4 vUvRefl;
        varying vec3 vWorldPos;
        #include <common>
        #include <logdepthbuf_pars_vertex>
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vUvRefl = textureMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewMatrix * wp;
          #include <logdepthbuf_vertex>
        }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D tDiffuse;
        uniform sampler2D tNormal;
        uniform sampler2D tDepth;
        uniform sampler2D tFoam;
        uniform vec4 depthRect;
        uniform float uTime;
        uniform vec3 sunDir;
        uniform vec3 sunColor;
        uniform vec3 skyColor;
        uniform vec3 deepColor;
        uniform vec3 shallowColor;
        uniform vec2 windDir;
        uniform vec3 fogColor;
        uniform float fogDensity;
        uniform float reflStrength;
        varying vec4 vUvRefl;
        varying vec3 vWorldPos;
        #include <common>
        #include <logdepthbuf_pars_fragment>

        vec3 nrm(vec2 uv) { return texture2D(tNormal, uv).xyz * 2.0 - 1.0; }

        void main() {
          #include <logdepthbuf_fragment>
          vec2 p = vWorldPos.xz;
          vec3 toEye = cameraPosition - vWorldPos;
          float dist = length(toEye);
          vec3 V = toEye / dist;
          vec2 w = normalize(windDir);
          vec2 wp = vec2(-w.y, w.x);
          vec3 n1 = nrm(p / 31.0 + w * uTime * 0.012);
          vec3 n2 = nrm(p / 9.7 + wp * uTime * 0.021 + 0.37);
          vec3 n3 = nrm(p / 3.3 + w * uTime * 0.045 + 0.71);
          vec3 n4 = nrm(p / 1.9 - wp * uTime * 0.06);
          vec3 n5 = nrm(p / 140.0 + w * uTime * 0.004);
          float far = 1.0 / (1.0 + dist / 450.0);
          vec2 slope = n1.xy * 0.55 + n2.xy * 0.45 + n5.xy * 0.5 + (n3.xy * 0.35 + n4.xy * 0.2) * far;
          slope *= mix(0.35, 1.0, far);
          vec3 N = normalize(vec3(slope.x * 0.55, 1.0, slope.y * 0.55));

          // profondità
          vec2 duv = (p - depthRect.xy) * depthRect.zw;
          float depth = texture2D(tDepth, duv).r * 25.0;

          // riflesso planare distorto
          vec4 ruv = vUvRefl;
          ruv.xy += N.xz * (1.5 + 7.0 * far) * ruv.w * 0.01;
          vec3 refl = texture2DProj(tDiffuse, ruv).rgb;

          float NdV = max(dot(N, V), 0.0);
          float F = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
          F = mix(F, 1.0, smoothstep(2500.0, 9000.0, dist) * 0.35);

          // colore del corpo d'acqua (diffusione sotto superficie verso il sole)
          float shallow = exp(-depth * 0.35);
          vec3 body = mix(deepColor, shallowColor, shallow);
          float sss = pow(max(dot(V, -sunDir) * 0.5 + 0.5, 0.0), 3.0) * 0.6 + 0.4;
          body *= sss * (0.6 + 0.4 * max(sunDir.y, 0.0));
          body += skyColor * 0.025;

          vec3 col = mix(body, refl * reflStrength, F);

          // riflesso speculare del sole
          vec3 H = normalize(sunDir + V);
          float spec = pow(max(dot(N, H), 0.0), 700.0) * 5.0 + pow(max(dot(N, H), 0.0), 80.0) * 0.1;
          col += sunColor * spec * (0.3 + 0.7 * F);

          // schiuma della riva
          float fnz = texture2D(tFoam, p / 7.0 + uTime * 0.02).r;
          float shore = 1.0 - smoothstep(0.0, 0.55 + fnz * 0.5, depth);
          float wave = 0.5 + 0.5 * sin(depth * 9.0 - uTime * 1.6 + fnz * 4.0);
          float foam = shore * smoothstep(0.35, 0.8, fnz * 0.7 + wave * 0.5) * (1.0 - smoothstep(700.0, 2500.0, dist));
          col = mix(col, vec3(0.75, 0.77, 0.76), foam * 0.75);

          // trasparenza nei bassi fondali: si vede il fondale
          float alpha = mix(1.0, 0.45 + 0.55 * F, exp(-depth * 0.9));
          alpha = max(alpha, foam);

          // nebbia (esponenziale quadratica come la scena)
          float fogF = 1.0 - exp(-fogDensity * fogDensity * dist * dist);
          col = mix(col, fogColor, fogF);
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    };

    const reflector = new Reflector(geo, {
      textureWidth: w,
      textureHeight: h,
      clipBias: 0.02,
      shader,
      multisample: quality === 'high' ? 4 : 0,
    });
    reflector.rotation.x = -Math.PI / 2;
    reflector.position.set(L.cx, 0, L.cz);
    reflector.material.transparent = true;
    reflector.material.depthWrite = true;
    reflector.renderOrder = 1;
    reflector.name = 'water';
    this.mesh = reflector;
    this.uniforms = reflector.material.uniforms;
  }

  heightAt(x, z, t) {
    return this.waves.height(x, z, t);
  }

  update(dt, time, env) {
    const u = this.uniforms;
    u.uTime.value = time;
    if (env) {
      u.sunDir.value.copy(env.sunDir);
      u.fogColor.value.copy(env.fogColor);
      u.fogDensity.value = env.fogDensity;
      u.skyColor.value.copy(env.skyColor);
    }
  }

  setSize(w, h, quality) {
    const res = quality === 'low' ? 0.35 : quality === 'high' ? 0.75 : 0.5;
    const pr = Math.min(window.devicePixelRatio, 1.5);
    this.mesh.getRenderTarget().setSize(Math.round(w * res * pr), Math.round(h * res * pr));
  }
}
