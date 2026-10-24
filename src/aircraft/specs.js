// Dati tecnici e geometria di riferimento del Canadair CL-415 (Bombardier 415 "Superscooper").
//
// Sistema di coordinate "scafo" usato per definire la geometria:
//   s = stazione longitudinale in metri dalla punta del muso (positiva verso coda)
//   h = altezza in metri sopra la chiglia al redan (step)
//   y = laterale in metri (positivo = ala destra)
// Sistema "corpo" (Three.js): X = destra, Y = alto, Z = verso coda (il muso guarda verso -Z),
// origine nel baricentro di riferimento (aereo vuoto).

import { DEG, monotoneCurve, clamp } from '../core/math.js';

export const SPEC = {
  name: 'Canadair CL-415',
  length: 19.82,
  span: 28.6,
  height: 8.98,
  wingArea: 100.33,
  chord: 3.51,
  aspect: (28.6 * 28.6) / 100.33,

  // Masse (kg)
  emptyMass: 12900, // massa operativa a vuoto con equipaggio
  maxFuel: 4650, // 5796 L di Jet-A1
  waterCapacity: 6137, // litri, 4 serbatoi
  foamCapacity: 680, // litri di schiumogeno
  mtowLand: 19890,
  mtowWater: 17168,
  maxAfterScoop: 21319,

  // Motori PW123AF + eliche Hamilton Standard 14SF-19
  enginePower: 1775e3, // W (2380 shp) al decollo
  propDiameter: 3.97,
  propRPM: 1200,
  propBlades: 4,

  // Velocità caratteristiche (nodi IAS)
  vmo: 200,
  vfe: { 10: 165, 15: 145, 25: 125 },
  vScoopMin: 60,
  vScoopMax: 95,
  vProbeMax: 105,

  flapDetents: [0, 10, 15, 25],
};

export const GEO = {
  L: 19.82,
  sCG: 7.95, // stazione del baricentro di riferimento (~27% MAC)
  hCG: 2.2, // altezza baricentro sopra la chiglia
  sStep: 8.95,

  wing: {
    sLE: 6.9,
    chord: 3.51,
    h: 3.78, // altezza della corda alare
    rootY: 1.3,
    halfSpan: 14.3,
    incidence: 2.0 * DEG,
    flapStart: 1.35,
    flapEnd: 9.85,
    ailStart: 10.05,
    ailEnd: 13.75,
    hingeX: 0.72, // frazione di corda della cerniera flap/alettoni
  },

  engine: {
    y: 3.95,
    sProp: 4.25,
    h: 4.65,
    sNacEnd: 11.6,
  },

  float: {
    y: 11.4,
    sFront: 6.75,
    sBack: 10.55,
    hBottom: 1.55,
    width: 0.78,
    height: 0.82,
  },

  htail: {
    sLE: 16.45,
    rootChord: 2.55,
    tipChord: 1.7,
    halfSpan: 5.6,
    h: 5.05,
    sweepLE: 1.0, // arretramento del bordo d'attacco alla punta (m)
    elevHinge: 0.62,
    finletY: 3.05,
  },

  vtail: {
    sRootLE: 14.0,
    rootChord: 5.4,
    hRoot: 3.15,
    hTip: 8.25,
    sTipLE: 17.55,
    tipChord: 2.15,
    rudderHinge: 0.66,
  },

  gear: {
    nose: { s: 2.55, pivotH: 0.62, legLen: 1.08, wheelR: 0.33, track: 0.42 },
    main: { s: 9.35, pivotY: 1.24, pivotH: 0.6, wheelY: 2.32, wheelH: -0.32, wheelR: 0.5, width: 0.34 },
  },

  probe: { s: 9.32, y: 0.42, hExt: -0.42 },

  // 4 portelli dei serbatoi sul fondo dello scafo (davanti al redan)
  doors: [
    { s: 6.95, y: -0.36 },
    { s: 6.95, y: 0.36 },
    { s: 8.05, y: -0.36 },
    { s: 8.05, y: 0.36 },
  ],
  doorSize: { len: 0.92, wid: 0.5 },
  tanksH: 0.95, // altezza media dell'acqua nei serbatoi pieni sopra la chiglia
  tankS: 7.6,
};

// Conversione coordinate scafo -> corpo
export function toBody(s, h, y = 0, out = { x: 0, y: 0, z: 0 }) {
  out.x = y;
  out.y = h - GEO.hCG;
  out.z = s - GEO.sCG;
  return out;
}

// ---------------------------------------------------------------------------
// Profili dello scafo (in funzione della stazione s)

