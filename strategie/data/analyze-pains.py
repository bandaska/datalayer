#!/usr/bin/env python3
"""Rozložení pain-logu: what_broke × region × segment × has_bq, doba do odhalení. Spouštět ze strategie/data/."""
import csv, glob, collections, sys, re
SEG_RULES=[('agency',r'agentur|agency|freelancer|auditor|klienti'),('eshop_large',r'enterprise|velk|large|GA360|18 domén|marketplace'),
 ('eshop_mid',r'střední|mid|4 země|290k|£12|více obchod|více značek'),('b2b_leadgen',r'b2b|lead-?gen|finanční|služby'),
 ('saas_marketplace',r'saas'),('eshop_small',r'e-?shop|shopify|shoptet|upgates|SMB|malý|squarespace|booking|web')]
def seg(s):
    s=(s or '').strip()
    if s in ('eshop_small','eshop_mid','eshop_large','b2b_leadgen','saas_marketplace','agency','unknown'): return s
    for k,rx in SEG_RULES:
        if re.search(rx,s,re.I): return k
    return 'unknown'
BQ={'ne':'no','no':'no','ano':'yes','yes':'yes','volitelně':'optional','optional':'optional',
    'částečně':'optional','castecne':'optional','volitelne':'optional','neuvedeno':'unknown','unknown':'unknown','':'unknown'}
files=sys.argv[1:] or sorted(glob.glob('fragments/*-pain.csv'))
rows=[]
for f in files:
    for r in csv.DictReader(open(f,encoding='utf-8')):
        r['segment']=seg(r['segment']); r['has_bq']=BQ.get((r['has_bq'] or '').strip(),'unknown'); rows.append(r)
print(f"Výpovědí: {len(rows)}")
def table(title,key):
    c=collections.Counter(key(r) for r in rows)
    print(f"\n### {title}\n\n| Hodnota | n | % |\n|---|---|---|")
    for k,v in c.most_common(): print(f"| {k} | {v} | {100*v/len(rows):.0f} % |")
table('what_broke',lambda r:r['what_broke'])
table('region',lambda r:r['region'])
table('segment (normalizováno)',lambda r:r['segment'])
table('has_bq',lambda r:r['has_bq'])
# cross: what_broke × has_bq
c=collections.Counter((r['what_broke'],r['has_bq']) for r in rows)
wb=collections.Counter(r['what_broke'] for r in rows)
print("\n### what_broke × has_bq\n\n| what_broke | n | no | yes | optional | unknown |\n|---|---|---|---|---|---|")
for k,n in wb.most_common(): print(f"| {k} | {n} | {c[(k,'no')]} | {c[(k,'yes')]} | {c[(k,'optional')]} | {c[(k,'unknown')]} |")
c=collections.Counter((r['segment'],r['what_broke']) for r in rows)
print("\n### Top 3 what_broke per segment\n")
for s,_ in collections.Counter(r['segment'] for r in rows).most_common():
    top=[f"{k[1]} ({v})" for k,v in c.most_common() if k[0]==s][:3]; print(f"- **{s}**: "+', '.join(top))
print("\n### Doba do odhalení (vyplněno)\n")
tt=[(r['time_to_notice'],r['what_broke']) for r in rows if r['time_to_notice'] and r['time_to_notice'].strip() not in ('','unknown','neuvedeno','-')]
print(f"vyplněno u {len(tt)} z {len(rows)}")
for t,w in tt[:60]: print(f"- {w}: {t}")
