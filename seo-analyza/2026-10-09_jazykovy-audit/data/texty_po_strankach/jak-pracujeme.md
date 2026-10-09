# /jak-pracujeme

## Hlavička stránky (title, meta, OG)
- `title`: Jak pracujeme: od auditu po předání měření | datalayer.cz
- `meta:description`: Implementace měření v pěti krocích: audit, měřicí plán se specifikací dataLayer, implementace, validace a předání s dokumentací. Co dostanete v každém kroku.
- `meta:og:title`: Jak pracujeme: od auditu po předání měření | datalayer.cz
- `meta:og:description`: Implementace měření v pěti krocích: audit, měřicí plán se specifikací dataLayer, implementace, validace a předání s dokumentací. Co dostanete v každém kroku.
- `meta:twitter:title`: Jak pracujeme: od auditu po předání měření | datalayer.cz
- `meta:twitter:description`: Implementace měření v pěti krocích: audit, měřicí plán se specifikací dataLayer, implementace, validace a předání s dokumentací. Co dostanete v každém kroku.

## Strukturovaná data (JSON-LD) – texty
- `jsonld:itemListElement.name`: Úvod
- `jsonld:itemListElement.name`: Jak pracujeme
- `jsonld:mainEntity.name`: Jak dlouho trvá typický projekt?
- `jsonld:mainEntity.acceptedAnswer.text`: Záleží hlavně na dvou věcech: jak rychle vývojáři doplní datovou vrstvu a jak dlouho musí měření běžet, abychom ho mohli porovnat s administrací nebo CRM. Samotná naše práce obvykle nezabere nejvíc času. Termíny najdete v nabídce, kterou dostanete po úvodní konzultaci, nejpozději po auditu.
- `jsonld:mainEntity.name`: Kdo bude na projektu pracovat?
- `jsonld:mainEntity.acceptedAnswer.text`: Úvodní konzultaci vede Vít Novotný. Na začátku projektu víte jménem, kdo dělá co a s kým mluvíte. Projekty nepředáváme dalším subdodavatelům bez vašeho souhlasu.
- `jsonld:mainEntity.name`: Co když nemáme vlastního vývojáře?
- `jsonld:mainEntity.acceptedAnswer.text`: Na Shoptetu, Upgates, Shopify a většině webů na WordPressu zvládneme většinu práce přes administraci a Tag Manager. U vlastních řešení potřebujeme někoho, kdo do webu doplní datovou vrstvu. Dodáme mu přesné zadání a výsledek otestujeme.
- `jsonld:mainEntity.name`: Spolupracujete s naší PPC nebo marketingovou agenturou?
- `jsonld:mainEntity.acceptedAnswer.text`: Ano, je to běžné. Agentura dál spravuje kampaně a my zajistíme, aby měla správná data. Domluvíme se, kdo smí v GTM co měnit, a agentura dostane dokumentaci a přístupy podle potřeby.
- `jsonld:mainEntity.name`: Co když se měření po předání rozbije?
- `jsonld:mainEntity.acceptedAnswer.text`: Prvních třicet dní po spuštění měření hlídáme zdarma a chyby, které způsobíme my, opravíme vždy. Pokud se měření rozbije později kvůli změně webu, pomůžeme v rámci správy webu a měření nebo jednorázově. Doporučujeme monitoring, který na výpadek upozorní do 24 hodin.
- `jsonld:mainEntity.name`: Podepíšete NDA a zpracovatelskou smlouvu?
- `jsonld:mainEntity.acceptedAnswer.text`: Ano. NDA i před první schůzkou, zpracovatelskou smlouvu vždy, když pracujeme s osobními údaji, třeba s CRM nebo se zákaznickými daty v BigQuery.

## Obsah stránky

