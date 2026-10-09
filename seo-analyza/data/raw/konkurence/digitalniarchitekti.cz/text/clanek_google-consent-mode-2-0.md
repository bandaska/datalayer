# URL: https://digitalniarchitekti.cz/clanek/google-consent-mode-2-0/

![](/wp-content/uploads/2024/01/google-consent-mode-2.0-1024x538.webp)

# Google Consent Mode 2.0 od července 2025

[Od Architektů](/tema/od-architektu/) / Napsal [Tomáš Ondříšek](/clanek/author/tomaso/)

Pokud používáte Google Ads nebo Google Analytics a máte zákazníky z Evropy, je pro vás následující informace naprosto zásadní. **Od 21. července 2025 začínají firmy hlásit výrazné problémy s měřením konverzí.** Bez správně nastaveného Google Consent Mode v2 přicházíte o přesná data-konverze, která potřebujete pro vyhodnocení úspěšnosti vašich kampaní. **Pojďme se podívat, jaké změny přišly a jak se s nimi vypořádat.**

[Potřebujete poradit s nastavením Google Consent Mode v2?Kontaktujte nás.](/kontakt/)

## Shrnutí pro ty, kteří nemají čas číst celý článek

* **Google Consent Mode v2 je povinný od března 2024** pro všechny, kdo cílí na uživatele z EU a UK.
* **Od 21. července 2025 se začínají objevovat výpadky v měření konverzí** u těch, kdo ho nemají implementovaný.
* **Bez správného nastavení Google blokuje vaše konverze** (prodeje, odeslání formulářů, atd.) a má negativní vliv na Remarketing.
* **Existují dvě varianty implementace,** základní a pokročilá (pokročilá zachovává více dat).
* **Implementace je možná přes gtag.js nebo Google Tag Manager** (GTM je jednodušší na správu).

## Co je Google Consent Mode v2?

Vaše webové stránky potřebují komunikovat s Googlem o tom, co jim uživatel dovolil a co nedovolil sledovat. Consent Mode v2 je komunikační můstek. **Když uživatel klikne na cookies lištu a něco povolí nebo zakáže, tento nástroj to přeloží do řeči, které Google rozumí.**

### Jak to funguje v praxi?

Když někdo přijde na váš web, vyskočí na něj cookie lišta s dotazem na souhlas. Podle toho, co uživatel odsouhlasí, Consent Mode v2 pošle Googlu informaci ve formě čtyř parametrů:

* **analytics\_storage** – povolení ukládat cookies pro analytiku.
* **ad\_storage** – povolení ukládat cookies pro reklamu.
* **ad\_user\_data** – souhlas s odesíláním uživatelských dat (např. email, který vyplníte při nákupu)
* **ad\_personalization** – souhlas s používáním dat pro personalizované reklamy.

### Jaký je rozdíl mezi cookies lištou a Consent Mode?

**Cookies lišta** je to, co vidí uživatel – okno s tlačítky „Přijmout vše” nebo „Odmítnout”. Je to vizuální prvek na vašem webu.

Consent Mode v2 je technické řešení na pozadí, které zajistí, aby se rozhodnutí uživatele při odesílání dat do Google Analytics a Google Ads skutečně dodržovalo. **Komunikuje uživatelův souhlas či nesouhlas se značkami Google a SDK (pro mobilní aplikace). Na Consent mode v2 se mohou navázat značky dalších systémů, jako např. Facebook Ads, TikTok, atd.**

## Kritická změna od 21. července 2025

**Nejzávažnější novinkou je, že od 21. července 2025 začínají inzerenti hlásit výrazné výpadky v měření konverzí.** Co to znamená v praxi?

* **Nevidíte skutečný počet objednávek**, které přinesly vaše Google Ads kampaně.
* **Nezaznamenávají se některé konverze.** Nejde o úplný výpadek, ale o výrazné mezery v datech.
* **Chybí data o důležitých akcích** na vašem webu.

Google nevydal oficiální prohlášení o „vypnutí” měření konverzí k tomuto datu, ale vypozorované chování jasně ukazuje omezení sběru dat.

### Proč je to pro vaše podnikání naprosto zásadní informace?

Špatně nastavené Consent Mode v2 má přímý dopad na vaši schopnost řídit a optimalizovat reklamní kampaně. Následující problémy se projevují okamžitě a jejich dopady se časem zhoršují.

