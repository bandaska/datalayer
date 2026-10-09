# URL: https://www.khoder.cz/shoptet-premium-sablony-na-miru

1. [Domů](/)
2. Shoptet Premium šablony na míru


Shoptet Premium · vlastní kód nad platformou

# Shoptet Premium šablony na míru.

Vlastní vzhled je pouze začátek. Skutečně zajímavé jsou funkce, které Shoptet nativně vůbec nemá: vyhledávání na míru nad vlastní databází, graf vývoje ceny, termín doručení jednotlivých dopravců v detailu a pokladně, zobrazená úspora u velkoobchodních ceníků, zobrazení parametrů v kartě produktu, automatické řazení kategorií i produktů a hlavně optimalizovaný nákupní proces košíku a pokladny.

[Chci šablonu na míru](#kontakt)
[Případová studie šablony](/pripadova-studie-shoptet-sablona)

lockvas-eshop.cz/

sharerefresh

![Shoptet Premium šablona na míru, homepage e-shopu s vlastním carouselem a rozcestníkem kategorií](assets/shots/shoptet-eshop-home-ostra.webp)

Modulů k výběru17

Na čem šablony stavím

![](assets/icon/shoptet-ico.png)Shoptet API
databaseVlastní server a databáze
manage\_searchFulltextový index
datasetBigQuery
bug\_reportAutomatické testy
local\_shippingTermíny doručení

Tři vrstvy práce · od vzhledu po vlastní backend

## Co šablona na míru řeší kromě vzhledu.

Hezká šablona se dá koupit v galerii. Koupit nejde **chování e-shopu**: jak se hledá a filtruje, co zákazník vidí v detailu a kolik kroků ho dělí od objednávky.

design\_services

### Vzhled na míru

Design bez stop po šablonovém Shoptetu na blank šabloně. Optimalizovaný pro rychlost, s důrazem na UX a s množstvím funkcí navíc. Design připravím na míru vaší značce a před začátkem implementace ode mě dostanete interaktivní mockup s připraveným designem hlavní stránky, detailu produktu či pokladny.

tune

### Funkce nad rámec platformy

Vyhledávání na míru nad vlastní databází, graf vývoje ceny, termín doručení jednotlivých dopravců v detailu a pokladně, zobrazená úspora u velkoobchodních ceníků, zobrazení parametrů v kartě produktu, automatické řazení kategorií i produktů a hlavně optimalizovaný nákupní proces košíku a pokladny.

database

### Vlastní backend a data

Vyhledávací index nad katalogem, denní snímky cen a prodejní signál z reálné tržby. Do katalogu doplňuji i data, bez kterých šablona nemá co ukázat: filtrační parametry, popisy produktů a texty kategorií. Vlastní služba na vašem serveru, ne pronájem.

01 · Úvodní hero s videi

## Hlavní stránka jako výloha produktů.

Homepage začíná carouselem s **videem nebo fotkou produktu**, cenou a tlačítkem Koupit. Video ukáže produkt v akci líp než fotka a na mobilu se přehrává automatiky.

* Videa i fotky v jednom carouselu, se štítkem akce a cenou
* Na mobilu se videa přehrávají sama, dokud zákazník na carousel nesáhne
* Respektuje nastavení přístupnosti
* Celá karta je odkaz na produkt nebo kategorii

infoVýroba fotek a videí není v ceně.

tuneV konfigurátoru:[Úvodní hero s videi](#konfigurator)webBěží v šabloně

lockvas-eshop.cz/

![Úvodní karusel homepage e-shopu: karty s videem nebo fotkou produktu, cenou a tlačítkem Koupit](assets/shots/shoptet-eshop-hero-ostra.webp)

play\_circleNa mobilu hraje samo

![Mobilní homepage s kartou úvodního karuselu a spodní lištou](assets/shots/shoptet-eshop-mobil-hero-ostra.webp)

02 · Košík, pokladna a termín doručení

## Termín doručení všude, kde na něm záleží.

Objednávkový proces dostane nový vzhled a chování. Šablona přebírá datum doručení ze Shoptetu a **u každého dopravce** přidá datum doručení a vlastní výpočty: závozy, které máte s dopravcem domluvené, třeba sobotní doručení nebo nedělní svoz, a osobní odběr podle otevírací doby. Počítá i se státními svátky.

* Vlastní okno po přidání do košíku
* Kolik zbývá do dopravy zdarma
* Doprava a platba ve skupinách. Mapa s výdejními místy se otevře automaticky.
* Na detailu časová osa Objednáte → Odešleme → Doručíme a okno Možnosti doručení s cenami a termíny dopravců
* „Expedujeme dnes“ na kartách ve výpisu.

linkCenu dopravy podle hmotnosti zásilky ukáže v pokladně modul [Hmotnostní pásma dopravy](#modul-sab-hmotnostni-pasma).

tuneV konfigurátoru:[Košík a pokladna](#konfigurator)webBěží v šabloně[Termín doručení u dopravců](#konfigurator)webBěží v šabloně

lockvas-eshop.cz/mini-retezova-pila-6--aku-24v--2x-lista-2x-retez-bx3307-boxer/

![Vlastní okno Přidáno do košíku na Shoptetu s ukazatelem dopravy zdarma](assets/shots/shoptet-eshop-kosik-ostra.webp)

lockvas-eshop.cz/objednavka/krok-1/

![Druhý krok pokladny: termín doručení u každého dopravce, škála hmotnostních pásem a úspora v rekapitulaci](assets/shots/shoptet-eshop-doprava-ostra.webp)

Termín doručeníu každého dopravce

verified0 rozdílů pokladny proti návrhu

![Mobilní detail produktu s časovou osou Objednáte, Odešleme, Doručíme](assets/shots/shoptet-eshop-mobil-detail-ostra.webp)

03 · Vlastní vyhledávání

## Našeptávač, který rozumí kontextu.

Hledání obsluhuje **vlastní vyhledávací služba na vašem serveru** nad databází celého katalogu, [bez měsíčního pronájmu placeného vyhledávání](/pripadova-studie-shoptet-sablona#vyhledavani). Napovídá od druhého znaku, zvládá překlepy, chybějící diakritiku i české pády a poradí si s dotazem napsaným větou.

* Našeptávač i stránka výsledků dělí nálezy na produkty, kategorie, značky a články
* Dotaz větou: z „sekačka do 3 000 Kč“ se stane cenový filtr
* Skladem nahoře, vyprodané dolů a pod vyprodanými řada „Podobné skladem“
* Ručně doplněná synonyma: „vápka“ najde vysokotlaký čistič, „hupcuk“ naviják. Co zákazníci hledají a nenacházejí, se měří a podle toho se hledání ladí.
* Kvalitu hlídá zlatá sada přes 900 skutečných dotazů

tuneV konfigurátoru:[Vlastní vyhledávání](#konfigurator)dnsVlastní server

lockvas-eshop.cz/

![Vlastní našeptávač na Shoptetu: návrhy dotazů, kategorie s počty produktů, značky a produkty s cenami](assets/shots/shoptet-eshop-naseptavac-ostra.webp)

lockvas-eshop.cz/vyhledavani/

![Stránka výsledků vyhledávání na Shoptetu pro dotaz sekačka do 3000 Kč, rozdělená na produkty, kategorie, značky a články](assets/shots/shoptet-eshop-hledani-ostra.webp)

Napovídá od2. znaku

manage\_searchRozumí dotazu větou

![Mobilní stránka výsledků pro dotaz sekačka do 3000 Kč s rozdělením na produkty, kategorie, značky a články](assets/shots/shoptet-eshop-mobil-veta-ostra.webp)

04 · Parametry na kartě produktu

## Parametry i přímo na kartě produktu.

Zákazník nemusí kvůli délce lišty nebo napětí baterie otevírat detail. Šablona ukáže **nejdůležitější parametry přímo na kartě ve výpisu** a u akce i to, do kdy platí akční cena. Který parametr se ukáže, řídí ručně sestavená mapa podle kategorií.

Karta ukáže jen to, co v katalogu je. Když parametry chybí, [doplním je do Shoptetu automatizovaně](/pripadova-studie-shoptet-sablona#data), se stejnými názvy a hodnotami napříč kategoriemi. Na stejných datech stojí i filtr.

* Klíčové parametry podle kategorie
* Konec akce přímo na kartě, v posledních 72 hodinách s odpočtem
* Filtrační parametry se stejnými názvy, hodnotami a jednotkami v celém katalogu
* Parametry vytěžené z popisů produktů.

linkParametry, popisy a texty kategorií doplním do katalogu i zvlášť, mimo konfigurátor. Nové produkty zakládám stejně, [rovnou z faktury dodavatele](/zakladani-produktu-na-shoptetu).

tuneV konfigurátoru:[Parametry na kartě produktu](#konfigurator)dnsVlastní server

lockvas-eshop.cz/aku-retezove-pily/

![Výpis kategorie na Shoptetu s parametry na kartách produktů a koncem akce](assets/shots/shoptet-eshop-vypis-ostra.webp)

lockvas-eshop.cz/aku-retezove-pily/

![Kategorie s filtrem podle parametrů, textem kategorie a top produkty](assets/shots/shoptet-eshop-kategorie-ostra.webp)

Mapa parametrůpo kategoriích

fact\_checkKaždá dávka se schvaluje

![Mobilní výpis kategorie s parametry na kartách produktů](assets/shots/shoptet-eshop-mobil-vypis-ostra.webp)

05 · Mega menu a mobilní navigace

## Celý katalog na jedno najetí myší, na mobilu na pár písmen.

Na počítači otevře **mega menu** všechny kategorie do tří úrovní najednou, s ikonou u každé skupiny a akcí přímo v menu. Na mobilu se menu otevře v kategorii, kde zákazník právě je, a v každém panelu jde **kategorii vyhledat**. Po napsání „retez“ nabídne všech pět kategorií řetězových pil i s cestou, kde leží.

* Panel tří úrovní s ikonami kategorií a akcí týdne přímo v menu
* Lišta kategorií sama skryje položky, které se na danou šířku nevejdou
* Na mobilu procházení po úrovních a hledání kategorie bez čekání na server
* Spodní lišta s košíkem a hledáním na dosah palce

tuneV konfigurátoru:[Mega menu](#konfigurator)webBěží v šabloně[Mobilní navigace s hledáním kategorií](#konfigurator)webBěží v šabloně

lockvas-eshop.cz/

![Mega menu otevřené na kategorii Zahrada: podkategorie ve sloupcích s ikonami a vpravo akce týdne](assets/shots/shoptet-eshop-megamenu-ostra.webp)

manage\_searchHledání v menu kategorií

![Mobilní menu kategorií s hledáním, dotaz retez našel pět kategorií řetězových pil](assets/shots/shoptet-eshop-mobil-menu-ostra.webp)

06 · Mobilní verze

## Mobil dostane vlastní menu, hledání i košík.

Na mobilu šablona staví vlastní ovládání na dosah palce: spodní lištu, menu kategorií s hledáním nad celým stromem katalogu, hledání přes celou obrazovku a košík jako panel, který se zavře tahem dolů. Každá stránka se v automatických testech kontroluje zvlášť na desktopu i s hlavičkou iPhonu.

![Mobilní menu kategorií s hledáním nad stromem katalogu, dotaz retez našel pět kategorií řetězových pil](assets/shots/shoptet-eshop-mobil-menu-ostra.webp)


Menu kategorií: „retez“ najde všech pět kategorií řetězových pil


![Mobilní hledání přes celou obrazovku s produkty, kategorií a značkami](assets/shots/shoptet-eshop-mobil-hledani-ostra.webp)


Hledání přes celou obrazovku: produkty, kategorie i značky na jeden dotaz


![Mobilní filtr výpisu kategorie jako panel s tlačítkem Zobrazit 21 produktů](assets/shots/shoptet-eshop-mobil-filtr-ostra.webp)


Filtr jako panel zprava, dole „Zobrazit 21 produktů“


![Košík jako spodní panel s pásem do dopravy zdarma a doporučenými produkty po přidání produktu](assets/shots/shoptet-eshop-mobil-kosik-ostra.webp)


Košík jako spodní panel: pás do dopravy zdarma a upsell bez zavření

* Spodní lišta Domů · Kategorie · Hledat · Účet · Košík s počtem položek. Na detailu ji střídá lišta „Do košíku“, v pokladně zmizí.
* Menu se otevírá v kategorii, kde zákazník právě je, a hledá ve všech třech úrovních katalogu bez dalšího dotazu na server
* Prázdné hledání nabídne nejhledanější dotazy a kategorie. Pole má písmo 16 px, aby iPhone stránku nepřiblížil.
* Výpis má nahoře přilepené pilulky „Filtrovat“ s počítadlem a řazení. Filtrování zůstává nativní, jen dostalo ovládání pro palec.
* Na kartě produktu dva parametry místo tří. Galerie se ovládá gesty: přiblížení prsty až 4×, dvojklik a tah dolů pro zavření.
* Košík i galerii zavře na Androidu tlačítko Zpět, místo aby zákazníka odvedlo ze stránky

tuneV konfigurátoru:[Mobilní navigace s hledáním kategorií](#konfigurator)webBěží v šabloně

07 · Další moduly

## Další moduly pro detail, ceny, sklad i homepage.

Každý modul jde nasadit samostatně, na vaši současnou šablonu i na šablonu na míru. Štítek u modulu říká, co potřebuje: jestli běží přímo v šabloně, na vlastním serveru, nebo bere data z reportu.

### Detail produktu

photo\_library**Galerie a výběr variant**Fotky produktu přes celou obrazovku se zoomem a varianty jako tlačítka místo rozbalovacího seznamu.
show\_chart**Graf vývoje ceny a Omnibus**Nejnižší cena za posledních 30 dní podle směrnice Omnibus a graf, jak se cena vyvíjela.
add\_shopping\_cart**Doporučené příslušenství**Šablona k produktu nabídne příslušenství, které s ním zákazníci opravdu kupují.

### Ceny, sklad a doprava

sell**Velkoobchodní ceny**Přihlášený velkoobchod vidí svou cenu proti běžné a kolik ušetří.
event\_available**Předpokládané naskladnění**U vyprodaného zboží datum, kdy ho zase budete mít, podle objednávek u dodavatelů.
scale**Hmotnostní pásma dopravy**Cena dopravy podle hmotnosti košíku, kterou zákazník zná předem.

### Homepage a kategorie

star**Bestseller a sezónní homepage**Štítek Bestseller podle skutečných tržeb a homepage, která ukazuje, co se právě prodává.
sort**Automatické řazení kategorií a produktů**Produkty ve všech kategoriích se každý týden samy seřadí podle prodejů a sezóny.
reviews**Sekce hodnocení obchodu**Hodnocení z Heureky, Zboží.cz a Googlu na jednom místě, i v pokladně.

lockvas-eshop.cz

![Detail produktu: velikost se vybírá tlačítky a cena v tlačítku Do košíku se řídí zvolenou variantou.](assets/shots/shoptet-eshop-varianty-ostra.webp)

![](assets/shots/shoptet-eshop-mobil-varianty-ostra.webp)

webBěží v šabloně

#### Galerie a výběr variant

Fotky produktu přes celou obrazovku se zoomem a varianty jako tlačítka místo rozbalovacího seznamu.

* Přiblížení a listování prstem
* Nákup přímo z galerie
* Velikosti a barvy jako tlačítka

[addPřidat do konfigurátoru](#konfigurator)

lockvas-eshop.cz/mini-retezova-pila-6--aku-24v--2x-lista-2x-retez-bx3307-boxer/

![Detail produktu pod tlačítkem Do košíku: nejnižší cena za 30 dní a graf vývoje ceny. Růžové pásmo je probíhající akce.](assets/shots/shoptet-eshop-cena-ostra.webp)

![](assets/shots/shoptet-eshop-mobil-cena-ostra.webp)

insightsData z reportu

#### Graf vývoje ceny a Omnibus

Nejnižší cena za posledních 30 dní podle směrnice Omnibus a graf, jak se cena vyvíjela.

* Řádek s nejnižší cenou za 30 dní
* Rozbalovací graf vývoje ceny

lightbulbHistorie se začne sbírat dnem napojení, nejnižší cenu za 30 dní ukáže po měsíci.

[addPřidat do konfigurátoru](#konfigurator)

lockvas-eshop.cz/mini-retezova-pila-6--aku-24v--2x-lista-2x-retez-bx3307-boxer/

![Detail produktu: blok Hodí se k tomu s příslušenstvím, které zákazníci k produktu kupují.](assets/shots/shoptet-eshop-cena-ostra.webp)

![](assets/shots/shoptet-eshop-mobil-cena-ostra.webp)

insightsData z reportu

#### Doporučené příslušenství

Šablona k produktu nabídne příslušenství, které s ním zákazníci opravdu kupují.

* Vazby podle skutečných nákupů
* „Hodí se k tomu“ na detailu s rychlým náhledem
* Nabídka příslušenství v košíku

fact\_checkPředpoklad: Shoptet Premium s API

linkNabídka v košíku jen s modulem Košík a pokladna.

[addPřidat do konfigurátoru](#konfigurator)

lockvas-eshop.cz/akumulatorova-pila-14-2x48v-bt5020-bulltech/

![Detail produktu po přihlášení velkoobchodu: VO cena, přeškrtnutá běžná cena a úspora.](assets/shots/shoptet-eshop-vo-ostra.webp)

![](assets/shots/shoptet-eshop-mobil-vo-ostra.webp)

dnsVlastní server

#### Velkoobchodní ceny

Přihlášený velkoobchod vidí svou cenu proti běžné a kolik ušetří.

* Úspora na kartě, v detailu, v košíku i ve vyhledávání
* Název cenové úrovně u účtu
* Vysvětlení, když se sleva na akční zboží neuplatní

fact\_checkPředpoklad: ceníky pro skupiny zákazníků v Shoptetu

linkCeny pro velkoobchod s podlahou marže hlídá každý den modul reportu Velkoobchodní ceníky. [Konfigurátor reportu](/reporting-pro-eshopy#konfigurator)

[addPřidat do konfigurátoru](#konfigurator)

lockvas-eshop.cz/strojek-na-krouhani-zeleniny-3v1--cerveny--07219/

![Detail vyprodaného produktu: u tlačítka Hlídat dostupnost datum, do kdy zboží zase naskladníte.](assets/shots/shoptet-eshop-naskladneni-ostra.webp)

![](assets/shots/shoptet-eshop-mobil-naskladneni-ostra.webp)

insightsData z reportu

#### Předpokládané naskladnění

U vyprodaného zboží datum, kdy ho zase budete mít, podle objednávek u dodavatelů.

* „Naskladnění očekáváme do …“ na detailu i na kartě

fact\_checkPředpoklad: objednávky u dodavatelů vedené přes plánování nákupu

linkObjednávky u dodavatelů vede fakturační aplikace, z nich plánovač ví, co je na cestě. [Konfigurátor aplikace](/automatizace-dodavatelskych-faktur#konfigurator)

[addPřidat do konfigurátoru](#konfigurator)

lockvas-eshop.cz/objednavka/krok-1/

![Krok Doprava a platba: pod výběrem dopravce cena dopravy podle hmotnosti zásilky.](assets/shots/shoptet-eshop-doprava-ostra.webp)

webBěží v šabloně

#### Hmotnostní pásma dopravy

Cena dopravy podle hmotnosti košíku, kterou zákazník zná předem.

* Ceník dopravy po hmotnostních pásmech
* Škála pásem s cenami v pokladně
* Kalkulačka na stránce Doprava a platba
* Bez zbytečných nadrozměrných možností u běžného zboží

linkŠkála v pokladně jen s modulem Košík a pokladna.

[addPřidat do konfigurátoru](#konfigurator)

lockvas-eshop.cz/

![Homepage: Nejoblíbenější produkty se štítkem bestselleru.](assets/shots/shoptet-eshop-home-rady-ostra.webp)

insightsData z reportu

#### Bestseller a sezónní homepage

Štítek Bestseller podle skutečných tržeb a homepage, která ukazuje, co se právě prodává.

* Bestseller jen u nejprodávanějších produktů kategorie
* Řada nejoblíbenějšího zboží podle sezóny
* Pořadí kategorií na homepage podle prodejů

[addPřidat do konfigurátoru](#konfigurator)

lockvas-eshop.cz/aku-retezove-pily/

![Kategorie Aku řetězové pily: Top produkty v kategorii a pořadí výpisu.](assets/shots/shoptet-eshop-kategorie-ostra.webp)

![](assets/shots/shoptet-eshop-mobil-vypis-ostra.webp)

insightsData z reportu

#### Automatické řazení kategorií a produktů

Produkty ve všech kategoriích se každý týden samy seřadí podle prodejů a sezóny.

* Pořadí produktů v kategoriích
* Pořadí podkategorií
* Sezónní kalendář pro hlavní kategorie

fact\_checkPředpoklad: Shoptet Premium s API

[addPřidat do konfigurátoru](#konfigurator)

lockvas-eshop.cz

![Stránka Hodnocení obchodu: průměrná známka, rozložení hvězdiček a komentáře zákazníků s filtrem.](assets/shots/shoptet-eshop-hodnoceni-ostra.webp)

![](assets/shots/shoptet-eshop-mobil-hodnoceni-ostra.webp)

webBěží v šabloně

#### Sekce hodnocení obchodu

Hodnocení z Heureky, Zboží.cz a Googlu na jednom místě, i v pokladně.

* Souhrn hodnocení s citacemi zákazníků
* V patičce, u přihlášení a v pokladně

[addPřidat do konfigurátoru](#konfigurator)

speedOptimalizace rychlosti je s čísly níž v části [Jak to probíhá](#jak-to-funguje).
dnsDatový server přidá konfigurátor sám k modulům, které ho potřebují.



Tři nástroje, jeden okruh dat

## Jak to do sebe zapadá.

Šablona prodává podle dat z reportu: bestsellery, řazení, nejnižší cenu za 30 dní i termín naskladnění. Co se na webu změní, report sám změří.

[![](assets/ekosystem-v4-16x9.webp)Přehrát video0:40](assets/ekosystem-v4-16x9.mp4)

Jeden nákup od otázky v chatu až po vyprodané zboží. 40 sekund, se zvukem.

Tok dat mezi fakturační aplikací, vaším e-shopem na Shoptetu, reportem, šablonou a Claude nebo ChatGPT
Fakturační aplikace → Váš e-shop: nákupní ceny a nový produkt (po vašem schválení); Váš e-shop → E-commerce report: objednávky a produkty, každý den; E-commerce report → Váš e-shop: karty produktů, VO ceny a výprodej (po vašem schválení); Fakturační aplikace → E-commerce report: náklady, doprava za zásilku, zboží na cestě; E-commerce report → Fakturační aplikace: doporučený nákup; E-commerce report → Šablona: bestsellery, řazení, Omnibus, naskladnění; Šablona → E-commerce report: co lidé hledají, změny na webu; Fakturační aplikace → Claude, ChatGPT: faktury a platby, 6 nástrojů (jen čtení); E-commerce report → Claude, ChatGPT: čísla z reportu, 20 nástrojů (jen čtení); Claude, ChatGPT → Váš e-shop: nové produkty (po vašem schválení).

storefrontVáš e-shopna Shoptetuinventory\_2produktysellcenyshopping\_cartobjednávky
lock

lock






lock


nákupní ceny,nový produkt
objednávkya produkty, denně
karty produktů,VO ceny, výprodej
← doporučený nákup→ náklady, doprava za zásilku, zboží na cestě
← bestsellery, řazení, Omnibus, naskladnění→ co lidé hledají, změny na webu
faktury, jen čtení
čísla z reportu, jen čtení
nové produkty
receipt\_longFakturační aplikacefaktury · banka · hotovostaccount\_balancecheckspárováno
monitoringE-commerce reportzisk · nákup · cenyčistý ziskdoobjednat
forumClaude, ChatGPTdotazy a nové produktyZalož produkt podle odkazulock
webŠablonaco vidí zákazníkstarlocal\_shipping
mailaccount\_balancelocal\_shippingfaktury e-mailem,banka, dopravci
campaignanalyticsreklamní účty,Google Analytics

Tok dat mezi fakturační aplikací, vaším e-shopem na Shoptetu, reportem, šablonou a Claude nebo ChatGPT
Fakturační aplikace → Váš e-shop: nákupní ceny a nový produkt (po vašem schválení); Váš e-shop → E-commerce report: objednávky a produkty, každý den; E-commerce report → Váš e-shop: karty produktů, VO ceny a výprodej (po vašem schválení); Fakturační aplikace → E-commerce report: náklady, doprava za zásilku, zboží na cestě; E-commerce report → Fakturační aplikace: doporučený nákup; E-commerce report → Šablona: bestsellery, řazení, Omnibus, naskladnění; Šablona → E-commerce report: co lidé hledají, změny na webu; Fakturační aplikace → Claude, ChatGPT: faktury a platby, 6 nástrojů (jen čtení); E-commerce report → Claude, ChatGPT: čísla z reportu, 20 nástrojů (jen čtení); Claude, ChatGPT → Váš e-shop: nové produkty (po vašem schválení).

storefrontVáš e-shopna Shoptetuinventory\_2produktysellcenyshopping\_cartobjednávky
lock



lock




lock


nákupní ceny,nový produkt
↑ doporučený nákup↓ náklady, doprava,zboží na cestě
↓ objednávkya produkty, denně↑ karty, VO ceny,výprodej
↑ bestsellery, řazení,Omnibus, naskladnění↓ co lidé hledají,změny na webu
jen čtení
↑ nové produkty
receipt\_longFakturační aplikacefaktury · banka · hotovost
monitoringE-commerce reportzisk · nákup · ceny
forumClaude, ChatGPTdotazy a nové produkty
webŠablonaco vidí zákazník
mailaccount\_balancelocal\_shippingfaktury, banka, dopravci
campaignreklama, GA4


* Teče samo, každý den
* lockZápis do e-⁠shopu po vašem schválení, jde vrátit
* Jen čtení
* Barva čáry: kdo data posílá

hubCelý okruhreceipt\_longFakturacestorefrontE-⁠shopmonitoringReportwebŠablonaforumClaude, ChatGPT

#### syncTeče samo, každý den

* **E-⁠shop → Report**: objednávky a produkty, každý den
* **Fakturace → Report**: náklady, doprava za zásilku, zboží na cestě
* **Report → Fakturace**: doporučený nákup
* **Report → Šablona**: bestsellery, řazení, Omnibus, naskladnění
* **Šablona → Report**: co lidé hledají, změny na webu

#### lockPo vašem schválení, jde vrátit

* **Fakturace → E-⁠shop**: nákupní ceny a nový produkt
* **Report → E-⁠shop**: karty produktů, VO ceny a výprodej
* **Claude, ChatGPT → E-⁠shop**: nové produkty

#### visibilityJen čtení

* **Fakturace → Claude, ChatGPT**: faktury a platby, 6 nástrojů
* **Report → Claude, ChatGPT**: čísla z reportu, 20 nástrojů

Klikněte na nástroj v mapě a uvidíte, co posílá, co dostává a co z toho máte.

receipt\_long

### Fakturační aplikace

Přečte faktury od dodavatelů z e-⁠mailu, spáruje platby s bankou a ukáže výhled hotovosti.

account\_balancecheckspárováno

#### Posílá

* arrow\_forward

  storefrontVáš e-⁠shop: nákupní ceny a nový produktlockpo vašem schválení

  Marže v Shoptetu sedí bez ručního přepisování. Produkt, který chybí, se založí jako skrytý.
* arrow\_forward

  monitoringE-⁠commerce report: náklady, doprava za zásilku, zboží na cestě

  Report počítá zisk ze skutečných nákladů, včetně ceny každé zásilky.
* arrow\_forward

  forumClaude, ChatGPT: faktury a platby, 6 nástrojůvisibilityjen čtení

  Zeptáte se na faktury a platby vlastními slovy.

#### Dostává

* arrow\_back

  monitoringE-⁠commerce report: doporučený nákup

  Aplikace z návrhu vybere tolik, kolik unesete bez sáhnutí na rezervu.
* arrow\_back

  mailDodavatelé, banka, dopravci

  faktury od dodavatelů e-⁠mailem, pohyby z banky, rozpisy zásilek od PPL a GLS

U e-⁠shopu s nářadím sama spáruje s platbou 6 z 10 faktur placených převodem.

[Spočítat fakturační aplikaciarrow\_forward](/automatizace-dodavatelskych-faktur#konfigurator)

storefront

### Váš e-⁠shop

Produkty, ceny a objednávky zůstávají v Shoptetu. Nástroje do něj zapíšou jen to, co schválíte, a každý zápis jde vrátit.

#### Posílá

* arrow\_forward

  monitoringE-⁠commerce report: objednávky a produkty, každý den

  Report vidí každou objednávku i dopravné, které zákazník zaplatil.

#### Dostává

* arrow\_back

  receipt\_longFakturační aplikace: nákupní ceny a nový produktlockpo vašem schválení

  Marže v Shoptetu sedí bez ručního přepisování. Produkt, který chybí, se založí jako skrytý.
* arrow\_back

  monitoringE-⁠commerce report: karty produktů, VO ceny a výprodejlockpo vašem schválení

  Kartu nového produktu, velkoobchodní ceny i výprodej nejdřív schválíte.
* arrow\_back

  forumClaude, ChatGPT: nové produktylockpo vašem schválení

  Pošlete odkaz na produkt u dodavatele, PDF nebo kód z jeho nabídky. Kartu s názvem, popisem, parametry a fotkami zapíše do e-⁠shopu až po vašem schválení.

Šablona běží přímo ve vašem e-⁠shopu.

monitoring

### E-⁠commerce report

Každé ráno spočítá čistý zisk po nákupu, reklamě i dopravě, navrhne, co nakoupit, a hlídá ceny.

čistý ziskdoobjednat

#### Posílá

* arrow\_forward

  storefrontVáš e-⁠shop: karty produktů, VO ceny a výprodejlockpo vašem schválení

  Kartu nového produktu, velkoobchodní ceny i výprodej nejdřív schválíte.
* arrow\_forward

  receipt\_longFakturační aplikace: doporučený nákup

  Aplikace z návrhu vybere tolik, kolik unesete bez sáhnutí na rezervu.
* arrow\_forward

  webŠablona: bestsellery, řazení, Omnibus, naskladnění

  Zákazník vidí, co se prodává, nejnižší cenu za 30 dní a kdy vyprodané zboží dorazí.
* arrow\_forward

  forumClaude, ChatGPT: čísla z reportu, 20 nástrojůvisibilityjen čtení

  Vidíte v nich totéž co v aplikaci.

#### Dostává

* arrow\_back

  storefrontVáš e-⁠shop: objednávky a produkty, každý den

  Report vidí každou objednávku i dopravné, které zákazník zaplatil.
* arrow\_back

  receipt\_longFakturační aplikace: náklady, doprava za zásilku, zboží na cestě

  Report počítá zisk ze skutečných nákladů, včetně ceny každé zásilky.
* arrow\_back

  webŠablona: co lidé hledají, změny na webu

  Report změří, co která změna udělala s prodeji a pozicemi.
* arrow\_back

  campaignReklamní účty, Google Analytics

  náklady na reklamu z Google Ads, Skliku a Mety, návštěvnost z Google Analytics

U e-⁠shopu s nářadím ukázal, že dopravné pokrývalo jen 84 % nákladů na dopravu. Po nápravě pokrývá 112 %.

[Spočítat reportarrow\_forward](/reporting-pro-eshopy#konfigurator)

web

### Šablona

Vzhled a funkce e-⁠shopu nad rámec platformy. Běží přímo ve vašem Shoptetu a prodává podle toho, co vidí report.

starlocal\_shipping

#### Posílá

* arrow\_forward

  monitoringE-⁠commerce report: co lidé hledají, změny na webu

  Report změří, co která změna udělala s prodeji a pozicemi.

#### Dostává

* arrow\_back

  monitoringE-⁠commerce report: bestsellery, řazení, Omnibus, naskladnění

  Zákazník vidí, co se prodává, nejnižší cenu za 30 dní a kdy vyprodané zboží dorazí.

U e-⁠shopu s nářadím report od konce srpna 2026 sleduje přes 7 000 změn na webu.

forum

### Claude, ChatGPT

Na svá čísla se zeptáte vlastními slovy. Z odkazu na produkt u dodavatele, PDF nebo kódu z jeho nabídky připraví kartu nového produktu a do e-⁠shopu ji zapíše až po vašem schválení.

Založ produkt podle odkazulock

#### Posílá

* arrow\_forward

  storefrontVáš e-⁠shop: nové produktylockpo vašem schválení

  Pošlete odkaz na produkt u dodavatele, PDF nebo kód z jeho nabídky. Kartu s názvem, popisem, parametry a fotkami zapíše do e-⁠shopu až po vašem schválení.

#### Dostává

* arrow\_back

  receipt\_longFakturační aplikace: faktury a platby, 6 nástrojůvisibilityjen čtení

  Zeptáte se na faktury a platby vlastními slovy.
* arrow\_back

  monitoringE-⁠commerce report: čísla z reportu, 20 nástrojůvisibilityjen čtení

  Vidíte v nich totéž co v aplikaci.

U e-⁠shopu s nářadím trvá návrh celé karty zhruba 2 minuty. Každý údaj nese citaci ze zdroje.

route

Příběh v mapě

### Každá změna má změřený dopad

close

1. web

   Šablona

   Nasazení šablony i zápisy produktů se samy zapíšou do registru změn.

   **změny na webu**
2. monitoring

   E-⁠commerce report

   Report ukáže, co která změna udělala s prodeji a pozicemi.

trending\_up

U e-⁠shopu s nářadím

přes 7 000

změn sleduje report od konce srpna 2026.

route

Příběh v mapě

### Nákup, který nepřestřelí kasu

close

1. monitoring

   E-⁠commerce report

   Plánovač v reportu navrhne, co a kolik objednat.

   **doporučený nákup**
2. receipt\_long

   Fakturační aplikace

   Aplikace z návrhu vybere tolik, kolik unesete bez sáhnutí na rezervu, a udělá objednávku.

   **zboží na cestě**
3. monitoring

   E-⁠commerce report

   Zboží na cestě vidí plánovač.

   **termín naskladnění**
4. web

   Šablona

   U vyprodaného zboží šablona ukáže termín naskladnění.

web›monitoring

### Každá změna má změřený dopad

Nasazení šablony i zápisy produktů se samy zapíšou do registru změn a report ukáže, co udělaly s prodeji a pozicemi. U e-⁠shopu s nářadím jich od konce srpna 2026 sleduje přes 7 000.

routeUkázat v mapě

monitoring›receipt\_long›monitoring›web

### Nákup, který nepřestřelí kasu

[Plánovač](/planovani-nakupu-od-dodavatelu) v reportu navrhne, co objednat. Fakturační aplikace z toho vybere tolik, kolik unesete bez sáhnutí na rezervu, a udělá objednávku. Zboží na cestě pak vidí plánovač i šablona, která u vyprodaného zboží ukáže termín naskladnění.

routeUkázat v mapě

monitoring·receipt\_long·web

### Provoz hlídám já

Report se obnoví každé ráno a projde ho 30 kontrol. Fakturační aplikace běží na vašem serveru, hlídám ji každých 15 minut a zálohu držím mimo server. Šablonu testuji při každém nasazení.

lockCo se zapisuje do e-⁠shopu, nejdřív schválíte a jde to vrátit. Každý nástroj funguje i samostatně a platíte jen za moduly, které používáte.

[Spočítat report](/reporting-pro-eshopy#konfigurator)
[Spočítat fakturační aplikaci](/automatizace-dodavatelskych-faktur#konfigurator)

![](assets/ekosystem-v4-16x9.webp)![](assets/ekosystem-v4-9x16.webp)


[calculateSpočítat sestavu](/#kalkulacka)replayPřehrát znovu



Jak to probíhá

## Od návrhu po spuštění, pod testy a měřením.

Každá změna projde před nasazením **rozsáhlou sadou automatických testů** na desktopu i mobilu a měřením proti návrhu. Po spuštění měřím, co změna udělala s rychlostí a nákupy. O dalších úpravách rozhodují data z analytiky, ne dojem.

draw

Krok 1

##### Návrh

Vzhled a chování všech typů stránek.

code

Krok 2

##### Vývoj

Vlastní CSS a JavaScript nad Shoptetem.

architecture

Krok 3

##### Měření proti návrhu

Tisíce metrik, hotovo při nule rozdílů.

bug\_report

Krok 4

##### Testy

Každá stránka na desktopu i mobilu.

rocket\_launch

Krok 5

##### Nasazení

Na testovací instanci automaticky, na ostrou po schválení.

### Spuštění a testy

Šablonu hlídají automatické testy: 28 stránek na desktopu i mobilu, sondy na jednotlivé funkce, měření proti návrhu a noční sada kontrol. Na testovací instanci jde každá změna automaticky, na ostrý e-⁠shop až po schválení. Když se něco rozbije, pozná se to na testech, ne až na zákaznících.

### Rychlost

Po spuštění jsem šablonu ladil na rychlost. Proti stavu v den spuštění se stránka na pomalém mobilním připojení zobrazí o 3,1 až 4,4 s dřív. CPU čas vlastních skriptů klesl o 77 až 83 %. Rozpočty rychlosti hlídá test po každém nasazení a jednou týdně na ostrém e-shopu.

tuneV konfigurátoru:[Optimalizace rychlosti](#konfigurator)webBěží v šabloně

28 × 2stránek v testech, desktop a iPhone

0 z 2 337rozdílů pokladny proti návrhu

3,1–4,4 sdřívější zobrazení na pomalém mobilním připojení

77–83 %méně CPU času vlastních skriptů

Reference · Tři úrovně stejné práce

## Od přepsaného vzhledu po vlastní infrastrukturu.

Každý z těch tří e-shopů řešil něco jiného. Podle toho se liší i rozsah: od přepisové vrstvy nad výchozí šablonou po vlastní vyhledávací službu na klientském serveru.

![jipos.cz](assets/logo-jipos.webp)

### Platforma vyladěná pro nákup.

Nářadí, zahradní technika a autodoplňky, **6 376 produktů ve 441 kategoriích**. Má vlastní vyhledávání s indexem celého katalogu, graf vývoje ceny z denních snímků, termíny doručení počítané včetně svátků, velkoobchodní ceníky a optimalizovaný nákupní proces. Za tím je i datová práce v katalogu a rozsáhlá sada automatických testů, která šablonu hlídá po každé změně.

99vlastních  
JS modulů

6 376produktů  
v katalogu

28 × 2stránek v testech  
desktop a iPhone

![Detail produktu ve vlastní Shoptet šabloně](assets/shots/shoptet-eshop-detail-ostra.webp)

Vlastní index
6 400

sync
Změny v indexu každých 15 minut

![Titulní stránka e-shopu s nářadím v nové šabloně](assets/shots/shoptet-eshop-home-ostra.webp)

Případová studie

### [Jak nová Shoptet šablona zvýšila tržby e-⁠shopu s nářadím o 44 % ve druhém týdnu po spuštění](/pripadova-studie-shoptet-sablona)

+44 %tržeb ve druhém týdnu

99vlastních modulů na míru

+0,7 p. b.konverzního poměru

Číst studii

### BatteryShop.sk: konfigurátor nad cizím API.

Baterie a příslušenství pro notebooky a další zařízení na slovenském trhu. Data o kompatibilitě patřila dodavateli, takže jsem místo vlastní databáze stavěl **vlastní frontend nad jeho rozhraním**: typ zařízení → značka → model → produkty, ve třech podobách podle toho, kde na e-shopu zákazník je. Součástí byla i přepsaná pokladna s bočním souhrnem.

3podoby  
konfigurátoru

SKslovenský trh  
vč. stavů objednávek

28nálezů z auditu  
před spuštěním

![BatteryShop.sk, konfigurátor kompatibility baterií ve vlastní Shoptet šabloně](assets/shots/shoptet-batteryshop.webp)

settings\_input\_component
Napojení na dodavatelské API

### NeaPET: vlastní vzhled i bez Premium.

Kočičí toalety a příslušenství. Tarif Basic blank mode nemá, takže výchozí styly šablony zůstávají načtené a vlastní vzhled je **přepisová vrstva nad nimi**. Běží na [www.neapet.cz](https://www.neapet.cz/).

Basictarif bez  
blank mode

1440  
2560obě šířky ověřené  
proti návrhu

22/22zelených kontrol  
proti ostrému webu

![neapet.cz, vlastní vzhled Shoptetu na tarifu Basic](assets/shots/shoptet-neapet.webp)



Reference · Co říkají klienti

## Nejlepší argumenty vám dají moji klienti.

Hodnocení chodí přímo na Google — bez editace, bez filtrů. Čtěte si to samé, co vidí každý, kdo si mě vygoogluje před první schůzkou.

5,0

★★★★★

16 recenzíprůměr 5,0 přímo na Googlu

[Zobrazit všechny arrow\_outward](https://www.google.com/search?q=tom%C3%A1%C5%A1+khoder)

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

Díky perfektní spolupráci je několik do detailu vyladěných webů za námi a minimálně 2 před námi. V každém odvětví je těžké najít toho pravého – spolehlivého profesionála na svém místě, který dodá perfektní služby, kde spolupráce nedrhne, a tohle všechno je znát i na výsledku. Tak teď máte štěstí, že tuhle recenzi čtete, už jste totiž našli.

Číst celou recenzi →

A

Alžběta Mrázová

JednatelkaMácha Hotels s.r.o.Únor 2024

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

Velice si vážím osobního přístupu a empatie ze strany pana Khodera. Kampaně jsou vždy navrženy s citem a dle potřeb zákazníka a fungují velmi dobře.

Číst celou recenzi →

R

Radek Ploc

JednatelStudio PLOC s.r.o.Listopad 2025



close

★★★★★




Rychlá odpověď

## Co je šablona na míru pro Shoptet Premium?

**Šablona na míru** je vlastní frontend nad Shoptetem: vlastní HTML, CSS a JavaScript místo úprav hotové šablony z galerie. Na tarifu **Shoptet Premium** jde vypnout výchozí styly (**blank mode**), takže vzhled vzniká od nuly. Objednávky, sklad i administrace přitom zůstávají Shoptetu.

Rozdíl proti úpravě hotové šablony je v tom, **co všechno jde přidat**: vlastní vyhledávání nad vlastní databází, graf vývoje ceny s Omnibusem, termín doručení včetně svátků, velkoobchodní ceny na kartách i v košíku nebo optimalizovaný nákupní proces. Každá změna prochází automatickými testy a její dopad se měří v datech.

FAQ · Časté otázky

## Na co se ptají e-shopaři nejčastěji.

Potřebuju k šabloně na míru tarif Shoptet Premium?expand\_more

Nemusíte, ale s Premium je práce čistší. Premium umí takzvaný **blank mode**, který vypne výchozí styly šablony, takže vzhled stavím od nuly a neperu se s cizím CSS. Na tarifu Basic blank mode chybí a vlastní styly píšu jako **přepisovou vrstvu** nad výchozí šablonou. Funguje to, jen je to pracnější a rozsah úprav je menší.


Jak dlouho trvá vývoj šablony na míru pro Shoptet?expand\_more

Podle rozsahu a podle toho, jestli je hotový návrh. Když k šabloně přibude serverová část, počítejte i s jejím provozem po spuštění. Přesný odhad dám po projití návrhu a funkcí, které má šablona umět.


Kolik stojí šablona na míru pro Shoptet?expand\_more

Základ šablony na míru stojí **45 000 Kč** a k němu se přičítají moduly, které vyberete. Kompletní šablona se všemi moduly vyjde jako balík za **120 000 Kč**. Moduly na současnou šablonu Classic začínají na 7 000 Kč. Moduly s daty z reportu mají měsíční poplatek. Celou sestavu si spočítáte v [konfigurátoru na této stránce](#konfigurator).


Přijdu úpravou šablony o funkce Shoptetu?expand\_more

Ne. Šablona mění jen to, co vidí zákazník. Objednávky, sklad, fakturace, exporty i administrace **zůstávají Shoptetu** a fungují dál. Vlastní kód sedí nad tím, co Shoptet vykreslí na serveru, a kde to jde, přebírá nativní prvky, místo aby je nahrazoval. Nákupní košík například pořád ovládá Shoptet, jen vypadá a chová se jinak.


Jak vypadá šablona na mobilu?expand\_more

Mobil má vlastní ovládání. Šablona tam přidává spodní lištu s košíkem, menu kategorií s hledáním nad celým katalogem, hledání přes celou obrazovku a filtr jako panel. Každá stránka se testuje zvlášť **s hlavičkou iPhonu**.


Co se stane, když Shoptet změní své HTML?expand\_more

Proto k šabloně patří testy. Automatická kontrola projíždí 28 stránek ve dvou variantách, **desktop a mobil se skutečnou hlavičkou iPhonu**. Běží i sondy na jednotlivé funkce, měření proti návrhu, které hlídá pozice a rozměry, noční sada kontrol a po každém nasazení rozpočty rychlosti. Když Shoptet něco změní, pozná se to na testech, ne až na zákaznících.


Jde šablonu napojit na vlastní databázi, sklad nebo ERP?expand\_more

Ano, přes Shoptet API a vlastní server. Na vašem serveru může běžet **vyhledávací služba s vlastním indexem katalogu**. V noci se index přestaví celý a mezitím se každých 15 minut dohrávají změny. Ze stejné infrastruktury jde denní historie cen pro graf vývoje ceny i běžná cena pro velkoobchodní ceníky. Když data patří dodavateli, třeba kompatibilita baterií, postavím frontend **nad jeho rozhraním**.


Umíte nahradit placené vyhledávání typu Luigi's Box?expand\_more

Ano. Místo pronajatého vyhledávání obsluhuje hledání **vlastní vyhledávací služba** na vašem serveru. Zvládá překlepy, chybějící diakritiku i české skloňování, našeptává od druhého znaku a rozumí dotazu napsanému větou. S napojeným E-commerce reportem řadí i podle skutečné tržby za posledních 90 dní. Kvalitu hlídá zlatá sada přes 900 skutečných dotazů. Proti vyhledávání za 15 000 Kč měsíčně ušetříte **180 000 Kč ročně**.


Umí šablona graf vývoje ceny a Omnibus?expand\_more

Umí. Cena každého produktu se ukládá **každý den zvlášť** a z těch záznamů se v detailu produktu kreslí graf se schodovou čárou, vyznačeným pásmem probíhající akce a nejnižší cenou za posledních 30 dní, kterou u slev vyžaduje směrnice **Omnibus**.


Umí šablona velkoobchodní ceníky?expand\_more

Umí je zobrazit. Ceníky pro skupiny zákazníků spravuje Shoptet a šablona přihlášenému velkoobchodu ukáže **VO cenu proti běžné** na detailu, na kartách, v košíku i ve vyhledávání, včetně toho, kolik ušetří. Ceny do ceníků může zapisovat denní přepočet mimo Shoptet, který hlídá minimální marži. Když se sleva ceníku na akční zboží neuplatní, šablona zákazníkovi ukáže proč.


Kdo šablonu spravuje po nasazení?expand\_more

Kód zůstává váš a je v gitu. Změny jdou nejdřív automaticky na testovací instanci a na ostrý e-shop až po schválení jedním příkazem, včetně nové verze souborů, aby zákazníkům nezůstala v paměti stará. Před nasazením každá změna projde **automatickými testy** na desktopu i mobilu. Drobné úpravy a rozšíření dělám průběžně, ale nejste na mě vázaní.


Můžu si nechat udělat jen část šablony?expand\_more

Můžete a často to dává smysl. Šablona se skládá z **modulů, které jde nasadit samostatně**, i na vaši současnou šablonu Classic. Nejčastěji se začíná košíkem, pokladnou a termínem doručení, protože tam se zákazník rozhoduje o nákupu. Vyhledávání, homepage nebo výpis kategorie se dají doplnit později a e-shop mezitím normálně prodává.


Jde vylepšit košík a dopravu i bez celé šablony a bez Premium?expand\_more

Jde. Moduly **Košík a pokladna** a **Termín doručení u dopravců** staví na tom, co Shoptet vykreslí, a nepotřebují API ani vlastní server. Nasadím je na současnou šablonu Classic a běží i na tarifu bez Premium. V konfigurátoru je to hotová [sestava Košík a doprava](#konfigurator).

Ceník · Konfigurátor šablony

## Kolik stojí šablona na míru pro Shoptet?

Cena se skládá z modulů, které vyberete. Základ šablony na míru stojí 45 000 Kč, kompletní šablona se všemi moduly vyjde jako balík za 120 000 Kč. Kód šablony má 99 modulů, tady jsou seskupené do celků, které jde nasadit samostatně. Každý stojí stejně na vaší šabloně i na šabloně na míru. Co modul potřebuje ke svému běhu, přidá se samo.



tune

Spočítejte si šablonu v konfigurátoru
Zaškrtněte moduly a nabídka se sečte. Jednorázově i měsíčně zvlášť.

layersMám svou šablonu
design\_servicesŠablona na míru
expand\_more

Začít od
shopping\_cartKošík a doprava
workspace\_premiumKompletní balíček
Vynulovat

### architectureZáklad

Moduly nasadím na vaši současnou šablonu, e-⁠shop se nepřestavuje.

lock

Napojení na stávající šablonuwebBěží v šabloně
Připravím vaši šablonu tak, aby na ni šly moduly nasadit bez zásahu do zbytku webu.
3 500 Kč

Co obsahujeexpand\_more

* vlastní vrstva stylů a skriptů nad šablonou
* nasazení a testy na počítači i mobilu

lightbulbDnes pro šablonu Classic. U jiné šablony spočítám cenu po konzultaci.

lock

Základ šablony na míruwebBěží v šabloně
Nový vzhled a všechny hlavní stránky e-⁠shopu.
45 000 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* návrh vzhledu a design systém
* hlavička, patička, výpis kategorie s filtrem, detail produktu s galerií
* homepage, klientská sekce, informační stránky, blog, stránka 404
* stránka při načítání neposkakuje

lightbulbVyžaduje Shoptet Premium.

webBěží v šabloněFunguje bez API a bez serveru, i na nižším tarifu Shoptetu.

dnsVlastní serverStojí na datovém serveru s vlastní kopií katalogu a potřebuje Shoptet Premium s API.

insightsData z reportuPočítá z vašich prodejů. Potřebuje E-⁠commerce report, který se přidá sám, a má malý měsíční poplatek.

### local\_shippingKošík a doprava

Cesta od košíku po odeslání objednávky, cena dopravy a termín doručení.

Košík a pokladnawebBěží v šabloně
Košík a všechny kroky pokladny v novém vzhledu. Objednávku dál zpracovává Shoptet.
22 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* okno po přidání do košíku, na mobilu panel zespodu
* doprava a platba ve skupinách, výdejní místa
* kolik zbývá do dopravy zdarma, počítáno z aktuálního košíku
* souhrn objednávky a tlačítko, které na mobilu zůstává na očích

fact\_checkPředpoklad: práh dopravy zdarma nastavený v Shoptetu

Termín doručení u dopravcůwebBěží v šabloně
Zákazník už na detailu vidí, kdy zboží odešlete a kdy mu dorazí, a to i v nabídce dopravců.
7 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* časová osa Objednáte, Odešleme, Doručíme s odpočtem do expedice
* okno Možnosti doručení s dopravci, cenami a termínem
* „Expedujeme dnes“ na kartách ve výpisu
* české svátky a sobotní nebo nedělní závozy, které máte s dopravcem domluvené

fact\_checkPředpoklad: termín doručení zapnutý v nastavení Shoptetu

linkS modulem Košík a pokladna ukáže termín i u metod dopravy v pokladně.

Hmotnostní pásma dopravywebBěží v šabloně
Cena dopravy podle hmotnosti košíku, kterou zákazník zná předem.
9 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* ceník dopravy po hmotnostních pásmech
* škála pásem s cenami v pokladně
* kalkulačka na stránce Doprava a platba
* bez zbytečných nadrozměrných možností u běžného zboží

linkŠkála v pokladně jen s modulem Košík a pokladna.

### manage\_searchHledání a navigace

Aby zákazník našel zboží napoprvé, na počítači i na mobilu.

Vlastní vyhledávánídnsVlastní server
Vyhledávání, které najde produkt i s překlepem, v jiném tvaru slova nebo z dotazu napsaného větou.
addPřidá se s ním: Datový server šablony
24 000 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* našeptávač s produkty, kategoriemi a značkami
* výsledky s filtry a podobným zbožím skladem
* synonyma a ladění podle vašich dotazů
* měření toho, co zákazníci hledají a nenacházejí

fact\_checkPředpoklad: Shoptet Premium s API

lightbulbU e-⁠shopu s nářadím nahradilo placenou službu vyhledávání.

Mega menuwebBěží v šabloně
Všechny kategorie do tří úrovní na jedno najetí myší.
6 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* panel tří úrovní s ikonami kategorií
* propagace akcí přímo v menu

Mobilní navigace s hledáním kategoriíwebBěží v šabloně
Menu na mobilu, ve kterém zákazník najde kategorii napsáním pár písmen.
7 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* procházení kategorií po úrovních
* hledání kategorie v každém panelu
* spodní lišta s košíkem a hledáním

### sellProdukt a ceny

Co zákazník vidí na kartě ve výpisu a v detailu produktu.

Galerie a výběr variantwebBěží v šabloně
Fotky produktu přes celou obrazovku se zoomem a varianty jako tlačítka místo rozbalovacího seznamu.
6 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* přiblížení a listování prstem
* nákup přímo z galerie
* velikosti a barvy jako tlačítka

Parametry na kartě produktudnsVlastní server
Nejdůležitější parametry a konec akce přímo na kartě ve výpisu, zákazník nemusí otevírat detail.
addPřidá se s ním: Datový server šablony
9 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* klíčové parametry podle kategorie
* do kdy platí akční cena

fact\_checkPředpoklad: vyplněné parametry produktů (umím doplnit zvlášť)

Graf vývoje ceny a OmnibusinsightsData z reportu
Nejnižší cena za posledních 30 dní podle směrnice Omnibus a graf, jak se cena vyvíjela.
addPřidá se s ním: Datový server šablony, E-⁠commerce report
7 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* řádek s nejnižší cenou za 30 dní
* rozbalovací graf vývoje ceny

lightbulbHistorie se začne sbírat dnem napojení, nejnižší cenu za 30 dní ukáže po měsíci.

Velkoobchodní cenydnsVlastní server
Přihlášený velkoobchod vidí svou cenu proti běžné a kolik ušetří.
addPřidá se s ním: Datový server šablony
7 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* úspora na kartě, v detailu, v košíku i ve vyhledávání
* název cenové úrovně u účtu
* vysvětlení, když se sleva na akční zboží neuplatní

fact\_checkPředpoklad: ceníky pro skupiny zákazníků v Shoptetu

linkCeny pro velkoobchod s podlahou marže hlídá každý den modul reportu Velkoobchodní ceníky. [Konfigurátor reportu](/reporting-pro-eshopy#konfigurator)

Předpokládané naskladněníinsightsData z reportu
U vyprodaného zboží datum, kdy ho zase budete mít, podle objednávek u dodavatelů.
addPřidá se s ním: Datový server šablony, E-⁠commerce report, Plánování nákupu od dodavatelů
3 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* „Naskladnění očekáváme do …“ na detailu i na kartě

fact\_checkPředpoklad: objednávky u dodavatelů vedené přes plánování nákupu

linkObjednávky u dodavatelů vede fakturační aplikace, z nich plánovač ví, co je na cestě. [Konfigurátor aplikace](/automatizace-dodavatelskych-faktur#konfigurator)

Doporučené příslušenstvíinsightsData z reportu
Šablona k produktu nabídne příslušenství, které s ním zákazníci opravdu kupují.
addPřidá se s ním: E-⁠commerce report
12 000 Kč+ 1 500 Kč / měsíc

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* vazby podle skutečných nákupů
* „Hodí se k tomu“ na detailu s rychlým náhledem
* nabídka příslušenství v košíku

fact\_checkPředpoklad: Shoptet Premium s API

linkNabídka v košíku jen s modulem Košík a pokladna.

### storefrontHomepage a řazení

Co se ukáže jako první a v jakém pořadí.

Úvodní hero s videiwebBěží v šabloně
Karusel s videi produktů na začátku homepage. První snímek se načítá přednostně.
5 000 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* videa i obrázky, na mobilu se přehrávají samy
* celá karta vede na produkt nebo kategorii

fact\_checkPředpoklad: videa a fotky dodáte, výroba není v ceně

Bestseller a sezónní homepageinsightsData z reportu
Štítek Bestseller podle skutečných tržeb a homepage, která ukazuje, co se právě prodává.
addPřidá se s ním: Datový server šablony, E-⁠commerce report
6 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* Bestseller jen u nejprodávanějších produktů kategorie
* řada nejoblíbenějšího zboží podle sezóny
* pořadí kategorií na homepage podle prodejů

Automatické řazení kategorií a produktůinsightsData z reportu
Produkty ve všech kategoriích se každý týden samy seřadí podle prodejů a sezóny.
addPřidá se s ním: Datový server šablony, E-⁠commerce report
9 500 Kč+ 1 500 Kč / měsíc

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* pořadí produktů v kategoriích
* pořadí podkategorií
* sezónní kalendář pro hlavní kategorie

fact\_checkPředpoklad: Shoptet Premium s API

Sekce hodnocení obchoduwebBěží v šabloně
Hodnocení z Heureky, Zboží.cz a Googlu na jednom místě, i v pokladně.
3 500 Kč

Co obsahujeexpand\_more
photo\_cameraZobrazit ukázku

* souhrn hodnocení s citacemi zákazníků
* v patičce, u přihlášení a v pokladně

### speedRychlost a data

Rychlé načítání a server, na kterém stojí moduly s vlastními daty.

Optimalizace rychlostiwebBěží v šabloně
Rychlejší načítání stránek, hlavně na mobilu, změřené před a po.
7 500 Kč

Co obsahujeexpand\_more

* měření rychlosti na reálných stránkách
* skripty třetích stran až po načtení stránky
* přednostní načtení toho, co zákazník vidí hned

Datový server šablonydnsVlastní server
Server, který má vlastní kopii katalogu a průběžně ji obnovuje. Stojí na něm vyhledávání, parametry na kartách a další moduly s vlastními daty.
6 500 Kč

Co obsahujeexpand\_more

* katalog obnovovaný každých 15 minut, ceny každou hodinu
* hlídání provozu

fact\_checkPředpoklad: Shoptet Premium s API

Vaše nabídka

Zaškrtněte moduly a nabídka se sečte. Ceny jsou bez DPH.

[Chci nabídku šablonyarrow\_outward](#kontakt)

Ukázka z ostré šablony

###

close

Počítač
Mobil
e-shop s nářadím · šablona na míru v provozu

![]()

Kontakt · Domluvme si schůzku

## Napište mi. Odpovídám obvykle do 24 hodin.

Sídlím na Mírovém náměstí v Litoměřicích — rohová budova Raiffeisenbank, 2. patro, kancelář č. 318. Úvodní konzultace je vždy zdarma a nezávazná.

![Mírové náměstí, Litoměřice](assets/square-litomerice.webp)
Khoder.cz

Mírové náměstí · Litoměřice

location\_on

Adresa

Mírové náměstí 9/1  
Litoměřice

call

Telefon

[+420 720 363 705](tel:+420720363705)

mail

E-mail

[tomas@khoder.cz](mailto:tomas@khoder.cz)

badge

IČO

17054788

### Poptávka konzultace

Úvodní konzultace je vždy zdarma.

Jméno a příjmení

E-mail

Telefon

URL e-shopu

Zpráva




Website URL 
Company registration

Odeslat poptávkuarrow\_outward

Odesláním souhlasíte se zpracováním osobních údajů.

Související

## Pokračujte dál

Navazující služby a průvodci. Kompletní přehled najdete v [rozcestníku služeb a průvodců](/rozcestnik).

web

#### [Tvorba webových stránek](/tvorba-webovych-stranek)

Landing pages, prezenční weby a mikrosite mimo Shoptet.

monitoring

#### [Webová analytika](/webova-analytika-pro-eshopy)

GTM, GA4 a Consent Mode v2 — aby nová šablona i měřila.

smart\_toy

#### [Reklama v ChatGPT](/reklama-v-chatgpt-pro-eshopy)

Produktové kampaně v ChatGPT pro české e-shopy.

analytics

#### [Reporting pro e-shopy](/reporting-pro-eshopy)

Čistý zisk po všech nákladech, kampaně i sklad v jednom reportu.

shopping\_cart

#### [Google Nákupy](/google-shopping-pro-eshopy)

Segmentace produktových kampaní podle skutečného výkonu.

percent

#### [Konverzní poměr](/konverzni-pomer)

Proč ho číst po kanálech a po marži, ne jako jedno číslo.

Začneme

## Ukažte mi svůj Shoptet.

Projdeme spolu, co váš e-shop dnes neumí a co by mu nejvíc pomohlo. Úvodní konzultace je zdarma a nezávazná.

[Chci šablonu na míruarrow\_outward](#kontakt)
[Napsat e-mail](mailto:tomas@khoder.cz)

Případová studie [Jak nová Shoptet šablona zvýšila tržby e-⁠shopu s nářadím o 44 % ve druhém týdnu po spuštění](/pripadova-studie-shoptet-sablona)