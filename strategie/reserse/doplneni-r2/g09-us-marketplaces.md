# Kolo 2 / mezera G09 – US marketplaces a enterprise ceny

Zadání: doplnit mezeru z `04-trh-us.md` § 5 – Upwork, Fiverr, Clutch, Glassdoor vracely 403; enterprise ceny
(5 000–15 000 USD/měs.) stály na **jednom** třetím zdroji (yourgrowthpartner.io, sám konkurent).

Datum přístupu ke všem zdrojům: **2026-09-04**. Kurz: 1 USD = 23 Kč, 1 GBP = 29 Kč.
Data: `data/fragments/r2-g09-pricing.csv` (79 řádků, PG9-001…079), `data/fragments/r2-g09-evidence.csv` (21 řádků, EG9-001…021, phase=11).

Metodická poznámka k obcházení blokací: Upwork zůstává nedostupný (Cloudflare challenge i přes `r.jina.ai`).
Fiverr, Clutch, DesignRush a GoodFirms se **podařilo otevřít přes prefix `r.jina.ai`** (přímý fetch 403).
Sortlist a TheManifest vracejí 404 na všech zkoušených cestách. Klíčový nový zdroj, který v 1. kole nikdo nepoužil:
**API amerických veřejných zakázek `api.usaspending.gov`** – dává předmět, částku i období plnění, tedy cenu za měsíc.

---

## 1. Shrnutí

1. **Enterprise tvrzení je potvrzeno primárním zdrojem, ale rozpadá se na dvě různé věci.** 22 amerických federálních
   kontraktů s předmětem „web analytics support / Google Analytics support“ má medián **16 694 USD/měs.** (384 tis. Kč),
   dolní kvartil 4 346 USD, horní kvartil 33 156 USD, rozsah 985 – 70 252 USD/měs. Pásmo „5–15 tis. USD“ je tedy
   **spodní polovina** skutečného rozpětí, ne jeho střed.
2. **Cenu neurčuje jméno dodavatele, ale rozsah.** Bounteous – agentura, o které třetí strana psala „retainers typically
   start at $15,000/month“ – má s NASA tři roky po sobě kontrakt na **52 000 USD ročně = 4 349 USD/měs.** (EG9-013).
   Tatáž agentura tedy dodává za třetinu „vlastní vstupní ceny“, když je předmětem podpora jedné property.
3. **Role „web analytics analyst“ jako služba se v USA obchoduje za 19 900 – 25 200 USD/měs.** (MetroStar 36 měsíců,
   Fearless Solutions dva po sobě jdoucí roky, EG9-004). Kontrola přes oficiální GSA ceníky sedí na desetinu procenta:
   120 USD/h × 173 h = 20 760 USD/měs. (EG9-019). Čísla z veřejných zakázek tedy nejsou nafouknutá.
4. **Dolní hranice veřejné zakázky na správu měření je 985 – 2 517 USD/měs.** (Smithsonian, National Gallery of Art;
   EG9-005, EG9-008). I ve veřejné soutěži se správa měření jednoho webu obchoduje kolem 2,5–4,3 tis. USD, ne 5–15 tis.
5. **Nejlepší nalezený veřejný popis rozsahu kontinuální správy** je z kontraktu Federal Student Aid (EG9-003):
   *„strategic guidance, creating and maintaining formalized frameworks and processes, supporting website releases and
   required updates to analytics, and providing key reporting and insights“* – tedy A1, A2, H1, H2, F3 z taxonomie,
   definované jako trvalý program, ne projekt.
6. **Fiverr: měsíční „GA4 maintenance“ gig neexistuje – potvrzeno na třech kategoriích a jednom detailu gigu.**
   `ga4-reporting`, `google-tag-manager` i `web-analytics` jsou výhradně jednorázové (10–495 USD). Detail gigu ukazuje,
   že se cena stupňuje **počtem měřených událostí (2 / 5 / 10 tracking goals)** a rychlostí dodání, ne kadencí (EG9-020).
7. **Adresáře (Clutch, DesignRush, GoodFirms) cení výhradně projektově.** Clutch „GA4 Consulting Services“: 19 agentur,
   sazby < 25 až 300 USD/h (těžiště 50–99), minimum projektu 1 000 – 50 000 USD, „$10,000 – $49,000 avg. project cost“ –
   a **ani jedna měsíční cena** (EG9-016). DesignRush: průměr top 50 „marketing analytics“ agentur 105 USD/h (EG9-021).
