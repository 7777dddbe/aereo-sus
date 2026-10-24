// Livrea dipinta proceduralmente: giallo/rosso con filetto bianco (stile antincendio europeo),
// pannello antiriflesso, porte, linee dei pannelli, rivetti, scritte, sporco e macchie d'acqua.

import * as THREE from 'three';
import { GEO, halfBeam, keel, chine, deadrise } from './specs.js';
import { monotoneCurve, clamp, rng, smoothstep } from '../core/math.js';
import { tOfHeight, tOfY, sectionT, pointAtT, windowAt } from './hullgeo.js';
import { makeCanvas, canvasTexture } from '../core/textures.js';

export const COLORS = {
  yellow: '#f4b000',
  yellowDark: '#d9a400',
  red: '#c3141e',
  white: '#f4f2ea',
  black: '#17181a',
  glass: '#0d1418',
  frame: '#1d1f22',
};

// Linea di separazione rosso/giallo sulla fusoliera (quota h in funzione della stazione s)
export const redLine = monotoneCurve([
  [0.0, 2.2],
  [0.55, 2.3],
  [1.15, 2.08],
  [2.0, 1.72],
  [3.1, 1.46],
  [6.0, 1.4],
  [10.6, 1.4],
  [13.0, 1.72],
  [15.5, 2.22],
  [17.6, 2.66],
  [19.82, 2.95],
]);

