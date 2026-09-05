# Doplnění R2 / G04 – česká a slovenská komunita (Webtrh, LinkedIn, MeasureCamp, konference, FB skupiny)

Stav: hotovo (2. kolo, rešerše 2026-09-04). Data: `data/fragments/r2-g04-evidence.csv` (41 řádků, `EG4-001`–`EG4-041`, phase = 11)
a `data/fragments/r2-g04-pain.csv` (15 řádků, `NG4-001`–`NG4-015`). Odkazy `EG4-…` v textu vedou do evidence logu.

Zadání: v 1. kole byly FB skupiny, LinkedIn a Webtrh označené jako nedostupné, takže české a slovenské výpovědi
pocházely jen z poptávek a blogů. Toto doplnění mělo ty kanály otevřít alternativními cestami a vytěžit doslovné citáty.

---

## 1. Shrnutí (10 bodů)

1. **LinkedIn je dostupný bez přihlášení** přes doménu `cz.linkedin.com/posts/<slug>` a `cz.linkedin.com/pulse/<slug>` –
   včetně komentářů. Mezera 1. kola („LinkedIn nedostupný“) je uzavřená; 5 postů vytěženo (EG4-009, EG4-010, EG4-013, EG4-036, EG4-039).
2. **Facebookové skupiny zůstávají nedostupné** (`facebook.com/groups`, `mbasic.facebook.com` vrací „Facebook is not available on this
   browser“, vyhledávače je neindexují). Tuto mezeru se zavřít nepodařilo a bez přihlášeného účtu ji zavřít nelze.
3. **MeasureCamp session boardy se podařilo dohledat** – Bratislava publikuje archiv (2025, 2024, 2019), Praha/Brno ne, ale
   existuje český zápis z 11. ročníku od Digitálních architektů. Mezera fáze 7 („MeasureCamp abstrakty nenalezeny“) je uzavřená
   (EG4-001–EG4-008, EG4-015–EG4-020).
4. **Nejsilnější česká formulace celé rešerše** pochází z MeasureCampu Brno 2025, přednáška Pavla Šabatky „Bugs in tracking“:
   *„Automatizované kampaně (PMAX a spol.) stojí na kvalitních signálech. Když se měření rozbije, algoritmy ztrácí kompas
   a pálíte rozpočet.“* (EG4-015). Do 1. kola jsme podobnou větu měli jen anglicky.
5. Tamtéž je česky formulovaná hodnota kontinuální správy: *„Klient ocení, když o chybě víte dřív než on – a máte k ní log
   a jasný postup nápravy.“* (EG4-016) a *„Logujte chyby do GA4/BQ: ať víte dřív než kampaně, že se něco pokazilo.“* (EG4-018).
6. **Tiché rozbití měření je v ČR doložené i na úrovni samotného Googlu**: Pavel Šabatka popisuje tichý fallback atribuce –
   pod 400 konverzí za 28 dní GA4 bez upozornění přepne z data-driven na last-click a v nastavení dál ukazuje „Data-driven“
   (EG4-030, NG4-012). Klient to nemá jak zjistit.
7. **Dvě nezávislé agentury (CZ MarketingPPC, SK Dexfinity) definují stejný práh** pro srovnání GA vs. e-shop: jednotky procent
   v pořádku, desítky procent = problém (EG4-024, EG4-026). To je použitelný veřejně doložený práh pro denní reconciliaci.
8. **Nový cenový bod, který 1. kolo nezachytilo**: RobertNemec.com prodává „Podporu Google Analytics“ jako předplacený balík
   hodin – 1 900 Kč/h, minimum 5 h (9 500 Kč), účtování po započatých půlhodinách, měsíční vyúčtování zbývajících hodin (EG4-040).
9. **Závěr „reakční dobu v ČR nikdo veřejně neslibuje“ je třeba zpřesnit**: RobertNemec.com garantuje odpověď **do tří hodin**
   (EG4-041). Rozdíl zůstává v tom, že jde o reakci na dotaz klienta, ne o vlastní detekci výpadku.
10. **Závěr „v ČR nikdo nepublikuje artefakty“ je také třeba zpřesnit**: existuje český veřejný „Checklist správného nastavení GA4“
    (František Rajtmajer, ~25 bodů, EG4-037, EG4-038). Je to ale jednorázová kontrola nastavení, ne opakovaný monitoring, a nemá cenu.

