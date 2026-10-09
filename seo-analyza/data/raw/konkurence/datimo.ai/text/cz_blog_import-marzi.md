# URL: https://www.datimo.ai/cz/blog/import-marzi

[![Datimo.ai](/assets/logo-BVgi-JqH.png)Datimo.ai](/cz)

Balíčky

Služby

[Pro agentury](/cz/agentury)[Reference](/cz/reference)[Ceník](/cz/cenik)[O nás](/cz/o-nas)[Kontakt](/cz/kontakt)

[Chci demo zdarma](/cz/demo)

MENU

[Zpět na blog](/cz/blog)

# Import marží do reklamních systémů

[![Vojtěch Šmida](/assets/founder-photo-DwNHbqvM.png)Vojtěch Šmida](#author-bio)

Automatické nabídky v Google Ads i Meta se učí na hodnotě konverze, kterou do systémů posíláte. Ve výchozím nastavení je to tržba, takže optimalizace běží na obrat, ne na zisk. Popíšu, jak nahradit tržbu marží, kdy se drží hodnota konverzí, a který krok při spěchu může hodit účet na měsíc do restartu učení.

Google Ads

Meta Ads

Optimalizace

## Co reálně posílá většina e-shopů jako hodnotu konverze

Standardní nasazení: e-shop pošle do Google Ads při konverzi hodnotu rovnou tržbě dokončené objednávky. Stejné číslo zpravidla jde i do Meta Ads, Sklik, Heureka a dalších. Automatické biddingové strategie (Target ROAS, Maximize Conversion Value) se učí na tom, co dostanou. Pošlete tržbu, optimalizují na tržbu. Jako první myšlenka se nabídne posílat prodejní cenu minus nákupní a cílit rovnou na zisk. Je to ale správně?

## Proč tržba není ideální signál

Dvě objednávky po 1 000 Kč vypadají v účtu stejně. Z jedné může zbýt 50 Kč marže, z druhé 400 Kč. Rozdíl je v mixu produktů a v marži. Když do reklamních systémů posíláte jen tržbu, algoritmus ten rozdíl nevidí a nemá podle čeho preferovat ziskovější kombinace.

## Co dává smysl a co ne

Import marže má smysl jen když data i měření drží pohromadě. Jinak optimalizujete na neúplný signál, ať už pošlete tržbu nebo marži.

* Marže je napříč sortimentem stejná. Stačí vám optimalizace na tržbu, případně **[segmentace produktů v Google Ads](/cz/blog/google-ads-segmentace-produktu)** nebo **[import akvizice a retence](/cz/blog/import-akvizice-retence)**.
* Nemáte aktuální nákupní ceny jednotlivých produktů.
* Nesedí párování produktů mezi měřením a e-shopem, ERP či skladovým systémem.
* **Roztříštěná nebo nekvalitní data** o maržích: rozštěpené zdroje, tabulky po dodavatelích a značkách, chybějící údaje. Nejdřív sjednoťte do jednoho zdroje, pak teprve marži v konverzi.
* Máte špatně nasazené měření: cookie lišta nebo souhlas nefungují, konverze se nespolehlivě posílají do Google Ads a Meta Ads.

* Marže se mezi produkty nebo kategoriemi **výrazně liší**.
* Máte aktuální nákupní ceny po jednotlivých produktech.
* Párování produktů mezi měřením a e-shopem, ERP či skladovým systémem sedí.
* Marži čtete z jednoho datového zdroje, typicky ERP nebo sklad plus e-shop.
* Máte kvalitně nasazené měření: cookie lišta a souhlas fungují, konverze se spolehlivě posílají do Google Ads a Meta Ads.

Za mě bez zelených bodů nejdřív vyřešte datovou kvalitu, a pak import marží.

## Koeficient pro zachování hodnoty konverze

Když do účtu pošlete marži, součty konverzních hodnot spadnou úměrně průměrné marži. Při průměru 30 % spadnou na zhruba třetinu. Reklamní systémy mají rády obecně vyšší čísla. Dojde tak ke snížení výkonu, doručování padne a učení se rozsype.

Řešení: marži vynásobte koeficientem rovným převrácené hodnotě průměrné marže. Při průměru 30 % je to `1 ÷ 0,3`, tedy zhruba **`3,33`**. V praxi zaokrouhluji nahoru na **`3,5`** nebo **`3,6`**, aby koeficient držel mírně vyšší bid.

Co z toho plyne:

* celkový součet hodnot konverzí zůstane na podobné úrovni jako dřív,
* váha mezi objednávkami se přerozdělí: ziskové dostanou vyšší, neziskové nižší,
* systém nezačíná učení od nuly na úplně jiných číslech,
* můžete tak celé řešení spustit rychleji.

Koeficient při průměrné marži 30 %

1 ÷ 0,3 ≈ 3,33

V praxi zaokrouhluji na 3.5–3.6, aby bid držel mírně výš.

Koeficient drží součet hodnot konverzí. Mění rozložení váhy mezi ziskovými a méně ziskovými objednávkami.

## Nasazení v Google Ads

Nejlepší je založit novou konverzi s hodnotou z marže, kterou necháte nejdřív jako sekundární a na primární ji přepnete až po ověření dat. Když to porušíte, riskujete rozhození účtu.

Druhá varianta je použít stávající konverzi a začít do ní posílat marži. Tohle ale nedoporučuji, pokud k tomu nejsou dobré důvody.

Novou hodnotu z marže ne nasazujte hned jako primární a nepřepisujte ji do stávající primární konverze. Automatické nabídky ztratí historickou distribuci, na které se učily. Restart učení znamená 4–8 týdnů nestability podle objemu konverzí. Před spuštěním ověřte v nastavení, že se nová konverze sama nepřepne jinam: při migracích se nám to už párkrát stalo a propad výkonu trval dlouho.

Postup, který držím:

1. Založit novou konverzi s hodnotou z marže a nechat ji jako sekundární.
2. Nechat běžet minimálně 14–30 dní. Během toho kontrolovat data. Nejjednodušší způsob je, že počet a hodnota konverzí sedí s původní konverzí na tržby.
3. Teprve potom přepnout primární cíl optimalizace na novou konverzi. Tržbu nechat sekundárně ke kontrole.

Nemůžete-li založit novou konverzi a musíte měnit hodnotu u existující, koeficient z předchozí sekce je jediná pojistka před pádem výkonu. Bez paralelního měření ale letíte naslepo. Počítejte s tím jen jako s nouzovou variantou.

## Nasazení v Meta

Meta je na změny měření citlivější než Google. Než cokoliv pustíte naostro, otestujte to na menším projektu. Znám 2 cesty podle stavu pixelu:

* **Nový paralelní pixel** jen pro optimalizaci na marži. Nerozhodíte historii původního pixelu ani publika z něj.
* **Koeficient na stávajícím pixelu**, kdy se hodnota nákupu přepíše na marži vynásobenou koeficientem.

I u druhé cesty doporučuji založit druhý pixel, chvíli tam nechat měřit, porovnat hodnoty a teprve pak měření přehodit na stávající pixel. Chyba v implementaci může v nejhorším případě ohrozit celý byznys.

Zpravidla je nutné upravenou hodnotu do Mety posílat přes **[Meta Conversions API (CAPI)](https://developers.facebook.com/docs/marketing-api/conversions-api/)**. Samotné měření přes webový pixel nezná hodnoty konverzí. CAPI přes server-side GTM obvykle změří víc konverzí a spolehlivěji než měření přes prohlížeč.

## Jak to postavit

1. **Server-side GTM (SGTM)** dostane událost nákupu z GA4 měření, dotáhne marže k produktům, vynásobí koeficientem a odešle upravenou hodnotu do reklamních systémů.
2. **Firestore** drží aktuální marže produktů. Při dokončení nákupu potřebujete rychle číst někdy větší počet položek. K tomu je kombinace Firestore s SGTM doporučený postup. Nic jiného bych nepoužíval.
3. **BigQuery** (nebo jiný datový sklad) spojuje nákupní ceny z ERP nebo e-shopu s prodeji a denně přepočítává marže po SKU. Výsledek synchronizujete do Firestore. Tohle není nutné, ale doporučuji mít nějaký jednotný zdroj pravdy. Funguje to se Shoptetem, UpGates, Abrou, Pohodou nebo libovolným API exportem či feedem.

### Alternativní postup: webové GTM a dataLayer

Pro **Google Ads i Meta Ads** lze marži posílat i přes webové GTM a `dataLayer`. Je to řešení spíš pro projekt s vlastním vývojářem, který umí do dataLayer poslat marži po položkách objednávky. Nevýhoda je, že nemáte takovou kontrolu nad daty. Musíte se spolehnout, že vývojář vše implementuje správně.

Hlavní nevýhoda browser cesty: hodnoty uvidíte v záložce Network a v DevTools je může dohledat kdokoli v prohlížeči, včetně konkurence. I s koeficientem marži nejde přesně určit, ale signál o struktuře tam jde odhalit. Proto bych volil raději SGTM.

## V jakém pořadí to řešit

Obvykle doporučuji nejdřív nasadit **[segmentaci produktů v Google Ads](/cz/blog/google-ads-segmentace-produktu)**. Za mě přináší rychlejší výsledky než úprava hodnoty konverze.

Technicky jde nasadit segmentaci, marži i akvizici najednou. Za mě ale často dává smysl implementovat naráz, ale spouštět ve dvou krocích: nejdřív segmentace a mezitím připravit a sbírat data pro tento článek a [import akvizice a retence](/cz/blog/import-akvizice-retence), a pak jako druhou vlnu zapnout společně. Segmentace mezitím běží, nečekáte zbytečně. Obecně také nedoporučuji dělat příliš mnoho změn naráz, protože pak nejde sledovat vliv jednotlivých kroků.

Pokud by vás zajímala segmentace, import marže i akvizice a retence, mohl by vás zajímat [balíček Kampaně na plný výkon](/cz/kampane-na-plny-vykon).

## Shrnutí

Do reklam posílejte marži vynásobenou koeficientem (1 ÷ průměrná marže), ne přímo marži. Novou konverzi nejdřív otestujte, a pak na ni spusťte optimalizaci. Implementaci stavím přes SGTM.

## Nevíte, jak na tom jsou vaše kampaně?

Napište mi ohledně krátkého auditu. První konzultace 15 minut zdarma a nezávazně.

[Kontaktujte mě](/cz/kontakt?interest=Kampan%C4%9B%20na%20pln%C3%BD%20v%C3%BDkon)[Zobrazit balíček](/cz/kampane-na-plny-vykon)

![Vojtěch Šmida](/assets/founder-photo-DwNHbqvM.png)

Vojtěch Šmida

CEO & Datový analytik

Stavím vlastní projekty v e-commerce i leadových webech. Vytvářím vlastní projekty jako je Haltimo.com a Datimo.ai. 15 let v oboru, testuji na vlastní kůži.

[Haltimo.com](https://haltimo.com)[LinkedIn](https://www.linkedin.com/in/vojtechsmida)[vojtechsmida.cz](https://vojtechsmida.cz)

## Související řešení

Řešení, která vám pomohou implementovat strategie z tohoto článku.

### Import marží do reklamních systémů

Marže po SKU do Google Ads a Meta, koeficient pro hodnotu konverze a bezpečné přepnutí primární konverze.

[Chci vědět více](/cz/marzove-rizeni)

### Akvizice a retence

Jedna hlavní konverze s váhami pro nové a vracející se zákazníky v Google Ads i Meta.

[Chci vědět více](/cz/akvizice-retence)

### AI řízené kampaně

Segmentace produktů v PMax a štítky TOP, Stop, Boost podle výkonu a marže.

[Chci vědět více](/cz/segmentace-produktu-gads)

### Balíčky

[Kampaně na plný výkon →](/cz/kampane-na-plny-vykon)[Byznys reporting →](/cz/data-a-prehledy)[Sklad & Predikce →](/cz/sklady-a-predikce)

### Analytika

* [Analytika – přehled](/cz/analytika)
* [Server-side tracking](/cz/server-side-tracking)
* [Analytika e-mailingu](/cz/analytika-emailingu)
* [Analýza Cross-Sell](/cz/analyza-cross-sell)
* [Akvizice & retence](/cz/akvizice-retence)

### Marketing

* [Marketing – přehled](/cz/marketing)
* [Marketingový reporting](/cz/marketing-reporting)
* [Maržové řízení kampaní](/cz/marzove-rizeni)
* [Průchodnost košíkem](/cz/analyza-pruchodnosti-kosikem)
* [SEO/GEO](/cz/seo-geo)

### Byznys

* [Byznys – přehled](/cz/byznys)
* [BI reporting](/cz/bi-reporting)
* [RFM reporting](/cz/rfm-reporting)
* [Plány](/cz/plany)
* [Sledování cen konkurence](/cz/sledovani-cen-konkurence)

### AI

* [AI – přehled](/cz/ai)
* [Segmentace produktů](/cz/segmentace-produktu-gads)
* [AI skladové predikce](/cz/ai-skladove-predikce)
* [Alerting & notifikace](/cz/alerting-notifikace)
* [AI poradce](/cz/ai-poradce)
* [AI bidding Heureka/Zbozi.cz](/cz/zbozaky)
* [MetaRadar](/cz/meta-radar)

### O Datimo.ai

* [O nás](/cz/o-nas)
* [Znalostní báze](/cz/znalosti)
* [Reference ⭐](/cz/reference)
* [Blog](/cz/blog)
* [Ceník](/cz/cenik)
* [Kontakt](/cz/kontakt)
* [Obchodní podmínky](/cz/obchodni-podminky)
* [Ochrana osobních údajů](/cz/zpracovani-osobnich-udaju)
* [Cookies](/cz/cookies)

### Napište nám

Odpovíme do 24 hodin

[[email protected]](/cdn-cgi/l/email-protection#6d04030b022d090c19040002430c04)

### Zavoláme vám

Ozveme se během 24 hodin

Odeslat

Odesláním souhlasíte se [zpracováním údajů](/cz/zpracovani-osobnich-udaju)

© 2026 Marketing s.r.o. Všechna práva vyhrazena.

🇨🇿



























×

Cookies, cookies, cookies, ...

Používáme cookies k měření návštěvnosti a zobrazování relevantních reklam. Souhlas můžete kdykoli odvolat. 
[Zásady ochrany osobních údajů](https://datimo.ai/cz/zpracovani-osobnich-udaju)

Zobrazit podrobnosti 

Skrýt podrobnosti

Uložit a zavřít

Vše přijmout

Vše odmítnout

[Powered by CookieScript](https://cookie-script.com "Consent Management Platform")