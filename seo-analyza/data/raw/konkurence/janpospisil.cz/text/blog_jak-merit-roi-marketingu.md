# URL: https://www.janpospisil.cz/blog/jak-merit-roi-marketingu/

[Domů](/) / [Blog](/blog/) / [Články](/blog/clanky/)

# Jak měřit ROI marketingu: Návratnost investic podle kanálů

Jak měřit ROI online marketingu: výpočet podle kanálu, CAC vs. LTV a praktické příklady. Zdravý poměr LTV:CAC je 3:1.

Jan Pospíšil

30. října 2025

8 min čtení

[Datová analytika](/blog/temata/datova-analytika/)[Analytika](/blog/temata/analytika/)[Marketingová strategie](/blog/temata/marketingova-strategie/)

### Obsah

 

Souhrn článku

* Nejčastější chybou při výpočtu ROI je zahrnutí pouze mediálního rozpočtu — bez mezd, agenturních poplatků a nástrojů je výsledek výrazně nadhodnocený.
* Zdravý poměr LTV:CAC je 3:1; při poměru 1:1 vše, co vyděláte, investujete zpět do akvizice.
* Data-driven atribuce v GA4 rozdělí zásluhu za konverzi spravedlivěji než modely last-click nebo first-click.

**ROI (Return on Investment)** online marketingu říká, kolik korun vyděláte na každou korunu investovanou do marketingu. Přestože jde o jednu z nejdůležitějších metrik, mnoho firem ji měří nesprávně nebo vůbec. Správné měření ROI vám umožní přesouvat rozpočet k nejefektivnějším kanálům.

## Základní výpočet ROI

Formule je jednoduchá:

**ROI = (Výnosy z marketingu - Náklady na marketing) / Náklady na marketing × 100 %**

Příklad: Investujete 50 000 Kč do PPC kampaně, která vygeneruje tržby 200 000 Kč.
ROI = (200 000 - 50 000) / 50 000 × 100 = **300 %**

Důležité je zahrnout **všechny náklady**:

| Typ nákladu | Co zahrnout | Často opomíjené |
| --- | --- | --- |
| Mediální rozpočet | Výdaje na reklamu (PPC, social ads) | — |
| Lidské zdroje | Čas interního týmu (hodiny × sazba) | Mzdy, odvody |
| Agenturní poplatky | Měsíční fee, provize | Setup fee |
| Nástroje | SEO nástroje, analytika, CRM | Roční předplatné |
| Tvorba obsahu | Copywriting, grafika, video | Interní produkce |
| Technologie | Hosting, landing page buildery | Upgrade, migrace |

> **Nejčastější chyba:** Firmy počítají ROI pouze z mediálního rozpočtu a ignorují čas zaměstnanců, agenturní poplatky a náklady na nástroje. Skutečný ROI je pak výrazně nižší, než se zdá.

## ROI podle marketingového kanálu

Každý kanál má specifický způsob měření a typický benchmark ROI.

**SEO:**

* Náklady: agentura/konzultant + tvorba obsahu + nástroje
* Výnosy: organický traffic × konverzní poměr × průměrná hodnota objednávky
* Benchmark: ROI 500–1 300 % (po 12+ měsících)
* Specifika: vysoké počáteční náklady, rostoucí výnosy v čase

Více o investicích do SEO najdete v článku [Kolik investovat do SEO](/blog/kolik-investovat-do-seo/).

**PPC (Google Ads):**

* Náklady: mediální rozpočet + správa kampaní
* Výnosy: konverze × hodnota konverze
* Benchmark: ROAS 300–800 % (závisí na odvětví)
* Specifika: okamžité výsledky, lineární náklady

**E-mail marketing:**

* Náklady: platforma + tvorba obsahu + správa
* Výnosy: tržby z e-mailových kampaní (GA4 atribuce)
* Benchmark: ROI 3 600 % (průměr odvětví)
* Specifika: nejnižší CAC ze všech kanálů

**Content marketing:**

* Náklady: tvorba obsahu + distribuce + SEO
* Výnosy: organický traffic + leady z obsahu
* Benchmark: ROI 300–600 % (po 6+ měsících)
* Specifika: kumulativní efekt, obtížnější atribuce

## CAC vs. LTV

**CAC (Customer Acquisition Cost)** je celkový náklad na získání jednoho zákazníka. **LTV (Lifetime Value)** je celková hodnota, kterou zákazník přinese za celou dobu vztahu.

Zdravý poměr: **LTV:CAC = 3:1 nebo více**

* LTV:CAC 1:1 = neudržitelné (vše, co vyděláte, investujete do akvizice)
* LTV:CAC 3:1 = zdravý byznys
* LTV:CAC 5:1+ = prostor pro agresivnější akvizici

**Výpočet CAC:** Celkové marketingové náklady / Počet nových zákazníků

**Výpočet LTV:** Průměrná hodnota objednávky × Počet objednávek za rok × Průměrná délka vztahu (v letech)

Příklad: E-shop s průměrnou objednávkou 1 200 Kč, 3 objednávkami ročně a průměrnou délkou vztahu 2 roky má LTV = 1 200 × 3 × 2 = **7 200 Kč**. Pokud je CAC 2 400 Kč, poměr LTV:CAC = 3:1.

## Atribuční výzvy

