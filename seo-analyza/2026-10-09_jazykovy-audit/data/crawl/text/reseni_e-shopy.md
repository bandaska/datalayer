# URL: https://datalayer.vitnovotny.cz/reseni/e-shopy

1. [Úvod](/)
2. E-shopy

[ řešení pro e-shopy ]

# Měření e-shopu od datové vrstvy po marži v reportu

Kompletní měření e-shopu tvoří datová vrstva, GA4 s e-commerce událostmi, cookie lišta s Consent Mode v2 a konverze pro Google Ads, Metu, Sklik i Heureku. Podle velikosti e-shopu přidáme server-side, marži a BigQuery. Navážeme na to, co platforma změří sama, a zbytek doplníme tak, aby objednávky v reportech odpovídaly administraci.

[[ Konzultovat měření e-shopu ]](#kontakt)[[ Co platforma změří sama ]](#platformy)

Třicet minut zdarma · stačí adresa e-shopu · odpovídáme do jednoho pracovního dne

* Šest platforem od Shoptetu po vlastní řešení
* Každou implementaci ověříme proti administraci
* Účty, kontejnery i data zůstávají vaše

[ symptomy ]

## Poznáváte se?

Většina e-shopů, které k nám přijdou, nemá rozbité měření. Má měření, kterému nikdo nevěří, a přesto podle něj rozhoduje o reklamě.

ga4

### GA4 ukazuje méně objednávek než administrace

Rozdíl se mění měsíc od měsíce a nikdo neumí říct, kolik z něj tvoří souhlas, kolik platební brána a kolik chyba měření.

purchase

### GA4 počítá jeden nákup dvakrát

Nativní integrace platformy a k tomu vlastní tag v GTM: tržby rostou jen na papíře a kampaně vypadají lépe, než jsou.

meta

### Meta hlásí jiný počet nákupů než e-shop

Pixel běží bez Conversions API, bez deduplikace přes `event_id` nebo s nízkou kvalitou párování.

poas

### Optimalizujete na obrat, ne na zisk

ROAS a PNO vypadají dobře, ale po odečtení marže, dopravy a vratek některé kampaně prodělávají.

[ co uděláme ]

## Z čeho se skládá kompletní měření e-shopu

Osm vrstev, které na sebe navazují. Chyba ve spodní vrstvě zkreslí všechny nad ní, proto začínáme vždy odspodu.

datalayer-spec.md

### Datová vrstva

Události od zobrazení produktu po nákup ve stejném formátu – z platformy, nebo jako zadání pro vývojáře.

[Datová vrstva →](/sluzby/datova-vrstva)

ga4

### GA4 e-commerce

Doporučené události od `view_item_list` po `refund` a tržby, které sedí s administrací.

[Implementace GA4 →](/sluzby/implementace-ga4)

consent

### Cookie lišta a Consent Mode v2

Rovnocenné odmítnutí a čtyři signály souhlasu dřív, než web spustí první tag, s protokolem z testu.

[Cookie lišta a Consent Mode →](/sluzby/cookie-lista-consent-mode)

gtm-server

### Server-side měření

Server-side GTM na subdoméně e-shopu a vašem Google Cloudu, vždy v souladu se souhlasem.

[Server-side tracking →](/sluzby/server-side-tracking)

ads

### Konverze pro reklamní systémy

Google Ads, Meta s Conversions API, Sklik, Heureka a Seznam Nákupy vidí stejný nákup se stejnou hodnotou.

[Měření konverzí →](/sluzby/mereni-konverzi)

margin

### Marže a zisk

Hodnota konverze podle marže, kterou doplní server, ne prohlížeč.

[Proč ne v prohlížeči →](#urovne)

bq

### BigQuery

Export GA4 spojíme s objednávkami, vratkami a náklady na reklamu – bez vzorkování.

[BigQuery →](/sluzby/bigquery)

dashboard

### Dashboard

Jeden report pro vedení: tržby, marže, náklady, PNO a POAS podle kanálů.

[Dashboardy a reporting →](/sluzby/dashboardy-a-reporting)

[ tok dat ]

## Jak data tečou z e-shopu do reportu

Každý nákup vzniká jednou – v datové vrstvě. Odtud ho Tag Manager pošle do GA4 a přes server do reklamních systémů.

prohlížeč

* e-shop na kterékoli platformě
* dataLayer: view\_item … purchase
* cookie lišta se signály souhlasu
* GTM web

server na doméně e-shopu

* sGTM na data.vas-eshop.cz
* zaplacené a vrácené objednávky z backendu
* marže z feedu nebo ERP

reklamní a analytické systémy

* GA4 z GTM web
* Google Ads s rozšířenými konverzemi
* Meta Conversions API a Sklik
* Heureka a Seznam Nákupy z GTM web

data a report

* BigQuery: GA4, backend a Google Ads
* dashboard v Data Studiu (dříve Looker Studio) nebo Power BI

Schéma měření e-shopu: GTM web pošle události podle souhlasu do GA4 a na server-side GTM, který přidá objednávky z backendu a marži a odešle konverze do reklamních systémů.

* **Nákup i bez děkovací stránky.** Zaplacenou objednávku pošle server, i když zákazník zavře prohlížeč.
* **Souhlas platí v každém kroku.** Bez něj marketingová data neodejdou ani ze serveru.

[ úrovně ]

## Čtyři úrovně měření podle toho, kde je váš e-shop

Úrovně na sebe navazují a skončit můžete u kterékoli, základ ale musí sedět vždy. Když nevíte, kde jste, začneme [auditem měření](/sluzby/audit-mereni), u migrace nebo nového e-shopu [specifikací datové vrstvy](/sluzby/datova-vrstva).

úroveň 1

### Základ

Datová vrstva, GA4 e-commerce, Consent Mode v2 a konverze pro Ads, Metu, Sklik i Heureku. Čísla sedí s administrací.  
**Přístup:** nativní integrace, s více kanály GTM

úroveň 2

### Spolehlivé konverze

Server-side GTM, Meta Conversions API s deduplikací a nákup ze serveru po zaplacení. Pro e-shopy, kde reklama tvoří velkou část objednávek.  
**Přístup:** server-side

úroveň 3

### Marže

Hodnota konverzí podle marže, kterou doplní server, data o košíku v Google Ads a vratky.  
**Přístup:** server-side

úroveň 4

### Jeden report

GA4, objednávky, vratky a náklady na reklamu v BigQuery a dashboard, kterému věří marketing i finance.  
**Přístup:** BigQuery nad úrovní 1, lépe 2 a 3

Proč marži nikdy neposíláme do prohlížeče

Co je v datové vrstvě, vidí každý, kdo otevře nástroje pro vývojáře – včetně konkurence. Proto do prohlížeče posíláme jen prodejní cenu a marži doplní server-side GTM z feedu nebo ERP těsně před odesláním konverze do Google Ads nebo Mety. Reklamní systémy pak optimalizují na hrubý zisk a nákupní ceny zůstanou u vás.

prohlížeč

* value: 2 337 Kč
* jen prodejní cena

server-side GTM

* maržová tabulka z feedu nebo ERP
* přepočet hodnoty na marži

nákupní ceny server neopustí

Google Ads

* value: 811 Kč
* hodnota podle marže

Ukázkový příklad: prohlížeč pošle hodnotu objednávky 2 337 Kč, server-side GTM ji podle maržové tabulky přepočítá a do Google Ads odešle marži 811 Kč.

[ platformy ]

## Co vaše platforma změří sama – a co chybí

Většina platforem umí napojení na GA4 a reklamní systémy, ale jen v rozsahu, který si sama určila. Co chybí, doplníme: datovou vrstvu, server-side, české služby i marži.

ShoptetUpgatesShopifyWooCommercePrestaShopVlastní řešení

**Umí:** GA4 s e-commerce událostmi, vlastní dataLayer, cookie lištu s Consent Mode v2 a napojení Mety, Google Ads i Skliku z administrace.

**Chybí:** formát GA4 `items` v dataLayeru, marže a vlastní parametry. Nativní události mají stejné názvy jako tagy v GTM, takže hrozí dvojí nákup.

**Umí:** GA4 přes doplněk Google Site Tag, GTM se systémovým dataLayerem pro produkt, košík a objednávku a cookie lištu s volbou kategorií.

**Chybí:** události ze seznamů produktů a kroků pokladny a serverové měření. Souběh GTM a Google Site Tag může zdvojit konverze.

**Umí:** GA4 a Google Ads přes aplikaci Google & YouTube, cookie lištu s Consent Mode v2 a Metu přes aplikaci Facebook & Instagram.

**Chybí:** GTM v pokladně běží jen jako vlastní pixel v sandboxu a Consent Mode v2 k němu musíte přidat ručně. Skripty na děkovací stránce skončily u plánu Plus 28. srpna 2025, u ostatních 26. srpna 2026.

Postavíme vlastní pixel a ohlídáme, aby aplikace a pixel neposílaly stejný nákup dvakrát.

**Umí:** bez pluginů nic. Rozšíření Google Analytics for WooCommerce pokryje hlavní e-commerce události a Consent Mode přes WP Consent API, plugin Meta přidá Pixel a katalog.

**Chybí:** nákup bez návratu z platební brány na děkovací stránku a pořádek v pluginech, které posílají stejné události vícekrát. Nákup proto odešleme ze serveru po zaplacení.

**Umí:** GA4 s e-commerce měřením přes oficiální modul Google Analytics.

**Chybí:** Tag Manager, Consent Mode a české služby – řeší je moduly třetích stran různé kvality, které se mohou překrývat.

**Umí:** nic – měření je přesně tak dobré, jak dobré bylo zadání, i u Magenta, Adobe Commerce nebo Shopsysu.

**Chybí:** specifikace. Dodáme měřicí plán, datovou vrstvu ve formátu GA4 a automatický test pro každý release, víc u služby [Datová vrstva](/sluzby/datova-vrstva).

Stav podle dokumentace platforem k říjnu 2026, při auditu ověříme aktuální stav.

[ postup ]

## Jak postupujeme

Stejných pět kroků jako u ostatních služeb. Na konci dostanete protokol validace s porovnáním proti administraci, dokumentaci a předávací hovor se záznamem.

1. 01

   ### Audit

   Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.

   od vás: přístupy pro čtení
2. 02

   ### Měřicí plán

   Byznys cíle převedeme na události, parametry a pravidla pojmenování.

   od vás: hodinová schůzka a schválení plánu
3. 03

   ### Implementace

   Nastavíme datovou vrstvu nebo mapování platformy, GTM, GA4, Consent Mode v2 a reklamní systémy včetně Skliku a Heureky, podle úrovně i server-side a marži.

   od vás: úpravy šablony od vývojářů, pokud jsou potřeba, a DNS záznam pro server-side
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

[ checklist ]

## Jak poznáte, že měření e-shopu funguje

Platí všech pět bodů? Můžete jít dál k marži nebo BigQuery, jinak doporučujeme začít [auditem měření](/sluzby/audit-mereni).

* Každá objednávka se v GA4 objeví právě jednou, i po obnovení děkovací stránky.
* Rozdíl objednávek mezi GA4 a administrací je stabilní a umíte ho vysvětlit.
* Před souhlasem ani po odmítnutí web nespustí žádný marketingový tag.
* Google Ads, Meta a Sklik dostávají stejný nákup se stejnou hodnotou.
* Když měření přestane fungovat, dozvíte se to do 24 hodin, ne za měsíc.

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: na co si dát pozor u jednotlivých platforem

* **Shoptet** posílá signály `ad_user_data` a `ad_personalization` pod souhlasem „Profilace“. Nové parametry nativní integrace v dataLayeru nejsou a deduplikaci u Conversions API dokumentace nepopisuje.
* **Upgates** umožní nastavit ID kontejneru zvlášť pro každou jazykovou verzi a vlastní konverzní kódy s dynamickými zástupci pro cookies. Vlastní skripty mohou kolidovat se systémovými a podporu Consent Mode v2 ověříme přímo na liště šablony.
* **Shopify:** vlastní pixel odebírá standardní události Web Pixels od `product_viewed` po `checkout_completed` a převede je do datové vrstvy, třeba `checkout_completed` na `purchase`. Tag Assistant s ním nefunguje, testujeme přes Shopify Pixel Helper a DebugView. Aplikace Google & YouTube propojí přímo jen jeden účet Google Ads.
* **WooCommerce:** datovou vrstvu napojíme na hooky WooCommerce a pluginy uklidíme tak, aby každou událost posílal jen jeden zdroj. Pozor na konflikty s cache a optimalizačními pluginy, rozsah Conversions API v pluginu Meta je potřeba ověřit.
* **PrestaShop:** chování modulů se liší mezi verzemi 1.7, 8.x a novějšími a moduly pro „one-page checkout“ mění kroky pokladny.
* **Vlastní řešení:** nákup pošle backend přímo do GA4, Mety a Skliku a ve specifikaci určíme, jestli ceny posíláte s DPH, nebo bez DPH.

Nestačí nativní integrace GA4, kterou má Shoptet, Upgates nebo Shopify?

Pro menší e-shop s jedním reklamním kanálem často stačí – nastavíte ji vyplněním ID. Limity se ukážou, když potřebujete vlastní parametry, marži nebo server-side, nebo když se nativní integrace potká s tagy z GTM a GA4 započítá nákup dvakrát. Při auditu proto nejdřív zjistíme, co platforma skutečně posílá, a pak navrhneme, co nechat nativně a co převzít do GTM.

Proč GA4 nikdy neukáže všechny objednávky z administrace?

GA4 měří chování v prohlížeči, administrace účtuje objednávky. Část návštěvníků odmítne analytické cookies, někdo blokuje skripty nebo se z platební brány nevrátí a v administraci jsou i telefonické a testovací objednávky. Univerzální „normální“ rozdíl neexistuje – důležité je, aby byl stabilní a abyste ho uměli vysvětlit.

Kolik měření e-shopu stojí?

Ceník neuvádíme, protože dva e-shopy na stejné platformě mohou potřebovat jiný rozsah. Cenu určuje hlavně platforma, stav současného měření, počet reklamních systémů a trhů a zvolená úroveň. Provoz server-side platíte napřímo Googlu, který uvádí zhruba 45 dolarů měsíčně za server a doporučuje aspoň dva. Nabídku s pevným rozsahem a termínem dostanete po úvodní konzultaci a krátkém auditu.

Jak dlouho implementace trvá a musí do ní zasahovat náš vývojář?

Délka záleží hlavně na platformě, úrovni a počtu reklamních systémů, termín dostanete v nabídce. Na Shoptetu, Upgates a Shopify se většinou obejdeme bez vývojáře, u WooCommerce, PrestaShopu a vlastních řešení obvykle potřebujeme úpravu šablony nebo kód – vývojářům dodáme přesnou specifikaci a výsledek otestujeme. Nejvíc času zabere validace: měření necháme běžet a porovnáme ho s administrací.

Komu budou patřit účty, kontejnery a data?

Vám. GA4, Tag Manager, Google Cloud, BigQuery i reklamní účty zakládáme na vaši firmu, nebo pracujeme ve stávajících, a my v nich máme jen uživatelský přístup, který můžete kdykoli odebrat. Kontejnery předáme s dokumentací a nikde nenecháme proprietární skript ani server, na kterém by měření záviselo.

Je měření v souladu s GDPR a pravidly pro cookies?

Marketingové a analytické tagy web spustí až po souhlasu, odmítnutí je rovnocenné přijetí a Consent Mode v2 posílá Googlu správné signály. Vycházíme z § 89 odst. 3 zákona o elektronických komunikacích a doporučení ÚOOÚ a do GA4 neposíláme osobní údaje v čitelné podobě. Nejsme advokátní kancelář – texty zásad a právní posouzení by měl schválit váš právník.

[ pokračujte ]

[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)[**Měření konverzí**Ads, Meta, Sklik i Heureka vidí totéž](/sluzby/mereni-konverzi)[**Audit měření**zjistíme, kde data utíkají](/sluzby/audit-mereni)

[ Kontakt ]

## Ukažte nám svůj e-shop. Řekneme, kde utíkají objednávky

Na třicetiminutové konzultaci zdarma projdeme měření, platformu a reklamní kanály a řekneme, co opravit jako první.

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