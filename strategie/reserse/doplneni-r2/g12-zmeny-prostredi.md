# Doplnění mezery G12 – Frekvence změn prostředí (kalendář 2024–2026)

Stav: hotovo (2. kolo, 2026-09-04). Data: `data/fragments/r2-g12-evidence.csv` (52 zdrojů, EG12-001…052),
`data/fragments/r2-g12-pain.csv` (31 výpovědí, NG12-001…031).
Zaplňovaná mezera: `06-pain-research.md` § 5 bod 6 – „**`ga4_change` a `browser_change`** jsou jako painy
podreprezentované – lidé je nepoznají; důkaz je nepřímý (changelogy)“.

Metoda: primární dokumentace výrobců (release notes, changelogy, nápovědy Googlu, Mety, Apple/WebKit, Mozilly,
Shopify, WooCommerce, Seznamu, Shoptetu). Sekundární zdroj použit jen tam, kde primární dokument mlčí, a je
v evidenci označen jako `industry_media`. Přístup 2026-09-04. Zdroje blokované přímým načtením (Reddit, části
developers.google.com) byly načteny přes `r.jina.ai`; kde ani to nešlo, je v evidenci uvedeno „nedostupné“.

---

## 1. Shrnutí (10 bodů)

1. **Za 32 měsíců (leden 2024 – srpen 2026) je z primární dokumentace doložitelných ≈188 datovaných změn**
   v Google Analytics 4, Google Tag Manageru, serverovém GTM, Google Ads API, Meta API, prohlížečích,
   e-shopových platformách a pravidlech souhlasu (rozpad v § 2a). To je **v průměru 5,9 změny měsíčně**.
   Z toho je **57 změn** takových, u kterých je z formulace samotného dodavatele zřejmé, že mění sběr dat,
   jejich srovnatelnost nebo předávání do reklamních systémů – ty jsou v kalendáři § 2b–2g **vyznačeny tučně**,
   tj. **1,8 vážné změny měsíčně**.
2. **Samotné GA4 má 99 datovaných změn** (55 v roce 2024, 27 v roce 2025, 17 za leden–srpen 2026) – EG12-001 až
   EG12-003. Číslo z 1. kola (E7-125: 16 změn leden–srpen 2026) se tím **potvrzuje** (skutečnost 17) a rozšiřuje
   o dva předchozí roky, které 1. kolo nemělo: rok 2024 byl s 55 změnami víc než trojnásobně hustší než 2025.
3. **Google Tag Manager má vlastních 31 datovaných změn** (27.6.2024 – 9.7.2026) – EG12-042. V 1. kole nebyl
   changelog GTM použit vůbec. Rytmus je 1,2 změny měsíčně **navíc** ke změnám GA4.
4. **Nejtvrdší „tichá“ změna období: 9.7.2026.** Google změnil chování kontejnerů GTM podle typu ID; nezávislý
   rozbor cituje Google: „*containers reached through these paths degraded automatically into a restricted state,
   regardless of what kind of container they actually were*“ (EG12-050). Kontejner přišel o vlastní HTML a JS tagy,
   aniž by kdokoli cokoli změnil, a bez chybové hlášky.
5. **Tři nejzávažnější změny pro atribuci nebyly od Googlu, ale od Apple.** Safari 17.0 (18.9.2023) blokuje
   „*known tracking query parameters in links*“, Safari 26.0 (15.9.2025) zakazuje klasifikovaným skriptům
   „*reading navigational tracking state including query parameters and `document.referrer`*“ a ITP maže
   JS cookies po 7 dnech neaktivity (EG12-019, EG12-040, EG12-012). Klient tyto změny nepozná – projeví se jen
   jako pomalý růst podílu Direct.
6. **Prostředí se mění i zpět a to stojí stejnou práci.** Google třikrát za 16 měsíců změnil plán s third-party
   cookies (14.12.2023 → 22.7.2024 → 22.4.2025) a 17.10.2025 zrušil rovnou 10 technologií Privacy Sandbox včetně
   Attribution Reporting API a Topics (EG12-017, EG12-018, EG12-011, EG12-016). Kdo migroval podle prvního plánu,
   dělal práci nadarmo.
7. **Známé budoucí termíny, které klient sám nesleduje, jsou k datu rešerše čtyři:** Meta Graph API v20.0 sunset
   **24.9.2026**, Meta Marketing API v24.0 sunset **6.10.2026**, Google Ads API v22 sunset **říjen 2026**,
   Shopify ScriptTags přestanou fungovat **1.3.2027** (EG12-005, EG12-007, EG12-010). To je konkrétní obsah
   pro aktivity B3/C5 a hotový důvod pro outbound.
8. **Českou specialitou je Seznam Event Measurement**: jediný skript `sul.js` nahrazuje oddělené retargetingové
   a konverzní kódy Skliku a přidává server-to-server měření (EG12-024). Oficiální nápověda **neuvádí žádný
   termín migrace ani osud starých kódů** – klient nemá odkud zjistit, do kdy musí zasáhnout, a pro Sklik
   neexistuje žádný monitorovací nástroj (potvrzeno v `05-nastroje-monitoring.md`).
