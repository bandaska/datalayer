# /sluzby/google-tag-manager

## Hlavička stránky (title, meta, OG)
- `title`: Google Tag Manager – nastavení, audit, správa | datalayer.cz
- `meta:description`: Desítky tagů, které nikdo nezná? Nastavíme, zaudítujeme a spravujeme Google Tag Manager: názvosloví, verze, práva, consent i výkon. Konzultace zdarma.
- `meta:og:title`: Google Tag Manager – nastavení, audit, správa | datalayer.cz
- `meta:og:description`: Desítky tagů, které nikdo nezná? Nastavíme, zaudítujeme a spravujeme Google Tag Manager: názvosloví, verze, práva, consent i výkon. Konzultace zdarma.
- `meta:twitter:title`: Google Tag Manager – nastavení, audit, správa | datalayer.cz
- `meta:twitter:description`: Desítky tagů, které nikdo nezná? Nastavíme, zaudítujeme a spravujeme Google Tag Manager: názvosloví, verze, práva, consent i výkon. Konzultace zdarma.

## Strukturovaná data (JSON-LD) – texty
- `jsonld:itemListElement.name`: Úvod
- `jsonld:itemListElement.name`: Služby
- `jsonld:itemListElement.name`: Google Tag Manager
- `jsonld:name`: Google Tag Manager – nastavení, audit a správa
- `jsonld:serviceType`: Implementace, audit a správa Google Tag Manageru
- `jsonld:description`: Nastavení nového kontejneru GTM, audit a úklid existujícího a průběžná správa: názvosloví, verze, workspaces, oprávnění, dokumentace, Consent Mode v2 a výkon.
- `jsonld:areaServed.name`: Česká republika
- `jsonld:mainEntity.name`: Kolik stojí nastavení nebo audit GTM?
- `jsonld:mainEntity.acceptedAnswer.text`: Cenu stanovujeme podle rozsahu: u nastavení rozhoduje počet platforem a událostí a to, jestli web má datovou vrstvu, u auditu velikost kontejneru a počet webů. Po úvodní konzultaci dostanete nabídku s pevným rozsahem. Samotný Google Tag Manager je zdarma, peníze stojí jen verze Tag Manager 360 a případný server pro server-side měření, který hradíte napřímo poskytovateli.
- `jsonld:mainEntity.name`: Jak dlouho trvá nastavení nebo audit?
- `jsonld:mainEntity.acceptedAnswer.text`: Nastavení trvá podle toho, jestli web už má datovou vrstvu, nebo ji vývojáři musí teprve připravit. Délku auditu určuje hlavně velikost kontejneru a počet webů. Po přesunu kódů z webu ještě sedm až čtrnáct dní porovnáváme konverze s obdobím před migrací.
- `jsonld:mainEntity.name`: Komu patří kontejner a kdo k němu bude mít přístup?
- `jsonld:mainEntity.acceptedAnswer.text`: Kontejner zakládáme na firemním účtu GTM a administrátor jste vy, ideálně dva lidé z firmy. My i agentury dostáváme jen oprávnění, která potřebujeme: pro audit čtení, pro správu úpravy nebo publikaci. Po skončení spolupráce nám oprávnění jednoduše odeberete.
- `jsonld:mainEntity.name`: Jak v GTM řešíte souhlas s cookies?
- `jsonld:mainEntity.acceptedAnswer.text`: Šablona cookie lišty běží na spouštěči Consent Initialization, takže GTM zná výchozí stav souhlasu dřív než jakýkoli tag. Tagy Google mají vestavěné kontroly souhlasu, ostatním tagům, třeba Metě nebo Hotjaru, nastavujeme dodatečné kontroly a vše ověřujeme v Tag Assistantu. Lištu, texty a režim basic, nebo advanced řeší služba Cookie lišta a Consent Mode v2, kategorie souhlasu by měl posoudit váš právník.
- `jsonld:mainEntity.name`: Musí do toho zasahovat náš vývojář?
- `jsonld:mainEntity.acceptedAnswer.text`: Většinou jen na začátku: vloží kód kontejneru a doplní datovou vrstvu, tedy údaje o produktech, objednávkách a formulářích, které GTM sám spolehlivě nezjistí. Specifikaci mu připravíme a jeho práci otestujeme. U platforem jako Shoptet nebo Shopify část datové vrstvy už existuje a vývojáře někdy nepotřebujete vůbec.
- `jsonld:mainEntity.name`: Zpomalí Google Tag Manager web?
- `jsonld:mainEntity.acceptedAnswer.text`: Samotný kontejner web výrazně nezpomalí. Zpomalují ho tagy uvnitř, hlavně těžké skripty třetích stran, třeba chaty, heatmapy nebo desítky pixelů na všech stránkách. Proto mažeme nepoužívané tagy, omezujeme Custom HTML, hlídáme ukazatel velikosti kontejneru a část tagů můžeme přesunout i na server.

