// Generatori di texture procedurali (nessun file esterno: tutto è creato nel browser).

import * as THREE from 'three';
import { rng } from './math.js';

// Rumore "value" periodico (piastrellabile) con interpolazione smooth.
export function tileableNoise(size, cells, octaves = 5, seed = 1, gain = 0.5) {
  const out = new Float32Array(size * size);
  const rand = rng(seed);
  let amp = 1, total = 0;
  for (let o = 0; o < octaves; o++) {
    const c = cells << o;
    const lat = new Float32Array(c * c);
    for (let i = 0; i < lat.length; i++) lat[i] = rand();
    for (let y = 0; y < size; y++) {
      const fy = (y / size) * c;
      const y0 = Math.floor(fy);
      const ty = fy - y0;
      const sy = ty * ty * (3 - 2 * ty);
      const ya = (y0 % c) * c, yb = ((y0 + 1) % c) * c;
      for (let x = 0; x < size; x++) {
        const fx = (x / size) * c;
        const x0 = Math.floor(fx);
        const tx = fx - x0;
        const sx = tx * tx * (3 - 2 * tx);
        const xa = x0 % c, xb = (x0 + 1) % c;
        const v = (lat[ya + xa] * (1 - sx) + lat[ya + xb] * sx) * (1 - sy) + (lat[yb + xa] * (1 - sx) + lat[yb + xb] * sx) * sy;
        out[y * size + x] += v * amp;
      }
    }
    total += amp;
    amp *= gain;
  }
  for (let i = 0; i < out.length; i++) out[i] /= total;
  return out;
}

// Rumore cellulare (Worley) piastrellabile: distanza dal punto più vicino (chiome degli alberi, schiuma).
export function tileableWorley(size, points, seed = 2) {
  const rand = rng(seed);
  const pts = [];
  for (let i = 0; i < points; i++) pts.push([rand() * size, rand() * size, 0.7 + rand() * 0.6]);
  const out = new Float32Array(size * size);
  const grid = Math.ceil(Math.sqrt(points));
  const cell = size / grid;
  const buckets = Array.from({ length: grid * grid }, () => []);
  pts.forEach((p, i) => buckets[Math.floor(p[1] / cell) % grid * grid + (Math.floor(p[0] / cell) % grid)].push(i));
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const gx = Math.floor(x / cell), gy = Math.floor(y / cell);
      let d1 = 1e9, d2 = 1e9;
      for (let oy = -1; oy <= 1; oy++) {
        for (let ox = -1; ox <= 1; ox++) {
          const bx = (gx + ox + grid) % grid, by = (gy + oy + grid) % grid;
          for (const i of buckets[by * grid + bx]) {
            const p = pts[i];
            let dx = Math.abs(x - p[0]);
            let dy = Math.abs(y - p[1]);
            if (dx > size / 2) dx = size - dx;
            if (dy > size / 2) dy = size - dy;
            const d = Math.sqrt(dx * dx + dy * dy) / p[2];
            if (d < d1) {
              d2 = d1;
              d1 = d;
            } else if (d < d2) d2 = d;
          }
        }
      }
      out[y * size + x] = Math.min(1, d1 / cell);
    }
  }
  return out;
}

export function dataTextureFromChannels(size, channels, { repeat = true, srgb = false } = {}) {
  const data = new Uint8Array(size * size * 4);
  for (let i = 0; i < size * size; i++) {
    for (let c = 0; c < 4; c++) {
      const ch = channels[c];
      const v = ch === undefined ? 1 : typeof ch === 'number' ? ch : ch[i];
      data[i * 4 + c] = Math.max(0, Math.min(255, Math.round(v * 255)));
    }
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = repeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = 8;
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

// Normal map (spazio tangente) da un campo di altezze piastrellabile.
export function normalMapFromHeight(height, size, strength = 2) {
  const nx = new Float32Array(size * size);
  const ny = new Float32Array(size * size);
  const nz = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const l = height[y * size + ((x - 1 + size) % size)];
      const r = height[y * size + ((x + 1) % size)];
      const u = height[((y - 1 + size) % size) * size + x];
      const d = height[((y + 1) % size) * size + x];
      let ax = (l - r) * strength;
      let ay = (u - d) * strength;
      let az = 1;
      const inv = 1 / Math.sqrt(ax * ax + ay * ay + az * az);
      const i = y * size + x;
      nx[i] = ax * inv * 0.5 + 0.5;
      ny[i] = ay * inv * 0.5 + 0.5;
      nz[i] = az * inv * 0.5 + 0.5;
    }
  }
  return dataTextureFromChannels(size, [nx, ny, nz, 1]);
}

