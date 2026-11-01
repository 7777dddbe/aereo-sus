// Interfaccia: menu iniziale, messaggi, pannello dati, avvisi, mappa con incendi, aiuto,
// gocce sul parabrezza, schermata incidente e comandi touch.

import { KEYMAP } from '../input.js';
import { DROP_MODES } from '../aircraft/systems.js';
import { CAMS } from '../cameras.js';
import { KT, FT, FPM } from '../core/constants.js';
import { clamp, RAD, rng } from '../core/math.js';
import { SPEC } from '../aircraft/specs.js';
import { WORLD, DIR } from '../world/terrain.js';
import { GARDA } from '../world/garda.js';
import { OSM } from '../world/osm.js';

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
    ttl = Math.min(ttl, 2.8); // i messaggi spariscono dopo poco
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
    // cloche col mouse: cerchio del neutro al centro e manette mostrate quando si usa la rotella
    const yokeOn = input.mouseYoke && input.flight;
    if (this._myoke !== yokeOn) {
      this._myoke = yokeOn;
      $('myoke').style.display = input.mouseYoke && input.flight ? 'block' : 'none';
      const cv = document.querySelector('canvas');
      if (cv) cv.classList.toggle('myoke', yokeOn);
    }
    const wait = input.mouseYoke && !input.yokeEngaged;
    if (wait !== this._yokeWait) {
      this._yokeWait = wait;
      $('myoke').classList.toggle('wait', wait);
    }
    const tp = $('thrpop');
    const recent = performance.now() - input.throttleChanged < 1200;
    if (recent) {
      const txt = input.wheelReverse > 0 ? `↩️ REVERSE ${Math.round(input.wheelReverse * 100)}%` : `⚡ MANETTE ${Math.round(input.throttle * 100)}%`;
      if (tp.textContent !== txt) tp.textContent = txt;
    }
    if (recent !== this._thrShown) {
      this._thrShown = recent;
      tp.classList.toggle('show', recent);
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
    const nowMs = performance.now();
    if (wt !== this._warnT) {
      this.warnBox.innerHTML = wt;
      this._warnT = wt;
      this._warnAt = nowMs;
      this.warnBox.style.visibility = wt ? '' : 'hidden';
    } else if (wt && nowMs - this._warnAt > 3000) {
      this.warnBox.style.visibility = 'hidden'; // l'avviso resta nella spia, il testo svanisce
    }
    // mappa
    this._mapTimer += dt;
    if (this._mapTimer > 0.25) {
      this._mapTimer = 0;
      this._drawMap(fm, fires);
    }
  }

  // carta del Garda dalla copertura del suolo reale (fatta una sola volta)
  _baseMap() {
    if (this._base) return this._base;
    const N = GARDA.meta.NLC, L = GARDA.lc;
    const c = document.createElement('canvas');
    c.width = c.height = N;
    const g = c.getContext('2d');
    const img = g.createImageData(N, N);
    const C = { 10: [34, 66, 34], 20: [70, 86, 44], 30: [96, 110, 60], 40: [118, 112, 66], 50: [150, 120, 104], 60: [130, 124, 116], 70: [235, 235, 240], 80: [42, 95, 134], 90: [50, 80, 70], 100: [110, 110, 90] };
    for (let k = 0; k < N * N; k++) {
      const col = L[k * 4 + 2] > 127 ? C[80] : C[L[k * 4]] || C[30];
      img.data[k * 4] = col[0];
      img.data[k * 4 + 1] = col[1];
      img.data[k * 4 + 2] = col[2];
      img.data[k * 4 + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    // strade principali e fiumi reali (OSM)
    const k = N / (2 * GARDA.meta.half), h = GARDA.meta.half;
    g.lineCap = 'round';
    for (const f of OSM.water) {
      if (!f.flag) continue;
      g.strokeStyle = '#3f7fae';
      g.lineWidth = f.cls === 1 ? 1.6 : 0.8;
      g.beginPath();
      for (let i = 0; i < f.pts.length; i += 2) (i ? g.lineTo : g.moveTo).call(g, (f.pts[i] + h) * k, (f.pts[i + 1] + h) * k);
      g.stroke();
    }
    for (const f of OSM.roads) {
      if (f.cls > 7) continue;
      g.strokeStyle = f.cls <= 3 ? '#f2d38a' : '#d9d4c8';
      g.lineWidth = f.cls <= 3 ? 1.6 : f.cls <= 5 ? 1.0 : 0.6;
      g.beginPath();
      for (let i = 0; i < f.pts.length; i += 2) (i ? g.lineTo : g.moveTo).call(g, (f.pts[i] + h) * k, (f.pts[i + 1] + h) * k);
      g.stroke();
    }
    this._base = c;
    return c;
  }

  _drawMap(fm, fires) {
    const c = this.mapCanvas, g = this.mapCtx;
    const W = c.width, H = c.height;
    // finestra di 14 km attorno all'aereo (nord in alto)
    const span = 14000;
    const scale = W / span;
    const half = WORLD.half;
    const vx = Math.max(-half + span / 2, Math.min(half - span / 2, fm.pos.x));
    const vz = Math.max(-half + span / 2, Math.min(half - span / 2, fm.pos.z));
    const P = (x, z) => [W / 2 + (x - vx) * scale, H / 2 + (z - vz) * scale];
    g.clearRect(0, 0, W, H);
    const base = this._baseMap();
    const k = base.width / (2 * half);
    g.globalAlpha = 0.92;
    g.drawImage(base, (vx - span / 2 + half) * k, (vz - span / 2 + half) * k, span * k, span * k, 0, 0, W, H);
    g.globalAlpha = 1;
    g.fillStyle = 'rgba(10,16,12,0.25)';
    g.fillRect(0, 0, W, H);
    // nomi dei paesi
    g.font = 'bold 11px Arial';
    g.textAlign = 'center';
    for (const [name, p] of Object.entries(WORLD.places)) {
      const [px, py] = P(p.x, p.z);
      if (px < 0 || py < 0 || px > W || py > H) continue;
      g.fillStyle = 'rgba(0,0,0,0.55)';
      g.fillText(name, px + 1, py + 1);
      g.fillStyle = '#f2efe6';
      g.fillText(name, px, py);
    }
    g.textAlign = 'left';
    // pista
    const R = WORLD.runway;
    g.strokeStyle = '#eee';
    g.lineWidth = 3;
    g.beginPath();
    const dx = (DIR.x * R.len) / 2, dz = (DIR.z * R.len) / 2;
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
      input.touch.y = clamp(y, -1, 1); // asse invertito: su = picchiare, giù = cabrare
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
