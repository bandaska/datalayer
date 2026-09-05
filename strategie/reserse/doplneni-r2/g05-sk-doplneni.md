# Kolo 2 – mezera G05: doplnění slovenského trhu

Stav: hotovo (2026-09-04, datum přístupu ke všem zdrojům **2026-09-04**). Kurz **1 EUR = 25 Kč**, odvody **× 1,34**.
Data: `data/fragments/r2-g05-pricing.csv` (PG5-001…028), `r2-g05-evidence.csv` (EG5-001…051), `r2-g05-pain.csv` (NG5-001…021).
Doplňuje `reserse/02-trh-sk.md` § 5 (mezery). Kódy aktivit A1–I3 a `what_broke` podle `00-taxonomie-sluzby.md`.

Metoda, která odemkla většinu zdrojů blokovaných v 1. kole: `curl` s User-Agentem prohlížeče a hlavičkou
`Accept-Language: sk,cs`. Weby, které vracely 403 pro WebFetch (Basta digital, dabl.sk, Vivantina, RIESENIA,
ecommercebridge.sk, Boosters), takto vrátily plný HTML.

---

## 1. Shrnutí (10 bodů)

1. **Z osmi nedostupných webů z 1. kola se otevřelo sedm.** Basta digital, dabl.sk, Vivantina, RIESENIA.com,
   ecommercebridge.sk, Boosters.sk a adma.sk jsou dostupné přes curl s browser UA. Nedostupný zůstává jen
   **Datacop** (403 na `datacop.sk` i `www.datacop.sk`). ui42 a Boosters nejsou nedostupné – analytickou službu
   prostě nemají (EG5-039, EG5-040, EG5-041).
2. **DASE hodiny v paušálu neuvádí a nikdy neuvádělo.** Model není „X hodin za 700 €“, ale kapacitní strop, který
   si klient sám nastaví: „Výhodou je, že objem analytickej podpory si stanovuje sám klient… platíte len za práce,
   ktoré budú reálne odvedené“ (EG5-004). Reakční doba ani frekvence kontrol nikde. „Pravidelná kontrola dát“ je
   popsaná třemi výstupy (pohled analytika, insighty, jistota, že měření funguje) – bez prahů, alertů a SLA (EG5-003).
3. **12měsíční cesta DASE ověřena a upřesněna**: 1. měsíc strategie 1 400 €, 2. základní GA4 + cookie lišta,
   3. implementace strategie **od 600 € až jednotky tisíc €** + založení BigQuery, 4. testování dataLayeru
   (min. 4–6 týdnů), 5. marketingové skripty, 6. sGTM, 7. serverová měření + detekce anomálií, 8. dashboardy
   **a teprve tady Pravidelná kontrola dát**, 9.–12. dashboardy, doplňková měření, analýzy, A/B → poté paušál (EG5-002).
   BigQuery je ve 3. měsíci, kontrola dat až v 8. – to je pořadí opačné, než navrhuje DataLayer.cz.
4. **Nalezena SK obdoba tieru „Hlídání“ s veřejnou cenou – v doméně SEO.** Pavlo Viatkin (seoporadca.sk) prodává
   „Kontrola KPI a mentoring **od 290 €/mes**“ (7 250 Kč), min. 3 měsíce, s přímým přístupem do GSC a Analytics,
   po vstupním auditu za 490 €. Celá produktová logika – průběžný dohled vs. jednorázová kontrola, nezávislost
   na dodavateli, publikovaná doba výstupu 48 h / 10 dní – je identická s navrhovaným tierem Hlídání (PG5-021, EG5-047).
5. **Starbomedia mezitím zveřejnila plný ceník a slibuje měsíční rekonciliaci v ceně PPC správy**:
   „Server-side tagging a Enhanced Conversions — cielime na zachytenie **90 %+ reálnych tržieb, mesačne validované
   voči e-shopu**“ za 350–600 €/měs (EG5-042). To je nejsilnější závazek ke kvalitě měření na SK trhu – a je zdarma
   jako součást PPC správy. Přímo oslabuje samostatnou prodejnost tieru Hlídání u klientů s PPC agenturou.
