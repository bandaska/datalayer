# DataNostro (datanostro.com)
**Typ:** SaaS-nástroj (managed server-side GTM hosting, Brno) + doplňková implementační služba „Care“ · **Relevance pro datalayer.cz:** částečný – produktově je to spíš dodavatel/partner (hosting sGTM, který může datalayer.cz používat), ale balíčky Care (19 900 / 39 900 Kč) přímo konkurují implementaci SST a masivní obsah o server-side trackingu, Consent Mode a Meta CAPI z něj dělá silného obsahového konkurenta.

## Pozicionování a USP
- Hero: „Tracking, který doručí konverze“ – sGTM hosting pro Meta, Google Ads, Sklik a GA4, „bez DevOps, fakturace v Kč, spuštění za 5 minut“.
- Komu: české a slovenské e-shopy (Shoptet, Upgates, WooCommerce), agentury (white-label, 20% provize), firmy migrující ze Stape, Addingwell nebo Google Cloud.
- Odlišení: „jediný EU sGTM hosting s nativním Sklikem (Seznam Event Measurement S2S), Heurekou a ISDOC fakturací“, EU residency (Hetzner DE), česká podpora do 4 h, veřejný status/roadmapa, levnější než Stape (−10–13 %) a Google Cloud (~−60 %).
- Fáze: mladý produkt (prototyp 2025 Q3, veřejné spuštění 2026 Q1), malý tým – zakladatel Jan Malatinský (OSVČ), na homepage „hledáme prvních 5 partnerů“ (Early Adopter Program).

## Nabídka služeb
| Služba | URL | Slov na stránce (cca) | Klíčové prvky stránky |
|---|---|---|---|
| sGTM hosting (produkt) | /cs/features/ | 470 | 14 „power-upů“ (Custom Loader, Cookie Keeper, Anonymizer, Bot Detection, Click ID Restorer, GEO…), ikony |
| Ceník | /cs/pricing/ | 700 | 5 tarifů, přepínač měsíčně/ročně, slider objemu requestů, FAQ |
| DataNostro Care (implementace na klíč) | /cs/care/ | 390 | 3 balíky s cenou, 4 čísla (5–7 dní, SLA, 30 dní hyper-care), časová osa 4 kroků, formulář „6 polí“ |
| Meta CAPI server-side | /cs/meta-capi/ | 750 | čísla, 3 kroky setupu, FAQ (schema), CTA „Začít zdarma“ |
| Seznam Event Measurement / Sklik S2S | /cs/sklik-konverze/ | 800 | hero s čísly (1 skript, client+S2S, 349 Kč), technický popis sul.js + S2S, 3 kroky, CZ funkce, FAQ |
| Heureka, Shoptet, Upgates, WooCommerce, TikTok, Klaviyo, Pinterest, Awin, Microsoft Ads | /cs/heureka/, /cs/shoptet-tracking/ … | 550–700 | šablonové platformní LP |
| Platformy (hub + 11 podstránek) | /cs/platform/… | 270–470 | krátké programové stránky (title s duplicitním „— DataNostro — DataNostro“) |
| Migrace ze Stape / Addingwell / Google Cloud | /cs/migrace-ze-stape/, /cs/migrace-z-google-cloud/ | 900–1 900 | srovnání cen, runbook, „parallel deploy + DNS cutover“ |
| Pro agentury | /cs/pro-agentury/ | 810 | white-label, konsolidovaná fakturace, 20% rev-share 12 měsíců, tabulka přínosů, 3 typy agentur |
| Pro český trh / pro účetní / EU residency / Trust Center | /cs/pro-cesky-trh/, /cs/pro-ucetni/, /cs/eu-residency/, /cs/trust/ | 780–1 260 | ISDOC, ARES, Comgate; GDPR, DPA, sub-zpracovatelé, security whitepaper |
| GTM templates, API docs | /cs/gtm-templates/, /cs/api-docs/ | 620 | připravené tagy a clients |
| Nástroje zdarma | /cs/tools/ (sGTM Detector, Tracking Audit, Setup Assistant, ROAS kalkulačka, GCP cost kalkulačka) | 120–250 | interaktivní nástroje bez registrace |

