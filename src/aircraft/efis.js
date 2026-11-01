// Schermi della cabina "glass" del CL-415: EFIS (ADI e HSI), display motori e impianti,
// pannello di stato dell'acqua e di controllo dello sgancio. Disegnati su canvas e aggiornati
// solo quando lo stato (quantizzato) cambia.

import { clamp, DEG } from '../core/math.js';

const FONT = (px, bold = true) => `${bold ? 'bold ' : ''}${px}px "Arial Narrow", Arial, sans-serif`;
const MONO = (px) => `bold ${px}px "Courier New", monospace`;
const CYAN = '#3fe0ff', GREEN = '#3cff5a', WHITE = '#f2f2f2', AMBER = '#ffb21a', RED = '#ff3a2a', MAG = '#ff5cff';

function bg(g, w, h) {
  g.fillStyle = '#030405';
  g.fillRect(0, 0, w, h);
}

// ---------------------------------------------------------------------------
// EFIS ADI: cielo/terra, scala di beccheggio, scala di rollio, simbolo aereo, sbandamento
export function drawEfisAdi(g, w, h, s) {
  bg(g, w, h);
  const cx = w / 2, cy = h * 0.5;
  const k = h * 0.042; // pixel per grado di beccheggio
  g.save();
  g.beginPath();
  g.rect(8, 8, w - 16, h - 16);
  g.clip();
  g.translate(cx, cy);
  g.rotate(-s.roll * DEG);
  g.translate(0, s.pitch * k);
  // cielo e terra
  g.fillStyle = '#1e8fe0';
  g.fillRect(-w * 2, -h * 4, w * 4, h * 4);
  g.fillStyle = '#9a5a26';
  g.fillRect(-w * 2, 0, w * 4, h * 4);
  g.strokeStyle = WHITE;
  g.lineWidth = 3;
  g.beginPath();
  g.moveTo(-w * 2, 0);
  g.lineTo(w * 2, 0);
  g.stroke();
  // scala di beccheggio
  g.fillStyle = WHITE;
  g.font = FONT(h * 0.05);
  g.textBaseline = 'middle';
  for (let p = -30; p <= 30; p += 2.5) {
    if (p === 0) continue;
    const y = -p * k;
    if (Math.abs(p - s.pitch) > 16) continue;
    const major = p % 10 === 0, mid = p % 5 === 0;
    const L = major ? w * 0.22 : mid ? w * 0.12 : w * 0.06;
    g.lineWidth = 2.5;
    g.beginPath();
    g.moveTo(-L / 2, y);
    g.lineTo(L / 2, y);
    g.stroke();
    if (major) {
      g.textAlign = 'right';
      g.fillText(String(Math.abs(p)), -L / 2 - 6, y);
      g.textAlign = 'left';
      g.fillText(String(Math.abs(p)), L / 2 + 6, y);
    }
  }
  g.restore();
  // scala di rollio (fissa) e indice (ruota)
  const R = h * 0.4;
  g.save();
  g.translate(cx, cy);
  g.strokeStyle = WHITE;
  g.fillStyle = WHITE;
  g.lineWidth = 3;
  g.beginPath();
  g.arc(0, 0, R, -Math.PI / 2 - 60 * DEG, -Math.PI / 2 + 60 * DEG);
  g.stroke();
  for (const a of [-60, -45, -30, -20, -10, 10, 20, 30, 45, 60]) {
    const r2 = R + (Math.abs(a) % 30 === 0 ? h * 0.05 : h * 0.028);
    const t = (a - 90) * DEG;
    g.beginPath();
    g.moveTo(Math.cos(t) * R, Math.sin(t) * R);
    g.lineTo(Math.cos(t) * r2, Math.sin(t) * r2);
    g.stroke();
  }
  g.beginPath();
  g.moveTo(0, -R);
  g.lineTo(-10, -R - 16);
  g.lineTo(10, -R - 16);
  g.closePath();
  g.fill();
  // indice di rollio
  g.rotate(-s.roll * DEG);
  g.fillStyle = AMBER;
  g.beginPath();
  g.moveTo(0, -R + 2);
  g.lineTo(-11, -R + 20);
  g.lineTo(11, -R + 20);
  g.closePath();
  g.fill();
  // indicatore di sbandamento (trapezio sotto l'indice)
  const sl = clamp(s.slip, -1, 1) * 22;
  g.fillRect(-11 + sl, -R + 23, 22, 6);
  g.restore();
  // simbolo dell'aereo
  g.fillStyle = '#111';
  g.strokeStyle = AMBER;
  g.lineWidth = 3;
  for (const sd of [-1, 1]) {
    g.beginPath();
    g.moveTo(cx + sd * w * 0.36, cy - 4);
    g.lineTo(cx + sd * w * 0.16, cy - 4);
    g.lineTo(cx + sd * w * 0.16, cy + 16);
    g.lineTo(cx + sd * w * 0.13, cy + 16);
    g.lineTo(cx + sd * w * 0.13, cy + 4);
    g.lineTo(cx + sd * w * 0.36, cy + 4);
    g.closePath();
    g.fill();
    g.stroke();
  }
  g.fillRect(cx - 5, cy - 5, 10, 10);
  g.strokeRect(cx - 5, cy - 5, 10, 10);
  // radioaltimetro digitale e velocità
  g.font = MONO(h * 0.065);
  g.textBaseline = 'alphabetic';
  g.textAlign = 'right';
  if (s.ra < 2500) {
    g.fillStyle = s.ra < 200 ? AMBER : GREEN;
    g.fillText(String(Math.round(s.ra)), w - 18, h - 18);
  }
  g.textAlign = 'left';
  g.fillStyle = CYAN;
  g.fillText(String(Math.round(s.ias)) + 'KT', 18, h - 18);
  g.fillStyle = s.dh ? AMBER : 'rgba(0,0,0,0)';
  g.fillText(s.dh ? 'DH' : '', 18, 40);
  g.fillStyle = GREEN;
  g.textAlign = 'right';
  g.font = MONO(h * 0.05);
  g.fillText('ATT', w - 18, 40);
}

