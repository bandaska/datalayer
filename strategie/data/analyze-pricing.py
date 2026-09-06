#!/usr/bin/env python3
"""Souhrnne tabulky nad pricing-dataset.csv PO datove hygiene 2. kola.

Zasady (§ 5.4 v reserse/10-doplneni-a-overeni-r2.md):
  - pocita se JEN status=active (vyrazeny refuted/superseded/duplicate),
  - mediany trhu se pocitaji JEN pro scope_class=measurement_only a period=mesic,
  - hourly_proxy, salary_proxy, saas, bundled_ppc, infra_only, public_tender a stated_opinion
    se vykazuji ZVLAST a nikdy se nemichaji do trzniho medianu,
  - "po subjektech" = jeden poskytovatel jedna hodnota (nejnizsi verejny tier),
    protoze jinak jeden dodavatel s peti tiery prehlusi pet dodavatelu s jednim.

Spoustet ze slozky strategie/data/ po merge.sh a clean-dataset.py.
"""
import csv, re, statistics as st, sys, unicodedata, collections

def sa(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s or '') if unicodedata.category(c) != 'Mn').lower()

def num(x):
    m = re.search(r'-?\d+(?:\.\d+)?', str(x or '').replace(' ', '').replace(' ', '').replace(',', '.'))
    return float(m.group()) if m else None

def monthly(r):
    return sa(r['period']).startswith(('mesic', 'month', 'mo'))

def q(vals, p):
    vals = sorted(vals)
    if not vals: return None
    k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)

def fmt(v):
    return f"{v:,.0f}".replace(',', ' ') if v is not None else '–'

def base_provider(p):
    return re.sub(r'[^a-z0-9 ]', '', sa(p).split('(')[0]).strip()

def table(rows, key, title, minn=2, per_subject=False):
    groups = collections.defaultdict(list)
    for r in rows:
        v = num(r['price_czk_month'])
        if v is None or v <= 0: continue
        groups[key(r)].append((v, base_provider(r['provider'])))
    print(f"\n### {title}\n")
    print("| Skupina | n | min | Q1 | median | Q3 | max |")
    print("|---|---|---|---|---|---|---|")
    for g, items in sorted(groups.items(), key=lambda kv: -len(kv[1])):
        if per_subject:
            low = {}
            for v, prov in items:
                if prov not in low or v < low[prov]: low[prov] = v
            vals = sorted(low.values())
        else:
            vals = sorted(v for v, _ in items)
        if len(vals) < minn: continue
        print(f"| {g} | {len(vals)} | {fmt(min(vals))} | {fmt(q(vals,.25))} | {fmt(st.median(vals))} | {fmt(q(vals,.75))} | {fmt(max(vals))} |")

src = sys.argv[1] if len(sys.argv) > 1 else 'pricing-dataset.csv'
allrows = list(csv.DictReader(open(src, encoding='utf-8')))
active = [r for r in allrows if r.get('status', 'active') == 'active']
excluded = collections.Counter(r.get('status') for r in allrows if r.get('status') != 'active')
print(f"Radku celkem: {len(allrows)} | active: {len(active)} | vyrazeno: {dict(excluded)}")
byclass = collections.Counter(r['scope_class'] for r in active)
print(f"scope_class (active): {dict(byclass)}")

meas = [r for r in active if r['scope_class'] == 'measurement_only' and monthly(r)]
print(f"\n**Trzni zaklad = measurement_only + mesicni + active: {len(meas)} radku**")

paid = [r for r in meas if r.get('evidence_type') == 'paid']
lst = [r for r in meas if r.get('evidence_type') == 'list_price']
print(f"z toho REALNE ZAPLACENYCH: {len(paid)} | cenikovych: {len(lst)} | odhadu a nazoru: {len(meas)-len(paid)-len(lst)}")

table(meas, lambda r: r['region'].upper(), 'A. Mesicni sprava mereni podle regionu (vsechny tiery, vsechny typy dukazu)')
table(paid, lambda r: r['region'].upper() + ' / ' + (r.get('buyer_sector') or '?'), 'A1. REALNE ZAPLACENE ceny (registr smluv a verejne zakazky)', minn=1)
print()
for r in sorted(paid, key=lambda r: (r['region'], num(r['price_czk_month']) or 0)):
    v = num(r['price_czk_month'])
    if v: print(f"  {r['region']} {fmt(v):>8} Kc | {r['provider'][:34]:34} | {r['service_name_verbatim'][:46]:46} | BQ={r['requires_bq']}")
table(lst, lambda r: r['region'].upper(), 'A2. CENIKOVE ceny (verejne ceniky dodavatelu)')
table(meas, lambda r: r['region'].upper(), 'B. Totez PO SUBJEKTECH (1 dodavatel = jeho nejnizsi verejny tier)', per_subject=True)
table(meas, lambda r: ('EU+UK' if r['region'].upper() in ('EU', 'UK') else r['region'].upper()) + ' / BQ=' + (r['requires_bq'] or 'unknown'),
      'C. Podle BigQuery (jen mereni, mesicni)')

for cls, title in [('adjacent_industry', 'D0. Sousedni CZ obory - kotvy ochoty platit za SLA (IT podpora, hosting, sprava webu, ucetnictvi)'),
                   ('saas', 'D. SaaS nastroje (mesicni)'), ('hourly_proxy', 'E. Hodinove sazby x10 h - PROXY, nemichat do trzniho medianu'),
                   ('salary_proxy', 'F. Mzdove proxy (in-house kotva)'), ('bundled_ppc', 'G. PPC/full-service pausal s merenim uvnitr'),
                   ('infra_only', 'H. sGTM hosting a infrastruktura'), ('public_tender', 'I. Verejne zakazky a enterprise kontrakty - NESROVNATELNE s CZ e-shopem'),
                   ('stated_opinion', 'J. Nazory z fór a cenove pruvodce - nabidkou nejsou')]:
    sub = [r for r in active if r['scope_class'] == cls and (monthly(r) or cls in ('hourly_proxy', 'salary_proxy'))]
    if sub: table(sub, lambda r: r['region'].upper(), title)

print("\n### K. Vsechny mesicni body mereni v EU+UK, serazene (zaklad pro pasma)\n")
eu = sorted(((num(r['price_czk_month']), r['provider'], r['tier_name'], r['requires_bq']) for r in meas
             if r['region'].upper() in ('EU', 'UK') and num(r['price_czk_month'])))
for v, p, t, b in eu:
    print(f"- {fmt(v):>8} Kc | {p[:42]:42} | {t[:24]:24} | BQ={b}")
