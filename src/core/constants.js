// Costanti fisiche e conversioni di unità.

export const G = 9.80665;
export const RHO_WATER = 998; // acqua dolce del lago, kg/m³
export const KT = 0.514444; // m/s per nodo
export const FT = 0.3048; // m per piede
export const FPM = 0.00508; // m/s per piede/minuto
export const NM = 1852;

// Atmosfera standard ISA (troposfera)
export function isa(alt) {
  const h = Math.max(-500, Math.min(11000, alt));
  const T = 288.15 - 0.0065 * h;
  const p = 101325 * Math.pow(T / 288.15, 5.25588);
  const rho = p / (287.053 * T);
  return { T, p, rho, a: Math.sqrt(1.4 * 287.053 * T) };
}
