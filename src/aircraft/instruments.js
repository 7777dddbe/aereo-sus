// Strumenti di bordo: quadranti disegnati su un atlante (canvas), lancette 3D, orizzonte artificiale
// a shader, display digitali (quantità d'acqua, pannello di sgancio) e pannello annunciatori.

import * as THREE from 'three';
import { clamp, DEG } from '../core/math.js';

const CELL = 256;
const GRID = 8;

// Mappature valore -> angolo (gradi, orari dalle ore 12)
export const MAP = {
  asi: (v) => {
    // 40..250 kt su ~330°, scala espansa in basso
    const k = clamp(v, 0, 260);
    if (k < 40) return -160 + (k / 40) * 20;
    return -140 + ((k - 40) / 210) * 300;
  },
  radalt: (ft) => {
    const f = clamp(ft, 0, 2500);
    if (f <= 500) return -150 + (f / 500) * 180; // scala espansa 0-500
    return 30 + ((f - 500) / 2000) * 120;
  },
  torque: (p) => -135 + (clamp(p, 0, 120) / 120) * 270,
  itt: (c) => -135 + (clamp(c, 0, 1000) / 1000) * 270,
  nh: (p) => -135 + (clamp(p, 0, 110) / 110) * 270,
  np: (r) => -135 + (clamp(r, 0, 1300) / 1300) * 270,
  ff: (k) => -135 + (clamp(k, 0, 800) / 800) * 270,
  flaps: (d) => -60 + (clamp(d, 0, 25) / 25) * 150,
  fuel: (kg) => -120 + (clamp(kg, 0, 2400) / 2400) * 240,
  hyd: (psi) => -120 + (clamp(psi, 0, 4000) / 4000) * 240,
  g: (g) => -90 + ((clamp(g, -2, 4) + 2) / 6) * 270 - 45,
  trim: (t) => clamp(t, -1, 1) * 70,
};
// Variometro: scala non lineare (espansa vicino allo zero)
MAP.vsi = (fpm) => {
  const s = Math.sign(fpm);
  const a = Math.abs(fpm);
  let d;
  if (a <= 1000) d = (a / 1000) * 50;
  else if (a <= 2000) d = 50 + ((a - 1000) / 1000) * 40;
  else d = 90 + ((clamp(a, 2000, 6000) - 2000) / 4000) * 80;
  return -90 + s * d;
};

function polar(cx, cy, r, deg) {
  const a = (deg - 90) * DEG;
  return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
}

function drawDial(g, cx, cy, R, spec) {
  // fondo
  g.fillStyle = '#121314';
  g.beginPath();
  g.arc(cx, cy, R, 0, Math.PI * 2);
  g.fill();
  const map = spec.map;
  // archi colorati
  for (const a of spec.arcs || []) {
    g.strokeStyle = a.color;
    g.lineWidth = a.w || R * 0.07;
    g.beginPath();
    const a0 = (map(a.from) - 90) * DEG, a1 = (map(a.to) - 90) * DEG;
    g.arc(cx, cy, R * (a.r || 0.86), Math.min(a0, a1), Math.max(a0, a1));
    g.stroke();
  }
  // tacche
  g.strokeStyle = '#e8e8e8';
  for (const t of spec.ticks || []) {
    const [v, len, w] = t;
    const d = map(v);
    const [x0, y0] = polar(cx, cy, R * 0.93, d);
    const [x1, y1] = polar(cx, cy, R * (0.93 - len), d);
    g.lineWidth = w;
    g.beginPath();
    g.moveTo(x0, y0);
    g.lineTo(x1, y1);
    g.stroke();
  }
  // numeri
  g.fillStyle = '#f0f0f0';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = `bold ${Math.round(R * (spec.numSize || 0.2))}px Arial`;
  for (const [v, txt] of spec.labels || []) {
    const [x, y] = polar(cx, cy, R * (spec.numR || 0.66), map(v));
    g.fillText(txt, x, y);
  }
  if (spec.title) {
    g.font = `bold ${Math.round(R * 0.13)}px Arial`;
    g.fillStyle = '#d8d8d8';
    g.fillText(spec.title, cx, cy + R * (spec.titleY || 0.38));
  }
  if (spec.unit) {
    g.font = `${Math.round(R * 0.1)}px Arial`;
    g.fillStyle = '#bdbdbd';
    g.fillText(spec.unit, cx, cy - R * 0.34);
  }
  if (spec.redline !== undefined) {
    const d = map(spec.redline);
    const [x0, y0] = polar(cx, cy, R * 0.97, d);
    const [x1, y1] = polar(cx, cy, R * 0.7, d);
    g.strokeStyle = '#ff2a1a';
    g.lineWidth = R * 0.05;
    g.beginPath();
    g.moveTo(x0, y0);
    g.lineTo(x1, y1);
    g.stroke();
  }
}

