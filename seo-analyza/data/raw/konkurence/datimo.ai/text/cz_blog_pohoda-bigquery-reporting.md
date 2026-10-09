# URL: https://www.datimo.ai/cz/blog/pohoda-bigquery-reporting

[![Datimo.ai](/assets/logo-BVgi-JqH.png)Datimo.ai](/cz)

Balíčky

Služby

[Pro agentury](/cz/agentury)[Reference](/cz/reference)[Ceník](/cz/cenik)[O nás](/cz/o-nas)[Kontakt](/cz/kontakt)

[Chci demo zdarma](/cz/demo)

MENU

[Zpět na blog](/cz/blog)

# Pohoda v BigQuery: jak přestat exportovat účetnictví do Excelu

[![Vojtěch Šmida](/assets/founder-photo-DwNHbqvM.png)Vojtěch Šmida](#author-bio)

Pohoda je pro české e-shopy standard v účetnictví. Jenže kdykoli chcete marži po kategorii, obrat zásob nebo hodnotu zákazníka za rok, skončíte u ručního exportu. Jak napojení Pohody na BigQuery mění měsíční rutinu v Excelu na report, který se aktualizuje sám.

Pohoda

BigQuery

Data engineering

Pohoda je pro české e-shopy de facto standard účetního softwaru. Vedou se v ní faktury, eviduje zásoby, páruje objednávky. Jenže ve chvíli, kdy majitel e-shopu chce vědět, která kategorie produktů má nejlepší marži, jak se vyvíjí obrat zásob nebo kolik firmě reálně vydělal zákazník za poslední rok, Pohoda končí a začíná ruční export do Excelu. A tam se každý měsíc začíná znovu.

Řešení, které stavíme pro klienty na Pohodě, je přímé napojení dat na BigQuery. Faktury, sklad a zákazníci se pravidelně synchronizují do datového skladu, kde se propojí s dalšími zdroji, marketingem, e-shopem, a výsledkem je report, který se aktualizuje sám.

## Proč Pohoda na reporting nestačí

Pohoda má vlastní přehledy, výsledovku, seznam faktur, skladové karty. Na účetní účely fungují dobře. Problém nastane, jakmile chcete odpověď o úroveň hlouběji:

* **Marže po kategorii za kvartál, meziročně?** Ruční export a přepočet v Excelu.
* **Kolik firmě reálně vydělal zákazník, co ho stála reklama, versus co za rok utratil?** Pohoda tahle dvě čísla vedle sebe neukáže, jsou v jiném systému.
* **Obrat zásob v reálném čase, s upozorněním, když položka padá pod minimum?** Bez ručního hlídání to nejde.
* **Hodnota zákazníka na základě historie faktur?** Data v Pohodě jsou, ale nikde se sama nespočítají.

Všechna tahle data v Pohodě reálně existují, jen chybí automatizovaný přístup k nim a vrstva, která je umí spojit s ostatními zdroji.

## Na čem to technicky stojí

Pohoda má pro výměnu dat s externími systémy vlastní vestavěnou komponentu, mServer. Je to HTTP server, který běží přímo v Pohodě a komunikuje přes XML rozhraní. Právě na mServeru napojení do BigQuery stavíme, nejde o zásah do samotné instalace Pohody ani o přechod na jinou edici. Konkrétní způsob, jak z něj data bezpečně a šetrně k provozu vytahujeme, seřazujeme a synchronizujeme do BigQuery, je naše řemeslo a liší se případ od případu podle nastavení Pohody a toho, co accounting tým reálně potřebuje. Do detailů to tady rozepisovat nebudeme, ale řešení stavíme na míru, ne jako univerzální skript.

## Jaká data z Pohody dává smysl vytáhnout

Pohoda přes mServer zpřístupňuje desítky agend, ale pro reporting jsou zásadní tři oblasti.

**Faktury vydané** jsou základ výnosové analytiky. Číslo dokladu, datum, odběratel, částka, položky s prodejní i nákupní cenou, pokud ji Pohoda eviduje. Z toho se počítá [marže](/cz/pojmy/marze) na faktuře i na jednotlivém produktu, ne jen obrat.

**Zásoby a pohyby na skladě** ukážou aktuální stav, průměrnou nákupní cenu a historii příjemek a výdejek. Z toho jde spočítat [obrátku zásob](/cz/pojmy/doba-obratu-skladu), najít ležáky a vidět, kolik kapitálu firma reálně drží na skladě, ne jen kolik kusů má na stavu.

**Adresář** propojený s fakturami dá hodnotu každého zákazníka za libovolné období, počet nákupů a průměrnou objednávku. Základ pro [RFM analýzu](/cz/pojmy/rfm-analyza) nebo [CLV](/cz/pojmy/clv), hodnotu zákazníka za dobu vztahu, ne jen z poslední faktury.

## Kde na tom firmy tratí peníze

Napojení samo o sobě je jen instalatérská práce. Reálné peníze se ztrácí v tom, jak firmy pracují s daty, dokud napojení nemají:

* **Marže se počítá ze staré nákupní ceny.** Pohoda běžně vede průměrnou skladovou cenu, ne aktuální nákupní. Při výkyvu cen od dodavatele (a v posledních letech nebyl výkyv výjimka, ale pravidlo) report ukazuje marži, která už neplatí, a rozhodnutí o kampaních se dělají podle starého čísla.
* **Sklad a marketing vidí každý jiná čísla.** Skladník pracuje s exportem z pondělí, marketing s exportem ze čtvrtka, oba počítají obrat trochu jinak. Neshoda se zjistí, až když si čísla někdo porovná, obvykle pozdě.
* **Report se dělá reaktivně, ne průběžně.** Ruční příprava je pracná, takže se dělá jednou za měsíc nebo kvartál. Ležák na skladě nebo propadající se marže kategorie se tak odhalí měsíce poté, co k tomu reálně došlo, ne ve chvíli, kdy se to ještě dá ovlivnit.
* **Čas analytika jde do přípravy dat, ne do jejich čtení.** Když někdo tráví dva dny v měsíci spojováním exportů z Pohody, e-shopu a reklamních účtů do jedné tabulky, ty dva dny nejsou analýza. Je to ruční ETL, které dělá člověk místo automatizace.

## Co s tím jde dělat, až jsou data v datovém skladu

Samotné napojení nic nerozhodne, hodnotu dělá až to, co se nad daty postaví. V datovém skladu jsou Pohoda data jen jedním ze zdrojů, vedle nich typicky leží tabulky z e-shopu, GA4 a reklamních účtů. Spojením pak jde vidět to, co Pohoda sama nikdy neukáže, například kteří zákazníci podle akvizičního kanálu mají po roce nejvyšší hodnotu z pohledu skutečně vystavených faktur.

V praxi z toho vznikají reporty typu: marže podle kategorie v čase, stav skladu s upozorněním na docházející položky, přehled zákazníků podle reálně fakturované hodnoty, a propojení marže z účetnictví s náklady na reklamu, tedy skutečná rentabilita kanálu, ne jen obrat.

## Proč to nestavíme jen na BigQuery

Většině klientů napojujeme Pohodu na BigQuery, je to náš standard a máme s ním nejvíc zkušeností. Není to ale jediná možnost. Pokud firma nebo skupina, do které patří, už stojí na Microsoft stacku s Power BI, umíme totéž napojení postavit do [Microsoft Fabric](/cz/integrace/pohoda-fabric). Pokud má datový sklad na Snowflake, jde to i tam, přes [napojení Pohody do Snowflake](/cz/integrace/pohoda-snowflake). Zdroj dat i logika napojení zůstávají stejné, mění se jen cílová platforma, podle toho, kde firma reálně reportuje dnes.

## Časté otázky

**Zpomalí napojení chod Pohody?** Ne, to je přesně důvod, proč stavíme na mServeru a ne na přímém zásahu do databáze. Čtení je navržené tak, aby neomezovalo lidi, kteří v Pohodě zrovna fakturují.

**Musím kvůli tomu měnit edici Pohody?** Ne. mServer je součástí Pohody, nejde o upgrade na dražší balíček.

**Funguje to, když firma vede víc provozoven nebo účetních jednotek v jedné skupině?** Ano, data se oddělí už při načítání, takže jde reportovat zvlášť i dohromady, podle potřeby.

**Jak dlouho napojení trvá?** Záleží na rozsahu dat a na tom, jestli je potřeba mapovat kódy produktů mezi Pohodou a e-shopem. Řádově dny, ne týdny, ale konkrétní odhad dáváme až po zmapování konkrétní instalace.

## Shrnutí

Pohoda je dobrý účetní systém. Reportingový nástroj to ale nikdy nebyl a ani být nemá. Data, která v ní firma má, faktury, marže, sklad, zákazníci, jsou přitom cenná. Napojit je na datový sklad znamená přestat exportovat do Excelu jednou za měsíc a začít se rozhodovat podle čísel, která se aktualizují sama.

## Shrnutí

Pohoda umí účetnictví, ne reporting. Napojení na BigQuery vytáhne faktury, sklad a zákazníky do jednoho místa, kde se dá počítat marže, obrátka i hodnota zákazníka bez měsíčního exportu.

## Řešíte přechod od Pohody k reálnému reportingu?

Napojujeme Pohodu na BigQuery a stavíme nad ní datový sklad, který se aktualizuje sám, bez ručních exportů.

[Kontaktujte mě](/cz/kontakt?interest=Pohoda%20a%20BigQuery)

![Vojtěch Šmida](/assets/founder-photo-DwNHbqvM.png)

Vojtěch Šmida

CEO & Datový analytik

Stavím vlastní projekty v e-commerce i leadových webech. Vytvářím vlastní projekty jako je Haltimo.com a Datimo.ai. 15 let v oboru, testuji na vlastní kůži.

[Haltimo.com](https://haltimo.com)[LinkedIn](https://www.linkedin.com/in/vojtechsmida)[vojtechsmida.cz](https://vojtechsmida.cz)

## Související řešení

Řešení, která vám pomohou implementovat strategie z tohoto článku.

### Maržové řízení kampaní

Optimalizace kampaní podle skutečné marže produktů, ne jen podle obratu.

[Chci vědět více](/cz/marzove-rizeni)

### BI reporting

Modul v Datimo.ai pro implementaci témat z tohoto článku.

[Chci vědět více](/cz/bi-reporting)

### RFM reporting

Modul v Datimo.ai pro implementaci témat z tohoto článku.

[Chci vědět více](/cz/rfm-reporting)

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

[[email protected]](/cdn-cgi/l/email-protection#7d14131b123d191c09141012531c14)

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