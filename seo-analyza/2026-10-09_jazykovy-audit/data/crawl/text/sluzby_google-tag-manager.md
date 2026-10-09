# URL: https://datalayer.vitnovotny.cz/sluzby/google-tag-manager

1. [Úvod](/)
2. [Služby](/sluzby)
3. Google Tag Manager

[ gtm · sběr dat ]

# Google Tag Manager: nastavení, audit a správa

Google Tag Manager je bezplatný nástroj Googlu, přes který vložíte na web měřicí a marketingové kódy, tedy tagy, bez zásahu do zdrojového kódu. Nový kontejner nastavíme, stávající zkontrolujeme a uklidíme, nebo ho budeme dlouhodobě spravovat – vždy s pravidly pro názvy, verze, oprávnění a Consent Mode v2, aby se v něm vyznal i další člověk.

[[ Konzultovat GTM ]](#kontakt)[[ Chci audit kontejneru ]](#audit)

Úvodní třicetiminutová konzultace zdarma · odpovíme do jednoho pracovního dne

* Každá změna jako verze s popisem
* Kontejner zůstává na vašem účtu
* Consent Mode v2 v každém kontejneru

[ symptomy ]

## Poznáváte svůj Tag Manager?

tags: 120

### Desítky tagů, které nikdo nezná

Agentury se střídaly, tagy s názvy jako „New Tag (3)“ zůstaly a nikdo neví, které z nich jsou potřeba.

v87 ?

### Publikuje každý, bez popisu

Verze 87 nemá popis, a když spadly konverze, nikdo neví, co se změnilo.

duplicate

### Kódy na třech místech

Část kódů žije v šabloně webu, část v pluginu a část v GTM, takže reklamní systémy počítají konverze dvakrát.

consent

### Tagy běží před souhlasem

GTM spouští reklamní pixely dřív, než návštěvník klikne na cookie lištu.

[ služby ]

## Nastavení, audit, nebo správa?

Nastavení nového kontejneruAudit a úklidPrůběžná správa

**Kdy se hodí:** nový web, redesign, přechod z kódů natvrdo, nebo kontejner tak chaotický, že je levnější začít znovu.

* návrh kontejneru podle měřicího plánu: které tagy, spouštěče a proměnné a proč
* Google tag pro GA4 a Google Ads, šablona cookie lišty a Consent Mode v2
* tagy Google Ads, Mety, Skliku, Heureky, TikToku nebo LinkedInu podle potřeby
* složky, názvosloví, vývojové prostředí pro testy a dokumentace

**Kdy se hodí:** převzetí kontejneru od agentury, konverze, které nesedí, pomalý web, redesign nebo nasazení server-side. Audit samotného GTM je užší než [audit měření](/sluzby/audit-mereni), který prověří i GA4 a reklamní systémy.

* inventura tagů, spouštěčů a proměnných: co je duplicitní a co nikdy neběží
* názvosloví, Custom HTML a šablony třetích stran
* kontrola souhlasu u každého tagu a pořadí spouštění
* verze, oprávnění, kódy mimo GTM a dopad na rychlost webu

**Kdy se hodí:** marketing průběžně potřebuje nové tagy a GTM interně nikdo nespravuje, nebo velká firma chce externího „strážce“ pravidel. Navazuje služba [Správa webu a měření](/sluzby/sprava-webu-a-mereni).

* nové tagy na požadavek: ticket, workspace, test, verze s popisem a publikace
* měsíční kontrola, že klíčové tagy běží
* revize oprávnění
* aktualizace šablon a reakce na změny platforem, třeba Seznamu nebo Google tagu

[ výstupy ]

## Co uděláme a co dostanete

Kontejner s dokumentací, ve které se nový člověk nebo agentura zorientuje za hodinu, ne za týden.

gtm-container

### Publikovaný kontejner

Každá verze má datum a popis změny. Po auditu publikujeme úklid po dohodě.

container-card

### Karta kontejneru

Seznam tagů s účelem, vlastníkem, kategorií souhlasu a datem poslední kontroly.

inventory · A/B/C

### Inventura a report nálezů

U auditu tabulka všech tagů s doporučením ponechat, upravit, nebo smazat a nálezy podle priority A, B a C.

```
GA4 – Event – purchase
CE – purchase
DLV – ecommerce.transaction_id
```

naming

### Pravidla kontejneru

Ze šesti pravidel, která zavádíme do každého kontejneru:

* jednotné názvy a složky podle platformy
* osobní účty a revize oprávnění každé čtvrtletí
* šablony místo Custom HTML

perf

### Rychlejší web

Rychlost hlídáme při nastavení i úklidu:

* nepoužívané tagy pryč, velikost kontejneru pod kontrolou
* těžké skripty jen tam, kde je potřebujete
* jeden Google tag pro GA4 i Google Ads, bez duplicit

qa · changelog

### Testovací protokol a předání

Kontrola v Tag Assistantu a náhledu, hodinové zaškolení týmu. Při správě changelog a měsíční přehled změn.

[ diagram ]

## Co se děje uvnitř kontejneru

Web zapíše událost do datové vrstvy a spouštěč rozhodne, kterých tagů se týká. Kontrola souhlasu pak rozhodne, jestli je GTM smí spustit.

dataLayer

* event: purchase

Web zapíše událost do datové vrstvy.

Spouštěč

* CE – purchase

GTM spustí tag jen při události purchase, ne při každém načtení stránky.

Kontrola souhlasu

* Consent Initialization
* výchozí stav denied
* update z cookie lišty

Tagy

* GA4 – Event – purchase: analytics\_storage
* Google Ads – Conversion: ad\_storage + ad\_user\_data
* Meta – Event – Purchase: ad\_storage
* server-side GTM, volitelně

Bez souhlasu tag čeká. Jen tagy Google v advanced režimu pošlou cookieless ping.

Governance

* verze s popisem
* workspaces
* oprávnění

Schéma GTM: událost z datové vrstvy → spouštěč → kontrola souhlasu z cookie lišty → tagy GA4, Google Ads a Meta, volitelně server-side GTM. Celé nastavení drží verze s popisem, workspaces a oprávnění.

* **Jedna událost pro všechny tagy.** Web zapíše nákup jednou a GTM ho předá GA4, Google Ads i Metě se stejnou hodnotou.
* **Verze s popisem.** Při problému víte, co se změnilo, a vrátíte se o verzi zpět.
* **Základ pro GA4.** Přes kontejner nasazujeme i [implementaci GA4](/sluzby/implementace-ga4) a konverze reklamních systémů.

[ rozhodnutí ]

## Kde mají měřicí kódy žít?

Pro většinu webů je Google Tag Manager výchozí volba. Kódy natvrdo v šabloně nechte jen u kritických skriptů webu.

| Kritérium | Kódy natvrdo v šabloně | Google Tag Manager |
| --- | --- | --- |
| Změna tagu | vývojář a nasazení webu | marketing nebo analytik, bez nasazení |
| Kontrola souhlasu | ručně v kódu, často chybí | centrálně přes Consent Mode |
| Historie změn | Git webu, pokud vůbec | verze kontejneru s popisem |
| Náklady na provoz | žádné | žádné, kromě placeného GTM 360 |

Třetí možnost je GTM se server-side GTM: část tagů poběží na serveru a v prohlížeči zůstane méně skriptů, server ale potřebuje hosting a správu. Vyplatí se hlavně e-shopům a firmám s větším rozpočtem na reklamu, víc na stránce [Server-side tracking](/sluzby/server-side-tracking).

[ postup ]

## Jak spolupráce probíhá

Stejných pět kroků jako u všech našich služeb. U auditu znamená třetí krok úklid v samostatném workspace, u správy pokračujeme měsíční kontrolou.

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

   Kontejner nastavíme nebo uklidíme v samostatném workspace, napojíme tagy na datovou vrstvu a souhlas a před publikací vše otestujeme.

   od vás: administrátorská práva k GTM, testovací prostředí a přístup do cookie lišty
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

### Přesun kódů z webu do GTM bez výpadku dat

* **Příprava:** ke každému kódu na webu najdeme náhradu v GTM a otestujeme ji ve workspace.
* **Přepnutí:** kódy z webu odstraníme ve stejném nasazení, ve kterém publikujeme kontejner.
* **Porovnání:** sedm až čtrnáct dní srovnáváme konverze s obdobím před přesunem.

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: názvosloví, oprávnění a souhlas v GTM

Názvosloví – ukázka konvence

| Prvek | Formát | Příklady |
| --- | --- | --- |
| Tag | `{Platforma} – {Typ} – {Událost}` | `GA4 – Event – purchase` · `Google Ads – Conversion – Nákup` · `Sklik – SEM – purchase` |
| Spouštěč | `{Typ} – {Podmínka}` | `CE – purchase` · `Click – Link – tel:` · `Consent Init – All Pages` |
| Proměnná | `{Typ} – {Název}` | `DLV – ecommerce.transaction_id` · `Const – GA4 ID` |
| Složky | podle platformy | `01 GA4` · `02 Google Ads` · `90 Consent` · `99 Utility` |
| Verze | `RRRR-MM-DD – změna` | `2026-10-08 – deduplikace purchase podle transaction_id` |

Zkratky: CE je vlastní událost neboli custom event, DLV proměnná datové vrstvy.

### Oprávnění

* Administrátor účtu je vlastník za firmu, aspoň dva lidé, ne agentura.
* Publikovat smí jeden až dva lidé. Agentura pracuje ve vlastním workspace s právem Upravit.
* Vývojář a dočasný dodavatel mají jen Číst a po skončení práce jim oprávnění odeberete.
* Bezplatný GTM má tři workspaces, schvalovací workflow a zóny nabízí jen Tag Manager 360.

### Tagy a souhlas: standardní nastavení

* Google tag a GA4: `analytics_storage`, pro reklamní funkce i `ad_storage` a `ad_user_data`.
* Google Ads: `ad_storage`, `ad_user_data` a `ad_personalization`.
* Meta Pixel: `ad_storage`. Hotjar a Microsoft Clarity: `analytics_storage`. Sklik podle dokumentace Seznamu.
* Pro návštěvníky z EHP začínají všechny čtyři signály na `denied`. Finální mapování určí CMP a právní posouzení.

Kolik stojí nastavení nebo audit GTM?

Cenu stanovujeme podle rozsahu: u nastavení rozhoduje počet platforem a událostí a to, jestli web má datovou vrstvu, u auditu velikost kontejneru a počet webů. Po úvodní konzultaci dostanete nabídku s pevným rozsahem. Samotný Google Tag Manager je zdarma, peníze stojí jen verze Tag Manager 360 a případný server pro server-side měření, který hradíte napřímo poskytovateli.

Jak dlouho trvá nastavení nebo audit?

Nastavení trvá podle toho, jestli web už má datovou vrstvu, nebo ji vývojáři musí teprve připravit. Délku auditu určuje hlavně velikost kontejneru a počet webů. Po přesunu kódů z webu ještě sedm až čtrnáct dní porovnáváme konverze s obdobím před migrací.

Komu patří kontejner a kdo k němu bude mít přístup?

Kontejner zakládáme na firemním účtu GTM a administrátor jste vy, ideálně dva lidé z firmy. My i agentury dostáváme jen oprávnění, která potřebujeme: pro audit čtení, pro správu úpravy nebo publikaci. Po skončení spolupráce nám oprávnění jednoduše odeberete.

Jak v GTM řešíte souhlas s cookies?

Šablona cookie lišty běží na spouštěči Consent Initialization, takže GTM zná výchozí stav souhlasu dřív než jakýkoli tag. Tagy Google mají vestavěné kontroly souhlasu, ostatním tagům, třeba Metě nebo Hotjaru, nastavujeme dodatečné kontroly a vše ověřujeme v Tag Assistantu. Lištu, texty a režim basic, nebo advanced řeší služba [Cookie lišta a Consent Mode v2](/sluzby/cookie-lista-consent-mode), kategorie souhlasu by měl posoudit váš právník.

Musí do toho zasahovat náš vývojář?

Většinou jen na začátku: vloží kód kontejneru a doplní datovou vrstvu, tedy údaje o produktech, objednávkách a formulářích, které GTM sám spolehlivě nezjistí. Specifikaci mu připravíme a jeho práci otestujeme. U platforem jako Shoptet nebo Shopify část datové vrstvy už existuje a vývojáře někdy nepotřebujete vůbec.

Zpomalí Google Tag Manager web?

Samotný kontejner web výrazně nezpomalí. Zpomalují ho tagy uvnitř, hlavně těžké skripty třetích stran, třeba chaty, heatmapy nebo desítky pixelů na všech stránkách. Proto mažeme nepoužívané tagy, omezujeme Custom HTML, hlídáme ukazatel velikosti kontejneru a část tagů můžeme přesunout i na server.

[ pokračujte ]

[**Datová vrstva**zadání pro vývojáře, které funguje](/sluzby/datova-vrstva)[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)[**Cookie lišta a Consent Mode v2**souhlas legálně a bez zbytečné ztráty dat](/sluzby/cookie-lista-consent-mode)

[ Kontakt ]

## Uklidíme váš Tag Manager

Na třicetiminutové konzultaci zdarma se podíváme na kontejner a řekneme, co řešit jako první.

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