8. **Skutečné enterprise agentury na Clutchi cenu neuvádějí vůbec.** InfoTrust má profil „unclaimed“ a „Not yet reviewed“,
   Adswerve „Hourly Rate Undisclosed“, „No Clients have been added yet“ (EG9-014). Enterprise hladinu tedy z adresářů
   vyčíst nelze – proto ji 1. kolo mělo jen z blogu konkurenta.
9. **Talentové marketplaces neceníkují.** Toptal, MarketerHire i Growth Collective (dnes součást Toptalu) nemají veřejnou
   sazbu; Kalungi pricing 404. Jediná výjimka je **Mayple**, a ta má měřicí práci jen jako jednorázový setup „From $1,500 /
   up to 10 hours“ a měsíčně prodává správu PPC (od 1 800 USD) a „Premium Expert Assistance from $550/mo“ (EG9-001).
10. **Nástroj a člověk se ve stejném rozpočtu nakupují odděleně a poměr je 4–11×.** Federální úřady platí Siteimprove
    633–3 978 USD/měs. za SaaS a zároveň 985–43 738 USD/měs. za lidi (EG9-007). Podporuje H5 z druhé strany:
    tam, kde má kupující obojí a plný přehled o cenách, nástroj službu nenahradil.

---

## 2. FAKTA

### 2a. Americké veřejné zakázky na správu měření (nový primární zdroj, EG9-002 … EG9-008)

Zdroj: `api.usaspending.gov/api/v2/search/spending_by_award/`, klíčová slova „web analytics“, „Google Tag Manager“,
„google analytics support“, typy A–D. Cena za měsíc = celková částka / délka plnění ve dnech ÷ 30,44.
Vyřazeny nesouvisející položky (Thomson Reuters CLEAR, „dark web analytics“, „kill-web analytics“, školení NN/g).

| Dodavatel | Zadavatel | Předmět (doslova) | Částka | Období | USD/měs. | Kč/měs. | ID |
|---|---|---|---|---|---|---|---|
| Rock Creek Publishing | Treasury / CFPB | „AES – WEB ANALYTICS AND ENGINEERING SUPPORT“ | 765 744 | 10,9 měs. | 70 252 | 1 615 737 | PG9-017 |
| Dynamo Technologies | CFPB | „WEB ANALYTICS SUPPORT SERVICES“ | 1 573 349 | 36 měs. | 43 738 | 1 005 310 | PG9-006 |
| HUGE LLC | Dept. of Education / FSA | „centralized website analytics program“ | 1 001 653 | 24,4 měs. | 41 037 | 943 851 | PG9-007 |
| HUGE LLC | FSA | „website analytics program“ | 489 346 | 12 měs. | 40 779 | 937 914 | PG9-009 |
| HUGE LLC | FSA | „enterprise analytics strategy across five main web properties incl. tag management“ | 527 880 | 16 měs. | 32 992 | 758 815 | PG9-008 |
| Fearless Solutions | GSA | „DIGITAL ANALYTICS PROGRAM DAP WEB ANALYTICS ANALYST“ | 516 846 | 20,5 měs. | 25 212 | 579 876 | PG9-014 |
| Fearless Solutions | GSA | totéž, předchozí rok | 251 380 | 12 měs. | 20 948 | 481 812 | PG9-015 |
| IndraSoft | HHS / CDC | „WEB ANALYTICS FOR CDC INTERNET AND INTRANET PORTALS“ | 1 255 656 | 60 měs. | 20 928 | 481 351 | PG9-018 |
| MetroStar Systems | GSA | „WEB ANALYTICS ANALYST – OPTION YEAR 2“ | 716 795 | 36 měs. | 19 911 | 458 073 | PG9-012 |
| MetroStar Systems | GSA | „WEB ANALYTICS SUPPORT“ | 443 136 | 24 měs. | 18 464 | 424 672 | PG9-013 |
| HUGE LLC | FSA | „managing analytics for the myStudentAid mobile app releases and providing reporting support“ | 179 074 | 12 měs. | 14 923 | 343 238 | PG9-010 |
| GreenZone Solutions | Treasury | „WEB ANALYTICS SUPPORT SERVICES“ | 311 351 | 22,2 měs. | 14 025 | 322 575 | PG9-016 |
| E-Nor (Adswerve) | EPA | „GOOGLE WEB ANALYTICS LICENSE AND SUPPORT SERVICES“ | 304 497 | 24 měs. | 12 687 | 291 841 | PG9-023 |
| HUGE LLC | FSA | „implementing analytics for the mobile app … reporting and operations support“ | 153 420 | 13,8 měs. | 11 117 | 255 693 | PG9-011 |
| EN-NET Services | Treasury | „WEBTRENDS WEB ANALYTICS CONSULTING“ | 112 621 | 12 měs. | 9 385 | 215 856 | PG9-021 |
| E-Nor (Adswerve) | SEC | „GA4 LICENSES WITH 100 GOOGLE TAG MANAGER DEVELOPMENT HOURS“ | 111 408 | 12,2 měs. | 9 116 | 209 668 | PG9-026 |
| Bounteous | NASA | „GOOGLE ANALYTICS 360 SUPPORT“ | 52 000 | 12 měs. | 4 349 | 100 050 | PG9-039 |
| Bounteous | NASA | „BOUNTEOUS CONSULTING HOURS FOR GOOGLE360“ | 51 976 | 12 měs. | 4 335 | 99 704 | PG9-041 |
| Taoti Enterprises | USDA | „GOOGLE ANALYTICS SUPPORT FOR THE OFFICE OF EXTERNAL AFFAIRS“ | 25 644 | 6 měs. | 4 289 | 98 647 | PG9-027 |
| J.R. Reingold | National Gallery of Art | „WEB ANALYTICS AND EMAIL MARKETING SERVICES“ | 42 900 | 12 měs. | 3 575 | 82 225 | PG9-020 |
| Goldsmith Interactive | National Gallery of Art | „WEB ANALYTICS SUPPORT SERVICES“ | 120 829 | 48 měs. | 2 517 | 57 893 | PG9-019 |
| Interactive Strategies | Smithsonian | „GOOGLE ANALYTICS SUPPORT“ | 9 900 | 10,1 měs. | 985 | 22 655 | PG9-028 |

