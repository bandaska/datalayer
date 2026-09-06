# Co hlídáme

Seznam kontrol, které u vás běží. Ke každé je uvedeno, **jak často**, **jaký práh** spustí alert a **kdo na to
reaguje**. Prahy nastavíme podle vašich dat v prvním měsíci — čísla níže jsou výchozí.

Priorita alertu určuje, jak rychle reagujeme:

| Priorita | Co to znamená | Reakce (Hlídání / Správa / Datová správa) |
|---|---|---|
| **Havárie** | přestaly chodit peníze nebo leady | další pracovní den / do 8 h / do 4 h |
| **Včasné varování** | něco se odchýlilo, ale ještě to není výpadek | do 3 pracovních dnů / do 2 dnů / další pracovní den |
| **Pro informaci** | změna, kterou máte vědět, ale nespěchá | v měsíčním komentáři |

---

## 1. Chodí konverze?

| # | Kontrola | Frekvence | Práh alertu | Priorita | Tier |
|---|---|---|---|---|---|
| 1.1 | Klíčová událost (`purchase` / odeslání formuláře) | denně | 0 událostí za den, kdy jich obvykle bývá 5+ | Havárie | všechny |
| 1.2 | Objem klíčové události vs. stejný den minulý týden | denně | pokles o 40 % a víc | Havárie | všechny |
| 1.3 | Objem klíčové události vs. klouzavý průměr 28 dní | denně | pokles o 25 % a víc | Včasné varování | všechny |
| 1.4 | Tržby v GA4 vs. klouzavý průměr | denně | pokles o 30 % a víc | Včasné varování | všechny |
| 1.5 | Ostatní sledované události (`add_to_cart`, `begin_checkout`, registrace) | denně | pokles o 50 % a víc | Včasné varování | Správa, Datová |

## 2. Sedí čísla s e-shopem?

Rozdíl mezi GA4 a administrací e-shopu **je normální** — dělají ho blokátory, odmítnutý souhlas, objednávky
po telefonu a vratky. Nehlídáme, že je rozdíl nulový. Hlídáme, že se **nezmění**.

| # | Kontrola | Frekvence | Práh alertu | Priorita | Tier |
|---|---|---|---|---|---|
| 2.1 | Počet objednávek v administraci vs. konverzí v GA4 (součtově) | denně | rozdíl **do 10 %** = ticho; **10–30 %** = sledujeme a píšeme do měsíčního komentáře; **nad 30 %** voláme | Havárie nad 30 % | všechny |
| 2.2 | Totéž pro tržby | denně | jako 2.1 | Havárie nad 30 % | všechny |
| 2.3 | Skok v rozdílu proti vaší vlastní normě | denně | změna rozdílu o 10 procentních bodů ze dne na den | Havárie | Správa, Datová |
| 2.4 | Párování jednotlivých objednávek po `transaction_id` | denně | chybí 5 % objednávek, nebo se objeví duplicita | Havárie | Datová |

Bod 2.4 je důvod, proč existuje tier Datová správa: **pět ztracených a pět duplicitních objednávek dá
v součtu „perfektní shodu"**. Součtové srovnání (2.1) to nikdy neodhalí.

## 3. Neposílá se to do reklamy špatně?

| # | Kontrola | Frekvence | Práh alertu | Priorita | Tier |
|---|---|---|---|---|---|
| 3.1 | Stav konverzních akcí v Google Ads | týdně | stav „Neaktivní" nebo „Žádné nedávné konverze" | Havárie | všechny |
| 3.2 | Počet konverzí v Ads vs. v GA4 | týdně | rozdíl nad 30 % nebo skok o 15 p. b. | Včasné varování | všechny |
| 3.3 | Meta: kvalita shody událostí (EMQ) a deduplikace | měsíčně | EMQ pod 6,0 nebo pokles o 1,0 | Včasné varování | Správa, Datová |
| 3.4 | Sklik: Diagnostika měření (podíl hitů se souhlasem, chyby validace) | měsíčně | jakákoli hlášená chyba validace | Včasné varování | Správa, Datová |
| 3.5 | Kampaně bez UTM parametrů | týdně | jakákoli nová kampaň bez označení | Pro informaci | Správa, Datová |

Google Ads označí tag za neaktivní **až po 7 dnech bez konverze**. Proto kontrolujeme sami a nečekáme na to.

