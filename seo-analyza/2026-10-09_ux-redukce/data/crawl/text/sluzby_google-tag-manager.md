# URL: https://datalayer.vitnovotny.cz/sluzby/google-tag-manager

1. [Úvod](/)
2. [Služby](/sluzby)
3. Google Tag Manager

GTM – sběr dat

# Nastavení, audit a správa Google Tag Manageru

Google Tag Manager (GTM) je bezplatný nástroj Googlu, přes který vložíte na web měřicí a marketingové kódy, tedy tagy, bez zásahu do zdrojového kódu. Nový kontejner nastavíme, stávající zkontrolujeme a uklidíme, nebo ho budeme dlouhodobě spravovat – vždy s pravidly pro názvy, verze, oprávnění a Consent Mode v2, aby se v něm vyznal i další člověk.

[Konzultovat GTM](#kontakt)[Chci audit kontejneru](#audit)

Úvodní konzultace zdarma a nezávazně

* Každá změna jako verze s popisem
* Kontejner zůstává na vašem účtu
* Consent Mode v2 v každém kontejneru

symptomy

## Poznáváte se?

tagy: 120

### Desítky tagů, které nikdo nezná

Agentury se střídaly, tagy s názvy jako „New Tag (3)“ zůstaly a nikdo neví, které z nich jsou potřeba.

v87 bez popisu

### Publikuje každý, bez popisu

Verze 87 nemá popis, a když spadly konverze, nikdo neví, co se změnilo.

konverze ×2

### Kódy na třech místech

Část kódů žije v šabloně webu, část v pluginu a část v GTM, takže reklamní systémy počítají konverze dvakrát.

souhlas

### Tagy běží před souhlasem

GTM spouští reklamní pixely dřív, než návštěvník klikne na cookie lištu.

služby

## Kdy se hodí nastavení, kdy audit a kdy správa

Nastavení nového kontejneruAudit a úklidPrůběžná správa

**Kdy se hodí:** nový web, redesign, přesun kódů ze šablony webu do GTM nebo kontejner tak chaotický, že je levnější začít znovu.

* návrh kontejneru podle měřicího plánu: které tagy, spouštěče a proměnné a proč
* Google tag pro GA4 a Google Ads, šablona cookie lišty a Consent Mode v2
* tagy Google Ads, Mety, Skliku, Heureky, TikToku nebo LinkedInu podle potřeby
* složky, názvosloví, vývojové prostředí pro testy a dokumentace

**Kdy se hodí:** převzetí kontejneru od agentury, konverze, které nesedí, pomalý web, redesign nebo nasazení server-side měření. Audit samotného GTM je užší než [audit měření](/sluzby/audit-mereni), který prověří i GA4 a reklamní systémy.

* inventura tagů, spouštěčů a proměnných: co je duplicitní a co nikdy neběží
* názvosloví, Custom HTML a šablony třetích stran
* kontrola souhlasu u každého tagu a pořadí spouštění
* verze, oprávnění, kódy mimo GTM a dopad na rychlost webu

**Kdy se hodí:** marketing průběžně potřebuje nové tagy a GTM interně nikdo nespravuje, nebo velká firma chce externího „strážce“ pravidel. Navazuje služba [Správa webu a měření](/sluzby/sprava-webu-a-mereni).

* nové tagy na požadavek: zadání, pracovní prostor, test, verze s popisem a publikace
* měsíční kontrola, že důležité tagy běží
* revize oprávnění
* aktualizace šablon a reakce na změny platforem, třeba Skliku nebo Google tagu

výstupy

## Co uděláme a co dostanete

Kontejner s dokumentací, ve které se rychle zorientuje nový člověk i další agentura.

GTM

### Publikovaný kontejner

Každá verze má datum a popis změny. Úklid po auditu publikujeme až po dohodě s vámi.

seznam tagů

### Karta kontejneru

Seznam tagů s účelem, vlastníkem, kategorií souhlasu a datem poslední kontroly.

priority A, B a C

### Inventura a report nálezů

U auditu tabulka všech tagů s doporučením ponechat, upravit, nebo smazat a nálezy podle priority A, B a C.

```
GA4 – Event – purchase
CE – purchase
DLV – ecommerce.transaction_id
```

názvosloví

### Pravidla kontejneru

Ze šesti pravidel, která zavádíme do každého kontejneru:

* jednotné názvy a složky podle platformy
* osobní účty a revize oprávnění každé čtvrtletí
* šablony místo Custom HTML

rychlost

### Rychlejší web

Rychlost hlídáme při nastavení i úklidu:

* nepoužívané tagy pryč, velikost kontejneru pod kontrolou
* těžké skripty jen tam, kde je potřebujete
* jeden Google tag pro GA4 i Google Ads, bez duplicit

Tag Assistant

### Testovací protokol a předání

Kontrola v Tag Assistantu a náhledu, zaškolení týmu. Při správě dostanete průběžný seznam změn a měsíční přehled.

diagram

## Co se děje uvnitř kontejneru

Web zapíše událost do datové vrstvy a spouštěč určí, kterých tagů se týká. Kontrola souhlasu pak rozhodne, jestli je GTM smí spustit.

dataLayer

* event: purchase

Web zapíše událost do datové vrstvy.

Spouštěč

* CE – purchase

GTM spustí tag jen při události purchase, ne při každém načtení stránky.

Kontrola souhlasu

* Consent Initialization
* výchozí stav denied
* update z cookie lišty

Tagy

* GA4 – Event – purchase: analytics\_storage
* Google Ads – Conversion: ad\_storage + ad\_user\_data
* Meta – Event – Purchase: ad\_storage
* server-side GTM, volitelně

Bez souhlasu tag čeká. Jen tagy Google v režimu advanced pošlou ping bez cookies.

Správa kontejneru

* verze s popisem
* pracovní prostory
* oprávnění

Schéma GTM: událost z datové vrstvy projde spouštěčem a kontrolou souhlasu z cookie lišty a spustí tagy GA4, Google Ads a Mety, volitelně i server-side GTM. Celé nastavení drží pohromadě verze s popisem, pracovní prostory a oprávnění.

* **Jedna událost pro všechny tagy.** Web zapíše nákup jednou a GTM ho předá GA4, Google Ads i Metě se stejnou hodnotou.
* **Verze s popisem.** Při problému víte, co se změnilo, a vrátíte se o verzi zpět.
* **Základ pro GA4.** Přes kontejner probíhá i [implementace GA4](/sluzby/implementace-ga4) a měření konverzí reklamních systémů.

rozhodnutí

## Kam patří měřicí kódy

Pro většinu webů je GTM první volba. Kódy přímo v šabloně nechte jen u skriptů nezbytných pro chod webu.

| Kritérium | Kódy v šabloně webu | GTM |
| --- | --- | --- |
| Změna tagu | vývojář a nasazení webu | marketing nebo analytik, bez nasazení |
| Kontrola souhlasu | ručně v kódu, často chybí | centrálně přes Consent Mode |
| Historie změn | Git webu, pokud vůbec | verze kontejneru s popisem |
| Náklady na provoz | žádné | žádné, kromě placeného GTM 360 |

Třetí možnost je rozšířit GTM o server-side kontejner: část tagů poběží na serveru a v prohlížeči zůstane méně skriptů, server ale potřebuje hosting a správu. Vyplatí se hlavně e-shopům a firmám s větším rozpočtem na reklamu. Víc najdete na stránce [Server-side tracking](/sluzby/server-side-tracking).

postup

## Jak spolupráce probíhá

Stejných pět kroků jako u všech našich služeb. U auditu znamená třetí krok úklid v samostatném pracovním prostoru, u správy pokračujeme měsíční kontrolou.

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

   Kontejner nastavíme nebo uklidíme v samostatném pracovním prostoru, napojíme tagy na datovou vrstvu a souhlas a před publikací vše otestujeme.

   Od vás: oprávnění administrátora v GTM, testovací prostředí a přístup do cookie lišty
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s administrací nebo CRM.

   Od vás: testovací objednávka nebo poptávka a export z administrace nebo CRM
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a budeme hlídat, aby měření po dalším releasu nepřestalo fungovat.

   Od vás: předávací schůzka

### Přesun kódů z webu do GTM bez výpadku dat

* **Příprava:** ke každému kódu na webu najdeme náhradu v GTM a otestujeme ji v pracovním prostoru.
* **Přepnutí:** kódy z webu odstraníme ve stejném nasazení, ve kterém publikujeme kontejner.
* **Porovnání:** sedm až čtrnáct dní porovnáváme konverze s obdobím před přesunem.

FAQ

## Časté otázky

Technické detailyNázvosloví, oprávnění a souhlas v GTM

Názvosloví – ukázka konvence

| Prvek | Formát | Příklady |
| --- | --- | --- |
| Tag | `{Platforma} – {Typ} – {Událost}` | `GA4 – Event – purchase`, `Google Ads – Conversion – purchase`, `Sklik – SEM – purchase` |
| Spouštěč | `{Typ} – {Podmínka}` | `CE – purchase`, `Click – Link – tel:`, `Consent Init – All Pages` |
| Proměnná | `{Typ} – {Název}` | `DLV – ecommerce.transaction_id`, `Const – GA4 ID` |
| Složky | podle platformy | `01 GA4`, `02 Google Ads`, `90 Consent`, `99 Utility` |
| Verze | `RRRR-MM-DD – změna` | `2026-10-08 – deduplikace purchase podle transaction_id` |

Zkratky: CE je vlastní událost neboli custom event, DLV proměnná datové vrstvy a SEM měřicí kód Skliku Seznam Event Measurement.

### Oprávnění

* Administrátor účtu je vlastník za firmu, aspoň dva lidé, ne agentura.
* Publikovat smí jeden až dva lidé. Agentura pracuje ve vlastním pracovním prostoru s oprávněním Upravit.
* Vývojář a dočasný dodavatel mají jen oprávnění Číst, které jim po skončení práce odeberete.
* Bezplatný GTM má tři pracovní prostory; schvalovací proces a zóny nabízí jen Tag Manager 360.

### Standardní nastavení tagů a souhlasu

* Google tag a GA4: `analytics_storage`, pro reklamní funkce i `ad_storage` a `ad_user_data`.
* Google Ads: `ad_storage`, `ad_user_data` a `ad_personalization`.
* Meta Pixel: `ad_storage`. Hotjar a Microsoft Clarity: `analytics_storage`. Sklik podle dokumentace Seznamu.
* Pro návštěvníky z Evropského hospodářského prostoru mají všechny čtyři signály výchozí stav `denied`. Konečné mapování určí nastavení cookie lišty a právní posouzení.

Kolik stojí nastavení nebo audit GTM?

Cenu stanovujeme podle rozsahu: u nastavení rozhoduje počet platforem a událostí a to, jestli web má datovou vrstvu, u auditu velikost kontejneru a počet webů. Po úvodní konzultaci dostanete nabídku s pevným rozsahem. Samotný GTM je zdarma. Zvlášť platíte jen verzi Tag Manager 360 a případný server pro server-side měření, který hradíte přímo poskytovateli.

Jak dlouho trvá nastavení nebo audit?

Délka nastavení závisí na tom, jestli web už má datovou vrstvu, nebo ji vývojáři musí teprve připravit. Délku auditu určuje hlavně velikost kontejneru a počet webů. Po přesunu kódů z webu ještě sedm až čtrnáct dní porovnáváme konverze s obdobím před přesunem.

Komu patří kontejner a kdo k němu bude mít přístup?

Kontejner zakládáme na firemním účtu GTM a administrátor jste vy, ideálně dva lidé z firmy. My i agentury dostáváme jen oprávnění, která potřebujeme: pro audit čtení, pro správu úpravy nebo publikaci. Po skončení spolupráce nám oprávnění jednoduše odeberete.

Jak v GTM řešíte souhlas s cookies?

Šablona cookie lišty běží na spouštěči Consent Initialization, takže GTM zná výchozí stav souhlasu dřív než jakýkoli tag. Tagy Google mají vestavěné kontroly souhlasu, ostatním tagům, třeba Metě nebo Hotjaru, nastavujeme dodatečné kontroly a vše ověřujeme v Tag Assistantu. Lištu, texty i volbu mezi režimem basic a advanced řeší služba [Cookie lišta a Consent Mode v2](/sluzby/cookie-lista-consent-mode). Kategorie souhlasu by měl posoudit váš právník.

Musí do toho zasahovat náš vývojář?

Většinou jen na začátku: vloží kód kontejneru a doplní datovou vrstvu, tedy údaje o produktech, objednávkách a formulářích, které GTM sám spolehlivě nezjistí. Specifikaci mu připravíme a jeho práci otestujeme. U platforem jako Shoptet nebo Shopify část datové vrstvy už existuje a vývojáře někdy nepotřebujete vůbec.

Zpomalí GTM web?

Samotný kontejner web výrazně nezpomalí. Zpomalují ho tagy uvnitř, hlavně těžké skripty třetích stran, třeba chaty, heatmapy nebo desítky pixelů na všech stránkách. Proto mažeme nepoužívané tagy, omezujeme Custom HTML, hlídáme ukazatel velikosti kontejneru a část tagů můžeme přesunout i na server.

pokračujte

[**Datová vrstva**zadání pro vývojáře, které funguje](/sluzby/datova-vrstva)[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)[**Cookie lišta a Consent Mode v2**souhlas legálně a bez zbytečné ztráty dat](/sluzby/cookie-lista-consent-mode)

Kontakt

## Uklidíme váš Tag Manager

Na úvodní konzultaci se podíváme na kontejner a řekneme, co řešit jako první.

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