6. **DASE publikovalo v srpnu 2026 21bodový předsezónní checklist měření** ve slovenštině (EG5-032, EG5-033)
   a v červenci 6bodový checklist k Enhanced Conversions (EG5-050). **Závěr 1. kola, že katalog artefaktů je
   „výhradně anglofonní“, pro SK neplatí.**
7. **Nejlepší slovenská formulace painu H2** je od DASE: *„pokazený banner si všimnete. Nefunkčný košík pravdepodobne
   tiež. Ale pokazené meranie môže pokojne vyzerať úplne normálne.“* (EG5-032). A DASE samo formuluje potřebu prahů
   a vlastníka: *„Mali by ste však vedieť, aký pokles alebo nárast už považujete za podozrivý a kto ho začne riešiť.“* (EG5-034)
8. **SK mzdová kotva výrazně nahoru.** Aktuální inzerát WPP Media Slovakia na *Digital Analytics Expert*:
   **1 800 – 3 200 € brutto/měs** = náklad zaměstnavatele **60 300 – 107 200 Kč/měs** (PG5-009, PG5-010). Náplň
   je doslova to, co má být obsahem správy měření: audit tracking architektury, odhalování anomálií v datech,
   sGTM, Consent Mode v2.
9. **In-house alternativa na SK prakticky neexistuje.** Na Profesia.sk je pod dotazem „webový analytik“ **jediná**
   nabídka a ta je pro business analytika banky; pod „webová analytika“ dvě (EG5-028). Platy.sk pozici „webový
   analytik“ nemá ani ve 2. kole. Klient si analytika nemá kde najmout – může ho jen koupit externě.
10. **Ceník ADMA zůstává neověřený u primárního zdroje.** `adma.sk/hodinove-sadzby` vrací 404 i ve 2. kole
    (EG5-030), i když web adma.sk je jinak dostupný. Sazba 65 €/h pro „Špecialistu webovej analytiky“ je ověřena
    v plné tabulce 24 pozic citované dobrymarketing.sk (EG5-029) – analytika je tam na stejné úrovni jako PPC a SEO.

---

## 2. FAKTA

### 2.1 Nové a ověřené cenové body (28 řádků v `r2-g05-pricing.csv`)

**Měsíční ceny (CZK/měs):**

| Poskytovatel | Služba | EUR | CZK/měs | ID |
|---|---|---|---|---|
| DASE / Abcdesign / ConsultOne | provoz sGTM (GCP, Stape) – spodní hranice | 20 | 500 | PG5-002, PG5-004, PG5-019 |
| Abcdesign (horní hranice) | provoz sGTM podle trafficu | 150 | 3 750 | PG5-004 |
| **Pavlo Viatkin (seoporadca.sk)** | **Kontrola KPI a mentoring (min. 3 měs.)** | **290** | **7 250** | **PG5-021** |
| ppcexpert.sk | správa PPC – agentura, dolní hranice pásma | 300 | 7 500 | PG5-024 |
| Starbomedia | Google Ads – správa kampaní | od 350 | 8 750 | PG5-016 |
| Starbomedia | Google Ads + Meta Ads spolu | od 600 | 15 000 | PG5-015 |
| *(pro srovnání)* DASE paušál z 1. kola | kontinuálna spolupráca, minimum | 700 | 17 500 | P3-001 |
| Platy.sk P10 | Špecialista marketingových analýz (brutto × 1,34) | 1 596 | 53 466 | PG5-013 |
| **WPP Media SK** | **Digital Analytics Expert, dolní hranice** | **1 800** | **60 300** | **PG5-009** |
| ČSOB | Business analytik pre digitálne kanály | od 1 900 | 63 650 | PG5-011 |
| **WPP Media SK** | **Digital Analytics Expert, horní hranice** | **3 200** | **107 200** | **PG5-010** |
| Platy.sk P90 | Špecialista marketingových analýz (brutto × 1,34) | 3 426 | 114 771 | PG5-014 |

