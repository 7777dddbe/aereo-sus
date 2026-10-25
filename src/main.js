// Canadair CL-415 — simulatore antincendio. Punto d'ingresso: crea il mondo, l'aereo e il ciclo principale.

import * as THREE from 'three';
import { Environment } from './world/environment.js';
import { Terrain, buildAirfield, WORLD, DIR, NRM, fromLake } from './world/terrain.js';
import { Vegetation } from './world/vegetation.js';
import { Water } from './world/water.js';
import { FireSystem } from './world/fires.js';
import { AircraftModel } from './aircraft/model.js';
import { Cockpit } from './aircraft/cockpit.js';
import { FlightModel } from './aircraft/flightmodel.js';
import { Systems, DROP_MODES } from './aircraft/systems.js';
import { SPEC, GEO } from './aircraft/specs.js';
import { WaterFX } from './fx/waterfx.js';
import { AudioEngine } from './audio/audio.js';
import { Input } from './input.js';
import { CameraRig, CAMS } from './cameras.js';
import { HUD, setupTouch } from './ui/hud.js';
import { KT, FT } from './core/constants.js';
import { clamp, DEG } from './core/math.js';
import { Multiplayer } from './net/multiplayer.js';

const $ = (id) => document.getElementById(id);
const tick = () => new Promise((r) => setTimeout(r, 16));
// modalità di test automatico (#test): niente ciclo continuo, si avanza su richiesta
const TEST = location.hash.includes('test');

const stored = (k) => {
  try {
    return localStorage.getItem('cl415.' + k);
  } catch (e) {
    return null; // archiviazione non disponibile (navigazione privata, iframe)
  }
};
const settings = {
  quality: stored('quality') || (matchMedia('(pointer: coarse)').matches ? 'low' : 'medium'),
  start: stored('start') || 'air',
  wind: stored('wind') || 'moderate',
};
try {
  for (const k of ['quality', 'start', 'wind']) $(k + 'Sel').value = settings[k];
} catch (e) {
  /* menu non disponibile */
}

const audio = new AudioEngine();
let G = null; // stato globale del gioco
let mp = null; // multiplayer (null = partita singola)
let roomApi = null; // capability `room` degli Artifact, se disponibile

// il multiplayer funziona solo dentro un Artifact condiviso (capability `room`)
try {
  if (window.claude && window.claude.use) {
    Promise.race([window.claude.use('room'), new Promise((r) => setTimeout(() => r(null), 6000))])
      .then((r) => {
        if (r) {
          roomApi = r;
          $('mpBox').style.display = 'block';
        }
      })
      .catch(() => {});
  }
} catch (e) {
  /* nessuna stanza */
}

