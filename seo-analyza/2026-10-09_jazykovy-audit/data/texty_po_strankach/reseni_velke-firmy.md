# /reseni/velke-firmy

## Hlavička stránky (title, meta, OG)
- `title`: Měření pro velké firmy: governance a BigQuery | datalayer.cz
- `meta:description`: Governance měření pro velké firmy: měřicí plán, verzování GTM, práva, server-side na vašem Google Cloudu, BigQuery v EU, DPA a SLA. Úvodní schůzka zdarma.
- `meta:og:title`: Měření pro velké firmy: governance a BigQuery | datalayer.cz
- `meta:og:description`: Governance měření pro velké firmy: měřicí plán, verzování GTM, práva, server-side na vašem Google Cloudu, BigQuery v EU, DPA a SLA. Úvodní schůzka zdarma.
- `meta:twitter:title`: Měření pro velké firmy: governance a BigQuery | datalayer.cz
- `meta:twitter:description`: Governance měření pro velké firmy: měřicí plán, verzování GTM, práva, server-side na vašem Google Cloudu, BigQuery v EU, DPA a SLA. Úvodní schůzka zdarma.

## Strukturovaná data (JSON-LD) – texty
- `jsonld:itemListElement.name`: Úvod
- `jsonld:itemListElement.name`: Velké firmy
- `jsonld:name`: Měření pro velké firmy
- `jsonld:serviceType`: Governance měření, server-side tagging na Google Cloudu klienta, BigQuery, SLA a zaškolení týmů
- `jsonld:description`: Governance webové analytiky pro velké firmy: měřicí plán, názvosloví, verzování a release proces Google Tag Manageru, přístupová práva, dokumentace, server-side měření a BigQuery v Google Cloud projektu klienta s daty v EU.
- `jsonld:areaServed.name`: Česká republika
- `jsonld:audience.audienceType`: Velké firmy a korporace
- `jsonld:mainEntity.name`: Potřebujeme Google Analytics 360?
- `jsonld:mainEntity.acceptedAnswer.text`: Záleží na objemu dat a na tom, jak je používáte. GA4 360 dává smysl, když denně posíláte víc než milion událostí a potřebujete kompletní denní export do BigQuery, když chcete roll-up přes více značek nebo trhů, delší historii, nevzorkované explorace nebo smluvní SLA. Pokud většinu analýz děláte v BigQuery a limity standardní verze nepřekračujete, často stačí standardní GA4 se streamingem do BigQuery. Během discovery to spočítáme z reálných dat.
- `jsonld:mainEntity.name`: Kde budou naše data fyzicky ležet?
- `jsonld:mainEntity.acceptedAnswer.text`: Server-side GTM a BigQuery nasadíme do regionu, který zvolíte – typicky do multiregionu EU, tedy Belgie a Nizozemska, nebo do Frankfurtu či Varšavy. Samotné GA4 sbírá data z EU zařízení přes servery v EU a IP adresy neukládá. Další zpracování řídí podmínky Googlu a předání do USA rámec EU–US Data Privacy Framework – posouzení nechte na DPO.
- `jsonld:mainEntity.name`: Jak spolupracujete s naším IT a agenturami?
- `jsonld:mainEntity.acceptedAnswer.text`: Přizpůsobíme se nástroji, který používáte, ať je to Jira, Azure DevOps, nebo ServiceNow, i cyklu releasů a datovou vrstvu zařadíme do definice hotového. Agentury dál dělají kampaně: každá dostane vlastní pracovní prostor v GTM a přístup přes skupinu a publikaci schvaluje určená role. Nemusí tak čekat na nás a zároveň nemohou nechtěně rozbít měření ostatním.
- `jsonld:mainEntity.name`: Komu patří účty a data a co když spolupráci ukončíme?
- `jsonld:mainEntity.acceptedAnswer.text`: Účty, kontejnery, Google Cloud projekt i data patří vám a měření poběží dál. Dokumentaci píšeme pro předání a nepoužíváme žádný vlastní skript ani server, bez kterého by měření nefungovalo. Při ukončení předáme aktuální stav, odebereme svoje přístupy a podle smlouvy smažeme případné pracovní kopie.
- `jsonld:mainEntity.name`: Jak u velkého projektu vzniká cena?
- `jsonld:mainEntity.acceptedAnswer.text`: Discovery a audit nabízíme jako samostatnou fázi s pevným rozsahem. Z jejích výstupů navrhneme další fáze – pilot, rollout a provoz – s rozsahem a výstupy pro každou z nich. Cenu ovlivňuje hlavně počet domén a trhů, agentur a kontejnerů, server-side a BigQuery a požadovaná úroveň SLA. Náklady na Google Cloud a případné licence, třeba GA4 360, platíte přímo poskytovatelům.
- `jsonld:mainEntity.name`: Jak dlouho velký projekt trvá?
- `jsonld:mainEntity.acceptedAnswer.text`: Délku určuje hlavně počet trhů a domén a kapacita vývoje. Po discovery ověříme řešení na pilotu – jednom trhu nebo doméně – a další trhy přidáváme podle jeho výsledků. Termíny jednotlivých fází navrhneme z výstupů discovery.

