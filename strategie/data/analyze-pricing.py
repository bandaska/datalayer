#!/usr/bin/env python3
"""Syntéza pricing datasetu: rozpětí CZK/měs po regionech, modelech a typech poskytovatelů.
Spouštět ze složky strategie/data/ (čte fragments/*-pricing.csv nebo pricing-dataset.csv)."""
import csv, glob, re, statistics as st, sys, os

def num(x):
    if x is None: return None
    s = str(x).replace(' ','').replace(' ','').replace(',','.')
    m = re.search(r'-?\d+(?:\.\d+)?', s)
    return float(m.group()) if m else None

def q(vals, p):
    vals = sorted(vals); 
    if not vals: return None
    k = (len(vals)-1)*p; f=int(k); c=min(f+1,len(vals)-1)
    return vals[f] + (vals[c]-vals[f])*(k-f)


PT = {'agentura':'analytics_agency','agency':'analytics_agency','agentura/saas':'analytics_agency','agentura/web':'performance_agency',
      'PPC agentura':'performance_agency','freelancer/dev':'freelancer','freelancer/agentura':'freelancer','saas':'saas_tool',
      'pruzkum':'job_ad','platovy_portal':'job_ad','inzerat':'job_ad','salary_proxy':'job_ad','školení':'other','blog':'other',
      'review':'other','case_study':'other','market_reference':'other'}
PM = {'retainer':'retainer_hours','hourly':'hourly_rate','package':'fixed_package','usage':'saas','free':'saas','one_off':'one_off','impact_example':'other'}
BQ = {'ne':'no','no':'no','ano':'yes','yes':'yes','ano (destinace)':'yes','ano (vlastní DWH Snowflake)':'yes','optional':'optional',
      'volitelně':'optional','částečně':'optional','unknown':'unknown','-':'unknown','neuvedeno':'unknown','':'unknown'}
def normalize(r):
    r['provider_type']=PT.get((r.get('provider_type') or '').strip(), (r.get('provider_type') or '').strip())
    r['pricing_model']=PM.get((r.get('pricing_model') or '').strip(), (r.get('pricing_model') or '').strip())
    r['requires_bq']=BQ.get((r.get('requires_bq') or '').strip(), (r.get('requires_bq') or '').strip())
    return r

def fmt(v): return f"{v:,.0f}".replace(',', ' ') if v is not None else '–'

def summarize(rows, key, title, minn=3):
    groups = {}
    for r in rows:
        v = num(r.get('price_czk_month'))
        if v is None or v <= 0: continue
        groups.setdefault(key(r), []).append(v)
    print(f"\n### {title}\n")
    print("| Skupina | n | min | Q1 | median | Q3 | max |")
    print("|---|---|---|---|---|---|---|")
    for g, vals in sorted(groups.items(), key=lambda kv: -len(kv[1])):
        if len(vals) < minn: continue
        print(f"| {g} | {len(vals)} | {fmt(min(vals))} | {fmt(q(vals,.25))} | {fmt(st.median(vals))} | {fmt(q(vals,.75))} | {fmt(max(vals))} |")

files = sys.argv[1:] or sorted(glob.glob('fragments/*-pricing.csv'))
rows = []
for f in files:
    with open(f, encoding='utf-8') as fh:
        for r in csv.DictReader(fh):
            r['_file'] = os.path.basename(f); rows.append(normalize(r))
print(f"Řádků celkem: {len(rows)}; s číselnou cenou CZK/měs: {sum(1 for r in rows if (num(r.get('price_czk_month')) or 0) > 0)}")
def scope_known(r): return 'unknown' not in (r.get('scope_notes') or '').lower()
print(f"Z toho scope=unknown: {sum(1 for r in rows if not scope_known(r))}")

summarize(rows, lambda r: r['region'], 'Podle regionu (vše)')
summarize(rows, lambda r: r['pricing_model'], 'Podle cenového modelu (vše)')
summarize(rows, lambda r: f"{r['region']} / {r['pricing_model']}", 'Region × model', minn=3)
summarize(rows, lambda r: f"{r['region']} / {r['provider_type']}", 'Region × typ poskytovatele', minn=3)
# Kontinuální správa lidmi: retainer/fixed/tiered od agentur a freelancerů, bez SaaS a proxy
def is_service(r): return r['pricing_model'] in ('retainer_hours','fixed_package','tiered') and r['provider_type'] in ('analytics_agency','performance_agency','freelancer')
svc = [r for r in rows if is_service(r)]
summarize(svc, lambda r: r['region'], 'Jen lidská správa (retainer/fixed/tiered od agentur a freelancerů) podle regionu', minn=2)
summarize(svc, lambda r: f"{r['region']} / BQ={r['requires_bq']}", 'Lidská správa: region × requires_bq', minn=2)
summarize([r for r in rows if r['pricing_model']=='saas'], lambda r: r['region'], 'SaaS nástroje podle regionu', minn=2)
summarize([r for r in rows if r['pricing_model']=='hourly_rate'], lambda r: r['region'], 'Hodinové sazby ×10 h (proxy) podle regionu', minn=2)
summarize([r for r in rows if r['pricing_model']=='salary_proxy'], lambda r: r['region'], 'In-house mzdové proxy podle regionu', minn=1)
