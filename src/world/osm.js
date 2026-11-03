// Dettagli reali da Overture Maps / OpenStreetMap (vedi tools/garda/overture.mjs): sagome degli
// edifici, strade senza le gallerie, uso del suolo, fiumi, moli. Coordinate del mondo (x est, z sud).

import osmBin from './garda/osm.bin';

export const OSM = { buildings: [], roads: [], land: [], water: [], infra: [], natural: [], ready: false };

export function loadOsm() {
  if (OSM.ready) return OSM;
  const b = osmBin;
  if (!b || !b.byteLength) {
    OSM.ready = true;
    return OSM;
  }
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  let o = 0;
  const varint = () => {
    let v = 0, sh = 0, b8;
    do {
      b8 = dv.getUint8(o++);
      v |= (b8 & 0x7f) << sh;
      sh += 7;
    } while (b8 & 0x80);
    return v >>> 0;
  };
  const unzz = (v) => (v >>> 1) ^ -(v & 1);
  const names = { 1: 'buildings', 2: 'roads', 3: 'land', 4: 'water', 5: 'infra', 6: 'natural' };
  while (o + 5 <= b.byteLength) {
    const type = dv.getUint8(o);
    const n = dv.getUint32(o + 1, true);
    o += 5;
    const list = OSM[names[type]] || [];
    for (let k = 0; k < n; k++) {
      const cls = dv.getUint8(o);
      const extra = dv.getUint16(o + 1, true);
      const flag = dv.getUint8(o + 3);
      o += 4;
      const np = varint();
      const pts = new Float32Array(np * 2);
      let x = 0, z = 0;
      for (let i = 0; i < np; i++) {
        if (i === 0) {
          x = dv.getInt16(o, true);
          z = dv.getInt16(o + 2, true);
          o += 4;
        } else {
          x += unzz(varint());
          z += unzz(varint());
        }
        pts[i * 2] = x * 0.5;
        pts[i * 2 + 1] = z * 0.5;
      }
      list.push({ cls, extra, flag, pts });
    }
  }
  OSM.ready = true;
  return OSM;
}
