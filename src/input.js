// Comandi: tastiera (con escursione progressiva dei comandi), mouse (sguardo / cloche), gamepad e touch.

import { clamp, approach } from './core/math.js';

export const KEYMAP = [
  ['W / S  (↑ / ↓)', 'Cloche avanti / indietro (picchiare / cabrare)'],
  ['A / D  (← / →)', 'Alettoni (rollio)'],
  ['Q / E', 'Pedaliera (timone e ruotino)'],
  ['R / F', 'Manette + / − (F tenuto al minimo in acqua o a terra = reverse)'],
  ['Shift+R / Shift+F', 'Potenza massima / minimo'],
  ['V / Shift+V', 'Flap giù / su (0-10-15-25°)'],
  ['G', 'Carrello (anfibio)'],
  ['P', 'Sonde di pescaggio (estendi / ritrai)'],
  ['SPAZIO', 'SGANCIO dell\'acqua'],
  ['M', 'Modalità di sgancio (salvo, 2+2, sequenza, 1 porta)'],
  ['N', 'Quantità di pescaggio preselezionata'],
  ['J', 'Schiumogeno (arma / disarma)'],
  ['T / Shift+T', 'Trim cabrare / picchiare'],
  ['B (tenuto) / Shift+B', 'Freni / freno di stazionamento'],
  ['L', 'Fari di atterraggio'],
  ['C / 1-7', 'Cambia visuale (cabina, inseguimento, orbita, passaggio, sonde, ala, torre)'],
  ['Mouse (trascina) / rotella', 'Guarda intorno / zoom'],
  ['Y', 'Cloche col mouse (on/off)'],
  ['O', 'Pannello dati on/off'],
  ['H / F1', 'Aiuto'],
  ['Esc', 'Pausa / menu'],
  ['Invio', 'Riparti dopo un incidente'],
];

export class Input {
  constructor(dom) {
    this.dom = dom;
    this.keys = new Set();
    this.actions = [];
    this.stick = { x: 0, y: 0 }; // x rollio (+destra), y beccheggio (+cabrare)
    this.rudder = 0;
    this.throttle = 0.0;
    this.reverse = 0;
    this.brakes = 0;
    this.mouseYoke = false;
    this.look = { dx: 0, dy: 0, wheel: 0, dragging: false };
    this.gamepad = null;
    this.touch = { active: false, x: 0, y: 0, throttle: null };
    this._mouse = { x: 0, y: 0 };
    this._bind();
  }