### [sekce] 
- `a`: Přeskočit na obsah
- `a`: Úvod
- `li`: Jak pracujeme
- `p`: [ postup spolupráce ]
- `h1`: Jak pracujeme: od konzultace po předané měření
- `p`: Každý projekt má stejnou kostru o pěti krocích. Nejdřív zjistíme, co dnes měříte, pak se dohodneme, co má měření sledovat, a teprve potom píšeme tagy. Na konci dostanete funkční měření, důkaz, že funguje, a dokumentaci, se kterou si poradí kdokoli.
- `a`: [ Konzultovat projekt ]
- `a`: [ Pět kroků spolupráce ]
- `p`: Úvodní třicetiminutová konzultace zdarma · odpověď do jednoho pracovního dne
- `li`: Ke každému kroku konkrétní výstup
- `li`: Účty, kontejnery i data zůstávají vám
- `li`: Validace proti administraci nebo CRM

### [sekce] Pět pravidel, podle kterých pracujeme
- `p`: [ principy ]
- `h2`: Pět pravidel, podle kterých pracujeme
- `p`: Stejná pravidla platí pro audit, implementaci i správu měření.
- `span`: // plan_first
- `h3`: Nejdřív měřicí plán, pak tagy
- `div`: Měříme jen to, co někdo použije k rozhodnutí.
- `span`: // your_accounts
- `h3`: Pracujeme ve vašich účtech
- `div`: GA4, GTM, Google Cloud i data patří vám.
- `span`: // consent_by_default
- `h3`: Souhlas je vstupní podmínka
- `div`: Souhlas pro nás není překážka. Bez něj marketingová data neposíláme.
- `span`: // verify_before_handover
- `h3`: Nic nepředáme bez validace
- `div`: Měření vždy ověříme proti administraci, CRM nebo testovacím scénářům.
- `span`: // docs_are_output
- `h3`: Dokumentace je výstup projektu
- `div`: Není to bonus. Kdokoli po nás musí umět pokračovat.

