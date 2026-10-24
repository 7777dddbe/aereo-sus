// Telecamere: cabina (testa libera, scosse da g e vibrazioni), inseguimento, orbita, passaggio,
// sotto lo scafo (sonde/sgancio), estremità alare e torre.

import * as THREE from 'three';
import { clamp, damp, lerp, DEG } from './core/math.js';
import { GEO } from './aircraft/specs.js';

export const CAMS = [
  { id: 'cockpit', name: 'Cabina' },
  { id: 'chase', name: 'Inseguimento' },
  { id: 'orbit', name: 'Orbita libera' },
  { id: 'flyby', name: 'Passaggio' },
  { id: 'probe', name: 'Sotto lo scafo' },
  { id: 'wing', name: 'Ala' },
  { id: 'tower', name: 'Torre' },
];

const P = (s, h, y = 0) => new THREE.Vector3(y, h - GEO.hCG, s - GEO.sCG);

export class CameraRig {
  constructor(camera, { towerPos }) {
    this.camera = camera;
    this.mode = 0;
    this.head = { yaw: 0, pitch: -0.17, tyaw: 0, tpitch: -0.17 };
    this.orbit = { yaw: Math.PI * 0.85, pitch: 0.12, dist: 42 };
    this.chase = { yaw: 0, pitch: 0.1, dist: 34, pos: new THREE.Vector3(), init: false };
    this.flyby = { pos: new THREE.Vector3(), t: -1 };
    this.fov = { cockpit: 72, other: 50 };
    this.zoom = 1;
    this.tower = towerPos.clone();
    this._q = new THREE.Quaternion();
    this._v = new THREE.Vector3();
    this._e = new THREE.Euler(0, 0, 0, 'YXZ');
    this.shake = new THREE.Vector3();
    this.vib = 0;
  }

  get id() {
    return CAMS[this.mode].id;
  }
  get inside() {
    return this.id === 'cockpit';
  }

  set(mode) {
    this.mode = (mode + CAMS.length) % CAMS.length;
    this.chase.init = false;
    this.flyby.t = -1;
    this.zoom = 1;
  }

  lookReset() {
    this.head.tyaw = 0;
    this.head.tpitch = -0.17;
  }

