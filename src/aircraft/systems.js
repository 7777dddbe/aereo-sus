// Impianti di bordo del CL-415: motori PW123AF, flap, carrello anfibio, sonde di pescaggio,
// serbatoi d'acqua con 4 portelli, schiumogeno, carburante, trim e avvisi.

import { clamp, approach } from '../core/math.js';
import { G, KT, isa } from '../core/constants.js';
import { SPEC, GEO } from './specs.js';

export const DROP_MODES = [
  { id: 'SALVO', label: 'SALVO (4 porte)' },
  { id: 'COPPIE', label: '2 + 2 porte' },
  { id: 'SEQ', label: 'SEQUENZA 1-2-3-4' },
  { id: 'SINGOLA', label: '1 porta' },
];

const TANK_CAP = SPEC.waterCapacity / 4;
const TANK_AREA = TANK_CAP / 1000 / 1.25; // m² (altezza utile ~1.25 m)
const DOOR_CDA = 0.42; // m² efficaci di ogni portello

class Engine {
  constructor(index) {
    this.index = index;
    this.lever = 0.0; // 0 = flight idle, 1 = potenza massima
    this.reverseLever = 0; // 0..1 reverse (solo a terra/in acqua)
    this.reverse = 0;
    this.running = true;
    this.nh = 70;
    this.np = 100;
    this.pf = 0.06;
    this.shaftPower = 0;
    this.torque = 0;
    this.itt = 500;
    this.ff = 0;
    this.oilP = 60;
    this.oilT = 70;
    this.feathered = false;
    this.fire = false;
  }

  update(dt, oatC, alt, ground) {
    if (!this.running) {
      this.nh = approach(this.nh, 0, 6, dt);
      this.pf = 0;
      this.np = approach(this.np, this.feathered ? 0 : 20, 15, dt);
      this.shaftPower = 0;
      this.torque = 0;
      this.itt = approach(this.itt, oatC + 40, 30, dt);
      this.ff = 0;
      this.oilP = approach(this.oilP, 0, 20, dt);
      return;
    }
    const rev = ground ? this.reverseLever : 0;
    this.reverse = approach(this.reverse, rev, 0.8, dt);
    const lever = rev > 0 ? 0.05 + 0.45 * rev : this.lever;
    const pfTarget = 0.055 + 0.945 * clamp(lever, 0, 1);
    const nhTarget = 68 + 32 * Math.pow(pfTarget, 0.6);
    // dinamica del generatore di gas: accelera più lentamente di quanto decelera
    const rate = nhTarget > this.nh ? 6.5 + 0.12 * (this.nh - 66) : 11;
    this.nh = approach(this.nh, nhTarget, rate, dt);
    this.pf = clamp(Math.pow(clamp((this.nh - 68) / 32, 0, 1), 1 / 0.6), 0.0, 1.0);
    const derate = clamp(1 - (1 - isa(alt).rho / 1.225) * 0.6, 0.5, 1) * (1 - Math.max(0, oatC - 30) * 0.008);
    this.shaftPower = this.reverse > 0.02 ? 0 : this.pf * SPEC.enginePower * derate;
    this.np = approach(this.np, this.pf > 0.08 || !ground ? 100 : 86, 12, dt);
    this.torque = (this.pf * derate * 100) / (this.np / 100);
    this.itt = approach(this.itt, oatC + 470 + 330 * this.pf * (1 + (1 - derate) * 0.6), 120, dt);
    this.ff = 115 + 540 * this.pf;
    this.oilP = approach(this.oilP, 55 + 10 * this.pf, 10, dt);
    this.oilT = approach(this.oilT, 62 + 25 * this.pf, 0.3, dt);
  }
}

export class Systems {
  constructor() {
    this.fuel = 2300;
    this.tanks = [0, 0, 0, 0];
    this.foamConc = SPEC.foamCapacity;
    this.foamMix = [0, 0, 0, 0]; // frazione di schiuma presente in ogni serbatoio (0..1)
    this.foamArmed = false;
    this.flapIndex = 0;
    this.flapPos = 0;
    this.gearDown = true;
    this.gearPos = 1;
    this.probesCmd = false;
    this.probePos = 0;
    this.doorOpen = [0, 0, 0, 0];
    this.doorCmd = [false, false, false, false];
    this.doorEmptyTime = [0, 0, 0, 0];
    this.outflow = [0, 0, 0, 0]; // L/s
    this.dropMode = 0;
    this.dropQueue = [];
    this.scoopPreset = 1.0;
    this.engines = [new Engine(0), new Engine(1)];
    this.elevTrim = 0;
    this.ailTrim = 0.15; // compensa la coppia delle eliche (rotazione concorde)
    this.rudTrim = 0;
    this.parkingBrake = false;
    this.noseSteer = 0;
    this.lights = { nav: true, beacon: true, strobe: true, landing: false };
    this.events = [];
    this.warn = {
      stall: false, overspeed: false, flapSpeed: false, gearWater: false, gearUpLand: false,
      probeSpeed: false, tanksFull: false, lowFuel: false, overweight: false, master: false, caution: false,
    };
    this.scoopedThisRun = 0;
    this.totalDropped = 0;
    this.overflowRate = 0;
    this.time = 0;
    this._wasScooping = false;
    this._fullAnnounced = false;
  }

