# Doplnění R2 / G02 – Český trh: neověřené subjekty, ceny produktů a noví hráči

Stav: hotovo (2. kolo, 2026-09-04). Zaplňuje mezeru popsanou v `reserse/01-trh-cz.md` § 5
(„Neověřené subjekty“ + chybějící ceny českých produktů) a doplňuje subjekty, které 1. kolo minulo.

Data: `data/fragments/r2-g02-pricing.csv` (49 řádků, `PG2-001`–`PG2-049`),
`data/fragments/r2-g02-evidence.csv` (35 řádků, `EG2-001`–`EG2-035`, `phase=11`).
Odkazy `EG2-…` v textu vedou na evidence log. Datum přístupu u všech zdrojů: 2026-09-04.

Metoda: přímý `curl` a WebFetch známých i nově nalezených URL, alternativní cesty k blokovaným zdrojům
(`/en/pricing/` místo `/pricing`, `r.jina.ai`, ARES REST API, schema.org breadcrumby pro dohledání
skrytých URL), 8 WebSearch dotazů na oblasti, které v 1. kole neproběhly.

---

## 1. Shrnutí

1. **Waaila má veřejný ceník** (mezera z 1. kola vyřešena – URL je `/en/pricing/`, ne `/pricing`): 29 / 69 / 129 / 249 / 399 EUR/měs podle počtu denních běhů testů, plus **placené lidské hodiny jako add-on: 2 h = 140 EUR, 10 h = 600 EUR/měs**, tj. 60–70 EUR/h = 1 500–1 750 Kč/h (EG2-001, EG2-002).
2. **Signals má kompletní veřejný ceník všech 6 produktů** (1. kolo je vedlo bez ceny): Dance, Bar, Game 2 500 Kč/měs, Bingo a Attribution 5 000 Kč/měs, Bot Detector 1 000 Kč/měs; setup 5–25 tis. Kč. Celý stack = **18 700 Kč/měs + 70 000 Kč setup** (EG2-003–EG2-009).
3. **Signals Bar používá přesně sdělení H2** – „Tiché výpadky v e-commerce vás stojí tržby… Nefunkční košík nebo **rozbité měření** zjistíte z reportu až zpětně. Mezitím nepozorovaně přicházíte o desítky dokončených objednávek.“ Závěr 1. kola „nikdo z české konkurence to jako sdělení nepoužívá“ **je tímto vyvrácen** (EG2-034).
4. **Tři neověřené subjekty vyřešeny:** Digital Visions = Digital Vision Czech Republic, a.s. (doména `digitalvision.cz`, IČO 03177238, člen MEDIA FACTORY GROUP) – EG2-017; Adexpres = koupen Dentsu Aegis 2016, doména dnes redirectuje na dentsu.com – EG2-019; MeasureDesign má služby na `/co-delame`, ne `/sluzby` – EG2-029.
5. **House of Řezáč CZ stránku webové analytiky opravdu nemá** – URL je uvedena ve schema.org, ale všechny 3 varianty vracejí 404; prodává se jen v EN (EG2-018). **Optimics veřejnou cenu nemá** ani na Level 1/2/3, ani na homepage; kontinuální správu vůbec nezmiňuje.
6. **Nový nezávislý důkaz prázdné pozice:** nejobsáhlejší veřejný CZ ceníkový benchmark (Radim Hasalík) uvádí měsíční paušál u PPC (8–30 tis.), SEO (10–40 tis.), sociálních sítí (5–50 tis.) i zbožových srovnávačů (2–8 tis.) – **u měření uvádí výhradně jednorázové ceny** (EG2-015).
7. **Katalog Shoptet Partneři, kategorie Analytika** (1. kolo ho neznalo) dává 11 subjektů a 9 veřejných hodinových sazeb na jednom místě: 1 150–2 500 Kč/h, **medián 2 000 Kč/h** (EG2-020). Potvrzuje pásmo z 1. kola a posouvá horní hranici z 2 400 na 2 500 Kč/h.
8. **Dva nové veřejné měsíční body za správu, která obsahuje analytiku:** Lukáš Štěpánek „Dlouhodobá správa kampaní a analytiky **začíná od 10 000 Kč měsíčně**“ (+ minimální závazek 3 měsíce, EG2-025) a Growtix „Fee… typicky **35 000–100 000 Kč měsíčně**“ s kadencí týdně/měsíčně/kvartálně (EG2-028).
9. **BigQuery není v ČR nákladová bariéra:** dva nezávislé české zdroje uvádějí provoz BQ „typicky do 500 Kč/měs.“ resp. „v řádu stovek korun měsíčně“ (EG2-004, EG2-010). Argument „BQ je drahé“ padá; překážkou je kompetence, ne faktura.
10. **Alerting už v ČR není diferenciátor** – Signals Bar navíc pojmenovává i alert fatigue („Falešné poplachy a notifikační šum… časem začnete ignorovat“, EG2-035). Diferenciátor se musí posunout na triáž alertu, QA po releasu, consent a reakční dobu, které nemá žádný z nalezených CZ produktů.

