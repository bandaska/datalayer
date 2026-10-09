# URL: https://www.khoder.cz/pripadova-studie-planovani-nakupu

1. [Domů](/)
2. [Případové studie](/pripadove-studie)
3. Plánování nákupu

Případová studie · Plánování nákupu

# Plánování nákupů od dodavatelů na e-shopu s desítkami dodavatelů a stovkami objednávek denně

E-⁠shop s nářadím odebírá zboží od desítek dodavatelů a denně vyřizuje stovky objednávek. Každý dodavatel má jinou dodací lhůtu a velká část sortimentu má svou sezónu. Na základě požadavků klienta jsem postavil systém, který dokáže pro víc než 3 000 produktů spočítat, kolik a kdy objednat, a nákup seřadí podle toho, kde hrozí největší ztráta tržeb.

Platforma
:   Shoptet Premium

Rozsah
:   přes 3 000 produktů · desítky dodavatelů

Spuštěno
:   duben 2026

lockreport.khoder.cz/dashboard/planovac-nakupu

sharerefresh

![Plánovač nákupu: změny za posledních 7 dní a produkty k objednání se stavem skladu a doporučeným množstvím](assets/cs/planovani-nakupu/planovac-v2.webp)

Cílové pokrytí85 %

Výsledek v číslech

85 %
poptávky vykryje sklad, když se nakupuje podle plánu s rezervou pro každý produkt. S plošnou rezervou to bylo 61 %.

1,45×
víc peněz ve skladu by potřebovala plošná rezerva, aby pokryla aspoň stejnou poptávku.

3 000+
produktů má vlastní doporučení, kolik a kdy objednat.

6
vlivů spojuje odhad poptávky: prodeje, sezóna, hledanost na Googlu, trend, svátky a den v týdnu.

01 · Výchozí stav

## Stejná rezerva pro všechno nestačila

E-shop denně vyřizuje stovky objednávek a zboží bere od desítek dodavatelů, většinou z Polska. Každý z nich vozí zboží jinak rychle a v jiném balení. Část sortimentu se prodává celý rok, část jen v sezóně, třeba zahradní technika na jaře a v létě nebo topidla v zimě. U tisíců produktů se od oka nedá odhadnout, co objednat teď, co počká a co by jen leželo ve skladu.

Nejjednodušší pravidlo je držet u každého produktu rezervu na stejný počet dní. Tak se nakupuje v mnoha e-shopech a tak začínal i plánovač v tomto e-shopu: k odhadu prodejů přidal pět dní navíc pro všechno. Když jsem ale na roční historii poptávky změřil, co takové pravidlo dělá, vyšlo, že sklad vykryl jen 61 % poptávaných kusů. U zboží, které se prodává nárazově, pět dní nestačí, a u pomalého a drahého zboží rezerva zbytečně váže peníze.

39 %poptávaných kusů neměl e-shop při stejné rezervě pro všechny produkty hned skladem.

02 · Jak to funguje

## Od prodejů po objednávku u dodavatele

[Co plánovač umí](/planovani-nakupu-od-dodavatelu)

1. 01

   ### Odhad poptávky u každého produktu

   Základem je rychlost prodeje za poslední tři měsíce, u pomalu prodávaného zboží za poslední měsíc. Plánovač ji upraví podle sezóny, poptávky ve vyhledávání Google, meziročního trendu, svátků a dne v týdnu. Každý z těch vlivů má strop, aby jedna velkoobjednávka nebo vánoční špička nerozhodila celý nákup.

   report.khoder.cz/dashboard/planovac-nakupu

   ![Rozbalené produkty v plánovači: prodáno za 30 dní, rychlost prodeje, odhad denní poptávky a sezónní koeficient](assets/cs/planovani-nakupu/poptavka-v2.webp)
2. 02

   ### Kolik objednat, aby zboží vydrželo

   Objednávka musí vydržet, než dorazí další. Plánovač proto sečte horizont nákupu (30 dní), dodací lhůtu konkrétního dodavatele a rezervu produktu, vynásobí je odhadem poptávky a odečte, co je skladem a co už je na cestě. Dodací lhůtu i horizont jde nastavit u každého dodavatele zvlášť.

   report.khoder.cz/dashboard/planovac-nakupu

   ![Dodavatel v plánovači: rozpad priorit, objednávka v kusech, sklad u dodavatele a nastavení dodací lhůty a horizontu](assets/cs/planovani-nakupu/lhuta-v2.webp)