---

## 2. FAKTA

### 2.1 Dostupnost kanálů, které v 1. kole selhaly

| Kanál | Stav v 1. kole | Stav teď | Cesta, která funguje |
|---|---|---|---|
| Webtrh.cz | „vyhledávání vrací 404“ | **dostupné** | výpis `webtrh.cz/forum/webova-analytika/`, vlákna `webtrh.cz/diskuse/<slug>/` |
| LinkedIn posty | „komentáře nedostupné bez přihlášení“ | **dostupné včetně komentářů** | `cz.linkedin.com/posts/<slug>`, `cz.linkedin.com/pulse/<slug>` |
| MeasureCamp SK | nezkoušeno | **dostupné, archiv 2017–2025** | `bratislava.measurecamp.org/schedule-<rok>/` |
| MeasureCamp CZ | „abstrakty nenalezeny“ | **oficiálně nepublikuje**, dohledán zápis třetí strany | `digitalniarchitekti.cz/clanek/measure-camp-brno-2025-…` |
| FB skupiny | nedostupné | **stále nedostupné** | – (mbasic i www vrací chybu, vyhledávače neindexují) |
| Ecommerce Bridge CZ/SK | 403 | **stále 403** | – (i přes r.jina.ai) |

### 2.2 MeasureCamp – co komunita CZ/SK reálně řeší

Unconference: program vzniká na místě, session board je proto autentický obraz témat, ne kurátorský výběr.

| Ročník | Session (doslova) | Řečník | Co to dokládá | Evidence |
|---|---|---|---|---|
| Bratislava 2025 | „How I fix broken Google Ads conversions in 30 minutes or less – real lessons from 600+ tracking setups“ | Alina Elvira Popa | rozbité konverze jsou tak časté, že vzniká přednáška postavená na 600+ implementacích | EG4-001 |
| Bratislava 2025 | „Before you fire that tag...“ | Marina Sukhanova | QA před nasazením tagu (A1/A4) | EG4-002 |
| Bratislava 2024 | „Managing 100 3rd party tags“ | Lukas Cech | `unknown_owner` jako samostatné téma | EG4-003 |
| Bratislava 2024 | „Async setup of TMS + CMP +Tags“ | Lukas Cech | consent a pořadí načítání | EG4-004 |
| Bratislava 2024 | „Data differences between GA4 and BQ  better attribiution“ | Stefan Mazuch | nesrovnalosti GA4 vs. BQ export | EG4-005 |
| Bratislava 2024 / 2025 | „Therapy session – dealing with stress at work and difficult clients“ / „Screaming therapy session“ | Julia / Natália Andrejová | vztah analytik–klient jako opakované téma | EG4-006 |
| Bratislava 2019 | „Please always create analytics documentation“ + „Alerts in Google Sheets“ + „Diffrence in conversion between Facebook, Google Ads and Analytics“ | Marek Cech, Miroslav Ficza, Tomas Malik | alerting, dokumentace a nesoulad konverzí jsou téma **od roku 2019** | EG4-007 |
| Brno 2025 (11. ročník) | „Bugs in tracking: chyby přijdou – buďte první, kdo je uvidí“ | Pavel Šabatka | viz níže | EG4-015–EG4-018 |
| Brno 2025 | „GTM Variable Audit“ | Mája Remešová | úklid GTM jako uznaná hodnota | EG4-019 |

**Doslova z Brna 2025 (EG4-015 až EG4-018):**

> „Automatizované kampaně (PMAX a spol.) stojí na kvalitních signálech. Když se měření rozbije, algoritmy ztrácí kompas
> a pálíte rozpočet.“

> „K chybám může docházet na straně samotného webu, v GTM nebo jsou to také externí vlivy jako spam, policy violations
> daných platforem, legislativa (GDPR). Ze strany webu to mohou být změny v kódu, JS na špatném místě nebo jeho konflikty,
> změny v datové vrstvě nebo Content Security Policy.“

> „Praktický dojem: Klient ocení, když o chybě víte dřív než on – a máte k ní log a jasný postup nápravy.“

> „Začněte stabilitou signálů: bez spolehlivého měření PMAX a spol. nedávají smysl. … Logujte chyby do GA4/BQ:
> ať víte dřív než kampaně, že se něco pokazilo.“

