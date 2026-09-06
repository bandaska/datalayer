# K02 – Veřejné zakázky: NEN, Věstník VZ, TenderArena, TED

Třetí kolo, priorita B1 (část „zadávací dokumentace“). Datum přístupu všech zdrojů: **2026-09-06**.
Data: `strategie/data/fragments/r3-k02-pricing.csv` (19 řádků, `PK2-001`–`PK2-019`),
`strategie/data/fragments/r3-k02-evidence.csv` (20 řádků, `EK2-001`–`EK2-020`, `phase=12`).

---

## 1. Shrnutí

1. **Odpověď na hlavní otázku:** zadávací dokumentace veřejných zakázek potvrzuje, že kontinuální správa
   měření je reálně nakupovaná činnost s popsaným rozsahem i SLA – ale téměř nikdy jako samostatná zakázka:
   v celém českém korpusu je **jedna** zakázka, jejímž předmětem je průběžná analytika návštěvnosti
   (CzechTrade, 1 996 800 Kč), zatímco v EU se „managed digital analytics“ soutěží samostatně jen
   u zadavatelů řádu EU institucí, energetik a veřejnoprávních médií.
2. **Nová tvrdá česká cena, kterou dosud dataset neměl:** vysoutěžená hodinová sazba **990 Kč bez DPH**
   za technickou správu webu včetně měřicích kódů (GA, GTM, Clarity, Meta Pixel) a **790 Kč** za sociální
   sítě, strop 2 mil. Kč – MČ Brno-střed, podepsaná smlouva, ne ceník „od“ (`EK2-003`, `PK2-001`, `PK2-002`).
3. **Implikovaná hodinovka navržených tierů je 1 500–2 400 Kč**, tedy 1,5–2,4× nad tím, co český veřejný
   zadavatel v soutěži zaplatil za srovnatelnou technickou práci. To pásma neruší, ale mění, co se o nich
   smí tvrdit: rozdíl musí obhájit specializace a SLA, ne „tržní cena“.
4. **SLA s finanční sankcí je v ČR ve veřejném sektoru standard, ne diferenciátor.** Brno-střed: reakce
   do 1 h / oprava do 4 h u kritické vady, pokuta 1 000 Kč za každou započatou hodinu prodlení (`EK2-002`).
   SFŽP: oprava kritické vady do 4 h, dostupnost 99,5 %, kredit **1/10 měsíčního paušálu** za každou
   hodinu nedostupnosti (`EK2-013`).
5. **Hybridní cenový model, který 2. kolo doporučilo teprve otestovat, je ve veřejné zakázce běžný:**
   SFŽP kupuje „měsíční paušál za správu a webhosting + hodinová sazba za rozvoj“, účtováno po
   čtvrthodinách, strop rozvoje **350 h/rok** (`EK2-012`, `EK2-013`, `PK2-010`).
6. **Artefakty dodávky jsou smluvní povinnost.** Brno-střed: „Přílohou faktury musí být report prací
   (výkaz prací) (…) Bez reportu prací je faktura neplatná. Vzor reportu prací poskytne objednatel.“
   SFŽP: „v Google Analytics nastaveno automatické měsíční zasílání reportu o návštěvnosti webů na email
   zadavatele.“ Brno: povinná dokumentace všech změn (changelog). (`EK2-003`, `EK2-011`, `EK2-014`.)
7. **Evropský ekvivalent naší služby existuje a jmenuje se stejně:** Úřad pro publikace EU soutěží
   „Managed services: Digital analytics“ za **3 000 000 EUR na 48 měsíců** (62 500 EUR/měs), předchůdce
   z roku 2018 se jmenoval doslova **„Digital Analytics and Website Monitoring“** za 2 400 000 EUR
   (`EK2-004`, `EK2-005`).
8. **Nejlepší doklad o obsahu služby přišel z Německa:** Stadtwerke Lübeck, „Rahmenvertrag digital
   analytics“ na 48 měsíců, kvalifikace požaduje reference na GA4, **údržbu tag-manageru objednávkových
   a formulářových tras**, certifikáty na **BigQuery se zaměřením na surová GA data**, GTM/JavaScript,
   dva lidi s GA IQ a pravidelné osobní schůzky (`EK2-007`). Vítěz ReachLab GmbH.
