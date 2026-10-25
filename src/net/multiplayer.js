// Multiplayer cooperativo a due: PILOTA (sinistra, solo volo) e COPILOTA (destra, impianti dell'acqua).
//
// Trasporto: solo "presence" della capability `room` degli Artifact (nessun permesso speciale oltre a
// poter aprire la pagina). Ogni giocatore pubblica un piccolo oggetto con i propri comandi, la direzione
// dello sguardo e le azioni; l'host aggiunge una fotografia dello stato del velivolo (~15 Hz).
//
// Architettura: ogni client simula l'aereo in locale (reattivo) e "segue" l'host con correzioni morbide.
//   - volo: il pilota manda i comandi continui, tutti li applicano;
//   - impianti (flap, carrello, sonde, sgancio...): il copilota manda un'azione, la applica l'host e
//     lo stato torna a tutti con la fotografia;
//   - ruoli: li decide l'host (campo `ro`); si scambiano con richiesta + accettazione.

import * as THREE from 'three';
import { clamp } from '../core/math.js';

const APP = 'cl415';
const PILOT_ACTS = new Set(['parking', 'trimUpPulse', 'trimDownPulse', 'thrMax', 'thrIdle']);
const COPILOT_ACTS = new Set(['flapDown', 'flapUp', 'flapCycle', 'gear', 'probes', 'drop', 'mode', 'preset', 'foam', 'lights']);
// azioni che modificano gli impianti e quindi vanno eseguite dall'host
const HOST_ACTS = new Set([...COPILOT_ACTS, 'parking', 'trimUpPulse', 'trimDownPulse', 'restart']);

// campi degli impianti inviati nella fotografia (posizionali, per tenerla piccola)
const SYS_PATHS = [
  'fuel', 'tanks.0', 'tanks.1', 'tanks.2', 'tanks.3', 'foamConc', 'foamMix.0', 'foamMix.1', 'foamMix.2', 'foamMix.3',
  'foamArmed', 'flapIndex', 'flapPos', 'gearDown', 'gearPos', 'probesCmd', 'probePos',
  'doorOpen.0', 'doorOpen.1', 'doorOpen.2', 'doorOpen.3', 'doorCmd.0', 'doorCmd.1', 'doorCmd.2', 'doorCmd.3',
  'outflow.0', 'outflow.1', 'outflow.2', 'outflow.3', 'dropMode', 'scoopPreset', 'elevTrim', 'parkingBrake',
  'lights.landing', 'scoopedThisRun', 'totalDropped',
];
for (let i = 0; i < 2; i++) {
  for (const k of ['lever', 'reverseLever', 'reverse', 'running', 'nh', 'np', 'pf', 'torque', 'itt', 'ff', 'oilP', 'oilT', 'feathered', 'fire', 'shaftPower']) {
    SYS_PATHS.push(`engines.${i}.${k}`);
  }
}
const SYS_PARTS = SYS_PATHS.map((p) => p.split('.'));

const getPath = (o, parts) => {
  for (const k of parts) {
    if (o == null) return undefined;
    o = o[k];
  }
  return o;
};
const setPath = (o, parts, v) => {
  for (let i = 0; i < parts.length - 1; i++) {
    o = o[parts[i]];
    if (o == null) return;
  }
  const k = parts[parts.length - 1];
  o[k] = typeof o[k] === 'boolean' ? !!v : v;
};

export function packSys(sys) {
  return SYS_PARTS.map((p) => {
    const v = getPath(sys, p);
    return typeof v === 'boolean' ? (v ? 1 : 0) : Math.round((v || 0) * 1000) / 1000;
  });
}
export function unpackSys(sys, arr) {
  if (!Array.isArray(arr) || arr.length !== SYS_PARTS.length) return;
  SYS_PARTS.forEach((p, i) => setPath(sys, p, arr[i]));
}

const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r5 = (v) => Math.round(v * 1e5) / 1e5;