9. **Pro klienta s BigQuery přibývá vlastní kalendář:** schéma exportu se v roce 2024 změnilo čtyřikrát během
   tří měsíců (16., 17., 19.7. a 22.10.2024) a Google doslova píše: „*If your property consistently exceeds the
   export limit, the daily BigQuery export will be paused and previous days' exports will not be reprocessed*“
   (EG12-047, EG12-048). Zpětné dopočtení neexistuje – to sám o sobě ospravedlňuje denní kontrolu exportu.
10. **E-shopová platforma je nejrychlejší zdroj změn ze všech.** WooCommerce vydal 10 verzí za 2,5 měsíce
    (23.6.–3.9.2026), z toho dvě major s povinnou aktualizací databáze; verze 11.0.0 sama uvádí „*Improvements to
    analytics accuracy and resilience*“ (EG12-038, EG12-039). QA měření po releasu proto nemůže být vázané jen
    na vlastní release klienta.

---

## 2. FAKTA – kalendář změn 2024–2026

Řazeno podle data. Sloupec „Rozbíjí“ říká, co změna rozbila nebo mohla rozbít. Sloupec „Zdroj“ odkazuje na
evidence ID v `r2-g12-evidence.csv`.

### 2a. Přehled objemu podle vrstvy

| Vrstva | Zdroj | Počet datovaných změn | Období | Průměr / měsíc |
|---|---|---|---|---|
| Google Analytics 4 (produkt) | EG12-001…003 | **99** (55 + 27 + 17) | 1/2024 – 8/2026 | 3,1 |
| Google Tag Manager | EG12-042 | **31** | 6/2024 – 7/2026 | 1,2 |
| Server-side GTM (Docker image) | EG12-004 | **8** | 9/2024 – 7/2026 | 0,3 |
| Google Ads API (vydání) | EG12-007 | **9 vydaných** (v22…v25.1) + 3 plánovaná do 11/2026 | 10/2025 – 8/2026 | 0,9 |
| Meta Graph / Marketing API | EG12-005, EG12-022 | **8 verzí + 1 proběhlý sunset + 1 změna napříč verzemi** | 1/2024 – 7/2026 | 0,3 |
| Prohlížeče a Privacy Sandbox | EG12-011, 016–021, 040 | **9 zásadních** | 12/2023 – 10/2025 | 0,3 |
| E-shopové platformy (Shopify, Shoptet, Woo) | EG12-009, 010, 023, 038, 039 | **6 klíčových termínů + 10 vydání WooCommerce** | 11/2023 – 9/2026 | – |
| Consent / legislativa / CMP | EG12-013, 014, 037, 041, 049 | **5 tvrdých termínů** | 1/2024 – 6/2026 | – |
| **Celkem doložených datovaných změn** | | **≈188** (z toho 57 s přímým dopadem na měření) | 1/2024 – 8/2026 | **5,9** (z toho 1,8 vážných) |

### 2b. Kalendář – Google Analytics 4

