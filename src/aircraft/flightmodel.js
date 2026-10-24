// Modello di volo 6 gradi di libertà del CL-415.
//
// - Aerodinamica a "strisce" (strip theory): ogni semiala è divisa in tronchi con velocità locale
//   (inclusa rotazione e soffio delle eliche), stallo progressivo, flap, alettoni, spoiler.
// - Impennaggi con downwash/effetto suolo, deriva, alette verticali (finlets).
// - Propulsione turboelica con modello a disco attuatore (spinta statica e in volo, coppia di reazione,
//   effetti giroscopici, fattore P).
// - Idrodinamica dello scafo planante: galleggiamento per sezioni a V, portanza di planata,
//   resistenza d'onda (hump), attrito, resistenza laterale della chiglia, galleggianti alari.
// - Sonde di pescaggio con portata e resistenza di quantità di moto.
// - Carrello triciclo a molla/smorzatore con freni differenziali e sterzo, contatti strutturali.

import * as THREE from 'three';
import { DEG, clamp, smoothstep, approach } from '../core/math.js';
import { G, RHO_WATER, KT, isa } from '../core/constants.js';
import { SPEC, GEO, toBody, keel, chine, halfBeam, deadrise } from './specs.js';

const V3 = THREE.Vector3;

const CLA_WING = 5.05; // pendenza retta di portanza 3D per radiante
const A0_WING = -3.9 * DEG; // incidenza di portanza nulla (profilo NACA 4417)
const CLA_HT = 4.3;
const CLA_VT = 3.0;
const PROP_AREA = Math.PI * (SPEC.propDiameter / 2) ** 2;
const PROP_OMEGA = (SPEC.propRPM / 60) * 2 * Math.PI;
const T_STATIC_MAX = 30500; // N per motore
const PROP_ETA = 0.86;
const PROP_INERTIA = 95; // kg m²

const sigmoid = (x) => 1 / (1 + Math.exp(-x));

// Coefficienti del profilo su tutto il campo di incidenze (attaccato + piastra piana separata).
function softClip(x, lo, hi) {
  // satura dolcemente verso lo/hi (ginocchio all'82%)
  const kh = 0.82 * hi;
  if (x > kh) return kh + (hi - kh) * (1 - Math.exp(-(x - kh) / (hi - kh)));
  const kl = 0.82 * lo;
  if (x < kl) return kl + (lo - kl) * (1 - Math.exp(-(x - kl) / (lo - kl)));
  return x;
}
function airfoil(alpha, dCl, clmax, clmin, cla, a0, cd0, out) {
  const clLin = cla * (alpha - a0) + dCl;
  // angoli di stallo: poco oltre il punto in cui la retta raggiunge il massimo
  const aPos = a0 + (clmax - dCl) / cla + 1.8 * DEG;
  const aNeg = a0 + (clmin - dCl) / cla - 1.8 * DEG;
  const width = 1.25 * DEG;
  const wPos = sigmoid((alpha - aPos) / width);
  const wNeg = sigmoid((aNeg - alpha) / width);
  const w = clamp(wPos + wNeg, 0, 1);
  const s2 = Math.sin(2 * alpha);
  const sa = Math.sin(alpha);
  const clFP = 1.05 * s2 + 0.3 * dCl * Math.cos(alpha);
  const cdFP = 0.06 + 1.22 * sa * sa;
  const clAtt = softClip(clLin, clmin, clmax);
  out.cl = (1 - w) * clAtt + w * clFP;
  out.cd = (1 - w) * (cd0 + 0.006 * clAtt * clAtt) + w * cdFP;
  out.sep = w;
  out.margin = Math.min(aPos - alpha, alpha - aNeg);
  return out;
}

export class FlightModel {
  constructor(world) {
    this.world = world;
    this.pos = new V3();
    this.vel = new V3();
    this.quat = new THREE.Quaternion();
    this.omega = new V3(); // velocità angolare in assi corpo (Three)
    this.cg = new V3(); // posizione del baricentro attuale in assi corpo di riferimento
    this.mass = SPEC.emptyMass;
    this.inertia = new V3(1.7e5, 3.5e5, 2.4e5);
    this.time = 0;
    this.accum = 0;
    this.dt = 1 / 240;

    // superfici mobili (gradi effettivi)
    this.surf = { elev: 0, ail: 0, rud: 0, flap: 0 };
    this.ctl = { elevator: 0, aileron: 0, rudder: 0, brakeL: 0, brakeR: 0, tiller: 0 };

    this.sys = null; // Systems collegato
    this.crash = null;
    this.damage = 0;
    this.out = this._makeOut();
    this._buildElements();
    this._tmp = {
      f: new V3(), m: new V3(), r: new V3(), v: new V3(), w: new V3(), a: new V3(), b: new V3(),
      c: new V3(), d: new V3(), n: new V3(), q: new THREE.Quaternion(), qi: new THREE.Quaternion(),
      wind: new V3(), vAir: new V3(), vAirB: new V3(), up: new V3(), fwd: new V3(), right: new V3(),
      coef: { cl: 0, cd: 0, sep: 0 },
    };
    this.prevCLw = 0.3;
    this.sprayPoints = []; // per effetti grafici
    for (let i = 0; i < 64; i++) this.sprayPoints.push({ x: 0, y: 0, z: 0, intensity: 0, vx: 0, vz: 0, side: 0, s: 0 });
    this.sprayCount = 0;
  }

  _makeOut() {
    return {
      ias: 0, tas: 0, gs: 0, mach: 0, alt: 0, agl: 0, radAlt: 0, vs: 0, heading: 0, pitch: 0, roll: 0,
      alpha: 0, beta: 0, nz: 1, ny: 0, slip: 0, rho: 1.225, onWater: false, onGround: false, planing: false,
      hullDepth: 0, wetLength: 0, waterSpeed: 0, scoopRate: 0, probeImmersion: 0, stall: false,
      stallMargin: 1, thrust: [0, 0], gearLoad: [0, 0, 0], gearCompress: [0, 0, 0], wheelSpeed: [0, 0, 0],
      impact: 0, gearInWater: false, wingtipWater: 0, overG: 0, turnRate: 0, track: 0, propWash: [0, 0],
      clWing: 0, surfaceUnder: 'water', groundBelow: 0, waterBelow: 0, ge: 0,
    };
  }