Doporučené techniky z téže přednášky: Error listeners v GTM (JS Error Listener trigger) s odesláním do GA4, try/catch v custom
skriptech s logováním do dataLayer, Tag Monitor / addEventCallback, Additional Tag Metadata, Custom insights v GA4, alerty
v BigQuery, checksum validátory šablon. **Čtyři z pěti fungují bez BigQuery** (EG4-017).

Otázka z GTM auditu, použitelná v prodeji doslova (EG4-019):
> „Kdy jste naposledy dělali audit značek, spouštěčů a proměnných ve vašem GTM?“

### 2.3 Tiché rozbití měření – české důkazy s čísly

Zdroj: Pavel Šabatka, „Ukazují GA4 přesná data?“ (EG4-030 až EG4-035).

> **„Tichý fallback.** Pokud nemáte alespoň 400 konverzí za 28 dní pro daný key event, GA4 tiše přepne na last-click
> — bez upozornění. V nastavení dál vidíte ‚Data-driven‘, ale reálně běží last-click.“

> „Pro výpočet PNO je zatracený rozdíl, jestli máte zapnuté modelování nebo ne. S modelováním vám GA4 reportuje o desítky
> procent víc konverzí — a vaše PNO vypadá najednou skvěle. … **Tohle není akademický problém. Tohle je problém za reálné peníze.**“

> „**Kontrolujte přesnost.** Pravidelně srovnávejte data z GA4 s dalšími zdroji. Minimum: počet transakcí v GA4 vs. vaše databáze.
> … Když znáte svoji odchylku, můžete s ní pracovat. Nevíte-li ji, rozhodujete naslepo.“

Publikovaná česká tabulka odchylek GA4 (EG4-033) – použitelná pro nastavení prahů alertů na CZ trhu:

| Zdroj nepřesnosti | Odchylka | Řešení podle autora |
|---|---|---|
| HLL++ (uživatelé) | ±1,6 % | BigQuery s COUNT DISTINCT |
| HLL++ (sessions) | ±3,3 % | BigQuery s COUNT DISTINCT |
| Ad blockery a tracking prevention | ~10 % (na CZ projektech; zahraniční zdroje uvádějí až 30 %) | server-side měření, vlastní doména |
| Consent (chybějící souhlas) | 30–60 % (opt-in rate v ČR 40–70 %) | Consent Mode v2 Advanced + modelování |
| Sampling (Explorace) | 5–30 % | BigQuery, kratší rozsah |
| Modelování (consent) | desítky % rozdíl on/off | vědět, co je zapnuté |

Dva technické limity, které mění návrh služby:

- **Latence GA4 24–48 h, doplňování až 72 h, „a žádné SLA neexistuje“** (EG4-034). Slib „víme to za 24 hodin“ nelze postavit
  na denních číslech z GA4 – musí stát na tag monitoringu, sGTM logech nebo reconciliaci s e-shopem.
- **Consent Mode modelování se do BigQuery exportu nepropisuje** (EG4-035): „Funguje jen v UI a API — v BigQuery exportu
  modelovaná data nejsou.“ BQ klient tedy z principu vidí dvě rozdílná čísla, která někdo musí vysvětlovat a hlídat.

### 2.4 Slovenské výpovědi (Dexfinity)

Zdroj: Samuel Ondrišák (PPC & Marketing Tech Leader, Dexfinity), EG4-025 až EG4-029.

> „Ak marketéri v daných nástrojoch nezaznamenajú konverziu, **utlmia kredit na kampane**. Na prvý pohľad sa môžu javiť ako
> neefektívne a e-shop prichádza o tržby.“

> „Ak sú rozdiely na úrovni pár percent, je to v poriadku. **Desiatky percent znamenajú problém.**“

> „Príčinou je **nespustenie kódu**, a tak sa Tag Manager, Analytics, Google Ads alebo Facebook nedozvedia o aktivite, ktorú by
> mali evidovať. … Výpadok nastáva aj v prípade, keď používateľ odíde na platobnú bránu, po zaplatení sa vráti, ale kód sa nespustí.“

> „V prípade strednej Európy je výpadok na úrovni **5 %**, v Nemecku počítajte až s **30 %**. … Pri niektorých projektoch môže
> chýbať až **70 %** používateľov či objednávok.“

