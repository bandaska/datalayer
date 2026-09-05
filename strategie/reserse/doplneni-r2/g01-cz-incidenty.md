# Doplnění mezery G01 – české incidenty rozbitého měření a kvantifikace v Kč

Kolo 2, datum přístupu ke všem zdrojům: **2026-09-04**.
Data: `data/fragments/r2-g01-pain.csv` (36 výpovědí, `NG1-001`–`NG1-036`),
`data/fragments/r2-g01-evidence.csv` (43 zdrojů, `EG1-001`–`EG1-043`, `phase=11`).
Kódy `what_broke` a aktivit A1–I3 podle `reserse/00-taxonomie-sluzby.md`.

**Zadání:** 1. kolo mělo dvě pojmenované díry – (a) dotazy typu „rozbilo se měření“ na českém webu vůbec neproběhly
(došel rozpočet vyhledávače), (b) chyběla **jakákoli česká kvantifikace v Kč**. Tento report obě zaplňuje.

**Metodická poznámka – co se v 2. kole podařilo otevřít:**
- **Webtrh je dostupný.** 1. kolo ho označilo za nedostupný, protože `webtrh.cz/hledani/?q=` vrací 404.
  Fungují ale přímé cesty: `webtrh.cz/forum/webova-analytika/strana/N/` a `webtrh.cz/diskuse/<slug>/`.
  Prošlo se 10 stránek listingu (299 unikátních vláken), staženo a přečteno 49 vláken.
  → **20 z 36 nových výpovědí je z Webtrhu**, tedy z reálné diskuse českých e-shopařů a analytiků, ne z poptávek.
- **Shoptet Partneři – všech 53 poptávek** v kategorii Analytika staženo a přečteno celé (1. kolo mělo ~12).
- **Sklik / Zboží.cz** – 1. kolo hlásilo „žádná uživatelská výpověď o rozbitém měření Sklik konverzí“.
  Doplněno z oficiální nápovědy Seznamu, která sama vyjmenovává nejčastější selhání měření.
- Nefungovalo: LinkedIn (HTTP 999), Ecommerce Bridge – tělo článku se nenačte (WebFetch 403, curl vrátí jen upoutávky),
  DuckDuckGo HTML (blokováno). České FB skupiny zůstávají mimo dosah.
- Nový `source_type` v CSV: `vendor_doc` (dokumentace provozovatele platformy) – v 1. kole se nevyskytl.

---

## 1. Shrnutí

1. **Kvantifikace v Kč existuje, jen se neříká jako case study.** Našly se čtyři nezávislé české částky:
   **500 000 Kč vs. 90 000 Kč** (tržby z akvizičních kampaní v Google Ads vs. GA4 u jednoho e-shopu, `NG1-001`),
   **30 000 Kč** utracených naslepo, protože nikdo neměřil (`NG1-031`), **70 000 Kč a 18 000 Kč** neatribuovaných
   objednávek v affiliate měření Alzy (`NG1-018`) a **„několik tisíc“ Kč** proklikaných ze Zboží.cz za dvě hodiny
   bez jediné objednávky (`NG1-015`). K tomu řádová hrozba **50 000 Kč/měs** rozpočtu bez ověřeného měření (`NG1-032`).
2. **Nejsilnější jednotlivé číslo:** „*Pro příklad tržby v Google Ads jsou 500 000 Kč z akvizičních kampaní
   a z Google Analytics 90 000 Kč*“ (Webtrh, 24. 9. 2025, `EG1-001`). Rozdíl **410 000 Kč** za jedno období,
   příčina je banální – nerozlišené B2B a B2C objednávky v dataLayeru. Přesně typ nálezu, který dělá reconciliace.
3. **České pásmo odchylky GA4 vs. backend je 10–30 %** a shodují se na něm dva nezávislé zdroje:
   praktici na Webtrhu („*Záleží na oboru, setkávám se s 10-30%. Pokud je chybná implementace, tak to může být více*“,
   `EG1-013`) a e-commerce konzultant Khoder („*Rozdíl 10 až 30 procent je běžný*“, `EG1-032`).
   **To je použitelný práh pro denní reconciliaci: nad 30 % je to nález, ne šum.**