// ---------------------------------------------------------------------------
// EFIS HSI: rosa dei venti girevole, puntatore di rotta, prua digitale
export function drawEfisHsi(g, w, h, s) {
  bg(g, w, h);
  const cx = w / 2, cy = h * 0.56, R = h * 0.38;
  g.save();
  g.translate(cx, cy);
  g.rotate(-s.hdg * DEG);
  g.strokeStyle = WHITE;
  g.fillStyle = WHITE;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  for (let a = 0; a < 360; a += 5) {
    const t = (a - 90) * DEG;
    const L = a % 10 === 0 ? h * 0.05 : h * 0.028;
    g.lineWidth = a % 10 === 0 ? 3 : 2;
    g.beginPath();
    g.moveTo(Math.cos(t) * R, Math.sin(t) * R);
    g.lineTo(Math.cos(t) * (R - L), Math.sin(t) * (R - L));
    g.stroke();
    if (a % 30 === 0) {
      g.save();
      g.rotate(a * DEG);
      g.font = FONT(h * (a % 90 === 0 ? 0.075 : 0.06));
      const lab = { 0: 'N', 90: 'E', 180: 'S', 270: 'W' }[a] || String(a / 10);
      g.fillText(lab, 0, -R + h * 0.1);
      g.restore();
    }
  }
  // freccia di rotta selezionata (magenta) e barra di deviazione
  g.rotate(s.crs * DEG);
  g.strokeStyle = MAG;
  g.fillStyle = MAG;
  g.lineWidth = 5;
  g.beginPath();
  g.moveTo(0, -R + h * 0.14);
  g.lineTo(0, -R * 0.35);
  g.moveTo(0, R * 0.35);
  g.lineTo(0, R - h * 0.14);
  g.stroke();
  g.beginPath();
  g.moveTo(0, -R + h * 0.12);
  g.lineTo(-10, -R + h * 0.17);
  g.lineTo(10, -R + h * 0.17);
  g.closePath();
  g.fill();
  g.beginPath();
  g.moveTo(s.dev * R * 0.4, -R * 0.3);
  g.lineTo(s.dev * R * 0.4, R * 0.3);
  g.stroke();
  g.fillStyle = WHITE;
  for (const d of [-2, -1, 1, 2]) {
    g.beginPath();
    g.arc(d * R * 0.2, 0, 5, 0, Math.PI * 2);
    g.fill();
  }
  g.restore();
  // segnalino di prua selezionata (heading bug)
  g.save();
  g.translate(cx, cy);
  g.rotate((s.bug - s.hdg) * DEG);
  g.fillStyle = CYAN;
  g.fillRect(-12, -R - 2, 24, 10);
  g.restore();
  // aereo al centro e linea di fede
  g.strokeStyle = AMBER;
  g.lineWidth = 4;
  g.beginPath();
  g.moveTo(cx, cy - 26);
  g.lineTo(cx, cy + 26);
  g.moveTo(cx - 22, cy - 4);
  g.lineTo(cx + 22, cy - 4);
  g.moveTo(cx - 10, cy + 20);
  g.lineTo(cx + 10, cy + 20);
  g.stroke();
  g.fillStyle = AMBER;
  g.beginPath();
  g.moveTo(cx, cy - R + 2);
  g.lineTo(cx - 10, cy - R - 16);
  g.lineTo(cx + 10, cy - R - 16);
  g.closePath();
  g.fill();
  // finestra della prua
  g.fillStyle = '#000';
  g.strokeStyle = WHITE;
  g.lineWidth = 2;
  g.fillRect(cx - 44, 6, 88, h * 0.1);
  g.strokeRect(cx - 44, 6, 88, h * 0.1);
  g.fillStyle = GREEN;
  g.font = MONO(h * 0.075);
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(String(Math.round(s.hdg) % 360).padStart(3, '0'), cx, 6 + h * 0.05);
  g.font = MONO(h * 0.05);
  g.textAlign = 'left';
  g.fillStyle = CYAN;
  g.fillText('HDG ' + String(Math.round(s.bug)).padStart(3, '0'), 14, 22);
  g.fillStyle = MAG;
  g.fillText('CRS ' + String(Math.round(s.crs)).padStart(3, '0'), 14, h - 22);
  g.textAlign = 'right';
  g.fillStyle = GREEN;
  g.fillText('GS ' + Math.round(s.gs), w - 14, 22);
  g.fillText('VOR1', w - 14, h - 22);
}