function range(a, b, step, len, w) {
  const out = [];
  for (let v = a; v <= b + 1e-6; v += step) out.push([v, len, w]);
  return out;
}

const SPECS = {
  asi: {
    map: MAP.asi,
    ticks: [...range(40, 250, 10, 0.1, 2.5), ...range(40, 250, 5, 0.05, 1.5)],
    labels: [[40, '40'], [60, '60'], [80, '80'], [100, '100'], [120, '120'], [140, '140'], [160, '160'], [180, '180'], [200, '200'], [220, '220'], [240, '240']],
    arcs: [{ from: 66, to: 125, color: '#f2f2f2', r: 0.78, w: 6 }, { from: 85, to: 200, color: '#2fbf3a' }],
    redline: 200,
    title: 'NODI',
    numSize: 0.15,
  },
  vsi: {
    map: MAP.vsi,
    ticks: [...range(-2000, 2000, 500, 0.09, 2.5), ...range(-6000, 6000, 1000, 0.12, 3), ...range(-1000, 1000, 100, 0.05, 1.5)],
    labels: [[0, '0'], [1000, '1'], [2000, '2'], [4000, '4'], [6000, '6'], [-1000, '1'], [-2000, '2'], [-4000, '4'], [-6000, '6']],
    title: 'VERT SPEED',
    unit: 'x1000 FT/MIN',
    numSize: 0.2,
    titleY: 0.3,
  },
  radalt: {
    map: MAP.radalt,
    ticks: [...range(0, 500, 50, 0.08, 2), ...range(0, 500, 100, 0.13, 3), ...range(500, 2500, 500, 0.13, 3)],
    labels: [[0, '0'], [100, '1'], [200, '2'], [300, '3'], [400, '4'], [500, '5'], [1000, '10'], [2000, '20']],
    arcs: [{ from: 0, to: 200, color: '#ffb000', r: 0.8, w: 5 }],
    title: 'RAD ALT',
    unit: 'x100 FT',
    numSize: 0.17,
  },
  torque: {
    map: MAP.torque, ticks: [...range(0, 120, 10, 0.1, 2), ...range(0, 120, 5, 0.05, 1.5)],
    labels: [[0, '0'], [20, '2'], [40, '4'], [60, '6'], [80, '8'], [100, '10'], [120, '12']],
    arcs: [{ from: 0, to: 100, color: '#2fbf3a' }], redline: 106, title: 'TORQUE %', numSize: 0.2,
  },
  itt: {
    map: MAP.itt, ticks: [...range(0, 1000, 100, 0.1, 2), ...range(0, 1000, 50, 0.05, 1.5)],
    labels: [[0, '0'], [200, '2'], [400, '4'], [600, '6'], [800, '8'], [1000, '10']],
    arcs: [{ from: 300, to: 765, color: '#2fbf3a' }, { from: 765, to: 800, color: '#ffb000' }], redline: 800, title: 'ITT °C', numSize: 0.2,
  },
  nh: {
    map: MAP.nh, ticks: [...range(0, 110, 10, 0.1, 2), ...range(0, 110, 5, 0.05, 1.5)],
    labels: [[0, '0'], [20, '20'], [40, '40'], [60, '60'], [80, '80'], [100, '100']],
    arcs: [{ from: 66, to: 101, color: '#2fbf3a' }], redline: 103, title: 'NH %', numSize: 0.16,
  },
  np: {
    map: MAP.np, ticks: [...range(0, 1300, 100, 0.1, 2)],
    labels: [[0, '0'], [400, '4'], [800, '8'], [1200, '12']],
    arcs: [{ from: 900, to: 1212, color: '#2fbf3a' }], redline: 1236, title: 'NP RPM', unit: 'x100', numSize: 0.2,
  },
  ff: {
    map: MAP.ff, ticks: [...range(0, 800, 100, 0.1, 2), ...range(0, 800, 50, 0.05, 1.5)],
    labels: [[0, '0'], [200, '2'], [400, '4'], [600, '6'], [800, '8']],
    title: 'FUEL FLOW', unit: 'x100 KG/H', numSize: 0.2,
  },
  flaps: {
    map: MAP.flaps, ticks: [[0, 0.15, 3], [10, 0.15, 3], [15, 0.15, 3], [25, 0.15, 3], ...range(0, 25, 5, 0.07, 1.5)],
    labels: [[0, '0'], [10, '10'], [15, '15'], [25, '25']], title: 'FLAPS', numSize: 0.2,
  },
  fuel: {
    map: MAP.fuel, ticks: [...range(0, 2400, 400, 0.12, 2.5), ...range(0, 2400, 200, 0.06, 1.5)],
    labels: [[0, '0'], [800, '8'], [1600, '16'], [2400, '24']], arcs: [{ from: 0, to: 400, color: '#ffb000' }],
    title: 'FUEL', unit: 'x100 KG', numSize: 0.18,
  },
  hyd: {
    map: MAP.hyd, ticks: [...range(0, 4000, 500, 0.1, 2.5)],
    labels: [[0, '0'], [1000, '1'], [2000, '2'], [3000, '3'], [4000, '4']], arcs: [{ from: 2700, to: 3200, color: '#2fbf3a' }],
    title: 'HYD PSI', unit: 'x1000', numSize: 0.18,
  },
  g: {
    map: MAP.g, ticks: [...range(-2, 4, 1, 0.13, 3), ...range(-2, 4, 0.5, 0.07, 1.5)],
    labels: [[-2, '-2'], [-1, '-1'], [0, '0'], [1, '1'], [2, '2'], [3, '3'], [4, '4']], arcs: [{ from: 3.25, to: 4, color: '#ff2a1a' }],
    title: 'G', numSize: 0.18,
  },
};

