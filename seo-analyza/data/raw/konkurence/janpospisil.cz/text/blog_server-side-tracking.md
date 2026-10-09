# URL: https://www.janpospisil.cz/blog/server-side-tracking/

[Domů](/) / [Blog](/blog/) / [Články](/blog/clanky/)

# Server-side tracking: Průvodce cookieless budoucností měření

Server-side tracking a cookieless měření: GTM server-side, Consent Mode v2 a first-party data. Obnovte 85-95 % konverzních dat.

Jan Pospíšil

21. října 2025

9 min čtení

[Datová analytika](/blog/temata/datova-analytika/)[Analytika](/blog/temata/analytika/)[Technické SEO](/blog/temata/technicke-seo/)[Trendy](/blog/temata/trendy/)

### Obsah

 

Souhrn článku

* Bez server-side trackingu a Consent Mode vaše analytika zachytí jen 50–60 % skutečných konverzí, což vede k podhodnocení fungujících kanálů.
* Kombinace server-side GTM, Consent Mode v2 (Advanced) a Enhanced Conversions obnoví až 85–95 % konverzních dat.
* Vlastní subdoména pro tracking nastaví cookies jako first-party, čímž obchází omezení ITP na 7 dní.

Třetinové cookies mizí, prohlížeče blokují trackery a legislativa zpřísňuje pravidla. Pro marketéry to znamená jediné — **data, na kterých jsme stavěli rozhodnutí, přestávají být přesná**. Dodavatelé server-side řešení běžně uvádějí, že bez něj přijdete o 20 až 40 % konverzních dat. Berte to jako jejich odhad, ne jako nezávisle ověřené číslo. Vlastní ztrátu zjistíte jedině tak, že porovnáte data z prohlížeče proti serverovému logu. Server-side tracking a first-party data strategie jsou odpovědí na tuto výzvu.

V tomto průvodci projdeme, proč tradiční client-side tracking nestačí, jak nastavit **server-side Google Tag Manager**, implementovat Google Consent Mode v2 a vybudovat strategii first-party dat. Cílem je zachovat přesnost měření a zároveň respektovat soukromí uživatelů.

## Proč cookies třetích stran mizí

Cookies třetích stran umožňovaly sledovat uživatele napříč weby — základ remarketingu, atribuce a konverzního měření. Jejich konec přichází ze tří směrů:

* **Prohlížeče** — Safari (ITP) a Firefox blokují 3rd party cookies od roku 2020. Chrome omezuje od 2024.
* **Legislativa** — GDPR, ePrivacy a český zákon o elektronických komunikacích vyžadují informovaný souhlas
* **Uživatelé** — 40–60 % uživatelů odmítá cookies v consent bannerech

Důsledkem je, že **tradiční měření podhodnocuje skutečný výkon** — zejména u kanálů s delší konverzní cestou (SEO, e-mail, display). Server-side tracking tento problém řeší jiným přístupem ke sběru dat.

## Client-side vs. server-side tracking

| Aspekt | Client-side tracking | Server-side tracking |
| --- | --- | --- |
| Kde běží | V prohlížeči uživatele | Na vašem serveru |
| Blokace ad-blockery | Ano (30–40 % uživatelů) | Minimální |
| Vliv ITP/ETP | Cookies omezeny na 7 dní | First-party cookies bez omezení |
| Rychlost webu | Zpomaluje (více JS) | Rychlejší (méně JS v prohlížeči) |
| Kontrola nad daty | Omezená | Plná kontrola |
| Přesnost měření | Klesající | Stabilní |
| Náklady na provoz | Žádné | Hosting serveru (cca 500–2 000 Kč/měsíc) |
| Složitost implementace | Jednoduchá | Střední až vysoká |

> „Server-side tracking není luxus pro velké firmy — je to nutnost pro každého, kdo chce v roce 2026 měřit přesně. Náklady na provoz jsou zlomkem toho, co ztratíte na nepřesných datech.”

## Nastavení server-side GTM

**Server-side Google Tag Manager** funguje jako prostředník mezi prohlížečem uživatele a analytickými platformami. Data se nejprve posílají na váš server a teprve odtud do GA4, Google Ads nebo Meta.

**Kroky implementace:**

1. **Vytvoření server kontejneru v GTM** — v Google Tag Manager vytvořte nový kontejner typu Server
2. **Provisioning serveru** — nasaďte na Google Cloud Platform (App Engine) nebo alternativní hosting (Stape.io, Addingwell)
3. **Konfigurace vlastní domény** — nastavte subdoménu (např. data.vasedomena.cz) pro first-party kontext
4. **Nastavení GA4 klienta** — server kontejner přijímá requesty z webového GTM
5. **Migrace tagů** — přesuňte GA4, Google Ads a Meta tagy ze client-side do server kontejneru
6. **Testování a validace** — ověřte v GA4 DebugView a server-side GTM Preview

**Klíčový detail:** Díky vlastní subdoméně se cookies nastavují jako **first-party** a nejsou omezeny ITP na 7 dní. To výrazně zlepšuje rozpoznání vracejících se uživatelů.

## Google Consent Mode v2

Od března 2024 je **Google Consent Mode v2** povinný pro inzerenty v EU, kteří chtějí měřit konverze a používat remarketing v Google Ads. Consent Mode komunikuje souhlas uživatele s cookies do Google tagů a umožňuje modelování konverzí.

**Dva režimy implementace:**

* **Basic mode** — tagy se vůbec nespustí, pokud uživatel neudělí souhlas. Žádná data se nesbírají.
* **Advanced mode** — tagy se spustí vždy, ale bez souhlasu posílají pouze anonymizovaná data (bez cookies). Google pak modeluje chybějící konverze.

