# URL: https://datanostro.com/cs/migrace-z-google-cloud/

GOOGLE CLOUD → DATANOSTRO

# Žádné *Cloud Run, IAM ani egress poplatky.*

Hostujete sGTM na Google Cloud Run nebo App Engine? Platíte za vCPU, RAM, requesty, egress, Cloud Logging, statickou IP — a navíc spravujete Node verzi a IAM. DataNostro je managed: jedna fakturovaná částka v Kč, servery v EU, podpora v češtině. Pro typický 5M req/měsíc projekt:  **Kč/měs na GCP** vs **1 690 Kč/měs na DataNostro** (tarif PRO).

Migrační bonus —
**GCP-MIGRATION-20**
= 20 % off na 3 měsíce

[Spočítat moji úsporu](/cs/tools/gcp-cost-calculator/)
[Migrační wizard](/cs/migrate/wizard/?source=gcp)

První konzultace zdarma. Bez závazků. Odpovídáme do 4 hodin.

PŘÍMÉ POROVNÁNÍ — 5 M REQUESTŮ/MĚSÍC

## Co reálně platíte za GCP vs DataNostro

Cloud Run pricing je transparentní ale variabilní — k vCPU + RAM se nabalí egress, logging, IP a ops čas. DataNostro je fixní Kč částka.

**Google Cloud Run**

2 200 Kč

≈ $95 USD/měsíc

* vCPU (always-on)**$62,21**
* RAM (512 MB)**$3,24**
* Requesty (5 M)**$2,0**
* Egress (~10 GiB)**$0,73**
* Cloud Logging**$0,0**
* Static IP**$1,46**
* Ops/maintenance overhead**$25,0**

Realističtější bývá +20–40 % protože min-instances=1 nechá CPU 95 % dne idle, ale stále se počítá.

Doporučeno

**DataNostro PRO**

1 690 Kč

≈ $73 USD/měsíc · ISDOC fakturace

* vCPU + RAM**v ceně**
* Requesty (5 M)**v ceně**
* Egress**neúčtujeme**
* Logy + audit**v ceně**
* SSL + doména**v ceně**
* Updates + monitoring**v ceně**
* Ops čas**0 minut/měsíc**

Fixní částka. Žádný egress shock, žádný regional billing puzzle.

[Spočítat pro vlastní objem requestů →](/cs/tools/gcp-cost-calculator/)

TRANSPARENTNĚ

## Proč to umíme za 1 690 Kč, když GCP účtuje 2 600 Kč

Nejsme levní, protože šetříme na výkonu. Jsme levní, protože nás nedrtí stejné fixní náklady jako GCP.

🏗️

### Bare-metal v EU, ne hyperscaler markup

Hetzner Tier III datacenter v Německu, dedicated CPU. GCP účtuje ~3× za stejný výkon, protože do ceny zaračí managed Kubernetes, multi-region replikaci, BigQuery integrace — featury, které pro sGTM proxy nepotřebujete.

🔀

### Sdílená infra mezi tenanty

Jeden Hetzner box obslouží 200+ tenantů (sGTM kontejner běží v Dockeru s vCPU caps + memory limits). Vy na Cloud Run platíte za prázdné CPU 24/7 — min-instances=1 je default. My to multiplexujeme.

⚙️

### Žádný egress, žádné logging poplatky

Hetzner má 20 TB outbound traffic v ceně. Cloud Logging u GCP po 50 GB účtuje $0.50/GB — u busy e-shopu během Black Friday je to +500 Kč. My logy posíláme na disk + retention 90 dnů, zdarma.

Co to znamená pro vás

Stejný open-source sGTM Docker image (`gcr.io/cloud-tagging-10302018/gtm-cloud-image`) jako na GCP. Identický run-time. Nižší cena je rozdíl v ceně infrastruktury, ne v kvalitě toho, co váš GTM workspace dělá.

PROČ PŘEJÍT

## Co konkrétně získáte a co ztratíte

### Získáte

* **Fixní Kč fakturaci** — žádný měsíční puzzle "kolik nás to letos stálo".
* **EU-only data residency** — EU Tier III datacenter (Německo). Žádný US-parent puzzle pro corporate klienty.
* **Egress zdarma** — žádný traffic spike billing shock.
* **Auto SSL + auto Container Config rollouts** — žádný terraform/IAM lock-in.
* **Sklik + Heureka native integrations** — pro CZ trh kritické, na GCP musíte napsat sám.
* **Česká podpora** — odpověď v EU pracovních hodinách, ne přes Google Premium Support kontrakt.
* **ISDOC fakturace** — pro účetní v ČR/SK standard, GCP fakturuje v USD bez ISDOC.