| Datum | Co se změnilo (doslova) | Rozbíjí / mění | Zdroj |
|---|---|---|---|
| 8.2.2024 | Manual traffic source dimensions and report | členění zdrojů v reportech | EG12-003 |
| 9.2.2024 | Event parameter limit increase | limity, které se dřív tiše ořezávaly | EG12-003 |
| 28.2.2024 | Primary Channel Group | členění kanálů | EG12-003 |
| **6.3.2024 (okolí)** | „*only end users outside the EEA will be included in audiences used by your linked advertising products starting early March, 2024*“ | remarketingová publika, Smart Bidding | EG12-014 |
| 27.3.2024 | „*A 'conversion' now refers to an important action that you want to use to measure the performance of your ad campaigns*“ – konverze → klíčové události | terminologie napříč UI, API, dokumentací, KPI | EG12-029 |
| 22.5.2024 | Improvements to attribution channel assignments | podíly kanálů | EG12-003 |
| **3.6.2024** | Require config for automatically collected events | automatické eventy bez configu přestanou chodit | EG12-003 |
| 10.6.2024 | „*conversions that should be attributed to paid search are sometimes incorrectly attributed to organic search*“ – oprava | podíl Paid vs. Organic Search | EG12-028 |
| 26.6.2024 | Improved attribution data | atribuce | EG12-003 |
| 27.6.2024 | Introducing Tag Diagnostics | – (nová diagnostika) | EG12-003 |
| **16.7.2024** | GA4 BigQuery Event Ordering additions for Web properties | schéma BQ exportu, SQL modely | EG12-048 |
| **17.7.2024** | Additional UTM fields added to the BigQuery Event export | schéma BQ exportu | EG12-048 |
| **19.7.2024** | Session traffic source information now available in the GA4 BigQuery Export | schéma BQ exportu | EG12-048 |
| 23.8.2024 | „*We now more completely process the session_start event when your property is linked to Google Ad Manager*“ | počty sessions | EG12-003 |
| 3.9.2024 | Corrected Display & Video 360 attribution | atribuce | EG12-003 |
| 18.9.2024 | Corrected Campaign Manager 360 attribution | atribuce | EG12-003 |
| 25.9.2024 | Improved user-provided data session attribution | atribuce | EG12-003 |
| 11.10.2024 | New Tag Diagnostics | – | EG12-003 |
| **22.10.2024** | BigQuery export supports additional traffic source fields | schéma BQ exportu | EG12-048 |
| 28.10.2024 | Direct attribution improvements; Benchmarking | podíl Direct | EG12-003 |
| **13.11.2024** | „*For most properties, you must have a config command or the Google tag installed on a web page for custom events to be sent.*“ | vlastní eventy bez configu přestanou chodit | EG12-027 |
| 13.1.2025 | Consent settings hub | – (nová kontrola consentu) | EG12-002 |
| **3.2.2025** | Cost data import required field updates | automatizovaný upload nákladů | EG12-030 |
| 12.3.2025 | Missing session start notification; High not set rate notification | – (nové notifikace) | EG12-002 |
| 6.6.2025 | Consent settings hub enhanced with Tag Diagnostics | – | EG12-002 |
| **6.8.2025** | „*We've improved conversion data quality to prevent under-reporting of conversions for … properties [with] 2 or more linked Google Ads accounts.*“ | počty konverzí, srovnatelnost období | EG12-025 |
| 25.8.2025 | „*Ecommerce dimensions (default and custom) are now available in Reporting secondary dimensions, filters, comparisons and customization.*“ | chování e-commerce reportů | EG12-031 |
| 2.10.2025 | New diagnostic for User-ID implementation issues | – | EG12-002 |
| **5.11.2025** | „*UPD now focuses on activation and Ads Conversions … [UPD no longer serves as a reporting identity identifier for sessions and users.]*“ | počty uživatelů a sessions, cross-device reporty | EG12-026 |
| **19.11.2025** | Cost data import is now Campaign data import | pojmenování, návazné procesy | EG12-030 |
| 16.1.2026 | „*Conversion attribution settings are now adjustable independently for every conversion*“ + Conversion attribution analysis report (Beta) | nastavení atribuce per konverze | EG12-001 |
| 4.5.2026 | Conversion support in the Data API (alpha) | – | EG12-001 |
| **7.5.2026** | „*Data Manager API provides you with an alternative to Measurement Protocol (MP) for sending recommended and custom events*“ | budoucnost MP integrací | EG12-036 |
| **13.5.2026** | „*You can now identify how users are discovering your site through chatbots like ChatGPT, Gemini, and Claude via a new AI Assistant channel.*“ | členění kanálů, časové řady, vlastní Channel Groups | EG12-035 |
| **11.6.2026** | „*Source grouping … consolidates source values for common online platforms – Facebook, Instagram, and TikTok*“ + „*[Hostname filter] Allows customers to filter out (exclude) events based on their hostname*“ | členění zdrojů; nová obrana proti cizím datům | EG12-034 |
| **28.7.2026** | Campaign data import currency update – „*Currency field now required when uploading cost data*“ | automatizovaný upload nákladů (potřetí za 18 měsíců) | EG12-030 |
| **30.7.2026** | „*Properties where aggregate identifiers (GBRAID and gad_) are missing from the URL will see a new diagnostic*“ | přiznání Googlu, že click ID z URL mizí | EG12-033 |
| **11.8.2026** | „*conversions now support custom integer lookback windows for click-through conversions (CTC) and engaged-view conversions (EVC)*“ (EVC 1–30 dní, CTC 1–90 dní) | počty konverzí, srovnatelnost období | EG12-032 |

Plus dalších ~60 datovaných změn GA4 uvedených v archivu, které nejsou v tabulce rozepsané (celkem 99, EG12-001…003).

### 2c. Kalendář – Google Tag Manager a server-side GTM

