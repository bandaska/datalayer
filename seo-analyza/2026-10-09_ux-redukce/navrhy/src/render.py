#!/usr/bin/env python3
"""Render před/po pro navrženou redukci: načte staging, aplikuje redukce.js, uloží PNG a metriky.
Usage: render.py OUT_DIR [slug ...]"""
import sys, os, json, re
from playwright.sync_api import sync_playwright

BASE = 'https://datalayer.vitnovotny.cz'
OUT = sys.argv[1]
ONLY = set(sys.argv[2:])
JS = open(os.path.join(os.path.dirname(__file__), 'redukce.js'), encoding='utf-8').read()

PAGES = {
    'index': ('/', {
        'keep': ['hero', 'symptomy', 'faq', 'kontakt'],
        'remove': ['#symptomy .lp-lead'],
        'text': {'.lp-cards--symptoms .lp-card:nth-child(4) .lp-card__link': 'GA4 a Google Tag Manager',
                 '.hero-sub': 'Navrhneme, nasadíme a ověříme měření pro e-shopy a B2B firmy – od datové vrstvy po BigQuery. S dokumentací a s daty, která vlastníte vy.'},
    }),
    'sluzby_implementace-ga4': ('/sluzby/implementace-ga4', {
        'keep': ['hero', 'symptomy', 'vystupy', 'faq', 'kontakt'],
        'text': {'.lp-hero__h1': 'Nastavení GA4 a Google Tag Manageru, které sedí s vašimi tržbami'},
    }),
    'sluzby_server-side-tracking': ('/sluzby/server-side-tracking', {
        'keep': ['hero', 'symptomy', 'vystupy', 'jak-to-funguje', 'rozhodnuti', 'faq', 'kontakt'],
    }),
    'sluzby_cookie-lista-consent-mode': ('/sluzby/cookie-lista-consent-mode', {
        'keep': ['hero', 'symptomy', 'vystupy', 'faq', 'kontakt'],
    }),
    'sluzby_mereni-konverzi': ('/sluzby/mereni-konverzi', {
        'keep': ['hero', 'symptomy', 'vystupy', 'faq', 'kontakt'],
    }),
    'sluzby_bigquery': ('/sluzby/bigquery', {
        'keep': ['hero', 'symptomy', 'vystupy', 'architektura', 'rozhodnuti', 'faq', 'kontakt'],
        'text': {'.lp-hero__h1': 'BigQuery a dashboardy pro marketing'},
    }),
    'sluzby_audit-mereni': ('/sluzby/audit-mereni', {
        'keep': ['hero', 'symptomy', 'vystupy', 'ukazka-reportu', 'faq', 'kontakt'],
        'text': {'#kontakt .dl-contact__lead': 'Nevíte, jestli audit potřebujete? Pošlete adresu webu a do zprávy napište „Rychlá kontrola“. Podíváme se na web zvenku a tři až pět nejvýraznějších nálezů vám pošleme e-mailem.'},
    }),
    'reseni_e-shopy': ('/reseni/e-shopy', {
        'keep': ['hero', 'symptomy', 'stack', 'platformy', 'faq', 'kontakt'],
    }),
    'reseni_b2b-a-lead-generation': ('/reseni/b2b-a-lead-generation', {
        'keep': ['hero', 'symptomy', 'vystupy', 'faq', 'kontakt'],
    }),
    'o-nas': ('/o-nas', {
        'keep': ['hero', 'pristup', 'principy', 'kontakt'],
    }),
    'kontakt': ('/kontakt', {
        'keep': ['hero', 'kontakt'],
        'remove': ['#kontakt h2', '#kontakt .dl-contact__lead'],
        'text': {'.article-perex': 'Na úvodní konzultaci projdeme vaše měření a řekneme, co opravit jako první. Konzultace je zdarma a nezávazná.'},
    }),
}

