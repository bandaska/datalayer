# URL: https://www.khoder.cz/pripadova-studie-zakladani-produktu

1. [Domů](/)
2. [Případové studie](/pripadove-studie)
3. Zakládání produktů

Případová studie · Automatizace zakládání produktů

# Jak zakládáme přes 200 nových produktů měsíčně bez ručního přepisování

Do e-shopu s nářadím a zahradní technikou přibývá každý měsíc přes 200 nových produktů od desítek dodavatelů. Každý z nich dřív někdo ručně opsal z faktury, dohledal k němu fotky a napsal popis. Postavil jsem databázi produktů, která kartu složí z podkladů dodavatele sama: název, popisy, parametry, kategorii i fotky, u každé hodnoty se zdrojem. Člověk rozhoduje jen o výjimkách a o tom, kdy produkt zveřejnit.

Platforma
:   Shoptet Premium

Rozsah
:   442 kategorií · 248 filtračních parametrů

Spuštěno
:   září 2026

lockreport.khoder.cz/dashboard/pim

sharerefresh

![Karta nového produktu v databázi produktů: název, krátký popis a vyplněné filtrační parametry](assets/cs/zakladani-produktu/karta-v1.webp)

Návrh kartyzhruba 2 minuty

Výsledek v číslech

přes 200
nových produktů přibude v e-⁠shopu každý měsíc, většinou od dodavatelů z Polska.

2 minuty
zhruba tolik trvá návrh celé karty produktu včetně parametrů, popisu a fotek.

96 %
produktů (102 ze 106) mělo značku i jednotku správně hned napoprvé, bez ručního zásahu.

2 354
položek z nabídek dodavatelů je spárovaných s produkty v katalogu podle kódu a EAN.

01 · Výchozí stav

## Každý nový produkt znamenal opisování a hledání

E-shop denně vyřizuje stovky objednávek a nové zboží bere od desítek dodavatelů, většinou z Polska. Jedna dodávka přinese klidně desítky produktů, které e-shop ještě nemá. Každý z nich bylo potřeba založit ručně: opsat název a kód z faktury, přeložit polský popis, dohledat fotky na webu dodavatele, zařadit produkt do kategorie a vyplnit parametry pro filtry.

Jen značka, jednotka a tvar názvu znamenaly u faktury s 34 novinkami kolem 100 ručních oprav. Na parametry a pořádný popis pak často nedošlo: z nových produktů za 90 dní jich 48 % nemělo jediný filtrační parametr, takže je zákazník ve filtrech kategorie nenašel.

742nových produktů za poslední tři měsíce. Každý potřeboval vlastní kartu, fotky a parametry.



Nové produkty za 90 dní při ručním zakládání

Podíl produktů podle toho, jestli mají filtrační parametry

* S filtračními parametry**52 %**
* Bez filtračních parametrů**48 %**

02 · Jak to funguje

## Od faktury dodavatele po hotovou kartu v e-shopu

[Co služba umí](/zakladani-produktu-na-shoptetu)

1. 01

   ### Nabídky dodavatelů se párují s katalogem

   Nabídky dodavatelů, kteří je posílají, se stahují pravidelně: sklad a ceny každý den, fotky, popisy a PDF návody jednou týdně. Každá položka se podle kódu a EAN spáruje s produktem v katalogu. Kde kód ukazuje jinam než EAN, rozhodne člověk.

   report.khoder.cz/admin/provoz/nabidky

   ![Párování nabídek dodavatelů s produkty v katalogu podle kódu a EAN, sporné vazby čekají na rozhodnutí](assets/cs/zakladani-produktu/nabidky-v2.webp)
2. 02

   ### Nový produkt z faktury nebo z chatu

   Nejčastěji začíná nový produkt na faktuře od dodavatele. Faktura se přečte i s kódy, EAN a hmotností a položky, které e-shop ještě nemá, se označí jako nové. Jestli je přečtená správně, hlídá součet, kontrolní číslice EAN a porovnání s nabídkou dodavatele. Stačí ale i napsat do chatu kód a odkaz na produkt.

   fakturace/parovani

   ![Položky faktury od dodavatele, které e-shop zatím nemá, označené jako nové produkty](assets/cs/prijem-zbozi/nove-v2.webp)
