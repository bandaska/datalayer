# Fáze 2 – Český trh: kontinuální správa webové analytiky

Stav: hotovo (verze 1, rešerše provedena 2026-09-04). Data k této fázi jsou v
`data/fragments/02-pricing.csv` (46 řádků, P2-xxx), `data/fragments/02-evidence.csv` (80 řádků, E2-xxx)
a `data/fragments/02-pain.csv` (23 řádků, N2-xxx). Odkazy `E2-…` v textu vedou na evidence log.
Metoda: WebSearch (cz/en dotazy) + WebFetch/curl stránek služeb, ceníků, inzerátů, blogů a diskusí.
Vyhledávací rozpočet session se vyčerpal v polovině (200 dotazů), zbytek byl dohledán přímým otevíráním
známých URL – viz sekce 5 Mezery.

---

## 1. Shrnutí

1. Prošlo se 45 subjektů (18 agentur/butiků, 8 performance/web agentur, 16 freelancerů, 3 platformové/infrastrukturní zdroje). Kontinuální správu analytiky **pojmenovává jako samostatný produkt jen 1 subjekt** (Digitální architekti: „Pravidelná údržba a monitoring měření“, E2-001); dalších ~10 ji zmiňuje jako větu ve službě („pravidelný reporting a monitoring“, „měsíční partnerství a podpora“, „správa dat a jejich kontrola“).
2. **Veřejnou měsíční cenu za správu/monitoring analytiky mají 2 subjekty**: RobertNemec.com (od 9 250 Kč, běžně 18 500 Kč/měs, E2-009) a Tomáš Khoder (správa e-commerce reportu 2 500 Kč/měs, E2-011). Třetím veřejným měsíčním tierem je produkt Advisio DataPlus (sGTM od 800/1 500/3 000 Kč/měs podle událostí, E2-018).
3. Dominantní cenový model je **hodinová sazba**: 600–3 000 Kč/h, typicky 1 150–2 400 Kč/h u specialistů na analytiku (Kroužek 1 150, Němec 1 850, Marketing Makers 2 100, Ráš 2 400, Hyrák 2 000/3 000; E2-041–046). Nižší sazby (600–900 Kč) patří generalistům, kde je analytika doplněk.
4. Jediný veřejný **retainer s minimem hodin**: Václav Ráš „Dlouhodobá spolupráce (více než 2 dny měsíčně) 13 000 Kč/MD“ → ≥ 26 000 Kč/měs a BigQuery je součástí i základní implementace (E2-010).
5. Klienti kupují měsíční analytiku typicky **jako součást PPC správy** (8–30 tis. Kč/měs nebo 15–25 % spendu; Marketing Makers tiery 4/8/14 h měsíčně, kde „analytika je precizně nastavená“ až v nejvyšším tieru; E2-014, E2-057, E2-058).
6. Nejčastěji pojmenovaný pain není „nemáme data“, ale **nesoulad čísel** (GA4 vs. administrace e-shopu až 70 %, GA4 vs. Google Ads) a **ztráta dat consentem/adblockery** (30–60 %) – E2-020, E2-022, E2-023, E2-024, E2-060.
7. Reaktivní režim je norma: „Když zavolá, že zaznamenal velký propad v měření… Zjistím, kde je chyba, napravím ji“ (Advisio, E2-017). Proaktivní alerting je popsán jen u Advisio DataPlus (výpadek e-shopu ve 4 zemích detekován před klientem, E2-019), WEBUI.CZ („hlídáme anomálie“, E2-030) a jako produkt u Signals (Bar) / Cross Masters (Waaila) bez ceny (E2-036, E2-037).
8. Jediný veřejný **trigger** velikosti klienta: „Spolupráce dává smysl zhruba od 500 000 Kč obratu měsíčně“ (Khoder, E2-012). Ostatní triggery jsou událostní: změna lidí, nový dodavatel, redesign/migrace (Digitální architekti – Dokumentace, E2-004).
9. In-house alternativa: inzeráty na webového analytika mzdu neuvádějí (Inveo hledá part-time do 20 h/měs, E2-050); agregáty portálů dávají 66–82 tis. Kč hrubého/měs (E2-048, E2-049), tj. s odvody ~90–110 tis. Kč – cenový strop, pod kterým se retainer pohybuje řádově 3–10×.
10. Část původního seznamu z plánu už neexistuje nebo analytiku neprodává (Medio → Taste, Dobrý web → WebTop100, Sun Marketing → Taste Sun, Dataweps → Heureka Group, Digital Visions – doména neexistuje, Adexpres 503; E2-075). Naopak přibyli hráči z komunity MeasureCamp Czechia 2026: MeasureDesign, Signals, Cross Masters, Etnetera (E2-068).

---

## 2. FAKTA

### 2.1 Tabulka subjektů

Kódy aktivit podle `00-taxonomie-sluzby.md`. „Kontinuální“ = zda web výslovně nabízí opakovanou/měsíční službu.
Veřejná cena = na webu je konkrétní číslo (Kč) k dané službě.