3. 03

   ### Balení, minimální odběr a sklad dodavatele

   Spočítané množství ještě neznamená, že jde objednat. Doporučení se dorovná na celá balení a nikdy nejde pod minimální odběr. U dodavatelů, kteří posílají denní nabídku, vidí plánovač i jejich sklad: co dodavatel nemá, plán neslibuje a nevykrytou potřebu ukáže zvlášť.

   report.khoder.cz/dashboard/planovac-nakupu

   ![Produkty k objednání se skladem u dodavatele a upozorněním, když má dodavatel jen část doporučeného množství](assets/cs/planovani-nakupu/sklad-v2.webp)
4. 04

   ### Nejdřív to, co by stálo nejvíc tržeb

   Pořadí určují ohrožené tržby: kolik by e-shop ztratil, kdyby produkt nebyl skladem. Vyprodané a kritické produkty mají v pořadí větší váhu než ty, které stačí objednat brzy, a sledované jsou na konci. Kritický je produkt, kterému zásoba dojde dřív, než by dorazila objednávka odeslaná dnes. Stejně se dá plán projít i po kategoriích.

   report.khoder.cz/dashboard/planovac-nakupu

   ![Plán nákupu po kategoriích: produkty k objednání, vyprodané a kritické položky a sklad u dodavatele](assets/cs/planovani-nakupu/poradi-v2.webp)
5. 05

   ### Objednávka po dodavatelích

   Pro samotné objednávání je nejpraktičtější pohled po dodavatelích: kolik produktů je u koho potřeba objednat, kolik z nich je vyprodaných nebo kritických a kolik jich má dodavatel skladem. Vybrané produkty jde stáhnout do tabulky pro dodavatele a objednávku předvyplnit jedním kliknutím ve fakturačním systému.

   report.khoder.cz/dashboard/planovac-nakupu

   ![Plán nákupu po dodavatelích: produkty k objednání, vyprodané a kritické položky a sklad u dodavatele](assets/cs/planovani-nakupu/dodavatele-v2.webp)
6. 06

   ### Výhled na celý rok

   Stejný výpočet běží i na rok dopředu. Roční plán rozdělí potřebu každého produktu do zimy, jara, léta a podzimu, takže je vidět, co předzásobit před sezónou a o čem se vyplatí jednat s dodavatelem s předstihem.

   report.khoder.cz/dashboard/planovac-nakupu/rocni

   ![Roční plán nákupu: odhad prodaných kusů každého produktu po sezónách](assets/cs/planovani-nakupu/rocni-v2.webp)

03 · Rezerva podle produktu

## Stejné peníze ve skladu, víc vykryté poptávky

Na rezervě se v plánovači rozhoduje o penězích, ne jen o kusech. U každého produktu spočítá z roční historie poptávky, kolik tržeb přinese každá koruna, která v rezervě leží ve skladu. Rychle prodávaný produkt s dobrou marží dostane rezervy víc, pomalý a drahý málo nebo žádnou. E-shop přitom nastavuje jediné číslo: cílové pokrytí poptávky.

Pokrytí poptávky skladem

Podíl poptávaných kusů, které e-⁠shop vykryje ze skladu

Plošná rezerva 5 dní61 %

Rezerva podle produktu85 %

+24 p. b.pokrytí poptávky navíc proti stejné rezervě pro všechny produkty

365 dnískutečné poptávky každého produktu, ze kterých se počítá jeho rezerva

0 až 120 dnírezervy dostane produkt podle toho, kolik tržeb za korunu ve skladu přinese

04 · Dodavatelé

## Plán, který jde u dodavatele opravdu objednat

Každý z dodavatelů e-shopu má jinou dodací lhůtu a plánovač s ní počítá zvlášť. Od dodavatele, který vozí zboží do týdne, se objednává v menších dávkách, u toho s měsíční lhůtou musí jedna objednávka pokrýt delší dobu. Kritické produkty se u pomalejšího dodavatele ukážou dřív.