**Jednorázové ceny (CZK):**

| Poskytovatel | Služba | EUR | CZK | ID |
|---|---|---|---|---|
| seoporadca.sk | Strategická konzultácia (1–2 h, výstup do 48 h) | od 150 | 3 750 | PG5-023 |
| Starbomedia | Google Ads audit (74 bodů) | od 250 | 6 250 | PG5-018 |
| Madviso | Simple audit web / e-shop | od 300 | 7 500 | PG5-007 |
| TechWeb.sk | Základní implementace GTM | od 350 | 8 750 | PG5-005 |
| Starbomedia | Nastavenie merania konverzií | od 400 | 10 000 | PG5-017 |
| Marko Muráni | Audit e-shopu (5–10 prac. dní) | od 490 | 12 250 | PG5-006 |
| seoporadca.sk | Nezávislý audit agentúry (výstup do 10 dní) | od 490 | 12 250 | PG5-022 |
| DASE | Implementácia analytickej stratégie | od 600 | 15 000 | PG5-001 |
| Abcdesign.sk | Server side tracking – implementace | od 999 | 24 975 | PG5-003 |
| DASE | Efektívna analytika v praxi | od 1 400 | 35 000 | PG5-020 |
| Madviso | Comprehensive audit | od 2 000 | 50 000 | PG5-008 |

**Hodinové sazby (ověřené):** ADMA 2025 „Špecialista webovej analytiky“ **65 €/h** (PG5-012);
Dexguide Data analytics/GA4 **25–45 / 45–70 / 70–110 €/h** junior/mid/senior (PG5-026…028).

### 2.2 DASE – co se podařilo doplnit a co ne

| Otázka z mezery | Zjištění | Zdroj |
|---|---|---|
| Kolik hodin je v 700 € paušálu? | **Nezveřejněno a záměrně neexistuje.** Klient si sám určuje objem podpory, fakturuje se skutečně odvedená práce. „k dispozícii budete mať minimálne 6 špičkových analytikov za jednu cenu“ | EG5-004 |
| Co je „pravidelná kontrola dát“? | Lidská kontrola analytikem. Výstupy: „pohľad skúseného analytika na dáta / nové insighty / istotu, že všetky merania fungujú správne“. **Žádná frekvence, žádné prahy, žádný alert.** | EG5-003 |
| Jak často? | Neuvedeno nikde (blog, stránka služby, stránka produktu). | EG5-003, EG5-045 |
| Reakční doba? | **Neuvedena nikde.** DASE neprodává SLA, prodává kapacitu týmu. | EG5-004 |
| 12měsíční cesta | Ověřena celá, viz shrnutí bod 3. Ceny: 1 400 € → 600 €+ → sGTM 20–50 €/měs → paušál od 700 €. | EG5-002, EG5-001, EG5-006 |
| Výpovědní doba | 2 měsíce (potvrzeno). Pro srovnání Starbomedia: 1 měsíc, seoporadca.sk: bez výpovědní doby. | EG5-004, EG5-046, EG5-047 |

### 2.3 Doslovné citáty (výběr)

- **DASE, Black Friday checklist (5. 8. 2026):** „Pretože pokazený banner si všimnete. Nefunkčný košík pravdepodobne
  tiež. Ale pokazené meranie môže pokojne vyzerať úplne normálne.“ (EG5-032)
- **DASE, tamtéž, bod 10:** „Najväčšia chyba nemusí byť technická. Môžete mať nastavené kvalitné meranie, správne
  eventy aj krásny dashboard. Ak sa naň však počas Black Friday nikto nepozerá, problém zistíte neskoro. […] Mali by
  ste však vedieť, aký pokles alebo nárast už považujete za podozrivý a kto ho začne riešiť.“ (EG5-034)
