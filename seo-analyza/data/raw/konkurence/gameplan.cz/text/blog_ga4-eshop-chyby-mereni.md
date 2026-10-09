# URL: https://www.gameplan.cz/blog/ga4-eshop-chyby-mereni/

[Domů](/)/[Blog](/blog/)/Měření a dataMěření a data

# GA4 pro e-shop: 7 chyb v měření, které kazí data

Špatně nastavené GA4 tiše zkresluje čísla, podle kterých pak řídíte rozpočty. Projdeme sedm nejčastějších chyb v měření e-shopu, od dvojitého měření přes chybějící hodnoty konverzí po ignorovaný consent, a jak je poznat.

![](/images/tym/filip.webp)Filip Schleif5. června 2026·2 min čtení

* GA4
* měření
* konverze
* e-commerce
* analytika

![GA4 pro e-shop: 7 chyb v měření, které kazí data](/_astro/ga4-eshop-chyby-mereni.D1LMQ78O_ZSe3Mi.jpeg)

2 min čtení

Obsah

1. [1. Dvojité měření nákupu](#1-dvojité-měření-nákupu)
2. [2. Chybějící hodnota a měna u konverze](#2-chybějící-hodnota-a-měna-u-konverze)
3. [3. Ignorovaný souhlas a cookies](#3-ignorovaný-souhlas-a-cookies)
4. [4. Nezařazený interní a testovací provoz](#4-nezařazený-interní-a-testovací-provoz)
5. [5. Špatně nebo vůbec neměřený košík a checkout](#5-špatně-nebo-vůbec-neměřený-košík-a-checkout)
6. [6. Míchání dat z GA4 a z reklamních účtů](#6-míchání-dat-z-ga4-a-z-reklamních-účtů)
7. [7. Očekávání, že GA4 sedne s účetnictvím](#7-očekávání-že-ga4-sedne-s-účetnictvím)

Klíčové body

* Nejčastější chyba je dvojité měření nákupu, které nafoukne konverze i tržby.
* Bez hodnoty a měny u události purchase nejde počítat ROAS ani POAS.
* Consent mode a blokované cookies ukrajují z dat víc, než většina e-shopů čeká.
* Data z GA4 a z reklamních účtů se nikdy nesejdou přesně, a to je normální.

Špatně nastavené GA4 tiše zkresluje čísla, podle kterých pak řídíte rozpočty a hodnotíte kampaně. Nejde o pár procent, chyby v měření dokážou obrátit rozhodnutí naruby. Tady je sedm nejčastějších, které u e-shopů vidíme, a jak je poznat.

## 1. Dvojité měření nákupu

Nejčastější a nejzákeřnější chyba. Událost purchase se posílá dvakrát, typicky když je měřicí kód napevno v šabloně e-shopu a zároveň v Google Tag Manageru. Výsledek je nafouknutý počet konverzí i tržeb a falešně skvělý ROAS. Poznáte to podle podílu událostí purchase na počtu reálných objednávek.

## 2. Chybějící hodnota a měna u konverze

Bez parametrů value a currency u události purchase GA4 sice počítá objednávky, ale ne jejich hodnotu. Nespočítáte ROAS ani hodnotu kampaní a optimalizace na hodnotu konverze nemá z čeho vycházet. Vztah hodnoty a ziskovosti rozebíráme v článku [ROAS, PNO a POAS](/blog/roas-pno-poas/).

## 3. Ignorovaný souhlas a cookies

Odmítnutý souhlas s cookies a blokování v prohlížečích ukrajují z dat víc, než většina e-shopů čeká, klidně desítky procent. Bez správně nasazeného consent mode a bez serverového měření o tyhle konverze přicházíte úplně. Jak to řešit, rozebíráme v článku [server-side měření](/blog/server-side-mereni/).

## 4. Nezařazený interní a testovací provoz

Když do dat teče provoz z vaší kanceláře, od vývojářů nebo z botů, kazí míru konverze i chování. Odfiltrujte interní IP a známé boty, jinak optimalizujete na vlastní klikání.

## 5. Špatně nebo vůbec neměřený košík a checkout

Bez událostí add\_to\_cart, begin\_checkout a add\_payment\_info nevidíte, kde v nákupním trychtýři lidé odpadají. Právě tenhle trychtýř často ukáže, že problém není v reklamě, ale na webu.

## 6. Míchání dat z GA4 a z reklamních účtů

GA4 a Meta nebo Google Ads počítají konverze jinak, jiný model atribuce, jiné okno, jiný způsob měření. Sčítat konverze z obou je cesta k dvojímu započtení. Komu prodej přiřadit, rozebíráme v článku [atribuce v e-commerce](/blog/atribuce-e-commerce/).

## 7. Očekávání, že GA4 sedne s účetnictvím

GA4 měří události v prohlížeči, e-shop účtuje zaplacené objednávky. Přesně se nikdy nesejdou a je to normální. Rozdíl do zhruba 5 až 10 procent je v pořádku, větší odchylka je signál chyby, ne důvod k panice.

Nevíte, jestli vaše čísla sedí a na čem stojí vaše rozhodnutí? Měření stavíme v rámci služby [analytika a měření](/sluzby/analytika-a-mereni/) na vlastním serverovém [OneTagu](/nastroje/onetag/). [Získejte růstový plán](/rustovy-plan/) a měření vám projdeme na vašich datech.

## Časté dotazy

Proč mi nesedí tržby v GA4 a v e-shopu?

Skoro nikdy nesednou přesně. GA4 měří na základě událostí v prohlížeči, e-shop účtuje dokončené a zaplacené objednávky. Rozdíl do zhruba 5 až 10 procent je běžný, větší odchylka ukazuje na chybu v měření.

Jak poznám dvojité měření nákupu?

V přehledu událostí uvidíte podezřele vysoký počet purchase na počet objednávek, nebo stejné ID transakce vícekrát. Typicky vzniká, když je měřicí kód i v Google Tag Manageru i napevno v šabloně.

Musím do GA4 posílat hodnotu konverze?

Ano. Bez parametru value a currency u události purchase nespočítáte ROAS ani hodnotu kampaní. Je to jedna z nejčastějších a nejdražších chyb.

Kolik dat ztratím kvůli souhlasu s cookies?

Podle podílu odmítnutého souhlasu klidně desítky procent. Server-side měření a consent mode část ztráty modelově dorovnají, ale počítejte s tím, že klientské cookies samy o sobě dnes nevidí všechno.

Poznejte svou firmu · zdarma

Víte o vlastní firmě to, co vidí čísla?

Čtyři prompty vyplněné vaší firmou: kde mizí zisk, kdo u vás kupuje, proč se soutěží cenou a co vás stojí hodiny.

[Chci své čtyři prompty →](/poznejte-svou-firmu/)![Filip Schleif](/images/tym/filip.webp)

Autor

Filip Schleif · Spoluzakladatel Gameplanu

Přes deset let řídí růst e-shopů a firem přes data, výkonnostní marketing a vlastní AI nástroje. Spoluřídí skupinu s ročním obratem přes 250 mil. Kč a vlastní e-shop Tropic Fishing.

[LinkedIn](https://www.linkedin.com/in/filipschleif/)Další od autora: [AI nástroje: pět kategorií, se kterými si firma vystačí](/blog/ai-nastroje/), [Sedm ChatGPT promptů pro provoz e-shopu](/blog/chatgpt-prompty-pro-eshop/)

[← Zpět na blog](/blog/)

### Víc jako tenhle článek

Growth a AI tipy pro e-shopy z našich vlastních e-shopů, ne z cizích pouček. Málo mailů, každý za to stojí.

Nevyplňujte

Váš e-mailChci tipy do schránky

Souhlasím se zpracováním e-mailu pro zasílání novinek. Odhlásit se dá kdykoli. [Zásady ochrany osobních údajů](/ochrana-osobnich-udaju/).

## Čtěte dál

[Měření a data

### Server-side měření: proč vám cookies berou konverze

Klientské cookies dnes vidí čím dál míň. Prohlížeče je blokují, iOS omezuje, část lidí odmítne souhlas. Server-side měření část ztracených konverzí vrací zpět. Vysvětlíme, jak funguje, co řeší a co od něj čekat.

Číst →](/blog/server-side-mereni/)[Měření a data

### ROAS, PNO a POAS: co sledovat, aby e-shop vydělával

ROAS a PNO říkají totéž z opačné strany a měří obrat, ne zisk. Teprve POAS počítá se ziskem. Vysvětlíme rozdíly, převod mezi nimi a proč rozhodnutí o rozpočtu patří na POAS, ne na hezký ROAS z reklamního účtu.

Číst →](/blog/roas-pno-poas/)[Měření a data

### Jak udělat zákaznický průzkum, co dá použitelná data

Špatný průzkum potvrdí, co jste si mysleli, dobrý vám ukáže, co jste netušili. Rozdíl je v otázkách a v tom, koho se ptáte. Ukážeme, jak navrhnout dotazník, kterému se dá věřit, jakých chyb se vyvarovat a jak z odpovědí udělat podklad pro marketing i produkt.

Číst →](/blog/zakaznicky-pruzkum/)

Váš další krok

## Chcete čísla, ne dojmy?

Napojíme AI na vaše data, vytáhneme metriky, které jste dřív neviděli, a postavíme z nich růstový plán.

[Získat růstový plán](/rustovy-plan/)

×![]()