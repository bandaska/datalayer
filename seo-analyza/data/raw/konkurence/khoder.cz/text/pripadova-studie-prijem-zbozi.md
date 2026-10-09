# URL: https://www.khoder.cz/pripadova-studie-prijem-zbozi

1. [Domů](/)
2. [Případové studie](/pripadove-studie)
3. Příjem zboží

Případová studie · Automatizace příjmu zboží

# Jak automatizace zkrátila příjem zboží od dodavatele z 12 hodin na půl hodiny

E-shop s nářadím a zahradní technikou nakupuje zboží od desítek dodavatelů a faktura za jednu dodávku má klidně přes sto položek. Každou z nich dřív někdo ručně dohledal v e-shopu a přepsal k ní nákupní cenu. Postavil jsem aplikaci, která fakturu přečte, spáruje s katalogem Shoptetu a ceny připraví ke schválení. Faktura o 100 položkách dnes zabere půl hodiny.

Platforma
:   Shoptet Premium, sklad Brani

Rozsah
:   21 dodavatelů zboží · faktury až o 127 položkách

Spuštěno
:   červen 2026

lockfakturace/parovani

sharerefresh

![Párování faktury od dodavatele s produkty e-shopu: položky podle jistoty shody, ceny teď a po zápisu, rozhodnutí u každého řádku](assets/cs/prijem-zbozi/parovani-v2.webp)

Spárováno samo84 %

Výsledek v číslech

30 minut
trvá dnes příjem faktury o 100 položkách. Dřív to bylo kolem 12 hodin ruční práce.

84 %
položek faktury se s produktem v e-⁠shopu spáruje samo a s vysokou jistotou.

9 z 10
návrhů obsluha potvrdí beze změny.

2 261
položek z 58 faktur prošlo od června párováním s katalogem e-⁠shopu.

01 · Výchozí stav

## Příjem zboží zabíral polovinu pracovní doby

E-shop denně vyřizuje stovky objednávek a zboží bere od desítek dodavatelů, většinou z Polska. Faktura za jednu dodávku má desítky položek, ta nejdelší jich měla 127. Názvy jsou v polštině, kódy dodavatele se od kódů v e-shopu často liší a většina faktur přichází v eurech.

U každé položky bylo potřeba najít produkt v katalogu, přepsat nákupní cenu, přepočítat ji kurzem, zkontrolovat, jestli prodejní cena pořád drží marži, a připravit podklad pro sklad. Faktura o 100 položkách tak znamenala kolem 12 hodin práce a příjem zboží zabíral polovinu pracovní doby.

21dodavatelů zboží na sklad, každý s vlastními kódy a vlastní podobou faktury.



Příjem faktury o 100 položkách

Minuty práce obsluhy. Méně je lépe.

* Dřív ručně
* Dnes

Faktura o 100 položkách

720

30

Data v tabulce

Příjem faktury o 100 položkách

| Doklad | Dřív ručně | Dnes |
| --- | --- | --- |
| Faktura o 100 položkách | 720 min | 30 min |

02 · Jak to funguje

## Od faktury dodavatele po ceny v e-shopu

[Co aplikace umí](/automatizace-dodavatelskych-faktur)

1. 01

   ### Faktura dorazí e-mailem, nebo ji nahrajete

   Faktury od dodavatelů zboží se samy zařadí do Příjmu zboží. Na jednom místě je vidět, co čeká na spárování, co je rozpracované a kde už jsou ceny zapsané.

   fakturace/prijem-zbozi

   ![Přehled Příjmu zboží: faktury od dodavatelů a stav párování u každé z nich](assets/cs/prijem-zbozi/prijem-v2.webp)
