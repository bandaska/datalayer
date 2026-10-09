# URL: https://www.datimo.ai/cz/blog/google-cloud-vs-keboola

[![Datimo.ai](/assets/logo-BVgi-JqH.png)Datimo.ai](/cz)

Balíčky

Služby

[Pro agentury](/cz/agentury)[Reference](/cz/reference)[Ceník](/cz/cenik)[O nás](/cz/o-nas)[Kontakt](/cz/kontakt)

[Chci demo zdarma](/cz/demo)

MENU

[Zpět na blog](/cz/blog)

# Keboola vs. vlastní hosting: kdy se přesun vyplatí

[![Vojtěch Šmida](/assets/founder-photo-DwNHbqvM.png)Vojtěch Šmida](#author-bio)

Keboola je skvělá na rychlé napojení reklamních systémů. Jakmile ale zkusíte stáhnout objemná data například z ERP nebo e-shopu, její minutový tarif Pay As You Go vás finančně sežere. Reálná matematika přesunu těžkých jobů na vlastní hosting a kdy se to vyplatí.

Google Cloud

Keboola

Data pipeline

## Jak to začalo

Původně jsme přes Keboolu stahovali jen reklamní systémy. Tyhle joby běžely pár dnů v týdnu, pokryl to volný limit 60 minut měsíčně a za nástroj jsme neplatili prakticky nic.

Pak jsme chtěli připojit ERP Abra, který používáme v [Haltimo.com](https://haltimo.com). Podíval jsem se do usage logu a zjistil, že stažení a přesun dat z Abry do BigQuery by trvalo 30 minut denně. Za měsíc to dělá 900 minut a při $0,14 za minutu v tarifu Pay As You Go (PAYG) by nás jen ERP stálo zhruba $126 měsíčně.

K tomu přidejte stahování feedů pro každou doménu z deseti domén zvlášť. Každý feed 6 minut, to je 60 minut denně, dalších 1 800 minut měsíčně. Z původně bezplatného nástroje se rázem stala velká položka v rozpočtu. Celkem 2 700 minut a přes $300 měsíčně jen za tahání a zpracování dat. V tu chvíli jsme tyhle joby z Kebooly přesunuli.

## Jak to funguje technicky

Napsali jsme skript, pustili ho v cloudu a data jdou rovnou do BigQuery. Konkrétní platforma nehraje roli. My jsme zůstali v Google Cloudu, protože tam máme datový sklad. BigQuery nabízí štědrý free tier, který u menších projektů pokryje všechny náklady.

## Kalkulačka: kdy se přesun vyplatí

Sečtěte čas svých nejtěžších jobů a dosaďte do kalkulačky. Náš příklad s Abrou a feedy dává dohromady 2 700 minut měsíčně:

Kalkulačka: kdy se přesun vyplatí

Měsíční spotřeba (min):

Počet konektorů:

Keboola / měs.

$378

~8 316 Kč

Vlastní hosting / měs.

$121

~2 658 Kč

Jednorázová investice

$2200

~10 hod. práce

Návratnost

9 měs.

pak $257/měs. úspora

Odhad. Keboola PAYG: $0,14/min. Vlastní hosting: ~$0,004/min + 30 min/měs. údržby × $110/hod. Investice: ~10 hod. × 2 500 Kč/hod. Kurz USD/CZK: 22.

## Skrytý háček: lidské kapacity a TCO

Kalkulačka srovnává platbu za hotovou službu (Keboola) s platbou za výpočetní čas na vlastním hostingu. Chybí v ní to nejdražší: čas na vývoj a údržbu.

Někdo ten kód musí napsat, nasadit a udržovat. AI dnes dokáže cizí skript pochopit a opravit rychle, ale testování a nasazení do produkce pořád vyžaduje něčí čas. Napsat konektor zabere zhruba 5 hodin, přepojit navazující pipeline dalších 5 hodin, počáteční investice ~$1 100 při sazbě 2 500 Kč/hod. Průběžná údržba vychází na ~30 minut měsíčně na konektor (~$55).

Čísla pro náš příklad 2 700 minut, 2 konektory:

* Keboola: **$378 měsíčně**
* Vlastní hosting: **$121 měsíčně** ($11 provoz + $110 údržba)
* Reálná měsíční úspora: **$257**

Návratnost počáteční investice $2 200 vychází na tři čtvrtě roku. U menší zátěže, kde Keboola stojí dvacet dolarů měsíčně, se přesun nevyplatí, paušální náklady na údržbu jsou vyšší než úspora.

## Kdy přepsat a kdy nechat běžet

* **Job do 5 minut s hotovým konektorem?** Nechte v Keboole. Paušální náklady na údržbu vlastního řešení jsou vyšší než zaplacené kredity.
* **Těžký job, časté aktualizace nebo násobení přes více domén?** Přesuňte na vlastní hosting.

Stejná logika platí i pro Make, Zapier nebo n8n. Pokud platíte za operace a joby jsou krátké a jednoduché, nechte je tam. Jakmile se počet operací nebo scénářů zvětší, cena roste rychleji než hodnota a vlastní skript dává smysl.

Odpověď je v číslech, ne v pocitu.

## Shrnutí

Joby pod 5 minut s hotovým konektorem nechte v Keboole. Těžké joby, časté aktualizace nebo násobení přes více domén přesuňte na vlastní hosting. Návratnost počáteční investice je při velké zátěži pod 5 měsíců.

## Řešíte něco podobného?

Stavíme datové sklady a pipeline na Google Cloudu. Ozvěte se.

[Kontaktujte mě](/cz/kontakt?interest=Byznys%20reporting)

![Vojtěch Šmida](/assets/founder-photo-DwNHbqvM.png)

Vojtěch Šmida

CEO & Datový analytik

Stavím vlastní projekty v e-commerce i leadových webech. Vytvářím vlastní projekty jako je Haltimo.com a Datimo.ai. 15 let v oboru, testuji na vlastní kůži.

[Haltimo.com](https://haltimo.com)[LinkedIn](https://www.linkedin.com/in/vojtechsmida)[vojtechsmida.cz](https://vojtechsmida.cz)

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

[[email protected]](/cdn-cgi/l/email-protection#f1989f979eb1959085989c9edf9098)

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