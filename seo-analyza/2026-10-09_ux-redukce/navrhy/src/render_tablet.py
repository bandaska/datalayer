#!/usr/bin/env python3
"""Hero na tabletu (768 px) – chyba CTA přes celou šířku. Usage: render_tablet.py OUT_DIR"""
import sys, os, re
from playwright.sync_api import sync_playwright
OUT = sys.argv[1]
JS = open(os.path.join(os.path.dirname(__file__), 'redukce.js'), encoding='utf-8').read()
PAGES = {'index': ('/', {'keep': None, 'text': {'.hero-sub': 'Navrhneme, nasadíme a ověříme měření pro e-shopy a B2B firmy – od datové vrstvy po BigQuery. S dokumentací a s daty, která vlastníte vy.'}}),
         'sluzby_bigquery': ('/sluzby/bigquery', {'keep': None, 'text': {'.lp-hero__h1': 'BigQuery a dashboardy pro marketing'}})}
with sync_playwright() as pw:
    b = pw.chromium.launch()
    ctx = b.new_context(viewport={'width': 768, 'height': 1024}, is_mobile=True, has_touch=True, http_credentials={'username': 'web', 'password': 'pwd'})
    ctx.route(re.compile(r'.*(google-analytics|googletagmanager|doubleclick|facebook|/api/).*'), lambda r: r.abort())
    for slug, (path, cfg) in PAGES.items():
        for stav in ('pred', 'po'):
            p = ctx.new_page(); p.goto('https://datalayer.vitnovotny.cz' + path, wait_until='networkidle')
            p.add_style_tag(content='.cc{display:none!important}')
            if stav == 'po':
                p.add_script_tag(content=JS); p.evaluate('cfg => window.__redukce(cfg)', cfg)
            p.wait_for_timeout(400)
            w = p.evaluate("(() => { const a = document.querySelector('.hero-ctas .btn-cta, .lp-hero__ctas .btn-cta'); return a ? Math.round(a.getBoundingClientRect().width) : null })()")
            print(slug, stav, 'šířka CTA', w)
            p.screenshot(path=f'{OUT}/{slug}__{stav}_tablet_viewport.png')
            p.close()
    b.close()