## Obsah stránky

### [sekce] 
- `a`: Přeskočit na obsah
- `a`: Úvod
- `li`: Velké firmy
- `p`: [ řešení pro velké firmy ]
- `h1`: Měření pro velké firmy: řízené, auditovatelné, vaše
- `p`: Měření, které projde bezpečnostním review, přežije release webu a dá stejná čísla na všech trzích. Stojí na governance – jednotném měřicím plánu, názvosloví, release procesu Tag Manageru a řízení přístupů – a na server-side a BigQuery ve vašem Google Cloudu s daty v EU. Smluvní rámec tvoří zpracovatelská smlouva a SLA, na kterém se dohodneme.
- `a`: [ Domluvit úvodní schůzku ]
- `a`: [ Bezpečnost a soulad ]
- `p`: Rádi přizveme i IT a DPO · NDA před první schůzkou na požádání
- `li`: Server-side a BigQuery ve vašem cloudu
- `li`: Data v EU, region volíte vy
- `li`: Zpracovatelská smlouva a NDA předem

### [sekce] Poznáváte se?
- `p`: [ symptomy ]
- `h2`: Poznáváte se?
- `p`: Čím víc trhů, týmů a agentur, tím snáz se měření rozpadne.
- `span`: trhy
- `h3`: Každý trh měří jinak
- `div`: Česko posílá purchase, Slovensko nakup a Maďarsko nemá měnu – čísla za skupinu nejdou sečíst.
- `code`: purchase
- `code`: nakup
- `span`: gtm
- `h3`: V GTM má admin přístup kdekdo
- `div`: Pět agentur, dva bývalí zaměstnanci a jeden neznámý e-mail – a nikdo neví, kdo co publikoval.
- `span`: release
- `h3`: Release webu rozbije měření
- `div`: Vývoj přejmenuje třídu tlačítka, konverze zmizí a přijdete na to až při měsíčním reportu.
- `span`: dpo
- `h3`: IT a DPO blokují změny
- `div`: Nikdo jim neumí říct, kam data tečou a v jakém regionu, a server-side projekt stojí půl roku.

### [sekce] Governance měření: pravidla, která přežijí změny týmů i agentur
- `p`: [ governance ]
- `h2`: Governance měření: pravidla, která přežijí změny týmů i agentur
- `p`: Ve velké firmě měření nerozbije jedna velká chyba, ale stovka drobných změn od různých lidí. Pravidla nastavíme a předáme jako dokumenty, které patří vám.
- `span`: tracking-plan.xlsx
- `h3`: Měřicí plán
- `div`: Jeden verzovaný plán pro všechny domény a trhy: každá událost má vlastníka a nové požadavky jdou přes plán, ne rovnou do GTM.
- `span`: naming-convention.md
- `h3`: Názvosloví a datový slovník
- `div`: Jednotné názvy událostí, parametrů, tagů v GTM, UTM i tabulek v BigQuery a slovník, co který parametr znamená.
- `span`: release-process.md
- `h3`: Verzování a release proces
- `div`: Změny vznikají v pracovních prostorech, testujeme je na stagingu, publikuje je jen určená role a každá verze má odkaz na požadavek.
- `span`: access-matrix.xlsx
- `h3`: Přístupová práva
- `div`: Princip nejnižších oprávnění v GA4, GTM i Google Cloudu, agentury přes skupiny a jednou za čtvrtletí kontrola přístupů.
- `span`: data-flow-inventory.xlsx
- `h3`: Dokumentace pro IT a DPO
- `div`: Schéma architektury, inventář datových toků a runbook pro incidenty píšeme tak, aby v nich mohl pokračovat kdokoli jiný.
- `span`: workshopy
- `h3`: Předání a zaškolení týmů
- `div`: Marketing, vývojáře i analytiky zaškolíme na skutečných datech, ne na demo účtu – od reportů GA4 po export v BigQuery.