**Atribuce** – přiřazení konverze správnému kanálu – je největší výzvou v měření ROI.

Zákazník typicky projde několika touchpointy:

1. Přečte článek z organického vyhledávání (SEO)
2. Vrátí se přes remarketing na Facebooku (Social Ads)
3. Objedná po kliknutí na e-mailovou kampaň (Email)

Komu přiřadíte konverzi?

* **Last-click atribuce** – celou zásluhu dostane e-mail (nespravedlivé k SEO)
* **First-click atribuce** – celou zásluhu dostane SEO (ignoruje remarketing)
* **Data-driven atribuce** – Google Analytics 4 rozdělí zásluhu algoritmicky

Používejte **data-driven atribuci** v [Google Analytics 4](/blog/google-analytics/) a sledujte i asistované konverze – kanály, které pomáhají konverzi, i když ji přímo nedokončí.

## Praktické příklady měření

**E-shop s módou:**

* Měsíční náklady: PPC 30 000 Kč + SEO 15 000 Kč + e-mail 5 000 Kč = 50 000 Kč
* Tržby z online marketingu: 350 000 Kč
* ROI = (350 000 - 50 000) / 50 000 × 100 = **600 %**

**B2B softwarová firma:**

* Měsíční náklady: Content marketing 25 000 Kč + LinkedIn Ads 20 000 Kč = 45 000 Kč
* Nové leady: 15, konverze na klienta: 3, průměrná hodnota kontraktu: 80 000 Kč
* Tržby: 240 000 Kč
* ROI = (240 000 - 45 000) / 45 000 × 100 = **433 %**

## Reporting pro stakeholdery

Efektivní ROI reporting by měl obsahovat:

1. **Celkový ROI** – souhrnné číslo za všechny kanály
2. **ROI podle kanálu** – kde investovat více, kde méně
3. **Trend** – jak se ROI vyvíjí v čase (měsíc po měsíci)
4. **CAC a LTV** – efektivita akvizice a hodnota zákazníka
5. **Doporučení** – konkrétní akce na základě dat

Reportujte měsíčně, trendy vyhodnocujte kvartálně. Nedělejte závěry z jednoho měsíce – sezonní výkyvy mohou zkreslit obraz.

## Často kladené otázky

Jaký je dobrý ROI online marketingu?

Závisí na odvětví a kanálu. Obecný benchmark: ROI nad 500 % je výborný, 200–500 % je dobrý, 100–200 % je akceptabilní. Pro SEO po 12+ měsících je realistický ROI 500–1 300 %. Pro PPC se ROAS 300–800 % považuje za zdravý. Důležitější než absolutní číslo je trend a srovnání mezi kanály.


Jak měřit ROI brand awareness kampaní?

Brand awareness se měří obtížněji, protože efekt není okamžitý. Používejte proxy metriky: nárůst branded search volume, direct traffic, brand mentions a Net Promoter Score. Dlouhodobě se brand awareness projeví ve snížení CAC a zvýšení konverzního poměru ze všech kanálů.


Kolik dat potřebuji pro spolehlivé měření ROI?

Minimálně 3 měsíce dat pro většinu kanálů. Pro SEO ideálně 6–12 měsíců (kvůli pomalejšímu náběhu). Potřebujete také dostatečný objem konverzí – při 5 konverzích měsíčně je statistická významnost nízká. Pro e-shopy s desítkami denních objednávek jsou i týdenní data relevantní.


Mám počítat ROI z obratu, nebo zisku?

Ideálně z hrubého zisku (tržby mínus přímé náklady na zboží/službu). ROI z obratu nadhodnocuje skutečnou návratnost, protože nezohledňuje náklady na zboží, dopravu nebo provoz. Pokud znáte průměrnou marži (např. 40 %), přepočítejte tržby na hrubý zisk a z něj počítejte ROI.

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

Přečíst →](/blog/google-search-console/)[![Jak vytvořit obsahovou strategii](/images/blog/jak-vytvorit-obsahovou-strategii.svg)

### Jak vytvořit obsahovou strategii: Od person po editorial plán

Jak vytvořit obsahovou strategii krok za krokem.

Přečíst →](/blog/jak-vytvorit-obsahovou-strategii/)[![GDPR a marketing](/images/blog/gdpr-a-marketing.svg)

### GDPR a marketing: Praktický průvodce pro online marketéry

GDPR a marketing v praxi: consent management, cookie lišta, emailový marketing a Google Consent Mode v2.

Přečíst →](/blog/gdpr-a-marketing/)

## Související pojmy

[#### UTM parametry

UTM parametry jsou štítky v URL pro sledování zdrojů návštěvnosti.

→](/blog/utm-parametry/) [#### Guerilla marketing

Co je guerilla marketing? Nejlepší příklady guerilla kampaní ze světa i z Česka, typy, náklady od 5 000 Kč a právní rizika, na která si dát pozor..

→](/blog/guerilla-marketing/) [#### Co je CRM

CRM systém centralizuje data o zákaznících a zefektivňuje prodej i marketing.

→](/blog/crm/) [#### Direct marketing

Co je direct marketing? Přehled kanálů přímého marketingu -- e-mail, SMS, direct mail.

→](/blog/direct-marketing/)

[← Všechny články](/blog/clanky/)