// Cabina di pilotaggio del CL-415: guscio interno con finestrini, pannello strumenti completo
// (strumenti di volo, motori, quantità d'acqua, annunciatori), glareshield con pannello di sgancio,
// piedistallo con manette, leva flap e trim, overhead, cloche "a corna", pedaliera, sedili, dettagli.

import * as THREE from 'three';
import { GEO, roofTop, halfBeam } from './specs.js';
import { clamp, DEG, lerp } from '../core/math.js';
import { buildHull, sectionT, tOfY, tOfHeight, pointAtT } from './hullgeo.js';
import { mergeGeos, strut } from './geom.js';
import { InstrumentAtlas, MAP, adiMaterial, Display, drawAnnunciator } from './instruments.js';
import { drawEfisAdi, drawEfisHsi, drawEngineDisplay, drawEngineLower, drawSystemDisplay, drawWaterStatus, drawDropControl } from './efis.js';
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
      wall: std(0x8c8e8a, 0.92),
      wallDark: std(0x55595b, 0.85),
      panel: std(0x7b7f7e, 0.72),
      hood: std(0x5f6365, 0.95),
      black: std(0x111213, 0.6),
      bezel: std(0x161718, 0.45),
      button: std(0x2c2f31, 0.5),
      floor: std(0x34383c, 0.95),
      seat: std(0x2a2d31, 0.9),
      seatCushion: std(0x3d4a5c, 0.95),
      metal: std(0x9aa1a6, 0.35, 0.8),
      chrome: std(0xd6dade, 0.15, 1.0),
      frame: std(0x5a5e60, 0.65, 0.1),
      column: std(0x74787a, 0.45, 0.3),
      yoke: std(0x2e3134, 0.5, 0.1),
      grip: std(0x1a1b1c, 0.75),
      red: std(0xb5121b, 0.5),
      yellowBlack: std(0xd8b000, 0.5),
      white: std(0xe8e8e8, 0.55),
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
      // montante tra parabrezza e finestrino d'angolo (copre entrambi i bordi)
      for (let s = 1.2; s <= 2.02 + 1e-6; s += 0.05) outer.push(hullPoint(s, { y: maxY(s) + 0.038 }, inset + 0.005, side));
      for (let s = 1.2; s <= 2.02 + 1e-6; s += 0.05) center.push(hullPoint(s, { y: 0.032 }, inset, side));
      tube(bottom, 0.025);
      tube(top, 0.03);
      tube(outer, 0.062);
      tube(center, 0.022);
      // finestrino d'angolo: bordo inferiore e posteriore
      const cb = [], cr = [];
      for (let s = 1.32; s <= 2.04 + 1e-6; s += 0.04) cb.push(hullPoint(s, { h: 2.43 }, inset, side));
      for (let h = 2.43; h <= roofTop(2.04) - 0.04 + 1e-6; h += 0.05) cr.push(hullPoint(2.04, { h }, inset, side));
      const ct = [];
      for (let s = 1.32; s <= 2.04 + 1e-6; s += 0.04) ct.push(hullPoint(s, { h: roofTop(s) - 0.04 }, inset, side));
      tube(cb, 0.03);
      tube(cr, 0.034);
      tube(ct, 0.04);
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

  // geometrie statiche di un gruppo (unite per materiale e aggiunte al gruppo)
  _local(group) {
    const map = new Map();
    const add = (geo, mat) => {
      if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
      if (!map.has(mat)) map.set(mat, []);
      map.get(mat).push(geo);
    };
    const box = (w, h, d, x, y, z, mat, rx = 0) => {
      const g = new THREE.BoxGeometry(w, h, d);
      if (rx) g.rotateX(rx);
      g.translate(x, y, z);
      add(g, mat);
    };
    const flush = () => {
      for (const [mat, list] of map) {
        const merged = mergeGeos(list);
        merged.computeVertexNormals();
        group.add(new THREE.Mesh(merged, mat));
      }
      map.clear();
    };
    return { add, box, flush };
  }

  // schermo con cornice in rilievo e pulsanti sul bordo inferiore
  _screen(L, parent, display, u, v, w, h, { buttons = 5, side = false } = {}) {
    const fw = 0.014, d = 0.016;
    L.box(w + fw * 2, fw, d, u, v + h / 2 + fw / 2, d / 2, this.M.bezel);
    L.box(w + fw * 2, fw * 1.6, d, u, v - h / 2 - fw * 0.8, d / 2, this.M.bezel);
    L.box(fw, h, d, u - w / 2 - fw / 2, v, d / 2, this.M.bezel);
    L.box(fw, h, d, u + w / 2 + fw / 2, v, d / 2, this.M.bezel);
    L.box(w, h, 0.004, u, v, 0.002, this.M.black);
    for (let i = 0; i < buttons; i++) {
      const x = u - w / 2 + (w / buttons) * (i + 0.5);
      L.box(0.012, 0.008, 0.006, x, v - h / 2 - fw * 0.8, d + 0.003, this.M.button);
    }
    if (side) for (let i = 0; i < 4; i++) L.box(0.007, 0.012, 0.006, u + w / 2 + fw / 2, v + h * 0.35 - i * h * 0.23, d + 0.003, this.M.button);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), this.screenMat(display));
    m.position.set(u, v, 0.006);
    parent.add(m);
    return m;
  }

  screenMat(display) {
    // gli schermi emettono luce propria: niente tone mapping, leggermente attenuati
    return new THREE.MeshBasicMaterial({ map: display.texture, toneMapped: false, color: 0xd8d8d8 });
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
    const L = this._local(pg);
    // layout (coordinate del pannello in metri: u laterale, v verticale)
    const LAY = {
      asi: [-0.76, 0.13, 0.056], alt: [-0.34, 0.13, 0.056], vsi: [-0.34, -0.05, 0.05], radalt: [-0.76, -0.05, 0.046],
      adi: [-0.55, 0.14, 0.17, 0.14], hsi: [-0.55, -0.05, 0.17, 0.15],
    };
    const mirror = (k, s) => { const a = LAY[k].slice(); a[0] *= s; return a; };
    const ENG = [-0.11, 0.14, 0.2, 0.15], ENG2 = [-0.11, -0.04, 0.18, 0.1], SYS = [0.11, 0.14, 0.2, 0.15], ANN = [0.11, -0.04, 0.2, 0.1];

    // pannello con sottopannelli, viti ed etichette
    const c = document.createElement('canvas');
    c.width = 2048;
    c.height = 640;
    const g = c.getContext('2d');
    g.fillStyle = '#7d817f';
    g.fillRect(0, 0, c.width, c.height);
    // leggera grana della vernice
    for (let i = 0; i < 9000; i++) {
      g.fillStyle = Math.random() < 0.5 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.04)';
      g.fillRect(Math.random() * c.width, Math.random() * c.height, 2, 2);
    }
    const U = (u) => ((u + 1.0) / 2.0) * c.width;
    const V = (v) => ((0.31 - v) / 0.64) * c.height;
    const sub = (u0, v0, u1, v1) => {
      g.strokeStyle = '#4c504f';
      g.lineWidth = 4;
      g.strokeRect(U(u0), V(v1), U(u1) - U(u0), V(v0) - V(v1));
      g.strokeStyle = 'rgba(255,255,255,0.18)';
      g.lineWidth = 2;
      g.strokeRect(U(u0) + 3, V(v1) + 3, U(u1) - U(u0) - 6, V(v0) - V(v1) - 6);
      g.fillStyle = '#5b5f5e';
      for (const [x, y] of [[u0 + 0.012, v0 + 0.012], [u1 - 0.012, v0 + 0.012], [u0 + 0.012, v1 - 0.012], [u1 - 0.012, v1 - 0.012]]) {
        g.beginPath();
        g.arc(U(x), V(y), 6, 0, Math.PI * 2);
        g.fill();
        g.strokeStyle = '#2e3130';
        g.lineWidth = 2;
        g.beginPath();
        g.moveTo(U(x) - 4, V(y));
        g.lineTo(U(x) + 4, V(y));
        g.stroke();
      }
    };
    sub(-0.965, -0.325, -0.245, 0.3);
    sub(0.245, -0.325, 0.965, 0.3);
    sub(-0.235, -0.325, 0.235, 0.3);
    const lab = (t, u, v, size = 20, col = '#f4f4f0') => {
      g.fillStyle = col;
      g.font = `bold ${size}px Arial`;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(t, U(u), V(v));
    };
    for (const s of [-1, 1]) {
      lab('AIRSPEED', 0.76 * s, 0.215, 15);
      lab('ALTITUDE', 0.34 * s, 0.215, 15);
      lab('EADI', 0.55 * s, 0.255, 16);
      lab('EHSI', 0.55 * s, 0.05, 14);
      lab('RAD ALT', 0.76 * s, 0.025, 14);
      lab('VERT SPEED', 0.34 * s, 0.025, 14);
      lab('CLOCK', 0.9 * s, -0.145, 12);
      lab('G', 0.76 * s, -0.145, 12);
    }
    lab('ENGINE', -0.11, 0.255, 16);
    lab('SYSTEMS', 0.11, 0.255, 16);
    lab('STBY ATT', 0.0, -0.145, 12);
    lab('LANDING GEAR', -0.2, -0.125, 13);
    lab('UP', -0.175, -0.205, 12);
    lab('DN', -0.175, -0.295, 12);
    lab('NOSE  LH  RH', -0.2, -0.145, 11);
    // targhetta limiti (come sugli aerei veri)
    g.fillStyle = '#1c1e1f';
    g.fillRect(U(0.12), V(-0.235), U(0.22) - U(0.12), V(-0.305) - V(-0.235));
    g.fillStyle = '#e8e8e0';
    g.font = 'bold 11px Arial';
    g.textAlign = 'left';
    ['VMO 200 KIAS', 'VFE 10° 165  15° 145  25° 125', 'SCOOP 60-95 KIAS', 'PROBES EXT MAX 105'].forEach((t, i) => g.fillText(t, U(0.125), V(-0.245) + i * 15));
    // fila di interruttori in basso
    const swl = ['NAV', 'STROBE', 'BCN', 'TAXI', 'LDG L', 'LDG R', 'WIPER', 'PITOT', 'PROBE HTR', 'FOAM'];
    swl.forEach((t, i) => lab(t, -0.9 + i * 0.065, -0.305, 10));
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
    pg.add(new THREE.Mesh(pgeo, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.75, envMapIntensity: 0.3 })));
    // spessore del pannello
    L.box(1.94, 0.64, 0.12, 0, -0.01, -0.065, this.M.panel);

    // strumenti analogici
    const atlas = new InstrumentAtlas();
    this.atlas = atlas;
    const faceMat = new THREE.MeshBasicMaterial({ map: atlas.texture });
    const overMat = new THREE.MeshBasicMaterial({ map: atlas.texture, transparent: true });
    this.gauges = {};
    const needle = (len, w = 0.006, mat = this.M.needle, tail = 0.15) => {
      const geo = new THREE.BoxGeometry(w, len * (1 + tail), 0.002);
      geo.translate(0, (len * (1 - tail)) / 2, 0);
      return new THREE.Mesh(geo, mat);
    };
    const gauge = (name, cell, u, v, r, needles = []) => {
      const grp = new THREE.Group();
      grp.position.set(u, v, 0.004);
      pg.add(grp);
      if (cell) grp.add(new THREE.Mesh(atlas.disc(cell, r), faceMat));
      const bez = new THREE.Mesh(atlas.disc('bezel', r * 1.16), overMat);
      bez.position.z = 0.006;
      grp.add(bez);
      // cassa dello strumento con flangia quadrata e viti
      const caseG = new THREE.CylinderGeometry(r * 1.16, r * 1.16, 0.03, 24);
      caseG.rotateX(Math.PI / 2);
      caseG.translate(u, v, -0.008);
      L.add(caseG, this.M.black);
      L.box(r * 2.5, r * 2.5, 0.006, u, v, 0.001, this.M.bezel);
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

    // schermi EFIS (uno stesso display alimenta entrambi i lati)
    this.adiDisplay = new Display(512, 424, drawEfisAdi);
    this.hsiDisplay = new Display(512, 452, drawEfisHsi);
    for (const [p, s] of [['c_', -1], ['f_', 1]]) {
      const [au, av, r] = mirror('asi', s);
      gauge(p + 'asi', 'asi', au, av, r, [[0.85, 0.008]]);
      const [lu, lv, lr] = mirror('alt', s);
      gauge(p + 'alt', 'alt', lu, lv, lr, [[0.86, 0.007], [0.55, 0.012], [0.92, 0.003, this.M.needleOrange]]);
      const [vu, vv, vr] = mirror('vsi', s);
      gauge(p + 'vsi', 'vsi', vu, vv, vr, [[0.85, 0.008]]);
      const [ru, rv, rr] = mirror('radalt', s);
      gauge(p + 'radalt', 'radalt', ru, rv, rr, [[0.85, 0.007]]);
      const [du, dv, dw, dh] = mirror('adi', s);
      this._screen(L, pg, this.adiDisplay, du, dv, dw, dh, { buttons: 0, side: false });
      const [hu, hv, hw, hh] = mirror('hsi', s);
      this._screen(L, pg, this.hsiDisplay, hu, hv, hw, hh, { buttons: 5 });
      gauge(p + 'clock', 'clock', 0.9 * s, -0.2, 0.032, [[0.6, 0.006], [0.85, 0.004], [0.9, 0.0025, this.M.needleOrange]]);
      gauge(p + 'g', 'g', 0.76 * s, -0.2, 0.034, [[0.85, 0.006]]);
      // pannellino comandi EFIS sotto l'HSI
      for (let i = 0; i < 3; i++) {
        const kn = new THREE.CylinderGeometry(0.011, 0.013, 0.016, 14);
        kn.rotateX(Math.PI / 2);
        kn.translate(0.55 * s - 0.05 + i * 0.05, -0.2, 0.008);
        L.add(kn, this.M.knobBlack);
      }
    }
    // orizzonte di emergenza (analogico)
    const sby = new THREE.Group();
    sby.position.set(0, -0.215, 0.004);
    pg.add(sby);
    const sm = adiMaterial();
    sby.add(new THREE.Mesh(new THREE.CircleGeometry(0.04, 40), sm));
    const sov = new THREE.Mesh(atlas.disc('adiOverlay', 0.04), overMat);
    sov.position.z = 0.003;
    sby.add(sov);
    const sbz = new THREE.Mesh(atlas.disc('bezel', 0.047), overMat);
    sbz.position.z = 0.006;
    sby.add(sbz);
    L.box(0.12, 0.12, 0.006, 0, -0.215, 0.001, this.M.bezel);
    this.gauges.sby = { mat: sm };

    // display motori e impianti
    this.engDisplay = new Display(512, 384, drawEngineDisplay);
    this.engLower = new Display(512, 284, drawEngineLower);
    this.sysDisplay = new Display(512, 384, drawSystemDisplay);
    this._screen(L, pg, this.engDisplay, ...ENG, { buttons: 4 });
    this._screen(L, pg, this.engLower, ...ENG2, { buttons: 0 });
    this._screen(L, pg, this.sysDisplay, ...SYS, { buttons: 4 });
    // pannello annunciatori
    this.annunciator = new Display(512, 256, drawAnnunciator);
    this._screen(L, pg, this.annunciator, ...ANN, { buttons: 0 });

    // leva del carrello + luci
    const gl = new THREE.Group();
    gl.position.set(-0.2, -0.25, 0.01);
    pg.add(gl);
    L.box(0.05, 0.11, 0.008, -0.2, -0.25, 0.004, this.M.bezel);
    const leverG = new THREE.BoxGeometry(0.012, 0.012, 0.09);
    leverG.translate(0, 0, 0.045);
    gl.add(new THREE.Mesh(leverG, this.M.chrome));
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.014, 16), this.M.white);
    knob.rotation.x = Math.PI / 2;
    knob.position.z = 0.09;
    gl.add(knob);
    this.gearLever = gl;
    this.gearLights = [];
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(new THREE.CircleGeometry(0.01, 14), new THREE.MeshBasicMaterial({ color: 0x0a200a, toneMapped: false }));
      m.position.set(-0.225 + i * 0.025, -0.165, 0.006);
      pg.add(m);
      this.gearLights.push(m);
    }
    // interruttori a levetta in basso
    for (let i = 0; i < 10; i++) {
      const sw = new THREE.CylinderGeometry(0.004, 0.006, 0.03, 8);
      sw.rotateX(Math.PI / 2 + 0.4);
      sw.translate(-0.9 + i * 0.065, -0.275, 0.02);
      L.add(sw, this.M.chrome);
      L.box(0.022, 0.03, 0.004, -0.9 + i * 0.065, -0.275, 0.002, this.M.bezel);
    }
    L.flush();
  }

  _glareshield() {
    const W = 1.8, H = 0.115;
    // cappottina superiore (scende leggermente verso il parabrezza)
    const hood = new THREE.BoxGeometry(W, 0.03, 0.38);
    hood.rotateX(-0.235);
    hood.translate(0, 2.55 - GEO.hCG, 1.43 - GEO.sCG);
    this._add(hood, this.M.hood);
    // sottosquadro che ripara gli strumenti
    this._box(W, 0.02, 0.09, P(1.565, 2.472, 0), this.M.hood);
    // bordo imbottito
    const pad = new THREE.CylinderGeometry(0.014, 0.014, W, 12);
    pad.rotateZ(Math.PI / 2);
    pad.translate(0, 2.585 - GEO.hCG, 1.618 - GEO.sCG);
    this._add(pad, this.M.hood);

    // pannello frontale: master warning/caution, fuoco motori, controllo e stato dell'acqua
    const fg = new THREE.Group();
    fg.position.copy(P(1.605, 2.53, 0));
    fg.rotation.x = -0.18;
    this.group.add(fg);
    const L = this._local(fg);
    const c = document.createElement('canvas');
    c.width = 2048;
    c.height = 132;
    const g = c.getContext('2d');
    g.fillStyle = '#6c706f';
    g.fillRect(0, 0, c.width, c.height);
    const U = (u) => ((u + W / 2) / W) * c.width;
    const V = (v) => ((H / 2 - v) / H) * c.height;
    g.strokeStyle = '#3e4241';
    g.lineWidth = 4;
    for (const [u0, u1] of [[-0.89, -0.47], [-0.45, 0.3], [0.32, 0.45], [0.47, 0.89]]) g.strokeRect(U(u0), V(0.052), U(u1) - U(u0), V(-0.052) - V(0.052));
    const lab = (t, u, v, size = 14) => {
      g.fillStyle = '#f2f2ee';
      g.font = `bold ${size}px Arial`;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(t, U(u), V(v));
    };
    for (const s of [-1, 1]) {
      lab('CRS', 0.84 * s, 0.04, 12);
      lab('HDG', 0.74 * s, 0.04, 12);
      lab('MASTER', 0.58 * s, 0.043, 11);
      lab(s < 0 ? 'ENG 1 FIRE' : 'ENG 2 FIRE', 0.385 * s, 0.043, 12);
      lab('PULL', 0.385 * s, -0.045, 10);
    }
    lab('WATER STATUS', -0.205, 0.045, 13);
    lab('WATER DROP CONTROL', 0.145, 0.045, 13);
    for (const [t, u] of [['MODE', 0.03], ['QTY', 0.09], ['ARM', 0.15], ['DROP', 0.21], ['FOAM', 0.27]]) lab(t, u, -0.045, 10);
    lab('MAX LAND WT 19890 KG', -0.205, -0.047, 10);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    fg.add(new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, envMapIntensity: 0.3 })));
    L.box(W, H, 0.05, 0, 0, -0.026, this.M.hood);

    // display di stato dell'acqua e di controllo sgancio
    this.waterStatus = new Display(512, 168, drawWaterStatus);
    this._screen(L, fg, this.waterStatus, -0.205, 0.0, 0.2, 0.066, { buttons: 0 });
    this.dropCtl = new Display(256, 96, drawDropControl);
    this._screen(L, fg, this.dropCtl, 0.15, 0.012, 0.13, 0.047, { buttons: 0 });
    for (let i = 0; i < 5; i++) {
      L.box(0.034, 0.018, 0.012, 0.03 + i * 0.06, -0.028, 0.006, i === 3 ? this.M.red : this.M.button);
    }
    // master warning / caution (pulsanti luminosi)
    this.masterLights = [];
    for (const side of [-1, 1]) {
      for (const [k, col] of [[0, 0x401010], [1, 0x403010]]) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.034, 0.014), new THREE.MeshBasicMaterial({ color: col, toneMapped: false }));
        m.position.set(side * (0.61 - k * 0.06), -0.008, 0.008);
        fg.add(m);
        this.masterLights.push({ m, kind: k });
      }
      // maniglie antincendio a T
      L.box(0.05, 0.05, 0.008, side * 0.385, 0, 0.004, this.M.bezel);
      L.box(0.016, 0.016, 0.03, side * 0.385, 0, 0.02, this.M.chrome);
      L.box(0.07, 0.022, 0.018, side * 0.385, 0, 0.04, this.M.knobRed);
      // manopole CRS / HDG
      for (const u of [0.84, 0.74]) {
        const kn = new THREE.CylinderGeometry(0.014, 0.016, 0.02, 16);
        kn.rotateX(Math.PI / 2);
        kn.translate(side * u, -0.012, 0.01);
        L.add(kn, this.M.knobBlack);
      }
    }
    L.flush();

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
    const s0 = 1.72, s1 = 2.95, W = 0.4;
    this._box(W, 0.5, s1 - s0, P((s0 + s1) / 2, FLOOR + 0.25, 0), this.M.panel);
    // radio e pannelli sul piano del piedistallo
    const c = document.createElement('canvas');
    c.width = 384;
    c.height = 1024;
    const g = c.getContext('2d');
    g.fillStyle = '#727675';
    g.fillRect(0, 0, c.width, c.height);
    const panelBox = (y, h, title, lines) => {
      g.fillStyle = '#1d2022';
      g.fillRect(14, y, 356, h);
      g.strokeStyle = '#4a4e4d';
      g.lineWidth = 3;
      g.strokeRect(14, y, 356, h);
      g.fillStyle = '#e4e4e0';
      g.font = 'bold 15px Arial';
      g.textAlign = 'left';
      g.fillText(title, 26, y + 24);
      lines.forEach((l, i) => {
        g.fillStyle = '#000';
        g.fillRect(24, y + 36 + i * 28, 200, 24);
        g.fillStyle = '#ff9a1a';
        g.font = 'bold 18px monospace';
        g.fillText(l, 30, y + 54 + i * 28);
      });
      g.fillStyle = '#3a3d3f';
      for (let k = 0; k < 3; k++) {
        g.beginPath();
        g.arc(270 + k * 34, y + h - 26, 13, 0, Math.PI * 2);
        g.fill();
      }
    };
    g.fillStyle = '#1d2022';
    g.fillRect(14, 10, 356, 300); // spazio del quadrante manette (coperto dalla geometria)
    panelBox(330, 100, 'COM 1        COM 2', ['122.80   123.45']);
    panelBox(440, 100, 'NAV 1        ADF', ['110.30   353']);
    panelBox(550, 90, 'ATC XPDR', ['7000   ALT']);
    panelBox(650, 140, 'TRIM     AIL    RUD', ['']);
    panelBox(800, 110, 'WATER SYSTEM', ['DROP MODE  PRESEL']);
    panelBox(920, 90, 'AUDIO', ['VHF1 VHF2 INT']);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const face = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.01, s1 - s0), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, envMapIntensity: 0.3 }));
    face.rotation.x = -Math.PI / 2;
    face.position.copy(P((s0 + s1) / 2, FLOOR + 0.502, 0));
    this.group.add(face);

    // quadrante delle manette (semicilindro con le scanalature)
    const qc = P(2.08, FLOOR + 0.5, 0);
    const quad = new THREE.CylinderGeometry(0.115, 0.115, 0.22, 28);
    quad.rotateZ(Math.PI / 2);
    quad.translate(qc.x, qc.y, qc.z);
    this._add(quad, this.M.panel);
    for (const y of [-0.045, 0.045]) {
      const slot = new THREE.TorusGeometry(0.116, 0.006, 4, 20, Math.PI);
      slot.rotateY(Math.PI / 2);
      slot.translate(qc.x + y, qc.y, qc.z);
      this._add(slot, this.M.black);
    }
    // manette di potenza: impugnatura nera zigrinata
    this.powerLevers = [];
    this.condLevers = [];
    for (const [i, y] of [[0, -0.045], [1, 0.045]]) {
      const lv = new THREE.Group();
      lv.position.copy(P(2.08, FLOOR + 0.5, y));
      this.group.add(lv);
      const arm = new THREE.BoxGeometry(0.012, 0.23, 0.02);
      arm.translate(0, 0.115, 0);
      lv.add(new THREE.Mesh(arm, this.M.chrome));
      const knob = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.045, 0.042), this.M.knobBlack);
      knob.position.y = 0.245;
      lv.add(knob);
      for (let k = 0; k < 4; k++) {
        const rib = new THREE.Mesh(new THREE.BoxGeometry(0.078, 0.005, 0.046), this.M.grip);
        rib.position.y = 0.228 + k * 0.011;
        lv.add(rib);
      }
      // leva del reverse davanti all'impugnatura
      const rv = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.012, 0.03), this.M.chrome);
      rv.position.set(0, 0.22, -0.03);
      lv.add(rv);
      this.powerLevers.push(lv);
      // leve di condizione: impugnatura cilindrica bianca con anelli neri
      const cl = new THREE.Group();
      cl.position.copy(P(2.24, FLOOR + 0.5, y * 3.0));
      this.group.add(cl);
      const carm = new THREE.BoxGeometry(0.01, 0.15, 0.014);
      carm.translate(0, 0.075, 0);
      cl.add(new THREE.Mesh(carm, this.M.chrome));
      const ck = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.055, 14), this.M.white);
      ck.rotation.z = Math.PI / 2;
      ck.position.y = 0.158;
      cl.add(ck);
      for (const dx of [-0.018, 0.018]) {
        const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.0175, 0.0175, 0.006, 14), this.M.knobBlack);
        ring.rotation.z = Math.PI / 2;
        ring.position.set(dx, 0.158, 0);
        cl.add(ring);
      }
      cl.rotation.x = -0.4;
      this.condLevers.push(cl);
      // guide delle leve sul piano
      this._box(0.012, 0.004, 0.16, P(2.24, FLOOR + 0.503, y * 3.0), this.M.black);
    }
    // blocco comandi (SURFACE LOCK) giallo e nero
    const gl = new THREE.Group();
    gl.position.copy(P(2.36, FLOOR + 0.5, 0));
    gl.rotation.x = -1.25;
    this.group.add(gl);
    const garm = new THREE.BoxGeometry(0.014, 0.14, 0.014);
    garm.translate(0, 0.07, 0);
    gl.add(new THREE.Mesh(garm, this.M.yellowBlack));
    for (let k = 0; k < 3; k++) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.012, 0.016), this.M.knobBlack);
      band.position.y = 0.03 + k * 0.035;
      gl.add(band);
    }
    const gk = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.025, 0.03), this.M.yellowBlack);
    gk.position.y = 0.145;
    gl.add(gk);
    // freno di emergenza / parcheggio (maniglia rossa)
    this._box(0.012, 0.03, 0.012, P(2.62, FLOOR + 0.515, -0.12), this.M.chrome);
    this._box(0.07, 0.018, 0.022, P(2.62, FLOOR + 0.535, -0.12), this.M.red);
    // leva dei flap (pomello a forma di flap)
    const fl = new THREE.Group();
    fl.position.copy(P(2.5, FLOOR + 0.5, 0.12));
    this.group.add(fl);
    const farm = new THREE.BoxGeometry(0.012, 0.14, 0.012);
    farm.translate(0, 0.07, 0);
    fl.add(new THREE.Mesh(farm, this.M.chrome));
    const fk = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.02, 0.045), this.M.white);
    fk.position.y = 0.145;
    fl.add(fk);
    this.flapLever = fl;
    this._box(0.012, 0.004, 0.18, P(2.5, FLOOR + 0.503, 0.12), this.M.black);
    // grande ruota del trim di profondità (lato sinistro)
    const tw = new THREE.Group();
    tw.position.copy(P(2.45, FLOOR + 0.36, -W / 2 - 0.02));
    this.group.add(tw);
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.155, 0.155, 0.035, 40), this.M.column);
    wheel.rotation.z = Math.PI / 2;
    tw.add(wheel);
    for (let k = 0; k < 24; k++) {
      const nub = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.014, 0.014), this.M.grip);
      const a = (k / 24) * Math.PI * 2;
      nub.position.set(0, Math.cos(a) * 0.155, Math.sin(a) * 0.155);
      nub.rotation.x = -a;
      tw.add(nub);
    }
    const mark = new THREE.Mesh(new THREE.BoxGeometry(0.037, 0.02, 0.06), this.M.white);
    mark.position.set(0, 0.11, 0);
    tw.add(mark);
    this.trimWheel = tw;
    // selettore modalità di sgancio
    const sel = new THREE.Group();
    sel.position.copy(P(2.8, FLOOR + 0.52, -0.08));
    this.group.add(sel);
    sel.add(new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.026, 0.03, 16), this.M.knobBlack));
    const ptr = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.031, 0.02), this.M.white);
    ptr.position.set(0, 0.001, -0.012);
    sel.add(ptr);
    this.dropSelector = sel;
    // interruttore armamento sgancio (con coperchio rosso)
    this._box(0.04, 0.012, 0.06, P(2.8, FLOOR + 0.51, 0.08), this.M.red);
  }

  _overhead() {
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 1024;
    const g = c.getContext('2d');
    g.fillStyle = '#767a79';
    g.fillRect(0, 0, 1024, 1024);
    const sections = [
      ['ELECTRICAL', 40, 40], ['FUEL', 540, 40], ['ENGINE START', 40, 300], ['ANTI-ICE', 540, 300],
      ['LIGHTS', 40, 560], ['HYDRAULIC', 540, 560], ['FIRE', 40, 800], ['WATER SYSTEM', 540, 800],
    ];
    for (const [t, x, y] of sections) {
      g.strokeStyle = '#d0d0d0';
      g.lineWidth = 3;
      g.strokeRect(x, y, 440, 220);
      g.fillStyle = '#767a79';
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
    // logo sul mozzo del volantino
    const lc = document.createElement('canvas');
    lc.width = 256;
    lc.height = 128;
    const lg = lc.getContext('2d');
    lg.fillStyle = '#2e3134';
    lg.fillRect(0, 0, 256, 128);
    lg.fillStyle = '#1f5fbf';
    lg.beginPath();
    lg.ellipse(128, 64, 118, 52, 0, 0, Math.PI * 2);
    lg.fill();
    lg.fillStyle = '#ffffff';
    lg.font = 'bold 34px Arial';
    lg.textAlign = 'center';
    lg.textBaseline = 'middle';
    lg.fillText('CANADAIR', 128, 50);
    lg.font = 'bold 24px Arial';
    lg.fillText('CL-415', 128, 84);
    const ltex = new THREE.CanvasTexture(lc);
    ltex.colorSpace = THREE.SRGBColorSpace;
    const logoMat = new THREE.MeshStandardMaterial({ map: ltex, roughness: 0.4 });
    // volantino a corna di montone: traversa che sale nelle due impugnature
    const horn = new THREE.CatmullRomCurve3(
      [[-0.165, 0.135], [-0.178, 0.07], [-0.16, 0.005], [-0.1, -0.03], [0, -0.036], [0.1, -0.03], [0.16, 0.005], [0.178, 0.07], [0.165, 0.135]].map(([x, y]) => new THREE.Vector3(x, y, 0)),
    );
    const hornGeo = new THREE.TubeGeometry(horn, 48, 0.016, 10, false);
    for (const side of [-1, 1]) {
      const col = new THREE.Group();
      col.position.copy(P(1.86, FLOOR + 0.02, side * 0.52));
      this.group.add(col);
      // colonna grigia con soffietto alla base
      const cg = new THREE.CylinderGeometry(0.03, 0.038, 0.72, 14);
      cg.translate(0, 0.36, 0);
      const cm = new THREE.Mesh(cg, this.M.column);
      cm.rotation.x = 0.15;
      col.add(cm);
      const boot = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.085, 0.16, 14), this.M.black);
      boot.position.y = 0.08;
      col.add(boot);
      const flange = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 0.22), this.M.wallDark);
      flange.position.y = -0.01;
      col.add(flange);
      // volantino
      const wheel = new THREE.Group();
      wheel.position.set(0, 0.71, 0.108);
      col.add(wheel);
      wheel.add(new THREE.Mesh(hornGeo, this.M.yoke));
      const hub = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.085, 0.06), this.M.yoke);
      hub.position.y = -0.02;
      wheel.add(hub);
      const logo = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.05), logoMat);
      logo.position.set(0, -0.02, 0.031);
      wheel.add(logo);
      for (const s of [-1, 1]) {
        // impugnature rivestite
        const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.021, 0.023, 0.1, 12), this.M.grip);
        grip.position.set(s * 0.174, 0.075, 0);
        grip.rotation.z = s * 0.08;
        wheel.add(grip);
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.019, 12, 8), this.M.yoke);
        cap.position.set(s * 0.166, 0.138, 0);
        wheel.add(cap);
      }
      // pulsante DROP rosso (impugnatura esterna) e comando sonde giallo
      const ext = side;
      const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.012, 12), this.M.knobRed);
      btn.position.set(ext * 0.166, 0.157, 0);
      wheel.add(btn);
      const tr = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.012, 0.014), this.M.yellowBlack);
      tr.position.set(-ext * 0.17, 0.11, 0.022);
      wheel.add(tr);
      const ptt = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.02, 0.012), this.M.knobBlack);
      ptt.position.set(ext * 0.176, 0.06, -0.022);
      wheel.add(ptt);
      // clip della checklist
      const card = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.05), this.M.white);
      card.position.set(0, 0.035, 0.002);
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
      nd(G[p + 'alt'], 0, ((altFt % 1000) / 1000) * 360);
      nd(G[p + 'alt'], 1, ((altFt % 10000) / 10000) * 360);
      nd(G[p + 'alt'], 2, ((altFt % 100000) / 100000) * 360);
      nd(G[p + 'vsi'], 0, MAP.vsi(vsFpm));
      nd(G[p + 'radalt'], 0, MAP.radalt(Math.max(0, o.radAlt / FT)));
      nd(G[p + 'g'], 0, MAP.g(o.nz));
    }
    G.sby.mat.uniforms.pitch.value = o.pitch;
    G.sby.mat.uniforms.roll.value = -o.roll;
    const d = new Date();
    for (const p of ['c_', 'f_']) {
      nd(G[p + 'clock'], 0, ((d.getHours() % 12) + d.getMinutes() / 60) * 30);
      nd(G[p + 'clock'], 1, d.getMinutes() * 6);
      nd(G[p + 'clock'], 2, d.getSeconds() * 6);
    }

    // schermi EFIS: aggiornati a ~25 Hz, solo se cambiano
    this._efisT = (this._efisT || 0) + dt;
    if (this._efisT > 0.04) {
      this._efisT = 0;
      const hdg = (((o.heading / DEG) % 360) + 360) % 360;
      if (this.hdgBug === undefined) this.hdgBug = Math.round(hdg / 10) * 10 % 360;
      this.adiDisplay.update({
        pitch: Math.round((o.pitch / DEG) * 5) / 5,
        roll: Math.round((o.roll / DEG) * 2) / 2,
        slip: Math.round(clamp(-o.ny * 3.2, -1, 1) * 20) / 20,
        ra: Math.round(Math.max(0, o.radAlt / FT) / 5) * 5,
        ias: Math.round(iasKt),
        dh: o.radAlt / FT < 100 && !sys.gearDown && vsFpm < -100,
      });
      this.hsiDisplay.update({ hdg: Math.round(hdg * 2) / 2, bug: this.hdgBug, crs: this.hdgBug, dev: 0, gs: Math.round(o.gs / KT) });
    }

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
      const doors = sys.doorOpen.map((x) => x > 0.1);
      this.waterStatus.update({
        total: Math.round(sys.waterLiters() / 5) * 5,
        tanks: sys.tanks.map((t) => Math.round((t / cap) * 40) / 40),
        doors,
        foam: sys.foamArmed,
        foamPct: Math.round(foamMix * 100),
        scoop: o.scoopRate > 20,
      });
      this.dropCtl.update({ mode: DROP_MODES[sys.dropMode].id, preset: Math.round(sys.scoopPreset * 100), doors, armed: sys.waterLiters() > 10 });
      const E = sys.engines;
      const q = (v, k) => Math.round(v / k) * k;
      this.engDisplay.update({
        trq: E.map((e) => q(e.torque, 1)), itt: E.map((e) => q(e.itt, 5)), np: E.map((e) => q((e.np / 100) * SPEC.propRPM, 5)),
        rev: E.some((e) => e.reverse > 0.1),
      });
      this.engLower.update({ nh: E.map((e) => q(e.nh, 0.1)), ff: E.map((e) => q(e.ff, 5)), oilP: E.map((e) => q(e.oilP, 1)), oilT: E.map((e) => q(e.oilT, 1)) });
      const hp = E[0].running || E[1].running ? 3000 : 0;
      this.sysDisplay.update({
        fuel: [q(sys.fuel / 2, 5), q(sys.fuel / 2 - 15, 5)], hyd: hp, trim: Math.round(clamp(sys.elevTrim, -1, 1) * 50) / 50,
        flap: Math.round(sys.flapPos * 2) / 2, flapMoving: Math.abs(sys.flapPos - SPEC.flapDetents[sys.flapIndex]) > 0.3,
      });
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
