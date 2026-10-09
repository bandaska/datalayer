# URL: https://www.gameplan.cz/blog/server-side-mereni/

[Domů](/)/[Blog](/blog/)/Měření a dataMěření a data

# Server-side měření: proč vám cookies berou konverze

Klientské cookies dnes vidí čím dál míň. Prohlížeče je blokují, iOS omezuje, část lidí odmítne souhlas. Server-side měření část ztracených konverzí vrací zpět. Vysvětlíme, jak funguje, co řeší a co od něj čekat.

![](/images/tym/filip.webp)Filip Schleif23. července 2026·2 min čtení

* server-side měření
* cookies
* konverze
* měření
* OneTag

![Server-side měření: proč vám cookies berou konverze](/_astro/server-side-mereni.Dicdj8L__tTKg2.jpeg)

2 min čtení

Obsah

1. [Proč klientské měření přestává stačit](#proč-klientské-měření-přestává-stačit)
2. [Jak server-side měření funguje](#jak-server-side-měření-funguje)
3. [Co od toho čekat, a co ne](#co-od-toho-čekat-a-co-ne)

Klíčové body

* Klientské cookies dnes blokují prohlížeče, iOS i odmítnutý souhlas.
* Server-side měření posílá události ze serveru, ne jen z prohlížeče.
* Vrací část konverzí, které by klientské měření nevidělo.
* Není to obcházení souhlasu, souhlas platí i pro serverové měření.

Klientské cookies dnes vidí čím dál míň. Prohlížeče je blokují, iOS omezuje sledování a část lidí odmítne souhlas. Reklamní systémy tak přicházejí o konverze, které proběhly, a vy podle neúplných dat řídíte rozpočty. Server-side měření posílá události i ze serveru, a tím část těch ztracených konverzí vrací zpět.

## Proč klientské měření přestává stačit

Tradiční měření běží v prohlížeči přes JavaScript a cookies. Jenže Safari a Firefox cookies třetích stran blokují, iOS omezuje sledování, blokátory reklam skript zastaví a bez souhlasu se měřit nesmí. Výsledek je, že klientské měření dnes nevidí významnou část nákupů, a reklamní algoritmy se učí na osekaných datech.

Kolik konverzí se tím ztrácí, poznáte i z rozdílu mezi objednávkami v e-shopu a konverzemi v GA4. Tenhle a další nešvary rozebíráme v článku [GA4 chyby v měření](/blog/ga4-eshop-chyby-mereni/).

## Jak server-side měření funguje

U server-side měření se událost o nákupu nebo chování neposílá jen z prohlížeče, ale i z vašeho serveru přímo do reklamních a analytických systémů. Server není blokovaný stejně jako prohlížeč, takže data dorazí i tam, kde by klientský skript selhal.

V praxi vedle sebe běží obojí: klientské měření pro rychlé chování na webu a serverové pro spolehlivé předání klíčových událostí, hlavně nákupu s hodnotou. Reklamní systém tím dostane úplnější obraz a líp optimalizuje.

## Co od toho čekat, a co ne

Server-side měření vrací část ztracených konverzí, typicky jednotky až desítky procent podle e-shopu. Není to ale kouzlo ani obcházení pravidel. Souhlas s cookies platí i pro serverové měření, data bez souhlasu se posílat nesmí. Server-side řeší technickou ztrátu, ne GDPR.

Přesnější data mají přímý dopad na to, jak čtete výkon. Když vidíte víc konverzí a jejich reálnou hodnotu, sedí vám ROAS i PNO blíž realitě, jak rozebíráme v článku [co je PNO](/blog/co-je-pno/). Přesně tohle řeší naše [analytika a měření](/sluzby/analytika-a-mereni/) přes nástroj [OneTag](/nastroje/onetag/), který serverové měření nasazuje a hlídá jeho kvalitu.

Chcete vědět, kolik konverzí vám dnes utíká? [Získejte růstový plán](/rustovy-plan/) a změříme to na vašem webu.

## Časté dotazy

Co je server-side měření?

Měření, kde se události o chování a nákupech neposílají jen z prohlížeče, ale i ze serveru. Reklamní systémy tak dostanou data, i když prohlížeč cookie zablokuje nebo skript nedoběhne.

Kolik konverzí server-side měření vrátí?

Záleží na e-shopu a na podílu blokovaných klientů, typicky jde o jednotky až desítky procent konverzí navíc oproti čistě klientskému měření. Přesné číslo zjistíte až po nasazení a porovnání.

Obchází server-side měření souhlas s cookies?

Ne. Souhlas platí i pro serverové měření. Server-side řeší technickou ztrátu dat, ne obcházení GDPR. Data bez souhlasu se ani serverem posílat nesmí.

Potřebuje to každý e-shop?

Čím větší podíl reklamy a čím víc konverzí, tím větší smysl to dává. U malého webu je přínos menší, u e-shopu 20M+ jde o peníze, které jinak necháváte ležet.

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

### GA4 pro e-shop: 7 chyb v měření, které kazí data

Špatně nastavené GA4 tiše zkresluje čísla, podle kterých pak řídíte rozpočty. Projdeme sedm nejčastějších chyb v měření e-shopu, od dvojitého měření přes chybějící hodnoty konverzí po ignorovaný consent, a jak je poznat.

Číst →](/blog/ga4-eshop-chyby-mereni/)[Měření a data

### Co je PNO a jak ho snížit bez škrcení růstu

PNO je podíl nákladů na obratu, tedy kolik procent z tržeb spolkne reklama. Je to ROAS naruby a v českých nástrojích ho potkáte častěji. Vysvětlíme výpočet, českou past s DPH a jak PNO snižovat, aniž byste zabrzdili růst.

Číst →](/blog/co-je-pno/)[Měření a data

### Jak udělat zákaznický průzkum, co dá použitelná data

Špatný průzkum potvrdí, co jste si mysleli, dobrý vám ukáže, co jste netušili. Rozdíl je v otázkách a v tom, koho se ptáte. Ukážeme, jak navrhnout dotazník, kterému se dá věřit, jakých chyb se vyvarovat a jak z odpovědí udělat podklad pro marketing i produkt.

Číst →](/blog/zakaznicky-pruzkum/)

Váš další krok

## Chcete čísla, ne dojmy?

Napojíme AI na vaše data, vytáhneme metriky, které jste dřív neviděli, a postavíme z nich růstový plán.

[Získat růstový plán](/rustovy-plan/)

×![]()