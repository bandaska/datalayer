# URL: https://www.janpospisil.cz/blog/marketingovy-dashboard-looker-studio/

[Domů](/) / [Blog](/blog/) / [Články](/blog/clanky/)

# Marketingový dashboard v Looker Studio: Kompletní průvodce

Marketingový dashboard v Looker Studio krok za krokem. Propojení GA4, Search Console a dalších zdrojů. Automatický marketing reporting.

Jan Pospíšil

2. února 2026

9 min čtení

[Datová analytika](/blog/temata/datova-analytika/)[Analytika](/blog/temata/analytika/)[SEO nástroje](/blog/temata/seo-nastroje/)

### Obsah

 

Souhrn článku

* Looker Studio je zcela zdarma a propojením GA4 a Search Console pokryjete 80 % reportovacích potřeb většiny firem.
* Každá stránka dashboardu by měla obsahovat maximálně 8–10 vizualizací — přeplněný dashboard nikdo nečte.
* Pro data mimo Google ekosystém (Sklik, Ecomail) slouží jako nejlevnější bridge Google Sheets s pravidelným exportem.

Rozhodování na základě dat vyžaduje **přehledná a aktuální data**. Jenže procházení několika nástrojů — GA4, Search Console, Google Ads, e-mailový nástroj — zabere hodiny a často vede k neúplným závěrům. Řešením je centralizovaný dashboard, který agreguje klíčové metriky ze všech zdrojů na jednom místě.

**Google Looker Studio** (dříve Data Studio) je bezplatný nástroj pro tvorbu interaktivních dashboardů a reportů. Propojíte ho s desítkami datových zdrojů, vizualizujete klíčové metriky a nastavíte automatické sdílení s týmem nebo klientem. V tomto průvodci vás provedu celým procesem — od propojení zdrojů po hotový dashboard.

## Plánování struktury dashboardu

Než začnete dashboard stavět, definujte si **komu je určený** a **jaké rozhodnutí má podporovat**. Dashboard pro CEO bude vypadat jinak než dashboard pro SEO specialistu.

Doporučená struktura marketingového dashboardu:

1. **Přehledová stránka** — celkové KPI, trendy, srovnání s předchozím obdobím
2. **Organický výkon** — SEO metriky z GA4 a Search Console
3. **Placené kanály** — Google Ads, Sklik, Meta Ads
4. **Konverze a tržby** — e-commerce data, konverzní trychtýř
5. **E-mail marketing** — open rate, click rate, revenue per email

Každá stránka by měla obsahovat maximálně **8–10 vizualizací**. Přeplněný dashboard nikdo nečte.

## Propojení datových zdrojů

Looker Studio nabízí přes 800 konektorů. Pro marketingový dashboard potřebujete typicky tyto:

| Zdroj dat | Konektor | Klíčové metriky |
| --- | --- | --- |
| GA4 | Nativní (Google Analytics) | Uživatelé, sessions, konverze, tržby |
| Search Console | Nativní (Search Console) | Kliky, imprese, CTR, průměrná pozice |
| Google Ads | Nativní (Google Ads) | CPC, CPA, ROAS, konverze |
| Sklik | Supermetrics / vlastní API | Cena za klik, konverze, náklady |
| Meta Ads | Supermetrics / Funnel.io | Reach, CPM, konverze, ROAS |
| E-mail (Mailchimp) | Supermetrics | Open rate, click rate, odhlášení |
| E-mail (Ecomail) | Google Sheets jako bridge | Kampaně, metriky, segmenty |

**Nativní konektory** od Googlu jsou zdarma a nevyžadují další nástroje. Pro data z platforem mimo Google ekosystém budete potřebovat konektor třetí strany (Supermetrics od cca 99 EUR/měsíc) nebo ruční export do Google Sheets.

> „Doporučuji začít s GA4 a Search Console — tyto dva zdroje pokryjí 80 % reportovacích potřeb většiny firem. Další zdroje přidávejte postupně podle reálné potřeby.”