3. 03

   ### Podklady a návrh celé karty

   Ke každému novému kódu se podklady najdou samy: položka z nabídky dodavatele, stránka produktu na jeho webu nebo PDF návod. Z nich vznikne za zhruba 2 minuty návrh celé karty: název ve tvaru, jaký e-shop používá, krátký a dlouhý popis ve vlastní šabloně bloků, filtrační parametry, kategorie a hmotnost. U každé hodnoty je vidět, odkud pochází.

   vas-eshop.cz/sada-pomosazenych-dratenych-kartacu-na-vrtacku-5-ks-11476/

   ![Popis nového produktu na e-shopu ve vlastní šabloně: úvod, hlavní parametry a blok Proč právě tato sada kartáčů](assets/cs/zakladani-produktu/popis-v1.webp)
4. 04

   ### Fotky bez duplicit

   Z podkladů se stáhnou všechny fotky produktu. Program vyřadí duplicity, i když jde o tutéž fotku v jiném rozlišení, a k tomu bannery, loga a příliš malé obrázky. Fotky jiného modelu nebo s cizojazyčným textem pošle k rozhodnutí. Hlavní fotku navrhne sám, galerii pak doladíte na kartě produktu.

   report.khoder.cz/dashboard/pim

   ![Fotky nového produktu v databázi produktů, stažené z podkladů dodavatele bez duplicit](assets/cs/zakladani-produktu/fotky-v1.webp)
5. 05

   ### Kontrola výjimek a náhled dávky

   Nikdo neprochází produkty jeden po druhém. Člověk dostane očíslovaný seznam výjimek: chybějící údaj, rozpor mezi podklady, novou hodnotu parametru nebo sporný kód. Odpoví na ně a zbytek přijme najednou. Před zápisem pak náhled dávky ukáže u každého pole, co je v e-shopu teď a co tam bude po zápisu.

   report.khoder.cz/admin/provoz/ops

   ![Náhled dávky založení produktů: pole po poli teď v e-shopu a po zápisu, tlačítko pro vrácení celé dávky](assets/cs/zakladani-produktu/zapis-v1.webp)
6. 06

   ### Zápis do Shoptetu a zveřejnění

   Po potvrzení se dávka zapíše do Shoptetu a u každé položky se ověří, že v e-shopu je to, co se posílalo. Produkt vznikne skrytý a zveřejní ho člověk, typicky po kontrole ceny a fotek. Zákazník pak vidí hotovou kartu: popis v šabloně e-shopu, obsah balení a parametry v tabulce i ve filtrech kategorie.

   vas-eshop.cz/sada-pomosazenych-dratenych-kartacu-na-vrtacku-5-ks-11476/

   ![Hotový produkt na e-shopu: obsah balení, tabulka parametrů a Na co se hodí](assets/cs/zakladani-produktu/parametry-v1.webp)

03 · Návrh v číslech

## Každá hodnota má doložený zdroj

Návrh nesmí nic domýšlet. U každé hodnoty stojí doklad: doslovná citace z faktury, nabídky dodavatele, webu výrobce nebo PDF, případně pravidlo e-shopu, ze kterého hodnota vznikla. Že v citaci hodnota opravdu je, ověří program. Značku, jednotku a tvar názvu určují pravidla dodavatele. Parametry se plní jen hodnotami, které e-shop ve filtrech používá.

Co prošlo bez ručního zásahu

Měřeno na fakturách a dávkách e-⁠shopu

Řádky faktury přečtené shodně100 %

Stránka produktu u dodavatele100 %

Značka a jednotka napoprvé96 %

Produkty dávky zapsané bez chyby100 %

248filtračních parametrů v registru e-shopu, podle kterých návrh vyplňuje kartu

1 391povolených hodnot parametrů, takže se ve filtrech nemnoží varianty téže hodnoty

442kategorií, ze kterých návrh vybere tu správnou a přidá dvě alternativy

04 · Nabídky dodavatelů

