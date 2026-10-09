# URL: https://www.datamind.cz/pripadove-studie/seznam-cz

# **Detekce výpadků impresí** ve výdejových zónách Skliku pro Seznam.cz

Reklamní ekosystém Skliku je natolik rozsáhlý a dynamický, že i krátký výpadek v jediné výdejové zóně může znamenat zbytečnou, často skrytou ztrátu příjmů. Seznam.cz proto potřeboval řešení, které dokáže ve velkém měřítku automaticky rozpoznat nestandardní chování – zejména prudké poklesy nebo nulové imprese – a včas na něj upozornit.  
V Data Mind jsme navrhli a dodali nástroj na míru, který nad historickými daty vyhodnocuje tisíce zón napříč zařízeními, prohlížeči i typy reklamy, stanovuje závažnost anomálií a poskytuje jasné výstupy pro rychlou operativní nápravu.

### Data Science

**Akční cesta od dat k zisku**  
Prediktivní modely, segmentace zákazníků a pokročilá analytika pro rozhodování, cílení a plánování.

[Zjistit více](/sluzby/data-science)

### Data Engineering

**Pevný základ pro data**  
Datová architektura, integrace zdrojů, datové sklady a stabilní provoz datové platformy

[Zjistit více](/sluzby/data-engineering)

### Webová analytika

**Jasno v tom, co funguje**  
Měření, analýza chování uživatelů, konverzní cesty, UX a optimalizace výkonu webů

[Zjistit více](/sluzby/webova-analytika)

### Automatizace dokumentů

těžba, sumarizace, klasifikace, workflow bez ruční práce

## Klíčové výsledky

**Automatická detekce výpadků impresí**  
napříč téměř 10 000 výdejovými zónami denně

**Výrazně rychlejší identifikace a řešení incidentů**  
což zkrátilo dobu výpadků reklamy

**Lepší ochrana reklamních příjmů Skliku**  
díky včasnému upozornění na anomálie