export class InstrumentAtlas {
  constructor() {
    const c = document.createElement('canvas');
    c.width = c.height = CELL * GRID;
    this.canvas = c;
    this.g = c.getContext('2d');
    this.cells = {};
    this.next = 0;
    const g = this.g;
    g.fillStyle = '#000';
    g.fillRect(0, 0, c.width, c.height);
    // quadranti standard
    for (const k of Object.keys(SPECS)) this._cell(k, (gg, cx, cy, R) => drawDial(gg, cx, cy, R, SPECS[k]));
    this._cell('alt', (gg, cx, cy, R) => {
      drawDial(gg, cx, cy, R, {
        map: (v) => v * 36,
        ticks: [...range(0, 9.9, 1, 0.13, 3), ...range(0, 9.9, 0.2, 0.06, 1.5)],
        labels: Array.from({ length: 10 }, (_, i) => [i, String(i)]),
        numSize: 0.22,
        numR: 0.7,
      });
      gg.fillStyle = '#d8d8d8';
      gg.font = `bold ${R * 0.11}px Arial`;
      gg.fillText('ALT', cx, cy - R * 0.32);
      gg.fillText('FEET', cx, cy + R * 0.25);
      // finestrella Kollsman
      gg.fillStyle = '#000';
      gg.fillRect(cx + R * 0.22, cy - R * 0.08, R * 0.4, R * 0.16);
      gg.fillStyle = '#fff';
      gg.font = `${R * 0.12}px monospace`;
      gg.fillText('1013', cx + R * 0.42, cy + R * 0.005);
    });
    this._cell('clock', (gg, cx, cy, R) =>
      drawDial(gg, cx, cy, R, { map: (v) => v * 30, ticks: [...range(0, 11.9, 1, 0.14, 3), ...range(0, 11.9, 0.2, 0.05, 1)], labels: [[0, '12'], [3, '3'], [6, '6'], [9, '9']], numSize: 0.24 }),
    );
    this._cell('hsiCard', (gg, cx, cy, R) => {
      gg.fillStyle = '#121314';
      gg.beginPath();
      gg.arc(cx, cy, R, 0, Math.PI * 2);
      gg.fill();
      gg.strokeStyle = '#eee';
      gg.fillStyle = '#eee';
      gg.textAlign = 'center';
      gg.textBaseline = 'middle';
      for (let d = 0; d < 360; d += 5) {
        const len = d % 30 === 0 ? 0.14 : d % 10 === 0 ? 0.1 : 0.05;
        const [x0, y0] = polar(cx, cy, R * 0.95, d);
        const [x1, y1] = polar(cx, cy, R * (0.95 - len), d);
        gg.lineWidth = d % 10 === 0 ? 2.5 : 1.5;
        gg.beginPath();
        gg.moveTo(x0, y0);
        gg.lineTo(x1, y1);
        gg.stroke();
      }
      const lab = { 0: 'N', 90: 'E', 180: 'S', 270: 'W' };
      for (let d = 0; d < 360; d += 30) {
        gg.save();
        const [x, y] = polar(cx, cy, R * 0.68, d);
        gg.translate(x, y);
        gg.rotate(d * DEG);
        gg.font = `bold ${R * (lab[d] ? 0.2 : 0.16)}px Arial`;
        gg.fillStyle = lab[d] ? '#ffd040' : '#eee';
        gg.fillText(lab[d] || String(d / 10), 0, 0);
        gg.restore();
      }
    });
    this._cell('hsiOverlay', (gg, cx, cy, R) => {
      gg.clearRect(cx - R, cy - R, 2 * R, 2 * R);
      gg.fillStyle = '#ff8c00';
      gg.beginPath();
      gg.moveTo(cx, cy - R * 0.98);
      gg.lineTo(cx - R * 0.06, cy - R * 0.84);
      gg.lineTo(cx + R * 0.06, cy - R * 0.84);
      gg.fill();
      // aereo stilizzato
      gg.fillStyle = '#f2f2f2';
      gg.fillRect(cx - R * 0.03, cy - R * 0.25, R * 0.06, R * 0.5);
      gg.fillRect(cx - R * 0.28, cy - R * 0.06, R * 0.56, R * 0.06);
      gg.fillRect(cx - R * 0.12, cy + R * 0.18, R * 0.24, R * 0.05);
    }, true);
    this._cell('adiOverlay', (gg, cx, cy, R) => {
      gg.clearRect(cx - R, cy - R, 2 * R, 2 * R);
      // anello delle tacche di rollio
      gg.strokeStyle = '#f2f2f2';
      for (const d of [-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60]) {
        const len = Math.abs(d) % 30 === 0 ? 0.12 : 0.07;
        const [x0, y0] = polar(cx, cy, R * 0.97, d);
        const [x1, y1] = polar(cx, cy, R * (0.97 - len), d);
        gg.lineWidth = 3;
        gg.beginPath();
        gg.moveTo(x0, y0);
        gg.lineTo(x1, y1);
        gg.stroke();
      }
      // simbolo aereo fisso (arancio)
      gg.fillStyle = '#ffae00';
      gg.strokeStyle = '#000';
      gg.lineWidth = 2;
      const wing = (sx) => {
        gg.beginPath();
        gg.moveTo(cx + sx * R * 0.12, cy);
        gg.lineTo(cx + sx * R * 0.55, cy);
        gg.lineTo(cx + sx * R * 0.55, cy + R * 0.05);
        gg.lineTo(cx + sx * R * 0.18, cy + R * 0.05);
        gg.lineTo(cx + sx * R * 0.12, cy + R * 0.12);
        gg.closePath();
        gg.fill();
        gg.stroke();
      };
      wing(-1);
      wing(1);
      gg.fillRect(cx - R * 0.03, cy - R * 0.03, R * 0.06, R * 0.06);
      // indice del rollio
      gg.beginPath();
      gg.moveTo(cx, cy - R * 0.83);
      gg.lineTo(cx - R * 0.06, cy - R * 0.72);
      gg.lineTo(cx + R * 0.06, cy - R * 0.72);
      gg.fill();
    }, true);
    this._cell('tcFace', (gg, cx, cy, R) => {
      gg.fillStyle = '#121314';
      gg.beginPath();
      gg.arc(cx, cy, R, 0, Math.PI * 2);
      gg.fill();
      gg.strokeStyle = '#eee';
      gg.lineWidth = 4;
      for (const d of [-90, -70, 70, 90]) {
        const [x0, y0] = polar(cx, cy, R * 0.92, d);
        const [x1, y1] = polar(cx, cy, R * 0.75, d);
        gg.beginPath();
        gg.moveTo(x0, y0);
        gg.lineTo(x1, y1);
        gg.stroke();
      }
      gg.fillStyle = '#eee';
      gg.font = `bold ${R * 0.16}px Arial`;
      gg.textAlign = 'center';
      gg.fillText('L', cx - R * 0.72, cy + R * 0.35);
      gg.fillText('R', cx + R * 0.72, cy + R * 0.35);
      gg.font = `${R * 0.1}px Arial`;
      gg.fillText('2 MIN', cx, cy + R * 0.72);
      gg.fillText('TURN COORDINATOR', cx, cy - R * 0.45);
      // tubo della pallina
      gg.strokeStyle = '#ddd';
      gg.lineWidth = R * 0.16;
      gg.beginPath();
      gg.arc(cx, cy - R * 0.4, R * 0.9, Math.PI * 0.36, Math.PI * 0.64);
      gg.stroke();
      gg.strokeStyle = '#111';
      gg.lineWidth = 2;
      for (const sx of [-1, 1]) {
        gg.beginPath();
        gg.moveTo(cx + sx * R * 0.09, cy + R * 0.38);
        gg.lineTo(cx + sx * R * 0.09, cy + R * 0.58);
        gg.stroke();
      }
    });
    this._cell('tcPlane', (gg, cx, cy, R) => {
      gg.clearRect(cx - R, cy - R, 2 * R, 2 * R);
      gg.fillStyle = '#f2f2f2';
      gg.fillRect(cx - R * 0.7, cy - R * 0.03, R * 1.4, R * 0.07);
      gg.beginPath();
      gg.arc(cx, cy, R * 0.1, 0, Math.PI * 2);
      gg.fill();
      gg.fillRect(cx - R * 0.025, cy - R * 0.25, R * 0.05, R * 0.2);
    }, true);
    this._cell('bezel', (gg, cx, cy, R) => {
      gg.clearRect(cx - R, cy - R, 2 * R, 2 * R);
      const grd = gg.createRadialGradient(cx, cy, R * 0.82, cx, cy, R);
      grd.addColorStop(0, '#000');
      grd.addColorStop(0.5, '#2a2b2d');
      grd.addColorStop(1, '#0c0c0d');
      gg.fillStyle = grd;
      gg.beginPath();
      gg.arc(cx, cy, R, 0, Math.PI * 2);
      gg.arc(cx, cy, R * 0.86, 0, Math.PI * 2, true);
      gg.fill();
      // viti
      gg.fillStyle = '#555';
      for (const d of [45, 135, 225, 315]) {
        const [x, y] = polar(cx, cy, R * 0.93, d);
        gg.beginPath();
        gg.arc(x, y, R * 0.035, 0, Math.PI * 2);
        gg.fill();
      }
    }, true);
    this.texture = new THREE.CanvasTexture(c);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.anisotropy = 8;
  }

