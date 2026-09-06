# K05 – Analýza přežití: kdo to zkusil a přestal

Třetí kolo, priorita C5. Datum přístupu u všech zdrojů: **2026-09-06**.
Metoda: Wayback CDX API (`collapse=timestamp:6` a `matchType=domain`) na 46 subjektů z reportů `01-trh-cz.md`
a `03-trh-eu.md`, doslovné čtení archivních řezů 2015 / 2019 / 2022 / 2023 / 2026, kontrola živých domén
(`curl -L`), ARES (rejstřík ekonomických subjektů), Reddit přes `arctic-shift.photon-reddit.com`.
Data: `data/fragments/r3-k05-evidence.csv` (36 řádků, `EK5-001`…`EK5-036`, `phase=12`),
`data/fragments/r3-k05-pain.csv` (4 řádky, `NK5-001`…`NK5-004`).

---

## 1. Shrnutí

1. **Prázdná pozice je příležitost, ne hřbitov – ale je to příležitost v kategorii, která se teprve rodí:
   nenašel se ani jeden subjekt, který by publikoval měsíční cenu za správu měření a pak ji zrušil,
   zatímco osm subjektů z korpusu zaniklo jako celé firmy (většinou akvizicí nebo opuštěním domény)
   a naprostá většina evropských cenových stránek, ze kterých kolo 2 počítá mediány, je stará 0–2 roky.**
2. **Nejčastější důvod, proč to lidé ruší, je neviditelnost, ne cena.** Dvě nezávislé výpovědi dodavatelů:
   „*a working retainer is invisible […] Its best case is silence*“ (`EK5-013`) a „*the most common reason our
   engagements come to an end is our clients feel they're fully-equipped to go it alone*“ (`EK5-003`).
   Ani jedna nemluví o ceně ani o kvalitě.
3. **Jediná česká veřejná cena je stará 11 let a nominálně zamrzlá.** RobertNemec.com měl 12. 6. 2015
   „*8 750 / 17 500 / 31 200 Kč*“ a 9. 6. 2026 má „*9 250 / 18 500 / 31 200 Kč*“ – horní hodnota se od roku 2015
   nepohnula ani o korunu (`EK5-018`, `EK5-019`).
4. **To je zároveň nejtvrdší rána tieru 39 000 Kč.** Jediná česká stropová kotva se za jedenáct let inflace
   nezvedla z 31 200 Kč; navrhovaných 39 000 Kč je o 25 % výš než strop, který trh nezvedl.
5. **Zanikly firmy, ne produkty.** Analytics Pros (2008–2024, dnes Adswerve), Empirical Path (2008–2024),
   Data to Value (2013–2024), Analytics Heroes (2 řezy v roce 2024), Tagmate (2023–2024, doména dnes hostuje
   kasinový web), Adexpres → dentsu 2016, Bidding Tools → Conviu 2024, Digital Visions bez DNS.
   Ani u jednoho z nich není doloženo, že by příčinou bylo zrušení paušálu za správu měření.
6. **A u velkých amerických je akvizice doložený strukturální jev, ne selhání:** „*retainers can get bundled
   with access to enterprise-tier software (which is probably a big reason why GA360 Resellers, including mine,
   tend to get acquired.)*“ (`EK5-026`). Tím se mění výklad `EG8-009` z 2. kola.
7. **Kdo vytrval:** Measurelab (UK) uvádí spolupráci „*10+ year partnership*“ na „*tag maintenance, consent
   management and ongoing reporting*“ (`EK5-004`); Verified Data prodává audit a monitoring GA nepřetržitě
   od října 2019 (`EK5-028`); DASE (SK) osm let (`EK5-030`); LEMONTEC „Sorglos-Paket“ 2 roky 9 měsíců,
   přežilo i rebranding firmy (`EK5-029`).
8. **Trend s cenou jde v Evropě proti sobě.** Measurelab měl v prosinci 2023 tři veřejné měsíční ceny
   (1 500 / 4 375 / 6 250 GBP) a v roce 2026 na téže službě **žádnou** (`EK5-001`, `EK5-002`);
   LEMONTEC naopak cenu 199 €/měs mezi 2023 a 2026 **přidal** (`EK5-029`).