- **DASE, tamtéž, bod 1:** „Pri desiatich objednávkach si to možno všimnete. Pri tisícoch objednávok môže rozdiel
  vyzerať ako ‚bežná odchýlka‘. […] ‚Asi je to v poriadku‘ nie je vysvetlenie.“ (EG5-037)
- **DASE, kontinuálna spolupráca:** „Výhodou je, že objem analytickej podpory si stanovuje sám klient. […]
  transparentnosť, platíte len za práce, ktoré budú reálne odvedené […] 2-mesačná výpovedná doba“ (EG5-004)
- **Starbomedia, ceník:** „Server-side tagging a Enhanced Conversions — cielime na zachytenie 90 %+ reálnych tržieb,
  **mesačne validované voči e-shopu**.“ (EG5-042)
- **seoporadca.sk:** „Keď chcete priebežný dohľad, nie jednorazovú kontrolu […] Nastavím metriky naviazané na váš
  biznis a **mesačne overujem**, čo agentúra prezentuje. […] **od 290 € /mes**, Min. 3 mesiace spolupráce.“ (EG5-047)
- **seoporadca.sk, vymezení role:** „Nie som agentúra. Nevykonávam SEO prácu a nemám záujem na predĺžení spolupráce
  nad rámec potreby. **Odmena nezávisí od mesačnej fakturácie.**“ (EG5-047)
- **Madaj:** „Meranie e-shopu je krehká vec — plugin, ktorý sa rok nehýbe, vám pri najbližšej väčšej aktualizácii
  WooCommerce **ticho prestane posielať nákupy. Zistíte to až o mesiac**, keď sa budete čudovať, prečo tržby nesedia.“ (EG5-049)
- **Madaj:** „chyba je tichá. **Nedozviete sa o nej, kým sa podľa nej mesiace nerozhodujete.**“ (EG5-049)
- **Basta digital:** „Po dokončení implementácie nasleduje ‚pasívna‘ fáza automatizovaného záznamu dát. Našou úlohou je
  **monitorovať ich dostupnosť a zároveň aj správnosť**.“ + „máme záznam 100 % údajov, ktoré dokážeme **porovnať
  s internými systémami jedna ku jednej**“ (EG5-008, EG5-009)
- **dabl.sk:** „Po nastavení analytiky nasleduje **overenie správnosti meraní porovnávaním zachyteného počtu objednávok
  s výsledkami z interných systémov klienta**.“ + „Dostávate včasné informácie o všetkých zmenách, ktoré treba
  nevyhnutne zapracovať?“ (EG5-012, EG5-013)
- **Miloš Vargic (ROI index), blog.pravda.sk:** „Jedna objednávka sa môže započítať dvakrát alebo dokonca viackrát.
  Majiteľ potom vidí krásny ROAS, no realita je úplne iná.“ + „**Ak Google Ads ukazuje výrazne viac objednávok ako
  e-shop, pravdepodobne ide o chybu v meraní.**“ (EG5-023, EG5-024)
- **ROI index:** „Pri Shoptete a Upgates je z praxe typické, že tracking býva nasadený cez doplnky […] niekedy sa
  spúšťajú viacnásobne pri refreshi ďakovnej stránky, alebo naopak vypadávajú pri rýchlom dokončení objednávky.“ (EG5-025)
- **WPP Media Slovakia, inzerát:** „Aktívna skúsenosť s **auditovaním tracking architektúry, odhaľovaním anomálií
  v dátach** […] Prehľad v oblasti server-side taggingu (ssGTM a pod.). Znalosť problematiky Consent Mode v2.“ –
  za 1 800–3 200 €/měs (EG5-027)
- **ppcexpert.sk (2026):** „V neoptimalizovaných účtoch bežne nachádzam 30 až 50 percent rozpočtu […] Pri troch
  tisícoch eur mesačne to znamená tisíc eur, ktoré **miznú bez toho, aby si to niekto všimol**.“ (EG5-048)