9. **Belgie ukazuje, jak vypadá cena, když se měření vyčlení do samostatné části:** Wit-Gele Kruis rozdělil
   rámcovou dohodu na 4 části a část „Analytics & Dashboarding“ dostala strop **300 000 EUR** proti
   2 000 000 EUR na webdesign+hosting+údržbu; vyhrál specializovaný dodavatel MULTIMINDS (`EK2-006`).
10. **NEN je z tohoto prostředí nedostupný** (TLS tunel zavřen protistranou, HTTP 000; nepomohl ani
    r.jina.ai ani veřejné CORS proxy). České zakázky proto pocházejí z agregátoru Hlídač státu
    a z přímo dostupných instancí E-ZAK; zakázky ČRo, ČEZ, Prahy a CzechTradu na NEN zůstaly neotevřené
    (`EK2-019`).

---

## 2. FAKTA

### 2.1 České zakázky s doloženým rozsahem (zadávací dokumentace otevřena)

| Zadavatel / zakázka | Cena | Rozsah a SLA (doslovně v evidence) | Kódy aktivit | Evidence |
|---|---|---|---|---|
| **MČ Brno-střed** – „Správa webových stránek, sociálních sítí a mobilní aplikace pro MČ Brno-střed“ (2026_02) | **990 Kč/h** (web), **790 Kč/h** (sítě), strop 2 mil. Kč | 3 weby WordPress; „měřicí kódy pro webovou analytiku (Google Analytics, MS Clarity, Meta Pixel)“, „Nastavení analytických nástrojů (Google Analytics, Tag Manager, MS clarity)“; SLA 1 h/4 h – 8 h/1 PD – 1 PD/2 PD; pokuta 1 000 Kč/h prodlení; měsíční fakturace proti povinnému výkazu prací | A1, A2, B1, C1, F1, G7, H5 | `EK2-001`, `EK2-002`, `EK2-003` |
| **SFŽP ČR** – „Vytvoření a správa integrovaného webu SFŽP ČR“ (4/2016) | 3 400 000 Kč / 48 měs. = **70 833 Kč/měs** (vč. stavby 6 webů) | Samostatná kap. 2.6 „Měření návštěvnosti a analytika webů“; SLA: kritická vada 4 h (po–pá 8–18), „Hustoblocker“ nonstop (~3 h/rok), nekritická další PD, reakce na nový požadavek 2 PD, dostupnost 99,5 %, kredit 1/10 paušálu/h; rozvoj max. **350 h/rok**; model paušál + hodinovka po čtvrthodinách; smlouva na 4 roky, výpověď 6 měsíců | A1, C1, C4, D5, F1, F3, G5, G7, H5 | `EK2-011`, `EK2-012`, `EK2-013` |
| **Statutární město Brno** – „Rámcová smlouva na údržbu a vývoj miniwebů – platforma Wordpress“ (P22V00000166) | strop 1 500 000 Kč, hodinová sazba doplňuje uchazeč | „Expertní služby“ na člověkohodiny; povinná „řádná a úplná dokumentace všech provedených změn“ + formální změnové řízení | A3, H2 | `EK2-014` |

Doslovné citace klíčových pasáží:

> „Poskytovatel je povinen dodržet všechny záležitosti týkající se GDPR, včetně "cookies dialogu"
> a **měřících kódů pro webovou analytiku (Google Analytics, MS Clarity, Meta Pixel)** v souladu s platnou
> legislativou. (…) Nastavení analytických nástrojů (Google Analytics, Tag Manager, MS clarity).“
> — Brno-střed, Příloha č. 1 ZD (`EK2-001`)

> „Za webové stránky Hodinová cena činí: **990 Kč bez DPH** (…) Za správu sociálních sítí Hodinová cena
> činí **790 Kč bez DPH** (…) Přílohou faktury musí být report prací (výkaz prací) (…)
> **Bez reportu prací je faktura neplatná. Vzor reportu prací poskytne objednatel.**“
> — Brno-střed, Smlouva o poskytování služeb, správě a rozvoji digitálních kanálů (`EK2-003`)