## Anatomie hlavní landing page služby
**Homepage jako hlavní LP produktu** (shora dolů):
1. Nadtitulek „Pro české a slovenské firmy · CZ/SK“, H1 s kurzívou zvýrazněným slovem, podtitul s benefity, CTA „Začít zdarma“ + „Zobrazit ceník“, live status pruh (requesty/24 h, match rate) – odkaz na status page.
2. Odrážky rizik-reverzálů: 14 dní zdarma, bez kreditní karty, setup do 5 min, roční = 2 měsíce zdarma, EU servery; 3 textové odkazy pro různé úrovně znalostí (co je SST, jste u zahraničního dodavatele?, ROAS kalkulačka).
3. **Mockup dashboardu** s ukázkovým event logem (GA4/Meta/Ads/Sklik/TikTok purchase 4 290 Kč).
4. Banner Early Adopter Programu.
5. Problém: „Až 40 % vašich dat tiše mizí“ – 4 čísla (40 % ad-blocked, 7denní ITP cap, 20–30 % ztráta v GA4, +25–35 % match rate).
6. Platformy – karty s checklisty funkcí (GA4, Meta CAPI, Google Ads, TikTok, Seznam Sklik „CZ unikátní“, další) + mřížka odkazů na platformní LP.
7. **Diagram „jak to funguje“** ve 4 krocích (návštěvník → loader z vaší domény → sGTM kontejner v EU → platformy).
8. Doplňky (power-upy) v kartách.
9. Care (postavíme za vás, od 19 900 Kč) a Academy (tutoriály v češtině, GDPR checklist „kontrolováno právníkem“).
10. „Proč k nám“ – 9 důvodů (česká podpora, žádný lock-in s exportem ZIP, EU data, ISDOC, Sklik/Heureka, Care, veřejná roadmapa, bezpečné přihlášení).
11. 6 karet průvodců z blogu s časem čtení.
12. Závěrečné CTA „Vytvořit účet zdarma“ / „Promluvit s námi“ + trust odrážky (EU, SLA, čeština).
Vizuální prvky: mockup dashboardu a event logu, číselné bloky, procesní diagram, karty s ✓ checklisty, tabulky (na LP pro agentury a ceníku), slider kalkulace ceny, live status. Video nezjištěno.

## Důvěryhodnost
- Žádná loga klientů, reference ani případové studie s čísly (jediný „case study“ článek: Heureka Ověřeno zákazníky +25 % recenzí – bez jména klienta).
- Transparentnost místo referencí: live status s 90denními uptime bary, „reálná čísla“ (125K+ requestů/24 h, uptime 99,99 %), veřejná roadmapa s hlasováním, changelog (42 záznamů), Trust Center, DPA, security whitepaper, NDA a MSA šablony, odstavec o „bus factoru“ a source-code escrow.
- Tým: pouze zakladatel Jan Malatinský (10 let trackingu pro e-shopy a agentury), Brno. Certifikace firmy žádné; v patičce badge „ISO 27001“, ačkoli stránka O nás uvádí, že ISO má poskytovatel datacentra (Hetzner), ne DataNostro.
- Recenze, média: nezjištěno.

## Ceny
Plně veřejné (bez DPH, CZK i EUR):
- SaaS: FREE 0 Kč (10k requestů), STARTER 349 Kč/měs. (500k), PRO 1 690 Kč/měs. (5M, 5 domén), BUSINESS 3 490 Kč/měs. (20M, white-label, SLA 99,9 %), ENTERPRISE od 6 990 Kč/měs. (50M+, dedikovaný server, SSO); ročně −17 %.
- Care (jednorázově + tarif): Standard 19 900 Kč (sGTM + GA4 + 1 reklamní platforma, migrace), Premium 39 900 Kč (až 4 platformy, power-upy, Consent Mode v2 enforcement, 30 dní hyper-care), Enterprise na míru.
- Agentury: 20 % provize z plateb klienta po 12 měsíců.

## Konverze a kontakt
- Primární konverze: self-service registrace („Začít zdarma“, 14denní trial bez karty); sekundární „Promluvit s námi“, „Domluvit schůzku“, „Kontaktovat sales“, „Přihlásit se jako agentura“.
- Formuláře nativní (Django): kontakt – téma (Sales / Test-drive paralelní deploy / Podpora / Agentura / Jiné), jméno, firma, e-mail, web, zpráva, ukládání konceptu; Care – balík, jméno, firma, e-mail, telefon (+ další pole, „6 polí“). Odpověď do 4 h.
- Kontakty: e-maily sales@/podpora@/fakturace@ (chráněné Cloudflare), telefon na webu nezjištěn, kalendář nezjištěn.
- Lead magnety: nástroje zdarma (sGTM Detector, Tracking Audit, Setup Assistant – vygeneruje sGTM container JSON, ROAS a GCP kalkulačky), Academy (23 tutoriálů), GDPR tracking checklist, newsletter „nový článek 1× měsíčně“.