9. **Poptávka: protievidence z 2. kola už není bez protiváhy.** Poradce analytických agentur píše 6. 8. 2026:
   „*basically everyone struggles with the same thing: we need more retainers*“ a jako první příklad
   životaschopného jádra paušálu jmenuje doslova „*data quality monitoring to ensure the checkout's always being
   tracked*“ (`EK5-024`, `EK5-025`). Praktik z r/agency uvádí u analytických agentur jako normu poměr
   40 % projekty / 60 % paušály (`EK5-016`).
10. **Zbývá jediná skutečná díra: v ČR a na SK není o churnu ani jedna výpověď.** Všechny nalezené výpovědi
    o zrušení jsou anglofonní a **od dodavatelů**, ne od klientů.

---

## 2. FAKTA

### 2.1 Časová osa 30 subjektů (Wayback CDX, 6. 9. 2026)

„První řez“ = nejstarší archivní záznam dané URL; u zaniklých subjektů „poslední řez“ = poslední záznam.

| # | Subjekt (země) | Sledovaná URL | První řez | Poslední řez | Stav 2026 | Evidence |
|---|---|---|---|---|---|---|
| 1 | RobertNemec.com (CZ) | `/umime/digitalni-analytika/webova-analytika/` | 2014-06 | 2026-06 | **žije, cena beze změny od 2017** | EK5-018/019 |
| 2 | Optimics (CZ) | `/digitalni-analytika/` | 2019-08 | 2022-06 | stránka zmizela, firma žije na `optimics.com` | EK5-020 |
| 3 | Taste (CZ) | `taste.cz` | 2007-10 | 2026-08 | žije | – |
| 4 | Digitální architekti (CZ) | `/spravujeme-gtm-…/` | 2024-05 | 2026-04 | žije, stránka nová | EK5-031 |
| 5 | Advisio DataPlus (CZ) | `dataplus.advisio.cz` | 2024-11 | 2026-05 | žije, produkt nový | EK5-031 |
| 6 | MarketingPPC (CZ) | `/sluzby/ga4/` | 2024-04 | 2026-02 | žije, stránka nová | EK5-031 |
| 7 | per4mens (CZ) | `/pro-klienty/` | 2022-10 | 2025-10 | žije | – |
| 8 | Marketing Makers (CZ) | `/cenik-a-kapacity/` | 2022-07 | 2025-01 | žije | – |
| 9 | dataras.cz (CZ) | `dataras.cz` | 2021-10 | 2026-03 | žije | – |
| 10 | Signals Bar (CZ) | `/produkty/signals-bar` | **0 řezů** | – | produkt na 19 let staré doméně, nikdy nearchivován | EK5-031 |
| 11 | Data Sailor / Trackless / Growtix (CZ) | kořeny domén | **0 řezů** | – | nikdy nearchivováno | EK5-031 |
| 12 | Shopstato (CZ) | `shopstato.cz` | 2024-03 | 2026-05 | žije, nové | – |
| 13 | Waaila / Cross Masters (CZ) | `/en/pricing/` | 2021-01 | 2025-06 | žije | – |
| 14 | Digital Visions (CZ) | `digitalvisions.cz` | **0 řezů** | – | **bez DNS = zaniklo** | EK5-011 |
| 15 | Adexpres (CZ) | `adexpres.cz` | 2013-07 | 2024-10 | **→ `dentsu.com`** (akvizice 2016) | EK5-011 |
| 16 | Bidding Tools (CZ) | `biddingtools.cz` | 2015-07 | 2024-11 | **→ `conviu.cz`** (pohlceno) | EK5-011 |
| 17 | DASE (SK) | `/sk/` | 2018-09 | 2026-06 | žije, 8 let, bez ceníkového paušálu | EK5-030 |
| 18 | Starbomedia (SK) | `/cennik` | **0 řezů** | – | ceník nikdy nearchivován | EK5-031 |
| 19 | seoporadca.sk / TechWeb.sk | produktové URL | 2026-06 | 2026-06 | jediný řez = nové | EK5-031 |
| 20 | KlickImpuls → LEMONTEC (AT) | `/tracking/ga4-gtm-sorglos-paket/` | **2023-12** | 2026-05 | žije, cena 199 € **přidána** po 2023 | EK5-029 |
| 21 | Measurelab (UK) | `/services/analytics-support/` → `/solutions/managed-analytics/` | 2023-12 | 2026-04 | žije, **cena z webu zmizela** | EK5-001/002 |
| 22 | ADS-Tracking.de (DE) | `/dienstleistungen/` (2022) vs. `/preise` | 2022-10 | – | `/preise` **0 řezů** = ceník je nový | EK5-012 |
| 23 | Amplio Data (ES) | `ampliodata.io` | **2024-11** | 2026-01 | žije, firma stará ~22 měsíců | EK5-032 |
| 24 | ePoint (ES) / Webanalist (NL) / Manids (DK) | produktové URL | 2026-03 až 2026-06 | – | jediné řezy = nové | EK5-031 |
| 25 | YAG (ES), Blagoweb (IT), Gipfelwerk (CH), NiceLookingData (SE) | produktové URL | **0 řezů** | – | nikdy nearchivováno | EK5-031 |
| 26 | GA4Dataform (NL) | `/pricing` | 2025-01 | 2026-05 | žije, nové | EK5-031 |
| 27 | Verified Data (NL) | `/pricing` | **2019-10** | 2026-05 | **žije 7 let**, dnes s FREE tierem | EK5-028 |
| 28 | Analytics Pros (US) | `analyticspros.com` | 2008-03 | 2024-10 | **zaniklo → Adswerve** | EK5-005/006 |
| 29 | Empirical Path (US) | `empiricalpath.com` | 2008-07 | 2024-06 | **zaniklo** (2024 už jen 301, dnes nic) | EK5-010 |
| 30 | Data to Value (GB) | `datatovalue.co.uk` | 2013-07 | 2024-08 | **zaniklo** (bez DNS) | EK5-009 |
| 31 | Analytics Heroes | `analyticsheroes.com` | 2024-08 | 2024-09 | **zaniklo** (celkem 2 řezy) | EK5-033 |
| 32 | Tagmate | `/pricing` | 2023-02 | 2024-10 | **zaniklo**, doména = kasinový web | EK5-007/008 |
| 33 | InfoTrust (US) | `infotrust.com` | 1996-12 | 2026-07 | žije 30 let | – |
| 34 | Blast Analytics (US) | `blastanalytics.com` | 2020-01 | 2026-07 | žije | – |
| 35 | Napkyn (CA/US) | `/services/analyst-program` | 2024-07 | – | žije, cena na dotaz | EK5-034 |