4. **Cookie lišta ukrojila v ČR měřená data zhruba dvojnásobně:** „*už před lištou se ztrácelo klidně 15% dat,
   teď už je to běžně 30%*“ (`EG1-004`). Jiný český zdroj uvádí pro browser pixel Mety ztrátu **20–40 %** (`EG1-031`).
5. **H2 se na českých datech potvrzuje bez výhrad.** Ve 36 výpovědích není ani jedna, kde by klient říkal
   „nemáme data“. Všechny říkají „*čísla nesedí / přestalo to měřit / nevíme proč*“ – a nikdo z nich se to nedozvěděl
   od nástroje. Zjištění přišlo z náhodného pohledu, z druhého zdroje čísel, nebo z vyčerpaného rozpočtu.
6. **Doba do odhalení v ČR: od 1 dne do 2 let.** Kdo má druhý nezávislý zdroj (Cloudflare, administrace e-shopu,
   FB Ads Manager), je na tom v řádu dnů (`NG1-007` 2 dny, `NG1-009` ~5 dní). Kdo ho nemá, zjistí to za měsíc
   (`NG1-031` – až podle vyčerpaného rozpočtu) nebo za dva roky (`NG1-020` – SK e-shop od 2021 s jedinou objednávkou).
7. **Rozbité měření na Zboží.cz má oficiálně popsanou nejčastější příčinu a je to GTM.** Seznam sám píše:
   „*Kdy měření nefunguje vůbec? Typicky když není nasazená backendová část kódu. Tato situace vzniká často
   při nasazení skriptu přes GTM šablonu, která obsahuje jen frontend*“ (`EG1-034`). V GTM to vypadá, že kód je.
8. **Seznam jako oficiální kontrolu doporučuje přesně reconciliaci:** „*Technická kontrola: porovnání objednávek
   s interním systémem*“ (`EG1-035`). Nikdo v ČR ji ale neprodává jako průběžnou službu – jen jako jednorázový audit.
9. **Poptávka po kontinuální správě měření na CZ trhu prakticky neexistuje jako pojmenovaná věc.**
   Ze všech 53 poptávek v kategorii Analytika na Shoptet Partneři (2020–2026): **0 poptávek žádá monitoring nebo
   alerting**, 1 zmiňuje BigQuery, 3 chtějí dlouhodobou spolupráci – a i ty ji formulují jako „pár hodin měsíčně“
   nebo „nejdřív audit, pak paušál“ (`EG1-030`).
10. **Nový veřejný CZ cenový bod (8/2026):** PPC agentura RDY/webpj – „*Správa PPC kampaní začíná od 10 000 Kč
    měsíčně bez DPH a zahrnuje Google Ads i Sklik, **nastavení měření konverzí přes GA4 a Tag Manager**,
    průběžnou optimalizaci, měsíční report a konzultaci. Bez dlouhodobého závazku*“; audit od **1 500 Kč/h** (`EG1-041`).

---

## 2. FAKTA

### 2.1 České a slovenské kvantifikace v Kč (hlavní mezera 1. kola)

| # | Částka | Co přesně | Kdo / kdy | Jak to zjistil | Evidence |
|---|---|---|---|---|---|
| 1 | **500 000 vs. 90 000 Kč** (rozdíl 410 tis.) | tržby z akvizičních kampaní v Google Ads vs. v GA4 u jednoho e-shopu | správce PrestaShop e-shopu, Webtrh, 24. 9. 2025 | ruční srovnání Ads vs. GA4 | `EG1-001` / `NG1-001` |
| 2 | **30 000 Kč** | utraceno v PPC bez jakéhokoli měření konverzí | česká PPC agentura cituje typický klientský výrok, 20. 8. 2026 | až podle vyčerpaného rozpočtu, ~1 měsíc | `EG1-038` / `NG1-031` |
| 3 | **70 000 Kč** + **18 000 Kč** | jednotlivé objednávky nepřipsané v affiliate měření Alzy | affiliate partner, Webtrh, 12/2024 | ruční kontrola u drahých objednávek | `EG1-019` / `NG1-018` |
| 4 | **„několik tisíc“ Kč** | ~4 000 prokliků ze Zboží.cz za 2 hodiny na jedné položce, 0 objednávek | e-shopař, Webtrh, 11/2022 | všiml si 4× vyšší návštěvnosti v GA | `EG1-016` / `NG1-015` |
| 5 | **50 000 Kč/měs** (ohrožený rozpočet) | „kampaň, která od prvního dne utrácí padesát tisíc měsíčně bez ověřeného měření“ | česká PPC agentura, 8/2026 | – (neexistuje kontrola, která by to zachytila) | `EG1-040` / `NG1-032` |

Doslova:

> „*Pro příklad tržby v Google Ads jsou 500 000 Kč z akvizičních kampaní a z Google Analytics 90 000 Kč.*“
> — Webtrh, Měření B2B a B2C Prestashop/Google Ads, 24. 9. 2025 (`EG1-001`)

> „*Reklama nám nefunguje, utratili jsme třicet tisíc a nic z toho nebylo.“ Tuhle větu slyší každý, kdo dělá PPC.
> A v naprosté většině případů nejde o to, že by reklama nefungovala — jen se nedalo poznat, co fungovalo a co ne,
> protože nikdo neměřil, kolik poptávek která kampaň přinesla.*“ — RDY.cz, 20. 8. 2026 (`EG1-038`)

> „*Už je to pár let, kdy mi nepřipsali affil za počítač za 70 tisíc. Včera nepřipsali objednávku za televizi
> za dost peněz a to samé vysavač Dyson. […] Žádný anonymní okno, žádný blokování, apod. ten člověk nepoužíval
> a samotné prokliky systém Alzy ukazuje.*“ — Webtrh, 6. 12. 2024 (`EG1-019`)

### 2.2 České procentní benchmarky (použitelné jako prahy pro alerty)

| Metrika | Hodnota | Zdroj | Evidence |
|---|---|---|---|
| Rozdíl GA4 vs. backend e-shopu (norma) | **10–30 %** | Khoder (e-commerce konzultant) | `EG1-032` |
| Podměření GA vůči administraci e-shopu | **10–30 %**, „při chybné implementaci více“ | analytik na Webtrhu | `EG1-013` |
| Ztráta dat po nasazení cookie lišty | z **~15 %** na **~30 %** | praktik na Webtrhu | `EG1-004` |
| Ztráta dat browser pixelu Mety (bez CAPI) | **20–40 %** | LK Media (CZ agentura) | `EG1-031` |
| Podíl uživatelů s adblockem u technického e-shopu | **20–30 %** | provozovatel e-shopu, Webtrh | `EG1-013` |
| FB prokliky vs. pageviews v GA | **232 vs. 67** (ztráta 71 %) | zadavatel FB reklamy, Webtrh | `EG1-003` |

> „*Stává se to úplně běžně, už před lištou se ztrácelo klidně 15% dat, teď už je to běžně 30%. Ta atribuce z FB
> je velmi špatná i co se týče přeposílání nákladů do GA. Takže bych byl opatrný se stavěním nějakých podstatných
> hypotéz jen z GA.*“ (`EG1-004`)

### 2.3 Katalog českých incidentů podle `what_broke` (36 výpovědí)