## Klíčové metriky podle kanálu

Na dashboard umístěte pouze metriky, které vedou k **akci**. Vyhněte se vanity metrikám, které vypadají dobře, ale neříkají nic o výkonu.

| Kanál | Primární KPI | Sekundární KPI |
| --- | --- | --- |
| SEO | Organické konverze, tržby z organiku | Kliky, CTR, pozice Top 3/10 |
| PPC | ROAS, CPA, konverze | CPC, quality score, impression share |
| E-mail | Revenue per email, konverze | Open rate, click rate, list growth |
| Sociální sítě | Konverze, asistované konverze | Engagement rate, reach, traffic |
| Obsahový marketing | Organický traffic na články, konverze | Čas na stránce, bounce rate |

## Tvorba vizualizací krok za krokem

Po propojení datových zdrojů začněte s **přehledovou stránkou**:

1. **Scorecard widgety** — velká čísla pro klíčové KPI (tržby, konverze, návštěvnost) se srovnáním s předchozím obdobím
2. **Časová řada (line chart)** — trend návštěvnosti a konverzí za posledních 12 měsíců
3. **Sloupcový graf** — porovnání kanálů podle konverzí
4. **Koláčový graf** — rozdělení tržeb podle kanálu
5. **Tabulka** — top 10 landing pages podle konverzí

**Tipy pro profesionální vzhled:**

* Používejte konzistentní barevnou paletu (max 5–6 barev)
* Přidejte datové filtry (období, zařízení, kanál)
* Nastavte srovnávací období (např. předchozí měsíc nebo rok)
* Pojmenujte každý graf srozumitelně — bez žargonu

Pro pokročilé tipy ke správnému výběru metrik si přečtěte článek o [Google Looker Studio](/blog/google-looker-studio/) a propojení s [Google Analytics](/blog/google-analytics/).

## Automatizace a sdílení

Looker Studio umožňuje **automatické zasílání reportů** e-mailem. Nastavte rozesílku pro tým nebo klienty:

1. Otevřete dashboard a klikněte na Share > Schedule email delivery
2. Zadejte příjemce, frekvenci (denně, týdně, měsíčně) a čas odeslání
3. Zvolte formát — odkaz na živý dashboard nebo PDF příloha
4. Nastavte filtr pro období (např. „předchozí týden”)

**Doporučená frekvence reportů:**

* **Denně** — pouze pro operativní metriky (PPC spend, technické chyby)
* **Týdně** — výkon kanálů, konverze, klíčové KPI
* **Měsíčně** — strategický přehled pro management, srovnání s cíli

> „Nejlepší dashboard je ten, který si tým prohlíží pravidelně. Pokud reporty nikdo nečte, zjednodušte je — méně metrik, větší čísla, jasnější příběh.”

## Pokročilé funkce a šablony

Pro zkušenější uživatele nabízí Looker Studio několik pokročilých možností:

* **Blended data** — kombinace dat z více zdrojů v jedné vizualizaci (např. GA4 konverze + Google Ads náklady pro výpočet skutečného ROAS)
* **Calculated fields** — vlastní vypočtené metriky přímo v dashboardu
* **Community vizualizace** — rozšíření od komunity (heat mapy, funnel grafy)
* **Parametry** — interaktivní ovládací prvky pro dynamické filtrování

Pokud chcete začít rychle, existují **šablony od Googlu** i komunity. Doporučuji je použít jako základ a upravit podle vlastních potřeb — tvorba dashboardu od nuly zabere typicky 4–8 hodin, úprava šablony 1–2 hodiny.

## Často kladené otázky

Je Looker Studio skutečně zdarma?

Ano, Google Looker Studio je plně bezplatný. Omezení jsou minimální — neomezený počet dashboardů, datových zdrojů i uživatelů. Platit můžete pouze za konektory třetích stran (Supermetrics, Funnel.io), pokud potřebujete data z platforem mimo Google ekosystém, jako je Meta Ads nebo Sklik.