### Co ztratíte (poctivě)

* **Multi-region failover** — DataNostro běží v jedné EU lokalitě; GCP Cloud Run umí multi-region. Pro 99,9 % CZ/EU eshopů non-issue, ale je třeba říct.
* **Custom autoscaling pravidla** — my škálujeme automaticky, nemůžete nastavit "drž 10 instancí v black friday". Pokud potřebujete enterprise scale s vlastními pravidly, máme dedicated tier.
* **BigQuery integration uvnitř Cloud Console** — GCP umí přímý BigQuery export jedním klikem. U nás export přes API nebo CSV dump z dashboardu.
* **VPC peering / Cloud Armor / IAP** — enterprise security featury Google Cloud, které u nás nahrazujeme firewallem na úrovni cloudu + nginx rate-limiting.

Pokud něco z toho potřebujete, napište nám — pomůžeme rozhodnout poctivě, i kdyby to mělo znamenat: zůstaňte na GCP, dává to smysl.

ČTYŘI VĚCI CO NA GCP VŮBEC NEJSOU

## Managed = víc než jen hosting

Cloud Run vám dá výkon. My přidáme observability, AI debugging a alerting které byste si na GCP museli postavit od nuly — 3-6 měsíců DevOps + ML práce.

🧠

### AI Debug Agent

Klik „Vysvětli mi selhání" → Gemini projde posledních 50 failed events + váš tenant config + Power-Ups → vrátí likely cause + suggested fix. Confidence chip. Bez ručního grep v logs.

Na GCP: napsat sám nebo BigQuery dotaz.

📊

### Data Quality Score

Denní 0-100 skóre s grade A/B/C/D/F + 30-day sparkline trend. Váhy: match rate 30 %, error freedom 30 %, cookie 15 %, latency 15 %, consent 10 %.

Na GCP: Looker Studio od nuly.

⚠

### Anomaly Detection + AI

Rolling 7d baseline detekuje „match rate spadl 18 % vs průměr". AI hned vysvětlí příčinu („Meta token expirovaný"). Push do Slack/Discord paralelně.

Na GCP: Cloud Monitoring + Pub/Sub + Vertex AI.

🔔

### Slack / Discord / Teams

Per-platform formát (Block Kit / embed / MessageCard). Severity + kategorie filtry. Test button. Marketing tým žije ve Slacku, IT v Discordu — ne v email inboxu.

Na GCP: Cloud Function s vlastním kódem.

FEATURE MATRIX

## Bod-za-bodem srovnání

Featury které pro CZ/EU sGTM hosting reálně řešíte v provozu — ne marketing seznam.

| Funkce | Google Cloud Run | DataNostro |
| --- | --- | --- |
| **Open-source sGTM image** | ✓ | ✓ |
| **EU data residency garantovaná smluvně** | ~ Závisí na regionu + DPA | ✓ Pouze EU, vždy |
| **Fakturace v Kč + ISDOC** | ✗ USD only | ✓ |
| **Predikovatelná měsíční částka** | ✗ Variabilní | ✓ Fixní tarif |
| **Egress / outbound traffic** | ✗ $0.12/GB | ✓ Zdarma do 20 TB |
| **Sklik konverze native** | ✗ Custom tag | ✓ |
| **Heureka feed proxy** | ✗ | ✓ |
| **Auto SSL na custom doméně** | ~ Manual cert | ✓ Let's Encrypt |
| **Cookie Keeper (ITP bypass)** | ✗ | ✓ |
| **Bot detection + IP block** | ~ Cloud Armor +$ | ✓ V ceně |
| **🧠 AI Debug Agent** | ✗ | ✓ Gemini powered |
| **📊 Data Quality Score (denně)** | ✗ | ✓ 0-100 + grade |
| **⚠ Anomaly Detection + AI explainer** | ~ Cloud Mon custom | ✓ 7d baseline + LLM |
| **🔔 Slack/Discord/Teams alerty** | ~ Cloud Function | ✓ Native, 1 klik |
| **Multi-region failover** | ✓ | ✗ Single EU lok. |
| **Native BigQuery export** | ✓ | ~ Webhook → BQ |
| **Audit log (90 dní)** | ~ Cloud Logging +$ | ✓ V ceně |
| **Komplet data export (1 klik)** | ✗ Ručně | ✓ /dashboard/export/ |
| **Česká podpora (4 h SLA)** | ✗ EN, Premium Support | ✓ |

