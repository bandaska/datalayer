#!/usr/bin/env python3
"""Datova hygiena pricing datasetu po 2. kole (§ 5.4 v reserse/10-doplneni-a-overeni-r2.md).

Pridava dva sloupce:
  status      = active | refuted | superseded | duplicate   (co smi do vypoctu)
  scope_class = measurement_only | bundled_ppc | infra_only | saas | salary_proxy | hourly_proxy | other

Spoustet ze slozky strategie/data/. Prepisuje pricing-dataset.csv na miste (po merge.sh).
"""
import csv, re, sys, unicodedata, collections

SRC = 'pricing-dataset.csv'

# --- 1. Rucne rozhodnute vyrazeni (verify-* reporty 2. kola) -----------------
REFUTED = {
    'P2-034': 'Softmedia sGTM: clanek prepsan 2026-06-10, zadna cena, Wayback bez snapshotu',
    'P2-035': 'Softmedia sGTM: dtto',
    'P2-036': 'Softmedia sGTM: dtto',
    'P4-009': 'argoberlin 190 EUR/mes: /google-analytics-beratung/ vraci 404, cena na webu neexistuje',
    'P4-031': 'Fresh Egg "from GBP 1750": na /analytics/ zadna cena, v sitemapu zadna cenova stranka',
}
SUPERSEDED = {
    'P2-003': 'nahrazen PV1-001 (overeno v raw HTML)',
    'P4-010': 'argoberlin 106 EUR/h nahrazen PV2-004 (95 EUR/h z doslovne polozky)',
}
for i in range(11, 18):
    SUPERSEDED['P5-%03d' % i] = 'neoverena citace konkurenta (yourgrowthpartner.io), enterprise 5-15k USD nedolozeno'

# Vendori, jejichz cena je po overeni neprukazna
UNVERIFIABLE_VENDORS = {
    'dataslayer': 'cenik zobrazuje u vsech tieru shodne 20 EUR - chyba zobrazeni, cena neoveritelna',
    'tagmate': 'domena servíruje cizi obsah, produkt neexistuje',
}
# Elevar legacy sada (prior to January 2023) - plati Core/Advanced/Premium/Elite
ELEVAR_LEGACY_PRICES = {'200', '450', '950'}

# --- 2. Klasifikace rozsahu --------------------------------------------------
def strip_accents(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s or '') if unicodedata.category(c) != 'Mn').lower()

PPC_RX = re.compile(r'\bppc\b|kampan|google ads sprava|sprava google ads|sprava kampani|performance marketing|'
                    r'\bseo\b|full[- ]service|media buying|sklik sprava|marketingov[ay] pausal|spravu reklam|'
                    r'sprava inzerce|rozsahu kanalu|marketingova agentura|zakladni spoluprace|'
                    r'ad management|paid (search|social|media)|advertising management|marketing retainer')
INFRA_RX = re.compile(r'sgtm|server[- ]side gtm|server-side merení|server-side mereni|dataplus|hosting|cloud run|'
                      r'kontejner|container|requests|infrastruktur|provoz serveru|stape|taggrs|addingwell|server container')
MEAS_RX = re.compile(r'mereni|analytik|analytic|analitik|analityk|\bga4\b|\bgtm\b|tag manager|tracking|'
                     r'\btag\b|monitoring|audit|bigquery|big query|dashboard|report|dataov|datov|data\b|'
                     r'measurement|insight|attribution|atribuc|konverz|conversion|meranie|datalayer|'
                     r'consent|cookie')
# Verejne zakazky a enterprise kontrakty: realne zaplacene, ale nesrovnatelne s ceskym e-shopem.
TENDER_RX = re.compile(r'federalni kontrakt|federal|g-cloud|gcloud|dodavatel (dept|gsa|sec|epa|cdc)|'
                       r'verejna zakazka|tender|usaspending')
