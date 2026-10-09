#!/usr/bin/env python3
"""Skládá srovnávací obrázky před/po z renderů. Usage: compose.py RENDER_DIR OUT_DIR"""
import sys, os, json
from PIL import Image, ImageDraw, ImageFont

R, O = sys.argv[1], sys.argv[2]
os.makedirs(O, exist_ok=True)
M = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'data', 'render_metriky.json')))
FD = '/usr/share/fonts/opentype/inter/'
F = lambda s, w='Regular': ImageFont.truetype(FD + f'Inter-{w}.otf', s)
INK, MUTED, RED, GREEN, BG = (11, 18, 32), (90, 100, 115), (194, 65, 12), (15, 138, 95), (255, 255, 255)


def nb(n):
    return f'{n:,}'.replace(',', ' ')


def header(draw, x, y, label, sub, color):
    draw.text((x, y), label, font=F(26, 'Bold'), fill=color)
    if sub:
        draw.text((x, y + 36), sub, font=F(17), fill=MUTED)


def save(im, name):
    im = im.convert('RGB')
    im.save(os.path.join(O, name), optimize=True)
    print(name, im.size)


def side(items, scale, name, title=None, gap=48, pad=32, border=True):
    """items: [(soubor, popisek, podpopisek, barva)] vedle sebe ve stejném měřítku"""
    ims = []
    for f, lab, sub, col in items:
        im = Image.open(os.path.join(R, f))
        if scale != 1:
            im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
        ims.append((im, lab, sub, col))
    top = pad + (52 if title else 0) + 70
    W = pad * 2 + sum(i[0].width for i in ims) + gap * (len(ims) - 1)
    H = top + max(i[0].height for i in ims) + pad
    c = Image.new('RGB', (W, H), BG)
    d = ImageDraw.Draw(c)
    if title:
        d.text((pad, pad), title, font=F(30, 'Bold'), fill=INK)
    x = pad
    for im, lab, sub, col in ims:
        header(d, x, top - 70, lab, sub, col)
        c.paste(im, (x, top))
        if border:
            d.rectangle([x - 1, top - 1, x + im.width, top + im.height], outline=(214, 220, 228))
        x += im.width + gap
    save(c, name)


def strips(rows, scale, seg, name, title=None, gap=14, pad=32):
    """rows: [(soubor, popisek, podpopisek, barva)] – každý řádek = dlouhá stránka rozřezaná do sloupců po `seg` px"""
    blocks = []
    for f, lab, sub, col in rows:
        im = Image.open(os.path.join(R, f))
        cols = [im.crop((0, y, im.width, min(y + seg, im.height))) for y in range(0, im.height, seg) if im.height - y > 60]
        cols = [c.resize((round(c.width * scale), round(c.height * scale)), Image.LANCZOS) for c in cols]
        blocks.append((cols, lab, sub, col))
    colw = blocks[0][0][0].width
    maxcols = max(len(b[0]) for b in blocks)
    W = pad * 2 + maxcols * colw + (maxcols - 1) * gap
    segh = round(seg * scale)
    H = pad + (52 if title else 0) + sum(70 + segh + 36 for _ in blocks) + pad
    c = Image.new('RGB', (W, H), BG)
    d = ImageDraw.Draw(c)
    y = pad
    if title:
        d.text((pad, y), title, font=F(30, 'Bold'), fill=INK); y += 52
    for cols, lab, sub, col in blocks:
        header(d, pad, y, lab, sub, col); y += 70
        x = pad
        for k in cols:
            c.paste(k, (x, y)); d.rectangle([x - 1, y - 1, x + k.width, y + k.height], outline=(214, 220, 228)); x += colw + gap
        y += segh + 36
    save(c, name)


def met(slug, dev, st):
    m = M[slug][dev][st]
    return m


def sub(slug, dev, st):
    m = met(slug, dev, st)
    return f"{nb(m['h'])} px · {nb(m['words'])} slov · {m['secs']} sekcí · {m['ctrls']} klikacích prvků"


PRED, PO = 'PŘED', 'PO'

# 1) Úvodní stránka – desktop, celá délka
side([('index__pred_desktop.png', PRED, sub('index', 'desktop', 'pred'), RED),
      ('index__po_desktop.png', PO, sub('index', 'desktop', 'po'), GREEN)], 0.36,
     '01_uvodni-stranka_desktop_pred-po.png', 'Úvodní stránka – desktop 1440 px')
# 2) Úvodní stránka – mobil, filmový pás
strips([('index__pred_mobil.png', PRED, sub('index', 'mobil', 'pred'), RED),
        ('index__po_mobil.png', PO, sub('index', 'mobil', 'po'), GREEN)], 0.5, 1700,
       '02_uvodni-stranka_mobil_pred-po.png', 'Úvodní stránka – mobil 390 px (stránka rozřezaná do sloupců po 1 700 px)')
