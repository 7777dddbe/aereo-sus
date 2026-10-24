// Cielo fisico (Preetham), sole con ombre che seguono l'aereo, luce ambientale, mappa d'ambiente
// per i riflessi PBR, nebbia atmosferica e vento con raffiche e turbolenza.

import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { createNoise2D, clamp, DEG } from '../core/math.js';

export class Environment {
  constructor(scene, renderer, { quality = 'medium' } = {}) {
    this.scene = scene;
    this.renderer = renderer;
    this.quality = quality;
    this.sunElevation = 41 * DEG;
    this.sunAzimuth = 228 * DEG; // da nord, orario (pomeriggio, sud-ovest)
    this.sunDir = new THREE.Vector3();
    this._computeSunDir();

    const sky = new Sky();
    sky.scale.setScalar(80000);
    const u = sky.material.uniforms;
    u.turbidity.value = 4.2;
    u.rayleigh.value = 1.25;
    u.mieCoefficient.value = 0.0045;
    u.mieDirectionalG.value = 0.82;
    u.sunPosition.value.copy(this.sunDir).multiplyScalar(1000);
    sky.frustumCulled = false;
    sky.renderOrder = -10;
    scene.add(sky);
    this.sky = sky;

    // colori di riferimento
    this.fogColor = new THREE.Color(0.62, 0.7, 0.78);
    this.skyColor = new THREE.Color(0.35, 0.5, 0.7);
    this.fogDensity = 0.000046;
    scene.fog = new THREE.FogExp2(this.fogColor.clone(), this.fogDensity);

    // Sole
    const sun = new THREE.DirectionalLight(0xfff1dc, 3.9);
    sun.castShadow = true;
    const ss = quality === 'high' ? 4096 : quality === 'low' ? 1024 : 2048;
    sun.shadow.mapSize.set(ss, ss);
    const sc = sun.shadow.camera;
    sc.left = -22;
    sc.right = 22;
    sc.top = 22;
    sc.bottom = -22;
    sc.near = 1;
    sc.far = 3000;
    sun.shadow.bias = -0.00012;
    sun.shadow.normalBias = 0.025;
    sun.shadow.radius = 2;
    scene.add(sun);
    scene.add(sun.target);
    this.sun = sun;

    // Luce del cielo + rimbalzo del terreno
    const hemi = new THREE.HemisphereLight(0xbdd0e2, 0x5c5240, 0.42);
    scene.add(hemi);
    this.hemi = hemi;

    this._buildEnvMap();

    // Vento: direzione da cui soffia (gradi), intensità (m/s), raffiche
    this.wind = { fromDeg: 250, speed: 4.6, gust: 2.2, turb: 1.0 };
    this.noise = createNoise2D(4242);
    this.thermals = []; // { x, z, r, w } aggiornate dagli incendi
    this._windBase = new THREE.Vector3();
    this.updateWindBase();
  }

  _computeSunDir() {
    const el = this.sunElevation, az = this.sunAzimuth;
    this.sunDir.set(Math.cos(el) * Math.sin(az), Math.sin(el), -Math.cos(el) * Math.cos(az)).normalize();
  }

  _buildEnvMap() {
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const envScene = new THREE.Scene();
    const sky2 = new Sky();
    sky2.scale.setScalar(1000);
    const u2 = sky2.material.uniforms;
    const u = this.sky.material.uniforms;
    for (const k of ['turbidity', 'rayleigh', 'mieCoefficient', 'mieDirectionalG']) u2[k].value = u[k].value;
    u2.sunPosition.value.copy(this.sunDir);
    u2.showSunDisc && (u2.showSunDisc.value = false);
    envScene.add(sky2);
    // "terreno" scuro nella metà inferiore per non illuminare dal basso con il cielo
    const ground = new THREE.Mesh(
      new THREE.SphereGeometry(500, 32, 16, 0, Math.PI * 2, Math.PI / 2 + 0.02, Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0x3b3a2c, side: THREE.BackSide }),
    );
    envScene.add(ground);
    const rt = pmrem.fromScene(envScene, 0, 0.1, 2000);
    this.envMap = rt.texture;
    this.scene.environment = this.envMap;
    this.scene.environmentIntensity = 0.55;
    pmrem.dispose();
  }

  updateWindBase() {
    const a = this.wind.fromDeg * DEG;
    // il vento SOFFIA DA "fromDeg": la massa d'aria si muove verso la direzione opposta
    this._windBase.set(-Math.sin(a), 0, Math.cos(a)).multiplyScalar(this.wind.speed);
  }

  // Vento nel punto (strato limite vicino al suolo, raffiche, turbolenza, termiche degli incendi)
  windAt(x, y, z, t, out, groundY = 0) {
    const agl = Math.max(0, y - groundY);
    const prof = clamp(Math.log(1 + agl / 0.3) / Math.log(1 + 100 / 0.3), 0.25, 1.35);
    out.copy(this._windBase).multiplyScalar(prof);
    const n = this.noise;
    const g = this.wind.gust * (0.5 + 0.5 * n(t * 0.07, 3.1));
    const tb = this.wind.turb;
    out.x += g * n(x / 180 + t * 0.35, z / 180) * 0.8 + tb * n(x / 31 + t * 0.9, z / 29 + y / 40) * 0.6;
    out.z += g * n(z / 170 - t * 0.31, x / 190 + 9) * 0.8 + tb * n(z / 33 - t * 0.85, x / 27 + 5) * 0.6;
    out.y += tb * 0.5 * n(x / 45 + 7, z / 45 + t * 0.6) * clamp(agl / 60, 0.1, 1);
    for (const th of this.thermals) {
      const dx = x - th.x, dz = z - th.z;
      const d2 = dx * dx + dz * dz;
      const r2 = th.r * th.r;
      if (d2 < r2 * 4 && y < th.top) {
        const k = Math.exp(-d2 / r2);
        out.y += th.w * k;
        out.x += th.w * 0.3 * k * n(t * 2.3 + x / 20, z / 20);
        out.z += th.w * 0.3 * k * n(z / 20, t * 2.1 + x / 20);
      }
    }
    return out;
  }

  update(dt, focus, cameraPos) {
    // l'ombra segue l'aereo
    const s = this.sun;
    s.target.position.copy(focus);
    s.position.copy(focus).addScaledVector(this.sunDir, 400);
    s.target.updateMatrixWorld();
    this.sky.position.copy(cameraPos);
  }

  setFogDensity(d) {
    this.fogDensity = d;
    this.scene.fog.density = d;
  }
}