  _bind() {
    const shiftActs = { KeyR: 'thrMax', KeyF: 'thrIdle', KeyV: 'flapUp', KeyB: 'parking' };
    const acts = {
      KeyV: 'flapDown', BracketRight: 'flapDown', BracketLeft: 'flapUp', KeyG: 'gear', KeyP: 'probes', Space: 'drop',
      KeyM: 'mode', KeyN: 'preset', KeyJ: 'foam', KeyL: 'lights', KeyC: 'camera', KeyO: 'hud', KeyH: 'help', F1: 'help',
      Escape: 'pause', Enter: 'restart', KeyY: 'mouseYoke', KeyK: 'debug',
    };
    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
      const c = e.code;
      if (!e.repeat) {
        if (e.shiftKey && shiftActs[c]) this.actions.push(shiftActs[c]);
        else if (acts[c]) this.actions.push(acts[c]);
        if (/^Digit[1-7]$/.test(c)) this.actions.push('cam' + c.slice(5));
      }
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'Tab'].includes(c)) e.preventDefault();
      this.keys.add(c);
      this.shift = e.shiftKey;
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
      this.shift = e.shiftKey;
    });
    window.addEventListener('blur', () => this.keys.clear());
    const el = this.dom;
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') return;
      this.look.dragging = true;
      this._mouse.x = e.clientX;
      this._mouse.y = e.clientY;
      el.setPointerCapture && el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointerup', () => (this.look.dragging = false));
    el.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return;
      if (this.look.dragging) {
        this.look.dx += e.clientX - this._mouse.x;
        this.look.dy += e.clientY - this._mouse.y;
      }
      this._mouse.x = e.clientX;
      this._mouse.y = e.clientY;
      this._mouseNorm = { x: (e.clientX / window.innerWidth) * 2 - 1, y: (e.clientY / window.innerHeight) * 2 - 1 };
    });
    el.addEventListener('dblclick', () => this.actions.push('lookReset'));
    el.addEventListener('wheel', (e) => {
      this.look.wheel += Math.sign(e.deltaY);
      e.preventDefault();
    }, { passive: false });
    window.addEventListener('gamepadconnected', (e) => {
      this.gamepad = e.gamepad.index;
      this.actions.push('gamepad');
    });
  }

  consumeLook() {
    const l = { dx: this.look.dx, dy: this.look.dy, wheel: this.look.wheel };
    this.look.dx = this.look.dy = this.look.wheel = 0;
    return l;
  }

  update(dt, onSurface) {
    const k = this.keys;
    const down = (...c) => c.some((x) => k.has(x));
    // tastiera: escursione progressiva (non digitale), ritorno al centro elastico
    let tx = 0, ty = 0, tr = 0;
    if (down('KeyA', 'ArrowLeft')) tx -= 1;
    if (down('KeyD', 'ArrowRight')) tx += 1;
    if (down('KeyS', 'ArrowDown')) ty += 1;
    if (down('KeyW', 'ArrowUp')) ty -= 1;
    if (down('KeyQ')) tr -= 1;
    if (down('KeyE')) tr += 1;
    const rate = (t, cur) => (t === 0 ? 3.2 : Math.sign(t) !== Math.sign(cur) && cur !== 0 ? 4 : 1.6);
    let sx = approach(this.stick.x, tx, rate(tx, this.stick.x), dt);
    let sy = approach(this.stick.y, ty * 0.85, rate(ty, this.stick.y), dt);
    let rd = approach(this.rudder, tr, rate(tr, this.rudder), dt);
    // cloche col mouse
    if (this.mouseYoke && this._mouseNorm && !this.look.dragging) {
      sx = clamp(this._mouseNorm.x * 1.4, -1, 1);
      sy = clamp(-this._mouseNorm.y * 1.4, -1, 1);
    }
    // gamepad
    const gpList = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = this.gamepad !== null ? gpList[this.gamepad] : null;
    if (gp) {
      const dz = (v) => (Math.abs(v) < 0.08 ? 0 : (v - Math.sign(v) * 0.08) / 0.92);
      const ax = dz(gp.axes[0] || 0), ay = dz(gp.axes[1] || 0), rx = dz(gp.axes[2] || 0), ry = dz(gp.axes[3] || 0);
      if (Math.abs(ax) > 0 || Math.abs(ay) > 0) {
        sx = Math.sign(ax) * ax * ax;
        sy = -Math.sign(ay) * ay * ay;
      }
      if (Math.abs(rx) > 0) rd = rx;
      const btn = (i) => gp.buttons[i] && gp.buttons[i].pressed;
      const rt = gp.buttons[7] ? gp.buttons[7].value : 0;
      const lt = gp.buttons[6] ? gp.buttons[6].value : 0;
      this.throttle = clamp(this.throttle + (rt - lt) * dt * 0.6 - ry * dt * 0.5, 0, 1);
      this.brakes = Math.max(this.brakes, btn(4) && btn(5) ? 1 : 0);
      this._gpPrev = this._gpPrev || [];
      const edge = (i, act) => {
        const p = btn(i);
        if (p && !this._gpPrev[i]) this.actions.push(act);
        this._gpPrev[i] = p;
      };
      edge(0, 'drop'); edge(1, 'probes'); edge(2, 'flapDown'); edge(3, 'flapUp'); edge(8, 'camera'); edge(9, 'pause');
      edge(10, 'gear'); edge(12, 'trimUpPulse'); edge(13, 'trimDownPulse'); edge(14, 'mode'); edge(15, 'lights');
    }
    // touch
    if (this.touch.active) {
      sx = this.touch.x;
      sy = this.touch.y;
    }
    if (this.touch.throttle !== null) this.throttle = this.touch.throttle;
    this.stick.x = sx;
    this.stick.y = sy;
    this.rudder = rd;
    // manette
    if (down('KeyR') && !this.shift) this.throttle = clamp(this.throttle + dt * 0.45, 0, 1);
    if (down('KeyF') && !this.shift) {
      if (this.throttle > 0) this.throttle = clamp(this.throttle - dt * 0.45, 0, 1);
      else if (onSurface) {
        this._revHold = (this._revHold || 0) + dt;
        if (this._revHold > 0.4) this.reverse = clamp(this.reverse + dt * 0.6, 0, 1);
      }
    } else {
      this._revHold = 0;
      this.reverse = approach(this.reverse, 0, 1.5, dt);
    }
    if (!onSurface) this.reverse = 0;
    this.brakes = down('KeyB') && !this.shift ? 1 : approach(this.brakes, 0, 4, dt);
    // trim continuo
    this.trimRate = (down('KeyT') ? (this.shift ? -1 : 1) : 0);
  }

  popActions() {
    const a = this.actions;
    this.actions = [];
    return a;
  }
}