// ---------------------------------------------------------------------------
// Barra verticale per i display motori
function tape(g, x, y, bw, bh, f, col, red = null) {
  g.strokeStyle = '#9aa';
  g.lineWidth = 2;
  g.strokeRect(x, y, bw, bh);
  const ff = clamp(f, 0, 1);
  g.fillStyle = col;
  g.fillRect(x + 3, y + bh - 3 - (bh - 6) * ff, bw - 6, (bh - 6) * ff);
  if (red !== null) {
    g.fillStyle = RED;
    g.fillRect(x - 4, y + bh * (1 - red) - 2, bw + 8, 4);
  }
}

function engineColumn(g, x, y, bw, bh, label, vals, maxes, reds, fmt, w, h) {
  g.fillStyle = WHITE;
  g.font = FONT(h * 0.07);
  g.textAlign = 'center';
  g.fillText(label, x + bw * 1.6, y - h * 0.05);
  for (let i = 0; i < 2; i++) {
    const xx = x + i * bw * 2.2;
    const f = vals[i] / maxes;
    const over = f > reds;
    tape(g, xx, y, bw, bh, f, over ? RED : GREEN, reds);
    g.fillStyle = over ? RED : GREEN;
    g.font = MONO(h * 0.065);
    g.fillText(fmt(vals[i]), xx + bw / 2, y + bh + h * 0.075);
  }
}

