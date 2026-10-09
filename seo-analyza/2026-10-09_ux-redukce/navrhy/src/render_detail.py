#!/usr/bin/env python3
"""Výřezy bloků před/po (element screenshot). Usage: render_detail.py OUT_DIR"""
import sys, os, re, importlib.util
from playwright.sync_api import sync_playwright
OUT = sys.argv[1]
SRC = os.path.dirname(os.path.abspath(__file__))
JS = open(os.path.join(SRC, 'redukce.js'), encoding='utf-8').read()
spec = importlib.util.spec_from_file_location('r', os.path.join(SRC, 'render.py')); r = importlib.util.module_from_spec(spec)
sys.argv = [sys.argv[0], OUT]; spec.loader.exec_module(r)
JOBS = [  # (slug, selektor, zařízení)
    ('index', '#symptomy', 'desktop'), ('index', '#kontakt', 'desktop'), ('index', '#kontakt', 'mobil'),
    ('sluzby_bigquery', 'header.lp-hero', 'desktop'), ('sluzby_server-side-tracking', 'header.lp-hero', 'desktop'),
    ('sluzby_server-side-tracking', '#rozhodnuti', 'desktop'), ('sluzby_server-side-tracking', '#faq', 'desktop'),
    ('sluzby_server-side-tracking', '#symptomy', 'mobil'), ('reseni_e-shopy', 'header.lp-hero', 'mobil'),
    ('sluzby_server-side-tracking', 'footer.site-footer', 'desktop'),
]
VP = {'desktop': ({'width': 1440, 'height': 900}, False), 'mobil': ({'width': 390, 'height': 844}, True)}
with sync_playwright() as pw:
    b = pw.chromium.launch()
    for dev, (vp, mob) in VP.items():
        ctx = b.new_context(viewport=vp, is_mobile=mob, has_touch=mob, http_credentials={'username': 'web', 'password': 'pwd'})
        ctx.route(re.compile(r'.*(google-analytics|googletagmanager|doubleclick|facebook|/api/).*'), lambda x: x.abort())
        for slug, sel, d in JOBS:
            if d != dev: continue
            path, cfg = r.PAGES[slug]
            for stav in ('pred', 'po'):
                p = ctx.new_page(); p.goto(r.BASE + path, wait_until='networkidle')
                p.add_style_tag(content='.cc{display:none!important}.mobile-bar{display:none!important}.site-nav{position:static!important}')
                if stav == 'po':
                    p.add_script_tag(content=JS); p.evaluate('cfg => window.__redukce(cfg)', cfg)
                p.wait_for_timeout(400)
                el = p.locator(sel).first
                tag = re.sub(r'[^a-z0-9]+', '-', sel.lower()).strip('-')
                fn = f'{OUT}/detail__{slug}__{tag}__{stav}_{dev}.png'
                el.screenshot(path=fn)
                print(fn.split('/')[-1], el.bounding_box()['height'])
                p.close()
        ctx.close()
    b.close()
