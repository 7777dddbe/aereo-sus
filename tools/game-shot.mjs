// Uso: node tools/game-shot.mjs <outdir> <quality> <start> '<json steps>'
import { createRequire } from 'module';
import path from 'path';
const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch { pw = require('/opt/node-tools/node_modules/playwright'); }
const [,, outDir, quality, start, stepsJson] = process.argv;
const steps = JSON.parse(stepsJson);
const browser = await pw.chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const logs = [];
page.on('console', (m) => { const t = m.text(); if ((m.type() === 'error' || m.type() === 'warning') && !t.includes('willReadFrequently')) logs.push(m.type() + ': ' + t.slice(0, 300)); });
page.on('pageerror', (e) => logs.push('PAGEERROR: ' + e.message));
await page.goto('file://' + path.resolve('index.html') + '#test');
await page.selectOption('#qualitySel', quality);
await page.selectOption('#startSel', start);
const t0 = Date.now();
await page.click('#startBtn');
await page.waitForFunction(() => window.__cl415 && document.getElementById('loading').style.display === 'none', null, { timeout: 300000 });
console.log('caricato in', (Date.now() - t0) / 1000, 's');
for (const s of steps) {
  if (s.wait) await page.waitForTimeout(s.wait);
  if (s.adv) { const t1 = Date.now(); await page.evaluate((a) => window.__advance(a[0], a[1] || 30, a[2] !== false), Array.isArray(s.adv) ? s.adv : [s.adv]); console.log('adv', s.adv, (Date.now() - t1) / 1000, 's'); }
  if (s.key) { await page.keyboard.press(s.key); }
  if (s.down) await page.keyboard.down(s.down);
  if (s.up) await page.keyboard.up(s.up);
  if (s.eval) { const r = await page.evaluate(s.eval); if (r !== undefined) console.log('eval:', JSON.stringify(r)); }
  if (s.shot) { await page.screenshot({ path: path.join(outDir, s.shot + '.png') }); console.log('shot', s.shot); }
}
console.log(logs.slice(0, 30).join('\n'));
await browser.close();