$('mpBtn').addEventListener('click', async () => {
  if (!roomApi || mp) return;
  const code = ($('mpCode').value || '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 24);
  if (!code) {
    $('mpStatus').textContent = 'Scrivi un codice stanza (lettere e numeri).';
    return;
  }
  try {
    localStorage.setItem('cl415.mpCode', code);
    localStorage.setItem('cl415.mpRole', $('mpRole').value);
  } catch (e) { /* ignora */ }
  $('mpBtn').disabled = true;
  $('mpStatus').textContent = 'Connessione alla stanza…';
  const m = new Multiplayer(roomApi);
  setupMultiplayer(m);
  try {
    const res = await m.join(code, $('mpRole').value, { start: $('startSel').value, wind: $('windSel').value });
    if (m.full) {
      $('mpStatus').textContent = 'Stanza piena: ci sono già due piloti.';
      m.leave();
      $('mpBtn').disabled = false;
      return;
    }
    mp = m;
    if (!res.host && res.cfg) {
      // entro nella partita dell'host: stesse impostazioni di partenza
      $('startSel').value = res.cfg.start;
      $('windSel').value = res.cfg.wind;
      $('mpStatus').textContent = 'Compagno trovato: entro nella sua partita…';
    } else $('mpStatus').textContent = 'Partita creata. Il compagno può entrare con lo stesso codice.';
    $('startBtn').click();
  } catch (e) {
    $('mpStatus').textContent = 'Connessione non riuscita: ' + (e && e.message ? e.message : e);
    $('mpBtn').disabled = false;
  }
});
try {
  $('mpCode').value = localStorage.getItem('cl415.mpCode') || 'canadair';
  $('mpRole').value = localStorage.getItem('cl415.mpRole') || 'p';
} catch (e) { /* ignora */ }

function setupMultiplayer(m) {
  m.on('role', (role, was) => onRole(role, was));
  m.on('action', (name) => {
    // azioni del compagno: le esegue l'host se il ruolo glielo permette
    const remoteRole = m.role === 'pilot' ? 'copilot' : m.role === 'copilot' ? 'pilot' : null;
    if (!remoteRole || name === 'restart' || m.allowed(name, remoteRole) === true) handleAction(name, true);
  });
  m.on('restart', () => G && restart(settings.start));
  m.on('hostEvent', (e) => {
    if (!G) return;
    G.hud.message(e.text, e.level === 'caution' ? 'warn' : e.level, e.type === 'drop' ? 2.5 : 5);
    if (e.type === 'full' || e.type === 'scoopdone') audio.chime(2, 1046);
    if (e.level === 'caution') audio.chime(1, 880);
  });
  m.on('swapRequest', updateSwapUI);
  m.on('swapDeclined', () => G && G.hud.message('Il compagno ha rifiutato lo scambio', 'warn', 3));
}

function roleName(r) {
  return r === 'pilot' ? 'PILOTA' : r === 'copilot' ? 'COPILOTA' : 'SOLO';
}
function onRole(role, was) {
  if (!G) return;
  const { input, sys, cockpit, hud } = G;
  input.flight = role !== 'copilot';
  cockpit.setSeat(role === 'copilot' ? 1 : -1);
  // chi prende i comandi di volo riparte dalle manette attuali, cloche al centro
  input.throttle = sys.engines[0].lever;
  input.reverse = input.wheelReverse = 0;
  input.yokeEngaged = false;
  input.stick.x = input.stick.y = 0;
  input.rudder = 0;
  G.rig.lookReset();
  if (role === 'pilot') hud.message('👨‍✈️ Sei il PILOTA (sedile sinistro): cloche, pedali e manette. Flap, carrello, sonde e sgancio li gestisce il copilota.', 'info', 8);
  else if (role === 'copilot') hud.message('🧑‍✈️ Sei il COPILOTA (sedile destro): carrello (G), flap (V), sonde (P), sgancio (SPAZIO), modo (M), quantità (N), schiuma (J).', 'info', 8);
  else if (was === 'pilot' || was === 'copilot') hud.message('Il compagno è uscito: ora hai tutti i comandi.', 'warn', 5);
  const f = $('fade');
  f.style.opacity = 1;
  setTimeout(() => (f.style.opacity = 0), 220);
  updateSwapUI();
}
function updateSwapUI() {
  if (!mp) return;
  const p = $('swapPrompt');
  if (mp.pendingIn) {
    const next = mp.role === 'pilot' ? 'COPILOTA' : 'PILOTA';
    $('swapText').textContent = `🔄 Il compagno vuole scambiare i ruoli: tu diventeresti ${next}.`;
    p.style.display = 'flex';
  } else p.style.display = 'none';
}
$('swapYes').addEventListener('click', () => mp && mp.answerSwap(true));
$('swapNo').addEventListener('click', () => mp && mp.answerSwap(false));
$('swapBtn').addEventListener('click', () => {
  if (!mp || !mp.active || mp.sw) return;
  mp.requestSwap();
  G && G.hud.message('Richiesta di scambio inviata al compagno…', 'info', 3);
});
const requestRestart = () => {
  if (mp && mp.active && !mp.isHost) {
    mp.sendAction('restart');
    G.hud.message('Richiesta di ripartenza inviata all\'host…', 'info', 3);
  } else restart(settings.start);
};

$('startBtn').addEventListener('click', async () => {
  settings.quality = $('qualitySel').value;
  settings.start = $('startSel').value;
  settings.wind = $('windSel').value;
  try {
    for (const k of ['quality', 'start', 'wind']) localStorage.setItem('cl415.' + k, settings[k]);
  } catch (e) {
    /* archiviazione non disponibile */
  }
  audio.start();
  $('menu').style.display = 'none';
  if (!G) await build();
  else restart(settings.start);
  G.paused = false;
});

function supportsClipControl() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2');
    return !!(gl && gl.getExtension('EXT_clip_control'));
  } catch (e) {
    return false;
  }
}

