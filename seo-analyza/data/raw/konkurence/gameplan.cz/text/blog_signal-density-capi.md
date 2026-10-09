# URL: https://www.gameplan.cz/blog/signal-density-capi/

[Domů](/)/[Blog](/blog/)/Měření a dataMěření a data

# Hustota signálu a CAPI: proč rozhoduje 50 konverzí týdně

Meta se učí na konverzích. Když jich ad set nemá dost, nikdy neopustí fázi učení a výkon skáče. Ukážeme, proč se mluví o zhruba 50 konverzích týdně, proč je Conversions API dnes povinnost a jak zvýšit hustotu i kvalitu signálu, aby algoritmus věděl, koho hledat.

![](/images/tym/filip.webp)Filip Schleif24. července 2026·2 min čtení

* signál
* CAPI
* konverze
* Meta Ads
* měření

![Hustota signálu a CAPI: proč rozhoduje 50 konverzí týdně](/_astro/signal-density-capi.6TT20_19_mOWhQ.jpeg)

2 min čtení

Obsah

1. [Proč 50 konverzí týdně](#proč-50-konverzí-týdně)
2. [CAPI je dnes základ](#capi-je-dnes-základ)
3. [Jak zvýšit hustotu](#jak-zvýšit-hustotu)
4. [Kvalita i kvantita](#kvalita-i-kvantita)

Klíčové body

* Meta se učí na konverzích, málo dat znamená trvalou fázi učení.
* Orientační práh je zhruba 50 konverzí týdně na ad set.
* Conversions API (CAPI) je dnes non-negotiable, ne nadstavba.
* Konsolidace a čistý signál zvednou hustotu i kvalitu dat.

Meta se učí na konverzích. Když jich ad set nemá dost, nikdy pořádně neopustí fázi učení, výsledky skáčou a optimalizace stojí na písku. Proto se mluví o hustotě signálu a o zhruba 50 konverzích týdně. A proto je dnes Conversions API povinnost, ne nadstavba. Tady je, jak signál zhustit a vyčistit.

## Proč 50 konverzí týdně

Algoritmus potřebuje dost příkladů, aby se naučil, koho hledat. Orientační práh je zhruba 50 konverzních událostí týdně na ad set. Pod ním ad set zůstává trvale v učení a výkon je nestabilní. Tohle je hlavní důvod, proč roztříštěný účet s mnoha podfinancovanými ad sety nefunguje, a proč se vyplatí konsolidace, jak rozebíráme v článku [struktura Meta Ads kampaní](/blog/struktura-meta-ads-kampani/).

## CAPI je dnes základ

Conversions API (CAPI) posílá konverzní události ze serveru přímo Meta, ne jen z prohlížeče. V době mizejících cookies a blokování je to jediný způsob, jak Meta dostane úplný a kvalitní signál. Bez něj měříte a optimalizujete na osekaná data. Proč klientské měření přestává stačit, rozebíráme v článku [server-side měření](/blog/server-side-mereni/). Dnes platí jednoduše: CAPI je non-negotiable.

## Jak zvýšit hustotu

* **Konsolidujte.** Méně ad setů, do kterých se konverze soustředí, místo mnoha hladovějících.
* **Optimalizujte na dostupnou událost.** U nízkého objemu nákupů se dá dočasně učit na události výš v trychtýři (přidání do košíku), než se nasbírá dost nákupů.
* **Hlídejte kvalitu signálu.** Nejde jen o počet, ale o čistotu a shodu dat (kvalitní CAPI s dobrou shodou událostí), jak souvisí s tématem v článku [GA4 chyby v měření](/blog/ga4-eshop-chyby-mereni/).

## Kvalita i kvantita

Cíl je obojí: dost konverzí (hustota) a čistý, přesný signál (kvalita). Teprve pak má algoritmus z čeho se učit a Andromeda vás umí správně napárovat na publikum, viz článek [co je Meta Andromeda](/blog/co-je-meta-andromeda/). Slabý signál je častější příčina špatného výkonu než špatné kampaně.

Čistý serverový signál s dobrou shodou událostí posíláme přes [OneTag](/nastroje/onetag/), takže algoritmus dostane víc konverzí i přesnější data.

Nevíte, jestli váš účet nemá hlad po signálu? [Získejte růstový plán](/rustovy-plan/) a změříme hustotu i kvalitu vašich dat.

## Časté dotazy

Proč se mluví o 50 konverzích týdně?

Protože Meta potřebuje dost konverzních událostí, aby se algoritmus stabilně učil. Orientační práh je zhruba 50 konverzí týdně na ad set. Pod ním ad set zůstává trvale v učení, výsledky skáčou a optimalizace je nestabilní.

Co je CAPI a proč je povinnost?

Conversions API posílá konverzní události ze serveru přímo Meta, ne jen z prohlížeče. V době mizejících cookies a blokování je to jediný způsob, jak Meta dostane úplný a kvalitní signál. Dnes to není nadstavba, ale základ.

Jak zvýšit hustotu signálu?

Konsolidací: méně ad setů, do kterých se konverze soustředí, místo mnoha podfinancovaných. A optimalizací na událost, které je dost (u nízkého objemu nákupů třeba přidání do košíku), než se nasbírá dost nákupů.

Co když mám málo konverzí celkově?

Pak konsolidujte ještě víc a zvažte optimalizaci na událost výš v trychtýři, dokud objem nenaroste. Roztříštěný účet s pár konverzemi na ad set je nejčastější důvod nestabilního výkonu u menších e-shopů.

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

[Výkon a růst

### Struktura Meta Ads kampaní pro e-shop v roce 2026

Přehnaně rozdrobený účet je nejčastější důvod, proč Meta Ads u e-shopu nešlapou. Moc kampaní a málo dat znamená, že se nic pořádně nenaučí. Ukážeme jednoduchou strukturu, konsolidaci signálu a proč dnes méně znamená víc.

Číst →](/blog/struktura-meta-ads-kampani/)[Výkon a růst

### Broad, nebo lookalike: jak dnes cílit Meta Ads

Roky byly lookalike publika standard. V éře Andromedy se ale karta obrací: široké cílení v řadě testů překonává lookalike, protože algoritmus si publikum najde sám. Vysvětlíme, proč broad vede, kdy lookalike pořád dává smysl a jak z lookalike udělat nápovědu, ne klec.

Číst →](/blog/broad-vs-lookalike/)[Měření a data

### Server-side měření: proč vám cookies berou konverze

Klientské cookies dnes vidí čím dál míň. Prohlížeče je blokují, iOS omezuje, část lidí odmítne souhlas. Server-side měření část ztracených konverzí vrací zpět. Vysvětlíme, jak funguje, co řeší a co od něj čekat.

Číst →](/blog/server-side-mereni/)

Váš další krok

## Chcete čísla, ne dojmy?

Napojíme AI na vaše data, vytáhneme metriky, které jste dřív neviděli, a postavíme z nich růstový plán.

[Získat růstový plán](/rustovy-plan/)

×![]()