| # | Subjekt | Typ | URL | Název kontinuální služby doslova | Kontinuální | Model ceny | Cena / sazba | Kódy aktivit | requires_bq | Veřejná cena | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Digitální architekti | analytická agentura | digitalniarchitekti.cz/produkty/pravidelna-udrzba-a-monitoring-mereni/ | „Pravidelná údržba a monitoring měření“; „Implementace, rozvoj a péči Google Tag Manager“; „Dlouhodobá spolupráce – Monitorování, alerty, testy, reporting“ | ano | individuálně (formulář: pásma 5–10 / 11–20 / 21–40 / 41+ tis. Kč; 30–100+ tis. Kč) | neuvedeno | A1,A2,A3,A4,A5,B1,C1,D1,D2,D3,E1,E3,F1,F3,G1,G7,H1,H2,H4 | volitelně (BQ a sGTM vyjmenované) | ne | E2-001–008, E2-069 |
| 2 | RobertNemec.com | agentura (digitální analytika) | robertnemec.com/umime/digitalni-analytika/webova-analytika/ | „Měsíční práce na webové analytice (tak, aby měla smysl)“ | ano | fixed_package + hourly | od 9 250 Kč/měs, běžně 18 500 Kč (příp. 31 200 Kč); 1 850 Kč/h | C1,F3,F5,I1,I2 | ne | **ano** | E2-009 |
| 3 | Václav Ráš (dataras.cz) | freelancer | dataras.cz | „Dlouhodobá spolupráce (více než 2 dny měsíčně)“ | ano | retainer_hours (MD) + hourly | 13 000 Kč/MD (≥ 2 MD/měs = 26 000 Kč); 2 400 Kč/h; konzultace 4 000 Kč; implementace GTM+GA4+BQ 5 700 Kč | A2,B1,C1,E3,E4,F1,F5,I1 | ano (BQ ve všech balíčcích) | **ano** | E2-010 |
| 4 | Tomáš Khoder (khoder.cz) | freelancer, e-commerce konzultant | khoder.cz | „E-commerce report – měsíční správa“ | ano | fixed_package + hourly | 2 500 Kč/měs (tvorba 4 500 Kč); GTM e-shop 7 500 Kč; 950 Kč/h | D1,D2,D3,F1,F2,F3 | ne | **ano** | E2-011, E2-012 |
| 5 | Marketing Makers | performance + analytická agentura | marketingmakers.net/my-a-nas-tym/cenik-a-kapacity/ | „Měsíční správa kampaní“ (4/8/14 h); webová analytika bez měsíčního produktu („pravidelné reportování, nejlépe automatizované“) | částečně (v PPC tierech) | hourly_rate + retainer_hours | 2 100 Kč/h analytika, 1 600 Kč/h PPC; analytika 5/15/30/10 h dle velikosti; PPC 4/8/14 h měs | A2,B1,C1,D1,D4,E5,F1,F3 | volitelně | **ano (sazby)** | E2-013–015, E2-056 |
| 6 | Advisio (+ DataPlus) | performance agentura s datovým oddělením | advisio.cz/datova-analytika/; dataplus.advisio.cz | „Správa dat a jejich kontrola“; DataPlus (sGTM produkt, 24/7 monitoring) | ano | individuálně; DataPlus tiered | DataPlus od 800 / 1 500 / 3 000 Kč/měs dle 150k/300k událostí; správa dat neuvedeno | A5,B1,B3,D1,D2,E5,F3,G1,G4,G5,G7 | ne | **ano (jen DataPlus)** | E2-016–021 |
| 7 | WEBUI.CZ | malá agentura | webui.cz/sluzby/analytika-a-mereni/ | „Pravidelný reporting a monitoring – dlouhodobá péče s doporučeními“; „SLA podpora“; „hlídáme anomálie“ | ano | individuálně | neuvedeno | A1,A2,A5,B1,D1,D2,E1,F1,F3,G1,G7,H5 | částečně (dashboardy nad BQ s alerty) | ne | E2-030 |
| 8 | MeasureDesign | analytický butik | measuredesign.cz | „Měsíční partnerství a podpora“; „Monitoring kvality dat“ | ano | individuálně | neuvedeno | A2,A5,E3,G1,H3,H5 | volitelně | ne | E2-035 |
| 9 | Neogy (neologic.cz) | web/marketing agentura | neologic.cz/sluzby/webova-analytika/ | „nepřetržitý proud zpráv“; analytik „posoudí příčiny“ a pošle „zprávu psanou lidskou řečí“ | ano | individuálně | neuvedeno | F3,G1 (ručně),H3 | ne | ne | E2-031 |
| 10 | Web S ÚSMĚVEM | web/marketing agentura | websusmevem.cz/marketing/analytika/ | „Měsíčně vám vyhodnotíme data z analytických nástrojů“ | ano | individuálně | neuvedeno | A2,D1,D3,F3 | ne | ne | E2-032 |
| 11 | Martina Machalová | freelancer | martinamachalova.cz/webova-analytika/ | „Na pravidelné bázi budeme sledovat dopad změn v analytice“ | ano (bez názvu) | individuálně | neuvedeno | A2,B1,C1,E4,F1,F3 | volitelně | ne | E2-033 |
| 12 | Sherpas | digitální agentura | sherpas.cz/blog/pokrocila-webova-analytika-pro-cmss | „správu webové analytiky a rozvoj v této oblasti“ (case ČMSS) | ano (case) | individuálně | neuvedeno | A2,C1,F1,I1 | ne | ne | E2-039 |
| 13 | In creative | marketing agentura | increative.cz/sluzby/ | „Rozsah prací a rozpočty plníme zpravidla na měsíční bázi“ | částečně | měsíční rozpočet | neuvedeno | C1 (audit),H4 | ne | ne | E2-070 |
| 14 | Macro Consulting (Brno) | marketing agentura | macroconsulting.cz/webova-analytika-a-data/ | „transparentní reporty“, průběžné sledování (bez názvu) | částečně | individuálně | neuvedeno | B1,C1,E5,F1 | ne | ne | E2-077 |
| 15 | House of Řezáč | UX/analytická agentura | houseofrezac.com/en/services/web-analytics | správa měření na ekosystémech webů, reporty Looker/Power BI, školení | částečně | individuálně | neuvedeno | A2,C1,F1,F5,H4,I2 | ne | ne | E2-029 |
| 16 | Taste (vč. bývalého Medio) | full-service agentura | taste.cz/google-analytics-4 | audit, školení, konzultace; Maturity model zdarma | ne (audit/školení) | individuálně | neuvedeno | C1,H3 | ne | ne | E2-024–026 |
| 17 | Optimics | analytická/GMP agentura | optimics.com/level-1-basic (…-2, -3) | LEVEL 1 Basic / 2 Advanced / 3 Expert (bez správy/monitoringu) | ne (projektové úrovně) | individuálně | neuvedeno | A3,B1,D2,E3,F1,I3 | volitelně | ne | E2-027 |
| 18 | Effectix | performance agentura | effectix.com/analytika/ | „Technické nastavení – GA4, GTM, server-side GTM, BigQuery, Roivenue“ | ne (nepojmenováno) | individuálně | neuvedeno | A2,A5,E5,F1,I2 | volitelně | ne | E2-028 |
| 19 | Marketup | performance agentura | marketup.cz/nase-sluzby/data | „reporting dat ve skutečném čase“, MMM | ne (nepojmenováno) | individuálně | neuvedeno | F1,I3 | ne | ne | E2-074 |
| 20 | Databy (Proficio) | datová divize agentury | databy.io | BI, webová analytika, produkt MarkO; sGTM s maržemi do BQ | ne (nepojmenováno) | individuálně | neuvedeno | E5,F1,I1 | ano (BQ/Keboola) | ne | E2-073 |
| 21 | Signals | datová firma + produkty | signals.cz/produkty | Bar („Automatické upozornění, když se s vašimi daty děje něco neobvyklého“), Dance (GA4 v BQ), Game (export) | produkty | neuvedeno | neuvedeno | E1,E3,G1,G3,F1 | ano (Dance) | ne | E2-036 |
| 22 | Cross Masters | datová/martech firma | crossmasters.com | Waaila Suite (data quality monitoring), mHub Cloud (sGTM) | produkty | neuvedeno (waaila.com nedostupné) | neuvedeno | A4,A5,G1,G4 | ne | ne | E2-037 |
| 23 | BizzTreat | BI/DWH firma | bizztreat.com/en/blog/technologie-support | „24/7 Support“, SLA support tým oddělený od delivery | ano (BI support) | SLA (neuvedeno) | neuvedeno | E3,E6,F1,G6,H5 | ano (DWH) | ne | E2-038 |
| 24 | Fragile | full-service agentura | fragile.cz/blog/kvalitni-data-pro-reklamni-systemy/ | „audity měření“; implementace Consent Mode | ne (audit) | individuálně | neuvedeno | B1,B2,B3,D1,D2 | ne | ne | E2-022, E2-023 |
| 25 | MarketingPPC | PPC agentura | marketingppc.cz/sluzby/ga4/ | „Nasazení GTM a GA4“ (jednorázově) | ne | fixed_package (jednorázově) | od 3 900 / 7 800 / 19 000 Kč; PPC správa 8–30 tis. Kč/měs, 15–25 % spendu | A2,B1,C1,D1,D3 | volitelně | **ano (jednorázově)** | E2-057 |
| 26 | eVisions | SEO/PPC agentura | evisions.cz/nastaveni-ga-4/ | „Nastavení GA4“, „Ověříme nastavení, konverze a datové toky“ | ne | individuálně | neuvedeno | A1,C1 | ne | ne | E2-071 |
| 27 | Jiří Franěk | freelancer (Shoptet partner) | jirifranek.cz/nastaveni-google-analytics/ | „Nastavení GA4“ + „automatické měsíční reporty e-mailem“; „potřebuji zkontrolovat kvalitu dat“ | částečně (auto report) | individuálně | „záleží na komplexnosti“ | A2,C1,D1,D3,F3(auto) | ne | ne | E2-040 |
| 28 | Zbyněk Hyrák | freelancer | navolnenoze.cz/prezentace/zbynek-hyrak/ | „výkonnostní internetový marketing“ nad GA4 | částečně | hourly_rate | 3 000 Kč/h osobně, 2 000 Kč/h online | C1,D1,H4 | ne | **ano (sazba)** | E2-041 |
| 29 | Jiří Kroužek | freelancer | jirikrouzek.cz/cenik.html | „Webová analytika – dle hodinové sazby“ | ne | hourly_rate | 1 150 Kč/h (školení 1 600) | C1,F5 | ne | **ano (sazba)** | E2-042 |
| 30 | Open Mage | freelancer/PPC | openmage.cz/cenik/ | „Kompletní ecommerce analýza“; správa PPC od 2 100 Kč | ne (PPC ano) | hourly_rate | 700 Kč/h; analýza 6–8 000 Kč | I1 | ne | **ano (sazba)** | E2-043 |
| 31 | MH Marketing | freelancer | mhmarketing.cz/cenik/ | „Webová analytika“ (bez ceny) | ne | hourly_rate | 600 Kč/h | – | ne | **ano (sazba)** | E2-044 |
| 32 | WebPrezent.cz | web agentura | webprezent.cz/cenik/ | „On-line marketing a webová analytika“ – balíčky hodin | ano (předplacené hodiny) | hourly_rate / retainer_hours | 790 Kč/h; 5 h 3 450 Kč; 15 h 9 600 Kč | – | ne | **ano** | E2-045 |
| 33 | Neosoft | web agentura | neosoft.cz/cenik/ | „Analýzy, studie, konceptuální modely“ | ne | hourly_rate | 900 Kč/h | – | ne | **ano (sazba)** | E2-046 |
| 34 | Marek Lecián | freelancer | mareklecian.cz/webova-analytika/ | implementace, „Analytika se mění společně s webem…“ (správu neprodává) | ne | individuálně | neuvedeno | A4,D5,H1,H2 | ne | ne | E2-034 |
| 35 | Flowstack (Jan Veverka) | freelancer | flowstack.cz | GA4 → BigQuery export, dotazy (jednorázově) | ne | individuálně | neuvedeno | E3,E4,I1 | ano | ne | E2-066 |
| 36 | Pavel Šabatka | freelancer/analytik | sabatka.net/cs/server-side-tracking-sgtm/ | konzultace sGTM (bez správy) | ne | individuálně | hosting 0–10 000 Kč/měs | A5 | ne | ne (jen infra) | E2-054 |
| 37 | Pavel Szabo | programátor | pavelszabo.cz/co-je-google-tag-manager/ | implementace GTM 4–12 h; sGTM Cloudflare Workers | ne | individuálně | hosting 350–600 Kč/měs | A2,A5 | ne | ne (jen infra) | E2-055 |
| 38 | Softmedia | WordPress agentura | softmedia.cz/…/serverove-gtm-pro-presnejsi-data/ | „postarají se o provoz naši specialisti“ (sGTM provoz) | ano (provoz sGTM) | saas/infra | 1 000 / 2 500–4 000 / 6 000–8 000 Kč/měs dle hitů | A5,G5 | ne | **ano (orientačně)** | E2-053 |
| 39 | Vojtěch Audy | freelancer PPC | navolnenoze.cz/prezentace/vojtech-audy/ | „budu ji pravidelně spravovat“ (cookies lišta) | částečně (B3) | individuálně | neuvedeno | A2,B3 | ne | ne | E2-067 |
| 40 | Ondřej Babič, Michal Blažek, Petr Bechyně | freelanceři (NVN) | navolnenoze.cz/prezentace/… | nastavení GA4/GTM, správa PPC, školení – správa měření nepojmenována | ne | individuálně | neuvedeno | A2,C1,H4 | ne | ne | E2-080 |
| 41 | Tomáš Černovský | freelancer | cernovsky.cz/weby-e-shopy/webova-analytika/ | jednorázová analýza „jednotky tisíc … desítky … stovky tisíc“ | ne | fixed (jednorázově) | orientačně | I1 | ne | částečně | E2-072 |
| 42 | Bubák.cz | web agentura | bubak.cz/co-delame/webova-analytika/ | „audit výkonnosti“ | ne | individuálně | neuvedeno | C1 | ne | ne | E2-076 |
| 43 | 6clickz | performance agentura (DTC) | 6clickz.com/cs/ | vlastní datové nástroje; správa měření nepojmenována | ne | individuálně | neuvedeno | F1 | ne | ne | – |
| 44 | SHEAN | PPC/web agentura | shean.cz | GA4 FAQ, „zadejte to na odborníka“ | ne | individuálně | neuvedeno | – | ne | ne | – |
| 45 | Medio, Dobrý web, Sun Marketing, Dataweps, Digital Visions, Adexpres, Datamind, Ecommerce Bridge, Webmium, SOVA NET | (ze seznamu v plánu) | viz E2-075 | přesměrováno / neexistuje / neprodává webovou analytiku / jen definice a školení | – | – | – | – | – | – | E2-075 |

Shrnutí tabulky: 45 subjektů; kontinuální službu výslovně nabízí 12 (ano) + 8 částečně; **veřejnou cenu má 13** (z toho jen 2 měsíční cenu za analytiku, 1 měsíční cenu za sGTM produkt, 1 MD-retainer, zbytek hodinové sazby nebo jednorázové ceny).

### 2.2 Hodinové sazby a proxy cen

| Zdroj | Sazba / cena | Poznámka | Evidence |
|---|---|---|---|
| Zbyněk Hyrák | 3 000 Kč/h osobně, 2 000 Kč/h online | seniorní analytik/PPC | E2-041 |
| Václav Ráš | 2 400 Kč/h; 13 000 Kč/MD při ≥ 2 MD/měs (= 1 625 Kč/h) | BQ-first freelancer | E2-010 |
| Marketing Makers | 2 100 Kč/h analytika, 1 600 Kč/h PPC | agentura, veřejný ceník + odhad hodin | E2-013 |
| RobertNemec.com | 1 850 Kč/h | agentura | E2-009 |
| Jiří Kroužek | 1 150 Kč/h | freelancer | E2-042 |
| Tomáš Khoder | 950 Kč/h | freelancer, e-commerce | E2-011 |
| Neosoft | 900 Kč/h | web agentura | E2-046 |
| WebPrezent.cz | 790 Kč/h (balíček 15 h = 640 Kč/h) | web agentura | E2-045 |
| Open Mage | 700 Kč/h | freelancer | E2-043 |
| MH Marketing | 600 Kč/h | freelancer | E2-044 |
| Na volné noze – průzkum 2024 (2 237 resp.) | 600–999 Kč/h 27,4 %; 1 000–1 999 Kč/h 23,0 %; 2 000–4 999 Kč/h 9,0 % | všechny obory | E2-047 |
| PPC správa (MarketingPPC) | 800–2 000 Kč/h; 8–30 tis. Kč/měs; 15–25 % spendu | cenová kotva, kterou klient zná | E2-057 |
| PPC správa (M. Kovalčík) | freelancer od 10 000; senior 15–30 tis.; agentura 25–70+ tis. Kč/měs; 10–20 % budgetu | „měření a report součást paušálu“ | E2-058 |
| Jednorázové nasazení GTM/GA4 (MarketingPPC) | od 3 900 / 7 800 / 19 000 Kč | dle velikosti klienta | E2-057 |
| Jednorázová implementace (Ráš) | 5 700 Kč základ; od 16 900 Kč e-commerce vč. BQ, Hotjar | | E2-010 |
| Odhad hodin analytiky (Marketing Makers) | malý e-shop 5 h, střední 15 h, velký 30 h, B2B 10 h | při 2 100 Kč/h = 10,5 / 31,5 / 63 / 21 tis. Kč | E2-013 |
| Provoz sGTM | 300 Kč (500k eventů, Cloud Run EU); 350–600 Kč (Cloudflare); 1 000 / 2 500–4 000 / 6 000–8 000 Kč; 0–10 000 Kč | infrastruktura bez práce analytika | E2-053–056 |
| Advisio DataPlus | od 800 / 1 500 / 3 000 Kč/měs (≤150k / ≤300k / >300k událostí) | sGTM jako produkt + podpora 9–15 h | E2-018 |
| Digitální architekti – formuláře | pásma 5–10 / 11–20 / 21–40 / 41+ tis. Kč; 30–100+ tis. Kč | rozpočtová pásma, období neuvedeno (scope=unknown) | E2-003, E2-069 |

