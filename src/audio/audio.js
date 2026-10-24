// Audio procedurale (Web Audio): turboeliche con battimenti tra i due motori, sibilo delle turbine,
// vento, acqua sullo scafo, pescaggio, sgancio, avvisatori (stallo, carrello in acqua), idraulica, impatti.

import { clamp, lerp } from '../core/math.js';
import { KT } from '../core/constants.js';

function noiseBuffer(ctx, seconds = 2, color = 'white') {
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, last = 0;
  for (let i = 0; i < len; i++) {
    const w = Math.random() * 2 - 1;
    if (color === 'pink') {
      b0 = 0.99765 * b0 + w * 0.099046;
      b1 = 0.963 * b1 + w * 0.2965164;
      b2 = 0.57 * b2 + w * 1.0526913;
      d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.18;
    } else if (color === 'brown') {
      last = (last + 0.02 * w) / 1.02;
      d[i] = last * 3.5;
    } else d[i] = w * 0.5;
  }
  return buf;
}

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.volume = 0.8;
    this._prev = {};
  }

  start() {
    if (this.ctx) {
      this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 3;
    this.master = ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(comp).connect(ctx.destination);
    // filtro "cabina" (isolamento acustico)
    this.cabin = ctx.createBiquadFilter();
    this.cabin.type = 'lowpass';
    this.cabin.frequency.value = 2200;
    this.cabin.Q.value = 0.5;
    this.cabin.connect(this.master);
    this.white = noiseBuffer(ctx, 2, 'white');
    this.pink = noiseBuffer(ctx, 3, 'pink');
    this.brown = noiseBuffer(ctx, 3, 'brown');

    this.engines = [0, 1].map((i) => this._engine(i));
    this.wind = this._noiseVoice(this.pink, 'bandpass', 700, 0.6);
    this.water = this._noiseVoice(this.brown, 'lowpass', 500, 0.7);
    this.scoop = this._noiseVoice(this.white, 'bandpass', 1800, 0.5);
    this.dropSnd = this._noiseVoice(this.pink, 'lowpass', 1400, 0.4);
    this.hyd = this._tone('sawtooth', 380, 'lowpass', 900);
    this.gearRoll = this._noiseVoice(this.brown, 'lowpass', 250, 0.8);
    this.stallHorn = this._tone('square', 420, 'lowpass', 2000, true);
    this.warnHorn = this._tone('square', 880, 'lowpass', 3000, true);
    this.enabled = true;
  }

  _noiseVoice(buffer, type, freq, q) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    src.playbackRate.value = 0.9 + Math.random() * 0.2;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.value = 0;
    src.connect(f).connect(g).connect(this.cabin);
    src.start();
    return { src, f, g };
  }

  _tone(wave, freq, ftype, ffreq, direct = false) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = wave;
    o.frequency.value = freq;
    const f = ctx.createBiquadFilter();
    f.type = ftype;
    f.frequency.value = ffreq;
    const g = ctx.createGain();
    g.gain.value = 0;
    o.connect(f).connect(g).connect(direct ? this.master : this.cabin);
    o.start();
    return { o, f, g };
  }

  _engine(i) {
    const ctx = this.ctx;
    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : ctx.createGain();
    if (pan.pan) pan.pan.value = i === 0 ? -0.45 : 0.45;
    const bus = ctx.createGain();
    bus.gain.value = 0;
    bus.connect(pan).connect(this.cabin);
    // ronzio delle pale (frequenza di passaggio pale + armoniche)
    const prop = ctx.createOscillator();
    prop.type = 'sawtooth';
    const propF = ctx.createBiquadFilter();
    propF.type = 'lowpass';
    propF.frequency.value = 520;
    propF.Q.value = 1.2;
    const propG = ctx.createGain();
    prop.connect(propF).connect(propG).connect(bus);
    const prop2 = ctx.createOscillator();
    prop2.type = 'square';
    const prop2G = ctx.createGain();
    prop2G.gain.value = 0.05;
    prop2.connect(propF);
    prop2.connect(prop2G).connect(bus);
    // modulazione d'ampiezza (passaggio delle pale davanti alla fusoliera)
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    const lfoG = ctx.createGain();
    lfoG.gain.value = 0.2;
    lfo.connect(lfoG).connect(propG.gain);
    // sibilo della turbina
    const whine = ctx.createOscillator();
    whine.type = 'sine';
    const whineG = ctx.createGain();
    whine.connect(whineG).connect(bus);
    const whine2 = ctx.createOscillator();
    whine2.type = 'triangle';
    const whine2G = ctx.createGain();
    whine2.connect(whine2G).connect(bus);
    // ruggito della combustione / getto
    const roar = ctx.createBufferSource();
    roar.buffer = this.pink;
    roar.loop = true;
    const roarF = ctx.createBiquadFilter();
    roarF.type = 'lowpass';
    roarF.frequency.value = 400;
    const roarG = ctx.createGain();
    roar.connect(roarF).connect(roarG).connect(bus);
    // fruscio aerodinamico delle pale
    const hiss = ctx.createBufferSource();
    hiss.buffer = this.white;
    hiss.loop = true;
    const hissF = ctx.createBiquadFilter();
    hissF.type = 'bandpass';
    hissF.frequency.value = 2400;
    hissF.Q.value = 0.8;
    const hissG = ctx.createGain();
    hiss.connect(hissF).connect(hissG).connect(bus);
    for (const n of [prop, prop2, lfo, whine, whine2]) n.start();
    roar.start();
    hiss.start();
    return { bus, pan, prop, prop2, propF, propG, lfo, whine, whineG, whine2, whine2G, roarF, roarG, hissF, hissG, detune: i === 0 ? 0.997 : 1.004 };
  }

  click(freq = 1800, dur = 0.04, vol = 0.25) {
    if (!this.enabled) return;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.white;
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = freq;
    const g = ctx.createGain();
    const t = ctx.currentTime;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f).connect(g).connect(this.master);
    src.start(t, Math.random());
    src.stop(t + dur + 0.05);
  }

  chime(times = 1, freq = 1320) {
    if (!this.enabled) return;
    const ctx = this.ctx;
    for (let k = 0; k < times; k++) {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = freq;
      const g = ctx.createGain();
      const t = ctx.currentTime + k * 0.22;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.25, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
      o.connect(g).connect(this.master);
      o.start(t);
      o.stop(t + 0.7);
    }
  }

  thump(strength = 1, water = false) {
    if (!this.enabled) return;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = water ? this.pink : this.brown;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = water ? 1500 : 220;
    const g = ctx.createGain();
    const t = ctx.currentTime;
    g.gain.setValueAtTime(clamp(strength, 0, 1.5) * (water ? 0.8 : 1.2), t);
    g.gain.exponentialRampToValueAtTime(0.001, t + (water ? 1.2 : 0.35));
    src.connect(f).connect(g).connect(this.master);
    src.start(t, Math.random());
    src.stop(t + 1.5);
  }

  update(dt, fm, sys, view) {
    if (!this.enabled) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const o = fm.out;
    const inside = view.inside;
    const k = 0.08; // costante di tempo dei parametri
    this.cabin.frequency.setTargetAtTime(inside ? 1900 : 14000, t, 0.1);
    const dist = inside ? 0 : view.distance;
    const att = inside ? 1 : 1 / (1 + dist / 35);
    const doppler = inside ? 1 : clamp(1 / (1 - clamp(view.closing / 340, -0.4, 0.4)), 0.7, 1.4);
    for (let i = 0; i < 2; i++) {
      const e = sys.engines[i];
      const E = this.engines[i];
      const npHz = ((e.np / 100) * 1200) / 60;
      const bpf = npHz * 4 * E.detune * doppler;
      E.prop.frequency.setTargetAtTime(Math.max(5, bpf), t, k);
      E.prop2.frequency.setTargetAtTime(Math.max(5, bpf * 2.0), t, k);
      E.lfo.frequency.setTargetAtTime(Math.max(0.1, npHz), t, k);
      const tq = clamp(e.torque / 100, 0, 1.2);
      const run = e.running ? 1 : clamp(e.nh / 60, 0, 1);
      E.propG.gain.setTargetAtTime((0.12 + 0.5 * tq) * run, t, k);
      E.propF.frequency.setTargetAtTime(280 + 700 * tq, t, k);
      const nh = e.nh / 100;
      E.whine.frequency.setTargetAtTime(2600 * nh * doppler, t, k);
      E.whine2.frequency.setTargetAtTime(5200 * nh * doppler * 1.01, t, k);
      E.whineG.gain.setTargetAtTime((inside ? 0.02 : 0.05) * nh * nh * run, t, k);
      E.whine2G.gain.setTargetAtTime((inside ? 0.004 : 0.018) * nh * run, t, k);
      E.roarG.gain.setTargetAtTime((0.18 + 0.55 * tq) * run, t, k);
      E.roarF.frequency.setTargetAtTime(250 + 600 * tq, t, k);
      E.hissG.gain.setTargetAtTime((inside ? 0.04 : 0.14) * tq * run, t, k);
      E.hissF.frequency.setTargetAtTime(1800 + 1500 * tq, t, k);
      let pan = i === 0 ? -0.45 : 0.45;
      if (!inside && view.panFn) pan = view.panFn(i);
      if (E.pan.pan) E.pan.pan.setTargetAtTime(pan, t, 0.1);
      E.bus.gain.setTargetAtTime(0.55 * att, t, k);
    }
    const ias = o.ias / KT;
    this.wind.g.gain.setTargetAtTime(clamp((ias / 140) ** 2, 0, 1.4) * (inside ? 0.35 : 0.6) * att + 0.01, t, k);
    this.wind.f.frequency.setTargetAtTime(400 + ias * 9, t, k);
    const waterLvl = o.onWater ? clamp(o.gs / 20, 0, 1.4) * clamp(0.3 + o.hullDepth * 1.5, 0, 1.2) : 0;
    const slosh = 0.75 + 0.25 * Math.sin(t * 7.3) * Math.sin(t * 3.1);
    this.water.g.gain.setTargetAtTime(waterLvl * 0.9 * slosh * att, t, 0.05);
    this.water.f.frequency.setTargetAtTime(300 + o.gs * 22, t, k);
    const scoop = clamp((o.scoopRate || 0) / 500, 0, 1.2);
    this.scoop.g.gain.setTargetAtTime(scoop * 0.55 * att, t, 0.05);
    const outflow = sys.outflow.reduce((a, b) => a + b, 0);
    this.dropSnd.g.gain.setTargetAtTime(clamp(outflow / 3000, 0, 1) * 0.9 * att, t, 0.05);
    // idraulica (flap, carrello, sonde in movimento)
    const moving = Math.abs(sys.flapPos - (this._prev.flap ?? sys.flapPos)) > 1e-4 || Math.abs(sys.gearPos - (this._prev.gear ?? sys.gearPos)) > 1e-4 || Math.abs(sys.probePos - (this._prev.probe ?? sys.probePos)) > 1e-4;
    this._prev.flap = sys.flapPos;
    this._prev.gear = sys.gearPos;
    this._prev.probe = sys.probePos;
    this.hyd.g.gain.setTargetAtTime(moving ? (inside ? 0.05 : 0.02) : 0, t, 0.1);
    // rotolamento ruote
    const rolling = o.onGround ? clamp(o.gs / 25, 0, 1) : 0;
    this.gearRoll.g.gain.setTargetAtTime(rolling * 0.7, t, 0.05);
    // avvisatori
    const stall = sys.warn.stall;
    this.stallHorn.g.gain.setTargetAtTime(stall ? 0.12 : 0, t, 0.02);
    this.stallHorn.o.frequency.setTargetAtTime(stall ? 420 + 60 * Math.sin(t * 25) : 420, t, 0.01);
    const horn = (sys.warn.gearWater || sys.warn.gearUpLand) && Math.floor(t * 2.5) % 2 === 0;
    this.warnHorn.g.gain.setTargetAtTime(horn ? 0.08 : 0, t, 0.01);
    // impatti
    if (o.impact > 1.0 && (this._lastImp || 0) < t - 0.6) {
      this._lastImp = t;
      this.thump(o.impact / 3, true);
    }
    const gl = o.gearLoad[1] + o.gearLoad[2];
    if (gl > 1000 && !(this._prev.ground)) this.thump(clamp(-o.vs / 2.5, 0.3, 1.5), false);
    this._prev.ground = gl > 1000;
  }

  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.value = v;
  }
}