- **Dexguide:** „Pri projekte **pod 200 hodín ročne** je freelancer ekonomickejší ako stály zamestnanec alebo agentúra
  s retainer modelom.“ + „Štandardný prechod: start hodinovo, po 2 až 3 mesiacoch retainer.“ (EG5-051)

### 2.4 Nové SK subjekty, které 1. kolo minulo

| Subjekt | Typ | Co má | Veřejná cena | ID |
|---|---|---|---|---|
| **Pavlo Viatkin – seoporadca.sk** | freelancer | „Nezávislý SEO kontrolór a audítor agentúr“ – měsíční dohled nad prací agentury | **ano** (150 / 490 € / 290 €/měs) | PG5-021…023 |
| **Abcdesign.sk** | analytics/dev | Server side tracking (Stape, GCP, Snowplow na vlastním serveru) | **ano** (999 € + 20–150 €/měs) | PG5-003, PG5-004 |
| **Marko Muráni** | freelancer | Audit e-shopu vč. měření | **ano** (od 490 €) | PG5-006 |
| **ROI index®** (Miloš Vargic) | performance agentura | PPC, SEO, GEO, SK+CZ; obsah k rozporům GA4/Ads/e-shop | ne | EG5-023…025 |
| **RIESENIA.com** (marketing.riesenia.com) | performance agentura | „Webová analytika a tracking“ jako služba | ne | EG5-038 |
| **Madviso** (bylo „bez ceny“) | agentura | audit web/e-shop | **ano** (300 / 2 000 €) | PG5-007, PG5-008 |
| **Vivantina** | marketingová agentura | Nastavenie GA4 (obsah z 2023, neaktualizováno) | ne | EG5-014, EG5-019 |
| **dabl.sk** | performance agentura | Webová analytika: kontrola + porovnání objednávek s interními systémy | ne | EG5-012, EG5-013 |

Souhrn: **veřejnou cenu čehokoli analytického má nyní 12 SK subjektů** (7 z 1. kola + Madviso, Abcdesign,
Marko Muráni, seoporadca.sk, Starbomedia s rozšířeným ceníkem). **Veřejnou cenu měsíční služby typu „dohled“ mají dva**:
DASE (700 €, analytika, jen v blogu) a seoporadca.sk (290 €, ale SEO, ne měření).

### 2.5 Slovenské výpovědi o rozbitém měření (21 řádků v `r2-g05-pain.csv`)

Rozložení spouštěčů: `release_web` 6×, `gtm_change_dev` 3×, `consent_change` 2×, `ga4_change` 2×,
`platform_migration` 2×, `revenue_mismatch` 1×, `ad_platform_change` 1×, `unknown_owner` 1×, `utm_chaos` 1×.
Segmenty: eshop_mid 11×, eshop_small 7×, eshop_large 3×. `has_bq`: no 19×, optional 2×.

Kvantifikovaný time-to-notice se podařilo doplnit u tří případů: **„o mesiac“** (výpadek WooCommerce pluginu po major
update, NG5-017), **„mesiace“** (data ve starém formátu, NG5-018), **„po skončení kampane“** (Black Friday, NG5-010).
To sedí do pásma 2 týdny – 3 měsíce z 1. kola.

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3.1 Cenová pásma

**Potvrzuje se dolní hranice a rozšiřuje se horní.** Slovenské měsíční body pro službu, kterou si klient kupuje jako
„někdo mi na to dohlíží“, leží na **7 250 Kč (seoporadca.sk, 290 €)** a **17 500 Kč (DASE, 700 €)**. Mezi nimi je PPC
správa 7 500–15 000 Kč, do které je „kontrola merania konverzií“ zabalená zdarma. Navržený tier **Hlídání 8 900 Kč
leží přesně v této mezeře a je tržně obhajitelný** – je o 23 % dražší než SEO dohled a o polovinu levnější než
minimální analytický paušál DASE.