* **Slepé řízení kampaní** – Bez přesného měření konverzí jedete naslepo. Nemůžete vědět, které kampaně, klíčová slova nebo kreativy fungují a přinášejí skutečné výsledky.
* **Špatná optimalizace** – Algoritmy Google Ads potřebují kvalitní data o konverzích k efektivní optimalizaci nabídek a doručování reklam. Pokud tato data chybí, vaše kampaně budou méně efektivní a pravděpodobně uvidíte výrazný pokles výkonu.
* **Omezení konverzního modelování** – Consent Mode v2 (zejména v pokročilé variantě) umožňuje Googlu používat tzv. konverzní modelování. To znamená, že i když uživatel neudělí plný souhlas s cookies, Google může na základě agregovaných a anonymizovaných dat odhadovat chybějící konverze. Bez správné implementace Consent Mode v2 se tato cenná funkce omezuje, nebo úplně vypíná.
* **Riziko pokuty od ÚOOÚ** – Český Úřad pro ochranu osobních údajů aktivně prošetřuje dodržování pravidel pro cookies a získávání souhlasů. Pokud nemáte správně nastavenou cookie lištu nebo získáváte souhlasy nevhodným způsobem, hrozí vám pokuta až do výše 20 milionů eur nebo až 4 % celkového ročního obratu celosvětově za předchozí rozpočtový rok – podle toho, co je vyšší. ÚOOÚ v současnosti eviduje přes 80 stížností na používání principu „souhlas, nebo zaplať“ a aktivně vede řízení s několika subjekty v Čr.

## Vývoj od verze 1.0 k verzi 2.0

Consent Mode není nová věc, existuje už několik let a postupně se vyvíjí. Původní verze byla jednodušší a řešila základní otázky ohledně cookies. Současná verze 2.0 je mnohem komplexnější a reaguje na zpřísňující se evropskou legislativu.

### Původní Consent Mode 1.0

První verze pracovala pouze se dvěma parametry: **ad\_storage** a **analytics\_storage**. Řešila základní otázku: Může Google ukládat cookies, nebo ne?

**Stavový kód se přenášel pomocí parametru gsc**, který nabýval různých hodnot podle toho, co uživatel povolil.

### Nová verze 2.0

Od března 2024 přibyly dva nové parametry, které dávají uživatelům větší kontrolu, a to již zmiňované **ad\_user\_data** a **ad\_personalization.**

**Stavový kód v GCM 2.0 se přenáší pomocí parametru gcd** s komplexnějším kódováním všech čtyř parametrů.

**Proč tahle změna?** Google se snaží vyhovět přísnějším evropským zákonům o ochraně osobních údajů, konkrétně zákonu o digitálním marketingu v rámci evropského hospodářského prostoru.

## Dvě varianty implementace (základní a pokročilá)

**Consent Mode v2 můžete implementovat dvěma způsoby.** Každá varianta má své výhody a nevýhody, které ovlivní množství dat, která budete mít k dispozici pro optimalizaci kampaní. Výběr správné varianty závisí na vašich prioritách. Zda upřednostňujete maximální ochranu soukromí, nebo potřebujete co nejvíce dat pro efektivní marketing.

### Základní (anglicky Basic)

Pokud uživatel neudělil souhlas, jsou všechny Tagy Google **zablokovány** a na servery Google se neodesílají **žádná data**. Po interakci uživatele s Cookies lištou (CMP) se souhlasy upraví a v případě **souhlasu** je povoleno odeslání dat pomocí Tagů Google.

Do serverů Google v případě nesouhlasu nebo bez udělení souhlasu neodchází v tomto modů **žádné anonymizované (cookieless) pingy s daty**.

V tomto módu se odesílá do reklamních systémů **méně dat** než u pokročilé varianty. **Modelování konverzí** je proto **méně přesné.** Je založeno pouze na datech od uživatelů, kteří skutečně k odeslání udělili souhlas.

### Pokročilá (Advanced)

Pokročilá metoda umožňuje spustit měřicí kódy (tagy) ještě předtím, než uživatel vůbec stihne reagovat na [**oznámení o cookies.**](/cookies-od-roku-2022/) Systém si však pohlídá, co přesně se může odesílat. Pokud uživatel ještě neodsouhlasil ukládání cookies, žádné se neuloží ani neodešlou. Zároveň se automaticky vypne personalizace reklam, dokud k tomu nedá svolení, a **odesílají se pouze základní, anonymní údaje**.

