# URL: https://datalayer.vitnovotny.cz/sluzby/server-side-tracking

1. [Úvod](/)
2. [Služby](/sluzby)
3. Server-side tracking

[ server-side GTM ]

# Server-side tracking na vaší doméně a vašem cloudu

Prohlížeč pošle každou událost jen jednou – na server-side Google Tag Manager na vaší doméně. Ten ji podle souhlasu návštěvníka předá do GA4, Google Ads, Meta Conversions API nebo Skliku. Získáte kontrolu nad tím, co a komu odchází, povinnost souhlasu ale zůstává stejná.

[[ Konzultovat architekturu ]](#kontakt)[[ Jak to funguje ]](#jak-to-funguje)

Úvodní konzultace zdarma · provoz serveru platíte napřímo Googlu nebo hostingu

* Server ve vašem Google Cloudu
* Kontejnery a přístupy zůstávají vaše
* Monitoring je součást nasazení

[ symptomy ]

## Poznáváte se?

Server-side dává smysl, když měření funguje, ale narazilo na limity prohlížeče, rychlosti nebo kontroly nad daty.

meta

### Meta vidí méně nákupů než e-shop

Pixel zachytí jen část objednávek a kampaně se učí z neúplných dat.

itp

### Zákazníci ze Safari se „rozpadají“

Safari zkracuje cookies z JavaScriptu na sedm dní a vracející se zákazník vypadá jako nový.

perf

### IT tlačí na rychlost a bezpečnost

Desítka cizích skriptů zpomaluje web a komplikuje bezpečnostní politiku.

dpo

### DPO chce vědět, co komu odchází

Bez prostředníka nemáte jak doložit ani omezit, co skripty posílají.

[ výstupy ]

## Co uděláme a co dostanete

Ne „zapnutý server“, ale zdokumentovanou architekturu, kterou převezme váš tým nebo kdokoli jiný.

architecture.pdf

### Návrh architektury

Co jde přes server, co zůstává v prohlížeči a kde se rozhoduje o souhlasu.

gcp

### Server ve vašem Google Cloudu

Cloud Run s nejméně dvěma servery, doména, certifikát a rozpočtový alert.

gtm-web · gtm-server

### Kontejnery GTM

Webový i serverový kontejner s verzemi a jednotnými názvy.

events.csv

### Mapa událostí a deduplikace

Stejné ID objednávky pro všechny platformy, žádná konverze dvakrát.

consent-matrix

### Matice souhlasu

Který tag smí běžet při jakém souhlasu – podklad pro DPO.

runbook.md

### Monitoring a provozní příručka

Alerty na výpadek a pokles událostí, postup při výpadku i exit plán.

[ architektura ]

## Jak server-side funguje

Místo pěti skriptů, které posílají data každý zvlášť, odejde z prohlížeče jedna událost na váš server. Ten ji rozdělí dál.

zdroje

* prohlížeč: dataLayer a souhlas
* backend nebo CRM: platby, storna, leady

sgtm.vasweb.cz

* server-side GTM
* Cloud Run ve vašem cloudu
* rozhodnutí podle souhlasu

platformy

* GA4 a Google Ads
* Meta Conversions API
* Sklik a TikTok

Prohlížeč a backend posílají události na server-side GTM na vaší doméně. Server je podle souhlasu návštěvníka předá platformám.

* **Kontrola nad daty.** Osobní údaje před odesláním odstraníte nebo zahashujete.
* **Spolehlivější konverze.** Meta CAPI, rozšířené konverze Google Ads a platby z backendu.
* **Souhlas platí dál.** Kdo cookies odmítne, toho neměříme ani touto cestou.

[ rozhodnutí ]

## Vyplatí se vám server-side?

Server-side není první krok. Když se vám nevyplatí, řekneme to rovnou.

### Dává smysl, když…

* reklama tvoří velkou část objednávek nebo poptávek
* potřebujete Meta CAPI, Sklik nebo TikTok s deduplikací
* chcete posílat události z backendu – platby, storna, CRM
* IT nebo DPO požaduje kontrolu nad odchozími daty
* někdo bude server vlastnit a hlídat

### Doporučíme počkat, když…

* nesedí základní měření→ nejdřív [audit měření](/sluzby/audit-mereni)
* chybí funkční cookie lišta→ [Consent Mode v2](/sluzby/cookie-lista-consent-mode)
* inzerujete jen v Google Ads→ často stačí Google Tag Gateway
* máte malý rozpočet a návštěvnost
* čekáte měření bez souhlasu – to server-side nedělá

Kde server poběží

| Kritérium | Google Cloud ve vašem projektu | Spravovaný hosting – Stape, DataNostro |
| --- | --- | --- |
| Kdo vlastní účet | vy, faktury chodí od Googlu | vy, nebo agentura |
| Provoz a aktualizace | Cloud Run škáluje sám, aktualizace řešíme my nebo IT | řeší poskytovatel |
| Audit a přístupy | vlastní IAM a logy | v rozhraní poskytovatele |
| Odchod k jinému dodavateli | nic nestěhujete | export kontejneru a změna DNS |
| Volíme pro | velké firmy, regulované obory, víc domén | rychlý start, menší e-shopy |

**zhruba 45 dolarů**měsíčně za jeden server Cloud Run podle Googlu, do produkce aspoň dva

**110–150 dolarů**realistický měsíční provoz včetně load balanceru a logů, ceník k říjnu 2026

**od 349 Kč**měsíčně spravovaný hosting DataNostro za 500 tisíc požadavků

Provoz platíte napřímo poskytovateli. Před spuštěním spočítáme odhad pro vaši návštěvnost a nastavíme rozpočtový alert.

[ postup ]

## Jak nasazení probíhá

Stejných pět kroků jako u všech našich služeb. Starý i nový způsob měření běží souběžně, dokud čísla nesedí.

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

   Nasadíme server do vašeho Google Cloudu, napojíme web a platformy – GA4, Google Ads, Meta CAPI a Sklik – a nastavíme deduplikaci.

   od vás: fakturační účet Google Cloud, úprava DNS, role v reklamních účtech
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

[ monitoring ]

## Jak poznáte, že server-side funguje

Když server vypadne, nepřestane měřit jedna značka, ale všechny platformy najednou. Proto je monitoring součást každého nasazení, ne příplatek.

* upozornění při výpadku měřicího endpointu a při vyšší chybovosti serveru
* denní srovnání objednávek: backend, server, GA4 a Meta
* kontrola deduplikace a kvality shody událostí v Metě
* rozpočtový alert v Google Cloudu a přehled publikovaných verzí kontejneru

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: co jde přes server a co zůstává v prohlížeči

Platformy v hybridní architektuře

| Platforma | Přes server | V prohlížeči a deduplikace |
| --- | --- | --- |
| GA4 | Událost přes GA4 klienta v sGTM | Google tag posílá data na vaši doménu |
| Google Ads | Konverze a rozšířené konverze s hashovanými údaji | Google tag a zachycení `gclid`, deduplikace přes `transaction_id` |
| Meta | Conversions API s hashovaným e-mailem a telefonem | Meta Pixel souběžně, stejné `event_name` a `event_id` |
| Seznam | Event Measurement server-to-server | Povinný `sul.js`, stejnou událost posíláme jen jednou cestou |
| TikTok a LinkedIn | Events API a Conversions API | Pixel a Insight Tag se stejným `event_id` |

Náklady na provoz Cloud Run tvoří servery, malý preview server pro ladění, logy, síť a případně load balancer pro endpoint na stejné doméně. Logy nad zhruba milion požadavků měsíčně mohou podle Googlu náklady výrazně zvýšit, proto nastavujeme rozumnou úroveň logování. Region `europe-west3` ve Frankfurtu patří do dražšího pásma a sezónní špičky, třeba Black Friday, mohou krátkodobě potřebovat víc instancí.

Je server-side legální? Potřebuju pořád cookie lištu?

Ano, lištu potřebujete dál. Server-side je jen jiná technická cesta – k ukládání a čtení netechnických údajů potřebujete předchozí souhlas podle § 89 odst. 3 zákona o elektronických komunikacích. Server proto s každou událostí dostane stav souhlasu a podle něj data pošle, nebo ne. Nejsme advokátní kancelář – právní posouzení zajistí váš právník.

Pomůže server-side proti adblockům a Safari ITP?

Obcházet volbu návštěvníka není cíl. Server-side pomůže tam, kde limity prohlížeče dopadají i na souhlasící návštěvníky: cookies, které nastaví server vaší domény, Safari neomezuje stejně jako cookies z JavaScriptu. Kdo měření odmítne, toho neměříme.

Kolik stojí implementace a provoz serveru?

Cenu implementace skládáme podle rozsahu – rozhoduje počet platforem a domén, stav datové vrstvy a požadavky IT. Provoz platíte přímo Googlu nebo hostingu: u Cloud Run realisticky 110–150 dolarů měsíčně, spravovaný hosting od stovek korun. Před spuštěním spočítáme odhad pro vaši návštěvnost a nastavíme rozpočtový alert.

Jak dlouho trvá nasazení a co od vás potřebujeme?

Délku určuje hlavně souběžný běh s porovnáním dat a u velkých firem bezpečnostní revize. Harmonogram naplánujeme v prvním kroku. Potřebujeme přístupy do GTM, GA4 a reklamních účtů přes role, fakturační účet Google Cloud, úpravu DNS a vývojáře pro případné úpravy datové vrstvy.

Google Tag Gateway, nebo server-side GTM?

Gateway načítá Google značku z vaší domény přes CDN. Je jednodušší a levnější, ale jen pro Google značky a bez úprav dat. Pokud potřebujete Metu, Sklik, kontrolu nad osobními údaji nebo události z backendu, potřebujete server-side GTM. Obojí lze kombinovat.

Komu patří data, účty a kontejnery?

Vám. Server běží ve vašem Google Cloudu, kontejnery i reklamní účty jsou vaše a my dostáváme jen role. Po skončení spolupráce odebereme své přístupy podle provozní příručky a měření běží dál beze změny.

[ pokračujte ]

[**Měření konverzí**Ads, Meta, Sklik i Heureka vidí totéž](/sluzby/mereni-konverzi)[**Cookie lišta a Consent Mode v2**souhlas legálně a bez zbytečné ztráty dat](/sluzby/cookie-lista-consent-mode)[**Správa webu a měření**hlídáme, aby měření nepřestalo fungovat](/sluzby/sprava-webu-a-mereni)

[ Kontakt ]

## Probereme, jestli se vám server-side vyplatí

Na třicetiminutové konzultaci zdarma projdeme vaše měření. Odpovídáme do jednoho pracovního dne.

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