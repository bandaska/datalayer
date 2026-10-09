# URL: https://nazakladedat.cz/co-je-bigquery/

Close

* [Newsletter](https://nazakladedat.cz/newsletter/)
* [GTM šablony](https://nazakladedat.cz/gtm-sablony/)
* [Rozcestník](https://nazakladedat.cz/rozcestnik/)
* [Kontakt](https://nazakladedat.cz/kontakt/)

##### Newsletter

[Přihlásit se k newsletteru](/newsletter/)
  
  

Přihlas se k odběru newsletteru. Jednou za čas ti pošlu odkaz na nový článek.

Vyhledávání



##### Nejnovější příspěvky

* [Co vše mám kontrolovat při redesignu webu z pohledu PPC reklam](https://nazakladedat.cz/co-vse-kontrolovat-pri-redesignu-webu-z-pohledu-ppc-reklam/)
* [Co jsou symboly značky](https://nazakladedat.cz/co-jsou-symboly-znacky/)
* [Co má obsahovat stránka o dopravě na e-shopu](https://nazakladedat.cz/co-ma-obsahovat-stranka-o-doprave-na-e-shopu/)
* [Co je Meta CAPI a kdy se vyplatí](https://nazakladedat.cz/co-je-meta-capi-a-kdy-se-vyplati/)
* [Jak přidat přístup k e-shopu v Mergadu](https://nazakladedat.cz/jak-pridat-uzivatele-do-mergada/)

### [nazakladedat.cz](https://nazakladedat.cz)

Návody pro PPC specialisty

* [Newsletter](https://nazakladedat.cz/newsletter/)
* [GTM šablony](https://nazakladedat.cz/gtm-sablony/)
* [Rozcestník](https://nazakladedat.cz/rozcestnik/)
* [Kontakt](https://nazakladedat.cz/kontakt/)

# Co je BigQuery

15. 2. 2024

 

Google BigQuery je rychlá a [levná](https://cloud.google.com/bigquery/pricing) databáze od Googlu, která běží v rámci Google Cloud platform.

![](https://nazakladedat.cz/wp-content/uploads/2024/02/Logo-Google-BigQuery.jpg)

Logo Google BigQuery

A právě přítomnost v ekosystému Googlu je ideální pro její využití při práci s online marketingovými daty.

## GA4 a BigQuery

[Google Analytics 4](https://nazakladedat.cz/co-jsou-google-analytics-4/) mají možnost si zdarma naměřená data do BigQuery přesouvat. Stačí si [GA4 a BigQuery propojit](https://nazakladedat.cz/jak-nastavit-export-ga4-dat-do-bigquery/). Funguje to tak, že GA4 vytvoří v BigQuery vždy za předchozí den tabulku s naměřenými daty. Existuje i druhý typ exportu pro přenos dat už v průběhu dne, ale ten je specifický.

Výhodou tohoto propojení je, že pak v BigQuery máš **všechna naměřená data** a můžeš nad nimi stavět reporty. Již tě tak nebude trápit omezená retence dat, [thresholding](https://nazakladedat.cz/co-znamena-thresholding-ga4/) či kardinalita reportů.

Nevýhodou ovšem je, že v BigQuery máš jen surová data. Takže i prosté zjištění zdroje návštěvy je potřeba si dopočítat. Též musíš řešit atribuční modelování či napojení dat z [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/). V exportu z GA4 totiž máme jen gclid parametry a nevidíme tak ani informaci o kampani z Google Ads, která návštěvu přivedla. A ještě pozor na to, že již vyexportovaná data se mohou ještě několik dní zpětně měnit.

Z těchto důvodů tak práce s GA4 daty v BigQuery není nijak lepší či nadřazená práci s daty v rozhraní či [Google Data Studiu](https://nazakladedat.cz/co-je-google-data-studio/). Jde o další pohled na data, který má v některých případech opodstatnění a smysl, jindy je zbytečný.

![](https://nazakladedat.cz/wp-content/uploads/2024/02/Ukazka-GA4-dat-v-BigQuery-1024x378.jpg)

Ukázka GA4 dat v BigQuery

## K čemu využít BigQuery v online marketingu

Realita je taková, že většina **malých a středních webů** BigQuery vůbec nepotřebuje. U [svých klientů](https://www.rajtmajer.cz/reference/) se snažím vždy hledat nejlevnější a udržitelnou cestu a tak dost často stačí Google tabulky a pár skriptů.

Pokud už je ale dat **velké množství** a nebo je potřeba data složitěji **přepočítávat a kombinovat** s jinými datovými zdroji, pak už BigQuery či jiná databáze přijde vhod.

Nejčastěji tak Google BigQuery využívám v těchto případech:

### GA4 vzorkují

Pokud do GA4 měříš velké množství interakcí či má web vysokou návštěvnost, začne rozhraní GA4 při vytváření některých typů reportů **vzorkovat (samplovat)**. Ve výsledku tak reporty zjednodušeně řečeno netvoří nad všemi daty, ale jen nad jejich částí. A to je občas pro použitelnost reportu problém.

V tom případě je řešením nastavit si [export GA4 dat do BigQuery](https://nazakladedat.cz/jak-nastavit-export-ga4-dat-do-bigquery/) a reporty pak stavět nad nimi.

### Nedostupnost detailních dat v GA4 po 14 měsících

GA4 uchovávají detailní data o návštěvnosti pouze 14 měsíců. Říká se tomu **retence dat**. Po této době tak nelze dělat detailní analýzy v sekci průzkumy.

Neznamená to, že by z GA4 po 14 měsících data zmizela. Napočítané agregované přehledy tam zůstávají i dál, ale problém nastane, když se pak chceš podívat na něco, co **v agregovaných tabulkách není**.

### Vlastní zpracování dat z Google Search Console

[Google Search Console](https://search.google.com/search-console/about) je mocný nástroj pro SEO specialisty. Jeho rozhraní má ovšem své limity a tak je někdy efektivnější si data vytáhnout právě do BigQuery a nad nimi pak dělat analýzy či reporty vlastní.

### Reporting dat z Mety či Google Ads

Detailní data z [Google Ad](https://nazakladedat.cz/co-jsou-google-ads/)s či z Meta reklamy je možné si do Big Query exportovat a pak zpracovávat či propojovat s dalšími datovými zdroji.

### Integrace více datových zdrojů

V případě složitější práce s daty se často nasazuje tzv. **[ETL proces](https://cs.wikipedia.org/wiki/Extract,_transform,_load).** Ten spočívá ve vytažení dat ze zdrojových systémů, jejich transformaci a následném uložení pro další zpracování či reportování.

Pro provoz ETL procesu se využívají nástroje jako [Keboola](https://www.keboola.com/) či součásti [Google Cloud Platform](https://console.cloud.google.com/apis/dashboard?hl=cs) a BigQuery pak slouží jako jedna z možností, kam výsledná data levně uložit.

A výhodou BigQuery pak je, že se snadno napojí na [Google Data Studio](https://nazakladedat.cz/co-je-google-data-studio/), kde data vizualizuješ. Načítání Google Data Studia je pak nad daty z BigQuery velmi rychlé a cenově rozumné.

Pokud o něco takového máš zájem, [dej mi vědět.](https://nazakladedat.cz/kontakt/)

## Jak s daty v BigQuery pracovat

S daty v BigQuery můžeš pracovat **přímo v BigQuery Studiu** či s pomocí dalších nástrojů Google Cloud Platform.

Někdy ale bývá výhodnější si data z BigQuery vytáhnout jinam, např. do **Kebooli**, tam zpracovat a pak zpět do BigQuery uložit.

K datům v BigQuery se lze také připojit z **Google Sheets** či je lze upravovat přes **Google Apps Script**. Jen ale pozor, že takový skrypt může data i mazat a tak doporučuji mu přístup udělit přes uživatele jen s read právy.

Vyhledávání

##### Newsletter

[Přihlásit se k newsletteru](/newsletter/)
  
  

Přihlas se k odběru newsletteru. Jednou za čas ti pošlu odkaz na nový článek.

[![František Rajtmajer](https://nazakladedat.cz/wp-content/uploads/2019/06/frantisek_profilovka_svetla-300x279.jpg)](https://nazakladedat.cz/wp-content/uploads/2019/06/frantisek_profilovka_svetla.jpg)

Jsem František Rajtmajer a na volné noze pomáhám klientům jako [PPC specialista s přesahem do webové analytiky](https://www.rajtmajer.cz/).

Pokud máš nápad na vylepšení tohoto webu nebo ti tu něco chybí, [ozvi se mi](https://nazakladedat.cz/kontakt/).

[Zpět nahoru](#top)

Návody pro tebe tvoří František Rajtmajer. Jako [PPC specialista s přesahem do webové analytiky](https://www.rajtmajer.cz/) nastavuje měření, vyhodnocuje data, řídí PPC kampaně a pomáhám podnikatelům s rozhodováním na základě dat.   
[Zásady ochrany osobních údajů](/zasady-ochrany-osobnich-udaju/)  
[Používání cookies](/pouzivani-cookies/)

Search: