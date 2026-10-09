# URL: https://datalayer.vitnovotny.cz/sluzby/server-side-tracking

1. [Úvod](/)
2. [Služby](/sluzby)
3. Server-side tracking

sběr dat

# Server-side tracking na vaší doméně a ve vašem cloudu

Prohlížeč pošle každou událost jen jednou – na server-side Google Tag Manager (GTM) na vaší doméně. Ten ji podle souhlasu návštěvníka předá do GA4, Google Ads, Meta Conversions API (CAPI) nebo Skliku. Máte pod kontrolou, co a komu odchází; povinnost získat souhlas se nemění.

[Konzultovat architekturu](#kontakt)[Jak to funguje](#jak-to-funguje)

Úvodní konzultace zdarma, provoz serveru platíte přímo Googlu nebo poskytovateli hostingu

* Server ve vašem Google Cloudu
* Kontejnery a přístupy zůstávají vaše
* Monitoring je součástí nasazení

symptomy

## Poznáváte se?

Server-side měření má smysl, když základní měření funguje, ale naráží na limity prohlížeče, na požadavky IT na rychlost nebo na kontrolu nad daty.

Meta

### Meta vidí méně nákupů než e-shop

Pixel zachytí jen část objednávek a kampaně se učí z neúplných dat.

Safari

### Zákazníci ze Safari se „rozpadají“

Safari zkracuje cookies z JavaScriptu na sedm dní a vracející se zákazník vypadá jako nový.

rychlost

### IT tlačí na rychlost a bezpečnost

Desítka cizích skriptů zpomaluje web a komplikuje bezpečnostní politiku.

osobní údaje

### Pověřenec pro ochranu osobních údajů chce vědět, co komu odchází

Bez prostředníka nemáte jak doložit ani omezit, co skripty posílají.

výstupy

## Co uděláme a co dostanete

Dostanete zdokumentovanou architekturu, kterou převezme váš tým nebo kdokoli jiný.

architecture.pdf

### Návrh architektury

Co jde přes server, co zůstává v prohlížeči a kde se rozhoduje o souhlasu.

Cloud Run

### Server ve vašem Google Cloudu

Cloud Run s nejméně dvěma servery, doména, certifikát a upozornění na rozpočet.

gtm-web, gtm-server

### Kontejnery GTM

Webový i serverový kontejner s verzemi a jednotnými názvy.

events.csv

### Mapa událostí a deduplikace

Stejné ID objednávky pro všechny platformy, žádná konverze dvakrát.

matice-souhlasu

### Matice souhlasu

Který tag smí běžet při jakém souhlasu – podklad pro pověřence.

runbook.md

### Monitoring a provozní příručka

Upozornění na výpadek a pokles událostí, postup při výpadku i plán pro odchod k jinému dodavateli.

architektura

## Jak server-side měření funguje

Místo pěti skriptů, které posílají data každý zvlášť, odejde z prohlížeče jedna událost na váš server. Ten ji rozešle dál.

zdroje

* prohlížeč: dataLayer a souhlas
* backend nebo CRM: platby, storna, poptávky

sgtm.vasweb.cz

* server-side GTM
* Cloud Run ve vašem cloudu
* rozhodnutí podle souhlasu

platformy

* GA4 a Google Ads
* Meta CAPI
* Sklik a TikTok

Prohlížeč a backend posílají události na server-side GTM na vaší doméně. Server je podle souhlasu návštěvníka předá platformám.

* **Kontrola nad daty.** Osobní údaje před odesláním odstraníte nebo zahashujete.
* **Spolehlivější konverze.** Meta CAPI, rozšířené konverze Google Ads a platby z backendu.
* **Souhlas platí dál.** Kdo cookies odmítne, toho neměříme ani touto cestou.

rozhodnutí

## Kdy se server-side měření vyplatí

Server-side měření není první krok. Když se vám nevyplatí, řekneme to rovnou.

### Má smysl, když…

* reklama tvoří velkou část objednávek nebo poptávek
* potřebujete Meta CAPI, Sklik nebo TikTok s deduplikací
* chcete posílat události z backendu – platby, storna, CRM
* IT nebo pověřenec požaduje kontrolu nad odchozími daty
* někdo bude mít server na starosti a bude ho hlídat

### Doporučíme počkat, když…

* nesedí základní měřenínejdřív [audit měření](/sluzby/audit-mereni)
* chybí funkční cookie lištanejdřív [Consent Mode v2](/sluzby/cookie-lista-consent-mode)
* inzerujete jen v Google Adsčasto stačí Google Tag Gateway
* máte malý rozpočet a návštěvnost
* čekáte měření bez souhlasu – to server-side GTM nedělá

Kde server poběží

| Kritérium | Google Cloud ve vašem projektu | Spravovaný hosting – Stape, DataNostro |
| --- | --- | --- |
| Kdo vlastní účet | vy, faktury chodí od Googlu | vy, nebo agentura |
| Provoz a aktualizace | Cloud Run škáluje sám, aktualizace řešíme my nebo IT | řeší poskytovatel |
| Audit a přístupy | vlastní správa přístupů (IAM) a logy | v rozhraní poskytovatele |
| Odchod k jinému dodavateli | nic nestěhujete | export kontejneru a změna DNS |
| Volíme pro | velké firmy, regulované obory, víc domén | rychlý start, menší e-shopy |

**zhruba 45 dolarů**měsíčně za jeden server Cloud Run podle Googlu, pro produkci potřebujete aspoň dva

**110–150 dolarů**realistický měsíční provoz včetně load balanceru a logů, ceník k říjnu 2026

**od 349 Kč**měsíčně spravovaný hosting DataNostro za 500 tisíc požadavků

Před spuštěním spočítáme odhad pro vaši návštěvnost a nastavíme upozornění na rozpočet.

postup

## Jak nasazení probíhá

Stejných pět kroků jako u všech našich služeb. Starý i nový způsob měření běží souběžně, dokud čísla nesedí.

1. 01

   ### Audit

   Projdeme GA4, GTM, souhlas a reklamní systémy a porovnáme je s administrací nebo CRM.

   Od vás: přístupy pro čtení
2. 02

   ### Měřicí plán

   Obchodní cíle převedeme na události, parametry a pravidla pojmenování.

   Od vás: hodinová schůzka a schválení plánu
3. 03

   ### Implementace

   Nasadíme server do vašeho Google Cloudu, napojíme web a platformy – GA4, Google Ads, Meta CAPI a Sklik – a nastavíme deduplikaci.

   Od vás: fakturační účet Google Cloud, úprava DNS, role v reklamních účtech
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s administrací nebo CRM.

   Od vás: testovací objednávka nebo poptávka a export z administrace nebo CRM
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a budeme hlídat, aby měření po dalším releasu nepřestalo fungovat.

   Od vás: předávací schůzka

monitoring

## Jak poznáte, že server-side měření funguje

Když server vypadne, nepřestane měřit jeden tag, ale všechny platformy najednou. Proto monitoring patří ke každému nasazení a neplatíte za něj příplatek.

* upozornění při výpadku měřicího endpointu a při vyšší chybovosti serveru
* denní srovnání objednávek: backend, server, GA4 a Meta
* kontrola deduplikace a kvality shody událostí v Metě
* upozornění na rozpočet v Google Cloudu a přehled publikovaných verzí kontejneru

FAQ

## Časté otázky

Technické detailyCo jde přes server a co zůstává v prohlížeči

Platformy v hybridní architektuře

| Platforma | Přes server | V prohlížeči a deduplikace |
| --- | --- | --- |
| GA4 | Událost přes klienta GA4 v server-side GTM | Google tag posílá data na vaši doménu |
| Google Ads | Konverze a rozšířené konverze s hashovanými údaji | Google tag a zachycení `gclid`, deduplikace přes `transaction_id` |
| Meta | CAPI s hashovaným e-mailem a telefonem | Meta Pixel souběžně, stejné `event_name` a `event_id` |
| Sklik | Seznam Event Measurement ze serveru na server | Povinný `sul.js`, stejnou událost posíláme jen jednou cestou |
| TikTok a LinkedIn | Events API a Conversions API | TikTok Pixel a LinkedIn Insight Tag se stejným `event_id` |

Náklady na provoz Cloud Run tvoří servery, malý náhledový server pro ladění, logy, síť a případně load balancer pro endpoint na stejné doméně. Při více než zhruba milionu požadavků měsíčně mohou logy podle Googlu náklady výrazně zvýšit, proto nastavujeme rozumnou úroveň logování. Region `europe-west3` ve Frankfurtu patří do dražšího pásma. V sezónních špičkách, třeba na Black Friday, může být krátkodobě potřeba víc serverů.

Je server-side měření legální? Potřebuji pořád cookie lištu?

Lištu potřebujete dál. Server-side měření je jen jiná technická cesta: ukládání a čtení netechnických údajů dál vyžaduje předchozí souhlas podle § 89 odst. 3 zákona o elektronických komunikacích. Server proto s každou událostí dostane stav souhlasu a podle něj data pošle, nebo ne. Nejsme advokátní kancelář – právní posouzení zajistí váš právník.

Pomůže server-side měření proti adblockům a omezením v Safari?

Obcházet volbu návštěvníka není cíl. Server-side měření pomůže tam, kde limity prohlížeče dopadají i na souhlasící návštěvníky: cookies, které nastaví server vaší domény, omezuje ochrana proti sledování v Safari (ITP) méně přísně než cookies z JavaScriptu. Kdo měření odmítne, toho neměříme.

Kolik stojí implementace a provoz serveru?

Cena implementace se odvíjí od rozsahu – rozhoduje počet platforem a domén, stav datové vrstvy a požadavky IT. Fakturu za provoz dostáváte přímo od Googlu nebo poskytovatele hostingu: u Cloud Run realisticky 110–150 dolarů měsíčně, spravovaný hosting stojí od stovek korun. Odhad pro vaši návštěvnost připravíme ještě před spuštěním.

Jak dlouho trvá nasazení a co od nás potřebujete?

Délku určuje hlavně to, jak dlouho musí staré a nové měření běžet souběžně, než se čísla shodnou, a u velkých firem i bezpečnostní revize. Harmonogram naplánujeme v prvním kroku. Potřebujeme přístupy do GTM, GA4 a reklamních účtů přes role, fakturační účet Google Cloud, úpravu DNS a vývojáře pro případné úpravy datové vrstvy.

Google Tag Gateway, nebo server-side GTM?

Gateway načítá Google tag z vaší domény přes síť pro doručování obsahu (CDN). Je jednodušší a levnější, ale jen pro tagy Google a bez úprav dat. Pokud chcete Metu, Sklik, kontrolu nad osobními údaji nebo události z backendu, potřebujete server-side GTM. Obojí lze kombinovat.

Komu patří data, účty a kontejnery?

Vám. Server běží ve vašem Google Cloudu, kontejnery i reklamní účty jsou vaše a my dostáváme jen role. Po skončení spolupráce odebereme své přístupy podle provozní příručky a měření běží dál beze změny.

pokračujte

[**Měření konverzí**Google Ads, Meta, Sklik i Heureka vidí totéž](/sluzby/mereni-konverzi)[**Cookie lišta a Consent Mode v2**souhlas legálně a bez zbytečné ztráty dat](/sluzby/cookie-lista-consent-mode)[**Správa webu a měření**hlídáme, aby měření nepřestalo fungovat](/sluzby/sprava-webu-a-mereni)

Kontakt

## Probereme, jestli se vám server-side měření vyplatí

Na úvodní konzultaci projdeme vaše měření a řekneme, jestli je server-side GTM další krok, nebo je potřeba nejdřív opravit základ.

* E-mail[one@datalayer.cz](mailto:one@datalayer.cz)
* Telefon[+420 704 664 774](tel:+420704664774)

1. Domluvíme termín callu
2. Projdeme web a cíle
3. Připravíme návrh na míru

Web firmy

Jméno a příjmeníE-mail

Telefon (nepovinné)Web (nepovinné)

Co řešíte? (nepovinné)

GA4 a GTMServer-side měřeníCookie lišta a souhlasKonverze a reklamyBigQuery a reportingAuditJiné

S čím vám můžeme pomoci?

Údaje použijeme jen k odpovědi na zprávu a případné nabídce. [Jak s nimi zacházíme](/zpracovani-osobnich-udaju). Žádný newsletter, žádný spam.

Odeslat zprávu