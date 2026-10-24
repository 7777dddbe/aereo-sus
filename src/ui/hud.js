// Interfaccia: menu iniziale, messaggi, pannello dati, avvisi, mappa con incendi, aiuto,
// gocce sul parabrezza, schermata incidente e comandi touch.

import { KEYMAP } from '../input.js';
import { DROP_MODES } from '../aircraft/systems.js';
import { CAMS } from '../cameras.js';
import { KT, FT, FPM } from '../core/constants.js';
import { clamp, RAD, rng } from '../core/math.js';
import { SPEC } from '../aircraft/specs.js';
import { WORLD, toLake } from '../world/terrain.js';

const $ = (id) => document.getElementById(id);

export class HUD {
  constructor() {
    this.msgBox = $('messages');
    this.data = $('data');
    this.warnBox = $('warnings');
    this.mapCanvas = $('minimap');
    this.mapCtx = this.mapCanvas.getContext('2d');
    this.fireList = $('fires');
    this.camLabel = $('camlabel');
    this.showData = true;
    this._mapTimer = 0;
    this._dataTimer = 0;
    this._buildHelp();
    this._buildDroplets();
  }

  _buildHelp() {
    const t = $('helptable');
    t.innerHTML = KEYMAP.map(([k, d]) => `<tr><td class="k">${k}</td><td>${d}</td></tr>`).join('');
  }

  _buildDroplets() {
    const c = $('droplets');
    const g = c.getContext('2d');
    c.width = 1024;
    c.height = 640;
    const r = rng(9);
    for (let i = 0; i < 520; i++) {
      const x = r() * c.width, y = r() * c.height;
      const s = 2 + Math.pow(r(), 3) * 14;
      const grd = g.createRadialGradient(x - s * 0.3, y - s * 0.3, 0, x, y, s);
      grd.addColorStop(0, 'rgba(255,255,255,0.55)');
      grd.addColorStop(0.5, 'rgba(200,215,225,0.18)');
      grd.addColorStop(0.85, 'rgba(40,50,60,0.25)');
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = grd;
      g.beginPath();
      g.ellipse(x, y, s, s * (0.8 + r() * 0.5), r() * 3, 0, Math.PI * 2);
      g.fill();
      if (s > 8 && r() < 0.6) {
        g.fillStyle = 'rgba(210,220,230,0.12)';
        g.fillRect(x - 1, y, 2, s * (2 + r() * 5));
      }
    }
  }

  message(text, level = 'info', ttl = 5) {
    const d = document.createElement('div');
    d.className = 'msg ' + level;
    d.textContent = text;
    this.msgBox.prepend(d);
    while (this.msgBox.children.length > 6) this.msgBox.lastChild.remove();
    setTimeout(() => d.classList.add('fade'), ttl * 1000);
    setTimeout(() => d.remove(), ttl * 1000 + 1200);
  }

  setCamera(idx) {
    this.camLabel.textContent = 'Visuale: ' + CAMS[idx].name;
    this.camLabel.classList.remove('fade');
    clearTimeout(this._camT);
    this._camT = setTimeout(() => this.camLabel.classList.add('fade'), 1800);
  }

  toggleData() {
    this.showData = !this.showData;
    this.data.style.display = this.showData ? '' : 'none';
  }

