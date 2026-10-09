# /sluzby/server-side-tracking

## Hlavička stránky (title, meta, OG)
- `title`: Server-side tracking – měření na vaší doméně | datalayer.cz
- `meta:description`: Server-side GTM na vaší doméně a ve vašem Google Cloudu. Meta CAPI, Google Ads, GA4 i Sklik přes server, v souladu se souhlasem. Konzultace zdarma.
- `meta:og:title`: Server-side tracking – měření na vaší doméně | datalayer.cz
- `meta:og:description`: Server-side GTM na vaší doméně a ve vašem Google Cloudu. Meta CAPI, Google Ads, GA4 i Sklik přes server, v souladu se souhlasem. Konzultace zdarma.
- `meta:twitter:title`: Server-side tracking – měření na vaší doméně | datalayer.cz
- `meta:twitter:description`: Server-side GTM na vaší doméně a ve vašem Google Cloudu. Meta CAPI, Google Ads, GA4 i Sklik přes server, v souladu se souhlasem. Konzultace zdarma.

## Strukturovaná data (JSON-LD) – texty
- `jsonld:itemListElement.name`: Úvod
- `jsonld:itemListElement.name`: Služby
- `jsonld:itemListElement.name`: Server-side tracking
- `jsonld:name`: Server-side tracking přes server-side Google Tag Manager
- `jsonld:serviceType`: Server-side tagging a měření konverzí
- `jsonld:description`: Návrh a nasazení server-side Google Tag Manageru na doméně a v Google Cloudu klienta: GA4, Google Ads, Meta Conversions API, Seznam Event Measurement a TikTok Events API přes server, deduplikace, monitoring a dokumentace. Vždy v souladu se souhlasem návštěvníka.
- `jsonld:areaServed.name`: Česká republika
- `jsonld:audience.audienceType`: E-shopy, B2B firmy a velké firmy
- `jsonld:mainEntity.name`: Je server-side legální? Potřebuju pořád cookie lištu?
- `jsonld:mainEntity.acceptedAnswer.text`: Ano, lištu potřebujete dál. Server-side je jen jiná technická cesta – k ukládání a čtení netechnických údajů potřebujete předchozí souhlas podle § 89 odst. 3 zákona o elektronických komunikacích. Server proto s každou událostí dostane stav souhlasu a podle něj data pošle, nebo ne. Nejsme advokátní kancelář – právní posouzení zajistí váš právník.
- `jsonld:mainEntity.name`: Pomůže server-side proti adblockům a Safari ITP?
- `jsonld:mainEntity.acceptedAnswer.text`: Obcházet volbu návštěvníka není cíl. Server-side pomůže tam, kde limity prohlížeče dopadají i na souhlasící návštěvníky: cookies, které nastaví server vaší domény, Safari neomezuje stejně jako cookies z JavaScriptu. Kdo měření odmítne, toho neměříme.
- `jsonld:mainEntity.name`: Kolik stojí implementace a provoz serveru?
- `jsonld:mainEntity.acceptedAnswer.text`: Cenu implementace skládáme podle rozsahu – rozhoduje počet platforem a domén, stav datové vrstvy a požadavky IT. Provoz platíte přímo Googlu nebo hostingu: u Cloud Run realisticky 110–150 dolarů měsíčně, spravovaný hosting od stovek korun. Před spuštěním spočítáme odhad pro vaši návštěvnost a nastavíme rozpočtový alert.
- `jsonld:mainEntity.name`: Jak dlouho trvá nasazení a co od vás potřebujeme?
- `jsonld:mainEntity.acceptedAnswer.text`: Délku určuje hlavně souběžný běh s porovnáním dat a u velkých firem bezpečnostní revize. Harmonogram naplánujeme v prvním kroku. Potřebujeme přístupy do GTM, GA4 a reklamních účtů přes role, fakturační účet Google Cloud, úpravu DNS a vývojáře pro případné úpravy datové vrstvy.
- `jsonld:mainEntity.name`: Google Tag Gateway, nebo server-side GTM?
- `jsonld:mainEntity.acceptedAnswer.text`: Gateway načítá Google značku z vaší domény přes CDN. Je jednodušší a levnější, ale jen pro Google značky a bez úprav dat. Pokud potřebujete Metu, Sklik, kontrolu nad osobními údaji nebo události z backendu, potřebujete server-side GTM. Obojí lze kombinovat.
- `jsonld:mainEntity.name`: Komu patří data, účty a kontejnery?
- `jsonld:mainEntity.acceptedAnswer.text`: Vám. Server běží ve vašem Google Cloudu, kontejnery i reklamní účty jsou vaše a my dostáváme jen role. Po skončení spolupráce odebereme své přístupy podle provozní příručky a měření běží dál beze změny.