# 3) Hero – mobil a tablet
side([('index__pred_mobil_viewport.png', PRED + ' – mobil', 'nadtitulek, 2 CTA, mikrotext', RED),
      ('index__po_mobil_viewport.png', PO + ' – mobil', 'H1, podtitul, 1 CTA, diagram', GREEN),
      ('index__pred_tablet_viewport.png', PRED + ' – tablet 768 px', 'CTA přes celou šířku (696 px)', RED),
      ('index__po_tablet_viewport.png', PO + ' – tablet 768 px', 'CTA podle obsahu (230 px)', GREEN)], 1,
     '03_hero_mobil-tablet_pred-po.png', 'Hero úvodní stránky – první obrazovka (SVG diagram zůstává)', gap=40)
# 4) Šest situací – bez konzolí
side([('detail__index__symptomy__pred_desktop.png', PRED, 'konzole s čísly, „Zobrazit další (3)“, poznámka', RED),
      ('detail__index__symptomy__po_desktop.png', PO, 'všech 6 karet hned, bez mockupů', GREEN)], 0.6,
     '04_uvodni-stranka_sest-situaci_pred-po.png', 'Úvodní stránka – blok „Šest situací“')
# 5) Kontakt – formulář
side([('detail__index__kontakt__pred_desktop.png', PRED, '5 polí + 7 čipů, 3 kroky, dlouhý právní text', RED),
      ('detail__index__kontakt__po_desktop.png', PO, '4 pole, jeden řádek právního textu', GREEN)], 0.6,
     '05_kontakt-formular_desktop_pred-po.png', 'Kontaktní blok a formulář – desktop')
side([('detail__index__kontakt__pred_mobil.png', PRED, f"{1388} px", RED),
      ('detail__index__kontakt__po_mobil.png', PO, f"{949} px", GREEN)], 1,
     '06_kontakt-formular_mobil_pred-po.png', 'Kontaktní blok a formulář – mobil')
# 7) LP server-side – desktop celá délka
side([('sluzby_server-side-tracking__pred_desktop.png', PRED, sub('sluzby_server-side-tracking', 'desktop', 'pred'), RED),
      ('sluzby_server-side-tracking__po_desktop.png', PO, sub('sluzby_server-side-tracking', 'desktop', 'po'), GREEN)], 0.33,
     '07_lp-server-side_desktop_pred-po.png', 'Vstupní stránka služby (server-side tracking) – desktop')
strips([('sluzby_server-side-tracking__pred_mobil.png', PRED, sub('sluzby_server-side-tracking', 'mobil', 'pred'), RED),
        ('sluzby_server-side-tracking__po_mobil.png', PO, sub('sluzby_server-side-tracking', 'mobil', 'po'), GREEN)], 0.42, 1800,
       '08_lp-server-side_mobil_pred-po.png', 'Vstupní stránka služby (server-side tracking) – mobil 390 px, sloupce po 1 800 px')
# 9) Hero LP
side([('detail__sluzby_bigquery__header-lp-hero__pred_desktop.png', PRED, 'nadtitulek, drobečky, 2 CTA („Ukázka datového modelu“), mikrotext, 3 body', RED),
      ('detail__sluzby_bigquery__header-lp-hero__po_desktop.png', PO, 'H1, podtitul, 1 CTA', GREEN)], 0.6,
     '09_lp-hero_bigquery_pred-po.png', 'Hero vstupní stránky (BigQuery)')
side([('detail__reseni_e-shopy__header-lp-hero__pred_mobil.png', PRED, '821 px', RED),
      ('detail__reseni_e-shopy__header-lp-hero__po_mobil.png', PO, '547 px', GREEN)], 1,
     '10_lp-hero_e-shopy_mobil_pred-po.png', 'Hero vstupní stránky (e-shopy) – mobil')
# 11) Rozhodnutí – bez tabulky a cen
side([('detail__sluzby_server-side-tracking__rozhodnuti__pred_desktop.png', PRED, 'ano/ne + tabulka hostingu + tři ceny', RED),
      ('detail__sluzby_server-side-tracking__rozhodnuti__po_desktop.png', PO, 'jen ano/ne s odkazy „nejdřív…“', GREEN)], 0.5,
     '11_lp-kdy-se-vyplati_pred-po.png', 'Blok „Kdy se server-side měření vyplatí“')
# 12) Menu
side([('menu__pred_desktop.png', PRED, '3 skupiny, 11 služeb s popisky, Řešení, Blog', RED),
      ('menu__po_desktop.png', PO, '6 služeb, E-shopy, B2B, O nás', GREEN)], 0.5,
     '12_menu_desktop_pred-po.png', 'Hlavní menu – desktop (otevřené Služby)')
side([('menu__pred_mobil.png', PRED, '21 položek', RED), ('menu__po_mobil.png', PO, '11 položek', GREEN)], 1,
     '13_menu_mobil_pred-po.png', 'Hlavní menu – mobil')
side([('detail__sluzby_server-side-tracking__footer-site-footer__pred_desktop.png', PRED, '23 odkazů', RED),
      ('detail__sluzby_server-side-tracking__footer-site-footer__po_desktop.png', PO, '15 odkazů', GREEN)], 0.5,
     '14_paticka_pred-po.png', 'Patička')
