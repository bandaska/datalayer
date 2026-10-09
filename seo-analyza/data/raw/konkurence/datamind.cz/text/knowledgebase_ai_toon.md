# URL: https://www.datamind.cz/knowledgebase/ai/toon

## Kategorie

* [Data Science](/knowledgebase/data-science)
* [Data Engineering](/knowledgebase/data-engineering)
* [Reporting a Power BI](/knowledgebase/reporting-power-bi)
* [Webová analytika](/knowledgebase/webova-analytika)
* [AI – Umělá inteligence](/knowledgebase/ai)
* [Datová strategie](/knowledgebase/datova-strategie)
 

# TOON: nový formát pro profesionální zápis promptů (a proč není jen „jiný JSON“)

Poslední aktualizace: 08. 10. 2026
![](https://www.datamind.cz/cache/files/knowledge/_respo1920/toon.webp)

## Proč vůbec řešit nový formát

U LLM a zejména u multiagentních systémů se prompt často mění z „textové instrukce“ na **kontrakt**: strukturovaný vstup, výstup, kontext, pravidla, role, datové tabulky, výsledky mezikroků. V JSONu se to dá dělat dobře, ale rychle narazíte na dvě praktické nevýhody:

* **Tokenová režie**: uvozovky, závorky, čárky a opakované klíče zabírají překvapivě velkou část kontextu.
* **Čitelnost a údržba**: složitější prompt-config v JSONu se hůř ladí ručně a změny struktury jsou náchylné na syntaktické chyby.

TOON (Token-Oriented Object Notation) vznikl jako formát, který zachovává **strukturu JSON**, ale zapisuje ji způsobem přívětivějším pro člověka i LLM a zároveň úspornějším z hlediska počtu tokenů.

[GitHub - toon-format/toon: 🎒 Token-Oriented Object Notation (TOON) – Compact, human-readable, schema-aware JSON for LLM prompts. Spec, benchmarks, TypeScript SDK.](https://github.com/toon-format/toon)

## Co je TOON a jak funguje

TOON je **bezeztrátový zápis strukturovaných dat kompatibilní s JSON**: co vyjádří JSON, vyjádří i TOON. Rozdíl je v notaci:

* Hierarchie se vyjadřuje **odsazením** (podobně jako YAML), místo „závorové“ syntaxe.
* Pole se značí jako `nazev[N]`, kde `N` je délka pole.
* Homogenní pole objektů umí TOON zapisovat **tabulkově**: klíče se uvedou jednou v hlavičce a pak následují řádky hodnot (jako CSV).

### Mini ukázka (objekt + vnoření)

```
user:
  id: 1
  name: Alice
  profile:
    city: Prague
```

### Ukázka (homogenní pole objektů – „tabulka“)

```
users[2]{id,name,role}:
  1,Alice,admin
  2,Bob,user
```

V JSONu by se `id/name/role` opakovaly u každého záznamu. V TOONu jsou jednou.

## Proč je to zajímavé pro prompty a multiagentní systémy

V multiagentním běhu se typicky přenáší a ukládá:

* kontext a pravidla,
* task backlog / plán,
* evidenční tabulky (záznamy, události, zákazníci, dokumenty),
* intermediate výsledky (extrakce, klasifikace, návrhy, skóre),
* rozhodnutí a auditní stopa.

TOON dává smysl hlavně v situacích, kdy:

* máte **větší objem strukturovaných dat** v promptu,
* data jsou **opakující se / tabulková** (logy, záznamy, katalogy, seznamy),
* potřebujete **ušetřit kontext** a zároveň zachovat strukturu,
* chcete, aby agenti „mluvili“ přehledně strukturovaně, ne jen volným textem.

Praktický dopad:

* méně tokenů → nižší cena a více prostoru pro kontext,
* přehlednější „contract“ mezi agenty → méně nedorozumění,
* snazší ruční kontrola a ladění promptů.

## TOON vs. JSON: rychlé porovnání

### Čitelnost pro lidi

* **JSON**: spolehlivý, ale hlučný (závorky, uvozovky, čárky), u větších objektů se čte hůř.
* **TOON**: přehlednější struktura díky odsazení a tabulkovému zápisu.

### Tokenová efektivita

* **JSON**: často vysoká režie kvůli opakování klíčů a syntaxi.
* **TOON**: výrazně úsporný hlavně u homogenních polí objektů (tabulkový mód).

### Robustnost a tooling

* **JSON**: standard, všude parsování, validace, schémata, linting.
* **TOON**: mladší ekosystém, méně „enterprise“ nástrojů a konvencí.

### Vhodnost pro multiagentní orchestraci

* **JSON**: ideální pro API kontrakty, strojové zpracování, schema-first přístup.
* **TOON**: ideální pro „LLM-friendly“ přenos a ukládání strukturovaných stavů a tabulek v promptu.

## Nevýhody a rizika TOONu (důležité pro praxi)

TOON je praktický, ale je fér zmínit slabiny:

* **Méně výhodný u heterogenních nebo hluboce vnořených struktur**  
  Pokud data nejsou tabulková a každá položka má jiné klíče, TOON často nemůže použít tabulkový zápis a výhoda se zmenší.
* **Mladý standard a nižší podpora v nástrojích**  
  V enterprise prostředí je JSON „default“: governance, schémata, validace, integrace. U TOONu to zatím znamená vlastní knihovny a procesy.
* **Nutnost disciplíny u týmů**  
  Pokud se TOON začne psát ručně, je potřeba hlídat konzistenci (odsazení, pořadí polí v tabulce, quoting hodnot se speciálními znaky).
* **Modely nejsou „nativně TOON-trained“**  
  Obvykle je potřeba dát agentům jasný příklad formátu, případně krátké pravidlo „vrať výstup v TOON“.

## Doporučení pro profesionální použití

TOON bych bral jako **vrstvu optimalizace pro LLM**, ne jako náhradu JSON všude.

**Dává smysl, když:**

* posíláte do promptu větší tabulková data,
* stav multiagentního běhu je rozsáhlý (plány, logy, evidence),
* řešíte náklady a limit kontextu,
* chcete čitelné „agent-to-agent“ message payloady.

**JSON nechává smysl, když:**

* jste v integračním světě API a schémat,
* potřebujete zralé validační a governance nástroje,
* data nejsou tabulková a úspora TOONu je malá.

TOON je zajímavý kandidát na „prompt serialization format“ pro profesionální nasazení: **nižší tokenová režie + lepší čitelnost** tam, kde prompty nesou strukturovaná data a multiagentní stav. V enterprise praxi je ale potřeba počítat s tím, že JSON má pořád největší výhodu v ekosystému, standardizaci a tooling.

Pokud chceš, můžu doplnit ještě krátkou šablonu „multiagent message envelope“ v TOON (role, cíl, vstupy, výstupy, pravidla, audit) a vedle toho stejnou šablonu v JSON.