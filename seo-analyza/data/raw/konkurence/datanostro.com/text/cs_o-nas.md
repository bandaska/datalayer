# URL: https://datanostro.com/cs/o-nas/

O NÁS

# Český *sGTM hosting*, postavený transparentně.

DataNostro provozuje malý tým z Brna. Servery jedou v EU Tier III datacentru (Německo), fakturujeme v Kč, kód píšeme my sami. Tahle stránka říká, kdo to stojí, kde běží, jaký je plán pro kontinuitu — a aktuální surová čísla.

## Reálná čísla, ne marketing

Tahle čísla se počítají ze stejné databáze, kterou náš tým vidí v dashboardu. Cachujeme je 60 sekund. Žádný editor, žádné kosmetické doúpravy.

[REQUESTŮ ZA 24H

125K+

napříč všemi projekty, server-side](/cs/status/ "Live status platformy")
[UPTIME 30D

99,99%

health-check každých 60s · zahrnuje krátké restarty při deploy (zero-downtime na úrovni klienta díky retry)](/cs/status/ "Live status platformy")
[MATCH RATE

100,0%

přijatých requestů, které dorazily na cílovou platformu](/cs/status/ "Live status platformy")

[→ Detailní status platformy s 90denními uptime bary](/cs/status/)

## Kdo to provozuje

### Jan Malatinský

Zakladatel · vede produkt, infrastrukturu i podporu

Před DataNostrem jsem deset let stavěl tracking pro české e-shopy a agentury. sGTM jsme řešili u zahraničních managed dodavatelů i self-hosted v cloudu a v obou případech jsme naráželi na stejné věci: faktury v dolarech či eurech, dlouhé deploye, žádný native Sklik / Heureka, podpora v jiném časovém pásmu a anglicky. DataNostro vznikl, abych tyhle problémy vyřešil pro sebe a pro týmy, se kterými spolupracuju.

Jsem dosažitelný přímo. Když si u DataNostra otevřete ticket, většinu dní vám odpovídám já — nikoli first-line outsource v jiné zemi. Pro velké klienty je to slabost (žádný 24/7 NOC), pro menší a střední firmy obvykle plus (rozumím vaší konfiguraci a ne jen FAQ).

* 📧 [[email protected]](/cdn-cgi/l/email-protection#86ece7e8c6e2e7f2e7e8e9f5f2f4e9a8e5e9eb)
* 📍 Brno, Česká republika
* 🇨🇿 OSVČ — IČO uvedeno na faktuře a v obchodním rejstříku

## Kde to běží

Žádné mlhavé "EU cloud". Pojmenované servery v pojmenovaných datacentrech, GDPR-čisté, bez transferu dat mimo EU pro provoz tracking pipeline.

### Hosting

EU Tier III datacentrum (Hetzner, Německo). Podepsali jsme jejich DPA; Hetzner sám má ISO 27001 a ISO 9001. Plný seznam sub-zpracovatelů v naší DPA.

Záloha: druhý EU region, denní pg\_dump.

### DNS / TLS / DDoS

Cloudflare (USA + globální PoP) jen pro doménu datanostro.com a TLS terminaci. Tracking-pipeline data v tranzitu, neukládají se.

Cloudflare drží SCC EU 2021, SOC 2 Type II a ISO 27001 (jejich vlastní certifikace, ne DataNostra).

### Stack

Django 5.2 LTS · PostgreSQL 16 · PgBouncer · Redis · Celery (gevent) · Go ingress μservice · nginx · Docker. Vše open-source, žádný vendor lock-in.

### Pošta a fakturace

Transakční e-maily přes SMTP Seznam.cz (CZ). Faktury generujeme my, ISDOC 6.0.2 pro Pohoda / Money / ABRA, žádný billing platební procesor.

[→ Plný seznam sub-zpracovatelů v DPA](/cs/dpa/)

## Co se stane, když tým bude malý nebo já odejdu

Auditoři u sGTM hostingu se právem ptají na bus factor. Říkáme to rovnou: provoz dnes táhne malý tým a zakladatel. Tady je, čím tu situaci řešíme tak, aby vás to neohrozilo.

* **Vaše data můžete kdykoliv stáhnout v ZIP**

  Dashboard má /dashboard/export/ — celá tenant konfigurace, eventy, GTM workspace JSON, faktury. Bez čekání, bez supportu. Pokud vás přestaneme bavit, máte vše do hodiny u sebe.
* **Žádný proprietární formát**

  sGTM kontejner je standardní Google obraz. GTM workspace je standardní JSON. Migrace od nás k jakémukoli jinému managed hosteru, vlastnímu serveru nebo cloudu zabere řádově hodiny — ne týdny. Migrační průvodce máme přímo v dashboardu.
* **Provoz je z 95 % automatizovaný**

  Deploy nových kontejnerů, DNS verifikace, SSL renewal, fakturace, monitoring, alerting — všechno běží v Celery Beat. I když se zakladatel týden nepřihlásí, faktury se vystaví, kontejnery se restartují, alerting funguje.
* **Source escrow pro Enterprise**

  Pro klienty na ENTERPRISE tarifu je v rámci kontraktu možnost source-code escrow přes notáře — pokud DataNostro přestane existovat, klient získá přístup ke kódu pro vlastní převzetí provozu. Detaily ve smlouvě.
* **Zálohy v EU regionu i offline**

  Denní pg\_dump do druhého EU regionu. Měsíční offline kopie. Retention 30 dní (denní) / 12 měsíců (měsíční). Plný DR plán k nahlédnutí pro Enterprise klienty.

## Co od kdy běží

1. 2025 Q3

   **Prototyp**

   První verze sGTM hostingu pro vlastní projekty zakladatele.
2. 2025 Q4

   **Interní beta**

   Multi-tenant dashboard, automatická fakturace v Kč, ISDOC export, native Sklik / Heureka konektory připravené pro veřejné spuštění.
3. 2026 Q1

   **Veřejné spuštění**

   Otevřená registrace, veřejný status page, SLA 99,9 %, knowledge base, migrační průvodce z předchozích řešení.
4. 2026 Q2

   **Vyladění a transparence**

   Go ingress μservice (sub-ms latence), 90denní uptime bary, posílení právních dokumentů, capacity alerty, self-service zrušení účtu.
5. Plánujeme

   **Roadmap**

   BigQuery / Firestore service-account UI, Schedule Requests, Request Delay, IP block per tenant, mobile SDK, externí bezpečnostní audit (ISO 27001 readiness — ladíme dle poptávky Enterprise klientů).
   [→ Veřejný roadmap](/cs/roadmap/)

## Pojďme si zavolat

Pro firmy nad 1M requestů měsíčně se ozvěte přímo — domluvíme videohovor a ukážeme dashboard naživo. Stavíme platformu od základů a každý onboarding bereme osobně.

[Napsat zakladateli](/cdn-cgi/l/email-protection#90faf1fed0f4f1e4f1feffe3e4e2ffbef3fffd)
[Kontaktní formulář](/cs/contact/)