### [sekce] Pět kroků od auditu po předané měření
- `p`: [ postup ]
- `h2`: Pět kroků od auditu po předané měření
- `p`: Stejné kroky uvidíte u všech služeb. Před prvním z nich proběhne úvodní třicetiminutová konzultace zdarma: projdeme web, cíle a největší problém a doporučíme, čím začít.
- `li`: 01 Audit Zjistíme, co dnes měříte a kde data utíkají. Čísla porovnáme s administrací nebo CRM. Google Tag Manager a GA4: kontejnery, události a nastavení cookie lišta a Consent Mode reklamní systémy a datová vrstva porovnání čísel s administrací nebo CRM výstup: audit-report.pdf – nálezy s prioritou podle dopadu, doporučení a odhad rozsahu oprav od vás: Přístupy pro čtení – návod najdete v Technických detailech u častých otázek
- `h3`: Audit
- `p`: Zjistíme, co dnes měříte a kde data utíkají. Čísla porovnáme s administrací nebo CRM.
- `li`: Google Tag Manager a GA4: kontejnery, události a nastavení
- `li`: cookie lišta a Consent Mode
- `li`: reklamní systémy a datová vrstva
- `li`: porovnání čísel s administrací nebo CRM
- `p`: výstup: audit-report.pdf – nálezy s prioritou podle dopadu, doporučení a odhad rozsahu oprav
- `p`: od vás: Přístupy pro čtení – návod najdete v Technických detailech u častých otázek
- `li`: 02 Měřicí plán Byznysové otázky převedeme na KPI, události a parametry a rozhodneme, která data kam odcházejí. Z plánu potom napíšeme zadání pro vývojáře. KPI, události, parametry a cílové systémy pravidla pojmenování a souhlas, který událost potřebuje specifikace datové vrstvy s příklady JSON a akceptačními kritérii u platforem s vlastním dataLayerem mapování místo specifikace výstup: merici-plan.xlsx ke schválení a datalayer-spec.md s testovacími scénáři od vás: Hodinová schůzka, schválení plánu a kontakt na vývojáře nebo podporu platformy
- `h3`: Měřicí plán
- `p`: Byznysové otázky převedeme na KPI, události a parametry a rozhodneme, která data kam odcházejí. Z plánu potom napíšeme zadání pro vývojáře.
- `li`: KPI, události, parametry a cílové systémy
- `li`: pravidla pojmenování a souhlas, který událost potřebuje
- `li`: specifikace datové vrstvy s příklady JSON a akceptačními kritérii
- `li`: u platforem s vlastním dataLayerem mapování místo specifikace
- `p`: výstup: merici-plan.xlsx ke schválení a datalayer-spec.md s testovacími scénáři
- `p`: od vás: Hodinová schůzka, schválení plánu a kontakt na vývojáře nebo podporu platformy
- `li`: 03 Implementace Nastavíme GTM na webu, případně i na serveru, dále GA4, Consent Mode v2, reklamní systémy a BigQuery. Vývojáři mezitím doplní datovou vrstvu. webový kontejner GTM, případně i serverový GA4 a Consent Mode v2 konverze v reklamních systémech BigQuery a další napojení podle měřicího plánu výstup: Kontejnery s jasným pojmenováním a historií verzí, funkční nastavení účtů od vás: Datová vrstva od vašich vývojářů, DNS záznam pro server-side a přístupy pro úpravy
- `h3`: Implementace
- `p`: Nastavíme GTM na webu, případně i na serveru, dále GA4, Consent Mode v2, reklamní systémy a BigQuery. Vývojáři mezitím doplní datovou vrstvu.
- `li`: webový kontejner GTM, případně i serverový
- `li`: GA4 a Consent Mode v2
- `li`: konverze v reklamních systémech
- `li`: BigQuery a další napojení podle měřicího plánu
- `p`: výstup: Kontejnery s jasným pojmenováním a historií verzí, funkční nastavení účtů
- `p`: od vás: Datová vrstva od vašich vývojářů, DNS záznam pro server-side a přístupy pro úpravy
- `li`: 04 Validace Měření ověříme na testovacích scénářích a potom jeho čísla porovnáme s administrací nebo CRM. testovací scénáře v GTM Preview a GA4 DebugView test souhlasu: přijetí, odmítnutí i stav bez volby testovací objednávky nebo leady souběžný běh a porovnání čísel s administrací nebo CRM výstup: validace-protokol.pdf – co jsme testovali, výsledky a vysvětlení rozdílů od vás: Testovací objednávka nebo lead a export z administrace nebo CRM
- `h3`: Validace
- `p`: Měření ověříme na testovacích scénářích a potom jeho čísla porovnáme s administrací nebo CRM.
- `li`: testovací scénáře v GTM Preview a GA4 DebugView
- `li`: test souhlasu: přijetí, odmítnutí i stav bez volby
- `li`: testovací objednávky nebo leady
- `li`: souběžný běh a porovnání čísel s administrací nebo CRM
- `p`: výstup: validace-protokol.pdf – co jsme testovali, výsledky a vysvětlení rozdílů
- `p`: od vás: Testovací objednávka nebo lead a export z administrace nebo CRM
- `li`: 05 Předání a podpora Na předávacím callu se záznamem projdeme dokumentaci a přístupy. Prvních třicet dní po spuštění hlídáme měření zdarma, potom podle dohody pokračujeme správou a monitoringem. dokumentace architektury a datových toků seznam přístupů a vlastníků předávací call se záznamem u správy upozornění při výpadku a měsíční report kvality dat výstup: dokumentace.pdf, záznam callu a access-list.xlsx od vás: Hodina až hodina a půl času lidí, kteří budou měření používat, a kontaktní osoba
- `h3`: Předání a podpora
- `p`: Na předávacím callu se záznamem projdeme dokumentaci a přístupy. Prvních třicet dní po spuštění hlídáme měření zdarma, potom podle dohody pokračujeme správou a monitoringem.
- `li`: dokumentace architektury a datových toků
- `li`: seznam přístupů a vlastníků
- `li`: předávací call se záznamem
- `li`: u správy upozornění při výpadku a měsíční report kvality dat
- `p`: výstup: dokumentace.pdf, záznam callu a access-list.xlsx
- `p`: od vás: Hodina až hodina a půl času lidí, kteří budou měření používat, a kontaktní osoba
- `p`: Kolik to bude stát?
- `div`: Cenu stanovíme po úvodní konzultaci, nejpozději po auditu. Dostanete nabídku s pevným rozsahem, výstupy a termíny. Provoz Google Cloudu a licence nástrojů platíte přímo poskytovatelům. Audit si můžete objednat i samostatně jako službu Audit měření.
- `a`: Audit měření