| Datum | Co se změnilo (doslova) | Rozbíjí / mění | Zdroj |
|---|---|---|---|
| 27.6.2024 | Tag Diagnostics tool launched | – | EG12-042 |
| **2.7.2024** | „*Google Tag and Google Tag Manager discontinue Microsoft Internet Explorer support beginning July 15, 2024*“ | měření na IE | EG12-044 |
| **28.8.2024** | „*New consent mode override setting allows default consent status adjustment to 'denied' for selected regions*“ | výchozí stav souhlasu podle regionu | EG12-044 |
| 19.9.2024 | „*Google Tag Manager may use service workers to enhance performance and measurement reliability*“ | způsob odesílání dat | EG12-042 |
| 26.9.2024 | sGTM Docker image **v2.4.0** – „*Updated base image version for security updates*“ | nutná aktualizace Cloud Run revize | EG12-004 |
| 9.10.2024 | Google tag first-party mode přes Cloudflare | – | EG12-042 |
| 11.10.2024 | Nové diagnostiky „*Tag has stopped sending data*“ a „*Tag found too low on page*“ | – (nová detekce) | EG12-042 |
| **7.11.2024** | „*Conversion Linker now stores ad click information in browser local storage plus first-party cookies*“ | atribuce + právní posouzení consentu | EG12-044 |
| 10.12.2024 | Automated first-party mode setup with Cloudflare | – | EG12-042 |
| **4.3.2025** | „*Google tag now employs service workers to transmit data to server-side Tag Manager when available*“ | chování sGTM přenosu | EG12-045 |
| **10.3.2025** | „*Containers with Google Ads and Floodlight tags will automatically load Google tag first starting April 10, 2025*“ | pořadí spouštění tagů | EG12-044 |
| 19.3.2025 | First-party mode přes Cloudflare (beta) | – | EG12-042 |
| 4.4.2025 | Nové diagnostické alerty v Tag Diagnostics | – | EG12-042 |
| 7.5.2025 | „*60-day inactivity triggers automatic page removal from reports*“ | obsah reportů | EG12-042 |
| **8.5.2025** | „*First-party mode rebranded as Google tag gateway for advertisers, now supporting client and server-side tags*“ | pojmenování + rozsah funkce | EG12-045 |
| **15.5.2025** | sGTM image **v3.0.0** – Node.js v22, base image `distroless/nodejs22-debian12` | major skok, kompatibilita šablon | EG12-004 |
| 5.6.2025 | sGTM image v3.1.0 (Node 22.16.0) | aktualizace revize | EG12-004 |
| 24.6.2025 | Delete/rollback pro Google tag gateway (Cloudflare) | – | EG12-042 |
| **30.6.2025** | „*Web container client now serves all scripts; Google Analytics client discontinues dependency serving support*“ | obsluha skriptů v sGTM | EG12-045 |
| **28.7.2025** | „*Floodlight tags in server-side Tag Manager transmit unconsented requests server-to-server for accuracy*“ | co odchází při odepřeném souhlasu | EG12-045 |
| 31.7.2025 | Floodlight Sales tags podporují Merchant ID / Feed Label / Feed Language | – | EG12-042 |
| **1.8.2025** | „*New readAnalyticsStorage sandbox API allows developers to read client and session IDs safely in custom templates*“ | vlastní šablony | EG12-045 |
| 2.9.2025 | sGTM image v3.2.0 (npm balíčky, `@google-cloud/bigquery` 8.1.1) | aktualizace revize | EG12-004 |
| 30.9.2025 | Google tag gateway – zobrazení aktivního stavu | – | EG12-042 |
| **10.11.2025** | sGTM image **v4.0.0** – Node.js v24, `distroless/nodejs24-debian13` | major skok, kompatibilita šablon | EG12-004 |
| 11.12.2025 | Nové vestavěné proměnné Client ID, Session ID, Session Number | – | EG12-042 |
| 5.1.2026 | Google tag gateway přes GCP (beta) | – | EG12-042 |
| 29.1.2026 | Google tag gateway přes Akamai | – | EG12-042 |
| **4.2.2026** | „*Google Ads will automatically collect broader website event data. Advertisers may notice additional network requests to Google domains when these events are transmitted.*“ | rozsah sbíraných dat bez vědomého nastavení | EG12-045 |
| 2.2.2026 | sGTM image v4.2.0 | aktualizace revize | EG12-004 |
| 28.4.2026 | sGTM image v4.3.0 | aktualizace revize | EG12-004 |
| 1.5.2026 | Enhanced conversion tracking pro GA4 property napojené na Ads přes „parallel browser signals“ | měření konverzí | EG12-042 |
| 14.5.2026 | Google tag gateway přes Akamai a Fastly | – | EG12-042 |
| 1.6.2026 | Google tag gateway přes GCP – general availability | – | EG12-042 |
| 3.6.2026 | Google tag gateway přes Amazon CloudFront | – | EG12-042 |
| **22.6.2026** | „*Server-side data is intelligently joined with parallel browser signals, such as cookies, when a GCLID is present.*“ | způsob spojování server-side a browser dat | EG12-045 |
| 1.7.2026 | Streamlined interface na Overview stránce GTM | – | EG12-042 |
| **9.7.2026** | „*Containers loaded with a GTM-XXXX ID won't be restricted, while product-specific ID types like G-XXXX or AW-XXXX will only permit tags and variables provided by Google.*“ | vlastní HTML tagy a šablony třetích stran v kontejneru | EG12-043 |
| 22.7.2026 | sGTM image v4.4.0 | aktualizace revize | EG12-004 |
| 10.8.2026 | Nezávislý rozbor: před opravou „*containers reached through these paths degraded automatically into a restricted state*“ | tiché omezení kontejnerů | EG12-050, EG12-051 |
| **20.8.2026** | „*[Google tags are being upgraded to function as full Google Tag Manager containers] … no changes will be made automatically, and you can choose whether to adopt the new configuration.*“ | struktura rozhraní, dokumentace, onboarding | EG12-046 |

### 2d. Kalendář – reklamní platformy (Google Ads API, Meta, Seznam)

