// Posiziona l'aereo carico in avvicinamento a un incendio e sgancia (test automatico).
(() => {
  const g = window.__cl415;
  const THREE_V = g.fm.pos.constructor;
  const KT = 0.514444, DEG = Math.PI / 180;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const z = g.fires.zones[0];
  const dir = { x: 1, z: 0.3 };
  const l = Math.hypot(dir.x, dir.z);
  dir.x /= l; dir.z /= l;
  const start = { x: z.cx - dir.x * 900, z: z.cz - dir.z * 900 };
  const gh = (x, zz) => Math.max(g.world.groundHeight(x, zz), 0);
  const hdg = Math.atan2(dir.x, -dir.z);
  for (let i = 0; i < 4; i++) g.sys.tanks[i] = 6137 / 4;
  g.sys.flapIndex = 2; g.sys.flapPos = 15; g.sys.gearDown = false; g.sys.gearPos = 0;
  g.fm.reset(new THREE_V(start.x, gh(start.x, start.z) + 60, start.z), -hdg, 115 * KT, 'air');
  g.sys.engines.forEach((e) => { e.nh = 92; e.lever = 0.7; });
  const st = { iP: 0, iT: 0, dropped: false };
  window.__dropState = st;
  g.autopilot = (dt, G) => {
    const { fm, sys } = G;
    const o = fm.out;
    const ahead = { x: fm.pos.x + dir.x * 120, z: fm.pos.z + dir.z * 120 };
    const altT = Math.max(gh(fm.pos.x, fm.pos.z), gh(ahead.x, ahead.z)) + 45;
    const vsT = clamp((altT - fm.pos.y) * 0.25, -5, 6);
    const pt = clamp(2 * DEG + (vsT - o.vs) * 0.02, -8 * DEG, 12 * DEG);
    const e = pt - o.pitch;
    st.iP = clamp(st.iP + e * dt * 1.5, -0.6, 0.6);
    fm.ctl.elevator = clamp(e * 5 - fm.omega.x * 2 + st.iP, -1, 1);
    const d0 = Math.hypot(z.cx - fm.pos.x, z.cz - fm.pos.z);
    let he = (d0 > 250 ? Math.atan2(z.cx - fm.pos.x, -(z.cz - fm.pos.z)) : Math.atan2(dir.x, -dir.z)) - o.heading;
    while (he > Math.PI) he -= 2 * Math.PI;
    while (he < -Math.PI) he += 2 * Math.PI;
    fm.ctl.aileron = clamp((clamp(he * 1.5, -0.3, 0.3) - o.roll) * 2.5 + fm.omega.z * 1.2, -1, 1);
    fm.ctl.rudder = clamp(-o.beta * 3, -1, 1);
    const es = 115 - o.ias / KT;
    st.iT = clamp(st.iT + es * dt * 0.01, -0.4, 0.4);
    const thr = clamp(0.6 + es * 0.04 + st.iT, 0.05, 1);
    sys.engines.forEach((en) => (en.lever = thr));
    G.input.throttle = thr;
    // sgancio quando il fuoco è ~70 m davanti (l'acqua prosegue in avanti cadendo)
    const along = (z.cx - fm.pos.x) * Math.sin(o.track) - (z.cz - fm.pos.z) * Math.cos(o.track);
    if (!st.dropped && along < 70 && along > -50) { sys.drop(); st.dropped = true; st.t = 0; }
    if (st.dropped) st.t += dt;
  };
  return { start, ground: gh(start.x, start.z) };
})();