---

## 2. FAKTA

### 2.1 Vyřešené mezery z 1. kola (§ 5 reportu 01-trh-cz.md)

| Mezera z 1. kola | Stav po 2. kole | Zjištění | Evidence |
|---|---|---|---|
| Digital Visions – doména neexistuje | **vyřešeno** | Digital Vision Czech Republic, a.s., IČO 03177238, `digitalvision.cz`, Žerotínova 32 Praha 3, člen MEDIA FACTORY GROUP, 20+ specialistů. Služba „Analytika a BI“, 5. krok procesu = „Provoz a škálování – Zajistíme správu, optimalizaci a rozšiřování systému“. Bez ceny. | EG2-017 |
| Adexpres – HTTP 503 | **vyřešeno** | `adexpres.cz` i `www.adexpres.cz` vracejí 200 a redirect na `dentsu.com`. Skupinu Adexpres koupila Dentsu Aegis v březnu 2016. Jako samostatný hráč neexistuje. | EG2-019 |
| House of Řezáč CZ stránka služby – 404 | **ověřeno jako trvalé** | URL `/rozcestnik-sluzeb-webova-analytika` je jen ve schema.org ItemList; sama vrací 404, stejně jako `/sluzby/webova-analytika` a `/cs/services/web-analytics`. CZ verzi nemá. | EG2-018 |
| MeasureDesign `/sluzby` – 404 | **vyřešeno** | Správná URL `/co-delame`. Čtyři služby vč. „Infrastrukturní služby“ s automatizovanými kontrolami kvality dat a zálohami. „S většinou klientů fungujeme na bázi dlouhodobé spolupráce“ – bez názvu produktu, hodin, SLA i ceny. | EG2-029 |
| Waaila pricing – DNS | **vyřešeno** | Ceník na `/en/pricing/`. Viz § 2.2. | EG2-001, EG2-002 |
| Optimics ceny | **ověřeno: cena neexistuje** | Homepage ani Level 1/2/3 neuvádí žádné číslo; Level 3 nezmiňuje průběžnou správu, monitoring ani podporu vůbec. | – |
| Bidding Tools | **vyřešeno** | `biddingtools.cz` redirectuje na `conviu.cz/automaticky-bidding-pro-zbozove-srovnavace`. Ceník je modulární kalkulačka bez fixních tierů; monitoruje ceny konkurence, ne kvalitu měření. | EG2-024 |
| Roivenue cena | **trvá – nedostupné** | HTTP 202 (Cloudflare challenge), `r.jina.ai` vrací prázdno, WebFetch nedostal obsah. | EG2-023 |
| Datacop | **trvá – nenalezeno** | `datacop.cz`, `.io`, `app.datacop.cz`, `getdatacop.com` = chyba DNS/tunelu; `datacop.eu` je litevská firma na ochranu dat. | EG2-032 |
| Mergado / Dotidot / Meiro ceny | **trvá – částečně** | Mergado renderuje ceník klientsky (Alpine.js); jediný nalezený bod je nepřímý – Hasalík uvádí „Nástroje typu Mergado: od 229 Kč měsíčně / 1 zbožový srovnávač“. Dotidot vrací HTTP 525. Keboola i Meiro už pokryty fází 6. | EG2-033 |

### 2.2 Waaila (Cross Masters) – první CZ ceník, který odděluje cenu nástroje od ceny člověka

| Tier | Cena | Denních běhů testů | Kč/měs |
|---|---|---|---|
| Free | 0 EUR | bez automatizace | 0 |
| Starter | 29 EUR | 1–10 | 725 |
| Growth | 69 EUR | 11–50 | 1 725 |
| Business | 129 EUR | 51–100 | 3 225 |
| Scale | 249 EUR | 101–250 | 6 225 |
| Pro (AI detection, 24/7 SLA) | 399 EUR | 251–500 | 9 975 |
| Enterprise | custom | 500+ | – |