## 4. Měří se vůbec, komu se má?

| # | Kontrola | Frekvence | Práh alertu | Priorita | Tier |
|---|---|---|---|---|---|
| 4.1 | Podíl udělených souhlasů | týdně | změna o 10 p. b. proti předchozím 4 týdnům | Havárie | všechny |
| 4.2 | Chování tagů podle stavu souhlasu (skutečně se neodesílá, když nemá?) | měsíčně a po každé změně lišty | jakýkoli tag ignorující odmítnutý souhlas | Havárie | všechny |
| 4.3 | Podíl `(not set)` a `direct / (none)` ve zdrojích | týdně | nárůst o 15 p. b. | Včasné varování | všechny |
| 4.4 | Nové neznámé zdroje návštěvnosti (self-referral, platební brány) | týdně | nový zdroj nad 5 % relací | Pro informaci | Správa, Datová |

## 5. Běží technika?

| # | Kontrola | Frekvence | Práh alertu | Priorita | Tier |
|---|---|---|---|---|---|
| 5.1 | Server-side GTM: chybové odpovědi (4xx/5xx) | průběžně | 5 chyb/s po dobu 5 minut | Havárie | kde je sGTM |
| 5.2 | Server-side GTM: vytížení a latence | průběžně | CPU nad 60 %, latence nad 2 s | Včasné varování | kde je sGTM |
| 5.3 | Publikovaná nová verze GTM kontejneru | týdně | jakákoli změna, kterou jsme nedělali my | Včasné varování | všechny |
| 5.4 | Konektory do reportů (Supermetrics, Windsor, …): platnost tokenů | měsíčně | vypršení do 30 dnů nebo selhání přenosu | Včasné varování | všechny |
| 5.5 | Dostupnost dashboardů (načte se, má data za včerejšek) | týdně | prázdný nebo zastaralý zdroj | Včasné varování | Správa, Datová |

## 6. Drží datová vrstva? (jen Datová správa)

| # | Kontrola | Frekvence | Práh alertu | Priorita |
|---|---|---|---|---|
| 6.1 | Denní tabulka exportu GA4 → BigQuery dorazila | denně | tabulka chybí, nebo přišla po 14. hodině | Havárie |
| 6.2 | Počet událostí v denní tabulce | denně | odchylka o 5 % a víc proti očekávání | Včasné varování |
| 6.3 | Nová nebo zmizelá událost v exportu | denně | jakákoli změna | Včasné varování |
| 6.4 | Nový nebo zmizelý parametr u sledovaných událostí | denně | u událostí nad 10 000 výskytů | Včasné varování |
| 6.5 | Integrita `purchase`: má `transaction_id`, tržby > 0, položky mají ID a cenu | denně | jakýkoli vadný záznam | Havárie |
| 6.6 | Náklady BigQuery | denně | překročení rozpočtu měsíce o 50 % dřív, než uplyne | Včasné varování |
| 6.7 | Osobní údaje v datech (e-mail, telefon v URL nebo parametrech) | týdně | jakýkoli nález | Havárie |

Google při pozastavení exportu **předchozí dny nedopočítá** — díra v datech je trvalá. Proto je 6.1 denní.

---

## Co hlídáme mimo vaše data

Sledujeme za vás changelogy, které vaše měření rozbíjejí, a hlásíme dopad **před** termínem, ne po něm:
Google Analytics a Tag Manager, Google Ads, Meta, Sklik a Seznam, Shoptet a Upgates (nebo vaše platforma),
prohlížeče a požadavky na souhlas.

Za posledních 32 měsíců bylo v těchto zdrojích **57 změn, které mění způsob sběru dat** — v průměru jedna
za 2,5 týdne.

## Co nehlídáme

Abyste věděli, co od nás nečekat:

- **Výkon kampaní.** Hlídáme, že se měří správně, ne že se dobře nakupuje.
- **Dostupnost webu.** Na to je monitoring webu, ne měření.
- **Změny, o kterých nevíme.** Když vývojář nasadí v pátek večer, uvidíme to v pondělí ráno (Správa a Datová
  správa: automatický průchod objednávkou běží i o víkendu).
- **Data starší než náš vstup.** Co se ztratilo před začátkem spolupráce, se zpětně nedoplní.