  _cell(name, fn, transparent = false) {
    const i = this.next++;
    const x = (i % GRID) * CELL, y = Math.floor(i / GRID) * CELL;
    if (transparent) this.g.clearRect(x, y, CELL, CELL);
    this.g.save();
    this.g.beginPath();
    this.g.rect(x, y, CELL, CELL);
    this.g.clip();
    fn(this.g, x + CELL / 2, y + CELL / 2, CELL / 2 - 2);
    this.g.restore();
    this.cells[name] = { x, y };
  }

  // geometria circolare mappata sulla cella
  disc(name, radius, segments = 40) {
    const c = this.cells[name];
    const g = new THREE.CircleGeometry(radius, segments);
    const uv = g.attributes.uv;
    const S = CELL * GRID;
    for (let i = 0; i < uv.count; i++) {
      const u = uv.getX(i), v = uv.getY(i);
      uv.setXY(i, (c.x + u * CELL) / S, 1 - (c.y + (1 - v) * CELL) / S);
    }
    return g;
  }
}

// Orizzonte artificiale: sfera di cielo/terra disegnata nello shader
export function adiMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { pitch: { value: 0 }, roll: { value: 0 } },
    vertexShader: `varying vec2 vUv;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      #include <logdepthbuf_vertex>
      }`,
    fragmentShader: `
      uniform float pitch; uniform float roll; varying vec2 vUv;
      #include <common>
      #include <logdepthbuf_pars_fragment>
      void main(){
        #include <logdepthbuf_fragment>
        vec2 p = vUv * 2.0 - 1.0;
        float c = cos(roll), s = sin(roll);
        vec2 q = vec2(c*p.x - s*p.y, s*p.x + c*p.y);
        float k = 2.6; // unità per radiante
        float y = q.y + pitch * k;
        vec3 sky = mix(vec3(0.12,0.38,0.78), vec3(0.25,0.55,0.9), clamp(y,0.0,1.0));
        vec3 gnd = mix(vec3(0.42,0.24,0.09), vec3(0.3,0.16,0.05), clamp(-y,0.0,1.0));
        vec3 col = y > 0.0 ? sky : gnd;
        float lw = 0.012;
        if (abs(y) < lw) col = vec3(1.0);
        // scala di beccheggio
        for (int i = -4; i <= 4; i++) {
          if (i == 0) continue;
          float deg = float(i) * 5.0;
          float yy = y - deg * 0.0174533 * k;
          float hw = (i == -4 || i == -2 || i == 2 || i == 4) ? 0.22 : 0.11;
          if (abs(yy) < 0.008 && abs(q.x) < hw) col = vec3(1.0);
        }
        // puntatore del cielo (ruota con l'orizzonte)
        if (q.y > 0.7 && q.y < 0.82 && abs(q.x) < (q.y - 0.7) * 0.6) col = vec3(1.0);
        float r = length(p);
        col *= smoothstep(1.0, 0.94, r);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`,
  });
}