> „Kritická – web, aplikace (…) **Reakční doba do 1 hodiny, doba k odstranění do 4 hodin** (…)
> je Poskytovatel povinen zaplatit Objednateli smluvní pokutu ve výši **1.000 Kč za každou i započatou
> hodinu prodlení**.“ — tamtéž (`EK2-002`)

> „**2.6 Měření návštěvnosti a analytika webů.** Návštěvnost webu bude měřena a analyzována pomocí Google
> Analytics. Od dodavatele se očekává velmi dobrá znalost problematiky implementace měřicích kódů Google
> Analytics (…) bude pro každý web vytipováno a nastaveno měření vybraných konverzních akcí (…) Dále bude
> v Google Analytics nastaveno **automatické měsíční zasílání reportu o návštěvnosti webů na email
> zadavatele**.“ — SFŽP ČR, Příloha č. 1 ZD (`EK2-011`)

> „**Požadavky na rozvoj a/nebo vytvoření nové webové prezentace nepřesáhnou 350 hodin ročně.**“
> — SFŽP ČR, Příloha č. 1 ZD, kap. 6 (`EK2-012`)

> „**Měsíční paušál za správu a webhosting** (…) **Hodinová sazba za práce na rozvoji webů** (…) minimální
> účtovaná časová jednotka pro služby poskytované zhotovitelem je čtvrt člověkohodina. (…) smluvní pokutu
> ve výši **1/10 měsíčního paušálu** (…) za každou i započatou hodinu, po kterou nebude web dostupný.“
> — SFŽP ČR, Návrh smlouvy čl. 8 (`EK2-013`)

### 2.2 České zakázky se smluvní cenou, ale bez otevřené dokumentace

Ceny jsou z Hlídače veřejných zakázek; řádky **bez** předpony „odhad.cena“ znamenají smluvní, nikoli
předpokládanou hodnotu. Dobu plnění se u většiny nepodařilo z veřejného výpisu zjistit, proto u nich
`price_czk_month` zůstává prázdné.

| Zadavatel | Zakázka | Cena | Dodavatel | Řádek |
|---|---|---|---|---|
| HLAVNÍ MĚSTO PRAHA | Obsahový specialista, SEO a **webový analytik** pro portál praha.eu na roky 2025–2027 | 3 000 000 Kč / 36 měs. = **83 333 Kč/měs** | LinkSoft Technologies a.s. | `PK2-007` |
| Česká agentura na podporu obchodu | **Poskytování analytických a poradenských služeb v oblasti statistik návštěvnosti**, průzkumů uživatelů, optimalizace digitálního obsahu a online marketingových aktivit | 1 996 800 Kč | neuveden | `PK2-009` |
| Statutární město České Budějovice | Marketingová podpora turistického webu budejce.cz pro období 2026-2027 | 943 440 Kč / 24 měs. = **39 310 Kč/měs** | neuveden | `PK2-008` |
| SFŽP ČR | Správa a rozvoj integrovaného webu SFŽP ČR (Z2024-052101) | 12 752 300 Kč | Sherpas, s.r.o. + InQool, a.s. | `PK2-011` |
| Ministerstvo zahraničních věcí | Provozovatel webové prezentace MZV ČR (Z2026-017861) | 4 050 108 Kč | Etnetera Core a.s. | `PK2-014` |
| Dopravní podnik hl. m. Prahy | Podpora provozu a rozvoje webových stránek a Fanshopu | 2 398 400 Kč | PragueBest s.r.o. | `PK2-012` |
| Městská část Praha 6 | Vytvoření a správa webu Prahy 6 | 1 799 200 Kč | „FoxCom“, s.r.o. | `PK2-015` |
| Fakultní nemocnice Olomouc | Zabezpečení správy, aktualizace a rozvoj stávajícího webového řešení klienta | 1 194 000 Kč | ESMEDIA Interactive s.r.o. | `PK2-013` |
| Národní technická knihovna | Odborná podpora pro obnovu a rozvoj webového ekosystému NTK (One Stop Shop) | 5 987 097 Kč | neuveden | `PK2-016` |
| Česká agentura na podporu obchodu | Poskytování služeb – provoz a rozvoj portálu BusinessInfo.cz | 1 018 313 Kč | GEETIX s.r.o. | `PK2-017` |
| Česká agentura na podporu obchodu | Poskytování **redakčních** služeb pro portál BusinessInfo.cz (TED 17078-2025) | 33 132 480 Kč / 48 měs. = **690 260 Kč/měs** | CMI News s.r.o. | `PK2-018` |
| Český rozhlas | MR13_2026 / MR33_2025 – **Rozvoj a údržba platformy pro analytiku poslechovosti** v online produktech ČRo | nezveřejněna | – | `EK2-017` |