  update(dt, fm, sys, fires, input, rig, wet) {
    const o = fm.out;
    // gocce sul parabrezza solo in cabina
    const dr = $('droplets');
    const op = rig.inside ? clamp(wet, 0, 0.9) : 0;
    if (Math.abs((this._wet || 0) - op) > 0.01) {
      dr.style.opacity = op.toFixed(2);
      this._wet = op;
    }
    this._dataTimer += dt;
    if (this._dataTimer > 0.1 && this.showData) {
      this._dataTimer = 0;
      const ias = o.ias / KT;
      const water = sys.waterLiters();
      const pct = water / SPEC.waterCapacity;
      const thr = (sys.engines[0].lever + sys.engines[1].lever) / 2;
      const rev = sys.engines.some((e) => e.reverse > 0.05);
      const row = (k, v, cls = '') => `<div class="cell ${cls}"><span>${k}</span><b>${v}</b></div>`;
      const gearTxt = sys.gearPos > 0.98 ? 'GIÙ' : sys.gearPos < 0.02 ? 'SU' : 'IN MOTO';
      const probeTxt = sys.probePos > 0.95 ? 'ESTESE' : sys.probePos < 0.05 ? 'RETRATTE' : '…';
      let hdg = Math.round(o.heading * RAD) % 360;
      if (hdg <= 0) hdg += 360;
      this.data.innerHTML =
        row('IAS', `${ias.toFixed(0)} kt`, ias > SPEC.vmo ? 'bad' : '') +
        row('ALT', `${Math.round(o.alt / FT)} ft`) +
        row('RAD ALT', `${Math.max(0, Math.round(o.radAlt / FT))} ft`, o.radAlt < 30 && !o.onWater && !o.onGround ? 'warn' : '') +
        row('V/S', `${Math.round(o.vs / FPM)} fpm`) +
        row('PRUA', `${String(hdg).padStart(3, '0')}°`) +
        row('POTENZA', rev ? 'REVERSE' : `${Math.round(sys.engines[0].torque)}% TQ`) +
        row('FLAP', `${Math.round(sys.flapPos)}° (${SPEC.flapDetents[sys.flapIndex]}°)`) +
        row('CARRELLO', gearTxt, sys.gearPos > 0.5 && o.surfaceUnder === 'water' && o.radAlt < 150 ? 'bad' : '') +
        row('SONDE', probeTxt, sys.probePos > 0.5 ? 'warn' : '') +
        row('ACQUA', `${Math.round(water)} L (${Math.round(pct * 100)}%)`, sys.foamArmed ? 'foam' : '') +
        row('SGANCIO', DROP_MODES[sys.dropMode].id) +
        row('MASSA', `${Math.round(sys.totalMass())} kg`, sys.warn.overweight ? 'warn' : '') +
        row('CARB.', `${Math.round(sys.fuel)} kg`, sys.warn.lowFuel ? 'warn' : '') +
        row('TRIM', `${(sys.elevTrim * 100).toFixed(0)}%`) +
        row('MANETTE', `${Math.round(thr * 100)}%`) +
        row('G', `${o.nz.toFixed(2)}`, o.nz > 3 ? 'bad' : '');
    }
    // avvisi
    const w = sys.warn;
    const warns = [];
    if (w.stall) warns.push('STALLO');
    if (w.gearWater) warns.push('CARRELLO ESTRATTO — AMMARAGGIO!');
    if (w.gearUpLand) warns.push('CARRELLO RETRATTO!');
    if (w.overspeed) warns.push('VELOCITÀ ECCESSIVA');
    if (w.probeSpeed) warns.push('SONDE: VELOCITÀ ECCESSIVA');
    if (w.tanksFull) warns.push('SERBATOI PIENI — RITRARRE LE SONDE');
    if (o.overG > 0) warns.push('SOVRACCARICO ' + o.nz.toFixed(1) + ' g');
    const wt = warns.join('<br>');
    if (wt !== this._warnT) {
      this.warnBox.innerHTML = wt;
      this._warnT = wt;
    }
    // mappa
    this._mapTimer += dt;
    if (this._mapTimer > 0.25) {
      this._mapTimer = 0;
      this._drawMap(fm, fires);
    }
  }

