# Kolo 2 – Ověření amerických / anglofonních cenových tvrzení z 1. kola

Role: ověřovatel (us-ceny). Datum přístupu u všech zdrojů: **2026-09-04**.
Metoda: u každého tvrzení stažen zdrojový HTML přes `curl` (User-Agent prohlížeče), zbaven `<script>`/`<style>`,
převeden na text a hledán doslovný řetězec; u JS/Cloudflare stránek zkoušen `r.jina.ai` prefix a `.md` endpointy
dokumentace. Kde 1. kolo stálo jen na shrnutí vyhledávače nebo na třetí straně, byl dohledán **primární ceník**.
Nové/opravené cenové řádky: `data/fragments/r2-v3-pricing.csv` (PV3-001 – PV3-022).

Výsledek z 18 ověřovaných tvrzení: **10 potvrzeno, 6 vyvráceno nebo změněno, 2 nedostupná**.

Tři nálezy, které mění text reportu `04-trh-us.md`:
1. **Elevar už není Elevar** – `getelevar.com` dnes 301 přesměrovává na `audiense.com`; produkt se jmenuje
   „Audiense Online (Elevar)“ a má **veřejný ceník** Core 225 / Advanced 650 / Premium 1 250 / Elite od 3 000 USD
   + **Analyst services +500 / +1 000 USD/měs**. Rozpor dvou cenových sad z 1. kola je tím rozhodnut.
2. **Tvrzení „enterprise retainer 5 000–15 000 USD/měs“ zůstalo bez druhého zdroje** a je nutné je označit
   za neprůkazné: nezávislé srovnání 21 agentur říká doslova „Only 3 of the 20 external firms publish a starting price“
   a Clutch u Bounteous i Adswerve uvádí „Min project size Undisclosed“.
3. **Clutch pásmo „25–199 USD/h“ je dnes širší** – výpis GA4 consulting obsahuje pásma od „< $25 / hr“ po „$200 – $300 / hr“.

---

## 1. Tabulka ověření