## Obsah stránky

### [sekce] 
- `a`: Přeskočit na obsah
- `a`: Úvod
- `a`: Služby
- `li`: Server-side tracking
- `p`: [ server-side GTM ]
- `h1`: Server-side tracking na vaší doméně a vašem cloudu
- `p`: Prohlížeč pošle každou událost jen jednou – na server-side Google Tag Manager na vaší doméně. Ten ji podle souhlasu návštěvníka předá do GA4, Google Ads, Meta Conversions API nebo Skliku. Získáte kontrolu nad tím, co a komu odchází, povinnost souhlasu ale zůstává stejná.
- `a`: [ Konzultovat architekturu ]
- `a`: [ Jak to funguje ]
- `p`: Úvodní konzultace zdarma · provoz serveru platíte napřímo Googlu nebo hostingu
- `li`: Server ve vašem Google Cloudu
- `li`: Kontejnery a přístupy zůstávají vaše
- `li`: Monitoring je součást nasazení

### [sekce] Poznáváte se?
- `p`: [ symptomy ]
- `h2`: Poznáváte se?
- `p`: Server-side dává smysl, když měření funguje, ale narazilo na limity prohlížeče, rychlosti nebo kontroly nad daty.
- `span`: meta
- `h3`: Meta vidí méně nákupů než e-shop
- `div`: Pixel zachytí jen část objednávek a kampaně se učí z neúplných dat.
- `span`: itp
- `h3`: Zákazníci ze Safari se „rozpadají“
- `div`: Safari zkracuje cookies z JavaScriptu na sedm dní a vracející se zákazník vypadá jako nový.
- `span`: perf
- `h3`: IT tlačí na rychlost a bezpečnost
- `div`: Desítka cizích skriptů zpomaluje web a komplikuje bezpečnostní politiku.
- `span`: dpo
- `h3`: DPO chce vědět, co komu odchází
- `div`: Bez prostředníka nemáte jak doložit ani omezit, co skripty posílají.

### [sekce] Co uděláme a co dostanete
- `p`: [ výstupy ]
- `h2`: Co uděláme a co dostanete
- `p`: Ne „zapnutý server“, ale zdokumentovanou architekturu, kterou převezme váš tým nebo kdokoli jiný.
- `span`: architecture.pdf
- `h3`: Návrh architektury
- `div`: Co jde přes server, co zůstává v prohlížeči a kde se rozhoduje o souhlasu.
- `span`: gcp
- `h3`: Server ve vašem Google Cloudu
- `div`: Cloud Run s nejméně dvěma servery, doména, certifikát a rozpočtový alert.
- `span`: gtm-web · gtm-server
- `h3`: Kontejnery GTM
- `div`: Webový i serverový kontejner s verzemi a jednotnými názvy.
- `span`: events.csv
- `h3`: Mapa událostí a deduplikace
- `div`: Stejné ID objednávky pro všechny platformy, žádná konverze dvakrát.
- `span`: consent-matrix
- `h3`: Matice souhlasu
- `div`: Který tag smí běžet při jakém souhlasu – podklad pro DPO.
- `span`: runbook.md
- `h3`: Monitoring a provozní příručka
- `div`: Alerty na výpadek a pokles událostí, postup při výpadku i exit plán.

