# URL: https://datalayer.vitnovotny.cz/sluzby/audit-mereni

1. [Úvod](/)
2. [Služby](/sluzby)
3. Audit měření

[ audity · audit měření ]

# Audit měření: GA4, GTM, consent a konverze

Audit měření je nezávislá kontrola, jestli analytická a reklamní data odpovídají skutečnosti. Prověříme GA4, Google Tag Manager, souhlas návštěvníků a konverze v Google Ads, Metě a Skliku a porovnáme je s objednávkami v administraci nebo leady v CRM. Nálezy seřadíme podle dopadu a navrhneme plán oprav.

[[ Objednat audit měření ]](#kontakt)[[ Rychlá kontrola zdarma ]](#rychla-kontrola)

Přístupy jen pro čtení · NDA na požádání · report vlastníte vy

* Testovací nákupy a formuláře
* Porovnání s administrací nebo CRM
* Nálezy s prioritou A, B a C

[ kdy audit ]

## Poznáváte se?

Audit se vyplatí, když čísla přestanou dávat smysl, nebo těsně před velkou změnou.

≠

### Čísla nesedí

GA4, Google Ads, Meta a administrace ukazují čtyři různá čísla a nikdo neumí vysvětlit proč.

consent

### Po nové cookie liště spadly konverze

Propad o desítky procent přišel hned po nasazení lišty nebo po změně jejího nastavení.

handover

### Měníte agenturu nebo přebíráte web

Potřebujete vědět, co přebíráte: kdo má přístupy, jak vypadá nastavení a co nefunguje.

migration

### Chystáte redesign, migraci nebo server-side

Než postavíte nové měření, je dobré vědět, které chyby nepřenést.

[ rozsah ]

## Co v auditu webové analytiky kontrolujeme

Audit nekončí u nastavení. Projdeme web jako zákazník, uděláme testovací nákup nebo poptávku a výsledek porovnáme se všemi systémy.

A · GA4B · GTM a další kódyC · Souhlas a cookiesD · Reklamní systémyE · Shoda s administracíF · Datová vrstva a technika

Při auditu Google Analytics 4 procházíme hlavně:

* vlastnictví účtu a property, role, přístupy a retenci dat
* filtry interní návštěvnosti a nežádoucí referraly, typicky platební brány
* klíčové události a e-commerce: `transaction_id`, hodnotu, měnu a duplicity
* podíl `(not set)`, UTM, kanály a propojení s Google Ads a BigQuery

Potřebujete jen kontrolu kontejneru? Samostatný audit GTM popisuje stránka [Google Tag Manager](/sluzby/google-tag-manager).

* inventura tagů, spouštěčů a proměnných, duplicity a nepoužívané položky
* kódy mimo GTM: šablona webu, pluginy a integrace platformy
* Custom HTML, šablony třetích stran, verze a oprávnění Publikovat
* dopad tagů na rychlost webu

Jde o technickou kontrolu, ne o právní posouzení. Technickou nápravu řeší služba [Cookie lišta a Consent Mode v2](/sluzby/cookie-lista-consent-mode).

* co web načte a jaké cookies vzniknou **před** souhlasem
* Consent Mode v2: výchozí stav a aktualizace všech čtyř signálů
* jestli web respektuje odmítnutí, změnu volby a odvolání souhlasu
* stav consent mode v diagnostice Google Ads a v nastavení GA4

* **Google Ads:** tag, nebo import z GA4, primární akce, hodnoty, duplicity a rozšířené konverze
* **Meta:** Pixel a Conversions API, deduplikace přes `event_id`, Event Match Quality
* **Sklik a Seznam:** konverzní a retargetingový kód vs. nový Seznam Event Measurement
* **Heureka, Zboží.cz, TikTok a LinkedIn** podle toho, co používáte

* objednávky a tržby po dnech: GA4 vs. administrace za třicet až devadesát dní
* rozpad podle platební metody, zařízení, prohlížeče a země – tam chyby vyplavou
* u B2B formuláře v GA4 vs. poptávky v CRM a předávání `gclid`
* kolik rozdílu čekáme kvůli souhlasu, blokaci a stornům a kolik je chyba

* struktura datové vrstvy vs. schéma GA4, časování pushů a SPA
* server-side GTM, pokud ho máte: deduplikace, first-party cookies, Google Tag Gateway
* **testovací nákupy:** kartou s návratem z brány, převodem, na dobírku a s kupónem
* **další scénáře:** obnovení děkovací stránky, formuláře, přihlášení a volba v cookie liště

[ výstupy ]

## Co od nás dostanete

Report vlastníte vy a poslouží i při jednání s agenturou nebo dodavatelem webu.

audit-report.pdf

### Report z auditu

Manažerské shrnutí na jedné straně a nálezy s důkazem, dopadem, prioritou a pracností.

remediation-plan.xlsx

### Plán oprav

Pořadí A → B → C, závislosti a kdo co opraví – třeba „nejdřív datová vrstva, pak tagy“.

reconciliation.xlsx

### Porovnání čísel

GA4 vs. administrace nebo CRM vs. reklamní systémy, s vysvětlením každého rozdílu.

gtm-inventory.xlsx · qa-protocol.pdf

### Inventura GTM a protokol testů

Všechny tagy s doporučením ponechat, upravit, nebo smazat a výsledky testovacích scénářů se screenshoty.

meeting

### Šedesátiminutová prezentace

Nálezy projdeme s marketingem, vývojem a vedením.

[ kontrola zdarma ]

## Rychlá kontrola zdarma, nebo celý audit?

Nevíte, jestli audit potřebujete? Začněte rychlou kontrolou – ve formuláři stačí adresa webu a do zprávy napište „Rychlá kontrola měření“.

zdarma

### Rychlá kontrola zdarma

Podíváme se na web zvenku, bez přístupů, a tři až pět nejvýraznějších nálezů pošleme e-mailem nebo probereme na dvacetiminutovém hovoru.

* tagy a cookies před souhlasem, stav Consent Mode
* duplicity GTM a Google tagu, reklamní pixely
* e-commerce události na produktu a v košíku, hrubý dopad na rychlost
* nákup, účty ani shodu s administrací nekontrolujeme

[Chci rychlou kontrolu →](#kontakt)

audit

### Audit měření

Všech šest oblastí A–F, testovací nákupy a formuláře a porovnání čísel s administrací nebo CRM.

* přístupy jen pro čtení
* report s prioritami A, B a C a plán oprav
* prezentace nálezů s vaším týmem
* nabídka s pevným rozsahem po úvodním hovoru

[Objednat audit →](#kontakt)

[ postup ]

## Jak audit probíhá

Audit je první z pěti kroků, které platí pro všechny naše služby. Data ze všech systémů svedeme do jednoho porovnání a každý rozdíl buď vysvětlíme, nebo z něj uděláme nález. Od vás potřebujeme přístupy pro čtení, export objednávek nebo leadů bez osobních údajů a možnost testovacího nákupu.

1. 01

   ### Audit

   Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.

   od vás: přístupy pro čtení
2. 02

   ### Měřicí plán

   Byznys cíle převedeme na události, parametry a pravidla pojmenování.

   od vás: hodinová schůzka a schválení plánu
3. 03

   ### Implementace

   Volitelně: nálezy opravíme sami, nebo připravíme zadání pro vaše vývojáře a jejich práci zkontrolujeme.

   od vás: přístupy pro úpravy, u datové vrstvy vývojář
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

[ ukázka – fiktivní data ]

## Jak vypadá report z auditu

Výřez z tabulky nálezů. V reportu má každý nález i důkaz, doporučení, pracnost a toho, kdo ho opraví.

A1 · datová vrstva

### Web po návratu z brány neodešle nákup

GA4 nevidí šestnáct procent plateb kartou a kampaně vypadají hůř.

A2 · souhlas

### Meta Pixel běží před volbou v cookie liště

Data bez souhlasu a možný rozpor s § 89 odst. 3 ZEK, který by měl posoudit právník.

A3 · Google Ads

### Google Ads počítá nákup dvakrát

Import z GA4 i tag Google Ads jako primární akce nadhodnotí konverze a zkreslí optimalizaci nabídek.

B2 · GA4

### Platební brány jako referral

GA4 přepíše zdroj nákupu na platební bránu.

C1 · GTM

### 37 nepoužívaných tagů bez názvosloví

Pomalejší správa kontejneru a vyšší riziko chyb.

Fiktivní data. Priorita A: opravit do dvou týdnů · B: do jednoho až dvou měsíců · C: podle kapacity.

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: struktura reportu, priority a přístupy k auditu

### Struktura reportu

* **Manažerské shrnutí** na jedné straně: stav šesti oblastí, pět nejdůležitějších nálezů a odhad dopadu na rozhodování.
* **Rozsah a metodika:** co jsme kontrolovali, období dat a testovací scénáře.
* **Nálezy podle oblastí:** popis, důkaz v podobě screenshotu nebo síťového požadavku, dopad, doporučení, priorita, pracnost a kdo opraví.
* **Porovnání čísel** GA4, administrace nebo CRM a reklamních systémů s vysvětlením rozdílů.
* **Plán oprav** s pořadím, odhadem pracnosti a závislostmi.
* **Přílohy:** inventura GTM, seznam cookies a požadavků před souhlasem a po něm, protokol testovacích scénářů.

### Co znamenají priority

* **A – kritické:** chyby v datech vedou ke špatným rozhodnutím nebo optimalizaci kampaní, případně hrozí právní či smluvní riziko kvůli souhlasu, osobním údajům nebo pravidlům Googlu.
* **B – důležité:** data mají mezery nebo zkreslení a omezují analýzu, hlavní čísla ale zůstávají použitelná.
* **C – doporučení:** údržba, přehlednost a rozvoj, třeba názvosloví, BigQuery nebo dokumentace.

Přístupy a podklady

| Systém | Co potřebujeme | Proč |
| --- | --- | --- |
| GA4 | roli Čtenář na úrovni property | nastavení a data, metriky tržeb neomezujte |
| Google Tag Manager | oprávnění Číst, nebo export kontejneru | inventura tagů |
| Google Ads | přístup Jen pro čtení | konverzní akce, diagnostika consent mode |
| Meta Business | zobrazení datové sady v Events Manageru | deduplikace, kvalita párování |
| Sklik a Seznam | přístup k účtu jen pro čtení | konverze, Seznam Event Measurement |
| Search Console | omezený uživatel | propojení s GA4 |
| Cookie lišta, tedy CMP | čtení v administraci, pokud CMP používáte | kategorie a signály |
| Administrace e-shopu | export objednávek bez osobních údajů: číslo, datum a čas, hodnota s DPH i bez, doprava, platba, stav | porovnání čísel |
| CRM u B2B | export leadů bez osobních údajů: ID, datum, zdroj, stav | porovnání formulářů a leadů |
| Testovací nákup | slevový kód na celou částku nebo testovací platební metoda a možnost storna | testovací scénáře |

Kolik audit měření stojí?

Cenu ovlivňuje počet systémů, jako jsou GA4, GTM, Google Ads, Meta, Sklik nebo srovnávače, dále počet webů a domén, typ webu a to, jestli chcete i porovnání s CRM. Po úvodním hovoru dostanete nabídku s pevným rozsahem. Rychlá kontrola zvenku je zdarma.

Jak dlouho audit trvá?

Záleží hlavně na tom, jak rychle se podaří zajistit přístupy, export objednávek a testovací nákup, a na počtu systémů a webů. U velkých firem s více weby a schvalováním přístupů počítejte s delší dobou. Délku odhadneme po úvodním hovoru, až budeme znát rozsah.

Jaké přístupy potřebujete a je to bezpečné?

Stačí přístupy pro čtení: role Čtenář v GA4, oprávnění Číst v Tag Manageru, přístup Jen pro čtení v Google Ads a obdobně v Metě a Skliku. Nic neměníme a od e-shopu potřebujeme export objednávek **bez osobních údajů zákazníků**. Na požádání podepíšeme NDA a po auditu doporučíme přístupy odebrat. Úplný seznam najdete v Technických detailech.

Posoudíte i právní stránku cookie lišty?

Ne, nejsme advokátní kancelář. Ověřujeme technickou stránku: co web spustí před souhlasem a po něm a jestli tagy respektují volbu návštěvníka. Pro orientaci: § 89 odst. 3 zákona č. 127/2005 Sb. vyžaduje k ukládání údajů, které nejsou nezbytné pro poskytnutí služby, předchozí souhlas. Texty lišty a zásady by měl posoudit váš právník.

Kdo nálezy opraví – vy, nebo naši vývojáři?

Jak chcete. Report píšeme tak, aby podle něj mohl opravy udělat kdokoli: váš vývojář, agentura, nebo my. Nálezy v GTM, GA4 a consentu většinou opravujeme sami, úpravy datové vrstvy připravíme jako zadání pro vývojáře a jejich práci zkontrolujeme.

Jak velký rozdíl mezi GA4 a e-shopem je normální?

Pevné číslo neexistuje – záleží na podílu návštěvníků, kteří odmítnou souhlas, na blokování měření v prohlížečích a na stornech. Důležitější než velikost rozdílu je, zda je stabilní a vysvětlitelný. Když se rozdíl liší podle platební metody nebo prohlížeče, jde téměř jistě o chybu, proto v auditu porovnáváme čísla v tomto rozpadu.

[ pokračujte ]

[**Implementace GA4**čísla, která sedí s tržbami](/sluzby/implementace-ga4)[**Měření konverzí**Ads, Meta, Sklik i Heureka vidí totéž](/sluzby/mereni-konverzi)[**Správa webu a měření**hlídáme, aby měření nepřestalo fungovat](/sluzby/sprava-webu-a-mereni)

[ Kontakt ]

## Zjistěte, kde utíkají data

Pošlete adresu webu a krátce popište, co nesedí. Ozveme se s návrhem rozsahu, nebo rovnou s výsledkem rychlé kontroly.

* E-mail[one@datalayer.cz](mailto:one@datalayer.cz)

VNOdpovídá Vít Novotnýobvykle do jednoho pracovního dne

1. Do jednoho pracovního dne navrhneme termín.
2. Na třicet minut projdeme web a cíle.
3. Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.

Web firmy

Jméno a příjmeníE-mail

Co řešíte? (nepovinné)

GA4 a Tag ManagerServer-sideCookie lišta a consentKonverze a reklamyBigQuery a reportingAuditJiné

S čím vám můžeme pomoci?+ Přidat telefon a web (nepovinné)

Telefon (nepovinné)Web (nepovinné)

Údaje použijeme jen k odpovědi na zprávu a případné nabídce. [Jak s nimi zacházíme](/zpracovani-osobnich-udaju). Žádný newsletter, žádný spam.

[ Odeslat zprávu ]

Ozveme se do jednoho pracovního dne.