// Modello 3D esterno del Canadair CL-415, costruito proceduralmente dalla geometria di riferimento.
// Tutte le parti mobili sono animate dagli impianti e dal modello di volo.

import * as THREE from 'three';
import { GEO, SPEC, keel, chine, deadrise, roofTop, halfBeam } from './specs.js';
import { monotoneCurve as curve, clamp, DEG, smoothstep, lerp } from '../core/math.js';
import { naca4, airfoilSlice, liftingSurface, loft, lathe, mirrorX, mergeGeos, strut } from './geom.js';
import { buildHull } from './hullgeo.js';
import { paintFuselage, paintWing, COLORS } from './livery.js';
import { softSprite } from '../core/textures.js';

const P = (s, h, y = 0) => new THREE.Vector3(y, h - GEO.hCG, s - GEO.sCG);

// Parte incernierata: ruota attorno all'asse p0->p1
class Hinge {
  constructor(parent, p0, p1) {
    this.pivot = new THREE.Group();
    this.pivot.position.copy(p0);
    this.axis = new THREE.Vector3().subVectors(p1, p0).normalize();
    this.origin = p0.clone();
    parent.add(this.pivot);
    this.angle = 0;
  }
  add(mesh) {
    mesh.geometry.translate(-this.origin.x, -this.origin.y, -this.origin.z);
    this.pivot.add(mesh);
    return mesh;
  }
  set(a) {
    if (a === this.angle) return;
    this.angle = a;
    this.pivot.quaternion.setFromAxisAngle(this.axis, a);
  }
}

function sliceV(foilSlice, steps = 10) {
  // v di texture per i punti di una sezione tagliata (dorso, faccia anteriore, ventre)
  const n = foilSlice.length;
  const front = n - 2 * (steps + 1);
  return foilSlice.map(([x], j) => {
    if (j <= steps) return 0.5 - 0.5 * x;
    if (j < steps + 1 + front) return 0.5;
    return 0.5 + 0.5 * x;
  });
}

export class AircraftModel {
  constructor({ quality = 'medium' } = {}) {
    this.quality = quality;
    this.group = new THREE.Group();
    this.group.name = 'CL415';
    this.time = 0;
    this._mats();
    this._fuselage();
    this._wing();
    this._nacelles();
    this._tail();
    this._floats();
    this._gear();
    this._probesDoors();
    this._lights();
    this._details();
    this.group.traverse((o) => {
      if (o.isMesh && !o.userData.noShadow && !o.userData.shadowOnly) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
      if (o.userData.noShadow && o.name === 'hull') o.receiveShadow = true;
    });
  }