### [sekce] Jak server-side funguje
- `p`: [ architektura ]
- `h2`: Jak server-side funguje
- `p`: Místo pěti skriptů, které posílají data každý zvlášť, odejde z prohlížeče jedna událost na váš server. Ten ji rozdělí dál.
- `span`: zdroje
- `li`: prohlížeč: dataLayer a souhlas
- `li`: backend nebo CRM: platby, storna, leady
- `span`: sgtm.vasweb.cz
- `li`: server-side GTM
- `li`: Cloud Run ve vašem cloudu
- `li`: rozhodnutí podle souhlasu
- `span`: platformy
- `li`: GA4 a Google Ads
- `li`: Meta Conversions API
- `li`: Sklik a TikTok
- `figcaption`: Prohlížeč a backend posílají události na server-side GTM na vaší doméně. Server je podle souhlasu návštěvníka předá platformám.
- `li`: Kontrola nad daty. Osobní údaje před odesláním odstraníte nebo zahashujete.
- `li`: Spolehlivější konverze. Meta CAPI, rozšířené konverze Google Ads a platby z backendu.
- `li`: Souhlas platí dál. Kdo cookies odmítne, toho neměříme ani touto cestou.

### [sekce] Vyplatí se vám server-side?
- `p`: [ rozhodnutí ]
- `h2`: Vyplatí se vám server-side?
- `p`: Server-side není první krok. Když se vám nevyplatí, řekneme to rovnou.
- `h3`: Dává smysl, když…
- `li`: reklama tvoří velkou část objednávek nebo poptávek
- `li`: potřebujete Meta CAPI, Sklik nebo TikTok s deduplikací
- `li`: chcete posílat události z backendu – platby, storna, CRM
- `li`: IT nebo DPO požaduje kontrolu nad odchozími daty
- `li`: někdo bude server vlastnit a hlídat
- `h3`: Doporučíme počkat, když…
- `li`: nesedí základní měření → nejdřív audit měření
- `a`: audit měření
- `li`: chybí funkční cookie lišta → Consent Mode v2
- `a`: Consent Mode v2
- `li`: inzerujete jen v Google Ads → často stačí Google Tag Gateway
- `li`: máte malý rozpočet a návštěvnost
- `li`: čekáte měření bez souhlasu – to server-side nedělá
- `caption`: Kde server poběží
- `th`: Kritérium
- `th`: Google Cloud ve vašem projektu
- `th`: Spravovaný hosting – Stape, DataNostro
- `th`: Kdo vlastní účet
- `td`: vy, faktury chodí od Googlu
- `td`: vy, nebo agentura
- `th`: Provoz a aktualizace
- `td`: Cloud Run škáluje sám, aktualizace řešíme my nebo IT
- `td`: řeší poskytovatel
- `th`: Audit a přístupy
- `td`: vlastní IAM a logy
- `td`: v rozhraní poskytovatele
- `th`: Odchod k jinému dodavateli
- `td`: nic nestěhujete
- `td`: export kontejneru a změna DNS
- `th`: Volíme pro
- `td`: velké firmy, regulované obory, víc domén
- `td`: rychlý start, menší e-shopy
- `b`: zhruba 45 dolarů
- `span`: měsíčně za jeden server Cloud Run podle Googlu, do produkce aspoň dva
- `b`: 110–150 dolarů
- `span`: realistický měsíční provoz včetně load balanceru a logů, ceník k říjnu 2026
- `b`: od 349 Kč
- `span`: měsíčně spravovaný hosting DataNostro za 500 tisíc požadavků
- `p`: Provoz platíte napřímo poskytovateli. Před spuštěním spočítáme odhad pro vaši návštěvnost a nastavíme rozpočtový alert.