2. 02

   ### Položky se spárují s katalogem

   Aplikace přečte z faktury všechny položky: kód dodavatele, EAN, množství, cenu a měnu. Ke každé najde produkt v e-shopu podle kódu, EAN, dřív potvrzené shody, nebo podle názvu, i když je faktura v polštině. Jisté shody jdou do sekce Vysoká jistota, nejisté a nové položky do sekce Ke kontrole.

   fakturace/parovani

   ![Sekce Ke kontrole: nejisté shody a položky, které v e-shopu zatím nejsou](assets/cs/prijem-zbozi/kontrola-v2.webp)
3. 03

   ### Nákupní cena a marže

   Nákupní cenu z faktury aplikace přepočítá kurzem a umí k ní přičíst i dopravu rozpočítanou na kus. Vedle ukáže dnešní ceny v e-shopu a marži po zápisu. Když zdražení srazí marži o víc než 1 p. b., navrhne novou prodejní cenu končící devítkou, která marži vrátí.

   fakturace/parovani

   ![Položka faktury vedle produktu v e-shopu: nákupní a prodejní cena teď a po zápisu, marže](assets/cs/prijem-zbozi/ceny-v2.webp)
4. 04

   ### Nový produkt rovnou z faktury

   Položku, která v e-shopu ještě není, stačí označit jako novou. Aplikace předvyplní přeložený název, kód, EAN a prodejní cenu podle cílové marže. Při zápisu produkt v Shoptetu založí jako skrytý, takže ho před zveřejněním doplníte o fotky a popis.

   fakturace/parovani

   ![Nové produkty s přeloženým názvem, kódem, EAN a navrženou prodejní cenou](assets/cs/prijem-zbozi/nove-v2.webp)
5. 05

   ### Náhled a zápis do Shoptetu

   Než se cokoli zapíše, jde si výsledek prohlédnout nanečisto. Potvrzovací okno pak řekne, kolik cen se změní, jestli se zakládají nové produkty a že zápis míří na živý e-shop. Ceny se zapisují po dávkách a u každé položky je vidět, jak zápis dopadl.

   fakturace/parovani

   ![Potvrzení zápisu cen do Shoptetu s upozorněním, že míří na živý e-shop](assets/cs/prijem-zbozi/zapis-v2.webp)
6. 06

   ### Příjemka pro sklad a cesta zpět

   Po zápisu stáhnete jedním kliknutím příjemku pro skladový systém Brani. Aplikace si u každého zápisu pamatuje i původní hodnotu, takže vrátit jde celá dávka i jeden produkt.

   fakturace/parovani

   ![Dokončené párování: ceny zapsané do Shoptetu, příjemka pro sklad a možnost zápis vrátit](assets/cs/prijem-zbozi/hotovo-v2.webp)

03 · Párování v číslech

## Většinu položek spáruje aplikace sama

Nejvíc shod najde podle kódu dodavatele a v naučené paměti. Každé potvrzení si zapamatuje, takže položku, kterou jednou spárujete ručně, příště pozná sama. Shody podle názvu vždy pošle ke kontrole.

Podle čeho se položka faktury spáruje s produktem

Podíl ze všech řádků faktur

Kód dodavatele31 %

Naučená shoda28 %

EAN19 %

Název16 %

Bez návrhu6 %

94 %řádků faktur dostane návrh konkrétního produktu

99,5 %shod podle kódu dodavatele obsluha potvrdí beze změny

1 538naučených párů položka dodavatele ↔ produkt e-shopu

04 · Ceny a marže

## Marže pod dohledem u každé položky

S každou fakturou se do e-shopu propíše aktuální nákupní cena a u každé položky je předem vidět, co udělá s marží. Když dodavatel zdraží a marže klesne o víc než 1 p. b., aplikace navrhne novou prodejní cenu. Akční ceny nechává být a dokud akce běží, počítá marži z nich.

Do nákupní ceny jde započítat i doprava. Náklad za dovoz se rozpočítá na kusy podle hmotnosti nebo počtu a marže se pak počítá z toho, kolik zboží na skladě skutečně stojí.