function normalFromBump(canvas, strength = 2.2) {
  const w = canvas.width, h = canvas.height;
  const src = canvas.getContext('2d').getImageData(0, 0, w, h).data;
  const out = makeCanvas(w, h);
  const ctx = out.getContext('2d');
  const img = ctx.createImageData(w, h);
  const d = img.data;
  const H = (x, y) => src[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = (H(x - 1, y) - H(x + 1, y)) * strength;
      const dy = (H(x, y - 1) - H(x, y + 1)) * strength;
      const inv = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      const i = (y * w + x) * 4;
      d[i] = (dx * inv * 0.5 + 0.5) * 255;
      d[i + 1] = (-dy * inv * 0.5 + 0.5) * 255;
      d[i + 2] = (inv * 0.5 + 0.5) * 255;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(out);
  tex.colorSpace = THREE.NoColorSpace;
  tex.anisotropy = 8;
  return tex;
}

// ---------------------------------------------------------------------------
export function paintFuselage({ quality = 'medium', number = '21', reg = 'I-SUSA', text = 'ANTINCENDIO' } = {}) {
  const W = quality === 'high' ? 4096 : quality === 'low' ? 1024 : 2048;
  const H = W / 2;
  const L = GEO.L;
  const cv = makeCanvas(W, H);
  const g = cv.getContext('2d');
  const bump = makeCanvas(W, H);
  const b = bump.getContext('2d');
  b.fillStyle = 'rgb(128,128,128)';
  b.fillRect(0, 0, W, H);

  const X = (s) => (s / L) * W;
  const tCache = new Map();
  const tH = (s, h) => {
    const k = Math.round(s * 1000) + ':' + Math.round(h * 1000);
    let v = tCache.get(k);
    if (v === undefined) {
      v = tOfHeight(s, h);
      tCache.set(k, v);
    }
    return v;
  };
  const Y = (side, t) => (side < 0 ? (t * H) / 2 : H - (t * H) / 2);
  const YH = (side, s, h) => Y(side, tH(s, h));
  const sides = [-1, 1];

  // base gialla con leggera variazione
  g.fillStyle = COLORS.yellow;
  g.fillRect(0, 0, W, H);

  // regione rossa inferiore
  const step = 0.04;
  g.fillStyle = COLORS.red;
  for (const side of sides) {
    g.beginPath();
    g.moveTo(X(0), Y(side, 1));
    for (let s = 0; s <= L + 1e-6; s += step) g.lineTo(X(s), YH(side, s, redLine(s)));
    g.lineTo(X(L), Y(side, 1));
    g.closePath();
    g.fill();
  }
  // filetto bianco + sottile linea rossa superiore
  const band = (offA, offB, color, s0, s1) => {
    g.fillStyle = color;
    for (const side of sides) {
      g.beginPath();
      for (let s = s0; s <= s1 + 1e-6; s += step) g.lineTo(X(s), YH(side, s, redLine(s) + offB));
      for (let s = s1; s >= s0 - 1e-6; s -= step) g.lineTo(X(s), YH(side, s, redLine(s) + offA));
      g.closePath();
      g.fill();
    }
  };
  band(0.025, 0.085, COLORS.white, 0.75, L);
  band(0.28, 0.36, COLORS.red, 3.4, 17.6);

  // pannello antiriflesso nero sul muso
  g.fillStyle = COLORS.black;
  for (const side of sides) {
    g.beginPath();
    g.moveTo(X(0.32), Y(side, 0));
    for (let s = 0.32; s <= 1.24; s += 0.02) {
      const f = smoothstep(0.32, 0.6, s);
      g.lineTo(X(s), Y(side, tOfY(s, halfBeam(s) * (0.25 + 0.55 * f))));
    }
    g.lineTo(X(1.24), Y(side, 0));
    g.closePath();
    g.fill();
  }

  // finestrini e cornici (per pixel, nella zona della cabina)
  {
    const x0 = Math.floor(X(0.95)), x1 = Math.ceil(X(3.55));
    const img = g.getImageData(x0, 0, x1 - x0, H);
    const bimg = b.getImageData(x0, 0, x1 - x0, H);
    const d = img.data, bd = bimg.data;
    const frame = [0x1d, 0x1f, 0x22], glass = [0x0d, 0x14, 0x18];
    for (let x = x0; x < x1; x++) {
      const s = ((x + 0.5) / W) * L;
      const cache = sectionT(s);
      for (let y = 0; y < H; y++) {
        const t = y < H / 2 ? (y + 0.5) / (H / 2) : (H - y - 0.5) / (H / 2);
        if (t > 0.75) continue;
        const [py, ph] = pointAtT(cache, t);
        const wf = windowAt(s, py, ph, 0.075);
        if (!wf) continue;
        const wi = windowAt(s, py, ph, 0);
        const c = wi ? glass : frame;
        const i = (y * (x1 - x0) + (x - x0)) * 4;
        d[i] = c[0];
        d[i + 1] = c[1];
        d[i + 2] = c[2];
        const bv = wi ? 128 : 100;
        bd[i] = bd[i + 1] = bd[i + 2] = bv;
      }
    }
    g.putImageData(img, x0, 0);
    b.putImageData(bimg, x0, 0);
  }

  // linee dei pannelli, ordinate e rivetti
  const line = (ctx, pts, color, width) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.stroke();
  };
  const pxm = W / L;
  const lw = Math.max(1, pxm * 0.006);
  for (const side of sides) {
    // ordinate verticali
    for (let s = 3.7; s < 18.6; s += 0.53) {
      const pts = [];
      for (let t = 0.03; t <= 0.97; t += 0.02) pts.push([X(s), Y(side, t)]);
      line(g, pts, 'rgba(40,30,0,0.16)', lw);
      line(b, pts, 'rgb(96,96,96)', lw * 1.4);
      // rivetti
      for (let t = 0.05; t < 0.95; t += 0.012) {
        b.fillStyle = 'rgb(150,150,150)';
        b.fillRect(X(s) + lw * 2, Y(side, t), lw * 0.9, lw * 0.9);
        b.fillRect(X(s) - lw * 2.5, Y(side, t), lw * 0.9, lw * 0.9);
      }
    }
    // correnti longitudinali
    for (const hh of [3.05, 2.45, 0.95]) {
      const pts = [];
      for (let s = 2.6; s < 18.5; s += 0.1) {
        if (hh > keel(s) + 0.2 && hh < 3.3) pts.push([X(s), YH(side, s, hh)]);
      }
      if (pts.length > 2) {
        line(g, pts, 'rgba(40,30,0,0.12)', lw);
        line(b, pts, 'rgb(100,100,100)', lw * 1.3);
      }
    }
    // spigolo (chine) e redan
    const cp = [];
    for (let s = 0.4; s < L; s += 0.05) cp.push([X(s), YH(side, s, chine(s) + 0.004)]);
    line(g, cp, 'rgba(60,0,0,0.45)', lw * 1.5);
    line(b, cp, 'rgb(150,150,150)', lw * 2);
    const stepPts = [];
    for (let t = 0.6; t <= 1.0; t += 0.01) stepPts.push([X(GEO.sStep), Y(side, t)]);
    line(g, stepPts, 'rgba(20,0,0,0.6)', lw * 3);
    line(b, stepPts, 'rgb(60,60,60)', lw * 3);
  }

  // porte, uscite di emergenza, botole (contorni)
  const rectSide = (side, s0, s1, h0, h1, r, stroke, fill, bumpStroke = true) => {
    const pts = [];
    const corner = (cs, ch, a0) => {
      for (let k = 0; k <= 6; k++) {
        const a = a0 + (k / 6) * (Math.PI / 2);
        pts.push([cs + Math.cos(a) * r, ch + Math.sin(a) * r]);
      }
    };
    corner(s1 - r, h1 - r, 0);
    corner(s0 + r, h1 - r, Math.PI / 2);
    corner(s0 + r, h0 + r, Math.PI);
    corner(s1 - r, h0 + r, (3 * Math.PI) / 2);
    const P = pts.map(([s, h]) => [X(s), YH(side, s, h)]);
    if (fill) {
      g.fillStyle = fill;
      g.beginPath();
      P.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
      g.closePath();
      g.fill();
    }
    g.strokeStyle = stroke;
    g.lineWidth = lw * 2.2;
    g.beginPath();
    P.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
    g.closePath();
    g.stroke();
    if (bumpStroke) {
      b.strokeStyle = 'rgb(70,70,70)';
      b.lineWidth = lw * 2.5;
      b.beginPath();
      P.forEach(([x, y], i) => (i ? b.lineTo(x, y) : b.moveTo(x, y)));
      b.closePath();
      b.stroke();
    }
  };
  // porta equipaggio (sinistra) e porta posteriore
  rectSide(-1, 3.58, 4.42, 1.22, 2.92, 0.12, 'rgba(25,20,10,0.75)');
  rectSide(-1, 3.86, 4.16, 2.25, 2.62, 0.05, COLORS.frame, COLORS.glass, false);
  rectSide(-1, 12.05, 12.9, 1.32, 2.72, 0.1, 'rgba(25,20,10,0.75)');
  // uscite d'emergenza e finestrini cabina
  for (const side of sides) {
    rectSide(side, 5.05, 5.62, 1.95, 2.72, 0.08, 'rgba(25,20,10,0.7)');
    rectSide(side, 5.18, 5.5, 2.25, 2.55, 0.06, COLORS.frame, COLORS.glass, false);
    for (const s of [7.0, 9.6, 14.6]) rectSide(side, s, s + 0.32, 2.42, 2.72, 0.07, COLORS.frame, COLORS.glass, false);
  }
  rectSide(1, 12.1, 12.9, 1.4, 2.6, 0.1, 'rgba(25,20,10,0.7)');
  // vani ruote del carrello principale (scuri, la ruota retratta resta in vista)
  for (const side of sides) rectSide(side, 8.72, 9.98, 1.28, 2.5, 0.25, 'rgba(10,10,10,0.9)', '#2a2a2a');
  // portelli dei serbatoi sul fondo + feritoie sonde
  g.fillStyle = 'rgba(40,0,0,0.0)';
  for (const d of GEO.doors) {
    const side = d.y < 0 ? -1 : 1;
    const s0 = d.s - GEO.doorSize.len / 2, s1 = d.s + GEO.doorSize.len / 2;
    const y0 = Math.abs(d.y) - GEO.doorSize.wid / 2, y1 = Math.abs(d.y) + GEO.doorSize.wid / 2;
    const pts = [];
    const hAt = (s, y) => keel(s) + y * Math.tan(deadrise(s));
    for (const [s, y] of [[s0, y0], [s1, y0], [s1, y1], [s0, y1], [s0, y0]]) pts.push([X(s), YH(side, s, hAt(s, y))]);
    line(g, pts, 'rgba(20,0,0,0.85)', lw * 2.5);
    line(b, pts, 'rgb(60,60,60)', lw * 3);
  }
  for (const side of sides) {
    const s = GEO.probe.s, y = GEO.probe.y;
    const h = keel(s) + y * Math.tan(deadrise(s));
    g.fillStyle = 'rgba(15,10,10,0.9)';
    const x = X(s - 0.22), yy = YH(side, s, h + 0.05);
    g.fillRect(x, Math.min(yy, YH(side, s, h - 0.05)), X(0.44), Math.abs(YH(side, s, h - 0.05) - yy) + 2);
  }

  // scritte
  const textSide = (side, str, sC, hC, heightM, color, { stroke = null, font = '900', family = 'Arial Black, Arial, sans-serif', widthScale = 1 } = {}) => {
    const cx = X(sC);
    const cy = YH(side, sC, hC);
    const dy = Math.abs(YH(side, sC, hC + 0.05) - YH(side, sC, hC - 0.05)) / 0.1; // px/m verticali
    const fontPx = heightM * dy;
    g.save();
    g.translate(cx, cy);
    if (side > 0) g.rotate(Math.PI);
    g.scale((pxm / dy) * widthScale, 1);
    g.font = `${font} ${fontPx * 1.33}px ${family}`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    if (stroke) {
      g.lineWidth = fontPx * 0.08;
      g.strokeStyle = stroke;
      g.strokeText(str, 0, 0);
    }
    g.fillStyle = color;
    g.fillText(str, 0, 0);
    g.restore();
  };
  for (const side of sides) {
    textSide(side, text, 8.55, 2.06, 0.5, COLORS.red, { stroke: 'rgba(90,0,0,0.6)', widthScale: 0.95 });
    textSide(side, number, 16.9, 2.85, 0.62, COLORS.black, { widthScale: 0.9 });
    textSide(side, reg, 14.0, 2.68, 0.2, COLORS.black, { font: 'bold', family: 'Arial, sans-serif' });
    textSide(side, 'SOCCORSO', 1.85, 1.68, 0.11, COLORS.white, { font: 'bold', family: 'Arial, sans-serif' });
    // tricolore
    const fs = 15.15, fh = 2.5;
    const cols = ['#0b8a3e', '#f4f2ea', '#c8102e'];
    for (let k = 0; k < 3; k++) {
      const s0 = fs + k * 0.13 * (side > 0 ? -1 : 1);
      g.fillStyle = cols[k];
      const ya = YH(side, s0, fh + 0.12), yb = YH(side, s0, fh - 0.12);
      g.fillRect(X(Math.min(s0, s0 + 0.13 * (side > 0 ? -1 : 1))), Math.min(ya, yb), X(0.13), Math.abs(yb - ya));
    }
  }

  // sporco: macchie d'acqua sul fondo, aloni, sbiadimento
  const r = rng(1234);
  g.globalCompositeOperation = 'multiply';
  for (let i = 0; i < 700; i++) {
    const side = r() < 0.5 ? -1 : 1;
    const s = 1 + r() * 17.5;
    const t = 0.55 + r() * 0.45;
    const x = X(s), y = Y(side, t);
    const a = 0.03 + r() * 0.06;
    g.fillStyle = `rgba(${120 + r() * 60},${110 + r() * 50},${100 + r() * 40},${a})`;
    g.fillRect(x, y - (side < 0 ? 0 : 1) * 0, 2 + r() * pxm * 0.8, (side < 0 ? 1 : -1) * (pxm * (0.1 + r() * 0.5)));
  }
  // linea di galleggiamento sporca
  for (const side of sides) {
    for (let s = 0.8; s < 18; s += 0.02) {
      const hh = keel(s) + 0.85 + Math.sin(s * 5.3) * 0.06;
      if (hh > 3) continue;
      const y = YH(side, s, hh);
      g.fillStyle = `rgba(150,150,140,${0.05 + 0.05 * r()})`;
      g.fillRect(X(s), y - 2, pxm * 0.03, 4 + r() * 6);
    }
  }
  g.globalCompositeOperation = 'source-over';
  // leggera variazione della vernice
  for (let i = 0; i < 2500; i++) {
    g.fillStyle = `rgba(${r() < 0.5 ? '255,255,255' : '0,0,0'},${0.012 + r() * 0.02})`;
    g.fillRect(r() * W, r() * H, 4 + r() * pxm * 0.6, 4 + r() * pxm * 0.4);
  }

  const map = canvasTexture(cv, { srgb: true, aniso: 8 });
  const normalMap = normalFromBump(bump, 2.5);
  return { map, normalMap, canvas: cv };
}

