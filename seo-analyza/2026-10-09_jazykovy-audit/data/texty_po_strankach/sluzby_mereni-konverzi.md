# /sluzby/mereni-konverzi

## Hlavička stránky (title, meta, OG)
- `title`: Měření konverzí: Ads, Meta, Sklik, Heureka | datalayer.cz
- `meta:description`: Nastavíme měření konverzí pro Google Ads, Meta (Pixel + CAPI), Sklik, Heureku i TikTok z jedné datové vrstvy, bez dvojího počítání. Konzultace zdarma.
- `meta:og:title`: Měření konverzí: Ads, Meta, Sklik, Heureka | datalayer.cz
- `meta:og:description`: Nastavíme měření konverzí pro Google Ads, Meta (Pixel + CAPI), Sklik, Heureku i TikTok z jedné datové vrstvy, bez dvojího počítání. Konzultace zdarma.
- `meta:twitter:title`: Měření konverzí: Ads, Meta, Sklik, Heureka | datalayer.cz
- `meta:twitter:description`: Nastavíme měření konverzí pro Google Ads, Meta (Pixel + CAPI), Sklik, Heureku i TikTok z jedné datové vrstvy, bez dvojího počítání. Konzultace zdarma.

## Strukturovaná data (JSON-LD) – texty
- `jsonld:itemListElement.name`: Úvod
- `jsonld:itemListElement.name`: Služby
- `jsonld:itemListElement.name`: Měření konverzí
- `jsonld:name`: Měření konverzí pro Google Ads, Meta, Sklik a Heureku
- `jsonld:serviceType`: Nastavení a sjednocení měření konverzí v reklamních systémech
- `jsonld:description`: Nastavení konverzí z jedné datové vrstvy pro Google Ads včetně rozšířených konverzí, Meta Pixel a Conversions API, Seznam Event Measurement pro Sklik a Seznam Nákupy, Heureku s měřením konverzí a Ověřeno zákazníky, TikTok, LinkedIn a Microsoft Ads. Sjednocení hodnot, deduplikace, testovací objednávky a odsouhlasení s backendem.
- `jsonld:areaServed.name`: Česká republika
- `jsonld:audience.audienceType`: E-shopy, B2B firmy a velké firmy
- `jsonld:mainEntity.name`: Potřebuju Meta Pixel, když mám Conversions API?
- `jsonld:mainEntity.acceptedAnswer.text`: Meta doporučuje oba zdroje souběžně: pixel zachytí události v prohlížeči a Conversions API je doplní ze serveru i tam, kde prohlížeč selže. Aby Meta nákup nepočítala dvakrát, posílají oba stejný název události a stejné event_id. Samotné Conversions API dává smysl třeba pro offline konverze, pro běžný e-shop doporučujeme kombinaci.
- `jsonld:mainEntity.name`: Co je Seznam Event Measurement a musím přejít?
- `jsonld:mainEntity.acceptedAnswer.text`: Seznam Event Measurement, zkráceně SEM, je nové měření Seznamu: jeden skript sul.js nahrazuje kódy Skliku i měření pro Seznam Nákupy. Přechod budou podle Seznamu potřebovat všechny účty a podporu původních kódů Seznam ukončí v průběhu roku 2027. SEM je zatím v betě a přepnutí účtu je nevratné, proto ho nasazujeme souběžně a přepínáme až po ověření. Stav k říjnu 2026.
- `jsonld:mainEntity.name`: Jde měřit konverze bez souhlasu?
- `jsonld:mainEntity.acceptedAnswer.text`: Ne tak, že bychom souhlas ignorovali – bez něj web nesmí ukládat ani číst netechnické údaje v zařízení návštěvníka. Google v advanced režimu Consent Mode dostává pingy bez cookies a část konverzí modeluje, ostatní systémy návštěvníka bez souhlasu nevidí. Naše práce je, aby u lidí se souhlasem konverze dorazily spolehlivě – víc u služby Cookie lišta a Consent Mode v2.
- `jsonld:mainEntity.name`: Co budete potřebovat od našich vývojářů?
- `jsonld:mainEntity.acceptedAnswer.text`: Záleží na stavu datové vrstvy a platformě. Pokud datová vrstva chybí nebo je neúplná, připravíme vývojářům zadání s událostmi nákupu a leadu, nebo upravíme nastavení e-shopové platformy. Pro backendová napojení – Ověřeno zákazníky, Seznam Nákupy a offline konverze – dostanou vývojáři zadání od nás.
- `jsonld:mainEntity.name`: Komu patří účty a jaké přístupy potřebujete?
- `jsonld:mainEntity.acceptedAnswer.text`: Všechny účty – Google Ads, Meta Business, Sklik, Heureka i GTM – zůstávají vaše. Potřebujeme role s oprávněním k úpravám konverzí a značek, nikdy hesla, a nový token nebo datový zdroj vznikne vždy ve vašem účtu. Seznam přístupů dostanete při předání, abyste je mohli kdykoli odebrat.
- `jsonld:mainEntity.name`: Z čeho se skládá cena a jak dlouho to trvá?
- `jsonld:mainEntity.acceptedAnswer.text`: Cena se odvíjí od počtu systémů, stavu datové vrstvy, platformy e-shopu, zapojení serveru nebo CRM a počtu domén a zemí. Délku nastavení ovlivňují stejné faktory a vždy k ní připočtěte čtrnáct dní souběžného běhu. Provoz serveru, pokud ho využijete, platíte přímo poskytovateli.