## Podklady se najdou samy

Nejlepší podklad pro novou kartu je nabídka dodavatele: nese EAN, fotky, PDF návody a často i český popis. Protože se nabídky každý den porovnají s katalogem, je u každého nového kódu z faktury hned jasné, jestli k němu podklad existuje.

Když dodavatel nabídku neposílá, najde se stránka produktu na jeho webu podle kódu. Nález platí jen tehdy, když na stránce stojí stejný kód nebo EAN jako na faktuře. Při ověření se stránka našla u 100 ze 100 produktů.

přes 12 000položek v nabídkách dodavatelů, každý den porovnaných s katalogem e-shopu

2 354položek nabídek spárovaných s produkty v katalogu podle kódu a EAN

100 ze 100produktů, ke kterým se podle kódu našla stránka na webu dodavatele

05 · Kontrola

## Do e-shopu nejde nic bez náhledu

Návrh sám nic nezapíše. Zápis má vždy dva kroky: náhled dávky a potvrzení. Produkt vznikne v Shoptetu skrytý a zveřejnění je samostatný krok. Cenu, EAN ani sklad návrh nikdy nevymýšlí: nákupní cena jde z faktury, EAN jen z dokladu.

Každý zápis má záznam s původním stavem. Když se něco nepovede, vrátí se celá dávka i jeden produkt. A když někdo mezitím hodnotu v administraci upravil ručně, vrácení ji nepřepíše a upozorní na to.

33 a 66nových produktů založených v e-shopu ve dvou dávkách od dvou dodavatelů

66 z 66produktů větší dávky zapsaných do Shoptetu bez jediné chyby

21 sekundtrvá zápis jedné položky do Shoptetu včetně kontroly po zápisu





Tři nástroje, jeden okruh dat

## Jak to do sebe zapadá.

Report každé ráno čte Shoptet a reklamní účty. S fakturační aplikací zná i skutečné náklady a cenu dopravy, se šablonou ví, co se na webu změnilo.

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