**Součet:** 8 doložených zániků, 0 doložených zrušených cenových produktů „správa měření“, 10 produktových
stránek s **nulovou** archivní historií a 12 subjektů s prvním řezem v letech 2024–2026.

### 2.2 Jediná česká cena v čase – a nehýbe se

| Datum řezu | Hodinovka | Měsíční práce na webové analytice |
|---|---|---|
| 12. 6. 2015 | 1 750 Kč/h | **od 8 750 Kč**, „nejběžnější“ 17 500 a 31 200 Kč |
| 31. 5. 2017 | 1 850 Kč/h | **od 9 250 Kč**, „nejběžnější“ 18 500 a 31 200 Kč |
| 23. 5. 2022 | 1 850 Kč/h | **od 9 250 Kč**, „nejběžnější“ 18 500 a 31 200 Kč |
| 9. 6. 2026 | 1 850 Kč/h | **od 9 250 Kč**, „nejběžnější“ 18 500 a 31 200 Kč |

Doslovně (2026, `EK5-019`): *„Měsíční práce na webové analytice (tak, aby měla smysl) začínají na 9 250 Kč,
nejběžnější cena je 18 500 Kč a 31 200 Kč.“* Stejná věta je na stránce v roce 2017 i 2022.
Za stejnou dobu vzrostly agenturní sazby (AKA 2018 → 2026 u datového analytika **+38 %**, 2. kolo).

### 2.3 Measurelab: produkt vydržel, cena zmizela

| | prosinec 2023 (`EK5-001`) | duben 2026 (`EK5-002`) |
|---|---|---|
| Název | Services → **Analytics support** | Solutions → **Managed services** |
| Ceny na stránce | Helpdesk **od £1 500/měs** (43 500 Kč), Consultative **od £4 375** (126 875 Kč), Specialist **od £6 250** (181 250 Kč) | **žádná** |
| Obsah | „talent on tap“, kredity = hodiny, rychlá reakce | + tracking health monitoring a **breakage detection**, pipeline observability, SLA na tag management, klientský portál |
| Sdělení | dostupnost expertízy | *„Tracking drifts when consent requirements change […] nobody raises the alarm until the damage is done“* |
| Reference | – | *„10+ year partnership“* (CIPD), *„5-year partnership“*, CalMac, BFI, Smyths Toys |