## Obsah stránky

### [sekce] 
- `a`: Přeskočit na obsah
- `a`: Úvod
- `a`: Služby
- `li`: Měření konverzí
- `p`: [ conversion ]
- `h1`: Měření konverzí pro Google Ads, Meta, Sklik i Heureku
- `p`: Měření konverzí předává reklamním systémům informaci, že návštěvník z reklamy nakoupil nebo poslal poptávku. Stavíme ho z jedné datové vrstvy, aby každá objednávka dorazila do Google Ads, Mety, Skliku i Heureky jednou, se stejným ID a hodnotou – a jen podle souhlasu návštěvníka. Reklamy pak optimalizují na čísla, která sedí s administrací.
- `a`: [ Zkontrolovat moje konverze ]
- `a`: [ Proč se čísla liší ]
- `p`: Úvodní konzultace zdarma · účty a data zůstávají vaše, pracujeme přes role, ne přes hesla
- `li`: Google Ads, Meta, Sklik i Heureka z jedné datové vrstvy
- `li`: Stejné ID a hodnota ve všech systémech
- `li`: Odsouhlasení s backendem po čtrnácti dnech

### [sekce] Které z toho znáte?
- `p`: [ symptomy ]
- `h2`: Které z toho znáte?
- `p`: Část rozdílů mezi systémy je přirozená, část je chyba v nastavení.
- `span`: admin ≠ ga4
- `h3`: Každý systém hlásí jiné číslo
- `div`: Administrace třeba ukáže 412 objednávek, GA4 371 a Meta 388 – a nevíte, který rozdíl je chyba.
- `span`: ×2
- `h3`: Systémy počítají nákup dvakrát
- `div`: Pixel i Conversions API bez společného ID nebo import z GA4 vedle konverzní značky – a k tomu jednou cena s DPH, jednou bez.
- `span`: rc.js → sul.js
- `h3`: Sklik měří jen část
- `div`: Starý konverzní kód bez předání souhlasu, retargeting zvlášť – a Seznam mezitím spouští nové měření SEM.
- `span`: crm
- `h3`: Google Ads optimalizuje na formuláře, ne na zakázky
- `div`: Reklama počítá každý odeslaný formulář, i když obchod v CRM ví, které leady jsou dobré.