Odvození typického měsíčního retaineru z hodin: 5 h × 1 500–2 400 Kč = 7 500–12 000 Kč; 10 h = 15 000–24 000 Kč; 20 h = 30 000–48 000 Kč. To odpovídá jediným veřejným měsíčním cenám (Němec 9 250–31 200 Kč; Ráš ≥ 26 000 Kč) i pásmům z formulářů DA (11–20 / 21–40 tis. Kč).

### 2.3 Inzeráty na pozice (proxy in-house alternativy)

| Inzerát | Vyjmenované úkoly | Mzda / úvazek | Evidence |
|---|---|---|---|
| Digitální architekti – Webový analytik (medior) | „Správa a optimalizace měřících nástrojů na webech klientů (Google Analytics, Google Tag Manager, atd.)“; „Pravidelné vytváření reportů a interpretace výsledků pro naše klienty (Looker Studio)“; „Instalace a správa měřících kódů na webových stránkách klientů, včetně e-commerce projektů“; analýza kampaní | neuvedena; „forma spolupráce dle domluvy“ | E2-008 |
| Inveo – Webový analytik | „Navrhovat měřicí strategie pro nové i stávající klienty“; „Navrhovat datovou vrstvu (dataLayer)“; „Definovat KPI a business metriky“; přehledy v Looker Studiu; evaluace výkonu webů/e-commerce | neuvedena; **„Spolupráce na part-time do 20 hodin / měsíc“** (min. 4 roky praxe, GA4, GTM, základy JS) | E2-050 |
| Ušetřeno.cz – Webový analytik a SEO specialista | správa analytických nástrojů, dashboardy/reporty (Power BI, GA4, GTM), „realizuješ a vyhodnocuješ testy s cílem zlepšovat výkon webů a konverze“, SEO, AI řešení | neuvedena („odpovídající zkušenostem“); plný úvazek, Praha | E2-051 |
| Optimics – Webový analytik junior (GA4/GTM), StartupJobs | – | inzerát expirovaný | E2-079 |
| Jooble – agregát „web analytik“ | – | průměr 81 943 Kč/měs (954 inzerátů, 2. 9. 2026; zahrnuje IT analytiky) | E2-048 |
| PrůměrnéPlaty.cz – analytik | – | 66 266 Kč/měs (Praha 67 938 Kč) | E2-049 |
| Jooble – inzeráty s mzdou (generický analytik) | reporting, dashboardy, práce s daty | 46 000 Kč (Plastika a.s.); 32–48 tis. Kč (Career Power) | E2-052 |