# Nazory a treti ruka: "I charge X" z fora, cenove pruvodce, trzni reference - ne nabidka.
OPINION_RX = re.compile(r'^u/|reddit|anonymni|trzni reference|pricing guide|cenovy pruvodce|nezavisli konzultanti|'
                        r'konzultanti uk|prehled trhu|komora plus|blog\)')

# Sluzba se klasifikuje podle toho, CO JE (nazev + tier), ne podle toho, co se zminuje
# v poznamkach. "Kontinualna analyticka podpora" je sprava mereni i kdyz scope_notes zminuji sGTM.
CONT_RX = re.compile(r'sprava mereni|udrzba mereni|monitoring mereni|analyticka podpora|analyticky pausal|'
                     r'kontinualn|laufende betreuung|ongoing (management|support|analytics|data)|'
                     r'vedligeholdelse|mantenimiento|opieka|betreuung|maintenance|medicion|'
                     r'mesicni prace na webove analytice|mesacny pausal|analytics (support|retainer)')

def classify_scope(r):
    pm = (r['pricing_model'] or '').strip().lower()
    pt = (r['provider_type'] or '').strip().lower()
    prov = strip_accents(r['provider'])
    name = strip_accents((r['service_name_verbatim'] or '') + ' ' + (r['tier_name'] or ''))
    notes = strip_accents(r['scope_notes'] or '')
    if pm in ('saas', 'usage', 'free') or pt in ('saas_tool', 'saas'):
        return 'saas'
    if pm == 'salary_proxy' or pt in ('job_ad', 'pruzkum', 'platovy_portal', 'inzerat', 'salary_proxy'):
        return 'salary_proxy'
    if pm in ('hourly_rate', 'hourly'):
        return 'hourly_proxy'
    if TENDER_RX.search(prov + ' ' + name):
        return 'public_tender'
    if OPINION_RX.search(prov) or OPINION_RX.search(name):
        return 'stated_opinion'
    # Kontinualni sprava mereni ma prednost pred infra i PPC pravidlem.
    if CONT_RX.search(name):
        return 'measurement_only'
    if INFRA_RX.search(name):
        return 'infra_only'
    if PPC_RX.search(name):
        return 'bundled_ppc'
    if MEAS_RX.search(name):
        return 'measurement_only'
    # Nazev nic nerika - az ted sahni po poznamkach.
    if INFRA_RX.search(notes): return 'infra_only'
    if PPC_RX.search(notes): return 'bundled_ppc'
    if MEAS_RX.search(notes): return 'measurement_only'
    return 'other'

BQ_MAP = {'ne': 'no', 'no': 'no', 'ano': 'yes', 'yes': 'yes', 'ano (destinace)': 'yes',
          'ano (vlastni dwh snowflake)': 'yes', 'optional': 'optional', 'volitelne': 'optional',
          'castecne': 'optional', 'unknown': 'unknown', '-': 'unknown', 'neuvedeno': 'unknown', '': 'unknown'}

# --- 3. Nacteni a oznaceni ---------------------------------------------------
rows = list(csv.DictReader(open(SRC, encoding='utf-8')))
fields = list(rows[0].keys())
for extra in ('status', 'scope_class', 'status_reason'):
    if extra not in fields:
        fields.append(extra)

for r in rows:
    rid = r['id'].strip()
    prov = strip_accents(r['provider'])
    status, reason = 'active', ''
    if rid in REFUTED:
        status, reason = 'refuted', REFUTED[rid]
    elif rid in SUPERSEDED:
        status, reason = 'superseded', SUPERSEDED[rid]
    else:
        for v, why in UNVERIFIABLE_VENDORS.items():
            if v in prov:
                status, reason = 'refuted', why
                break
        if status == 'active' and 'elevar' in prov and (r['price_original'] or '').strip() in ELEVAR_LEGACY_PRICES:
            status, reason = 'superseded', 'Elevar legacy sada (prior to Jan 2023); plati Core/Advanced/Premium/Elite'
    r['status'], r['status_reason'] = status, reason
    r['scope_class'] = classify_scope(r)
    r['requires_bq'] = BQ_MAP.get(strip_accents(r['requires_bq']).strip(), strip_accents(r['requires_bq']).strip() or 'unknown')