Poměr tierů 2023: **1 : 2,9 : 4,2**. (Návrh DataLayeru má 1 : 2,24 : 4,38 – strukturálně stejný tvar,
tedy skok 8 900 → 19 900 není v této kategorii anomálie, jak naznačovala kritika K5 v 2. kole.)

### 2.4 Proč to lidé ruší – tři doložené mechanismy

**(A) Fungující paušál je neviditelný** – r/agency, 16. 8. 2026 (`EK5-013`, `NK5-003`):

> „*The bit I'd add — and it took losing one to see it — is that the hard part isn't the agility. It's that a
> working retainer is invisible. A project has an artefact. You hand over the dashboard and everyone can see what
> they bought. A retainer that's going well looks like nothing happening: pipelines don't break, numbers stay
> right, nobody gets paged. Six months in, the client isn't weighing your invoice against the work — they're
> weighing it against the last time they visibly got something. […] Its best case is silence. So it's both the
> easiest thing to justify technically and the first line item questioned in a budget review.*“

Recept z téhož zdroje (`EK5-014`):

> „*the retainers that survive seem to be the ones where something lands in the client's inbox every month that
> they'd otherwise have had to ask for. Not a report nobody reads — something that answers the question they were
> about to ask anyway.*“

**(B) Klient nabude dojmu, že už si vystačí sám** – Measurelab FAQ, prosinec 2023 (`EK5-003`, `NK5-004`):

> „*It may sound odd that we try to make ourselves redundant, but that's our goal. […] As a result, the most
> common reason our engagements come to an end is our clients feel they're fully-equipped to go it alone.*“

**(C) Neomezený rozsah vyžere dodavatele** – r/agency, 30. 9. 2025 (`EK5-035`):

> „*This month alone, I've spoken to 3 founders who all made the same mistake: they promised unlimited support.
> […] The client simply pulled out the contract and pointed to one word: unlimited.*“ Doporučení: fair-use strop
> („*Includes up to 10 tickets per month. Additional support billed at $100 per hour.*“).

A poznámka k pojmenování (`EK5-036`): „*I stopped offering any kind of 'support' language in my contracts […]
When you sell support, you're basically inviting clients to treat you like customer service.*“

### 2.5 Opačný směr – kdo vytrval a co o tom říká

| Subjekt | Jak dlouho prodává průběžnou práci na měření | Doklad |
|---|---|---|
| RobertNemec.com (CZ) | **11 let** (cenový žebřík od 6/2015) | `EK5-018`, `EK5-019` |
| Measurelab (UK) | klientský vztah **10+ let**, produktová stránka od 12/2023 | `EK5-004`, `EK5-001` |
| Verified Data (NL) | **7 let** (audit + Monitor & Alert od 10/2019) | `EK5-028` |
| DASE (SK) | **8 let** existence, ale bez ceníkového paušálu na webu | `EK5-030` |
| LEMONTEC / KlickImpuls (AT) | **2 roky 9 měsíců**, produkt přežil rebranding, cena přidána | `EK5-029` |
| Napkyn (CA/US) | „Analyst Program“ + vlastní helpdesk od 2023, cena na dotaz | `EK5-034` |
| Analytics Pros (US) | **„Monthly retainers“ v ceníku už v roce 2012** | `EK5-005` |

Analytics Pros, 2012 (`EK5-005`): *„Ongoing reporting and ad-hoc analysis – **Monthly retainers**“* vedle
*„Tactical help addressing specific, known issues – 10-hour and 20-hour blocks“*. Model je nejméně 14 let starý.

### 2.6 Poptávka – co k ní přibylo (obě strany)

**Pro:**

- Damion Brown, *The Business of Analytics*, 6. 8. 2026 (`EK5-024`, `EK5-025`): *„regardless of company size,
  location, specialisation, leadership, basically everyone struggles with the same thing: we need more retainers“*
  a *„Your retainer offering needs to start out with a bedrock of things that the client needs. Maybe it's
  **data quality monitoring to ensure the checkout's always being tracked**“*. Zároveň vylučuje tři věci:
  *„Reporting and dashboards are not a retainer offering; doing any and every single thing they ask you to is not
  a retainer offering; and access to you and your team via a shared Slack channel isn't really a retainer
  offering either.“*