| Kód | N | Typická doba do odhalení (CZ/SK) | Doslovný citát (evidence) |
|---|---|---|---|
| `ad_platform_change` | 6 | dny až „opakovaně“ | „*Odpověděli, že o chybě ví a prý se jen nepočítají prokliky…každopádně si myslím, že ani prodeje.*“ (`EG1-020`) · „*Google mi opakovaně (již 3x) pozastavil Google Ads s odůvodněním „suspendovaný Merchant Center“, přestože tento účet již neexistuje.*“ (`NG1-025`) |
| `unknown_owner` | 6 | ~1 měsíc až neurčito | „*Google Analytics nám dává hrozné hodnocení webu.*“ (`EG1-042`) · „*z důvodů nedostatku času hledáme k dlouhodobé spolupráci partnera na pravidelnou správu e-shopu (pro začátek pár hodin měsíčně)*“ (`EG1-028`) |
| `revenue_mismatch` | 4 | průběžně / nikdy | „*já vidím objednávky v administraci eshopu, ale v GA […] tak nemám všechno. Jinými slovy, o kolik procent GA tak podměřuje.*“ (`EG1-012`) · „*Přenos zrušených objednávky do GA,GADS…analytika náklady mkt/výnosy*“ (`EG1-026`) |
| `ga4_change` | 4 | 1–2 dny | „*proč mi nové GA4 neukazují od včerejšího dnes uživatelé? […] a to se s kódem ani webem nic nedělalo. A nedělá mi to na jednom webu, ale na všech.*“ (`EG1-007`) · „*Dám poslední tři měsíce a ukazuje to např. v květnu 100 konverzí, nastavím pololetí a ukazuje to v květnu např. 90 konverzí, dám celý rok a ukazuje to v květnu 130 konverzí.*“ (`EG1-021`) |
| `consent_change` | 3 | v rámci kampaně | „*TÉMĚŘ veškerá návštěvnost spadá do zdroje „(direct) / (none)“ – Direct návštěvy to být určitě nemohou, většinu trafficu taháme z Facebooku a GLG ad.*“ → odpověď: „*Nejčastěji je problém v Cookies liště.*“ (`EG1-002`) |
| `utm_chaos` | 3 | měsíce | „*v Google Analytics dlhodbo pozorujeme pripisovanie transakcií platobnej bráne a to aj napriek tomu, že ju máme zaradenú v liste vylučujúcich zdrojov. Problém sme konzultovali aj s Google Supportom ale neúspešne.*“ (`EG1-005`) |
| `gtm_change_dev` | 3 | dokud někdo nezkontroluje | „*Viděl bych to na 2x nasazený stejny kód analytics na webu. […] Vidíš správně... děkuji moc Pavle*“ (`EG1-014`) · „*Typicky když není nasazená backendová část kódu. Tato situace vzniká často při nasazení skriptu přes GTM šablonu, která obsahuje jen frontend.*“ (`EG1-034`) |
| `platform_migration` | 3 | neurčito | „*je web na wixu […] měřící kódy jsou přes GTM a nezměří to nejen konverze, ale nezměří to ani polovinu návštěv*“ (`EG1-018`) · „*Aktuálne je tam problém s datalayerom, s ktorým nevieme, čo ďalej. Criteo podpora nám nevie poradiť…*“ (`EG1-024`) |
| `browser_change` | 2 | ~5 dní (s druhým zdrojem) | „*V sobotu 6.3. mi ale GA ukazují propad na cca 100 UIP a od té doby se nedostanu za den nad 300. […] Analytika od CloudFlare také neukazuje žádný drop, vše v normě*“ (`EG1-009`) |
| `access_lost` | 1 | – | „*Klientka zapomněla svoje přístupy do Google analytics […] Neví ani mailovou adresu ani heslo.*“ → „*Pokud nezná ani email, tak to už je prostě osud.*“ (`EG1-008`) |
| `bq_export_gap` | 1 | – | „*Aktuálně řešíme pravidelné nalívání dat ze Shoptetu do databáze (objednávky – cena, marže), poté FB reklamy […], Google Ads, Sklik.*“ (`EG1-029`) |

### 2.4 Jak Češi na rozbité měření přijdou (a jak dlouho jim to trvá)

| Způsob zjištění | Doba | Příklad |
|---|---|---|
| druhý nezávislý zdroj čísel (Cloudflare, FB Ads Manager, administrace e-shopu) | 1–5 dní | `NG1-009` (Cloudflare neukazuje propad), `NG1-003` (232 vs. 67) |
| chybová hláška / upozornění platformy | dny | `NG1-016` (GA nedostupné), `NG1-022` (Ads hlásí vypnuté enhanced conversions) |
| ruční reconciliace ID objednávek | průběžně, ale jen kdo to dělá | `NG1-012` |
| náhodný pohled do reportu / dotaz na fóru | neurčito | `NG1-013` (dvakrát nasazený GA kód), `NG1-019` (rozpor 90/100/130) |
| vyčerpaný rozpočet bez výsledku | ~1 měsíc | `NG1-031` |
| „e-shop nám neprodává“ | ~2 roky | `NG1-020` |

### 2.5 Zboží.cz a Sklik – co se rozbíjí (mezera 1. kola)

Seznam v nápovědě sám vyjmenovává selhání měření konverzí na Zboží.cz (`EG1-033`–`EG1-037`):