# --- 4. Deduplikace ----------------------------------------------------------
# Skutecny duplikat = tentyz poskytovatel, tatáž cena, tentyz typ obdobi A shodna
# identita polozky (tier nebo nazev sluzby). Ruzne produkty se shodnou cenou
# (Signals Bar/Dance/Game, Elevar Analyst vs pLTV) duplikaty NEJSOU.
def num(x):
    m = re.search(r'-?\d+(?:\.\d+)?', str(x or '').replace(' ', '').replace('\u00a0', '').replace(',', '.'))
    return float(m.group()) if m else None

def canon_period(p):
    p = strip_accents(p)
    if p.startswith(('mesic', 'month', 'mo')): return 'M'
    if p.startswith(('hodin', 'hour', 'md', 'den', 'day')): return 'H'
    if p.startswith(('rok', 'year', 'annu')): return 'Y'
    if 'jednoraz' in p or 'one' in p or 'setup' in p: return 'O'
    return '?'

def ident(r):
    t = re.sub(r'[^a-z0-9]', '', strip_accents(r['tier_name']))
    n = re.sub(r'[^a-z0-9]', '', strip_accents(r['service_name_verbatim']))
    return t, n

def same_item(a, b):
    ta, na = ident(a); tb, nb = ident(b)
    if ta and tb and ta == tb: return True
    if na and nb and (na == nb or na[:22] == nb[:22] or na in nb or nb in na): return True
    return False

def base_provider(p):
    # "Amplio Data (Barcelona, prodavano jako...)" -> "amplio data"
    return re.sub(r'[^a-z0-9 ]', '', strip_accents(p).split('(')[0]).strip()

groups = collections.defaultdict(list)
for r in rows:
    if r['status'] != 'active': continue
    price = num(r['price_czk_month'])
    if not price: continue
    groups[(base_provider(r['provider']), round(price), canon_period(r['period']))].append(r)

# Tentyz poskytovatel + tentyz tier + ruzna cena = rozpeti zapsane dvakrat.
# Pravidlo § 5.4: ponechat DOLNI hranici, vyssi oznacit jako duplicate.
by_tier = collections.defaultdict(list)
for r in rows:
    if r['status'] != 'active': continue
    price = num(r['price_czk_month'])
    if not price or canon_period(r['period']) != 'M': continue
    t = re.sub(r'[^a-z0-9]', '', strip_accents(r['tier_name']))
    if not t: continue
    by_tier[(base_provider(r['provider']), t, (r['region'] or '').upper())].append((price, r))
range_dups = 0
for key, members in by_tier.items():
    if len(members) < 2: continue
    members.sort(key=lambda pr: pr[0])
    keep = members[0][1]
    for price, r in members[1:]:
        r['status'] = 'duplicate'
        r['status_reason'] = 'tyz tier zapsan dvakrat s jinou hodnotou rozpeti; ponechana dolni hranice ' + keep['id']
        range_dups += 1

dups = 0
for key, members in groups.items():
    if len(members) < 2: continue
    kept = []
    for r in members:
        match = next((k for k in kept if same_item(k, r)), None)
        if match:
            r['status'] = 'duplicate'
            r['status_reason'] = 'duplicitni zaznam, ponechan ' + match['id']
            dups += 1
        else:
            kept.append(r)

w = csv.DictWriter(open(SRC, 'w', encoding='utf-8', newline=''), fieldnames=fields)
w.writeheader()
w.writerows(rows)

c = collections.Counter(r['status'] for r in rows)
print('status:', dict(c), '| duplikaty:', dups, '+ rozpeti:', range_dups)
print('scope_class (jen active):', dict(collections.Counter(r['scope_class'] for r in rows if r['status'] == 'active')))