Jediné veřejné SK číslo o pracnosti (EG4-029): nastavení analytiky pro jednu zemi ≈ **10 hodin**, při dobře postaveném
základu **4 hodiny** („o 60 % menej času“).

Pozor: slovenský řetěz je **ruční** („marketéri utlmia kredit“), zatímco americké výpovědi z 1. kola popisují **automatický**
Smart Bidding. Dopad je stejný, ale mechanismus se liší a v prodejní argumentaci to jde použít pro obě publika.

### 2.5 České seznamy chyb v měření (nezávislé, kryjí se navzájem)

| Zdroj | Doslova | Evidence |
|---|---|---|
| Tomáš Zahálka (Shoptet partner) | „Mezi nejčastější chyby patří dvojité měření GA4 přes Shoptet i GTM, nefunkční purchase event, chybějící hodnota objednávky, špatná měna, duplicitní transakce, neoznačené kampaně, chybějící UTM parametry, špatně nastavený Consent Mode, měření bez testovací objednávky a slepé porovnávání GA4 s účetnictvím.“ | EG4-011 |
| Digitální architekti (12 problémů) | „sice na první pohled funguje správně … se nespouští, kdy má … se nespustí vůbec … Přijdete o významnou část dat“ | EG4-021 |
| Digitální architekti (bonus) | „Přicházím jako nový markeťák… vidím, že přístup má jakýsi info mail. Nikdo si nepamatuje, proč.“ | EG4-022 |
| Digitální architekti (problém 7) | „Velmi často se setkáváme s chybnou implementací, která způsobuje velké nepřesnosti v datech, duplicity.“ | EG4-023 |
| MarketingPPC (série „Nejdražší chyby v Google Ads“) | „Buď konverze neměříte vůbec, nebo je měříte, ale v měření jsou chyby.“ + „s odchylkou cca 10 % počítejte … odchylka v desítkách procent by měla být signálem pro zahájení pátrání“ | EG4-024 |
| František Rajtmajer (checklist GA4) | „Měří se objednávky i s produkty? … Odpovídají cca reálným tržbám e-shopu? … Jsou tržby bez DPH? … Neobjevují se abnormální objednávky?“ | EG4-037, EG4-038 |

Sedm z deseti Zahálkových chyb i celý datový blok Rajtmajerova checklistu jsou detekovatelné **bez BigQuery**.

### 2.6 Webtrh a LinkedIn – syrové výpovědi

> „Na provizorní web solar-care.cz jsme přidali měření GA4, **v účtu se tváří, že je vše OK**, ale Google nám ukazuje nesmyslné
> návštěvy z Afghánistánu, Pákistánu atd. ale Česko 0.“ – Webtrh, 6. 11. 2024 (EG4-014, NG4-003)

> „Nemohl by to Google už vypnout? :D Mám připravené promazané GTM kontejnery a stále tam chodí data. Kromě UA tagů nezapomeňte
> i promazat JS proměné jako je custom task, nevyužívané triggery.“ – Marek Lecián, LinkedIn (EG4-009)
> V komentáři Katarína Hlaváčová: *„Jak ráda zahlásil Pavel Šabatka, na GA se nelze spolehnout. Ani v tom, že umřou.“*

> „V rozhraní tato domodelovaná data ale nepouští do všech reportů … Data v těchto reportech se mohou od dat v reportech kam GA4
> domodelovaná data pouští **výrazně lišit i v základnách metrikách, jako jsou sessions a users**.“ – Vašek Jelen, MeasureDesign (EG4-010)

> „Webový analytik neexistuje... už se nám analytika tak rozkročila, že už dlouho nedává smysl hledat univerzálního webového
> analytika.“ – Roman Appeltauer, LinkedIn (EG4-036). V komentáři Eva Violetta Jaucourt (SPORTISIMO): *„Zrovna nastupuji do jedné
> firmy, které děláš konzultanta, pomoct naplňovat potřeby jednomu analytikovi, který je tam na všechno zatím sám.“*

> „GA4 se neovládají, GA4 ovládají tebe.“ – Daniel Dočekal v komentáři pod postem Jana Řezáče (EG4-013)

### 2.7 Nové cenové body (do pricing logu je zapíše fáze slučování; zde jen doklad)

