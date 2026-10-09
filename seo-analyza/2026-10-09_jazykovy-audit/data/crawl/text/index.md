# URL: https://datalayer.vitnovotny.cz/

Webová analytika a měření · e-shopy · B2B · velké firmy

# Stavíme neprůstřelné datové základy pro váš růst.

Navrhneme, nasadíme a ověříme měření od datové vrstvy po BigQuery: GA4, Google Tag Manager, server-side tracking a Consent Mode v2. S dokumentací a s daty, která vlastníte vy.

[[ Konzultovat projekt ]](#kontakt)[[ Jak pracujeme ]](/jak-pracujeme)

Úvodní třicetiminutová konzultace zdarma · odpověď do jednoho pracovního dne

dataLayer.push({'event': 'purchase'});e-shopGTMGA4Meta CAPIBigQuery

[ Pro koho ]

## Měření podle toho, jak vyděláváte

E-shop potřebuje jiná data než firma, která prodává přes obchodníky. Vyberte si, co je vám nejblíž.

### E-shopy

GA4 ukazuje jiné tržby než administrace a reklamní systémy si přivlastňují stejné objednávky.

* e-commerce měření podle schématu GA4
* Google Ads, Meta, Sklik i Heureka se stejnou hodnotou objednávky
* marže a vratky v reportu

ShoptetUpgatesWooCommerceShopify

[Měření pro e-shopy →](/reseni/e-shopy)

### B2B a lead generation

Víte, kolik přišlo poptávek. Nevíte, které z nich se změnily v zakázku – a reklamy to nevědí taky.

* měření formulářů a hovorů bez osobních údajů v analytice
* propojení s CRM a offline konverze
* cena za lead i za zakázku

HubSpotPipedriveRaynet

[Měření pro B2B →](/reseni/b2b-a-lead-generation)

### Velké firmy

Více domén, týmů a dodavatelů. Každý měří trochu jinak a nikdo nemá celkový obraz.

* měřicí plán, názvosloví a verzování jako standard
* server-side a BigQuery ve vašem Google Cloudu
* spolupráce s IT, testy a jasná pravidla předávání

governancesGTMBigQuery

[Měření pro velké firmy →](/reseni/velke-firmy)

[ Poznáváte se? ]

## Šest situací, se kterými za námi klienti chodí nejčastěji

Každá z nich má technickou příčinu, kterou umíme najít a opravit. Žádnou z nich nevyřeší „lepší report“.

```
GA4 purchase        812
e-shop objednávky  1 046
⚠ rozdíl −22 %
```

### GA4 ukazuje o pětinu méně objednávek než e-shop

Typicky chybí měření u některých plateb, cookie lišta špatně ukládá souhlas nebo web posílá nákup dvakrát a GA4 ho zahodí.

[Audit měření →](/sluzby/audit-mereni)

```
consent default 'denied'
google_ads konverze −38 %
⚠ od nasazení lišty
```

### Po nasazení cookie lišty spadly konverze v Google Ads

Lišta blokuje tagy, ale Consent Mode v2 neposílá signály, takže Google nemá z čeho modelovat.

[Cookie lišta a Consent Mode →](/sluzby/cookie-lista-consent-mode)

```
meta Purchase   418
ga4 purchase    633
⚠ event_id chybí
```

### Meta, Google a Sklik hlásí každý jiná čísla

Část rozdílů způsobuje atribuce a je normální. Zbytek tvoří chyby: chybí Conversions API nebo deduplikace, případně každý systém dostává jinou hodnotu objednávky.

[Měření konverzí →](/sluzby/mereni-konverzi)

```
GTM tagy        146
aktivní         41 ?
verze v212 bez popisu
```

### V Tag Manageru je 140 tagů a nikdo neví, které jsou potřeba

Nánosy po agenturách zpomalují web a posílají data tam, kam nemají. Uklidíme a nastavíme pravidla, aby to vydrželo.

[Google Tag Manager →](/sluzby/google-tag-manager)

```
form odesláno   94
CRM zakázky     ?
⚠ CRM gclid neukládá
```

### Poptávky končí v e-mailu, ne v CRM ani v Google Ads

Reklamní systémy pak optimalizují na počet formulářů, ne na zakázky. Propojíme web, CRM a reklamní systémy.

[Měření pro B2B →](/reseni/b2b-a-lead-generation)

```
report zdroj    Excel
aktualizace     ručně, Po 8:00
GA4 vzorkování  ano
```

### Report pro vedení každé pondělí někdo skládá ručně

Data z GA4, reklam a e-shopu spojíme v BigQuery a postavíme dashboard, který obnovuje data sám a sedí s účetnictvím.

[BigQuery a dashboardy →](/sluzby/bigquery)

Zobrazit další (3)

Čísla v ukázkách jsou ilustrativní.

[ Služby ]

## Od sběru dat po report, kterému věří vedení

Data procházejí třemi vrstvami. Postavíme celou cestu, nebo jen tu část, která vám chybí.

01 / sběr dat

### Sběr dat

[**Implementace GA4**čísla, která sedí s tržbami](/sluzby/implementace-ga4)[**Google Tag Manager**pořádek v tazích a verzích](/sluzby/google-tag-manager)[**Datová vrstva**zadání pro vývojáře, které funguje](/sluzby/datova-vrstva)[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)[**Cookie lišta a Consent Mode**souhlas legálně a bez zbytečné ztráty dat](/sluzby/cookie-lista-consent-mode)[**Měření konverzí**Ads, Meta, Sklik i Heureka vidí totéž](/sluzby/mereni-konverzi)

02 / data a reporting

### Data a reporting

[**BigQuery**surová data bez limitů GA4](/sluzby/bigquery)[**Dashboardy a reporting**Data Studio i Power BI](/sluzby/dashboardy-a-reporting)

03 / audity a správa

### Audity a správa

[**Audit měření**zjistíme, kde data utíkají](/sluzby/audit-mereni)[**Technický audit webu**rychlost, tagy a technické SEO](/sluzby/technicky-audit-webu)[**Správa webu a měření**hlídáme, aby měření nepřestalo fungovat](/sluzby/sprava-webu-a-mereni)

[ Jak pracujeme ]

## Pět kroků, po každém dostanete konkrétní výstup

Žádné „nastavíme to“. Každý krok končí dokumentem nebo ověřením, které můžete předat vlastnímu týmu.

1. 01

   ### Audit

   Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.

   výstup: report s prioritami A/B/C
2. 02

   ### Měřicí plán

   Byznys cíle převedeme na události, parametry a pravidla pojmenování.

   výstup: měřicí plán a specifikace datové vrstvy
3. 03

   ### Implementace

   Nasadíme GTM na webu i serveru, Consent Mode v2 a konverze do reklamních systémů.

   výstup: verzované kontejnery
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   výstup: protokol testů
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   výstup: dokumentace a monitoring

[Celý postup a co od vás budeme potřebovat →](/jak-pracujeme)

[ S čím pracujeme ]

[GA4](/sluzby/implementace-ga4)[Google Tag Manager](/sluzby/google-tag-manager)[server-side GTM](/sluzby/server-side-tracking)Google Cloud Run[BigQuery](/sluzby/bigquery)[Data Studio](/sluzby/dashboardy-a-reporting)[Power BI](/sluzby/dashboardy-a-reporting)[Google Ads](/sluzby/mereni-konverzi)[Meta CAPI](/sluzby/mereni-konverzi)[Sklik / Seznam](/sluzby/mereni-konverzi)[Heureka](/reseni/e-shopy)[Shoptet](/reseni/e-shopy#shoptet)[Upgates](/reseni/e-shopy#upgates)[WooCommerce](/reseni/e-shopy#woocommerce)[Shopify](/reseni/e-shopy#shopify)[HubSpot](/reseni/b2b-a-lead-generation)[Pipedrive](/reseni/b2b-a-lead-generation)[Raynet](/reseni/b2b-a-lead-generation)

[ FAQ ]

## Než se ozvete

Nenašli jste odpověď? [Napište nám](#kontakt).

Pracujete i s menšími e-shopy, nebo jen s velkými firmami?

S obojím. U menších e-shopů obvykle začínáme auditem a opravou základního měření: GA4, consentu a konverzí. Server-side a BigQuery doporučujeme až tam, kde se vyplatí – a řekneme vám to rovnou.

Komu patří účty a data?

Vždy vám. GA4, Tag Manager, Google Cloud i reklamní účty běží pod vaší firmou, my dostáváme přístup. Po skončení spolupráce nic nemigrujete a dostanete dokumentaci, podle které může pokračovat kdokoli jiný.

Jak se tvoří cena?

Podle rozsahu: počet webů a domén, platforma e-shopu, kolik reklamních systémů napojujeme a jestli stavíme server-side nebo BigQuery. Po úvodní konzultaci dostanete nabídku s pevným rozsahem a výstupy. Provoz Google Cloudu platíte napřímo Googlu.

Spolupracujete s naším vývojářem nebo agenturou?

Ano, je to běžné. Vývojářům dodáme specifikaci datové vrstvy a testovací scénáře, s PPC agenturou se domluvíme na konverzích a jejich hodnotách.

Je server-side tracking v souladu s GDPR?

Server-side nemění nic na tom, kdy potřebujete souhlas. Nastavujeme ho tak, aby respektoval volbu v cookie liště a aby na servery třetích stran odcházelo jen to, co odcházet má. Právní posouzení konkrétního zpracování patří vašemu právníkovi.

[ Kontakt ]

## Pojďme se podívat, kde vám utíkají data

Napište nám e-mail, nebo vyplňte formulář. Na úvodní třicetiminutové konzultaci projdeme měření a řekneme vám, co opravit jako první – nezávazně a zdarma.

* E-mail[one@datalayer.cz](mailto:one@datalayer.cz)

VNOdpovídá Vít Novotnýobvykle do jednoho pracovního dne

1. Do jednoho pracovního dne navrhneme termín.
2. Na třicet minut projdeme web a cíle.
3. Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.

Web firmy

Jméno a příjmeníE-mail

Co řešíte? (nepovinné)

GA4 a Tag ManagerServer-sideCookie lišta a consentKonverze a reklamyBigQuery a reportingAuditJiné

S čím vám můžeme pomoci?+ Přidat telefon a web (nepovinné)

Telefon (nepovinné)Web (nepovinné)

Údaje použijeme jen k odpovědi na zprávu a případné nabídce. [Jak s nimi zacházíme](/zpracovani-osobnich-udaju). Žádný newsletter, žádný spam.

[ Odeslat zprávu ]

Ozveme se do jednoho pracovního dne.