### [sekce] Jak se postup liší podle typu firmy
- `p`: [ podle typu firmy ]
- `h2`: Jak se postup liší podle typu firmy
- `p`: Kroky zůstávají stejné. Mění se hlavně to, s čím čísla porovnáváme a kam data posíláme.
- `h3`: E-shopy
- `div`: Měřicí plán stavíme na e-commerce událostech GA4 a čísla porovnáváme s administrací e-shopu. Google Ads, Meta, Sklik i Heureka dostanou stejnou hodnotu objednávky.
- `a`: Měření pro e-shopy →
- `h3`: B2B a lead generation
- `div`: Měření nekončí odesláním formuláře. Poptávky porovnáváme se záznamy v CRM a reklamním systémům posíláme i to, co se s poptávkou stalo dál.
- `a`: Měření pro B2B a lead generation →
- `h3`: Velké firmy
- `div`: Na začátku přibude discovery s rozhovory a pilot. Měřicí plán, názvosloví a verzování zavedeme jako standard pro všechny weby a týmy.
- `a`: Měření pro velké firmy →

### [sekce] Jak vypadají výstupy, které dostanete
- `p`: [ ukázky výstupů ]
- `h2`: Jak vypadají výstupy, které dostanete
- `p`: Výřezy ze čtyř dokumentů, které při projektu vzniknou. Příklady používají smyšlená data.
- `button`: Měřicí plán
- `button`: Specifikace dataLayer
- `button`: Protokol validace
- `button`: Dokumentace
- `p`: Každý řádek plánu začíná byznysovou otázkou. K ní teprve přiřadíme KPI, událost, parametry, cílové systémy a souhlas, který událost potřebuje.
- `li`: Které kampaně přinášejí ziskové objednávky? KPI: hrubý zisk z kampaně. Událost purchase s parametry transaction_id, value, currency, items[], shipping a coupon. Cíl: GA4, Google Ads, Meta CAPI a Sklik. Souhlas: analytický i marketingový.
- `li`: Kde lidé opouštějí pokladnu? KPI: míra dokončení pokladny. Události begin_checkout, add_shipping_info a add_payment_info. Cíl: GA4. Souhlas: analytický.
- `li`: Které formuláře přinášejí kvalitní poptávky? KPI: podíl kvalifikovaných leadů. Událost generate_lead s parametry form_id, lead_id a lead_topics. Cíl: GA4, Google Ads a CRM. Souhlas: analytický i marketingový.
- `p` (skryté): Specifikace vývojářům přesně říká, kdy a s jakými daty událost poslat a jak poznat, že funguje. Výřez pro událost purchase:
- `li` (skryté): Kdy: po potvrzení objednávky na děkovací stránce, právě jednou pro dané transaction_id.
- `li` (skryté): Povinné: transaction_id jako text, value jako číslo bez DPH a bez dopravy, currency podle ISO 4217 a aspoň jedna položka v items[].
- `li` (skryté): Akceptační kritérium: obnovení stránky událost znovu neodešle.
- `p` (skryté): Protokol ukazuje, co jsme testovali, co jsme čekali a jaký byl výsledek. Příklady testů:
- `li` (skryté): CNS-01 Návštěva bez interakce s lištou: žádný marketingový požadavek, výchozí stav souhlasu denied.
- `li` (skryté): CNS-02 Volba „Odmítnout vše“: žádné cookies _ga ani _fbp, Meta CAPI nic neodešle.
- `li` (skryté): ECM-05 Obnovení děkovací stránky: událost purchase odejde jen jednou.
- `li` (skryté): CMP-12 GA4 proti administraci: každý rozdíl má vysvětlení, třeba souhlas, testovací objednávky nebo storna.
- `p` (skryté): Dokumentace popisuje celé měření tak, aby po nás mohl pokračovat kdokoli. Obsahuje tyto kapitoly:
- `li` (skryté): Architektura a schéma
- `li` (skryté): Inventář datových toků
- `li` (skryté): GTM: konvence a přehled tagů
- `li` (skryté): GA4: nastavení, vlastní definice a klíčové události
- `li` (skryté): Consent: konfigurace a testy
- `li` (skryté): Reklamní systémy
- `li` (skryté): Server-side: infrastruktura a náklady
- `li` (skryté): Přístupy a vlastníci
- `li` (skryté): Postup při výpadku
- `li` (skryté): Historie změn
- `span`: js
- `button`: Kopírovat
- `pre`: dataLayer.push({ ecommerce: null }); dataLayer.push({ event: 'purchase', ecommerce: { transaction_id: '2026-10458', value: 808.26, currency: 'CZK', shipping: 73.55, tax: 169.73, items: [ { item_id: 'BTL-0420', item_name: 'Termoska 0,5 l', item_category: 'Outdoor', price: 404.13, quantity: 2 } ] } });
- `figcaption`: Výřez ze specifikace: událost purchase se smyšlenými daty