| Kdo | Co | Cena doslova | Model | Evidence |
|---|---|---|---|---|
| RobertNemec.com | Podpora Google Analytics (poradna) | „Jedna hodina stojí 1 900 Kč a minimální počet hodin na objednání je 5 (takže minimální cena je 9 500 Kč). Účtujeme každou započatou půlhodinu.“ | předplacený balík hodin + měsíční vyúčtování | EG4-040 |
| RobertNemec.com | reakční doba | „na kterém vám **do tří hodin** vždy zodpovíme jakýkoli dotaz“ | SLA na dotaz klienta | EG4-041 |
| Tomáš Zahálka | měsíční PPC správa e-shopu | „Základní správa: 10 000 Kč (5h) … Malé e-shopy: 15 000 Kč (10h) … Běžné e-shopy: 20 000 Kč (15h) … Větší e-shopy: 30 000 Kč (25h) … Top e-shopy: 50 000 Kč (50h)“ | tiered podle rozpočtu klienta + hodiny | EG4-012 |
| Tomáš Zahálka | hodinová sazba a jednorázovky | „Cena: 2 000 Kč / hodinu“; konzultace 5 000 Kč (2,5 h); PPC audit 25 000 Kč; SEO audit 25 000 Kč; marketingový audit 50 000 Kč | hourly / fixed | EG4-012 |

Implikovaná hodinová sazba Zahálkových tierů klesá z 2 000 Kč/h (5 h) na 1 000 Kč/h (50 h) – tj. množstevní sleva 50 %
napříč rozsahem. To je použitelný vzor pro odstupňování vlastních tierů.

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3.1 Cenová pásma: potvrzeno, s jedním doplňkem o modelu

Nic z komunity nevyvrací medián 8–10 tis. Kč/měs ani horní kvartil 16–23 tis. Kč. Nové body sedí do pásma:

- RobertNemec „Podpora GA“ **9 500 Kč za 5 h** (EG4-040) je prakticky na dolní hranici navrženého tieru Hlídání (8 900 Kč)
  a potvrzuje, že za tuhle částku je klient v ČR zvyklý dostat **balík hodin**, ne kontinuální hlídání. To je pro DataLayer.cz
  příležitost i riziko: příležitost, protože 8 900 Kč za denní kontroly je jiná hodnota než 5 h práce; riziko, protože klient
  bude obě čísla srovnávat a musí mu být řečeno, proč nekupuje hodiny.
- Zahálkovy tiery **10 / 15 / 20 / 30 / 50 tis. Kč** za PPC správu (EG4-012) potvrzují kotvu „PPC správa 8–30 tis. Kč“
  z 1. kola a rozšiřují ji nahoru. Tier Správa (19 900 Kč) je cenově pod běžnou PPC správou e-shopu s obratem kolem
  250 tis. Kč měsíčního rozpočtu – to je dobře obhajitelná pozice.
- **Nový poznatek o struktuře, ne o výši**: dva ze tří nalezených CZ modelů (RobertNemec, Zahálka) váží cenu na hodiny a dělají
  z ní čerpací balík. Navržený model DataLayer.cz (kadence + reakční doba + BQ hloubka, hodiny jen jako limit na změny)
  zůstává na CZ trhu neobvyklý – tedy stále diferenciátor, ale bude vyžadovat vysvětlení.

Chybí dál: žádný CZ ani SK subjekt neuvádí veřejnou měsíční cenu za **hlídání měření** jako samostatný produkt.
Tvrzení 1. kola „v ČR mají cenu 2 ze 45 subjektů“ zůstává v platnosti.

### 3.2 H1 (BQ-first) – dále oslabena, teď i českými technickými argumenty

Tři nové důkazy proti H1 v silné podobě:

1. Ze **pěti technik detekce chyb**, které doporučuje Pavel Šabatka na MeasureCampu, fungují **čtyři bez BigQuery**
   (error listenery v GTM, try/catch, Tag Monitor, Custom insights v GA4); BQ je uvedeno jako jedna z možností alertů (EG4-017).
2. Doporučená minimální kontrola přesnosti je **„počet transakcí v GA4 vs. vaše databáze“** (EG4-031) – to je reconciliace
   bez jediného dotazu do BQ.
3. Celý datový blok českého checklistu (tržby vs. realita, součet položek vs. celek, DPH, abnormální objednávky, platební brány
   ve zdrojích, cizí domény v page_view) se dělá v rozhraní GA4 (EG4-038).

