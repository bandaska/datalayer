# URL: https://www.gameplan.cz/blog/consent-mode-v2-eshop/

[Domů](/)/[Blog](/blog/)/Měření a dataMěření a data

# Consent Mode v2 pro e-shop: co musíte mít nastavené

Bez správně nasazeného Consent Mode v2 Google e-shopům v EU tiše nenaplní remarketing a rozbije měření konverzí. Je povinný od března 2024 a od června 2026 přituhlo. Vysvětlíme čtyři signály, Basic vs Advanced a co ověřit, ať o data nepřicházíte.

![](/images/tym/filip.webp)Filip Schleif25. května 2026·2 min čtení

* Consent Mode v2
* GDPR
* měření
* remarketing
* e-commerce

![Consent Mode v2 pro e-shop: co musíte mít nastavené](/_astro/consent-mode-v2-eshop.BmpjTFvP_GOCID.jpeg)

2 min čtení

Obsah

1. [Proč na tom záleží](#proč-na-tom-záleží)
2. [Čtyři signály](#čtyři-signály)
3. [Basic vs Advanced](#basic-vs-advanced)
4. [Co ověřit](#co-ověřit)

Klíčové body

* Consent Mode v2 je povinný od března 2024 pro provoz z EU, UK a Švýcarska.
* Bez něj Google nenaplní remarketing z nesouhlasného provozu a měření se rozpadá.
* Čtyři signály: ad\_storage, analytics\_storage, ad\_user\_data, ad\_personalization.
* Od 15. června 2026 je ad\_storage hlavní signál pro reklamní data do Google Ads.

Consent Mode v2 je most mezi vaším cookie bannerem a Google tagy. Bez něj Google e-shopům v EU tiše nenaplní remarketing z nesouhlasného provozu a rozbije se měření konverzí, aniž si toho hned všimnete. Je povinný od března 2024 a od června 2026 přituhlo. Tady je, co přesně musíte mít.

## Proč na tom záleží

Náklad není primárně pokuta, ale funkčnost. Bez platných v2 signálů Google nenaplní remarketingová a personalizovaná publika z provozu, u kterého nezná souhlas, a měření degraduje. Ztráta je tichá a kumulativní: publika stagnují a konverze se podhodnocují dávno předtím, než někdo odhalí špatné nastavení. Vynucování začalo 21. července 2025 (ověřeno k červenci 2026).

## Čtyři signály

Banner nestačí mít, musí Googlu posílat všechny čtyři signály:

* **ad\_storage** ukládání reklamních cookies (od 15. 6. 2026 hlavní signál pro reklamní data do Google Ads).
* **analytics\_storage** ukládání analytických dat.
* **ad\_user\_data** souhlas s odesláním dat Googlu pro reklamu (nutné pro enhanced conversions).
* **ad\_personalization** souhlas s personalizovanou reklamou a remarketingem.

Implementace jen s prvními dvěma je v1 a v2 kontrolou tiše neprojde. Všechny čtyři musí být v defaultu (pro EU nastavené na denied) i v aktualizaci po interakci s bannerem.

## Basic vs Advanced

* **Basic:** tagy se načtou až po souhlasu, z odmítnutí nevznikají žádná data. Přísnější, ale přichází o modelované konverze.
* **Advanced:** tagy se načtou v omezeném stavu a při odmítnutí posílají bezcookie pingy, které živí modelování konverzí a část měření zachrání.

Pro úplnost měření bývá silnější Advanced, pro nejpřísnější přístup k datům před souhlasem Basic. Jak měření dál chránit i technicky, rozebíráme v článku [server-side měření](/blog/server-side-mereni/).

## Co ověřit

* **Certifikovaná CMP.** Google vyžaduje banner z certifikované platformy pro správu souhlasu napojené na IAB TCF. Vlastní banner musí v2 implementovat ručně.
* **Default denied pro EU.** Před interakcí musí být všechny čtyři signály pro EU na denied.
* **Reálný test.** Ověřte, že se signály při souhlasu i odmítnutí správně mění, že se při odmítnutí neposílají reklamní data a že se publika naplňují.
* **Kontrola po změnách.** Po úpravě webu, CMP nebo tag manageru vše přeověřte.

Špatné nastavení dokáže sebrat drtivou většinu měřených konverzí a část se už nikdy nedomodeluje. Souvislost s dalšími chybami v měření rozebíráme v článku [GA4 chyby v měření](/blog/ga4-eshop-chyby-mereni/).

Nasazení a průběžnou kontrolu Consent Mode děláme jako součást [analytiky a měření](/sluzby/analytika-a-mereni/), protože se rozbije při každé větší změně webu.

Nevíte, jestli máte Consent Mode v2 nasazený správně a neztrácíte data? [Získejte růstový plán](/rustovy-plan/) a měření vám prověříme.

## Časté dotazy

Je Consent Mode v2 povinný?

Ano, pro provoz z EEA, UK a Švýcarska je povinný od března 2024, hnaný Digital Markets Actem. Vynucování začalo 21. července 2025: bez platných signálů Google nenaplní remarketing a personalizované publikum a degraduje měření (ověřeno k červenci 2026).

Jaké čtyři signály musí banner posílat?

ad\_storage, analytics\_storage, ad\_user\_data a ad\_personalization. Implementace jen se dvěma původními je v1 a v2 kontrolou tiše neprojde. Všechny čtyři musí být přítomné v defaultu i v aktualizaci po souhlasu.

Basic, nebo Advanced režim?

Basic blokuje tagy do udělení souhlasu, takže z odmítnutí nevzniknou data. Advanced načte tagy v omezeném stavu a při odmítnutí posílá bezcookie pingy, které živí modelování konverzí. Pro úplnost měření bývá silnější Advanced, pro nejpřísnější přístup k datům před souhlasem Basic.

Co se změnilo 15. června 2026?

ad\_storage se stal jediným signálem, který řídí, jestli reklamní data tečou do Google Ads, a Google Signals pro reklamní data v propojeném GA4 skončil. Kdo měl v2 správně, řeší jen ověření, ne migraci (ověřeno k červenci 2026).

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

### Server-side měření: proč vám cookies berou konverze

Klientské cookies dnes vidí čím dál míň. Prohlížeče je blokují, iOS omezuje, část lidí odmítne souhlas. Server-side měření část ztracených konverzí vrací zpět. Vysvětlíme, jak funguje, co řeší a co od něj čekat.

Číst →](/blog/server-side-mereni/)[Měření a data

### Jak udělat zákaznický průzkum, co dá použitelná data

Špatný průzkum potvrdí, co jste si mysleli, dobrý vám ukáže, co jste netušili. Rozdíl je v otázkách a v tom, koho se ptáte. Ukážeme, jak navrhnout dotazník, kterému se dá věřit, jakých chyb se vyvarovat a jak z odpovědí udělat podklad pro marketing i produkt.

Číst →](/blog/zakaznicky-pruzkum/)

Váš další krok

## Chcete čísla, ne dojmy?

Napojíme AI na vaše data, vytáhneme metriky, které jste dřív neviděli, a postavíme z nich růstový plán.

[Získat růstový plán](/rustovy-plan/)

×![]()