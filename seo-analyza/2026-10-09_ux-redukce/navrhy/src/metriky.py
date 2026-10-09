#!/usr/bin/env python3
"""Tabulka metrik před/po do data/metriky_tabulka.md."""
import json, os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
m = json.load(open('data/render_metriky.json'))
nb = lambda n: f'{n:,}'.replace(',', ' ')
pct = lambda a, b: f"−{round(100 * (1 - b / a))} %"
names = {'index': '/', 'sluzby_implementace-ga4': '/sluzby/implementace-ga4', 'sluzby_server-side-tracking': '/sluzby/server-side-tracking',
         'sluzby_cookie-lista-consent-mode': '/sluzby/cookie-lista-consent-mode', 'sluzby_mereni-konverzi': '/sluzby/mereni-konverzi',
         'sluzby_bigquery': '/sluzby/bigquery', 'sluzby_audit-mereni': '/sluzby/audit-mereni', 'reseni_e-shopy': '/reseni/e-shopy',
         'reseni_b2b-a-lead-generation': '/reseni/b2b-a-lead-generation', 'o-nas': '/o-nas', 'kontakt': '/kontakt'}
rows = ['| Stránka | Délka desktop (px) | Délka mobil (px) | Formulář na mobilu začíná (px) | Slov | Sekcí | Klikacích prvků |', '|---|---|---|---|---|---|---|']
T = {k: [0, 0] for k in ('hd', 'hm', 'w', 'c')}
for s, u in names.items():
    d, mo = m[s]['desktop'], m[s]['mobil']
    rows.append(f"| `{u}` | {nb(d['pred']['h'])} → {nb(d['po']['h'])} ({pct(d['pred']['h'], d['po']['h'])}) | {nb(mo['pred']['h'])} → {nb(mo['po']['h'])} ({pct(mo['pred']['h'], mo['po']['h'])}) | {nb(mo['pred']['formY'])} → {nb(mo['po']['formY'])} | {nb(d['pred']['words'])} → {nb(d['po']['words'])} | {d['pred']['secs']} → {d['po']['secs']} | {d['pred']['ctrls']} → {d['po']['ctrls']} |")
    for k, src, key in (('hd', d, 'h'), ('hm', mo, 'h'), ('w', d, 'words'), ('c', d, 'ctrls')):
        T[k][0] += src['pred'][key]; T[k][1] += src['po'][key]
rows.append(f"| **Celkem 11 stránek** | {nb(T['hd'][0])} → {nb(T['hd'][1])} ({pct(*T['hd'])}) | {nb(T['hm'][0])} → {nb(T['hm'][1])} ({pct(*T['hm'])}) | | {nb(T['w'][0])} → {nb(T['w'][1])} ({pct(*T['w'])}) | | {T['c'][0]} → {T['c'][1]} ({pct(*T['c'])}) |")
open('data/metriky_tabulka.md', 'w', encoding='utf-8').write('\n'.join(rows))
print(rows[-1])
