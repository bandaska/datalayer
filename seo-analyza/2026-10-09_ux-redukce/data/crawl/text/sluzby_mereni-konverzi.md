# URL: https://datalayer.vitnovotny.cz/sluzby/mereni-konverzi

1. [Úvod](/)
2. [Služby](/sluzby)
3. Měření konverzí

konverze

# Měření konverzí pro Google Ads, Metu, Sklik i Heureku

Měření konverzí předává reklamním systémům informaci, že návštěvník z reklamy nakoupil nebo poslal poptávku. Stavíme ho z jedné datové vrstvy, aby každá objednávka dorazila do Google Ads, Mety, Skliku i Heureky jednou, se stejným ID a hodnotou – a jen podle souhlasu návštěvníka. Reklamní systémy se pak učí z čísel, která sedí s administrací.

[Zkontrolovat moje konverze](#kontakt)[Proč se čísla liší](#proc-se-lisi)

Úvodní konzultace zdarma, účty a data zůstávají vaše

* Google Ads, Meta, Sklik i Heureka z jedné datové vrstvy
* Stejné ID a hodnota ve všech systémech
* Porovnání s backendem po čtrnácti dnech

symptomy

## Poznáváte se?

Část rozdílů mezi systémy je přirozená, část je chyba v nastavení.

administrace ≠ GA4

### Každý systém hlásí jiné číslo

Administrace třeba ukáže 412 objednávek, GA4 371 a Meta 388 – a nevíte, který rozdíl je chyba.

×2

### Systémy počítají nákup dvakrát

Pixel i Conversions API bez společného ID nebo import z GA4 vedle konverzního tagu – a k tomu jednou cena s DPH, jednou bez.

z rc.js na sul.js

### Sklik měří jen část

Starý konverzní kód bez předání souhlasu, retargeting zvlášť – a Seznam mezitím spouští nové měření Seznam Event Measurement (SEM).

CRM

### Google Ads se učí z formulářů, ne ze zakázek

Reklama počítá každý odeslaný formulář, i když obchod v CRM ví, které poptávky jsou dobré.

výstupy

## Co uděláme a co dostanete

Než nastavíme první tag, dohodneme s vámi, co je konverze a jaká je její hodnota. Pravidla zapíšeme do konverzní mapy, aby platila i pro agentury a budoucí dodavatele.

pravidla

### Konverzní mapa

Které akce jsou konverze, primární a sekundární akce, hodnoty, ID a konverzní okna – pro každý systém.

dataLayer.md

### Zadání datové vrstvy

Pokud chybí nebo je neúplná: specifikace pro vývojáře s událostmi nákupu a poptávky. Navazuje na službu [Datová vrstva](/sluzby/datova-vrstva).

web a server

### Nastavený Google Tag Manager (GTM)

Tagy, spouštěče a podmínky souhlasu s popisem verzí, volitelně Conversions API a Events API přes server-side GTM.

zadání API

### Backendové napojení

Zadání pro vývojáře: Ověřeno zákazníky, Seznam Nákupy a offline konverze přes Data Manager API.

testovací objednávky

### Testovací protokol a porovnání s backendem

Výsledky testovacích objednávek pro každý systém. Po čtrnácti dnech srovnání backendu s reklamními systémy a vysvětlení rozdílů.

role

### Přístupy a předání

Přehled rolí ve všech účtech a krátké zaškolení pro marketing a agentury, jak konverze číst.

architektura

## Jedna objednávka, jeden zdroj, všechny systémy

Základ je datová vrstva, kterou e-shop nebo web naplní při nákupu či odeslání formuláře. Z ní konverze putují třemi cestami podle toho, co který reklamní systém podporuje. Kdy se serverová cesta vyplatí, rozebíráme u služby [Server-side tracking](/sluzby/server-side-tracking).

zdroje

* datová vrstva: nákup nebo poptávka s ID, hodnotou a měnou
* backend, ERP nebo CRM

cesty

* prohlížeč: webový GTM s Consent Mode v2
* server: server-side GTM, volitelně
* backend: API

reklamní systémy

* Google Ads a rozšířené konverze
* Meta a TikTok: pixel i API se stejným `event_id`
* Sklik, Seznam Nákupy a Heureka
* LinkedIn a Microsoft Ads

Jedna objednávka putuje třemi cestami: z datové vrstvy přes webový GTM do skriptů v prohlížeči, přes volitelný server-side GTM do Google Ads, Meta Conversions API a TikTok Events API a z backendu přes API do Heureky, Seznam Nákupů a offline konverzí Google Ads.

* **Prohlížeč:** tagy v GTM naběhnou jen podle souhlasu návštěvníka – základ pro většinu reklamních systémů.
* **Server:** Conversions API a rozšířené konverze doplní, co prohlížeč nezachytí, vždy jen se souhlasem.
* **Backend:** Ověřeno zákazníky s tajným klíčem a offline konverze z CRM, které do prohlížeče nepatří.

reklamní systémy

## Co nastavíme v jednotlivých systémech

Každý systém má vlastní pravidla pro deduplikaci a souhlas.

Meta Pixel a Conversions APIGoogle AdsSklik a SEMSeznam NákupyHeurekaTikTok, LinkedIn, Microsoft

Pixel doplníme o Conversions API ze serveru; oba pak posílají stejný název události i `event_id`, takže Meta duplicitu do osmačtyřiceti hodin zahodí. Kvalitu shody ukazuje Event Match Quality – zvyšují ji hashovaný e-mail a telefon a další parametry zákazníka, vždy jen se souhlasem.

* standardní události od `ViewContent` po `Purchase` nebo `Lead` s hodnotou
* Conversions API přes server-side GTM nebo z backendu
* test deduplikace v Test Events a podmínění marketingovým souhlasem

* konverzní akce přes Google tag v GTM s `transaction_id`, hodnotou a měnou
* rozšířené konverze s hashovaným e-mailem nebo telefonem, jen se souhlasem `ad_user_data`
* pro B2B: konverze z CRM přes Data Manager API, od 15. června 2026 místo nahrávání přes Google Ads API

* jeden skript `sul.js` nahradí kódy Skliku i Seznam Nákupů, jejichž podpora skončí v průběhu roku 2027
* SEM je v betě a přepnutí účtu je nevratné, proto ho nasazujeme souběžně a testujeme v sandboxu
* souhlas přes standard IAB TCF (Transparency and Consent Framework) nebo `SEM('updateConsent')`, server jen pro události mimo web

* standardní měření: kód na děkovací stránce a backendový kód s tajným klíčem z Centra prodejce
* měření jen v prohlížeči je citlivější na blokátory a neumožní sběr hodnocení ani napojení přes API
* postup volíme podle stavu účtu a e-shopové platformy, protože Seznam s nástupem SEM měření sjednocuje

* měření konverzí dvěma skripty v šabloně nebo modulu e-shopové platformy – Heureka nasazení přes GTM kvůli blokátorům nedoporučuje
* Ověřeno zákazníky voláme z backendu s tajným klíčem a ID produktů z XML feedu
* zákazník musí mít možnost dotazník odmítnout, ÚOOÚ ho považuje za obchodní sdělení

* **TikTok:** pixel a Events API se stejným `event_id`, deduplikace do osmačtyřiceti hodin
* **LinkedIn:** Insight Tag a Conversions API se společným `eventId`, hlavně pro B2B
* **Microsoft Ads:** UET tag s Consent Mode, v EHP od 5. května 2025 povinné signály souhlasu

deduplikace a rozdíly

## Stejné ID, jedna konverze – a proč se čísla přesto liší

Každá objednávka má jedno ID z backendu a hodnotu podle jednoho pravidla, takže ji každý systém započítá jednou. Stejné číslo ale všechny systémy ukazovat nebudou, protože každý počítá jinak. Cíl je vysvětlitelný a stabilní rozdíl – jeho náhlá změna pak spustí kontrolu.

objednávka 1234

* ID z backendu, prohlížeč ho nikdy negeneruje
* hodnota podle jednoho pravidla

transaction\_id a event\_id

* stejný klíč pro prohlížeč i server

jedna konverze v každém systému

* Google Ads, Meta, Sklik i Heureka
* znovunačtení stránky nic nepřidá

Objednávka 1234 dostane jedno ID, které prohlížeč i server posílají jako stejný klíč, a každý systém z ní započítá jednu konverzi.

### Čtyři důvody, proč se čísla liší i při správném nastavení

* **Atribuce:** Meta i Google Ads si připíšou stejný nákup, na kterém se podílely.
* **Datum:** Google Ads připisuje konverzi ke dni prokliku, GA4 ke dni nákupu.
* **Souhlas a modelování:** Google Ads ukazuje i modelované konverze, Meta a Sklik vidí jen lidi se souhlasem.
* **Storna a vratky:** backend storno odečte, reklamní systém ne.

postup

## Jak nastavení probíhá

Stejných pět kroků jako u všech našich služeb. Po spuštění následuje čtrnáct dní souběžného běhu a porovnání s backendem; staré kódy vypneme až potom.

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

   Podle konverzní mapy nastavíme GTM, Conversions API, rozšířené konverze, SEM, Heureku a další systémy – všude se stejným ID a hodnotou.

   Od vás: přístupy pro úpravy a tokeny API, vývojář nebo přístup do administrace e-shopu
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s administrací nebo CRM.

   Od vás: testovací objednávka nebo poptávka a export z administrace nebo CRM
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a budeme hlídat, aby měření po dalším releasu nepřestalo fungovat.

   Od vás: předávací schůzka

ověření

## Jak poznáte, že měření konverzí funguje

Každé nastavení ověřujeme testovacími objednávkami nebo poptávkami a pak dva týdny porovnáváme s backendem.

* Testovací objednávku sledujeme od datové vrstvy po každý systém.
* Všude dorazí stejné ID a hodnota a ani po znovunačtení stránky nepřibude druhá konverze.
* Deduplikace v Metě a TikToku funguje a po odmítnutí souhlasu se tagy chovají správně.
* Po čtrnácti dnech porovnáme čísla s backendem a rozdíly vysvětlíme.

FAQ

## Časté otázky

Technické detailyDeduplikace a parametry v jednotlivých systémech

Jak deduplikují jednotlivé systémy

| Systém | Klíč a okno deduplikace | Co testujeme |
| --- | --- | --- |
| Meta | shodný `event_name` a `event_id`, osmačtyřicet hodin | podíl deduplikovaných událostí v Events Manageru |
| TikTok | shodná událost a `event_id`, osmačtyřicet hodin | Test Events |
| LinkedIn | shodné `eventId`, okno LinkedIn neuvádí | odečtení duplicit z Conversions API v LinkedInu |
| Google Ads | `transaction_id` u konverzní akce | jedna konverze po znovunačtení děkovací stránky |
| Sklik a SEM | deduplikace je podle Seznamu teprve v přípravě | odeslání každé události jen jednou cestou |
| Heureka | ID objednávky v `set_order_id` | opakované zobrazení děkovací stránky |

ID objednávky generuje vždy backend, nikdy prohlížeč. Hodnotu posíláme podle jednoho pravidla, třeba bez DPH a bez dopravy pro reklamní systémy, Heurece podle nastavení ve statistikách. ID produktů se shodují s produktovými feedy a měna odpovídá trhu.

E-mail a telefon posíláme jen se souhlasem, po normalizaci a jako hash SHA-256: do Mety spolu s `external_id`, do Google Ads jako rozšířené konverze. Kvalitu shody v Metě dál zvyšují aktuální `fbp` a `fbc`, IP adresa a user agent a také odesílání událostí hned, ne dávkově po hodinách.

Potřebuji Meta Pixel, když mám Conversions API?

Meta doporučuje oba zdroje souběžně: pixel zachytí události v prohlížeči a Conversions API je doplní ze serveru i tam, kde prohlížeč selže. Aby Meta nákup nepočítala dvakrát, posílají oba stejný název události a stejné `event_id`. Samotné Conversions API se hodí třeba pro offline konverze, pro běžný e-shop doporučujeme kombinaci.

Co je Seznam Event Measurement a musím přejít?

Seznam Event Measurement, zkráceně SEM, je nové měření Seznamu: jeden skript `sul.js` nahrazuje kódy Skliku i měření pro Seznam Nákupy. Přechod budou podle Seznamu potřebovat všechny účty a podporu původních kódů Seznam ukončí v průběhu roku 2027. SEM je zatím v betě a přepnutí účtu je nevratné, proto ho nasazujeme souběžně a přepínáme až po ověření. Stav k říjnu 2026.

Jde měřit konverze bez souhlasu?

Souhlas obejít nelze – bez něj web nesmí ukládat ani číst netechnické údaje v zařízení návštěvníka. V režimu advanced dostává Google přes Consent Mode pingy bez cookies a část konverzí modeluje; ostatní systémy návštěvníka bez souhlasu nevidí. Staráme se o to, aby u lidí se souhlasem konverze dorazily spolehlivě – více u služby [Cookie lišta a Consent Mode v2](/sluzby/cookie-lista-consent-mode).

Co budete potřebovat od našich vývojářů?

Záleží na stavu datové vrstvy a platformě. Pokud datová vrstva chybí nebo je neúplná, připravíme vývojářům zadání s událostmi nákupu a poptávky, nebo upravíme nastavení e-shopové platformy. Pro backendová napojení – Ověřeno zákazníky, Seznam Nákupy a offline konverze – dostanou vývojáři zadání od nás.

Komu patří účty a jaké přístupy potřebujete?

Všechny účty – Google Ads, Meta Business, Sklik, Heureka i GTM – zůstávají vaše. Potřebujeme role s oprávněním k úpravám konverzí a tagů, nikdy hesla, a nový token nebo datový zdroj vznikne vždy ve vašem účtu. Seznam přístupů dostanete při předání, abyste je mohli kdykoli odebrat.

Z čeho se skládá cena a jak dlouho to trvá?

Cena se odvíjí od počtu systémů, stavu datové vrstvy, platformy e-shopu, zapojení serveru nebo CRM a počtu domén a zemí. Délku nastavení ovlivňují stejné faktory a vždy k ní připočtěte čtrnáct dní souběžného běhu. Provoz serveru, pokud ho využijete, platíte přímo poskytovateli.

pokračujte

[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)[**Cookie lišta a Consent Mode v2**souhlas legálně a bez zbytečné ztráty dat](/sluzby/cookie-lista-consent-mode)[**Datová vrstva**zadání pro vývojáře, které funguje](/sluzby/datova-vrstva)

Kontakt

## Nastavíme, aby reklamní systémy viděly stejné konverze jako vy

Na úvodní konzultaci projdeme, jak objednávky nebo poptávky putují do reklamních systémů, a řekneme, kde je systémy počítají dvakrát a kde je nevidí vůbec.

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