### [sekce] Jak nasazení probíhá
- `p`: [ postup ]
- `h2`: Jak nasazení probíhá
- `p`: Stejných pět kroků jako u všech našich služeb. Starý i nový způsob měření běží souběžně, dokud čísla nesedí.
- `li`: 01 Audit Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací. od vás: přístupy pro čtení
- `h3`: Audit
- `p`: Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.
- `li`: 02 Měřicí plán Byznys cíle převedeme na události, parametry a pravidla pojmenování. od vás: hodinová schůzka a schválení plánu
- `h3`: Měřicí plán
- `p`: Byznys cíle převedeme na události, parametry a pravidla pojmenování.
- `li`: 03 Implementace Nasadíme server do vašeho Google Cloudu, napojíme web a platformy – GA4, Google Ads, Meta CAPI a Sklik – a nastavíme deduplikaci. od vás: fakturační účet Google Cloud, úprava DNS, role v reklamních účtech
- `h3`: Implementace
- `p`: Nasadíme server do vašeho Google Cloudu, napojíme web a platformy – GA4, Google Ads, Meta CAPI a Sklik – a nastavíme deduplikaci.
- `li`: 04 Validace Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM. od vás: testovací objednávka a export z administrace
- `h3`: Validace
- `p`: Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.
- `li`: 05 Předání a podpora Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu. od vás: předávací schůzka
- `h3`: Předání a podpora
- `p`: Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

### [sekce] Jak poznáte, že server-side funguje
- `p`: [ monitoring ]
- `h2`: Jak poznáte, že server-side funguje
- `p`: Když server vypadne, nepřestane měřit jedna značka, ale všechny platformy najednou. Proto je monitoring součást každého nasazení, ne příplatek.
- `li`: upozornění při výpadku měřicího endpointu a při vyšší chybovosti serveru
- `li`: denní srovnání objednávek: backend, server, GA4 a Meta
- `li`: kontrola deduplikace a kvality shody událostí v Metě
- `li`: rozpočtový alert v Google Cloudu a přehled publikovaných verzí kontejneru

### [sekce] Časté otázky
- `p`: [ FAQ ]
- `h2`: Časté otázky
- `p`: Nenašli jste odpověď? Napište nám.
- `a`: Napište nám
- `summary`: Technické detaily: co jde přes server a co zůstává v prohlížeči
- `caption`: Platformy v hybridní architektuře
- `th`: Platforma
- `th`: Přes server
- `th`: V prohlížeči a deduplikace
- `th`: GA4
- `td`: Událost přes GA4 klienta v sGTM
- `td`: Google tag posílá data na vaši doménu
- `th`: Google Ads
- `td`: Konverze a rozšířené konverze s hashovanými údaji
- `td`: Google tag a zachycení gclid, deduplikace přes transaction_id
- `th`: Meta
- `td`: Conversions API s hashovaným e-mailem a telefonem
- `td`: Meta Pixel souběžně, stejné event_name a event_id
- `th`: Seznam
- `td`: Event Measurement server-to-server
- `td`: Povinný sul.js, stejnou událost posíláme jen jednou cestou
- `th`: TikTok a LinkedIn
- `td`: Events API a Conversions API
- `td`: Pixel a Insight Tag se stejným event_id
- `p`: Náklady na provoz Cloud Run tvoří servery, malý preview server pro ladění, logy, síť a případně load balancer pro endpoint na stejné doméně. Logy nad zhruba milion požadavků měsíčně mohou podle Googlu náklady výrazně zvýšit, proto nastavujeme rozumnou úroveň logování. Region europe-west3 ve Frankfurtu patří do dražšího pásma a sezónní špičky, třeba Black Friday, mohou krátkodobě potřebovat víc instancí.
- `summary`: Je server-side legální? Potřebuju pořád cookie lištu?
- `div`: Ano, lištu potřebujete dál. Server-side je jen jiná technická cesta – k ukládání a čtení netechnických údajů potřebujete předchozí souhlas podle § 89 odst. 3 zákona o elektronických komunikacích. Server proto s každou událostí dostane stav souhlasu a podle něj data pošle, nebo ne. Nejsme advokátní kancelář – právní posouzení zajistí váš právník.
- `summary`: Pomůže server-side proti adblockům a Safari ITP?
- `div`: Obcházet volbu návštěvníka není cíl. Server-side pomůže tam, kde limity prohlížeče dopadají i na souhlasící návštěvníky: cookies, které nastaví server vaší domény, Safari neomezuje stejně jako cookies z JavaScriptu. Kdo měření odmítne, toho neměříme.
- `summary`: Kolik stojí implementace a provoz serveru?
- `div`: Cenu implementace skládáme podle rozsahu – rozhoduje počet platforem a domén, stav datové vrstvy a požadavky IT. Provoz platíte přímo Googlu nebo hostingu: u Cloud Run realisticky 110–150 dolarů měsíčně, spravovaný hosting od stovek korun. Před spuštěním spočítáme odhad pro vaši návštěvnost a nastavíme rozpočtový alert.
- `summary`: Jak dlouho trvá nasazení a co od vás potřebujeme?
- `div`: Délku určuje hlavně souběžný běh s porovnáním dat a u velkých firem bezpečnostní revize. Harmonogram naplánujeme v prvním kroku. Potřebujeme přístupy do GTM, GA4 a reklamních účtů přes role, fakturační účet Google Cloud, úpravu DNS a vývojáře pro případné úpravy datové vrstvy.
- `summary`: Google Tag Gateway, nebo server-side GTM?
- `div`: Gateway načítá Google značku z vaší domény přes CDN. Je jednodušší a levnější, ale jen pro Google značky a bez úprav dat. Pokud potřebujete Metu, Sklik, kontrolu nad osobními údaji nebo události z backendu, potřebujete server-side GTM. Obojí lze kombinovat.
- `summary`: Komu patří data, účty a kontejnery?
- `div`: Vám. Server běží ve vašem Google Cloudu, kontejnery i reklamní účty jsou vaše a my dostáváme jen role. Po skončení spolupráce odebereme své přístupy podle provozní příručky a měření běží dál beze změny.

