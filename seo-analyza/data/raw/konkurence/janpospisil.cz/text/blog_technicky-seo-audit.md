# URL: https://www.janpospisil.cz/blog/technicky-seo-audit/

[Domů](/) / [Blog](/blog/) / [Články](/blog/clanky/)

# Technický SEO audit: Kompletní checklist a postup

Technický SEO audit od crawlability přes indexaci po Core Web Vitals. Checklist, nástroje a prioritizace. 42 % webů má kritické chyby.

Jan Pospíšil

10. ledna 2026

11 min čtení

[SEO a GEO](/blog/temata/seo-a-geo/)[Technické SEO](/blog/temata/technicke-seo/)[SEO](/blog/temata/seo/)

### Obsah

 

Souhrn článku

* Až 42 % webů má kritické technické SEO chyby, které negativně ovlivňují jejich viditelnost ve vyhledávání.
* Audit začíná crawlem v Screaming Frog a analýzou indexace v GSC, nálezy se následně prioritizují podle dopadu a náročnosti opravy.
* Výsledky oprav se v Search Console obvykle projeví během 4–8 týdnů.

**Technický SEO audit** je systematická kontrola technické stránky webu z pohledu vyhledávačů. Bez solidního technického základu nemůže ani ten nejlepší obsah dosáhnout svého potenciálu ve vyhledávání. Audit odhalí problémy, které brání správnému crawlování, indexaci a hodnocení vašeho webu.

## Proč provádět technický audit

Technické problémy na webu působí jako neviditelná brzda. Stránky se neindexují, načítají se pomalu nebo se zobrazují s chybami. Pravidelný technický audit by měl být součástí každé [SEO strategie](/blog/co-je-seo/).

> „Až 42 % webů má kritické technické SEO chyby, které negativně ovlivňují jejich viditelnost ve vyhledávání.” — Semrush Site Audit Study, 2024

Doporučená frekvence auditů:

* **Malé weby** (do 100 stránek) — 1x za 6 měsíců
* **Střední weby** (100–1 000 stránek) — 1x za 3 měsíce
* **Velké weby** (1 000+ stránek) — měsíčně + po každém větším nasazení

## Přehled oblastí auditu

| Oblast | Co kontrolovat | Nástroje | Priorita |
| --- | --- | --- | --- |
| **Crawlability** | robots.txt, sitemap, crawl errors | [Screaming Frog](/blog/screaming-frog/), [GSC](/blog/google-search-console/) | Kritická |
| **Indexace** | Index coverage, canonical, noindex | GSC, Screaming Frog | Kritická |
| **Architektura** | URL struktura, breadcrumbs, interní linky | Screaming Frog, Ahrefs | Vysoká |
| **Rychlost** | Core Web Vitals, komprese, caching | [Lighthouse](/blog/google-lighthouse/), PageSpeed Insights | Vysoká |
| **Mobilní verze** | Responzivní design, viewport, touch | Lighthouse, GSC | Vysoká |
| **Zabezpečení** | HTTPS, mixed content, security headers | SSL Labs, SecurityHeaders.com | Vysoká |
| **Strukturovaná data** | Schema validita, rich results | Rich Results Test | Střední |
| **Internacionalizace** | hreflang, locale targeting | Hreflang Tags Testing Tool | Dle potřeby |

## Crawlability: Přístupnost pro roboty

Crawlability určuje, zda mohou vyhledávací roboti procházet váš web. Pokud robot na stránku nedokáže přistoupit, nemůže ji ani indexovat.

### Co kontrolovat

* **robots.txt** — ověřte, že neblokujete důležité stránky nebo zdroje (CSS, JS)
* **XML sitemap** — obsahuje všechny důležité URL, neobsahuje chybové stránky
* **Crawl errors** v [Google Search Console](/blog/google-search-console/) — chyby serveru (5xx), chybějící stránky (404)
* **Crawl budget** — u velkých webů sledujte, zda Google stíhá procházet všechny stránky
* **Řetězení přesměrování** — maximálně 1 přesměrování (ideálně žádné řetězení)
* **Orphan pages** — stránky bez interních odkazů, na které robot nemůže dorazit

### Jak testovat

Otevřete [Screaming Frog](/blog/screaming-frog/) a spusťte crawl celého webu. V reportu **Response Codes** zkontrolujte 3xx, 4xx a 5xx odpovědi. V záložce **Sitemaps** porovnejte URL v sitemap se skutečně crawlovanými stránkami.

## Indexace: Co Google vidí

I když robot stránku najde, nemusí ji zařadit do indexu. Problémy s indexací patří k nejčastějším příčinám nízké viditelnosti.

### Co kontrolovat

* **Index Coverage Report** v GSC — stav indexace všech URL
* **Canonical tagy** — ověřte, že canonical ukazuje na správnou URL
* **Meta robots / noindex** — zkontrolujte, že důležité stránky nemají noindex
* **Duplikátní obsah** — identifikujte stránky s duplicitním nebo velmi podobným obsahem
* **Tenký obsah** — stránky s minimálním obsahem, které Google může ignorovat
* **Parametrické URL** — filtrování a řazení může generovat tisíce duplikátních URL