Když uživatel cookies odmítl, Google stále sbírá anonymizované údaje (takzvané **pingy**) obsahující:

* Zemi, odkud uživatel pochází (z IP adresy)
* Čas návštěvy (timestamp)
* Typ prohlížeče a zařízení (z user-agent)
* Adresu navštívené stránky a její referrer
* Náhodné číslo místo identifikátoru uživatele
* Informaci o produktu CMP (Consent Management Platform)
* Informaci o stavu consentu

Google Analytics a Floodlight tagy automaticky odesílají prostřednictvím pingů informace o aktuálním i změněném stavu consentu.

Interakce uživatele s cookies lištou pak způsobí update consentů a na základě nich se spustí Tagy (značky) Google, které přísluší kategoriím, kterým uživatel udělil svůj souhlas.

Google upřednostňuje certifikované poskytovatele cookie lišty – CMP (Consent Management Platform), jejichž seznam najdete **[zde,](https://cmppartnerprogram.withgoogle.com/?hl=en#partners)** zejména pro účastníky programu AdSense. Uživatelé Google Ads mohou mít cookie lištu ve vlastní režii, ale stále musí implementovat Consent mode v2.

## Metody implementace

Google Consent Mode v2 můžete implementovat dvěma základními způsoby.

### Gtag.js: Implementace kódem

**Tato metoda vyžaduje přímé zásahy do kódu webu,** což znamená úzkou spolupráci s webmasterem nebo vývojářem. Všechny měřicí značky (Google Analytics, Google Ads, remarketing atd.) musí být v kódu upraveny tak, aby správně reagovaly na stav souhlasu uživatele. Jde o náročnější postup, protože každá změna vyžaduje úpravu kódu na všech stránkách webu nebo v celé aplikaci.

### Úprava consentů v rámci platformy Google Tag Manager

Proč upravit consenty v [**Google Tag Manager**](/clanek/google-tag-manager/)**?** Nemusíte nic přepisovat v kódu na každé stránce. Veškeré změny provedete jednoduše v rozhraní GTM kontejneru, nebo v nastavení vaší cookie lišty (CMP). Když bude potřeba něco upravit, změníte to na jednom místě a promítne se to na celý web. Odpadá tak nutnost žádat programátory o úpravy kódu při každé změně.

### Jak funguje nastavení souhlasů

Bez ohledu na zvolenou metodu implementace funguje nastavení souhlasů vždy ve dvou fázích. První nastavení definuje výchozí stav souhlasů (default), který se použije při prvním načtení stránky. Druhé nastavení pak zajistí aktualizaci těchto souhlasů (update) poté, co uživatel zareaguje na cookie lištu a vybere své preference.

[Potřebujete poradit s nastavením Google Consent Mode v2?Kontaktujte nás.](/kontakt/)

## Často kladené dotazy

Od kdy je GCM v2 povinný?

Povinnost platí od března 2024 pro všechny weby a aplikace, které cílí na uživatele z Evropské unie a Velké Británie.

Jaké parametry GCM v2 sleduje?

Nová verze pracuje se čtyřmi parametry. analytics\_storage se týká souhlasu s analytikou, ad\_storage určuje možnost ukládání reklamních cookies, ad\_user\_data souvisí s odesíláním uživatelských dat  a ad\_personalization povoluje využití dat pro personalizované reklamy.

Co se změnilo oproti verzi 1.0?

Verze 2.0 přidala dva nové parametry a složitější kódování informací, aby vyhověla zpřísněné evropské legislativě v oblasti ochrany osobních údajů.

Co hrozí při špatném nastavení GCM v2?

Špatně nastavený systém vede k nepřesným údajům o konverzích, slabší optimalizaci reklamních kampaní a horším výsledkům při cílení i výkonu reklam.

Jak GCM v2 implementovat?

Implementaci je možné provést pomocí úpravy kódu na všech stránkách prostřednictvím gtag.js nebo pomocí Google Tag Manageru. Druhá varianta je jednodušší na správu a nevyžaduje zásahy do kódu při každé změně.

## Zdroje

Dekker, A. 2025. *Google Ads freelancer Rotterdam – Cookiebot ad & ads* [LinkedIn update], 6. srpna 2025. Dostupné z: [https://www.linkedin.com/posts/adriaan-dekker-google-ads-freelancer-rotterdam\_cookiebot-ad-ads-activity-7355624024900550657-NLRG/](https://www.linkedin.com/posts/adriaan-dekker-google-ads-freelancer-rotterdam_cookiebot-ad-ads-activity-7355624024900550657-NLRG/?utm_source=chatgpt.com)

Slížek, D. 2025. *ÚOOÚ řeší přes 80 stížností na „souhlas, nebo zaplať“, řízení stále vede jen se Seznamem*. Lupa.cz, 12. května 2025. Dostupné z: [https://www.lupa.cz/aktuality/uoou-resi-pres-80-stiznosti-na-souhlas-nebo-zaplat-rizeni-stale-vede-jen-se-seznamem/](https://www.lupa.cz/aktuality/uoou-resi-pres-80-stiznosti-na-souhlas-nebo-zaplat-rizeni-stale-vede-jen-se-seznamem/?utm_source=chatgpt.com)

![](https://secure.gravatar.com/avatar/cdbef58acf0523d7a452c6607d3b8558?s=100&d=mm&r=g)

[#### Tomáš Ondříšek](/clanek/author/tomaso/)

Ve své práci se primárně věnuji webové analytice, kde se soustředím na kvantitativní a kvalitativní analýzy. K tomu využívám například uživatelské trychtýře, GA4, smartlook a další analytické nástroje. Další oblastí, které se v současné době věnuji je optimalizace konverzí, a to primárně na eshopech.

[← Předchozí Příspěvek](/clanek/mereni-ga4-na-shoptetu-v-roce-2024/ "Měření GA4 na Shoptetu v roce 2024")
[Další Příspěvek →](/clanek/cross-platform-analytics/ "Cross-platform Analytics: Komplexní pohled na uživatelské chování")

## Související příspěvky

[![Zjednodušený postup vyloučení interní návštěvnosti v GA4](/wp-content/uploads/2024/07/zjednoduseny_postup_vylouceni_interni_navstevnosti_v_ga4-1024x538.webp)](/clanek/postup-vylouceni-interni-navstevnosti/)

### [Zjednodušený postup vyloučení interní návštěvnosti v GA4](/clanek/postup-vylouceni-interni-navstevnosti/)

[Implementace a webová analytika](/tema/implementace/), [Návody](/tema/navody/), [Od Architektů](/tema/od-architektu/) / Napsal [Tomáš Ondříšek](/clanek/author/tomaso/) / [filtr](/stitek/filtr/), [ga4](/stitek/ga4/), [google](/stitek/google/), [Google Analytics](/stitek/ga/), [google analytics 4](/stitek/google-analytics-4/), [vyloučení interní návštěvnosti](/stitek/vylouceni-interni-navstevnosti/)

Google Analytics 4 je důležitý analytický nástroj, díky kterému můžete sledovat a analyzovat návštěvnost na vašem webu či e-shopu. Nástroj […]

[Přečíst více](/clanek/postup-vylouceni-interni-navstevnosti/)

[![Rozdíly mezi GA4 vs GA4 360](/wp-content/uploads/2024/01/rozdily_mezi_ga4_vs_ga4_360-1024x538.webp)](/clanek/rozdily-mezi-ga4-vs-ga4-360/)

### [Rozdíly mezi GA4 vs GA4 360](/clanek/rozdily-mezi-ga4-vs-ga4-360/)

[Od Architektů](/tema/od-architektu/) / Napsal [Martin Štacko](/clanek/author/martins/) / [ga4](/stitek/ga4/), [GA4 360](/stitek/ga4-360/), [google](/stitek/google/), [Google Analytics](/stitek/ga/), [google analytics 4](/stitek/google-analytics-4/), [google analytics 4 360](/stitek/google-analytics-4-360/), [Google Cloud](/stitek/google-cloud/), [technologický stack](/stitek/technologicky-stack/)

V neustále se vyvíjejícím světě digitální analytiky hraje Google Analytics klíčovou roli. Firmám pomáhá porozumět chování uživatelů a konat rozhodnutí […]

[Přečíst více](/clanek/rozdily-mezi-ga4-vs-ga4-360/)