// Display motori principale: coppia, ITT, NP per i due motori
export function drawEngineDisplay(g, w, h, s) {
  bg(g, w, h);
  const bw = w * 0.055, bh = h * 0.58, y = h * 0.17;
  engineColumn(g, w * 0.05, y, bw, bh, 'TRQ %', s.trq, 120, 100 / 120, (v) => String(Math.round(v)), w, h);
  engineColumn(g, w * 0.375, y, bw, bh, 'ITT °C', s.itt, 1000, 800 / 1000, (v) => String(Math.round(v)), w, h);
  engineColumn(g, w * 0.7, y, bw, bh, 'NP RPM', s.np, 1300, 1212 / 1300, (v) => String(Math.round(v)), w, h);
  g.textAlign = 'left';
  g.font = FONT(h * 0.06);
  g.fillStyle = CYAN;
  g.fillText('1', w * 0.035, h * 0.97);
  g.textAlign = 'right';
  g.fillText('2', w * 0.965, h * 0.97);
  if (s.rev) {
    g.textAlign = 'center';
    g.fillStyle = AMBER;
    g.fillText('BETA / REV', w / 2, h * 0.97);
  }
}

// Display motori secondario: NH, flusso carburante, olio
export function drawEngineLower(g, w, h, s) {
  bg(g, w, h);
  g.textBaseline = 'middle';
  const rows = [
    ['NH %', s.nh, (v) => v.toFixed(1), (v) => v > 103],
    ['FF KG/H', s.ff, (v) => String(Math.round(v)), () => false],
    ['OIL PSI', s.oilP, (v) => String(Math.round(v)), (v) => v < 40],
    ['OIL °C', s.oilT, (v) => String(Math.round(v)), (v) => v > 125],
  ];
  rows.forEach(([lab, vals, fmt, bad], i) => {
    const y = h * (0.16 + i * 0.225);
    g.font = FONT(h * 0.11);
    g.textAlign = 'center';
    g.fillStyle = WHITE;
    g.fillText(lab, w / 2, y);
    g.font = MONO(h * 0.13);
    for (let k = 0; k < 2; k++) {
      g.fillStyle = bad(vals[k]) ? AMBER : GREEN;
      g.textAlign = k === 0 ? 'left' : 'right';
      g.fillText(fmt(vals[k]), k === 0 ? w * 0.04 : w * 0.96, y);
    }
  });
}

