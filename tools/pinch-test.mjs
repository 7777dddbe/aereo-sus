// Prova del pizzico a due dita, del trascinamento a un dito e del doppio tocco con eventi touch veri (CDP).
import { createRequire } from 'module';
import path from 'path';
const require = createRequire(import.meta.url);
let pw; try { pw = require('playwright'); } catch { pw = require('/opt/node-tools/node_modules/playwright'); }
const b = await pw.chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ctx = await b.newContext({ viewport: { width: 844, height: 390 }, hasTouch: true, isMobile: true, deviceScaleFactor: 1 });
const p = await ctx.newPage();
p.on('pageerror', (e) => console.log('[pageerror]', e.message));
await p.goto('file://' + path.resolve('index.html') + '#test-bassa');
await p.click('#startBtn');
await p.waitForFunction(() => window.__cl415 && document.getElementById('loading').style.display === 'none', null, { timeout: 300000 });
const cdp = await ctx.newCDPSession(p);
const touch = (type, pts) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: pts.map(([x, y], i) => ({ x, y, id: i + 1 })) });
const st = () => p.evaluate(() => { const G = window.__cl415; G.rig.set(0); return null; });
const read = () => p.evaluate(() => { const G = window.__cl415; return { zoom: +G.rig.zoom.toFixed(3), fov: +G.camera.fov.toFixed(1), yaw: +G.rig.head.tyaw.toFixed(3), mode: G.rig.id, lbl: document.getElementById('camlabel').textContent }; });
const adv = () => p.evaluate(() => window.__advance(0.1, 30, false));
await p.evaluate(() => { window.__cl415.rig.set(0); window.__cl415.rig.lookReset(); });
await adv();
console.log('inizio', await read());
// pizzica verso l'esterno: dita da 60 px a 240 px di distanza, in alto a destra del canvas (lontano dai comandi)
const cx = 420, cy = 120;
await touch('touchStart', [[cx - 30, cy], [cx + 30, cy]]);
for (let d = 30; d <= 120; d += 10) { await touch('touchMove', [[cx - d, cy], [cx + d, cy]]); }
await touch('touchEnd', []);
await adv();
console.log('dopo pizzico aperto', await read());
// pizzica verso l'interno: forte, fino al minimo
await touch('touchStart', [[cx - 150, cy], [cx + 150, cy]]);
for (let d = 150; d >= 12; d -= 8) { await touch('touchMove', [[cx - d, cy], [cx + d, cy]]); await adv(); }
await touch('touchEnd', []);
await adv();
const small = await read();
console.log('dopo pizzico chiuso (deve fermarsi al minimo 0.55 → ~130° di campo)', small);
// un dito: trascina verso sinistra → guarda a destra
await touch('touchStart', [[300, 130]]);
for (let x = 300; x >= 200; x -= 20) await touch('touchMove', [[x, 130]]);
await touch('touchEnd', []);
await adv();
console.log('dopo trascinamento', await read());
// doppio tocco: azzera sguardo e zoom
await touch('touchStart', [[420, 130]]); await touch('touchEnd', []);
await p.waitForTimeout(120);
await touch('touchStart', [[420, 130]]); await touch('touchEnd', []);
await adv();
await adv();
console.log('dopo doppio tocco', await read());
// visuale di inseguimento: pizzico aperto = si avvicina (zoom*, distanza ridotta)
await p.evaluate(() => { window.__cl415.rig.set(1); });
await adv();
const c0 = await read();
await touch('touchStart', [[cx - 30, cy], [cx + 30, cy]]);
for (let d = 30; d <= 110; d += 10) await touch('touchMove', [[cx - d, cy], [cx + d, cy]]);
await touch('touchEnd', []);
await adv();
console.log('inseguimento prima', c0, 'dopo pizzico aperto', await read());
await p.screenshot({ path: process.argv[2] ? process.argv[2] + '/pinch.png' : '/tmp/pinch.png', timeout: 120000 });
await b.close();