Plán se každý den přepočítá z čerstvých prodejů, stavu skladu a nabídek dodavatelů. Kdo nakupuje, vidí v pruhu změn, co se za poslední týden nově vyprodalo, co je kritické a co je potřeba předzásobit před sezónou.

30 dníhorizont nákupu, ke kterému plán přičte dodací lhůtu dodavatele a rezervu produktu

desítkydodavatelů, každý s vlastní dodací lhůtou a horizontem nákupu

každý dense plán přepočítá z čerstvých prodejů, skladu a nabídek dodavatelů

05 · Kontrola

## Doporučení, ne příkaz

Plánovač sám nic neobjedná. Doporučené množství jde u každého produktu přepsat a zbytek plánu, včetně nákupu v rámci rozpočtu, pak počítá s novým číslem. Znalost trhu, chystaná kampaň nebo zpráva od dodavatele mají vždycky přednost.

Každý den se doporučení uloží a později se porovná s tím, co se opravdu prodalo. Novou verzi výpočtu pustím do provozu, až když na historii tohoto e-shopu obstojí.





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

Funguje to i pro sezónní sortiment?expand\_more

Ano. Sezónnost plánovač neměří proti průměrnému měsíci, ale porovná období, které objednávka pokryje, s obdobím, ze kterého zná rychlost prodeje. K tomu přidá poptávku ve vyhledávání Google a svátky. Pruh změn upozorní na produkty, které je potřeba předzásobit před sezónou, a roční plán ukáže, kolik čeho půjde v zimě, na jaře, v létě a na podzim.


Co když dodavatel zboží nemá?expand\_more

U dodavatelů, kteří posílají denní nabídku, vidí plánovač i jejich sklad. Doporučení nepřekročí, co dodavatel má, a zbytek potřeby ukáže zvlášť, takže víte, že je potřeba hledat jinde. Když sklad dodavatele nestačí ani na minimální odběr, plán doporučí nulu a řekne proč. U produktu navíc vidíte náhradní produkty, které můžete objednat místo něj.


Potřebuji k tomu feedy od dodavatelů?expand\_more

Nepotřebujete. Plán stojí na prodejích a skladu e-shopu, na dodacích lhůtách a na sezóně. Nabídka dodavatele v XML k tomu přidá jeho aktuální sklad, takže plán neslibuje zboží, které dodavatel nemá. U dodavatelů bez nabídky funguje plánování stejně, jen bez tohoto stropu.


Jde to i bez Shoptetu?expand\_more

Ano. U e-shopu s nářadím bere plánovač prodeje a sklad ze Shoptetu, ale umí vycházet i z účetního systému Pohoda, když se v něm vede sklad a prodeje. Dodací lhůty, balení a minimální odběry se nastavují přímo v plánovači, takže nezáleží na tom, co z toho umí e-shop. Co všechno služba umí, popisuji na stránce [Plánování nákupu od dodavatelů](/planovani-nakupu-od-dodavatelu).

Služby a studie k projektu

[Plánování nákupu od dodavatelůCo a kdy objednat, aby nedošlo zboží.](/planovani-nakupu-od-dodavatelu)
[Finanční plánování nákupuKolik peněz leží ve skladu a jak nakupovat podle cash flow.](/financni-planovani-nakupu)
[Případová studie: příjem zbožíJak se faktura dodavatele sama spáruje s katalogem a ohlídá marži.](/pripadova-studie-prijem-zbozi)
[Případová studie: zakládání produktůJak z faktury a podkladů dodavatele vznikne hotová karta produktu.](/pripadova-studie-zakladani-produktu)



Cena

## Kolik stojí podobné řešení

Plánování nákupu je modul e-⁠commerce reportu: **17 000 Kč** jednorázově a **1 500 Kč** měsíčně k ceně reportu.

[Celý ceník služby](/planovani-nakupu-od-dodavatelu#cenik)



## Víte, co objednat, ještě než to dojde?

Projdu s vámi, jak dnes plánujete nákup od dodavatelů, a ukážu na datech vašeho e-shopu, jak by plán vypadal.

[Nezávazná konzultace](/planovani-nakupu-od-dodavatelu#kontakt)
[Všechny případové studie](/pripadove-studie)