| Tvrzení (1. kolo) | Verdikt | Co je na zdroji dnes (doslova) | URL | Poznámka |
|---|---|---|---|---|
| **E2M**: plány 30–35 / 50–60 / 100–120 h za 1 299 / 2 099 / 3 999 USD | confirmed | „Standard **$1299** /mo … Chosen by 77 agencies / Pro **$2099** /mo … Chosen by 116 agencies / Best Value Advanced **$3999** /mo … Chosen by 207 agencies / New Marketing Squad **$9999** /mo“; řádek „Hours Per Month: **30 - 35 / 50 - 60 / 100 - 120 / 3 full-time resources**“ | e2msolutions.com/white-label-ga4-gtm-service/ | Sedí i počty agentur (77 / 116 / 207). Nadpis sekce doslova „White Label Web Analytics Tracking – Plans and Pricing“, pod ním „**No minimums. No contracts. No retainers.**“ |
| **E2M**: kadence progress callů, QBR, 24–48 h turnaround | confirmed | „Progress Call: **Once a month / Bi-weekly / Weekly / Twice a week**“; v HTML tabulce má „Dedicated Web Analyst“ a „**Quarterly Business Review**“ hodnotu `no` u Standard i Pro a `yes` u Advanced a Marketing Squad; „**24–48 Hr Turnaround:** Fast, dependable delivery“ | tamtéž | Upřesnění proti 1. kolu: QBR a dedikovaný analytik jsou **až od 3 999 USD**, ne v celé tabulce |
| **E2M**: (nové) sleva za delší období | changed (doplnění) | Přepínač „Monthly / Quarterly **10% OFF** / Yearly **15% OFF**“; `data-yearly` hodnoty „**$13250 billed yearly**“ (Standard), „$21410“ (Pro), „**$40790**“ (Advanced), „$101990“ (Marketing Squad) | tamtéž | Efektivní měsíční cena Standardu klesá z 1 299 na **1 104 USD** (25 396 Kč) → PV3-011, PV3-012 |
| **Elevar**: která cenová sada platí – Essentials/Growth/Business **200 / 450 / 950** | **refuted** | Na dnešním primárním ceníku tato sada není. Přežívá jen v Billing FAQ (updatedAt 2026-07-01): „Each standard plan (**Essentials, Growth Business, and Enterprise**) includes… if you're on Elevar's Essentials plan, you can process up to 1,000 orders per month for a flat fee of **$200/month**“ | docs.getelevar.com/docs/elevar-billing-faqs | Legacy sada (dokumentace sama mluví o „legacy plan (prior to January 2023)“). Do cenové distribuce ji nepoužívat |
| **Elevar**: sada Core/Advanced/Premium/Elite **225 / 650 / 1 250** | **confirmed** (a doplněno o Elite) | „Audiense Online — Elevar pricing … **Core $225 /mo** … **Advanced $650 /mo** … **Premium $1,250 /mo** … **Elite Starting at $3,000 /mo**“; objemy „Up to 2,000/mo, 10,000/mo, 30,000/mo, 75,000/mo + room to scale“ | audiense.com/products/audiense-online/pricing/ | **Primární zdroj.** Rozpor 1. kola rozhodnut ve prospěch sady 225/650/1 250; navíc čtvrtý tier Elite od 3 000 USD (v 1. kole chyběl). Potvrzuje i in-app dokumentace: „Explore available plans: **Core, Advanced, Premium, and Elite**“ (docs.getelevar.com, updatedAt 2026-06-04) |
| **Elevar**: „ongoing tracking support 500 USD/měs“ (v 1. kole jen ze shrnutí vyhledávače) | **confirmed** | „**Analyst services** – Get expert help with your **ongoing tagging and server-side tracking needs** as an optional add-on with a fixed monthly fee“; „Tier 1 **Up to 3 analyst requests/month +$500/month**“; „Tier 2 **Up to 10 analyst requests/month +$1000/month**“ | audiense.com/products/audiense-online/pricing/ | Doloženo na primárním ceníku, ne jen u analyzify. Add-on **není** dostupný u nejlevnějšího tieru Core – lidská ruka začíná až nad 650 USD SaaS |
| **Elevar**: reakční doba 24 h / 12 h | confirmed | „Technical support – Expert support at a speed that matches your need: **Standard (within 24h)** [Core, Advanced] / **Priority (within 12h)** [Premium, Elite]“ | tamtéž | Reakční doba je tierovací osa i u SaaS, ne jen u agentur |
| **Elevar**: identita dodavatele | **changed** | `https://getelevar.com/pricing/` vrací `HTTP/2 301 … location: https://www.audiense.com/products/audiense-online/pricing/`; produktová stránka Audiense: „**Audiense Online (Elevar)** – Website performance & conversion tracking“; dokumentace: „How to Set Up **Elevar by Audiense**“ | getelevar.com/pricing/ → audiense.com | Elevar je dnes produkt Audiense. V reportu i CSV přepsat providera na „Audiense Online (Elevar)“; `apps.shopify.com/elevar` vrací 404 |
| **Elevar**: (nové) další cenové osy | changed (doplnění) | „**$125/mo add-on per additional destination**“; „**$500/mo add-on for Tailored Start**“; „Expert installation … **$1,000 one-time fee**“; „Headless / API expert installation … **$4,500 one-time fee**“; overage „$0.50 / $0.15 / $0.10 / $0.04 per extra order“ | tamtéž | Cení se: počet destinací, objem objednávek, lidské requesty, reakční doba. Přesně osy z taxonomie § 3 → PV3-007 – PV3-010 |
| **„Enterprise retainer 5 000–15 000 USD/měs“** – je citace na zdroji? | confirmed | „Bounteous: **Retainers typically start at $15,000/month**. InfoTrust: Retainers from $8,000/month. Empirical Path: Retainers from $7,000/month. Analytics Pros: Retainers from $5,000/month. Cardinal Path: Retainers from $8,000/month. Blast Analytics: Retainers typically start at $10,000/month.“ (+ vlastní „YourGrowthPartner: Retainers from $3,000/month“) | yourgrowthpartner.io/blog/best-web-analytics-agencies/ | Přepis z 1. kola je přesný, zdroj se nezměnil. Ale je to **jediný** zdroj a je to konkurent, který se do stejného žebříčku sám zařadil s nejnižším číslem |
| **„Enterprise retainer 5 000–15 000 USD/měs“** – druhý a třetí nezávislý zdroj | **unreachable** (neprůkazné) | Nezávislé srovnání 21 agentur: „We compared 21 agencies… **Only 3 of the 20 external firms publish a starting price.**“ a u Bounteous, InfoTrust, Cardinal Path i Measurelab doslova „**No public rate card; quoted per scope**“. Clutch profily: Bounteous „**Min project size Undisclosed** … Hourly rate Undisclosed“, Adswerve totéž. rfp.wiki: „**Bounteous does not publish an official rate card or list prices on its website**“, „blended hourly rates often cited in the $150 to $300 range“, „Retainers and multi-year commitments may unlock discounts, but those terms are negotiated case by case“ | webtonic.io/blog/best-ga4-implementation-agencies ; clutch.co/profile/bounteous ; clutch.co/profile/adswerve ; rfp.wiki/…/bounteous/ | **Doporučení: řádky P5-011 – P5-017 označit jako neověřené a vyřadit z cenové distribuce.** Obecný (ne analytický) benchmark retainerů uvádí pásma „Entry $1k–5k, Mid $5k–15k, Premium $15k–50k+“ (gigradar.io) – rámcově konzistentní, ale bez kategorie analytika |
| **„SMB analytics retainer 500–3 800 USD/měs“** | confirmed (3 nezávislé zdroje) | EmberTribe: „**A retainer for ongoing analytics management typically runs $500 to $3,000 per month depending on scope.**“ + „Ongoing analytics management: **$6,000–$36,000/year**“. Dig Designs: „**Ongoing consulting and reporting for smaller businesses commonly falls between $600 and $3,800 per month**“. coders.dev: „Basic Retainer (10-20 hours/month): **$2,000 - $4,000/month**“, „Strategic Retainer (30-50 hours/month): **$5,000 - $10,000+/month**“. EGGKNITE: „Budget the governance retainer, directionally **$1,000–5,000 per month**“ | embertribe.com/blog/google-analytics-cost ; digdesigns.com/… ; coders.dev/… ; eggknite.com/… | Všechny čtyři citace 1. kola sedí doslova. Pásmo je stabilní napříč čtyřmi nezávislými průvodci – **nejlépe doložené tvrzení celé US části** |
| **Upwork medián 30 USD/h za GTM práce** | **unreachable** | `curl` i WebFetch na `upwork.com/hire/google-tag-manager-freelancers/cost/` vrací **HTTP 403**; přes r.jina.ai „Title: Just a moment… Warning: This page maybe requiring CAPTCHA“ (Cloudflare Ray ID) | upwork.com/hire/google-tag-manager-freelancers/cost/ | Číslo v 1. kole pochází ze snippetu vyhledávače, ne ze stránky. Alternativa PeoplePerHour: sazby se načítají JS, v HTML nejsou. **Marketplace medián zůstává nedoložený** – v syntéze ho používat jen jako indikaci |
| **Clutch 25–199 USD/h** | **changed** | Výpis „Top GA4 Consulting Companies – Sep 2026 Rankings … Ratings Updated: **September 4, 2026** … **293 Companies**“ obsahuje pásma **„< $25 / hr“** (Thryve Labs, Innovature BPO) až **„$200 - $300 / hr“** (Three Ventures – Roseville CA, TXI – Chicago, Valiotti Data – Kypr); minimální zakázka od „$1,000+“ po „$100,000+“ | clutch.co/it-services/analytics/ga4-consulting-services | Rozsah je **širší v obou směrech**, než uvádělo 1. kolo. Z první stránky (49 subjektů) je nejčastější pásmo 25–99 USD/h (offshore), US subjekty typicky 100–149 a výš. Žádná z firem citovaných v 1. kole (DataVinci, adMind, GA Agency, Vexis, Analytive) dnes na první stránce není – pořadí se mění → jednotlivé profily necitovat jako stabilní bod |
| **US expertní hodinovka 175–300 USD/h u konkrétních konzultantů** (Analytics Mania, Team Simmer, Napkyn, Adswerve, InfoTrust) | **refuted** | **Analytics Mania**: „No prices, hourly rates, fixed fees, or 'starting at' figures are listed on this page“, nabízí jen consulting / audit / troubleshooting call, ongoing retainer vůbec nemá. **Team Simmer**: veřejné ceny jen u kurzů (599 € / 699 € / 399 €), konzultace bez sazby. **Napkyn**: „ongoing support with **on-demand training, monthly support hours, and regular check-ins**“ – bez ceny. **Adswerve / Bounteous**: Clutch „Hourly rate Undisclosed“. **InfoTrust**: „No public rate card; quoted per scope“ | analyticsmania.com/services/ ; teamsimmer.com ; napkyn.com/services/ga4-license-and-support/ ; clutch.co/profile/adswerve ; webtonic.io/… | **Ani jeden z pěti jmenovaných konzultantů/agentur nezveřejňuje sazbu.** Tvrzení nelze opřít o konzultanty; drží se jen na cenových průvodcích a na Clutch pásmech. Pozor: `clutch.co/profile/infotrust` je **jiná firma** (kyberbezpečnost, Sydney), ne cincinnatský InfoTrust |
| **US expertní hodinovka 175–300 USD/h jako pásmo v cenových průvodcích** | confirmed | coders.dev: „Tier 3 (Expert/Agency): **$175 - $250+ /hour**: Deep expertise in BigQuery, advanced data governance, server-side tagging“ (Tier 1 $50–100, Tier 2 $100–175). EGGKNITE: „Freelance implementers (**$75–200 per hour**)“, „Specialist consultancies (**$100–300 per hour**)“. Dig Designs: „Analytics consulting rates in the U.S. typically range from about **$90 to $250 per hour**“. rfp.wiki k Bounteous: „**$150 to $300 range**“ | coders.dev/… ; eggknite.com/… ; digdesigns.com/… ; rfp.wiki/… | Čtyři nezávislé zdroje, spodní hranice „experta“ je ale spíš **100 USD** než 175 USD. Do syntézy psát „expert 150–300 USD/h“, ne „175–300“ |
| **Measurelab „Data Assurance“ – veřejná cena / minimum** | confirmed (cena neexistuje) | Na stránce „**No price, fee, minimum spend, contract length, or 'from £X' statement appears anywhere on this page.**“ Popis služby doslova: „**Subscription monitoring, maintenance and governance for a system that already works and needs to keep working**“; „SLA-backed tag management“ s „**guaranteed response times** on your tag container and tracking infrastructure“ – ale bez čísel. `measurelab.co.uk/pricing/` neexistuje (301 → `/about/`). Třetí strana: „No public rate card; quoted per scope“ | measurelab.co.uk/solutions/managed-analytics/ ; webtonic.io/… | Obsah služby (dnes nejbližší benchmark našemu produktu) je veřejný, **cena ne**. Ani minimum project size |
| **Bounteous / Adswerve / InfoTrust / Napkyn – veřejná cena nebo aspoň min. project size** | confirmed (neexistuje) | Clutch: Bounteous „Min project size **Undisclosed** / Hourly rate **Undisclosed** / Employees 250 - 999 / Chicago, IL“; Adswerve „Min project size **Undisclosed** / Hourly rate **Undisclosed** / 50 - 249 / New York, NY“; `clutch.co/profile/napkyn` a `/napkyn-analytics` vracejí **404**. Napkyn na vlastním webu cenu neuvádí | clutch.co/profile/bounteous ; clutch.co/profile/adswerve ; napkyn.com/… | Ani na agregátoru, kde 293 firem sazbu vyplňuje, ji tyto firmy nevyplnily. **Nezveřejnění ceny je u enterprise analytiky pravidlo, ne výjimka** → PV3-021, PV3-022 |