Premium support jako **samostatně nacenené lidské hodiny**:

| Balíček | Hodin/měs | Cena | Kč/měs | Kč/h |
|---|---|---|---|---|
| Entry | 2 | 140 EUR | 3 500 | 1 750 |
| Standard | 4 | 280 EUR | 7 000 | 1 750 |
| Enhanced | 6 | 390 EUR | 9 750 | 1 625 |
| Premium | 8 | 520 EUR | 13 000 | 1 625 |
| Professional | 10 | 600 EUR | 15 000 | 1 500 |

Kurz 1 EUR = 25 Kč. Kombinace **Business + Enhanced = 519 EUR = 12 975 Kč/měs** za nástroj + 6 h člověka
(PG2-012). Doslova: *„Each subscription plan allows you to use Waaila for a specific number of dedicated
daily test runs. If you exceed your daily quota, Waaila will not process any additional tests.“* (EG2-001)

### 2.3 Signals – jediný CZ hráč s úplným veřejným ceníkem produktů

| Produkt | Co dělá (doslova) | Setup | Měsíčně | requires_bq |
|---|---|---|---|---|
| Bar | „Inteligentní monitoring a alerting pro marketing a e-commerce“ | 10 000 Kč | 2 500 + 100 Kč | ano (GCP) |
| Dance | „Proměňte chaos v BigQuery v čistá data“ | 10 000 Kč | 2 500 Kč | ano |
| Game | „Stáhněte všechna data jedním kliknutím“ (ELT konektory) | 10 000 Kč | 2 500 + 100 Kč | ano |
| Bingo | „Ptejte se svých dat lidskou řečí“ (AI agent nad BQ) | 10 000 Kč | 5 000 Kč | ano |
| Attribution | „Odhalte skutečný přínos marketingu“ (Shapley) | 25 000 Kč | 5 000 Kč | ano |
| Bot Detector | „Vyčistěte reporty od robotického trafficu“ | 5 000 Kč | 1 000 Kč (11 000 Kč/rok) | volitelně (nutný sGTM) |
| **Celý stack** | | **70 000 Kč** | **18 700 Kč** | |

Doprovodné cenové body ze stejného zdroje:
- **Hodinová sazba Signals: 2 500 Kč/hod** („Individuální vývoj“, Dance) – nová horní hranice CZ pásma (EG2-004).
- **Zprovoznění server-side GTM: 15–20 000 Kč jednorázově** (uvedeno u Bot Detectoru, EG2-008).
- **Provoz BigQuery: „typicky do 500 Kč/měs.“** (Dance FAQ) a „v řádu stovek korun měsíčně“ (služby FAQ) – EG2-004, EG2-010.

Doslovné citáty, které jsou pro pozicování DataLayer.cz nejdůležitější:

> „Tiché výpadky v e-commerce vás stojí tržby… **Pokles návštěvnosti a konverzí:** Nefunkční košík nebo
> **rozbité měření** zjistíte z reportu až zpětně. Mezitím nepozorovaně přicházíte o desítky dokončených
> objednávek.“ — Signals Bar (EG2-034)

> „**Falešné poplachy a notifikační šum.** Běžné nástroje vás zahltí stovkami zbytečných upozornění, které
> časem začnete ignorovat. V záplavě spamu snadno přehlédnete kritickou chybu.“ — Signals Bar (EG2-035)

> „**Jednorázový filtr vyhoří za pár týdnů**, roboti neustále mění pravidla hry… U typického e-shopu tvoří
> roboti okolo 30 % návštěv a Google Analytics je počítá jako lidi.“ — Bot Detector (EG2-008)

> „Máme nasazené měření, ale data se nám nezdají, co s tím? To je častý problém. Začneme auditem… Pak
> opravíme, co je potřeba, a **nastavíme monitoring kvality dat**.“ — Signals, Sběr dat FAQ (EG2-011)

> „Potřebujeme vlastní datový tým? Ne nutně. Můžeme fungovat jako váš externí datový tým – postavíme
> infrastrukturu, nastavíme procesy a **zajistíme ongoing správu**.“ — Signals, Zpracování dat FAQ (EG2-010)

### 2.4 Noví CZ hráči, které 1. kolo minulo