  // ---------------------------------------------------------------------------
  _buildElements() {
    const W = GEO.wing;
    // Strisce alari
    this.wingStrips = [];
    const n = 8;
    const span = W.halfSpan - W.rootY;
    for (const side of [-1, 1]) {
      for (let i = 0; i < n; i++) {
        const y0 = W.rootY + (span * i) / n;
        const y1 = W.rootY + (span * (i + 1)) / n;
        const yc = (y0 + y1) / 2;
        const width = y1 - y0;
        const flapFrac = clamp((Math.min(y1, W.flapEnd) - Math.max(y0, W.flapStart)) / width, 0, 1);
        const ailFrac = clamp((Math.min(y1, W.ailEnd) - Math.max(y0, W.ailStart)) / width, 0, 1);
        const tipLoss = i === n - 1 ? 0.84 : i === n - 2 ? 0.95 : 1.0; // winglet attenua la perdita d'estremità
        this.wingStrips.push({
          side, y0, y1, yc, width,
          area: width * W.chord,
          pos: new V3().copy(toBody(W.sLE + 0.25 * W.chord, W.h, side * yc)),
          flapFrac, ailFrac, tipLoss,
          spoiler: yc > 5.5 && yc < 9.6 ? 1 : 0,
          slipCov: [0, 0],
        });
      }
    }
    // copertura del soffio delle eliche per ogni striscia
    const rs = 0.86 * SPEC.propDiameter / 2;
    const engY = [-GEO.engine.y, GEO.engine.y];
    for (const st of this.wingStrips) {
      for (let e = 0; e < 2; e++) {
        const a = Math.max(st.side * st.y0, st.side * st.y1) ;
        const lo = Math.min(st.side * st.y0, st.side * st.y1);
        const hi = a;
        const ov = Math.min(hi, engY[e] + rs) - Math.max(lo, engY[e] - rs);
        st.slipCov[e] = clamp(ov / st.width, 0, 1);
      }
    }

    // Piano orizzontale
    const H = GEO.htail;
    this.htStrips = [];
    for (const side of [-1, 1]) {
      for (let i = 0; i < 2; i++) {
        const y0 = (H.halfSpan * i) / 2;
        const y1 = (H.halfSpan * (i + 1)) / 2;
        const yc = (y0 + y1) / 2;
        const t = yc / H.halfSpan;
        const chord = H.rootChord + (H.tipChord - H.rootChord) * t;
        const sLE = H.sLE + H.sweepLE * t;
        const slip = Math.abs(yc - GEO.engine.y) < 1.9 ? 0.75 : Math.abs(yc - GEO.engine.y) < 2.6 ? 0.35 : 0.0;
        this.htStrips.push({
          side, yc, chord, area: (y1 - y0) * chord,
          pos: new V3().copy(toBody(sLE + 0.25 * chord, H.h, side * yc)),
          slip, eng: side < 0 ? 0 : 1,
        });
      }
    }
    // Deriva verticale (due tronchi) + finlets
    const Vt = GEO.vtail;
    this.vtStrips = [];
    for (let i = 0; i < 2; i++) {
      const h0 = Vt.hRoot + ((Vt.hTip - Vt.hRoot) * i) / 2;
      const h1 = Vt.hRoot + ((Vt.hTip - Vt.hRoot) * (i + 1)) / 2;
      const hc = (h0 + h1) / 2;
      const t = (hc - Vt.hRoot) / (Vt.hTip - Vt.hRoot);
      const chord = Vt.rootChord + (Vt.tipChord - Vt.rootChord) * t;
      const sLE = Vt.sRootLE + (Vt.sTipLE - Vt.sRootLE) * t;
      this.vtStrips.push({
        area: (h1 - h0) * chord * 0.86,
        pos: new V3().copy(toBody(sLE + 0.25 * chord, hc, 0)),
        rudder: 1,
      });
    }
    for (const side of [-1, 1]) {
      this.vtStrips.push({
        area: 1.55,
        pos: new V3().copy(toBody(H.sLE + 0.55 + 0.35, H.h + 0.2, side * H.finletY)),
        rudder: 0,
        finlet: side,
      });
    }

    // Motori
    this.engines = [-1, 1].map((side) => ({
      pos: new V3().copy(toBody(GEO.engine.sProp, GEO.engine.h, side * GEO.engine.y)),
      vi: 0, thrust: 0, side,
    }));

    // Campioni idrodinamici dello scafo
    this.hullSamples = [];
    const ds = 0.5;
    for (let s = 0.35; s < 19.3; s += ds) {
      const k = keel(s);
      const hb = halfBeam(s);
      const ch = chine(s);
      const beta = deadrise(s);
      const dk = (keel(s + 0.05) - keel(s - 0.05)) / 0.1;
      for (const side of [-1, 1]) {
        const p = toBody(s, k + (ch - k) * 0.5, side * hb * 0.5);
        const nrm = new V3(side * Math.sin(beta), -Math.cos(beta), dk * Math.cos(beta)).normalize();
        this.hullSamples.push({
          s, side, ds, keel: k, chineRel: Math.max(ch - k, 0.02), hb, beta,
          tanb: Math.tan(beta), pos: new V3(p.x, p.y, p.z), n: nrm,
          fore: s < GEO.sStep,
          depth: 0,
        });
      }
    }
    // Galleggianti alari
    const F = GEO.float;
    this.floatSamples = [];
    for (const side of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const s = F.sFront + 0.6 + i * 1.15;
        const hb = F.width / 2;
        const beta = 25 * DEG;
        for (const sd of [-1, 1]) {
          const p = toBody(s, F.hBottom + 0.12, side * F.y + sd * hb * 0.5);
          this.floatSamples.push({
            s, side: sd, fside: side, ds: 1.15, keel: F.hBottom, chineRel: hb * Math.tan(beta), hb, beta,
            tanb: Math.tan(beta), pos: new V3(p.x, p.y, p.z),
            n: new V3(sd * Math.sin(beta), -Math.cos(beta), i === 0 ? -0.25 : 0).normalize(), fore: true, depth: 0,
            sideH: F.height,
          });
        }
      }
    }

