# URL: https://www.janpospisil.cz/blog/ga4/

[Domů](/) / [Blog](/blog/) / [Pojmy](/blog/pojmy/)

# GA4: Co je Google Analytics 4 a jak ho nastavit

Co je GA4 (Google Analytics 4)? Rozdíly oproti Universal Analytics, event-based model, engagement rate, prediktivní metriky a nastavení.

Jan Pospíšil

17. července 2025

4 min čtení

[Datová analytika](/blog/temata/datova-analytika/)[Analytika](/blog/temata/analytika/)[SEO nástroje](/blog/temata/seo-nastroje/)

### Obsah

 

Souhrn článku

* GA4 nahradilo Universal Analytics v červenci 2023 a používá event-based model — vše je událost, od pageview po nákup.
* Bezplatná verze uchovává podrobná data maximálně 14 měsíců, pro dlouhodobé uložení využijte BigQuery export.
* Klíčové novinky jsou engagement rate místo bounce rate, prediktivní metriky a cookieless modelování.

**GA4 (Google Analytics 4)** je aktuální verze analytického nástroje od Googlu, která v červenci 2023 nahradila Universal Analytics (UA). GA4 přináší zásadně odlišný přístup k měření — **event-based model** namísto session-based, cross-platform sledování a lepší ochranu soukromí uživatelů.

## GA4 vs. Universal Analytics — klíčové rozdíly

| Aspekt | Universal Analytics | GA4 |
| --- | --- | --- |
| **Datový model** | Session-based (návštěvy) | Event-based (události) |
| **Měření** | Pageviews jako základ | Všechno je událost |
| **Cross-platform** | Omezené | Nativní web + app |
| **Soukromí** | Závislé na cookies | Cookieless modelování |
| **Bounce rate** | Podíl jednosměrných návštěv | Nahrazeno engagement rate |
| **Reporty** | Předdefinované | Explorations (vlastní) |
| **Retence dat** | Neomezená | Max 14 měsíců (zdarma) |
| **Predikce** | Ne | Ano (prediktivní metriky) |

> Přechod z UA na GA4 vyžaduje změnu myšlení. V GA4 neexistuje klasický bounce rate — místo něj sledujete engagement rate, který měří podíl smysluplných návštěv. To je zásadní posun od měření nezájmu k měření zájmu.

## Klíčové koncepty Google Analytics 4

**Události (Events):**
Vše v GA4 je událost — zobrazení stránky (page\_view), klik, scroll, stažení souboru i nákup. Události se dělí na automaticky sbírané, vylepšené (enhanced measurement) a vlastní.

**[Engagement rate](/blog/engagement-rate/):**
Podíl návštěv, které trvaly déle než 10 sekund, obsahovaly konverzi nebo zobrazily více než jednu stránku. Nástupce bounce rate.

**Explorations:**
Vlastní analytické reporty s drag-and-drop rozhraním. Umožňují funnelovou analýzu, kohorty, path exploration a volný formát.

**Audiences:**
Segmenty uživatelů definované na základě chování, demografických dat nebo prediktivních metrik. Propojitelné přímo s Google Ads pro [remarketing](/blog/remarketing/).

## Hlavní funkce GA4

| Funkce | Popis | Využití |
| --- | --- | --- |
| **Enhanced Measurement** | Automatické měření scrollu, videa, kliků | Základní analýza bez kódu |
| **Prediktivní metriky** | Pravděpodobnost nákupu, odchodu | Cílení reklam na „hot” uživatele |
| **BigQuery export** | Export raw dat zdarma | Pokročilé analýzy, BI nástroje |
| **Consent mode** | Modelování dat i bez cookies | GDPR compliance |
| **Debug View** | Ladění událostí v reálném čase | Ověření implementace |
| **Cross-domain tracking** | Měření napříč doménami | Multidomain weby |

## Jak začít s GA4

Základní nastavení GA4 zahrnuje implementaci měřicího kódu (ideálně přes Google Tag Manager), konfiguraci enhanced measurement, definici konverzních událostí a propojení s Google Ads a [Search Console](/blog/google-search-console/). Pro správné sledování kampaní využívejte [UTM parametry](/blog/utm-parametry/).

Podrobný průvodce nastavením a využitím najdete v článku o [Google Analytics](/blog/google-analytics/).

## Často kladené otázky

Je GA4 zdarma?

Ano, základní verze GA4 je zdarma. Existuje i placená verze GA4 360 pro enterprise klienty s vyššími limity dat, delší retencí, SLA a pokročilými funkcemi. Pro většinu českých webů a e-shopů stačí bezplatná verze.


Jak dlouho GA4 uchovává data?

V bezplatné verzi maximálně 14 měsíců (nastavitelné na 2 nebo 14 měsíců). Agregované reporty jsou dostupné bez omezení, ale podrobná uživatelská data se po limitu mažou. Pro dlouhodobé uložení využijte BigQuery export.


Proč v GA4 nevidím bounce rate?

GA4 nahradil bounce rate metrikou engagement rate, která měří pozitivní signál (zapojení) místo negativního (opuštění). Bounce rate je v GA4 dostupný jako inverzní metrika k engagement rate, ale doporučujeme přejít na sledování engagementu.


Potřebuji Google Tag Manager pro GA4?

Technicky ne — GA4 lze implementovat přímým kódem. Ale GTM výrazně usnadňuje správu tagů, sledování vlastních událostí a ladění. Pro e-shopy a komplexnější weby je GTM de facto nezbytný.

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

[#### SEO specialista 2026

Co dělá SEO specialista, jaké má dovednosti a kolik bere (platy i hodinovky v ČR 2026).

→](/blog/seo-specialista/) [#### Analýza klíčových slov 2026

Jak udělat analýzu klíčových slov: postup krok za krokem, nástroje zdarma i placené, long-tail strategie a search intent.

→](/blog/analyza-klicovych-slov/) [#### HTTP 503

HTTP 503 (Service Unavailable) značí dočasnou nedostupnost serveru.

→](/blog/stavovy-kod-http-503/) [#### UTM parametry

UTM parametry jsou štítky v URL pro sledování zdrojů návštěvnosti.

→](/blog/utm-parametry/)

[← Všechny pojmy](/blog/pojmy/)