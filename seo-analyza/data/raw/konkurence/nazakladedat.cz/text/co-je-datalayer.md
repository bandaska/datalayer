# URL: https://nazakladedat.cz/co-je-datalayer/

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

# Co je dataLayer

16. 6. 2022

 

DataLayer je javascriptová proměnná, která v analytice slouží k **předávání dat** do [Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/) (GTM). Do češtiny se někdy překládá jako **datová vrstva**, ale analytici mu říkají prostě dataLayer.

![](https://nazakladedat.cz/wp-content/uploads/2022/03/Ukazka-dataLayeru-1.jpg)

Ukázka vložení dat do dataLayeru

## K čemu dataLayer slouží

U řady marketingových a analytických kódů ti nestačí změřit načtení stránky. Někdy potřebuješ odeslat i **doplňující data**. Např. po úspěšné objednávce na eshopu chceš změřit i hodnotu objednávky, jaké v ní byly produkty či kolik bylo objednáno kusů. Údaje v datové vrstvě využiješ třeba i při implementaci [rozšířených konverzí do Google Ads](https://nazakladedat.cz/jak-nastavit-rozsirene-konverze-v-google-ads/).

Aby bylo co měřit, je třeba tyto údaje Google Tag Manageru předat. A právě toto **předání údajů** se odehrává přes dataLayer.

Celý proces funguje tak, že **ve zdrojovém kódu** webu naplníš požadované údaje do dataLayeru, z něj si je přečte GTM a předá je měřícím kódům.

Díky tomu nemusíš např. na děkovací stránce eshopu vkládat hodnotu objednávky pro každý měřící kód zvlášť. Hodnotu objednávky umístíš **pouze jednou do dataLayeru** a odtud ji GTM předá do [Google Analytics](https://nazakladedat.cz/co-jsou-google-analytics-4/), [měření konverzí Google Ads](https://nazakladedat.cz/jak-merit-konverze-v-google-ads/), [měření konverzí Sklik](https://nazakladedat.cz/jak-merit-konverze-v-skliku/) či do [Facebook pixelu](https://nazakladedat.cz/jak-nastavit-facebook-pixel-s-pomoci-gtm/). Vše samozřejmě dle tebou definovaných pravidel.

DataLayer lze využít dokonce i k **předávání dat mezi jednotlivými značkami** či k řízení pořadí jejich spuštění.

## Vkládání hodnot do dataLayeru

Aby vše správně fungovalo, je potřeba myslet na to, že dataLayer je **pole**, na které se GTM při svém načtení naváže. Proto je potřeba dataLayer pohlídat, že si vkládáním hodnot již vytvořený dataLayer nepřepíšeme.

Ověřenou best practice se tak stalo veškeré příkazy pro práci s dataLayerem začínat příkazem ***window.dataLayer = window.dataLayer || [];***, který nové pole vytvoří jen v případě, že ještě neexistuje.

Pokud chceš mít údaje dostupné k použití ve značkách, které spouštíš na pravidlo All pages, musíš dataLayer naplnit při zobrazení stránky ještě před kódem GTM.

![dataLayer plněný před kódem GTM](https://nazakladedat.cz/wp-content/uploads/2022/03/dataLayer-plneny-pred-kodem-GTM.jpg)

DataLayer plněný před kódem GTM

Ne vždy máš ale údaje dostupné **již při načtení stránky.** Když chceš například měřit přidání produktu do košíku, tak informaci o přidaném produktu máš až v okamžiku stisknutí tlačítka přidat do košíku.

V takovém případě lze informace do dataLayeru **přidat i později přes takzvaný push.** Technicky jde o volání funkce push nad dataLayerem, jejíž parametrem je objekt.

![](https://nazakladedat.cz/wp-content/uploads/2022/03/Ukazka-dataLayeru-1.jpg)

DataLayer push

Důležitou částí kódu je řádka *‚event‘: ‚addToCart‘,*. Google Tag Manager totiž poslouchá, co se s polem dataLayer děje. A kód výše pochopí jako vložení eventu addToCart a doplňujících proměnných.

## Jak se v GTM dostaneš k datům v dataLayeru

Pro práci s daty v dataLayer slouží v GTM **proměnné**.

![Proměnné v levém menu GTM](https://nazakladedat.cz/wp-content/uploads/2022/06/Promenne-v-levem-menu-GTM.jpg)

Proměnné v levém menu GTM

Stačí si založit novou proměnnou **typu dataLayer** a správně vyplnit její název tak, jak se v dataLayeru jmenuje. Konvencí je **začínat název takové proměnné textem *dl.***, aby bylo hned jasné, že jde o proměnnou z dataLayeru.

![Vytvoření proměnné v GTM](https://nazakladedat.cz/wp-content/uploads/2021/07/Vytvoreni-promenne-v-GTM-1024x686.jpg)

Vytvoření proměnné v GTM

Údaje v dataLayeru máš někdy **strukturovány do objektů**.

![Datalayer strukturovaný do objektů](https://nazakladedat.cz/wp-content/uploads/2022/06/Datalayer-strukturovany-do-objektu.jpg)

Datalayer strukturovaný do objektů

Na nižší úroveň do jednotlivých objektů se tak dostaneš přes tzv. **tečkovou notaci** jako např. *ecommerce.purchase.actionField.id*.

![Proměnná s tečkovou notací](https://nazakladedat.cz/wp-content/uploads/2022/06/Promenna-s-teckovou-notaci-1024x649.jpg)

Proměnná s tečkovou notací

## Použivání dat z dataLayeru

Proměnnou s daty z dataLayeru pak použiješ při **nastavování značek**. Stačí kliknout na „lego“ kostičku vpravo v poli a otevře se ti seznam dostupných proměnných.

![Použití proměnné v nastavení značky](https://nazakladedat.cz/wp-content/uploads/2022/06/Pouziti-promenne-v-nastaveni-znacky.jpg)

Použití proměnné v nastavení značky

Použít ji můžeš i **v HTML značce** s pomocí dvou složených závorek.

![Proměnná v HTML značce](https://nazakladedat.cz/wp-content/uploads/2022/06/Promenna-v-HTML-znacce.jpg)

Proměnná v HTML značce

Nebo i v jiných **proměnných typu JavaScript.**

![Proměnná v javascriptové proměnné](https://nazakladedat.cz/wp-content/uploads/2022/06/Promenna-v-javascriptove-promenne.jpg)

Proměnná v javascriptové proměnné

## Závěr

Koncept dataLayeru výrazně usnadňuje práci při **nasazování nových měřících kódů**. Navíc znovupoužití dat, která jsou v dataLayeru již jednou vložena, přispívá k **udržení čistoty dat** napříč různými systémy.

Záludnost dataLayeru však spočívá v jeho správné implementaci. Při nesprávném technickém provedení nejen že nepřináší výhody, ale může dokonce **škodit**, zpomalovat web a špinit naměřená data.

Potrápit tě také může problém s [perzistencí dataLayeru](https://nazakladedat.cz/co-je-perzistence-datalayeru/).

Nezapomeň si tak dataLayer na svém webu **zkontrolovat**.

## Mohlo by tě zajímat

* [Co je Google Tag Manager](https://nazakladedat.cz/co-je-google-tag-manager/)
* [Jak vyřešit duplicitní transakce v Google Analytics](https://nazakladedat.cz/duplicitni-transakce-v-google-analytics-jak-se-jich-zbavit/)
* [Co je míra okamžitého opuštění](https://nazakladedat.cz/co-je-mira-okamziteho-opusteni/)

Nebo se pro inspiraci podívej do [rozcestníku článků.](https://nazakladedat.cz/rozcestnik/)

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