- r/agency, praktik v analytice od 2012 (`EK5-015`, `EK5-016`): u analytických agentur je normou **40 % projekty
  / 60 % paušály**; z 30–35 projektů ročně přejde do paušálu jen 4–5, a příčinu klade na stranu nabídky:
  *„All too often the problem here is that it's the retainer offering from the agency isn't good enough.“*
- r/GoogleTagManager, majitel tracking agentury (`EK5-021`): *„I landed multiple 6 fig with my tracking agency by
  offering retainer to performance marketing agencies and such.“*
- r/GoogleTagManager, analytická agentura (`EK5-023`): *„for many PPC and performance agencies it doesn't make
  commercial sense to employ someone full-time […] That's where freelancers and specialist white-label partners
  tend to fit. The agency keeps the client relationship and we handle the technical measurement work behind the
  scenes.“*

**Proti:**

- r/GoogleTagManager, PPC agentura (`EK5-022`, `NK5-001`): *„It's soo essential part of the PPC service, we handle
  it in-house. Also, there is always some kind of 'issue', client updated something and it breaks, so it's not
  like you set up the tracking and it's working till the end of times.“* – potvrzuje pain **a zároveň** je to
  hlavní námitka proti white-label kanálu.
- r/agency, majitel datové agentury s ověřeným flairem (`EK5-017`): *„We dont offer retainers at all. I find they
  are such a clunky fit for analytics which is meant to be agile.“* Fakturuje odpracované hodiny zpětně –
  a v témže vlákně si stěžuje, že mu nepředvídatelný příjem zhatil plán na nábor.
- DASE (SK, `EK5-030`) po osmi letech stále nemá v navigaci položku „kontinuálna správa“ s cenou; posunula se
  k **online kurzům**.

---

## 3. INTERPRETACE – co to mění na závěrech verze 2

### 3.1 Hlavní otázka: příležitost, nebo hřbitov?

**Příležitost – ale s jinou příčinou prázdnoty, než verze 2 předpokládala.** Hypotéza „hřbitov“ předpovídá,
že najdeme zrušené produkty. Nenašel se **ani jeden**: žádný subjekt neměl publikovanou měsíční cenu za správu
měření a pak ji nestáhl. Zánik osmi subjektů má jinou příčinu (akvizice, opuštění domény, absorbce do platformy),
a u velkých amerických je akvizice doložena jako **strukturální jev spojený s paušálem, ne s jeho selháním**
(`EK5-026`). Pozice je prázdná především proto, že kategorie **vznikla teprve nedávno**: 12 z 35 sledovaných
subjektů má první archivní řez v letech 2024–2026 a 10 produktových stránek nemá ve Waybacku žádný záznam.

Slabina tohoto verdiktu: čerstvá kategorie znamená, že **žádná z těch cen zatím neprošla zkouškou času**.
Za dva roky mohou být tytéž stránky pryč a rešerše by to nepoznala.

### 3.2 Cenová pásma

| Pásmo | Co se mění | Proč |
|---|---|---|
| **8 900 Kč** | **potvrzeno jako řád, ale je to cena z roku 2015** | Jediná česká vstupní kotva byla 8 750 Kč v roce 2015 a 9 250 Kč od roku 2017 (`EK5-018/019`). 8 900 Kč v roce 2026 je fakticky česká vstupní úroveň z doby před jedenácti lety. Nově navíc víme, že evropské body pod 8 900 Kč (`ePoint`, `Webanalist`, `YAG`, `ADS-Tracking`) jsou z drtivé většiny 0–2 roky staré nebo ve Waybacku vůbec nejsou – argument „osm subjektů je levnějších“ z 2. kola stojí na velmi mladém vzorku. |
| **19 900 Kč** | **posílilo** | Česká střední hodnota je 18 500 Kč nepřetržitě od roku 2017 (`EK5-019`) – tedy stabilní, ne momentka. 19 900 Kč je 7,6 % nad ní. Navíc poměr tierů u Measurelabu 2023 byl 1 : 2,9 : 4,2 (`EK5-001`), takže skok 8 900 → 19 900 (2,24×) není v této kategorii nijak divoký; kritika K5 z 2. kola („trh dělá 1,6–1,8×“) vycházela ze dvou mladých subjektů. |
| **39 000 Kč** | **oslabilo, a to výrazně** | Jediná česká stropová kotva je **31 200 Kč a nezvedla se od roku 2015** (`EK5-018/019`). Evropská opora tieru 3 (Amplio 45 000 Kč) pochází z firmy, jejíž doména má první archivní řez 19. 11. 2024 – nejvýš 22 měsíců (`EK5-032`). Druhá evropská opora (ADS-Tracking Max 32 475 Kč) je z ceníku, který ve Waybacku **neexistuje** (`EK5-012`). Tier 3 tedy nemá ani jednu oporu starší dvou let, zatímco doložený český strop je jedenáct let nehybný. |
| **Publikovat ceny vůbec** | **nová námitka** | Measurelab měl tři veřejné měsíční ceny v roce 2023 a v roce 2026 už žádnou (`EK5-001/002`); Napkyn má cenu na dotaz (`EK5-034`); Optimics má tři úrovně bez ceny (`EK5-020`). Opačný směr šel jen LEMONTEC (`EK5-029`). Publikace tří cen je v této kategorii menšinový tah – je to rozhodnutí s doloženým rizikem, ne standard. |