přes 2 000cen zapsaných do Shoptetu, každá s náhledem předem a možností ji vrátit

1 p. b.pokles marže, od kterého aplikace navrhne novou prodejní cenu

175nových produktů založených rovnou z faktury, bez přepisování do administrace

05 · Kontrola

## Poslední slovo má vždycky člověk

Aplikace sama od sebe nic nezapíše. Návrhy připraví, ale každou položku potvrdí obsluha: jisté shody jedním tlačítkem pro celou sekci, nejisté po jedné. Zapsat jde teprve ve chvíli, kdy je rozhodnuto o všech řádcích.

Každý zápis má v auditu uloženou původní i novou hodnotu. Kdyby se něco nepovedlo, ceny se vrátí na původní hodnoty, u celé dávky i u jednoho produktu.

Co s návrhem udělá člověk

Podíl ze všech řádků faktur

* Potvrdí beze změny**84 %**
* Opraví nebo založí nový produkt**11 %**
* Přeskočí**5 %**





Tři nástroje, jeden okruh dat

## Jak to do sebe zapadá.

Faktura v aplikaci nekončí. Nákupní ceny jdou do Shoptetu, náklady do reportu a z reportu se vrací návrh, co nakoupit.

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

### Od faktury až k prodeji

close

1. receipt\_long

   Fakturační aplikace

   Přijde faktura od dodavatele. Aplikace z ní vezme nákupní ceny.

   **nákupní ceny a nový produkt**lockpo vašem schválení
2. storefront

   Váš e-⁠shop

   Ceny a marže se po vašem schválení propíšou do Shoptetu. Produkt, který chybí, se založí jako skrytý.
3. monitoring

   E-⁠commerce report

   Zakládání produktů v reportu mu dopíše kartu. I ta se zapíše až po schválení.

   arrow\_forward**Do e-⁠shopu**: karta produktulockpo vašem schválení
4. web

   Šablona

   Šablona produkt prodává.

trending\_up

U e-⁠shopu s nářadím

159

návrhů karet vzniklo takhle za prvních 10 dní.

route

Příběh v mapě

### Ceny drží pravidla

close

1. receipt\_long

   Fakturační aplikace

   Z faktury jde do reportu nákupní cena.

   **nákupní cena**
2. monitoring

   E-⁠commerce report

   Report z ní počítá marži, hlídá velkoobchodní ceny a navrhuje, co doprodat.

   **VO ceny a výprodej**lockpo vašem schválení
3. storefront

   Váš e-⁠shop

   Nové ceny a výprodej se do Shoptetu zapíšou po vašem schválení.
4. web

   Šablona

   Šablona ukáže úsporu, nejnižší cenu za 30 dní i graf ceny.

   add**Z reportu**: nejnižší cena za 30 dní a graf ceny

trending\_up

U e-⁠shopu s nářadím

574

produktů navrhl report k akci v září 2026.

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

receipt\_long›storefront›monitoring›web

### Od faktury až k prodeji

Faktura od dodavatele upraví nákupní ceny a marži v Shoptetu. Chybějící produkt se založí skrytý, kartu mu dopíše [Zakládání produktů](/zakladani-produktu-na-shoptetu) a prodává ho šablona. U e-⁠shopu s nářadím takhle za prvních 10 dní vzniklo 159 návrhů karet.

routeUkázat v mapě

receipt\_long›monitoring›storefront›web

### Ceny drží pravidla

Z nákupní ceny na faktuře počítá report marži. Podle ní hlídá velkoobchodní ceny a navrhuje, [co doprodat](/financni-planovani-nakupu). Šablona pak ukáže úsporu, nejnižší cenu za 30 dní i graf ceny. U e-⁠shopu s nářadím report v září 2026 navrhl akci u 574 produktů.

routeUkázat v mapě

receipt\_long›monitoring

### Čistý zisk ze skutečných nákladů