export class Multiplayer {
  constructor(roomApi) {
    this.room = roomApi; // capability `room` (o un finto per i test)
    this.code = '';
    this.joined = false;
    this.joinedAt = 0;
    this.pref = 'p'; // ruolo scelto dall'host: 'p' pilota, 'c' copilota
    this.ro = 'p'; // ruolo dell'host (autorità)
    this.cfg = null; // impostazioni di partenza (solo host)
    this.isHost = true;
    this.active = false; // c'è un compagno
    this.role = 'solo'; // 'solo' | 'pilot' | 'copilot'
    this.peer = null;
    this.acts = [];
    this.lastAct = new Map();
    this.snap = null;
    this.snapSeen = null;
    this.epoch = 0;
    this.seenEpoch = 0;
    this.sw = 0; // id della mia richiesta di scambio
    this.sa = 0; // id della richiesta a cui ho detto sì
    this.sd = 0; // id della richiesta rifiutata
    this.seenSw = 0;
    this.pendingIn = null; // richiesta ricevuta in attesa di risposta {id, t}
    this.events = []; // eventi impianti dell'host da mostrare al copilota
    this.evSeen = 0;
    this.evOut = [];
    this._pubT = 0;
    this._lastPub = '';
    this.stale = 0;
    this.listeners = {};
    this.full = false;
  }

  on(name, fn) {
    (this.listeners[name] = this.listeners[name] || []).push(fn);
  }
  _emit(name, ...a) {
    for (const f of this.listeners[name] || []) f(...a);
  }

  // ---------------------------------------------------------------------------
  async join(code, pref, cfg) {
    this.code = code;
    this.pref = pref;
    this.ro = pref;
    this.cfg = cfg;
    this.joinedAt = Date.now();
    this.joined = true;
    await this.room.presence({ a: APP, k: code, j: this.joinedAt, r: pref, ro: pref, cfg });
    // aspetta un po' per vedere se c'è già un host con la stessa stanza
    for (let i = 0; i < 18; i++) {
      await new Promise((r) => setTimeout(r, 100));
      if (this._players().some((p) => !p.isMe)) break;
    }
    this._resolve();
    return { host: this.isHost, cfg: this.isHost ? null : this.peer && this.peer.presence.cfg };
  }

  leave() {
    if (!this.joined) return;
    this.joined = false;
    this.active = false;
    this.role = 'solo';
    try {
      this.room.presence({ a: null, k: null, j: null, s: null, c: null, h: null, q: null, cfg: null, ro: null, r: null });
    } catch (e) { /* ignora */ }
  }

  _players() {
    const list = (this.room.peers() || []).filter((p) => p.presence && p.presence.a === APP && p.presence.k === this.code);
    list.sort((a, b) => (a.presence.j || 0) - (b.presence.j || 0) || (a.peer < b.peer ? -1 : 1));
    return list;
  }

  _resolve() {
    const players = this._players();
    const meIdx = players.findIndex((p) => p.isMe);
    const was = this.role;
    this.full = meIdx > 1;
    const newHost = meIdx <= 0;
    // se l'host se ne va divento io l'host e tengo il ruolo che avevo
    if (newHost && !this.isHost && this.active) this.ro = this._lastLetter || this.ro;
    this.isHost = newHost;
    const other = players.find((p, i) => !p.isMe && i < 2);
    this.peer = !this.full && other ? other : null;
    const wasActive = this.active;
    this.active = !!this.peer;
    if (this.active) {
      if (this.isHost) this.role = this.ro === 'p' ? 'pilot' : 'copilot';
      else {
        const hr = this.peer.presence.ro || 'p';
        this.ro = hr;
        this.role = hr === 'p' ? 'copilot' : 'pilot';
      }
    } else this.role = 'solo';
    if (this.active) this._lastLetter = this.role === 'pilot' ? 'p' : 'c';
    if (this.role !== was || wasActive !== this.active) this._emit('role', this.role, was);
  }

