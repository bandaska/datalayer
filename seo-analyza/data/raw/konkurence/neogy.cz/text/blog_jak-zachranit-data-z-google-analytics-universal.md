# URL: https://www.neogy.cz/blog/jak-zachranit-data-z-google-analytics-universal/

# Jak zachránit data z Google Analytics Universal

12. 06. 2023 |
[Sdílet](#)

Vaše data v Google Analytics Universal budou dostupná jen do června 2024. Všechna historická měření pak budou ztracena. Naštěstí existuje hned několik možností jak je zachovat i pro pozdější zpracování.

![](https://www.neogy.cz/wp-content/uploads/2023/06/sejf.jpg?v=1751548241)

## **Export dashboardů do PDF**

Pokud máte malý web a stačí vám shromáždit data ve statické podobě “ke čtení”, můžete je exportovat do souboru PDF. Je to velmi jednoduchý a rychlý způsob. Data už ale nebude možné upravovat, agregovat ani filtrovat, což výrazně sníží jejich hodnotu.

![](https://www.neogy.cz/wp-content/uploads/2023/06/Snimek-obrazovky-2023-06-01-v-16.48.13-1024x494.png)

*Ukázka exportu v pdf.*

Export do PDF je *opravdu* jednoduchý.

* V UA zvolíte vlastní dimenze, metriky a období měření. Údaje můžete exportovat po měsících, letech atd.
* V pravém horním rohu kliknete na ikonu *Exporty* a zvolíte formát *PDF*.

![](https://www.neogy.cz/wp-content/uploads/2023/06/Snimek-obrazovky-2023-06-01-v-16.35.25.png)

* Stažený soubor uložíte a je to. Můžete se k němu vracet, kdykoliv bude třeba.

## **Export dashboardů do Google Sheets**

Chcete-li s ukládanými daty dále pracovat (dejme tomu porovnávat je s novými daty z Google Analytics 4), exportujte je do Google Sheets. Zachováte možnost základního filtrování či agregování.

Znalosti ke zvládnutí takových úkolů v Google Sheets nejsou nijak ohromující a u laskavého čtenáře/čtenářky je samozřejmě předpokládáme.

Postup exportu:

* Vyberete sledovací období a metriky, které vás zajímají, a exportujete je do tabulek Google. Postup je obdobný jako u PDF.
* Zvolené metriky najdete v jednotlivých sloupcích exportované tabulky.

![](https://www.neogy.cz/wp-content/uploads/2023/06/Snimek-obrazovky-2023-06-01-v-16.50.44.png)

*Exportované metriky se zobrazí ve sloupcích tabulky.*

## **Export surových dat do BigQuery**

Oba výše popsané způsoby exportu vynikají především jednoduchostí. Pro náročnější uživatele, typicky majitele e-shopů a firem s potřebou detailního sledování [webového výkonu](https://www.neogy.cz/sluzby/webova-analytika/), existuje další, pokročilejší způsob zálohování, který zachová 100 % potenciálu zdrojových dat, a ještě něco přidá navíc.

Jedná se o export do externího cloudového úložiště BigQuery.

Má i nějaké nevýhody?

* Export je náročnější a vyžaduje zapojení specialistů.
* Pro přístup do BigQuery potřebujete účet na Google Cloud Platform.
* Jde o placený nástroj, pokud vám ale na vašich datech opravdu záleží, investice se určitě vyplatí.

Tím nevýhody končí.

Zásadní výhodou datového úložiště BiqQuery je **možnost absolutního propojení dat z UA a GA4**, takže s nimi můžete pracovat společněm bez ohledu na původ.

GA4 mají konektor pro export do BigQuery již v základním nastavení **bezplatně**. Universal Analytics takový konektor nenabízí, lze ho ale doinstalovat.

Export do BigQuery nabízí “bezztrátové” využití dat z UA v prostředí GA4, ale i **neomezené zálohování** dat z GA4 samotných. Zatímco GA4 data uchovávají jen po určitou dobu, v BigQuery budou dostupná bez jakéhokoliv časového omezení.

Exportem dat do BigQuery nad nimi získáte i větší kontrolu, protože se stanete jejich vlastníky. Data uložená v GA4 patří Googlu.

Do BiqQuery se exportují **surová data s maximální hodnotou pro zpracování a interpretace**. K nim můžete využít vizualizační nástroje jako Looker Studio bez limitu zobrazených dat, kterým práci ztěžují přímé konektory z GA4.

Konečně, BigQuery podporuje **integraci s dalšími analytickými nástroji**, platformami a CRM systémy.

Díky popsaným vlastnostem, flexibilitě a možnostem dotazování je BigQuery mocným nástrojem i pro velmi rozsáhlé a komplexní analýzy dat.

## **Potřebujete s exportem poradit?**

Chcete-li se záchranou dat z Google Universal Analytics pomoci nebo jen navrhnout optimální způsob exportu, [kontaktujte nás](https://www.neogy.cz/kontakt/). Rádi vám s exporty (i čímkoliv dalším v oblasti [webové analytiky](https://www.neogy.cz/sluzby/webova-analytika/)) pomůžeme.

Autor: [Karel Melecký](https://www.neogy.cz/tym/karel-melecky/), s přispěním
[Zuzany Houdek Čermákové](https://www.neogy.cz/tym/zuzana-houdek-cermakova/)

[Sdílet](#) 






[Poslat komentář autorovi](mailto:info@neogy.cz)

[VŠECHNY ČLÁNKY](https://www.neogy.cz/blog/)

##### Doporučené články

## [Jak to s námi funguje: první schůzka](https://www.neogy.cz/blog/prvni-schuzka/)

28. 07. 2025

První setkání s námi je zcela nezávazné a zdarma. Chceme pochopit vaše potřeby a očekávání.

## [Umělá inteligence: nástroje pro marketing](https://www.neogy.cz/blog/umela-inteligence-nastroje-pro-marketing/)

02. 09. 2024

Přehled jazykových modelů vhodných na různé úkoly. Zpracování textu, obrázků, videí a zvuku. Pomoc se sběrem a anaýzou dat.

### Návody

* [Všechny návody](https://www.neogy.cz/navody/)

### Služby

* [Všechny služby](https://www.neogy.cz/?page_id=17)