### [sekce] Co uděláme a co dostanete
- `p`: [ výstupy ]
- `h2`: Co uděláme a co dostanete
- `p`: Než napíšeme první tag, dohodneme s vámi, co je konverze a jaká je její hodnota. Pravidla zapíšeme do konverzní mapy, aby platila i pro agentury a budoucí dodavatele.
- `span`: conversion-map
- `h3`: Konverzní mapa
- `div`: Které akce jsou konverze, primární a sekundární akce, hodnoty, ID a okna – pro každý systém.
- `span`: dataLayer.md
- `h3`: Zadání datové vrstvy
- `div`: Pokud chybí nebo je neúplná: specifikace pro vývojáře s událostmi nákupu a leadu. Navazuje na službu Datová vrstva.
- `a`: Datová vrstva
- `span`: gtm-web · gtm-server
- `h3`: Nastavený GTM
- `div`: Tagy, spouštěče a podmínky souhlasu s popisem verzí, volitelně Conversions API a Events API přes server-side GTM.
- `span`: api-spec
- `h3`: Backendové napojení
- `div`: Zadání pro vývojáře: Ověřeno zákazníky, Seznam Nákupy a offline konverze přes Data Manager API.
- `span`: test-report
- `h3`: Testovací protokol a odsouhlasení
- `div`: Výsledky testovacích objednávek po systémech a po čtrnácti dnech tabulka backendu a systémů s vysvětlením rozdílů.
- `span`: access-list
- `h3`: Přístupy a předání
- `div`: Přehled rolí ve všech účtech a krátké zaškolení pro marketing a agentury, jak konverze číst.

### [sekce] Jedna objednávka, jeden zdroj, všechny systémy
- `p`: [ architektura ]
- `h2`: Jedna objednávka, jeden zdroj, všechny systémy
- `p`: Základ je datová vrstva, kterou e-shop nebo web naplní při nákupu či odeslání formuláře. Z ní konverze putují třemi cestami podle toho, co která platforma podporuje. Kdy se serverová cesta vyplatí, rozebíráme u služby Server-side tracking.
- `a`: Server-side tracking
- `span`: zdroje
- `li`: datová vrstva: nákup nebo lead s ID, hodnotou a měnou
- `li`: backend, ERP nebo CRM
- `span`: cesty
- `li`: prohlížeč: web GTM s Consent Mode v2
- `li`: server: server-side GTM, volitelně
- `li`: backend: API
- `span`: platformy
- `li`: Google Ads a rozšířené konverze
- `li`: Meta a TikTok: pixel i API se stejným event_id
- `li`: Sklik, Seznam Nákupy a Heureka
- `li`: LinkedIn a Microsoft Ads
- `figcaption`: Jedna objednávka putuje třemi cestami: z datové vrstvy přes webový GTM do skriptů v prohlížeči, přes volitelný server-side GTM do Google Ads, Meta Conversions API a TikTok Events API a z backendu přes API do Heureky, Seznam Nákupů a offline konverzí Google Ads.
- `li`: Prohlížeč: tagy v GTM naběhnou jen podle souhlasu návštěvníka – základ pro většinu platforem.
- `li`: Server: Meta CAPI a rozšířené konverze doplní, co prohlížeč nezachytí, vždy jen se souhlasem.
- `li`: Backend: Ověřeno zákazníky s tajným klíčem a offline konverze z CRM, které do prohlížeče nepatří.

