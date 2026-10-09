#!/usr/bin/env python3
"""Spočítá prvky před/po na ponechaných stránkách (stejné selektory jako inventura)."""
import sys, os, re, json, importlib.util
from playwright.sync_api import sync_playwright
SRC = os.path.dirname(os.path.abspath(__file__))
JS = open(os.path.join(SRC, 'redukce.js'), encoding='utf-8').read()
spec = importlib.util.spec_from_file_location('r', os.path.join(SRC, 'render.py')); r = importlib.util.module_from_spec(spec)
sys.argv = [sys.argv[0], '/tmp']; spec.loader.exec_module(r)
Q = {'eyebrow': '.eyebrow', 'micro': '.hero-micro, .lp-hero__micro', 'trust': '.lp-hero__trust li', 'hero_cta': '.hero-ctas a, .lp-hero__ctas a',
     'tags': '.tag, .lp-card__tags span, .plat a, .plat span', 'topics': '.dl-topics label', 'consoles': '.lp-console, pre', 'tech': 'details.lp-tech',
     'process': '.lp-process__step', 'related': '.lp-rel, .lp-strip a', 'faq': '.faq details', 'tables': 'table', 'tabs': '[role=tab], .lp-tab',
     'figures': 'figure, .lp-flow, .lp-figure', 'notes': '.lp-note, .lp-figures__note, .lp-pc__note', 'cards': '.lp-card', 'crumbs': '.crumbs', 'next': '.dl-next li'}
JSC = "q => { const m = document.querySelector('main'); const o = {}; for (const [k, s] of Object.entries(q)) o[k] = m.querySelectorAll(s).length; return o; }"
res = {}
with sync_playwright() as pw:
    b = pw.chromium.launch(); ctx = b.new_context(viewport={'width': 1440, 'height': 900}, http_credentials={'username': 'web', 'password': 'pwd'})
    ctx.route(re.compile(r'.*(google-analytics|googletagmanager|doubleclick|facebook|/api/).*'), lambda x: x.abort())
    for slug, (path, cfg) in r.PAGES.items():
        p = ctx.new_page(); p.goto(r.BASE + path, wait_until='networkidle')
        a = p.evaluate(JSC, Q); p.add_script_tag(content=JS); p.evaluate('cfg => window.__redukce(cfg)', cfg); z = p.evaluate(JSC, Q)
        res[slug] = {'pred': a, 'po': z}; p.close()
    b.close()
tot = {k: [sum(res[s]['pred'][k] for s in res), sum(res[s]['po'][k] for s in res)] for k in Q}
json.dump({'stranky': res, 'celkem': tot}, open(os.path.join(SRC, '..', '..', 'data', 'prvky_pred_po.json'), 'w'), ensure_ascii=False, indent=1)
for k, v in tot.items(): print(k, v)
print({s: res[s]['po'] for s in res if any(res[s]['po'][k] for k in ('tables', 'tabs', 'figures', 'notes', 'consoles'))})