  emit(type, text, level = 'info') {
    this.events.push({ type, text, level, t: this.time });
  }

  waterLiters() {
    return this.tanks[0] + this.tanks[1] + this.tanks[2] + this.tanks[3];
  }
  waterMass() {
    return this.waterLiters() * 1.0 + this.foamConc * 1.05;
  }
  totalMass() {
    return SPEC.emptyMass + this.fuel + this.waterMass();
  }

  // ---------------------------------------------------------------------------
  // Comandi
  setFlaps(dir) {
    const n = SPEC.flapDetents.length;
    const ni = clamp(this.flapIndex + dir, 0, n - 1);
    if (ni !== this.flapIndex) {
      this.flapIndex = ni;
      this.emit('flaps', `Flap ${SPEC.flapDetents[ni]}°`);
    }
  }
  toggleGear(fm) {
    if (this.gearDown && fm && (fm.out.onGround)) {
      this.emit('warn', 'Carrello bloccato: aereo a terra (sicurezza WOW)', 'caution');
      return;
    }
    this.gearDown = !this.gearDown;
    this.emit('gear', this.gearDown ? 'Carrello: ESTRAZIONE' : 'Carrello: RETRAZIONE');
  }
  toggleProbes(fm) {
    this.probesCmd = !this.probesCmd;
    if (this.probesCmd && fm && fm.out.ias > SPEC.vProbeMax * KT) {
      this.emit('warn', 'Velocità eccessiva per le sonde!', 'caution');
    }
    this.emit('probes', this.probesCmd ? 'Sonde: ESTESE' : 'Sonde: RETRATTE');
  }
  cycleDropMode() {
    this.dropMode = (this.dropMode + 1) % DROP_MODES.length;
    this.emit('mode', 'Modalità sgancio: ' + DROP_MODES[this.dropMode].label);
  }
  cycleScoopPreset() {
    const p = [0.25, 0.5, 0.75, 1.0];
    const i = (p.indexOf(this.scoopPreset) + 1) % p.length;
    this.scoopPreset = p[i];
    this.emit('preset', `Quantità di pescaggio preselezionata: ${Math.round(this.scoopPreset * 100)}% (${Math.round(this.scoopPreset * SPEC.waterCapacity)} L)`);
  }
  toggleFoam() {
    this.foamArmed = !this.foamArmed;
    this.emit('foam', this.foamArmed ? 'Schiumogeno: ARMATO' : 'Schiumogeno: DISINSERITO');
  }
  drop() {
    if (this.waterLiters() < 5) {
      this.emit('warn', 'Serbatoi vuoti', 'caution');
      return;
    }
    const mode = DROP_MODES[this.dropMode].id;
    const t = this.time;
    const nonEmpty = [0, 1, 2, 3].filter((i) => this.tanks[i] > 5 && !this.doorCmd[i]);
    if (!nonEmpty.length) return;
    if (mode === 'SALVO') nonEmpty.forEach((i) => this.dropQueue.push({ i, t }));
    else if (mode === 'COPPIE') {
      const front = nonEmpty.filter((i) => i < 2);
      const rear = nonEmpty.filter((i) => i >= 2);
      const first = front.length ? front : rear;
      first.forEach((i) => this.dropQueue.push({ i, t }));
      if (front.length && rear.length) rear.forEach((i) => this.dropQueue.push({ i, t: t + 0.45 }));
    } else if (mode === 'SEQ') {
      nonEmpty.forEach((i, k) => this.dropQueue.push({ i, t: t + k * 0.32 }));
    } else {
      this.dropQueue.push({ i: nonEmpty[0], t });
    }
    this.emit('drop', 'SGANCIO!', 'drop');
  }

  addScoopedWater(liters) {
    if (liters <= 0) {
      this.overflowRate = 0;
      return 0;
    }
    const cap = TANK_CAP;
    const total = this.waterLiters();
    const limit = Math.min(SPEC.waterCapacity, Math.max(this.scoopPreset * SPEC.waterCapacity, total));
    let accept = Math.max(0, Math.min(liters, SPEC.waterCapacity - total));
    // le porte aperte non trattengono acqua
    let acc = 0;
    for (let i = 0; i < 4; i++) {
      if (this.doorOpen[i] > 0.1) continue;
      const add = Math.min(accept / 4, cap - this.tanks[i]);
      this.tanks[i] += add;
      acc += add;
    }
    this.overflowRate = (liters - acc) / Math.max(1e-6, 1 / 240);
    this.scoopedThisRun += acc;
    if (this.waterLiters() >= limit - 2 && this.probesCmd) {
      // ritrazione automatica alla quantità preselezionata
      this.probesCmd = false;
      this.emit('scoopdone', `Quantità raggiunta: ${Math.round(this.waterLiters())} L — sonde retratte automaticamente`, 'good');
    }
    return acc;
  }

