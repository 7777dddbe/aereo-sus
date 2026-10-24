// Autopilota di prova per i test automatici (iniettato nella pagina).
(() => {
  const g = window.__cl415;
  const KT = 0.514444, DEG = Math.PI / 180;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const st = { phase: 'scoop', iP: 0, iT: 0, log: [] };
  window.__apState = st;
  const fire = g.fires.zones[0];
  g.autopilot = (dt, G) => {
    const { fm, sys } = G;
    const o = fm.out;
    const ias = o.ias / KT;
    let pitchT = 0, rollT = 0, thr = 0.6, speedT = null;
    const hold = (pt) => {
      const e = pt - o.pitch;
      st.iP = clamp(st.iP + e * dt * 1.2, -0.6, 0.6);
      fm.ctl.elevator = clamp(e * 5 - fm.omega.x * 2 + st.iP, -1, 1);
    };
    const bank = (rt) => { fm.ctl.aileron = clamp((rt - o.roll) * 2.5 + fm.omega.z * 1.2, -1, 1); };
    const hdgTo = (x, z) => {
      let b = Math.atan2(x - fm.pos.x, -(z - fm.pos.z));
      let e = b - o.heading;
      while (e > Math.PI) e -= 2 * Math.PI;
      while (e < -Math.PI) e += 2 * Math.PI;
      return clamp(e * 1.6, -28 * DEG, 28 * DEG);
    };
    fm.ctl.rudder = clamp(-o.beta * 3, -1, 1);
    if (st.phase === 'scoop') {
      thr = 1;
      if (ias < 35) fm.ctl.elevator = 0.55; else hold(5.5 * DEG);
      bank(0);
      if (ias > 62 && sys.waterLiters() < 10 && !sys.probesCmd) sys.probesCmd = true;
      if (sys.waterLiters() > 6000 || (!sys.probesCmd && sys.waterLiters() > 100)) { sys.probesCmd = false; st.phase = 'takeoff'; }
    } else if (st.phase === 'takeoff') {
      thr = 1;
      hold(ias > 76 ? 10.5 * DEG : 5.5 * DEG);
      bank(0);
      if (o.radAlt > 25) { st.phase = 'climb'; sys.flapIndex = 1; }
    } else if (st.phase === 'climb' || st.phase === 'cruise') {
      const agl = fm.pos.y - Math.max(G.world.groundHeight(fm.pos.x, fm.pos.z), 0);
      const fireG = G.world.groundHeight(fire.cx, fire.cz);
      const d0 = Math.hypot(fire.cx - fm.pos.x, fire.cz - fm.pos.z);
      const altT = st.phase === 'climb' ? Math.max(400, fireG + 200) : Math.max(fireG + 42 + Math.max(0, d0 - 1200) * 0.1, Math.max(G.world.groundHeight(fm.pos.x, fm.pos.z), 0) + 60);
      const vsT = clamp((altT - fm.pos.y) * 0.06, -5, 6);
      hold(clamp(3 * DEG + (vsT - o.vs) * 0.015 + (vsT) * 0.012, -6 * DEG, 11 * DEG));
      // in salita orbita sopra il lago, poi punta all'incendio
      rollT = st.phase === 'cruise' ? hdgTo(fire.cx, fire.cz) : o.radAlt > 50 ? clamp(hdgTo(0, 0) * 0.6, -15 * DEG, 15 * DEG) : 0;
      bank(rollT);
      speedT = 115;
      const d = Math.hypot(fire.cx - fm.pos.x, fire.cz - fm.pos.z);
      if (st.phase === 'climb' && fm.pos.y > Math.max(380, fireG + 180)) { st.phase = 'cruise'; sys.flapIndex = 1; }
      if (st.phase === 'cruise' && d < 1800) sys.flapIndex = 2;
      if (st.phase === 'cruise' && d < 140 && sys.waterLiters() > 100) { sys.drop(); st.phase = 'drop'; st.dropT = 0; }
    } else if (st.phase === 'drop') {
      st.dropT += dt;
      hold(2 * DEG);
      bank(0);
      speedT = 115;
      if (st.dropT > 6) st.phase = 'after';
    } else {
      hold(6 * DEG);
      bank(0);
      speedT = 125;
    }
    if (speedT !== null) {
      const e = speedT - ias;
      st.iT = clamp(st.iT + e * dt * 0.01, -0.4, 0.4);
      thr = clamp(0.55 + e * 0.04 + st.iT, 0.05, 1);
    }
    for (const en of sys.engines) en.lever = thr;
    G.input.throttle = thr;
  };
  return true;
})();
