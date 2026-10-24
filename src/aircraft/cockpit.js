// Cabina di pilotaggio del CL-415: guscio interno con finestrini, pannello strumenti completo
// (strumenti di volo, motori, quantità d'acqua, annunciatori), glareshield con pannello di sgancio,
// piedistallo con manette, leva flap e trim, overhead, cloche "a corna", pedaliera, sedili, dettagli.

import * as THREE from 'three';
import { GEO, roofTop, halfBeam } from './specs.js';
import { clamp, DEG, lerp } from '../core/math.js';
import { buildHull, sectionT, tOfY, tOfHeight, pointAtT } from './hullgeo.js';
import { mergeGeos, strut } from './geom.js';
import { InstrumentAtlas, MAP, adiMaterial, Display, drawWaterDisplay, drawDropPanel, drawAnnunciator } from './instruments.js';
import { DROP_MODES } from './systems.js';
import { KT, FT, FPM } from '../core/constants.js';
import { SPEC } from './specs.js';

const P = (s, h, y = 0) => new THREE.Vector3(y, h - GEO.hCG, s - GEO.sCG);

const FLOOR = 1.5;
export const EYE = { s: 2.42, h: 2.77, y: -0.52 };

// punto sulla superficie interna della fusoliera
function hullPoint(s, { y = null, h = null }, inset, side) {
  const cache = sectionT(s);
  const t = y !== null ? tOfY(s, y) : tOfHeight(s, h);
  const [py, ph] = pointAtT(cache, t);
  const [py2, ph2] = pointAtT(cache, Math.min(1, t + 0.005));
  let ny = ph2 - ph, nh = -(py2 - py);
  const l = Math.hypot(ny, nh) || 1;
  return P(s, ph - (nh / l) * inset, side * (py - (ny / l) * inset));
}

export class Cockpit {
  constructor({ quality = 'medium' } = {}) {
    this.group = new THREE.Group();
    this.group.name = 'cockpit';
    this.static = new Map(); // materiale -> geometrie da unire
    this._mats();
    this._shell();
    this._frames();
    this._floorBulkhead();
    this._panel();
    this._glareshield();
    this._pedestal();
    this._overhead();
    this._yokes();
    this._pedals();
    this._seats();
    this._details();
    this._flush();
    this.group.traverse((o) => {
      if (o.isMesh) {
        o.receiveShadow = true;
        o.castShadow = false;
      }
    });
    this.eye = P(EYE.s, EYE.h, EYE.y);
    // luce di riempimento: simula la luce diffusa che rimbalza in cabina
    const fill = new THREE.PointLight(0xfff0dc, 1.6, 3.2, 1.6);
    fill.position.copy(P(2.3, 3.0, 0));
    this.group.add(fill);
    this.fill = fill;
  }

