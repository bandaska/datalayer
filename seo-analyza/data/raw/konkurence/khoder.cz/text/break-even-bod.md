# URL: https://www.khoder.cz/break-even-bod

1. [Domů](/)
2. Break even point pro e-shop


Průvodce · E-commerce metriky

# Break even point pro e-shop

Bod zlomu rozhoduje, jestli reklama vydělává, nebo jen vypadá zisková. Ukážu vám vzorec, rozdíl mezi break-even ROAS a MER a proč se musí počítat z čistého zisku, ne z obratu.

[Rychlá odpověď](#rychla-odpoved)
[Jak ho počítá náš report](/reporting-pro-eshopy)

Bod zlomu se počítá z reálných dat e-shopu

![](assets/icon/shoptet-ico.png)Shoptet
![](assets/icon/ga.webp)Google Analytics 4
![](assets/icon/google-ads-icon.webp)Google Ads
![](assets/icon/sklik.png)Sklik
![](assets/icon/heureka-ico.png)Heuréka

Rychlá odpověď

Aktualizováno 15. 5. 2026 · Tomáš Khoder, e-commerce konzultant

## Jak spočítám break even point svého e-shopu?

**Break even point** (bod zlomu) je hranice, kde se tržby rovnají nákladům — nad ní e-shop vydělává, pod ní prodělává. Spočítáte ho jako **fixní náklady ÷ (cena − variabilní náklad na kus)**. Pro reklamu se používá **break-even ROAS = 1 ÷ marže** a jeho přesnější obdoba **break-even MER** přes všechny kanály dohromady.

Klíčové je počítat z **čistého zisku po nákupní ceně zboží, dopravě, platbě a provizích** — ne z obratu. Jinak je bod zlomu zkreslený a reklama, která „vypadá zisková”, reálně prodělává.

01 · Základ

## Co je break even point a proč ho znát

**Break even point**, česky bod zlomu nebo bod zvratu, je objem prodeje, při kterém se tržby přesně rovnají nákladům — zisk je nula. Každá objednávka pod touto hranicí prodělává, každá nad ní vydělává. U e-shopu to není jedno číslo na celý rok: mění se s marží, cenou dopravy, platební metodou i náklady na reklamu.

### Fixní vs variabilní náklady

Aby výpočet dával smysl, musíte náklady rozdělit na dvě skupiny:

* **Fixní náklady** — platíte je bez ohledu na počet objednávek: nájem skladu, mzdy, předplatné nástrojů, paušál za e-shop.
* **Variabilní náklady** — rostou s každou objednávkou: nákupní cena zboží, doprava, platební metoda, provize Heuréky či Zboží.cz, obalový materiál.

Rozdíl mezi cenou a variabilním nákladem na jednu objednávku je **krycí příspěvek** (contribution margin) — částka, kterou jedna objednávka přispěje na pokrytí fixních nákladů a teprve potom na zisk.

### Vzorec bodu zlomu krok za krokem

Bod zlomu v počtu objednávek získáte, když fixní náklady vydělíte krycím příspěvkem na objednávku:

Bod zlomu (počet objednávek)

fixní náklady ÷ (průměrná cena − variabilní náklad na objednávku)

Příklad: fixní náklady 120 000 Kč/měs., průměrná objednávka 1 500 Kč, variabilní náklad 1 050 Kč → 120 000 ÷ 450 = **267 objednávek**, než e-shop začne vydělávat.

Pro reklamní rozhodování je praktičtější vyjádřit bod zlomu přes návratnost reklamy — tomu se věnuje další sekce.

02 · Reklama

## Break-even ROAS vs break-even MER

### Proč ROAS u e-shopu lže

ROAS (return on ad spend) říká, kolik korun obratu přinesla koruna reklamy. Problém: **počítá obrat, ne zisk**. Ignoruje nákupní cenu zboží, dopravu i provize. Kampaň s ROAS 8 vypadá skvěle, ale u produktu s 15% marží reálně prodělává. Proto se místo holého ROAS sleduje **break-even ROAS** — hranice, pod kterou kampaň ztrácí peníze:

Break-even ROAS

1 ÷ hrubá marže  
(marže 25 % → break-even ROAS = 1 ÷ 0,25 = 4,0)

Teprve ROAS nad touto hodnotou reklama reálně vydělává po marži. Pod ní jen „vypadá zisková”.

### Break-even MER napříč Google, Sklik i Meta

ROAS se počítá per platforma a každá si přivlastní stejnou objednávku. **MER** (marketing efficiency ratio) řeší celkové tržby ku celkovým marketingovým nákladům přes **všechny kanály dohromady** — Google Ads, Sklik, Meta, Heuréka. Je odolnější vůči atribučnímu šumu a lépe odpovídá realitě pokladny.

Break-even MER

celkové marketingové náklady ÷ hrubá marže (%)

Pod tímto MER marketing jako celek prodělává, nad ním vydělává. Sledovat denně vedle čistého zisku — ne ROAS v rozhraní jedné platformy, který sčítá konverze dvakrát.

Detailněji rozebírám i navazující metriku [konverzní poměr (conversion rate)](/konverzni-pomer) — bod zlomu a konverze spolu úzce souvisí.

03 · V reportu · Přehled

## Bod zlomu vidíte denně, ne jednou za čtvrtletí.

Ruční výpočet bodu zlomu z pěti systémů nikdo nedělá každý den. Proto se Shoptet, GA4 a všechny reklamní účty napojí do jednoho **e-commerce reportu**, který každé ráno spočítá čistý zisk po všech nákladech a postaví MER proti bodu zlomu — na jedné obrazovce.

* Čistý zisk po nákupní ceně, reklamě, dopravě, platbách i provizích
* MER vůči bodu zlomu — vidíte hned, jestli reklama jako celek vydělává
* Srovnání s loňskem a předchozím obdobím rovnou vedle čísla

[Reporting pro e-shopyarrow\_outward](/reporting-pro-eshopy)

lockreport.khoder.cz/prehled

![Celkové shrnutí v e-commerce reportu: tržby, hrubý a čistý zisk, MER a predikce tržeb](assets/shots/overview-v3.webp)

Čistý zisk
po všech nákladech

trending\_up
MER vs bod zlomu

04 · Pozor na

## Časté chyby při počítání bodu zlomu

* **Počítání z obratu místo z čistého zisku** — nejčastější chyba. Bez [nákupní ceny](/pripadova-studie-prijem-zbozi#ceny), dopravy a provizí vyjde bod zlomu falešně nízko a ztrátové kampaně vypadají ziskově.
* **Záměna gross profit a net profit** — hrubý zisk (po nákupní ceně) není čistý zisk (po reklamě, dopravě, platbách a fixních nákladech). Rozhoduje net profit.
* **ROAS místo MER** — sčítání ROAS z více platforem nadhodnocuje výkon, protože každá platforma si přivlastní stejnou objednávku. Pro celkový pohled používejte MER a break-even MER.
* **Ignorování unit economics** — bez znalosti krycího příspěvku na jednu objednávku nelze říct, kolik objednávek e-shop potřebuje, aby pokryl fixní náklady.
* **Statický bod zlomu** — marže, cena dopravy i provize se v čase mění. Bod zlomu je potřeba přepočítávat průběžně, ideálně automaticky z reálných dat.

Bod zlomu je užitečný jen tehdy, když ho vidíte aktuálně a opřený o reálná čísla. Jak to vypadá v praxi ukazuje [reporting pro e-shopy](/reporting-pro-eshopy) — čistý zisk a MER vůči bodu zlomu každý den, bez ručního stahování dat. Pro koncept bodu zlomu viz též [Bod zvratu na Wikipedii](https://cs.wikipedia.org/wiki/Bod_zvratu) a metodiku ROAS v [nápovědě Google Ads](https://support.google.com/google-ads/).

![Tomáš Khoder, e-commerce konzultant z Litoměřic](assets/khoder-transparent.webp)

Praxe
10+ let
v e-commerce

5,0

★★★★★

16 recenzí  
na Googlu

O mně · Kdo to počítá

## Tomáš Khoder.

Přes **10 let** se věnuji e-shopům — od placených kampaní přes analytiku po reporting. Bod zlomu a čistý zisk počítám klientům denně, ne jednou za kvartál od oka.

* **10+ let** praxe v e-commerce
* Sídlo v **Litoměřicích** · klienti po celé ČR i SK
* **5,0 / 5,0** ze 16 hodnocení na Googlu

[Nezávazně poptat konzultaciarrow\_outward](/reporting-pro-eshopy#kontakt)
[Více o mně na khoder.cz](/)




Reference · Co říkají klienti

## Nejlepší argumenty vám dají moji klienti.

Hodnocení chodí přímo na Google — bez editace, bez filtrů. Čtěte si to samé, co vidí každý, kdo si mě vygoogluje před první schůzkou.

5,0

★★★★★

16 recenzíprůměr 5,0 přímo na Googlu

[Zobrazit všechny arrow\_outward](https://www.google.com/search?q=tom%C3%A1%C5%A1+khoder)

★★★★★

S panem Khoderem spolupracujeme už delší dobu a musím říct, že jsme naprosto spokojení. Pomáhá nám s nastavením měření konverzí, analytiky a přehledného reportingu pro naše klienty – všechno funguje perfektně a jeho reporting je opravdu na špičkové úrovni. Oceňuji hlavně jeho rychlost, preciznost a skvělou komunikaci. Na všem se dá domluvit a naše požadavky řeší doslova obratem. Díky tomu máme jistotu, že měření konverzí běží na 100 % správně, což je pro naši agenturu klíčové při správě kampaní. Děkujeme za spolupráci a určitě tě můžeme s klidným svědomím doporučit dál.

Číst celou recenzi →

T

Tomáš Veits

CEOPortine.czListopad 2025

★★★★★

Spolupráce s panem Khoderem je pro náš tým velkým přínosem. Jeho přístup je mimořádně profesionální a pragmatický – vždy se opírá o reálná data, vlastní zkušenosti a jasné argumenty. Od prvního převzetí našich marketingových kampaní se zaměřil na jejich efektivitu a návratnost, a výsledky na sebe nenechaly dlouho čekat. Výrazně se zlepšila výkonnost i přehlednost našich PPC aktivit. Pan Khoder nám navíc připravil velmi podrobnou analýzu e-shopu s návrhem desítek konkrétních vylepšení. Vše systematicky rozčlenil podle priorit a náročnosti implementace, což nám výrazně usnadnilo rozhodování o dalších krocích v rozvoji webu. Velmi si vážíme jeho schopnosti komunikovat složité věci srozumitelně, poskytovat kvalitní reporty a být skutečným partnerem, který přemýšlí v širším kontextu byznysu, ne jen v číslech z kampaní. Doporučujeme spolupráci s panem Khoderem každému, kdo to myslí s online marketingem a webem vážně.

Číst celou recenzi →

![RehaVitalCare s.r.o.](assets/logo-rehavita.png)

Martin Skala

ManažerRehaVitalCare s.r.o.Srpen 2025

★★★★★

Na spolupráci s panem Khoderem oceňuji především perfektně připravené podklady, podle kterých se i neprofesionál okamžitě orientuje a může dosáhnout vytyčeného cíle. Profesionálem je tady on. Určitě s ním budeme spolupracovat i v budoucnu a všem ostatním zájemcům můžeme jeho služby jedině doporučit. Pana Khodera jsme oslovili na základě doporučení, abychom zefektivnili měření a analytiku našich webů a kampaní. Jeho odborný přístup a detailní analýzy nás úspěšně dovedly k vytčenému cíli. Vedle stoprocentní profesionality oceňujeme i bezproblémovou komunikaci a bezchybné podklady, které nám umožnily implementovat potřebné změny hned napoprvé. Spolupráci s ním s klidným svědomím doporučujeme.

Číst celou recenzi →

P

Pavel Kuchár

DesignérJežek software s.r.o.Květen 2026

★★★★★

S panem Khoderem máme výbornou zkušenost – je velmi vstřícný, nemá problém za námi kdykoliv osobně přijet, což si v dnešní době opravdu ceníme. Skvělé jsou především jeho perfektně zpracované reporty, které jsou přehledné, praktické a hned se s nimi dá pracovat. Má široký přehled v e-commerce, vždy přináší nové pohledy a je na něm vidět opravdová snaha posouvat věci směrem k maximální efektivitě. Spolupráce s ním je přínosná a rozhodně ho můžeme doporučit.

Číst celou recenzi →

J

Jan Kalista

JednatelHealth Brands s.r.o.Září 2025

★★★★★

S Tomášem byla skvělá komunikace, vše trpělivě vysvětlil, nastavil a otestoval. Děkuju za přátelské jednání a myslím, že v budoucnu jeho služeb dál využiji.

Číst celou recenzi →

J

Jan Barančík

OwnerDronista.czBřezen 2026

★★★★★

Spolupráce s panem Tomášem Khoderem je vždy naprosto bezproblémová. Velice oceňujeme jeho rychlost, s jakou řeší vzniklé problémy na našem e-shopu, dále pak smysl pro detail a skutečné nasazení – vždy dokáže nabídnout funkční řešení. Doporučujeme pana Khodera jako spolehlivého partnera pro tvorbu i správu e-shopu.

Číst celou recenzi →

I

Ilona Kocmanová

JednatelkaZlatnictví ZlatíčkoListopad 2025

★★★★★

Děkuji Tomášovi za skvělý přístup a vhled při tvorbě webu, určitě se budu těšit na další spolupráci do budoucna. Výsledkem jsme nadšeni všichni ve firmě. Vřele doporučuji!

Číst celou recenzi →

R

Radka Balšánková

SpolečníkCITUS s.r.o.Duben 2025

★★★★★

Velice si vážím osobního přístupu a empatie ze strany pana Khodera. Kampaně jsou vždy navrženy s citem a dle potřeb zákazníka a fungují velmi dobře.

Číst celou recenzi →

R

Radek Ploc

JednatelStudio PLOC s.r.o.Listopad 2025

★★★★★

Díky perfektní spolupráci je několik do detailu vyladěných webů za námi a minimálně 2 před námi. V každém odvětví je těžké najít toho pravého – spolehlivého profesionála na svém místě, který dodá perfektní služby, kde spolupráce nedrhne, a tohle všechno je znát i na výsledku. Tak teď máte štěstí, že tuhle recenzi čtete, už jste totiž našli.

Číst celou recenzi →

A

Alžběta Mrázová

JednatelkaMácha Hotels s.r.o.Únor 2024

★★★★★

Chtěl bych poděkovat panu Khoderovi za pomoc s nastavením Google účtů a také za služby, které jsem požadoval se svou propagací na Google. Vyzkoušel jsem více možností a pokaždé to dopadlo špatně. U pana Khodera musím říct, že na čem jsme se domluvili, tak to tak bylo. Za mě skvělá práce a milý přístup. Ještě jednou Vám moc děkuji a jsem si jistý, že ve spolupráci s Vámi budu nadále pokračovat.

Číst celou recenzi →

V

Václav Zrno

JednatelZÁMEČNICTVÍ & AUTOKLÍČE Chomutov s.r.o.Listopad 2025



close

★★★★★




FAQ · Často kladené otázky

## Otázky kolem bodu zlomu a čistého zisku.

Jak zjistím skutečný čistý zisk z e-shopu po všech nákladech?expand\_more

**Čistý zisk** je tržba mínus nákupní cena zboží, náklady na reklamu, doprava, platební metody a provize (Heuréka, Zboží.cz, marketplace). Sečíst to ručně z pěti systémů a dělat to denně je nereálné — proto se všechny zdroje napojí do jednoho reportu, který čistý zisk dopočítá automaticky každý den za předchozí den.


Proč je ROAS zavádějící metrika a co používat místo něj?expand\_more

**ROAS** počítá obrat na korunu reklamy, ale ignoruje marži, dopravu i provize. Kampaň s ROAS 8 může být ztrátová, pokud má produkt nízkou marži. Smysl dává **break-even ROAS** (1 ÷ marže) a především **MER** — návratnost přes všechny kanály po odečtení reálných nákladů.


Jak spočítám break-even MER pro svůj e-shop?expand\_more

**Break-even MER** je bod, kdy marketingový zisk přesně pokryje marketingové náklady napříč všemi kanály. Zjednodušeně: celkové marketingové náklady ÷ hrubá marže v procentech. Pod tímto MER reklama jako celek prodělává, nad ním vydělává.


Jaký je rozdíl mezi gross profit a net profit v e-commerce?expand\_more

**Gross profit** (hrubý zisk) je tržba mínus nákupní cena zboží. **Net profit** (čistý zisk) odečítá navíc reklamu, dopravu, platby, provize a fixní náklady. Rozhoduje net profit — gross profit ziskovost přeceňuje a schová ztrátové kampaně.


Proč mi sedí tržby v Shoptetu, ale ne v GA4?expand\_more

GA4 konverze **modeluje a atribuuje** podle session, Shoptet eviduje reálné odeslané objednávky. Rozdíl 10–30 % je běžný. Pro výpočet bodu zlomu se vychází z objednávek (Shoptet nebo ERP) jako zdroje pravdy, GA4 slouží na atribuci kanálů.


Které KPI sledovat každý den, týden a měsíc?expand\_more

**Denně:** tržby, čistý zisk, náklady na reklamu a MER vůči bodu zlomu. **Týdně:** marže po produktech, vývoj kampaní, stav zásob. **Měsíčně:** meziroční srovnání, retence zákazníků a výhled tržeb na další měsíce.

Související

## Pokračujte dál

Navazující průvodci a služby. Kompletní přehled najdete v [rozcestníku služeb a průvodců](/rozcestnik).

percent

#### [Konverzní poměr](/konverzni-pomer)

Conversion rate: vzorec a proč ho číst po kanálech a marži.

diversity\_3

#### [Customer Lifetime Value](/customer-lifetime-value)

Hodnota zákazníka za život a poměr LTV/CAC.

analytics

#### [Reporting pro e-shopy](/reporting-pro-eshopy)

Čistý zisk po všech nákladech, kampaně i sklad v jednom reportu.

Začneme

## Chcete bod zlomu vidět každý den?

Ukážu vám na vašich datech, jak by report počítal čistý zisk a MER vůči bodu zlomu. Úvodní konzultace je zdarma a nezávazná.

[Domluvit konzultaciarrow\_outward](/reporting-pro-eshopy#kontakt)
[Napsat e-mail](mailto:tomas@khoder.cz)

Případové studie [Jak to dopadlo u klientů](/pripadove-studie)