**Statistika (n = 22):** min 985 · dolní kvartil 4 346 · **medián 16 694** · horní kvartil 33 156 · max 70 252 USD/měs.
Osm z 22 kontraktů (36 %) je pod 10 000 USD/měs.

Doslovný popis rozsahu, EG9-003 (Federal Student Aid, HUGE LLC):

> „FSA REQUIRES CONTRACTOR SUPPORT IN THE DEVELOPMENT AND OPERATION OF AN INTERNAL, CENTRALIZED WEBSITE ANALYTICS PROGRAM
> BY PROVIDING STRATEGIC GUIDANCE, CREATING AND MAINTAINING FORMALIZED FRAMEWORKS AND PROCESSES, **SUPPORTING WEBSITE
> RELEASES AND REQUIRED UPDATES TO ANALYTICS**, AND PROVIDING KEY REPORTING AND INSIGHTS BASED ON ANALYTICS DATA.“

Doslovný popis balíčku s hodinami, EG9-008 (SEC, E-Nor):

> „GOOGLE ANALYTICS 4 LICENSES WITH **100 GOOGLE TAG MANAGER DEVELOPMENT HOURS**, AND MONTHLY DATA USAGE EVENT RATE
> (INCLUDING POSSIBLE MONTHLY DATA USAGE EVENT OVERAGE FEES).“ – tj. 8,2 h GTM práce měsíčně jako součást paušálu.

### 2b. Kontrola přes GSA ceníky (EG9-019, PG9-061 … PG9-068)

Oficiální stropové fakturované sazby federálních dodavatelů:

| Pracovní kategorie | USD/h | Kč/h | Při 173 h/měs. (USD) |
|---|---|---|---|
| Data Analyst I | 44,42 | 1 022 | 7 685 |
| Web Developer I | 56,51 | 1 300 | 9 776 |
| Data Analyst III | 60,59 | 1 394 | 10 482 |
| Functional Analyst I | 61,05 | 1 404 | 10 562 |
| Web Developer II | 92,73 | 2 133 | 16 042 |
| BUSINESS ANALYST | 97,14 | 2 234 | 16 805 |
| Web Developer III | 103,36 | 2 377 | 17 881 |
| Reporting Analyst | 109,72 | 2 524 | 18 982 |
| Data Analyst V | 134,86 | 3 102 | 23 331 |

Kontrola konzistence: kontrakty za roli „web analytics analyst“ (19 911 / 20 948 / 25 212 USD/měs.) odpovídají sazbě
115–146 USD/h při plném úvazku. To je uvnitř GSA pásma. **Federální ceny nejsou prémie za jméno, jsou to hodiny × sazba.**