const keelFore = monotoneCurve([
  [0.0, 1.3],
  [0.22, 0.86],
  [0.55, 0.52],
  [1.0, 0.29],
  [1.6, 0.13],
  [2.4, 0.04],
  [3.4, 0.0],
  [GEO.sStep, 0.0],
]);
const keelAft = monotoneCurve([
  [GEO.sStep, 0.24],
  [12.0, 0.62],
  [15.0, 1.02],
  [16.6, 1.27],
  [18.0, 1.72],
  [19.2, 2.32],
  [19.82, 2.62],
]);
export function keel(s) {
  return s < GEO.sStep ? keelFore(s) : keelAft(s);
}

export const roofTop = monotoneCurve([
  [0.0, 1.3],
  [0.12, 1.66],
  [0.4, 2.08],
  [0.85, 2.42],
  [1.15, 2.54],
  [2.05, 3.2],
  [2.6, 3.4],
  [3.4, 3.5],
  [12.0, 3.5],
  [13.6, 3.43],
  [15.5, 3.28],
  [17.5, 3.16],
  [19.0, 3.07],
  [19.82, 3.02],
]);

export const halfBeam = monotoneCurve([
  [0.0, 0.0],
  [0.06, 0.2],
  [0.28, 0.5],
  [0.7, 0.84],
  [1.2, 1.08],
  [2.0, 1.21],
  [3.0, 1.28],
  [4.0, 1.3],
  [11.6, 1.3],
  [13.0, 1.24],
  [14.5, 1.08],
  [16.0, 0.86],
  [17.5, 0.62],
  [18.8, 0.4],
  [19.82, 0.15],
]);

const deadriseFore = monotoneCurve([
  [0.0, 52],
  [1.0, 38],
  [2.5, 27],
  [5.0, 22],
  [GEO.sStep, 20],
]);
const deadriseAft = monotoneCurve([
  [GEO.sStep, 22],
  [14.0, 26],
  [17.0, 30],
  [19.82, 36],
]);
export function deadrise(s) {
  return (s < GEO.sStep ? deadriseFore(s) : deadriseAft(s)) * DEG;
}

export function chine(s) {
  const k = keel(s);
  const hb = halfBeam(s);
  const top = roofTop(s);
  return Math.min(k + hb * Math.tan(deadrise(s)), top - 0.08);
}

// ---------------------------------------------------------------------------
// Sezione trasversale: restituisce tre "strisce" di punti (metà destra, y >= 0)
// roof: dal colmo (y=0) alla spalla e giù lungo la fiancata fino allo spigolo (chine)
// bottom: dallo spigolo alla chiglia
// I punti sono [y, h].
export function hullSection(s, nRoof = 22, nBottom = 9) {
  const k = keel(s);
  const top = roofTop(s);
  const hb = Math.max(halfBeam(s), 0.0005);
  const ch = chine(s);
  const height = Math.max(top - ch, 0.01);
  const rv = Math.min(1.25, height * 0.48); // altezza della spalla arrotondata
  const shoulderH = top - rv;
  const roof = [];
  const nArc = Math.round(nRoof * 0.7);
  const nSide = nRoof - nArc;
  const ex = 2 / 2.7; // superellisse
  for (let i = 0; i <= nArc; i++) {
    const phi = (i / nArc) * (Math.PI / 2);
    const sx = Math.pow(Math.sin(phi), ex);
    const cy = Math.pow(Math.cos(phi), ex);
    roof.push([hb * sx, shoulderH + rv * cy]);
  }
  // fiancata: leggera svasatura verso lo spigolo (spray rail)
  for (let i = 1; i <= nSide; i++) {
    const t = i / nSide;
    const hh = shoulderH + (ch - shoulderH) * t;
    const flare = 0.035 * Math.pow(t, 6) * clamp(hb / 0.6, 0, 1);
    roof.push([hb + flare, hh]);
  }
  const bottom = [];
  const hbC = hb + 0.035 * clamp(hb / 0.6, 0, 1);
  for (let i = 0; i <= nBottom; i++) {
    const t = i / nBottom; // 0 spigolo -> 1 chiglia
    const f = 1 - t;
    const yy = hbC * f;
    // fondo leggermente convesso
    const hh = k + (ch - k) * (f - 0.07 * f * (1 - f));
    bottom.push([yy, hh]);
  }
  return { roof, bottom, keel: k, top, chine: ch, halfBeam: hb };
}

// Altezza h della fiancata a cui si trova la frazione di perimetro t (usata dalla livrea).
export function sectionPerimeter(s) {
  const sec = hullSection(s);
  const pts = sec.roof.concat(sec.bottom.slice(1));
  const cum = [0];
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i][0] - pts[i - 1][0];
    const dy = pts[i][1] - pts[i - 1][1];
    cum.push(cum[i - 1] + Math.hypot(dx, dy));
  }
  return { pts, cum, total: cum[cum.length - 1] };
}
