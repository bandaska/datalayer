# URL: https://datalayer.vitnovotny.cz/reseni/velke-firmy

1. [Úvod](/)
2. Velké firmy

řešení pro velké firmy

# Řízené a auditovatelné měření pro velké firmy, které zůstane vaše

Postavíme měření, které projde bezpečnostním posouzením, přežije release webu a dá stejná čísla na všech trzích. Stojí na governance – jednotném měřicím plánu, názvosloví, postupu pro publikaci verzí v Google Tag Manageru (GTM) a řízení přístupů – a na server-side měření a BigQuery ve vašem Google Cloudu s daty v EU. Smluvní rámec tvoří zpracovatelská smlouva a smlouva o úrovni služeb (SLA) s podmínkami, na kterých se dohodneme.

[Domluvit úvodní schůzku](#kontakt)[Bezpečnost a soulad](#bezpecnost)

Úvodní schůzka je zdarma. Rádi na ni přizveme i IT a pověřence pro ochranu osobních údajů (DPO).

* Server-side měření a BigQuery ve vašem cloudu
* Data v EU, region volíte vy
* Zpracovatelská smlouva a NDA předem

symptomy

## Poznáváte se?

Čím víc trhů, týmů a agentur, tím snáz se měření rozpadne.

trhy

### Každý trh měří jinak

Česko posílá `purchase`, Slovensko `nakup` a Maďarsko nemá měnu – čísla za skupinu nejdou sečíst.

gtm

### Přístup správce do GTM má kdekdo

Pět agentur, dva bývalí zaměstnanci a jeden neznámý e-mail – a nikdo neví, kdo co publikoval.

vývoj

### Release webu rozbije měření

Vývoj přejmenuje třídu tlačítka, konverze zmizí a přijdete na to až při měsíčním reportu.

GDPR

### IT a DPO blokují změny

Nikdo jim neumí říct, kam data tečou a v jakém regionu, a projekt server-side měření stojí půl roku.

governance

## Pravidla měření, která přežijí změny týmů i agentur

Ve velké firmě měření nerozbije jedna velká chyba, ale stovka drobných změn od různých lidí. Pravidla nastavíme a předáme jako dokumenty, které patří vám.

tracking-plan.xlsx

### Měřicí plán

Jeden verzovaný plán pro všechny domény a trhy: každá událost má vlastníka a nové požadavky jdou nejdřív do plánu, teprve potom do GTM.

naming-convention.md

### Názvosloví a datový slovník

Jednotné názvy událostí, parametrů, tagů v GTM, UTM i tabulek v BigQuery a slovník s významem každého parametru.

release-process.md

### Verzování a publikace změn

Změny vznikají v pracovních prostorech, testujeme je v testovacím prostředí, publikuje je jen určená role a každá verze má odkaz na požadavek.

access-matrix.xlsx

### Přístupová práva

Princip minimálních oprávnění v GA4, GTM i Google Cloudu, agentury přes skupiny a jednou za čtvrtletí kontrola přístupů.

data-flow-inventory.xlsx

### Dokumentace pro IT a DPO

Schéma architektury, inventář datových toků a provozní příručku pro incidenty (runbook) píšeme tak, aby podle nich mohl pokračovat kdokoli jiný.

workshopy

### Předání a zaškolení týmů

Marketing, vývojáře i analytiky zaškolíme na skutečných datech firmy – od reportů GA4 po export v BigQuery.

architektura

## Jak vypadá architektura pro více trhů

Všechny domény posílají data ve stejném formátu. Souhlas řešíme pro každou doménu zvlášť a platí i na serveru.

domény a aplikace

* firma.cz, firma.sk, firma.hu
* zákaznický portál

souhlas z cookie lišty pro každou doménu

datová vrstva a GTM

* jednotná specifikace
* testy v průběžné integraci (CI)
* testovací a produkční prostředí

server-side GTM ve vlastním projektu

* Cloud Run v EU
* metrics.firma.cz

na vlastní subdoméně

cíle

* GA4
* Google Ads, Meta, LinkedIn

BigQuery v EU

* export z GA4
* data z CRM a ERP
* BI nástroje, které už používáte

Domény a zákaznický portál posílají data přes jednotnou datovou vrstvu do GTM. Cookie lišta, tedy nástroj pro správu souhlasů (CMP), předává souhlas každé domény přes Consent Mode v2. Server-side GTM v projektu firmy v Google Cloudu pošle data do GA4 a reklamních systémů a GA4 je exportuje do BigQuery v EU, kam tečou i data z CRM a ERP. Governance – měřicí plán, názvosloví, Git, správa identit a přístupů (IAM) a monitoring – řídí všechny vrstvy.

google cloud

### Server-side GTM ve vašem Google Cloudu

Fakturaci, IAM, auditní logy i region máte pod kontrolou vy. Když IT provozuje jiný cloud, server-side GTM poběží v jakémkoli prostředí s Dockerem.

bigquery

### BigQuery a data v EU

Region datasetu, třeba multiregion EU nebo Frankfurt, volíte hned při propojení s GA4 – při pozdějším přesunu hrozí mezera v datech.

bezpečnost

## Bezpečnost a soulad pro nákupní oddělení a IT

Ve velkém projektu je víc smluvních vztahů, než se zdá. Pomůžeme je zmapovat, aby DPO a právní oddělení věděli, co schvalují.

* **Zpracovatelská smlouva** podle čl. 28 GDPR ještě před přístupem k datům, NDA i před první schůzkou.
* **IAM:** jmenovité účty s dvoufázovým ověřením, agentury přes skupiny, ne přes osobní e-maily.
* **Logy:** auditní logy Google Cloudu vidí interní bezpečnostní tým.
* **Umístění dat:** Cloud Run i BigQuery v regionu, který zvolíte, obvykle v EU. Kopie dat na vlastní zařízení stahujeme jen po dohodě.
* **Odchod:** po skončení spolupráce odebereme přístupy a měření běží dál beze změny.

Nejsme advokátní kancelář – právní posouzení patří právnímu oddělení nebo DPO.

postup

## Jak postupujeme u velkého projektu

Stejných pět kroků jako u všech našich služeb. Audit u velkého projektu zahrnuje všechny domény, kontejnery a účty i rozhovory s marketingem, IT, DPO a agenturami.

1. 01

   ### Audit

   Projdeme GA4, GTM, souhlas a reklamní systémy na všech doménách a porovnáme je se zdrojovými systémy – e-shopem, CRM nebo ERP.

   Od vás: přístupy pro čtení
2. 02

   ### Měřicí plán

   Obchodní cíle převedeme na události, parametry a pravidla pojmenování.

   Od vás: hodinová schůzka a schválení plánu
3. 03

   ### Implementace

   Nejdřív nasadíme pilot na jednom trhu nebo doméně, celý včetně server-side měření a testů, potom přidáme další trhy a domény podle jeho výsledků.

   Od vás: vývojový tým, projekt v Google Cloudu a DNS
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost na všech trzích a porovnáme čísla se zdrojovými systémy.

   Od vás: testovací data a export ze zdrojových systémů
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a budeme hlídat, aby měření po dalším releasu nepřestalo fungovat.

   Od vás: předávací schůzka

### Jak zapadneme do vývoje

* Exporty kontejnerů GTM ukládáme do vašeho repozitáře v Gitu.
* Každá změna prochází kontrolou a publikuje ji jen určená role.
* Změny testujeme v testovacím prostředí a datovou vrstvu kontrolujeme automatickým testem v CI.
* Publikaci navážeme na release webu a 48 hodin po ní zvýšíme dohled.

SLA

## SLA a podpora po spuštění

Rozsah podpory a reakční doby dohodneme ve smlouvě podle toho, jak kritická jsou pro vás data. Vždy ale definujeme, co je kritická chyba.

| Priorita | Příklad |
| --- | --- |
| **P1 – kritická** | výpadek měření nákupů či poptávek, tagy před souhlasem |
| **P2 – vysoká** | chybí parametr, vypadl jeden reklamní systém |
| **P3 – běžná** | nový požadavek na měření, úprava reportu |

Podporu nabízíme ve třech úrovních: konzultace s pevným počtem hodin, samotný provoz a provoz s asistencí u každého releasu. Provoz zahrnuje monitoring, řešení incidentů a měsíční report kvality dat. Jak hlídáme měření v provozu, popisujeme u služby [Správa webu a měření](/sluzby/sprava-webu-a-mereni).

monitoring

## Jak poznáte, že měření funguje

Monitoring patří k pravidlům governance – na problém vás upozorní dřív, než se objeví v měsíčním reportu.

* Všechny trhy posílají stejné události s měnou a čísla za skupinu jdou sečíst.
* U každé změny v GTM dohledáte, kdo ji kdy udělal a proč.
* Test datové vrstvy v CI zastaví build, když chybí měna, hodnota nebo položky.
* Denní kontroly v BigQuery hlídají nákupy, prázdnou měnu i `(not set)`.

FAQ

## Časté otázky

Technické detailyVíce trhů, GA4 360 a test datové vrstvy

Rozhodnutí pro více trhů, která padnou na začátku

| Rozhodnutí | Možnosti | Na čem záleží |
| --- | --- | --- |
| Počet property GA4 | jedna pro všechny trhy, jedna na trh, nebo roll-up v GA4 360 | jedna zjednoduší skupinový report, víc property oddělí práva a limity |
| Měření napříč doménami | pro domény, mezi kterými lidé přecházejí | nastavení v datovém streamu, nejvýš sto podmínek, stejné ID tagu Google |
| Souhlas napříč doménami | lišta na každé doméně, nebo sdílení přes CMP | sdílet jen tam, kde to CMP a právní posouzení umožní |
| Měna | jedna měna property, nebo podle trhu | každá událost nese `currency`, účetní report počítáme v BigQuery s vlastním kurzem |
| Časové pásmo | podle centrály, nebo podle trhu | jedno pro celou skupinu, jinak dny v reportech nesedí |
| Interní návštěvnost | filtr IP, cookie pro zaměstnance, testovací prostředí | stejná pravidla pro všechny trhy |
| Nežádoucí odkazující zdroje | platební brány, jednotné přihlášení (SSO), rezervační systémy | seznam udržujeme centrálně |
| Kontejnery GTM | jeden pro všechny domény, nebo jeden na trh | často kombinace: společný kontejner a pracovní prostory trhů |

GA4 standard a GA4 360

| Limit nebo funkce | GA4 standard | GA4 360 |
| --- | --- | --- |
| Uchování dat v průzkumech | až čtrnáct měsíců | až padesát měsíců |
| Parametry na událost | pětadvacet | sto |
| Klíčové události | třicet | padesát |
| Publika | sto | 400 |
| Vzorkování v průzkumech | deset milionů událostí na dotaz | miliarda událostí na dotaz |
| Nevzorkované průzkumy | ne | ano, dvacet tisíc tokenů denně |
| Denní export do BigQuery | milion událostí | miliardy událostí a Fresh Daily |
| Kvóta API | 200 000 tokenů denně | 2 000 000 tokenů denně |
| Import dat | deset GB na property | jeden TB na property |
| Roll-up a sub-property | ne | ano |
| SLA | ne | ano, ve smlouvě GA4 360 |

Licenci GA4 360 prodávají Google a jeho certifikovaní partneři, cenu určuje objem dat. Streamovaný export do BigQuery limit objemu nemá, funguje ale bez garance úplnosti a stojí 0,05 dolaru za GB.

jsKopírovat

```
test('purchase má měnu, hodnotu a položky', async ({ page }) => {
  await page.goto(process.env.STAGING_URL + '/test-checkout?order=QA-1');
  const purchase = await page.evaluate(() =>
    window.dataLayer.find(e => e.event === 'purchase'));
  expect(purchase.ecommerce.currency).toMatch(/^(CZK|EUR|HUF)$/);
  expect(purchase.ecommerce.value).toBeGreaterThan(0);
  expect(purchase.ecommerce.items.length).toBeGreaterThan(0);
});
```

Zjednodušená ukázka testu v Playwrightu: běží při každém buildu a když vývojář omylem odstraní měnu, build neprojde.

Potřebujeme Google Analytics 360?

Záleží na objemu dat a na tom, jak je používáte. GA4 360 má smysl, když denně posíláte víc než milion událostí a potřebujete kompletní denní export do BigQuery, když chcete roll-up přes více značek nebo trhů, delší historii, nevzorkované průzkumy nebo smluvní SLA. Pokud většinu analýz děláte v BigQuery a limity standardní verze nepřekračujete, často stačí standardní GA4 se streamovaným exportem do BigQuery. Během úvodní analýzy (discovery) to spočítáme z reálných dat.

Kde budou naše data fyzicky ležet?

Server-side GTM a BigQuery nasadíme do regionu, který zvolíte – obvykle do multiregionu EU, tedy Belgie a Nizozemska, nebo do Frankfurtu či Varšavy. Samotné GA4 sbírá data ze zařízení v EU přes servery v EU a IP adresy neukládá. Další zpracování se řídí podmínkami Googlu, předání do USA rámcem EU–US Data Privacy Framework – posouzení nechte na DPO.

Jak spolupracujete s naším IT a agenturami?

Přizpůsobíme se nástroji, který používáte, třeba Jiře, Azure DevOps nebo ServiceNow, i cyklu releasů. Datovou vrstvu zařadíme do definice hotového. Agentury dál dělají kampaně: každá dostane vlastní pracovní prostor v GTM a přístup přes skupinu; publikaci schvaluje určená role. Nemusí tak čekat na nás a zároveň nemohou nechtěně rozbít měření ostatním.

Komu patří účty a data a co když spolupráci ukončíme?

Účty, kontejnery, projekt v Google Cloudu i data patří vám a měření poběží dál. Dokumentaci píšeme tak, aby šla předat, a nepoužíváme žádný vlastní skript ani server, bez kterého by měření nefungovalo. Při ukončení předáme aktuální stav, odebereme svoje přístupy a podle smlouvy smažeme případné pracovní kopie.

Jak u velkého projektu vzniká cena?

Úvodní analýzu a audit nabízíme jako samostatnou fázi s pevným rozsahem. Podle jejích výstupů navrhneme další fáze – pilot, nasazení na další trhy a provoz – s rozsahem a výstupy pro každou z nich. Cenu ovlivňuje hlavně počet domén a trhů, agentur a kontejnerů, dále server-side měření, BigQuery a požadovaná úroveň SLA. Náklady na Google Cloud a případné licence, třeba GA4 360, platíte přímo poskytovatelům.

Jak dlouho velký projekt trvá?

Délku určuje hlavně počet trhů a domén, dále kapacita vývoje. Po úvodní analýze ověříme řešení na pilotu – jednom trhu nebo doméně – a další trhy přidáváme podle jeho výsledků. Termíny jednotlivých fází navrhneme podle výstupů úvodní analýzy.

pokračujte

[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)[**BigQuery a datový sklad**surová data bez limitů GA4](/sluzby/bigquery)[**Správa webu a měření**hlídáme, aby měření nepřestalo fungovat](/sluzby/sprava-webu-a-mereni)

Kontakt

## Probereme měření s vaším marketingem i IT

Na úvodní schůzce projdeme domény, trhy, agentury a omezení IT a navrhneme, jak by mohla vypadat úvodní analýza. NDA rádi pošleme předem.

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