# URL: https://datalayer.vitnovotny.cz/sluzby/implementace-ga4

1. [Úvod](/)
2. [Služby](/sluzby)
3. Implementace GA4

[ ga4 · sběr dat ]

# Implementace GA4, která sedí s vašimi tržbami

Implementace GA4 je víc než vložit měřicí kód. Nastavíme Google Analytics 4 od nuly, nebo opravíme to, které už máte: měřicí plán, datovou vrstvu, e-commerce, leady, Consent Mode v2 a propojení s Google Ads, Search Console a BigQuery. Výsledek ověříme testovacími scénáři a porovnáním s administrací e-shopu nebo s CRM.

[[ Konzultovat nastavení GA4 ]](#kontakt)[[ Co přesně nastavíme ]](#vystupy)

Úvodní třicetiminutová konzultace zdarma · odpovíme do jednoho pracovního dne

* Čísla ověříme proti administraci nebo CRM
* Měřicí plán a dokumentace k předání
* Účty i data zůstávají vaše

[ symptomy ]

## Poznáváte se?

Když někdo GA4 jen „vloží“ do webu, čísla obvykle během prvních měsíců přestanou dávat smysl. Nevíte, co z toho platí u vás? Začněte [auditem měření](/sluzby/audit-mereni).

≠ revenue

### GA4 ukazuje jiné tržby než e-shop

Čísla se liší, nikdo neví, které platí, a vedení pak nevěří ani reportům z reklam.

purchase ×2

### GA4 započítá nákup dvakrát

Po obnovení děkovací stránky nebo návratu z platební brány vznikne druhý `purchase`.

(not set)

### Návštěvy z reklam padají do (not set)

GA4 ztratí zdroj návštěvy na platební bráně nebo mezi doménami a kampaně pak vypadají hůř, než jsou.

generate\_lead

### Poptávky jen jako „děkovací stránka“

Nevíte, který formulář a která kampaň přinesly zakázku, protože data končí v GA4, ne v CRM.

[ výstupy ]

## Co uděláme a co dostanete

Ne jen „hotové GA4“, ale i dokumenty, podle kterých může měření převzít kdokoli jiný.

measurement-plan.xlsx

### Měřicí plán

Jaké otázky mají data zodpovědět, jaké události k tomu potřebujeme a kde je v GA4 najdete.

datalayer-spec.md

### Specifikace datové vrstvy

Zadání pro vývojáře s ukázkami kódu. Víc o službě [Datová vrstva](/sluzby/datova-vrstva).

gtm · ga4-config.pdf

### GA4 a GTM podle plánu

E-commerce, leady, tři až osm klíčových událostí, filtry, Consent Mode v2 a propojení. Kontejner má verze s popisem změn.

qa-protocol.pdf

### Testovací protokol

Nákup kartou, převodem i s kupónem, návrat z platební brány a obnovení děkovací stránky.

reconciliation.xlsx

### Porovnání s administrací nebo CRM

GA4 porovnáme s objednávkami či poptávkami za stejné období a vysvětlíme rozdíly.

+ optional

### Volitelně: školení GA4

Firemní školení na vašich datech, export do BigQuery nebo dashboard v Data Studiu (dříve Looker Studio).

[ diagram ]

## Jak data tečou z webu do GA4 a dál

Web zapisuje události do datové vrstvy, Google Tag Manager je podle souhlasu návštěvníka pošle do GA4 a GA4 je sdílí s Google Ads, Search Console a BigQuery.

Web / e-shop

* dataLayer
* view\_item · add\_to\_cart
* purchase · generate\_lead

Google Tag Manager

* Google tag
* události GA4

Cookie lišta předává souhlas přes Consent Mode v2.

GA4 property

* klíčové události
* filtry
* retence

Propojení a reporting

* Google Ads – klíčové události a publika
* Search Console – organické dotazy
* BigQuery – surová data bez limitů rozhraní
* Data Studio a Power BI

Schéma toku dat: web → Google Tag Manager se souhlasem z cookie lišty → GA4 → propojení a reporting. Na konci porovnáme čísla v GA4 s administrací e-shopu nebo CRM.

* **Souhlas.** Consent Mode v2 se všemi čtyřmi signály napojíme na cookie lištu, režim basic, nebo advanced probereme společně.
* **Čistá data.** Filtry vyřadí interní návštěvnost a cizí domény a platební brána nepřebije zdroj návštěvy.
* **Konverze jednou.** Ohlídáme, aby Google Ads nepočítal stejnou konverzi dvakrát, z importu GA4 i z vlastního tagu.

[ rozhodnutí ]

## Opravit stávající GA4, nebo založit novou property?

Většinou opravujeme property, kterou už máte, protože v ní zůstane historie, a opravy označíme v GA4 anotací s datem. Při přechodu na novou necháme obě property jeden až tři měsíce běžet souběžně, pak přepneme reporty.

### Opravíme stávající, když…

* property je na firemním účtu a máte administrátorský přístup
* historická data mají hodnotu, třeba pro meziroční srovnání
* stačí přidat události, filtry a propojení
* velké firmě stačí upravit oprávnění a dokumentaci

### Založíme novou, když…

* property patří agentuře nebo bývalému dodavateli a převod nejde
* historie je tak chybná, že by spíš škodila
* jedna property míchá weby, které spolu nesouvisejí, nebo testovací a produkční data
* velká firma potřebuje novou architekturu, třeba roll-up v GA4 360

[ postup ]

## Jak implementace probíhá

Stejných pět kroků jako u všech našich služeb, ať začínáte od nuly, opravujete stávající GA4, nebo měníte platformu. Nejvíc času obvykle zabere úprava datové vrstvy u vývojářů, ne nastavení GA4.

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

   Nastavíme GTM a GA4: e-commerce a klíčové události, filtry, Consent Mode v2 a propojení s Google Ads, Search Console a BigQuery.

   od vás: datová vrstva od vývojářů a testovací prostředí
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

[ kontrola ]

## Jak poznáte, že GA4 funguje

Po spuštění sedm až čtrnáct dní sbíráme data a porovnáme je s administrací e-shopu nebo s CRM. Měření je v pořádku, když platí tohle:

* rozdíl tržeb proti administraci umíme vysvětlit, třeba odmítnutým souhlasem nebo storny
* žádný nákup dvakrát, ani po obnovení děkovací stránky
* návštěvy z kampaní mají zdroj, ne (not set)
* Google Ads a GA4 počítají každou konverzi jednou a se stejnou hodnotou

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: nastavení property a limity GA4

### Co nastavíme v property

* Retenci dat na maximum, u standardní GA4 čtrnáct měsíců. Filtr interní návštěvnosti necháme nejdřív v režimu *Testování*, protože aktivní filtr mění data trvale.
* Filtr hostitelů, aby GA4 bralo data jen z vlastních domén, a nežádoucí referraly pro platební brány GoPay, Comgate, ThePay a banky.
* Redakci e-mailů a parametrů URL, aby do GA4 netekly osobní údaje, a seskupení kanálů pro Heureku, Zboží.cz, Sklik a e-mailing včetně kontroly kanálu AI Assistant.
* Jednoznačné `transaction_id`, parametr `customer_type` pro první a opakovaný nákup a vratky ze serveru jako `refund`. Hodnotu posíláme s DPH, nebo bez podle dohody, stejně v GA4, Google Ads i Metě.
* Měření napříč doménami, User-ID jen s interním ID, nikdy s e-mailem, a volbu identity pro přehledy.

### Limity GA4, se kterými počítáme

* Explorace: standardní GA4 drží data na úrovni událostí dva, nebo čtrnáct měsíců, velké property jen dva, GA4 360 až padesát měsíců. Delší historii řešíme exportem do BigQuery, agregované přehledy retence neomezuje.
* Denní export do BigQuery: standardní GA4 zvládne milion událostí denně, GA4 360 miliardy. Velké e-shopy řeší streaming, nebo GA4 360.
* Na jednu událost pětadvacet parametrů, na property třicet klíčových událostí a sto publik, u GA4 360 sto parametrů, padesát klíčových událostí a 400 publik. Události proto navrhujeme úsporně.

Zdroj limitů: nápověda Google Analytics, stav v říjnu 2026.

Kolik stojí implementace GA4?

Cenu určuje rozsah, ne balíček: hlavně jestli web už má datovou vrstvu, kolik typů konverzí a domén měříme a jestli chcete i BigQuery, dashboardy nebo školení. Po úvodní konzultaci a krátké analýze dostanete nabídku s pevným rozsahem a seznamem výstupů. GA4 i GTM jsou zdarma, platíte jen BigQuery nad rámec bezplatných limitů, nebo licenci GA4 360.

Jak dlouho implementace GA4 trvá?

Záleží hlavně na stavu webu. Nejvíc času obvykle nezabere nastavení GA4 a GTM, ale úprava datové vrstvy u vývojářů a sedm až čtrnáct dní sběru dat, kdy porovnáváme GA4 s administrací. Když web už má datovou vrstvu podle schématu GA4, jde to rychleji.

Komu budou patřit účty a data?

Vám. Property GA4, kontejner GTM i projekt BigQuery zakládáme na firemních účtech a my v nich máme jen oprávnění, která nám přidělíte. Pokud dnes účty patří agentuře nebo bývalému dodavateli, pomůžeme s převodem administrátorských práv, nebo s bezpečným přechodem na nové účty.

Je GA4 v souladu s GDPR? Potřebujeme cookie lištu?

GA4 ukládá do prohlížeče analytické cookies a k tomu podle § 89 odst. 3 zákona o elektronických komunikacích potřebujete předchozí souhlas. Měření proto napojujeme na cookie lištu a Consent Mode v2 a do GA4 neposíláme osobní údaje, ani v URL. Nejsme advokátní kancelář, zásady a texty lišty by měl posoudit váš právník – technickou část řeší služba [Cookie lišta a Consent Mode v2](/sluzby/cookie-lista-consent-mode).

Budeme potřebovat vývojáře?

Obvykle ano, ale jen kvůli datové vrstvě: vývojáři ji nasadí podle naší specifikace a připraví testovací prostředí, GA4 a GTM nastavíme my. U Shoptetu, Shopify nebo WooCommerce zkontrolujeme vestavěnou integraci a rozhodneme, jestli ji použít, rozšířit, nebo nahradit vlastní datovou vrstvou.

Proč GA4 ukazuje jiná čísla než e-shop nebo Google Ads?

Nějaký rozdíl je normální: GA4 nevidí návštěvníky, kteří odmítli souhlas nebo měření blokují, ani objednávky po telefonu a storna, a Google Ads připisuje konverze k datu kliknutí. Problém je rozdíl, který nikdo neumí vysvětlit nebo který se mění ze dne na den. Pak jde obvykle o zdvojené nákupy, chybějící souhlas, ztracené zdroje návštěv nebo jinou definici hodnoty.

[ pokračujte ]

[**Datová vrstva**zadání pro vývojáře, které funguje](/sluzby/datova-vrstva)[**Google Tag Manager**pořádek v tazích a verzích](/sluzby/google-tag-manager)[**BigQuery a datový sklad**surová data bez limitů GA4](/sluzby/bigquery)

[ Kontakt ]

## Nastavíme GA4 tak, aby čísla seděla s tržbami

Na třicetiminutové konzultaci zdarma projdeme GA4 a řekneme, co opravit jako první.

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