// Display a cristalli liquidi/LED su canvas, aggiornati a bassa frequenza
export class Display {
  constructor(w, h, draw) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = w;
    this.canvas.height = h;
    this.g = this.canvas.getContext('2d');
    this.draw = draw;
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.last = '';
  }
  update(state) {
    const key = JSON.stringify(state);
    if (key === this.last) return;
    this.last = key;
    this.draw(this.g, this.canvas.width, this.canvas.height, state);
    this.texture.needsUpdate = true;
  }
}

export function drawWaterDisplay(g, w, h, s) {
  g.fillStyle = '#050806';
  g.fillRect(0, 0, w, h);
  g.strokeStyle = '#333';
  g.lineWidth = 4;
  g.strokeRect(2, 2, w - 4, h - 4);
  g.fillStyle = '#8f8';
  g.font = 'bold 22px monospace';
  g.textAlign = 'left';
  g.fillText('WATER QTY', 14, 30);
  g.textAlign = 'right';
  g.font = 'bold 54px monospace';
  g.fillStyle = s.foam ? '#9df' : '#5f5';
  g.fillText(String(Math.round(s.total)).padStart(4, ' '), w - 74, 92);
  g.font = 'bold 26px monospace';
  g.fillText('L', w - 40, 92);
  // barre dei 4 serbatoi
  for (let i = 0; i < 4; i++) {
    const x = 18 + i * 60, y0 = 120, hh = h - 140;
    g.strokeStyle = '#3a3';
    g.lineWidth = 2;
    g.strokeRect(x, y0, 44, hh);
    const f = s.tanks[i];
    g.fillStyle = s.doors[i] ? '#f44' : '#2c2';
    g.fillRect(x + 3, y0 + hh * (1 - f) + 3, 38, hh * f - 6 > 0 ? hh * f - 6 : 0);
    g.fillStyle = '#8f8';
    g.font = '16px monospace';
    g.textAlign = 'center';
    g.fillText(String(i + 1), x + 22, y0 - 6);
  }
  g.textAlign = 'left';
  g.font = 'bold 18px monospace';
  g.fillStyle = s.foam ? '#9df' : '#2a2';
  g.fillText(s.foam ? 'FOAM ' + s.foamPct + '%' : 'FOAM OFF', 268, 140);
  g.fillStyle = '#8f8';
  g.fillText('PRESEL', 268, 170);
  g.fillText(String(s.preset) + '%', 268, 195);
  g.fillStyle = s.scoop ? '#ff0' : '#272';
  g.fillText(s.scoop ? 'SCOOP' : '-----', 268, 225);
}