### [sekce] Jak vypadá architektura pro více trhů
- `p`: [ architektura ]
- `h2`: Jak vypadá architektura pro více trhů
- `p`: Všechny domény posílají data ve stejném formátu. Souhlas řešíme pro každou doménu zvlášť a platí i na serveru.
- `span`: domény a aplikace
- `li`: firma.cz · firma.sk · firma.hu
- `li`: zákaznický portál
- `p`: souhlas z CMP pro každou doménu
- `span`: datová vrstva a GTM
- `li`: jednotná specifikace
- `li`: testy v CI
- `li`: staging a produkce
- `span`: sGTM ve vlastním projektu
- `li`: Cloud Run v EU
- `li`: metrics.firma.cz
- `p`: first-party
- `span`: cíle
- `li`: GA4
- `li`: Google Ads · Meta · LinkedIn
- `span`: BigQuery v EU
- `li`: export z GA4
- `li`: data z CRM a ERP
- `li`: BI, které už používáte
- `figcaption`: Domény a zákaznický portál posílají data přes jednotnou datovou vrstvu do GTM a CMP předává souhlas každé domény přes Consent Mode v2. Server-side GTM v Google Cloud projektu firmy pošle data do GA4 a reklamních systémů, GA4 je exportuje do BigQuery v EU, kam tečou i data z CRM a ERP. Governance – měřicí plán, názvosloví, Git, IAM a monitoring – řídí všechny vrstvy.
- `span`: gcp
- `h3`: Server-side ve vašem Google Cloudu
- `div`: Billing, IAM, auditní logy i region máte pod kontrolou vy. Když IT provozuje jiný cloud, server-side GTM poběží v jakémkoli prostředí s Dockerem.
- `span`: bigquery · eu
- `h3`: BigQuery a data v EU
- `div`: Region datasetu, třeba multiregion EU nebo Frankfurt, volíte hned při propojení s GA4 – pozdější přesun hrozí mezerou v datech.

### [sekce] Bezpečnost a soulad: checklist pro nákup a IT
- `p`: [ bezpečnost ]
- `h2`: Bezpečnost a soulad: checklist pro nákup a IT
- `p`: Ve velkém projektu je víc smluvních vztahů, než se zdá. Pomůžeme je zmapovat, aby DPO a právní oddělení věděli, co schvalují.
- `li`: Zpracovatelská smlouva podle čl. 28 GDPR ještě před přístupem k datům, NDA i před první schůzkou.
- `li`: IAM: jmenovité účty s dvoufázovým ověřením, agentury přes skupiny, ne přes osobní e-maily.
- `li`: Logy: auditní logy Google Cloudu vidí interní bezpečnostní tým.
- `li`: Lokalita dat: Cloud Run i BigQuery v regionu, který zvolíte, typicky v EU. Kopie dat na vlastní zařízení stahujeme jen po dohodě.
- `li`: Odchod: po skončení spolupráce odebereme přístupy a měření běží dál beze změny.
- `p`: Nejsme advokátní kancelář – právní posouzení patří právnímu oddělení nebo DPO.