## Architektura webu

Struktura webu ovlivňuje jak uživatelskou navigaci, tak distribuci **link equity** a efektivitu crawlování.

### Co kontrolovat

* **Hloubka kliknutí** — důležité stránky by měly být dostupné na max. 3 kliknutí z homepage
* **URL struktura** — krátké, čitelné, obsahující klíčová slova
* **Breadcrumbs** — drobečková navigace s odpovídajícím Schema markup (BreadcrumbList)
* **Interní prolinkování** — klíčové stránky by měly mít dostatek interních odkazů
* **Sirotčí stránky** — stránky bez jediného interního odkazu

### Ideální URL struktura

* `example.cz/kategorie/podkategorie/stranka`
* Bez speciálních znaků, malými písmeny, s pomlčkami
* Bez zbytečných parametrů a session ID

## Rychlost načítání

Rychlost webu je přímý rankingový faktor. [Core Web Vitals](/blog/core-web-vitals/) definují prahové hodnoty, které by váš web měl splňovat.

### Co kontrolovat

* **LCP** (Largest Contentful Paint) — cílová hodnota pod 2,5 s
* **INP** (Interaction to Next Paint) — cílová hodnota pod 200 ms
* **CLS** (Cumulative Layout Shift) — cílová hodnota pod 0,1
* **Komprese** — Gzip nebo Brotli pro textové soubory
* **Browser caching** — správné nastavení Cache-Control hlaviček
* **Optimalizace obrázků** — formát WebP/AVIF, lazy loading, správné rozměry
* **Minifikace** — CSS, JavaScript, HTML

Spusťte [Lighthouse](/blog/google-lighthouse/) audit na klíčových stránkách (homepage, kategorie, produkt/článek) a zaznamenejte skóre Performance.

## Mobilní optimalizace

Google používá **mobile-first indexing**, což znamená, že primárně hodnotí mobilní verzi vašeho webu.

### Co kontrolovat

* **Responzivní design** — obsah se správně přizpůsobuje různým šířkám
* **Viewport meta tag** — `<meta name="viewport" content="width=device-width, initial-scale=1">`
* **Velikost textu** — čitelnost bez zoomování (min. 16px pro body text)
* **Touch targets** — dostatečná velikost klikatelných prvků (min. 48x48px)
* **Horizontální scroll** — žádný obsah přesahující šířku obrazovky
* **Obsah parity** — mobilní verze obsahuje stejný obsah jako desktopová

## Zabezpečení webu

Bezpečnost je rankingový faktor a zároveň otázka důvěry uživatelů.

### Co kontrolovat

* **HTTPS** — celý web musí běžet na HTTPS, certifikát musí být platný
* **Mixed content** — žádné HTTP zdroje načítané na HTTPS stránkách
* **Security headers** — HSTS, X-Content-Type-Options, X-Frame-Options
* **HTTP → HTTPS redirect** — správné přesměrování (301, ne 302)

## Strukturovaná data (Schema markup) a hreflang

### Strukturovaná data

* Validní JSON-LD bez chyb v Rich Results Test — podrobnosti v průvodci [schema markup a strukturovanými daty](/blog/schema-markup/)
* Odpovídající viditelnému obsahu na stránce
* Implementované relevantní typy (Organization, BreadcrumbList, Article/Product…)

### Hreflang (pro vícejazyčné weby)

* Správné jazykové a regionální kódy
* Vzájemné reference mezi jazykovými verzemi
* Zařazení x-default varianty
* Konzistence mezi hreflang a canonical tagy

## Co navíc zkontrolovat u webu od AI

Weby stavěné s pomocí AI nástrojů selhávají opakovaně na stejných místech. Běžný audit je nechytí, protože v prohlížeči vypadá všechno správně. Tři kontroly navíc, každá na pár minut:

**Vidí robot totéž co návštěvník?** Stáhněte stránku bez spuštění JavaScriptu a spočítejte slova:

```
curl -s https://vasweb.cz/sluzba/ | sed 's/<[^>]*>//g' | wc -w
```

Když vyjde řádově méně, než na stránce vidíte, obsah se dopisuje až v prohlížeči. V mém měření 195 českých a slovenských webů (4.9.2026) byl medián 898 slov, takže výsledek pod 150 je varovný signál.

**Neliší se lokalitní stránky jen názvem města?** Porovnejte dvě z nich. Shoda nad 90 % znamená, že jde o generované kopie, ne o samostatné stránky.

**Nezůstaly v kódu pracovní poznámky?** Zobrazte si zdroj stránky a hledejte `TODO`, `FIXME` nebo `ověřit`. Patří tam i kontrola, že na serveru nejsou veřejně čitelné vývojářské adresáře jako `.git`.