| Datum | Co se změnilo (doslova) | Rozbíjí / mění | Zdroj |
|---|---|---|---|
| 23.1.2024 | Meta Graph API **v19.0** (sunset 21.5.2026) | integrace CAPI po sunsetu | EG12-005 |
| 21.5.2024 | Meta Graph API **v20.0** (sunset **24.9.2026**) | integrace CAPI po sunsetu | EG12-005 |
| 2.10.2024 | Meta Graph API **v21.0** (sunset 21.1.2027) | – | EG12-005 |
| 21.1.2025 | Meta Graph API **v22.0** (sunset 20.5.2027) | – | EG12-005 |
| 29.5.2025 | Meta Graph API **v23.0** (sunset 8.10.2027) | – | EG12-005 |
| **8.10.2025** | Meta v24.0: „*Updating custom conversions that are flagged custom conversions will fail.*“ | automatizovaná správa custom konverzí | EG12-022 |
| 15.10.2025 | Google Ads API **v22** (sunset říjen 2026, tentative) | konektory a skripty po sunsetu | EG12-007 |
| **6.1.2026** | Meta: omezení custom konverzí „*will extend to all versions*“ | zápis custom konverzí napříč všemi verzemi API | EG12-022 |
| 28.1.2026 | Google Ads API **v23** (sunset únor 2027) | – | EG12-007 |
| 18.2.2026 | Meta Graph API **v25.0** | – | EG12-005 |
| 25.2.2026 | Google Ads API v23.1 | – | EG12-007 |
| 25.3.2026 | Google Ads API v23.2 | – | EG12-007 |
| **22.4.2026** | Google Ads API **v24**: nové typy konverzních akcí pro lead gen (GA4/Firebase), odstraněna kategorie `LOYALTY_SIGN_UPS`, povinná pole v Demand Gen / Video ads | konverzní akce, video kampaně | EG12-008 |
| 13.5.2026 | Google Ads API v24.1 | – | EG12-007 |
| **24.6.2026** | Google Ads API v24.2: nové konverzní typy `ConversionActionType.LOCAL_SERVICES_ADS` | konverzní akce | EG12-008 |
| **6–7/2026** | Seznam **Event Measurement (SEM)**: „*nahrazuje dosavadní retargetingové kódy a měřicí skripty konverzí*“, jediný skript `sul.js`, server-to-server | veškeré měření Skliku a Seznam Nákupy; termín migrace nikde neuveden | EG12-024 |
| **22.7.2026** | Google Ads API **v25**: „*Legacy lifecycle goal resources removed. Migrate to unified goals schema*“ | správa cílů / konverzí | EG12-008 |
| 29.7.2026 | Meta Graph API **v26.0**; „*Marketing API version auto-upgrade will be released on July 29, 2026*“ | automatický upgrade verze | EG12-005 |
| 19.8.2026 | Google Ads API v25.1: Brand Lift a Conversion Lift, loyalty membership segmentace konverzí | – | EG12-008 |
| **24.9.2026** | Meta Graph API v20.0 **sunset** | integrace na v20 přestanou fungovat | EG12-005 |
| **6.10.2026** | Meta Marketing API v24.0 **sunset** | integrace na v24 přestanou fungovat | EG12-005 |
| **říjen 2026** | Google Ads API v22 **sunset** (tentative) | konektory a skripty na v22 | EG12-007 |

### 2e. Kalendář – prohlížeče a Privacy Sandbox

| Datum | Co se změnilo (doslova) | Doložený dopad na měření | Zdroj |
|---|---|---|---|
| **18.9.2023** | Safari 17.0: „*blocking for known tracking query parameters in links*“, „*trackers that use third-party CNAME cloaking*“, „*noise to fingerprintable web APIs*“ | proklik z reklamy dorazí bez click ID → spadne do direct/organic; CNAME obcházení ITP přestává fungovat | EG12-019 |
| 14.12.2023 | Chrome: „*Chrome is restricting website access to third-party cookies for 1% of users … to phase out third-party cookies for everyone in the second half of 2024*“ (účinnost 4.1.2024) | spuštění vlny migrací na server-side měření | EG12-017 |
| 9.7.2024 | Firefox 128: „*Firefox now supports the experimental Privacy Preserving Attribution API, which provides an alternative to user tracking for ad attribution.*“ | nový standard k posouzení | EG12-021 |
| **22.7.2024** | Google: „*Instead of deprecating third-party cookies, we would introduce a new experience in Chrome that lets people make an informed choice*“ | první otočení plánu | EG12-018 |
| **31.3.2025** | Safari 18.4: „*Partitioned cookies allow third-party content … Cross-site tracking domains cannot use partitioned cookies.*“ | třetí-strane cookies v iframe (CMP, chat, brány, cross-domain) musí mít `Partitioned` | EG12-020 |
| **22.4.2025** | Google: „*[Google] will not be rolling out a new standalone prompt for third-party cookies*“ | druhé otočení plánu | EG12-011 |
| **15.9.2025** | Safari 26.0: „*prevents known fingerprinting scripts from … setting long-lived script-written storage like cookies or LocalStorage … [and from] reading navigational tracking state including query parameters and `document.referrer`*“ | klasifikovaný měřicí skript přijde o UTM, gclid i referrer a jeho cookie má krátkou životnost | EG12-040 |
| **17.10.2025** | Google ruší „*Attribution Reporting API (Chrome and Android), IP Protection, On-Device Personalization, Private Aggregation …, Protected Audience …, Protected App Signals, Related Website Sets, SelectURL, SDK Runtime and Topics*“ | investice do migrace na tyto API bez návratnosti | EG12-016 |
| trvale | Safari ITP: „*ITP deletes all cookies created in JavaScript and all other script-writeable storage after 7 days of no user interaction*“; „*caps the expiry of cookies created in JavaScript on the landing webpage to 24 hours*“ | nadhodnocený počet nových uživatelů, ztracená atribuce delších cyklů | EG12-012 |