### [sekce] Časté otázky
- `p`: [ FAQ ]
- `h2`: Časté otázky
- `p`: Nenašli jste odpověď? Napište nám.
- `a`: Napište nám
- `summary`: Přístupy: jaké role potřebujeme a kde je udělíte
- `p`: Nepotřebujeme vaše hesla. Přístupy udělíte na náš pracovní e-mail a po skončení projektu je jedním kliknutím odeberete. Pro audit stačí čtení, pro implementaci potřebujeme práva k úpravám.
- `caption`: Jaké role potřebujeme pro audit a pro implementaci
- `th`: Nástroj
- `th`: Audit
- `th`: Implementace
- `th`: Kde přístup udělíte
- `th`: Google Tag Manager
- `td`: Čtení v kontejneru
- `td`: Publikace v kontejneru, v účtu role Uživatel
- `td`: Správce → Správa uživatelů
- `th`: Google Analytics 4
- `td`: Viewer
- `td`: Editor na úrovni property
- `td`: Správce → Správa přístupu k property
- `th`: Google Ads
- `td`: Jen čtení
- `td`: Standardní
- `td`: Správce → Přístup a zabezpečení
- `th`: Merchant Center
- `td`: Standardní
- `td`: Admin, jen pokud řešíme produktový feed nebo data z košíku
- `td`: Nastavení → Lidé a přístup
- `th`: Meta Business
- `td`: Events Manager – zobrazit
- `td`: Events Manager – spravovat
- `td`: Firemní nastavení → Zdroje dat → Datové sady
- `th`: Sklik / Seznam
- `td`: Čtení
- `td`: Úpravy
- `td`: Nastavení účtu → Přístupy
- `th`: Google Cloud
- `td`: roles/viewer na projekt
- `td`: Podle úkolu, třeba Cloud Run Admin nebo BigQuery Admin
- `td`: IAM a správa → IAM
- `th`: Administrace e-shopu nebo CMS
- `td`: Uživatel s nastavením marketingu
- `td`: Totéž
- `td`: Podle platformy
- `th`: CRM
- `td`: Čtení pipeline
- `td`: Admin pro pole a automatizace, nebo spolupráce s vaším adminem
- `td`: Podle CRM
- `p`: NDA podepíšeme ještě před udělením přístupů, pokud o to stojíte. Zpracovatelskou smlouvu uzavíráme vždy, když pracujeme s osobními údaji, třeba v CRM.
- `summary`: Jak dlouho trvá typický projekt?
- `div`: Záleží hlavně na dvou věcech: jak rychle vývojáři doplní datovou vrstvu a jak dlouho musí měření běžet, abychom ho mohli porovnat s administrací nebo CRM. Samotná naše práce obvykle nezabere nejvíc času. Termíny najdete v nabídce, kterou dostanete po úvodní konzultaci, nejpozději po auditu.
- `summary`: Kdo bude na projektu pracovat?
- `div`: Úvodní konzultaci vede Vít Novotný. Na začátku projektu víte jménem, kdo dělá co a s kým mluvíte. Projekty nepředáváme dalším subdodavatelům bez vašeho souhlasu.
- `summary`: Co když nemáme vlastního vývojáře?
- `div`: Na Shoptetu, Upgates, Shopify a většině webů na WordPressu zvládneme většinu práce přes administraci a Tag Manager. U vlastních řešení potřebujeme někoho, kdo do webu doplní datovou vrstvu. Dodáme mu přesné zadání a výsledek otestujeme.
- `a`: datovou vrstvu
- `summary`: Spolupracujete s naší PPC nebo marketingovou agenturou?
- `div`: Ano, je to běžné. Agentura dál spravuje kampaně a my zajistíme, aby měla správná data. Domluvíme se, kdo smí v GTM co měnit, a agentura dostane dokumentaci a přístupy podle potřeby.
- `summary`: Co když se měření po předání rozbije?
- `div`: Prvních třicet dní po spuštění měření hlídáme zdarma a chyby, které způsobíme my, opravíme vždy. Pokud se měření rozbije později kvůli změně webu, pomůžeme v rámci správy webu a měření nebo jednorázově. Doporučujeme monitoring, který na výpadek upozorní do 24 hodin.
- `a`: správy webu a měření
- `summary`: Podepíšete NDA a zpracovatelskou smlouvu?
- `div`: Ano. NDA i před první schůzkou, zpracovatelskou smlouvu vždy, když pracujeme s osobními údaji, třeba s CRM nebo se zákaznickými daty v BigQuery.