Zjištění: žádný CZ inzerát na webového analytika s GA4/GTM neuvedl mzdu. Úkoly v inzerátech = A2, A3, C1, F1, F3, H2 – tedy přesně obsah „správy“. Inveo hledá kapacitu 20 h/měs na portfolio klientů – proxy pro to, kolik hodin analytiky agentura potřebuje průběžně.

### 2.4 Komunitní a blogová zjištění

- **Komentáře pod článkem Shoptet blogu o GA4**: uživatel týden po nasazení nové dimenze B2B/B2C vidí jen „(not set)“; Shoptet: „na základě hlášení ohledně problémů s měření jsme úpravu dočasně pozastavili“ (E2-059). Release na straně platformy rozbil měření; všimli si uživatelé.
- **Advisio rozhovor s analytikem**: režim je reaktivní – klient volá při propadu, analytik hledá chybu v GTM (E2-017).
- **Advisio case study**: monitoring (DataPlus) zjistil výpadek e-shopu ve 4 zemích dřív než klient; odhad úspory „desítky až sta tisíc korun“ (E2-019).
- **Fragile**: agentura vidí u klientů „v průměru o 30 % méně dat, než je realita“ (E2-022); bez Consent Mode v2 „Ztráty 30-60% dat“ (E2-023).
- **Advisio Potten & Pannen**: „Rozdíl mezi množstvím dat z Google Analytics 4 a administrací z e-shopu byl až 70 %“ (E2-020).
- **Upgates (platforma)**: sama vysvětluje nesoulad GA4 vs. administrace consentem a adblockery (E2-060).
- **PPC kemp (Marketing Makers)**: typické chyby sGTM z praxe – nevyplněný region, CAPI bez `event_id` (E2-056); náklad sGTM ~300 Kč/měs při 500k eventů.
- **Softmedia**: „bude nutné tento ekosystém udržovat a spravovat“ – sGTM přináší provozní povinnost (E2-053).
- **Taste Academy**: školení prodává na pain „propad dat po nasazení cookie lišty“ (E2-026).
- **MeasureCamp Czechia 2026** (12. 9. 2026): sponzoři Coupler.io, Roivenue, Dr.Max, Stape, Etnetera, Usercentrics, MeasureDesign, O2, Google, Crossmasters, Digitální architekti, Signals – mapa aktivní CZ komunity (E2-068).
- Facebookové skupiny (Webová analytika CZ/SK, Google Analytics CZ), Webtrh (vyhledávání 404) a LinkedIn nebyly z prostředí dostupné – viz Mezery.

