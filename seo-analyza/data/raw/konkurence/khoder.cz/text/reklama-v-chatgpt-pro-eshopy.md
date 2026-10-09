# URL: https://www.khoder.cz/reklama-v-chatgpt-pro-eshopy

1. [Domů](/)
2. Reklama v ChatGPT


OpenAI Ads · produktové kampaně pro české e-shopy

# Reklama v ChatGPT pro e-shopy.

Nový kanál, kde se zákazník neptá na produkt, ale na problém. Nastavím ho **na klíč — produktový feed, strukturu kampaně i měření konverzí**, protože tahle platforma nemá zkušební režim a každá chyba se zapíše rovnou naostro.

[Chci reklamu v ChatGPT](#kontakt)
[Jak to nastavuju](#moduly)

![Produktová reklama v odpovědi ChatGPT — tři produktové karty s cenami, štítek Sponzorováno a tabulka návratnosti podle sestav](assets/chatgpt-hero.webp)

Do reklamy834 z 5 803

verifiedMěření od prvního dne

8/2026od kdy jde v Česku cílit na ChatGPT

350 Kč/denminimální rozpočet kampaně, který platforma vyžaduje

28pastí platformy zdokumentovaných z ostrého provozu

5měřených událostí od zobrazení po objednávku

Co k tomu potřebujete mít

![](assets/icon/shoptet-ico.png)Shoptet feed
smart\_toyReklamní účet OpenAI
tagGoogle Tag Manager
![](assets/icon/ga.webp)Google Analytics 4
cookieConsent Mode v2
databaseData o výkonu produktů

Rychlá odpověď

## Jak spustit reklamu v ChatGPT pro e-shop?

**Reklama v ChatGPT** je produktová kampaň, ve které se vaše zboží zobrazí přímo v odpovědi na dotaz zákazníka. Běží na **produktovém feedu**, ne na klíčových slovech — Shoptet ho umí vyexportovat hotový. V Česku jde cílit **od srpna 2026**, minimální rozpočet je **350 Kč na den a kampaň**.

Na pořadí kroků záleží: **nejdřív měření konverzí na webu, teprve pak kampaň**. Způsob nákupu se u kampaně po založení nedá změnit, takže kampaň postavená bez měření se musí zakládat znovu. Platforma navíc nemá zkušební režim ani testovací účet — jedinou zpětnou vazbou je skutečný zápis.

Tři části, které musí sedět dohromady

## Feed, kampaň, měření.

Každá z nich se dá udělat špatně tak, že to nepoznáte. Feed pustí do reklamy zboží, které nechcete. Kampaň se založí s cílením na Spojené státy. A měření mlčí, takže **tři měsíce nevíte, jestli se to vyplatilo**.

dataset

### Produktový feed

Shoptet ho vydá hotový. My do něj přidáme jen dvě pole — příznak pro reklamu a výkonnostní štítek — a ověříme, že se nezměnilo nic jiného.

rule

### Struktura kampaně

Sestavy podle návratnosti, ne podle kategorií. Nabídka odvozená z dat vašeho e-shopu, cílení na Česko, vše zakládané pozastavené.

query\_stats

### Měření konverzí

Pět událostí od zobrazení produktu po objednávku, napojených na souhlas s cookies. Bez něj kampaň nemá na co optimalizovat.

01 · Produktový feed

## Shoptet ho vydá hotový. My do něj saháme co nejmíň.

Feed pro OpenAI najdete v administraci Shoptetu pod Propojení a XML feedy — nemusí se nic převádět. Do souboru pak **přidáme přesně dvě pole**: příznak, jestli produkt smí do reklamy, a výkonnostní štítek. Že se nezměnilo nic jiného, si skript zkontroluje sám, a když by spároval míň než devadesát procent produktů, radši nezapíše nic.

* Zdrojový soubor zůstává nedotčený, přidávají se jen dvě pole
* Kontrola párování a rozsahu změn před každým zápisem
* Reálné nálezy z katalogů: duplicitní item\_id, neplatné GTIN, ztracené varianty
* Aktualizace dvakrát denně, výměna souboru naráz — nikdy napůl

![Produktový feed pro OpenAI — obohacení o pole is_ads_eligible a custom_label_2 s kontrolou rozsahu změn](assets/chatgpt-feed.webp)

Přidaná pole2

shieldPři pochybnosti nezapíše

02 · Výběr produktů

## Neinzerujeme celý katalog. Jen to, co se vrací.

Produkty rozdělíme podle **návratnosti za posledních devadesát dnů** a podle marže. U jednoho klienta z toho vyšlo, že z 5 803 produktů má smysl inzerovat 834 — zbytek buď nevydělává, nebo nemá dost dat. Vyřazené zboží se z feedu **nemaže, jen se označí**, takže zůstává dohledatelné v organickém vyhledávání ChatGPT.

* Sestavy podle výkonnostních pásem, ne podle kategorií zboží
* Nabídka za proklik odvozená z naměřené návratnosti daného pásma
* Cenová podlaha jen tam, kde ji data podporují — u někoho nedává smysl vůbec
* Žebříček se počítá znovu pro každý e-shop, nekopíruje se vzor

![Výběr produktů do reklamy podle návratnosti — pásma over-index, index a near-index vybraná, zbytek vyřazený](assets/chatgpt-tiery.webp)

Z katalogu834

tunePodle ROAS a marže

03 · Měření konverzí

## Bez měření nemá kampaň na co optimalizovat.

Na web se nasazuje měřicí kód OpenAI a posílá **pět událostí** — zobrazení stránky, zobrazení produktu, přidání do košíku, zahájení pokladny a dokončenou objednávku, s částkou i kódem produktu. Vše přes Google Tag Manager, společně se zbytkem měření. Se souhlasem odejde každá událost právě jednou, **bez souhlasu se knihovna vůbec nenačte**.

* Napojení na Consent Mode v2 — žádné měření bez souhlasu
* Ověřeno proti reálným objednávkám, ne jen v náhledu
* U Shoptetu ověřený postup, který nespoléhá na automatické mapování
* Kontrola v reklamním účtu, ne v konzoli prohlížeče — ta u serverového měření nic neukáže

![Měření konverzí z ChatGPT reklamy — pět událostí od zobrazení stránky po objednávku, napojené na souhlas s cookies](assets/chatgpt-mereni.webp)

Měřené události5

cookieConsent Mode v2

Pasti, které nejsou v dokumentaci

## Platforma nemá zkušební režim.

Žádný sandbox, žádný testovací účet. Jediná zpětná vazba je skutečný zápis do účtu, a protože kampaň vzniká na několik kroků, po chybě v polovině zůstane rozdělaná. Tohle je pár věcí, na které jsem narazil naostro — a kvůli kterým každý zápis nejdřív projde vlastní kontrolou.

map

#### Výchozí cílení míří do USA

Kampaň založená v rozhraní cílí na Spojené státy. U českého e-shopu je to vždycky omyl.

language

#### Feed dostane špatnou zemi

Feed vytvořený v rozhraní se založí s americkým trhem a zemi jde nastavit jen při zakládání a jen přes API.

block

#### Bez favicony neprojde kontrola značky

Chybějící ikona webu shodí kontrolu značky a reklamy se vůbec nezobrazují.

payments

#### Minimum rozpočtu není v dokumentaci

Pod 350 Kč na den kampaň neprojde. Zjistíte to až tím, že vám zápis spadne.

edit\_note

#### Vlastní text do reklamy nedostanete

U produktové reklamy se schvaluje jenom název. Claim typu „doprava zdarma” tam nepatří.

lock

#### Způsob nákupu je nevratný

Kampaň spuštěnou na kliky nejde překlopit na konverze. Musí vzniknout nová.

Jak to probíhá

## Nejdřív měřit, potom stavět.

Pořadí není organizační zvyk. Způsob nákupu se u kampaně po založení nedá změnit — kdo staví dřív, než měří, staví dvakrát.

fact\_check

Krok 1

##### Předpoklady

Účet, feed, favicona, měření na webu.

dataset

Krok 2

##### Feed

Obohacení a nasazení s kontrolou.

insights

Krok 3

##### Změřit výkon

Návratnost a marže za 90 dnů.

rule

Krok 4

##### Zapsat strukturu

Vše vzniká pozastavené, s možností vrátit.

rocket\_launch

Krok 5

##### Spustit

Až když měření potvrdí, že dorazilo.

Z praxe · První nasazení

## Jak to dopadlo u e-shopu s 5 800 produkty.

Kanál je nový, takže dlouhodobá čísla zatím nemá nikdo. Ukázat můžu rozsah práce a to, že měření od prvního dne skutečně jede.

### Z celého katalogu se do reklamy dostala sedmina.

E-shop s nářadím a zahradní technikou, **5 803 produktů** ve feedu. Produkty jsme rozdělili podle návratnosti za devadesát dnů a do reklamy pustili **834 z nich** ve třech sestavách. Zbytek zůstal ve feedu jen pro organické vyhledávání. Měření na webu bylo hotové dřív než kampaň, takže první den provozu už chodila kompletní data.

834produktů  
v reklamě

3sestavy podle  
návratnosti

100 %pokrytí identifikátorů  
v měření

![Rozdělení katalogu do výkonnostních pásem — z 5 803 produktů jich do reklamy jde 834](assets/chatgpt-tiery.webp)

Feed
5 803

tune
Vybráno podle ROAS



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

★★★★★

Chtěl bych poděkovat panu Khoderovi za pomoc s nastavením Google účtů a také za služby, které jsem požadoval se svou propagací na Google. Vyzkoušel jsem více možností a pokaždé to dopadlo špatně. U pana Khodera musím říct, že na čem jsme se domluvili, tak to tak bylo. Za mě skvělá práce a milý přístup. Ještě jednou Vám moc děkuji a jsem si jistý, že ve spolupráci s Vámi budu nadále pokračovat.

Číst celou recenzi →

V

Václav Zrno

JednatelZÁMEČNICTVÍ & AUTOKLÍČE Chomutov s.r.o.Listopad 2025



close

★★★★★




FAQ · Časté otázky

## Co se u reklamy v ChatGPT ptají nejčastěji.

Kolik musím na reklamu v ChatGPT počítat minimálně?expand\_more

Platforma má pevné minimum denního rozpočtu **350 Kč na kampaň**. To je spodní hranice, pod kterou kampaň nejde spustit — v dokumentaci uvedená není, zjistí se až při zápisu. K tomu připočtěte jednorázové nastavení: feed, strukturu kampaně a měření konverzí na webu. Kolik utratíte nad minimem, si řídíte sami.


Musím mít Shoptet?expand\_more

Nemusíte, ale se Shoptetem odpadá první krok. Shoptet umí **produktový feed pro OpenAI vyexportovat hotový** — najdete ho v administraci pod Propojení a XML feedy. Na jiné platformě se feed musí sestavit nebo převést, což je práce navíc, ale nic zásadního. Zbytek nastavení je stejný.


Čím se reklama v ChatGPT liší od Google Nákupů?expand\_more

Zákazník se neptá na produkt, ale na problém. Místo dotazu, který jde přepsat na klíčové slovo, přijde věta typu „jaká aku vrtačka je nejlepší na doma”. Produkt se zobrazí **jako součást odpovědi**, ne jako řádek ve výsledcích. Pro e-shop z toho plyne jedna praktická věc: záleží víc na kvalitě dat o produktu než na textu reklamy — vlastní claim do produktové reklamy vůbec nedostanete, reviduje se jenom název.


Uvidím konverze z ChatGPT ve svém měření?expand\_more

Ano. Na web se nasazuje měřicí kód OpenAI, který posílá **pět událostí** — zobrazení stránky, zobrazení produktu, přidání do košíku, zahájení pokladny a dokončenou objednávku. Události respektují souhlas s cookies: bez souhlasu se neodešle nic a měřicí knihovna se ani nenačte. U Shoptetu na to mám ověřený postup, který jede přes [Google Tag Manager](/nastaveni-google-tag-manageru) společně se zbytkem měření.


Jak dlouho trvá nasazení?expand\_more

Počítejte s jedním až dvěma týdny. Nejdřív musí být hotové měření a schválený reklamní účet, teprve pak má smysl stavět kampaň. **Způsob nákupu se u kampaně po založení už nedá změnit**, takže kampaň spuštěná na kliky se na konverze nepřeklopí a musí vzniknout znovu.


Můžu inzerovat celý katalog?expand\_more

Můžete, ale nedoporučuju to. U klienta s **5 803 produkty** jsme do reklamy pustili **834** z nich — vybrané podle návratnosti za posledních devadesát dnů a podle marže. Zbytek se z reklamy vyřadí příznakem, ne smazáním z feedu, takže produkty zůstanou dohledatelné v organickém vyhledávání ChatGPT. Rozpočet pak jde tam, kde se vrací.


Objeví se můj e-shop v ChatGPT i bez placené reklamy?expand\_more

Ano, organické vyhledávání v ChatGPT běží nezávisle na reklamě a řídí se vlastním příznakem ve feedu. Produkt vyřazený z reklamy tam zůstává. Na organickou viditelnost v AI odpovědích se ale hodí jiná práce než kampaň — tomu se věnuje [GEO optimalizace](/geo-optimalizace).


Od kdy reklama v ChatGPT funguje v Česku?expand\_more

Reklamy v ChatGPT běží v Česku **od srpna 2026** a od 24. srpna 2026 je Česko v seznamu zemí, na které jde cílit. Účty se zakládají samoobslužně. Je to nový kanál, takže konkurence v něm zatím není hustá — a zároveň to znamená, že ho nikdo nemá odzkoušený z dřívějška.


Co když se ukáže, že se to mému e-shopu nevyplatí?expand\_more

Pak kampaň pozastavíme a nastavené věci vám zůstanou. Produktový feed, měření konverzí a data o návratnosti produktů jsou užitečné i mimo tenhle kanál — stejná čísla používám při segmentaci kampaní v [Google Nákupech](/google-shopping-pro-eshopy). Právě proto začínám měřením: bez něj se nedá poznat, jestli se to vyplatí, ani po třech měsících.

Ceník · Reklama v ChatGPT a ostatní služby

## Kolik stojí nastavení reklamy v ChatGPT?

Cena za nastavení je jednorázová a nezahrnuje samotný rozpočet kampaně — ten platíte přímo platformě a její minimum je 350 Kč na den.

| Činnost | Tvorba | Měsíční správa |
| --- | --- | --- |
| Reklama v ChatGPT na klíč Cena této služby  Produktový feed · struktura kampaně · měření konverzí na webu | 9 500 Kč | 4 500 Kč |
| [Google Ads pro e-shop](/google-shopping-pro-eshopy)  Nákupy · Performance Max · vyhledávání · v ceně Merchant Center, feed a štítkování produktů | 15 000 Kč | od 12 000 Kč |
| [Měření na klíč pro e-shop](/webova-analytika-pro-eshopy)  GTM · GA4 e-commerce · konverze Google Ads a Sklik · dataLayer | 18 000 Kč | – |
| [E-commerce report](/reporting-pro-eshopy)  Napojení Shoptet · GA4 · Google Ads · Sklik · Meta Ads · Heureka · GSC | od 25 000 Kč | od 10 000 Kč |



calculate

Spočítejte si cenu v kalkulačce
Zaškrtejte služby, které potřebujete, a nabídka se sečte. Jednorázová tvorba i měsíční správa zvlášť.

storefrontE-shop
webWeb
expand\_more

Zajímá mě
analyticsMěření
campaignKampaně
travel\_exploreWeb a SEO
bar\_chartReporting
autorenewAutomatizace

Úroveň
rocket\_launchStartRozjezd
trending\_upRůst+ správa a data
workspace\_premiumKompletní+ všechno ostatní
Vynulovat

### analyticsMěření a data

Aby čísla, podle kterých se rozhoduje, byla naměřená správně.

Audit měření a ztrát dat
Kontrola GA4, konverzí a Consent Mode — kde se ztrácí data
4 500 Kč




Měření na klíč pro e-shop
GTM · GA4 e-commerce · konverze Google Ads a Sklik · dataLayer
18 000 Kč




Měření na klíč pro web
GTM · GA4 · formuláře, telefon a e-mail · konverze Google Ads a Sklik
8 000 Kč




Cookie lišta a Consent Mode v2
CMP / lišta · Consent Mode v2 · napojení přes GTM · ověření
6 500 Kč




Server-side tracking a CAPI
Měření přes server · Conversions API pro Meta a Google · méně ztracených konverzí
15 000 Kč




E-commerce report
Shoptet · Pohoda · GA4 · Google Ads · Meta · Sklik · Heureka · eHub · OpenAI Ads · Ecomail · Search Console · Merchant Center
od 25 000 Kč+ od 10 000 Kč / měsíc

### campaignKampaně

Placené kanály včetně feedů a produktových dat, která do nich tečou.

PPC audit
Google Ads · Sklik · Meta · návratnost po marži
8 000 Kč




Google Ads pro e-shop
Nákupy · Performance Max · vyhledávání · v ceně Merchant Center, feed a štítkování produktů
15 000 Kč+ od 12 000 Kč / měsíc




Google Ads pro web na poptávky
Vyhledávací kampaně · remarketing · měření poptávek
7 500 Kč+ od 6 500 Kč / měsíc




Správa Sklik kampaní
Produktové (Zboží.cz) · textové · retargeting · řízeno ziskem
6 500 Kč+ od 3 900 Kč / měsíc




Heuréka a Zboží.cz
Nasazení feedu, biddingu a měření · správa nabídek a kategorií
6 500 Kč+ 3 500 Kč / měsíc




Reklama v ChatGPT na klíč
Produktový feed · struktura kampaně · měření konverzí na webu
9 500 Kč+ 4 500 Kč / měsíc

### travel\_exploreWeb a SEO

Aby web šel najít v Googlu i v AI vyhledávačích a měl na čem stát.

SEO audit
Technika · obsah · dotazy na dosah · priority dle dopadu na tržby
4 500 Kč




SEO + GEO optimalizace
Jednorázová úprava klíčových stránek pro Google i AI vyhledávače
15 000 Kč




Tvorba landing page
Jednostránkový web pro Google/Meta Ads s měřením a A/B
25 000 Kč




Prezenční firemní web
Vícestránkový web — statický, rychlý, SEO + GEO
45 000 Kč




Šablona na míru pro Shoptet
Vlastní vzhled i funkce nad rámec platformy · případová studie
od 45 000 KčMěsíčně: Podle modulů

### autorenewAutomatizace provozu

Ruční práce kolem nákupu, příjmu a zakládání zboží, kterou jde předat stroji.

Plánování nákupu od dodavatelů
Co a kdy objednat, aby nedošlo zboží
17 000 Kč+ 1 500 Kč / měsíc




Automatizace dodavatelských faktur
Příchozí faktury · párování s bankou · příjem zboží · výhled hotovosti
od 36 000 Kč+ od 2 500 Kč / měsíc




Zakládání a správa produktů
Návrh karet z faktur a nabídek, parametry, fotky, zápis do Shoptetu
84 000 Kč+ od 3 500 Kč / měsíc

Vaše nabídka

Jednorázově–

Měsíčně–

Nevybrána žádná služba

* Zvolte oblast a úroveň, nebo zaškrtněte služby v seznamu.

[Chci tuhle nabídkuarrow\_outward](#kontakt)

Ceny jsou bez DPH a orientační, finální cenu určuji po konzultaci podle rozsahu. Rozpočet do reklamy v nich není, ten platíte přímo platformám.



Ceny jsou uvedeny bez DPH. Finální cenu určuji individuálně po konzultaci.

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

shopping\_cart

#### [Google Nákupy](/google-shopping-pro-eshopy)

Segmentace produktových kampaní podle skutečného výkonu.

monitoring

#### [Webová analytika](/webova-analytika-pro-eshopy)

GTM, GA4 a Consent Mode v2 — základ, na kterém měření stojí.

auto\_awesome

#### [GEO optimalizace](/geo-optimalizace)

Jak se dostat do odpovědí AI vyhledávačů i bez reklamy.

ads\_click

#### [Měření konverzí](/mereni-konverzi)

Co všechno se dá měřit a proč na tom stojí každá kampaň.

label

#### [Štítkování produktů](/stitkovani-produktu-google-shopping)

Stejná logika výkonnostních pásem, jen pro Google Nákupy.

storefront

#### [Shoptet šablony na míru](/shoptet-premium-sablony-na-miru)

Vlastní vzhled i funkce nad rámec platformy.

Začneme

## Podíváme se, jestli to vašemu e-shopu dává smysl.

Projdu váš feed i stávající měření a řeknu vám rovnou, co je potřeba dodělat dřív, než se do kampaně pustíme. Úvodní konzultace je zdarma.

[Chci reklamu v ChatGPTarrow\_outward](#kontakt)
[Napsat e-mail](mailto:tomas@khoder.cz)

Případové studie [Jak to dopadlo u klientů](/pripadove-studie)