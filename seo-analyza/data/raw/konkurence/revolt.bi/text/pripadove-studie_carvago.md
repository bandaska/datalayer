# URL: https://www.revolt.bi/pripadove-studie/carvago/

[![Carvago>](https://www.revolt.bi/wp-content/themes/revoltbi/img/logo.svg)](https://www.revolt.bi)

* [AI](https://www.revolt.bi/ai/)
  + [Co nabízí AI řešení?](https://www.revolt.bi/ai/)
  + [AI strategie](https://www.revolt.bi/ai-strategie/)
  + [AI analytika pro logistiku](https://www.revolt.bi/ai-analytika-pro-logistiku/)
  + [Rapid Prototyping s AI](https://www.revolt.bi/rychly-prototyping-s-ai/)
* [Data Academy](https://www.revolt.bi/data-academy/)
* [Služby a řešení](https://www.revolt.bi/sluzby/business-reseni/)
  + [Datová strategie](https://www.revolt.bi/datova-strategie/)
  + [Businessové Dashboardy](https://www.revolt.bi/sluzby/technologicke-reseni/businessove-dashboardy/)
  + [Migrace do Cloudu](https://www.revolt.bi/migrace-do-cloudu/)
  + [Řešení pro retail](https://www.revolt.bi/sluzby/business-reseni/retail/)
  + [Řešení pro e-commerce](https://www.revolt.bi/sluzby/business-reseni/e-commerce/)
  + [Řešení pro obchodní ředitele](https://www.revolt.bi/sluzby/business-reseni/zero-to-hero-cco/)
* [Technologie](https://www.revolt.bi/technologie/)
  + [Snowflake](https://www.revolt.bi/technologie/snowflake/)
  + [dbt](https://www.revolt.bi/technologie/dbt/)
  + [ThoughtSpot](https://www.revolt.bi/thoughtspot/)
  + [Google Cloud](https://www.revolt.bi/sluzby/technologicke-reseni/google-cloud/)
  + [Tableau](https://www.revolt.bi/technologie/tableau/)
  + [Power BI](https://www.revolt.bi/power-bi/)
* [Případové studie](https://www.revolt.bi/pripadove-studie/)
* [O nás](https://www.revolt.bi/o-nas/)
  + [Proč agentura?](https://www.revolt.bi/sluzby/business-reseni/agency-vs-in-house/)
  + [Články & novinky](https://www.revolt.bi/o-nas/aktuality/)
  + [E-booky & webináře](https://www.revolt.bi/o-nas/e-booky-a-webinare/)
  + [Slovník pojmů](https://www.revolt.bi/o-nas/slovnik-pojmu/)
  + [Insane Data Podcast](https://www.revolt.bi/en/insane-data-podcast/)
  + [Mentoring](https://www.revolt.bi/sluzby/business-reseni/mentoring/)
  + [Kariéra](https://www.revolt.bi/o-nas/kariera/)
* [Kontakt](https://www.revolt.bi/kontakt/)
* [![English](/wp-content/themes/revoltbi/polylang/en_GB.svg)](https://www.revolt.bi/en/carvago/)

Carvago

##### ZÍSKÁNÍ A KATEGORIZACE 4,5 MILIONU AUTO INZERÁTŮ Z CELÉ EVROPY KAŽDÝ DEN DÍKY REVOLT BI.

![](https://www.revolt.bi/wp-content/uploads/2023/07/carvago.png)

*Zdroj: depositphotos.com*

0

milionů inzerátů denně

0

různých modelů vozů

0

značek aut

0

vytvořený přehledný katalog

Česká společnost Carvago provozuje velmi úspěšné online tržiště ojetých vozů z celé Evropy. Již dnes nabízí více než 2 miliony vozů zákazníkům ze 7 zemí Evropy.



#### **Výzva**

Aby ve svých začátcích Carvago dosáhlo svých cílů, potřebovali každý den najít v celé Evropě nabízené ojeté vozy a zařadit je do své nabídky.

Aby jejich zákazníci mohli kdykoliv najít tu nejvýhodnější nabídku pro vůz, který hledají, je třeba neustále doplňovat databázi o nově nabízené vozy na všech portálech v Evropě. Jejich prodejci přitom často nedostatečně vyplní data o nabízeném autě nebo umístí inzerát zároveň na několik portálů.

Bylo potřeba nejen získat nové inzeráty, ale zároveň odstranit duplicity, opravit chybné informace a klasifikovat všechny nabídky na základě vyčerpávajícího katalogu modelů aut, včetně klíčových parametrů jako motorizace, typ převodovky, náhon apod.

#### **Analýza**

**Hlavní požadavky na řešení byly následující:**

* Připravit katalog obsahující modely pokrývající 95+ % evropského trhu osobních automobilů včetně klíčových parametrů jako motorizace, typ převodovky, náhon apod.
* Katalog by se měl automaticky aktualizovat podle externích zdrojů (např. mobile.de, cars-data.com)
* Vytvořit databázi s aktuální nabídkou vozů na evropském trhu
* Sebrané inzeráty deduplikovat, přesně přiřadit a klasifikovat na základě katalogu

**Analyzovali jsme detailně existující zdroje informací o vozech a inzerátech a identifikovali jsme:**

* 3 000+ různých modelů vozů
* 250+ značek aut
* 85 hlavních parametrů vozů
* 14 hlavních serverů s rozdílnou strukturou dat
* 4,5 milionu inzerátů přidaných či aktualizovaných každý den
* Vesměs žádná klasifikace u inzerátů, nejčastěji vše jen ve formě textů či fotografií vozu

![](https://www.revolt.bi/wp-content/uploads/2023/07/Group-324.svg)

**Zajímavost:** 10 modelů vozů pokryje 37 % trhu.

#### **Řešení**

**Řešení od Revolt.BI pro Carvago zahrnuje několik součástí:**

* Tvorba datového skladu pro katalog i inzeráty
* Získávání dat
* Analýza dat
* Business analytika

Jako datový sklad a DevOps platformu jsme zvolili [Keboola](https://www.revolt.bi/technologie/keboola/) s datovým úložištěm na [Snowflake](https://www.revolt.bi/technologie/snowflake/). Rozhodl výborný výpočetní výkon, integrace všech potřebných služeb, diagnostika všech procesů a mnoho dalších výhod řešení Keboola.

Pro automatickou analýzu fotografií (image recognition) používáme deep learning – konvoluční neurální síť (CNN), která je schopna díky sadě algoritmů a technologií identifikovat  objekty a mnoho dalších typů prvků v obraze a jejich analýzou vyvodit závěry, a to při nízkých nákladech. Naše řešení je schopné i opravit chybné informace – např. dle fotografie vozu rozpozná, že se jedná o kombík, i když inzerát uvádí, že se jedná o VAN nebo MPV. Dokonce jsme schopni z fotografie interiéru automaticky rozpoznat i typ klimatizace!

![](https://www.revolt.bi/wp-content/uploads/2023/07/Group-324.svg)

**Zajímavost:** Pro kvalitní natrénování neurální sítě u jednoho modelu je potřeba 2000 fotografií.

Business analytiku řešíme pomocí [Tableau](https://www.revolt.bi/technologie/tableau/), žádný jiný vizualizační nástroj by nezvládl tak snadno a tak rozličné pohledy na mnoho aspektů fungování Carvago nejen pro samotnou společnost, ale i pro jejich business partnery.

#### Výsledek

Díky spolupráci s Revolt.BI získalo Carvago unikátní a vždy aktuální data o evropských ojetých vozech, včetně relevantních parametrů a ceny daného vozu, jakož i analytické nástroje pro jejich obchodní využití.

Business analytika od Revolt.BI umožňuje obchodnímu oddělení Carvago i jeho zákazníkům činit datově podložená rozhodnutí, např. cílení nabídky na prodejce podle jejich silných segmentů nebo detailní porovnání nabízených vozů napříč inzertními servery.

##### Katalog

* 3 000+ modelů, 250+ značek
* Kompletní záznamy o klíčových parametrech
* Automatická kontrola a doplnění neznámých parametrů jako typ karoserie, počet dveří, objem motoru, typ převodovky apod.
* Možná ruční kontrola a změna položek katalogu

##### Získávání dat

* 4,5 milionu inzerátů denně
* 130 inzertních serverů
* Deduplikace
* Zajištěná automatická konzistence dat
* Možnost manuální kontroly a korekce
* Párování na položky v katalogu
* Denní aktualizace, vybraná data, např. aukce, lze aktualizovat i v reálném čase

##### Analytické nástroje

* Diagnostika průběhu extrakce dat
* Nástroj pro rychlé odhalení chyb, podezřelých a nekvalitních inzerátů
* Kompletní přehled o stavu evropského trhu přes regiony, modely, stáří vozů, cenové hladiny a jiné parametry
* Identifikace atraktivní nabídky vozů (komplexní posouzení modelu, stáří, vybavenosti), které lze se ziskem prodat, např. v jiných regionech
* Nástroj pro správné stanovení ceny na základě modelu, stáří, stavu a výbavy

# Kontaktujte nás

Trápí vás data, procesy nebo celé analytické prostředí?  
**Jsme tu pro vás.**

![Revolt.BI](https://www.revolt.bi/wp-content/themes/revoltbi/img/logo_white.svg)

[![Datapunkers](https://www.revolt.bi/wp-content/themes/revoltbi/img/datapunkers.png)](https://datapunkers.revolt.bi/)

### Kontakt

**Revolt BI s.r.o.**  
Olivova 4  
110 00 Praha 1

![](https://www.revolt.bi/wp-content/uploads/2025/12/Vhodny-pro-vizualizaci-dat-v-realnem-case-10.png)

[info@revolt.bi](mailto:info@revolt.bi)  
[+420 725 154 325](tel:00420725154325)

### Služby

* [Technologická řešení](https://www.revolt.bi/sluzby/technologicke-reseni/)
* [Business řešení](https://www.revolt.bi/sluzby/business-reseni/)
* [Datová strategie](https://www.revolt.bi/sluzby/technologicke-reseni/analyticka-strategie/)
* [Data science](https://www.revolt.bi/sluzby/technologicke-reseni/data-science/)
* [Migrace do Cloudu](https://www.revolt.bi/migrace-do-cloudu/)
* [Data end to endmanagement](https://www.revolt.bi/sluzby/technologicke-reseni/data-end-to-endmanagement/)
* [Data Warehouse](https://www.revolt.bi/sluzby/technologicke-reseni/data-warehouse/)
* [AI](https://www.revolt.bi/ai/)

### Technologie

* [Snowflake](https://www.revolt.bi/technologie/snowflake/)
* [dbt](https://www.revolt.bi/technologie/dbt/)
* [Google Cloud](https://www.revolt.bi/sluzby/technologicke-reseni/google-cloud/)
* [ThoughtSpot](https://www.revolt.bi/thoughtspot/)
* [Tableau](https://www.revolt.bi/technologie/tableau/)

### Revolt.bi

* [O nás](https://www.revolt.bi/o-nas/)
* [Případové studie](https://www.revolt.bi/pripadove-studie/)
* [Insane Data Podcast](https://www.revolt.bi/insane-data-podcast-cz/)
* [Privacy policy](https://www.revolt.bi/privacy-policy/)
* [Cookies](https://www.revolt.bi/cookies/)

### Kariéra

* [Volná místa](https://www.revolt.bi/kariera/#volna-mista)

[![](https://www.revolt.bi/wp-content/uploads/2023/11/revolt_facebook-icon.svg)](https://www.facebook.com/revoltbi/)
[![](https://www.revolt.bi/wp-content/uploads/2023/11/revolt_github-icon.svg)](https://github.com/RevoltBI)
[![](https://www.revolt.bi/wp-content/uploads/2023/11/revolt_linkedin-icon.svg)](https://www.linkedin.com/company/revolt-bi/)
[![](https://www.revolt.bi/wp-content/uploads/2023/11/revolt_twitter-icon.svg)](https://twitter.com/datapunkers)
[![](https://www.revolt.bi/wp-content/uploads/2023/12/square-instagram.svg)](https://www.instagram.com/revolt.bi)

© 2026 Revolt.BI

[Prohlášení o ochraně osobních údajů](https://www.revolt.bi/privacy-policy/)