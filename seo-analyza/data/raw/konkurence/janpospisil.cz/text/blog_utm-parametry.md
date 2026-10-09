# URL: https://www.janpospisil.cz/blog/utm-parametry/

[Domů](/) / [Blog](/blog/) / [Pojmy](/blog/pojmy/)

# UTM parametry: Kompletní průvodce UTM tracking v GA4

UTM parametry jsou štítky v URL pro sledování zdrojů návštěvnosti. Zjistěte, jak UTM tracking nastavit, pravidla pojmenování a čtení dat v GA4.

Jan Pospíšil

5. července 2026

3 min čtení

[Datová analytika](/blog/temata/datova-analytika/)[Analytika](/blog/temata/analytika/)

### Obsah

 

Souhrn článku

* Bez UTM parametrů se návštěvnost v GA4 zobrazí jako „direct“ a nelze rozlišit jednotlivé kampaně v rámci jednoho zdroje.
* Tři povinné parametry jsou utm\_source, utm\_medium a utm\_campaign — pojmenování musí být konzistentní a malými písmeny, jinak GA4 vytváří duplicitní záznamy.
* Pro Google Ads UTM nepotřebujete díky automatickému tagování (GCLID), ale pro e-mail, sociální sítě a affiliate jsou nezbytné.

**UTM parametry (Urchin Tracking Module)** jsou textové štítky přidávané na konec URL adresy, které umožňují **přesné sledování zdrojů návštěvnosti** v analytických nástrojích jako [Google Analytics](/blog/google-analytics/). Bez UTM parametrů nelze spolehlivě měřit, které kampaně a kanály přinášejí návštěvníky a konverze.

## Pět typů UTM parametrů

| Parametr | Povinný | Co sleduje | Příklad |
| --- | --- | --- | --- |
| **utm\_source** | Ano | Zdroj návštěvnosti | google, facebook, newsletter |
| **utm\_medium** | Ano | Typ média / kanálu | cpc, email, social, banner |
| **utm\_campaign** | Ano | Název kampaně | jarni-vyprodej-2026 |
| **utm\_term** | Ne | Klíčové slovo (PPC) | boty-damske |
| **utm\_content** | Ne | Varianta obsahu (A/B test) | modry-banner, textovy-odkaz |

Příklad kompletní URL s UTM parametry:
`https://example.cz/produkt?utm_source=facebook&utm_medium=cpc&utm_campaign=jarni-akce&utm_content=carousel-ad`

> UTM parametry neovlivňují funkčnost stránky ani SEO — slouží pouze pro analytiku. Google je ignoruje při indexaci. Ale ujistěte se, že váš web správně zpracovává URL s parametry a neukazuje duplicitní obsah.

## Pravidla pojmenování

Konzistentní pojmenování je klíčové pro přehledné reporty:

* **Malá písmena** — utm\_source=Facebook a utm\_source=facebook jsou v GA4 dva různé zdroje
* **Bez diakritiky** — předcházíte problémům s kódováním
* **Pomlčky místo mezer** — jarni-akce místo jarni akce
* **Jednotný formát** — dohodněte se na konvenci a dodržujte ji v celém týmu
* **Srozumitelné názvy** — za 6 měsíců musíte pochopit, co kampań sledovala

## Jak vytvořit URL s UTM tracking

Nejjednodušší způsob je použít **Google Campaign URL Builder** — webový nástroj, kde vyplníte parametry a vygenerujete hotovou URL. Pro větší objemy kampaní doporučujeme vytvořit tabulku s předem definovanými hodnotami a šablonou URL.

Pro zkrácení dlouhých URL s UTM parametry použijte služby jako Bit.ly nebo YOURLS (self-hosted varianta).

## Jak číst UTM parametry v GA4

V [GA4](/blog/ga4/) najdete UTM data v reportech:

* **Akvizice → Získávání návštěvnosti** — přehled zdrojů a médií
* **Akvizice → Kampaně** — výkon jednotlivých kampaní
* **Explorations** — vlastní reporty s filtrováním podle UTM parametrů

## Nejlepší praktiky

| Praxe | Doporučení | Příklad |
| --- | --- | --- |
| **Interní odkazy** | Nepoužívejte UTM | Zkreslí data o zdrojích |
| **E-mailové kampaně** | Vždy tagujte | utm\_medium=email |
| **Sociální sítě** | Rozlišujte placené a organické | utm\_medium=social vs cpc |
| **Affiliate** | Označte partnera | utm\_source=partner-xyz |
| **Offline kampaně** | Použijte zkrácenou URL s UTM | QR kód s trackingem |
| **Dokumentace** | Udržujte přehled UTM | Sdílená tabulka v týmu |

## Často kladené otázky

Musím používat UTM parametry pro Google Ads?

Ne nutně. Pokud máte propojený Google Ads s GA4, automatický tagging (GCLID) zajistí sledování bez UTM. UTM parametry jsou důležité pro kanály, které nemají automatickou integraci — e-mail, sociální sítě, affiliate, offline kampaně.


Ovlivňují UTM parametry SEO?

Ne, Google UTM parametry při indexaci ignoruje. Ale pokud se URL s UTM parametry šíří jako kanonická (například je sdílena jako odkaz), doporučujeme nastavit kanonický tag na URL bez parametrů, aby nedocházelo k duplicitám.


Co když zapomenu UTM parametry?

Návštěvnost se v GA4 zobrazí jako „direct" (přímá) nebo bude přiřazena podle automatických pravidel (referral z odkazujícího webu). Bez UTM parametrů nelze rozlišit jednotlivé kampaně v rámci jednoho zdroje.

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

[![Google Search Console – bezplatný nástroj od Googlu](/images/blog/google-search-console.svg)

### Přihlášení do Google Search Console: návod 2026 + tipy

Jak se přihlásit do Google Search Console, ověřit web a využít GSC pro sledování pozic, indexace a Core Web Vitals.

Přečíst →](/blog/google-search-console/)[![GDPR a marketing](/images/blog/gdpr-a-marketing.svg)

### GDPR a marketing: Praktický průvodce pro online marketéry

GDPR a marketing v praxi: consent management, cookie lišta, emailový marketing a Google Consent Mode v2.

Přečíst →](/blog/gdpr-a-marketing/)[![Automatizace marketingových procesů](/images/blog/automatizace-marketingovych-procesu.svg)

### Automatizace marketingových procesů: Průvodce marketing automatizací

Automatizace marketingu ušetří 12,5 hodiny týdně.

Přečíst →](/blog/automatizace-marketingovych-procesu/)

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

[← Všechny pojmy](/blog/pojmy/)