async function build() {
  const load = $('loading');
  const status = $('loadStatus');
  load.style.display = 'flex';
  const step = async (t) => {
    status.textContent = t;
    await tick();
  };
  const q = settings.quality;
  await step('Preparazione del motore grafico…');
  const clip = supportsClipControl();
  const renderer = new THREE.WebGLRenderer({
    antialias: q !== 'low',
    powerPreference: 'high-performance',
    reverseDepthBuffer: clip,
    logarithmicDepthBuffer: !clip,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, q === 'high' ? 2 : q === 'low' ? 1 : 1.25));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.52;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  $('app').prepend(renderer.domElement);
  renderer.domElement.id = 'gl';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.05, 95000);
  camera.layers.enable(1);

  await step('Cielo e atmosfera…');
  const env = new Environment(scene, renderer, { quality: q });
  env.wind.speed = settings.wind === 'calm' ? 1.5 : settings.wind === 'strong' ? 9 : 4.6;
  env.wind.gust = settings.wind === 'calm' ? 0.6 : settings.wind === 'strong' ? 5 : 2.2;
  env.wind.turb = settings.wind === 'calm' ? 0.3 : settings.wind === 'strong' ? 2.2 : 1.0;
  env.updateWindBase();

  await step('Generazione del terreno (valle, lago, montagne)…');
  const terrain = new Terrain({ quality: q });
  await step('Incendi boschivi…');
  const fires = new FireSystem(scene, terrain, env, { quality: q });
  await step('Superficie del terreno…');
  scene.add(terrain.buildMesh(fires.fireAtlas));
  await step('Aeroporto e rampa idrovolanti…');
  const airfield = buildAirfield(terrain);
  scene.add(airfield);
  await step('Vegetazione…');
  const veg = new Vegetation(terrain, scene, { quality: q });
  veg.meshes.forEach((m) => m.layers.set(1));
  veg.burnFn = (x, z) => fires.burntAt(x, z);
  await step('Lago con riflessi…');
  const water = new Water({ terrain, sunDir: env.sunDir, quality: q, renderer });
  scene.add(water.mesh);
  await step('Canadair CL-415: fusoliera, ali, livrea…');
  const model = new AircraftModel({ quality: q });
  scene.add(model.group);
  await step('Cabina di pilotaggio e strumenti…');
  const cockpit = new Cockpit({ quality: q });
  model.group.add(cockpit.group);

  // interfaccia del mondo per la fisica
  const world = {
    groundHeight: (x, z) => (Math.abs(x) > WORLD.half - 50 || Math.abs(z) > WORLD.half - 50 ? 2000 : terrain.heightAt(x, z)),
    waterHeight: (x, z, t) => water.heightAt(x, z, t),
    windAt: (x, y, z, t, out) => env.windAt(x, y, z, t, out, Math.max(terrain.heightAt(x, z), 0)),
    surfaceFriction: (x, z) => terrain.surfaceFriction(x, z),
  };
  const fm = new FlightModel(world);
  const sys = new Systems();
  fm.sys = sys;
  const fx = new WaterFX(scene, { quality: q, world, onDeposit: (x, z, l, foam) => fires.deposit(x, z, l, foam) });
  const input = new Input(renderer.domElement);
  const towerPos = new THREE.Vector3(WORLD.runway.cx + DIR.x * 55 + NRM.x * 200, WORLD.runway.elev + 17, WORLD.runway.cz + DIR.z * 55 + NRM.z * 200);
  const rig = new CameraRig(camera, { towerPos });
  const hud = new HUD();
  setupTouch(input, (a) => input.actions.push(a));

  G = { renderer, scene, camera, env, terrain, fires, veg, water, model, cockpit, world, fm, sys, fx, input, rig, hud, paused: true, time: 0, crashShown: false, airfield };
  fires.start();
  restart(settings.start);
  await step('Pronto.');
  load.style.display = 'none';
  $('hud').style.display = 'block';
  hud.message('Benvenuto a bordo del CL-415. Premi H per i comandi.', 'info', 8);
  if (input.mouseYoke) hud.message('🖱️ Porta il mouse nel cerchio al centro per prendere la cloche · rotella = manette · tasto destro = guardati intorno', 'info', 8);
  hud.message('Incendi attivi sui versanti a sud del lago: guarda la mappa in alto a destra.', 'warn', 10);
  hud.setCamera(rig.mode);
  if (mp) onRole(mp.role, 'solo');
  window.addEventListener('resize', onResize);
  G.last = performance.now();
  window.__cl415 = G; // per test e debug
  if (TEST) {
    window.__advance = (seconds, fps = 30, renderLast = true) => {
      const n = Math.max(1, Math.round(seconds * fps));
      for (let i = 0; i < n; i++) frame(G.last + 1000 / fps, renderLast && i === n - 1);
      return true;
    };
  } else requestAnimationFrame(frame);
}