## Obsah a blog
- Blog: ~76 článků ve 3 kategoriích (tracking ~70, migrace 2–3, cz-market 2–3), v CZ i EN. Většina má datum publikace 7. 6. 2026 (hromadné vydání); poslední lastmod 10. 6. 2026. Kratší texty (cca 500–1 200 slov, uváděný čas čtení 8–12 min), autor „Tým DataNostro“, štítek obtížnosti, newsletter box, související články; BlogPosting schema.
- Tematické clustery: SST základy a srovnání (client vs. server, kolik stojí, potřebujete SST?, jak ověřit), platformy (Meta CAPI, Enhanced Conversions, LinkedIn/Reddit/Snapchat/X), Consent Mode/GDPR (SST bez cookie lišty, je SST legální), měření (offline konverze, B2B leady + CRM, cross-domain, iOS, opuštěný košík, slevové kódy), **programové oborové články** „server-side tracking pro [obor]“ (móda, beauty, automotive, reality, SaaS, B2B výroba, cestovní ruch, neziskovky…), migrace ze Stape/Addingwell, CZ trh (Sklik SEM, Heureka).
- Dokumentace /cs/docs/: ~105 stránek (Academy 23, řešení problémů 24, setup 18, power-upy 15, pokročilé 10…), changelog 42 záznamů.
- Nejsilnější obsah:
  - https://datanostro.com/cs/blog/tracking/server-side-tracking-kompletni-pruvodce-2026/
  - https://datanostro.com/cs/blog/tracking/kolik-stoji-server-side-tracking-2026/
  - https://datanostro.com/cs/blog/migrace/stape-addingwell-google-cloud-vs-datanostro-2026/
  - https://datanostro.com/cs/blog/tracking/consent-mode-v2-server-side-gdpr/
  - https://datanostro.com/cs/blog/tracking/meta-conversions-api-kompletni-pruvodce/
  - https://datanostro.com/cs/blog/cz-market/sklik-konverze-server-side-gtm/
  - https://datanostro.com/cs/blog/tracking/mereni-leadu-b2b-server-side-crm/
  - https://datanostro.com/cs/sklik-konverze/ (produktová LP, nejunikátnější téma)

## Technické SEO postřehy
- Title vzor „Téma — DataNostro“, u blogu „… — Blog DataNostro“; u /cs/platform/* zdvojená značka („— DataNostro — DataNostro“).
- URL s jazykovou složkou /cs/ a /en/, hreflang cs/en/x-default, canonical; logické složky /platform/, /blog/kategorie/, /docs/sekce/, /tools/. Sitemap 567 URL.
- Strukturovaná data velmi bohatá: Organization, SoftwareApplication + AggregateOffer, Service, HowTo, FAQPage (LP i ceník), BlogPosting, BreadcrumbList, WebSite + SearchAction.
- Technologie: Django 5.2 (server-side render, ne SPA), nginx, Cloudflare; HTML homepage ~144 kB, odezva ~1 s; meta robots v pořádku.
- Interní prolinkování: mega-menu s ~35 odkazy, patička s kompletní strukturou, „další v kategorii“, odkazy z homepage na platformní LP. Velký počet krátkých šablonových stránek (platformy, oborové články) – riziko „thin/AI“ obsahu.

## Silné stránky / slabiny / co převzít / mezera pro datalayer.cz
**Silné stránky**
- Jasný, levný a transparentní produkt (od 349 Kč/měs.) + jasně naceněná implementace (19 900 / 39 900 Kč) → nastavuje cenovou kotvu pro SST.
- Jedinečná témata CZ trhu: Seznam Event Measurement S2S, Heureka Ověřeno zákazníky, ISDOC – obsah, který zahraniční hostingy nemají.
- Silná topická autorita v SST díky objemu (blog + docs + nástroje), bohaté schema, CZ/EN.
- Důvěra přes transparentnost (status, roadmapa, DPA, exit plán).

**Slabiny**
- Žádné reference, loga, jména klientů; jednočlenný tým a krátká historie (bus factor sami přiznávají).
- Obsah z velké části hromadně publikovaný a krátký, programové oborové stránky → nižší hloubka a E-E-A-T (autor „Tým“).
- Úzké zaměření na SST/hosting – nepokrývá GA4 reporting, BI, audit celého měření, datovou vrstvu pro vývojáře, B2B CRM implementace do hloubky.
- Některé statistiky bez zdroje (40 % ad-block), nekonzistence (ISO 27001 badge).

**Co převzít**
- Číselný „problém“ blok a procesní diagram toku dat na LP SST; FAQ se schema; jasné balíčky implementace s cenou a časem dodání („5–7 dní“, „30 dní hyper-care“).
- Bezplatné diagnostické nástroje jako lead magnet (detektor sGTM, audit trackingu, kalkulačka ztracených konverzí).
- Obsah o Seznam Event Measurement a Sklik S2S – téma s vysokou aktuálností v roce 2026–2027.

**Mezera pro datalayer.cz**
- Pozicovat se jako expertní implementační partner nad libovolným hostingem (Stape/DataNostro/GCP) – audit, datová vrstva, consent, testování, dokumentace, monitoring; případně využít jejich agenturní program (white-label, 20% provize).
- Nabídnout to, co SaaS nemá: reference a případové studie s čísly, osobní konzultace, B2B/lead-gen a offline konverze z CRM, BigQuery a reporting.
- Hlubší, autorsky podepsané průvodce (SST, Consent Mode v2, Meta CAPI, SEM) s praktickými ukázkami z reálných projektů – proti jejich krátkým šablonovým článkům.