// Display impianti: carburante, idraulico, flap, trim
export function drawSystemDisplay(g, w, h, s) {
  bg(g, w, h);
  g.textBaseline = 'middle';
  g.textAlign = 'center';
  // carburante
  g.fillStyle = WHITE;
  g.font = FONT(h * 0.07);
  g.fillText('FUEL KG', w * 0.2, h * 0.09);
  for (let i = 0; i < 2; i++) {
    const x = w * (0.07 + i * 0.16);
    tape(g, x, h * 0.16, w * 0.07, h * 0.5, s.fuel[i] / 2400, s.fuel[i] < 300 ? AMBER : GREEN);
    g.fillStyle = s.fuel[i] < 300 ? AMBER : GREEN;
    g.font = MONO(h * 0.06);
    g.fillText(String(Math.round(s.fuel[i])), x + w * 0.035, h * 0.74);
  }
  g.fillStyle = CYAN;
  g.font = MONO(h * 0.065);
  g.fillText('TOT ' + Math.round(s.fuel[0] + s.fuel[1]), w * 0.2, h * 0.88);
  // idraulico
  g.fillStyle = WHITE;
  g.font = FONT(h * 0.07);
  g.fillText('HYD PSI', w * 0.52, h * 0.09);
  ['1', '2'].forEach((n, i) => {
    g.fillStyle = s.hyd > 2500 ? GREEN : AMBER;
    g.font = MONO(h * 0.075);
    g.fillText(String(Math.round(s.hyd / 10) * 10), w * 0.52, h * (0.24 + i * 0.13));
    g.fillStyle = WHITE;
    g.font = FONT(h * 0.05);
    g.fillText('SYS ' + n, w * 0.52, h * (0.31 + i * 0.13));
  });
  // trim di profondità
  g.fillStyle = WHITE;
  g.font = FONT(h * 0.06);
  g.fillText('PITCH TRIM', w * 0.52, h * 0.62);
  g.strokeStyle = '#9aa';
  g.lineWidth = 2;
  g.strokeRect(w * 0.42, h * 0.68, w * 0.2, h * 0.06);
  g.fillStyle = GREEN;
  g.fillRect(w * 0.52 + clamp(s.trim, -1, 1) * w * 0.095 - 4, h * 0.665, 8, h * 0.09);
  g.font = FONT(h * 0.05);
  g.fillStyle = WHITE;
  g.fillText('DN', w * 0.4, h * 0.82);
  g.fillText('UP', w * 0.64, h * 0.82);
  // flap
  g.font = FONT(h * 0.07);
  g.fillText('FLAP', w * 0.84, h * 0.09);
  const fx = w * 0.76, fy = h * 0.22;
  g.strokeStyle = '#9aa';
  g.beginPath();
  g.moveTo(fx, fy);
  g.lineTo(fx, fy + h * 0.5);
  g.stroke();
  g.font = FONT(h * 0.05);
  g.textAlign = 'left';
  for (const d of [0, 10, 15, 25]) {
    const y = fy + (d / 25) * h * 0.5;
    g.fillStyle = WHITE;
    g.fillRect(fx, y - 1, 12, 2);
    g.fillText(String(d), fx + 18, y);
  }
  g.fillStyle = s.flapMoving ? AMBER : GREEN;
  const fyy = fy + (clamp(s.flap, 0, 25) / 25) * h * 0.5;
  g.beginPath();
  g.moveTo(fx - 4, fyy);
  g.lineTo(fx - 22, fyy - 9);
  g.lineTo(fx - 22, fyy + 9);
  g.closePath();
  g.fill();
  g.textAlign = 'center';
  g.font = MONO(h * 0.075);
  g.fillText(String(Math.round(s.flap)), w * 0.84, h * 0.86);
}

// ---------------------------------------------------------------------------
// WATER STATUS DISPLAY (glareshield): quantità nei 4 serbatoi, totale, schiuma
export function drawWaterStatus(g, w, h, s) {
  bg(g, w, h);
  g.textBaseline = 'middle';
  g.textAlign = 'center';
  for (let i = 0; i < 4; i++) {
    const x = w * (0.04 + i * 0.105), bw = w * 0.075;
    const f = s.tanks[i];
    g.strokeStyle = '#6a8';
    g.lineWidth = 2;
    g.strokeRect(x, h * 0.2, bw, h * 0.6);
    g.fillStyle = s.doors[i] ? RED : s.foam ? '#9df' : '#2fd04a';
    g.fillRect(x + 3, h * 0.2 + 3 + (h * 0.6 - 6) * (1 - f), bw - 6, (h * 0.6 - 6) * f);
    g.fillStyle = WHITE;
    g.font = FONT(h * 0.14);
    g.fillText(String(i + 1), x + bw / 2, h * 0.1);
  }
  g.fillStyle = s.foam ? '#9df' : GREEN;
  g.font = MONO(h * 0.36);
  g.textAlign = 'right';
  g.fillText(String(Math.round(s.total)), w * 0.86, h * 0.42);
  g.font = FONT(h * 0.16);
  g.textAlign = 'left';
  g.fillStyle = WHITE;
  g.fillText('LIT', w * 0.88, h * 0.42);
  g.font = MONO(h * 0.15);
  g.textAlign = 'left';
  g.fillStyle = s.scoop ? AMBER : '#2a5a32';
  g.fillText(s.scoop ? 'SCOOP' : 'SCOOP', w * 0.47, h * 0.82);
  g.fillStyle = s.foam ? CYAN : '#2a4a5a';
  g.fillText('FOAM ' + (s.foam ? s.foamPct + '%' : 'OFF'), w * 0.66, h * 0.82);
}