function onResize() {
  const { renderer, camera, water } = G;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  water.setSize(window.innerWidth, window.innerHeight, settings.quality);
}

function restart(mode) {
  const { fm, sys, input, hud, rig } = G;
  // ripristina impianti
  const fresh = new Systems();
  for (const k of Object.keys(fresh)) {
    if (k === 'events') continue;
    sys[k] = fresh[k];
  }
  sys.engines = fresh.engines;
  sys.fuel = 2300;
  input.throttle = 0;
  input.reverse = 0;
  input.wheelReverse = 0;
  input.yokeEngaged = false;
  input.stick.x = input.stick.y = 0;
  input.rudder = 0;
  const L = WORLD.lake;
  const hdg = Math.atan2(DIR.x, -DIR.z); // prua lungo l'asse del lago
  if (mode === 'water') {
    const p = fromLake(-2600, -280);
    sys.gearDown = false;
    sys.gearPos = 0;
    sys.flapIndex = 2;
    sys.flapPos = 15;
    fm.reset(new THREE.Vector3(p.x, 0, p.z), -hdg, 0, 'water');
    input.throttle = 0;
  } else if (mode === 'runway') {
    const R = WORLD.runway;
    const x = R.cx - DIR.x * (R.len / 2 - 60), z = R.cz - DIR.z * (R.len / 2 - 60);
    sys.gearDown = true;
    sys.gearPos = 1;
    sys.flapIndex = 1;
    sys.flapPos = 10;
    sys.parkingBrake = false;
    fm.reset(new THREE.Vector3(x, 0, z), -hdg, 0, 'runway');
  } else {
    const p = fromLake(-5200, 0);
    sys.gearDown = false;
    sys.gearPos = 0;
    sys.flapIndex = 0;
    sys.flapPos = 0;
    fm.reset(new THREE.Vector3(p.x, 330, p.z), -hdg, 135 * KT, 'air');
    input.throttle = 0.55;
    sys.engines.forEach((e) => {
      e.lever = 0.55;
      e.nh = 92;
    });
    sys.elevTrim = 0.1;
  }
  G.crashShown = false;
  hud.hideCrash();
  rig.lookReset();
  if (mp && mp.joined && mp.isHost) mp.bumpEpoch();
}