    // Punti di contatto strutturale (atterraggio sul ventre, urti)
    this.structPoints = [];
    const addSP = (s, h, y, kind) => this.structPoints.push({ pos: new V3().copy(toBody(s, h, y)), kind });
    for (const s of [0.4, 1.2, 2.5, 4.5, 6.5, 8.9, 10.5, 13, 15.5, 17.5, 19.2]) addSP(s, keel(s), 0, 'hull');
    addSP(GEO.float.sFront + 1.5, GEO.float.hBottom, -GEO.float.y, 'float');
    addSP(GEO.float.sFront + 1.5, GEO.float.hBottom, GEO.float.y, 'float');
    addSP(GEO.wing.sLE + 1.2, GEO.wing.h, -GEO.wing.halfSpan, 'wingtip');
    addSP(GEO.wing.sLE + 1.2, GEO.wing.h, GEO.wing.halfSpan, 'wingtip');
    addSP(GEO.vtail.sRootLE + 4, 2.7, 0, 'tail');
    this.propTipLow = GEO.engine.h - SPEC.propDiameter / 2;

    // Carrello
    const NG = GEO.gear.nose, MG = GEO.gear.main;
    this.gearPts = [
      { name: 'nose', pos: new V3().copy(toBody(NG.s, NG.pivotH - NG.legLen, 0)), r: NG.wheelR, k: 2.6e5, c: 3.2e4, travel: 0.3, steer: true, drag: 0.32 },
      { name: 'left', pos: new V3().copy(toBody(MG.s, MG.wheelH, -MG.wheelY)), r: MG.wheelR, k: 5.6e5, c: 6.5e4, travel: 0.35, brake: 'L', drag: 0.55 },
      { name: 'right', pos: new V3().copy(toBody(MG.s, MG.wheelH, MG.wheelY)), r: MG.wheelR, k: 5.6e5, c: 6.5e4, travel: 0.35, brake: 'R', drag: 0.55 },
    ];
    for (const g of this.gearPts) {
      g.comp = 0;
      g.load = 0;
      g.spin = 0;
    }