**✓** v ceně, plně podporováno  · 
**~** k dispozici za příplatek nebo s omezením  · 
**✗** nedostupné

TIMELINE

## Migrace za odpoledne, ne za týden

Cíl: žádná ztráta měřicích dat během cutover. DNS TTL pojistka, parallel deploy, rollback na 1 kliknutí.

1

### Snížíte TTL na CNAME na 300 s

 5 min

V Google Domains / Cloudflare snížíte TTL u stávající sGTM subdomény na 5 min. Pre-flight 24-48 hodin předem — DNS resolveři už po hodině přijmou nové hodnoty rychleji.

2

### Účet na DataNostro + tenant

 2 min

Registrace + tenant + plán. 14 dní zdarma, kreditka není potřeba. Použijte kód GCP-MIGRATION-20 pro -20 % na 3 měsíce.

3

### In-dashboard GCP import

 3 min

V dashboardu → Import ze Stape (funguje i pro GCP — stejný Container Config Base64). Vložte svůj Container Config z GTM Admin → Container Settings. Pre-flight náhled.

4

### Deploy DataNostro kontejneru paralelně

 2 min

DataNostro nasadí Docker kontejner na naši subdoménu (např. sst-new.vasefirma.cz). Běží paralelně s GCP — žádný dopad na live traffic. SSL přes Let's Encrypt automaticky.

5

### Smoke test + preview

 15-30 min

V GTM workspace přepnete Preview server URL na náš preview endpoint. Pošlete pár test eventů + ověříte, že dorazily do GA4/Meta. Pokud něco nesedí — žádný dopad na produkci.

6

### DNS cutover — přepnete CNAME

 2 min DNS edit + 15 min propagace

V DNS provideru přepnete CNAME stávající sGTM subdomény (např. sst.vasefirma.cz) z run.app na náš CNAME. Díky předem snížené TTL propaguje do 5–15 min. Stávající GTM Web container už používá novou destinaci automaticky.

7

### Decommission GCP — bez stresu, klidně za týden

 2 min + týden monitoring

GCP Cloud Run necháváte ještě 24-48 h v provozu jako safety net. Pokud nic neselže (zatím se to nestalo), Cloud Run instanci v GCP Console smažete + zrušíte statickou IP. Faktura za GCP klesne na $0.

[Spustit migrační wizard →](/cs/migrate/wizard/?source=gcp)

Stačí 2 minuty. Pošleme vám kompletní migrační checklist na email.

POJISTKA

## Když něco nesedí: rollback na GCP za 5 minut

GCP Cloud Run instanci doporučujeme nechat běžet 24–48 h po cutoveru. Pokud cokoli během toho okna nesedí (špatný response code, missing event, divné latence), vrátíte DNS zpět.

### Rollback krok-za-krokem

1. **DNS edit:**
   V Cloudflare / Google Domains přepnete CNAME stávající tracking subdomény (např. `sst.vasefirma.cz`) zpět na původní `SERVICE-XXX.a.run.app`. Díky předem snížené TTL (300 s) propaguje do 5 min.
2. **Nic dalšího:**
   GTM Web container nemusíte měnit (server\_container\_url ukazuje na vaši stálou subdoménu, ne na DataNostro endpoint). Cloud Run instance je dál v provozu a okamžitě obslouží příchozí eventy.
3. **Ztráta dat:**
   5–15 min (DNS resolver cache okno). U GA4 to z hlediska reportů znamená 0,01 % denního trafficu — pod úroveň statistické signifikance.
4. **Faktura u nás:**
   Trial je 14 dní zdarma, takže rollback v tomto okně = 0 Kč. Pokud už platíte první měsíc, vystavíme dobropis na zbývající dny tarifu (běžná § 1829 OZ 14denní lhůta odstoupení od smlouvy).