### [sekce] Co nastavíme v jednotlivých systémech
- `p`: [ platformy ]
- `h2`: Co nastavíme v jednotlivých systémech
- `p`: Každý systém má vlastní pravidla pro deduplikaci a souhlas.
- `button`: Meta Pixel a CAPI
- `button`: Google Ads
- `button`: Sklik a SEM
- `button`: Seznam Nákupy
- `button`: Heureka
- `button`: TikTok, LinkedIn, Microsoft
- `p`: Pixel doplníme o Conversions API ze serveru a oba posílají stejný název události i event_id, takže Meta duplicitu do 48 hodin zahodí. Kvalitu párování ukazuje Event Match Quality – zvedají ji hashovaný e-mail a telefon a další parametry zákazníka, vždy jen se souhlasem.
- `li`: standardní události od ViewContent po Purchase nebo Lead s hodnotou
- `li`: Conversions API přes server-side GTM nebo z backendu
- `li`: test deduplikace v Test Events a podmínění marketingovým souhlasem
- `li` (skryté): konverzní akce přes Google tag v GTM s transaction_id, hodnotou a měnou
- `li` (skryté): rozšířené konverze s hashovaným e-mailem nebo telefonem, jen se souhlasem ad_user_data
- `li` (skryté): pro B2B konverze z CRM přes Data Manager API, od 15. června 2026 místo nahrávání přes Google Ads API
- `li` (skryté): jeden skript sul.js nahradí kódy Skliku i Seznam Nákupů, jejichž podpora skončí v průběhu roku 2027
- `li` (skryté): SEM je v betě a přepnutí účtu je nevratné, proto ho nasazujeme souběžně a testujeme v sandboxu
- `li` (skryté): souhlas přes IAB TCF nebo SEM('updateConsent'), server jen pro události mimo web
- `li` (skryté): standardní měření: kód na děkovací stránce a backendový kód s tajným klíčem z Centra prodejce
- `li` (skryté): měření jen v prohlížeči je citlivější na blokátory a neumožní hodnocení ani API
- `li` (skryté): postup volíme podle stavu účtu a platformy, protože Seznam s nástupem SEM měření sjednocuje
- `li` (skryté): měření konverzí dvěma skripty v šabloně nebo modulu platformy – GTM Heureka kvůli blokátorům nedoporučuje
- `li` (skryté): Ověřeno zákazníky voláme z backendu s tajným klíčem a ID produktů z XML feedu
- `li` (skryté): zákazník musí mít možnost dotazník odmítnout, ÚOOÚ ho považuje za obchodní sdělení
- `li` (skryté): TikTok: Pixel a Events API se stejným event_id, deduplikace do 48 hodin
- `li` (skryté): LinkedIn: Insight Tag a Conversions API se společným eventId, hlavně pro B2B
- `li` (skryté): Microsoft Ads: UET tag s Consent Mode, v EHP od 5. května 2025 povinné signály souhlasu

### [sekce] Stejné ID, jedna konverze – a proč se čísla přesto liší
- `p`: [ deduplikace a rozdíly ]
- `h2`: Stejné ID, jedna konverze – a proč se čísla přesto liší
- `p`: Každá objednávka má jedno ID z backendu a hodnotu podle jednoho pravidla, takže ji každý systém započítá jednou. Stejné číslo ale všechny systémy ukazovat nebudou, protože každý počítá jinak. Cíl je vysvětlitelný a stabilní rozdíl – jeho náhlá změna pak spustí kontrolu.
- `span`: objednávka 1234
- `li`: ID z backendu, prohlížeč ho nikdy negeneruje
- `li`: hodnota podle jednoho pravidla
- `span`: transaction_id · event_id
- `li`: stejný klíč pro prohlížeč i server
- `span`: jedna konverze v každém systému
- `li`: Google Ads, Meta, Sklik i Heureka
- `li`: znovunačtení stránky nic nepřidá
- `figcaption`: Objednávka 1234 dostane jedno ID, které prohlížeč i server posílají jako stejný klíč, a každý systém z ní započítá jednu konverzi.
- `h3`: Čtyři důvody, proč se čísla liší i při správném nastavení
- `li`: Atribuce: Meta i Google Ads si připíšou stejný nákup, na kterém se podílely.
- `li`: Datum: Google Ads připisuje konverzi ke dni prokliku, GA4 ke dni nákupu.
- `li`: Souhlas a modelování: Google Ads ukazuje i modelované konverze, Meta a Sklik vidí jen lidi se souhlasem.
- `li`: Storna a vratky: backend storno odečte, reklamní systém ne.

