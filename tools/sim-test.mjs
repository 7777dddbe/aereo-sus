// Banco prova del modello di volo (Node). Esegue scenari e stampa le prestazioni per la taratura.
import * as THREE from 'three';
import { FlightModel } from '../src/aircraft/flightmodel.js';
import { Systems } from '../src/aircraft/systems.js';
import { KT, FT, FPM } from '../src/core/constants.js';
import { DEG, RAD, clamp } from '../src/core/math.js';

function makeWorld(kind) {
  return {
    groundHeight: () => (kind === 'lake' ? -20 : 0),
    waterHeight: () => (kind === 'lake' ? 0 : -50),
    windAt: (x, y, z, t, out) => out.set(0, 0, 0),
    surfaceFriction: () => 1,
  };
}

function setup(kind, { water = 0, fuel = 2300 } = {}) {
  const fm = new FlightModel(makeWorld(kind));
  const sys = new Systems();
  sys.fuel = fuel;
  for (let i = 0; i < 4; i++) sys.tanks[i] = water / 4;
  fm.sys = sys;
  return { fm, sys };
}

// semplice autopilota per i test
class AP {
  constructor() {
    this.iP = 0;
  }
  run(fm, dt, { pitch = null, vs = null, roll = 0, hdg = null }) {
    const o = fm.out;
    let pitchCmd = pitch;
    if (vs !== null) pitchCmd = clamp(o.pitch + (vs - o.vs) * 0.02, -15 * DEG, 20 * DEG);
    if (pitchCmd !== null) {
      const e = pitchCmd - o.pitch;
      this.iP = clamp(this.iP + e * dt * 1.5, -1, 1);
      fm.ctl.elevator = clamp(e * 6 - fm.omega.x * 2.5 + this.iP, -1, 1);
    }
    const eR = roll - o.roll;
    fm.ctl.aileron = clamp(eR * 3 + fm.omega.z * 1.5, -1, 1);
    fm.ctl.rudder = clamp(-o.beta * 4, -1, 1);
  }
}

function run(fm, seconds, fn) {
  const dt = fm.dt;
  const n = Math.round(seconds / dt);
  for (let i = 0; i < n; i++) {
    if (fn) fn(i * dt);
    fm.step(dt);
    if (fm.crash) return false;
  }
  return true;
}

const kt = (v) => (v / KT).toFixed(1);
const ft = (v) => (v / FT).toFixed(0);
const fpm = (v) => (v / FPM).toFixed(0);

function level(speedKt, flapIdx = 0, water = 0, gear = false) {
  const { fm, sys } = setup('lake', { water });
  sys.gearDown = gear;
  sys.gearPos = gear ? 1 : 0;
  sys.flapIndex = flapIdx;
  sys.flapPos = [0, 10, 15, 25][flapIdx];
  fm.reset(new THREE.Vector3(0, 900, 0), 0, speedKt * KT, 'air');
  const ap = new AP();
  let thr = 0.6;
  let iT = 0;
  run(fm, 70, (t) => {
    ap.run(fm, fm.dt, { vs: 0 });
    const e = speedKt * KT - fm.out.ias;
    iT += e * fm.dt * 0.01;
    thr = clamp(0.5 + e * 0.05 + iT, 0, 1);
    sys.engines.forEach((en) => (en.lever = thr));
  });
  const o = fm.out;
  return `${speedKt}kt flap${[0, 10, 15, 25][flapIdx]} m=${fm.mass.toFixed(0)}: IAS ${kt(o.ias)} VS ${fpm(o.vs)} pitch ${(o.pitch * RAD).toFixed(1)} AoA ${(o.alpha * RAD).toFixed(1)} elev ${fm.ctl.elevator.toFixed(2)} thr ${thr.toFixed(2)} torque ${sys.engines[0].torque.toFixed(0)}% T ${(o.thrust[0] / 1000).toFixed(1)}kN CLw ${o.clWing.toFixed(2)} nz ${o.nz.toFixed(2)}`;
}