### 2.5 Doslovné citáty painů (výběr; kompletní v `02-pain.csv`)

| Citát | Zdroj | Kód |
|---|---|---|
| „Když zavolá, že zaznamenal velký propad v měření – například v návštěvách nebo konverzích. Zjistím, kde je chyba, napravím ji“ | Advisio, E2-017 | gtm_change_dev (příčina neuvedena) |
| „Rozdíl mezi množstvím dat z Google Analytics 4 a administrací z e-shopu byl až 70 %“ | Advisio case, E2-020 | browser_change / consent |
| „v rámci analytiky vidíme v průměru o 30 % méně dat, než je realita“ | Fragile, E2-022 | consent_change |
| „Nesedí vám čísla v GAds kampaních s daty v GA4kách?“ | Taste, E2-024 | revenue_mismatch |
| „Už vás nějakou dobu trápí propad dat po nasazení cookie lišty, ale nevíte, co s tím dělat?“ | Taste Academy, E2-026 | consent_change |
| „Změna zaměstnanců či vedoucích pracovníků – pokud dokumentaci nemáte, veškerá nastavení odcházejí“ | Digitální architekti, E2-004 | access_lost / unknown_owner |
| „po nasazení měření jsme dostali několik hlášení ohledně problémů s měření“ | Shoptet blog komentáře, E2-059 | release_web |
| „Právě odmítání zasílání cookies bývá nejčastějším důvodem nesouladu údajů o provedených nákupech v administraci e-shopu a v prostředí Google Analytics.“ | Upgates, E2-060 | consent_change |
| „Tržby po produktech neodpovídají celkovým tržbám“ / „duplicitní měření“ / „Platební brána mezi zdroji návštěvnosti“ | nazakladedat.cz, E2-061 | release_web / gtm_change_dev |
| „Objednávku z Google Analytics zcela odstranit bohužel nelze“ | Effectix, E2-062 | release_web (testy na produkci) |
| „není vyplněn region v server side GTM … využívání FB CAPI bez deduplikace událostí. Chybí zde event_id“ | Marketing Makers, E2-056 | ad_platform_change |
| „Nejenže si tímto zkreslujete své statistiky, ale hlavně nenávratně přicházíte o původní zdroj návštěvy.“ | Advisio, E2-063 | utm_chaos |
| „Analytika se mění společně s webem... Jednorázově správná implementace proto není zárukou správných dat“ | Marek Lecián, E2-034 | release_web (důvod správy) |
| „Data thresholding — GA4 skrývá data, která nechcete vidět … Retence dat jen 14 měsíců“ | Flowstack, E2-066 | ga4_change |
| „Klienti nemají nastavené měření stoprocentně správně, nemají jasno v tom co přesně měří“ | Taste, E2-025 | unknown_owner |

---

## 3. INTERPRETACE

### 3.1 Co je na CZ trhu standard

- **Standard = jednorázové nastavení + audit + školení.** Téměř každý subjekt prodává „Nastavení GA4/GTM“, „audit měření“ a školení; ceny jednorázového nasazení jsou 3 900–19 000 Kč (MarketingPPC), 5 700–16 900 Kč (Ráš), 7 500 Kč (Khoder). Kontinuita se řeší větou „zůstaneme v kontaktu“ (Machalová, In creative), nikoli produktem.
- **Analytika se kupuje skrze PPC správu.** Tiery Marketing Makers (4/8/14 h) ukazují, že analytika je diferenciátorem nejvyššího PPC tieru, ne samostatnou položkou; Kovalčík: měření a report jsou „součást paušálu“ (E2-014, E2-058). Klient je zvyklý platit 8–30 tis. Kč/měs za správu kampaní – to je referenční kotva pro cokoliv „měsíčního“.
- **Hodinová sazba je jediný široce veřejný údaj.** Specialisté na analytiku: 1 150–2 400 Kč/h; generalisté 600–900 Kč/h. Retainer se odvozuje násobkem hodin, jen Ráš to říká explicitně (≥ 2 MD/měs).
- **Dodávka je textová a reaktivní**: „report psaný lidskou řečí“ (Neogy), „komentář k dashboardu“ (MM), oprava po telefonátu (Advisio). Alerting/monitoring je vyjmenován u 4 subjektů (DA, WEBUI, Advisio DataPlus, MeasureDesign) a jako produkt u 2 (Signals Bar, Waaila) – vždy bez ceny.