function handleAction(a, remote = false) {
  const { sys, fm, hud, rig, input } = G;
  if (mp && mp.active) {
    if (a === 'restart' && mp.pendingIn) return mp.answerSwap(true);
    if (a === 'swap') return mp.requestSwap();
    if (!remote) {
      const ok = mp.allowed(a);
      if (ok !== true) {
        hud.message(ok === 'copilot' ? 'Questo lo gestisce il COPILOTA' : 'Questo lo gestisce il PILOTA', 'warn', 2);
        return;
      }
      // il guest non tocca gli impianti: chiede all'host, lo stato torna con la fotografia
      if (!mp.isHost && mp.needsHost(a)) {
        mp.sendAction(a);
        audio.click(900, 0.06, 0.3);
        return;
      }
    }
  }
  switch (a) {
    case 'flapDown': sys.setFlaps(1); audio.click(900, 0.06, 0.3); break;
    case 'flapUp': sys.setFlaps(-1); audio.click(900, 0.06, 0.3); break;
    case 'flapCycle': sys.cycleFlaps(); audio.click(900, 0.06, 0.3); break;
    case 'gear': sys.toggleGear(fm); audio.click(600, 0.08, 0.4); break;
    case 'probes': sys.toggleProbes(fm); audio.click(1200, 0.05, 0.3); break;
    case 'drop': sys.drop(); audio.click(2000, 0.03, 0.4); break;
    case 'mode': sys.cycleDropMode(); audio.click(2400, 0.03, 0.3); break;
    case 'preset': sys.cycleScoopPreset(); audio.click(2400, 0.03, 0.3); break;
    case 'foam': sys.toggleFoam(); audio.click(1600, 0.04, 0.3); break;
    case 'lights': sys.lights.landing = !sys.lights.landing; hud.message('Fari di atterraggio: ' + (sys.lights.landing ? 'ACCESI' : 'SPENTI')); audio.click(); break;
    case 'parking': sys.parkingBrake = !sys.parkingBrake; hud.message('Freno di stazionamento: ' + (sys.parkingBrake ? 'INSERITO' : 'DISINSERITO')); break;
    case 'thrMax': input.throttle = 1; break;
    case 'thrIdle': input.throttle = 0; break;
    case 'camera': rig.set(rig.mode + 1); hud.setCamera(rig.mode); break;
    case 'hud': hud.toggleData(); break;
    case 'help': togglePanel('help'); break;
    case 'pause': togglePause(); break;
    case 'lookReset': rig.lookReset(); break;
    case 'mouseYoke': input.mouseYoke = !input.mouseYoke; input.yokeEngaged = false; hud.message('Cloche col mouse: ' + (input.mouseYoke ? 'ATTIVA' : 'DISATTIVA')); break;
    case 'gamepad': hud.message('Gamepad collegato', 'good'); break;
    case 'restart': if (fm.crash || remote) restart(settings.start); break;
    case 'trimUpPulse': sys.elevTrim = clamp(sys.elevTrim + 0.05, -1, 1); break;
    case 'trimDownPulse': sys.elevTrim = clamp(sys.elevTrim - 0.05, -1, 1); break;
    case 'swap': break;
    case 'debug': G.debug = !G.debug; $('debug').style.display = G.debug ? 'block' : 'none'; break;
    default:
      if (a.startsWith('cam')) {
        rig.set(parseInt(a.slice(3), 10) - 1);
        hud.setCamera(rig.mode);
      }
  }
}

function togglePanel(id) {
  const el = $(id);
  el.style.display = el.style.display === 'flex' ? 'none' : 'flex';
}
function togglePause() {
  // in coppia la simulazione non si ferma: il menu è solo un velo
  if (mp && mp.active) {
    const el = $('pause');
    el.style.display = el.style.display === 'flex' ? 'none' : 'flex';
    return;
  }
  G.paused = !G.paused;
  G.input.yokeEngaged = false;
  $('pause').style.display = G.paused ? 'flex' : 'none';
  if (G.paused && audio.ctx) audio.ctx.suspend();
  else if (audio.ctx) audio.ctx.resume();
}
$('resumeBtn').addEventListener('click', () => togglePause());
$('restartBtn').addEventListener('click', () => {
  requestRestart();
  togglePause();
});
$('menuBtn').addEventListener('click', () => {
  $('pause').style.display = 'none';
  $('menu').style.display = 'flex';
});
$('crashBtn').addEventListener('click', () => requestRestart());
$('helpClose').addEventListener('click', () => togglePanel('help'));
for (const el of document.querySelectorAll('[data-help]')) el.addEventListener('click', () => togglePanel('help'));