function stall(flapIdx, water = 0) {
  const { fm, sys } = setup('lake', { water });
  sys.gearDown = false;
  sys.gearPos = 0;
  sys.flapIndex = flapIdx;
  sys.flapPos = [0, 10, 15, 25][flapIdx];
  fm.reset(new THREE.Vector3(0, 1500, 0), 0, 110 * KT, 'air');
  const ap = new AP();
  sys.engines.forEach((en) => (en.lever = 0));
  let stallIas = null, minIas = 999, stallWarn = null;
  run(fm, 60, (t) => {
    // riduce la velocità di ~1 kt/s mantenendo la quota con la cloche
    ap.run(fm, fm.dt, { vs: 0 });
    minIas = Math.min(minIas, fm.out.ias);
    if (fm.out.stall && stallWarn === null) stallWarn = fm.out.ias;
    if (stallIas === null && fm.out.vs < -5) stallIas = fm.out.ias;
  });
  return `Stallo flap ${[0, 10, 15, 25][flapIdx]} m=${fm.mass.toFixed(0)}: avviso a ${stallWarn ? kt(stallWarn) : '-'} kt, perdita quota a ${stallIas ? kt(stallIas) : '-'} kt, IAS minima ${kt(minIas)}`;
}

function maxSpeed() {
  const { fm, sys } = setup('lake');
  sys.gearDown = false;
  sys.gearPos = 0;
  fm.reset(new THREE.Vector3(0, 3000, 0), 0, 150 * KT, 'air');
  const ap = new AP();
  sys.engines.forEach((en) => (en.lever = 1));
  run(fm, 150, () => ap.run(fm, fm.dt, { vs: 0 }));
  return `Velocità max livellata a 3000 m (10000 ft): IAS ${kt(fm.out.ias)} TAS ${kt(fm.out.tas)}`;
}

function climb(water = 0) {
  const { fm, sys } = setup('lake', { water });
  sys.gearDown = false;
  sys.gearPos = 0;
  fm.reset(new THREE.Vector3(0, 300, 0), 0, 125 * KT, 'air');
  const ap = new AP();
  sys.engines.forEach((en) => (en.lever = 1));
  run(fm, 40, () => ap.run(fm, fm.dt, { pitch: (water ? 5 : 7) * DEG }));
  return `Salita potenza max m=${fm.mass.toFixed(0)}: IAS ${kt(fm.out.ias)} VS ${fpm(fm.out.vs)} ft/min`;
}

function takeoffRunway() {
  const { fm, sys } = setup('runway');
  sys.flapIndex = 1;
  sys.flapPos = 10;
  fm.reset(new THREE.Vector3(0, 0, 0), 0, 0, 'runway');
  // assestamento
  sys.engines.forEach((en) => (en.lever = 0));
  run(fm, 4);
  const startZ = fm.pos.z;
  const p0 = fm.pos.y;
  const o = fm.out;
  let liftoff = null;
  const ap = new AP();
  sys.engines.forEach((en) => (en.lever = 1));
  let t50 = null;
  let ok = run(fm, 60, (t) => {
    if (o.ias > 78 * KT) ap.run(fm, fm.dt, { pitch: 8 * DEG });
    else { fm.ctl.elevator = 0; fm.ctl.rudder = clamp(-o.beta * 3 - fm.omega.y * -2, -1, 1); fm.ctl.tiller = 0; }
    if (!liftoff && !o.onGround && o.radAlt > 1.0) liftoff = { d: startZ - fm.pos.z, v: o.ias, t };
    if (!t50 && o.radAlt > 15) t50 = { d: startZ - fm.pos.z };
  });
  return `Decollo da pista (flap 10, ${fm.mass.toFixed(0)} kg): distacco ${liftoff ? liftoff.d.toFixed(0) + ' m a ' + kt(liftoff.v) + ' kt dopo ' + liftoff.t.toFixed(1) + ' s' : 'NO'}, 50ft a ${t50 ? t50.d.toFixed(0) + ' m' : '-'} ${ok ? '' : 'CRASH ' + fm.crash.reason}`;
}

function floatTest(water = 0) {
  const { fm, sys } = setup('lake', { water });
  fm.reset(new THREE.Vector3(0, 0, 0), 0, 0, 'water');
  sys.gearDown = false;
  sys.gearPos = 0;
  sys.engines.forEach((en) => (en.lever = 0));
  let minY = 99, maxY = -99;
  const ok = run(fm, 30, (t) => {
    if (t > 20) {
      minY = Math.min(minY, fm.pos.y);
      maxY = Math.max(maxY, fm.pos.y);
    }
  });
  const o = fm.out;
  return `Galleggiamento m=${fm.mass.toFixed(0)}: pescaggio chiglia ${o.hullDepth.toFixed(2)} m, assetto ${(o.pitch * RAD).toFixed(1)}°, rollio ${(o.roll * RAD).toFixed(1)}°, oscillazione ${(maxY - minY).toFixed(3)} m, vel ${o.gs.toFixed(2)} ${ok ? '' : 'CRASH ' + fm.crash.reason}`;
}