### [sekce] 
- `p`: [ pokračujte ]
- `a`: Měření konverzí Ads, Meta, Sklik i Heureka vidí totéž
- `a`: Cookie lišta a Consent Mode v2 souhlas legálně a bez zbytečné ztráty dat
- `a`: Správa webu a měření hlídáme, aby měření nepřestalo fungovat

### [sekce] Probereme, jestli se vám server-side vyplatí
- `p`: [ Kontakt ]
- `h2`: Probereme, jestli se vám server-side vyplatí
- `p`: Na třicetiminutové konzultaci zdarma projdeme vaše měření. Odpovídáme do jednoho pracovního dne.
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

### [sekce] Vyplatí se vám server-side?
- `div@aria-label`: Kde server poběží
- `td@data-label`: Google Cloud ve vašem projektu
- `td@data-label`: Spravovaný hosting – Stape, DataNostro
- `td@data-label`: Google Cloud ve vašem projektu
- `td@data-label`: Spravovaný hosting – Stape, DataNostro
- `td@data-label`: Google Cloud ve vašem projektu
- `td@data-label`: Spravovaný hosting – Stape, DataNostro
- `td@data-label`: Google Cloud ve vašem projektu
- `td@data-label`: Spravovaný hosting – Stape, DataNostro
- `td@data-label`: Google Cloud ve vašem projektu
- `td@data-label`: Spravovaný hosting – Stape, DataNostro

### [sekce] Časté otázky
- `div@aria-label`: Platformy v hybridní architektuře
- `td@data-label`: Přes server
- `td@data-label`: V prohlížeči a deduplikace
- `td@data-label`: Přes server
- `td@data-label`: V prohlížeči a deduplikace
- `td@data-label`: Přes server
- `td@data-label`: V prohlížeči a deduplikace
- `td@data-label`: Přes server
- `td@data-label`: V prohlížeči a deduplikace
- `td@data-label`: Přes server
- `td@data-label`: V prohlížeči a deduplikace

### [sekce] Probereme, jestli se vám server-side vyplatí
- `ol@aria-label`: Co se stane po odeslání