  // ---------------------------------------------------------------------------
  _mats() {
    const q = this.quality;
    const paint = (color, extra = {}) =>
      new THREE.MeshPhysicalMaterial({ color, roughness: 0.46, metalness: 0, clearcoat: 0.32, clearcoatRoughness: 0.3, envMapIntensity: 0.8, ...extra });
    const liv = paintFuselage({ quality: q });
    const wingTex = paintWing({ quality: q });
    this.M = {
      hull: paint(0xffffff, { map: liv.map, normalMap: liv.normalMap, normalScale: new THREE.Vector2(0.45, 0.45) }),
      wing: paint(0xffffff, { map: wingTex }),
      yellow: paint(COLORS.yellow),
      red: paint(COLORS.red),
      white: paint(COLORS.white),
      black: new THREE.MeshStandardMaterial({ color: 0x141516, roughness: 0.55, metalness: 0.1 }),
      blade: new THREE.MeshStandardMaterial({ color: 0x121314, roughness: 0.5, metalness: 0.2, transparent: true }),
      bladeTip: new THREE.MeshStandardMaterial({ color: COLORS.yellow, roughness: 0.5, transparent: true }),
      spinner: new THREE.MeshPhysicalMaterial({ color: 0xe8e8e4, roughness: 0.25, metalness: 0.3, clearcoat: 0.8 }),
      chrome: new THREE.MeshStandardMaterial({ color: 0xd8dde2, roughness: 0.12, metalness: 1.0 }),
      gray: new THREE.MeshStandardMaterial({ color: 0x8a8d90, roughness: 0.45, metalness: 0.6 }),
      darkMetal: new THREE.MeshStandardMaterial({ color: 0x2a2624, roughness: 0.7, metalness: 0.7 }),
      rubber: new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.92, metalness: 0 }),
      inlet: new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 1 }),
      glass: new THREE.MeshPhysicalMaterial({
        color: 0x1c262c, roughness: 0.02, metalness: 0.0, transparent: true, opacity: 0.45,
        envMapIntensity: 1.6, side: THREE.DoubleSide, depthWrite: false, clearcoat: 1, clearcoatRoughness: 0.02,
      }),
    };
  }

  // ---------------------------------------------------------------------------
  _fuselage() {
    // l'esterno non ha fori: i finestrini sono dipinti scuri e coperti da un vetro riflettente;
    // dall'interno la fusoliera esterna non è visibile (facce posteriori) e il guscio interno ha le aperture.
    const { strips, glassGeo } = buildHull({ cutWindows: false, collectGlass: true, glassMargin: 0.04 });
    const geo = mergeGeos(strips);
    const hull = new THREE.Mesh(geo, this.M.hull);
    hull.name = 'hull';
    hull.userData.noShadow = true; // l'ombra la proietta la sagoma con i finestrini aperti
    hull.receiveShadow = true;
    this.group.add(hull);
    this.hull = hull;
    // sagoma invisibile per le ombre: con i finestrini aperti la luce del sole entra in cabina
    const proxy = new THREE.Mesh(
      mergeGeos(buildHull({ cutWindows: true }).strips),
      new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false, side: THREE.DoubleSide }),
    );
    proxy.castShadow = true;
    proxy.userData.shadowOnly = true;
    this.group.add(proxy);
    if (glassGeo) {
      // vetro leggermente all'interno della superficie esterna
      const p = glassGeo.attributes.position, n = glassGeo.attributes.normal;
      for (let i = 0; i < p.count; i++) p.setXYZ(i, p.getX(i) + n.getX(i) * 0.006, p.getY(i) + n.getY(i) * 0.006, p.getZ(i) + n.getZ(i) * 0.006);
      const glass = new THREE.Mesh(glassGeo, this.M.glass);
      glass.renderOrder = 10;
      glass.userData.noShadow = true;
      glass.name = 'glass';
      this.group.add(glass);
      this.glass = glass;
    }
    // chiusura posteriore del cono di coda
    const tail = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), this.M.yellow);
    tail.scale.set(0.9, 1.6, 0.5);
    tail.position.copy(P(GEO.L - 0.02, 2.85));
    this.group.add(tail);
    // telaio del parabrezza (montante centrale e contorni) in rilievo
    const frameMat = this.M.black;
    const post = [];
    for (let s = 1.18; s <= 2.05; s += 0.05) post.push(P(s, roofTop(s) + 0.006, 0));
    const postGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(post), 16, 0.035, 6, false);
    this.group.add(new THREE.Mesh(postGeo, frameMat));
  }

  // ---------------------------------------------------------------------------
  _wing() {
    const W = GEO.wing;
    const foilRoot = naca4(0.04, 0.4, 0.17, 26);
    const foilTip = naca4(0.04, 0.4, 0.135, 26);
    const inc = W.incidence;
    const chordDir = new THREE.Vector3(0, -Math.sin(inc), Math.cos(inc));
    const upDir = new THREE.Vector3(0, Math.cos(inc), Math.sin(inc));
    const leH = W.h + 0.25 * W.chord * Math.sin(inc);
    const blendFoil = (y) => {
      const t = clamp(y / W.halfSpan, 0, 1);
      return foilRoot.map((p, i) => [p[0], lerp(p[1], foilTip[i][1], t)]);
    };
    const hinge = W.hingeX;
    const station = (y, foil) => ({ le: P(W.sLE, leH, y), chord: W.chord, foil });
    const ys = [0];
    for (let y = 0.4; y < W.halfSpan; y += 0.45) ys.push(y);
    ys.push(W.halfSpan);
    const uvU = (arr) => arr.map((y) => y / W.halfSpan);

    // cassone alare (0 .. 71.5% corda) su tutta la semiala
    const boxStations = ys.map((y) => station(y, airfoilSlice(blendFoil(y), 0, hinge - 0.005)));
    const boxGeo = liftingSurface(null, boxStations, { chordDir, upDir, uvU: uvU(ys), capEnd: true, foilV: sliceV(boxStations[0].foil) });
    // bordi d'uscita fissi
    const teSegs = [[0, W.flapStart - 0.02], [W.flapEnd + 0.02, W.ailStart - 0.02], [W.ailEnd + 0.02, W.halfSpan]];
    const teGeos = teSegs.map(([a, b]) => {
      const yy = [a, (a + b) / 2, b];
      const st = yy.map((y) => station(y, airfoilSlice(blendFoil(y), hinge - 0.01, 1)));
      return liftingSurface(null, st, { chordDir, upDir, uvU: uvU(yy), capStart: true, capEnd: true, foilV: sliceV(st[0].foil) });
    });
    const rightWing = mergeGeos([boxGeo, ...teGeos]);
    const leftWing = mirrorX(rightWing);
    for (const g of [rightWing, leftWing]) {
      const m = new THREE.Mesh(g, this.M.wing);
      m.name = 'wing';
      this.group.add(m);
    }

    // flap (cerniera sotto la corda per il moto "Fowler") e alettoni
    const makeSurface = (y0, y1, x0, mat, hingeDrop) => {
      const yy = [];
      for (let y = y0; y <= y1 + 1e-6; y += (y1 - y0) / Math.max(2, Math.round((y1 - y0) / 0.6))) yy.push(y);
      const st = yy.map((y) => station(y, airfoilSlice(blendFoil(y), x0, 1, true)));
      const g = liftingSurface(null, st, { chordDir, upDir, uvU: uvU(yy), capStart: true, capEnd: true, foilV: sliceV(st[0].foil) });
      const hs = W.sLE + (x0 - 0.01) * W.chord;
      const hh = leH - (x0 - 0.01) * W.chord * Math.sin(inc) - hingeDrop;
      return { g, p0: P(hs, hh, y0), p1: P(hs, hh, y1) };
    };
    this.flaps = [];
    this.ailerons = [];
    for (const side of [1, -1]) {
      const f = makeSurface(W.flapStart, W.flapEnd, hinge + 0.008, this.M.wing, 0.32);
      const a = makeSurface(W.ailStart, W.ailEnd, hinge + 0.008, this.M.wing, 0.0);
      for (const [obj, list] of [[f, this.flaps], [a, this.ailerons]]) {
        let g = obj.g, p0 = obj.p0, p1 = obj.p1;
        if (side < 0) {
          g = mirrorX(g);
          p0 = p0.clone().setX(-p0.x);
          p1 = p1.clone().setX(-p1.x);
        }
        const h = new Hinge(this.group, p0, p1);
        h.add(new THREE.Mesh(g, this.M.wing));
        h.side = side;
        list.push(h);
      }
    }

    // carenatura ala-fusoliera
    const fairSecs = [];
    const fs = [6.2, 6.6, 7.2, 8.4, 9.6, 10.4, 11.1];
    const fw = [0.2, 0.62, 0.92, 1.05, 1.02, 0.85, 0.35];
    const fhTop = [3.52, 3.68, 3.82, 3.9, 3.86, 3.76, 3.6];
    fs.forEach((s, i) => {
      const pts = [];
      const n = 16;
      for (let k = 0; k <= n; k++) {
        const a = Math.PI * (k / n);
        const y = Math.cos(a) * fw[i];
        const h = 3.38 + (fhTop[i] - 3.38) * Math.pow(Math.sin(a), 0.5);
        pts.push(P(s, h, y));
      }
      fairSecs.push(pts);
    });
    const fair = new THREE.Mesh(loft(fairSecs, { capStart: true, capEnd: true, flip: true }), this.M.yellow);
    this.group.add(fair);

    // winglet (alette d'estremità)
    const wfoil = naca4(0, 0.3, 0.1, 12);
    for (const side of [1, -1]) {
      const hs = [0, 0.95];
      const st = hs.map((dh, i) => ({
        le: P(W.sLE + 0.55 + dh * 0.5, W.h + 0.12 + dh, side * (W.halfSpan + 0.02 + dh * 0.12)),
        chord: i === 0 ? 2.5 : 1.3,
      }));
      const g = liftingSurface(wfoil, st, { chordDir: new THREE.Vector3(0, 0, 1), upDir: new THREE.Vector3(side, 0, 0), capEnd: true, flip: side > 0 });
      this.group.add(new THREE.Mesh(g, this.M.red));
    }
  }

  // ---------------------------------------------------------------------------
  _nacelles() {
    const E = GEO.engine;
    const sArr = [4.4, 4.5, 4.75, 5.2, 5.9, 6.8, 7.8, 8.8, 9.8, 10.7, 11.3, 11.62];
    const hc = curve(sArr.map((s, i) => [s, [4.65, 4.645, 4.62, 4.58, 4.55, 4.54, 4.56, 4.6, 4.66, 4.74, 4.8, 4.85][i]]));
    const hw = curve(sArr.map((s, i) => [s, [0.35, 0.39, 0.46, 0.52, 0.55, 0.56, 0.55, 0.52, 0.45, 0.33, 0.2, 0.05][i]]));
    const hh = curve(sArr.map((s, i) => [s, [0.35, 0.4, 0.5, 0.6, 0.66, 0.67, 0.64, 0.58, 0.48, 0.34, 0.2, 0.05][i]]));
    const n = 28;
    const ex = 2 / 2.3;
    this.props = [];
    for (const side of [-1, 1]) {
      const y0 = side * E.y;
      const secs = [];
      const ss = [];
      for (let s = 4.4; s <= 11.62 + 1e-6; s += 0.18) ss.push(Math.min(s, 11.62));
      for (const s of ss) {
        const pts = [];
        for (let k = 0; k < n; k++) {
          const a = (k / n) * Math.PI * 2;
          const ca = Math.cos(a), sa = Math.sin(a);
          const yy = Math.sign(ca) * Math.pow(Math.abs(ca), ex) * hw(s);
          const zz = Math.sign(sa) * Math.pow(Math.abs(sa), ex) * hh(s);
          pts.push(P(s, hc(s) + zz, y0 + yy));
        }
        secs.push(pts);
      }
      const g = loft(secs, { closed: true, capEnd: true, flip: true });
      const nac = new THREE.Mesh(g, this.M.yellow);
      nac.name = 'nacelle';
      this.group.add(nac);
      // presa d'aria inferiore ("chin intake")
      const cs = [];
      const cS = [4.62, 4.75, 5.1, 5.6, 6.2, 6.7];
      const cW = [0.2, 0.24, 0.26, 0.25, 0.2, 0.08];
      const cD = [0.26, 0.3, 0.3, 0.26, 0.16, 0.04];
      cS.forEach((s, i) => {
        const pts = [];
        for (let k = 0; k < 16; k++) {
          const a = (k / 16) * Math.PI * 2;
          pts.push(P(s, hc(s) - hh(s) * 0.82 + Math.sin(a) * cD[i] * 0.5 - cD[i] * 0.3, y0 + Math.cos(a) * cW[i]));
        }
        cs.push(pts);
      });
      this.group.add(new THREE.Mesh(loft(cs, { closed: true, capEnd: true, flip: true }), this.M.yellow));
      const inlet = new THREE.Mesh(new THREE.CircleGeometry(1, 16), this.M.inlet);
      inlet.scale.set(0.2, 0.135, 1);
      inlet.position.copy(P(4.615, hc(4.62) - hh(4.62) * 0.82 - 0.078, y0));
      inlet.rotation.y = Math.PI;
      this.group.add(inlet);
      // scarichi (lato esterno)
      const ea = P(6.35, 4.6, y0 + side * 0.5);
      const eb = P(6.85, 4.62, y0 + side * 0.82);
      const ex1 = new THREE.Mesh(strut(ea, eb, 0.15, 0.17, 12), this.M.darkMetal);
      this.group.add(ex1);
      const exIn = new THREE.Mesh(new THREE.CircleGeometry(0.15, 12), this.M.inlet);
      exIn.position.copy(eb).add(new THREE.Vector3(side * 0.002, 0, 0.001));
      exIn.lookAt(eb.clone().add(new THREE.Vector3().subVectors(eb, ea)));
      this.group.add(exIn);
      // ogiva + elica
      this.props.push(this._propeller(side, P(E.sProp, E.h, y0)));
    }
  }

  _propeller(side, hub) {
    const grp = new THREE.Group();
    grp.position.copy(hub);
    this.group.add(grp);
    const spin = new THREE.Group();
    grp.add(spin);
    // ogiva
    const prof = [];
    for (let i = 0; i <= 14; i++) {
      const t = i / 14;
      const z = -0.72 + t * 0.92;
      const r = 0.36 * Math.pow(Math.sin((t * Math.PI) / 2), 0.62);
      prof.push([r, z]);
    }
    prof.push([0.36, 0.22]);
    prof.push([0.3, 0.22]);
    const spinner = new THREE.Mesh(lathe(prof, 28), this.M.spinner);
    spin.add(spinner);
    // pale
    const R = SPEC.propDiameter / 2;
    const foil = naca4(0.02, 0.4, 0.12, 9);
    const rs = [0.3, 0.42, 0.55, 0.75, 0.95, 1.2, 1.45, 1.68, 1.84, 1.93, 1.985];
    const chordF = curve([[0.3, 0.17], [0.45, 0.25], [0.7, 0.31], [1.1, 0.3], [1.5, 0.25], [1.85, 0.18], [1.985, 0.06]]);
    const thickF = curve([[0.3, 2.6], [0.45, 1.6], [0.8, 0.95], [1.4, 0.65], [1.985, 0.45]]);
    const twistF = (r) => (22 - 34 * (r - 0.3) / (R - 0.3)) * DEG;
    this.blades = this.blades || [];
    const bladeGeo = (r0, r1) => {
      const list = rs.filter((r) => r >= r0 - 1e-6 && r <= r1 + 1e-6);
      if (list[0] > r0) list.unshift(r0);
      if (list[list.length - 1] < r1) list.push(r1);
      const stations = list.map((r) => ({
        le: new THREE.Vector3(0.35 * chordF(r), r, 0),
        chord: chordF(r),
        twist: twistF(r),
        thick: thickF(r),
      }));
      // corda lungo -x (rotazione oraria vista da dietro: il bordo d'attacco va verso +x in alto)
      return liftingSurface(foil, stations, { chordDir: new THREE.Vector3(-1, 0, 0), upDir: new THREE.Vector3(0, 0, -1), capEnd: true });
    };
    const gMain = bladeGeo(0.3, 1.86);
    const gTip = bladeGeo(1.86, 1.985);
    const blades = [];
    for (let k = 0; k < 4; k++) {
      const arm = new THREE.Group();
      arm.rotation.z = (k * Math.PI) / 2;
      const pitch = new THREE.Group(); // rotazione del passo attorno all'asse radiale
      arm.add(pitch);
      const m1 = new THREE.Mesh(gMain, this.M.blade);
      const m2 = new THREE.Mesh(gTip, this.M.bladeTip);
      pitch.add(m1, m2);
      // radice cilindrica
      const root = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.32, 10), this.M.black);
      root.position.y = 0.38;
      pitch.add(root);
      spin.add(arm);
      blades.push(pitch);
    }
    // disco di sfocatura ad alto regime
    const discTex = (() => {
      const c = document.createElement('canvas');
      c.width = c.height = 256;
      const g = c.getContext('2d');
      const grd = g.createRadialGradient(128, 128, 20, 128, 128, 128);
      grd.addColorStop(0, 'rgba(30,30,30,0.0)');
      grd.addColorStop(0.25, 'rgba(25,25,25,0.16)');
      grd.addColorStop(0.85, 'rgba(25,25,25,0.10)');
      grd.addColorStop(0.93, 'rgba(240,180,0,0.16)');
      grd.addColorStop(0.985, 'rgba(240,180,0,0.10)');
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = grd;
      g.fillRect(0, 0, 256, 256);
      for (let k = 0; k < 4; k++) {
        g.save();
        g.translate(128, 128);
        g.rotate((k * Math.PI) / 2);
        const lg = g.createLinearGradient(0, -20, 0, 20);
        lg.addColorStop(0, 'rgba(0,0,0,0)');
        lg.addColorStop(0.5, 'rgba(10,10,10,0.08)');
        lg.addColorStop(1, 'rgba(0,0,0,0)');
        g.fillStyle = lg;
        g.beginPath();
        g.moveTo(0, 0);
        g.arc(0, 0, 128, -0.35, 0.05);
        g.closePath();
        g.fill();
        g.restore();
      }
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      return t;
    })();
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(R, 48),
      new THREE.MeshBasicMaterial({ map: discTex, transparent: true, depthWrite: false, side: THREE.DoubleSide, opacity: 0, toneMapped: true }),
    );
    disc.userData.noShadow = true;
    disc.renderOrder = 11;
    spin.add(disc);
    return { grp, spin, blades, disc, side, angle: Math.random() * 6.28, bladeMat: this.M.blade };
  }

  // ---------------------------------------------------------------------------
  _tail() {
    const V = GEO.vtail;
    const foil = naca4(0, 0.3, 0.12, 18);
    const leF = curve([[3.0, 11.3], [3.35, 12.4], [3.8, 13.45], [4.4, 14.25], [5.2, 14.85], [8.25, 17.55]]);
    const teF = (h) => 19.72 + (h - 3.0) * 0.004;
    const hinge = 18.05;
    const chordDir = new THREE.Vector3(0, 0, 1);
    const upDir = new THREE.Vector3(1, 0, 0);
    const st = (h, foilX) => ({ le: P(leF(h), h, 0), chord: teF(h) - leF(h), foil: foilX });
    const red = 7.35;
    const finPart = (h0, h1, n, x0Fn, x1Fn, mat, capS, capE, round = false) => {
      const hs = [];
      for (let i = 0; i <= n; i++) hs.push(h0 + ((h1 - h0) * i) / n);
      const stations = hs.map((h) => st(h, airfoilSlice(foil, x0Fn(h), x1Fn(h), round)));
      const g = liftingSurface(null, stations, { chordDir, upDir, capStart: capS, capEnd: capE, foilV: sliceV(stations[0].foil), flip: true });
      const m = new THREE.Mesh(g, mat);
      return m;
    };
    const xh = (h) => (hinge - leF(h)) / (teF(h) - leF(h));
    // deriva: sotto il timone (pieno), cassone, punta
    this.group.add(finPart(3.0, 3.6, 2, () => 0, () => 1, this.M.yellow, false, false));
    this.group.add(finPart(3.6, red, 10, () => 0, (h) => xh(h) - 0.005, this.M.yellow, false, false));
    this.group.add(finPart(red, 8.05, 3, () => 0, (h) => xh(h) - 0.005, this.M.red, false, false));
    this.group.add(finPart(8.05, 8.25, 1, () => 0, () => 1, this.M.red, false, true));
    // timone
    this.rudder = new Hinge(this.group, P(hinge, 3.6, 0), P(hinge, 8.05, 0));
    this.rudder.add(finPart(3.6, red, 8, (h) => xh(h) + 0.003, () => 1, this.M.yellow, true, false, true));
    this.rudder.add(finPart(red, 8.05, 3, (h) => xh(h) + 0.003, () => 1, this.M.red, false, true, true));
    // aletta di trim del timone
    const tab = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.9, 0.32), this.M.yellow);
    tab.position.copy(P(19.62, 4.3, 0));
    tab.geometry.translate(tab.position.x, tab.position.y, tab.position.z);
    tab.position.set(0, 0, 0);
    this.rudder.add(tab);

    // piano orizzontale (rosso) con equilibratori
    const H = GEO.htail;
    const hfoil = naca4(0, 0.3, 0.11, 18);
    const hst = (y, f) => {
      const t = Math.abs(y) / H.halfSpan;
      return { le: P(H.sLE + H.sweepLE * t, H.h, y), chord: H.rootChord + (H.tipChord - H.rootChord) * t, foil: f };
    };
    const hChord = new THREE.Vector3(0, 0, 1), hUp = new THREE.Vector3(0, 1, 0);
    const ysH = [0, 0.8, 1.6, 2.4, 3.2, 4.0, 4.8, H.halfSpan];
    this.elevators = [];
    for (const side of [1, -1]) {
      const box = liftingSurface(null, ysH.map((y) => hst(y, airfoilSlice(hfoil, 0, 0.615))), { chordDir: hChord, upDir: hUp, capEnd: true, foilV: sliceV(airfoilSlice(hfoil, 0, 0.615)) });
      const g = side > 0 ? box : mirrorX(box);
      this.group.add(new THREE.Mesh(g, this.M.red));
      const eS = ysH.slice(0, -1).concat([H.halfSpan - 0.05]);
      const eGeo0 = liftingSurface(null, eS.map((y) => hst(y, airfoilSlice(hfoil, 0.625, 1, true))), { chordDir: hChord, upDir: hUp, capStart: true, capEnd: true, foilV: sliceV(airfoilSlice(hfoil, 0.625, 1, true)) });
      const eGeo = side > 0 ? eGeo0 : mirrorX(eGeo0);
      const r0 = hst(0, null), r1 = hst(H.halfSpan, null);
      const hp0 = P(H.sLE + 0.62 * H.rootChord, H.h, 0);
      const hp1 = P(H.sLE + H.sweepLE + 0.62 * H.tipChord, H.h, side * H.halfSpan);
      const hg = new Hinge(this.group, hp0, hp1);
      hg.add(new THREE.Mesh(eGeo, this.M.red));
      hg.side = side;
      this.elevators.push(hg);
      // finlet
      const fl = H.finletY * side;
      const t = H.finletY / H.halfSpan;
      const fle = H.sLE + H.sweepLE * t + 0.05;
      const ffoil = naca4(0, 0.3, 0.1, 12);
      const fs = [
        { le: P(fle + 0.1, H.h - 0.7, fl), chord: 1.05 },
        { le: P(fle - 0.05, H.h, fl), chord: 1.55 },
        { le: P(fle + 0.45, H.h + 1.05, fl), chord: 0.95 },
      ];
      const fg = liftingSurface(ffoil, fs, { chordDir: new THREE.Vector3(0, 0, 1), upDir: new THREE.Vector3(1, 0, 0), capStart: true, capEnd: true, flip: true });
      this.group.add(new THREE.Mesh(fg, this.M.red));
    }
  }

  // ---------------------------------------------------------------------------
  _floats() {
    const F = GEO.float;
    const len = F.sBack - F.sFront;
    const kF = curve([[0, 0.48], [0.35, 0.16], [0.8, 0.02], [1.2, 0], [2.0, 0], [2.02, 0.07], [3.0, 0.2], [len, 0.42]]);
    const tF = curve([[0, 0.52], [0.25, 0.7], [0.8, 0.82], [3.0, 0.8], [len, 0.62]]);
    const wF = curve([[0, 0.04], [0.15, 0.22], [0.5, 0.34], [1.0, 0.39], [2.6, 0.39], [3.4, 0.28], [len, 0.16]]);
    const dr = 25 * DEG;
    this.floatGroups = [];
    for (const side of [-1, 1]) {
      const y0 = side * F.y;
      const top = [], bot = [];
      for (let ls = 0; ls <= len + 1e-6; ls += 0.08) {
        const s = F.sFront + ls;
        const k = kF(ls), tp = tF(ls), hw = wF(ls);
        const ch = Math.min(k + hw * Math.tan(dr), tp - 0.05);
        const pt = [], pb = [];
        const n = 12;
        // arco superiore (da sinistra a destra)
        for (let i = 0; i <= n; i++) {
          const a = Math.PI - (i / n) * Math.PI;
          const yy = Math.cos(a) * hw;
          const hh = ch + 0.1 + (tp - ch - 0.1) * Math.pow(Math.sin(a), 0.55);
          pt.push(P(s, F.hBottom + hh, y0 + yy));
        }
        // fondo a V (da destra a sinistra passando per la chiglia)
        pb.push(P(s, F.hBottom + ch + 0.1, y0 + hw));
        pb.push(P(s, F.hBottom + ch, y0 + hw));
        pb.push(P(s, F.hBottom + k, y0));
        pb.push(P(s, F.hBottom + ch, y0 - hw));
        pb.push(P(s, F.hBottom + ch + 0.1, y0 - hw));
        top.push(pt);
        bot.push(pb);
      }
      const gTop = loft(top, { capStart: false, capEnd: false, flip: false });
      const gBot = loft(bot, { capStart: false, capEnd: false, flip: false });
      this.group.add(new THREE.Mesh(gTop, this.M.yellow));
      this.group.add(new THREE.Mesh(gBot, this.M.red));
      // tappi
      for (const [arr, mat] of [[top, this.M.yellow], [bot, this.M.red]]) {
        for (const end of [0, arr.length - 1]) {
          const ring = arr[end];
          const c = new THREE.Vector3();
          ring.forEach((p) => c.add(p));
          c.divideScalar(ring.length);
          const pos = [c.x, c.y, c.z];
          ring.forEach((p) => pos.push(p.x, p.y, p.z));
          const idx = [];
          for (let i = 1; i < ring.length; i++) end === 0 ? idx.push(0, i, i + 1) : idx.push(0, i + 1, i);
          const g = new THREE.BufferGeometry();
          g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
          g.setIndex(idx);
          g.computeVertexNormals();
          const m = new THREE.Mesh(g, mat);
          m.material = mat.clone();
          m.material.side = THREE.DoubleSide;
          this.group.add(m);
        }
      }
      // piloni
      const wingLow = GEO.wing.h - 0.28;
      const ps = [F.sFront + 1.05, F.sFront + 2.75];
      for (const s of ps) {
        const a = P(s, F.hBottom + 0.78, y0);
        const b = P(s + 0.15, wingLow, y0 - side * 0.05);
        this.group.add(new THREE.Mesh(strut(a, b, 0.09, 0.075, 10, 2.4), this.M.yellow));
      }
      const br0 = P(F.sFront + 1.9, F.hBottom + 0.8, y0);
      const br1 = P(F.sFront + 1.7, wingLow + 0.02, y0 - side * 1.35);
      this.group.add(new THREE.Mesh(strut(br0, br1, 0.045, 0.045, 8), this.M.yellow));
    }
  }

  // ---------------------------------------------------------------------------
  _gear() {
    const MG = GEO.gear.main, NG = GEO.gear.nose;
    const tire = (r, w) => {
      const g = new THREE.TorusGeometry(r - w * 0.42, w * 0.5, 12, 28);
      g.scale(1, 1, 0.9);
      g.rotateY(Math.PI / 2);
      return g;
    };
    this.mainGear = [];
    for (const side of [-1, 1]) {
      const pivot = P(MG.s, MG.pivotH, side * MG.pivotY);
      const wheelC = P(MG.s, MG.wheelH, side * MG.wheelY);
      const leg = new THREE.Group();
      leg.position.copy(pivot);
      this.group.add(leg);
      const rel = wheelC.clone().sub(pivot);
      const dir = rel.clone().normalize();
      const len = rel.length();
      // gamba (cilindro superiore) + stelo cromato dell'ammortizzatore
      const upper = new THREE.Mesh(strut(new THREE.Vector3(), dir.clone().multiplyScalar(len * 0.62), 0.11, 0.1, 12), this.M.gray);
      leg.add(upper);
      const slider = new THREE.Group();
      leg.add(slider);
      const piston = new THREE.Mesh(strut(dir.clone().multiplyScalar(len * 0.4), dir.clone().multiplyScalar(len - 0.05), 0.075, 0.075, 12), this.M.chrome);
      slider.add(piston);
      // ruota
      const wheel = new THREE.Group();
      wheel.position.copy(rel);
      slider.add(wheel);
      const t = new THREE.Mesh(tire(MG.wheelR, MG.width), this.M.rubber);
      wheel.add(t);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, MG.width * 0.85, 18), this.M.gray);
      hub.rotation.z = Math.PI / 2;
      wheel.add(hub);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, MG.width * 0.95, 12), this.M.chrome);
      cap.rotation.z = Math.PI / 2;
      wheel.add(cap);
      // asse della ruota
      const axle = new THREE.Mesh(strut(rel.clone().add(new THREE.Vector3(-side * 0.25, 0.05, 0)), rel.clone(), 0.06, 0.06, 8), this.M.gray);
      slider.add(axle);
      // controvento laterale verso la fusoliera
      const braceA = dir.clone().multiplyScalar(len * 0.5);
      const braceB = P(MG.s - 0.3, 1.95, side * 1.3).sub(pivot);
      leg.add(new THREE.Mesh(strut(braceA, braceB, 0.05, 0.05, 8), this.M.gray));
      this.mainGear.push({ leg, slider, wheel, side, dir, len });
    }
    // anteriore (ruote gemellate)
    {
      const pivot = P(NG.s, NG.pivotH, 0);
      const leg = new THREE.Group();
      leg.position.copy(pivot);
      this.group.add(leg);
      leg.add(new THREE.Mesh(strut(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -NG.legLen * 0.6, 0), 0.07, 0.065, 10), this.M.gray));
      const slider = new THREE.Group();
      leg.add(slider);
      slider.add(new THREE.Mesh(strut(new THREE.Vector3(0, -NG.legLen * 0.45, 0), new THREE.Vector3(0, -NG.legLen + 0.02, 0.03), 0.05, 0.05, 10), this.M.chrome));
      const steer = new THREE.Group();
      steer.position.set(0, -NG.legLen, 0.03);
      slider.add(steer);
      const wheels = [];
      for (const s of [-1, 1]) {
        const w = new THREE.Group();
        w.position.set(s * NG.track / 2, 0, 0);
        w.add(new THREE.Mesh(tire(NG.wheelR, 0.2), this.M.rubber));
        const hb = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.17, 14), this.M.gray);
        hb.rotation.z = Math.PI / 2;
        w.add(hb);
        steer.add(w);
        wheels.push(w);
      }
      steer.add(new THREE.Mesh(new THREE.BoxGeometry(NG.track - 0.15, 0.06, 0.08), this.M.gray));
      // portelli del vano
      const doors = [];
      for (const s of [-1, 1]) {
        const p0 = P(1.35, keel(1.35) + 0.02, s * 0.3);
        const p1 = P(2.85, keel(2.85) + 0.02, s * 0.3);
        const h = new Hinge(this.group, p0, p1);
        const g = new THREE.BoxGeometry(0.28, 0.025, 1.5);
        const mid = P(2.1, keel(2.1) + 0.05, s * 0.16);
        g.translate(mid.x, mid.y, mid.z);
        h.add(new THREE.Mesh(g, this.M.red));
        h.side = s;
        doors.push(h);
      }
      this.noseGear = { leg, slider, steer, wheels, doors };
    }
  }

  // ---------------------------------------------------------------------------
  _probesDoors() {
    // sonde di pescaggio (dietro il redan)
    this.probeMeshes = [];
    for (const side of [-1, 1]) {
      const s = GEO.probe.s;
      const y = side * GEO.probe.y;
      const hRoot = keel(s) + GEO.probe.y * Math.tan(deadrise(s));
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.92, 0.26), this.M.gray);
      body.geometry.translate(0, -0.46, 0);
      g.add(body);
      const le = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.92, 10), this.M.gray);
      le.geometry.translate(0, -0.46, -0.13);
      g.add(le);
      const scoop = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.3), this.M.darkMetal);
      scoop.position.set(0, -0.86, -0.05);
      g.add(scoop);
      const mouth = new THREE.Mesh(new THREE.PlaneGeometry(0.11, 0.09), this.M.inlet);
      mouth.position.set(0, -0.86, -0.205);
      mouth.rotation.y = Math.PI;
      g.add(mouth);
      g.position.copy(P(s, hRoot + 0.88, y));
      this.group.add(g);
      this.probeMeshes.push({ g, base: g.position.clone() });
    }
    // portelli dei serbatoi
    this.tankDoors = [];
    for (const d of GEO.doors) {
      const side = d.y < 0 ? -1 : 1;
      const ay = Math.abs(d.y);
      const s0 = d.s - GEO.doorSize.len / 2, s1 = d.s + GEO.doorSize.len / 2;
      const yOut = ay + GEO.doorSize.wid / 2;
      const hAt = (s, yy) => keel(s) + yy * Math.tan(deadrise(s)) - 0.006;
      const p0 = P(s0, hAt(s0, yOut), side * yOut);
      const p1 = P(s1, hAt(s1, yOut), side * yOut);
      const h = new Hinge(this.group, p0, p1);
      const g = new THREE.BoxGeometry(GEO.doorSize.wid, 0.025, GEO.doorSize.len);
      const beta = deadrise(d.s);
      g.rotateZ(-side * beta);
      const c = P(d.s, hAt(d.s, ay) - 0.008, side * ay);
      g.translate(c.x, c.y, c.z);
      h.add(new THREE.Mesh(g, this.M.red));
      h.side = side;
      this.tankDoors.push(h);
    }
  }

  // ---------------------------------------------------------------------------
  _lights() {
    const glowTex = softSprite(64, { power: 2.5 });
    const glow = (color, size) => {
      const m = new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
      const sp = new THREE.Sprite(m);
      sp.scale.setScalar(size);
      sp.userData.noShadow = true;
      sp.renderOrder = 12;
      return sp;
    };
    const bulb = (color) => new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshBasicMaterial({ color }));
    const W = GEO.wing;
    const navL = P(W.sLE + 0.45, W.h + 0.08, -(W.halfSpan + 0.06));
    const navR = P(W.sLE + 0.45, W.h + 0.08, W.halfSpan + 0.06);
    const tailL = P(19.85, 3.0, 0);
    this.lights = {
      navL: glow(0xff2a1a, 1.1), navR: glow(0x22ff55, 1.1), tail: glow(0xffffff, 0.9),
      beaconT: glow(0xff2010, 2.2), beaconB: glow(0xff2010, 2.2),
      strobeL: glow(0xffffff, 3.2), strobeR: glow(0xffffff, 3.2),
    };
    this.lights.navL.position.copy(navL);
    this.lights.navR.position.copy(navR);
    this.lights.tail.position.copy(tailL);
    this.lights.beaconT.position.copy(P(11.2, 3.62, 0));
    this.lights.beaconB.position.copy(P(11.5, keel(11.5) - 0.06, 0));
    this.lights.strobeL.position.copy(navL).add(new THREE.Vector3(0, 0, 0.5));
    this.lights.strobeR.position.copy(navR).add(new THREE.Vector3(0, 0, 0.5));
    for (const k in this.lights) this.group.add(this.lights[k]);
    const bL = bulb(0xff3020); bL.position.copy(navL); this.group.add(bL);
    const bR = bulb(0x30ff60); bR.position.copy(navR); this.group.add(bR);
    const bT = bulb(0xff2010); bT.position.copy(this.lights.beaconT.position); this.group.add(bT);
    // fari di atterraggio nel bordo d'attacco
    this.landingLights = [];
    for (const side of [-1, 1]) {
      const pos = P(W.sLE + 0.02, W.h + 0.02, side * 2.2);
      const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.11, 14), new THREE.MeshBasicMaterial({ color: 0x777777 }));
      lamp.position.copy(pos).add(new THREE.Vector3(0, 0, -0.02));
      lamp.rotation.y = Math.PI;
      this.group.add(lamp);
      const spot = new THREE.SpotLight(0xfff6e0, 0, 900, 0.22, 0.5, 1.5);
      spot.position.copy(pos);
      spot.target.position.copy(pos).add(new THREE.Vector3(side * 2, -12, -100));
      this.group.add(spot, spot.target);
      const g = glow(0xfff4dd, 2.5);
      g.position.copy(pos).add(new THREE.Vector3(0, 0, -0.1));
      g.visible = false;
      this.group.add(g);
      this.landingLights.push({ lamp, spot, glow: g });
    }
  }

  // ---------------------------------------------------------------------------
  _details() {
    const g = this.group;
    // tubi di Pitot
    for (const side of [-1, 1]) {
      const a = P(1.25, 2.05, side * 1.06);
      const b = P(0.85, 2.05, side * 1.06);
      g.add(new THREE.Mesh(strut(a, b, 0.018, 0.012, 6), this.M.chrome));
      const mast = new THREE.Mesh(strut(P(1.3, 2.05, side * 1.0), a, 0.03, 0.02, 6), this.M.gray);
      g.add(mast);
    }
    // antenne a lama sul dorso e sotto
    const blade = (s, h, y, rot = 0, hgt = 0.32, mat = this.M.white) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.015, hgt, 0.22), mat);
      m.geometry.translate(0, hgt / 2, 0);
      m.position.copy(P(s, h, y));
      m.rotation.x = -0.35;
      m.rotation.z = rot;
      g.add(m);
    };
    blade(4.6, roofTop(4.6), 0);
    blade(12.4, roofTop(12.4), 0, 0, 0.26);
    blade(13.6, roofTop(13.6), 0.3, 0.2, 0.18, this.M.black);
    blade(6.2, keel(6.2) + 0.02, 0, Math.PI, 0.22, this.M.black);
    // antenna a stilo VHF
    g.add(new THREE.Mesh(strut(P(3.9, roofTop(3.9), 0), P(4.3, roofTop(3.9) + 0.75, 0), 0.012, 0.006, 5), this.M.black));
    // filo dell'antenna HF dalla cabina alla deriva
    const wire = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([P(4.8, roofTop(4.8) + 0.05, 0), P(16.9, 7.6, 0)]),
      new THREE.LineBasicMaterial({ color: 0x111111 }),
    );
    g.add(wire);
    // tergicristalli
    for (const side of [-1, 1]) {
      const a = P(1.24, roofTop(1.24) + 0.01, side * 0.55);
      const b = P(1.62, roofTop(1.62) + 0.02, side * 0.38);
      g.add(new THREE.Mesh(strut(a, b, 0.007, 0.006, 5), this.M.black));
    }
    // sfiati di troppo pieno sul dorso (l'acqua in eccesso esce da qui)
    for (const side of [-1, 1]) {
      const v = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.5), this.M.darkMetal);
      v.position.copy(P(11.25, roofTop(11.25) - 0.02, side * 0.55));
      g.add(v);
    }
    this.overflowVents = [P(11.3, roofTop(11.3) + 0.08, -0.55), P(11.3, roofTop(11.3) + 0.08, 0.55)];
    // botola di ormeggio sul muso
    const hatch = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.02, 14), this.M.darkMetal);
    hatch.position.copy(P(0.35, roofTop(0.35) - 0.04, 0));
    hatch.rotation.x = -0.6;
    g.add(hatch);
    // gradino/maniglie porta equipaggio
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.04, 0.18), this.M.chrome);
    handle.position.copy(P(4.3, 2.1, -1.31));
    g.add(handle);
  }

  // ---------------------------------------------------------------------------
  // Punti di emissione utili agli effetti (coordinate corpo)
  get emitters() {
    return {
      doors: GEO.doors.map((d) => P(d.s, keel(d.s) - 0.05, d.y)),
      probes: this.probeMeshes.map((p) => p.g),
      overflow: this.overflowVents,
      props: this.props.map((p) => p.grp.position),
      exhausts: [-1, 1].map((s) => P(6.85, 4.62, s * (GEO.engine.y + 0.82))),
    };
  }

  update(dt, sys, fm, opts = {}) {
    this.time += dt;
    const t = this.time;
    // superfici di governo
    const surf = fm.surf;
    for (const f of this.flaps) f.set(f.side * sys.flapPos * DEG);
    for (const a of this.ailerons) a.set(-surf.ail * DEG);
    for (const e of this.elevators) e.set(e.side * (-surf.elev * DEG) * 1);
    this.rudder.set(surf.rud * DEG);

    // eliche
    for (let i = 0; i < 2; i++) {
      const p = this.props[i];
      const e = sys.engines[i];
      const rpm = (e.np / 100) * SPEC.propRPM * (e.running ? 1 : e.np / 100);
      const w = (rpm / 60) * Math.PI * 2;
      // velocità apparente limitata per evitare l'effetto stroboscopico: oltre ~300 rpm si usa il disco
      const vis = clamp((rpm - 250) / 600, 0, 1);
      p.angle -= Math.min(w, 2 * Math.PI * 4.5) * dt * (vis > 0.95 ? 0.6 : 1);
      p.spin.rotation.z = p.angle;
      p.disc.material.opacity = vis * 0.6;
      p.disc.rotation.z = -t * 2.2;
      p.bladeMat.opacity = 1 - vis * 0.9;
      this.M.bladeTip.opacity = 1 - vis * 0.9;
      // passo: piuma a motore spento, reverse, minimo, volo
      let beta = 14 + e.pf * 22 + clamp(fm.out.tas / 80, 0, 1) * 12;
      if (e.reverse > 0.05) beta = -12;
      if (!e.running && e.feathered) beta = 84;
      p.beta = lerp(p.beta ?? beta, beta, clamp(dt * 3, 0, 1));
      for (const b of p.blades) b.rotation.y = -p.beta * DEG;
    }

    // carrello principale: rotazione attorno all'asse longitudinale + ammortizzatore
    const gp = sys.gearPos;
    const ease = gp * gp * (3 - 2 * gp);
    for (let i = 0; i < 2; i++) {
      const m = this.mainGear[i];
      m.leg.rotation.z = m.side * (1 - ease) * 112 * DEG;
      const comp = fm.out.gearCompress[1 + (m.side > 0 ? 1 : 0)] || 0;
      m.slider.position.copy(m.dir).multiplyScalar(-comp * 0.9);
      m.wheel.rotation.x -= (fm.out.wheelSpeed[1 + (m.side > 0 ? 1 : 0)] || 0) * dt;
    }
    const ng = this.noseGear;
    const nPos = clamp((gp - 0.1) / 0.8, 0, 1);
    const ne = nPos * nPos * (3 - 2 * nPos);
    ng.leg.rotation.x = (1 - ne) * 102 * DEG;
    ng.slider.position.y = (fm.out.gearCompress[0] || 0) * 0.9;
    ng.steer.rotation.y = -(sys.noseSteer || 0) * (gp > 0.98 ? 1 : 0);
    for (const w of ng.wheels) w.rotation.x -= (fm.out.wheelSpeed[0] || 0) * dt * 1.5;
    // i portelli si aprono all'inizio e restano aperti col carrello giù (si chiudono col carrello su)
    const doorOpen = clamp(gp < 0.02 ? 0 : 1, 0, 1);
    ng.doorAnim = lerp(ng.doorAnim || 0, doorOpen, clamp(dt * 3, 0, 1));
    for (const d of ng.doors) d.set(d.side * ng.doorAnim * 80 * DEG);

    // sonde
    for (const p of this.probeMeshes) {
      p.g.position.copy(p.base);
      p.g.position.y -= 0.88 * sys.probePos;
      p.g.position.z += 0.12 * sys.probePos;
    }
    // portelli serbatoi (cerniera sul bordo esterno)
    for (let i = 0; i < 4; i++) {
      const d = this.tankDoors[i];
      d.set(d.side * sys.doorOpen[i] * 82 * DEG);
    }

    // luci
    const L = this.lights;
    const on = sys.lights;
    L.navL.visible = L.navR.visible = L.tail.visible = on.nav;
    const bc = (t * 1.1) % 1;
    const beacon = on.beacon ? Math.max(0, 1 - Math.abs(bc - 0.1) * 8) : 0;
    L.beaconT.material.opacity = beacon;
    L.beaconB.material.opacity = (on.beacon ? Math.max(0, 1 - Math.abs(((t * 1.1 + 0.5) % 1) - 0.1) * 8) : 0);
    const sp = (t % 1.25);
    const strobe = on.strobe && (sp < 0.05 || (sp > 0.16 && sp < 0.2)) ? 1 : 0;
    L.strobeL.material.opacity = L.strobeR.material.opacity = strobe;
    for (const ll of this.landingLights) {
      ll.spot.intensity = on.landing ? 900 : 0;
      ll.glow.visible = on.landing;
      ll.lamp.material.color.setHex(on.landing ? 0xffffff : 0x666666);
    }
  }

  setInterior(inside) {
    // in cabina il vetro diventa quasi trasparente
    this.M.glass.opacity = 0.45;
    if (this.glass) this.glass.visible = !inside; // dall'interno il vetro esterno non serve
  }
}