function waterTakeoff(water = 0, flap = 2) {
  const { fm, sys } = setup('lake', { water });
  sys.gearDown = false;
  sys.gearPos = 0;
  sys.flapIndex = flap;
  sys.flapPos = [0, 10, 15, 25][flap];
  fm.reset(new THREE.Vector3(0, 0, 0), 0, 0, 'water');
  sys.engines.forEach((en) => (en.lever = 0));
  run(fm, 10);
  const o = fm.out;
  const startZ = fm.pos.z;
  const ap = new AP();
  sys.engines.forEach((en) => (en.lever = 1));
  let liftoff = null;
  let hump = null;
  let planing = null;
  let maxPitch = -99, minPitch = 99;
  let log = [];
  const ok = run(fm, 70, (t) => {
    const ias = o.ias / KT;
    if (ias < 40) { fm.ctl.elevator = 0.6; }
    else if (ias < 72) ap.run(fm, fm.dt, { pitch: 5 * DEG });
    else ap.run(fm, fm.dt, { pitch: 8 * DEG });
    fm.ctl.rudder = clamp(-o.beta * 3, -1, 1);
    maxPitch = Math.max(maxPitch, o.pitch);
    if (o.onWater) minPitch = Math.min(minPitch, o.pitch);
    if (!planing && o.planing) planing = { t, v: ias };
    if (!liftoff && !o.onWater && o.radAlt > 0.5 && t > 2) liftoff = { d: startZ - fm.pos.z, v: o.ias, t };
    if (Math.abs(t % 3) < fm.dt * 0.99) log.push(`${t.toFixed(0)}s ${ias.toFixed(0)}kt p${(o.pitch * RAD).toFixed(1)} d${o.hullDepth.toFixed(2)} wl${o.wetLength.toFixed(1)}`);
  });
  return `Decollo dall'acqua (flap ${[0, 10, 15, 25][flap]}, ${fm.mass.toFixed(0)} kg): planata a ${planing ? planing.v.toFixed(0) + ' kt (' + planing.t.toFixed(1) + ' s)' : '-'}, distacco ${liftoff ? liftoff.d.toFixed(0) + ' m a ' + kt(liftoff.v) + ' kt dopo ' + liftoff.t.toFixed(1) + ' s' : 'NO'}, pitch max ${(maxPitch * RAD).toFixed(1)} min ${(minPitch * RAD).toFixed(1)} ${ok ? '' : 'CRASH ' + fm.crash.reason}\n   ${log.join(' | ')}`;
}

function scoopRun() {
  const { fm, sys } = setup('lake');
  sys.gearDown = false;
  sys.gearPos = 0;
  sys.flapIndex = 2;
  sys.flapPos = 15;
  // in planata a 75 kt
  fm.reset(new THREE.Vector3(0, 0, 0), 0, 75 * KT, 'water');
  const o = fm.out;
  const ap = new AP();
  sys.engines.forEach((en) => (en.lever = 0.55));
  let log = [];
  let full = null;
  let t0 = null;
  const z0 = fm.pos.z;
  const ok = run(fm, 40, (t) => {
    // mantiene assetto di planata ~5°
    ap.run(fm, fm.dt, { pitch: 5 * DEG });
    if (t > 4 && !sys.probesCmd && sys.waterLiters() < 10) {
      sys.probesCmd = true;
      sys.engines.forEach((en) => (en.lever = 1));
    }
    if (t0 === null && o.scoopRate > 10) t0 = { t, z: fm.pos.z };
    if (!full && sys.waterLiters() >= 6100) full = { t: t - (t0 ? t0.t : 0), d: t0 ? t0.z - fm.pos.z : 0, v: o.ias };
    if (Math.abs(t % 2) < fm.dt * 0.99) log.push(`${t.toFixed(0)}s ${(o.ias / KT).toFixed(0)}kt ${sys.waterLiters().toFixed(0)}L p${(o.pitch * RAD).toFixed(1)} ${o.onWater ? 'W' : 'A'} d${o.hullDepth.toFixed(2)}`);
  });
  return `Pescaggio: pieno in ${full ? full.t.toFixed(1) + ' s su ' + full.d.toFixed(0) + ' m, IAS finale ' + kt(full.v) : 'NO (' + sys.waterLiters().toFixed(0) + ' L)'} ${ok ? '' : 'CRASH ' + fm.crash.reason}\n   ${log.join(' | ')}`;
}