Pro maximální přesnost doporučuji **Advanced mode** v kombinaci se server-side trackingem. Typicky obnovíte 50–70 % konverzních dat od uživatelů, kteří souhlas neudělili.

**Povinné parametry Consent Mode v2:**

* `ad_storage` — souhlas s reklamními cookies
* `analytics_storage` — souhlas s analytickými cookies
* `ad_user_data` — souhlas se sdílením dat s inzerenty (nový v2)
* `ad_personalization` — souhlas s personalizací reklam (nový v2)

## First-party data strategie

Cookies třetích stran nahrazuje strategie založená na **first-party datech** — datech, která sbíráte přímo od svých zákazníků s jejich souhlasem.

**Zdroje first-party dat:**

* Registrace a zákaznické účty
* E-mailové odběry a preference
* Nákupní historie a chování na webu
* Věrnostní programy
* Průzkumy a dotazníky
* Interakce se zákaznickou podporou

**Jak first-party data využít:**

* **Enhanced Conversions** — hašované e-maily a telefonní čísla pro přesnější přiřazení konverzí v Google Ads
* **Customer Match** — cílení reklam na vlastní zákaznické seznamy
* **Segmentace** — personalizace webu, e-mailů a nabídek
* **Prediktivní analýza** — modelování CLV a pravděpodobnosti nákupu

> „First-party data nejsou jen náhradou za cookies — jsou hodnotnější. Zákazník, který vám dobrovolně sdělí své preference, je angažovanější než anonymní návštěvník sledovaný přes třetí strany.”

## Dopad na přesnost měření

Srovnání přesnosti měření podle konfigurace (orientační data z praxe):

* **Pouze client-side, bez Consent Mode:** zachytíte 50–60 % konverzí
* **Client-side + Consent Mode v2 (Advanced):** zachytíte 70–80 % konverzí
* **Server-side + Consent Mode v2 + Enhanced Conversions:** zachytíte 85–95 % konverzí

Rozdíl mezi 55 % a 90 % zachycených konverzí znamená, že bez server-side trackingu vaše data ukazují **téměř poloviční výkon**, než je realita. To vede k podhodnocení fungujících kanálů a špatné alokaci rozpočtu.

Více o nastavení analytiky v [Google Analytics](/blog/google-analytics/). Pro technické aspekty zabezpečení dat doporučuji článek o [HTTP vs HTTPS](/blog/http-vs-https/).

## Často kladené otázky

Kolik stojí provoz server-side GTM?

Náklady závisí na objemu trafficu. Pro weby s do 100 000 návštěvami měsíčně počítejte s 500–1 500 Kč/měsíc na Google Cloud Platform. Služby jako Stape.io nabízejí managed hosting od 10 EUR/měsíc. Pro větší weby s milionovými návštěvami se náklady pohybují kolem 3 000–8 000 Kč/měsíc. Ve srovnání s hodnotou zachráněných konverzních dat je to minimální investice.


Musím mít server-side tracking pro Google Ads remarketing v EU?

Ne nutně, ale bez něj přicházíte o značnou část dat. Povinný je Google Consent Mode v2 — bez něj nemůžete používat remarketing ani konverzní měření v Google Ads pro EU uživatele. Server-side tracking je nadstavba, která výrazně zlepšuje přesnost a obchází omezení prohlížečů. Doporučuji implementovat obojí.


Jak server-side tracking ovlivňuje rychlost webu?

Pozitivně. Přesunutím tagů na server odlehčíte prohlížeči uživatele — méně JavaScriptu znamená rychlejší načítání. V praxi vidíme zlepšení metriky Total Blocking Time o 100–300 ms a Largest Contentful Paint o 0,2–0,5 sekundy. To se pozitivně projeví i na Core Web Vitals a SEO výkonu.


Je server-side tracking v souladu s GDPR?

Server-side tracking sám o sobě GDPR neřeší — stále potřebujete informovaný souhlas pro analytické a reklamní cookies. Výhodou je ale plná kontrola nad daty: víte přesně, jaká data kam putují, můžete je filtrovat, anonymizovat nebo mazat. V kombinaci s Consent Mode zajistíte, že se data sbírají pouze v souladu se souhlasem uživatele.

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

Přečíst →](/blog/google-search-console/)[![Marketing Miner – Miner pro hromadné zpracování URL a klíčových slov](/images/blog/marketing-miner-hromadne-zpracovani.svg)

### Marketing Miner: Hromadné zpracování URL a klíčových slov v Mineru (2026)

Jak v Marketing Mineru hromadně zpracovat tisíce URL a klíčových slov najednou.

Přečíst →](/blog/marketing-miner-hromadne-zpracovani/)[![GDPR a marketing](/images/blog/gdpr-a-marketing.svg)

### GDPR a marketing: Praktický průvodce pro online marketéry

GDPR a marketing v praxi: consent management, cookie lišta, emailový marketing a Google Consent Mode v2.

Přečíst →](/blog/gdpr-a-marketing/)

## Související pojmy

[#### HTTP 503

HTTP 503 (Service Unavailable) značí dočasnou nedostupnost serveru.

→](/blog/stavovy-kod-http-503/) [#### UTM parametry

UTM parametry jsou štítky v URL pro sledování zdrojů návštěvnosti.

→](/blog/utm-parametry/) [#### Meta tagy pro SEO 2026

Které meta tagy ovlivňují SEO a které Google ignoruje? Přehled title, description, robots, canonical, OG tagů s příklady správného nastavení..

→](/blog/meta-tagy/) [#### Statický web

Statický web je předgenerovaný HTML soubor bez databáze.

→](/blog/staticky-web/)

[← Všechny články](/blog/clanky/)