## Obsah stránky

### [sekce] 
- `a`: Přeskočit na obsah
- `a`: Úvod
- `a`: Služby
- `li`: Google Tag Manager
- `p`: [ gtm · sběr dat ]
- `h1`: Google Tag Manager: nastavení, audit a správa
- `p`: Google Tag Manager je bezplatný nástroj Googlu, přes který vložíte na web měřicí a marketingové kódy, tedy tagy, bez zásahu do zdrojového kódu. Nový kontejner nastavíme, stávající zkontrolujeme a uklidíme, nebo ho budeme dlouhodobě spravovat – vždy s pravidly pro názvy, verze, oprávnění a Consent Mode v2, aby se v něm vyznal i další člověk.
- `a`: [ Konzultovat GTM ]
- `a`: [ Chci audit kontejneru ]
- `p`: Úvodní třicetiminutová konzultace zdarma · odpovíme do jednoho pracovního dne
- `li`: Každá změna jako verze s popisem
- `li`: Kontejner zůstává na vašem účtu
- `li`: Consent Mode v2 v každém kontejneru

### [sekce] Poznáváte svůj Tag Manager?
- `p`: [ symptomy ]
- `h2`: Poznáváte svůj Tag Manager?
- `span`: tags: 120
- `h3`: Desítky tagů, které nikdo nezná
- `div`: Agentury se střídaly, tagy s názvy jako „New Tag (3)“ zůstaly a nikdo neví, které z nich jsou potřeba.
- `span`: v87 ?
- `h3`: Publikuje každý, bez popisu
- `div`: Verze 87 nemá popis, a když spadly konverze, nikdo neví, co se změnilo.
- `span`: duplicate
- `h3`: Kódy na třech místech
- `div`: Část kódů žije v šabloně webu, část v pluginu a část v GTM, takže reklamní systémy počítají konverze dvakrát.
- `span`: consent
- `h3`: Tagy běží před souhlasem
- `div`: GTM spouští reklamní pixely dřív, než návštěvník klikne na cookie lištu.

### [sekce] Nastavení, audit, nebo správa?
- `p`: [ služby ]
- `h2`: Nastavení, audit, nebo správa?
- `button`: Nastavení nového kontejneru
- `button`: Audit a úklid
- `button`: Průběžná správa
- `p`: Kdy se hodí: nový web, redesign, přechod z kódů natvrdo, nebo kontejner tak chaotický, že je levnější začít znovu.
- `li`: návrh kontejneru podle měřicího plánu: které tagy, spouštěče a proměnné a proč
- `li`: Google tag pro GA4 a Google Ads, šablona cookie lišty a Consent Mode v2
- `li`: tagy Google Ads, Mety, Skliku, Heureky, TikToku nebo LinkedInu podle potřeby
- `li`: složky, názvosloví, vývojové prostředí pro testy a dokumentace
- `p` (skryté): Kdy se hodí: převzetí kontejneru od agentury, konverze, které nesedí, pomalý web, redesign nebo nasazení server-side. Audit samotného GTM je užší než audit měření, který prověří i GA4 a reklamní systémy.
- `a` (skryté): audit měření
- `li` (skryté): inventura tagů, spouštěčů a proměnných: co je duplicitní a co nikdy neběží
- `li` (skryté): názvosloví, Custom HTML a šablony třetích stran
- `li` (skryté): kontrola souhlasu u každého tagu a pořadí spouštění
- `li` (skryté): verze, oprávnění, kódy mimo GTM a dopad na rychlost webu
- `p` (skryté): Kdy se hodí: marketing průběžně potřebuje nové tagy a GTM interně nikdo nespravuje, nebo velká firma chce externího „strážce“ pravidel. Navazuje služba Správa webu a měření.
- `a` (skryté): Správa webu a měření
- `li` (skryté): nové tagy na požadavek: ticket, workspace, test, verze s popisem a publikace
- `li` (skryté): měsíční kontrola, že klíčové tagy běží
- `li` (skryté): revize oprávnění
- `li` (skryté): aktualizace šablon a reakce na změny platforem, třeba Seznamu nebo Google tagu

