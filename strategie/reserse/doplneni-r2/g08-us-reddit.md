# Doplnění mezery G08 – USA / anglofonní Reddit do hloubky

Stav: hotovo (2. kolo, datum přístupu ke všem zdrojům **2026-09-04**).
Datové řádky: `data/fragments/r2-g08-pricing.csv` (42 řádků, PG8-001…042), `r2-g08-evidence.csv` (66 řádků, EG8-001…066),
`r2-g08-pain.csv` (25 řádků, NG8-001…025).

**Zaplněná mezera.** `04-trh-us.md` § 5 i `06-pain-research.md` § 5 uvádějí, že Reddit byl v 1. kole dostupný jen přes RSS
a Brave snippety – bez celých vláken, bez komentářů a **bez skóre**. V tomto kole se podařilo dostat k plnému obsahu
**115 vláken se 1 697 lidskými komentáři včetně skóre a vnořené struktury**.

**Jak (pro reprodukovatelnost).** `www.reddit.com`, `old.reddit.com`, `.json`, `.rss`, `api.reddit.com` i `r.jina.ai`
vracejí z tohoto prostředí 403 („network policy“); WebFetch má reddit.com na blocklistu; `api.pullpush.io` vrací 429.
Funguje veřejné archivní API **Arctic Shift** (`https://arctic-shift.photon-reddit.com/api`):
`/posts/ids?ids=<id>`, `/comments/tree?link_id=<id>&limit=200`, `/posts/search?subreddit=X&title=Y`,
`/comments/search?subreddit=X&body=Y`. Vrací plný `body`, `score`, `author`, `created_utc` a strom odpovědí.
Limity: cca 1 dotaz za 3–5 s, delší dotazy vracejí 422 „Timeout. Maybe slow down a bit“ (řeší se opakováním).
Zdrojové URL v CSV jsou kanonické `https://www.reddit.com/...` odkazy, ne API endpointy.

Rozsah vytěžených subredditů: r/GoogleAnalytics (53 vláken), r/PPC (27), r/GoogleTagManager (10), r/bigquery (8),
r/analytics (5), r/googleads (4), r/agency (4), r/shopify (2), r/adwords (1), r/SEO (1).
Kurzy podle zadání: 1 USD = 23 Kč, 1 GBP = 29 Kč, 1 EUR = 25 Kč; hodinová sazba × 10 h = „proxy 10 h“.
Jednorázové ceny mají `price_czk_month` prázdné (aby neposouvaly medián měsíčních cen), přepočet je v `scope_notes`.

---

## 1. Shrnutí (10 bodů)

1. **Cenové pásmo z 1. kola se potvrzuje, ale z nového směru.** Jediná doložená *realizovaná* měsíční cena za údržbu
   měření na Redditu je **400 USD za 5 hodin měsíčně = 9 200 Kč** (EG8-004). Nezávisle na tom americká agentura v r/agency
   zveřejnila šestiletý cenový žebříček, v němž je rozdíl mezi tierem **bez měření (250 USD)** a tierem **s konverzním
   měřením a reportingem (650 USD)** přesně **400 USD = 9 200 Kč měsíčně** (EG8-029). Dvě nezávislé cesty, stejné číslo,
   uprostřed pásma 8–10 tis. Kč.
2. **Měření je v praxi osa tierování, ne doplněk.** Tatáž agentura popisuje své dvě úrovně obsluhy doslova jako
   „*no tracking, light touch*“ vs. „*full tracking, deep dives*“ (EG8-030). Nejlevnější měsíční tier, který kdokoli
   v diskusích přiznal (300 USD), měření explicitně vynechává: „*I don't get too in the weeds with conversion tracking*“
   (EG8-045). To je silná podpora třístupňového návrhu DataLayer.cz.
3. **Nejtvrdší protievidence celého 2. kola:** „*The idea is good, but this is not something you can sell on a retainer.
   Analytics setup and troubleshooting is a one-off service. Once that is done, nobody is going to pay $600 every month
   for insights and reports.*“ (EG8-008). Padla přímo pod návrhem dedikované agentury na měření za **600 USD/měs za web**
   (13 800 Kč) – tedy pod cenovým bodem prakticky totožným s tierem „Hlídání“.