![](https://www.datamind.cz/cache/files/_respo640/Seznam-pohoda.webp)

**Chcete podobný dohled nad svými daty nebo systémy?**

[Domluvit konzultaci](#contact)

![](https://www.datamind.cz/cache/files/_respo640/cil.webp)

## Cíl

* Odhalit výpadky impresí
* Upozornit na anomálie
* Minimalizovat skryté ztráty
* Zrychlit nápravu problémů
* Podpořit stabilní příjmy

## Výpadky impresí jsme odhalili včas, aby příjmy z Skliku  již nikdy nepadaly na dlouho.

Reklama představuje pro Seznam.cz **klíčový zdroj příjmů** a její distribuce probíhá napříč **mnoha obchodními kanály**. Systém pracuje s obrovským množstvím **výdejových zón**, jejichž počet už není možné spolehlivě kontrolovat ručně. Přestože Seznam.cz již používal základní monitorovací nástroje, **chyběla cílená analytická vrstva**, která by dokázala **spolehlivě zachytit výpadky** zobrazení reklamy v konkrétních zónách a včas na ně upozornit.

## Hlavní výzvy

* 10 tisíc zón denně
* Dvouletá historie v denním rozlišení
* Rozdílné standardy chování jednotlivých zón
* Volba vhodných algoritmů

Klíčové bylo škálování na tisíce časových řad a současně respektování rozdílů mezi zónami podle velikosti, zařízení a dalších parametrů, aby systém neprodukoval falešné nálezy.

![](https://www.datamind.cz/cache/files/_respo640/sklik2.webp)

### Pomůžeme vám odhalit problémy v datech dříve, než ovlivní váš byznys Podíváme se na vaše data, systémy nebo marketingové platformy a navrhneme řešení, které zajistí včasnou detekci problémů a stabilní výkon.

## Řešení Data Mind

* Nasazení v cloudové infrastruktuře Keboola
* Definice anomálií a jejich závažností
* Odfiltrování neaktivních zón
* Slučování malých zón
* Hlasování více statistických metod o závažnosti anomálie
* Rozdílné hranice pro hlásiče (alerty) u malých vs. velkých zón

## Použité technologie

* Keboola Connection
* Python detekční pipeline
* MissingDays kontrola
* Isolation Forest detektor
* Prophet trendový dohled

Nejprve jsme data profilovali, kalibrovali definice výpadků a jejich závažnosti, zredukovali počet zón chytrou agregací. Následně vybrali kombinaci algoritmů podle chování jednotlivých typů zón.

## Výsledek

Řešení přineslo **globální reporting výdejových zón** a přehled o výkonu výdeje Skliku napříč systémem. Součástí je také s**oubor detekovaných anomálií s automatickým alertingem**, který umožňuje rychlou identifikaci problémů a jejich předání do provozu. Dodali jsme jak **přehledový reporting** pro analytickou práci, tak **strojově zpracovatelný výstup anomálií**, který slouží nejen k eskalaci výpadků, ale také jako praktický nástroj pro identifikaci neudržovaných nebo nepoužívaných zón.

![](https://www.datamind.cz/cache/files/_respo640/sklik5.webp)

![](https://www.datamind.cz/cache/files/_respo640/sklikprinos.webp)

## Přínosy

* Okamžitá detekce výpadků
* Kratší doba incidentů
* Méně neodhalených ztrát
* Vyšší provozní jistota
* Růst reklamních příjmů

Díky včasnému upozornění na výpadky impresí se zkrátila doba mezi vznikem problému a jeho opravou, což vedlo ke snížení délky incidentů a k ochraně reklamních výnosů.

**Řešíte podobný problém s daty nebo monitoringem systémů?**

[Probrat možnosti](#contact)

## Chcete jít více do hloubky? Ponořte se do naší knowledgebase

[AI](/tag/ai)
[Data](/tag/data)

[![](https://www.datamind.cz/cache/files/knowledge/_knowledge/customer360.webp)](https://www.datamind.cz/knowledgebase/reporting-power-bi/customer-360)

### [Customer 360](https://www.datamind.cz/knowledgebase/reporting-power-bi/customer-360)

Vytvoření unifikovaného Customer 360 profilu není jen marketingový cíl, ale komplexní architektonická výzva. Tento článek analyzuje nezbytný přechod na architekturu Data Lakehouse v ekosystému Microsoft Fabric a Azure. Zjistěte, jak vybudovat moderní datovou platformu, která slouží jako robustní základna pro pokročilou cloudovou analytiku a hyper-personalizaci komunikace s využitím AI a LLM.

[AI](/tag/ai)

[![](https://www.datamind.cz/cache/files/knowledge/_knowledge/RAG-firemni-data.webp)](https://www.datamind.cz/knowledgebase/ai/rag-nad-firemnimi-daty)

### [RAG nad firemními daty](https://www.datamind.cz/knowledgebase/ai/rag-nad-firemnimi-daty)

Chcete nasadit generativní AI nad vlastním firemním know-how bez rizika halucinací? Tento technický deep-dive do architektury RAG ukazuje, že úspěch AI stojí a padá s kvalitním **Data Engineeringem** a **datovou architekturou**. Prozkoumejte, jak vybudovat **moderní datovou platformu** pro AI na bázi **Microsoft Fabric** a Azure Data Lakehouse a jak zvládnout výzvy spojené s vektorizací dat, bezpečností a přechodem do produkčního enterprise prostředí.

[![](https://www.datamind.cz/cache/files/knowledge/_knowledge/Propensity-to-Buy.webp)](https://www.datamind.cz/knowledgebase/data-science/propensity-to-buy)

### [Propensity to Buy](https://www.datamind.cz/knowledgebase/data-science/propensity-to-buy)

Jak transformovat surová data na přesné predikce nákupního chování? Model Propensity to Buy představuje zlatý standard monetizace dat, jeho úspěch však stojí a padá na zvolené architektuře. V tomto článku prozkoumáme technické pozadí implementace v prostředí Microsoft Fabric a Azure. Zjistěte, jak využít principy Data Lakehouse, pokročilé strojové učení a generativní AI k identifikaci zákazníků s nejvyšším potenciálem – a jak to vše orchestrovat v moderní, škálovatelné infrastruktuře.

[Celá knowledge base](/knowledgebase)