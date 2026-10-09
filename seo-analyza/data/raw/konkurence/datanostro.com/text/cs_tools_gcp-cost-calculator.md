# URL: https://datanostro.com/cs/tools/gcp-cost-calculator/

[Domů](/cs/)
/
[Migrace z Google Cloud](/cs/migrace-z-google-cloud/)
/
Cost kalkulačka

# Kolik vás reálně stojí sGTM na Google Cloudu?

Posuvníkem nastavte svůj měsíční objem requestů. Spočítáme cenu Cloud Run vCPU + RAM + požadavků + egress + Cloud Logging + statické IP + ops overhead. Všechny ceny jsou veřejné Google Cloud list-prices k 2026-05 (USD → CZK přes 23,50 Kč). Výpočet je live — bez reloadu stránky.

Měsíční objem requestů (v milionech):
**5,0 M**


100k5M10M25M50M

**Google Cloud Run**

2 200 Kč

≈ $95 USD/měsíc

|  |  |
| --- | --- |
| vCPU | $62,21 |
| RAM | $3,24 |
| Per-request | $2,0 |
| Egress | $0,73 |
| Logging | $0,0 |
| Static IP | $1,46 |
| Ops overhead | $25,0 |

**DataNostro PRO**

1 690 Kč

Střední e-shop / multi-platforma

* ✓ Limit 5 000 000 req/měs
* ✓ Egress neúčtujeme
* ✓ SSL + doména + auto-updates
* ✓ ISDOC fakturace
* ✓ EU servery (Německo)
* ✓ Sklik + Heureka native

[Vybrat plán →](/cs/pricing/#pro)
[Kontaktujte sales →](/cs/contact/)

Co reálně ušetříte

Při vašem objemu ušetříte orientačně
**2 200 Kč
− 1 690 Kč
= 2 200 Kč**
každý měsíc. Reálná úspora bývá vyšší — náš odhad GCP je konzervativní (bez committed-use discount premiums, bez monitoring + alerting fees).

**Drobné písmo:**
GCP pricing model: 1 vCPU + 512 MB RAM s min-instances=1, on-demand pricing bez committed-use discount. Egress kalkulujeme jako ~2 KiB per request (request + response). Cloud Logging jako ~500 B per request. USD→CZK přes 23,50. Ops overhead 25 USD/měs = ~1 hodina měsíčně na update Node verze + IAM + monitoring. Realisticky bývá víc.

[← Zpět na detail migrace z Google Cloud](/cs/migrace-z-google-cloud/)