### [sekce] Co uděláme a co dostanete
- `p`: [ výstupy ]
- `h2`: Co uděláme a co dostanete
- `p`: Kontejner s dokumentací, ve které se nový člověk nebo agentura zorientuje za hodinu, ne za týden.
- `span`: gtm-container
- `h3`: Publikovaný kontejner
- `div`: Každá verze má datum a popis změny. Po auditu publikujeme úklid po dohodě.
- `span`: container-card
- `h3`: Karta kontejneru
- `div`: Seznam tagů s účelem, vlastníkem, kategorií souhlasu a datem poslední kontroly.
- `span`: inventory · A/B/C
- `h3`: Inventura a report nálezů
- `div`: U auditu tabulka všech tagů s doporučením ponechat, upravit, nebo smazat a nálezy podle priority A, B a C.
- `pre`: GA4 – Event – purchase CE – purchase DLV – ecommerce.transaction_id
- `span`: naming
- `h3`: Pravidla kontejneru
- `div`: Ze šesti pravidel, která zavádíme do každého kontejneru:
- `li`: jednotné názvy a složky podle platformy
- `li`: osobní účty a revize oprávnění každé čtvrtletí
- `li`: šablony místo Custom HTML
- `span`: perf
- `h3`: Rychlejší web
- `div`: Rychlost hlídáme při nastavení i úklidu:
- `li`: nepoužívané tagy pryč, velikost kontejneru pod kontrolou
- `li`: těžké skripty jen tam, kde je potřebujete
- `li`: jeden Google tag pro GA4 i Google Ads, bez duplicit
- `span`: qa · changelog
- `h3`: Testovací protokol a předání
- `div`: Kontrola v Tag Assistantu a náhledu, hodinové zaškolení týmu. Při správě changelog a měsíční přehled změn.

### [sekce] Co se děje uvnitř kontejneru
- `p`: [ diagram ]
- `h2`: Co se děje uvnitř kontejneru
- `p`: Web zapíše událost do datové vrstvy a spouštěč rozhodne, kterých tagů se týká. Kontrola souhlasu pak rozhodne, jestli je GTM smí spustit.
- `span`: dataLayer
- `li`: event: purchase
- `p`: Web zapíše událost do datové vrstvy.
- `span`: Spouštěč
- `li`: CE – purchase
- `p`: GTM spustí tag jen při události purchase, ne při každém načtení stránky.
- `span`: Kontrola souhlasu
- `li`: Consent Initialization
- `li`: výchozí stav denied
- `li`: update z cookie lišty
- `span`: Tagy
- `li`: GA4 – Event – purchase: analytics_storage
- `li`: Google Ads – Conversion: ad_storage + ad_user_data
- `li`: Meta – Event – Purchase: ad_storage
- `li`: server-side GTM, volitelně
- `p`: Bez souhlasu tag čeká. Jen tagy Google v advanced režimu pošlou cookieless ping.
- `span`: Governance
- `li`: verze s popisem
- `li`: workspaces
- `li`: oprávnění
- `figcaption`: Schéma GTM: událost z datové vrstvy → spouštěč → kontrola souhlasu z cookie lišty → tagy GA4, Google Ads a Meta, volitelně server-side GTM. Celé nastavení drží verze s popisem, workspaces a oprávnění.
- `li`: Jedna událost pro všechny tagy. Web zapíše nákup jednou a GTM ho předá GA4, Google Ads i Metě se stejnou hodnotou.
- `li`: Verze s popisem. Při problému víte, co se změnilo, a vrátíte se o verzi zpět.
- `li`: Základ pro GA4. Přes kontejner nasazujeme i implementaci GA4 a konverze reklamních systémů.
- `a`: implementaci GA4

### [sekce] Kde mají měřicí kódy žít?
- `p`: [ rozhodnutí ]
- `h2`: Kde mají měřicí kódy žít?
- `p`: Pro většinu webů je Google Tag Manager výchozí volba. Kódy natvrdo v šabloně nechte jen u kritických skriptů webu.
- `th`: Kritérium
- `th`: Kódy natvrdo v šabloně
- `th`: Google Tag Manager
- `th`: Změna tagu
- `td`: vývojář a nasazení webu
- `td`: marketing nebo analytik, bez nasazení
- `th`: Kontrola souhlasu
- `td`: ručně v kódu, často chybí
- `td`: centrálně přes Consent Mode
- `th`: Historie změn
- `td`: Git webu, pokud vůbec
- `td`: verze kontejneru s popisem
- `th`: Náklady na provoz
- `td`: žádné
- `td`: žádné, kromě placeného GTM 360
- `p`: Třetí možnost je GTM se server-side GTM: část tagů poběží na serveru a v prohlížeči zůstane méně skriptů, server ale potřebuje hosting a správu. Vyplatí se hlavně e-shopům a firmám s větším rozpočtem na reklamu, víc na stránce Server-side tracking.
- `a`: Server-side tracking

