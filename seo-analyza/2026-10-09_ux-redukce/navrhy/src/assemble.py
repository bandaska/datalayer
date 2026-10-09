#!/usr/bin/env python3
"""Sestaví ux-redukce.md ze šablony a dat."""
import json, re, os, statistics as st
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
t = open('navrhy/src/ux-redukce.template.md', encoding='utf-8').read()
fixes = [
 ("pás „Pokračujte“ na 18.", "pás „Pokračujte“ na 17."),
 ("Doslovné opakování je nízké (2–8 % textu stránky)", "Doslovné opakování je nízké (1–8 % textu stránky)"),
 ("| otázka „Pracujete i s velkými firmami?“ zůstává ve FAQ úvodu |", "| otázka „Pracujete i s menšími e-shopy, nebo jen s velkými firmami?“ zůstává ve FAQ úvodu |"),
 ("(v `redukce.js` je to osm řádků s posluchačem scrollu; v produkci lépe `IntersectionObserver`)", "(v `redukce.js` je to pár řádků s posluchačem scrollu; v produkci lépe `IntersectionObserver`)"),
 ("| 3 | Co uděláme a co dostanete | všude | 6 karet bez názvů souborů |", "| 3 | Co uděláme a co dostanete | všude | 5–8 karet bez názvů souborů |"),
 ("| **zůstává**, 4 otázky | otázku o GDPR u server-side přesunout na stránku server-side |", "| **zůstává**, 4 otázky | otázka o GDPR u server-side pryč – stránka server-side ji má |"),
]
for a, b in fixes:
    assert a in t, a[:60]
    t = t.replace(a, b)
tp = json.load(open('data/tematicky_prekryv.json'))
for k, v in tp.items(): t = t.replace('{{T:' + k + '}}', str(sum(n for _, n in v)))
pp = json.load(open('data/prvky_pred_po.json'))['celkem']
for k, v in pp.items(): t = t.replace('{{P:' + k + '}}', str(v[1]))
t = t.replace('{{SEKCE_TABULKY}}', open('data/sekce_tabulky.md', encoding='utf-8').read())
t = t.replace('{{METRIKY}}', open('data/metriky_tabulka.md', encoding='utf-8').read())
m = json.load(open('data/render_metriky.json'))
lps = [s for s in m if s.startswith(('sluzby', 'reseni'))]
nb = lambda n: f'{n:,}'.replace(',', ' ')
t = t.replace('{{FY_PRED}}', nb(round(st.mean(m[s]['mobil']['pred']['formY'] for s in lps)))).replace('{{FY_PO}}', nb(round(st.mean(m[s]['mobil']['po']['formY'] for s in lps))))
left = re.findall(r'\{\{[^}]+\}\}', t); print('unresolved', left)
t = re.sub(r'\]\((\d\d_[^)]+\.png)\)', r'](navrhy/\1)', t)
open('ux-redukce.md', 'w', encoding='utf-8').write(t)
imgs = re.findall(r'\]\((navrhy/[^)]+)\)', t)
print(len(imgs), 'missing img', [i for i in imgs if not os.path.exists(i)], len(t.split()), 'words')