  // ---------------------------------------------------------------------------
  update(dt, fm) {
    this.time += dt;
    const o = fm.out;
    const ground = o.onGround || o.onWater;
    const oat = isa(fm.pos.y).T - 273.15 + 13; // giornata estiva
    for (const e of this.engines) e.update(dt, oat, fm.pos.y, ground);

    // Flap idraulici (~2.2°/s)
    const flapTarget = SPEC.flapDetents[this.flapIndex];
    this.flapPos = approach(this.flapPos, flapTarget, 2.2, dt);
    // Carrello (~11 s)
    this.gearPos = approach(this.gearPos, this.gearDown ? 1 : 0, 1 / 11, dt);
    // Sonde (~1.8 s); la pressione dell'acqua rallenta l'estensione ad alta velocità
    this.probePos = approach(this.probePos, this.probesCmd ? 1 : 0, 1 / 1.8, dt);

    // Programmazione apertura portelli
    for (let k = this.dropQueue.length - 1; k >= 0; k--) {
      const d = this.dropQueue[k];
      if (this.time >= d.t) {
        this.doorCmd[d.i] = true;
        this.doorEmptyTime[d.i] = 0;
        this.dropQueue.splice(k, 1);
      }
    }
    // Portelli e deflusso (Torricelli con fattore di carico)
    const gEff = Math.max(0.05, o.nz) * G;
    for (let i = 0; i < 4; i++) {
      this.doorOpen[i] = approach(this.doorOpen[i], this.doorCmd[i] ? 1 : 0, this.doorCmd[i] ? 5 : 1.6, dt);
      this.outflow[i] = 0;
      if (this.doorOpen[i] > 0.02 && this.tanks[i] > 0) {
        const head = this.tanks[i] / 1000 / TANK_AREA + 0.12;
        const Q = DOOR_CDA * this.doorOpen[i] * Math.sqrt(2 * gEff * head); // m³/s
        const dL = Math.min(this.tanks[i], Q * 1000 * dt);
        this.tanks[i] -= dL;
        this.outflow[i] = dL / dt;
        this.totalDropped += dL;
        if (this.tanks[i] <= 0.5) {
          this.tanks[i] = 0;
          this.foamMix[i] = 0;
        }
      }
      if (this.doorCmd[i] && this.tanks[i] <= 0.5) {
        this.doorEmptyTime[i] += dt;
        if (this.doorEmptyTime[i] > 1.2) this.doorCmd[i] = false;
      }
    }

    // Schiumogeno: iniettato automaticamente nei serbatoi con acqua (0.5% circa)
    if (this.foamArmed && this.foamConc > 0) {
      for (let i = 0; i < 4; i++) {
        if (this.tanks[i] > 50 && this.foamMix[i] < 1) {
          const need = this.tanks[i] * 0.005 * (1 - this.foamMix[i]);
          const inj = Math.min(need, 8 * dt, this.foamConc);
          this.foamConc -= inj;
          this.foamMix[i] = clamp(this.foamMix[i] + inj / (this.tanks[i] * 0.005), 0, 1);
        }
      }
    }

    // Carburante
    const burn = ((this.engines[0].ff + this.engines[1].ff) / 3600) * dt;
    this.fuel = Math.max(0, this.fuel - burn);
    if (this.fuel <= 0) this.engines.forEach((e) => (e.running = false));

    // Avvisi
    const w = this.warn;
    const iasKt = o.ias / KT;
    w.stall = o.stall;
    w.overspeed = iasKt > SPEC.vmo;
    const vfe = this.flapPos > 1 ? SPEC.vfe[SPEC.flapDetents[Math.max(1, this.flapIndex)]] || 125 : 999;
    w.flapSpeed = iasKt > vfe + 3;
    w.gearWater = this.gearPos > 0.5 && o.surfaceUnder === 'water' && o.radAlt < 120 && o.vs < -0.5 && !o.onGround && !o.onWater;
    w.gearUpLand = this.gearPos < 0.99 && o.surfaceUnder === 'land' && o.radAlt < 150 && this.flapPos > 20 && o.vs < -0.5;
    w.probeSpeed = this.probePos > 0.1 && iasKt > SPEC.vProbeMax;
    const full = this.waterLiters() >= SPEC.waterCapacity - 3;
    if (full && !this._fullAnnounced) {
      this._fullAnnounced = true;
      this.emit('full', 'SERBATOI PIENI — ritrarre le sonde!', 'good');
    }
    if (this.waterLiters() < SPEC.waterCapacity - 300) this._fullAnnounced = false;
    w.tanksFull = full && this.probePos > 0.2;
    w.lowFuel = this.fuel < 400;
    w.overweight = this.totalMass() > SPEC.maxAfterScoop;
    w.master = w.stall || w.overspeed || w.gearWater || w.gearUpLand;
    w.caution = w.flapSpeed || w.probeSpeed || w.lowFuel || w.overweight || w.tanksFull;

    const scooping = o.scoopRate > 20;
    if (scooping && !this._wasScooping) {
      this.scoopedThisRun = 0;
      this.emit('scoop', 'Pescaggio in corso…', 'info');
    }
    this._wasScooping = scooping;
  }
}

export { TANK_CAP };