> „*Jaké jsou nejčastější chyby při měření? – Neplatné nebo chybějící orderId. – Odesílání pouze frontendové
> části kódu. – Odesílání pouze backendu. – Nesprávně řešený CONSENT. – Zákazník nedává souhlas nebo používá
> blokátory, což vede k menším odchylkám v naměřených počtech.*“

> „*Jak ověřit, že je měření funkční? Kontrola v administraci Centrum prodejce v sekci Měření konverzí, případně
> stažení chybového logu („Stáhnout podrobný záznam chyb“). **Technická kontrola: porovnání objednávek s interním
> systémem.***“

> „*Pokud e-mail není zasílán, není možné odesílat dotazníky a e-shop přichází o recenze.*“

K tomu Seznam publikuje **Cookieless Check list o 9 bodech** (`EG1-036`) s konkrétními požadavky na konverzní
a retargetingový kód – např. „*Konverzní kód spouštím i s consentem 0*“. Je to česká obdoba deadlinů Googlu,
kterou za klienta nikdo nesleduje.

### 2.6 Co ukázalo projití všech 53 poptávek Shoptet Partneři (kategorie Analytika, 2020–2026)

| Zjištění | Počet |
|---|---|
| poptávky žádající **monitoring / alerting / hlídání** měření | **0** |
| poptávky zmiňující **BigQuery** | 1 (`EG1-029`) |
| poptávky žádající **dlouhodobou / pravidelnou spolupráci** | 3 (`EG1-027`, `EG1-028`, + PPC paušál `EG1-022`) |
| poptávky, kde je kontrola měření **součástí PPC auditu**, ne samostatná služba | 4 |
| zbytek | jednorázové nastavení, oprava, propojení, feedy, školení |

Nejnovější poptávka (4. 9. 2026) přesně kopíruje nákupní cestu popsanou v závěrech 1. kola:

> „*Google Ads již delší dobu běží a účet má historii, ale aktuálně přestalo správně fungovat měření konverzí. […]
> U dlouhodobé spolupráce preferuji pevný měsíční paušál a předem jasně stanovený rozsah služeb. […] kolik by
> přibližně stála prvotní kontrola a oprava měření a jaký by byl orientační měsíční paušál za následnou správu*“ (`EG1-022`)

### 2.7 Nový veřejný český cenový bod

| Subjekt | Služba doslova | Cena | Zahrnuje měření? | Evidence |
|---|---|---|---|---|
| RDY.cz / webpj.cz (PPC agentura) | „Správa PPC kampaní“ | **od 10 000 Kč/měs bez DPH**, bez dlouhodobého závazku | ano – „nastavení měření konverzí přes GA4 a Tag Manager“, měsíční report, konzultace | `EG1-041` |
| RDY.cz / webpj.cz | „konzultace nebo audit“ | **od 1 500 Kč/h** | audit reklamního účtu | `EG1-041` |
| LK Media (kotvy nástrojů) | sGTM / CMP / feed nástroje | sGTM **500–3 000 Kč/měs**, Cookiebot **10–30 EUR/měs**, Mergado **500–2 000 Kč/měs**; „pro rozjezd vystačíš s 0–1 000 Kč měsíčně“ | – (infrastruktura, ne lidská práce) | `EG1-031` |

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3.1 Cenová pásma: **nemění se, ale mění se argument**

Nové české ceny nesnižují ani nezvyšují navržené tiery 8 900 / 19 900 / 39 000 Kč. Zpřesňují ale dvě věci:

- **Kotva „PPC agentura má měření v ceně“ je tvrdší, než 1. kolo předpokládalo.** RDY nabízí za **10 000 Kč/měs
  bez DPH** správu Google Ads *i* Skliku **včetně** nastavení měření konverzí přes GA4 a GTM, měsíčního reportu
  a konzultace, a k tomu bez závazku (`EG1-041`). Tier „Hlídání“ za 8 900 Kč tedy nesmí vypadat jako „menší PPC
  balíček“ – musí prodávat něco, co v těch 10 000 Kč prokazatelně **není**: průběžné denní kontroly, reakční dobu
  a reconciliaci proti backendu. Nastavení měření je v ČR *bonus k PPC*, hlídání měření nikdo neprodává.
