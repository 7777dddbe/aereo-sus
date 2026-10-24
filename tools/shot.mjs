// Uso: node tools/shot.mjs <pagina html> <outdir> <json delle viste>
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch { pw = require('/opt/node-tools/node_modules/playwright'); }
const { chromium } = pw;
import path from 'path';
const [,, page, outDir, viewsJson] = process.argv;
const views = JSON.parse(viewsJson);
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await browser.newPage({ viewport: { width: 1280, height: 720 } });
p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[console]', m.type(), m.text().slice(0, 400)); });
p.on('pageerror', (e) => console.log('[pageerror]', e.message));
await p.goto('file://' + path.resolve(page));
await p.waitForFunction(() => window.ready === true, null, { timeout: 120000 });
for (const v of views) {
  await p.evaluate((v) => window[v.fn || "setView"](...v.args), v);
  await p.screenshot({ path: path.join(outDir, v.name + '.png') });
  console.log('saved', v.name);
}
await browser.close();