**Tier Správa 19 900 Kč** dostává novou oporu shora: DASE 700 € = 17 500 Kč je minimum, ne typická cena, a WPP platí
za jednoho analytika 60 300–107 200 Kč/měs celkových nákladů. In-house na SK **nejde koupit** (jediný inzerát pod
„webový analytik“ v celé zemi), takže srovnávací kotva „raději si někoho najmu“ na Slovensku fakticky neexistuje.

**Tier Datová správa 39 000 Kč** SK trh nijak nevalidoval – žádný SK subjekt neprodává BigQuery vrstvu jako měsíční
položku s cenou. Zůstává odvozený z ČR/EU.

**Riziko, které 1. kolo nevidělo:** Starbomedia (a implicitně celý SK PPC trh) dává **měsíční rekonciliaci tržeb vůči
e-shopu v ceně správy kampaní od 350 €**. Klient s PPC agenturou má tedy formálně pokryté to, co je jádrem tieru
Hlídání. Argument DataLayer.cz musí být explicitně: *co dělá PPC agentura* (jednou měsíčně srovná číslo, aby si
obhájila ROAS) vs. *co děláme my* (denně, s prahem, s transaction_id, s reakční dobou, nezávisle na tom, kdo kampaně
utrácí). Přesně tuhle „nezávislost na dodavateli“ prodává seoporadca.sk a je to jeho hlavní argument.

### 3.2 Hypotézy

- **H1 (BigQuery jako podmínka) – dále oslabuje.** 19 z 21 nových SK výpovědí je `has_bq = no`. DASE zakládá BigQuery
  už ve 3. měsíci spolupráce (EG5-002), ale jako úložiště, ne jako podmínku kontroly dat – ta přichází až v 8. měsíci
  a dělá ji analytik pohledem. Jediný SK subjekt, který monitoring staví nad surová data, je Basta (enterprise,
  bez ceny). **Rekonciliace vůči backendu na SK existuje bez BigQuery** (Basta přes sGTM 1:1, dabl.sk srovnáním
  počtu objednávek, Starbomedia měsíčně). To potvrzuje, že BQ je zlom hloubky, ne vstupu.
- **H2 (tiché rozbití) – silně potvrzeno a nově i konkurenčně obsazeno.** Nejlepší formulaci painu na SK má DASE
  („pokazené meranie môže pokojne vyzerať úplne normálne“) a používá ji jako obsahový magnet měsíc před rešerší.
  Devět nových mechanismů rozbití je doloženo doslovně (NG5-010…021). **Změna:** sdělení „měření se tiše rozbilo“
  už není v regionu neobsazené – DASE ho publikuje slovensky. Rozdíl je stále v tom, že DASE za ním nabízí paušál
  bez prahů a bez reakční doby, ne službu s číslem.
- **H3 (bez veřejného ceníku, retainer 5–20 h) – potvrzuje se, ale s upřesněním modelu.** Retainer na SK není
  „X hodin za Y €“. DASE prodává kapacitní strop bez hodin; seoporadca.sk prodává výstup (měsíční kontrola)
  bez hodin; Starbomedia prodává čas („cena podle časové náročnosti“) bez hodin. **Žádný SK subjekt nepublikuje
  počet hodin v paušálu.** Dexguide navíc dává práh, který dává tieru smysl: pod 200 h/rok (≈ 17 h/měs) je externí
  dodavatel ekonomičtější než zaměstnanec.
- **H5 (SaaS nahrazuje část, hodnota je v interpretaci a opravě) – potvrzeno.** Infrastruktura je komodita, na které
  se čtyři nezávislé SK zdroje shodují na 20–50 €/měs. Nikdo na SK neprodává monitoring měření jako SaaS.
  Zároveň seoporadca.sk explicitně staví lidský dohled proti automatizaci: *„Na rozdiel od automatizovanej kontroly
  pracujem s priamym prístupom do vášho Search Console a Analytics — nie s tým, čo mi niekto vopred vybral ukázať.“*