  update(dt, fm, look, extra) {
    const cam = this.camera;
    const id = this.id;
    const q = fm.quat;
    const o = fm.out;
    if (look.wheel) this.zoom = clamp(this.zoom * (look.wheel > 0 ? 1.12 : 0.89), 0.25, 3.5);
    // vibrazioni (motori, acqua, turbolenza) e scosse
    const water = o.onWater ? clamp(o.gs / 25, 0, 1) * clamp(o.hullDepth * 2, 0.2, 1) : 0;
    const ground = o.onGround ? clamp(o.gs / 30, 0, 1) : 0;
    const vibAmp = 0.0012 + water * 0.012 + ground * 0.006 + (extra.shake || 0) * 0.05 + (extra.turb || 0) * 0.004;
    const t = performance.now() / 1000;
    this.shake.set(
      Math.sin(t * 37.1) * Math.sin(t * 13.7) * vibAmp,
      Math.sin(t * 41.3 + 1) * Math.sin(t * 9.1) * vibAmp,
      Math.sin(t * 29.3 + 2) * vibAmp * 0.5,
    );
    const bodyToWorld = (p) => this._v.copy(p).sub(fm.cg).applyQuaternion(q).add(fm.pos);

    if (id === 'cockpit') {
      this.head.tyaw = clamp(this.head.tyaw - look.dx * 0.0035, -2.6, 2.6);
      this.head.tpitch = clamp(this.head.tpitch - look.dy * 0.0035, -1.2, 1.1);
      this.head.yaw = damp(this.head.yaw, this.head.tyaw, 14, dt);
      this.head.pitch = damp(this.head.pitch, this.head.tpitch, 14, dt);
      // la testa si sposta con le accelerazioni (g)
      const gx = clamp(-o.ny * 0.02, -0.04, 0.04);
      const gy = clamp(-(o.nz - 1) * 0.012, -0.05, 0.05);
      const eye = extra.eye.clone().add(new THREE.Vector3(gx, gy, 0)).add(this.shake);
      // sporgersi verso il finestrino quando si guarda di lato
      eye.x += Math.sin(this.head.yaw) * 0.12;
      eye.z += (1 - Math.cos(this.head.yaw)) * 0.05;
      cam.position.copy(bodyToWorld(eye));
      this._e.set(this.head.pitch, this.head.yaw, 0, 'YXZ');
      this._q.setFromEuler(this._e);
      cam.quaternion.copy(q).multiply(this._q);
      cam.fov = this.fov.cockpit / this.zoom;
      cam.near = 0.04;
    } else if (id === 'chase') {
      const ch = this.chase;
      ch.yaw = clamp(ch.yaw - look.dx * 0.005, -Math.PI, Math.PI);
      ch.pitch = clamp(ch.pitch + look.dy * 0.004, -0.4, 1.2);
      if (!look.dx && !look.dy) ch.yaw = damp(ch.yaw, 0, 0.4, dt);
      // direzione: prua sul piano orizzontale (stabile, non segue il rollio)
      const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(q);
      const hdg = Math.atan2(fwd.x, -fwd.z);
      const a = hdg + ch.yaw;
      const dist = ch.dist * this.zoom;
      const target = fm.pos.clone().add(new THREE.Vector3(0, 2.5, 0));
      const want = target.clone().add(new THREE.Vector3(-Math.sin(a) * Math.cos(ch.pitch) * dist, Math.sin(ch.pitch) * dist + 3, Math.cos(a) * Math.cos(ch.pitch) * dist));
      if (!ch.init) {
        ch.pos.copy(want);
        ch.init = true;
      }
      ch.pos.x = damp(ch.pos.x, want.x, 5, dt);
      ch.pos.y = damp(ch.pos.y, want.y, 4, dt);
      ch.pos.z = damp(ch.pos.z, want.z, 5, dt);
      const gmin = extra.groundAt(ch.pos.x, ch.pos.z) + 1.5;
      if (ch.pos.y < gmin) ch.pos.y = gmin;
      cam.position.copy(ch.pos).add(this.shake.clone().multiplyScalar(4));
      cam.up.set(0, 1, 0);
      cam.lookAt(target);
      cam.fov = this.fov.other;
      cam.near = 0.3;
    } else if (id === 'orbit') {
      const ob = this.orbit;
      ob.yaw -= look.dx * 0.005;
      ob.pitch = clamp(ob.pitch + look.dy * 0.004, -1.2, 1.45);
      const dist = ob.dist * this.zoom;
      const target = fm.pos.clone();
      cam.position.set(target.x + Math.sin(ob.yaw) * Math.cos(ob.pitch) * dist, target.y + Math.sin(ob.pitch) * dist, target.z + Math.cos(ob.yaw) * Math.cos(ob.pitch) * dist);
      const gmin = extra.groundAt(cam.position.x, cam.position.z) + 1.0;
      if (cam.position.y < gmin) cam.position.y = gmin;
      cam.up.set(0, 1, 0);
      cam.lookAt(target);
      cam.fov = this.fov.other;
      cam.near = 0.3;
    } else if (id === 'flyby') {
      const fb = this.flyby;
      const vel = fm.vel.clone();
      const sp = vel.length();
      const rel = fm.pos.clone().sub(fb.pos);
      if (fb.t < 0 || rel.length() > 450 || (rel.dot(vel) > 0 && rel.length() > 150)) {
        const dir = sp > 5 ? vel.clone().normalize() : new THREE.Vector3(0, 0, -1).applyQuaternion(q);
        const side = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
        fb.pos.copy(fm.pos).addScaledVector(dir, clamp(sp * 6, 60, 320)).addScaledVector(side, 28 + Math.random() * 25);
        const g = extra.groundAt(fb.pos.x, fb.pos.z);
        fb.pos.y = Math.max(fm.pos.y - 6 + Math.random() * 10, g + 2);
        fb.t = 0;
      }
      fb.t += dt;
      cam.position.copy(fb.pos);
      cam.up.set(0, 1, 0);
      cam.lookAt(fm.pos);
      const d = fm.pos.distanceTo(fb.pos);
      cam.fov = clamp(2 * Math.atan(26 / d) / DEG, 12, 60) / this.zoom;
      cam.near = 0.3;
    } else if (id === 'probe') {
      const p = bodyToWorld(P(12.2, 1.25, 2.5));
      cam.position.copy(p).add(this.shake);
      const look = bodyToWorld(P(8.6, -0.4, 0.3));
      cam.up.copy(new THREE.Vector3(0, 1, 0).applyQuaternion(q));
      cam.lookAt(look);
      cam.fov = 70 / this.zoom;
      cam.near = 0.05;
    } else if (id === 'wing') {
      const p = bodyToWorld(P(9.4, 4.5, -12.6));
      cam.position.copy(p).add(this.shake);
      const look = bodyToWorld(P(3.0, 2.8, 0));
      cam.up.copy(new THREE.Vector3(0, 1, 0).applyQuaternion(q));
      cam.lookAt(look);
      cam.fov = 62 / this.zoom;
      cam.near = 0.1;
    } else if (id === 'tower') {
      cam.position.copy(this.tower);
      cam.up.set(0, 1, 0);
      cam.lookAt(fm.pos);
      const d = fm.pos.distanceTo(this.tower);
      cam.fov = clamp(2 * Math.atan(30 / d) / DEG, 2, 60) / this.zoom;
      cam.near = 0.5;
    }
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld();
  }
}
