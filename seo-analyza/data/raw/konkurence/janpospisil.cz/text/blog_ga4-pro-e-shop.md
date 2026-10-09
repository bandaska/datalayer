# URL: https://www.janpospisil.cz/blog/ga4-pro-e-shop/

[Domů](/) / [Blog](/blog/) / [Články](/blog/clanky/)

# GA4 pro e-shop: Kompletní průvodce nastavením e-commerce trackingu

Nastavení GA4 pro e-shop krok za krokem. E-commerce události, konverzní cíle, datová vrstva v GTM a BigQuery export pro pokročilou analytiku.

Jan Pospíšil

15. června 2025

11 min čtení

[Datová analytika](/blog/temata/datova-analytika/)[Analytika](/blog/temata/analytika/)[E-commerce](/blog/temata/e-commerce/)

### Obsah

 

Souhrn článku

* Výchozí instalace GA4 pokrývá jen zlomek možností — pro e-shop je klíčové implementovat celou sadu e-commerce událostí od view\_item po purchase přes datovou vrstvu v GTM.
* Bez sledování celého nákupního trychtýře nedokážete identifikovat, kde zákazníky ztrácíte a kde se skrývá největší potenciál růstu tržeb.
* GA4 nabízí bezplatný export do BigQuery pro pokročilou analýzu zákaznické hodnoty.

**Google Analytics 4** je pro e-shopy mnohem víc než jen počítadlo návštěv. Správně nastavený GA4 tracking dokáže sledovat celou nákupní cestu zákazníka — od prvního zobrazení produktu přes přidání do košíku až po dokončený nákup. Problém je, že výchozí instalace pokrývá jen zlomek toho, co GA4 umí.

V tomto průvodci projdeme **krok za krokem** nastavení GA4 pro e-commerce, včetně pokročilého trackingu událostí, konverzních cílů a exportu dat do BigQuery. Vycházím z desítek implementací pro české e-shopy a soustředím se na to, co skutečně přináší hodnotu.

## Základní implementace GA4

Prvním krokem je vytvoření GA4 property a instalace měřicího kódu. Doporučuji vždy využít **Google Tag Manager (GTM)** místo přímého vložení kódu do šablony — získáte flexibilitu pro budoucí úpravy bez zásahu do kódu webu.

**Postup nastavení:**

1. Vytvořte novou GA4 property v Google Analytics
2. Nainstalujte GTM kontejner na web (pokud ještě nemáte)
3. V GTM vytvořte GA4 Configuration tag s Measurement ID
4. Nastavte trigger na All Pages
5. Ověřte funkčnost v GA4 Realtime reportu

Po základní instalaci GA4 automaticky měří **Enhanced Measurement** události — zobrazení stránky, scrollování, odchozí kliky, vyhledávání na webu a stahování souborů. Pro e-shop ale potřebujete výrazně víc.

## E-commerce události v GA4

GA4 definuje sadu **doporučených e-commerce událostí**, které je třeba implementovat pomocí datové vrstvy (dataLayer). Tyto události mapují celý nákupní proces zákazníka.

| Událost | Kdy se spouští | Klíčové parametry |
| --- | --- | --- |
| `view_item_list` | Zobrazení seznamu produktů (kategorie) | `item_list_name`, `items[]` |
| `view_item` | Zobrazení detailu produktu | `currency`, `value`, `items[]` |
| `add_to_cart` | Přidání produktu do košíku | `currency`, `value`, `items[]` |
| `remove_from_cart` | Odebrání produktu z košíku | `currency`, `value`, `items[]` |
| `view_cart` | Zobrazení košíku | `currency`, `value`, `items[]` |
| `begin_checkout` | Zahájení objednávky | `currency`, `value`, `items[]` |
| `add_shipping_info` | Vyplnění dopravy | `shipping_tier`, `items[]` |
| `add_payment_info` | Vyplnění platebních údajů | `payment_type`, `items[]` |
| `purchase` | Dokončení nákupu | `transaction_id`, `value`, `tax`, `shipping`, `items[]` |

Každá položka v poli `items[]` by měla obsahovat minimálně `item_id`, `item_name`, `price` a `quantity`. Pro pokročilou analýzu přidejte také `item_category`, `item_brand` a `item_variant`.

> „Nejčastější chybou e-shopů je implementace pouze události purchase. Bez sledování celého nákupního trychtýře ale nedokážete identifikovat, kde zákazníky ztrácíte — a právě tam se skrývá největší potenciál pro růst tržeb.”

## Konverzní události a cíle

V GA4 neexistují „cíle” ve smyslu Universal Analytics. Místo toho označujete libovolné události jako **klíčové události (Key Events)**. Pro e-shop doporučuji jako klíčové označit minimálně:

* **purchase** — dokončený nákup
* **add\_to\_cart** — přidání do košíku (mikrokonverze)
* **begin\_checkout** — zahájení checkoutu
* **generate\_lead** — odeslání kontaktního formuláře
* **sign\_up** — registrace zákazníka

Označení provedete v GA4 v sekci Admin > Events — u vybrané události kliknete na přepínač „Mark as key event”. Konverzní události se pak automaticky zobrazují v konverzních reportech a lze je importovat do Google Ads pro optimalizaci kampaní.

## Custom události a parametry

Kromě doporučených událostí můžete vytvářet **vlastní události** specifické pro váš e-shop. Typické příklady:

* **wishlist\_add** — přidání na seznam přání
* **product\_review\_submit** — odeslání recenze
* **coupon\_apply** — použití slevového kódu
* **size\_guide\_open** — otevření průvodce velikostmi
* **store\_locator\_use** — použití vyhledávače poboček