### [sekce] Jak nastavení probíhá
- `p`: [ postup ]
- `h2`: Jak nastavení probíhá
- `p`: Stejných pět kroků jako u všech našich služeb. Po spuštění následuje čtrnáct dní souběžného běhu a odsouhlasení s backendem, staré kódy vypneme až potom.
- `li`: 01 Audit Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací. od vás: přístupy pro čtení
- `h3`: Audit
- `p`: Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.
- `li`: 02 Měřicí plán Byznys cíle převedeme na události, parametry a pravidla pojmenování. od vás: hodinová schůzka a schválení plánu
- `h3`: Měřicí plán
- `p`: Byznys cíle převedeme na události, parametry a pravidla pojmenování.
- `li`: 03 Implementace Podle konverzní mapy nastavíme GTM, Conversions API, rozšířené konverze, SEM, Heureku a další systémy – všude se stejným ID a hodnotou. od vás: přístupy pro úpravy a tokeny API, vývojář nebo přístup do administrace e-shopu
- `h3`: Implementace
- `p`: Podle konverzní mapy nastavíme GTM, Conversions API, rozšířené konverze, SEM, Heureku a další systémy – všude se stejným ID a hodnotou.
- `li`: 04 Validace Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM. od vás: testovací objednávka a export z administrace
- `h3`: Validace
- `p`: Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.
- `li`: 05 Předání a podpora Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu. od vás: předávací schůzka
- `h3`: Předání a podpora
- `p`: Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

### [sekce] Jak poznáte, že měření konverzí funguje
- `p`: [ ověření ]
- `h2`: Jak poznáte, že měření konverzí funguje
- `p`: Každé nastavení ověřujeme testovacími objednávkami nebo poptávkami a pak dva týdny porovnáváme s backendem.
- `li`: testovací objednávka, kterou sledujeme od datové vrstvy po každý systém
- `li`: stejné ID a hodnota všude a jedna konverze i po znovunačtení stránky
- `li`: deduplikace v Metě a TikToku a správné chování po odmítnutí souhlasu
- `li`: odsouhlasení s backendem po čtrnácti dnech s vysvětlením rozdílů