const _wind = new THREE.Vector3();
function frame(now, doRender = true) {
  if (!TEST) requestAnimationFrame(frame);
  const g = G;
  let dt = Math.min(0.05, (now - g.last) / 1000);
  g.last = now;
  const { fm, sys, input, rig, hud, model, cockpit, fx, fires, veg, env, water, camera, renderer } = g;
  for (const a of input.popActions()) handleAction(a);
  if (g.paused) {
    if (doRender) renderer.render(g.scene, camera);
    return;
  }
  g.time += dt;
  const o = fm.out;
  const onSurface = o.onGround || o.onWater;
  input.update(dt, onSurface);

  // comandi di volo: i miei (pilota o partita singola) oppure quelli del compagno pilota
  let cmd = { x: input.stick.x, y: input.stick.y, rudder: input.rudder, throttle: input.throttle, brakes: input.brakes, trimRate: input.trimRate, reverse: input.reverse };
  if (mp && mp.joined) {
    // il menu di pausa in coppia è un velo: la cloche resta al centro
    input.hold = $('pause').style.display === 'flex' || (mp.active && g.swapVisible);
    const remote = mp.update(dt, { ctl: cmd, head: rig.head, fm, sys });
    if (mp.active && mp.role === 'copilot') {
      cmd = remote || { x: 0, y: 0, rudder: 0, throttle: sys.engines[0].lever, brakes: 0, trimRate: 0, reverse: 0 };
    }
    mpUI(dt, g);
  }
  fm.ctl.elevator = cmd.y;
  fm.ctl.aileron = cmd.x;
  fm.ctl.rudder = cmd.rudder;
  fm.ctl.tiller = cmd.rudder;
  const br = cmd.brakes;
  fm.ctl.brakeL = clamp(br * (1 + Math.max(0, -cmd.rudder) * 0.6 - Math.max(0, cmd.rudder) * 0.5), 0, 1);
  fm.ctl.brakeR = clamp(br * (1 + Math.max(0, cmd.rudder) * 0.6 - Math.max(0, -cmd.rudder) * 0.5), 0, 1);
  for (const e of sys.engines) {
    e.lever = cmd.throttle;
    e.reverseLever = cmd.reverse;
  }
  sys.elevTrim = clamp(sys.elevTrim + cmd.trimRate * dt * 0.12, -1, 1);
  if (g.autopilot) g.autopilot(dt, g); // usato dai test automatici

  fm.update(dt);
  if (mp && mp.active && !mp.isHost) mp.follow(dt, fm, sys);

  // eventi degli impianti (in coppia l'host li inoltra al compagno, che non mostra i propri)
  if (mp && mp.active && mp.isHost) mp.noteEvents(sys.events);
  if (mp && mp.active && !mp.isHost) sys.events.length = 0;
  for (const ev of sys.events) {
    const lvl = ev.level === 'caution' ? 'warn' : ev.level;
    hud.message(ev.text, lvl, ev.type === 'drop' ? 2.5 : 5);
    if (ev.type === 'full' || ev.type === 'scoopdone') audio.chime(2, 1046);
    if (ev.level === 'caution') audio.chime(1, 880);
  }
  sys.events.length = 0;
  for (const ev of fires.events) {
    hud.message(ev.text, ev.level === 'good' ? 'good' : 'warn', 7);
    if (ev.level === 'good') audio.chime(3, 1318);
  }
  fires.events.length = 0;

  if (fm.crash && !g.crashShown) {
    g.crashShown = true;
    hud.showCrash(fm.crash.reason);
    audio.thump(1.5, o.surfaceUnder === 'water');
  }

  // aereo nel mondo (origine del modello = baricentro di riferimento)
  model.group.quaternion.copy(fm.quat);
  model.group.position.copy(fm.cg).negate().applyQuaternion(fm.quat).add(fm.pos);
  model.update(dt, sys, fm);
  model.group.updateMatrixWorld(true);
  const inside = rig.inside;
  cockpit.group.visible = inside;
  model.setInterior(inside);
  if (mp && mp.joined) cockpit.setPeer(mp.active && inside ? mp.peerView() : null);
  if (inside) cockpit.update(dt, fm, sys, g.time);

  // telecamera
  const look = input.consumeLook();
  env.windAt(fm.pos.x, fm.pos.y, fm.pos.z, g.time, _wind);
  rig.update(dt, fm, look, {
    eye: cockpit.eye,
    groundAt: (x, z) => Math.max(g.world.groundHeight(x, z), 0.3),
    shake: fx.cameraShake,
    turb: env.thermals.length ? 0.5 : 0,
  });

  if (g.camOverride) g.camOverride(camera); // usato dai test automatici
  // mondo
  fires.update(dt, g.time, camera.position);
  fx.update(dt, fm, sys, model, env, camera, g.time);
  veg.update(camera.position, dt);
  g._vegT = (g._vegT || 0) + dt;
  if (g._vegT > 2.5) {
    g._vegT = 0;
    veg.refreshColors();
  }
  env.update(dt, fm.pos, camera.position);
  water.update(dt, g.time, env);
  g.terrain.material.userData.uniforms.uTime.value = g.time;
  const ws = g.airfield.userData.windsock;
  if (ws) {
    const a = Math.atan2(_wind.x, _wind.z);
    ws.rotation.y = a - Math.PI / 2;
    ws.userData.sock.rotation.y = 0;
    ws.userData.sock.rotation.z = Math.PI / 2 - clamp(Math.hypot(_wind.x, _wind.z) / 8, 0.1, 1) * 1.3 + Math.PI / 2 - Math.PI / 2;
  }

  // audio
  const camToAc = fm.pos.clone().sub(camera.position);
  const dist = camToAc.length();
  const closing = dist > 1 ? -fm.vel.dot(camToAc) / dist : 0;
  audio.update(dt, fm, sys, { inside, distance: dist, closing });

  hud.update(dt, fm, sys, fires, input, rig, fx.windscreenWet);
  // rendering
  if (!doRender) return;
  fx.render(camera, env);
  fires.render(camera, env);
  renderer.render(g.scene, camera);
  if (g.debug) {
    const info = renderer.info;
    $('debug').textContent = `fps ${(1 / Math.max(dt, 1e-3)).toFixed(0)} | draw ${info.render.calls} | tri ${(info.render.triangles / 1e6).toFixed(2)}M | part ${JSON.stringify(fx.stats())} | alpha ${(o.alpha / DEG).toFixed(1)} beta ${(o.beta / DEG).toFixed(1)} | wet ${o.wetLength.toFixed(1)} depth ${o.hullDepth.toFixed(2)} | scoop ${o.scoopRate.toFixed(0)} L/s`;
  }
}