4. **Praktik, který to zkusil, potvrzuje riziko:** „*I tried this … we were independent auditors … The reality is there
   isn't much demand for this service. The SEM agencies can set up your google and hubspot tracking. The big ad spenders
   … are largely doing it in-house … Take a look at Analytics Pros, they were doing this and ultimately sold to a digital
   ad agency.*“ (EG8-009). Zároveň tím uzavírá mezeru 1. kola o osudu Analytics Pros.
5. **Zároveň tři nezávislé hlasy ve stejném vlákně doporučují prodávat měření agenturám, ne klientům** – „*this is one of
   their biggest pain points … it'd be on their clients dime, not theirs*“, „*Small to medium sized Performance,
   Email/Retention, and SEO agencies would eat this up as an upsell service*“ (EG8-010). White-label kanál z návrhu
   nabídky je tím doložený z poptávkové strany.
6. **H2 („tiché rozbití“) vychází z 2. kola posílená o kvantifikaci.** Nejlepší doložený případ: dvě primární konverze
   (import z GA4 + Ads tag) sčítaly hodnotu **8 měsíců**, Google Ads ukazoval **ROAS 12× místo skutečných 4×**, klient na
   základě toho **zdvojnásobil rozpočet z 12 000 na 24 000 GBP měsíčně** (300 tis. → 600 tis. Kč) a CPC vyskočilo z 0,45
   na 0,68 GBP (EG8-049, NG8-015).
7. **Komunita sama definuje reakční dobu, kterou nikdo v ČR neslibuje:** „*Not seeing a business-critical metric drop for
   more a week is already not good enough. Agency teams at a minimum need to eyeball the top line data at least daily
   (CPA, CPC, spending, ROAS).*“ (EG8-050) a „*Way better to catch it in 24 hours than find out two weeks later while
   building the report.*“ (EG8-024). To je doslovné znění navrženého selling pointu z úst praktiků.
8. **BigQuery: potvrzeno, že mění hloubku, ne proveditelnost.** „*transaction id is the only reliable join key … if u have
   bigquery, that's the cleanest. if u don't, u can still export ga4 purchase events via the data api and compare ids to
   your order export, but it's more annoying … automate a daily report that shows backend orders, ga4 matched orders,
   ga4 extra orders, and missing orders, all by transaction id. that's the only thing that catches drift early.*“
   (EG8-038). 88 % pain výpovědí v tomto vzorku je od prostředí bez BQ.
9. **Formát měsíčního výstupu navržený v 1. kole je nezávisle potvrzen ze srpna 2026:** „*What actually got read was a
   one-page note with the 3–4 numbers that mattered that month plus a couple sentences on what changed and what we're
   doing next.*“ (EG8-031). A důvod churnu také: „*What actually causes churn is rarely the report itself, it is the gap
   between reports. … The agencies that keep clients longest are … the ones who flag a problem before the client notices
   it themselves.*“ (EG8-032).
10. **Nativní alerting GA4 je doloženě nedostatečný.** „*Google's GA insights alerts are very anemic and spotty and have
    barely found any issues that are obvious if you look at even a day of data*“; konkrétně: rozbité košíky nespustily
    ani alert na klíčovou událost, ani anomálii tržeb (EG8-020, EG8-023). Tím je H5 potvrzena v silnější podobě: nástroj
    bez nastavených prahů na konkrétní eventy nedodá to, co se od monitoringu čeká.

---

## 2. FAKTA

### 2.1 Měsíční ceny nalezené v diskusích (23 řádků s měsíční cenou)