// Increspature dell'acqua: somma di onde direzionali periodiche + rumore.
export function waterNormalTexture(size = 512, seed = 7) {
  const rand = rng(seed);
  const h = new Float32Array(size * size);
  const waves = [];
  for (let i = 0; i < 28; i++) {
    const kx = Math.round((rand() * 2 - 1) * (3 + i * 0.9));
    const ky = Math.round((rand() * 2 - 1) * (3 + i * 0.9));
    if (kx === 0 && ky === 0) continue;
    const kk = Math.hypot(kx, ky);
    waves.push([kx, ky, 1 / Math.pow(kk, 1.15), rand() * Math.PI * 2]);
  }
  const noise = tileableNoise(size, 16, 4, seed + 3, 0.55);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let v = 0;
      const u = (x / size) * Math.PI * 2;
      const w = (y / size) * Math.PI * 2;
      for (const wv of waves) {
        const ph = wv[0] * u + wv[1] * w + wv[3];
        v += wv[2] * (Math.sin(ph) + 0.25 * Math.sin(2 * ph + 1.0));
      }
      h[y * size + x] = v * 0.22 + (noise[y * size + x] - 0.5) * 0.35;
    }
  }
  return normalMapFromHeight(h, size, 9);
}

export function canvasTexture(canvas, { srgb = true, repeat = false, aniso = 8 } = {}) {
  const tex = new THREE.CanvasTexture(canvas);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = aniso;
  if (repeat) tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.needsUpdate = true;
  return tex;
}

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

// Sprite morbido radiale (particelle)
export function softSprite(size = 128, { power = 2.2, noise = 0, seed = 5 } = {}) {
  const n = noise > 0 ? tileableNoise(size, 6, 4, seed) : null;
  const a = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (x + 0.5) / size * 2 - 1;
      const dy = (y + 0.5) / size * 2 - 1;
      let r = Math.sqrt(dx * dx + dy * dy);
      if (n) r += (n[y * size + x] - 0.5) * noise;
      const v = Math.max(0, 1 - r);
      a[y * size + x] = Math.pow(v, power) * (r < 1 ? 1 : 0);
    }
  }
  const tex = dataTextureFromChannels(size, [1, 1, 1, a], { repeat: false });
  return tex;
}

// Spruzzo d'acqua: nuvola di goccioline nitide dentro un inviluppo morbido
export function sprayTexture(size = 256, seed = 17) {
  const r = rng(seed);
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.clearRect(0, 0, size, size);
  const cx = size / 2, cy = size / 2;
  // velo di fondo
  const grd = g.createRadialGradient(cx, cy, 0, cx, cy, size / 2);
  grd.addColorStop(0, 'rgba(255,255,255,0.32)');
  grd.addColorStop(0.55, 'rgba(255,255,255,0.1)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  // ciuffi e gocce
  for (let i = 0; i < 1400; i++) {
    const a = r() * Math.PI * 2;
    const d = Math.pow(r(), 0.85) * size * 0.46;
    const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d;
    const s = 0.6 + Math.pow(r(), 3) * size * 0.05;
    const al = Math.min(1, (1 - d / (size * 0.5)) * (0.5 + r() * 0.8));
    g.fillStyle = `rgba(255,255,255,${al.toFixed(3)})`;
    g.beginPath();
    g.arc(x, y, s, 0, Math.PI * 2);
    g.fill();
  }
  // il canale colore resta bianco ovunque (evita aloni scuri ai bordi delle particelle)
  const data = g.getImageData(0, 0, size, size).data;
  const alpha = new Float32Array(size * size);
  for (let k = 0; k < size * size; k++) alpha[k] = data[k * 4 + 3] / 255;
  return dataTextureFromChannels(size, [1, 1, 1, alpha], { repeat: false });
}
