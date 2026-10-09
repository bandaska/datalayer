# URL: https://www.janpospisil.cz/blog/schema-markup/

[Domů](/) / [Blog](/blog/) / [Články](/blog/clanky/)

# Schema markup a strukturovaná data: Průvodce JSON-LD implementací

Schema markup a strukturovaná data (Schema.org) v JSON-LD formátu. Jak implementovat a získat rich results. CTR vyšší o 30 %.

Jan Pospíšil

19. března 2026

10 min čtení

[SEO a GEO](/blog/temata/seo-a-geo/)[Technické SEO](/blog/temata/technicke-seo/)[SEO](/blog/temata/seo/)

### Obsah

 

Souhrn článku

* Stránky se strukturovanými daty dosahují v průměru o 30 % vyšší míry prokliků ve výsledcích vyhledávání.
* Google jednoznačně doporučuje formát JSON-LD, který je oddělený od HTML a snadno spravovatelný.
* Strukturovaná data musí vždy odpovídat viditelnému obsahu stránky, jinak hrozí manuální penalizace.

**Schema markup** je strukturovaný kód, který přidáváte na web, aby vyhledávače lépe porozuměly vašemu obsahu. Díky správně implementovaným strukturovaným datům můžete ve výsledcích vyhledávání získat **rich results** — rozšířené výsledky s hodnocením, cenou, FAQ nebo navigační cestou.

## Co je Schema.org a proč na něm záleží

**Schema.org** je společný slovník strukturovaných dat vytvořený spoluprací Googlu, Microsoftu, Yahoo a Yandexu. Definuje stovky typů entit (Person, Product, Article…) a jejich vlastností, které vyhledávače rozpoznávají.

> „Stránky se strukturovanými daty dosahují v průměru o 30 % vyšší míry prokliků (CTR) ve výsledcích vyhledávání.” — Search Engine Journal, 2024

Strukturovaná data nepřímo ovlivňují [SEO](/blog/co-je-seo/) dvěma způsoby:

* **Lepší zobrazení v SERP** — rich results přitahují pozornost a zvyšují CTR
* **Přesnější porozumění obsahu** — Google lépe chápe kontext a relevanci stránky

## Formáty strukturovaných dat: JSON-LD, Microdata a RDFa

Existují tři formáty pro implementaci strukturovaných dat. Google jednoznačně doporučuje **JSON-LD**.

| Formát | Implementace | Doporučení Googlem | Výhody |
| --- | --- | --- | --- |
| **JSON-LD** | `<script>` tag v `<head>` nebo `<body>` | Doporučený | Oddělený od HTML, snadno spravovatelný |
| **Microdata** | HTML atributy (`itemscope`, `itemprop`) | Podporovaný | Přímo v HTML, historicky rozšířený |
| **RDFa** | HTML atributy (`vocab`, `typeof`, `property`) | Podporovaný | Flexibilní, ale komplexnější |

**JSON-LD** je preferovaný formát, protože:

* Neovlivňuje HTML strukturu stránky
* Snadno se generuje dynamicky na serveru
* Je čitelný i pro vývojáře bez hlubší znalosti Schema.org
* Google jej explicitně doporučuje v dokumentaci

## Nejčastější typy Schema markup

### Organization a LocalBusiness

Základní identifikace vaší firmy. **Organization** pro firmy obecně, **LocalBusiness** pro podniky s fyzickou provozovnou. Umožňuje zobrazení v Knowledge Panelu.

```
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Název firmy",
  "url": "https://www.example.cz",
  "logo": "https://www.example.cz/logo.png",
  "sameAs": [
    "https://www.facebook.com/example",
    "https://www.linkedin.com/company/example"
  ]
}
```

### Article a BlogPosting

Pro články a blogové příspěvky. Pomáhá Googlu správně indexovat obsah, zobrazit datum publikace a autora.

### Product a Review

Klíčové pro **e-shopy**. Umožňují zobrazení ceny, dostupnosti, hodnocení hvězdičkami přímo ve výsledcích vyhledávání.

### FAQ a HowTo

**Oba typy už Google jako rozšířený výsledek nezobrazuje.** FAQPage kdysi vykresloval rozbalovací otázky přímo v SERP a HowTo kroky návodu s obrázky. Google je postupně omezil a dnes ani jeden nefiguruje v [galerii podporovaných typů](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) (ověřeno 4.9.2026).

Znamená to, že plochu v SERP jimi nezvětšíte. Značkování samo o sobě neškodí, protože nepoužitá strukturovaná data Googlu nevadí, ale nedává smysl do něj investovat kvůli rozšířenému výsledku. Otázky a odpovědi na stránce pište kvůli čtenáři, ne kvůli snippetu.

### BreadcrumbList

Navigační cesta (drobečková navigace). Nahrazuje URL v SERP čitelnou cestou, což zlepšuje orientaci uživatelů.

## Typy Schema a jejich SERP funkce