[Spočítat šablonuarrow\_forward](/shoptet-premium-sablony-na-miru#konfigurator)

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

### Čistý zisk ze skutečných nákladů

close

1. receipt\_long

   Fakturační aplikace

   Z faktur zná náklady, z rozpisů PPL a GLS cenu každé zásilky.

   **náklady a cena každé zásilky**
2. monitoring

   E-⁠commerce report

   Každé ráno je přiřadí k objednávkám z e-⁠shopu a spočítá čistý zisk, i na dopravě.

   add**Z e-⁠shopu**: objednávky a zaplacené dopravné

trending\_up

U e-⁠shopu s nářadím

84 % → 112 %

Dopravné pokrývalo jen 84 % nákladů na dopravu. Po úpravě smlouvy s dopravcem a ceníku pokrývá 112 %.

route

Příběh v mapě

### Zeptáte se v Claude nebo ChatGPT

close

1. monitoring

   E-⁠commerce report

   Nad reportem je 20 nástrojů, nad fakturami 6.

   **jen čtení**visibilityjen čtení
2. forum

   Claude, ChatGPT

   Zeptáte se vlastními slovy a vidíte totéž co v aplikaci.

trending\_up

Od srpna 2026

Jeden klient, e-⁠shop se zdravotními pomůckami, se takhle na svá čísla ptá sám.

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

receipt\_long›monitoring

### Čistý zisk ze skutečných nákladů

Náklady z faktur a cena dopravy z rozpisů PPL a GLS jdou každý den do reportu. U e-⁠shopu s nářadím tak vyšlo najevo, že dopravné pokrývalo jen 84 % nákladů na dopravu. Po úpravě smlouvy s dopravcem a ceníku pokrývá 112 %.

routeUkázat v mapě

monitoring›forum

### Zeptáte se v Claude nebo ChatGPT

Nad reportem je 20 nástrojů, nad fakturami 6. Odpovídají z vašich dat a vidíte v nich totéž co v aplikaci. Jeden klient, e-⁠shop se zdravotními pomůckami, se takhle na svá čísla ptá sám od srpna 2026.

routeUkázat v mapě

web›monitoring

### Každá změna má změřený dopad

Nasazení šablony i zápisy produktů se samy zapíšou do registru změn a report ukáže, co udělaly s prodeji a pozicemi. U e-⁠shopu s nářadím jich od konce srpna 2026 sleduje přes 7 000.

routeUkázat v mapě

lockCo se zapisuje do e-⁠shopu, nejdřív schválíte a jde to vrátit. Každý nástroj funguje i samostatně a platíte jen za moduly, které používáte.

[Spočítat fakturační aplikaci](/automatizace-dodavatelskych-faktur#konfigurator)
[Spočítat šablonu](/shoptet-premium-sablony-na-miru#konfigurator)

![](assets/ekosystem-v4-16x9.webp)![](assets/ekosystem-v4-9x16.webp)


[calculateSpočítat sestavu](/#kalkulacka)replayPřehrát znovu



Otázky k projektu

## Co vás u projektu může zajímat

Píše popisy umělá inteligence?expand\_more

Text navrhne jazykový model, ale do pevné šablony e-shopu a jen z doložených podkladů: z faktury, nabídky dodavatele, webu výrobce nebo PDF návodu. U každé hodnoty v kartě je doklad, odkud pochází. Jestli citace existuje a hodnota v ní opravdu stojí, kontroluje program, ne model. Údaj bez dokladu do návrhu neprojde a zůstane prázdný k doplnění.


Může se do e-shopu dostat chyba?expand\_more

Než se cokoli zapíše, vidíte náhled celé dávky: co je v e-shopu teď a co tam bude po zápisu. Nový produkt vznikne vždy skrytý, takže ho zákazník uvidí, až ho zveřejníte. Po zápisu se data načtou zpátky a porovnají s tím, co se posílalo. A každý zápis jde vrátit, celá dávka i jeden produkt.


Potřebuji k tomu feedy od dodavatelů?expand\_more

Nepotřebujete, ale hodně pomůžou. Když dodavatel posílá nabídku v XML, stahuje se pravidelně a její položky se každý den samy spárují s katalogem podle kódu a EAN. Když dodavatel nabídku neposílá, najde se stránka produktu na jeho webu podle kódu. A kdyby ani ta nebyla, stačí vložit do chatu odkaz nebo PDF návod.


Jde to i pro úpravy stávajících produktů?expand\_more

Ano. Stejný postup vytěží parametry schované v popisech existujících produktů do filtrů, a to pro celou kategorii najednou, a slabé texty přepíše podle šablony e-shopu. URL, kód, cena ani sklad se přitom nemění. Náhled před zápisem a možnost vrátit změnu platí i tady. Co všechno služba umí, popisuji na stránce [Zakládání produktů na Shoptetu](/zakladani-produktu-na-shoptetu).

Služby a studie k projektu

[Zakládání produktů na ShoptetuKarty nových produktů z faktur a nabídek dodavatelů.](/zakladani-produktu-na-shoptetu)
[Automatizace dodavatelských fakturVytěžení faktur, párování s bankou a ceny do e-shopu.](/automatizace-dodavatelskych-faktur)
[Případová studie: příjem zbožíJak se faktura dodavatele sama spáruje s katalogem a ohlídá marži.](/pripadova-studie-prijem-zbozi)
[Případová studie: plánování nákupuKolik a kdy objednat u desítek dodavatelů, s rezervou pro každý produkt.](/pripadova-studie-planovani-nakupu)



Cena

## Kolik stojí podobné řešení

Zakládání produktů je modul e-⁠commerce reportu, který se kupuje zvlášť mimo balík: **84 000 Kč** jednorázově a **od 3 500 Kč** měsíčně.

[Spočítat v konfigurátoru reportu](/reporting-pro-eshopy#konfigurator)



## Zakládáte nové produkty pořád ručně?

Projdu s vámi, odkud vám nové produkty přicházejí, a ukážu, jak by z nich vznikaly hotové karty.

[Nezávazná konzultace](/zakladani-produktu-na-shoptetu#kontakt)
[Všechny případové studie](/pripadove-studie)