Poslední dva řádky patří k sobě: **týž portál** má obsahovou zakázku za 33,1 mil. Kč a technický provoz
za 1,0 mil. Kč. Poměr obsah : technika je zhruba **33 : 1**.

### 2.3 Evropské zakázky, kde je měření samostatný předmět

| Zadavatel | Zakázka | Hodnota / doba | Dodavatel | Řádek |
|---|---|---|---|---|
| European Commission, Publications Office (LU) | **Managed services: Digital analytics** | 3 000 000 EUR / 48 měs. = 62 500 EUR/měs = **1 562 500 Kč/měs** | MANAGING INNOVATION STRATEGIES SLL + SARENET SA | `PK2-003` |
| Publications Office of the EU (LU) | **AO 10734 Managed Service: Digital Analytics and Website Monitoring** (2018) | 2 400 000 EUR, doba nezjištěna | – | `PK2-019` |
| Wit-Gele Kruis van Vlaanderen (BE) | Rámcová dohoda, **část 4 „Analytics & Dashboarding websites“** | strop **300 000 EUR**; nabídková hodnota 190,00 (řádově hodinová sazba v EUR) | MULTIMINDS BV | `PK2-004` |
| tatáž dohoda, **část 2 „SEO“** (srovnání) | – | strop 350 000 EUR; nabídková hodnota 180,00 | WISEO BV | `PK2-005` |
| Stadtwerke Lübeck Gruppe (DE) | **Rahmenvertrag digital analytics** | 48 měsíců, hodnota nezveřejněna | ReachLab GmbH | `EK2-007` |
| Raidió Teilifís Éireann (IE) | 23P006 RTÉ Digital Analytics | 650 000 EUR, doba nezjištěna | – | `PK2-006` |
| Schweizerische Bundesbahnen (CH) | Digital Analytics Tool – integrace, školení, provoz (SaaS) | 1 825 dní (5 let), hodnota nezveřejněna | – | `EK2-010` |
| Veikkaus Oy (FI) | Digital Analytics Development konsultti – **dva techničtí web analytici** do interních týmů | hodnota nezveřejněna | – | `EK2-009` |

Doslovně:

> „The objective of the procurement procedure is to procure **managed services related to Digital
> analytics**. The contractor should be able to provide the entire set of managed services, namely:
> 1. Service management, 2. Project services, 3. Takeover, 4. Handover and 5. Other services.“
> — Úřad pro publikace EU, TED 150247-2025 (`EK2-004`)

> „Kapitel 1 – Strategische Beratung im Bereich Digital Analytics: Nachweis von Referenzen (…) unter der
> Verwendung von Google Analytics (…) Kapitel 3 – Tag-Management Systeme: Nachweis von Referenzen (…) der
> Tag-Manager-Integration sowie **Wartung von Bestell- bzw. Formularstrecken** (…) 16. Nachweise /
> Zertifikate für **Google Big Query insbesondere mit Fokus auf die Arbeit mit den Google Analytics
> Rohdaten** (…) 18. Nachweis über mindestens zwei Mitarbeitende mit **Google Analytics Zertifizierung
> IQ** 19. Bestätigung regelmäßiger Vor-Ort-Termine“ — Stadtwerke Lübeck, TED 271402-2024 (`EK2-007`)

