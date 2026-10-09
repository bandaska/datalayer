# URL: https://datalayer.vitnovotny.cz/sluzby/implementace-ga4

1. [Úvod](/)
2. [Služby](/sluzby)
3. Implementace GA4

GA4 – sběr dat

# Implementace GA4, která sedí s vašimi tržbami

Implementace GA4 neznamená jen vložit měřicí kód. Nastavíme Google Analytics 4 od nuly, nebo opravíme to, které už máte: měřicí plán, datovou vrstvu, e-commerce, poptávky, Consent Mode v2 a propojení s Google Ads, Search Console a BigQuery. Výsledek ověříme testovacími scénáři a porovnáním s administrací e-shopu nebo s CRM.

[Konzultovat nastavení GA4](#kontakt)[Co přesně nastavíme](#vystupy)

Úvodní konzultace zdarma a nezávazně

* Čísla porovnáme s administrací nebo CRM
* Měřicí plán a dokumentace k předání
* Účty i data zůstávají vaše

symptomy

## Poznáváte se?

Když někdo GA4 jen „vloží“ na web, čísla obvykle během prvních měsíců přestanou odpovídat skutečnosti. Pokud nevíte, co z toho platí u vás, začněte [auditem měření](/sluzby/audit-mereni).

≠ tržby

### GA4 ukazuje jiné tržby než e-shop

Čísla se liší, nikdo neví, které platí, a vedení pak nevěří ani reportům z reklam.

purchase ×2

### GA4 započítá nákup dvakrát

Po obnovení děkovací stránky nebo návratu z platební brány vznikne druhá událost `purchase`.

(not set)

### Návštěvy z reklam padají do (not set)

GA4 ztratí zdroj návštěvy na platební bráně nebo mezi doménami a kampaně pak vypadají hůř, než jsou.

generate\_lead

### Poptávky jen jako „děkovací stránka“

Nevíte, který formulář a která kampaň přinesly zakázku, protože data končí v GA4 a do CRM se nedostanou.

výstupy

## Co uděláme a co dostanete

Kromě „hotového GA4“ dostanete i dokumenty, podle kterých může měření převzít kdokoli jiný.

measurement-plan.xlsx

### Měřicí plán

Jaké otázky mají data zodpovědět, jaké události k tomu potřebujeme a kde je v GA4 najdete.

datalayer-spec.md

### Specifikace datové vrstvy

Zadání pro vývojáře s ukázkami kódu. Víc o službě [Datová vrstva](/sluzby/datova-vrstva).

ga4-config.pdf

### GA4 a Google Tag Manager (GTM) podle plánu

E-commerce, poptávky, tři až osm klíčových událostí, filtry, Consent Mode v2 a propojení. Kontejner GTM má verze s popisem změn.

qa-protocol.pdf

### Testovací protokol

Nákup kartou, převodem i s kupónem, návrat z platební brány a obnovení děkovací stránky.

reconciliation.xlsx

### Porovnání s administrací nebo CRM

GA4 porovnáme s objednávkami či poptávkami za stejné období a vysvětlíme rozdíly.

volitelně

### Školení, BigQuery nebo dashboard

Firemní školení na vašich datech, export do BigQuery nebo dashboard v Data Studiu (dříve Looker Studio).

diagram

## Jak data tečou z webu do GA4 a dál

Web zapisuje události do datové vrstvy, GTM je podle souhlasu návštěvníka pošle do GA4 a GA4 je sdílí s Google Ads, Search Console a BigQuery.

Web/e-shop

* dataLayer
* view\_item, add\_to\_cart
* purchase, generate\_lead

GTM

* Google tag
* události GA4

Cookie lišta předává souhlas přes Consent Mode v2.

Property GA4

* klíčové události
* filtry
* retence

Propojení a reporting

* Google Ads – klíčové události a publika
* Search Console – organické dotazy
* BigQuery – surová data bez limitů rozhraní
* Data Studio a Power BI

Schéma toku dat: z webu přes GTM se souhlasem z cookie lišty do GA4 a odtud do propojených nástrojů a reportů. Na konci porovnáme čísla v GA4 s administrací e-shopu nebo CRM.

* **Souhlas.** Consent Mode v2 se všemi čtyřmi signály napojíme na cookie lištu; jestli zvolit režim basic, nebo advanced, probereme společně.
* **Čistá data.** Filtry vyřadí interní návštěvnost a cizí domény a platební brána nepřebije zdroj návštěvy.
* **Konverze jednou.** Ohlídáme, aby Google Ads nepočítal stejnou konverzi dvakrát, z importu GA4 i z vlastního tagu.

rozhodnutí

## Kdy opravit stávající GA4 a kdy založit novou property

Většinou opravujeme property, kterou už máte, protože v ní zůstane historie, a opravy označíme v GA4 anotací s datem. Při přechodu na novou necháme obě property jeden až tři měsíce běžet souběžně, pak přepneme reporty.

### Opravíme stávající, když…

* property je na firemním účtu a máte administrátorský přístup
* historická data mají hodnotu, třeba pro meziroční srovnání
* stačí přidat události, filtry a propojení
* velké firmě stačí upravit oprávnění a dokumentaci

### Založíme novou, když…

* property patří agentuře nebo bývalému dodavateli a převod není možný
* historie je tak chybná, že by spíš škodila
* jedna property míchá weby, které spolu nesouvisejí, nebo testovací a produkční data
* velká firma potřebuje novou architekturu, třeba roll-up v GA4 360

postup

## Jak implementace probíhá

Stejných pět kroků jako u všech našich služeb – při startu od nuly, opravě stávajícího GA4 i změně platformy.

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

   Nastavíme GTM a GA4: e-commerce a klíčové události, filtry, Consent Mode v2 a propojení s Google Ads, Search Console a BigQuery.

   Od vás: datová vrstva od vývojářů a testovací prostředí
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s administrací nebo CRM.

   Od vás: testovací objednávka nebo poptávka a export z administrace nebo CRM
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a budeme hlídat, aby měření po dalším releasu nepřestalo fungovat.

   Od vás: předávací schůzka

kontrola

## Jak poznáte, že GA4 funguje

Po spuštění sedm až čtrnáct dní sbíráme data a porovnáme je s administrací e-shopu nebo s CRM. Měření je v pořádku, když platí toto:

* rozdíl tržeb proti administraci umíme vysvětlit, třeba odmítnutým souhlasem nebo storny
* žádný nákup dvakrát, ani po obnovení děkovací stránky
* návštěvy z kampaní mají vyplněný zdroj místo (not set)
* Google Ads a GA4 počítají každou konverzi jednou a se stejnou hodnotou

FAQ

## Časté otázky

Technické detailyNastavení property a limity GA4

### Co nastavíme v property

* Retenci dat na maximum, u standardní GA4 čtrnáct měsíců. Filtr interní návštěvnosti necháme nejdřív v režimu *Testování*, protože aktivní filtr mění data trvale.
* Filtr hostitelů, aby GA4 bralo data jen z vlastních domén, a seznam nežádoucích odkazujících zdrojů pro platební brány GoPay, Comgate, ThePay a banky.
* Odstraňování e-mailů a parametrů URL z dat, aby do GA4 netekly osobní údaje. Seskupení kanálů pro Heureku, Zboží.cz, Sklik a e-mailing včetně kontroly kanálu AI Assistant.
* Jednoznačné `transaction_id`, parametr `customer_type` pro první a opakovaný nákup a vratky ze serveru jako `refund`. Hodnotu posíláme podle dohody s DPH, nebo bez ní – vždy stejně v GA4, Google Ads i Metě.
* Měření napříč doménami, User-ID jen s interním ID, nikdy s e-mailem, a volbu identity pro přehledy.

### Limity GA4, se kterými počítáme

* Průzkumy neboli explorace: standardní GA4 drží data na úrovni událostí dva, nebo čtrnáct měsíců, velké property jen dva, GA4 360 až padesát měsíců. Delší historii řešíme exportem do BigQuery. Na agregované přehledy se retence nevztahuje.
* Denní export do BigQuery: standardní GA4 zvládne milion událostí denně, GA4 360 miliardy. Velké e-shopy proto použijí streamovaný export, nebo GA4 360.
* Na jednu událost pětadvacet parametrů, na property třicet klíčových událostí a sto publik, u GA4 360 sto parametrů, padesát klíčových událostí a 400 publik. Události proto navrhujeme úsporně.

Zdroj limitů: nápověda Google Analytics, stav v říjnu 2026.

Kolik stojí implementace GA4?

Cenu určuje rozsah, ne balíček: hlavně jestli web už má datovou vrstvu, kolik typů konverzí a domén měříme a jestli chcete i BigQuery, dashboardy nebo školení. Po úvodní konzultaci a krátké analýze dostanete nabídku s pevným rozsahem a seznamem výstupů. GA4 i GTM jsou zdarma, platíte jen BigQuery nad rámec bezplatných limitů, nebo licenci GA4 360.

Jak dlouho implementace GA4 trvá?

Záleží hlavně na stavu webu. Nejvíc času obvykle nezabere nastavení GA4 a GTM, ale úprava datové vrstvy u vývojářů a sedm až čtrnáct dní sběru dat, kdy porovnáváme GA4 s administrací. Když web už má datovou vrstvu podle schématu GA4, jde to rychleji.

Komu budou patřit účty a data?

Vám. Property GA4, kontejner GTM i projekt BigQuery zakládáme na firemních účtech a my v nich máme jen oprávnění, která nám přidělíte. Pokud dnes účty patří agentuře nebo bývalému dodavateli, pomůžeme s převodem administrátorských práv, nebo s bezpečným přechodem na nové účty.

Je GA4 v souladu s GDPR? Potřebujeme cookie lištu?

GA4 ukládá do prohlížeče analytické cookies a k tomu podle § 89 odst. 3 zákona o elektronických komunikacích potřebujete předchozí souhlas. Měření proto napojujeme na cookie lištu a Consent Mode v2 a do GA4 neposíláme osobní údaje, ani v URL. Nejsme advokátní kancelář: zásady a texty lišty by měl posoudit váš právník. Technickou část řeší služba [Cookie lišta a Consent Mode v2](/sluzby/cookie-lista-consent-mode).

Budeme potřebovat vývojáře?

Obvykle ano, ale jen kvůli datové vrstvě: vývojáři ji nasadí podle naší specifikace a připraví testovací prostředí; GA4 a GTM nastavíme my. U Shoptetu, Shopify nebo WooCommerce zkontrolujeme vestavěnou integraci a rozhodneme, jestli ji použít, rozšířit, nebo nahradit vlastní datovou vrstvou.

Proč GA4 ukazuje jiná čísla než e-shop nebo Google Ads?

Nějaký rozdíl je normální: GA4 nevidí návštěvníky, kteří odmítli souhlas nebo měření blokují, ani objednávky po telefonu a storna, a Google Ads připisuje konverze k datu kliknutí. Problém je rozdíl, který nikdo neumí vysvětlit nebo který se mění ze dne na den. Pak jde obvykle o zdvojené nákupy, chybějící souhlas, ztracené zdroje návštěv nebo jinou definici hodnoty.

pokračujte

[**Datová vrstva**zadání pro vývojáře, které funguje](/sluzby/datova-vrstva)[**Google Tag Manager**pořádek v tazích a verzích](/sluzby/google-tag-manager)[**BigQuery a datový sklad**surová data bez limitů GA4](/sluzby/bigquery)

Kontakt

## Nastavíme GA4 tak, aby čísla seděla s tržbami

Na úvodní konzultaci projdeme GA4 a řekneme, co opravit jako první.

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