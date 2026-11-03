// Mostra le fasi di caricamento con i tempi (per trovare quelle lente)
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let pw; try { pw = require('playwright'); } catch { pw = require('/opt/node-tools/node_modules/playwright'); }
const b = await pw.chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 960, height: 540 } });
p.on('pageerror', (e) => console.log('[pageerror]', e.message));
p.on('console', (m) => { const t = m.text(); if (m.type() === 'error' || t.startsWith('[carico]')) console.log('[console]', t.slice(0, 300)); });
await p.goto('file://' + process.cwd() + '/index.html#test' + ((process.argv[2] || 'low') === 'high' ? '' : '-bassa'));
await p.click('#startBtn');
const t0 = Date.now();
let last = '';
for (let i = 0; i < 600; i++) {
  const st = await p.evaluate(() => [document.getElementById('loadStatus').textContent, document.getElementById('loading').style.display]);
  if (st[0] !== last) { console.log(((Date.now() - t0) / 1000).toFixed(1) + 's', st[0]); last = st[0]; }
  if (st[1] === 'none') { console.log('PRONTO', ((Date.now() - t0) / 1000).toFixed(1) + 's'); break; }
  await p.waitForTimeout(500);
}
await b.close();