### [sekce] Jak postupujeme u velkého projektu
- `p`: [ postup ]
- `h2`: Jak postupujeme u velkého projektu
- `p`: Stejných pět kroků jako u všech našich služeb. Audit u velkého projektu zahrnuje všechny domény, kontejnery a účty i rozhovory s marketingem, IT, DPO a agenturami.
- `li`: 01 Audit Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací. od vás: přístupy pro čtení
- `h3`: Audit
- `p`: Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.
- `li`: 02 Měřicí plán Byznys cíle převedeme na události, parametry a pravidla pojmenování. od vás: hodinová schůzka a schválení plánu
- `h3`: Měřicí plán
- `p`: Byznys cíle převedeme na události, parametry a pravidla pojmenování.
- `li`: 03 Implementace Nejdřív pilot na jednom trhu nebo doméně, celý včetně server-side a testů, potom další trhy a domény podle jeho výsledků. od vás: vývojový tým, projekt v Google Cloudu a DNS
- `h3`: Implementace
- `p`: Nejdřív pilot na jednom trhu nebo doméně, celý včetně server-side a testů, potom další trhy a domény podle jeho výsledků.
- `li`: 04 Validace Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM. od vás: testovací objednávka a export z administrace
- `h3`: Validace
- `p`: Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.
- `li`: 05 Předání a podpora Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu. od vás: předávací schůzka
- `h3`: Předání a podpora
- `p`: Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.
- `h3`: Jak zapadneme do vývoje
- `li`: exporty kontejnerů GTM ukládáme do vašeho repozitáře v Gitu
- `li`: každá změna prochází review a publikuje ji jen určená role
- `li`: změny testujeme na stagingu a datovou vrstvu automatickým testem v CI
- `li`: publikaci navážeme na release webu a 48 hodin po ní zvýšíme dohled

### [sekce] SLA a podpora po spuštění
- `p`: [ SLA ]
- `h2`: SLA a podpora po spuštění
- `p`: Rozsah podpory a reakční doby dohodneme ve smlouvě podle toho, jak kritická jsou pro vás data. Vždy ale definujeme, co je kritická chyba.
- `th`: Priorita
- `th`: Příklad
- `th`: P1 – kritická
- `td`: výpadek měření nákupů či leadů, tagy před souhlasem
- `th`: P2 – vysoká
- `td`: chybí parametr, vypadl jeden reklamní systém
- `th`: P3 – běžná
- `td`: nový požadavek na měření, úprava reportu
- `p`: Podporu nabízíme ve třech úrovních: konzultace s pevným počtem hodin, provoz a provoz s asistencí u každého releasu. Provoz zahrnuje monitoring, řešení incidentů a měsíční report kvality dat. Jak hlídáme měření v provozu, popisujeme u služby Správa webu a měření.
- `a`: Správa webu a měření

### [sekce] Jak poznáte, že měření funguje
- `p`: [ monitoring ]
- `h2`: Jak poznáte, že měření funguje
- `p`: Monitoring patří ke governance: o problému víte do 24 hodin, ne až z měsíčního reportu.
- `li`: všechny trhy posílají stejné události s měnou a čísla za skupinu jdou sečíst
- `li`: u každé změny v GTM dohledáte, kdo ji kdy udělal a proč
- `li`: test datové vrstvy v CI zastaví build, když chybí měna, hodnota nebo položky
- `li`: denní kontroly v BigQuery hlídají nákupy, prázdnou měnu i (not set)

