#!/usr/bin/env python3
"""Menu před/po: desktop (otevřené Služby a Řešení) a mobil (otevřený burger). Usage: render_menu.py OUT_DIR"""
import sys, os, re
from playwright.sync_api import sync_playwright
OUT = sys.argv[1]; os.makedirs(OUT, exist_ok=True)
JS = open(os.path.join(os.path.dirname(__file__), 'redukce.js'), encoding='utf-8').read()
URL = 'https://datalayer.vitnovotny.cz/sluzby/server-side-tracking'
with sync_playwright() as pw:
    b = pw.chromium.launch()
    for name, vp, mob in (('desktop', {'width': 1440, 'height': 760}, False), ('mobil', {'width': 390, 'height': 844}, True)):
        ctx = b.new_context(viewport=vp, is_mobile=mob, has_touch=mob, http_credentials={'username': 'web', 'password': 'pwd'})
        ctx.route(re.compile(r'.*(google-analytics|googletagmanager|doubleclick|facebook|/api/).*'), lambda r: r.abort())
        for stav in ('pred', 'po'):
            p = ctx.new_page(); p.goto(URL, wait_until='networkidle'); p.add_style_tag(content='.cc{display:none!important}')
            if stav == 'po':
                p.add_script_tag(content=JS); p.evaluate('() => window.__redukce({})')
            p.wait_for_timeout(300)
            if mob:
                p.click('.site-nav__toggle'); p.wait_for_timeout(400)
                btn = p.query_selector('.site-menu li.has-mega > button')
                if btn: btn.click(); p.wait_for_timeout(300)
                h = p.evaluate("Math.max(document.querySelector('.site-menu').scrollHeight + 80, 844)")
                p.set_viewport_size({'width': 390, 'height': min(int(h), 2200)}); p.wait_for_timeout(300)
                p.screenshot(path=f'{OUT}/menu__{stav}_{name}.png')
            else:
                p.click('.site-menu li.has-mega > button'); p.wait_for_timeout(400)
                p.screenshot(path=f'{OUT}/menu__{stav}_{name}.png', clip={'x': 0, 'y': 0, 'width': 1440, 'height': 760})
                n = p.evaluate("document.querySelectorAll('.site-menu a, .site-menu button').length")
                print(name, stav, 'ovládacích prvků v menu:', n)
            p.close()
        ctx.close()
    b.close()