| # | Subjekt | Typ | Název služby doslova | Model | Cena | Kódy aktivit | requires_bq | Evidence |
|---|---|---|---|---|---|---|---|---|
| 1 | Lukáš Štěpánek | freelancer | „Dlouhodobá správa kampaní a analytiky“ | retainer | **od 10 000 Kč/měs**; projekty 15–40 tis.; min. 3 měsíce | A2,C1,D1,D4,F3,H3 | ne | EG2-025 |
| 2 | Growtix | performance agentura | „Fee se odvíjí od rozsahu kanálů“ | retainer | **35 000–100 000 Kč/měs**, fixní cena na 3 měsíce | A5,C1,D1,D4,E5,F1,F3,F4,H5 | volitelně | EG2-028 |
| 3 | Vladimír Přichystal | freelancer (Shoptet Gold) | „správa inzerce“ | retainer + hodinově | **od 3 000 Kč/měs**; 2 500 Kč/h | C1,D1,D4,F3 | neuvedeno | EG2-021 |
| 4 | Radim Hasalík | freelancer | ceníkový benchmark, ne služba | jednorázově | měření 2,5–19 tis. jednorázově; BQ od 10 tis. | A2,C1,I1 | volitelně | EG2-015 |
| 5 | Jiří Kolář | freelancer | „správa analytických nástrojů, tak aby stále správně měřily“ | hodinově | 1 200 Kč/h | A2,C1,F1 | ne | EG2-016 |
| 6 | VISIBILITY | performance agentura | „Audit datové kvality“ | hodinově / projektově | 1 400 Kč/h | A1,A2,B1,C1,D1,F1 | ne | EG2-020, EG2-026 |
| 7 | Fordigy | analytická agentura | „Kompletní nastavení webové analytiky“ | „Měsíční rozpočet“ v poptávce | neuvedeno | A2,C1,E5,F1,I1 | volitelně | EG2-027 |
| 8 | Daata.cz | cloud/data firma | „GCP Managed Services – Provoz GCP infrastruktury, monitoring a support“ | individuálně | neuvedeno | E1,E2,E3,G6 | ano | EG2-030 |
| 9 | Ladislav Vitouš | freelancer | „Průběžná správa, testování a mikroupdaty“ | individuálně | neuvedeno | C1,D1,D4,F3,H3,H5 | ne | EG2-031 |
| 10 | Data Sailor | SaaS (CZ) | „Analytika pro český e-shop“ | tiered | 995 / 2 490 / 5 990 / od 9 990 Kč/měs | F1,F3,I1 | ne | EG2-012 |
| 11 | Shopstato | SaaS (CZ) | dashboard objednávek, ziskovosti, retence | tiered | 0 / 875 / 2 875 Kč/měs | F1 | ne | EG2-013 |
| 12 | Trackless | SaaS (CZ) | „cookieless analytika pro e-shopy“ | tiered | 25–742 Kč/měs (roční platba) | – (náhrada GA4) | ne | EG2-014 |
| 13 | Radek Hudák | freelancer (Shoptet Gold) | specialista na analytiku | hodinově | 2 400 Kč/h | – | neuvedeno | EG2-020 |
| 14 | Jiří Mařík | freelancer (Shoptet Bronze) | specialista na analytiku | hodinově | 2 000 Kč/h | – | neuvedeno | EG2-020 |
| 15 | Solvika | freelancer (Shoptet Bronze) | specialista na analytiku | hodinově | 1 150 Kč/h | – | neuvedeno | EG2-020 |
| 16 | Besteto, Retino, 6clickz | agentury (Shoptet Gold) | v katalogu Analytika, sazbu neuvádějí | – | – | – | – | EG2-020 |
| 17 | František Rajtmajer / Na základě dat | freelancer | „PPC specialista s přesahem do webové analytiky“ | – | vzdělávací web, služba nenaceněna | – | ne | – |

### 2.5 Hodinové sazby – katalog Shoptet Partneři, kategorie Analytika (jeden strukturovaný zdroj)

| Subjekt | Tier | Sazba | Hodnocení |
|---|---|---|---|
| Vladimír Přichystal | Gold | 2 500 Kč/h | 16 |
| Radek Hudák | Gold | 2 400 Kč/h | 8 |
| Zbyněk Hyrák | Gold | 2 000 Kč/h | 55 |
| Michal Blažek | Silver | 2 000 Kč/h | 2 |
| Jiří Mařík | Bronze | 2 000 Kč/h | 4 |
| VISIBILITY | Gold | 1 400 Kč/h | – |
| Solvika | Bronze | 1 150 Kč/h | 15 |
| (mimo katalog) Signals | – | 2 500 Kč/h | – |
| (mimo katalog) Jiří Kolář | – | 1 200 Kč/h | – |