  _mats() {
    const std = (color, rough = 0.8, metal = 0, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, envMapIntensity: 0.35, ...extra });
    this.M = {
      wall: std(0x8a8c88, 0.88),
      wallDark: std(0x44474a, 0.85),
      panel: std(0x2b3034, 0.75),
      black: std(0x111213, 0.6),
      floor: std(0x22262a, 0.95),
      seat: std(0x2a2d31, 0.9),
      seatCushion: std(0x3b3f45, 0.95),
      metal: std(0x9aa1a6, 0.35, 0.8),
      chrome: std(0xd6dade, 0.15, 1.0),
      frame: std(0x1e2124, 0.6, 0.2),
      yoke: std(0x18191b, 0.5, 0.1),
      red: std(0xb5121b, 0.5),
      yellowBlack: std(0xd8b000, 0.5),
      white: std(0xe8e8e8, 0.6),
      knobRed: std(0xc01010, 0.45),
      knobBlack: std(0x101010, 0.4),
      visor: new THREE.MeshStandardMaterial({ color: 0x103018, roughness: 0.2, transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
      needle: new THREE.MeshBasicMaterial({ color: 0xf2f2f2 }),
      needleOrange: new THREE.MeshBasicMaterial({ color: 0xff9a10 }),
      cabinDark: new THREE.MeshBasicMaterial({ color: 0x0a0b0c, side: THREE.BackSide }),
    };
  }

  _add(geo, mat) {
    if (!this.static.has(mat)) this.static.set(mat, []);
    const g = geo.index ? geo : geo;
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    this.static.get(mat).push(g);
  }
  _box(w, h, d, pos, mat, rot = null) {
    const g = new THREE.BoxGeometry(w, h, d);
    if (rot) g.applyEuler(rot);
    g.translate(pos.x, pos.y, pos.z);
    this._add(g, mat);
  }
  _cyl(r0, r1, len, pos, mat, rot = null, seg = 12) {
    const g = new THREE.CylinderGeometry(r1, r0, len, seg);
    if (rot) g.applyEuler(rot);
    g.translate(pos.x, pos.y, pos.z);
    this._add(g, mat);
  }
  _flush() {
    for (const [mat, list] of this.static) {
      const merged = mergeGeos(list.map((g) => (g.index ? g : g)));
      merged.computeVertexNormals();
      const m = new THREE.Mesh(merged, mat);
      this.group.add(m);
    }
    this.static.clear();
  }

  // ---------------------------------------------------------------------------
  _shell() {
    const { strips } = buildHull({ s0: 0.6, s1: 3.98, inset: 0.05, inside: true, cutWindows: true });
    for (const g of strips) {
      const m = new THREE.Mesh(g, this.M.wall);
      m.name = 'cockpitShell';
      this.group.add(m);
    }
  }

  // cornici interne dei finestrini (coprono i bordi del ritaglio)
  _frames() {
    const r = 0.03;
    const tube = (pts, rad = r) => {
      const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), Math.max(4, pts.length * 2), rad, 6, false);
      this._add(g, this.M.frame);
    };
    const inset = 0.035;
    for (const side of [-1, 1]) {
      // parabrezza
      const maxY = (s) => 0.93 - (s - 1.2) * 0.1;
      const bottom = [], top = [], outer = [], center = [];
      for (let y = 0.05; y <= maxY(1.2) + 1e-6; y += 0.05) bottom.push(hullPoint(1.2, { y }, inset, side));
      for (let y = 0.05; y <= maxY(2.02) + 1e-6; y += 0.05) top.push(hullPoint(2.02, { y }, inset, side));
      for (let s = 1.2; s <= 2.02 + 1e-6; s += 0.05) outer.push(hullPoint(s, { y: maxY(s) }, inset, side));
      for (let s = 1.2; s <= 2.02 + 1e-6; s += 0.05) center.push(hullPoint(s, { y: 0.032 }, inset, side));
      tube(bottom, 0.025);
      tube(top, 0.03);
      tube(outer, 0.04);
      tube(center, 0.022);
      // finestrino d'angolo: bordo inferiore e posteriore
      const cb = [], cr = [];
      for (let s = 1.32; s <= 2.04 + 1e-6; s += 0.04) cb.push(hullPoint(s, { h: 2.43 }, inset, side));
      for (let h = 2.43; h <= roofTop(2.04) - 0.04 + 1e-6; h += 0.05) cr.push(hullPoint(2.04, { h }, inset, side));
      tube(cb, 0.026);
      tube(cr, 0.03);
      // finestrini laterali
      const hTop = (s) => Math.min(roofTop(s) - 0.3, 3.18);
      for (const [s0, s1] of [[2.13, 2.66], [2.74, 3.3]]) {
        const lo = [], hi = [], a = [], b = [];
        for (let s = s0; s <= s1 + 1e-6; s += 0.04) {
          lo.push(hullPoint(s, { h: 2.43 }, inset, side));
          hi.push(hullPoint(s, { h: hTop(s) }, inset, side));
        }
        for (let h = 2.43; h <= hTop(s0) + 1e-6; h += 0.05) a.push(hullPoint(s0, { h }, inset, side));
        for (let h = 2.43; h <= hTop(s1) + 1e-6; h += 0.05) b.push(hullPoint(s1, { h }, inset, side));
        tube(lo, 0.028);
        tube(hi, 0.026);
        tube(a, 0.028);
        tube(b, 0.028);
      }
      // sopracciglio
      const e = [];
      for (const [s, y] of [[2.12, 0.42], [2.12, 0.78], [2.6, 0.78], [2.6, 0.42], [2.12, 0.42]]) e.push(hullPoint(s, { y }, inset, side));
      const ePts = [];
      for (let i = 0; i < e.length - 1; i++) for (let k = 0; k < 6; k++) ePts.push(e[i].clone().lerp(e[i + 1], k / 6));
      tube(ePts, 0.02);
      // maniglia del finestrino scorrevole
      this._box(0.03, 0.04, 0.16, hullPoint(2.4, { h: 2.5 }, inset + 0.04, side), this.M.metal);
    }
  }

  _floorBulkhead() {
    // pavimento
    const fl = new THREE.PlaneGeometry(2.3, 3.2);
    fl.rotateX(-Math.PI / 2);
    fl.translate(0, FLOOR - GEO.hCG, 2.35 - GEO.sCG);
    this._add(fl, this.M.floor);
    // parete anteriore del vano piedi
    this._box(2.2, 0.38, 0.03, P(1.42, FLOOR + 0.19, 0), this.M.wallDark);
    // paratia posteriore con porta verso la stiva
    const sB = 3.96;
    this._box(0.82, 1.9, 0.04, P(sB, FLOOR + 0.95, -0.77), this.M.wall);
    this._box(0.82, 1.9, 0.04, P(sB, FLOOR + 0.95, 0.77), this.M.wall);
    this._box(0.72, 0.35, 0.04, P(sB, FLOOR + 1.72, 0), this.M.wall);
    // stiva buia dietro la paratia
    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.4, 3.0), this.M.cabinDark);
    cab.position.copy(P(sB + 1.52, FLOOR + 0.9, 0));
    this.group.add(cab);
    // serbatoio visibile dalla porta (sagoma)
    this._box(1.6, 1.2, 0.05, P(sB + 2.8, FLOOR + 0.3, 0), this.M.wallDark);
    // estintore
    this._cyl(0.06, 0.06, 0.42, P(3.85, FLOOR + 0.35, -0.95), this.M.red);
    this._cyl(0.02, 0.02, 0.08, P(3.85, FLOOR + 0.6, -0.95), this.M.black);
  }

  // ---------------------------------------------------------------------------
  _panel() {
    const tilt = 14 * DEG;
    const center = P(1.62, 2.16, 0);
    const pg = new THREE.Group();
    pg.position.copy(center);
    pg.rotation.x = -tilt;
    this.group.add(pg);
    this.panelGroup = pg;
    // pannello con etichette
    const c = document.createElement('canvas');
    c.width = 2048;
    c.height = 640;
    const g = c.getContext('2d');
    g.fillStyle = '#2d3236';
    g.fillRect(0, 0, c.width, c.height);
    // sottopannelli
    g.strokeStyle = '#1a1d20';
    g.lineWidth = 5;
    const U = (u) => ((u + 1.0) / 2.0) * c.width;
    const V = (v) => ((0.31 - v) / 0.64) * c.height;
    for (const [u0, u1] of [[-0.98, -0.16], [-0.15, 0.15], [0.16, 0.98]]) g.strokeRect(U(u0), V(0.3), U(u1) - U(u0), V(-0.32) - V(0.3));
    g.fillStyle = '#c8c8c8';
    g.font = 'bold 22px Arial';
    g.textAlign = 'center';
    const lab = (t, u, v, size = 22) => {
      g.font = `bold ${size}px Arial`;
      g.fillText(t, U(u), V(v));
    };
    lab('ENG 1', -0.06, 0.28);
    lab('ENG 2', 0.06, 0.28);
    lab('CAPTAIN', -0.5, 0.28);
    lab('FIRST OFFICER', 0.53, 0.28);
    lab('WATER', 0.24, 0.28);
    lab('GEAR', -0.24, -0.17, 18);
    lab('AMPHIBIAN GEAR', -0.24, -0.305, 13);
    lab('RAD ALT', -0.2, 0.2, 14);
    lab('RAD ALT', 0.83, 0.2, 14);
    for (const [t, u, v] of [['TQ', -0.13, 0.18], ['ITT', -0.13, 0.09], ['NH', -0.13, 0.0], ['NP', -0.13, -0.09], ['FF', -0.13, -0.18]]) lab(t, u, v - 0.01, 14);
    lab('FLAP', 0.205, -0.045, 13);
    lab('HYD', 0.29, -0.045, 13);
    lab('FUEL', 0.205, -0.145, 13);
    lab('G', 0.29, -0.145, 13);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    const shape = new THREE.Shape();
    shape.moveTo(-0.97, -0.33);
    shape.lineTo(0.97, -0.33);
    shape.lineTo(0.97, 0.18);
    shape.quadraticCurveTo(0.95, 0.31, 0.8, 0.31);
    shape.lineTo(-0.8, 0.31);
    shape.quadraticCurveTo(-0.95, 0.31, -0.97, 0.18);
    shape.closePath();
    const pgeo = new THREE.ShapeGeometry(shape, 8);
    const uv = pgeo.attributes.uv, pos = pgeo.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + 1) / 2, (pos.getY(i) + 0.33) / 0.64);
    const pm = new THREE.Mesh(pgeo, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, envMapIntensity: 0.3 }));
    pg.add(pm);
    // retro del pannello (spessore)
    const back = new THREE.Mesh(new THREE.BoxGeometry(1.94, 0.64, 0.12), this.M.panel);
    back.position.set(0, -0.01, -0.065);
    pg.add(back);

    // strumenti
    const atlas = new InstrumentAtlas();
    this.atlas = atlas;
    const faceMat = new THREE.MeshBasicMaterial({ map: atlas.texture });
    const overMat = new THREE.MeshBasicMaterial({ map: atlas.texture, transparent: true });
    this.gauges = {};
    const needle = (len, w = 0.006, mat = this.M.needle, tail = 0.15) => {
      const geo = new THREE.BoxGeometry(w, len * (1 + tail), 0.002);
      geo.translate(0, (len * (1 - tail)) / 2, 0);
      const m = new THREE.Mesh(geo, mat);
      return m;
    };
    const gauge = (name, cell, u, v, r, needles = []) => {
      const grp = new THREE.Group();
      grp.position.set(u, v, 0.004);
      pg.add(grp);
      if (cell) grp.add(new THREE.Mesh(atlas.disc(cell, r), faceMat));
      const bez = new THREE.Mesh(atlas.disc('bezel', r * 1.16), overMat);
      bez.position.z = 0.006;
      grp.add(bez);
      // cassa dello strumento
      const caseG = new THREE.CylinderGeometry(r * 1.16, r * 1.16, 0.03, 24);
      caseG.rotateX(Math.PI / 2);
      caseG.translate(0, 0, -0.012);
      grp.add(new THREE.Mesh(caseG, this.M.black));
      const ns = needles.map(([len, w, mat]) => {
        const pv = new THREE.Group();
        pv.position.z = 0.004;
        pv.add(needle(r * len, w, mat));
        grp.add(pv);
        return pv;
      });
      const hub = new THREE.Mesh(new THREE.CircleGeometry(r * 0.08, 12), this.M.black);
      hub.position.z = 0.006;
      grp.add(hub);
      this.gauges[name] = { grp, ns };
      return this.gauges[name];
    };
    const sixPack = (prefix, u0) => {
      gauge(prefix + 'asi', 'asi', u0 - 0.16, 0.13, 0.056, [[0.85, 0.008]]);
      // ADI
      const adi = new THREE.Group();
      adi.position.set(u0, 0.13, 0.004);
      pg.add(adi);
      const am = adiMaterial();
      adi.add(new THREE.Mesh(new THREE.CircleGeometry(0.068, 48), am));
      const ov = new THREE.Mesh(atlas.disc('adiOverlay', 0.068), overMat);
      ov.position.z = 0.003;
      adi.add(ov);
      const bz = new THREE.Mesh(atlas.disc('bezel', 0.08), overMat);
      bz.position.z = 0.006;
      adi.add(bz);
      this.gauges[prefix + 'adi'] = { mat: am };
      gauge(prefix + 'alt', 'alt', u0 + 0.16, 0.13, 0.056, [[0.86, 0.007], [0.55, 0.012], [0.92, 0.003, this.M.needleOrange]]);
      // coordinatore di virata
      const tc = gauge(prefix + 'tc', 'tcFace', u0 - 0.16, -0.03, 0.046, []);
      const plane = new THREE.Mesh(atlas.disc('tcPlane', 0.046), overMat);
      plane.position.z = 0.004;
      tc.grp.add(plane);
      tc.plane = plane;
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.0055, 10, 8), this.M.black);
      ball.position.set(0, -0.046 * 0.4 - 0.046 * 0.9 * -1 + -0.046 * 0.9, 0.005);
      tc.grp.add(ball);
      tc.ball = ball;
      // HSI
      const hsi = gauge(prefix + 'hsi', null, u0, -0.035, 0.066, []);
      const card = new THREE.Mesh(atlas.disc('hsiCard', 0.06), faceMat);
      card.position.z = 0.001;
      hsi.grp.add(card);
      const hov = new THREE.Mesh(atlas.disc('hsiOverlay', 0.06), overMat);
      hov.position.z = 0.004;
      hsi.grp.add(hov);
      hsi.card = card;
      gauge(prefix + 'vsi', 'vsi', u0 + 0.16, -0.03, 0.05, [[0.85, 0.008]]);
    };
    sixPack('c_', -0.5);
    sixPack('f_', 0.53);
    gauge('c_radalt', 'radalt', -0.2, 0.13, 0.044, [[0.85, 0.007]]);
    gauge('f_radalt', 'radalt', 0.83, 0.13, 0.044, [[0.85, 0.007]]);
    gauge('clock', 'clock', -0.84, 0.0, 0.036, [[0.6, 0.006], [0.85, 0.004], [0.9, 0.0025, this.M.needleOrange]]);
    gauge('gmeter', 'g', -0.2, -0.03, 0.036, [[0.85, 0.006]]);
    for (const [k, v] of [['torque', 0.18], ['itt', 0.09], ['nh', 0.0], ['np', -0.09], ['ff', -0.18]]) {
      gauge(k + '1', k, -0.06, v, 0.036, [[0.85, 0.006]]);
      gauge(k + '2', k, 0.06, v, 0.036, [[0.85, 0.006]]);
    }
    gauge('flaps', 'flaps', 0.205, 0.0, 0.034, [[0.85, 0.007]]);
    gauge('hyd', 'hyd', 0.29, 0.0, 0.034, [[0.85, 0.006], [0.75, 0.006, this.M.needleOrange]]);
    gauge('fuel', 'fuel', 0.205, -0.1, 0.034, [[0.85, 0.006], [0.75, 0.006, this.M.needleOrange]]);
    gauge('gfo', 'g', 0.29, -0.1, 0.034, [[0.85, 0.006]]);

    // display quantità d'acqua
    this.waterDisplay = new Display(384, 256, drawWaterDisplay);
    const wd = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 0.1), new THREE.MeshBasicMaterial({ map: this.waterDisplay.texture }));
    wd.position.set(0.245, 0.17, 0.006);
    pg.add(wd);
    // pannello annunciatori
    this.annunciator = new Display(512, 256, drawAnnunciator);
    const an = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.1), new THREE.MeshBasicMaterial({ map: this.annunciator.texture }));
    an.position.set(0.245, -0.235, 0.006);
    pg.add(an);
    // leva del carrello + luci
    const gl = new THREE.Group();
    gl.position.set(-0.27, -0.25, 0.01);
    pg.add(gl);
    const leverG = new THREE.BoxGeometry(0.012, 0.012, 0.09);
    leverG.translate(0, 0, 0.045);
    gl.add(new THREE.Mesh(leverG, this.M.chrome));
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.012, 16), this.M.white);
    knob.rotation.x = Math.PI / 2;
    knob.position.z = 0.09;
    gl.add(knob);
    this.gearLever = gl;
    this.gearLights = [];
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(new THREE.CircleGeometry(0.011, 14), new THREE.MeshBasicMaterial({ color: 0x0a200a }));
      m.position.set(-0.2 + (i === 0 ? 0.025 : i === 1 ? 0 : 0.05), -0.21 - (i === 0 ? 0 : 0.035), 0.006);
      pg.add(m);
      this.gearLights.push(m);
    }
    // interruttori sotto il pannello (luci, sonde, schiuma)
    for (let i = 0; i < 10; i++) {
      const sw = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.006, 0.03, 8), this.M.chrome);
      sw.rotation.x = Math.PI / 2 + 0.4;
      sw.position.set(-0.75 + i * 0.05, -0.28, 0.02);
      pg.add(sw);
    }
  }

  _glareshield() {
    // copertura antiriflesso sopra il pannello
    const shape = new THREE.Shape();
    shape.moveTo(-0.96, 0);
    shape.lineTo(0.96, 0);
    shape.lineTo(0.86, 0.24);
    shape.quadraticCurveTo(0.0, 0.33, -0.86, 0.24);
    shape.closePath();
    const g = new THREE.ExtrudeGeometry(shape, { depth: 0.025, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.012, bevelSegments: 2 });
    g.rotateX(-Math.PI / 2); // la sagoma si estende in avanti (verso il parabrezza), lo spessore verso l'alto
    g.translate(0, 2.475 - GEO.hCG, 1.64 - GEO.sCG);
    this._add(g, this.M.black);
    // bordo frontale imbottito
    this._box(1.9, 0.045, 0.05, P(1.635, 2.462, 0), this.M.black);
    // pulsanti master warning/caution per i due piloti
    this.masterLights = [];
    for (const side of [-1, 1]) {
      for (const [k, col] of [[0, 0x401010], [1, 0x403010]]) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 0.012), new THREE.MeshBasicMaterial({ color: col }));
        m.position.copy(P(1.665, 2.455, side * (0.72 - k * 0.07)));
        m.rotation.x = -0.3;
        this.group.add(m);
        this.masterLights.push({ m, kind: k });
      }
    }
    // pannello di sgancio al centro
    this.dropDisplay = new Display(256, 128, drawDropPanel);
    const dp = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.08), new THREE.MeshBasicMaterial({ map: this.dropDisplay.texture }));
    dp.position.copy(P(1.56, 2.535, 0));
    dp.rotation.x = -1.05;
    this.group.add(dp);
    this._box(0.18, 0.05, 0.1, P(1.55, 2.5, 0), this.M.black);
    // bussola magnetica
    this._box(0.09, 0.07, 0.07, P(2.0, roofTop(2.0) - 0.16, 0), this.M.black);
    const cg = new THREE.Mesh(new THREE.CircleGeometry(0.025, 16), new THREE.MeshBasicMaterial({ color: 0xd0c8a0 }));
    cg.position.copy(P(2.036, roofTop(2.0) - 0.16, 0));
    this.group.add(cg);
    // alette parasole
    for (const side of [-1, 1]) {
      const v = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.2), this.M.visor);
      v.position.copy(P(2.05, roofTop(2.05) - 0.17, side * 0.48));
      v.rotation.x = -1.0;
      this.group.add(v);
    }
  }

  _pedestal() {
    // corpo
    const s0 = 1.72, s1 = 2.95;
    this._box(0.36, 0.5, s1 - s0, P((s0 + s1) / 2, FLOOR + 0.25 + 0.0, 0), this.M.panel);
    const topG = new THREE.BoxGeometry(0.36, 0.04, s1 - s0);
    topG.rotateX(0.06);
    topG.translate(0, FLOOR + 0.5 - GEO.hCG, (s0 + s1) / 2 - GEO.sCG);
    this._add(topG, this.M.panel);
    // radio / pannelli sul piedistallo
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 768;
    const g = c.getContext('2d');
    g.fillStyle = '#25292d';
    g.fillRect(0, 0, 256, 768);
    const panelBox = (y, h, title, lines) => {
      g.fillStyle = '#1b1e21';
      g.fillRect(10, y, 236, h);
      g.fillStyle = '#c8c8c8';
      g.font = 'bold 15px Arial';
      g.textAlign = 'left';
      g.fillText(title, 18, y + 20);
      g.fillStyle = '#ff9a1a';
      g.font = '22px monospace';
      lines.forEach((l, i) => g.fillText(l, 18, y + 46 + i * 26));
    };
    panelBox(20, 110, 'COM 1   COM 2', ['122.80  123.45']);
    panelBox(140, 110, 'NAV 1   ADF', ['110.30  353']);
    panelBox(260, 90, 'XPDR', ['7000  ALT']);
    panelBox(360, 130, 'ELEV TRIM   AIL TRIM', ['']);
    panelBox(500, 120, 'FIRE / WATER', ['DROP ARM', 'FOAM INJ']);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const face = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 1.0), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, envMapIntensity: 0.3 }));
    face.rotation.x = -Math.PI / 2 + 0.06;
    face.position.copy(P(2.38, FLOOR + 0.525, 0));
    this.group.add(face);
    // manette di potenza e leve di condizione
    this.powerLevers = [];
    this.condLevers = [];
    for (const [i, y] of [[0, -0.045], [1, 0.045]]) {
      const lv = new THREE.Group();
      lv.position.copy(P(2.08, FLOOR + 0.52, y));
      this.group.add(lv);
      const arm = new THREE.BoxGeometry(0.012, 0.2, 0.018);
      arm.translate(0, 0.1, 0);
      lv.add(new THREE.Mesh(arm, this.M.chrome));
      const knob = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, 0.035), this.M.knobBlack);
      knob.position.y = 0.21;
      lv.add(knob);
      this.powerLevers.push(lv);
      const cl = new THREE.Group();
      cl.position.copy(P(2.25, FLOOR + 0.52, y * 2.7));
      this.group.add(cl);
      const carm = new THREE.BoxGeometry(0.01, 0.15, 0.014);
      carm.translate(0, 0.075, 0);
      cl.add(new THREE.Mesh(carm, this.M.chrome));
      const ck = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.04, 10), this.M.knobRed);
      ck.rotation.z = Math.PI / 2;
      ck.position.y = 0.155;
      cl.add(ck);
      cl.rotation.x = -0.4;
      this.condLevers.push(cl);
    }
    // leva dei flap (pomello a forma di flap)
    const fl = new THREE.Group();
    fl.position.copy(P(2.5, FLOOR + 0.53, 0.11));
    this.group.add(fl);
    const farm = new THREE.BoxGeometry(0.012, 0.14, 0.012);
    farm.translate(0, 0.07, 0);
    fl.add(new THREE.Mesh(farm, this.M.chrome));
    const fk = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.018, 0.04), this.M.white);
    fk.position.y = 0.145;
    fl.add(fk);
    this.flapLever = fl;
    // ruota del trim di profondità (lato sinistro del piedistallo)
    const tw = new THREE.Group();
    tw.position.copy(P(2.5, FLOOR + 0.36, -0.19));
    this.group.add(tw);
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.03, 32), this.M.black);
    wheel.rotation.z = Math.PI / 2;
    tw.add(wheel);
    for (let k = 0; k < 16; k++) {
      const nub = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.012, 0.012), this.M.white);
      const a = (k / 16) * Math.PI * 2;
      nub.position.set(0, Math.cos(a) * 0.13, Math.sin(a) * 0.13);
      tw.add(nub);
    }
    this.trimWheel = tw;
    // selettore modalità di sgancio
    const sel = new THREE.Group();
    sel.position.copy(P(2.78, FLOOR + 0.56, -0.08));
    this.group.add(sel);
    const sk = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.026, 0.03, 16), this.M.knobBlack);
    sel.add(sk);
    const ptr = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.031, 0.02), this.M.white);
    ptr.position.set(0, 0.001, -0.012);
    sel.add(ptr);
    this.dropSelector = sel;
    // interruttore armamento sgancio (con coperchio rosso)
    this._box(0.04, 0.012, 0.06, P(2.78, FLOOR + 0.55, 0.08), this.M.red);
  }

  _overhead() {
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 1024;
    const g = c.getContext('2d');
    g.fillStyle = '#2b3034';
    g.fillRect(0, 0, 1024, 1024);
    const sections = [
      ['ELECTRICAL', 40, 40], ['FUEL', 540, 40], ['ENGINE START', 40, 300], ['ANTI-ICE', 540, 300],
      ['LIGHTS', 40, 560], ['HYDRAULIC', 540, 560], ['FIRE', 40, 800], ['WATER SYSTEM', 540, 800],
    ];
    for (const [t, x, y] of sections) {
      g.strokeStyle = '#d0d0d0';
      g.lineWidth = 3;
      g.strokeRect(x, y, 440, 220);
      g.fillStyle = '#2b3034';
      g.fillRect(x + 20, y - 12, t.length * 15 + 20, 24);
      g.fillStyle = '#e0e0e0';
      g.font = 'bold 22px Arial';
      g.fillText(t, x + 30, y + 8);
      g.font = '14px Arial';
      for (let i = 0; i < 6; i++) g.fillText(['BATT', 'GEN 1', 'GEN 2', 'INV', 'BUS', 'EXT'][i], x + 30 + i * 70, y + 200);
    }
    // maniglie antincendio
    g.fillStyle = '#c01010';
    g.fillRect(90, 850, 120, 60);
    g.fillRect(300, 850, 120, 60);
    g.fillStyle = '#fff';
    g.font = 'bold 22px Arial';
    g.fillText('ENG 1', 112, 888);
    g.fillText('ENG 2', 322, 888);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const ov = new THREE.Group();
    ov.position.copy(P(2.55, roofTop(2.55) - 0.12, 0));
    ov.rotation.x = Math.PI / 2 + 0.12;
    this.group.add(ov);
    const face = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.72), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, envMapIntensity: 0.3 }));
    ov.add(face);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.74, 0.1), this.M.panel);
    body.position.z = -0.052;
    ov.add(body);
    // interruttori a levetta
    const swG = [];
    for (let r = 0; r < 4; r++) {
      for (let k = 0; k < 6; k++) {
        for (const half of [0, 1]) {
          const x = -0.27 + half * 0.3 + k * 0.042;
          const y = 0.3 - r * 0.175 - 0.07;
          const g1 = new THREE.CylinderGeometry(0.003, 0.004, 0.022, 6);
          g1.rotateX(Math.PI / 2 + (Math.random() < 0.6 ? 0.4 : -0.4));
          g1.translate(x, y, 0.012);
          swG.push(g1);
        }
      }
    }
    const sw = new THREE.Mesh(mergeGeos(swG.map((g) => { if (!g.attributes.uv) return g; return g; })), this.M.chrome);
    ov.add(sw);
  }

  _yokes() {
    this.yokes = [];
    for (const side of [-1, 1]) {
      const col = new THREE.Group();
      col.position.copy(P(1.98, FLOOR + 0.02, side * 0.52));
      this.group.add(col);
      // colonna
      const cg = new THREE.CylinderGeometry(0.03, 0.04, 0.62, 12);
      cg.translate(0, 0.31, 0);
      const cm = new THREE.Mesh(cg, this.M.yoke);
      cm.rotation.x = 0.28;
      col.add(cm);
      // soffietto alla base
      const boot = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.12, 12), this.M.black);
      boot.position.y = 0.06;
      col.add(boot);
      // volantino "a corna"
      const wheel = new THREE.Group();
      wheel.position.set(0, 0.6, 0.17);
      col.add(wheel);
      const hub = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.07, 0.05), this.M.yoke);
      wheel.add(hub);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.03, 0.035), this.M.yoke);
      bar.position.y = -0.01;
      wheel.add(bar);
      for (const s of [-1, 1]) {
        const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.02, 0.15, 10), this.M.yoke);
        grip.position.set(s * 0.165, 0.05, 0);
        grip.rotation.z = -s * 0.18;
        wheel.add(grip);
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.02, 10, 8), this.M.yoke);
        cap.position.set(s * 0.18, 0.125, 0);
        wheel.add(cap);
      }
      // pulsante DROP rosso e interruttore sonde sull'impugnatura sinistra
      const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.01, 10), this.M.knobRed);
      btn.position.set(-0.18, 0.138, 0);
      wheel.add(btn);
      const tr = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.01, 0.012), this.M.yellowBlack);
      tr.position.set(0.18, 0.12, 0.018);
      wheel.add(tr);
      // logo centrale
      const logo = new THREE.Mesh(new THREE.CircleGeometry(0.022, 16), this.M.metal);
      logo.position.z = 0.026;
      wheel.add(logo);
      // clip della checklist
      const card = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.06), this.M.white);
      card.position.set(0, 0.06, 0.027);
      wheel.add(card);
      this.yokes.push({ col, wheel });
    }
  }

  _pedals() {
    this.pedals = [];
    for (const side of [-1, 1]) {
      for (const lr of [-1, 1]) {
        const pv = new THREE.Group();
        pv.position.copy(P(1.55, FLOOR + 0.42, side * 0.52 + lr * 0.12));
        this.group.add(pv);
        const arm = new THREE.BoxGeometry(0.03, 0.28, 0.025);
        arm.translate(0, -0.14, 0);
        pv.add(new THREE.Mesh(arm, this.M.metal));
        const pad = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.15, 0.02), this.M.black);
        pad.position.set(0, -0.25, 0.03);
        pad.rotation.x = -0.5;
        pv.add(pad);
        this.pedals.push({ pv, lr, side });
      }
    }
  }

  _seats() {
    for (const side of [-1, 1]) {
      const y = side * 0.52;
      // rotaie e base
      this._box(0.42, 0.06, 0.6, P(2.55, FLOOR + 0.03, y), this.M.metal);
      this._box(0.3, 0.32, 0.36, P(2.5, FLOOR + 0.22, y), this.M.seat);
      // seduta
      const cush = new THREE.BoxGeometry(0.5, 0.11, 0.5);
      cush.translate(y, FLOOR + 0.42 - GEO.hCG, 2.4 - GEO.sCG);
      this._add(cush, this.M.seatCushion);
      // schienale inclinato
      const back = new THREE.BoxGeometry(0.5, 0.78, 0.12);
      back.translate(0, 0.39, 0);
      back.rotateX(0.2);
      back.translate(y, FLOOR + 0.46 - GEO.hCG, 2.68 - GEO.sCG);
      this._add(back, this.M.seatCushion);
      // poggiatesta
      const hr = new THREE.BoxGeometry(0.28, 0.2, 0.12);
      hr.translate(0, 0.9, 0.0);
      hr.rotateX(0.2);
      hr.translate(y, FLOOR + 0.46 - GEO.hCG, 2.7 - GEO.sCG);
      this._add(hr, this.M.seat);
      // braccioli
      for (const s of [-1, 1]) {
        const ar = new THREE.BoxGeometry(0.06, 0.06, 0.36);
        ar.translate(y + s * 0.26, FLOOR + 0.68 - GEO.hCG, 2.45 - GEO.sCG);
        this._add(ar, this.M.seat);
      }
      // cinture (bretelle)
      for (const s of [-1, 1]) {
        const a = P(2.74, FLOOR + 1.12, y + s * 0.1);
        const b = P(2.62, FLOOR + 0.5, y + s * 0.16);
        this._add(strut(a, b, 0.022, 0.022, 4, 0.3), this.M.knobBlack);
      }
    }
  }

  _details() {
    // consolle laterali
    for (const side of [-1, 1]) {
      this._box(0.22, 0.42, 1.2, P(2.55, FLOOR + 0.62, side * 0.98), this.M.panel);
    }
    // timone di sterzo ruotino (sinistra)
    const tl = new THREE.Group();
    tl.position.copy(P(2.2, FLOOR + 0.86, -0.95));
    this.group.add(tl);
    const tw = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.02, 20), this.M.black);
    tl.add(tw);
    const th = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.06, 8), this.M.black);
    th.position.set(0.05, 0.04, 0);
    tl.add(th);
    this.tiller = tl;
    // cuffie appese
    for (const side of [-1, 1]) {
      const hp = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.012, 6, 16, Math.PI), this.M.black);
      hp.position.copy(P(3.1, 2.62, side * 1.02));
      hp.rotation.y = Math.PI / 2;
      this.group.add(hp);
    }
    // portadocumenti
    this._box(0.04, 0.25, 0.3, P(3.05, FLOOR + 0.75, -1.06), this.M.black);
  }

  // ---------------------------------------------------------------------------
  update(dt, fm, sys, time) {
    const o = fm.out;
    const G = this.gauges;
    const nd = (g, i, deg) => {
      if (g && g.ns[i]) g.ns[i].rotation.z = -deg * DEG;
    };
    const iasKt = o.ias / KT;
    const altFt = o.alt / FT;
    const vsFpm = o.vs / FPM;
    for (const p of ['c_', 'f_']) {
      nd(G[p + 'asi'], 0, MAP.asi(iasKt));
      const adi = G[p + 'adi'];
      adi.mat.uniforms.pitch.value = o.pitch;
      adi.mat.uniforms.roll.value = -o.roll;
      nd(G[p + 'alt'], 0, ((altFt % 1000) / 1000) * 360);
      nd(G[p + 'alt'], 1, ((altFt % 10000) / 10000) * 360);
      nd(G[p + 'alt'], 2, ((altFt % 100000) / 100000) * 360);
      nd(G[p + 'vsi'], 0, MAP.vsi(vsFpm));
      const tc = G[p + 'tc'];
      tc.plane.rotation.z = -clamp((o.turnRate / (3 * DEG)) * 20, -35, 35) * DEG;
      const slipA = clamp(-o.ny * 3.2, -1, 1) * 0.36;
      const R = 0.046 * 0.9;
      tc.ball.position.set(Math.sin(slipA) * R, 0.046 * 0.4 - Math.cos(slipA) * R, 0.006);
      G[p + 'hsi'].card.rotation.z = o.heading;
      nd(G[p + 'radalt'], 0, MAP.radalt(Math.max(0, o.radAlt / FT)));
    }
    const d = new Date();
    nd(G.clock, 0, ((d.getHours() % 12) + d.getMinutes() / 60) * 30);
    nd(G.clock, 1, d.getMinutes() * 6);
    nd(G.clock, 2, d.getSeconds() * 6);
    nd(G.gmeter, 0, MAP.g(o.nz));
    nd(G.gfo, 0, MAP.g(o.nz));
    for (let i = 0; i < 2; i++) {
      const e = sys.engines[i];
      const k = i + 1;
      nd(G['torque' + k], 0, MAP.torque(e.torque));
      nd(G['itt' + k], 0, MAP.itt(e.itt));
      nd(G['nh' + k], 0, MAP.nh(e.nh));
      nd(G['np' + k], 0, MAP.np((e.np / 100) * SPEC.propRPM));
      nd(G['ff' + k], 0, MAP.ff(e.ff));
    }
    nd(G.flaps, 0, MAP.flaps(sys.flapPos));
    const hp = sys.engines[0].running || sys.engines[1].running ? 3000 : 0;
    nd(G.hyd, 0, MAP.hyd(hp));
    nd(G.hyd, 1, MAP.hyd(hp * 0.98));
    nd(G.fuel, 0, MAP.fuel(sys.fuel / 2));
    nd(G.fuel, 1, MAP.fuel(sys.fuel / 2 - 15));

    // comandi
    const c = fm.ctl;
    for (const y of this.yokes) {
      y.col.rotation.x = c.elevator * 12 * DEG;
      y.wheel.rotation.z = -c.aileron * 70 * DEG;
    }
    for (const p of this.pedals) p.pv.position.z = P(1.55, 0, 0).z + (p.lr < 0 ? 1 : -1) * c.rudder * 0.05;
    for (let i = 0; i < 2; i++) {
      const e = sys.engines[i];
      this.powerLevers[i].rotation.x = (e.reverseLever > 0.02 ? 32 + 12 * e.reverseLever : 28 - 60 * e.lever) * DEG;
    }
    this.flapLever.rotation.x = (-22 + (sys.flapIndex / 3) * 48) * DEG;
    this.trimWheel.rotation.x = sys.elevTrim * 8;
    this.gearLever.rotation.x = (sys.gearDown ? -25 : 25) * DEG;
    this.tiller.rotation.y = -(c.tiller || 0) * 1.5;
    this.dropSelector.rotation.y = -sys.dropMode * 40 * DEG;

    // luci del carrello
    const gp = sys.gearPos;
    const transit = gp > 0.02 && gp < 0.98;
    for (const l of this.gearLights) l.material.color.setHex(transit ? 0xff2010 : gp >= 0.98 ? 0x20ff30 : 0x0a200a);
    // master warning/caution lampeggianti
    const blink = Math.floor(time * 3) % 2 === 0;
    for (const ml of this.masterLights) {
      const on = ml.kind === 0 ? sys.warn.master : sys.warn.caution;
      ml.m.material.color.setHex(on && blink ? (ml.kind === 0 ? 0xff2010 : 0xffaa00) : ml.kind === 0 ? 0x401010 : 0x403010);
    }

    // display (aggiornati solo quando cambiano)
    this._dispT = (this._dispT || 0) + dt;
    if (this._dispT > 0.1) {
      this._dispT = 0;
      const cap = SPEC.waterCapacity / 4;
      const foamMix = sys.foamMix.reduce((a, b) => a + b, 0) / 4;
      this.waterDisplay.update({
        total: Math.round(sys.waterLiters() / 5) * 5,
        tanks: sys.tanks.map((t) => Math.round((t / cap) * 20) / 20),
        doors: sys.doorOpen.map((x) => x > 0.1),
        foam: sys.foamArmed,
        foamPct: Math.round(foamMix * 100),
        preset: Math.round(sys.scoopPreset * 100),
        scoop: o.scoopRate > 20,
      });
      this.dropDisplay.update({ mode: DROP_MODES[sys.dropMode].id, doors: sys.doorOpen.map((x) => x > 0.1), armed: sys.waterLiters() > 10 });
      const w = sys.warn;
      this.annunciator.update({
        stall: w.stall, overspeed: w.overspeed, gearWater: w.gearWater && blink, gearUpLand: w.gearUpLand && blink,
        probes: sys.probePos > 0.5, probeSpeed: w.probeSpeed, tanksFull: sys.waterLiters() > SPEC.waterCapacity - 5,
        doors: sys.doorOpen.some((x) => x > 0.1), flapSpeed: w.flapSpeed, lowFuel: w.lowFuel, overweight: w.overweight,
        foam: sys.foamArmed, park: sys.parkingBrake, eng1: !sys.engines[0].running, eng2: !sys.engines[1].running,
        rev: sys.engines.some((e) => e.reverse > 0.1),
      });
    }
  }
}