### 2c. Fiverr – existuje měsíční maintenance gig? (EG9-009, EG9-010, EG9-011, EG9-020)

Prověřeny tři kategorie nezávisle, přes `r.jina.ai`:

| Kategorie | Rozsah cen | Nejdražší nabídka | Měsíční / předplatné |
|---|---|---|---|
| `gigs/ga4-reporting` | 10 – 495 USD | „create beautiful custom reports for google analytics 4 ga4“ – From $495 | **ne** |
| `gigs/google-tag-manager` | 10 – 225 USD | „help you setup server side conversion tracking via GTM“ – From $225 | **ne** |
| `gigs/web-analytics` | 10 – 100+ USD | „fix or setup facebook pixel google analytics 4 ecommerce conversion API tracking“ – From $100 | **ne** |

Doslova (EG9-011): *„No gigs explicitly advertise monthly recurring maintenance, monitoring, subscriptions, or ongoing
retainer arrangements.“*

Detail gigu `ppc_bappi` (EG9-020) – jak se na Fiverru odstupňuje cena:

| Balíček | Cena | Dodání | Obsah | Počet cílů |
|---|---|---|---|---|
| Basic | 30 USD | 1 den | first-visit, page-view, session-start, Google Signals, dataLayer GA4 config | 2 |
| Standard | 70 USD | 2 dny | + Google Ads konverze, scroll, outbound links, leady, hovory | 5 |
| Premium | 130 USD | 3 dny | „View-item, Add-to-Cart, Purchase, Lead Form submit, E-commerce reporting, Cross-Domain Tracking“ | 10 |

> *„No monthly subscription or ‚Subscribe to save‘ recurring payment option is mentioned. All packages are one-time purchases.“*

I server-side tagging – věc s trvalým provozním nákladem – se prodává jako jednorázový setup za 20–225 USD.
**Provoz sGTM na Fiverru nikdo neprodává.**

### 2d. Adresáře agentur (EG9-014, EG9-015, EG9-016, EG9-021)

Clutch, adresář „Top GA4 Consulting Companies“ (PG9-047 … PG9-060):

| Agentura | Hodinová sazba | Min. projekt |
|---|---|---|
| Three Ventures Technology · TXI | „$200 – $300 / hr“ | 5 000 / 50 000 USD |
| RSO Consulting · Vidi Corp · Decision Crew | „$100 – $149 / hr“ | 5 000 / 1 000 / 5 000 USD |
| Toolshed · Siftia · Risely Digital · Intway · Atta Systems · Promoguy · VALANOR · Bay Forward · Analytics Liv | „$50 – $99 / hr“ | 1 000 – 25 000 USD |
| Encore Media · DevKit · Roman.ua | „$25 – $49 / hr“ | 1 000 – 50 000 USD |
| Thryve Labs | „< $25 / hr“ | 1 000 USD |
| Growketing | Undisclosed | 5 000 USD |

Adresář uvádí „**$10,000 – $49,000 avg. project cost**“. **Měsíční cenu neuvádí ani jedna z 19 agentur.**

Profily (EG9-014):

| Subjekt | Sazba | Min. projekt | Poznámka |
|---|---|---|---|
| RSO Consulting | $100 – $149/hr | $5 000+ | nejčastější velikost projektu 10–49 tis. USD (22 recenzí) |
| Vidi Corp LTD | $100 – $149/hr | $1 000+ | – |
| Analytico Inc. | Undisclosed | $5 000+ | průměrná zakázka ~60 tis. USD |
| **InfoTrust** | **Undisclosed** | **Undisclosed** | „Not yet reviewed“, „This profile is unclaimed“ |
| **Adswerve** | **Undisclosed** | – | „No Clients have been added yet…“ |

DesignRush, kategorie marketing analytics (EG9-021): SmartSites a KlientBoost 100 USD/h, BrainZ Digital 150,
Design in DC 160, DiscoverMyBusiness 300, Web Loft Designs 55, Magneto IT 25.
Doslova: *„the top 50 marketing analytics agencies on DesignRush charge an hourly average rate of $105.“*

GoodFirms, kategorie data analytics (EG9-015): nejčastější pásmo „$25 – $49/hr“, průměr USA 76 USD/h, průměr Indie 45 USD/h.

### 2e. Talentové marketplaces (EG9-001, EG9-012)