---

## 2. Co se mění v datech

**Opravené řádky** (`r2-v3-pricing.csv`):

| ID | Nahrazuje | Změna |
|---|---|---|
| PV3-001 – PV3-004 | P5-057 | Elevar: sada Essentials/Growth/Business **200 / 450 / 950** → **Core 225 / Advanced 650 / Premium 1 250 / Elite od 3 000 USD**; provider „Audiense Online (Elevar)“; zdroj primární ceník místo analyzify |
| PV3-005, PV3-006 | P5-058 | Analyst services 500 / 1 000 USD – doloženo na primárním ceníku; doplněno, že add-on **není** dostupný u tieru Core |
| PV3-017 | P5-040 – P5-046 | Clutch hodinová pásma: horní hranice **199 → 300 USD/h**, spodní **25 → pod 25 USD/h** |
| – | P5-011 – P5-017 | **Ponechat, ale označit jako neověřené** a vyřadit z výpočtu kvartilů (jediný zdroj = konkurent; primárně nedoložitelné) |

**Nové řádky:** PV3-007 – PV3-010 (Elevar destinace 125 USD/měs, Tailored Start 500 USD/měs, instalace 1 000 a 4 500 USD),
PV3-011/012 (E2M roční platba 13 250 a 40 790 USD/rok → efektivně 1 104 a 3 399 USD/měs), PV3-013 (Web Tonic „Starting at
USD $3,000 per month“ – jediná veřejná měsíční cena mezi 21 GA4 agenturami), PV3-014 – PV3-016 (Bind Media £750/projekt,
Sense Data Lab AUD 750/2 500, Digitxl AUD 1 999/4 499), PV3-018/019 (TXI a Insightful Networks), PV3-020 (EGGKNITE
freelance 75–200 USD/h), PV3-021/022 (Bounteous a Adswerve – doklad, že cena ani minimum zakázky neexistuje).

---

## 3. Dopad na závěry

### 3.1 Cenová pásma 8–10 / 16–23 / 35–45 tis. Kč: **beze změny**

US data pásma neposouvají, protože do nich nikdy nevstupovala jako přímý srovnávací trh (US ceny jsou 3–8× vyšší).
Co se ale mění, je **kvalita opory**:

- Horní kotva „enterprise 5–15 tis. USD/měs“ (115–345 tis. Kč) **vypadává z prokázaných čísel**. Po jejím vyřazení
  je nejvyšší veřejně doložený měsíční bod na US trhu **E2M Advanced 3 999 USD (92 tis. Kč)** za 100–120 hodin
  a **Web Tonic od 3 000 USD (69 tis. Kč)**. To s návrhem 39 000 Kč nekoliduje – naopak: 39 000 Kč je zhruba
  polovina nejlevnějšího doloženého US „velkého“ retaineru.
- Spodní pásmo naopak **získalo silnější oporu**: SMB retainer 500–3 800 USD/měs je potvrzen doslova ze čtyř
  nezávislých průvodců. Střed pásma (~1 750 USD ≈ 40 tis. Kč) odpovídá českému hornímu kvartilu ×2 – tj. relace
  „CZ ≈ 40–50 % US ceny“, kterou syntéza používá, drží.

### 3.2 Nejcennější nový bod pro nabídku: Elevar/Audiense jako přímá kotva pro tier 1 a 2

Poprvé máme **veřejnou cenu za lidskou ruku nad automatikou**, a to od dodavatele, který dělá přesně to,
co my nazýváme „hlídání“:

| Co Elevar/Audiense prodává | Cena | V Kč | Náš protějšek |
|---|---|---|---|
| SaaS Core (monitoring & alerts, consent, data layer, 2 destinace) | 225 USD/měs | 5 175 Kč | pod tierem Hlídání |
| SaaS Advanced + Analyst Tier 1 (**3 lidské requesty/měs**, odpověď do 24 h) | 650 + 500 = 1 150 USD/měs | **26 450 Kč** | Hlídání 8 900 Kč / Správa 19 900 Kč |
| SaaS Premium + Analyst Tier 2 (**10 requestů/měs**, odpověď do 12 h) | 1 250 + 1 000 = 2 250 USD/měs | **51 750 Kč** | Datová správa 39 000 Kč |

Argument do nabídky: **za samotný lidský add-on (3 požadavky měsíčně, bez GA4/GTM hygieny, bez QA po releasu)
platí zákazník Elevaru 11 500 Kč – víc než celý náš tier Hlídání za 8 900 Kč.** A add-on není ani dostupný
u nejlevnějšího tieru. Zároveň to potvrzuje, že **reakční doba (24 h vs. 12 h) a počet požadavků jsou prodejné
tierovací osy** i u produktu, který má vlastní monitoring – přesně model, který navrhujeme.

