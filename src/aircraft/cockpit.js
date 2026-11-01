// Cabina di pilotaggio del CL-415: guscio interno con finestrini, pannello strumenti completo
// (strumenti di volo, motori, quantità d'acqua, annunciatori), glareshield con pannello di sgancio,
// piedistallo con manette, leva flap e trim, overhead, cloche "a corna", pedaliera, sedili, dettagli.

import * as THREE from 'three';
import { GEO, roofTop, halfBeam } from './specs.js';
import { clamp, DEG, lerp } from '../core/math.js';
import { buildHull, sectionT, tOfY, tOfHeight, pointAtT } from './hullgeo.js';
import { mergeGeos, strut } from './geom.js';
import { InstrumentAtlas, MAP, adiMaterial, Display, drawAnnunciator } from './instruments.js';
import { drawEfisAdi, drawEfisHsi, drawEngineDisplay, drawSystemDisplay, drawWaterStatus, drawDropControl, drawGps, drawRadar, drawClockLed, drawAoa, drawCdu, drawWaterMfd } from './efis.js';
import { WORLD } from '../world/terrain.js';
import { GARDA, gardaHeight, farHeight } from '../world/garda.js';
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
    this._avatar();
    this.group.traverse((o) => {
      if (o.isMesh) {
        o.receiveShadow = true;
        o.castShadow = false;
      }
    });
    this.seat = -1; // -1 = sedile di sinistra (pilota), +1 = destra (copilota)
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
      panel: std(0x7b7f83, 0.72),
      hood: std(0x5f6365, 0.95),
      black: std(0x111213, 0.6),
      bezel: std(0x161718, 0.45),
      button: std(0x2c2f31, 0.5),
      floor: std(0x34383c, 0.95),
      seat: std(0x4a4d51, 0.9),
      seatCushion: std(0x8a8d91, 0.97),
      quadrant: std(0x3d4043, 0.55, 0.15),
      whiteKnob: std(0xeeeeea, 0.4),
      knobBlue: std(0x2a6fd0, 0.4),
      speaker: std(0x2a2c2e, 0.8),
      gaugeGlass: new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.12, envMapIntensity: 1.2 }),
      metal: std(0x9aa1a6, 0.35, 0.8),
      chrome: std(0xd6dade, 0.15, 1.0),
      frame: std(0x5a5e60, 0.65, 0.1),
      column: std(0x74787a, 0.45, 0.3),
      yoke: std(0x161718, 0.42, 0.1),
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
    if (rot) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(rot));
    g.translate(pos.x, pos.y, pos.z);
    this._add(g, mat);
  }
  _cyl(r0, r1, len, pos, mat, rot = null, seg = 12) {
    const g = new THREE.CylinderGeometry(r1, r0, len, seg);
    if (rot) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(rot));
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
  // texture disegnata su canvas (pannelli, targhette)
  _canvasTex(w, h, draw, aniso = 8) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const g = c.getContext('2d');
    draw(g, w, h);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = aniso;
    return tex;
  }

  // vernice grigia dei pannelli con grana, riquadri avvitati, etichette
  static paintBase(g, w, h, color = '#7b7f83') {
    g.fillStyle = color;
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < (w * h) / 140; i++) {
      g.fillStyle = Math.random() < 0.5 ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.035)';
      g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
  }
  static subPanel(g, x0, y0, x1, y1, { screws = true, fill = null } = {}) {
    if (fill) {
      g.fillStyle = fill;
      g.fillRect(x0, y0, x1 - x0, y1 - y0);
    }
    g.strokeStyle = '#4a4e52';
    g.lineWidth = 4;
    g.strokeRect(x0, y0, x1 - x0, y1 - y0);
    g.strokeStyle = 'rgba(255,255,255,0.16)';
    g.lineWidth = 2;
    g.strokeRect(x0 + 3, y0 + 3, x1 - x0 - 6, y1 - y0 - 6);
    if (!screws) return;
    for (const [x, y] of [[x0 + 11, y0 + 11], [x1 - 11, y0 + 11], [x0 + 11, y1 - 11], [x1 - 11, y1 - 11]]) {
      g.fillStyle = '#5c6064';
      g.beginPath();
      g.arc(x, y, 5.5, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = '#2c2f31';
      g.lineWidth = 1.6;
      g.beginPath();
      g.moveTo(x - 3.5, y);
      g.lineTo(x + 3.5, y);
      g.stroke();
    }
  }
  static label(g, t, x, y, size = 16, col = '#f2f2ee', align = 'center') {
    g.fillStyle = col;
    g.font = `bold ${size}px Arial`;
    g.textAlign = align;
    g.textBaseline = 'middle';
    g.fillText(t, x, y);
  }

  // ---------------------------------------------------------------------------
  // Pannello principale: disposizione del CL-415 (poster Aviation Training Graphics)
  //  esterno: orologio a LED + altoparlante | ASI EADI ALT / checklist EHSI VSI (comandante)
  //  centro: motori · GPS · impianti / standby · acqua · carrello / surface lock
  //  copilota: ASI EADI ALT / radar meteo EHSI VSI | orologio + altoparlante
  _panel() {
    const tilt = 14 * DEG;
    const pg = new THREE.Group();
    pg.position.copy(P(1.62, 2.16, 0));
    pg.rotation.x = -tilt;
    this.group.add(pg);
    this.panelGroup = pg;
    const L = this._local(pg);
    const C = Cockpit;

    // --- canvas del pannello ---
    const W = 2048, H = 640;
    const U = (u) => ((u + 1.0) / 2.0) * W;
    const V = (v) => ((0.31 - v) / 0.64) * H;
    const tex = this._canvasTex(W, H, (g) => {
      C.paintBase(g, W, H);
      // sottopannelli
      C.subPanel(g, U(-0.968), V(0.3), U(-0.852), V(-0.235));
      C.subPanel(g, U(-0.846), V(0.3), U(-0.392), V(-0.235));
      C.subPanel(g, U(-0.386), V(0.305), U(0.396), V(-0.235));
      C.subPanel(g, U(0.402), V(0.3), U(0.856), V(-0.235));
      C.subPanel(g, U(0.862), V(0.3), U(0.968), V(-0.235));
      // fascia inferiore (comandi sotto il pannello)
      g.fillStyle = '#62666a';
      g.fillRect(0, V(-0.24), W, V(-0.33) - V(-0.24));
      g.fillStyle = 'rgba(0,0,0,0.25)';
      g.fillRect(0, V(-0.24), W, 4);
      for (const s of [-1, 1]) {
        C.label(g, 'PRESS TO', U(0.91 * s), V(0.235), 11);
        C.label(g, 'RESET', U(0.91 * s), V(0.215), 11);
        C.label(g, 'CLOCK', U(0.91 * s), V(0.035), 11);
        // targhetta della macchina sopra l'altimetro
        const px = U((s < 0 ? -0.465 : 0.779)), py = V(0.235);
        g.fillStyle = '#f4f3ee';
        g.fillRect(px - 52, py - 22, 104, 44);
        g.strokeStyle = '#222';
        g.lineWidth = 2;
        g.strokeRect(px - 52, py - 22, 104, 44);
        C.label(g, 'A/C 2017  I-DPCN', px, py - 9, 11, '#111');
        C.label(g, 'CANADAIR  27', px, py + 10, 11, '#111');
      }
      for (const [u, t] of [[-0.775, 'AIRSPEED'], [0.479, 'AIRSPEED']]) C.label(g, t, U(u), V(0.215), 12);
      for (const u of [-0.465, 0.779]) C.label(g, 'VERTICAL SPEED', U(u), V(-0.165), 11);
      C.label(g, 'WEATHER RADAR', U(0.479), V(-0.165), 11);
      C.label(g, 'NAVIGATION PRESSURISED', U(-0.01), V(0.108), 10);
      C.label(g, 'ENGINE', U(-0.232), V(0.262), 12);
      C.label(g, 'FUEL · HYDRAULICS · FLAPS', U(0.238), V(0.262), 12);
      C.label(g, 'STBY ASI', U(-0.33), V(-0.1), 10);
      C.label(g, 'FLAPS', U(-0.255), V(-0.1), 10);
      C.label(g, 'STBY ATT', U(-0.165), V(-0.105), 10);
      C.label(g, 'LANDING GEAR', U(0.165), V(0.028), 11);
      C.label(g, 'UP', U(0.2), V(-0.07), 10);
      C.label(g, 'DN', U(0.2), V(-0.115), 10);
      C.label(g, 'CAUTION / WARNING', U(0.278), V(0.012), 10);
      // checklist del comandante (targhetta bianca con tabella)
      {
        const x0 = U(-0.832), x1 = U(-0.718), y0 = V(-0.02), y1 = V(-0.15);
        g.fillStyle = '#f2f1ea';
        g.fillRect(x0, y0, x1 - x0, y1 - y0);
        g.strokeStyle = '#333';
        g.lineWidth = 1.5;
        g.strokeRect(x0, y0, x1 - x0, y1 - y0);
        C.label(g, 'CHECKLIST PESCAGGIO', (x0 + x1) / 2, y0 + 10, 9, '#111');
        const rows = [['FLAP', '15°'], ['CARRELLO', 'SU'], ['SONDE', 'ARM'], ['QUANTITÀ', 'PRESEL'], ['VEL. AMMARAGGIO', '75-90'], ['POTENZA', 'MAX'], ['SONDE', 'SU'], ['SALITA', '95 KT']];
        rows.forEach(([a, b], i) => {
          const y = y0 + 24 + i * 11.2;
          g.strokeStyle = 'rgba(0,0,0,0.25)';
          g.beginPath();
          g.moveTo(x0 + 3, y + 5.6);
          g.lineTo(x1 - 3, y + 5.6);
          g.stroke();
          C.label(g, a, x0 + 5, y, 8, '#111', 'left');
          C.label(g, b, x1 - 5, y, 8, '#111', 'right');
        });
      }
      // pannello "surface lock": ELEVATOR / RUDDER / AILERON
      {
        const x0 = U(-0.3), x1 = U(-0.08), y0 = V(-0.115), y1 = V(-0.165);
        g.fillStyle = '#2b2e31';
        g.fillRect(x0, y0, x1 - x0, y1 - y0);
        C.label(g, 'SHUT LOCK', (x0 + x1) / 2, y0 - 8, 9);
        ['ELEVATOR', 'RUDDER', 'AILERON'].forEach((t, i) => {
          const x = x0 + 12 + i * ((x1 - x0 - 24) / 3);
          g.fillStyle = '#5a4210';
          g.fillRect(x, y0 + 5, (x1 - x0 - 36) / 3, y1 - y0 - 10);
          C.label(g, t, x + (x1 - x0 - 36) / 6, (y0 + y1) / 2, 8, '#d8b060');
        });
      }
      // pannello a strisce gialle e nere (estensione d'emergenza del carrello)
      {
        const x0 = U(0.322), x1 = U(0.372), y0 = V(0.0), y1 = V(-0.13);
        g.save();
        g.beginPath();
        g.rect(x0, y0, x1 - x0, y1 - y0);
        g.clip();
        g.fillStyle = '#e8c21a';
        g.fillRect(x0, y0, x1 - x0, y1 - y0);
        g.strokeStyle = '#111';
        g.lineWidth = 7;
        for (let k = -20; k < 30; k++) {
          g.beginPath();
          g.moveTo(x0 + k * 16, y0);
          g.lineTo(x0 + k * 16 + 60, y1);
          g.stroke();
        }
        g.restore();
        g.fillStyle = '#2b2e31';
        g.fillRect(x0 + 8, y0 + 18, x1 - x0 - 16, y1 - y0 - 36);
        C.label(g, 'GEAR', (x0 + x1) / 2, (y0 + y1) / 2 - 7, 8);
        C.label(g, 'EMER', (x0 + x1) / 2, (y0 + y1) / 2 + 7, 8);
      }
      // sotto il pannello
      C.label(g, 'EMER BRAKE', U(-0.285), V(-0.255), 10);
      for (const [u, t] of [[-0.85, 'DIM'], [-0.55, 'FLOOD'], [0.25, 'PANEL'], [0.55, 'FLOOD'], [0.85, 'DIM']]) C.label(g, t, U(u), V(-0.255), 9);
    });
    const shape = new THREE.Shape();
    shape.moveTo(-0.97, -0.33);
    shape.lineTo(0.97, -0.33);
    shape.lineTo(0.97, 0.2);
    shape.lineTo(0.9, 0.3);
    shape.lineTo(0.4, 0.3);
    shape.lineTo(0.39, 0.31);
    shape.lineTo(-0.39, 0.31);
    shape.lineTo(-0.4, 0.3);
    shape.lineTo(-0.9, 0.3);
    shape.lineTo(-0.97, 0.2);
    shape.closePath();
    const pgeo = new THREE.ShapeGeometry(shape, 4);
    const uv = pgeo.attributes.uv, pos = pgeo.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + 1) / 2, (pos.getY(i) + 0.33) / 0.64);
    pg.add(new THREE.Mesh(pgeo, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.72, envMapIntensity: 0.3 })));
    L.box(1.94, 0.64, 0.12, 0, -0.01, -0.065, this.M.panel);
    // bordo inferiore sporgente (mensola dei comandi)
    L.box(1.94, 0.03, 0.06, 0, -0.335, 0.02, this.M.panel);

    // --- strumenti analogici ---
    const atlas = new InstrumentAtlas();
    this.atlas = atlas;
    const faceMat = new THREE.MeshBasicMaterial({ map: atlas.texture });
    const overMat = new THREE.MeshBasicMaterial({ map: atlas.texture, transparent: true });
    this.faceMat = faceMat;
    this.overMat = overMat;
    this.gauges = {};
    const needle = (len, w = 0.006, mat = this.M.needle, tail = 0.15) => {
      const geo = new THREE.BoxGeometry(w, len * (1 + tail), 0.002);
      geo.translate(0, (len * (1 - tail)) / 2, 0);
      return new THREE.Mesh(geo, mat);
    };
    const gauge = (parent, Lc, name, cell, u, v, r, needles = []) => {
      const grp = new THREE.Group();
      grp.position.set(u, v, 0.004);
      parent.add(grp);
      if (cell) grp.add(new THREE.Mesh(atlas.disc(cell, r), faceMat));
      const bez = new THREE.Mesh(atlas.disc('bezel', r * 1.16), overMat);
      bez.position.z = 0.006;
      grp.add(bez);
      const caseG = new THREE.CylinderGeometry(r * 1.16, r * 1.16, 0.03, 24);
      caseG.rotateX(Math.PI / 2);
      caseG.translate(u, v, -0.008);
      Lc.add(caseG, this.M.black);
      Lc.box(r * 2.5, r * 2.5, 0.006, u, v, 0.001, this.M.bezel);
      // vetro dello strumento (riflesso leggero)
      const glass = new THREE.Mesh(new THREE.CircleGeometry(r * 1.05, 24), this.M.gaugeGlass);
      glass.position.z = 0.012;
      grp.add(glass);
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
    this._gauge = gauge;

    // schermi (lo stesso display alimenta entrambi i lati)
    this.adiDisplay = new Display(512, 492, drawEfisAdi);
    this.hsiDisplay = new Display(512, 512, drawEfisHsi);
    this.clockDisplay = new Display(160, 168, drawClockLed);
    for (const [p, s] of [['c_', -1], ['f_', 1]]) {
      const x0 = s < 0 ? -0.775 : 0.479; // colonna sinistra del gruppo
      gauge(pg, L, p + 'asi', 'asi', x0, 0.13, 0.056, [[0.85, 0.008]]);
      this._screen(L, pg, this.adiDisplay, x0 + 0.153, 0.132, 0.138, 0.133, { buttons: 0 });
      gauge(pg, L, p + 'alt', 'alt', x0 + 0.31, 0.13, 0.056, [[0.86, 0.007], [0.55, 0.012], [0.92, 0.003, this.M.needleOrange]]);
      this._screen(L, pg, this.hsiDisplay, x0 + 0.153, -0.086, 0.138, 0.138, { buttons: 4 });
      gauge(pg, L, p + 'vsi', 'vsi', x0 + 0.31, -0.086, 0.054, [[0.85, 0.008]]);
      // orologio a LED e altoparlante sul pannellino esterno
      const ox = 0.91 * s;
      this._screen(L, pg, this.clockDisplay, ox, 0.12, 0.07, 0.074, { buttons: 0 });
      const btn = new THREE.CylinderGeometry(0.009, 0.009, 0.012, 12);
      btn.rotateX(Math.PI / 2);
      btn.translate(ox, 0.2, 0.008);
      L.add(btn, this.M.knobBlack);
      this._speaker(L, pg, ox, -0.05, 0.045);
    }
    // radar meteo (copilota, in basso a sinistra)
    this.radarDisplay = new Display(320, 320, drawRadar);
    this._screen(L, pg, this.radarDisplay, 0.479, -0.08, 0.112, 0.112, { buttons: 0 });
    for (let i = 0; i < 3; i++) {
      const k = new THREE.CylinderGeometry(0.009, 0.011, 0.014, 12);
      k.rotateX(Math.PI / 2);
      k.translate(0.445 + i * 0.034, -0.158, 0.008);
      L.add(k, this.M.knobBlack);
    }

    // centro: motori, GPS, impianti
    this.engDisplay = new Display(512, 400, drawEngineDisplay);
    this.sysDisplay = new Display(512, 384, drawSystemDisplay);
    this.gpsDisplay = new Display(384, 170, drawGps);
    this._screen(L, pg, this.engDisplay, -0.232, 0.16, 0.2, 0.156, { buttons: 4 });
    this._screen(L, pg, this.gpsDisplay, -0.01, 0.172, 0.18, 0.08, { buttons: 5 });
    this._screen(L, pg, this.sysDisplay, 0.238, 0.16, 0.2, 0.15, { buttons: 4 });
    // standby: anemometro, flap, orizzonte
    gauge(pg, L, 'sbyAsi', 'asi', -0.33, -0.05, 0.03, [[0.85, 0.005]]);
    gauge(pg, L, 'flaps', 'flaps', -0.255, -0.05, 0.034, [[0.85, 0.007]]);
    const sby = new THREE.Group();
    sby.position.set(-0.165, -0.05, 0.004);
    pg.add(sby);
    const sm = adiMaterial();
    sby.add(new THREE.Mesh(new THREE.CircleGeometry(0.036, 40), sm));
    const sov = new THREE.Mesh(atlas.disc('adiOverlay', 0.036), overMat);
    sov.position.z = 0.003;
    sby.add(sov);
    const sbz = new THREE.Mesh(atlas.disc('bezel', 0.042), overMat);
    sbz.position.z = 0.006;
    sby.add(sbz);
    L.box(0.1, 0.1, 0.006, -0.165, -0.05, 0.001, this.M.bezel);
    this.gauges.sby = { mat: sm };
    // display dell'acqua al centro
    this.waterMfd = new Display(512, 470, drawWaterMfd);
    this._screen(L, pg, this.waterMfd, 0.0, -0.01, 0.185, 0.17, { buttons: 5, side: true });
    // annunciatori
    this.annunciator = new Display(512, 384, drawAnnunciator);
    this._screen(L, pg, this.annunciator, 0.272, -0.06, 0.088, 0.1, { buttons: 0 });

    // leva del carrello + tre luci verdi
    const gl = new THREE.Group();
    gl.position.set(0.165, -0.092, 0.01);
    pg.add(gl);
    L.box(0.045, 0.09, 0.008, 0.165, -0.092, 0.004, this.M.bezel);
    const leverG = new THREE.BoxGeometry(0.012, 0.012, 0.085);
    leverG.translate(0, 0, 0.042);
    gl.add(new THREE.Mesh(leverG, this.M.chrome));
    // pomello a forma di ruota (bianco con bordo giallo)
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.016, 18), this.M.white);
    knob.rotation.z = Math.PI / 2;
    knob.position.z = 0.088;
    gl.add(knob);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.003, 6, 18), this.M.yellowBlack);
    rim.rotation.y = Math.PI / 2;
    rim.position.z = 0.088;
    gl.add(rim);
    this.gearLever = gl;
    this.gearLights = [];
    for (const [du, dv] of [[0, 0.012], [-0.022, -0.012], [0.022, -0.012]]) {
      const m = new THREE.Mesh(new THREE.CircleGeometry(0.009, 14), new THREE.MeshBasicMaterial({ color: 0x0a200a, toneMapped: false }));
      m.position.set(0.165 + du, -0.008 + dv, 0.006);
      pg.add(m);
      this.gearLights.push(m);
    }
    // surface lock: tre spie ambra (spente: comandi liberi)
    // fascia inferiore: manopole delle luci, freno d'emergenza rosso
    for (const u of [-0.85, -0.55, 0.25, 0.55, 0.85]) {
      const k = new THREE.CylinderGeometry(0.013, 0.015, 0.018, 14);
      k.rotateX(Math.PI / 2);
      k.translate(u, -0.29, 0.01);
      L.add(k, this.M.knobBlack);
    }
    L.box(0.012, 0.012, 0.05, -0.285, -0.29, 0.025, this.M.chrome);
    L.box(0.07, 0.026, 0.026, -0.285, -0.29, 0.052, this.M.red);
    L.flush();
  }

  // griglia dell'altoparlante
  _speaker(L, parent, u, v, r) {
    const ring = new THREE.CylinderGeometry(r, r, 0.01, 28);
    ring.rotateX(Math.PI / 2);
    ring.translate(u, v, 0.004);
    L.add(ring, this.M.speaker);
    for (let k = -3; k <= 3; k++) {
      const len = Math.sqrt(Math.max(0, 1 - (k / 3.6) ** 2)) * r * 1.7;
      L.box(len, 0.003, 0.003, u, v + k * r * 0.24, 0.01, this.M.black);
    }
  }

  // ---------------------------------------------------------------------------
  // Glareshield: rotta/prua, master warning/caution, accelerometro, AOA, targhette,
  // al centro (rialzato) PROPELLER CONTROL e WATER DROP CONTROL con le barre dei serbatoi
  _glareshield() {
    const W = 1.8, HB = -0.0575, HE = 0.045, HC = 0.098;
    const C = Cockpit;
    const fg = new THREE.Group();
    fg.position.copy(P(1.605, 2.53, 0));
    fg.rotation.x = -0.18;
    this.group.add(fg);
    const L = this._local(fg);
    // sagoma con il centro rialzato
    const shape = new THREE.Shape();
    shape.moveTo(-W / 2, HB);
    shape.lineTo(W / 2, HB);
    shape.lineTo(W / 2, HE);
    shape.lineTo(0.43, HE);
    shape.lineTo(0.37, HC);
    shape.lineTo(-0.37, HC);
    shape.lineTo(-0.43, HE);
    shape.lineTo(-W / 2, HE);
    shape.closePath();
    const TW = 2048, TH = Math.round((2048 * (HC - HB)) / W);
    const U = (u) => ((u + W / 2) / W) * TW;
    const V = (v) => ((HC - v) / (HC - HB)) * TH;
    const tex = this._canvasTex(TW, TH, (g) => {
      C.paintBase(g, TW, TH, '#6f7376');
      C.subPanel(g, U(-0.895), V(HE - 0.004), U(-0.43), V(HB + 0.004));
      C.subPanel(g, U(0.43), V(HE - 0.004), U(0.895), V(HB + 0.004));
      C.subPanel(g, U(-0.36), V(HC - 0.004), U(-0.135), V(HB + 0.004));
      C.subPanel(g, U(-0.13), V(HC - 0.004), U(0.13), V(HB + 0.004));
      C.subPanel(g, U(0.135), V(HC - 0.004), U(0.36), V(HB + 0.004));
      for (const s of [-1, 1]) {
        C.label(g, 'COURSE', U(0.85 * s), V(0.03), 12);
        C.label(g, 'HEADING', U(0.75 * s), V(0.03), 12);
        C.label(g, 'MASTER', U(0.63 * s), V(0.032), 11);
        // targhetta bianca
        const px = U(0.395 * s);
        g.fillStyle = '#f3f2ec';
        g.fillRect(px - 26, V(0.06), 52, V(-0.04) - V(0.06));
        for (let i = 0; i < 7; i++) {
          g.fillStyle = '#222';
          g.fillRect(px - 20, V(0.05) + i * 9, 40 - (i % 3) * 8, 3);
        }
      }
      C.label(g, 'PROPELLER CONTROL', U(-0.25), V(0.085), 12);
      ['SYNC', 'FEATHER 1', 'FEATHER 2'].forEach((t, i) => C.label(g, t, U(-0.31 + i * 0.06), V(-0.042), 9));
      C.label(g, 'WATER DROP CONTROL', U(0), V(0.085), 13);
      C.label(g, 'TANKS 1 · 2 · 3 · 4', U(-0.06), V(-0.002), 9);
      ['MODE', 'QTY', 'ARM', 'DROP', 'FOAM'].forEach((t, i) => C.label(g, t, U(-0.1 + i * 0.05), V(-0.047), 9));
      C.label(g, 'SCOOP / FOAM', U(0.25), V(0.085), 12);
      ['PROBES', 'FOAM INJ', 'DUMP'].forEach((t, i) => C.label(g, t, U(0.19 + i * 0.06), V(-0.042), 9));
      C.label(g, 'DROP MODE', U(0.31), V(0.04), 9);
    });
    const sgeo = new THREE.ShapeGeometry(shape);
    const uv = sgeo.attributes.uv, pos = sgeo.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + W / 2) / W, (pos.getY(i) - HB) / (HC - HB));
    fg.add(new THREE.Mesh(sgeo, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, envMapIntensity: 0.3 })));
    const back = new THREE.ExtrudeGeometry(shape, { depth: 0.05, bevelEnabled: false });
    back.translate(0, 0, -0.051);
    L.add(back, this.M.hood);

    // cappottina superiore (più alta al centro), sottosquadro e bordo imbottito
    const hood = new THREE.BoxGeometry(W, 0.03, 0.38);
    hood.rotateX(-0.235);
    hood.translate(0, 2.55 - GEO.hCG, 1.43 - GEO.sCG);
    this._add(hood, this.M.hood);
    const hoodC = new THREE.BoxGeometry(0.74, 0.07, 0.36);
    hoodC.rotateX(-0.235);
    hoodC.translate(0, 2.585 - GEO.hCG, 1.43 - GEO.sCG);
    this._add(hoodC, this.M.hood);
    this._box(W, 0.02, 0.09, P(1.565, 2.472, 0), this.M.hood);
    const pad = new THREE.CylinderGeometry(0.014, 0.014, W, 12);
    pad.rotateZ(Math.PI / 2);
    pad.translate(0, 2.575 - GEO.hCG, 1.618 - GEO.sCG);
    this._add(pad, this.M.hood);

    // display: barre dei serbatoi e LED del controllo sgancio
    this.waterStatus = new Display(512, 168, drawWaterStatus);
    this._screen(L, fg, this.waterStatus, -0.06, 0.042, 0.13, 0.042, { buttons: 0 });
    this.dropCtl = new Display(256, 96, drawDropControl);
    this._screen(L, fg, this.dropCtl, 0.07, 0.042, 0.09, 0.034, { buttons: 0 });
    for (let i = 0; i < 5; i++) L.box(0.03, 0.016, 0.012, -0.1 + i * 0.05, -0.028, 0.006, i === 3 ? this.M.red : this.M.button);
    // propeller control e scoop/foam: interruttori a levetta
    for (const u of [-0.31, -0.25, -0.19, 0.19, 0.25]) {
      L.box(0.026, 0.03, 0.004, u, -0.016, 0.002, this.M.bezel);
      const t = new THREE.CylinderGeometry(0.003, 0.0045, 0.024, 8);
      t.rotateX(Math.PI / 2 - 0.5);
      t.translate(u, -0.012, 0.012);
      L.add(t, this.M.chrome);
    }
    // maniglia di scarico d'emergenza (protetta da coperchio rosso)
    L.box(0.03, 0.03, 0.012, 0.31 - 0.06, -0.016, 0.006, this.M.red);
    // master warning / caution
    this.masterLights = [];
    for (const side of [-1, 1]) {
      for (const [k, col] of [[0, 0x401010], [1, 0x403010]]) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.046, 0.034, 0.014), new THREE.MeshBasicMaterial({ color: col, toneMapped: false }));
        m.position.set(side * (0.66 - k * 0.058), -0.008, 0.008);
        fg.add(m);
        this.masterLights.push({ m, kind: k });
      }
      // manopole COURSE / HEADING
      for (const u of [0.85, 0.75]) {
        const kn = new THREE.CylinderGeometry(0.014, 0.016, 0.02, 16);
        kn.rotateX(Math.PI / 2);
        kn.translate(side * u, -0.012, 0.01);
        L.add(kn, this.M.knobBlack);
      }
    }
    // accelerometro (g) e indicatore d'incidenza ai due lati
    this.aoaDisplay = new Display(160, 160, drawAoa);
    for (const [p, s] of [['c_', -1], ['f_', 1]]) {
      this._gauge(fg, L, p + 'g', 'g', s * 0.535, -0.006, 0.029, [[0.85, 0.005]]);
      const aoa = new THREE.Mesh(new THREE.CircleGeometry(0.033, 32), this.screenMat(this.aoaDisplay));
      aoa.position.set(s * 0.465, -0.004, 0.008);
      fg.add(aoa);
      const ring = new THREE.Mesh(this.atlas.disc('bezel', 0.039), this.overMat);
      ring.position.set(s * 0.465, -0.004, 0.012);
      fg.add(ring);
      L.box(0.084, 0.084, 0.008, s * 0.465, -0.004, 0.003, this.M.bezel);
    }
    // selettore della modalità di sgancio
    const sel = new THREE.Group();
    sel.position.set(0.31, 0.008, 0.012);
    fg.add(sel);
    const sk = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.019, 0.02, 16), this.M.knobBlack);
    sk.rotation.x = Math.PI / 2;
    sel.add(sk);
    const ptr = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.02, 0.022), this.M.white);
    ptr.position.set(0, 0.006, 0.0);
    sel.add(ptr);
    this.dropSelector = sel;
    this._selAxis = 'z';
    L.flush();

    // bussola magnetica di riserva (sotto la cornice, al centro)
    const cy = roofTop(2.0) - 0.17;
    this._cyl(0.045, 0.045, 0.07, P(2.0, cy, 0), this.M.black, new THREE.Euler(Math.PI / 2, 0, 0), 20);
    this._box(0.016, 0.08, 0.016, P(2.0, cy + 0.06, 0), this.M.black);
    const cg = new THREE.Mesh(new THREE.CircleGeometry(0.032, 24), new THREE.MeshBasicMaterial({ color: 0xd8d0b0 }));
    cg.position.copy(P(2.036, cy, 0));
    this.group.add(cg);
    // alette parasole
    for (const side of [-1, 1]) {
      const v = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.2), this.M.visor);
      v.position.copy(P(2.05, roofTop(2.05) - 0.17, side * 0.48));
      v.rotation.x = -1.0;
      this.group.add(v);
    }
  }

  // ---------------------------------------------------------------------------
  // Piedistallo: AIR COND / COCKPIT HEAT, quadrante POWER e PROP (pomelli bianchi), leva flap,
  // due CDU, pannello dei trim; ai lati le maniglie rosse EMERG WATER DUMP
  _pedestal() {
    const C = Cockpit;
    const W = 0.4, s0 = 1.72, s1 = 2.95, top = FLOOR + 0.5;
    this._box(W, 0.5, s1 - s0, P((s0 + s1) / 2, FLOOR + 0.25, 0), this.M.panel);
    // testa del piedistallo con il pannello AIR COND / COCKPIT HEAT (inclinato verso il pilota)
    const head = new THREE.Group();
    head.position.copy(P(1.8, top + 0.04, 0));
    head.rotation.x = -1.0;
    this.group.add(head);
    const LH = this._local(head);
    const hTex = this._canvasTex(512, 256, (g, w, h) => {
      C.paintBase(g, w, h, '#74787c');
      C.subPanel(g, 6, 6, w - 6, h - 6);
      C.label(g, 'AIR COND / VENT', w * 0.22, 28, 17);
      C.label(g, 'COCKPIT HEAT', w * 0.68, 28, 17);
      ['DISTRIBUTION', 'TEMP', 'MAX'].forEach((t, i) => C.label(g, t, w * (0.5 + i * 0.15), 58, 11));
      g.strokeStyle = '#ddd';
      g.lineWidth = 2;
      g.beginPath();
      g.moveTo(w * 0.42, 40);
      g.lineTo(w * 0.95, 40);
      g.stroke();
      C.label(g, 'FAN', w * 0.2, h - 30, 11);
      C.label(g, 'DEFOG', w * 0.85, h - 30, 11);
    });
    const hp = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.01, 0.2), new THREE.MeshStandardMaterial({ map: hTex, roughness: 0.8, envMapIntensity: 0.3 }));
    head.add(hp);
    LH.box(W, 0.2, 0.2, 0, 0, -0.101, this.M.panel);
    // manopole blu e un interruttore
    for (const u of [0.0, 0.06, 0.12]) {
      const k = new THREE.CylinderGeometry(0.014, 0.016, 0.03, 14);
      k.rotateX(Math.PI / 2);
      k.translate(u, -0.01, 0.015);
      LH.add(k, this.M.knobBlue);
    }
    const tg = new THREE.CylinderGeometry(0.004, 0.006, 0.03, 8);
    tg.rotateX(Math.PI / 2 + 0.4);
    tg.translate(-0.12, -0.01, 0.015);
    LH.add(tg, this.M.chrome);
    LH.box(0.05, 0.07, 0.006, -0.12, -0.01, 0.003, this.M.bezel);
    LH.flush();

    // quadrante delle manette (scatola scura arrotondata)
    const qs = 2.1, qh = FLOOR + 0.42;
    const body = new THREE.CylinderGeometry(0.21, 0.21, 0.31, 32, 1, false, 0, Math.PI);
    body.rotateZ(Math.PI / 2);
    body.translate(0, qh - GEO.hCG, qs - GEO.sCG);
    this._add(body, this.M.quadrant);
    // fianchi con le scritte POWER / PROP
    const sTex = this._canvasTex(256, 128, (g, w, h) => {
      g.fillStyle = '#3c3f42';
      g.fillRect(0, 0, w, h);
      C.label(g, 'POWER', w * 0.3, h * 0.5, 22, '#e8e8e2');
      C.label(g, 'PROP', w * 0.75, h * 0.5, 22, '#e8e8e2');
    });
    for (const side of [-1, 1]) {
      const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.12), new THREE.MeshStandardMaterial({ map: sTex, roughness: 0.6 }));
      pl.position.copy(P(qs, qh + 0.05, side * 0.1555));
      pl.rotation.y = (side * Math.PI) / 2;
      this.group.add(pl);
    }
    // scanalature delle 4 leve
    const slots = [-0.085, -0.04, 0.04, 0.085];
    for (const y of slots) {
      // arco percorso dalle leve: da 35° avanti a 47° indietro rispetto alla verticale
      const sl = new THREE.TorusGeometry(0.211, 0.006, 4, 24, 1.5);
      sl.rotateY(Math.PI / 2);
      sl.rotateX(0.92);
      sl.translate(y, qh - GEO.hCG, qs - GEO.sCG);
      this._add(sl, this.M.black);
    }
    // leve di potenza (pomello bianco largo con grilletto del reverse) e d'elica (bianche, più strette)
    this.powerLevers = [];
    this.condLevers = [];
    const lever = (y, power) => {
      const lv = new THREE.Group();
      lv.position.copy(P(qs, qh, y));
      this.group.add(lv);
      const arm = new THREE.BoxGeometry(0.012, 0.3, 0.02);
      arm.translate(0, 0.15, 0);
      lv.add(new THREE.Mesh(arm, this.M.chrome));
      const knob = new THREE.Mesh(new THREE.BoxGeometry(power ? 0.042 : 0.036, 0.034, power ? 0.05 : 0.04), this.M.whiteKnob);
      knob.position.y = 0.315;
      lv.add(knob);
      const band = new THREE.Mesh(new THREE.BoxGeometry(power ? 0.043 : 0.037, 0.006, power ? 0.051 : 0.041), this.M.knobBlack);
      band.position.y = 0.3;
      lv.add(band);
      if (power) {
        const trig = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.01, 0.022), this.M.knobBlack);
        trig.position.set(0, 0.29, -0.032);
        lv.add(trig);
      }
      return lv;
    };
    this.powerLevers.push(lever(-0.085, true), lever(-0.04, true));
    this.condLevers.push(lever(0.04, false), lever(0.085, false));
    for (const c of this.condLevers) c.rotation.x = -0.35;
    // pannello flap a destra del quadrante: UP / FLAP / DOWN
    const fTex = this._canvasTex(128, 320, (g, w, h) => {
      C.paintBase(g, w, h, '#74787c');
      g.fillStyle = '#111';
      g.fillRect(w * 0.42, h * 0.12, w * 0.16, h * 0.76);
      C.label(g, 'UP', w * 0.5, h * 0.06, 18);
      C.label(g, 'FLAP', w * 0.2, h * 0.5, 14);
      C.label(g, 'DOWN', w * 0.5, h * 0.95, 16);
      for (const [f, t] of [[0, '0'], [0.33, '10'], [0.55, '15'], [1, '25']]) C.label(g, t, w * 0.8, h * (0.14 + f * 0.72), 13);
    });
    const fp = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.15), new THREE.MeshStandardMaterial({ map: fTex, roughness: 0.8 }));
    fp.rotation.x = -Math.PI / 2;
    fp.position.copy(P(2.12, top + 0.004, 0.175));
    this.group.add(fp);
    const fl = new THREE.Group();
    fl.position.copy(P(2.12, top, 0.175));
    this.group.add(fl);
    const farm = new THREE.BoxGeometry(0.01, 0.1, 0.01);
    farm.translate(0, 0.05, 0);
    fl.add(new THREE.Mesh(farm, this.M.chrome));
    const fk = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.018, 0.035), this.M.whiteKnob);
    fk.position.y = 0.105;
    fl.add(fk);
    this.flapLever = fl;

    // due CDU (navigazione / radio) sul piano del piedistallo, inclinati
    this.cduDisplays = [];
    const cTex = this._canvasTex(256, 384, (g, w, h) => {
      g.fillStyle = '#2a2d30';
      g.fillRect(0, 0, w, h);
      g.strokeStyle = '#16181a';
      g.lineWidth = 6;
      g.strokeRect(3, 3, w - 6, h - 6);
      // tasti
      const keys = ['1', '2', '3', 'A', 'B', 'C', '4', '5', '6', 'D', 'E', 'F', '7', '8', '9', 'G', 'H', 'I', 'CLR', '0', 'ENT', 'NAV', 'COM', 'MSG'];
      keys.forEach((k, i) => {
        const x = 18 + (i % 6) * 38, y = h * 0.6 + Math.floor(i / 6) * 34;
        g.fillStyle = '#4a4d50';
        g.fillRect(x, y, 32, 26);
        C.label(g, k, x + 16, y + 13, 11, '#f0f0ea');
      });
      for (let i = 0; i < 4; i++) {
        g.fillStyle = '#4a4d50';
        g.fillRect(6, h * 0.08 + i * 40, 12, 24);
        g.fillRect(w - 18, h * 0.08 + i * 40, 12, 24);
      }
    });
    for (const [i, y] of [[0, -0.095], [1, 0.095]]) {
      const cg = new THREE.Group();
      cg.position.copy(P(2.5, top + 0.035, y));
      cg.rotation.x = -Math.PI / 2 + 0.32;
      this.group.add(cg);
      const face = new THREE.Mesh(new THREE.PlaneGeometry(0.17, 0.255), new THREE.MeshStandardMaterial({ map: cTex, roughness: 0.6, envMapIntensity: 0.3 }));
      cg.add(face);
      const boxG = new THREE.Mesh(new THREE.BoxGeometry(0.175, 0.26, 0.07), this.M.quadrant);
      boxG.position.z = -0.036;
      cg.add(boxG);
      const disp = new Display(320, 240, drawCdu);
      const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.128, 0.096), this.screenMat(disp));
      scr.position.set(0, 0.06, 0.002);
      cg.add(scr);
      this.cduDisplays.push(disp);
    }
    // pannello dei trim: ELEVATOR (ruota), RUDDER, AILERON
    const tTex = this._canvasTex(512, 320, (g, w, h) => {
      C.paintBase(g, w, h, '#74787c');
      C.subPanel(g, 6, 6, w - 6, h - 6);
      C.label(g, 'ELEVATOR', w * 0.2, 30, 17);
      C.label(g, 'RUDDER', w * 0.52, 30, 17);
      C.label(g, 'AILERON', w * 0.82, 30, 17);
      C.label(g, 'NOSE DN', w * 0.2, 62, 11);
      C.label(g, 'NOSE UP', w * 0.2, h - 24, 11);
      C.label(g, 'L          R', w * 0.52, h * 0.62, 12);
      C.label(g, 'L          R', w * 0.82, h * 0.62, 12);
      g.fillStyle = '#111';
      g.fillRect(w * 0.13, 75, w * 0.14, h - 115);
      for (const x of [0.36, 0.44]) {
        g.fillStyle = '#d8d8d0';
        g.fillRect(w * x, h * 0.78, 34, 26);
      }
    });
    const tp = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.01, 0.24), new THREE.MeshStandardMaterial({ map: tTex, roughness: 0.8, envMapIntensity: 0.3 }));
    tp.rotation.x = -Math.PI / 2;
    tp.position.copy(P(2.8, top + 0.003, 0));
    this.group.add(tp);
    // ruota del trim di profondità che sporge dal piano
    const tw = new THREE.Group();
    tw.position.copy(P(2.8, top - 0.03, -0.12));
    this.group.add(tw);
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.03, 32), this.M.quadrant);
    wheel.rotation.z = Math.PI / 2;
    tw.add(wheel);
    for (let k = 0; k < 18; k++) {
      const nub = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.01, 0.01), this.M.grip);
      const a = (k / 18) * Math.PI * 2;
      nub.position.set(0, Math.cos(a) * 0.075, Math.sin(a) * 0.075);
      nub.rotation.x = -a;
      tw.add(nub);
    }
    const mark = new THREE.Mesh(new THREE.BoxGeometry(0.031, 0.012, 0.03), this.M.white);
    mark.position.set(0, 0.07, 0);
    tw.add(mark);
    this.trimWheel = tw;
    for (const y of [0.0, 0.12]) {
      const k = new THREE.CylinderGeometry(0.018, 0.02, 0.025, 16);
      k.translate(y, top + 0.015 - GEO.hCG, 2.79 - GEO.sCG);
      this._add(k, this.M.knobBlack);
    }

    // maniglie rosse EMERG WATER DUMP ai lati del quadrante
    const dTex = this._canvasTex(64, 512, (g, w, h) => {
      g.fillStyle = '#c4161c';
      g.fillRect(0, 0, w, h);
      g.save();
      g.translate(w / 2, h / 2);
      g.rotate(Math.PI / 2);
      C.label(g, 'E M E R G   W A T E R   D U M P', 0, 0, 22, '#ffffff');
      g.restore();
    });
    const dMat = new THREE.MeshStandardMaterial({ map: dTex, roughness: 0.45 });
    this.dumpHandles = [];
    for (const side of [-1, 1]) {
      const hg = new THREE.Group();
      hg.position.copy(P(2.0, top, side * 0.232));
      this.group.add(hg);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.32, 0.034), [this.M.red, this.M.red, this.M.red, this.M.red, dMat, dMat]);
      bar.position.y = 0.16;
      hg.add(bar);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.03, 0.034), this.M.red);
      foot.position.set(-side * 0.03, 0.015, 0);
      hg.add(foot);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.02, 0.05), this.M.red);
      cap.position.y = 0.33;
      hg.add(cap);
      this.dumpHandles.push(hg);
    }
  }

  // ---------------------------------------------------------------------------
  // Overhead: luci, annunciatori, protezione ghiaccio, impianto elettrico (schema), carburante,
  // avviamento; voltmetri e amperometri ai lati, maniglie antincendio rosse davanti
  _overhead() {
    const C = Cockpit;
    const OW = 0.66, OL = 0.98;
    const tex = this._canvasTex(1024, 1520, (g, w, h) => {
      C.paintBase(g, w, h, '#76797c');
      const sec = (x0, y0, x1, y1, title) => {
        C.subPanel(g, x0, y0, x1, y1);
        if (title) C.label(g, title, (x0 + x1) / 2, y0 + 18, 15);
      };
      // colonna centrale
      sec(300, 20, 724, 250, 'LIGHTING CONTROL PANEL');
      sec(300, 255, 724, 430, 'ICE / RAIN PROTECTION');
      sec(300, 435, 724, 860, 'ELECTRICAL CONTROL PANEL');
      sec(300, 865, 724, 1100, 'FUEL CONTROL');
      sec(300, 1105, 724, 1300, 'ENGINE START');
      // ali
      sec(20, 330, 295, 760, 'DC POWER');
      sec(729, 330, 1004, 760, 'AC POWER');
      sec(20, 765, 295, 1100, 'FIRE PROTECTION');
      sec(729, 765, 1004, 1100, 'AIR CONDITIONING');
      // strumenti rotondi (voltmetri, amperometri)
      const dial = (x, y, r) => {
        g.fillStyle = '#101112';
        g.beginPath();
        g.arc(x, y, r + 5, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = '#f2f2ee';
        g.beginPath();
        g.arc(x, y, r, 0, Math.PI * 2);
        g.fill();
        g.strokeStyle = '#111';
        g.lineWidth = 2;
        for (let k = 0; k <= 8; k++) {
          const a = Math.PI * 0.8 + (k / 8) * Math.PI * 1.4;
          g.beginPath();
          g.moveTo(x + Math.cos(a) * r * 0.75, y + Math.sin(a) * r * 0.75);
          g.lineTo(x + Math.cos(a) * r * 0.95, y + Math.sin(a) * r * 0.95);
          g.stroke();
        }
        g.lineWidth = 3;
        g.beginPath();
        g.moveTo(x, y);
        const a = Math.PI * 1.35 + Math.random() * 0.6;
        g.lineTo(x + Math.cos(a) * r * 0.8, y + Math.sin(a) * r * 0.8);
        g.stroke();
      };
      for (const x of [70, 150, 230]) dial(x, 420, 32);
      for (const x of [794, 874, 954]) dial(x, 420, 32);
      for (const x of [380, 640]) dial(x, 80, 26);
      dial(512, 510, 34);
      // display a LED rossi
      const led = (x, y, wd, t) => {
        g.fillStyle = '#140606';
        g.fillRect(x, y, wd, 34);
        g.fillStyle = '#ff3a1a';
        g.font = 'bold 28px "Courier New", monospace';
        g.textAlign = 'center';
        g.textBaseline = 'middle';
        g.fillText(t, x + wd / 2, y + 18);
      };
      led(40, 620, 100, '27.3');
      led(170, 620, 100, '+000');
      led(760, 600, 110, '121.50');
      led(760, 650, 110, '128.00');
      led(640, 370, 70, '188');
      // annunciatori (verde, ambra, bianco, spenti)
      const cols = ['#173d1d', '#3d3317', '#2b2b2b', '#2c3a2c', '#14381a', '#1c1c1c'];
      for (let r = 0; r < 3; r++)
        for (let c = 0; c < 8; c++) {
          g.fillStyle = cols[(r * 8 + c) % cols.length];
          g.fillRect(330 + c * 47, 300 + r * 36, 40, 28);
          g.fillStyle = '#9a9a92';
          g.fillRect(336 + c * 47, 312 + r * 36, 28, 3);
        }
      // schema elettrico: linee bianche e pulsanti quadrati
      g.strokeStyle = '#e8e8e2';
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(340, 600);
      g.lineTo(690, 600);
      g.moveTo(340, 700);
      g.lineTo(690, 700);
      for (const x of [370, 450, 512, 580, 660]) {
        g.moveTo(x, 600);
        g.lineTo(x, 700);
      }
      g.moveTo(512, 700);
      g.lineTo(512, 820);
      g.stroke();
      for (const [x, y] of [[370, 650], [450, 650], [580, 650], [660, 650], [512, 760], [420, 790], [600, 790]]) {
        g.fillStyle = '#1b1d1f';
        g.fillRect(x - 18, y - 14, 36, 28);
        g.fillStyle = '#3d6b3d';
        g.fillRect(x - 13, y - 9, 26, 8);
      }
      // carburante: valvole (cerchi con barra)
      for (const x of [380, 512, 640]) {
        g.strokeStyle = '#e8e8e2';
        g.lineWidth = 3;
        g.beginPath();
        g.arc(x, 990, 22, 0, Math.PI * 2);
        g.stroke();
        g.beginPath();
        g.moveTo(x - 22, 990);
        g.lineTo(x + 22, 990);
        g.stroke();
      }
      g.beginPath();
      g.moveTo(320, 990);
      g.lineTo(700, 990);
      g.stroke();
      // etichette varie
      ['BATT', 'GEN 1', 'GEN 2', 'EXT PWR', 'INV 1', 'INV 2'].forEach((t, i) => C.label(g, t, 60 + (i % 3) * 85, 520 + Math.floor(i / 3) * 70, 12));
      ['ENG 1', 'ENG 2', 'APU', 'BOTTLE 1', 'BOTTLE 2'].forEach((t, i) => C.label(g, t, 70 + (i % 3) * 80, 950 + Math.floor(i / 3) * 80, 12));
      ['PACK', 'BLEED 1', 'BLEED 2', 'RECIRC', 'TEMP'].forEach((t, i) => C.label(g, t, 790 + (i % 3) * 80, 860 + Math.floor(i / 3) * 90, 12));
      ['START 1', 'IGN', 'START 2'].forEach((t, i) => C.label(g, t, 400 + i * 110, 1160, 13));
      ['NAV', 'BEACON', 'STROBE', 'LDG', 'TAXI', 'WING'].forEach((t, i) => C.label(g, t, 340 + i * 70, 225, 11));
      // maniglie antincendio (davanti, verso il parabrezza)
      C.subPanel(g, 300, 1330, 724, 1500);
      C.label(g, 'ENG 1 FIRE', 392, 1470, 14);
      C.label(g, 'ENG 2 FIRE', 632, 1470, 14);
      C.label(g, 'PULL', 512, 1420, 12);
    });
    const ov = new THREE.Group();
    ov.position.copy(P(2.48, roofTop(2.48) - 0.1, 0));
    ov.rotation.x = Math.PI / 2 + 0.1;
    this.group.add(ov);
    // il canvas è "dal davanti": la parte alta (y=0) è verso il parabrezza
    // come sugli aerei veri il testo si legge guardando in su: la parte alta del disegno è verso
    // il fondo della cabina, quella bassa (avviamento, maniglie antincendio) verso il parabrezza
    const face = new THREE.Mesh(new THREE.PlaneGeometry(OW, OL), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, envMapIntensity: 0.3 }));
    ov.add(face);
    const body = new THREE.Mesh(new THREE.BoxGeometry(OW + 0.02, OL + 0.02, 0.1), this.M.panel);
    body.position.z = -0.052;
    ov.add(body);
    // interruttori a levetta e manopole in rilievo
    const swG = [], knG = [];
    const toPlane = (cx, cy) => [(cx / 1024 - 0.5) * OW, (0.5 - cy / 1520) * OL];
    for (let r = 0; r < 2; r++)
      for (let c = 0; c < 6; c++) swG.push(toPlane(340 + c * 70, 185 + r * 0));
    for (let c = 0; c < 6; c++) swG.push(toPlane(60 + (c % 3) * 85, 560 + Math.floor(c / 3) * 70));
    for (let c = 0; c < 5; c++) swG.push(toPlane(790 + (c % 3) * 80, 900 + Math.floor(c / 3) * 90));
    for (let c = 0; c < 3; c++) swG.push(toPlane(400 + c * 110, 1210));
    for (let c = 0; c < 8; c++) swG.push(toPlane(340 + c * 47, 400));
    const geos = swG.map(([x, y], i) => {
      const g1 = new THREE.CylinderGeometry(0.0028, 0.004, 0.022, 6);
      g1.rotateX(Math.PI / 2 + (i % 3 === 0 ? -0.4 : 0.4));
      g1.translate(x, y, 0.012);
      return g1;
    });
    ov.add(new THREE.Mesh(mergeGeos(geos), this.M.chrome));
    for (const [cx, cy] of [[380, 120], [640, 120], [512, 1260], [870, 1020], [150, 700]]) {
      const [x, y] = toPlane(cx, cy);
      const k = new THREE.CylinderGeometry(0.012, 0.014, 0.018, 14);
      k.rotateX(Math.PI / 2);
      k.translate(x, y, 0.009);
      knG.push(k);
    }
    ov.add(new THREE.Mesh(mergeGeos(knG), this.M.knobBlack));
    // maniglie antincendio rosse (a T) sul bordo anteriore
    for (const s of [-1, 1]) {
      const [x, y] = toPlane(512 + s * 120, 1420);
      const st = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.012, 0.04), this.M.chrome);
      st.position.set(x, y, 0.02);
      ov.add(st);
      const hdl = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.022, 0.024), this.M.red);
      hdl.position.set(x, y, 0.045);
      ov.add(hdl);
    }
  }

  // ---------------------------------------------------------------------------
  // Cloche: volantino nero ad anello aperto in alto, due impugnature a corna, tre razze,
  // mozzo con il logo blu; colonna grigia con soffietto
  _yokes() {
    this.yokes = [];
    const lTex = this._canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#1d4fa8';
      g.beginPath();
      g.arc(w / 2, h / 2, w * 0.48, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = '#c8ccd2';
      g.lineWidth = 10;
      g.stroke();
      Cockpit.label(g, 'CANADAIR', w / 2, h * 0.44, 36, '#ffffff');
      Cockpit.label(g, 'CL-415', w / 2, h * 0.62, 30, '#ffffff');
    });
    const logoMat = new THREE.MeshStandardMaterial({ map: lTex, roughness: 0.35, envMapIntensity: 0.6 });
    const R = 0.15, open = 1.15; // raggio, apertura in alto (rad)
    const ring = new THREE.TorusGeometry(R, 0.017, 10, 56, Math.PI * 2 - open);
    ring.rotateZ(Math.PI / 2 + open / 2);
    const endA = Math.PI / 2 + open / 2, endB = Math.PI / 2 - open / 2;
    for (const side of [-1, 1]) {
      const col = new THREE.Group();
      col.position.copy(P(1.86, FLOOR + 0.02, side * 0.52));
      this.group.add(col);
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
      wheel.add(new THREE.Mesh(ring, this.M.yoke));
      // impugnature a corna alle estremità dell'anello
      for (const [a, s] of [[endA, -1], [endB, 1]]) {
        const ex = Math.cos(a) * R, ey = Math.sin(a) * R;
        const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.024, 0.115, 12), this.M.grip);
        grip.position.set(ex + s * 0.022, ey + 0.045, 0);
        grip.rotation.z = -s * 0.42;
        wheel.add(grip);
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.021, 12, 8), this.M.yoke);
        cap.position.set(ex + s * 0.045, ey + 0.096, 0);
        wheel.add(cap);
      }
      // razze e mozzo
      for (const a of [0, Math.PI, -Math.PI / 2]) {
        const sp = new THREE.Mesh(new THREE.BoxGeometry(R - 0.03, 0.022, 0.016), this.M.yoke);
        sp.position.set((Math.cos(a) * (R + 0.03)) / 2, (Math.sin(a) * (R + 0.03)) / 2, -0.004);
        sp.rotation.z = a;
        wheel.add(sp);
      }
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.05, 24), this.M.column);
      hub.rotation.x = Math.PI / 2;
      wheel.add(hub);
      const logo = new THREE.Mesh(new THREE.CircleGeometry(0.038, 32), logoMat);
      logo.position.z = 0.026;
      wheel.add(logo);
      // pulsante DROP rosso e comandi sulle impugnature
      const ext = side;
      const gx = Math.cos(ext > 0 ? endB : endA) * R + ext * 0.045;
      const gy = Math.sin(endA) * R + 0.11;
      const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.012, 12), this.M.knobRed);
      btn.position.set(gx, gy, 0);
      wheel.add(btn);
      const tr = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.012, 0.014), this.M.yellowBlack);
      tr.position.set(-gx, gy - 0.03, 0.022);
      wheel.add(tr);
      const ptt = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.02, 0.012), this.M.knobBlack);
      ptt.position.set(gx * 0.95, gy - 0.05, -0.024);
      wheel.add(ptt);
      this.yokes.push({ col, wheel, gripR: R, gripA: [endA, endB] });
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
    const C = Cockpit;
    // consolle laterali con i pannelli (radio, luci, timone di sterzo a sinistra)
    for (const side of [-1, 1]) {
      this._box(0.22, 0.42, 1.2, P(2.55, FLOOR + 0.62, side * 0.98), this.M.panel);
      const tex = this._canvasTex(256, 1024, (g, w, h) => {
        C.paintBase(g, w, h, '#74787c');
        C.subPanel(g, 6, 6, w - 6, h * 0.3);
        C.subPanel(g, 6, h * 0.31, w - 6, h * 0.62);
        C.subPanel(g, 6, h * 0.63, w - 6, h - 6);
        if (side < 0) {
          C.label(g, 'NOSE WHEEL STEERING', w / 2, 24, 13);
          C.label(g, 'OXYGEN', w / 2, h * 0.33, 13);
          g.fillStyle = '#c4161c';
          g.fillRect(w * 0.35, h * 0.42, w * 0.3, 40);
          C.label(g, 'MASK', w / 2, h * 0.42 + 20, 13);
          C.label(g, 'AUDIO CONTROL', w / 2, h * 0.65, 13);
        } else {
          C.label(g, 'RADIO MANAGEMENT', w / 2, 24, 13);
          C.label(g, 'AUDIO CONTROL', w / 2, h * 0.33, 13);
          C.label(g, 'FUEL QTY', w / 2, h * 0.65, 13);
          g.fillStyle = '#140606';
          g.fillRect(w * 0.15, h * 0.7, w * 0.7, 40);
          g.fillStyle = '#ff3a1a';
          g.font = 'bold 30px "Courier New", monospace';
          g.textAlign = 'center';
          g.fillText('2300', w / 2, h * 0.7 + 30);
        }
        // tasti e manopole disegnati
        for (let r = 0; r < 6; r++)
          for (let c = 0; c < 5; c++) {
            if (side < 0 && r < 3) continue;
            g.fillStyle = '#2c2f31';
            g.fillRect(24 + c * 44, h * 0.08 + r * 30 + (r > 2 ? h * 0.2 : 0), 32, 20);
          }
        for (let k = 0; k < 4; k++) {
          g.fillStyle = '#151617';
          g.beginPath();
          g.arc(46 + k * 56, h * 0.82, 16, 0, Math.PI * 2);
          g.fill();
        }
      });
      const top = new THREE.Mesh(new THREE.PlaneGeometry(0.21, 1.18), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, envMapIntensity: 0.3 }));
      top.rotation.x = -Math.PI / 2;
      top.position.copy(P(2.55, FLOOR + 0.832, side * 0.98));
      this.group.add(top);
    }
    // timone di sterzo del ruotino (consolle sinistra): volantino orizzontale con pomello
    const tl = new THREE.Group();
    tl.position.copy(P(2.12, FLOOR + 0.86, -0.97));
    this.group.add(tl);
    const tw = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.012, 8, 32), this.M.black);
    tw.rotation.x = Math.PI / 2;
    tl.add(tw);
    const hubT = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.03, 16), this.M.column);
    tl.add(hubT);
    for (const a of [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3]) {
      const sp = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.008, 0.012), this.M.black);
      sp.position.set(Math.cos(a) * 0.045, 0, Math.sin(a) * 0.045);
      sp.rotation.y = -a;
      tl.add(sp);
    }
    const th = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.06, 8), this.M.black);
    th.position.set(0.085, 0.03, 0);
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

  // sedile in cui siede chi guarda (multiplayer): il compagno occupa l'altro
  setSeat(side) {
    if (side === this.seat) return;
    this.seat = side;
    this.eye = P(EYE.s, EYE.h, side * 0.52);
  }
  // vista del compagno: { role: 'pilot'|'copilot', yaw, pitch } oppure null
  setPeer(view) {
    this.peerView = view;
    this.avatar.visible = !!view;
  }

  // figura umana seduta nel sedile libero: tuta arancione, casco bianco con cuffie
  _avatar() {
    const mat = (c, r = 0.85) => new THREE.MeshStandardMaterial({ color: c, roughness: r, envMapIntensity: 0.3 });
    const suit = mat(0xd8560f), skin = mat(0xc58c66, 0.7), white = mat(0xe9e9e6, 0.4), black = mat(0x151617, 0.6), strap = mat(0x2a2d31);
    const g = new THREE.Group();
    g.visible = false;
    this.avatar = g;
    this.group.add(g);
    const add = (geo, m, x, y, z, parent = g) => {
      const o = new THREE.Mesh(geo, m);
      o.position.set(x, y, z);
      parent.add(o);
      return o;
    };
    const torso = add(new THREE.CapsuleGeometry(0.16, 0.3, 6, 14), suit, 0, 0.93, 0.14);
    torso.scale.set(1.3, 1, 0.78);
    torso.rotation.x = 0.2;
    add(new THREE.BoxGeometry(0.34, 0.14, 0.26), suit, 0, 0.52, 0.08);
    // cinture sul petto
    for (const sd of [-1, 1]) {
      const b = add(new THREE.BoxGeometry(0.035, 0.5, 0.01), strap, sd * 0.1, 0.95, -0.05);
      b.rotation.x = 0.2;
    }
    // testa (ruota con lo sguardo)
    const head = new THREE.Group();
    head.position.set(0, 1.4, 0.2);
    g.add(head);
    this.avatarHead = head;
    add(new THREE.SphereGeometry(0.093, 18, 14), skin, 0, 0, 0, head);
    add(new THREE.SphereGeometry(0.108, 18, 10, 0, Math.PI * 2, 0, Math.PI * 0.56), white, 0, 0.012, 0, head);
    add(new THREE.BoxGeometry(0.16, 0.02, 0.07), black, 0, 0.02, -0.095, head); // visiera
    for (const sd of [-1, 1]) add(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 14), black, sd * 0.105, -0.01, 0.005, head).rotation.z = Math.PI / 2;
    const boom = add(new THREE.CylinderGeometry(0.004, 0.004, 0.11, 6), black, 0.09, -0.04, -0.06, head);
    boom.rotation.x = Math.PI / 2;
    add(new THREE.SphereGeometry(0.014, 8, 6), black, 0.09, -0.04, -0.115, head);
    add(new THREE.CylinderGeometry(0.045, 0.055, 0.08, 10), skin, 0, -0.1, 0.01, head);
    // arti: cilindri unitari orientati ogni fotogramma
    const limb = (r, m) => {
      const o = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 1, 10), m);
      g.add(o);
      return o;
    };
    this.avatarLimbs = {
      arm: [[limb(0.05, suit), limb(0.042, suit), add(new THREE.SphereGeometry(0.04, 10, 8), skin, 0, 0, 0)], [limb(0.05, suit), limb(0.042, suit), add(new THREE.SphereGeometry(0.04, 10, 8), skin, 0, 0, 0)]],
      leg: [[limb(0.085, suit), limb(0.065, suit)], [limb(0.085, suit), limb(0.065, suit)]],
    };
    this._tmpA = new THREE.Vector3();
    this._tmpB = new THREE.Vector3();
    this._up = new THREE.Vector3(0, 1, 0);
  }
  _seg(mesh, a, b) {
    const d = this._tmpB.copy(b).sub(a);
    const len = d.length();
    mesh.position.copy(a).addScaledVector(d, 0.5);
    mesh.scale.set(1, Math.max(len, 1e-3), 1);
    mesh.quaternion.setFromUnitVectors(this._up, d.divideScalar(len || 1));
  }
  _updateAvatar() {
    const v = this.peerView;
    const g = this.avatar;
    if (!v || !g.visible) return;
    const side = -this.seat;
    g.position.copy(P(2.5, FLOOR, side * 0.52));
    this.avatarHead.rotation.set(v.pitch, v.yaw, 0, 'YXZ');
    const yk = this.yokes[side < 0 ? 0 : 1];
    yk.col.updateMatrix();
    yk.wheel.updateMatrix();
    const grip = (sd) => new THREE.Vector3(sd * 0.105, 0.17, 0).applyMatrix4(yk.wheel.matrix).applyMatrix4(yk.col.matrix).sub(g.position);
    const ped = P(2.12, FLOOR + 0.76, 0).sub(g.position);
    for (const sd of [-1, 1]) {
      const i = sd < 0 ? 0 : 1;
      const sh = new THREE.Vector3(sd * 0.23, 1.12, 0.12);
      // il pilota ha entrambe le mani sul volantino; il copilota la mano interna sul piedistallo
      const inner = sd === -side;
      const hand = v.role === 'copilot' && inner ? ped.clone().add(new THREE.Vector3(-sd * 0.0, 0, 0)) : grip(sd);
      const mid = sh.clone().lerp(hand, 0.5).add(new THREE.Vector3(sd * 0.07, -0.12, 0.04));
      const [u, f, h] = this.avatarLimbs.arm[i];
      this._seg(u, sh, mid);
      this._seg(f, mid, hand);
      h.position.copy(hand);
      const hip = new THREE.Vector3(sd * 0.1, 0.55, 0.06);
      const knee = new THREE.Vector3(sd * 0.11, 0.62, -0.38);
      const foot = new THREE.Vector3(sd * 0.11, 0.2, -0.72);
      const [th, sh2] = this.avatarLimbs.leg[i];
      this._seg(th, hip, knee);
      this._seg(sh2, knee, foot);
    }
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
      nd(G[p + 'g'], 0, MAP.g(o.nz));
    }
    G.sby.mat.uniforms.pitch.value = o.pitch;
    G.sby.mat.uniforms.roll.value = -o.roll;
    nd(G.sbyAsi, 0, MAP.asi(iasKt));
    nd(G.flaps, 0, MAP.flaps(sys.flapPos));
    const d = new Date();
    const p2 = (n) => String(n).padStart(2, '0');
    this.clockDisplay.update({ hm: p2(d.getHours()) + ':' + p2(d.getMinutes()), ss: p2(d.getSeconds()) });
    // indicatore d'incidenza (AOA)
    this.aoaDisplay.update({ f: Math.round(clamp(((o.alpha || 0) / DEG + 2) / 20, 0, 1) * 100) / 100 });

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

    this._updateAvatar();
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
    this.dropSelector.rotation.z = -sys.dropMode * 40 * DEG;

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
      this.waterMfd.update({
        tanks: sys.tanks.map((t) => Math.round((t / cap) * 40) / 40), doors, foam: sys.foamArmed, foamPct: Math.round(foamMix * 100),
        total: Math.round(sys.waterLiters() / 5) * 5, scoop: o.scoopRate > 20, probes: sys.probePos > 0.5, preset: Math.round(sys.scoopPreset * 100) / 100,
        doorsOpen: doors.some((x) => x),
      });
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
    this._navUpdate(dt, fm, sys);
  }

  // GPS (punti vicini), radar meteo in modalità mappa del terreno, CDU di navigazione e radio
  _navUpdate(dt, fm, sys) {
    const o = fm.out;
    const x = fm.pos.x, z = fm.pos.z;
    const hdg = o.heading;
    this._navT = (this._navT || 0) + dt;
    this._sweep = (this._sweep || 0) + dt * 1.1;
    const sweep = Math.sin(this._sweep) * 1.0;
    if (!this._returns || this._navT > 1.0) {
      this._navT = 0;
      // punti vicini
      const list = Object.entries(WORLD.places || {})
        .map(([n, p]) => {
          const dx = p.x - x, dz = p.z - z;
          let b = Math.round((Math.atan2(dx, -dz) / DEG + 360) % 360);
          return { n: n.toUpperCase().slice(0, 12), d: Math.hypot(dx, dz) / 1852, b };
        })
        .sort((a, b) => a.d - b.d)
        .slice(0, 3)
        .map((p) => ({ n: p.n, d: Math.round(p.d * 10) / 10, b: p.b }));
      this.gpsDisplay.update({ list });
      this._nearest = list[0];
      // radar: ritorni del terreno più alto della quota di volo meno 200 m (avviso montagne)
      const ret = [];
      if (GARDA.ready) {
        for (let a = -1.0; a <= 1.0001; a += 0.08) {
          const dir = hdg + a;
          for (let k = 1; k <= 14; k++) {
            const r = k * 1300;
            const px = x + Math.sin(dir) * r, pz = z - Math.cos(dir) * r;
            const inner = Math.abs(px) < WORLD.half && Math.abs(pz) < WORLD.half;
            const far = Math.abs(px) < WORLD.farHalf && Math.abs(pz) < WORLD.farHalf;
            if (!inner && !far) continue;
            const h = inner ? gardaHeight(px, pz) : farHeight(px, pz);
            const i = clamp((h - (fm.pos.y - 250)) / 500, 0, 1);
            if (i > 0) ret.push({ a: Math.round(a * 100) / 100, d: k / 14, i: Math.round(i * 10) / 10 });
          }
        }
      }
      this._returns = ret;
      // CDU
      const n = this._nearest;
      const kt = Math.round(o.gs / KT);
      let trk = Math.round((o.track !== undefined ? o.track / DEG : hdg / DEG) + 360) % 360;
      this.cduDisplays[0].update({
        lines: [
          ['NAV', '1/2'], ['POS', n ? n.n : '---'], ['DIST', n ? n.d.toFixed(1) + ' NM' : ''], ['GS', kt + ' KT'], ['TRK', String(trk).padStart(3, '0') + '°'],
          ['ALT', Math.round(o.alt / FT) + ' FT'], ['H2O', Math.round(sys.waterLiters()) + ' L', '#7fd8ff'], ['FUEL', Math.round(sys.fuel) + ' KG'],
        ],
      });
      this.cduDisplays[1].update({
        lines: [['RADIO', '1/1'], ['COM1', '122.800'], ['COM2', '123.450'], ['NAV1', '110.30'], ['ADF', '353'], ['XPDR', '7000 ALT'], ['SAR', 'CH 16', '#ffb21a'], ['ICS', 'ON']],
      });
    }
    this.radarDisplay.update({ sweep: Math.round(sweep * 20) / 20, returns: this._returns });
  }
}
