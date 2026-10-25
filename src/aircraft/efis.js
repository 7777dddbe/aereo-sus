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
