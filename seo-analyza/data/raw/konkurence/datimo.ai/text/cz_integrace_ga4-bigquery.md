# URL: https://www.datimo.ai/cz/integrace/ga4-bigquery

1. [Domů](/cz)
2. [Znalostní báze](/cz/znalosti)
3. [Integrace](/cz/znalosti/integrace)
4. GA4 a BigQuery

# Syrová data z GA4 v BigQuery, konečně použitelná pro report a atribuci

[GA4](/cz/pojmy/ga4) (Google Analytics 4) je nástroj Google pro měření chování návštěvníků webu. Data do BigQuery umí poslat samo, zdarma, jako nativní funkci Google. To, co s exportem uděláte dál, je jiná práce. Syrová, vnořená, událostmi řízená data proměníme v čisté tabulky propojené s marží a objednávkami z e-shopu.

Zajímá mě to víc

## K čemu propojení slouží

GA4 umí posílat data přímo do [BigQuery](/cz/pojmy/bigquery). Je to nativní funkce Google Analytics, ne konektor, který by stavělo Datimo, zapíná a nastavuje se přímo v GA4. Sama o sobě ale vyřeší jen přenos, ne použitelnost dat.

### Export je Googlí, syrová data jsou nepoužitelná bez úpravy

Export do BigQuery zapisuje jeden řádek na každou jednotlivou událost (event), ne na relaci nebo objednávku, a schéma je hluboce vnořené (nested a repeated pole). Přímé dotazování nad touhle strukturou zvládne málokdo v týmu bez zkušenosti se SQL nad vnořenými daty.

### Datimo staví vrstvu nad exportem, ne export samotný

Naše práce začíná tam, kde export skončí: syrové eventy se čistí, deduplikují a skládají do přehledných tabulek na úrovni relace a objednávky, propojených s daty z e-shopu a účetnictví, se kterými se dá počítat v reportu nebo v atribuci.

## Na co si dát pozor

Export GA4 do BigQuery má pár vlastností, které stojí za to znát dopředu, ne je objevit až při stavbě prvního reportu.

* ### Vnořené schéma vyžaduje SQL, na které většina týmů nemá kapacitu

  Data přicházejí jako pole v poli (event\_params, items), obyčejný SELECT nefunguje, je potřeba UNNEST a znalost toho, jak GA4 eventy strukturuje. Bez týmu, který tohle umí, export leží v projektu nevyužitý.
* ### Atribuce z exportu se nemusí shodovat s Google Ads ani s celkovým obratem

  GA4 počítá atribuci podle vlastní logiky, i syrová data z exportu z ní vycházejí. Číslo se proto typicky liší od toho, co ukazuje Google Ads nebo celkový obrat napříč kanály. Víc u pojmu [Atribuční modelování](/cz/pojmy/atribucni-modelovani).
* ### Standardní export běží dávkově, streaming je jen ve vyšší, placené úrovni GA4

  Data z běžného (bezplatného) GA4 se do BigQuery propisují jednou denně, ne v reálném čase. Okamžitý, průběžný (streaming) export existuje jen u GA4 360, placené enterprise úrovně Google Analytics. Přesný časový posun exportu Google veřejně negarantuje, počítejte s tím, že data z aktuálního dne nejsou hned k dispozici.
* ### Vedle finální denní tabulky běží i orientační intraday verze

  GA4 kromě tabulky events\_YYYYMMDD, která se uzavře až po skončení dne, průběžně plní i tabulku events\_intraday\_YYYYMMDD. Ta je jen orientační, u nových uživatelů v ní typicky chybí zdroj návštěvnosti, a druhý den ji nahradí finální verze. Pro přesný report se počítá s finální tabulkou, ne s intraday.
* ### Export je nesamplovaný, na rozdíl od běžných reportů v GA4

  BigQuery export obsahuje syrová data v plném rozsahu, bez vzorkování (samplingu), které GA4 aplikuje u exploračních reportů nad 10 milionů eventů v daném období u standardní property (u GA4 360 je práh až 1 miliarda). Číslo spočítané přímo nad exportem se proto typicky liší i od čísla v samotném reportovém rozhraní GA4, ne jen od Google Ads nebo celkového obratu.
* ### Historie před zapnutím exportu chybí

  Export sbírá data od okamžiku, kdy ho v GA4 někdo zapne. Google zpětně nedopočítává starší období, což je běžně známé omezení. Pokud export nebyl aktivní od začátku, ta historie v BigQuery jednoduše není a nedá se získat jinak.

## Jak to Datimo řeší

1. 1

   ### Správné zapnutí a konfigurace nativního exportu

   Export nastavíme přímo v GA4 podle toho, co má projekt reálně sbírat, včetně e-commerce parametrů a vlastních událostí, aby v datech od začátku nechyběl kontext, který se později nedá dopočítat.
2. 2

   ### Transformace syrových eventů na použitelné tabulky

   Vnořené eventy rozbalujeme, deduplikujeme a skládáme do relací a nákupních cest, aby se dalo dotazovat běžným SQL, ne řešit UNNEST při každém reportu znovu.
3. 3

   ### Propojení s e-shopem, ERP a účetnictvím

   Data z GA4 exportu spojujeme s marží, objednávkami a náklady ze stejného [datového skladu](/cz/pojmy/datovy-sklad), aby atribuce a reporting počítaly se skutečným ziskem, ne jen s obratem, který GA4 samo o sobě nezná.
4. 4

   ### Správa napojení v ceně

   Technickou správu exportu, reakci na změny schématu GA4 i aktivní monitoring, že data reálně tečou, hlídáme za vás, v rámci ceny.
5. 5

   ### Modulární rozsah dat

   Rozsah transformací a propojených zdrojů stavíme z modulů podle toho, co potřebujete reportovat, ne jako pevně daný balíček tabulek.

Pokud zvažujete přímý export GA4 do BigQuery nebo ho už máte zapnutý a nevíte, jak z něj dostat použitelný report, projdeme s vámi rozsah dat a to, co konkrétně transformace obnáší.

Nezávazná konzultace

## Kam data z GA4 exportu reálně jdou

Export sám o sobě nic nerozhodne. Tohle jsou pojmy a materiály, které nad daty z GA4 navazují.

[Pojem

### GA4

Co GA4 měří, jak funguje jeho atribuce a kde firmy dělají chybu, když číslu z GA4 věří jako jediné pravdě.](/cz/pojmy/ga4)[Pojem

### BigQuery

Jak funguje cena podle proskenovaných dat a proč je BigQuery výchozí datový sklad Datimo.](/cz/pojmy/bigquery)[Pojem

### Atribuční modelování

Proč se atribuce z GA4 exportu neshoduje s Google Ads ani s celkovým obratem a jak se s tím pracuje.](/cz/pojmy/atribucni-modelovani)[Produkt

### Server-side tracking

Spolehlivější data na vstupu do GA4, na kterých může export a atribuce vůbec stát.](/cz/server-side-tracking)[Článek

### Segmentace produktů v Google Ads

Jak se GA4 data (přes API i přímý export) používají vedle Google Ads a celkového obratu k rozhodování, kam sypat rozpočet.](/cz/blog/google-ads-segmentace-produktu)