**Rozpětí 1 150–2 500 Kč/h, medián 2 000 Kč/h** (9 veřejných sazeb).
Kategorie má navíc **53 poptávek**; první z nich zní: *„hledám zkušeného PPC specialistu, ideálně
freelancera, nejprve na jednorázovou kontrolu a oprava měření e-shopu TopTuje.cz“* (EG2-022).

### 2.6 Cenový žebřík českého e-shopu za data (měsíčně, bez DPH)

| Kč/měs | Co za to | Zdroj |
|---|---|---|
| 25–742 | Trackless – vlastní analytika místo GA4 | EG2-014 |
| 500 | provoz BigQuery u typického e-shopu | EG2-004 |
| 725–9 975 | Waaila – monitoring kvality dat (nástroj) | EG2-001 |
| 800–3 000 | Advisio DataPlus – sGTM produkt (1. kolo) | E2-018 |
| 875–2 875 | Shopstato – dashboard e-shopu | EG2-013 |
| 995–9 990 | Data Sailor – dashboard e-shopu + AI insights | EG2-012 |
| 1 000 | Signals Bot Detector | EG2-008 |
| 2 500 | Signals Bar / Dance / Game (každý) | EG2-003–005 |
| 3 000 | Přichystal – správa inzerce (≈ 1,2 h práce) | EG2-021 |
| 3 500–15 000 | Waaila premium support = 2–10 h člověka | EG2-002 |
| 5 000 | Signals Bingo / Attribution (každý) | EG2-006, EG2-007 |
| **10 000** | Štěpánek – dlouhodobá správa kampaní a analytiky | EG2-025 |
| **18 700** | celý produktový stack Signals (bez člověka) | EG2-009 |
| 9 250 / 18 500 | RobertNemec – měsíční práce na webové analytice (1. kolo) | E2-009 |
| 8–30 tis. | běžná agenturní správa PPC | EG2-015 |
| 10–40 tis. | pravidelná SEO práce | EG2-015 |
| 26 000+ | Ráš – dlouhodobá spolupráce ≥ 2 MD | E2-010 |
| **35–100 tis.** | Growtix – celé výkonnostní fee | EG2-028 |

---

## 3. INTERPRETACE

### 3.1 Co to mění na cenových pásmech

**Navržené tiery 8 900 / 19 900 / 39 000 Kč obstály, ale mění se jejich obhajoba.**

- **8 900 Kč.** Nový veřejný bod „od 10 000 Kč měsíčně“ (Štěpánek, EG2-025) leží těsně nad ním, stejně
  jako Němec „od 9 250“. Tier je tedy **pod nejnižším CZ retainerem, který analytiku obsahuje** – to je
  obhajitelné jako vstupní cena, ne jako podbízení. Zároveň ale nově víme, že za srovnatelné peníze
  koupí klient **Data Sailor Agency (9 990 Kč) nebo Waaila Pro (9 975 Kč)** – tedy nástroj, ne člověka.
  Argument tieru musí být explicitně „a k tomu člověk, který na alerty reaguje“, jinak vypadá předražený.
- **19 900 Kč.** Nový referenční bod: **celý produktový stack Signals = 18 700 Kč/měs**. To je téměř
  přesně druhý tier. Znamená to, že 19 900 Kč je v CZ kontextu částka, za kterou klient dnes koupí
  šest produktů bez jediné hodiny lidské práce. Tier proto musí být postaven na tom, co ani jeden z těch
  šesti produktů neumí: QA po releasu webu (A1), consent (B1), změny v GTM a changelog (A3), koordinace
  s vývojáři (H1) a reakční doba. Naopak Waaila ukazuje férovou cenu za lidský add-on:
  **6 h = 9 750 Kč, 10 h = 15 000 Kč** – 19 900 Kč tedy odpovídá zhruba 10–13 h měsíčně, což sedí.
