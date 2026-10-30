// Post-elaborazione "da obiettivo": rendering HDR con MSAA, bloom (riflessi del sole, fiamme, luci),
// tonemapping ACES, poi un passaggio finale con vignettatura, aberrazione cromatica ai bordi,
// leggera correzione colore (ombre fredde, luci calde) e grana di pellicola.

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uAspect: { value: 1 },
    uVignette: { value: 0.22 },
    uGrain: { value: 0.014 },
    uCA: { value: 0.0005 },
    uContrast: { value: 1.06 },
    uSat: { value: 1.06 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime, uAspect, uVignette, uGrain, uCA, uContrast, uSat;
    varying vec2 vUv;
    float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
    void main(){
      vec2 c = vUv - 0.5;
      float r2 = dot(c * vec2(uAspect, 1.0), c * vec2(uAspect, 1.0));
      // aberrazione cromatica: cresce verso i bordi
      vec2 off = c * r2 * uCA * 6.0;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      // colore: contrasto morbido attorno al grigio medio, ombre fredde e luci calde
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      col = (col - 0.5) * uContrast + 0.5;
      col *= mix(vec3(0.96, 1.0, 1.04), vec3(1.04, 1.0, 0.95), smoothstep(0.1, 0.9, l));
      // vignettatura
      col *= 1.0 - uVignette * smoothstep(0.18, 0.95, r2 * 1.5);
      // grana (più visibile nelle ombre)
      float g = hash(vUv * 1700.0 + fract(uTime) * 91.7) - 0.5;
      col += g * uGrain * (1.2 - l);
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};

export class PostFX {
  constructor(renderer, scene, camera, { quality = 'medium' } = {}) {
    this.renderer = renderer;
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, {
      type: THREE.HalfFloatType,
      samples: quality === 'high' ? 4 : 2,
    });
    this.composer = new EffectComposer(renderer, rt);
    this.composer.addPass(new RenderPass(scene, camera));
    const bloomScale = quality === 'high' ? 0.7 : 0.5;
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x * bloomScale, size.y * bloomScale), 0.28, 0.25, 3.5);
    // il bloom parte dai soli punti molto luminosi (riflessi, fiamme, luci) e il sole non lo satura
    const hp = this.bloom.materialHighPassFilter;
    hp.fragmentShader = `
      uniform sampler2D tDiffuse; uniform vec3 defaultColor; uniform float defaultOpacity;
      uniform float luminosityThreshold; uniform float smoothWidth; varying vec2 vUv;
      void main(){
        vec4 t = texture2D(tDiffuse, vUv);
        float l = dot(t.rgb, vec3(0.2126, 0.7152, 0.0722));
        float a = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, l);
        vec3 c = t.rgb * (min(l, 5.0) / max(l, 1e-4)) * 0.5;
        gl_FragColor = mix(vec4(defaultColor, defaultOpacity), vec4(c, 1.0), a);
      }`;
    hp.needsUpdate = true;
    hp.uniforms.smoothWidth.value = 3.0;
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.grade = new ShaderPass(GradeShader);
    this.composer.addPass(this.grade);
    this.bloomScale = bloomScale;
    this.setSize(window.innerWidth, window.innerHeight);
  }

  setSize(w, h) {
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
    this.composer.setSize(w, h);
    this.grade.uniforms.uAspect.value = w / h;
    const s = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    this.bloom.resolution.set(s.x * this.bloomScale, s.y * this.bloomScale);
  }

  render(dt, time) {
    this.grade.uniforms.uTime.value = time;
    this.composer.render(dt);
  }
}