Zároveň přibyl **nový argument, proč BQ zdražuje**: modelování Consent Mode se do BQ exportu nepropisuje (EG4-035), takže BQ
klient má z principu dvě neshodná čísla a někdo mu je musí průběžně vysvětlovat. To potvrzuje BQ jako zlom mezi tiery,
ne jako podmínku vstupu. **H1 v silné podobě zamítnuta, ve slabé („BQ mění hloubku a cenu, ne seznam činností“) potvrzena.**

Poměr v tomto vzorku: **14 z 15 pain řádků má `has_bq = no`**, jeden `optional`. To je v souladu se závěrem 1. kola
(75 % výpovědí o rozbitém měření od klientů bez BQ) a spíš ho zesiluje.

### 3.3 H2 (pain = tiché rozbití, ne chybějící data) – silně potvrzena, poprvé česky

1. kolo mělo pro tuhle tezi jen anglické citáty („It fails silently by design“). Teď má české a slovenské:

- „Automatizované kampaně stojí na kvalitních signálech. Když se měření rozbije, algoritmy ztrácí kompas a pálíte rozpočet.“ (EG4-015)
- „Tichý fallback. … GA4 tiše přepne na last-click — bez upozornění. V nastavení dál vidíte ‚Data-driven‘.“ (EG4-030)
- „v účtu se tváří, že je vše OK“ (EG4-014)
- „sice na první pohled funguje správně … se nespustí vůbec“ (EG4-021)
- „Ak marketéri … nezaznamenajú konverziu, utlmia kredit na kampane … e-shop prichádza o tržby.“ (EG4-025)

**Rozšíření hypotézy:** rozbité měření nemusí způsobit člověk ani release. Dvě z nalezených nejtvrdších výpovědí popisují,
že se **měření změní samo** – Google změní atribuční model (EG4-030) nebo se přepne modelování (EG4-032). To je nový podtyp
`ga4_change`, který 1. kolo označilo za podreprezentovaný. Prodejně je to nejsilnější argument vůbec: proti tomuhle
neochrání ani perfektní implementace, ani interní analytik, ani „už to máme nastavené“.

### 3.4 H5 (obsah a artefakty dodávky) – potvrzena, dva závěry je nutné zpřesnit

Potvrzeno: rytmus i obsah dodávky odpovídají tomu, co komunita sama pojmenovává – QA před nasazením tagu (EG4-002),
kvartální audit GTM (EG4-019), dokumentace (EG4-007, EG4-022), alerting (EG4-007, EG4-017), reconciliace (EG4-031),
triáž a log chyby (EG4-016).

**Zpřesnit dva závěry:**

1. *„Reakční dobu na výpadek měření v ČR ani na SK nikdo veřejně neslibuje.“* → RobertNemec.com veřejně slibuje **odpověď
   do tří hodin** (EG4-041). Formulace v nabídce se musí posunout z „máme SLA“ na **„SLA na detekci, ne jen na odpověď“**:
   nikdo v ČR neslibuje, za jak dlouho si všimne, že se něco rozbilo, aniž by mu klient napsal.
2. *„V ČR nikdo tyto artefakty nepublikuje; katalog 31 ukázek je výhradně anglofonní.“* → český veřejný checklist existuje
   (EG4-037, ~25 bodů). Rozdíl je v typu: je to **jednorázová kontrola nastavení**, ne sada opakovaných kontrol s prahy
   a ne ukázka měsíčního výstupu. Diferenciátor zůstává, ale musí být formulován jako „opakované kontroly s prahy a doložený
   měsíční výstup“, ne jako „checklist“.

**Technická korekce návrhu:** slib „víme to do 24 hodin“ nelze postavit na denních číslech GA4 – ta mají latenci 24–48 h
a dosypávají se až 72 h (EG4-034). Musí stát na tag monitoringu / sGTM logu / reconciliaci s backendem e-shopu, nebo musí být
formulován jako „do 24 hodin od okamžiku, kdy jsou data k dispozici“.

### 3.5 Prahy alertů: poprvé máme veřejně doložená CZ/SK čísla