**Honest stat:**
Za prvních 12 měsíců provozu jsme nezaznamenali ani jeden rollback z technického důvodu. Dva tenanti se vrátili kvůli změně rozpočtu (přechod na vlastní bare-metal). Pokud k rollbacku dojde, máme dokumentovaný postup výše — bez supportu, bez fixu na naší straně.

FAQ

## Na co se klienti nejčastěji ptají

Ztratím data během migrace?

Ne, pokud postupujete podle timeline výše. DNS TTL na 5 min předem + paralelní běh DataNostro a GCP kontejneru = během cutover prochází eventy oběma cestami. V nejhorším případě (DNS resolver cache) ztratíte 5–15 minut dat — což je u GA4 sub-pixel scale.


Musím přepsat GTM Server kontejner v GTM UI?

Ne. Container Config Base64, který GCP používá, je stejný formát co DataNostro. Jen ho vložíte do našeho importeru — GTM Server tagy, triggery a variables zůstávají identické.


Co s GCP fakturou — zruším okamžitě?

Doporučujeme nechat běžet 24–48 h paralelně. Pak Cloud Run instanci smažete + zrušíte statickou IP. Faktura za daný měsíc bude proporcionální podle dnů provozu.


Co BigQuery export? GCP to umí přes pár kliků.

DataNostro nemá native BigQuery export uvnitř dashboardu. Máme ale REST API přes API klíče + denní CSV export do vaše Cloud Storage / S3 / cokoli skrz custom webhook. Pokud potřebujete realtime BigQuery streaming, ozvěte se — postavíme custom integraci.


Jak je to s SLA a uptime?

Standard plány: 99,5 % SLA. Enterprise: 99,95 % SLA s pokutou za downtime. GCP Cloud Run má 99,95 % SLA jen pro multi-region, jinak 99,9 %. Náš /status/ page ukazuje reálný uptime za posledních 30 dní.


Můžu si migraci nechat udělat?

Ano — [DataNostro Care](/cs/care/) Standard balík (19 900 Kč) zahrnuje kompletní migraci pod naším dohledem, včetně paralelního testování a DNS cutover. 5–7 dní od podpisu po live tracking.

Bez DNS změny

TEST-DRIVE

## Paralelní test-drive — 7 dní zdarma, žádný DNS cutover

Pokud nedůvěřujete čísla z kalkulačky a chcete reálná p95/p99 latence + match rate s vaším vlastním trafficem, nasadíme vám paralelní DataNostro kontejner na novou subdoménu (např. `sst-test.vasefirma.cz`). Na něj pošlete test eventy (GTM Preview nebo testovací workspace), zatímco produkční tracking dál běží beze změny na GCP. Po 7 dnech porovnáte čísla side-by-side.

* Žádné riziko pro produkční tracking — DNS na GCP zůstává nedotčené
* Vidíte naše dashboard, naše latence, naše match rate na vašem vlastním trafficu
* Po 7 dnech buď přepnete DNS (full migrace) nebo nás zrušíte jedním kliknutím — 0 Kč

[Sjednat test-drive →](/cs/contact/?topic=test-drive&source=gcp)
[[email protected]](/cdn-cgi/l/email-protection#80f3e1ece5f3c0e4e1f4e1eeeff3f4f2efaee3efedbff3f5e2eae5e3f4bdc7c3d0a5b2b0f4e5f3f4ade4f2e9f6e5)

Odpovídáme do 4 hodin v pracovní době (Po–Pá 9–17). Pro enterprise (>20 M req/měsíc) máme dedikovaný sales engineer.

## Připraveni přejít?

Vyplníte migrační wizard, my vám pošleme krok-za-krokem checklist + naceníme dohled při cutover. Bez závazků.

[Spustit migraci →](/cs/migrate/wizard/?source=gcp)
[Spočítat úsporu](/cs/tools/gcp-cost-calculator/)
[Napsat sales](/cdn-cgi/l/email-protection#91e2f0fdf4e2d1f5f0e5f0fffee2e5e3febff2fefcaee2e4f3fbf4f2e5acd6d2c1b4a3a1fcf8f6e3f0f2f4)

Zvažujete i jiné managed providers? [Stape vs Addingwell vs GCP vs DataNostro](/cs/blog/migrace/stape-addingwell-google-cloud-vs-datanostro-2026/) · [Migrace ze Stape](/cs/migrace-ze-stape/) · [Migrace z Addingwell](/cs/migrace-z-addingwell/)