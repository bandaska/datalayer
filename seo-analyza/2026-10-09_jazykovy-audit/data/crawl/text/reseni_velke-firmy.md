# URL: https://datalayer.vitnovotny.cz/reseni/velke-firmy

1. [Úvod](/)
2. Velké firmy

[ řešení pro velké firmy ]

# Měření pro velké firmy: řízené, auditovatelné, vaše

Měření, které projde bezpečnostním review, přežije release webu a dá stejná čísla na všech trzích. Stojí na governance – jednotném měřicím plánu, názvosloví, release procesu Tag Manageru a řízení přístupů – a na server-side a BigQuery ve vašem Google Cloudu s daty v EU. Smluvní rámec tvoří zpracovatelská smlouva a SLA, na kterém se dohodneme.

[[ Domluvit úvodní schůzku ]](#kontakt)[[ Bezpečnost a soulad ]](#bezpecnost)

Rádi přizveme i IT a DPO · NDA před první schůzkou na požádání

* Server-side a BigQuery ve vašem cloudu
* Data v EU, region volíte vy
* Zpracovatelská smlouva a NDA předem

[ symptomy ]

## Poznáváte se?

Čím víc trhů, týmů a agentur, tím snáz se měření rozpadne.

trhy

### Každý trh měří jinak

Česko posílá `purchase`, Slovensko `nakup` a Maďarsko nemá měnu – čísla za skupinu nejdou sečíst.

gtm

### V GTM má admin přístup kdekdo

Pět agentur, dva bývalí zaměstnanci a jeden neznámý e-mail – a nikdo neví, kdo co publikoval.

release

### Release webu rozbije měření

Vývoj přejmenuje třídu tlačítka, konverze zmizí a přijdete na to až při měsíčním reportu.

dpo

### IT a DPO blokují změny

Nikdo jim neumí říct, kam data tečou a v jakém regionu, a server-side projekt stojí půl roku.

[ governance ]

## Governance měření: pravidla, která přežijí změny týmů i agentur

Ve velké firmě měření nerozbije jedna velká chyba, ale stovka drobných změn od různých lidí. Pravidla nastavíme a předáme jako dokumenty, které patří vám.

tracking-plan.xlsx

### Měřicí plán

Jeden verzovaný plán pro všechny domény a trhy: každá událost má vlastníka a nové požadavky jdou přes plán, ne rovnou do GTM.

naming-convention.md

### Názvosloví a datový slovník

Jednotné názvy událostí, parametrů, tagů v GTM, UTM i tabulek v BigQuery a slovník, co který parametr znamená.

release-process.md

### Verzování a release proces

Změny vznikají v pracovních prostorech, testujeme je na stagingu, publikuje je jen určená role a každá verze má odkaz na požadavek.

access-matrix.xlsx

### Přístupová práva

Princip nejnižších oprávnění v GA4, GTM i Google Cloudu, agentury přes skupiny a jednou za čtvrtletí kontrola přístupů.

data-flow-inventory.xlsx

### Dokumentace pro IT a DPO

Schéma architektury, inventář datových toků a runbook pro incidenty píšeme tak, aby v nich mohl pokračovat kdokoli jiný.

workshopy

### Předání a zaškolení týmů

Marketing, vývojáře i analytiky zaškolíme na skutečných datech, ne na demo účtu – od reportů GA4 po export v BigQuery.

[ architektura ]

## Jak vypadá architektura pro více trhů

Všechny domény posílají data ve stejném formátu. Souhlas řešíme pro každou doménu zvlášť a platí i na serveru.

domény a aplikace

* firma.cz · firma.sk · firma.hu
* zákaznický portál

souhlas z CMP pro každou doménu

datová vrstva a GTM

* jednotná specifikace
* testy v CI
* staging a produkce

sGTM ve vlastním projektu

* Cloud Run v EU
* metrics.firma.cz

first-party

cíle

* GA4
* Google Ads · Meta · LinkedIn

BigQuery v EU

* export z GA4
* data z CRM a ERP
* BI, které už používáte

Domény a zákaznický portál posílají data přes jednotnou datovou vrstvu do GTM a CMP předává souhlas každé domény přes Consent Mode v2. Server-side GTM v Google Cloud projektu firmy pošle data do GA4 a reklamních systémů, GA4 je exportuje do BigQuery v EU, kam tečou i data z CRM a ERP. Governance – měřicí plán, názvosloví, Git, IAM a monitoring – řídí všechny vrstvy.

gcp

### Server-side ve vašem Google Cloudu

Billing, IAM, auditní logy i region máte pod kontrolou vy. Když IT provozuje jiný cloud, server-side GTM poběží v jakémkoli prostředí s Dockerem.

bigquery · eu

### BigQuery a data v EU

Region datasetu, třeba multiregion EU nebo Frankfurt, volíte hned při propojení s GA4 – pozdější přesun hrozí mezerou v datech.

[ bezpečnost ]

## Bezpečnost a soulad: checklist pro nákup a IT

Ve velkém projektu je víc smluvních vztahů, než se zdá. Pomůžeme je zmapovat, aby DPO a právní oddělení věděli, co schvalují.

* **Zpracovatelská smlouva** podle čl. 28 GDPR ještě před přístupem k datům, NDA i před první schůzkou.
* **IAM:** jmenovité účty s dvoufázovým ověřením, agentury přes skupiny, ne přes osobní e-maily.
* **Logy:** auditní logy Google Cloudu vidí interní bezpečnostní tým.
* **Lokalita dat:** Cloud Run i BigQuery v regionu, který zvolíte, typicky v EU. Kopie dat na vlastní zařízení stahujeme jen po dohodě.
* **Odchod:** po skončení spolupráce odebereme přístupy a měření běží dál beze změny.

Nejsme advokátní kancelář – právní posouzení patří právnímu oddělení nebo DPO.

[ postup ]

## Jak postupujeme u velkého projektu

Stejných pět kroků jako u všech našich služeb. Audit u velkého projektu zahrnuje všechny domény, kontejnery a účty i rozhovory s marketingem, IT, DPO a agenturami.

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

   Nejdřív pilot na jednom trhu nebo doméně, celý včetně server-side a testů, potom další trhy a domény podle jeho výsledků.

   od vás: vývojový tým, projekt v Google Cloudu a DNS
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

### Jak zapadneme do vývoje

* exporty kontejnerů GTM ukládáme do vašeho repozitáře v Gitu
* každá změna prochází review a publikuje ji jen určená role
* změny testujeme na stagingu a datovou vrstvu automatickým testem v CI
* publikaci navážeme na release webu a 48 hodin po ní zvýšíme dohled

[ SLA ]

## SLA a podpora po spuštění

Rozsah podpory a reakční doby dohodneme ve smlouvě podle toho, jak kritická jsou pro vás data. Vždy ale definujeme, co je kritická chyba.

| Priorita | Příklad |
| --- | --- |
| **P1 – kritická** | výpadek měření nákupů či leadů, tagy před souhlasem |
| **P2 – vysoká** | chybí parametr, vypadl jeden reklamní systém |
| **P3 – běžná** | nový požadavek na měření, úprava reportu |

Podporu nabízíme ve třech úrovních: konzultace s pevným počtem hodin, provoz a provoz s asistencí u každého releasu. Provoz zahrnuje monitoring, řešení incidentů a měsíční report kvality dat. Jak hlídáme měření v provozu, popisujeme u služby [Správa webu a měření](/sluzby/sprava-webu-a-mereni).

[ monitoring ]

## Jak poznáte, že měření funguje

Monitoring patří ke governance: o problému víte do 24 hodin, ne až z měsíčního reportu.

* všechny trhy posílají stejné události s měnou a čísla za skupinu jdou sečíst
* u každé změny v GTM dohledáte, kdo ji kdy udělal a proč
* test datové vrstvy v CI zastaví build, když chybí měna, hodnota nebo položky
* denní kontroly v BigQuery hlídají nákupy, prázdnou měnu i `(not set)`

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: více trhů, GA4 360 a test datové vrstvy

Rozhodnutí pro více trhů, která děláme na začátku

| Rozhodnutí | Možnosti | Na čem záleží |
| --- | --- | --- |
| Počet GA4 properties | jedna pro všechny trhy, jedna na trh, nebo roll-up v GA4 360 | jedna zjednoduší skupinový report, víc properties oddělí práva a limity |
| Cross-domain měření | pro domény, mezi kterými lidé přecházejí | nastavení v datovém streamu, nejvýš sto podmínek, stejné ID značky |
| Souhlas napříč doménami | lišta na každé doméně, nebo sdílení přes CMP | sdílet jen tam, kde to CMP a právní posouzení umožní |
| Měna | jedna měna property, nebo podle trhu | každá událost nese `currency`, účetní report počítáme v BigQuery s vlastním kurzem |
| Časové pásmo | podle centrály, nebo podle trhu | jedno pro celou skupinu, jinak dny v reportech nesedí |
| Interní provoz | filtr IP, cookie pro zaměstnance, testovací prostředí | stejná pravidla pro všechny trhy |
| Nežádoucí odkazující zdroje | platební brány, SSO, rezervační systémy | seznam udržujeme centrálně |
| Kontejnery GTM | jeden pro všechny domény, nebo jeden na trh | často kombinace: společný kontejner a pracovní prostory trhů |

GA4 standard a GA4 360

| Limit nebo funkce | GA4 standard | GA4 360 |
| --- | --- | --- |
| Uchování dat v exploracích | až čtrnáct měsíců | až padesát měsíců |
| Parametry na událost | 25 | sto |
| Klíčové události | třicet | padesát |
| Publika | sto | 400 |
| Vzorkování v exploracích | deset milionů událostí na dotaz | miliarda událostí na dotaz |
| Nevzorkované explorace | ne | ano, dvacet tisíc tokenů denně |
| Denní export do BigQuery | milion událostí | miliardy událostí a Fresh Daily |
| Kvóta API | 200 000 tokenů denně | dva miliony tokenů denně |
| Import dat | deset GB na property | jeden TB na property |
| Roll-up a sub-properties | ne | ano |
| SLA | ne | ano, ve smlouvě GA 360 |

Licenci GA4 360 prodávají Google a jeho certifikovaní partneři, cenu určuje objem dat. Streaming export do BigQuery limit objemu nemá, funguje ale bez garance úplnosti a stojí 0,05 dolaru za GB.

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

Zjednodušená ukázka testu v Playwrightu: běží při každém buildu, a když vývojář omylem odstraní měnu, build neprojde.

Potřebujeme Google Analytics 360?

Záleží na objemu dat a na tom, jak je používáte. GA4 360 dává smysl, když denně posíláte víc než milion událostí a potřebujete kompletní denní export do BigQuery, když chcete roll-up přes více značek nebo trhů, delší historii, nevzorkované explorace nebo smluvní SLA. Pokud většinu analýz děláte v BigQuery a limity standardní verze nepřekračujete, často stačí standardní GA4 se streamingem do BigQuery. Během discovery to spočítáme z reálných dat.

Kde budou naše data fyzicky ležet?

Server-side GTM a BigQuery nasadíme do regionu, který zvolíte – typicky do multiregionu EU, tedy Belgie a Nizozemska, nebo do Frankfurtu či Varšavy. Samotné GA4 sbírá data z EU zařízení přes servery v EU a IP adresy neukládá. Další zpracování řídí podmínky Googlu a předání do USA rámec EU–US Data Privacy Framework – posouzení nechte na DPO.

Jak spolupracujete s naším IT a agenturami?

Přizpůsobíme se nástroji, který používáte, ať je to Jira, Azure DevOps, nebo ServiceNow, i cyklu releasů a datovou vrstvu zařadíme do definice hotového. Agentury dál dělají kampaně: každá dostane vlastní pracovní prostor v GTM a přístup přes skupinu a publikaci schvaluje určená role. Nemusí tak čekat na nás a zároveň nemohou nechtěně rozbít měření ostatním.

Komu patří účty a data a co když spolupráci ukončíme?

Účty, kontejnery, Google Cloud projekt i data patří vám a měření poběží dál. Dokumentaci píšeme pro předání a nepoužíváme žádný vlastní skript ani server, bez kterého by měření nefungovalo. Při ukončení předáme aktuální stav, odebereme svoje přístupy a podle smlouvy smažeme případné pracovní kopie.

Jak u velkého projektu vzniká cena?

Discovery a audit nabízíme jako samostatnou fázi s pevným rozsahem. Z jejích výstupů navrhneme další fáze – pilot, rollout a provoz – s rozsahem a výstupy pro každou z nich. Cenu ovlivňuje hlavně počet domén a trhů, agentur a kontejnerů, server-side a BigQuery a požadovaná úroveň SLA. Náklady na Google Cloud a případné licence, třeba GA4 360, platíte přímo poskytovatelům.

Jak dlouho velký projekt trvá?

Délku určuje hlavně počet trhů a domén a kapacita vývoje. Po discovery ověříme řešení na pilotu – jednom trhu nebo doméně – a další trhy přidáváme podle jeho výsledků. Termíny jednotlivých fází navrhneme z výstupů discovery.

[ pokračujte ]

[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)[**BigQuery a datový sklad**surová data bez limitů GA4](/sluzby/bigquery)[**Správa webu a měření**hlídáme, aby měření nepřestalo fungovat](/sluzby/sprava-webu-a-mereni)

[ Kontakt ]

## Domluvme si úvodní schůzku s vaším marketingem i IT

Na úvodní hodinové schůzce projdeme domény, trhy, agentury a omezení IT a navrhneme, jak by mohl vypadat discovery. NDA rádi pošleme předem.

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