// WATER DROP CONTROL: display arancione a LED con modalità e preselezione
export function drawDropControl(g, w, h, s) {
  g.fillStyle = '#100604';
  g.fillRect(0, 0, w, h);
  g.fillStyle = '#ff8a1a';
  g.shadowColor = '#ff6a00';
  g.shadowBlur = 8;
  g.font = MONO(h * 0.38);
  g.textBaseline = 'middle';
  g.textAlign = 'left';
  g.fillText(s.mode, w * 0.05, h * 0.32);
  g.textAlign = 'right';
  g.fillText(String(s.preset).padStart(3, ' ') + '%', w * 0.95, h * 0.32);
  g.font = MONO(h * 0.22);
  g.textAlign = 'left';
  g.fillText(s.armed ? 'ARM' : 'SAFE', w * 0.05, h * 0.76);
  g.shadowBlur = 0;
  for (let i = 0; i < 4; i++) {
    const x = w * (0.42 + i * 0.14);
    g.fillStyle = s.doors[i] ? '#ff3a1a' : '#3a1a0c';
    g.fillRect(x, h * 0.64, w * 0.1, h * 0.24);
  }
}

// ---------------------------------------------------------------------------
// GPS "PROXIMITY WAYPOINTS": elenco dei punti vicini con distanza e rotta
export function drawGps(g, w, h, s) {
  bg(g, w, h);
  g.fillStyle = '#0a1a0c';
  g.fillRect(4, 4, w - 8, h - 8);
  g.font = MONO(h * 0.16);
  g.textBaseline = 'middle';
  g.textAlign = 'center';
  g.fillStyle = WHITE;
  g.fillText('Proximity waypoints', w / 2, h * 0.17);
  g.font = MONO(h * 0.15);
  s.list.forEach((p, i) => {
    const y = h * (0.42 + i * 0.2);
    g.textAlign = 'left';
    g.fillStyle = i === 0 ? CYAN : GREEN;
    g.fillText(p.n, w * 0.04, y);
    g.textAlign = 'right';
    g.fillText(`${String(p.b).padStart(3, '0')}° ${p.d.toFixed(1)}NM`, w * 0.97, y);
  });
}

