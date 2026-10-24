import * as THREE from 'three';
import { ParticleSystem } from '../../src/fx/particles.js';
import { sprayTexture, softSprite } from '../../src/core/textures.js';
const renderer = new THREE.WebGLRenderer({ antialias: true, reverseDepthBuffer: true });
renderer.setSize(800, 450);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.52;
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x203040);
scene.fog = new THREE.FogExp2(0x9aa, 0.000046);
const cam = new THREE.PerspectiveCamera(60, 16 / 9, 0.05, 90000);
cam.position.set(0, 2, 20);
cam.lookAt(0, 2, 0);
cam.updateMatrixWorld();
const ps = new ParticleSystem({ max: 100, texture: sprayTexture(256, 3), lit: 0.75, stretch: 0.25 });
const ps2 = new ParticleSystem({ max: 100, texture: softSprite(128, { power: 1.8, noise: 0.35 }), lit: 0.9 });
scene.add(ps.mesh, ps2.mesh);
for (let i = 0; i < 20; i++) ps.spawn(-6 + i * 0.6, 1 + Math.sin(i) * 2, 0, 3, 5, 0, { life: 3, size0: 2, size1: 3, alpha: 1 });
for (let i = 0; i < 10; i++) ps2.spawn(-6 + i * 1.2, 5, -2, 0, 0, 0, { life: 3, size0: 3, size1: 3, alpha: 0.5 });
window.setView = () => {
  for (const s of [ps, ps2]) {
    s.setLighting(new THREE.Vector3(0.3, 0.8, 0.4).normalize(), cam, new THREE.Color(2.3, 2.2, 2.1), new THREE.Color(0.95, 1.02, 1.12), scene.fog);
    s.simulate(0.1, new THREE.Vector3(), null);
    s.upload(cam, (t) => 1 - t * t);
  }
  renderer.render(scene, cam);
  return true;
};
const st = sprayTexture(256, 3);
let sum = 0; for (let i = 3; i < st.image.data.length; i += 4) sum += st.image.data[i];
window.texAvg = sum / (256 * 256);
const ps3 = new ParticleSystem({ max: 100, texture: st, lit: 0.0 });
scene.add(ps3.mesh);
for (let i = 0; i < 10; i++) ps3.spawn(-6 + i * 1.2, -1, -2, 0, 0, 0, { life: 3, size0: 3, size1: 3, alpha: 1 });
const old = window.setView;
window.setView = () => { ps3.setLighting(new THREE.Vector3(0,1,0), cam, null, null, scene.fog); ps3.simulate(0.1, new THREE.Vector3(), null); ps3.upload(cam, (t)=>1); return old(); };
window.ready = true;