### 3.3 Otevřená otázka „existuje poptávka?“

**Zůstává otevřená, ale rovnováha důkazů se posunula z „protievidence bez protiváhy“ na „dva doložené tábory“.**
Verze 2 stavěla na jedné americké citaci („*this is not something you can sell on a retainer*“) a na 0 z 53
českých poptávek. K tomu teď stojí čtyři nezávislé prvoruké výroky pro (`EK5-015`, `EK5-016`, `EK5-021`,
`EK5-024`) a dva proti (`EK5-017`, `EK5-022`). Podstatnější než skóre je **shoda obou táborů na příčině**:
kde paušál nefunguje, nefunguje kvůli nabídce a její viditelnosti, ne kvůli neexistující potřebě.
Věta „*All too often the problem here is that it's the retainer offering from the agency isn't good enough*“
(`EK5-015`) a věta o neviditelnosti (`EK5-013`) říkají totéž z opačných stran.

**Co z toho plyne pro produkt (ne pro cenu):**

1. **Povinný měsíční artefakt přestává být „nice to have“ a stává se podmínkou přežití smlouvy.** Ale musí splnit
   testovací kritérium z `EK5-014`: *něco, co by si klient jinak musel vyžádat, a co odpovídá na otázku, kterou se
   stejně chystal položit.* Měsíční jednostránkový komentář v návrhu verze 2 tomu vyhovuje jen tehdy, když
   obsahuje čísla, ke kterým se klient sám nedostane (srovnání s backendem, prahy, changelog dopadů).
2. **Vstupní věta „úspěch je ticho“ je prodejní past.** Přesně to je podle `EK5-013` důvod, proč se položka škrtne
   při revizi rozpočtu. Nabídka musí ticho **zviditelnit** – vykázat, co se hlídalo a co se nestalo.
3. **Doplnit fair-use strop.** `EK5-035` popisuje druhý mechanismus zániku: neomezená podpora se nedá zpětně
   omezit. Tier 1 v návrhu verze 2 obsahuje „triáž alertů“ a ad-hoc dotazy bez stropu.
4. **White-label kanál (validační krok A2 / K13) má nově obě strany doložené.** Pro: `EK5-021`, `EK5-023`.
   Proti: `EK5-022` – PPC agentura si měření drží in-house právě proto, že je „so essential part of the PPC
   service“. Pilot musí odpovědět na tuto konkrétní námitku, ne na obecnou ochotu.
5. **Druhé rameno cenového testu má vzor:** „bucket of hours“ jako ústupová varianta vedle paušálu jako
   „gold standard“ (`EK5-027`), plus doložený třetí model – hodiny fakturované zpětně (`EK5-017`).

### 3.4 Co je nutné přepsat v existujících závěrech