### 3.2 Co (téměř) nikdo nenabízí

- **Veřejně naceněný měsíční monitoring měření** – existuje jen u Němce (obsahově spíš analýzy než monitoring) a Khodera (údržba reportu). Nikdo nemá veřejný tier typu „hlídáme purchase, revenue vs. backend, consent podíl, export do BQ – za X Kč/měs“.
- **SLA / reakční doba** – uvádí jen WEBUI.CZ („SLA podpora“, bez čísel), Khoder („konzultace obvykle do 24 hodin“) a Advisio DataPlus (podpora pracovní dny 9–15). Žádná reakční doba na výpadek měření.
- **Changelog / dokumentace jako součást správy** – jen Digitální architekti (Dokumentace GA/GTM jako samostatný produkt, E2-004).
- **Provoz sGTM jako správa** – sGTM se prodává jako implementace + hosting (300–10 000 Kč/měs infra); správu kontejneru (A5, G5) jako službu zmiňuje Softmedia („postarají se o provoz naši specialisti“) a Advisio (produktově). Nikdo nespojuje sGTM provoz + tag QA + BQ monitoring do jednoho balíčku.
- **BigQuery monitoring (E1, E2, E6)** – nikdo veřejně nenabízí „hlídáme, že export přišel a má správný objem“. BQ je všude „technické nastavení“ (Effectix, MM, Machalová, Ráš, DA), ne provoz.
- **Kvartální review měřicího plánu (F4)** – nenalezeno u nikoho.

### 3.3 Jak se ceny odvozují

1. **Hodiny × sazba**: 5–20 h × 1 500–2 400 Kč = 7,5–48 tis. Kč/měs. Potvrzuje veřejné body (Němec 9 250 / 18 500 / 31 200; Ráš ≥ 26 000; formulářová pásma DA 11–20 / 21–40 tis.).
2. **Kotva PPC správy**: 8–30 tis. Kč/měs (agentura) / od 10 tis. (freelancer). Analytická správa dražší než PPC správa bude klientovi těžko vysvětlitelná; srovnatelná (10–25 tis.) je obhajitelná.
3. **Kotva sGTM produktu**: 800–3 000 Kč/měs (DataPlus) za infrastrukturu + aktualizace – to je spodní hranice toho, co klient vnímá jako „měsíční poplatek za měření“. Lidská správa nad tím musí být řádově dražší a zdůvodněná prací (QA, opravy, komunikace).
4. **Kotva in-house**: 66–82 tis. Kč hrubého ≈ 90–110 tis. Kč celkových nákladů za plný úvazek; Inveo hledá 20 h/měs externě – tj. firma velikosti agentury utrácí za analytika ~1/8 úvazku ≈ 12–14 tis. Kč/měs.
5. **Jednorázová implementace** 4–19 tis. Kč: měsíční správa v ceně 1/4–1/2 implementace (2,5–9 tis. Kč) je pro malé e-shopy hranice, kterou trh zná (Khoder 2 500; Němec od 9 250).

### 3.4 Co to říká k hypotézám

- **H1 (správa má smysl hlavně nad BQ)** – **nepotvrzeno**. Všichni, kdo správu prodávají (DA, Němec, Khoder, WEBUI, Neogy, Web S ÚSMĚVEM, Machalová), ji dělají primárně nad GA4/GTM/ad platformami bez BQ; BQ je „volitelně“. BQ-first je jen Ráš (freelancer) a produkty Signals. CZ trh podporuje dvouúrovňový model.
- **H2 (pain = data se tiše rozbila)** – **potvrzeno nepřímo**. Doslovné citáty ukazují: klient si všimne až propadu (E2-017), po releasu platformy hlásí (not set) po týdnu (E2-059), nesoulady 30–70 % existují dlouhodobě než přijde audit (E2-020, E2-022). Nikdo z konkurence ale H2 nepoužívá jako sdělení; prodává se „správně nastavit“ a „ztráta dat consentem“.
- **H3 (bez veřejného ceníku; 1 200–2 500 Kč/h; 5–20 h)** – **potvrzeno** s upřesněním: sazby specialistů 1 150–2 400 Kč/h (generalisté 600–900), veřejné měsíční body 2 500 / 9 250 / 18 500 / 26 000+ Kč, odhad hodin analytiky 5–30 h (MM) a poptávka 20 h/měs (Inveo).
- **H4** – netýká se CZ; poznámka: Optimics používá tiery „Level 1/2/3“ podle US/GMP vzoru, ale bez správy a ceny (E2-027).
- **H5 (část hodnoty nahrazuje SaaS)** – **potvrzeno** existencí CZ produktů: DataPlus (800–3 000 Kč), Signals Bar, Waaila, Roivenue (sponzor MC). Cena infrastruktury sGTM 300–10 000 Kč/měs určuje, kolik „stojí nástroj“; lidská služba musí stát na G7 (reakce), H1 (dev koordinace), A1 (QA po releasu) – přesně to, co konkurence popisuje jako svou práci (E2-017, E2-005).