### [sekce] Časté otázky
- `p`: [ FAQ ]
- `h2`: Časté otázky
- `p`: Nenašli jste odpověď? Napište nám.
- `a`: Napište nám
- `summary`: Technické detaily: více trhů, GA4 360 a test datové vrstvy
- `caption`: Rozhodnutí pro více trhů, která děláme na začátku
- `th`: Rozhodnutí
- `th`: Možnosti
- `th`: Na čem záleží
- `th`: Počet GA4 properties
- `td`: jedna pro všechny trhy, jedna na trh, nebo roll-up v GA4 360
- `td`: jedna zjednoduší skupinový report, víc properties oddělí práva a limity
- `th`: Cross-domain měření
- `td`: pro domény, mezi kterými lidé přecházejí
- `td`: nastavení v datovém streamu, nejvýš sto podmínek, stejné ID značky
- `th`: Souhlas napříč doménami
- `td`: lišta na každé doméně, nebo sdílení přes CMP
- `td`: sdílet jen tam, kde to CMP a právní posouzení umožní
- `th`: Měna
- `td`: jedna měna property, nebo podle trhu
- `td`: každá událost nese currency, účetní report počítáme v BigQuery s vlastním kurzem
- `th`: Časové pásmo
- `td`: podle centrály, nebo podle trhu
- `td`: jedno pro celou skupinu, jinak dny v reportech nesedí
- `th`: Interní provoz
- `td`: filtr IP, cookie pro zaměstnance, testovací prostředí
- `td`: stejná pravidla pro všechny trhy
- `th`: Nežádoucí odkazující zdroje
- `td`: platební brány, SSO, rezervační systémy
- `td`: seznam udržujeme centrálně
- `th`: Kontejnery GTM
- `td`: jeden pro všechny domény, nebo jeden na trh
- `td`: často kombinace: společný kontejner a pracovní prostory trhů
- `caption`: GA4 standard a GA4 360
- `th`: Limit nebo funkce
- `th`: GA4 standard
- `th`: GA4 360
- `th`: Uchování dat v exploracích
- `td`: až čtrnáct měsíců
- `td`: až padesát měsíců
- `th`: Parametry na událost
- `td`: 25
- `td`: sto
- `th`: Klíčové události
- `td`: třicet
- `td`: padesát
- `th`: Publika
- `td`: sto
- `td`: 400
- `th`: Vzorkování v exploracích
- `td`: deset milionů událostí na dotaz
- `td`: miliarda událostí na dotaz
- `th`: Nevzorkované explorace
- `td`: ne
- `td`: ano, dvacet tisíc tokenů denně
- `th`: Denní export do BigQuery
- `td`: milion událostí
- `td`: miliardy událostí a Fresh Daily
- `th`: Kvóta API
- `td`: 200 000 tokenů denně
- `td`: dva miliony tokenů denně
- `th`: Import dat
- `td`: deset GB na property
- `td`: jeden TB na property
- `th`: Roll-up a sub-properties
- `td`: ne
- `td`: ano
- `th`: SLA
- `td`: ne
- `td`: ano, ve smlouvě GA 360
- `p`: Licenci GA4 360 prodávají Google a jeho certifikovaní partneři, cenu určuje objem dat. Streaming export do BigQuery limit objemu nemá, funguje ale bez garance úplnosti a stojí 0,05 dolaru za GB.
- `span`: js
- `button`: Kopírovat
- `pre`: test('purchase má měnu, hodnotu a položky', async ({ page }) => { await page.goto(process.env.STAGING_URL + '/test-checkout?order=QA-1'); const purchase = await page.evaluate(() => window.dataLayer.find(e => e.event === 'purchase')); expect(purchase.ecommerce.currency).toMatch(/^(CZK|EUR|HUF)$/); expect(purchase.ecommerce.value).toBeGreaterThan(0); expect(purchase.ecommerce.items.length).toBeGreaterThan(0); });
- `figcaption`: Zjednodušená ukázka testu v Playwrightu: běží při každém buildu, a když vývojář omylem odstraní měnu, build neprojde.
- `summary`: Potřebujeme Google Analytics 360?
- `div`: Záleží na objemu dat a na tom, jak je používáte. GA4 360 dává smysl, když denně posíláte víc než milion událostí a potřebujete kompletní denní export do BigQuery, když chcete roll-up přes více značek nebo trhů, delší historii, nevzorkované explorace nebo smluvní SLA. Pokud většinu analýz děláte v BigQuery a limity standardní verze nepřekračujete, často stačí standardní GA4 se streamingem do BigQuery. Během discovery to spočítáme z reálných dat.
- `summary`: Kde budou naše data fyzicky ležet?
- `div`: Server-side GTM a BigQuery nasadíme do regionu, který zvolíte – typicky do multiregionu EU, tedy Belgie a Nizozemska, nebo do Frankfurtu či Varšavy. Samotné GA4 sbírá data z EU zařízení přes servery v EU a IP adresy neukládá. Další zpracování řídí podmínky Googlu a předání do USA rámec EU–US Data Privacy Framework – posouzení nechte na DPO.
- `summary`: Jak spolupracujete s naším IT a agenturami?
- `div`: Přizpůsobíme se nástroji, který používáte, ať je to Jira, Azure DevOps, nebo ServiceNow, i cyklu releasů a datovou vrstvu zařadíme do definice hotového. Agentury dál dělají kampaně: každá dostane vlastní pracovní prostor v GTM a přístup přes skupinu a publikaci schvaluje určená role. Nemusí tak čekat na nás a zároveň nemohou nechtěně rozbít měření ostatním.
- `summary`: Komu patří účty a data a co když spolupráci ukončíme?
- `div`: Účty, kontejnery, Google Cloud projekt i data patří vám a měření poběží dál. Dokumentaci píšeme pro předání a nepoužíváme žádný vlastní skript ani server, bez kterého by měření nefungovalo. Při ukončení předáme aktuální stav, odebereme svoje přístupy a podle smlouvy smažeme případné pracovní kopie.
- `summary`: Jak u velkého projektu vzniká cena?
- `div`: Discovery a audit nabízíme jako samostatnou fázi s pevným rozsahem. Z jejích výstupů navrhneme další fáze – pilot, rollout a provoz – s rozsahem a výstupy pro každou z nich. Cenu ovlivňuje hlavně počet domén a trhů, agentur a kontejnerů, server-side a BigQuery a požadovaná úroveň SLA. Náklady na Google Cloud a případné licence, třeba GA4 360, platíte přímo poskytovatelům.
- `summary`: Jak dlouho velký projekt trvá?
- `div`: Délku určuje hlavně počet trhů a domén a kapacita vývoje. Po discovery ověříme řešení na pilotu – jednom trhu nebo doméně – a další trhy přidáváme podle jeho výsledků. Termíny jednotlivých fází navrhneme z výstupů discovery.