- **Vstupní očekávání menšího českého e-shopu je „pár hodin měsíčně“** (`EG1-028`) a „za pár tisíc zjistíte,
  jestli…“ (`EG1-038`). To odpovídá spodní hranici tieru Hlídání, ale znamená, že cena 8 900 Kč potřebuje
  **argument v korunách**, ne v hodinách. Materiál pro něj teď existuje: 30 000 Kč utracených naslepo,
  410 000 Kč rozdílu mezi Ads a GA4, 10–30 % objednávek mimo GA jako norma.

### 3.2 H1 (BigQuery-first): **dále vyvrácena, a to už i na čistě českých datech**

35 z 36 nových výpovědí je `has_bq=no`, poslední je `optional` (`NG1-027`). Z 53 poptávek na Shoptet Partneři
zmiňuje BigQuery **jedna** – a i ta chce slévat Shoptet + FB + Ads + Sklik pro ziskovost, ne spravovat GA4 export.
1. kolo mělo poměr 75 % painů bez BQ; české sub-vzorky dávají **97 %**. BigQuery je v CZ e-commerce segmentu
do ~200 mil. obratu prakticky neexistující téma → potvrzuje se **dvouúrovňový model** a BQ jako upsell.

Zároveň se ale objevil první doložený český případ, kde **bez BQ opravdu nejde rozhodnout**: slovenský PrestaShop
e-shop vidí duplicitní transakce se stejným ID, ale „*celkové tržby približne sedia s reálnymi tržbami*“ (`EG1-006`).
To je česko-slovenský důkaz pro tvrzení, které 1. kolo mělo jen anglicky (N7-157): **denní porovnání počtu
objednávek ztrátu od duplicit nerozliší.** Hodí se přesně jako argument pro přechod z tieru Správa do tieru
Datová správa.

### 3.3 H2 (tichý rozpad měření): **potvrzena, s českým slovníkem**

1. kolo mělo pro H2 dramatické anglické citace („It fails silently by design“). Česká verze je nedramatická,
ale říká totéž a je použitelnější v copy:

- „*a to se s kódem ani webem nic nedělalo*“ (`EG1-007`)
- „*nezměří to nejen konverze, ale nezměří to ani polovinu návštěv*“ (`EG1-018`)
- „*Do shoptetu vše jde jak má, problém mám s Analytics*“ (`EG1-043`)
- „*cez google analytics vidíme prichádzať ľudí, ale neprichádza ku konverziám*“ (`EG1-023`)
- „*nikdo neví, jestli z toho vzešel jediný zákazník*“ (`EG1-039`)

**Zpřesnění proti 1. kolu:** české výpovědi ukazují, že rozhodující proměnná není velikost klienta ani BigQuery,
ale **existence druhého nezávislého zdroje čísel**. Kdo má Cloudflare, FB Ads Manager nebo administraci e-shopu
a dívá se do nich, je na tom v řádu dnů. Kdo ne, měří se v měsících a letech. To je přímý argument pro to,
aby **denní reconciliace GA4 vs. e-shop byla obsahem už nejnižšího tieru**, ne až tieru s BigQuery – bez BQ
se dá porovnávat aspoň denní součet objednávek a tržeb, což by 4 z 5 nalezených incidentů zachytilo do 24 hodin.

### 3.4 H5 (SaaS nahradí část služby): **potvrzena a zúžena**

České incidenty se dělí na dvě skupiny:

- **Zachytitelné nástrojem** (propad eventu, skok ve zdroji, výpadek exportu): `NG1-007`, `NG1-009`, `NG1-015`.
- **Nezachytitelné nástrojem, protože čísla vypadají v pořádku**: 410 tis. rozdíl mezi Ads a GA4 kvůli B2B/B2C
  (`NG1-001`), duplicitní transakce se sedícím součtem (`NG1-006`), poloviční implementace kódu Zboží.cz
  (`NG1-029`), objednávky atribuované organiku místo Ads (`NG1-014`), zrušené objednávky započítané jako tržba
  (`NG1-023`). **Ani jeden z těchto pěti případů nespustí alert žádného SaaS monitoringu** – musí je najít člověk,
  který zná byznys klienta.

To je konkrétnější než formulace 1. kola. Zároveň to dává **obsah pro měsíční komentář**: ne „co se stalo
s návštěvností“, ale „co jsme porovnali a co nesedělo“.

