# URL: https://datanostro.com/cs/blog/migrace/stape-addingwell-google-cloud-vs-datanostro-2026/

[BLOG](/cs/blog/)
/
[MIGRACE](/cs/blog/migrace/)

# Stape vs Addingwell vs Google Cloud vs DataNostro: jak vybrat sGTM hosting v 2026

Čtyři nejčastější volby pro server-side GTM hosting porovnané podle ceny, EU residency, CZ-market integrací a podpory. Tabulka + když-tak doporučení + odkazy na kalkulačky a migrační runbooky.

T

Tým DataNostro

17. 5. 2026 · 11 min · Středně pokročilý

Server-side GTM hosting je v 2026 commodity — kontejner běží stejně všude. Diferenciátor je co je kolem: kde sídlí servery, v jaké měně fakturují, jakou podporu má český e-shop, a jestli tlumočí Sklik a Heureka. Tady je čestné srovnání čtyř nejčastějších voleb.

## TL;DR (když nemáte čas číst celé)

* **Mezinárodní e-commerce, nepotřebujete CZ specifika:** Addingwell (EU, FR) nebo Stape (global) — obě fungují, vybírejte podle ceny a podpory v jazyce, který umíte.
* **Self-managed, máte DevOps tým, chcete kontrolu:** Google Cloud Run — má smysl, ale počítejte s reálnými ~2 200–5 500 Kč/měs. [Spočítejte si v kalkulačce](/cs/tools/gcp-cost-calculator/).
* **CZ/SK e-shop, fakturujete v CZK, potřebujete Sklik + Heureka:** DataNostro — pro tohle vznikli, ostatní to nemají native.

## Co všechny čtyři umí stejně

Nemá smysl porovnávat featury, které všichni mají. Standard 2026 zahrnuje:

* Hosting Google sGTM kontejneru s vlastní subdoménou (CNAME)
* Auto SSL přes Let's Encrypt
* GA4 server-side, Meta CAPI, Google Ads Conversions, TikTok Events
* Custom Loader (anti-adblock pro web kontejner)
* Cookie Keeper / ITP recovery (first-party cookies přes Set-Cookie header)
* Container Config Base64 export/import — migrace mezi providers je triviální
* EU data residency volba

Pokud někdo tvrdí, že tyhle základy dělá „lépe", je to marketing — sGTM kontejner je Google open-source projekt a všichni provideří hostují tu samou věc.

## Cena: skutečné měsíční náklady pro typický CZ e-shop

Modelový scénář: 1 mil. server-side requestů/měs, 1 sGTM kontejner, 18 měsíční retencí logů, EU servery, single-region.

| Provider | List price | Po add-onech | Měna fakt. | Pozn. |
| --- | --- | --- | --- | --- |
| Stape PRO | ~50 USD (~1 150 Kč) | ~50 USD | USD | Add-ons (Cookie Keeper, Click ID Restorer) jsou zahrnuté |
| Addingwell Standard | ~40 EUR (~990 Kč) | ~40 EUR | EUR | EU servery (FR), ekvivalentní featury |
| Google Cloud Run | vCPU + RAM + egress | ~90–230 USD (~2 200–5 500 Kč) | USD | Self-managed, počítejte s ~10 h/měs DevOps čas |
| DataNostro PRO | 990 Kč | 990 Kč | CZK / EUR | ISDOC pro účetní, Sklik + Heureka native, CZ podpora |

Google Cloud Run je 2–5× dražší než managed providers, protože platíte za každou vCPU sekundu + egress. Pokud máte 1 mil. requestů/měs a každý request zabere ~200 ms vCPU času, jste na ~$50 jen za výpočet, k tomu egress (každý request je 5–10 KB výstupní = ~5–10 GB/měs = ~$0.50–$1), Cloud Logging (~$10–20), monitoring, IAM management. Bottom line: **Cloud Run má smysl jen pokud chcete plnou kontrolu nebo už používáte GCP pro něco jiného**. [Detailní rozbor →](/cs/migrace-z-google-cloud/)

## EU residency: kde reálně sedí data

| Provider | Default region | EU jen? | Customer DPA |
| --- | --- | --- | --- |
| Stape | US (volitelné EU) | Ne, multi-region | Email request |
| Addingwell | FR (Paris/OVH) | Ano | Email request |
| Google Cloud Run | Konfigurovatelné | Pokud nastavíte | Standard GCP DPA |
| DataNostro | DE (Hetzner Falkenstein) | Ano, single-region EU | Self-service PDF download v dashboardu |

Pokud máte tendry s veřejnou správou nebo bankami, DPA (Data Processing Agreement) podle GDPR Art. 28 je často smluvní podmínka — a čekání 3 dny na email od support u Stape/Addingwell může zabít rychlou poptávku.

## CZ-specific integrace: kde to teprve začíná

Tohle je oblast, ve které se globální providers a DataNostro liší nejvíc.

### Sklik konverze

Žádný globální provider nemá Sklik šablonu — všichni vyžadují, abyste si Sklik konverze nastavili manuálně přes `Custom HTTP request` tag. Funkční, ale ladění chyby je peklo (žádné error messages v dashboardu, jen v Sklik admin debugger).