- **39 000 Kč.** Kotva se posílila. Growtix veřejně účtuje 35–100 tis. Kč/měs za výkonnostní retainer
  (EG2-028), SEO paušál běžně 10–40 tis. (EG2-015), Ráš ≥ 26 tis. Číslo 39 000 Kč je v tomto poli běžného
  řádu, ne výjimka. **Ale**: klient si za 18 700 Kč koupí celý Signals stack a zbylých ~20 000 Kč musí být
  obhájeno člověkem. Doporučení: horní tier prodávat jako „datový tým na částečný úvazek“, ne jako
  „dražší monitoring“.
- **Hodinová osa.** Pásmo z 1. kola (1 150–2 400 Kč/h) se potvrdilo na novém, strukturovaném zdroji
  (Shoptet Partneři, 9 sazeb, medián 2 000 Kč/h) a horní hranice se posunula na **2 500 Kč/h**
  (Přichystal, Signals). Waaila navíc dává mezinárodní kontrolu: 60–70 EUR/h = 1 500–1 750 Kč/h.
  Odvození retaineru z hodin je tedy nadále platné, jen se počítá spíš 2 000 než 1 500 Kč/h.
- **Nová levná past.** Přichystal prodává „správu“ od 3 000 Kč/měs při sazbě 2 500 Kč/h – to je 1,2 h
  měsíčně. Užitečný argument do prodeje: **pod ~7 000 Kč/měs se v CZ nedá koupit nic, co by měření reálně
  hlídalo**, protože to nevyjde na hodiny.

### 3.2 Co to mění na hypotézách

**H1 (správa má smysl hlavně nad BigQuery) – dále oslabena, ale jinak, než čekalo 1. kolo.**
Nový důkaz otáčí obvyklou námitku: BigQuery **není nákladová bariéra**. Dva nezávislé české zdroje
uvádějí provoz BQ „typicky do 500 Kč/měs.“ a „v řádu stovek korun měsíčně“ (EG2-004, EG2-010).
Zároveň **všech šest produktů Signals BigQuery vyžaduje** a jsou naceněny od 1 000 Kč/měs – tedy
BQ-first nabídka na CZ trhu existuje a je levná. Z toho plyne posun: BigQuery není luxus pro velké,
je to **standardní infrastruktura za stokoruny, kterou ale nikdo neudržuje**. Vyšší tier se proto neobhajuje
„protože BQ je drahé“, ale „protože BQ je další věc, která se tiše rozbije, a nikdo to nehlídá“.
Dvouúrovňový model z 1. kola zůstává; jeho hranice ale není cena infrastruktury, nýbrž kompetence.

**H2 (pain = data se tiše rozbila) – potvrzena obsahově, ale závěr o exkluzivitě sdělení je vyvrácen.**
1. kolo tvrdilo: *„Nikdo z české konkurence to jako sdělení nepoužívá.“* **To už neplatí.** Signals Bar
má celou sekci nazvanou „Tiché výpadky v e-commerce vás stojí tržby“ a doslova zmiňuje „rozbité měření“,
zpoždění („až zpětně“) i kvantifikaci („desítky dokončených objednávek“) – EG2-034. Bot Detector přidává
druhý pilíř argumentace, „jednorázový filtr vyhoří za pár týdnů“ (EG2-008). Praktický dopad:
- **Sdělení „měření se tiše rozbilo“ už není v ČR volné pole.** Je obsazené produktem za 2 500 Kč/měs.
- Volné pole je o krok dál: **co se stane po alertu**. Signals sám pojmenovává alert fatigue (EG2-035),
  ale řeší ji pravidly v nástroji. Nikdo neslibuje člověka, který alert vytřídí, chybu opraví a řekne,
  kolik konverzí chybělo. **Diferenciátor se posouvá z G1–G6 na G7.**
- Druhé volné pole: Signals hlídá reklamní účty, sklad a návštěvnost **nad daty v GCP**. Nehlídá
  QA po releasu, consent mode, změny v GTM ani konzistenci konverzí v Ads/Meta/Sklik. To zůstává prázdné.

**H3 (bez veřejného ceníku; 1 200–2 500 Kč/h; 5–20 h) – potvrzena a zpřesněna.**
Veřejných měsíčních cen za správu, která obsahuje analytiku, je nyní v CZ **7** (Khoder 2 500,
Přichystal 3 000, Němec 9 250/18 500, Štěpánek 10 000, Ráš 26 000+, Growtix 35–100 tis.) – oproti 4
v 1. kole. Ani jedna z nich ale **nepojmenovává správu měření jako samostatný produkt**; vždy je to
příloha ke správě kampaní. Nejsilnější nový důkaz je negativní: Hasalíkův ceníkový benchmark uvádí
měsíční paušál u čtyř kategorií a u měření nikoli (EG2-015). Pozice zůstává prázdná.