> „De dienstverlener van dit perceel heeft een uitgebreide kennis van **web analytics (niet enkel Google
> Analytics), Tag managers en dashboarding-mogelijkheden**. (…) Hij kan zelf de nodige technische
> instellingen opzetten of weet hoe hij het webbureau hierover moet briefen.“
> — Wit-Gele Kruis, TED 535748-2024 (`EK2-006`)

### 2.4 Metodická poznámka ke CPV

Zadaným kódům 72316000 (analýza dat) a 72322000 (správa dat) odpovídá v korpusu jen RTÉ. Reálně se
zakázky na měření skrývají pod 72000000, 72400000, 72510000 (Úřad pro publikace EU), 72416000
(Stadtwerke Lübeck), 72415000 (Wit-Gele Kruis), 79340000 (marketingové zakázky) a v ČR pod
72222300 / 72210000 / 79340000. **Vyhledávání podle CPV kódů proto pro tuto kategorii nefunguje**;
funguje jen fulltext (TED `FT~`, Hlídač státu).

---

## 3. INTERPRETACE – co to mění na závěrech verze 2

### 3.1 Na pásmech 8 900 / 19 900 / 39 000 Kč

**Pásma se nemění, ale poprvé mají českou kotvu ceny práce, a ta je pod nimi.**

- **Implikovaná hodinovka DataLayer.cz** (cena ÷ odhad hodin z verze 2): tier 1 = 1 483–2 225 Kč/h,
  tier 2 = 1 531–2 211 Kč/h, tier 3 = 1 696–2 438 Kč/h.
- **Vysoutěžená česká sazba za technickou správu webu včetně měřicích kódů: 990 Kč/h bez DPH**
  (`PK2-001`). Za správu sociálních sítí 790 Kč/h. Tj. navržené tiery odpovídají **1,5–2,5násobku**
  toho, co v roce 2026 zaplatil český veřejný zadavatel v otevřené soutěži.
- Zmírňující okolnosti, které je nutné uvést spolu s tím: veřejná soutěž tlačí cenu dolů; Brno-střed
  kupuje správu WordPressu, ne specializovanou práci nad GA4/BigQuery; a sazba je hodinová bez
  pohotovosti a bez monitoringu. **Neplyne z toho, že tiery jsou drahé – plyne z toho, že tvrzení
  „to je běžná tržní cena“ přestává být obhajitelné a musí ho nahradit tvrzení „platíte za specializaci,
  reakční dobu a hlídání, ne za člověkohodinu.“**
- **Tier 1 (8 900 Kč)** je nově v podivné pozici: odpovídá zhruba **9 hodinám** sazby z Brna-středu.
  Argument „to je jen 9 hodin práce měsíčně za hlídání celého měření“ je pro klienta srozumitelnější
  než srovnání se Signals Bar za 2 500 Kč.
- **Tier 2 (19 900 Kč)** zůstává nejlépe podepřený. Nová podpora: 39 310 Kč/měs za marketingovou podporu
  jednoho turistického webu (České Budějovice, `PK2-008`) a 83 333 Kč/měs za balík tří rolí včetně
  webového analytika (Praha, `PK2-007`) ukazují, že český veřejný zadavatel platí za srovnatelně
  velkou průběžnou službu v řádu desítek tisíc korun měsíčně.
- **Tier 3 (39 000 Kč) dostává první oporu shora, ne zdola.** Verze 2 psala, že tier 3 nemá tržní oporu
  (dva evropské body, rozptyl 4×). Nově: samostatně souteženou správu měření kupují Úřad pro publikace EU
  (1 562 500 Kč/měs), Wit-Gele Kruis (strop části 300 000 EUR) a Stadtwerke Lübeck (48měsíční rámec).
  **Kategorie „samostatně placená správa měření s BigQuery“ prokazatelně existuje a její veřejné ceny
  jsou o řád vyšší než 39 000 Kč** – jen u zadavatelů o několik řádů větších než e-shop za 100 mil.
  39 000 Kč tedy není strop kategorie, ale její spodní hrana. To je pro tier 3 lepší zpráva než verze 2
  připouštěla, ale **domácí středně velkou kotvu to stále nedodává.**