### [sekce] Časté otázky
- `p`: [ FAQ ]
- `h2`: Časté otázky
- `p`: Nenašli jste odpověď? Napište nám.
- `a`: Napište nám
- `summary`: Technické detaily: deduplikace a parametry po systémech
- `caption`: Jak deduplikují jednotlivé systémy
- `th`: Systém
- `th`: Klíč a okno
- `th`: Co testujeme
- `th`: Meta
- `td`: shodný event_name a event_id, 48 hodin
- `td`: podíl deduplikovaných událostí v Events Manageru
- `th`: TikTok
- `td`: shodná událost a event_id, 48 hodin
- `td`: Test Events
- `th`: LinkedIn
- `td`: shodné eventId, okno LinkedIn neuvádí
- `td`: duplicity z Conversions API LinkedIn odečte
- `th`: Google Ads
- `td`: transaction_id u konverzní akce
- `td`: znovunačtení děkovací stránky dá jednu konverzi
- `th`: Seznam SEM
- `td`: deduplikace je podle Seznamu teprve v přípravě
- `td`: stejná událost jde jen jednou cestou
- `th`: Heureka
- `td`: ID objednávky v set_order_id
- `td`: opakované zobrazení děkovací stránky
- `p`: ID objednávky generuje vždy backend, nikdy prohlížeč. Hodnotu posíláme podle jednoho pravidla, třeba bez DPH a bez dopravy pro reklamní systémy, Heurece podle nastavení ve statistikách. ID produktů se shodují s produktovými feedy a měna odpovídá trhu.
- `p`: E-mail a telefon posíláme jen se souhlasem, po normalizaci a jako hash SHA-256: do Mety spolu s external_id, do Google Ads jako rozšířené konverze. Kvalitu shody v Metě dál zvedají aktuální fbp a fbc, IP adresa a user agent a také odesílání událostí hned, ne dávkově po hodinách.
- `summary`: Potřebuju Meta Pixel, když mám Conversions API?
- `div`: Meta doporučuje oba zdroje souběžně: pixel zachytí události v prohlížeči a Conversions API je doplní ze serveru i tam, kde prohlížeč selže. Aby Meta nákup nepočítala dvakrát, posílají oba stejný název události a stejné event_id. Samotné Conversions API dává smysl třeba pro offline konverze, pro běžný e-shop doporučujeme kombinaci.
- `code`: event_id
- `summary`: Co je Seznam Event Measurement a musím přejít?
- `div`: Seznam Event Measurement, zkráceně SEM, je nové měření Seznamu: jeden skript sul.js nahrazuje kódy Skliku i měření pro Seznam Nákupy. Přechod budou podle Seznamu potřebovat všechny účty a podporu původních kódů Seznam ukončí v průběhu roku 2027. SEM je zatím v betě a přepnutí účtu je nevratné, proto ho nasazujeme souběžně a přepínáme až po ověření. Stav k říjnu 2026.
- `code`: sul.js
- `summary`: Jde měřit konverze bez souhlasu?
- `div`: Ne tak, že bychom souhlas ignorovali – bez něj web nesmí ukládat ani číst netechnické údaje v zařízení návštěvníka. Google v advanced režimu Consent Mode dostává pingy bez cookies a část konverzí modeluje, ostatní systémy návštěvníka bez souhlasu nevidí. Naše práce je, aby u lidí se souhlasem konverze dorazily spolehlivě – víc u služby Cookie lišta a Consent Mode v2.
- `a`: Cookie lišta a Consent Mode v2
- `summary`: Co budete potřebovat od našich vývojářů?
- `div`: Záleží na stavu datové vrstvy a platformě. Pokud datová vrstva chybí nebo je neúplná, připravíme vývojářům zadání s událostmi nákupu a leadu, nebo upravíme nastavení e-shopové platformy. Pro backendová napojení – Ověřeno zákazníky, Seznam Nákupy a offline konverze – dostanou vývojáři zadání od nás.
- `summary`: Komu patří účty a jaké přístupy potřebujete?
- `div`: Všechny účty – Google Ads, Meta Business, Sklik, Heureka i GTM – zůstávají vaše. Potřebujeme role s oprávněním k úpravám konverzí a značek, nikdy hesla, a nový token nebo datový zdroj vznikne vždy ve vašem účtu. Seznam přístupů dostanete při předání, abyste je mohli kdykoli odebrat.
- `summary`: Z čeho se skládá cena a jak dlouho to trvá?
- `div`: Cena se odvíjí od počtu systémů, stavu datové vrstvy, platformy e-shopu, zapojení serveru nebo CRM a počtu domén a zemí. Délku nastavení ovlivňují stejné faktory a vždy k ní připočtěte čtrnáct dní souběžného běhu. Provoz serveru, pokud ho využijete, platíte přímo poskytovateli.

### [sekce] 
- `p`: [ pokračujte ]
- `a`: Server-side tracking měření na vaší doméně
- `a`: Cookie lišta a Consent Mode v2 souhlas legálně a bez zbytečné ztráty dat
- `a`: Datová vrstva zadání pro vývojáře, které funguje

### [sekce] Ať reklamní systémy vidí stejné konverze jako vy
- `p`: [ Kontakt ]
- `h2`: Ať reklamní systémy vidí stejné konverze jako vy
- `p`: Na úvodní konzultaci zdarma projdeme, jak objednávky nebo poptávky putují do reklamních systémů, a řekneme, kde je systémy počítají dvakrát a kde je nevidí vůbec.
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
- `div@aria-label`: Jak deduplikují jednotlivé systémy
- `td@data-label`: Klíč a okno
- `td@data-label`: Co testujeme
- `td@data-label`: Klíč a okno
- `td@data-label`: Co testujeme
- `td@data-label`: Klíč a okno
- `td@data-label`: Co testujeme
- `td@data-label`: Klíč a okno
- `td@data-label`: Co testujeme
- `td@data-label`: Klíč a okno
- `td@data-label`: Co testujeme
- `td@data-label`: Klíč a okno
- `td@data-label`: Co testujeme

### [sekce] Ať reklamní systémy vidí stejné konverze jako vy
- `ol@aria-label`: Co se stane po odeslání