### [sekce] 
- `p`: [ pokračujte ]
- `a`: Server-side tracking měření na vaší doméně
- `a`: BigQuery a datový sklad surová data bez limitů GA4
- `a`: Správa webu a měření hlídáme, aby měření nepřestalo fungovat

### [sekce] Domluvme si úvodní schůzku s vaším marketingem i IT
- `p`: [ Kontakt ]
- `h2`: Domluvme si úvodní schůzku s vaším marketingem i IT
- `p`: Na úvodní hodinové schůzce projdeme domény, trhy, agentury a omezení IT a navrhneme, jak by mohl vypadat discovery. NDA rádi pošleme předem.
- `li`: E-mail one@datalayer.cz
- `a`: one@datalayer.cz
- `span`: VN
- `span`: Odpovídá Vít Novotný
- `span`: obvykle do jednoho pracovního dne
- `li`: Do jednoho pracovního dne navrhneme termín.
- `li`: Na třicet minut projdeme web a cíle.
- `li`: Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.

### [sekce] 
- `nav@aria-label`: Drobečková navigace

### [sekce] SLA a podpora po spuštění
- `div@aria-label`: SLA a podpora po spuštění
- `td@data-label`: Příklad
- `td@data-label`: Příklad
- `td@data-label`: Příklad

### [sekce] Časté otázky
- `div@aria-label`: Rozhodnutí pro více trhů, která děláme na začátku
- `td@data-label`: Možnosti
- `td@data-label`: Na čem záleží
- `td@data-label`: Možnosti
- `td@data-label`: Na čem záleží
- `td@data-label`: Možnosti
- `td@data-label`: Na čem záleží
- `td@data-label`: Možnosti
- `td@data-label`: Na čem záleží
- `td@data-label`: Možnosti
- `td@data-label`: Na čem záleží
- `td@data-label`: Možnosti
- `td@data-label`: Na čem záleží
- `td@data-label`: Možnosti
- `td@data-label`: Na čem záleží
- `td@data-label`: Možnosti
- `td@data-label`: Na čem záleží
- `div@aria-label`: GA4 standard a GA4 360
- `td@data-label`: GA4 standard
- `td@data-label`: GA4 360
- `td@data-label`: GA4 standard
- `td@data-label`: GA4 360
- `td@data-label`: GA4 standard
- `td@data-label`: GA4 360
- `td@data-label`: GA4 standard
- `td@data-label`: GA4 360
- `td@data-label`: GA4 standard
- `td@data-label`: GA4 360
- `td@data-label`: GA4 standard
- `td@data-label`: GA4 360
- `td@data-label`: GA4 standard
- `td@data-label`: GA4 360
- `td@data-label`: GA4 standard
- `td@data-label`: GA4 360
- `td@data-label`: GA4 standard
- `td@data-label`: GA4 360
- `td@data-label`: GA4 standard
- `td@data-label`: GA4 360
- `td@data-label`: GA4 standard
- `td@data-label`: GA4 360

### [sekce] Domluvme si úvodní schůzku s vaším marketingem i IT
- `ol@aria-label`: Co se stane po odeslání