**H5 (část hodnoty nahrazuje SaaS) – silně potvrzena a nově vyčíslena.**
1. kolo mělo jen názvy produktů. Teď máme **strop nástroje: 18 700 Kč/měs za celý Signals stack**,
resp. 9 975 Kč za nejvyšší tier Waaila. Zásadní zjištění: Waaila prodává lidské hodiny jako add-on
k nástroji (EG2-002) a Signals Bingo (5 000 Kč/měs) explicitně nahrazuje ad-hoc dotazy na analytika
(„Konečně si můžete dovolit analytika“, EG2-006) – tedy aktivitu H3 z taxonomie. Substituce je reálná
a postupuje. Lidská služba proto musí stát na aktivitách, které nástroj nedělá: **A1 (QA po releasu),
B1 (consent), A3 (changelog), H1 (koordinace s vývojáři), G7 (reakce na alert) a reakční doba.**

### 3.3 Praktické důsledky pro nabídku DataLayer.cz

1. **Přestat pojmenovávat produkt slovem „monitoring“ definitivně.** Signals Bar je „inteligentní
   monitoring a alerting“ za 2 500 Kč/měs. Cokoli, co se v ČR jmenuje monitoring, má teď kotvu 2 500 Kč.
2. **V ceníku uvést, kolik hodin člověka je v tieru** – protože Waaila veřejně ukazuje, že 6 h stojí
   9 750 Kč a 10 h 15 000 Kč. Klient si to spočítá; lepší to říct první.
3. **Explicitně srovnat s produktovou alternativou.** Věta typu „celý produktový stack Signals stojí
   18 700 Kč měsíčně a nikdo v něm nezkontroluje váš release“ je fér, doložitelná a nikdo ji dnes neříká.
4. **Vzít si od konkurence formulaci „jednorázově nestačí“** (Bot Detector, EG2-008) – je to nejlepší
   nalezená česká věta pro obhajobu paušálu proti jednorázovému auditu, a poptávky na Shoptet Partnerech
   ukazují, že klient přirozeně poptává jednorázovku (EG2-022).
5. **Kanál, který 1. kolo neznalo:** katalog Shoptet Partneři má kategorii Analytika s 11 subjekty
   a 53 poptávkami. Je to jediné nalezené místo v ČR, kde poptávka na měření vzniká strukturovaně.

---

## 4. Mezery, které zůstávají

- **Roivenue** – veřejná cena nedohledatelná (Cloudflare challenge na `/pricing/`, prázdný `r.jina.ai`,
  WebFetch bez obsahu). Zbývá mystery shopping nebo demo.
- **Datacop** – produkt se nepodařilo ztotožnit s žádnou existující doménou (ověřeno 5 variant).
  Možná chyba v původním seznamu; ověřit s klientem, odkud jméno pochází.
- **Mergado a Dotidot** – ceníky renderované klientsky (Alpine.js) resp. HTTP 525; jediný cenový bod
  pro Mergado je nepřímý (Hasalík, „od 229 Kč měsíčně“). Oba jsou pro kategorii okrajové.
- **eHlídač.cz** – DNS ENOTFOUND; nešlo ověřit, zda ještě existuje. Šlo by o jediný nalezený CZ produkt
  na hlídání funkčnosti poptávkových formulářů (blízko G4).
- **Shoptet Partneři, strana 2+ kategorie Analytika** – paginace vrací 404 na `/page/2/`; nezjištěno,
  kolik subjektů kategorie má celkem a jaké mají sazby.
- **Skutečný rozsah dodávky u nových subjektů „na dotaz“** (Fordigy, Daata, Vitouš, Digital Vision,
  MeasureDesign) – žádný z nich nezveřejňuje hodiny, SLA ani obsah měsíční práce. Mystery shopping trvá.
- **53 poptávek v kategorii Analytika na Shoptet Partnerech** – prošly jen první 4; systematické
  pročtení všech by dalo největší dostupný CZ vzorek reálné poptávky (a rozpočtů, pokud je uvádějí).
- **Ceny Besteto, Retino, 6clickz** – v katalogu jsou bez sazby, profily neprocházeny.
- **Advisio DataPlus, Digitální architekti** – nebyly předmětem tohoto doplnění (ověřuje je jiný agent).