  // ---------------------------------------------------------------------------
  // Chiamato ad ogni fotogramma. Ritorna i comandi di volo del pilota (null = usa quelli locali).
  update(dt, ctx) {
    if (!this.joined) return null;
    this._resolve();
    const peer = this.peer;
    const pp = peer ? peer.presence : null;

    // azioni dal compagno (le esegue l'host)
    if (pp && !this.lastAct.has(peer.peer) && !Array.isArray(pp.q)) this.lastAct.set(peer.peer, 0);
    if (pp && Array.isArray(pp.q)) {
      const key = peer.peer;
      // azioni vecchie (di chi era già qui prima di me) si ignorano; quelle di chi arriva dopo contano tutte
      if (!this.lastAct.has(key)) this.lastAct.set(key, (pp.j || 0) < this.joinedAt ? pp.q.reduce((m, e) => Math.max(m, e[0]), 0) : 0);
      const last = this.lastAct.get(key);
      let max = last;
      for (const [id, name] of pp.q) {
        if (id > last) {
          if (this.isHost) this._emit('action', name);
          max = Math.max(max, id);
        }
      }
      this.lastAct.set(key, max);
    }

    // fotografia dell'host
    if (!this.isHost && pp && pp.s && pp.s !== this.snapSeen) {
      this.snapSeen = pp.s;
      const s = pp.s;
      this.snap = { p: s.p, q: s.q, v: s.v, w: s.w, sy: s.sy, cr: s.cr, ep: s.ep, ev: s.ev, at: performance.now(), fresh: true };
      this.stale = 0;
      if (s.ep !== this.seenEpoch) {
        const first = this.seenEpoch === 0 && !this.hadEpoch;
        this.seenEpoch = s.ep;
        this.hadEpoch = true;
        if (!first) this._emit('restart');
      }
      if (Array.isArray(s.ev)) {
        for (const e of s.ev) {
          if (e[0] > this.evSeen) {
            if (this.evSeen !== 0 || !this._firstEv) this._emit('hostEvent', { text: e[1], level: e[2], type: e[3] });
            this.evSeen = Math.max(this.evSeen, e[0]);
          }
        }
        this._firstEv = true;
      }
    } else if (!this.isHost) this.stale += dt;
    if (this.isHost) this.stale = 0;

    // richieste di scambio ruolo
    if (pp) {
      if (pp.sw && pp.sw !== this.seenSw && pp.sw !== this.pendingIn?.id) {
        this.pendingIn = { id: pp.sw, t: performance.now() };
        this._emit('swapRequest');
      }
      if (this.isHost && this.sw && pp.sa === this.sw) {
        this.sw = 0;
        this._flip();
      }
      if (this.sw && pp.sd === this.sw) {
        this.sw = 0;
        this._emit('swapDeclined');
      }
    }
    if (this.pendingIn && performance.now() - this.pendingIn.t > 15000) {
      this.pendingIn = null;
      this._emit('swapRequest');
    }

    // comandi di volo remoti (solo se il compagno è il pilota)
    let remote = null;
    if (pp && this.role === 'copilot' && Array.isArray(pp.c)) {
      const c = pp.c;
      remote = { x: c[0], y: c[1], rudder: c[2], throttle: c[3], brakes: c[4], trimRate: c[5], reverse: c[6] };
    }

    this._publish(dt, ctx);
    return remote;
  }

  _flip() {
    this.ro = this.ro === 'p' ? 'c' : 'p';
    this._resolve();
  }

  requestSwap() {
    if (!this.active) return;
    this.sw = Date.now();
    this.room.presence({ sw: this.sw });
  }
  answerSwap(accept) {
    const req = this.pendingIn;
    if (!req) return;
    this.pendingIn = null;
    this.seenSw = req.id;
    if (accept) {
      if (this.isHost) this._flip();
      else {
        this.sa = req.id;
        this.room.presence({ sa: req.id });
      }
    } else {
      this.sd = req.id;
      this.room.presence({ sd: req.id });
    }
    this._emit('swapRequest');
  }

  sendAction(name) {
    const id = Date.now();
    this.acts.push([id <= (this._lastId || 0) ? this._lastId + 1 : id, name]);
    this._lastId = this.acts[this.acts.length - 1][0];
    if (this.acts.length > 6) this.acts.shift();
    this.room.presence({ q: this.acts });
  }

  // permessi dell'azione per il mio ruolo; false = bloccata (con messaggio)
  allowed(action, role = this.role) {
    if (role === 'pilot' && COPILOT_ACTS.has(action)) return 'copilot';
    if (role === 'copilot' && PILOT_ACTS.has(action)) return 'pilot';
    return true;
  }
  needsHost(action) {
    return HOST_ACTS.has(action);
  }