// Radar meteo (lato copilota): spazzata a ventaglio, archi di distanza, rilievi del terreno
export function drawRadar(g, w, h, s) {
  bg(g, w, h);
  const cx = w / 2, cy = h * 0.9, R = h * 0.8;
  g.save();
  g.beginPath();
  g.moveTo(cx, cy);
  g.arc(cx, cy, R, -Math.PI / 2 - 1.05, -Math.PI / 2 + 1.05);
  g.closePath();
  g.clip();
  // ritorni del terreno (montagne attorno al lago)
  for (const r of s.returns) {
    const a = -Math.PI / 2 + r.a, d = r.d * R;
    const col = r.i > 0.75 ? '#e03020' : r.i > 0.45 ? '#e8d020' : '#20b040';
    g.fillStyle = col;
    g.globalAlpha = 0.85;
    g.beginPath();
    g.arc(cx + Math.cos(a) * d, cy + Math.sin(a) * d, 2.5 + r.i * 5, 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;
  // spazzata
  const sa = -Math.PI / 2 + s.sweep;
  const grd = g.createLinearGradient(cx, cy, cx + Math.cos(sa) * R, cy + Math.sin(sa) * R);
  grd.addColorStop(0, 'rgba(60,255,120,0.0)');
  grd.addColorStop(1, 'rgba(60,255,120,0.35)');
  g.strokeStyle = grd;
  g.lineWidth = 3;
  g.beginPath();
  g.moveTo(cx, cy);
  g.lineTo(cx + Math.cos(sa) * R, cy + Math.sin(sa) * R);
  g.stroke();
  g.restore();
  g.strokeStyle = 'rgba(120,255,160,0.55)';
  g.lineWidth = 1.5;
  for (const k of [0.25, 0.5, 0.75, 1]) {
    g.beginPath();
    g.arc(cx, cy, R * k, -Math.PI / 2 - 1.05, -Math.PI / 2 + 1.05);
    g.stroke();
  }
  g.fillStyle = GREEN;
  g.font = MONO(h * 0.07);
  g.textAlign = 'left';
  g.fillText('WX  10NM', 8, h * 0.08);
  g.textAlign = 'right';
  g.fillText('GAIN AUTO', w - 8, h * 0.08);
  g.fillStyle = AMBER;
  g.beginPath();
  g.moveTo(cx, cy - 10);
  g.lineTo(cx - 6, cy + 4);
  g.lineTo(cx + 6, cy + 4);
  g.closePath();
  g.fill();
}

// Orologio digitale a LED (rosso/arancio): ore:minuti e secondi
export function drawClockLed(g, w, h, s) {
  g.fillStyle = '#120706';
  g.fillRect(0, 0, w, h);
  g.fillStyle = '#2a1410';
  g.fillRect(6, 6, w - 12, h * 0.48 - 6);
  g.fillRect(w * 0.25, h * 0.56, w * 0.5, h * 0.38);
  g.fillStyle = '#ff8a1a';
  g.shadowColor = '#ff5a00';
  g.shadowBlur = 6;
  g.font = MONO(h * 0.34);
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(s.hm, w / 2, h * 0.27);
  g.font = MONO(h * 0.3);
  g.fillText(s.ss, w / 2, h * 0.75);
  g.shadowBlur = 0;
}

// Indicatore di incidenza (AOA) sul glareshield: arco verde/giallo/rosso
export function drawAoa(g, w, h, s) {
  const cx = w / 2, cy = h / 2, R = w * 0.46;
  g.fillStyle = '#0c0c0c';
  g.beginPath();
  g.arc(cx, cy, R, 0, Math.PI * 2);
  g.fill();
  const arc = (a0, a1, col) => {
    g.strokeStyle = col;
    g.lineWidth = R * 0.22;
    g.beginPath();
    g.arc(cx, cy, R * 0.78, a0, a1);
    g.stroke();
  };
  const A = (f) => Math.PI * 0.75 + f * Math.PI * 1.5;
  arc(A(0), A(0.55), '#1fb040');
  arc(A(0.55), A(0.78), '#e8c818');
  arc(A(0.78), A(1), '#d82018');
  g.strokeStyle = WHITE;
  g.lineWidth = 2;
  for (let k = 0; k <= 10; k++) {
    const a = A(k / 10);
    g.beginPath();
    g.moveTo(cx + Math.cos(a) * R * 0.62, cy + Math.sin(a) * R * 0.62);
    g.lineTo(cx + Math.cos(a) * R * 0.5, cy + Math.sin(a) * R * 0.5);
    g.stroke();
  }
  g.fillStyle = WHITE;
  g.font = FONT(R * 0.22);
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText('AOA', cx, cy + R * 0.42);
  const a = A(clamp(s.f, 0, 1));
  g.strokeStyle = '#ffffff';
  g.lineWidth = 4;
  g.beginPath();
  g.moveTo(cx, cy);
  g.lineTo(cx + Math.cos(a) * R * 0.72, cy + Math.sin(a) * R * 0.72);
  g.stroke();
  g.fillStyle = '#333';
  g.beginPath();
  g.arc(cx, cy, R * 0.09, 0, Math.PI * 2);
  g.fill();
}

// CDU del piedistallo (radio/navigazione): testo verde su fondo nero
export function drawCdu(g, w, h, s) {
  bg(g, w, h);
  g.font = MONO(h * 0.085);
  g.textBaseline = 'middle';
  s.lines.forEach((l, i) => {
    const y = h * (0.1 + i * 0.112);
    g.textAlign = 'left';
    g.fillStyle = i === 0 ? WHITE : l[2] || GREEN;
    g.fillText(l[0], w * 0.04, y);
    g.textAlign = 'right';
    g.fillText(l[1] || '', w * 0.96, y);
  });
}

// Display centrale dell'acqua (pannello principale): 4 serbatoi, totale, schiuma, portelli, preselezione
export function drawWaterMfd(g, w, h, s) {
  bg(g, w, h);
  g.textBaseline = 'middle';
  g.textAlign = 'center';
  g.fillStyle = WHITE;
  g.font = FONT(h * 0.065);
  g.fillText('WATER / FOAM', w / 2, h * 0.06);
  const bw = w * 0.11, bh = h * 0.52, y0 = h * 0.16;
  for (let i = 0; i < 4; i++) {
    const x = w * (0.06 + i * 0.135);
    g.strokeStyle = '#8aa';
    g.lineWidth = 2;
    g.strokeRect(x, y0, bw, bh);
    const f = clamp(s.tanks[i], 0, 1);
    const col = s.doors[i] ? RED : f > 0.97 ? '#e8d020' : s.foam ? '#7fd8ff' : '#2fd04a';
    g.fillStyle = col;
    g.fillRect(x + 3, y0 + 3 + (bh - 6) * (1 - f), bw - 6, (bh - 6) * f);
    // preselezione
    g.fillStyle = CYAN;
    g.fillRect(x - 3, y0 + bh * (1 - s.preset) - 1, bw + 6, 3);
    g.fillStyle = WHITE;
    g.font = FONT(h * 0.06);
    g.fillText(String(i + 1), x + bw / 2, y0 + bh + h * 0.05);
    g.fillStyle = s.doors[i] ? RED : '#333';
    g.fillRect(x, y0 + bh + h * 0.085, bw, h * 0.035);
  }
  g.textAlign = 'right';
  g.fillStyle = s.foam ? '#9df' : GREEN;
  g.font = MONO(h * 0.13);
  g.fillText(String(Math.round(s.total)), w * 0.97, h * 0.25);
  g.font = FONT(h * 0.06);
  g.fillStyle = WHITE;
  g.fillText('LITRI', w * 0.97, h * 0.35);
  g.font = MONO(h * 0.07);
  g.fillStyle = s.foam ? CYAN : '#466';
  g.fillText('FOAM ' + (s.foam ? s.foamPct + '%' : 'OFF'), w * 0.97, h * 0.48);
  g.fillStyle = s.scoop ? AMBER : '#454';
  g.fillText(s.scoop ? 'SCOOPING' : 'SCOOP', w * 0.97, h * 0.6);
  g.fillStyle = s.probes ? AMBER : '#454';
  g.fillText(s.probes ? 'PROBES DN' : 'PROBES UP', w * 0.97, h * 0.72);
  g.fillStyle = GREEN;
  g.fillText('PRESEL ' + Math.round(s.preset * 100) + '%', w * 0.97, h * 0.84);
  g.fillStyle = s.doorsOpen ? RED : '#454';
  g.textAlign = 'center';
  g.fillText(s.doorsOpen ? 'DOORS OPEN' : 'DOORS CLOSED', w * 0.32, h * 0.94);
}