### [sekce] Jak spolupráce probíhá
- `p`: [ postup ]
- `h2`: Jak spolupráce probíhá
- `p`: Stejných pět kroků jako u všech našich služeb. U auditu znamená třetí krok úklid v samostatném workspace, u správy pokračujeme měsíční kontrolou.
- `li`: 01 Audit Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací. od vás: přístupy pro čtení
- `h3`: Audit
- `p`: Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.
- `li`: 02 Měřicí plán Byznys cíle převedeme na události, parametry a pravidla pojmenování. od vás: hodinová schůzka a schválení plánu
- `h3`: Měřicí plán
- `p`: Byznys cíle převedeme na události, parametry a pravidla pojmenování.
- `li`: 03 Implementace Kontejner nastavíme nebo uklidíme v samostatném workspace, napojíme tagy na datovou vrstvu a souhlas a před publikací vše otestujeme. od vás: administrátorská práva k GTM, testovací prostředí a přístup do cookie lišty
- `h3`: Implementace
- `p`: Kontejner nastavíme nebo uklidíme v samostatném workspace, napojíme tagy na datovou vrstvu a souhlas a před publikací vše otestujeme.
- `li`: 04 Validace Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM. od vás: testovací objednávka a export z administrace
- `h3`: Validace
- `p`: Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.
- `li`: 05 Předání a podpora Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu. od vás: předávací schůzka
- `h3`: Předání a podpora
- `p`: Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.
- `h3`: Přesun kódů z webu do GTM bez výpadku dat
- `li`: Příprava: ke každému kódu na webu najdeme náhradu v GTM a otestujeme ji ve workspace.
- `li`: Přepnutí: kódy z webu odstraníme ve stejném nasazení, ve kterém publikujeme kontejner.
- `li`: Porovnání: sedm až čtrnáct dní srovnáváme konverze s obdobím před přesunem.

