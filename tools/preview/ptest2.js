import * as THREE from 'three';
import { ParticleSystem } from '../../src/fx/particles.js';
import { softSprite } from '../../src/core/textures.js';
const renderer = new THREE.WebGLRenderer({ antialias: true, reverseDepthBuffer: true });
renderer.setSize(800, 450);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.52;
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x6080a0);
scene.fog = new THREE.FogExp2(0x9aa, 0.000046);
const cam = new THREE.PerspectiveCamera(50, 16 / 9, 0.05, 90000);
cam.position.set(-2500, 700, -2500);
cam.lookAt(0, 350, 0);
cam.updateMatrixWorld();
const variants = [
  { lit: 1.0, sort: true },
  { lit: 1.0, sort: false },
  { lit: 0.0, sort: true },
];
const systems = variants.map((v, k) => {
  const ps = new ParticleSystem({ max: 300, texture: softSprite(128, { power: 1.6, noise: 0.5, seed: 21 }), lit: v.lit, sort: v.sort, renderOrder: 9 });
  scene.add(ps.mesh);
  for (let i = 0; i < 40; i++) ps.spawn(-600 + k * 600, 320 + i * 12, 600 - k * 600, 0, 0, 0, { life: 60, size0: 30, size1: 120, alpha: 0.7, r: 0.45, g: 0.43, b: 0.4, user: 0 });
  for (let i = 0; i < 40; i++) ps.age[i] = 10;
  return ps;
});
window.setView = () => {
  for (const s of systems) {
    s.setLighting(new THREE.Vector3(-0.5, 0.65, 0.5).normalize(), cam, new THREE.Color(1.1, 1.0, 0.9), new THREE.Color(0.42, 0.45, 0.5), scene.fog);
    s.upload(cam, (t) => Math.min(1, t * 12) * Math.pow(1 - t, 1.6));
  }
  renderer.render(scene, cam);
  return true;
};
window.ready = true;
