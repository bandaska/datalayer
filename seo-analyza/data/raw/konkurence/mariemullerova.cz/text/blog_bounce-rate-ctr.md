# URL: https://www.mariemullerova.cz/blog/bounce-rate-ctr/

1. [Domů](/) /
2. [Blog](/blog/) /
3. Bounce rate a CTR: co tyhle dvě čísla doopravdy znamenají (a kdy se jimi netrápit)

# Bounce rate a CTR: co tyhle dvě čísla doopravdy znamenají (a kdy se jimi netrápit)

![](/_astro/marie-portret.CxDjTv2c_Z1z1LNd.webp) [Marie Müllerová](/o-mne/)   **Aktualizováno** 4. září 2026

Obsah článku

1. [Co znamená CTR](#co-znamená-ctr)
2. [Co znamená bounce rate](#co-znamená-bounce-rate)
3. [CTR vs. bounce rate: hlavní rozdíl](#ctr-vs-bounce-rate-hlavní-rozdíl)
4. [Jak spolu CTR a bounce rate souvisí](#jak-spolu-ctr-a-bounce-rate-souvisí)
5. [Kdy je vysoké CTR dobré a kdy zavádějící](#kdy-je-vysoké-ctr-dobré-a-kdy-zavádějící)
6. [Kdy je vysoký bounce rate problém a kdy není](#kdy-je-vysoký-bounce-rate-problém-a-kdy-není)
7. [Jak CTR zlepšit](#jak-ctr-zlepšit)
8. [Jak snížit bounce rate](#jak-snížit-bounce-rate)
9. [Nejčastější chyby při vyhodnocování](#nejčastější-chyby-při-vyhodnocování)
10. [Rychlé shrnutí](#rychlé-shrnutí)

Bounce rate ukazuje, kolik návštěv v Google Analytics 4 skončilo bez zapojení. CTR (click-through rate, míra prokliku) říká, kolik lidí kliklo po zobrazení odkazu, reklamy nebo e-mailu. Ani jedno číslo samo neřekne, zda marketing funguje. Dohromady ale dobře odhalí, jestli slib před kliknutím odpovídá stránce, na kterou člověk dorazil.

## Co znamená CTR

CTR je podíl kliknutí a zobrazení. Google Ads uvádí vzorec **kliknutí / imprese = CTR**. Při 5 kliknutích ze 100 impresí vyjde CTR 5 %. Google Search Console pracuje se stejným principem: CTR počítá jako počet kliknutí vydělený počtem impresí ve výsledcích vyhledávání.

Liší se místo, kde nástroj klik měří. V Google Ads jde o klik na reklamu. V Google Search Console jde o klik z výsledků vyhledávání. V e-mailingu se CTR vztahuje ke klikům v e-mailu, ne k návštěvě webu po kliknutí.

Mini výpočet: stránka se ve výsledcích vyhledávání zobrazí 1 000krát a získá 50 kliknutí. CTR je 5 %. Stejných 5 % může být dobrý výsledek u úzkého informačního dotazu a slabý výsledek u brandového dotazu, kde uživatel hledá přímo vás. Do čtení CTR vstupuje pozice, typ výsledku i záměr hledání.

First Page Sage u dat pro rok 2026 uvádí, že první organický výsledek v Googlu dosahoval průměrné CTR 39,8 %, druhý 18,7 % a třetí 10,2 %. U reklamních výsledků ve stejné analýze vycházela první reklamní pozice na 2,1 % a čtvrtá na 1,2 %. Tato čísla nejsou norma pro každý web. Ukazují hlavně to, proč se CTR nedá hodnotit bez znalosti kanálu a pozice.

K širšímu výběru metrik se hodí navazující článek [KPI v marketingu: které sledovat](/blog/kpi-marketing/).

## Co znamená bounce rate

Bounce rate je míra okamžitého opuštění. V Google Analytics 4 už ale neznamená totéž co ve starších Universal Analytics. GA4 počítá bounce rate jako opak engagement rate. Přesněji: bounce rate je procento relací, které nebyly zapojené.

Zapojená relace v GA4 splní alespoň jednu ze tří podmínek. Trvá déle než 10 sekund, má alespoň 2 zobrazení stránky nebo obrazovky, případně obsahuje klíčovou událost. Relace, která nesplní ani jednu z těchto podmínek, spadá do bounce rate. Při engagement rate 70 % vychází bounce rate 30 %.

Mini výpočet: web má 100 relací a 60 z nich nesplní podmínky zapojené relace. Bounce rate je 60 %. V GA4 to současně znamená engagement rate 40 %.

Pozor na e-mailing. E-mailový bounce rate obvykle neznamená opuštění webu, ale nedoručení e-mailu. To je jiná metrika než webový bounce rate v GA4 a do stejného reportu nepatří bez vysvětlení.

K nastavení a čtení GA4 se váže samostatný návod [Google Analytics 4: návod pro začátečníky](/blog/google-analytics-4/).

## CTR vs. bounce rate: hlavní rozdíl

CTR měří chování před návštěvou. Bounce rate měří chování po příchodu na web. První metrika ukazuje, jestli titulek, reklama, výsledek ve vyhledávání nebo e-mail přiměly člověka kliknout. Druhá ukazuje, jestli návštěva po kliknutí dala alespoň základní signál zapojení podle GA4.

| Metrika | Co měří | Typický nástroj | Vzorec | Praktický problém |
| --- | --- | --- | --- | --- |
| CTR | Kliknutí ze zobrazení | Google Ads, Search Console, e-mailing | Kliknutí / imprese × 100 | Vysoké CTR nemusí znamenat konverze |
| Bounce rate | Nezapojené relace | Google Analytics 4 | Nezapojené relace / všechny relace × 100 | Vysoká hodnota nemusí být špatná u informační stránky |
| Engagement rate | Zapojené relace | Google Analytics 4 | Zapojené relace / všechny relace × 100 | Je opakem bounce rate |
| E-mailový bounce | Nedoručené e-maily | E-mailingový nástroj | Nedoručené e-maily / odeslané e-maily × 100 | Nejde o chování na webu |

Benchmarky čtěte podle zdroje a metodiky. Databox uváděl pro září 2024 medián GA4 bounce rate napříč odvětvími 44,04 %. U e-commerce a marketplaces vycházel 38,61 %, u SaaS 48,27 %. Mailchimp u e-mailingu uvádí průměrnou CTR 2,66 % s rozpětím 1–5 % podle odvětví. Jde o jiné kanály, jiné nástroje a jiná očekávání.

## Jak spolu CTR a bounce rate souvisí

Obě metriky dávají největší smysl vedle sebe. CTR říká, jestli se člověk rozhodl přijít. Bounce rate říká, jestli po příchodu zůstal alespoň minimálně zapojený podle GA4.

| Kombinace | Co obvykle znamená | Co zkontrolovat |
| --- | --- | --- |
| Vysoké CTR + nízký bounce rate | Slib před klikem odpovídá obsahu stránky | Dotaz, reklamu nebo snippet škálujte opatrně |
| Vysoké CTR + vysoký bounce rate | Titulek láká, stránka nenaplňuje očekávání | H1, první obrazovku, rychlost, obsah nad přehybem |
| Nízké CTR + nízký bounce rate | Obsah sedí, ale výsledek ve vyhledávání netáhne | Meta title, meta description, strukturovaná data |
| Nízké CTR + vysoký bounce rate | Problém je v akvizici i stránce | Záměr dotazu, landing page, nabídku, měření konverzí |

V účtech, které spravuji, nehodnotím CTR izolovaně. U PPC i organických vstupů dávám vedle sebe dotaz nebo reklamu, landing page, konverze a chování po kliknutí. Vysoké CTR je pozvánka k návštěvě. Není to důkaz výkonu.

Contentsquare uvádí, že jeho Digital Experience Benchmark 2026 stojí na 99 miliardách webových relací a více než 6 500 webech v 9 odvětvích. Takový vzorek dobře ukazuje, proč jedna metrika nestačí. Chování po kliknutí se mění podle zařízení, zdroje návštěvy i fáze nákupního rozhodování.

## Kdy je vysoké CTR dobré a kdy zavádějící

Vysoké CTR je dobré tehdy, když přivádí relevantní návštěvy. V Google Search Console může ukazovat, že meta title a meta description odpovídají dotazu. V Google Ads může znamenat, že reklama sedí na klíčové slovo. V e-mailingu naznačuje, že lidé reagují na obsah sdělení.

Zavádějící je ve chvíli, kdy po kliknutí nepřichází zapojení ani konverze. Reklama s 8 % CTR může pálit rozpočet, pokud lidé po 5 sekundách odcházejí. Organický výsledek s 12 % CTR může být problém, když titulek slibuje srovnání cen a stránka obsahuje jen krátkou definici.

First Page Sage pro rok 2026 ukazuje velký rozdíl mezi typy výsledků: featured snippet 42,9 %, AI Overview 38,9 %, první organický výsledek 39,8 %. MailerLite za rok 2025 uvádí průměrnou e-mailovou click rate 2,09 % a click-to-open rate 6,81 %. Číslo proto vždy porovnávejte s kanálem, typem výsledku a vlastním historickým výkonem.

## Kdy je vysoký bounce rate problém a kdy není

Vysoký bounce rate vadí hlavně u stránek, které mají vést k dalšímu kroku. U e-shopové kategorie, produktové stránky nebo PPC landing page obvykle chcete, aby člověk pokračoval: rozklikl produkt, přidal zboží do košíku, poslal formulář nebo klikl na CTA (call to action, výzvu k akci).

U informačního článku může být vyšší bounce rate normální. Člověk hledá definici, přečte si odpověď a odejde. U kontaktní stránky může návštěvník opsat telefon nebo adresu a také odejít. GA4 takovou relaci započítá jako zapojenou jen tehdy, když splní podmínku přes 10 sekund, 2 zobrazení nebo klíčovou událost.

Databox v září 2024 uváděl medián GA4 bounce rate 44,04 %, ale rozdíly podle oboru byly viditelné: e-commerce a marketplaces 38,61 %, consulting and professional services 47,84 %, technology 48,28 %. Berte je jako orientační rámec, ne jako cíl. Důležitější je změna proti vlastnímu normálu po úpravě stránky, kampaně nebo měření.

Když řešíte výkon landing page, navazuje na to [Konverzní optimalizace (CRO): úvod pro marketéry](/blog/konverzni-optimalizace/).

## Jak CTR zlepšit

CTR zlepšíte zpřesněním slibu před kliknutím. V SEO začněte u meta title a meta description. V Search Console hledejte stránky s vysokým počtem impresí a nízkou CTR. Google u impresí počítá zobrazení odkazu ve výsledcích vyhledávání, u kliků přechod uživatele na web. Poměr těchto 2 hodnot tvoří CTR.

U reklam kontrolujte shodu klíčového slova, textu reklamy a landing page. Google Ads počítá CTR na úrovni reklam, zápisů i klíčových slov, proto nedává smysl sledovat jen průměr celého účtu. U e-mailingu oddělte click rate od click-to-open rate. MailerLite za rok 2025 uvádí průměrnou click rate 2,09 %, zatímco click-to-open rate 6,81 %.

Praktický postup:

1. V Search Console vyfiltrujte dotazy s vysokými impresemi a nízkou CTR.
2. Porovnejte dotaz s titulkem stránky a meta description.
3. Odstraňte sliby, které stránka neplní.
4. Přidejte konkrétní údaj, rok nebo typ obsahu, pokud odpovídá stránce.
5. U reklam testujte varianty textu samostatně, ne zároveň s novou landing page.

## Jak snížit bounce rate

Bounce rate snížíte hlavně tím, že stránka rychle potvrdí očekávání z reklamy, výsledku vyhledávání nebo e-mailu. První obrazovka má odpovědět na stejný záměr, který přivedl klik. Když reklama slibuje ceník, návštěvník nemá hledat ceník pod třetí sekcí. Když titulek slibuje definici, odpověď patří do prvního odstavce.

GA4 počítá zapojení mimo jiné přes hranici 10 sekund a alespoň 2 zobrazení stránky nebo obrazovky. Interní odkazy, čitelné členění a jasná výzva k akci pomáhají jen tehdy, když odpovídají záměru návštěvy. Samotné přidání odkazů do textu problém nevyřeší.

Kontrolní seznam pro stránku:

* H1 odpovídá reklamě, dotazu nebo titulku ve vyhledávání.
* První odstavec dává odpověď bez zdržování.
* Na mobilu je hlavní obsah vidět bez rušivých prvků.
* Stránka má měřenou klíčovou událost, například odeslání formuláře.
* Interní odkaz navazuje na téma a neodvádí pozornost náhodně.

U větších webů porovnávejte bounce rate podle zdroje návštěvy. Placené kampaně, organické vyhledávání a e-mailing často přivádějí lidi s jiným záměrem.

## Nejčastější chyby při vyhodnocování

První chyba je izolované hodnocení. CTR bez konverzí neříká, zda kampaň vydělává. Bounce rate bez typu stránky neříká, zda návštěva selhala. U definice může být jedna návštěva dostatečná, u produktové stránky ne.

Druhá chyba je záměna nástrojů. Bounce rate v GA4 znamená nezapojené relace. Bounce rate v e-mailingu znamená nedoručené e-maily. Mailchimp uvádí CTR e-mailových kampaní 2,66 % jako orientační hodnotu, MailerLite za rok 2025 uvádí click rate 2,09 %. Ani jedno číslo nelze bez kontextu srovnávat s CTR v Search Console nebo Google Ads.

Třetí chyba je honění lepšího průměru bez dopadu na výsledek. Pokud zvednete CTR přehnaným titulkem a bounce rate zároveň vzroste ze 40 % na 70 %, výkon se pravděpodobně nezlepšil. Přivedli jste více lidí, kteří čekali něco jiného.

Čtvrtá chyba je ignorování měření. Bez klíčových událostí v GA4 nevidíte, jestli lidé udělali krok, který pro web znamená hodnotu. U marketingu rozhoduje výsledek, ne pěkné číslo v jedné metrice.

## Rychlé shrnutí

CTR znamená míru prokliku: kliknutí dělená impresemi. Bounce rate znamená míru nezapojených relací. V GA4 je opakem engagement rate a pracuje s hranicí 10 sekund, 2 zobrazeními nebo klíčovou událostí.

Vysoké CTR samo o sobě nestačí. Nízký bounce rate také ne. Nejlepší diagnostika vzniká až spojením obou metrik s konverzemi, zdrojem návštěvy a obsahem landing page. Pokud čísla nesedí na očekávání uživatele, nezačínejte úpravou grafu v reportu. Začněte titulkem, reklamou, první obrazovkou a tím, jestli stránka splní slib, kvůli kterému člověk klikl.

## Zdroje

* [Google Ads Help: Clickthrough rate](https://support.google.com/google-ads/answer/2615875)
* [Google Search Console: Performance metrics](https://search.google.com/search-console/about)
* [Google Search Console Help: Impressions, position, clicks](https://support.google.com/webmasters/answer/7042828)
* [Google Analytics Help: Engagement rate and bounce rate](https://support.google.com/analytics/answer/12195621)
* [Databox: Content Marketing Benchmarks by Industry](https://databox.com/content-marketing-benchmarks-by-industry)
* [First Page Sage: Google CTR by ranking position 2026](https://firstpagesage.com/reports/google-click-through-rates-ctrs-by-ranking-position/)
* [Mailchimp: Email Marketing Benchmarks](https://mailchimp.com/resources/email-marketing-benchmarks/)
* [MailerLite: Email marketing benchmarks 2025](https://www.mailerlite.com/blog/compare-your-email-performance-metrics-industry-benchmarks)
* [Contentsquare: Digital Experience Benchmark 2026](https://go.contentsquare.com/en/digital-experience-benchmark)

 ![Marie Müllerová](/_astro/marie-portret.CxDjTv2c_Z2nS1wq.webp)

[Marie Müllerová](/o-mne/)

Marketingu se věnuje přes šest let. Zaměřuje se na SEO a PPC reklamu v Google Ads a Seznam Sklik. K oboru se dostala v porovnávači cen Srovnáme, ve firmě Converso se vypracovala z asistentky na marketingovou specialistku a dodnes vede projekt Recenzer.cz. Za tu dobu spravovala přes 2 000 PPC kampaní, spolupracovala se 40+ affiliate partnery a stojí za více než 5 000 publikovanými články.

## Komentáře

Máte k článku dotaz nebo vlastní zkušenost? Napište mi a já vám ráda odpovím.

Načítám komentáře…

Přidat komentář

Jméno
  
E-mail

Komentář
  

Odeslat komentář

 

Doporučené

1. [1Konverzní optimalizace (CRO): úvod pro majitele webu](/blog/konverzni-optimalizace/)
2. [2Google Analytics 4: návod pro začátečníky](/blog/google-analytics-4/)
3. [3Looker Studio: dashboardy zdarma](/blog/looker-studio/)