- **Nová položka do ceníku, kterou verze 2 nemá: SLA kredit.** Oba otevřené české kontrakty mají sankci
  navázanou na reakční dobu (1 000 Kč/h prodlení) nebo na paušál (1/10 měsíčního paušálu za hodinu
  nedostupnosti). Pokud DataLayer.cz publikuje reakční dobu bez jakéhokoli kreditu, bude vedle toho,
  co zadavatel zná ze správy webu, vypadat slabě. Zároveň to zpřesňuje mezeru C4: **kredit z paušálu je
  v ČR zavedená a smluvně přijímaná forma**, není třeba vymýšlet odpovědnost za škodu.

### 3.2 Na otevřené otázce, jestli poptávka existuje

**Odpověď je „ano, ale ne v té podobě, ve které ji chceme prodávat“ – a to je silnější zjištění než
další ne.**

- V českém korpusu veřejných zakázek (Hlídač státu indexuje NEN i Věstník včetně popisů a ZD) je
  **jediná** zakázka, jejímž předmětem je průběžná analytická služba nad statistikami návštěvnosti:
  CzechTrade, 1 996 800 Kč (`EK2-016`). Ke stejnému výsledku vede fulltext „webová analytika“,
  „Google Analytics“, „Google Tag Manager“, „měření návštěvnosti“, „webový analytik“ i „měřicí kódy“:
  ve všech ostatních případech je měření **řádkem uvnitř** zakázky na web, online marketing nebo
  ICT role.
- Tím se **potvrzuje protievidence z 2. kola z nezávislého zdroje**: 0 z 53 poptávek na Shoptet
  Partnerech, „not something you can sell on a retainer“ z USA a nyní 1 z celého českého korpusu
  veřejných zakázek. Tři nezávislé zdroje, stejný směr.
- Ale současně platí opak pro velké zadavatele: jakmile je organizace dost velká, měření **se vyčleňuje**
  – EU (3 mil. EUR / 48 měs.), Belgie (samostatná část za 300 tis. EUR, vítěz specializovaná analytická
  agentura), Německo (48měsíční rámec s požadavkem na BigQuery a GA IQ), Irsko (opakovaná zakázka),
  Finsko (dva web analytici jako externí kapacita). **Hranice mezi „koupí to v balíku“ a „koupí to zvlášť“
  neleží v zemi ani v oboru, ale ve velikosti zadavatele a v tom, jestli má vlastní webový tým.**
- Praktický důsledek pro pořadí validace z verze 2: **white-label pilot s agenturou dostává další oporu**
  – přesně takhle měření nakupuje český veřejný sektor (jako roli nebo řádek u dodavatele webu).
  Naopak přímý prodej „samostatné správy měření“ středně velkému e-shopu nemá v tomto kole jedinou
  oporu. Zvažte třetí testovanou variantu: **měření jako pojmenovaná role v paušálu dodavatele webu**
  (po vzoru Prahy: „obsahový specialista, SEO a webový analytik“).
- **Argument, proč se samostatná správa měření prodává těžko, je nově vyčíslený:** u portálu
  BusinessInfo.cz stojí obsah 690 260 Kč/měs a technický provoz 1 018 313 Kč za celou zakázku
  (`PK2-017`, `PK2-018`). V rozpočtu zadavatele je technická vrstva o řád menší položka než obsah –
  a měření je zlomek technické vrstvy. Nikoli proto, že by na něm nezáleželo, ale proto, že se do
  rozpočtu vejde jako podpoložka, kterou nikdo nesoutěží zvlášť.

### 3.3 Na dodávce a artefaktech

Verze 2 uvádí changelog, měsíční komentář a kvartální audit jako „diferenciátory zdarma, které nikdo
v ČR nemá“. Ve veřejné zakázce jsou to **smluvní povinnosti**:

- výkaz prací jako podmínka platnosti faktury a **vzor výkazu dodává objednatel** (Brno-střed);
- automatický měsíční report o návštěvnosti na e-mail (SFŽP);
- řádná a úplná dokumentace všech změn + formální změnové řízení (Brno).