// ---------------------------------------------------------------------------
// Texture dell'ala: u = apertura (0 radice .. 1 estremità), v = profilo (0 TE dorso, 0.5 LE, 1 TE ventre)
export function paintWing({ quality = 'medium' } = {}) {
  const W = quality === 'high' ? 2048 : 1024;
  const H = quality === 'high' ? 512 : 256;
  const span = GEO.wing.halfSpan;
  const chord = GEO.wing.chord;
  const cv = makeCanvas(W, H);
  const g = cv.getContext('2d');
  const img = g.createImageData(W, H);
  const d = img.data;
  const hex = (c) => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
  const Y = hex(COLORS.yellow), R = hex(COLORS.red), Wt = hex(COLORS.white), Gr = [38, 39, 38];
  const tan = Math.tan(30 * Math.PI / 180);
  const r = rng(77);
  for (let py = 0; py < H; py++) {
    const v = 1 - (py + 0.5) / H; // flipY
    const upper = v < 0.5;
    const xc = upper ? 1 - 2 * v : 2 * v - 1; // 0 LE .. 1 TE
    for (let px = 0; px < W; px++) {
      const y = ((px + 0.5) / W) * span;
      let c = Y;
      const sl = (xc - 0.5) * chord * tan;
      const ds = y - (10.75 + sl);
      if (ds > -0.6 && ds < 0.6) c = Math.abs(ds) < 0.2 ? Wt : R;
      if (y > 13.15 + sl * 0.6) c = R;
      // camminamento antiscivolo sul dorso vicino alla fusoliera
      if (upper && y > 1.35 && y < 2.9 && xc > 0.12 && xc < 0.62) c = Gr;
      let k = 1;
      // fuliggine degli scarichi sul dorso, dietro la gondola (lato esterno)
      if (upper) {
        const sy = GEO.engine.y + 0.62 + (xc - 0.35) * 0.25;
        const w = 0.18 + xc * 0.55;
        const dd = Math.abs(y - sy);
        if (xc > 0.3 && dd < w) k *= 1 - 0.5 * (1 - dd / w) * smoothstep(0.3, 0.7, xc);
      }
      const i = (py * W + px) * 4;
      d[i] = c[0] * k;
      d[i + 1] = c[1] * k;
      d[i + 2] = c[2] * k;
      d[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  // linee dei pannelli
  const U = (y) => (y / span) * W;
  const V = (upper, xc) => (upper ? (1 - (0.5 - 0.5 * xc)) * H : (1 - (0.5 + 0.5 * xc)) * H);
  g.strokeStyle = 'rgba(40,30,0,0.28)';
  g.lineWidth = 1;
  for (const upper of [true, false]) {
    for (const xc of [0.12, 0.62, 0.715]) {
      g.beginPath();
      g.moveTo(0, V(upper, xc));
      g.lineTo(W, V(upper, xc));
      g.stroke();
    }
    for (let y = 1.3; y < span; y += 0.58) {
      g.beginPath();
      g.moveTo(U(y), V(upper, 0.02));
      g.lineTo(U(y), V(upper, 0.98));
      g.stroke();
    }
  }
  // tappi carburante
  g.fillStyle = 'rgba(30,30,30,0.6)';
  for (const y of [5.6, 8.4]) {
    g.beginPath();
    g.arc(U(y), V(true, 0.4), 3, 0, Math.PI * 2);
    g.fill();
  }
  const tex = canvasTexture(cv, { srgb: true, aniso: 8 });
  return tex;
}