  _drawMap(fm, fires) {
    const c = this.mapCanvas, g = this.mapCtx;
    const W = c.width, H = c.height;
    const scale = W / 11000; // m -> px
    const cx = W / 2, cy = H / 2;
    const P = (x, z) => [cx + x * scale, cy + z * scale];
    g.clearRect(0, 0, W, H);
    g.fillStyle = 'rgba(20,32,22,0.82)';
    g.fillRect(0, 0, W, H);
    // lago (sagoma approssimata)
    if (!this._lakePath) {
      const pts = [];
      for (let a = 0; a < Math.PI * 2; a += 0.08) {
        const u = Math.cos(a) * WORLD.lake.a, v = Math.sin(a) * WORLD.lake.b;
        const x = WORLD.lake.cx + u * Math.cos(0.35) - v * Math.sin(0.35);
        const z = WORLD.lake.cz + u * Math.sin(0.35) + v * Math.cos(0.35);
        pts.push([x, z]);
      }
      this._lakePath = pts;
    }
    g.fillStyle = '#2a5f86';
    g.beginPath();
    this._lakePath.forEach(([x, z], i) => {
      const [px, py] = P(x, z);
      i ? g.lineTo(px, py) : g.moveTo(px, py);
    });
    g.closePath();
    g.fill();
    // pista
    const R = WORLD.runway;
    g.strokeStyle = '#ddd';
    g.lineWidth = 3;
    g.beginPath();
    const dx = Math.cos(0.35) * R.len / 2, dz = Math.sin(0.35) * R.len / 2;
    g.moveTo(...P(R.cx - dx, R.cz - dz));
    g.lineTo(...P(R.cx + dx, R.cz + dz));
    g.stroke();
    // incendi
    const sum = fires.summary();
    for (const z of sum.zones) {
      if (z.state === 'quiete') continue;
      const [px, py] = P(z.x, z.z);
      const rr = 3 + Math.sqrt(z.burning) * 0.5;
      g.fillStyle = z.state === 'spento' ? 'rgba(120,120,120,0.9)' : z.state === 'contenuto' ? 'rgba(255,170,0,0.9)' : 'rgba(255,50,20,0.95)';
      g.beginPath();
      g.arc(px, py, Math.min(rr, 14), 0, Math.PI * 2);
      g.fill();
    }
    // aereo
    const [ax, ay] = P(fm.pos.x, fm.pos.z);
    const hdg = fm.out.heading;
    g.save();
    g.translate(ax, ay);
    g.rotate(hdg);
    g.fillStyle = '#ffd400';
    g.beginPath();
    g.moveTo(0, -8);
    g.lineTo(5, 6);
    g.lineTo(0, 3);
    g.lineTo(-5, 6);
    g.closePath();
    g.fill();
    g.restore();
    g.fillStyle = '#ccc';
    g.font = '10px Arial';
    g.fillText('N ↑', 6, 12);
    // elenco incendi
    const html = sum.zones
      .filter((z) => z.state !== 'quiete')
      .map((z) => {
        const d = Math.hypot(z.x - fm.pos.x, z.z - fm.pos.z) / 1852;
        let brg = Math.atan2(z.x - fm.pos.x, -(z.z - fm.pos.z)) * RAD;
        if (brg < 0) brg += 360;
        return `<div class="fz ${z.state}"><b>${z.name}</b> — ${z.state.toUpperCase()}<br><small>${Math.round(brg)}° · ${d.toFixed(1)} NM</small></div>`;
      })
      .join('');
    if (html !== this._fhtml) {
      this.fireList.innerHTML = html + `<div class="fz tot">Area bruciata: ${sum.burntHa.toFixed(1)} ha</div>`;
      this._fhtml = html;
    }
  }

  showCrash(reason) {
    $('crash').style.display = 'flex';
    $('crashReason').textContent = reason;
  }
  hideCrash() {
    $('crash').style.display = 'none';
  }
}

// Comandi touch (tablet/telefono)
export function setupTouch(input, onAction) {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (!isTouch) return;
  const ui = $('touch');
  ui.style.display = 'block';
  const stick = $('tstick'), knob = $('tknob');
  const handleStick = (e) => {
    const r = stick.getBoundingClientRect();
    for (const t of e.targetTouches) {
      const x = ((t.clientX - r.left) / r.width) * 2 - 1;
      const y = ((t.clientY - r.top) / r.height) * 2 - 1;
      input.touch.active = true;
      input.touch.x = clamp(x, -1, 1);
      input.touch.y = clamp(-y, -1, 1);
      knob.style.transform = `translate(${clamp(x, -1, 1) * 45}px, ${clamp(y, -1, 1) * 45}px)`;
    }
    e.preventDefault();
  };
  stick.addEventListener('touchstart', handleStick, { passive: false });
  stick.addEventListener('touchmove', handleStick, { passive: false });
  stick.addEventListener('touchend', () => {
    input.touch.active = false;
    input.touch.x = input.touch.y = 0;
    knob.style.transform = '';
  });
  const thr = $('tthr'), thrKnob = $('tthrknob');
  const handleThr = (e) => {
    const r = thr.getBoundingClientRect();
    const t = e.targetTouches[0];
    const v = clamp(1 - (t.clientY - r.top) / r.height, 0, 1);
    input.touch.throttle = v;
    thrKnob.style.bottom = `${v * 100}%`;
    e.preventDefault();
  };
  thr.addEventListener('touchstart', handleThr, { passive: false });
  thr.addEventListener('touchmove', handleThr, { passive: false });
  for (const b of ui.querySelectorAll('button[data-act]')) {
    b.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const a = b.dataset.act;
      if (a === 'brakes') input.brakes = 1;
      else if (a === 'more') $('tmore').classList.toggle('open');
      else {
        onAction(a);
        if (a !== 'drop' && a !== 'probes') $('tmore').classList.remove('open');
      }
    }, { passive: false });
  }
}