---

## 4. DOPORUČENÍ pro DataLayer.cz

1. **Pojmenovat produkt a dát mu veřejnou cenu.** Na CZ trhu je veřejně naceněná měsíční správa měření prakticky prázdná pozice (2 subjekty, ani jeden ji nedefinuje jako monitoring). Název volit v jazyce trhu: „správa měření“ / „údržba a monitoring měření“ (DA), ne „retainer“ ani „analytics as a service“ (nikdo v CZ nepoužívá).
2. **Dvouúrovňová nabídka, ne BQ-only.** Bez BQ: QA po releasech (A1), hygiena GA4 (C1–C4), konverze v ad platformách (D1–D3), údržba reportů + komentář (F1, F3), consent kontrola (B1) – to je přesně obsah DA produktu a inzerátů. S BQ přidat E1–E4, G1–G3 robustně a srovnání revenue vs. backend (G2) – tam konkurence chybí úplně.
3. **Cenové body opřít o kotvy, které trh zná**: vstupní tier 7–12 tis. Kč/měs (≈ 5 h × 1 500–2 400; nad úrovní Němce „od 9 250“ i PPC freelancera „od 10 000“), střední 18–25 tis. Kč (≈ 10 h; Němec „nejběžnější 18 500“, Ráš ≥ 26 000), BQ/sGTM tier 30–45 tis. Kč (≈ 15–20 h; pásmo DA 21–40 tis.). sGTM infrastruktura (300–3 000 Kč/měs) účtovat průhledně zvlášť nebo výslovně „v ceně“, protože klient DataPlus zná jako 800–3 000 Kč.
4. **Sdělení postavit na H2 a na nesouladu čísel**, protože to konkurence neříká: „GA4 vs. e-shop se rozjely o 30–70 % a nikdo si nevšiml“ (E2-020, E2-022), „po releasu Shoptetu týden (not set)“ (E2-059), „klient volá až při propadu“ (E2-017). Důkazní argumenty: denní kontrola purchase/revenue vs. backend, QA do X dnů po každém releasu, reakční doba – žádný CZ hráč reakční dobu na výpadek měření veřejně neslibuje.
5. **Vstupní bod**: po implementaci/auditu (všichni), při změně lidí či dodavatele (DA Dokumentace), při redesignu/migraci (DA, Lecián), a velikostní práh – Khoder dává „od 500 000 Kč obratu měsíčně“; pro monitoring s BQ dává smysl práh vyšší (řádově 2–5 mil. Kč/měs), kde 30–70 % rozjezd znamená statisíce.
6. **Do dodávky zařadit to, co nikdo nemá a co je levné**: changelog GTM a dokumentace (A3, H2 – DA to prodává zvlášť), kvartální review (F4), explicitní SLA (H5). Alerting automatizovat (H5 potvrzeno), prodávat G7.
7. **Sledovat produkty CZ konkurence** jako cenový strop nástroje: DataPlus (Advisio), Bar/Dance (Signals), Waaila (Cross Masters), Roivenue – do fáze 6.

---

## 5. Mezery rešerše (co se nepodařilo zjistit)

- **Komunitní zdroje**: FB skupiny (Webová analytika CZ/SK, Google Analytics CZ), LinkedIn posty/průzkumy sazeb a Webtrh (vyhledávání vrací 404) nebyly z prostředí dostupné; komunitní painy jsou proto zastoupeny jen komentáři Shoptet blogu, agenturními rozhovory a case studies. Poptávkové servery (Poptávej.cz, AAApoptávka) nevrátily žádnou poptávku na GA4/GTM; Naceni.cz neexistuje (DNS).
- **Vyhledávací rozpočet** session (200 WebSearch) se vyčerpal; dotazy typu „rozbilo se měření“, „přestaly chodit konverze“, „GA4 měsíčně“ na CZ webu proto neproběhly – doporučeno doplnit v samostatné session (spolu s fází 7).
- **Mzdy webových analytiků**: žádný CZ inzerát s GA4/GTM neuvedl mzdu; Platy.cz nemá veřejnou stránku pozice; StartupJobs a Jobs.cz detaily se načítají JS. Použity agregáty Jooble/PrůměrnéPlaty (nadhodnocují/podhodnocují).
- **Neověřené subjekty**: Digital Visions (doména digitalvisions.cz neexistuje – zjistit nový název), Adexpres (HTTP 503), House of Řezáč CZ stránka služby (404; EN verze OK), MeasureDesign /sluzby (404), Waaila pricing (DNS), Optimics inzerát (expirovaný), Proficio/Databy inzerát Web Analyst (za loginem).
- **RobertNemec.com – varianta 31 200 Kč/měs** pochází z WebFetch výstupu stránky; curl výřez potvrdil jen 9 250 a 18 500 Kč. Ověřit před citováním.
- **Rozpočtová pásma Digitálních architektů** (5–41+ tis. Kč; 30–100+ tis. Kč) jsou z poptávkových formulářů bez uvedení období – označeno `scope=unknown`.
- **Slovenské subjekty** (Dexfinity, 6clickz Košice) byly ponechány fázi 3.
- Nepodařilo se najít žádnou veřejnou ukázku měsíčního reportu / alertu / changelogu od CZ dodavatele (vstup pro fázi 8) – jen slovní popisy (Neogy „zpráva psaná lidskou řečí“, MM „komentář k dashboardu“).