| Typ Schema | SERP funkce | Vhodné pro |
| --- | --- | --- |
| **Product** | Cena, dostupnost, hodnocení | E-shopy, produktové stránky |
| **FAQPage** | ~~Rozbalovací otázky v SERP~~ Google už nezobrazuje | Bez efektu na vzhled výsledku |
| **HowTo** | ~~Kroky s obrázky~~ Google už nezobrazuje | Bez efektu na vzhled výsledku |
| **Article** | Datum, autor, obrázek | Blog, zpravodajství |
| **BreadcrumbList** | Navigační cesta místo URL | Všechny stránky s hierarchií |
| **LocalBusiness** | Knowledge Panel, mapa | Lokální podnikání |
| **Review / AggregateRating** | Hvězdičky v SERP | Recenze, hodnocení |
| **Event** | Datum, místo, cena vstupenky | Akce, konference |
| **Recipe** | Čas přípravy, kalorie, hodnocení | Recepty |
| **VideoObject** | Video náhled v SERP | Video obsah |

## Jak implementovat Schema.org v JSON-LD formátu

### Krok 1: Identifikujte vhodné typy

Projděte si stránky vašeho webu a určete, které typy Schema jsou relevantní. Každá stránka by měla mít minimálně:

* **Organization** nebo **LocalBusiness** (na homepage)
* **BreadcrumbList** (na všech podstránkách)
* **Specifický typ** podle obsahu (Article, Product, FAQ…)

### Krok 2: Vytvořte JSON-LD kód

Použijte [Schema.org dokumentaci](https://schema.org) jako referenci. Vyplňte všechny **povinné vlastnosti** a co nejvíce doporučených vlastností.

### Krok 3: Vložte na stránku

JSON-LD kód vložte jako `<script type="application/ld+json">` do `<head>` nebo na konec `<body>`. Na jedné stránce můžete mít **více JSON-LD bloků** nebo je spojit do pole.

### Krok 4: Otestujte

Před nasazením vždy otestujte — viz následující sekce.

### Krok 5: Monitorujte v Search Console

Po nasazení sledujte v [Google Search Console](/blog/google-search-console/) sekci **Vylepšení** (Enhancements), kde Google reportuje nalezené strukturované typy a případné chyby.

## Testovací nástroje

* **Rich Results Test** (search.google.com/test/rich-results) — nejdůležitější nástroj, ukazuje, zda stránka získá rich results
* **Schema Markup Validator** (validator.schema.org) — validuje syntaxi proti Schema.org specifikaci
* **[Google Search Console](/blog/google-search-console/)** — sekce Vylepšení zobrazuje chyby a varování u nasazených strukturovaných dat
* **Structured Data Testing Tool** (starší, ale stále funkční alternativa)

Doporučujeme testovat v **Rich Results Test** pro ověření zobrazení v Googlu a ve **Schema Markup Validator** pro kontrolu správnosti kódu.

## Časté chyby při implementaci

1. **Neviditelný obsah** — strukturovaná data popisují obsah, který na stránce není viditelný pro uživatele. Google to považuje za spam.
2. **Chybějící povinné vlastnosti** — každý typ Schema má povinné atributy. Bez nich Google markup ignoruje.
3. **Nesprávný typ** — použití Product Schema pro stránku, která není produktová, nebo Review pro vlastní produkt.
4. **Zastaralá data** — ceny, dostupnost nebo hodnocení neodpovídají aktuálnímu stavu na stránce.
5. **Duplikované entity** — více JSON-LD bloků definujících stejnou entitu s odlišnými daty.
6. **Ignorování varování** — varování v Rich Results Test nejsou chyby, ale jejich oprava zvyšuje šanci na rich results.

## Dopad na výsledky vyhledávání

Strukturovaná data negarantují zobrazení rich results — Google se rozhoduje sám na základě kvality dat, relevance a dalších faktorů. Nicméně bez správného Schema markup **nemáte šanci** rich results získat.

Klíčové benefity správné implementace:

* **Vyšší CTR** — rich results zabírají více prostoru v SERP a přitahují pozornost
* **Lepší porozumění obsahu** — Google přesněji chápe, o čem stránka je
* **Knowledge Panel** — firemní profil přímo ve vyhledávání
* **Voice Search** — strukturovaná data pomáhají hlasovým asistentům najít správné odpovědi

## Často kladené otázky

Zlepší Schema markup přímo mé pozice ve vyhledávání?

Strukturovaná data nejsou přímým rankingovým faktorem. Google ale opakovaně potvrdil, že mu pomáhají **lépe porozumět obsahu stránky**, což nepřímo ovlivňuje relevanci. Hlavní přínos spočívá ve **vyšším CTR** díky rich results — a vyšší CTR může pozitivně ovlivnit pozice.


Kolik typů Schema můžu mít na jedné stránce?

Na jedné stránce můžete mít **neomezený počet** typů Schema, pokud odpovídají obsahu stránky. Typicky kombinujete BreadcrumbList s Article nebo Product. Důležité je, aby každý markup popisoval obsah, který je na stránce skutečně viditelný.


Musím Schema markup aktualizovat při změně obsahu?

Ano. Strukturovaná data musí vždy odpovídat aktuálnímu obsahu stránky. U e-shopů to znamená synchronizaci cen a dostupnosti. U článků aktualizaci data úpravy (`dateModified`). Nekonzistence mezi Schema a viditelným obsahem může vést k **manuální penalizaci** ze strany Googlu.


Je lepší implementovat Schema ručně, nebo použít plugin?

Záleží na platformě a rozsahu webu. Pro **WordPress** existují kvalitní pluginy (Yoast SEO, Rank Math), které automaticky generují základní Schema. Pro **vlastní weby** nebo pokročilé implementace (Product, FAQ, HowTo) je ruční nebo programatická implementace přesnější a flexibilnější. Vždy ale výsledek ověřte v Rich Results Test.

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