  // ---------------------------------------------------------------------------
  _publish(dt, ctx) {
    this._pubT += dt;
    if (this._pubT < 1 / 16) return;
    this._pubT = 0;
    const patch = { r: this.role === 'pilot' ? 'p' : this.role === 'copilot' ? 'c' : this.pref };
    if (this.role === 'pilot' && ctx.ctl) {
      const c = ctx.ctl;
      patch.c = [r3(c.x), r3(c.y), r3(c.rudder), r3(c.throttle), r3(c.brakes), c.trimRate, r3(c.reverse)];
    } else patch.c = null;
    if (ctx.head) patch.h = [r2(ctx.head.yaw), r2(ctx.head.pitch)];
    if (this.isHost) {
      patch.ro = this.ro;
      patch.cfg = this.cfg;
      if (this.active && ctx.fm) {
        const { fm, sys } = ctx;
        patch.s = {
          p: [r2(fm.pos.x), r2(fm.pos.y), r2(fm.pos.z)],
          q: [r5(fm.quat.x), r5(fm.quat.y), r5(fm.quat.z), r5(fm.quat.w)],
          v: [r2(fm.vel.x), r2(fm.vel.y), r2(fm.vel.z)],
          w: [r3(fm.omega.x), r3(fm.omega.y), r3(fm.omega.z)],
          sy: packSys(sys),
          cr: fm.crash ? fm.crash.reason : null,
          ep: this.epoch,
          ev: this.evOut,
        };
      } else patch.s = null;
    }
    this.room.presence(patch);
  }

  // l'host registra gli eventi degli impianti perché il copilota li veda
  noteEvents(list) {
    for (const e of list) {
      if (e.type === 'drop' || e.level !== 'info' || e.type === 'full' || e.type === 'scoopdone' || e.type === 'probes' || e.type === 'flaps' || e.type === 'mode') {
        this._evId = Math.max(Date.now(), (this._evId || 0) + 1);
        this.evOut.push([this._evId, e.text, e.level, e.type]);
        if (this.evOut.length > 4) this.evOut.shift();
      }
    }
  }
  bumpEpoch() {
    this.epoch = Date.now();
  }

  // ---------------------------------------------------------------------------
  // Il guest segue la fotografia dell'host con correzioni morbide
  follow(dt, fm, sys) {
    const s = this.snap;
    if (!s) return;
    if (s.fresh) {
      s.fresh = false;
      unpackSys(sys, s.sy);
    }
    const age = (performance.now() - s.at) / 1000 + 0.07;
    const w = new THREE.Vector3(s.w[0], s.w[1], s.w[2]);
    const tp = new THREE.Vector3(s.p[0] + s.v[0] * age, s.p[1] + s.v[1] * age, s.p[2] + s.v[2] * age);
    const tq = new THREE.Quaternion(s.q[0], s.q[1], s.q[2], s.q[3]);
    if (w.lengthSq() > 1e-10) tq.multiply(new THREE.Quaternion().setFromAxisAngle(w.clone().normalize(), w.length() * age));
    const err = tp.distanceTo(fm.pos);
    if (err > 30 || !this._synced) {
      this._synced = true;
      fm.pos.copy(tp);
      fm.quat.copy(tq);
      fm.vel.set(s.v[0], s.v[1], s.v[2]);
      fm.omega.copy(w);
    } else {
      const k = 1 - Math.exp(-dt * 5);
      fm.pos.lerp(tp, k);
      fm.quat.slerp(tq, k);
      fm.vel.lerp(new THREE.Vector3(s.v[0], s.v[1], s.v[2]), k);
      fm.omega.lerp(w, k);
    }
    // l'incidente lo decide l'host
    if (s.cr && !fm.crash) fm.crash = { reason: s.cr, time: fm.time, pos: fm.pos.clone(), vel: fm.vel.clone() };
    else if (!s.cr && fm.crash) fm.crash = null;
  }

  peerView() {
    if (!this.peer) return null;
    const pp = this.peer.presence;
    const h = Array.isArray(pp.h) ? pp.h : [0, 0];
    return { role: this.role === 'pilot' ? 'copilot' : 'pilot', yaw: clamp(h[0] || 0, -2.6, 2.6), pitch: clamp(h[1] || 0, -1.2, 1.1) };
  }
}