### 2f. Kalendář – e-shopové platformy

| Datum | Co se změnilo (doslova) | Rozbíjí / mění | Zdroj |
|---|---|---|---|
| **30.11.2023** | Shoptet rozšířil integrované GA4 měření (B2B/B2C přes `transaction_type`, `view_item_list`, funnel `view_cart`/`begin_checkout`/`checkout_progress`/`purchase`, `generate_lead`, nové parametry u `add_shipping_info` a `add_payment_info`); po hlášeních problémů část nasazení „*dočasně pozastavili … z důvodu několika nahlášených problémů s měřením*“ | měření objednávek; kroky na straně e-shopu (datový filtr, vlastní dimenze) zůstávají nedokončené | EG12-023 |
| **28.8.2025** | Shopify: „*As of August 28, 2025, the additional scripts section in the Checkout settings is view-only.*“ | historické místo pro měřicí skripty přestává být editovatelné | EG12-009 |
| 23.6.2026 | WooCommerce 10.9.0 – „*Performance improvements for checkout and dashboard … Database update required*“ | checkout, pořadí skriptů | EG12-039 |
| 2.7.2026 | Shopify: „*Deprecating the useBuyerJourneyIntercept API on checkout UI extensions*“ (Action Required) | checkout rozšíření | EG12-010 |
| 6.7.2026 | Shopify: „*Customer Account API Customer.lastIncompleteCheckout and Checkout types removed in 2026-10*“ (Breaking Changes) | integrace na Customer Account API | EG12-010 |
| 7.7.2026 | WooCommerce 10.9.4 – „*Fixed VAT exemption logic for block checkout*“ | hodnota transakce v purchase eventu | EG12-039 |
| **4.8.2026** | WooCommerce 11.0.0 – „*Customers can claim previous guest checkout orders … Improvements to analytics accuracy and resilience … Database update required*“ | objednávkový tok, analytika | EG12-039 |
| **24.8.2026** | Shopify: „*Script tags are deprecated and will stop running on March 1, 2027*“ | všechny měřicí aplikace závislé na ScriptTags → **1.3.2027** | EG12-010 |
| **26.8.2026** | Shopify: „*August 26, 2026 was the deadline for stores on a non-Plus Shopify subscription plan to upgrade their existing Thank you and Order status pages.*“ | měření objednávek u non-Plus obchodů, které nemigrovaly | EG12-009 |
| 3.9.2026 | WooCommerce 11.1.0 | – | EG12-038 |
| souhrn | WooCommerce: **10 vydání za 2,5 měsíce** (23.6.–3.9.2026), z toho 2 major s povinnou aktualizací DB | frekvence QA po releasu | EG12-038 |

### 2g. Kalendář – consent, legislativa a CMP

| Datum | Co se změnilo (doslova) | Rozbíjí / mění | Zdroj |
|---|---|---|---|
| 1.11.2022 / 2.5.2023 | DMA vstoupil v platnost / stal se použitelným; „*designated gatekeepers will have a maximum of six months after the Commission decision to ensure compliance*“ | kořen termínů Googlu pro consent mode v2 | EG12-049 |
| **16.1.2024** | „*As of 16 January 2024, a certified CMP integrated with the TCF is required when serving personalized ads to users in the EEA and UK.*“ | personalizované reklamy pro EHP/UK publikum | EG12-013 |
| **začátek 3/2024** | „*If you are using Analytics data with a Google service … and you take no action, only end users outside the EEA will be included in audiences … starting early March, 2024.*“ | remarketingová publika vyprázdněna bez varovného e-mailu | EG12-014 |
| **31.7.2024** | „*As of 31 July 2024, a certified CMP integrated with the TCF is required when serving personalized ads to users in Switzerland.*“ | Švýcarsko | EG12-013 |
| 7/2025 | „*we are granting an enforcement extension until July 2025*“ (CTV inventory) | odklad pro CTV | EG12-013 |
| průběžně | CMP „*are required to recertify at least every twelve months*“ | vypršelá certifikace CMP = stejný dopad znovu | EG12-013 |
| **15.6.2026** | „*Google Analytics will transition to using Consent Mode (within Google Ads) as the single control for data*“; přepínač Google Signals nadále řídí jen „*association … with signed in user information for behavioral reporting*“ | compliance postavená na vypnutém Google Signals přestává platit | EG12-041 |
| **později v 2026** | „*the Consent Mode ad_personalization setting will exclusively control if that data is used for personalization in your Ads account*“; „*IP addresses that are automatically collected by the Google Tag and SDK will be encrypted and flow to your linked Google Ads account*“ | další přesun kontroly + tok IP adres do Ads | EG12-041 |
| bez data | Google Ads/GTM stránka o consent mode v2 (`ad_user_data`, `ad_personalization`) **neuvádí žádný termín** | klient, který si přečte oficiální stránku, se datum nedozví | EG12-037 |

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3a. H2 (tiché rozbití) – **potvrzeno a nově doloženo z druhé strany**

1. kolo doložilo H2 z výpovědí uživatelů (313 výpovědí, „*It fails silently by design*“). Toto kolo dokládá H2
**z primární dokumentace dodavatelů**, tedy nezávisle na tom, jestli si někdo stěžoval. Tři formulace samotného
Googlu a Apple jsou přiznáním tichého mechanismu:

- „*containers reached through these paths degraded automatically into a restricted state, regardless of what
  kind of container they actually were*“ (GTM, EG12-050) – žádné oznámení, žádná chyba.
- „*For most properties, you must have a config command or the Google tag installed on a web page for custom
  events to be sent*“ (GA4, EG12-027) – event se neodešle a neohlásí chybu.
- „*the daily BigQuery export will be paused and previous days' exports will not be reprocessed*“ (EG12-047) –
  díra v datech je trvalá.

To posouvá H2 z „*hypotéza podpořená stížnostmi*“ na „*doložený vlastnostní rys prostředí*“. Prodejní tvrzení
„měření se tiše rozbije“ tak nestojí jen na anekdotách, ale na citacích z dokumentace dodavatelů.

### 3b. Podreprezentované kódy `ga4_change` a `browser_change` – **mezera zaplněna**

| Kód | 1. kolo (`07-pain.csv`) | Toto doplnění (`r2-g12-pain.csv`) | Celkem |
|---|---|---|---|
| `ga4_change` | 6 | **7** | 13 |
| `browser_change` | 7 | **6** | 13 |
| `gtm_change_dev` | 11 | 3 | 14 |
| `consent_change` | 35 | 4 | 39 |
| `platform_migration` | 29 | 3 | 32 |
| `ad_platform_change` | 8 | 3 | 11 |
| `bq_export_gap` | 11 | 2 | 13 |

Oba kódy se víc než zdvojnásobily a nově mají **datované, primární doklady místo nepřímých**. Poznámka z 1. kola
(„*`ga4_change` je jako pain podreprezentován, ale jako důvod pro průběžnou správu je velmi dobře doložen
frekvencí změn*“) tím platí doslova a je nyní podložena čísly: 99 změn GA4 a 31 změn GTM za 32 měsíců.

### 3c. H1 (BQ-first) – **beze změny, ale s novým argumentem pro oba tiery**

Tento kalendář **neposiluje ani neoslabuje** dvouúrovňový model z 1. kola, ale rozděluje ho čistěji:

- **Změny, které dopadají na klienta i bez BigQuery** (většina): GA4 produkt, GTM, consent, prohlížeče, platforma
  e-shopu, ad platformy. Z 31 nových výpovědí je jen 2 označených `has_bq=yes`.
- **Změny, které dopadají výhradně na klienta s BigQuery**: čtyři změny schématu exportu v roce 2024 (EG12-048)
  a limit 1 mil. událostí denně s nevratným pozastavením exportu (EG12-047).

Závěr 1. kola „BigQuery mění hloubku, ne seznam“ tedy platí i pro kalendář změn: **s BQ přibývá vlastní kalendář
navíc**, nenahrazuje ten základní. To je konzistentní s tím, aby BQ zůstalo zlomem mezi tiery, ne podmínkou vstupu.

### 3d. H5 (nahraditelnost SaaS monitoringem) – **posíleno ve prospěch služby**

Ze všech ≈188 doložených změn není **ani jedna** taková, kterou by SaaS monitoring uměl vyřešit sám. Monitoring umí
detekovat *následek* (tag přestal chodit, event zmizel, tabulka nepřišla) – neumí:

- vědět, že 24.9.2026 vyprší Meta Graph API v20.0 a 1.3.2027 přestanou fungovat Shopify ScriptTags (EG12-005,
  EG12-010) – to je **kalendář, ne alert**;
- rozhodnout, jestli se má migrovat na Data Manager API místo Measurement Protocolu (EG12-036);
- vyhodnotit, že skok v konverzích 6.8.2025 není výkon, ale změna metodiky Googlu (EG12-025);
- říct, že od 13.5.2026 nesedí YoY srovnání kanálů, protože Google historii nepřeklasifikoval (EG12-052);
- pokrýt Sklik, pro který žádný nástroj neexistuje a jehož největší změna měření nemá veřejný termín (EG12-024).

Toto je **nejsilnější dosud nalezený argument pro cenu služby nad cenou nástroje** (SaaS monitoring 1 600–5 200
Kč/měs podle `08-pricing-synteza.md`). Rozdíl mezi 5 200 Kč za nástroj a 8 900 Kč za tier „Hlídání“ je právě tato
práce: někdo čte 4 změny měsíčně a překládá je do rozhodnutí o konkrétním účtu.

### 3e. Dopad na cenová pásma – **beze změny, ale mění se odůvodnění**

Kalendář **nemění** navržená pásma (8 900 / 19 900 / 39 000 Kč) – neobsahuje žádný nový cenový bod. Mění ale
**odvození nákladovou cestou** v `08-pricing-synteza.md`:

| Položka | Doložený objem | Odhad práce / měsíc |
|---|---|---|
| Čtení a triáž změn GA4 + GTM (131 změn / 32 měsíců) | ~4 změny měsíčně | 1–2 h (čtení + rozhodnutí „týká se / netýká“) |
| Reakce na změny, které se klienta týkají | odhadem 1 z 5 | 1–3 h |
| Aktualizace sGTM image (8 vydání / 32 měsíců) | 0,25/měs, ale nárazově | 0,5 h/měs amortizovaně |
| Hlídání sunsetů API (Meta, Google Ads) | 4 tvrdé termíny v horizontu 7 měsíců | 0,5 h/měs + nárazová migrace |
| QA po aktualizaci platformy (WooCommerce ~4 vydání/měs) | u Woo klienta 4×/měs | 1–2 h |

