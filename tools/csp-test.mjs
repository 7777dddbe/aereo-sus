// Carica la pagina con una CSP come quella degli Artifact e riporta errori/violazioni.
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let pw; try { pw = require('playwright'); } catch { pw = require('/opt/node-tools/node_modules/playwright'); }
const url = process.argv[2];
const b = await pw.chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 960, height: 540 } });
p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[console]', m.type(), m.text().slice(0, 300)); });
p.on('pageerror', (e) => console.log('[pageerror]', e.message));
await p.goto(url + '#test' + ((process.argv[3] || 'low') === 'high' ? '' : '-bassa'));
await p.click('#startBtn');
try {
  await p.waitForFunction(() => window.__cl415 && document.getElementById('loading').style.display === 'none', null, { timeout: 90000 });
  console.log('CARICATO OK');
} catch (e) {
  console.log('NON CARICA; stato:', await p.evaluate(() => document.getElementById('loadStatus').textContent));
}
await b.close();