// interfaccia della coppia: ruolo, pulsante di scambio quando si guarda il compagno
function mpUI(dt, g) {
  const { rig, input } = g;
  g._mpT = (g._mpT || 0) + dt;
  const looking = mp.active && rig.inside && (mp.role === 'pilot' ? rig.head.tyaw < -0.5 : rig.head.tyaw > 0.5);
  const show = looking && !mp.pendingIn;
  if (show !== g.swapVisible) {
    g.swapVisible = show;
    $('swapBtn').style.display = show ? 'block' : 'none';
  }
  if (show) {
    const txt = mp.sw ? '⏳ In attesa del compagno…' : `🔄 Scambia ruolo (diventi ${mp.role === 'pilot' ? 'COPILOTA' : 'PILOTA'})`;
    if ($('swapBtn').textContent !== txt) $('swapBtn').textContent = txt;
  }
  if (g._mpT > 0.25) {
    g._mpT = 0;
    const bar = $('mpbar');
    let t;
    if (!mp.active) t = `👥 Stanza «${mp.code}» · aspetto il compagno… (hai tutti i comandi)`;
    else t = `👥 Tu: ${roleName(mp.role)} · ${mp.isHost ? 'host' : 'ospite'}${mp.stale > 2.5 ? ' · ⚠️ segnale debole' : ''}`;
    if (bar.textContent !== t) bar.textContent = t;
    bar.style.display = 'block';
  }
}

// la pagina di avvio mostra subito il menu
$('menu').style.display = 'flex';
