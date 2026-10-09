# URL: https://www.datamind.cz/knowledgebase/reporting-power-bi/datalake-v-power-bi

## Kategorie

* [Data Science](/knowledgebase/data-science)
* [Data Engineering](/knowledgebase/data-engineering)
* [Reporting a Power BI](/knowledgebase/reporting-power-bi)
* [Webová analytika](/knowledgebase/webova-analytika)
* [AI – Umělá inteligence](/knowledgebase/ai)
* [Datová strategie](/knowledgebase/datova-strategie)
 

# DirectLake v Power BI – přímý přístup k datům bez duplikace

Poslední aktualizace: 08. 10. 2026
![](https://www.datamind.cz/cache/files/knowledge/_respo1920/data-lake-power-bi.webp)

DirectLake je nová technologie v ekosystému Microsoft Power BI, která mění způsob práce s rozsáhlými daty. Umožňuje přímé čtení dat z úložiště OneLake (centrální datové jezero platformy Microsoft Fabric) ve formě Delta tabulek, a to bez nutnosti duplikace dat do datového modelu. Tento přístup kombinuje výhody režimů Import i DirectQuery – nabízí výkon blízký importovanému modelu, avšak s aktuálností téměř jako při přímém dotazu na zdroj.

## Co je DirectLake a jak funguje

DirectLake je nový režim úložiště datového modelu v Power BI. Tabulky modelu lze nastavit tak, aby Power BI načítalo data přímo z OneLake místo tradičního importu. Data zůstávají uložena jen jednou v OneLake a Power BI je při dotazování natahuje do paměti dle potřeby. Jakmile jsou data načtena, dotazy se zpracovávají v paměti stejně jako u importovaného modelu. DirectLake tak dosahuje výkonu srovnatelného s importním režimem, ovšem bez nutnosti předem nahrát velké objemy dat do modelu.

## DirectLake vs DirectQuery – hlavní rozdíly

Režim DirectQuery ponechává data v externí databázi a při každé interakci posílá dotaz do zdrojového systému. DirectLake zajišťuje aktuálnost dat jiným způsobem – drží je v OneLake a načítá do paměti Power BI. Hlavní rozdíly:

* Výkon a data: DirectLake provádí dotazy v paměti (rychlá odezva i nad velkými daty) a po krátké synchronizaci metadat nabízí téměř aktuální údaje. Naproti tomu DirectQuery zatěžuje externí databázi každým dotazem, což zpomaluje odezvu (byť data čte vždy přímo z primárního zdroje).
* Zátěž infrastruktury: U DirectQuery musí zdrojová databáze unést všechny dotazy z Power BI a často je nutné ji nákladně posílit. DirectLake přesouvá výpočetní zátěž do kapacity Power BI v cloudu, čímž ulehčuje provozním systémům – vyžaduje však dostatečnou paměť a CPU na straně BI pro práci s velkým objemem dat.

## DirectLake vs tradiční import dat

Při klasickém importu dat se informace zkopírují do Power BI a celý datový model je uložen v paměti. DirectLake se od toho liší v několika ohledech:

* Rychlost dotazů a aktualizace: Importované modely mají velmi rychlé dotazy, ale data se musí nejprve kompletně nahrát a při aktualizaci se znovu načítají všechny údaje. DirectLake dosahuje podobného výkonu bez předběžného nahrání – první dotaz nad velkou tabulkou může být mírně pomalejší, další jsou už stejně svižné – a nové záznamy se do reportů propisují během pár sekund po zpracování v jezeře (není nutné čekat na dlouhý refresh).
* Velikost modelu: Importovaný model naráží na limity paměti – všechna data musí být v kapacitě Power BI a velikost modelu je omezená. DirectLake tuto bariéru odstraňuje, neboť data zůstávají v OneLake a do paměti se načítají jen potřebné segmenty. Lze tak pracovat s terabajty dat, aniž by bylo nutné výrazně navyšovat paměťovou kapacitu.

## Byznysové přínosy DirectLake

Nasazení DirectLake v Power BI přináší následující výhody:

* **Nižší náklady na data:** Odstranění duplicitních úložišť snižuje nároky na storage i údržbu. Stačí udržovat jeden hlavní datový zdroj (OneLake) místo provozování dalšího datového skladu pro BI. Zmenšuje se také zátěž zdrojových systémů, protože odpadají velké exporty dat při refreshi reportů.
* **Rychlejší rozhodování:** Čerstvá data se díky DirectLake dostanou k uživatelům rychleji. Manažeři mohou pracovat s aktuálními čísly téměř v reálném čase, což zkracuje reakční dobu a umožňuje agilnější, informovaná rozhodnutí.
* **Lepší uživatelská zkušenost:** Rychlé načítání reportů a aktuální čísla zvyšují důvěru uživatelů v BI. Uživatelé nejsou frustrováni čekáním na pomalé dotazy nebo zastaralé údaje, což podporuje vyšší adopci analytických nástrojů v celé firmě.
* **Škálovatelnost:** DirectLake zvládá obrovské objemy dat i stovky souběžných dotazů. Analytická platforma může růst spolu s datovou základnou – při nárůstu dat stačí navýšit kapacitu, aniž by bylo nutné měnit architekturu či přepisovat datové modely.

## DirectLake v Microsoft Fabric a medailonová architektura

DirectLake se ideálně uplatní v prostředí Microsoft Fabric. V architektuře medailonu (Bronze–Silver–Gold) představují “zlaté” tabulky v OneLake finální data připravená pro analýzy. Power BI se pomocí DirectLake může přímo napojit na tuto Gold vrstvu v OneLake. Odpadá tak přesouvání dat do jiného úložiště a OneLake funguje jako jediný zdroj pravdy pro všechny analytické nástroje včetně Power BI.

DirectLake propojuje svět datových jezer a business intelligence. Eliminací zbytečných replikací a zrychlením přístupu k informacím umožňuje organizacím efektivněji využívat jejich data.