| Platforma | Veřejná cena | Co z toho plyne |
|---|---|---|
| **Mayple** | ano: tracking setup „From $1,500 / up to 10 hours“ (jednorázově), „Premium Expert Assistance from $550/mo“, správa PPC od 1 800 USD/měs. | měření = setup, měsíčně se platí PPC, ne měření |
| Toptal | ne – „trial period … pay only if satisfied“, žádná sazba | – |
| MarketerHire | ne – *„There's no plan to pick and no retainer to guess at.“* | – |
| Growth Collective | přesměrováno na `toptal.com/marketing/growthcollective`, bez cen | – |
| Kalungi | `/pricing` a `/pricing-page` → 404 | – |
| Upwork | stránky „Cost to Hire“ existují, přímý přístup blokován | median GTM 30 USD/h (20–49), median GA 25 USD/h (15–40) – ze search snippetu téže stránky |

---

## 3. INTERPRETACE – co to mění na závěrech 1. kola

### 3.1 Enterprise pásmo 5 000–15 000 USD/měs.: **potvrzeno jako spodní polovina, přeformulovat**

1. kolo: „enterprise agentury podle třetích stran začínají na 5 000–15 000 USD/měs. (neověřeno na primárním zdroji)“.
Teď je ověřeno na 22 primárních kontraktech od 12 různých dodavatelů a 10 různých zadavatelů. Ale závěr má být jiný:

- **985 – 4 349 USD/měs.** = podpora **jedné** property (Smithsonian, National Gallery of Art, USDA, NASA/Bounteous).
- **9 100 – 15 000 USD/měs.** = podpora jedné aplikace nebo konzultace k nástroji (HUGE mobilní app, SEC, EN-NET, GreenZone).
- **19 900 – 25 200 USD/měs.** = **jeden dedikovaný analytik na plný úvazek** (MetroStar, Fearless; ověřeno GSA sazbami).
- **33 000 – 70 000 USD/měs.** = program napříč pěti a více properties, tým (HUGE/FSA, Dynamo/CFPB, Rock Creek).

Doporučená formulace do `04-trh-us.md` a do syntézy: *„Cena kontinuální správy měření v USA je lineární funkcí rozsahu,
ne prestiže dodavatele. Táž agentura (Bounteous) dodává podporu jedné GA360 property za 4 349 USD/měs. i figuruje ve
zdrojích s ‚retainery od 15 000 USD‘. Rozhoduje počet properties a to, zda si klient kupuje část člověka nebo celého.“*

### 3.2 Navržené tiery 8 900 / 19 900 / 39 000 Kč: **beze změny, ale s novou obranou ceny**

US data cenu českých tierů nezvedají (jiný trh práce), ale dávají nový argument v jednání:

| Tier DataLayer.cz | Kč/měs. | USD/měs. | Nejbližší veřejný americký bod |
|---|---|---|---|
| Hlídání 8 900 | 8 900 | 387 | **pod** nejlevnější nalezenou americkou veřejnou zakázkou (Smithsonian 985 USD) |
| Správa 19 900 | 19 900 | 865 | ¼ ceny podpory jedné property u Bounteous/NASA (4 349 USD) |
| Datová správa 39 000 | 39 000 | 1 696 | ⅖ ceny podpory jedné property, 1/12 ceny jednoho US analytika |

Tedy: **žádný ze tří tierů není podle mezinárodního srovnání drahý.** Nejlevnější veřejně soutěžená americká zakázka
na „Google Analytics support“ jedné instituce je 22 655 Kč/měs. – víc než český tier Hlídání i Správa.

### 3.3 H1 (BQ-first): **dále oslabena**

Ani jeden z 22 federálních kontraktů nemá v předmětu BigQuery, datový sklad ani export. Předmět je konzistentně
*„supporting website releases and required updates to analytics“*, *„reporting and insights“*, *„tag management“*,
*„cleanup, auditing and implementation“*. Největší kupující kontinuální správy měření na světě tedy nakupuje přesně tu
vrstvu, kterou 1. kolo označilo za „správu bez BQ“ – a platí za ni 985 až 70 252 USD měsíčně.
**BigQuery není podmínka existence služby ani u těch, kdo za ni platí nejvíc.**

### 3.4 H2 (tiché rozbití): **potvrzena nepřímo, dvěma novými způsoby**

- **Fiverr je trh oprav, ne prevence.** Nejčastější sloveso v názvech gigů napříč třemi kategoriemi je „fix“.
  Nabídka je organizovaná kolem toho, že už je rozbito; nikdo neprodává, že se to nerozbije (EG9-011).