Pro nabídku to znamená dvě věci: (a) tyto artefakty nejsou převaha, ale vstupenka; (b) existuje
prokazatelná ochota zadavatele **předepsat formát výstupu** – tedy publikovat vlastní vzor reportu je
bezpečné a očekávané, ne prozrazování know-how.

Nová kvantifikace hodin do mezery A3: SFŽP stropuje rozvoj na **350 h/rok ≈ 29 h/měs** pro šest webových
prezentací včetně programátorských prací. Odhad verze 2 (4–6 / 9–13 / 16–23 h) tedy není nereálný.

---

## 4. MEZERY, které zůstávají

1. **NEN (nen.nipez.cz) a ISVZ (isvz.nipez.cz) jsou z tohoto prostředí nedostupné** – spojení resetováno
   na úrovni proxy (HTTP 000, „Recv failure: Connection reset by peer“, tunel zavřen po ~12 s).
   Nepomohl prohlížečový user-agent, `r.jina.ai` (TimeoutError) ani veřejné CORS proxy. Kvůli tomu
   zůstaly neotevřené zadávací dokumentace zakázek Českého rozhlasu (analytika poslechovosti), ČEZ
   (správa výkonnostního online marketingu), Prahy (praha.eu) a CzechTradu (analytické služby) –
   tedy právě těch nejrelevantnějších. **Doporučení pro další kolo: zkusit NEN z jiné sítě, nebo
   Wayback Machine na konkrétní `nen.nipez.cz/detail-zakazky/...` URL.**
2. **Věstník VZ (vvz.nipez.cz) nemá veřejné vyhledávací API** – frontend i vyhledávací aplikace
   `cdz.vvz.nipez.cz` jsou SPA, endpointy `/api/submissions/search` vracejí HTML shell. Nepodařilo se
   z něj vytěžit strukturovaná data; nahrazeno Hlídačem státu.
3. **Doba plnění chybí u 9 z 13 českých zakázek**, takže z jejich smluvních cen nelze spočítat měsíční
   cenu. Bez toho jsou to celkové částky, ne cenové body srovnatelné s tiery.
4. **Předpoklad o významu ceny v Hlídači** (řádek bez předpony „odhad.cena“ = smluvní hodnota) nebyl
   ověřen v dokumentaci Hlídače. Než se čísla z § 2.2 použijí v prezentaci, je třeba to ověřit
   u jednoho případu proti primárnímu zdroji.
5. **Žádná nalezená zakázka neceníkuje samotnou správu měření zvlášť v české měně.** CzechTrade se
   předmětem blíží nejvíc, ale rozsah ani doba nejsou veřejně dostupné (profil na NEN).
6. **Vzor reportu jako příloha ZD se nenašel.** Brno-střed vzor výslovně má („Vzor reportu prací poskytne
   objednatel“), ale mezi zveřejněnými soubory není – dodává se až vybranému dodavateli. **Jediný
   nalezený artefakt měření v ZD je požadavek na automatický měsíční GA report (SFŽP)**, bez ukázky.
7. **Fulltext v registru smluv přes `file_text` vrací HTTP 500** – přílohy smluv (kde by SLA a vzory
   výstupů byly) tímto kolem prohledat nešlo. Patří do zadání souběžného agenta pro registr smluv.
8. **Hodnota u Stadtwerke Lübeck a SBB nezveřejněna**, u Wit-Gele Kruis není v TED uvedena jednotka
   u nabídkové hodnoty 190,00 – interpretace „EUR/hodinu“ je pravděpodobná, ale neověřená.
9. **TenderArena je Angular SPA bez dostupného veřejného API**; z českých elektronických nástrojů byly
   dostupné jen instance E-ZAK `ezak.brno.cz`, `zakazky.brno-stred.cz`, `ezak.mzp.cz`, `ezak.rozhlas.cz`,
   `ezak.cnb.cz`, `ezak.kr-vysocina.cz`, `ezak.kr-karlovarsky.cz` a portál `vhodne-uverejneni.cz`.
   Systematický sken všech instancí E-ZAK nebyl proveden.