Seřazeno vzestupně. Sloupec „Typ“ rozlišuje, jestli jde o **názor** („I would charge…“, „I'm thinking of charging…“)
nebo o **realizovanou** cenu („I charged…“, „we charge…“, zveřejněný ceník).

| ID | Kdo / kde | Co za to | Cena | Kč/měs | Typ |
|---|---|---|---|---|---|
| PG8-023 | AgencyAnalytics (cituje agentura v r/agency) | reportingový SaaS, per klient | 20 USD | 460 | realizovaná |
| PG8-032 | u/ejg1xrf, r/GoogleAnalytics 2019 | „4-6 small local businesses on retainer at 40 a month“ | 40 USD | 920 | názor (plán začátečníka) |
| PG8-024 | Swydo (cituje agentura) | reporting, 10 datových zdrojů | 50 GBP | 1 450 | realizovaná |
| PG8-018 | agentura, r/agency 2020–22 | Google Ads + web, **„No tracking“** | 250 USD | 5 750 | realizovaná (historický ceník) |
| PG8-027 | u/Bright-Foundation400, r/PPC | správa Ads + měsíční report, **bez hlubšího měření** | 300 USD | 6 900 | realizovaná |
| PG8-019 | agentura, r/agency 2023 | Ads + LP, **„tracking just forms or click to calls“** | 350 USD | 8 050 | realizovaná |
| **PG8-006** | u/No-Football-7386, r/GoogleAnalytics 2026 | **„monthly retainer of 5 hours maintenance / misc analytics work“** | 400 USD | **9 200** | **realizovaná** |
| PG8-015 | u/PracticalAd9393, r/PPC 2026 | správa jednoho kanálu měsíčně (měření zvlášť jednorázově) | 399 GBP | 11 571 | názor |
| PG8-030 | u/ChrisGA-FreelancerUK, r/PPC | minimum za správu Ads nebo 10 % spendu | 450 GBP | 13 050 | realizovaná |
| **PG8-011** | u/ds_frm_timbuktu, r/agency 2024 | **dedikovaná Tracking & Analytics agentura, per web** | 600 USD | **13 800** | názor (záměr) |
| PG8-020 | agentura, r/agency 2024–25 | Ads + LP + CallRail + **konverzní měření a reporting v GA** | 650 USD | 14 950 | realizovaná |
| PG8-026 | u/james18205, r/PPC | správa Ads pro klienty se spendem < 3 000 USD | 750 USD | 17 250 | realizovaná |
| PG8-028 | u/bkh_leung, r/PPC | fixní fee, lokální klient | 900 USD | 20 700 | realizovaná |
| PG8-042 | „The Helm“, r/GoogleAnalytics 2026 | „Google tag / analytics solution“ – **sporný údaj** | 999 USD | 22 977 | sporná |
| PG8-021 | agentura, r/agency 2025 | jako 650 + **WhatConverts atribuce leadů + napojení CRM** | 1 000 USD | 23 000 | realizovaná |
| PG8-025 | u/Dammit_Meg, r/PPC | typická nabídka: správa Ads (+ ~500 USD jednorázově za měření) | 1 000 USD | 23 000 | popis trhu |
| PG8-014 | OP r/PPC „UK Freelance rate check“ 2026 | tracking + LP + Google/LinkedIn Ads, flat | 800 GBP | 23 200 | názor (komunitou odmítnut jako nízký) |
| PG8-022 | agentura, r/agency 2026 | aktuální ceník, „full tracking, deep dives“ | 1 250 USD | 28 750 | realizovaná |
| PG8-029 | u/samuraidr, r/PPC | 1 500 USD nebo 15 % spendu (min. spend 10k USD) | 1 500 USD | 34 500 | realizovaná |
| PG8-017 | u/Nevergonnabefat, r/PPC 2026 | průměr přes všechny klienty (jen kanály + kreativa) | 2 500 USD | 57 500 | realizovaná |
| PG8-031 | u/ssst2bee11, r/PPC | e-shop, 2 weby, flat do 70k spendu | 3 000 USD | 69 000 | realizovaná |
| PG8-008 | u/isaacturner_12, r/GoogleAnalytics | práh, nad který se konzultant nevyplatí | 5 000 USD | 115 000 | pravidlo |
| PG8-007 | u/StableOk24, r/GoogleAnalytics 2026 | plná externí analytika | 8 500 USD | 195 500 | realizovaná |

**Statistika tohoto vzorku** (`analyze-pricing.py fragments/r2-g08-pricing.csv`): 42 řádků, 34 s číselnou cenou;
US medián 23 000 Kč (Q1 10 925, Q3 31 912, n = 28), EU medián 15 275 Kč (n = 6). Pozor: **medián je tažen nahoru správou reklamy**,
ne správou měření – viz interpretace v § 3.1.

### 2.2 Jednorázové ceny za implementaci měření (nejsou v mediánu)

| ID | Kdo | Co | Cena | Kč |
|---|---|---|---|---|
| PG8-005 | u/rampup_digital | conversion tracking setup | 100 USD | 2 300 |
| PG8-039 | u/No-Pension-7675 | základní tag + pár konverzí | 300 USD | 6 900 |
| PG8-039 | tamtéž | každá další konverze / e-commerce sekce / každý pixel | 50 / 200 / 100–200 USD | 1 150 / 4 600 / 2 300–4 600 |
| PG8-039 | tamtéž | příplatek za server-side | +30 % k projektu | – |
| PG8-040 | u/BearlyReddits (UK) | GA4 e-commerce pro PrestaShop, min. 3 h | 200 GBP | 5 800 |
| PG8-001 | u/Possible-4284 | conversion tracking samostatně (nedoporučuje) | 500 USD | 11 500 |
| PG8-025 | u/Dammit_Meg | doplnění měření k správě Ads | ~500 USD | ~11 500 |
| PG8-013 | u/Insane-Bull | migrace na GA4, e-shop (červen 2023) | 3 000 USD | 69 000 |
| PG8-004 | u/Menaxerius_ | „basic ga4 setup“ (komunita: −3 body) | 3 400 USD | 78 200 |
| EG8-015 | u/HumorousSeating (UK) | „that setup alone would run 3-5k as a one-off from any decent agency“ | 3–5 tis. GBP | 87–145 tis. |

Doslova o rozptylu: na jednu a tutéž otázku („kolik za nastavení konverzního měření“) přišly odpovědi
**50, 80, 100, 500, 750 a 3 400 USD** – dva řády. Nejvýše hodnocená odpověď (14 bodů) přitom radí neprodávat to
samostatně vůbec (EG8-003).

### 2.3 Hodinové sazby (proxy 10 h v CSV)

| ID | Kdo | Sazba | Kč/h |
|---|---|---|---|
| PG8-010 | offshore analytik (PH), klientem odmítnut jako drahý | 18–20 USD | 414–460 |
| PG8-035 | u/snancyiv, vstupní sazba, i „simple maintenance“ | 50 USD | 1 150 |
| PG8-012 | u/Silent-Professor-295, základní report | 50–65 USD | 1 150–1 495 |
| PG8-036 | **EU junior/medior freelance (u/joelles26)** | **70–80 EUR** | **1 750–2 000** |
| PG8-034 | u/jmc1278999999999, **stálá spolupráce** | 100 USD | 2 300 |
| PG8-009 | u/Sausage_Queen_of_Chi, US minimum | 100 USD | 2 300 |
| PG8-038 | mid/senior analytik (US) | 120+ USD | 2 760+ |
| PG8-012 | u/Silent-Professor-295, 15+ let praxe | 125 USD | 2 875 |
| PG8-033 | u/LawfulMuffin, analytika + data engineering | 135 USD | 3 105 |
| PG8-003 / PG8-041 | u/PPC-Memes / u/ConsumerScientist (GA4 + server-side) | 150 USD | 3 450 |
| PG8-034 | tentýž člověk, **jednorázová zakázka** | 150 USD | 3 450 |
| PG8-037 | u/tholly1983 | 300 USD | 6 900 |

**Nejužitečnější detail:** týž člověk fakturuje **100 USD/h u stálé spolupráce a 150 USD/h u jednorázovek** (EG8-048).
Kontinuita se u téhož dodavatele oceňuje o třetinu níž než ad-hoc práce – to je argument pro paušál, ne proti němu.

### 2.4 Painy: doba do odhalení a dopad (25 řádků)

| ID | Co se stalo | Jak se to zjistilo | Doba | Dopad |
|---|---|---|---|---|
| NG8-015 | dvě primární konverze sčítaly hodnotu | klient sám při srovnání vlastního reportu s reportem agentury | **8 měsíců** | ROAS 12× místo 4×, rozpočet zdvojnásoben z 12 na 24 tis. GBP/měs, CPC 0,45 → 0,68 |
| NG8-017 | rozbité konverzní měření u finančního klienta | až při převzetí účtu novou agenturou | **30+ dní** | z 5–10 leadů/den na 1 lead/den i po opravě (přeučený bidding), nutné data exclusions |
| NG8-018 | vývojář nasadil blokaci 95 % návštěvnosti a neřekl to | správce kampaní si všiml propadu a zeptal se | **> měsíc do nápravy** | kampaně „in shambles“, ani max clicks nepomohl |
| NG8-007 | event dělený podle landing page místo page path | nesoulad BigQuery exportu a Data API | **3 týdny** | 817 místo 1 024 (−20 % v sekci, −3,6 % celkově), denní křivka vypadala normálně |
| NG8-022 | CAPI eventy spadly na třetinu, pixel stabilní | ruční srovnání pixel vs. CAPI | **10 dní** | tiché zahazování eventů platformou (HTTP 200), zhoršené párování |
| NG8-019 | vývojář rozbil consent → nulové konverze na celém webu | in-house specialista si všiml chybějících konverzí | **7 dní** | týden spendu bez měřitelných konverzí; **snížený kvartální bonus specialisty** |
| NG8-008 | GA4 tag „silently broken“ | náhodou při stavbě reportu | **2 týdny** | dva týdny dat bez klíčového tagu |
| NG8-024 | GA4 duben 2026: generate_lead bez value+currency přestal být Key Event | jen při auditu (v DebugView vypadá vše správně) | **týdny** | import konverzí do Ads bez signálu, Smart Bidding bez cíle, u více klientů |
| NG8-020 | Google tiše zrušil podporu vnořených UA struktur v gtag.js (led. 2026) | tag visí ve stavu „Still running“ v GTM Preview | neuvedeno | Ads konverzní tagy přestaly odesílat nákupy u starších e-shopů, bez chybové hlášky |
| NG8-016 | Google sám přidal purchase jako konverzi do účtů s Ads tagem | jen díky sledování změn enhanced conversions | **2 týdny** (jinde 8 měsíců) | dvojí započítání napříč e-shopy |
| NG8-001 | postupná degradace po implementaci | nezjistí se | **18 měsíců** | celá investice do implementace znehodnocena |
| NG8-002 | migrace / CMS / cookie lišta / GTM edit | „until reporting season“ | týdny–měsíce | **data nelze zpětně dopočítat** |
| NG8-021 | redesign beze změny URL odstranil GA tag z části šablon | podle propadu, pak ručně Tag Assistant | neuvedeno | velký propad; po opravě 24–48 h na normalizaci, historie se nedoplní |

Rozdělení `what_broke` v tomto vzorku (`analyze-pains.py`): `ad_platform_change` 20 %, `release_web` 16 %,
`unknown_owner` 16 %, `revenue_mismatch` 12 %, `tool_noise` 8 %, `gtm_change_dev` 8 %, `ga4_change` 8 %,
`consent_change` 8 %, `platform_migration` 4 %. `has_bq`: **no 88 %**, optional 8 %, yes 4 %.

### 2.5 Artefakty dodávky nalezené v celých vláknech (nové oproti 1. kolu)

| Artefakt | Zdroj | Obsah |
|---|---|---|
| **Dvouvrstvý monitoring bez BigQuery** | EG8-022 | GA4 Custom Insights (hodinově, u malých webů relativní práh) + ranní externí kontrola přes Data API: včerejšek vs. stejný den v týdnu, odděleně `page_view`, `session_start`, hlavní konverze a pokrytí source/medium; u velkých webů Realtime API na posledních 30 minut. **„The alert should go to whoever can inspect GTM and the last site release, not wait for the reporting person to notice.“** |
| **Denní rekonciliační report** | EG8-038 | čtyři čísla po `transaction_id`: objednávky v backendu / spárované v GA4 / přebývající v GA4 / chybějící. „*that's the only thing that catches drift early*“ |
| **Prahy odchylky GA4 vs. backend** | EG8-039, EG8-040, EG8-041 | 5 % proti účetnictví; 5–10 % běžně akceptováno; 10–15 % normální s ohledem na adblockery, ITP a consent; **nad 20 % je něco strukturálně rozbité**. Klíčová metrika není velikost, ale **stabilita** odchylky. |
| **Předreportová QA** | EG8-026 | srovnání období u sessions/users/key events/revenue → kontrola největších změn po source/medium, landing page, device, country → testovací konverze přes GTM Preview až do DebugView včetně `transaction_id` → u server-side srovnání browser vs. server payloadů na duplicity a chybějící eventy |
| **Diagnostický postup a tabulka symptom → příčina** | EG8-042, EG8-043 | 4 kroky (izolace rozsahu → segmentace → korelace s changelogem → GTM podle data poslední změny) a tabulka pro 6 nejčastějších symptomů; autor sám označuje **absenci changelogu za hlavní překážku diagnostiky** |
| **Checklist po releasu** | EG8-056 | otestovat 10–15 náhodných URL **napříč typy šablon** (blog, produkt, kategorie), ne jen homepage – layout změny rozbíjejí dědičnost šablon |
| **Formát měsíčního výstupu** | EG8-031 | jednostránková poznámka: **3–4 čísla, co se změnilo, co s tím děláme**, prostým jazykem. Dashboardy klienti neotvírají. |
| **Norma vlastnictví účtů** | EG8-060 | klient je vždy admin své GA4 property, dodavatel admin navíc; držení účtu jako rukojmí komunita jednoznačně odsuzuje |
| **Osy rozsahu pro cenu** | EG8-059 | „*Number of pages isn't a factor, number of events/custom parameters is.*“ + server-side jako +30 % a každý pixel jako samostatná položka |

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3.1 Cenová pásma: potvrzeno, s jednou opravou čtení

**Potvrzeno (medián 8–10 tis. Kč za lidskou správu bez BQ).** Dvě nezávislé americké kotvy padnou přesně doprostřed
navrženého tieru „Hlídání“ (8 900 Kč):

- realizovaný retainer **400 USD/měs za 5 h údržby = 9 200 Kč** (PG8-006);
- **rozdíl mezi tierem bez měření (250 USD) a tierem s konverzním měřením a reportingem (650 USD) = 400 USD = 9 200 Kč**
  v šestiletém ceníku americké agentury (PG8-018 → PG8-020).

Třetí kotva je návrh dedikované agentury na měření za **600 USD = 13 800 Kč za web** (PG8-011) – to je mezi tiery
„Hlídání“ a „Správa“. **Tier 8 900 Kč tedy není podstřelený ani přestřelený.**

**Oprava čtení, kterou 2. kolo přináší:** medián tohoto vzorku (US 23 000 Kč) **není cena za správu měření**. Je tažen
nahoru správou reklamy (PPC retainery 750–3 000 USD). Když se vyberou jen řádky, jejichž rozsahem je skutečně měření
(PG8-032 920 Kč, PG8-006 9 200 Kč, PG8-011 13 800 Kč, PG8-042 22 977 Kč), je medián **11 500 Kč** při n = 4 – tedy
stále konzistentní s pásmem 1. kola, ale s velmi malým vzorkem; po vyřazení plánu začátečníka (920 Kč) a sporného údaje
(22 977 Kč) zbývají dva body: **9 200 a 13 800 Kč**. **Doporučení pro fázi syntézy: při počítání mediánů oddělit `scope = měření` od `scope = správa
reklamy`, jinak US čísla pásmo uměle nafouknou.** Řádky PPC správy mají v `scope_notes` výslovně uvedeno, že jde o kotvu
klienta, ne o srovnatelnou nabídku.

**Tier „Datová správa“ 39 000 Kč** dostal v tomto kole podporu shora i zdola: horní americké body jsou 5 000 USD
(115 000 Kč) jako práh nevýhodnosti a 8 500 USD (195 500 Kč) za plnou externí analytiku; evropská hodinovka
70–80 EUR/h (17 500–20 000 Kč za 10 h) posadí 20 h měsíčně na 35–40 tis. Kč. Sedí.

**Nová kotva, kterou 1. kolo nemělo – poměr k ad spendu.** „*if your monthly ad spend is under $10k, paying $5,000 to a
consultant or $90k to an employee doesnt make financial sense*“ (EG8-005) a „*Charging $1,000 on $800 of ad spend
represents too much overhead*“ (EG8-044). Přeloženo do CZK: klient s měsíčním spendem pod ~230 tis. Kč nekoupí správu
měření za 39 000 Kč, ale koupí ji za 8 900 Kč. **Segmentace podle spendu je použitelnější prodejní osa než obrat e-shopu.**

### 3.2 H1 (BQ-first) – vyvrácena v silné podobě, upřesněna ve slabé

1. kolo uzavřelo H1 jako „BigQuery mění hloubku, ne seznam“. 2. kolo to **potvrzuje doslovným technickým popisem**:
rekonciliace po `transaction_id` jde bez BQ přes export purchase eventů z Data API, jen „*more annoying*“ (EG8-038).
Zároveň ale 2. kolo přináší **první doložený případ, kdy chybu odhalil právě a jen BigQuery**: nesoulad BQ exportu
s Data API odhalil ztrátu 20 % v jedné sekci, kterou denní křivka neukázala (EG8-025, NG8-007). To je přesně argument
pro upsell do vyššího tieru: **bez druhého nezávislého zdroje pravdy neuvidíte chyby pod prahem alertu.**

Podíl výpovědí bez BQ v tomto vzorku je **88 %** – konzistentní se 75 % z 1. kola.

### 3.3 H2 (tiché rozbití) – potvrzena a poprvé kvantifikována v cizí měně i v čase

2. kolo přidává čtyři věci, které 1. kolo nemělo:

1. **Kvantifikaci** (NG8-015): 8 měsíců, ROAS 12× vs. 4×, rozpočet 12 → 24 tis. GBP měsíčně.
2. **Standard reakční doby vyslovený komunitou**, ne prodejcem: „nevšimnout si propadu déle než týden už není dost
   dobré“, „top-line data denně“ (EG8-050).
3. **Doklad, že škoda pokračuje po opravě**: po 30denním výpadku spadl objem z 5–10 leadů denně na 1, protože se Smart
   Bidding přeučil (NG8-017). Do nabídky patří věta, že náprava trvá 4–6 týdnů, ne den.
4. **Dva čerstvé případy spouštěče, který byl v 1. kole podreprezentovaný** (`ga4_change`): dubnová změna GA4 u
   `generate_lead` (NG8-024) a lednová tichá změna gtag.js u vnořených ecommerce objektů (NG8-020). Obě „selhávají
   potichu“ – event chodí, jen se nepočítá.

Formulace pro web mají nyní přímou oporu: *„It fails silently by design“* (1. kolo) doplněné o
*„The failure is completely silent … campaigns had been drifting for weeks before anyone caught it“* (EG8-062).

### 3.4 H5 (SaaS nahradí část hodnoty) – potvrzena, ale s posunem hranice

Nativní alerting GA4 nestačí doloženě, ne jen teoreticky: nespustil alert na rozbité košíky ani anomálii tržeb, neumí
hlídat konkrétní event (EG8-020, EG8-023). Nástroj navíc neurčí prahy: „*'anomalies' are so subjective … your best bet
is to figure out what is anomaly in your data*“ (EG8-065). A i tam, kde monitoring existuje (Stape u sGTM), hlídá jen
doručení requestu, ne spárování na straně platformy (EG8-057).

**Posun oproti 1. kolu:** hranice mezi nástrojem a službou neleží u „kdo pošle alert“, ale u **„kdo určí prahy a kdo
alert přijme“**. Nejlepší nalezená formulace je z EG8-022: *alert má jít na toho, kdo vidí do GTM a do posledního
releasu*. To je definice služby, ne funkce SaaS. Cenová kotva SaaS zůstává nízká (AgencyAnalytics 20 USD/klient,
Swydo 50 GBP za 10 zdrojů) – tj. **za nástroj klient zaplatí stovky, za rozhodnutí a opravu tisíce.**

### 3.5 Co 2. kolo naopak zpochybňuje

- **Poptávka po samostatné službě „správa měření“ je sporná i v USA.** Vedle EG8-008 a EG8-009 je tu i EG8-019
  („*struggled to really sell analytics services as a stand alone service. Most of the work goes un-noticed.*“) a
  EG8-011 (vedení agentury nevidí hodnotu retaineru po implementaci). **To není důvod službu nedělat, ale důvod ji
  neprodávat jako „monitoring“** – klient si za monitoring nepředstaví práci. Prodejné jsou tři věci, které jsou
  v citacích opakovaně: (a) *neztratíte peníze v Ads*, (b) *víme to dřív než vy*, (c) *někdo to opraví a napíše vám,
  kolik konverzí chybělo*.
- **Model „paušál za měření vedle PPC agentury“ naráží na to, že PPC agentury měření zdarma zahrnují** – ale jen v objemu
  **2,5 hodiny ročně** (EG8-002). To je konkrétní číslo, kterým lze námitku „to má naše PPC agentura v ceně“ rozbít.
- **Komunita jednohlasně doporučuje účtovat implementaci zvlášť od paušálu** (EG8-015, EG8-036, EG8-045). Návrh
  DataLayer.cz by měl mít viditelnou vstupní položku (audit + náprava) oddělenou od měsíční ceny, jinak paušál
  v prvních měsících dotuje setup.

---

## 4. Mezery, které zůstávají

1. **Skóre vláken je nízké.** Klíčová cenová a monitorovací vlákna mají skóre 1–10 a jednotky komentářů
   (r/GoogleAnalytics „What's your price range for analytics services“ = 1 odpověď). Vysokoskórová vlákna (55, 36, 26)
   jsou o PPC sazbách a obecné analytice, ne o správě měření. **Vzorek „ceny za správu měření“ zůstává tenký: n = 4
   měsíční body se skutečným rozsahem měření.**
2. **Chybí realizovaná cena za monitoring/správu měření od firmy s veřejným ceníkem.** Jediná veřejná měsíční cena
   (999 USD) je sporná a neověřená na primárním zdroji; poskytovatel ji v diskusi popírá. Ověřit přímo na webu
   poskytovatele se v tomto kole nepodařilo (identita „The Helm“ z vlákna jednoznačně nevyplývá).
3. **Fiverr / Upwork gigy nadále neověřeny** – marketplaces zůstávají mimo dosah (403 z 1. kola trvá) a Arctic Shift je
   nepokrývá. Zjištění z 1. kola, že měsíční „GA4 maintenance“ gig na Fiverru neexistuje, se nepodařilo ani potvrdit,
   ani vyvrátit.
4. **Komentáře na LinkedIn a v Measure Slacku** zůstávají nedostupné; anglofonní evidence je tím pádem z Redditu a webů,
   ne z profesních komunit, kde se ceny probírají neveřejně.
5. **`browser_change` (ITP, adblockery) se v painech neobjevil ani ve 2. kole** jako samostatný spouštěč – jen jako
   pozadí odchylky 10–15 %. Buď to lidé nepoznají, nebo to jako incident neprožívají.
6. **Chybí česká paralela.** Všech 25 pain výpovědí je z anglofonního prostředí (US 92 %, EU 8 %). Kvantifikace v Kč pro
   český e-shop v datech pořád není – nejbližší je britský případ 12 → 24 tis. GBP měsíčního rozpočtu.
7. **Kurz CAD** – jeden klíčový řádek (PG8-006) uvádí částky v kontextu CAD; při přepočtu kurzem CAD (~17 Kč) by šlo
   o 6 800 Kč místo 9 200 Kč. Zapsáno konzervativně přes USD podle zadání, ale při syntéze to stojí za poznámku.
8. **Arctic Shift index nemusí být úplný** u nejnovějších vláken (poslední týdny) a u smazaných komentářů; u několika
   vláken chyběly odpovědi označené `[removed]`.