Jak často se data v dashboardu aktualizují?

Záleží na datovém zdroji. GA4 data se aktualizují s 24–48hodinovým zpožděním. Search Console má zpoždění 2–3 dny. Google Ads data jsou k dispozici téměř v reálném čase. Looker Studio navíc cachuje data — výchozí je 12 hodin, ale můžete nastavit kratší interval. Pro živý přehled klikněte na Refresh Data v pravém horním rohu.


Mohu sdílet dashboard s klientem, který nemá Google účet?

Bohužel Looker Studio vyžaduje pro přístup k živému dashboardu Google účet. Alternativou je zasílání PDF reportů e-mailem přes funkci Schedule email delivery — příjemce obdrží statický PDF bez nutnosti přihlášení. Další možností je export dashboardu do PDF a sdílení přes váš projektový nástroj.


Jak propojím data z českých nástrojů jako Sklik nebo Heureka?

Pro Sklik můžete použít konektor Supermetrics (placený) nebo exportovat data do Google Sheets a propojit Sheets jako datový zdroj v Looker Studio. Stejný postup funguje pro Heureku, Zboží.cz nebo jakýkoli jiný nástroj s exportem do CSV/Excel. Google Sheets jako bridge je nejlevnější řešení, ale vyžaduje pravidelný ruční nebo automatizovaný export.

 [Spolupráce

### Chcete podobné výsledky?

Pomůžu vám s online marketingem a SEO. Ozvěte se mi a probereme to.

Nezávazná konzultace →](/kontakt/)  

![Jan Pospíšil](/images/profile/jan-pospisil.webp)

O autorovi

### Jan Pospíšil

Online marketing konzultant s 18+ lety praxe. Pomáhám e-commerce projektům růst pomocí dat, strategie a měřitelných výsledků.

18+ let praxe
  
50+ klientů

[Konzultace zdarma](/kontakt/) [Více o mně](/o-mne/) [LinkedIn](https://linkedin.com/in/jan-pospisil/)

## Podobné články

[![Collabim – český SEO nástroj](/images/blog/collabim.svg)

### Collabim zkušenosti 2026: recenze po 2 letech užívání

Collabim po 2 letech používání: v čem je nenahraditelný (pozice na Seznamu, české reporty), kde má strop (zpětné odkazy, technický audit) a pro koho se od 538 Kč měsíčně vyplatí..

Přečíst →](/blog/collabim/)[![Marketing Miner – český nástroj pro SEO analýzu a klíčová slova](/images/blog/marketing-miner.svg)

### Marketing Miner recenze 2026: Český SEO nástroj pro keyword research, SERP a AI viditelnost

Recenze Marketing Mineru na základě reálných zkušeností – keyword research, SERP analýza, hromadné zpracování dat a nové měření AI viditelnosti.

Přečíst →](/blog/marketing-miner/)[![Marketing Miner návod – keyword research krok za krokem](/images/blog/marketing-miner-navod.svg)

### Marketing Miner návod: Keyword research a SERP analýza krok za krokem (2026)

Praktický návod, jak v Marketing Mineru udělat keyword research, SERP analýzu, hromadný audit URL a měřit AI viditelnost značky.

Přečíst →](/blog/marketing-miner-navod/)

## Související pojmy

[#### UTM parametry

UTM parametry jsou štítky v URL pro sledování zdrojů návštěvnosti.

→](/blog/utm-parametry/) [#### Konverze

Co je konverze v online marketingu? Definice, typy konverzí, měření konverzního poměru a základy optimalizace..

→](/blog/konverze/) [#### SEO analýza

Co je SEO analýza a jaké tři pilíře zahrnuje: technika, obsah a odkazy.

→](/blog/seo-analyza/) [#### CPA (Cost Per Acquisition)

CPA neboli cost per acquisition měří náklady na jednu konverzi.

→](/blog/cpa/)

[← Všechny články](/blog/clanky/)