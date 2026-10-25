// Prova del multiplayer con due pagine e una finta stanza. Uso: node tools/mp-test.mjs <outdir>
import { createRequire } from 'module';
import path from 'path';
import fs from 'fs';
const require = createRequire(import.meta.url);
let pw; try { pw = require('playwright'); } catch { pw = require('/opt/node-tools/node_modules/playwright'); }
const out = process.argv[2] || '.';
const browser = await pw.chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ctx = await browser.newContext({ viewport: { width: 960, height: 540 } });
const mock = fs.readFileSync(path.resolve('tools/mp-mock.js'), 'utf8');
await ctx.addInitScript(mock);
const mk = async (name) => {
  const p = await ctx.newPage();
  p.on('pageerror', (e) => console.log(name, 'PAGEERROR', e.message));
  p.on('console', (m) => { if (m.type() === 'error') console.log(name, 'console.error', m.text().slice(0, 200)); });
  await p.goto('file://' + path.resolve('index.html') + '#test');
  await p.waitForFunction(() => document.getElementById('mpBox').style.display === 'block');
  await p.selectOption('#qualitySel', 'low');
  return p;
};
const A = await mk('A'), B = await mk('B');
const start = async (p, role) => {
  await p.selectOption('#mpRole', role);
  await p.click('#mpBtn');
  await p.waitForFunction(() => window.__cl415 && document.getElementById('loading').style.display === 'none', null, { timeout: 120000 });
};
await start(A, 'p');
await start(B, 'c');
const info = (p) => p.evaluate(() => { const G = window.__cl415; return { pos: G.fm.pos.toArray().map((v) => +v.toFixed(1)), flap: G.sys.flapIndex, gear: G.sys.gearDown, probes: G.sys.probesCmd, flight: G.input.flight, seat: G.cockpit.seat, peer: !!G.cockpit.peerView, bar: document.getElementById('mpbar').textContent, thr: +G.sys.engines[0].lever.toFixed(2), pitch: +(G.fm.out.pitch * 57.3).toFixed(1), tank: Math.round(G.sys.waterLiters()) }; });
const run = async (n, dt = 0.1) => { for (let i = 0; i < n; i++) { await A.evaluate((d) => window.__advance(d, 30, false), dt); await B.evaluate((d) => window.__advance(d, 30, false), dt); await A.waitForTimeout(30); } };
await run(15);
console.log('A', JSON.stringify(await info(A)));
console.log('B', JSON.stringify(await info(B)));
// il copilota (B) alza il carrello e cambia i flap: li esegue l'host (A)
await B.evaluate(() => { const i = window.__cl415.input; i.actions.push('flapCycle'); i.actions.push('probes'); });
await run(10);
console.log('dopo azioni B -> A', JSON.stringify(await info(A)).slice(0, 200));
console.log('dopo azioni B -> B', JSON.stringify(await info(B)).slice(0, 200));
// il pilota (A) tira la cloche e dà potenza: B deve seguire
await A.keyboard.down('KeyS');
await run(10);
await A.keyboard.up('KeyS');
await run(5);
const a = await info(A), b = await info(B);
console.log('pitch A/B', a.pitch, b.pitch, 'pos A', a.pos, 'pos B', b.pos);
// il pilota prova ad aprire i flap: bloccato
await A.evaluate(() => window.__cl415.input.actions.push('gear'));
await run(3);
console.log('gear dopo tentativo pilota (deve restare):', (await info(A)).gear);
// B (copilota) prova a muovere la cloche: ignorato
await B.keyboard.down('KeyW'); await run(4); await B.keyboard.up('KeyW');
// scambio ruoli: A guarda a destra e chiede lo scambio
await A.evaluate(() => { const r = window.__cl415.rig; r.head.tyaw = r.head.yaw = -1.0; });
await run(4);
await A.screenshot({ path: out + '/mp-swapbtn.png' });
await A.evaluate(() => document.getElementById('swapBtn').click());
await run(4);
console.log('B prompt visibile:', await B.evaluate(() => document.getElementById('swapPrompt').style.display));
await B.screenshot({ path: out + '/mp-prompt.png' });
await B.evaluate(() => document.getElementById('swapYes').click());
await run(10);
console.log('A dopo scambio', JSON.stringify(await info(A)).slice(0, 220));
console.log('B dopo scambio', JSON.stringify(await info(B)).slice(0, 220));
await A.evaluate(() => { const r = window.__cl415.rig; r.head.tyaw = r.head.yaw = 0; });
await B.evaluate(() => { const r = window.__cl415.rig; r.head.tyaw = r.head.yaw = 0.9; });
await run(5);
await B.evaluate(() => window.__advance(0.1, 30, true));
await B.screenshot({ path: out + '/mp-B-view.png' });
await A.evaluate(() => { const r = window.__cl415.rig; r.head.tyaw = r.head.yaw = -0.7; r.head.tpitch = r.head.pitch = -0.2; });
await A.evaluate(() => window.__advance(0.1, 30, true));
await A.screenshot({ path: out + '/mp-A-view.png' });
await B.evaluate(() => { const r = window.__cl415.rig; r.head.tyaw = r.head.yaw = -1.3; r.head.tpitch = r.head.pitch = 0.0; });
await run(3);
await B.evaluate(() => window.__advance(0.1, 30, true));
await B.screenshot({ path: out + '/mp-B-sees-A.png' });
await browser.close();