    // Sonde
    this.probes = [-1, 1].map((side) => ({
      side,
      root: new V3().copy(toBody(GEO.probe.s, keel(GEO.probe.s) + GEO.probe.y * Math.tan(deadrise(GEO.probe.s)), side * GEO.probe.y)),
      tip: new V3(),
      immersion: 0,
    }));
  }

  // ---------------------------------------------------------------------------
  // Posiziona l'aereo. mode: 'air' | 'water' | 'runway'
  reset(position, headingRad, speed = 0, mode = 'air') {
    this.crash = null;
    this.damage = 0;
    this.time = 0;
    this.accum = 0;
    this.omega.set(0, 0, 0);
    this._updateMass(true);
    const pitch = mode === 'runway' ? 0.4 * DEG : mode === 'water' ? 1.5 * DEG : 2.5 * DEG;
    this.quat.setFromEuler(new THREE.Euler(pitch, headingRad, 0, 'YXZ'));
    this.pos.copy(position);
    if (mode === 'runway') {
      const g = this.world.groundHeight(position.x, position.z);
      this.pos.y = g + GEO.hCG + this.cg.y - GEO.gear.main.wheelH + GEO.gear.main.wheelR - 0.12;
    } else if (mode === 'water') {
      const w = this.world.waterHeight(position.x, position.z, 0);
      this.pos.y = w + GEO.hCG + this.cg.y - (speed > 15 ? 0.25 : 0.95);
    }
    const fwd = new V3(0, 0, -1).applyQuaternion(this.quat);
    this.vel.copy(fwd).multiplyScalar(speed);
    this.vel.y = 0;
    for (const g of this.gearPts) g.comp = 0;
    this.prevCLw = 0.4;
  }

  _updateMass(snap = false) {
    const sys = this.sys;
    if (!sys) return;
    const mw = sys.waterMass(); // acqua + schiuma (kg)
    const mf = sys.fuel;
    const me = SPEC.emptyMass;
    const m = me + mw + mf;
    // baricentro: acqua nei serbatoi davanti e in basso, carburante nelle ali
    const tw = toBody(GEO.tankS, 0.25 + GEO.tanksH * clamp(mw / 6800, 0.15, 1) * 0.6, 0);
    const tf = toBody(GEO.wing.sLE + 1.6, GEO.wing.h, 0);
    const cgx = 0;
    const cgy = (mw * tw.y + mf * tf.y) / m;
    const cgz = (mw * tw.z + mf * tf.z) / m;
    const newCg = this._tmp ? this._tmp.c.set(cgx, cgy, cgz) : new V3(cgx, cgy, cgz);
    if (!snap) {
      // mantiene ferma la cellula spostando la posizione del baricentro nel mondo
      const d = this._tmp.d.copy(newCg).sub(this.cg).applyQuaternion(this.quat);
      this.pos.add(d);
    }
    this.cg.copy(newCg);
    this.mass = m;
    const k = m / me;
    this.inertia.set(
      1.68e5 * (0.75 + 0.25 * k) + mw * 1.2,
      3.5e5 * (0.8 + 0.2 * k) + mf * 22 + mw * 1.0,
      2.4e5 * (0.85 + 0.15 * k) + mf * 25 + mw * 0.5,
    );
  }

  // ---------------------------------------------------------------------------
  update(dtFrame) {
    this.accum += Math.min(dtFrame, 0.1);
    let steps = 0;
    while (this.accum >= this.dt && steps < 40) {
      this.step(this.dt);
      this.accum -= this.dt;
      steps++;
    }
  }

  step(dt) {
    if (this.crash) {
      this.time += dt;
      return;
    }
    const sys = this.sys;
    const t = this._tmp;
    const world = this.world;
    this.time += dt;
    sys.update(dt, this);
    this._updateMass(false);

    // Superfici mobili con limite di velocità
    const c = this.ctl;
    const elevCmd = (c.elevator >= 0 ? c.elevator * 26 : c.elevator * 17) + sys.elevTrim * 11;
    this.surf.elev = approach(this.surf.elev, clamp(elevCmd, -20, 28), 70, dt);
    this.surf.ail = approach(this.surf.ail, clamp(c.aileron * 18 + sys.ailTrim * 4, -20, 20), 70, dt);
    this.surf.rud = approach(this.surf.rud, clamp(c.rudder * 25 + sys.rudTrim * 8, -27, 27), 60, dt);
    this.surf.flap = sys.flapPos;

    const F = t.f.set(0, 0, 0); // forza totale (mondo)
    const M = t.m.set(0, 0, 0); // momento totale (corpo, intorno al baricentro)
    const q = this.quat;
    const qi = t.qi.copy(q).invert();
    const o = this.out;

    // Aria
    const atm = isa(this.pos.y);
    const rho = atm.rho;
    world.windAt(this.pos.x, this.pos.y, this.pos.z, this.time, t.wind);
    const vAir = t.vAir.copy(this.vel).sub(t.wind);
    const vAirB = t.vAirB.copy(vAir).applyQuaternion(qi);
    const Vt = vAir.length();
    o.rho = rho;

    // Superficie sotto l'aereo (effetto suolo, radioaltimetro)
    const gY = world.groundHeight(this.pos.x, this.pos.z);
    const wY = world.waterHeight(this.pos.x, this.pos.z, this.time);
    const surfY = Math.max(gY, wY);
    o.groundBelow = gY;
    o.waterBelow = wY;
    o.surfaceUnder = wY > gY ? 'water' : 'land';
    const wingH = this.pos.y + (GEO.wing.h - GEO.hCG - this.cg.y) - surfY;
    const hb = clamp(wingH / SPEC.span, 0.02, 2);
    const ge = (16 * hb) ** 2 / (1 + (16 * hb) ** 2); // fattore di riduzione resistenza indotta
    o.ge = 1 - ge;

    // ---------------- Propulsione ----------------
    for (let e = 0; e < 2; e++) {
      const eng = this.engines[e];
      const es = sys.engines[e];
      const r = t.r.copy(eng.pos).sub(this.cg);
      const vp = t.v.copy(this.omega).cross(r).add(vAirB);
      const Va = Math.max(-vp.z, 0);
      let T = 0;
      const P = es.shaftPower;
      if (es.reverse > 0) {
        T = -T_STATIC_MAX * 0.42 * es.reverse * clamp(1 - Va / 45, 0.15, 1);
      } else if (P > 1) {
        const pf = P / SPEC.enginePower;
        const Ts = T_STATIC_MAX * Math.pow(pf, 2 / 3);
        const V0 = (PROP_ETA * P) / (Ts * (o.onGround || o.onWater ? Math.max(0.3, smoothstep(0.0, 0.12, es.lever)) : 1));
        T = (PROP_ETA * P) / Math.cbrt(Va * Va * Va + V0 * V0 * V0);
        // resistenza dell'elica al minimo
        T -= 0.5 * rho * Va * Va * 0.3 * Math.pow(1 - clamp(pf * 3, 0, 1), 2);
      } else {
        T = -0.5 * rho * Va * Va * (es.feathered ? 0.05 : 0.3);
      }
      T *= rho / 1.225 > 0.6 ? 1 : rho / 1.225;
      eng.thrust = T;
      o.thrust[e] = T;
      const Tp = Math.max(T, 0);
      eng.vi = 0.5 * (-Va + Math.sqrt(Va * Va + (2 * Tp) / (rho * PROP_AREA)));
      o.propWash[e] = Va + 2 * eng.vi;
      // spinta lungo -Z corpo
      t.a.set(0, 0, -T);
      this._addBodyForce(t.a, r, F, M, q);
      // coppia di reazione (eliche orarie viste da dietro -> rollio a sinistra)
      const Q = P / PROP_OMEGA;
      M.z += Q * 0.9;
      // fattore P / vortice dell'elica sulla deriva -> imbardata a sinistra
      M.y += Tp * (0.06 + 0.5 * clamp(o.alpha, -0.2, 0.3));
      // giroscopico
      const H = PROP_INERTIA * PROP_OMEGA * (es.np / 100);
      t.b.set(0, 0, -H);
      t.a.copy(this.omega).cross(t.b);
      M.sub(t.a);
    }

    // ---------------- Ala ----------------
    const flapDeg = this.surf.flap;
    const fr = flapDeg / 25;
    const dClFlap = 0.9 * Math.pow(clamp(fr, 0, 1.2), 0.85);
    const dCdFlap = 0.0011 * flapDeg + 0.00007 * flapDeg * flapDeg;
    const ail = this.surf.ail * DEG;
    let liftSum = 0;
    let qInf = 0.5 * rho * Vt * Vt;
    const coef = t.coef;
    const AR = SPEC.aspect;
    const kInd = 1 / (Math.PI * 0.8 * AR);
    const geFactor = ge; // 1 = fuori effetto suolo
    let stallMin = 1; // margine minimo all'incidenza di stallo (rad)
    for (const st of this.wingStrips) {
      const r = t.r.copy(st.pos).sub(this.cg);
      const vp = t.v.copy(this.omega).cross(r).add(vAirB);
      // spoiler: si alzano sull'ala che scende (alettone su)
      const ailLocal = st.ailFrac * ail * (st.side > 0 ? -1 : 1); // positivo = bordo d'uscita giù
      const spoil = st.spoiler * clamp(((st.side > 0 ? 1 : -1) * this.surf.ail - 4) / 14, 0, 1);
      const dCl = st.flapFrac * dClFlap + CLA_WING * 0.42 * ailLocal - 0.45 * spoil;
      const clmax = (1.6 + 1.0 * st.flapFrac * dClFlap) * st.tipLoss;
      const clmin = -1.05;
      for (let pass = 0; pass < 2; pass++) {
        let cov = 0;
        let extra = 0;
        if (pass === 0) {
          cov = 1 - Math.min(1, st.slipCov[0] + st.slipCov[1]);
        } else {
          const ce = st.slipCov[0] > 0 ? 0 : st.slipCov[1] > 0 ? 1 : -1;
          if (ce < 0) continue;
          cov = st.slipCov[ce];
          extra = 1.55 * this.engines[ce].vi;
        }
        if (cov <= 0) continue;
        const vf = -vp.z + extra;
        const vu = vp.y;
        const V2 = vf * vf + vu * vu;
        if (V2 < 0.01) continue;
        const V = Math.sqrt(V2);
        const alpha = Math.atan2(-vu, vf) + GEO.wing.incidence + (st.yc > 9 ? -1.2 * DEG : 0);
        airfoil(alpha, dCl, clmax, clmin, CLA_WING * st.tipLoss * (1 + 0.08 * (1 - geFactor)), A0_WING, 0.0085 + dCdFlap * st.flapFrac + 0.03 * spoil, coef);
        const qs = 0.5 * rho * V2 * st.area * cov;
        const cdi = coef.cl * coef.cl * kInd * geFactor * (1 - coef.sep);
        const L = qs * coef.cl;
        const D = qs * (coef.cd + cdi);
        // direzioni nel piano (avanti, su) del corpo
        const lx = -vu / V, ly = vf / V; // portanza: (avanti, su)
        const dx = -vf / V, dy = -vu / V; // resistenza
        const fFwd = L * lx + D * dx;
        const fUp = L * ly + D * dy;
        t.a.set(0, fUp, -fFwd);
        this._addBodyForce(t.a, r, F, M, q);
        // momento di beccheggio del profilo
        const cm = -0.085 - 0.22 * st.flapFrac * dClFlap;
        M.x += qs * GEO.wing.chord * cm * (1 - coef.sep * 0.5);
        if (pass === 0) liftSum += coef.cl * st.area * cov * (V2 / Math.max(Vt * Vt, 1));
        else liftSum += coef.cl * st.area * cov * (V2 / Math.max(Vt * Vt, 1));
        if (alpha > 0 && V > 15 && st.side !== 0) stallMin = Math.min(stallMin, coef.margin);
      }
    }
    const CLw = liftSum / SPEC.wingArea;
    o.clWing = CLw;
    this.prevCLw += (CLw - this.prevCLw) * clamp(dt * 8, 0, 1);

    // ---------------- Piano orizzontale ----------------
    const eps = clamp((2 * this.prevCLw) / (Math.PI * AR) * 1.05, -0.1, 0.32) * (0.45 + 0.55 * geFactor);
    const elev = -this.surf.elev * DEG; // positivo = bordo d'uscita giù
    const iT = -1.3 * DEG;
    for (const st of this.htStrips) {
      const r = t.r.copy(st.pos).sub(this.cg);
      const vp = t.v.copy(this.omega).cross(r).add(vAirB);
      const extra = st.slip * 1.25 * this.engines[st.eng].vi;
      const vf = -vp.z + extra;
      const vu = vp.y;
      const V2 = vf * vf + vu * vu;
      if (V2 < 0.01) continue;
      const V = Math.sqrt(V2);
      const alpha = Math.atan2(-vu, vf) + iT - eps;
      airfoil(alpha, CLA_HT * 0.55 * elev, 1.25, -1.25, CLA_HT, 0, 0.009, coef);
      const qs = 0.5 * rho * V2 * st.area * 0.95;
      const cdi = (coef.cl * coef.cl) / (Math.PI * 0.85 * 5.3);
      const L = qs * coef.cl;
      const D = qs * (coef.cd + cdi);
      const lx = -vu / V, ly = vf / V, dx = -vf / V, dy = -vu / V;
      t.a.set(0, L * ly + D * dy, -(L * lx + D * dx));
      this._addBodyForce(t.a, r, F, M, q);
    }

    // ---------------- Deriva + finlets ----------------
    const rud = this.surf.rud * DEG; // positivo = bordo d'uscita a destra
    for (const st of this.vtStrips) {
      const r = t.r.copy(st.pos).sub(this.cg);
      const vp = t.v.copy(this.omega).cross(r).add(vAirB);
      let extra = 0;
      if (st.finlet) extra = 1.1 * this.engines[st.finlet < 0 ? 0 : 1].vi;
      const vf = -vp.z + extra;
      const vn = vp.x;
      const V2 = vf * vf + vn * vn;
      if (V2 < 0.01) continue;
      const V = Math.sqrt(V2);
      const alpha = Math.atan2(-vn, vf);
      airfoil(alpha, st.rudder ? -CLA_VT * 0.5 * rud : 0, 1.15, -1.15, CLA_VT, 0, 0.01, coef);
      const qs = 0.5 * rho * V2 * st.area;
      const cdi = (coef.cl * coef.cl) / (Math.PI * 0.85 * 1.8);
      const L = qs * coef.cl;
      const D = qs * (coef.cd + cdi);
      const lx = -vn / V, ln = vf / V, dx = -vf / V, dn = -vn / V;
      t.a.set(L * ln + D * dn, 0, -(L * lx + D * dx));
      this._addBodyForce(t.a, r, F, M, q);
    }

    // ---------------- Fusoliera, carrello, sonde (aria) ----------------
    if (Vt > 0.5) {
      const vf = -vAirB.z, vu = vAirB.y, vs = vAirB.x;
      const alphaB = Math.atan2(-vu, Math.max(vf, 0.1));
      const betaB = Math.asin(clamp(vs / Vt, -1, 1));
      let cda = 3.0;
      cda *= 1 + 2.5 * Math.sin(alphaB) ** 2 + 3 * Math.sin(betaB) ** 2;
      cda += 1.25 * sys.gearPos + 0.12 * sys.probePos;
      for (let i = 0; i < 4; i++) cda += 0.22 * sys.doorOpen[i];
      t.a.copy(vAirB).normalize().multiplyScalar(-qInf * cda);
      t.r.copy(toBody(8.0, 1.9, 0)).sub(this.cg);
      this._addBodyForce(t.a, t.r, F, M, q);
      // forza laterale di fusoliera (destabilizzante, centro davanti al baricentro)
      const side = -qInf * 8.5 * Math.sin(betaB) * Math.cos(betaB);
      t.a.set(side, 0, 0);
      t.r.copy(toBody(5.6, 1.9, 0)).sub(this.cg);
      this._addBodyForce(t.a, t.r, F, M, q);
      // forza normale di fusoliera (instabilizzante in beccheggio)
      const nf = qInf * 2.4 * Math.sin(alphaB) * Math.cos(alphaB);
      t.a.set(0, nf, 0);
      t.r.copy(toBody(3.6, 1.9, 0)).sub(this.cg);
      this._addBodyForce(t.a, t.r, F, M, q);
      o.alpha = alphaB;
      o.beta = betaB;
    } else {
      o.alpha = 0;
      o.beta = 0;
    }
    // smorzamento aerodinamico residuo (fusoliera, interferenze)
    M.x -= 0.5 * rho * Math.max(Vt, 5) * 40 * 3.5 * 3.5 * this.omega.x * 1.2;
    M.y -= 0.5 * rho * Math.max(Vt, 5) * 60 * 4 * 4 * this.omega.y * 0.8;
    M.z -= 0.5 * rho * Math.max(Vt, 5) * 20 * this.omega.z;

    // ---------------- Idrodinamica ----------------
    this.sprayCount = 0;
    this._hydro(F, M, q, qi, dt);

    // ---------------- Carrello e contatti al suolo ----------------
    this._ground(F, M, q, qi, dt);

    // ---------------- Gravità ----------------
    const nonGrav = t.w.copy(F);
    F.y -= this.mass * G;

    // ---------------- Integrazione ----------------
    const acc = t.a.copy(F).divideScalar(this.mass);
    this.vel.addScaledVector(acc, dt);
    this.pos.addScaledVector(this.vel, dt);

    const I = this.inertia;
    const w = this.omega;
    // ω̇ = I⁻¹ (M − ω × Iω)
    const Iw = t.b.set(w.x * I.x, w.y * I.y, w.z * I.z);
    const gyro = t.c.copy(w).cross(Iw);
    w.x += ((M.x - gyro.x) / I.x) * dt;
    w.y += ((M.y - gyro.y) / I.y) * dt;
    w.z += ((M.z - gyro.z) / I.z) * dt;
    const maxW = 4;
    if (w.lengthSq() > maxW * maxW) w.setLength(maxW);
    const dq = t.q.set(w.x * dt * 0.5, w.y * dt * 0.5, w.z * dt * 0.5, 1);
    q.multiply(dq).normalize();

    // ---------------- Uscite ----------------
    const specific = nonGrav.applyQuaternion(qi).divideScalar(this.mass * G);
    o.nz = specific.y;
    o.ny = specific.x;
    o.slip = clamp(-specific.x * 4, -1, 1);
    o.overG = Math.max(o.nz - 3.25, -1 - o.nz, 0);
    if (o.nz > 4.6 || o.nz < -2.2) this._doCrash('Sovraccarico strutturale (' + o.nz.toFixed(1) + ' g)');
    this._outputs(Vt, rho, atm, stallMin);
  }

  _addBodyForce(fb, r, F, M, q) {
    // fb in assi corpo, r braccio in assi corpo
    const t = this._tmp;
    M.x += r.y * fb.z - r.z * fb.y;
    M.y += r.z * fb.x - r.x * fb.z;
    M.z += r.x * fb.y - r.y * fb.x;
    t.d.copy(fb).applyQuaternion(q);
    F.add(t.d);
  }

  _addWorldForce(fw, rb, F, M, qi) {
    // fw in assi mondo applicata nel punto rb (corpo, relativo al baricentro)
    const t = this._tmp;
    F.add(fw);
    const fb = t.d.copy(fw).applyQuaternion(qi);
    M.x += rb.y * fb.z - rb.z * fb.y;
    M.y += rb.z * fb.x - rb.x * fb.z;
    M.z += rb.x * fb.y - rb.y * fb.x;
  }

  // Velocità nel mondo di un punto del corpo (rb relativo al baricentro)
  _pointVel(rb, q, out) {
    out.copy(this.omega).cross(rb).applyQuaternion(q).add(this.vel);
    return out;
  }

  // ---------------------------------------------------------------------------
  _hydro(F, M, q, qi, dt) {
    const world = this.world;
    const o = this.out;
    const sys = this.sys;
    const h = this._h || (this._h = { rb: new V3(), pw: new V3(), vw: new V3(), vb: new V3(), fw: new V3(), fwd: new V3(), right: new V3() });
    const { rb, pw, vw, vb, fw } = h;
    let vol = 0;
    let wetMin = 99, wetMax = -99;
    let maxDepth = -9;
    let impact = 0;
    const horizSpeed = Math.hypot(this.vel.x, this.vel.z);
    const Cv = horizSpeed / Math.sqrt(G * 2.6);
    const hump = 0.17 * Math.pow(Cv / 2.4, 2) * Math.exp(1 - Math.pow(Cv / 2.4, 2));
    let anyWater = false;

    const process = (sp, isFloat) => {
      rb.copy(sp.pos).sub(this.cg);
      pw.copy(rb).applyQuaternion(q).add(this.pos);
      const ground = world.groundHeight(pw.x, pw.z);
      const surf = world.waterHeight(pw.x, pw.z, this.time);
      if (surf <= ground + 0.15) {
        sp.depth = -9;
        return;
      }
      // profondità della chiglia locale sotto la superficie
      const dCenter = surf - pw.y;
      const dk = dCenter + 0.5 * sp.chineRel;
      sp.depth = dk;
      if (dk <= 0) return;
      anyWater = true;
      maxDepth = Math.max(maxDepth, dk);
      const hc = sp.chineRel;
      let area, wetW, sideH = 0;
      if (dk < hc) {
        const halfW = dk / sp.tanb;
        area = 0.5 * dk * Math.min(halfW, sp.hb);
        wetW = Math.min(halfW, sp.hb) / Math.cos(sp.beta);
      } else {
        area = 0.5 * hc * sp.hb + sp.hb * (dk - hc);
        wetW = sp.hb / Math.cos(sp.beta);
        sideH = dk - hc;
      }
      if (isFloat) {
        const maxH = sp.sideH || 0.8;
        if (dk > maxH) area = 0.5 * hc * sp.hb + sp.hb * (maxH - hc); // galleggiante sommerso
      }
      const V = area * sp.ds;
      vol += V;
      if (!isFloat) {
        wetMin = Math.min(wetMin, sp.s);
        wetMax = Math.max(wetMax, sp.s);
      }
      // spinta di Archimede
      fw.set(0, RHO_WATER * G * V, 0);
      this._addWorldForce(fw, rb, F, M, qi);

      // velocità del punto rispetto all'acqua
      this._pointVel(rb, q, vw);
      vb.copy(vw).applyQuaternion(qi);
      const vn = vb.dot(sp.n);
      const vtx = vb.x - vn * sp.n.x;
      const vty = vb.y - vn * sp.n.y;
      const vtz = vb.z - vn * sp.n.z;
      const vt = Math.sqrt(vtx * vtx + vty * vty + vtz * vtz);
      const wetA = wetW * sp.ds;
      // pressione dinamica di planata (portanza ∝ V·vn) + resistenza di flusso trasversale
      let fn;
      if (vn > 0) {
        const cp = sp.fore ? 0.125 : 0.08;
        fn = RHO_WATER * wetA * (cp * vt * vn + 0.55 * vn * vn);
        if (dk < 0.35) impact = Math.max(impact, -vw.y);
      } else {
        fn = RHO_WATER * wetA * 0.02 * vt * vn; // leggera suzione
      }
      fw.copy(sp.n).multiplyScalar(-fn);
      // attrito + spruzzi lungo la superficie
      if (vt > 0.01) {
        const cf = 0.002 + 0.0007 * smoothstep(3, 15, vt);
        const fr = 0.5 * RHO_WATER * cf * (wetA + sideH * sp.ds) * vt;
        fw.x -= fr * vtx;
        fw.y -= fr * vty;
        fw.z -= fr * vtz;
      }
      // resistenza laterale della chiglia/fiancate
      const sideArea = (Math.min(dk, hc) * 0.7 + sideH) * sp.ds;
      fw.x -= 0.5 * RHO_WATER * 1.1 * sideArea * Math.abs(vb.x) * vb.x;
      fw.applyQuaternion(q);
      // resistenza d'onda (dislocamento)
      if (horizSpeed > 0.3) {
        const dw = RHO_WATER * G * V * hump;
        fw.x -= (dw * this.vel.x) / horizSpeed;
        fw.z -= (dw * this.vel.z) / horizSpeed;
      }
      this._addWorldForce(fw, rb, F, M, qi);

      // punti di spruzzo per la grafica
      if (this.sprayCount < this.sprayPoints.length && vt > 3) {
        const p = this.sprayPoints[this.sprayCount++];
        p.x = pw.x; p.y = surf; p.z = pw.z;
        p.intensity = clamp(vt / 30, 0, 1.5) * clamp(dk / 0.25, 0, 1);
        p.vx = vw.x; p.vz = vw.z; p.side = sp.side; p.s = sp.s; p.float = isFloat ? 1 : 0;
      }
    };

    for (const sp of this.hullSamples) process(sp, false);
    for (const sp of this.floatSamples) process(sp, true);

    o.onWater = anyWater;
    o.hullDepth = Math.max(maxDepth, 0);
    o.wetLength = wetMax > wetMin ? wetMax - wetMin + 0.5 : 0;
    o.displaced = vol;
    o.impact = impact;
    o.planing = anyWater && horizSpeed > 13 && vol * RHO_WATER < this.mass * 0.45;
    o.waterSpeed = anyWater ? horizSpeed : 0;
    if (anyWater && impact > 5.2) {
      this._doCrash(this._gearWaterT > 0 ? 'Ammaraggio con carrello estratto: capottamento' : 'Ammaraggio troppo duro (' + (impact / 0.00508).toFixed(0) + ' ft/min)');
    }

    // estremità alari in acqua
    o.wingtipWater = 0;

    // ---------------- Sonde ----------------
    let scoop = 0;
    let immersion = 0;
    const pp = sys.probePos;
    for (const pr of this.probes) {
      pr.tip.copy(pr.root);
      pr.tip.y -= 0.88 * pp;
      pr.tip.z += 0.12 * pp;
      pr.immersion = 0;
      if (pp < 0.05) continue;
      rb.copy(pr.tip).sub(this.cg);
      pw.copy(rb).applyQuaternion(q).add(this.pos);
      const surf = world.waterHeight(pw.x, pw.z, this.time);
      const ground = world.groundHeight(pw.x, pw.z);
      if (ground > pw.y && surf < ground + 0.1) {
        // sonda contro il terreno
        if (horizSpeed > 3) this.damage = Math.min(1, this.damage + dt * 0.5);
        continue;
      }
      if (surf <= ground + 0.3) continue;
      const d = surf - pw.y;
      if (d <= 0) continue;
      const frac = clamp(d / 0.32, 0, 1) * clamp((pp - 0.5) / 0.5, 0, 1);
      pr.immersion = frac;
      immersion = Math.max(immersion, frac);
      this._pointVel(rb, q, vw);
      vb.copy(vw).applyQuaternion(qi);
      const vfw = Math.max(-vb.z, 0);
      const Q = 0.0074 * vfw * frac; // m³/s
      const mdot = Q * RHO_WATER;
      scoop += Q;
      const sp = vw.length();
      const dragMom = mdot * vfw;
      const dragStrut = 0.5 * RHO_WATER * 0.0055 * frac * sp * sp;
      if (sp > 0.1) {
        fw.copy(vw).multiplyScalar(-(dragMom + dragStrut) / sp);
        this._addWorldForce(fw, rb, F, M, qi);
      }
    }
    const accepted = sys.addScoopedWater(scoop * 1000 * dt);
    o.scoopRate = scoop * 1000; // L/s
    o.scoopAccepted = accepted;
    o.probeImmersion = immersion;
  }

  // ---------------------------------------------------------------------------
  _ground(F, M, q, qi, dt) {
    const world = this.world;
    const sys = this.sys;
    const o = this.out;
    const h = this._h;
    const { rb, pw, vw, fw, fwd, right } = h;
    let onGround = false;
    o.gearInWater = false;
    const gearDown = sys.gearPos;
    const speed = this.vel.length();

    for (let i = 0; i < 3; i++) {
      const g = this.gearPts[i];
      g.load = 0;
      if (gearDown < 0.98) {
        g.comp = 0;
        continue;
      }
      rb.copy(g.pos).sub(this.cg);
      pw.copy(rb).applyQuaternion(q).add(this.pos);
      const ground = world.groundHeight(pw.x, pw.z);
      const surf = world.waterHeight(pw.x, pw.z, this.time);
      this._pointVel(rb, q, vw);
      // ruota in acqua: enorme resistenza (rischio capottamento)
      if (surf > ground && surf > pw.y - g.r) {
        const imm = clamp((surf - (pw.y - g.r)) / (2 * g.r), 0, 1.5);
        const v = vw.length();
        if (v > 0.1) {
          fw.copy(vw).multiplyScalar(-0.5 * RHO_WATER * 1.0 * g.drag * imm * v);
          this._addWorldForce(fw, rb, F, M, qi);
        }
        if (imm > 0.2 && v > 8) o.gearInWater = true;
      }
      const bottom = pw.y - g.r;
      const pen = ground - bottom;
      if (pen <= 0) {
        g.comp = Math.max(0, g.comp - dt * 2);
        g.spin *= 0.995;
        continue;
      }
      onGround = true;
      const comp = Math.min(pen, g.travel);
      const compRate = -vw.y;
      let N = g.k * comp + g.c * compRate;
      if (pen > g.travel) {
        // fondo corsa: urto rigido
        N += (pen - g.travel) * 6e6 + Math.max(compRate, 0) * 2e5;
        if (compRate > 3.6) this._doCrash('Atterraggio troppo duro: carrello collassato');
      }
      N = Math.max(N, 0);
      g.comp = comp;
      g.load = N;
      // direzione di rotolamento
      fwd.set(0, 0, -1).applyQuaternion(q);
      if (g.steer) {
        const steerMax = 55 * DEG * clamp(1 - speed / 30, 0.12, 1);
        const st = clamp(this.ctl.tiller * 1.0 + this.ctl.rudder * 0.25, -1, 1) * steerMax;
        sys.noseSteer = st;
        fwd.applyAxisAngle(t_up(q), -st);
      }
      fwd.y = 0;
      fwd.normalize();
      right.set(-fwd.z, 0, fwd.x);
      const vLong = vw.x * fwd.x + vw.z * fwd.z;
      const vLat = vw.x * right.x + vw.z * right.z;
      g.spin = vLong / g.r;
      let brake = 0;
      if (g.brake === 'L') brake = this.ctl.brakeL;
      if (g.brake === 'R') brake = this.ctl.brakeR;
      if (sys.parkingBrake) brake = 1;
      const surfaceMu = world.surfaceFriction ? world.surfaceFriction(pw.x, pw.z) : 1;
      const muRoll = 0.018 * (2 - surfaceMu);
      const muBrake = 0.55 * surfaceMu;
      let fLong = -Math.tanh(vLong / 0.4) * N * (muRoll + muBrake * brake);
      if (brake > 0.5 && Math.abs(vLong) < 0.6) fLong = -vLong * N * 1.2; // tenuta da fermo
      const fLat = -Math.tanh(vLat / 0.18) * N * 0.75 * surfaceMu;
      fw.set(0, N, 0);
      fw.addScaledVector(fwd, fLong);
      fw.addScaledVector(right, fLat);
      this._addWorldForce(fw, rb, F, M, qi);
    }
    for (let i = 0; i < 3; i++) {
      o.gearLoad[i] = this.gearPts[i].load;
      o.gearCompress[i] = this.gearPts[i].comp;
      o.wheelSpeed[i] = this.gearPts[i].spin;
    }

    // contatti strutturali
    for (const sp of this.structPoints) {
      rb.copy(sp.pos).sub(this.cg);
      pw.copy(rb).applyQuaternion(q).add(this.pos);
      const ground = world.groundHeight(pw.x, pw.z);
      const surf = world.waterHeight(pw.x, pw.z, this.time);
      this._pointVel(rb, q, vw);
      const hSpeed = Math.hypot(vw.x, vw.z);
      if (sp.kind === 'wingtip') {
        if (surf > ground && pw.y < surf + 0.05 && hSpeed > 9) {
          o.wingtipWater = 1;
          this._doCrash("Estremità alare in acqua: l'aereo ha fatto la 'ruota'");
          return;
        }
      }
      const pen = ground - pw.y;
      if (pen <= 0) continue;
      onGround = true;
      const vy = vw.y;
      if (sp.kind === 'wingtip' || sp.kind === 'tail') {
        if (hSpeed > 6 || vy < -2) {
          this._doCrash(sp.kind === 'wingtip' ? 'Ala contro il terreno' : 'Coda contro il terreno');
          return;
        }
      }
      if (sp.kind === 'hull' && surf <= ground + 0.3) {
        if (-vy > 4 || hSpeed > 45 * KT) {
          this._doCrash(gearDown < 0.98 ? 'Atterraggio sul ventre: carrello non estratto' : 'Impatto con il terreno');
          return;
        }
        this.damage = Math.min(1, this.damage + dt * hSpeed * 0.02);
      }
      if (-vy > 7) {
        this._doCrash('Impatto con il terreno');
        return;
      }
      const N = Math.max(0, pen * 3e6 - vy * 2.5e5);
      fw.set(0, N, 0);
      if (hSpeed > 0.01) {
        const mu = 0.45;
        fw.x -= (mu * N * vw.x) / Math.max(hSpeed, 0.5);
        fw.z -= (mu * N * vw.z) / Math.max(hSpeed, 0.5);
      }
      this._addWorldForce(fw, rb, F, M, qi);
    }

    // eliche contro acqua o terreno
    for (const eng of this.engines) {
      rb.copy(eng.pos).sub(this.cg);
      rb.y -= SPEC.propDiameter / 2;
      pw.copy(rb).applyQuaternion(q).add(this.pos);
      const ground = world.groundHeight(pw.x, pw.z);
      const surf = world.waterHeight(pw.x, pw.z, this.time);
      if (pw.y < Math.max(ground, surf) - 0.05 && Math.abs(eng.thrust) > 500) {
        this._doCrash(surf > ground ? "Eliche in acqua" : 'Eliche contro il terreno');
        return;
      }
    }

    o.onGround = onGround;
    this._gearWaterT = o.gearInWater ? 3 : Math.max(0, (this._gearWaterT || 0) - dt);
    if (o.gearInWater && speed > 20 && !this.crash) {
      // capottamento quasi certo: lasciamo agire la fisica, ma oltre un certo assetto è incidente
      const pitch = Math.asin(clamp(new V3(0, 0, -1).applyQuaternion(q).y, -1, 1));
      if (pitch < -25 * DEG) this._doCrash('Ammaraggio con carrello estratto: capottamento');
    }
  }

  _doCrash(reason) {
    if (this.crash) return;
    this.crash = { reason, time: this.time, pos: this.pos.clone(), vel: this.vel.clone() };
  }

  _outputs(Vt, rho, atm, stallMin) {
    const o = this.out;
    const q = this.quat;
    const fwd = this._tmp.fwd.set(0, 0, -1).applyQuaternion(q);
    const up = this._tmp.up.set(0, 1, 0).applyQuaternion(q);
    const right = this._tmp.right.set(1, 0, 0).applyQuaternion(q);
    o.tas = Vt;
    o.ias = Vt * Math.sqrt(rho / 1.225);
    o.gs = Math.hypot(this.vel.x, this.vel.z);
    o.mach = Vt / atm.a;
    o.alt = this.pos.y;
    o.vs = this.vel.y;
    o.pitch = Math.asin(clamp(fwd.y, -1, 1));
    o.roll = Math.atan2(-right.y, up.y);
    let hdg = Math.atan2(fwd.x, -fwd.z);
    if (hdg < 0) hdg += 2 * Math.PI;
    o.heading = hdg;
    let trk = Math.atan2(this.vel.x, -this.vel.z);
    if (trk < 0) trk += 2 * Math.PI;
    o.track = trk;
    o.turnRate = -this.omega.y * up.y; // rad/s (destra positiva)
    // radioaltimetro: altezza della chiglia sulla superficie
    const keelY = this.pos.y + (-GEO.hCG - this.cg.y) * up.y;
    o.radAlt = keelY - Math.max(o.groundBelow, o.waterBelow);
    o.agl = o.radAlt;
    o.stallMargin = stallMin;
    o.stall = stallMin < 4.2 * DEG && !o.onGround && !o.onWater && o.ias > 10;
  }
}

const _upTmp = new V3();
function t_up(q) {
  return _upTmp.set(0, 1, 0).applyQuaternion(q);
}