### 3.3 Co se v závěrech 1. kola musí opravit

1. **„V ČR/SK nikdo tyto artefakty nepublikuje, katalog 31 ukázek je výhradně anglofonní.“** → Neplatí pro SK.
   DASE publikovalo v červenci a srpnu 2026 dva checklisty (6 a 21 bodů) ve slovenštině. Katalog artefaktů má být
   o dva rozšířen a formulace o „výhradně anglofonním“ katalogu upravena.
2. **„Reakční dobu na výpadek měření v ČR ani na SK nikdo veřejně neslibuje.“** → Platí pro měření, ale na SK
   existuje precedens publikované doby výstupu u příbuzné služby: seoporadca.sk slibuje písemné shrnutí do 48 h
   a audit do 10 dní, Marko Muráni audit do 5–10 pracovních dní, TechWeb dodávku do 7 dní. Klient je na SK zvyklý
   vidět číslo u výstupu, jen ne u incidentu.
3. **„Veřejnou cenu kontinuální správy má 1 subjekt (DASE).“** → Doplnit, že v sousední doméně (dohled nad prací
   agentury) má veřejnou měsíční cenu i seoporadca.sk (290 €) – a že je to nejbližší tržní kotva pro tier Hlídání.
4. **SK mzdové pásmo** z 1. kola (1 900–2 800 € brutto) → rozšířit na **1 800–3 426 €**; horní hranice
   (WPP 3 200 €, Platy.sk P90 3 426 €) je vyšší, než 1. kolo předpokládalo.
5. **Madviso, dabl.sk, RIESENIA, Vivantina, Abcdesign, Marko Muráni, ROI index, seoporadca.sk** patří do tabulky
   subjektů v `02-trh-sk.md` § 2.1 – vzorek SK trhu roste z 24 na 32 subjektů.

---

## 4. Mezery, které zůstávají

- **Datacop** – jediný web, který se neotevřel ani ve 2. kole (403 na `datacop.sk` i `www.datacop.sk`, `datacop.io`
  bez odpovědi). Gold sponzor MeasureCamp Bratislava 2026, tedy pravděpodobně relevantní hráč.
- **Primární ceník ADMA** – `adma.sk/hodinove-sadzby` je 404, sekce Infografiky a Ebook načítají obsah JS a přes
  fetch se nezobrazí. Sazba 65 €/h zůstává ověřena jen ze sekundární citace (dobrymarketing.sk).
- **Reakční doba a hodiny u DASE** – nezveřejněné. Nejde o mezeru rešerše, ale o mezeru na straně dodavatele.
  Zbývá mystery shopping / rozhovor.
- **Syrové výpovědi klientů** – ani ve 2. kole se nepodařilo dostat k SK zdrojům psaným majiteli e-shopů.
  Facebook skupiny a LinkedIn nejsou z prostředí dostupné, `reddit.com` vrací 403 a `old.reddit.com` 302
  (r.jina.ai proxy funguje, ale slovenský obsah k GA4 tam prakticky není). Všech 21 nových pain řádků pochází
  od odborníků, kteří o klientech píší – ne od klientů samotných. **Toto je hlavní zbývající slabina SK vzorku.**
- **Dexfinity** – cena analytiky v provizním modelu a technika alertů (nástroj? BQ?) stále neznámá; Dexguide
  popisuje jen trh freelancerů, ne vlastní ceník.
- **BigQuery jako měsíční položka na SK** – žádný SK subjekt ji neceníkuje. Tier Datová správa nemá slovenskou kotvu.
- **Kč vyjádřená ztráta slovenského e-shopu** – nejlepší nalezená čísla jsou vendorská (Abcdesign +13,1 % tržeb,
  DASE ilustrativní 500/600/750/800 objednávek) nebo o rozpočtu PPC, ne o měření (ppcexpert 30–50 % rozpočtu).
  Skutečný doložený případ „rozbité měření stálo X eur“ na SK nadále chybí.