Pro vlastní parametry využijte **Custom Dimensions** v GA4 (Admin > Custom definitions). Můžete sledovat např. typ zákazníka (nový vs. vracející se), použitý slevový kód nebo kategorii objednaných produktů. GA4 povoluje až 50 custom dimensions pro textové a 50 pro číselné parametry.

## BigQuery export a pokročilá analýza

Jednou z největších výhod GA4 oproti Universal Analytics je **bezplatný export dat do BigQuery**. Pro e-shopy je to klíčové — získáte přístup k surovým datům na úrovni jednotlivých událostí a uživatelů.

**Co BigQuery export umožňuje:**

* Analýza nákupního chování na úrovni jednotlivých sessionů
* Vlastní atribuční modely
* Propojení s CRM nebo ERP daty
* Kohorty a analýza zákaznické hodnoty (CLV)
* Prediktivní segmentace

Export nastavíte v GA4 pod Admin > BigQuery Links. Data se exportují denně (s možností streaming exportu) do vámi zvoleného GCP projektu. Pro menší e-shopy s denní návštěvností do 50 000 se typicky vejdete do **bezplatného BigQuery tier** (1 TB dotazů měsíčně).

## Debugging s DebugView

Před ostrým nasazením je nezbytné **ověřit správnost implementace**. GA4 nabízí DebugView (Admin > DebugView), který v reálném čase zobrazuje události přicházející z vašeho zařízení.

**Postup ladění:**

1. Nainstalujte rozšíření Google Analytics Debugger do Chrome
2. Aktivujte debug mode v GTM (Preview mód)
3. Projděte celý nákupní proces na webu
4. V GA4 DebugView ověřte, že se všechny události spouštějí správně
5. Zkontrolujte parametry u každé události — zejména `value`, `currency` a `items[]`

Alternativně můžete debug mode aktivovat přidáním parametru `debug_mode: true` do konfigurace GA4 tagu v GTM.

## Nejčastější chyby implementace

Za léta praxe jsem identifikoval opakující se chyby, kterým se při implementaci vyvarujte:

1. **Chybějící currency parametr** — bez měny GA4 nezapočítá revenue
2. **Duplicitní purchase události** — spouštění na thank-you page bez kontroly, zda už nebyla odeslána
3. **Nesprávné item parametry** — záměna `item_id` a `item_name`, chybějící `price`
4. **Nezapočítání DPH a dopravy** — `value` by měla odpovídat částce, kterou zákazník zaplatil
5. **Chybějící Enhanced Conversions** — nenastavení rozšířených konverzí pro Google Ads snižuje přesnost měření
6. **Ignorování cross-domain trackingu** — pokud checkout běží na jiné doméně, je třeba nastavit cross-domain measurement

> „Kvalita dat je důležitější než jejich kvantita. Špatně nastavený tracking vede k chybným rozhodnutím — a ta stojí peníze.”

Více o práci s [Google Analytics](/blog/google-analytics/) najdete v našem základním průvodci. Pro měření organické návštěvnosti doporučuji také propojit data s [Google Search Console](/blog/google-search-console/). Pokud řešíte přesnost měření, přečtěte si průvodce [server-side trackingem](/blog/server-side-tracking/) a pro správnou interpretaci dat článek o [atribučních modelech](/blog/atribucni-modely/).

## Často kladené otázky

Mohu nastavit GA4 e-commerce tracking bez programátora?

Základní implementaci zvládnete pomocí Google Tag Manageru a předpřipravených šablon pro vaši e-commerce platformu (Shoptet, WooCommerce, Shopify). Pro pokročilý tracking s datovou vrstvou ale typicky potřebujete vývojáře, který dataLayer implementuje přímo v kódu e-shopu. Investice se vrátí v přesnosti naměřených dat.


Jak dlouho trvá, než GA4 začne zobrazovat e-commerce data?

Základní data (události, uživatelé) se v GA4 zobrazují v Realtime reportu okamžitě. Standardní reporty se aktualizují s 24–48hodinovým zpožděním. E-commerce přehledy jako Monetization report vyžadují minimálně několik dní sběru dat, aby byly statisticky relevantní. Pro spolehlivé závěry doporučuji počkat alespoň 2–4 týdny.


Je BigQuery export zdarma i pro velké e-shopy?

Export dat z GA4 do BigQuery je zdarma bez ohledu na objem. Platíte pouze za úložiště a dotazy v BigQuery. Pro e-shopy s denní návštěvností do 100 000 se roční náklady typicky pohybují kolem 500–2 000 Kč měsíčně. Větší e-shopy s milionovými návštěvami mohou platit řádově tisíce korun, ale přínos dat to výrazně převyšuje.


Jak GA4 funguje s cookieless trackingem?

GA4 je navržen s ohledem na budoucnost bez cookies třetích stran. Využívá Google Consent Mode pro respektování souhlasu uživatelů a modelování konverzí u uživatelů, kteří souhlas neudělili. Pro maximální přesnost doporučuji implementovat server-side tracking a Enhanced Conversions, které zvyšují míru přiřazení konverzí i bez cookies.

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

Přečíst →](/blog/gdpr-a-marketing/)[![E-commerce průvodce](/images/blog/e-commerce-pruvodce.svg)

### E-commerce: Průvodce online prodejem

Jak začít s e-commerce? Průvodce platformami, logistikou, platbami a marketingem pro online prodej v ČR..

Přečíst →](/blog/e-commerce-pruvodce/)

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