### 3.3 Co je potřeba přepsat v `04-trh-us.md`

1. **§ 2a a § 3, řádek Elevar**: nahradit „SaaS Essentials 200 / Growth 450 / Business 950“ za
   „Core 225 / Advanced 650 / Premium 1 250 / Elite od 3 000 USD“, doplnit „Analyst services +500 / +1 000 USD“,
   destinace „+125 USD/měs“, a přejmenovat providera na **Audiense Online (Elevar)**. Přidat větu, že
   `getelevar.com` dnes přesměrovává na `audiense.com` (akvizice/rebranding).
2. **§ 1 bod 2 a § 4**: u „enterprise agentury 5 000–15 000 USD/měs“ doplnit značku **neprůkazné (jediný zdroj,
   sám konkurent)** a nepoužívat jako cenový bod. Místo toho citovat doložitelné: „Only 3 of the 20 external firms
   publish a starting price“ a „No public rate card; quoted per scope“.
3. **§ 1 bod 2 a § 4**: „Clutch pásma 25–199 USD/h“ → „**< 25 až 200–300 USD/h**, 293 firem, US subjekty typicky
   100–149 USD/h a výš“. „Upwork medián 30 USD“ ponechat, ale označit jako **nedoloženo na zdroji (403)**.
4. **§ 4**: „expert 175–300 USD/h“ → „**150–300 USD/h dle cenových průvodců; žádný jmenovaný konzultant
   (Analytics Mania, Team Simmer, Napkyn, Adswerve, InfoTrust) sazbu nezveřejňuje**“.
5. **§ 3 (E2M)**: doplnit, že QBR a dedikovaný analytik jsou až od tieru Advanced (3 999 USD) a že roční platba
   dává 15 % slevu (Standard efektivně 1 104 USD/měs).
6. Doplnit **Web Tonic (od 3 000 USD/měs)** jako jedinou GA4 agenturu s veřejnou měsíční cenou v nezávislém
   srovnání 21 agentur – užitečný protipříklad k tvrzení „nikdo v USA veřejnou cenu nemá“ (přesněji: má ji
   1 z 20, a ta je full-service, ne čistá analytika).

### 3.4 Co zůstává neověřitelné

- **Upwork / Fiverr sazby** – Cloudflare 403 na `curl`, WebFetch i r.jina.ai; PeoplePerHour renderuje ceny až JS.
  Marketplace medián (30 USD/h) nelze doložit z primární stránky, jen ze snippetu vyhledávače.
- **Enterprise měsíční retainery US agentur** – žádná z nich nezveřejňuje cenu ani minimum zakázky; jediná cesta
  je RFP/mystery shopping. Čísla z yourgrowthpartner.io jsou dnes stále na stránce, ale nelze je ověřit u zdroje.
- **Clutch profily jednotlivých firem** – `clutch.co` vrací 403 na `curl` i WebFetch, přes r.jina.ai projde jen
  část dotazů (IP reputation 401). Výpis kategorie GA4 consulting se stáhnout podařilo, profily jen tři ze šesti.