Souvislosti a to, co si ohlídat už při zadání, rozebírám v článku [tvorba webu](/blog/tvorba-webu/).

## Postup provedení auditu

1. **Crawl webu** — [Screaming Frog](/blog/screaming-frog/) nebo podobný crawler pro kompletní sken
2. **GSC analýza** — projděte Index Coverage, Core Web Vitals, Mobile Usability v [Google Search Console](/blog/google-search-console/)
3. **Lighthouse audit** — spusťte na 5–10 reprezentativních stránkách
4. **Prioritizace** — seřaďte problémy podle dopadu a náročnosti opravy
5. **Akční plán** — vytvořte spreadsheet s problémy, prioritou, odpovědnou osobou a deadlinem
6. **Implementace** — opravte problémy od nejvyšší priority
7. **Verifikace** — po opravách znovu crawlněte a ověřte v GSC
8. **Dokumentace** — zdokumentujte provedené změny pro budoucí referenci

## Často kladené otázky

Jak dlouho trvá kompletní technický audit?

Záleží na velikosti webu. Pro malý web (do 100 stránek) počítejte s **2–4 hodinami** práce. Střední web (100–1 000 stránek) zabere **1–2 dny**. U velkých webů s tisíci stránkami může audit trvat **týden i více**, zejména pokud zahrnuje analýzu logů serveru a hloubkovou kontrolu indexace.


Které nástroje jsou pro technický audit nezbytné?

Minimální sada nástrojů zahrnuje: **[Google Search Console](/blog/google-search-console/)** (indexace, Core Web Vitals), **[Screaming Frog](/blog/screaming-frog/)** (crawl analýza, free verze do 500 URL), **[Google Lighthouse](/blog/google-lighthouse/)** (rychlost, přístupnost). Pro pokročilejší analýzu pak Ahrefs nebo Semrush Site Audit, Chrome DevTools a SSL Labs pro kontrolu zabezpečení.


Co dělat, když najdu stovky chyb?

Nepanikařte — je to běžné, zejména u starších webů. Klíčem je **prioritizace**. Nejprve opravte kritické problémy ovlivňující crawlování a indexaci (robots.txt blokování, hromadné 404/5xx chyby, chybějící canonical). Poté se věnujte rychlosti a mobilní optimalizaci. Kosmetické problémy řešte až nakonec. Vždy se zaměřte na stránky s nejvyšším obchodním dopadem.


Jak poznám, že audit přinesl výsledky?

Sledujte několik klíčových metrik v [Google Search Console](/blog/google-search-console/): počet **indexovaných stránek** (měl by růst), počet **crawl chyb** (měl by klesat), **Core Web Vitals** (více URL v kategorii „dobrý”), a celkový počet **zobrazení a kliknutí** v organic search. Výsledky se obvykle projeví během 4–8 týdnů po implementaci oprav.

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

[![SEO katalogy 2026 – kdy pomáhají a kdy škodí, s checklistem na ověření](/images/blog/seo-katalogy.svg)

### SEO katalogy 2026: kdy pomáhají, kdy jen škodí

Mají SEO katalogy v roce 2026 ještě smysl? Google spamové odkazy z katalogů neruší penalizací, ale neutralizuje.

Přečíst →](/blog/seo-katalogy/)[![Collabim – český SEO nástroj](/images/blog/collabim.svg)

### Collabim zkušenosti 2026: recenze po 2 letech užívání

Collabim po 2 letech používání: v čem je nenahraditelný (pozice na Seznamu, české reporty), kde má strop (zpětné odkazy, technický audit) a pro koho se od 538 Kč měsíčně vyplatí..

Přečíst →](/blog/collabim/)[![Marketing Miner – český nástroj pro SEO analýzu a klíčová slova](/images/blog/marketing-miner.svg)

### Marketing Miner recenze 2026: Český SEO nástroj pro keyword research, SERP a AI viditelnost

Recenze Marketing Mineru na základě reálných zkušeností – keyword research, SERP analýza, hromadné zpracování dat a nové měření AI viditelnosti.

Přečíst →](/blog/marketing-miner/)

## Související pojmy

[#### SEO specialista 2026

Co dělá SEO specialista, jaké má dovednosti a kolik bere (platy i hodinovky v ČR 2026).

→](/blog/seo-specialista/) [#### Analýza klíčových slov 2026

Jak udělat analýzu klíčových slov: postup krok za krokem, nástroje zdarma i placené, long-tail strategie a search intent.

→](/blog/analyza-klicovych-slov/) [#### HTTP 503

HTTP 503 (Service Unavailable) značí dočasnou nedostupnost serveru.

→](/blog/stavovy-kod-http-503/) [#### Meta tagy pro SEO 2026

Které meta tagy ovlivňují SEO a které Google ignoruje? Přehled title, description, robots, canonical, OG tagů s příklady správného nastavení..

→](/blog/meta-tagy/)

[← Všechny články](/blog/clanky/)