### [sekce] Časté otázky
- `p`: [ FAQ ]
- `h2`: Časté otázky
- `p`: Nenašli jste odpověď? Napište nám.
- `a`: Napište nám
- `summary`: Technické detaily: názvosloví, oprávnění a souhlas v GTM
- `caption`: Názvosloví – ukázka konvence
- `th`: Prvek
- `th`: Formát
- `th`: Příklady
- `th`: Tag
- `td`: {Platforma} – {Typ} – {Událost}
- `td`: GA4 – Event – purchase · Google Ads – Conversion – Nákup · Sklik – SEM – purchase
- `th`: Spouštěč
- `td`: {Typ} – {Podmínka}
- `td`: CE – purchase · Click – Link – tel: · Consent Init – All Pages
- `th`: Proměnná
- `td`: {Typ} – {Název}
- `td`: DLV – ecommerce.transaction_id · Const – GA4 ID
- `th`: Složky
- `td`: podle platformy
- `td`: 01 GA4 · 02 Google Ads · 90 Consent · 99 Utility
- `th`: Verze
- `td`: RRRR-MM-DD – změna
- `td`: 2026-10-08 – deduplikace purchase podle transaction_id
- `p`: Zkratky: CE je vlastní událost neboli custom event, DLV proměnná datové vrstvy.
- `h3`: Oprávnění
- `li`: Administrátor účtu je vlastník za firmu, aspoň dva lidé, ne agentura.
- `li`: Publikovat smí jeden až dva lidé. Agentura pracuje ve vlastním workspace s právem Upravit.
- `li`: Vývojář a dočasný dodavatel mají jen Číst a po skončení práce jim oprávnění odeberete.
- `li`: Bezplatný GTM má tři workspaces, schvalovací workflow a zóny nabízí jen Tag Manager 360.
- `h3`: Tagy a souhlas: standardní nastavení
- `li`: Google tag a GA4: analytics_storage, pro reklamní funkce i ad_storage a ad_user_data.
- `li`: Google Ads: ad_storage, ad_user_data a ad_personalization.
- `li`: Meta Pixel: ad_storage. Hotjar a Microsoft Clarity: analytics_storage. Sklik podle dokumentace Seznamu.
- `li`: Pro návštěvníky z EHP začínají všechny čtyři signály na denied. Finální mapování určí CMP a právní posouzení.
- `summary`: Kolik stojí nastavení nebo audit GTM?
- `div`: Cenu stanovujeme podle rozsahu: u nastavení rozhoduje počet platforem a událostí a to, jestli web má datovou vrstvu, u auditu velikost kontejneru a počet webů. Po úvodní konzultaci dostanete nabídku s pevným rozsahem. Samotný Google Tag Manager je zdarma, peníze stojí jen verze Tag Manager 360 a případný server pro server-side měření, který hradíte napřímo poskytovateli.
- `summary`: Jak dlouho trvá nastavení nebo audit?
- `div`: Nastavení trvá podle toho, jestli web už má datovou vrstvu, nebo ji vývojáři musí teprve připravit. Délku auditu určuje hlavně velikost kontejneru a počet webů. Po přesunu kódů z webu ještě sedm až čtrnáct dní porovnáváme konverze s obdobím před migrací.
- `summary`: Komu patří kontejner a kdo k němu bude mít přístup?
- `div`: Kontejner zakládáme na firemním účtu GTM a administrátor jste vy, ideálně dva lidé z firmy. My i agentury dostáváme jen oprávnění, která potřebujeme: pro audit čtení, pro správu úpravy nebo publikaci. Po skončení spolupráce nám oprávnění jednoduše odeberete.
- `summary`: Jak v GTM řešíte souhlas s cookies?
- `div`: Šablona cookie lišty běží na spouštěči Consent Initialization, takže GTM zná výchozí stav souhlasu dřív než jakýkoli tag. Tagy Google mají vestavěné kontroly souhlasu, ostatním tagům, třeba Metě nebo Hotjaru, nastavujeme dodatečné kontroly a vše ověřujeme v Tag Assistantu. Lištu, texty a režim basic, nebo advanced řeší služba Cookie lišta a Consent Mode v2, kategorie souhlasu by měl posoudit váš právník.
- `a`: Cookie lišta a Consent Mode v2
- `summary`: Musí do toho zasahovat náš vývojář?
- `div`: Většinou jen na začátku: vloží kód kontejneru a doplní datovou vrstvu, tedy údaje o produktech, objednávkách a formulářích, které GTM sám spolehlivě nezjistí. Specifikaci mu připravíme a jeho práci otestujeme. U platforem jako Shoptet nebo Shopify část datové vrstvy už existuje a vývojáře někdy nepotřebujete vůbec.
- `summary`: Zpomalí Google Tag Manager web?
- `div`: Samotný kontejner web výrazně nezpomalí. Zpomalují ho tagy uvnitř, hlavně těžké skripty třetích stran, třeba chaty, heatmapy nebo desítky pixelů na všech stránkách. Proto mažeme nepoužívané tagy, omezujeme Custom HTML, hlídáme ukazatel velikosti kontejneru a část tagů můžeme přesunout i na server.

### [sekce] 
- `p`: [ pokračujte ]
- `a`: Datová vrstva zadání pro vývojáře, které funguje
- `a`: Server-side tracking měření na vaší doméně
- `a`: Cookie lišta a Consent Mode v2 souhlas legálně a bez zbytečné ztráty dat

### [sekce] Uklidíme váš Tag Manager
- `p`: [ Kontakt ]
- `h2`: Uklidíme váš Tag Manager
- `p`: Na třicetiminutové konzultaci zdarma se podíváme na kontejner a řekneme, co řešit jako první.
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

### [sekce] Co uděláme a co dostanete
- `pre@aria-label`: Ilustrativní ukázka

### [sekce] Kde mají měřicí kódy žít?
- `div@aria-label`: Kde mají měřicí kódy žít?
- `td@data-label`: Kódy natvrdo v šabloně
- `td@data-label`: Google Tag Manager
- `td@data-label`: Kódy natvrdo v šabloně
- `td@data-label`: Google Tag Manager
- `td@data-label`: Kódy natvrdo v šabloně
- `td@data-label`: Google Tag Manager
- `td@data-label`: Kódy natvrdo v šabloně
- `td@data-label`: Google Tag Manager

### [sekce] Časté otázky
- `div@aria-label`: Názvosloví – ukázka konvence
- `td@data-label`: Formát
- `td@data-label`: Příklady
- `td@data-label`: Formát
- `td@data-label`: Příklady
- `td@data-label`: Formát
- `td@data-label`: Příklady
- `td@data-label`: Formát
- `td@data-label`: Příklady
- `td@data-label`: Formát
- `td@data-label`: Příklady

### [sekce] Uklidíme váš Tag Manager
- `ol@aria-label`: Co se stane po odeslání