| Kde | Tvrzení verze 2 | Nová formulace |
|---|---|---|
| `02` Otázka 6 | „Agentura Analytics Pros to zkusila a skončila prodejem reklamní agentuře“ jako důkaz, že se to neuživí | Analytics Pros prodávali „Monthly retainers“ už v roce 2012 (`EK5-005`) a značka žila do roku 2024. Akvizice GA360 resellerů je doložený strukturální jev vázaný **na existenci paušálu**, ne na jeho selhání (`EK5-026`). Důkaz vyřadit z argumentace „neuživí se“. |
| `08` tier 3 | „Cena zůstává, odvození neobstojí“ | Doplnit: jediná česká stropová kotva 31 200 Kč se **11 let nezvedla**, a obě evropské opory tieru 3 jsou mladší dvou let. Tier 3 držet buď jako cenu na dotaz, nebo ho obhájit rozsahem, který v ČR nikdo nenabízí. |
| `08` § 2.1 / K2 | „Česká pásma nikdy nestála na českých datech“ | Zpřesnit: stojí na jednom subjektu, **ale ten subjekt tu cenu drží nepřetržitě jedenáct let** – to je jiná kvalita důkazu než momentka. Zároveň je to důkaz o **stagnaci** ochoty platit. |
| `09` § 4 | Argumentace vstupního tieru proti Signals Bar (2 500 Kč) a ga4monitor (667 Kč) | Doplnit: obě tyto kotvy jsou velmi mladé – Signals Bar ani ga4monitor.com nemají ve Waybacku jediný řez (`EK5-031`). Zato Verified Data prodává totéž **od roku 2019 a dnes s bezplatným tierem** (`EK5-028`) – to je tvrdší kotva a znamená, že dno detekce je nula, ne 667 Kč. |
| `10` § 4.1 H5 | „Tagmate neexistuje, důkaz stojí na čtyřech případech“ | Uzavřít datem: `/pricing` archivováno 2/2023–10/2024, doména dnes hostuje kasinový web (`EK5-007`, `EK5-008`). Životnost produktu ≈ 2 roky. |

---

## 4. MEZERY, které zůstávají

1. **V ČR a na SK není o churnu ani jedna výpověď.** Všechny čtyři doložené výroky o zrušení jsou anglofonní.
   Neexistuje ani jeden český klient, který by řekl, proč externí správu měření ukončil.
2. **Všechny výpovědi o churnu jsou od dodavatelů, ne od klientů.** Dodavatel má motivaci vysvětlit ztrátu
   klienta tak, aby to nebyla jeho chyba („klient si už vystačí sám“). Klientská verze téhož churnu chybí.
3. **Wayback nevidí ceny renderované JavaScriptem ani stránky, které crawler nikdy nenavštívil.** Deset
   produktových URL má nula řezů; u malých českých domén (Trackless, Data Sailor, Growtix) to nedokazuje, že jsou
   nové – dokazuje to jen, že je archiv nezná. Závěr „kategorie je mladá“ je proto pevný u ADS-Tracking
   (kde `/dienstleistungen/` archivováno je a `/preise` ne) a slabší u malých CZ domén.
4. **Reddit se nepodařilo prohledat v r/analytics a r/GoogleAnalytics** – `arctic-shift` na tělo komentáře
   v těchto dvou subredditech opakovaně vrací „Timeout. Maybe slow down a bit“ i s časovým omezením.
   Prohledány byly r/PPC, r/agency a r/GoogleTagManager.
5. **ARES nezná „Digital Visions“ ani „Adexpres“** jako obchodní jméno – jde patrně o značky, ne o zapsané firmy;
   jejich osud je doložen jen přesměrováním domény, ne rejstříkovým záznamem. Justice.cz (sbírka listin) nebyla
   použita – pro tyto dva subjekty chybí IČO, kterým by se dalo začít.
6. **Nezjištěno, kolik klientů kterýkoli z přeživších subjektů reálně má.** Dlouhověkost produktové stránky
   není totéž co dlouhověkost byznysu; RobertNemec může mít na té stránce cenu jedenáct let a nemít jediného
   klienta na měsíční správu.
7. **Nedohledán žádný blog nebo LinkedIn post typu „proč jsme přestali nabízet správu analytiky“.**
   Jeden WebSearch dotaz vrátil jen obsah o migraci na GA4. Tato mezera může být skutečná (nikdo o tom nepíše),
   nebo metodická (špatná formulace dotazu).
8. **Cenová stagnace RobertNemec není interpretovaná.** Nevíme, jestli je to důkaz o stropu ochoty platit,
   nebo jen zapomenutá stránka, kterou nikdo devět let neaktualizoval. **To je test na jedno telefonní číslo**
   a patří do mystery shoppingu (B2), ne do další rešerše.