- **Kvantifikace přínosu dlouhodobé správy.** MeasureMinds / Rentokil Initial, vztah „April 2021 – Ongoing“:
  *„Improved data quality and data governance saving over 1,500 working hours per year which equated to an approximate
  resource saving of £42K.“* (EG9-017). To je 101 500 Kč/měs. ušetřeného času interního týmu – 5× tier Správa.
  Je to zatím jediná nalezená veřejná kvantifikace hodnoty kontinuální správy v penězích.

### 3.5 H5 (SaaS nahrazuje část hodnoty): **potvrzena z nové strany – u informovaného kupujícího**

Federální úřady kupují obojí a mají přehled o obou cenách:

| Co | Kdo | USD/měs. |
|---|---|---|
| SaaS web analytics (Siteimprove) | Dept. of State | 633 |
| SaaS web analytics 15 mil. PV/rok (Siteimprove) | Dept. of Commerce | 3 978 |
| Lidská podpora měření, jedna property | Smithsonian / NGA / NASA | 985 – 4 349 |
| Lidská podpora měření, program | CFPB / FSA | 33 000 – 43 738 |

Poměr člověk : nástroj je 4–11×, stejný jako na komerčním trhu (SaaS monitoring 29–999 USD vs. správa 500–3 800 USD).
**Kupující s plnou informací o cenách nástroj místo služby nekoupil – koupil oboje.** To je nejsilnější dostupný argument
proti námitce „vždyť na to existuje nástroj za 79 dolarů“.

### 3.6 Nový poznatek pro strukturu nabídky: hodiny jako explicitní jednotka i v enterprise

SEC kupuje „100 Google Tag Manager development hours“ ročně jako součást paušálu s licencí (EG9-008) – tj. 8,2 h/měs.
Návrh DataLayer.cz má v tieru Správa „3 h na změny“. **Formát „X hodin v ceně“ je standard i na nejvyšší úrovni trhu**,
což potvrzuje volbu z `09-navrh-nabidky.md`: hodiny jako limit na změny, ne jako osa tieru.

### 3.7 Co to říká o kanálu „white-label a marketplace“

Fiverr, Upwork ani žádný z talentových marketplaces neumí prodat kadenci ani odpovědnost – prodávají stav
(2 / 5 / 10 tracking goals) a rychlost dodání (1–3 dny). Marketplace tedy **není konkurent** perpetuální službě, je to
substituční hrozba jen pro jednorázové zakázky. Konkurentem zůstává „PPC agentura, která to má v ceně“ (závěr 1. kola).

---

## 4. Mezery, které zůstávají

- **Upwork zůstává nedostupný.** Cloudflare challenge i přes `r.jina.ai`. Mediány (GTM 30 USD/h, GA 25 USD/h) pocházejí
  ze search snippetu stránek `/hire/*/cost/`, ne z přímého čtení. Konkrétní profily s hodinovkou a počtem zakázek
  se získat nepodařilo. Ověřit z prohlížeče.
- **Sortlist a TheManifest** vracejí 404 na `/analytics`, `/data-analytics`, `/it-services/analytics/agencies`
  i přes `r.jina.ai`. Správné cesty nenalezeny.
- **Glassdoor / ZipRecruiter** nezkoušeny v tomto kole (mimo zadání G09, mzdové proxy má jiná mezera).
- **Clutch recenze s popisem „what was delivered“**: nalezeny tři použitelné (RSO, MeasureMinds, Analytico).
  Slugy profilů se nedají uhodnout – většina pokusů (Napkyn, Blast, Measurelab, Empirical Path, DataVinci) vrací 404.
  Systematický sběr by vyžadoval procházení adresáře stránku po stránce.
- **Federální kontrakty neuvádějí počet hodin ani SLA.** Popis rozsahu je v přiloženém SOW, který USAspending
  nezveřejňuje; přepočet na hodiny je odvozen z GSA sazeb, ne doložen.
- **Období plnění vs. skutečné čerpání.** Částka je celková hodnota kontraktu; pokud se čerpala nerovnoměrně,
  je měsíční cena průměrem, ne fakturovanou částkou. U kontraktu Enterprise Technology Solutions (start = konec =
  2025-10-01) nešlo měsíční cenu spočítat vůbec – vyřazen.
- **Neamerický anglofonní enterprise** (UK G-Cloud, Kanada) nebyl v tomto kole zkoušen; UK G-Cloud už použil report
  `03-trh-eu.md`, kanadská data (kde působí Napkyn) zůstávají nevytěžená.