export function drawDropPanel(g, w, h, s) {
  g.fillStyle = '#111';
  g.fillRect(0, 0, w, h);
  g.fillStyle = '#000';
  g.fillRect(10, 10, w - 20, 54);
  g.fillStyle = '#ff9a1a';
  g.font = 'bold 30px monospace';
  g.textAlign = 'center';
  g.fillText(s.mode, w / 2, 48);
  g.font = 'bold 15px Arial';
  g.fillStyle = '#ddd';
  g.fillText('DROP MODE', w / 2, 86);
  const labels = ['1', '2', '3', '4'];
  for (let i = 0; i < 4; i++) {
    const x = 26 + i * ((w - 52) / 3);
    g.fillStyle = s.doors[i] ? '#ff3020' : s.armed ? '#3a1410' : '#2a2a2a';
    g.beginPath();
    g.arc(x, 112, 11, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#bbb';
    g.font = '12px Arial';
    g.fillText(labels[i], x, 116);
  }
}

const ANN = [
  ['STALL', 'w', 'stall'], ['OVERSPEED', 'w', 'overspeed'], ['GEAR DN\nWATER!', 'w', 'gearWater'], ['GEAR UP', 'w', 'gearUpLand'],
  ['PROBES\nDOWN', 'c', 'probes'], ['PROBE\nOVSPD', 'c', 'probeSpeed'], ['TANKS\nFULL', 'g', 'tanksFull'], ['DOORS\nOPEN', 'c', 'doors'],
  ['FLAP\nOVSPD', 'c', 'flapSpeed'], ['LOW\nFUEL', 'c', 'lowFuel'], ['OVER\nWEIGHT', 'c', 'overweight'], ['FOAM\nARMED', 'g', 'foam'],
  ['PARK\nBRAKE', 'c', 'park'], ['ENG 1\nFAIL', 'w', 'eng1'], ['ENG 2\nFAIL', 'w', 'eng2'], ['REV', 'g', 'rev'],
];

export function drawAnnunciator(g, w, h, s) {
  g.fillStyle = '#0c0c0c';
  g.fillRect(0, 0, w, h);
  const cols = 4, rows = 4;
  const cw = w / cols, ch = h / rows;
  ANN.forEach(([txt, kind, key], i) => {
    const x = (i % cols) * cw, y = Math.floor(i / cols) * ch;
    const on = !!s[key];
    const colOn = kind === 'w' ? '#ff2a1a' : kind === 'c' ? '#ffb000' : '#38e048';
    const colOff = kind === 'w' ? '#2a0c0a' : kind === 'c' ? '#2a2008' : '#0c240e';
    g.fillStyle = on ? colOn : colOff;
    g.fillRect(x + 3, y + 3, cw - 6, ch - 6);
    g.fillStyle = on ? '#111' : '#444';
    g.font = `bold ${Math.round(ch * 0.24)}px Arial`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    const lines = txt.split('\n');
    lines.forEach((l, k) => g.fillText(l, x + cw / 2, y + ch / 2 + (k - (lines.length - 1) / 2) * ch * 0.28));
  });
}