DataNostro má Sklik jako native platformu — vložíte retargeting ID, my pošleme S2S request přesně podle [Sklik server-side API specifikace](/cs/blog/cz-market/sklik-konverze-server-side-gtm/), s deduplikací přes transaction\_id. Plus Sklik debugger integrace v dashboardu.

### Heureka Ověřeno zákazníky + XML feed

Heureka pixel běží jako iframe a 25–35 % CZ návštěvníků ho má v ad-blockeru. Server-side je jediná cesta jak dostat conversion event pro recenze. [Náš návod](/cs/blog/cz-market/heureka-overeno-zakazniky-server-side/) ukazuje, jak nastavit Ověřeno zákazníky přes server-side.

Globální providers tuhle integraci nemají vůbec. DataNostro má Heureka conversions + XML feed proxy pro POAS data feed (real-time price/stock sync z e-shopu do Heureka).

### Fakturace v CZK a ISDOC

Účetní pravidelně řeší stejnou bolest: dostali fakturu v USD/EUR, musí ji převést do CZK k datu uskutečnění zdanitelného plnění, a doložit kurz ČNB. ISDOC formát (XML schema vyhláška MF) je v ČR standardem pro elektronické faktury — některé fakturační systémy (FlexiBee, Pohoda E1) ho importují automaticky.

Stape, Addingwell ani GCP ISDOC neumí. DataNostro generuje ISDOC při každém vystavení faktury, k tomu PDF s CZK + EUR ekvivalentem a kurzem ČNB.

## Když nepotřebujete CZ specifika

Buďme upřímní — pokud děláte global e-commerce, fakturujete v EUR/USD, váš účetní rozumí cizoměnové faktury a Sklik s Heureka nepoužíváte, **Addingwell je lepší volba** než DataNostro. EU servery (FR), solidní featury, integrovaní s mezinárodním ekosystémem (Awin, Klaviyo, atd. v default seznamu).

Stape volí ti, kdo chtějí global hosting (US/EU regions), širokou katalog tag templates a snášejí USD fakturace. Stape má customer base 5×+ větší než Addingwell, takže jejich shablonová podpora je nejširší.

## Když Google Cloud Run dává smysl

Pokud platíte jako organizace už za GCP infrastrukturu (BigQuery, Cloud SQL, …), máte interní DevOps tým, který má kapacitu na ~10 h měsíčně údržby (security updates, IAM rotation, region failover testing), a chcete plnou audit trail přes Cloud Logging — má smysl. [Co reálně potřebujete vědět před spuštěním](/cs/migrace-z-google-cloud/).

## Kdy DataNostro

Pro CZ/SK e-shop, který fakturuje v CZK, dělá Sklik + Heureka reklamu, používá český fakturační software (Fakturoid, FlexiBee, Pohoda) a chce komunikovat se support v češtině v EU pracovních hodinách. Pro takové prostředí jsme stavěli — globální providers tu mají zaslouženě silnou marketingovou přítomnost, ale CZ-specifické featury teprve dohánějí.

## Migrace mezi nimi — bez výpadku

Container Config Base64 je univerzální Google formát. Migrace mezi providers je technicky triviální — export → import → DNS cutover. Časová bariéra je obvykle TTL DNS (24–48 h předem snížit na 300 s) a smoke testing po cutover.

* [Migrace ze Stape](/cs/migrace-ze-stape/) — 15 % off na 3 měsíce s kupónem STAPE-MIGRATION-15
* [Migrace z Addingwell](/cs/migrace-z-addingwell/) — 15 % off s ADDINGWELL-MIGRATION-15
* [Migrace z Google Cloud Run](/cs/migrace-z-google-cloud/) — 20 % off s GCP-MIGRATION-20

Pokud chcete migraci pod naším dohledem, [DataNostro Care](/cs/care/) Standard balík (19 900 Kč) zahrnuje kompletní migraci za 5–7 dní od podpisu.

## Jak se rozhodnout — flowchart

1. **Fakturujete v CZK a děláte Sklik nebo Heureka?** → DataNostro
2. **Děláte mezinárodní e-commerce, EU residency nutná?** → Addingwell
3. **Děláte global, US trh OK, chcete největší tag template katalog?** → Stape
4. **Máte DevOps tým + chcete plnou kontrolu + jste OK s 2–5× vyšší cenou?** → Google Cloud Run

Pokud si nejste jisti, kam patříte, [vyplňte migrační wizard](/cs/migrate/wizard/) a my vám pošleme tailored doporučení. Bez závazků, do 4 hodin v EU pracovních hodinách.

Sdílet

### Nový článek 1× měsíčně

Hloubkové návody pro server-side tracking + případové studie z CZ trhu. Žádný spam, jen 1 e-mail za měsíc. Odhlásit kdykoli.

Odebírat

[Zpět na Migrace](/cs/blog/migrace/)

DALŠÍ V TÉTO KATEGORII

[### Migrace ze Stape na DataNostro za 5 dní: postup, časté otázky, finanční dopad

Co reálně migrace obnáší: DNS, GTM container, monitoring přes paralelní běh, zpětná validace v GA4 / Meta. Plus …](/cs/blog/migrace/migrace-ze-stape-na-datanostro/)