To je **2,5–7 hodin měsíčně jen na „řízení změn prostředí“** – aktivity B3 a C5 z taxonomie, které dosud neměly
kvantifikaci. Při sazbě 1 200–2 500 Kč/h (H3) je to **3 000–17 500 Kč/měs samotné hodnoty této jedné vrstvy**.
Tier „Hlídání“ za 8 900 Kč je tedy nákladově obhajitelný i kdyby neobsahoval nic jiného než tuto vrstvu plus
denní automatické kontroly. To pásmo **potvrzuje** – a zároveň ukazuje, že spodní hranice není nafouknutá.

### 3f. Nový prodejní materiál, který z toho vzniká

Kalendář je použitelný přímo jako argument ve třech formách:

1. **Číslo do nabídky:** „Za posledních 32 měsíců přišlo z veřejné dokumentace Googlu, Mety, Apple, Shopify
   a WooCommerce ≈188 datovaných změn v produktech, na kterých vaše měření stojí. Padesát sedm z nich mění sběr dat
   nebo jejich srovnatelnost – to je jedna vážná změna každé dva a půl týdne. Kolik jich prošlo přes vás?“
2. **Outbound před termínem** (kanál pojmenovaný v `02-shrnuti-a-zavery.md` bod 6): konkrétní seznam s daty –
   Meta v20.0 24.9.2026, Meta Marketing API v24.0 6.10.2026, Google Ads API v22 říjen 2026, Shopify ScriptTags
   1.3.2027, Sklik SEM bez termínu. To je pět důvodů k oslovení s konkrétním datem.
3. **Diferenciátor zdarma** (bod 4 tamtéž): „sledování deadlinů Googlu, Mety, Shopify a Shoptetu za klienta“ dostává
   konkrétní obsah – tenhle kalendář, udržovaný a posílaný v měsíčním komentáři.

---

## 4. MEZERY, které zůstávají

1. **Meta Conversions API nemá veřejný changelog.** `developers.facebook.com/docs/marketing-api/conversions-api/changelog`
   vrací 404 a verzované changelogy (v24, v25, v26) obsahují k CAPI jen jednu položku (custom konverze). Změny
   deduplikace, Event Match Quality a datasetů se tedy nepodařilo datovat – zůstává mezera z 1. kola.
2. **Shoptet nemá veřejný datovaný changelog měření.** `developers.shoptet.com/shoptet-tools/data-layer/` neobsahuje
   verze ani data změn (ověřeno). Jediný datovaný zdroj je blogový příspěvek z 30.11.2023. Pro CZ segment to znamená,
   že změny Shoptetu nelze sledovat jinak než pozorováním provozu – což je samo o sobě argument pro službu, ale
   zároveň mezera v důkazech.
3. **Sklik / Seznam Event Measurement nemá v oficiální nápovědě žádný termín** ani informaci o osudu starých kódů.
   Datum „červen–červenec 2026“ pochází ze sekundárních zdrojů (agenturní blogy), nikoli z primární dokumentace;
   proto je v evidenci zaznamenáno jen to, co říká nápověda doslova.
4. **PrestaShop a Upgates nedoloženy.** GitHub releases PrestaShopu vrátily verze s daty, která si vzájemně
   odporují (9.1.x s daty roku 2024), takže nebyly použity. Upgates nemá veřejný changelog měření.
5. **GA4 Data API a Admin API release notes nedostupné** – `developers.google.com/analytics/devguides/reporting/data/v1/release-notes`
   i varianta přes `r.jina.ai` vracejí 404 („*You may need to sign in*“). Údaj z 1. kola (17 změn 2023, 13 změn 2024,
   E7-126) tedy zůstává neověřený.
6. **Chybí uživatelské výpovědi k novým kódům.** Reddit (`old.reddit.com` i `www.reddit.com`) je z prostředí blokovaný
   a `r.jina.ai` na vyhledávání Redditu vypršelo. Řádky `NG12-*` jsou proto výpovědi *dokumentace*, ne uživatelů –
   dokládají, že se změna stala a co rozbíjí, ale ne, jak dlouho konkrétní firmě trvalo, než si toho všimla.
   Doba do odhalení je v nich odhadnuta z mechanismu, ne změřena; je to potřeba doplnit v rozhovorech.
7. **Německý rozsudek z března 2025** („GTM nesmí být aktivován před souhlasem“, zmíněný v EG12-050) není doložen
   odkazem na rozhodnutí soudu – neověřeno, do kalendáře nezařazeno.
8. **Přesné datum compliance DMA (6.3.2024)** se na stránce Evropské komise doslova nevyskytuje; je odvoditelné
   z mechanismu „6 měsíců od rozhodnutí“, ale nebylo primárně ověřeno. V kalendáři je proto uvedeno jako
   „začátek 3/2024“ podle formulace Googlu, ne podle Komise.