### [sekce] 
- `p`: [ pokračujte ]
- `a`: Audit měření zjistíme, kde data utíkají
- `a`: Datová vrstva zadání pro vývojáře, které funguje
- `a`: Správa webu a měření hlídáme, aby měření nepřestalo fungovat

### [sekce] Začněme třicetiminutovou konzultací
- `p`: [ Kontakt ]
- `h2`: Začněme třicetiminutovou konzultací
- `p`: Napište nám e-mail, nebo vyplňte formulář. Na konzultaci projdeme váš web a řekneme, kterým krokem začít – nezávazně a zdarma.
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

### [sekce] Časté otázky
- `div@aria-label`: Jaké role potřebujeme pro audit a pro implementaci
- `td@data-label`: Audit
- `td@data-label`: Implementace
- `td@data-label`: Kde přístup udělíte
- `td@data-label`: Audit
- `td@data-label`: Implementace
- `td@data-label`: Kde přístup udělíte
- `td@data-label`: Audit
- `td@data-label`: Implementace
- `td@data-label`: Kde přístup udělíte
- `td@data-label`: Audit
- `td@data-label`: Implementace
- `td@data-label`: Kde přístup udělíte
- `td@data-label`: Audit
- `td@data-label`: Implementace
- `td@data-label`: Kde přístup udělíte
- `td@data-label`: Audit
- `td@data-label`: Implementace
- `td@data-label`: Kde přístup udělíte
- `td@data-label`: Audit
- `td@data-label`: Implementace
- `td@data-label`: Kde přístup udělíte
- `td@data-label`: Audit
- `td@data-label`: Implementace
- `td@data-label`: Kde přístup udělíte
- `td@data-label`: Audit
- `td@data-label`: Implementace
- `td@data-label`: Kde přístup udělíte

### [sekce] Začněme třicetiminutovou konzultací
- `ol@aria-label`: Co se stane po odeslání