function dropTest() {
  const { fm, sys } = setup('lake', { water: 6137 });
  sys.gearDown = false;
  sys.gearPos = 0;
  sys.flapIndex = 2;
  sys.flapPos = 15;
  fm.reset(new THREE.Vector3(0, 300, 0), 0, 115 * KT, 'air');
  const ap = new AP();
  let thr = 0.6, iT = 0;
  let pitchHold = null;
  run(fm, 40, () => {
    ap.run(fm, fm.dt, { vs: 0 });
    const e = 115 * KT - fm.out.ias;
    iT += e * fm.dt * 0.01;
    thr = clamp(0.5 + e * 0.05 + iT, 0, 1);
    sys.engines.forEach((en) => (en.lever = thr));
  });
  const y0 = fm.pos.y;
  const p0 = fm.out.pitch;
  const elevHold = fm.ctl.elevator;
  sys.drop();
  let maxY = y0, maxP = p0, tEmpty = null;
  run(fm, 8, (t) => {
    fm.ctl.elevator = elevHold; // cloche ferma: si osserva la "cabrata" dovuta al rilascio
    maxY = Math.max(maxY, fm.pos.y);
    maxP = Math.max(maxP, fm.out.pitch);
    if (tEmpty === null && sys.waterLiters() < 1) tEmpty = t;
  });
  return `Sgancio SALVO 6137 L a 115 kt: svuotato in ${tEmpty ? tEmpty.toFixed(2) : '-'} s, guadagno quota ${(maxY - y0).toFixed(1)} m, pitch +${((maxP - p0) * RAD).toFixed(1)}° (cloche ferma)`;
}

function waterLanding(sink = 250, gear = false) {
  const { fm, sys } = setup('lake');
  sys.gearDown = gear;
  sys.gearPos = gear ? 1 : 0;
  sys.flapIndex = 3;
  sys.flapPos = 25;
  fm.reset(new THREE.Vector3(0, 40, 0), 0, 85 * KT, 'air');
  const o = fm.out;
  const ap = new AP();
  let thr = 0.4, iT = 0;
  let td = null, stop = null, maxNz = 0;
  const z0 = fm.pos.z;
  let log = [];
  const ok = run(fm, 70, (t) => {
    if (!td) {
      ap.run(fm, fm.dt, { vs: -sink * FPM });
      const e = 82 * KT - o.ias;
      iT += e * fm.dt * 0.01;
      thr = clamp(0.35 + e * 0.05 + iT, 0, 1);
      sys.engines.forEach((en) => (en.lever = thr));
      if (o.onWater) td = { t, z: fm.pos.z, v: o.ias, vs: o.vs };
    } else {
      sys.engines.forEach((en) => (en.lever = 0));
      ap.run(fm, fm.dt, { pitch: 3 * DEG });
      maxNz = Math.max(maxNz, o.nz);
      if (!stop && o.gs < 5 * KT) stop = { d: td.z - fm.pos.z, t: t - td.t };
      if (Math.abs(t % 2) < fm.dt * 0.99) log.push(`${(t - td.t).toFixed(0)}s ${(o.gs / KT).toFixed(0)}kt p${(o.pitch * RAD).toFixed(1)} nz${o.nz.toFixed(2)}`);
    }
  });
  return `Ammaraggio ${gear ? 'CON CARRELLO ' : ''}(${sink} ft/min): contatto a ${td ? kt(td.v) + ' kt' : '-'}, nz max ${maxNz.toFixed(2)}, arresto (<5kt) in ${stop ? stop.d.toFixed(0) + ' m / ' + stop.t.toFixed(1) + ' s' : '-'} ${ok ? '' : 'CRASH: ' + fm.crash.reason}\n   ${log.slice(0, 12).join(' | ')}`;
}

const t0 = Date.now();
console.log(level(180));
console.log(level(150));
console.log(level(120));
console.log(level(100, 2));
console.log(level(115, 2, 6137));
console.log(level(90, 3));
console.log(stall(0));
console.log(stall(2));
console.log(stall(3));
console.log(stall(2, 6137));
console.log(maxSpeed());
console.log(climb());
console.log(climb(6137));
console.log(takeoffRunway());
console.log(floatTest());
console.log(floatTest(6137));
console.log(waterTakeoff());
console.log(waterTakeoff(6137));
console.log(scoopRun());
console.log(dropTest());
console.log(waterLanding(250));
console.log(waterLanding(600));
console.log(waterLanding(250, true));
console.log(`(tempo ${(Date.now() - t0) / 1000}s)`);
