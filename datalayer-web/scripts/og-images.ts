// Vygeneruje OG obrázky (1200×630 PNG) pro sdílení stránek na LinkedInu
// a sociálních sítích: public/og/default.png + jeden pro každou obsahovou
// stránku (název souboru = cesta s pomlčkami, viz ogImageFor v app/lib/landingLd.ts).
//
// Spuštění (Playwright se do projektu neinstaluje natrvalo):
//   npm i --no-save playwright && npx tsx scripts/og-images.ts
// V cloudovém prostředí s předinstalovaným Chromiem stačí PLAYWRIGHT_BROWSERS_PATH.

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
import { PAGES } from '../app/content/registry.server';
import { ogImageFor } from '../app/lib/landingLd';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'public');
const sprite = fs.readFileSync(path.join(ROOT, 'app/components/Pictograms.tsx'), 'utf8').match(/const SYMBOLS = `([\s\S]*?)`;/)![1];
const font = (pkg: string, file: string) => pathToFileURL(path.join(ROOT, 'node_modules/@fontsource', pkg, 'files', file)).href;

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function html(opts: { title: string; tag: string; pictogram: string }): string {
  return `<!doctype html><html lang="cs"><head><meta charset="utf-8"><style>
@font-face{font-family:Inter;font-weight:800;src:url(${font('inter', 'inter-latin-ext-800-normal.woff2')}) format('woff2');unicode-range:U+0100-02AF}
@font-face{font-family:Inter;font-weight:800;src:url(${font('inter', 'inter-latin-800-normal.woff2')}) format('woff2');unicode-range:U+0000-00FF}
@font-face{font-family:Inter;font-weight:400;src:url(${font('inter', 'inter-latin-ext-400-normal.woff2')}) format('woff2');unicode-range:U+0100-02AF}
@font-face{font-family:Inter;font-weight:400;src:url(${font('inter', 'inter-latin-400-normal.woff2')}) format('woff2');unicode-range:U+0000-00FF}
@font-face{font-family:'Roboto Mono';font-weight:400;src:url(${font('roboto-mono', 'roboto-mono-latin-400-normal.woff2')}) format('woff2')}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:radial-gradient(900px 500px at 78% 30%,rgba(0,255,255,.10),transparent),#020d1e;color:#e6edf3;font-family:Inter,sans-serif;display:flex;flex-direction:column;justify-content:space-between;padding:72px 80px;overflow:hidden}
.top{display:flex;gap:56px;align-items:center}
.pi{flex:0 0 220px;height:220px;border:2px solid rgba(0,255,255,.35);border-radius:36px;display:flex;align-items:center;justify-content:center;background:#020a17}
.pi svg{width:150px;height:150px;color:#00ffff;filter:drop-shadow(0 0 14px rgba(0,255,255,.45))}
h1{font-weight:800;font-size:64px;line-height:1.08;letter-spacing:-1px;max-width:780px}
.tag{font-family:'Roboto Mono',monospace;font-size:26px;color:#00ffff;margin-top:22px}
.brand{font-weight:800;font-size:34px}.brand b{color:#00ffff}
.foot{display:flex;justify-content:space-between;align-items:flex-end;border-top:1px solid #1f2937;padding-top:28px;font-size:24px;color:#8b949e}
</style></head><body>
<svg style="display:none"><defs>${sprite}</defs></svg>
<div class="top"><div class="pi"><svg><use href="#pi-${opts.pictogram}"/></svg></div>
<div><h1>${esc(opts.title)}</h1><p class="tag">[ ${esc(opts.tag)} ]</p></div></div>
<div class="foot"><span class="brand">datalayer<b>.cz</b></span><span>Webová analytika a měření</span></div>
</body></html>`;
}

const jobs = [
  { file: '/og/default.png', title: 'Měření, kterému věříte', tag: 'GA4 · GTM · server-side · Consent Mode v2', pictogram: 'datalayer' },
  ...PAGES.map((p) => ({ file: ogImageFor(p.path), title: p.hero.h1, tag: p.hero.eyebrow, pictogram: p.pictogram })),
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const job of jobs) {
  await page.setContent(html(job), { waitUntil: 'load' });
  // načíst všechny řezy výslovně – document.fonts.ready nečeká na fonty, které ještě nezačaly načítat
  await page.evaluate(async () => {
    await Promise.all([...document.fonts].map((f) => f.load().catch(() => undefined)));
    await document.fonts.ready;
  });
  await page.screenshot({ path: path.join(OUT, job.file), type: 'png' });
  console.log('OG:', job.file);
}
await browser.close();