Náklady z faktur a cena dopravy z rozpisů PPL a GLS jdou každý den do reportu. U e-⁠shopu s nářadím tak vyšlo najevo, že dopravné pokrývalo jen 84 % nákladů na dopravu. Po úpravě smlouvy s dopravcem a ceníku pokrývá 112 %.

routeUkázat v mapě

lockCo se zapisuje do e-⁠shopu, nejdřív schválíte a jde to vrátit. Každý nástroj funguje i samostatně a platíte jen za moduly, které používáte.

[Spočítat report](/reporting-pro-eshopy#konfigurator)
[Spočítat šablonu](/shoptet-premium-sablony-na-miru#konfigurator)

![](assets/ekosystem-v4-16x9.webp)![](assets/ekosystem-v4-9x16.webp)


[calculateSpočítat sestavu](/#kalkulacka)replayPřehrát znovu



Otázky k projektu

## Co vás u projektu může zajímat

Musí být faktura v nějakém formátu?expand\_more

Nemusí. Stačí PDF, jak ho dodavatel pošle, i sken. Faktura může dorazit rovnou do schránky, nebo ji nahrajete, klidně víc najednou. Aplikace z ní vytáhne položky s kódem, EAN, množstvím a cenou a pozná i fakturu v eurech.


Co když aplikace spáruje položku špatně?expand\_more

Bez potvrzení se nic nezapíše. Nejisté shody aplikace sama odloží do sekce Ke kontrole, kde vyberete jiný produkt, založíte nový, nebo řádek přeskočíte. Opravu si zapamatuje pro další faktury od stejného dodavatele. A kdyby se do e-shopu přece jen dostala špatná cena, vrátíte ji na původní hodnotu, celou dávku i jeden produkt.


Jde to i s jiným e-shopem nebo skladem?expand\_more

Ano. U e-shopu s nářadím je napojený Shoptet a skladový systém Brani, ale napojení se vždy staví na míru tomu, co používáte: e-shop, ERP i sklad. Když ceny nejde zapisovat přes API, připraví aplikace seznam nových cen k ručnímu přepsání.


Jak dlouho trvá nasazení?expand\_more

Záleží na počtu dodavatelů a na tom, kam se mají ceny a příjemky zapisovat. Začínáme konzultací nad vašimi fakturami a procesem, pak napojím schránku, katalog e-shopu a sklad. Párování podle kódu a EAN funguje od první faktury a s každou potvrzenou shodou je rychlejší, protože si aplikace páry pamatuje. Co všechno služba umí, popisuji na stránce [Automatizace dodavatelských faktur](/automatizace-dodavatelskych-faktur).

Služby a studie k projektu

[Automatizace dodavatelských fakturVytěžení faktur, párování s bankou a ceny do e-shopu.](/automatizace-dodavatelskych-faktur)
[Automatizace fakturace e-shopuJak propojit e-shop s fakturací a párováním plateb.](/automatizace-fakturace-eshopu)
[Případová studie: plánování nákupuKolik a kdy objednat u desítek dodavatelů, s rezervou pro každý produkt.](/pripadova-studie-planovani-nakupu)
[Případová studie: zakládání produktůJak z faktury a podkladů dodavatele vznikne hotová karta produktu.](/pripadova-studie-zakladani-produktu)



Cena

## Kolik stojí podobné řešení

Automatizace příjmu zboží vychází na **65 000 Kč** jednorázově a **3 500 Kč** měsíčně. Spolu s dalšími moduly aplikace si sestavu spočítáte v konfigurátoru.

[Spočítat v konfigurátoru](/automatizace-dodavatelskych-faktur#konfigurator)



## Kolik hodin týdně vám bere příjem zboží?

Projdu s vámi, jak dnes přijímáte faktury od dodavatelů, a řeknu, co z toho jde zautomatizovat.

[Nezávazná konzultace](/automatizace-dodavatelskych-faktur#kontakt)
[Všechny případové studie](/pripadove-studie)