| Veličina | Práh | Zdroj |
|---|---|---|
| GA4 vs. e-shop / účetnictví | jednotky % = OK, **desítky % = problém** | EG4-024 (CZ), EG4-026 (SK) – dvě nezávislé agentury |
| Ztráta adblockery, střední Evropa | ~5 % (Dexfinity) až ~10 % (Šabatka, CZ projekty) | EG4-028, EG4-033 |
| Ztráta consentem | 30–60 % (opt-in 40–70 %) | EG4-033 |
| GA4 vs. účetnictví, SK | 5–10 % méně objednávek běžně | EG4-028 |
| Tichý přepnutí atribuce | pod 400 konverzí / 28 dní | EG4-030 |
| Thresholding | typicky 30–50 uživatelů/událostí | EG4-033 |

Tohle je přímo použitelné pro artefakt „Co hlídáme a s jakými prahy“ – a je to podložené českými a slovenskými zdroji,
ne převzaté ze zahraničí.

---

## 4. MEZERY, které zůstávají

1. **Facebookové skupiny (Webová analytika CZ/SK, Google Analytics CZ, PPCkaři, E-commerce) se nepodařilo otevřít.**
   `facebook.com/groups` i `mbasic.facebook.com` vrací „Facebook is not available on this browser“, vyhledávače obsah skupin
   neindexují. Bez přihlášeného účtu tuhle mezeru zavřít nelze – zbývá jediná cesta: požádat někoho s účtem o export vláken,
   nebo se zeptat přímo v rozhovorech fáze validace.
2. **Ecommerce Bridge (CZ i SK) je stále 403** – včetně článku „Efektivní analytika pro e-shopy“ a profilů dodavatelů;
   nepomohl ani `r.jina.ai`. Konferenční přednášky Ecommerce Day (Brno 22. 3. 2025, Bratislava 3. 4. 2025, Brno 20. 9. 2025
   „Data, ceny a ziskovost pod kontrolou“) tedy zůstávají nevytěžené – jsou známé jen názvy bloků, ne obsah.
3. **MeasureCamp Czechia nepublikuje session boardy z minulých ročníků** (`czechia.measurecamp.org` má jen agendu:
   32 sessions, 4 sály, 30 min). Máme jen zápis třetí strany z Brna 2025 se **5 z 32 session**. Zbylých 27 témat neznáme.
   Cesta: zápisy dalších účastníků, fotky boardu na LinkedIn/Facebooku po 12. 9. 2026 (12. ročník).
4. **Žádná česká ani slovenská výpověď s vyčíslením v korunách** – ani v tomto kole. Nejblíž je Šabatkovo „problém za reálné
   peníze“ a „desítky procent rozdílu v PNO“ (EG4-032). Vyčíslení promarněného spendu českého e-shopu musí přinést rozhovory.
5. **Žádná výpověď typu „trvalo nám X týdnů, než jsme si toho všimli“ z CZ/SK.** Sloupec `time_to_notice` je v tomto vzorku
   u 10 z 15 řádků „neuvedeno“ (u dalších 3 „neuvedeno“ s poznámkou, proč), protože zdroje jsou odborné (blogy, přednášky), ne stížnosti klientů. Tohle je přímý důsledek
   nedostupnosti FB skupin a je to nejcennější chybějící údaj – doporučuji ho udělat první otázkou validačních rozhovorů.
6. **Webtrh nemá vlákna o cenách za analytiku.** Sekce „Webová analytika“ má 9 aktivních vláken, všechna technická; vlákno
   „Hodinová sazba“ je z roku 2013 a o analytice není. CZ cenový vzorek se tedy komunitně doplnit nepodařilo.
7. **LinkedIn: jen posty, ne komentářová vlákna v plné šíři.** Fetch vrací hlavní post a část komentářů, ne všech
   (u postu Jana Řezáče je uváděno 25 komentářů, načteno 10). Reakce, počty lajků a sdílení nejsou dostupné.
8. **SK strana je stále tenčí než CZ**: 12 evidence řádků SK vs. 29 CZ a 2 pain řádky SK vs. 13 CZ; slovenské výpovědi pocházejí ze dvou zdrojů
   (Dexfinity, MeasureCamp Bratislava). SK freelance sazby a SK ceny za správu se komunitně dohledat nepodařilo.
9. **Neověřeno**: tvrzení z jednoho vyhledávacího snippetu, že „více než 40 % e-shopů má nainstalované GA4 bez měření tržeb“,
   se na uváděném zdroji (visibility.sk) nepotvrdilo – článek žádná procenta neobsahuje. **Nepoužívat.**