HIDE = '.cc{display:none!important}'
HIDE_BAR = '.mobile-bar{display:none!important}'
METRICS_JS = r"""() => {
  const m = document.querySelector('main');
  const vis = e => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const words = (m.innerText || '').split(/\s+/).filter(Boolean).length;
  const secs = [...m.querySelectorAll(':scope > section, :scope > header')].length;
  const links = [...m.querySelectorAll('a[href]')].filter(vis);
  const toForm = links.filter(a => a.getAttribute('href') === '#kontakt').length;
  const ctrls = [...m.querySelectorAll('a[href], button, summary, input:not([type=hidden]), textarea, select, [role=tab]')].filter(vis).length;
  const fields = [...m.querySelectorAll('#kontakt input:not([type=hidden]):not([name=website]), #kontakt textarea')].length;
  const h = document.documentElement.scrollHeight;
  const form = document.querySelector('#kontakt');
  const formY = form ? Math.round(form.getBoundingClientRect().top + scrollY) : null;
  const navItems = [...document.querySelectorAll('.site-menu a, .site-menu button')].length;
  const ftLinks = [...document.querySelectorAll('footer a, footer button')].length;
  return {h, words, secs, links: links.length, toForm, ctrls, fields, formY, navItems, ftLinks};
}"""


def shot(page, path, full=True):
    page.screenshot(path=path, full_page=full)


def main():
    os.makedirs(OUT, exist_ok=True)
    res = {}
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        for name, vp, mob in (('desktop', {'width': 1440, 'height': 900}, False), ('mobil', {'width': 390, 'height': 844}, True)):
            ctx = b.new_context(viewport=vp, is_mobile=mob, has_touch=mob, device_scale_factor=1,
                                http_credentials={'username': 'web', 'password': 'pwd'})
            # žádné odeslání formuláře, žádná měření
            ctx.route(re.compile(r'.*(google-analytics|googletagmanager|doubleclick|facebook|/api/).*'), lambda r: r.abort())
            for slug, (path, cfg) in PAGES.items():
                if ONLY and slug not in ONLY:
                    continue
                p = ctx.new_page()
                p.goto(BASE + path, wait_until='networkidle')
                p.add_style_tag(content=HIDE)
                p.wait_for_timeout(500)
                # PŘED
                p.evaluate('window.scrollTo(0,0)')
                shot(p, f'{OUT}/{slug}__pred_{name}_viewport.png', full=False)
                p.add_style_tag(content=HIDE_BAR)
                before = p.evaluate(METRICS_JS)
                shot(p, f'{OUT}/{slug}__pred_{name}.png')
                # PO
                p.evaluate('document.getElementById("redukce-hidebar")?.remove()')
                p.add_script_tag(content=JS)
                log = p.evaluate('cfg => window.__redukce(cfg)', cfg)
                p.wait_for_timeout(300)
                p.evaluate('window.scrollTo(0,0)')
                # viewport s lištou (lišta se ukáže až po odscrollování z hero)
                p.evaluate("document.querySelectorAll('style').forEach(s=>{if(s.textContent.includes('.mobile-bar{display:none'))s.remove()})")
                p.evaluate('window.dispatchEvent(new Event("scroll"))')
                p.wait_for_timeout(250)
                shot(p, f'{OUT}/{slug}__po_{name}_viewport.png', full=False)
                p.add_style_tag(content=HIDE_BAR)
                after = p.evaluate(METRICS_JS)
                shot(p, f'{OUT}/{slug}__po_{name}.png')
                res.setdefault(slug, {})[name] = {'pred': before, 'po': after, 'log': log}
                print(name, slug, before['h'], '->', after['h'], 'words', before['words'], '->', after['words'], flush=True)
                p.close()
            ctx.close()
        b.close()
    fn = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'data', 'render_metriky.json')
    old = json.load(open(fn)) if os.path.exists(fn) else {}
    for k, v in res.items():
        old.setdefault(k, {}).update(v)
    json.dump(old, open(fn, 'w'), ensure_ascii=False, indent=1)


if __name__ == '__main__':
    main()