### 3.5 Co z toho jde použít přímo do nabídky

1. **Práh reconciliace: 30 %.** Dva nezávislé české zdroje označují rozdíl GA4 vs. backend do 10–30 % za normu.
   Nabídka může říct: *„Denně porovnáváme objednávky a tržby v GA4 proti e-shopu. Do 10 % mlčíme, 10–30 %
   sledujeme, nad 30 % voláme.“* To je česky obhajitelné číslo, ne převzatý americký benchmark.
2. **Zboží.cz / Sklik jako vlastní pole.** Seznam sám říká, že typický výpadek měření je poloviční nasazení kódu
   přes GTM šablonu a že správná kontrola je porovnání s interním systémem. Pro Zboží.cz neexistuje žádný
   monitorovací nástroj – 1. kolo to označilo za volné pole a 2. kolo to potvrzuje dokumentací provozovatele.
3. **Cookieless Check list Seznamu (9 bodů)** je hotový artefakt pro položku „hlídáme za vás deadliny a změny
   platforem“ – vedle deadlinů Googlu a Shoptetu.
4. **Věta do copy s číslem, které je české:** *„Utratili jsme třicet tisíc a nic z toho nebylo.“* Je to doslovný
   výrok českého klienta, který cituje česká agentura – a je to přesně to, co se stane bez hlídání.

---

## 4. MEZERY, které zůstávají

1. **Kvantifikace jsou stále nepřímé.** Ze čtyř nalezených částek jsou dvě konkrétní případy (Alza 70 tis./18 tis.,
   Ads vs. GA4 500/90 tis.) a dvě typizované („utratili jsme třicet tisíc“ je věta, kterou agentura *slýchá*,
   ne doložený jednotlivý klient). **Žádná česká case study typu „oprava měření vrátila klientovi X Kč“ neexistuje
   ani po druhém kole.** Zůstává úkol pro rozhovory (`09` § 8).
2. **České FB skupiny** (Webová analytika CZ/SK, e-shopové skupiny) zůstávají mimo dosah – nejsou veřejně
   indexované. **LinkedIn vrací HTTP 999** i na veřejné profily; nalezený lead (Marek Lecian, incident
   s CSP hlavičkami, které shodily měřicí skripty) se nepodařilo doložit citací.
3. **Ecommerce Bridge** – rozhovor „GA4 jako strašák pro elektronický obchod“ (Gabi Jurčo, 6clickz) se nepodařilo
   načíst: WebFetch vrací 403, curl vrátí jen upoutávky na jiné články. Obsah magazínu se pravděpodobně dogeneruje
   JS. **Lupa.cz a Tyinternety** nebyly v tomto kole systematicky prohledány (rozpočet).
4. **Upgates, Shopify CZ a WooCommerce CZ komunity** nebyly pokryty – Webtrh a Shoptet Partneři pohltily rozpočet.
   Upgates má blog a nápovědu, ale nemá veřejnou diskusi srovnatelnou s Webtrhem.
5. **Shoptet blog komentáře jsou vyčerpané** – projito 9 článků o měření/GA4/consentu, komentáře má jen
   `cookie-lista-na-shoptetu` (právní dotazy, ne měření), `google-signals-v-google-analytics` (2018, odborná debata)
   a `vylepsene-mereni-google-analytics` (2018). Články z 2023–2026 komentáře nemají vůbec.
6. **Heureka** – měření konverzí na Heurece nebylo v tomto kole ověřeno (na rozdíl od Zboží.cz/Skliku).
   Analogická dokumentace pravděpodobně existuje a doplnila by druhý český srovnávač.
7. **Shoptet Status** (`status.shoptet.cz`) byl prohledán, ale incidenty jsou téměř výhradně logistika
   (PPL, GLS, banky) – **žádný incident týkající se měření**. Nedá se použít jako zdroj datovaných výpadků měření.
8. **Doba do odhalení je u 17 z 36 výpovědí „neuvedeno“.** Fóra a poptávky ji obvykle neuvádějí; přesná čísla
   půjdou získat jen z rozhovorů.
9. **Segment `eshop_large` a `saas_marketplace` nemá ani jednu českou výpověď** – nikdo takový se veřejně neptá.
   Velké české e-shopy své incidenty nezveřejňují.
