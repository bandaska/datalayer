# /sluzby/cookie-lista-consent-mode

## Hlavička stránky (title, meta, OG)
- `title`: Cookie lišta a Consent Mode v2 – nastavení | datalayer.cz
- `meta:description`: Vybereme a nastavíme cookie lištu, Consent Mode v2 a GTM. Ověříme, co web posílá před souhlasem, a vysvětlíme dopad na data. Konzultace zdarma.
- `meta:og:title`: Cookie lišta a Consent Mode v2 – nastavení | datalayer.cz
- `meta:og:description`: Vybereme a nastavíme cookie lištu, Consent Mode v2 a GTM. Ověříme, co web posílá před souhlasem, a vysvětlíme dopad na data. Konzultace zdarma.
- `meta:twitter:title`: Cookie lišta a Consent Mode v2 – nastavení | datalayer.cz
- `meta:twitter:description`: Vybereme a nastavíme cookie lištu, Consent Mode v2 a GTM. Ověříme, co web posílá před souhlasem, a vysvětlíme dopad na data. Konzultace zdarma.

## Strukturovaná data (JSON-LD) – texty
- `jsonld:itemListElement.name`: Úvod
- `jsonld:itemListElement.name`: Služby
- `jsonld:itemListElement.name`: Cookie lišta a Consent Mode v2
- `jsonld:name`: Cookie lišta a Google Consent Mode v2
- `jsonld:serviceType`: Nastavení a audit cookie lišty, Consent Mode v2 a Google Tag Manageru
- `jsonld:description`: Výběr a nastavení cookie lišty, Google Consent Mode v2 v režimu basic nebo advanced a napojení všech tagů v GTM na souhlas. Audit, co web posílá před souhlasem, testovací protokol a vysvětlení dopadu na data. Technické nastavení podle § 89 odst. 3 zákona č. 127/2005 Sb. a doporučení ÚOOÚ; právní posouzení zajišťuje právník klienta.
- `jsonld:areaServed.name`: Česká republika
- `jsonld:audience.audienceType`: E-shopy, B2B firmy a velké firmy
- `jsonld:mainEntity.name`: Je cookie lišta povinná?
- `jsonld:mainEntity.acceptedAnswer.text`: Pokud web používá jen technicky nezbytné cookies, třeba pro košík nebo přihlášení, lištu se souhlasem nepotřebuje – informační povinnost ale trvá. Jakmile používáte analytiku, reklamní pixely nebo remarketing, potřebujete podle § 89 odst. 3 zákona o elektronických komunikacích předchozí prokazatelný souhlas, a to i pro GA4. Výjimka pro malé weby neexistuje.
- `jsonld:mainEntity.name`: Je Google Consent Mode v2 povinný?
- `jsonld:mainEntity.acceptedAnswer.text`: Zákon vyžaduje souhlas, ne Consent Mode. Google ale Consent Mode fakticky vyžaduje po inzerentech, kteří chtějí u uživatelů z EHP měřit konverze a personalizovat reklamu – bez signálů souhlasu přicházíte o remarketingová publika. Od 15. června 2026 navíc Google Analytics u účtů propojených s Google Ads řídí reklamní data jen přes Consent Mode.
- `jsonld:mainEntity.name`: Proč po nasazení lišty klesly konverze?
- `jsonld:mainEntity.acceptedAnswer.text`: Část poklesu je očekávaná, protože nástroje dřív měřily i lidi bez souhlasu. Často jde ale o chybu: basic režim bez modelování, tagy, které naběhnou až po znovunačtení stránky, výchozí stav až po GTM nebo nastavení bez signálu ad_user_data, které blokuje rozšířené konverze. Audit proto obsahuje i odhad dopadu na data.
- `jsonld:mainEntity.name`: Kolik to stojí a jak dlouho to trvá?
- `jsonld:mainEntity.acceptedAnswer.text`: Cenu skládáme podle rozsahu: počet domén a jazyků, tagů a nástrojů, jestli lištu vybíráme, nebo vyvíjíme, a kolik kódů běží mimo GTM. Licenci CMP platíte přímo poskytovateli. Délka závisí na stejných faktorech a nejvíc času obvykle zabere rozhodnutí o textech a režimu s právníkem.
- `jsonld:mainEntity.name`: Jste právníci? Kdo připraví texty lišty?
- `jsonld:mainEntity.acceptedAnswer.text`: Nejsme advokátní kancelář. Odpovídáme za technické nastavení a připravíme podklady: seznam cookies, účely, poskytovatele a dobu uložení. Z nich právník sestaví texty lišty a zásady cookies a vývojáři nebo správce GTM dostanou od nás seznam oprav.
- `jsonld:mainEntity.name`: Komu patří lišta, účet CMP a přístupy?
- `jsonld:mainEntity.acceptedAnswer.text`: Vám. Účet CMP i kontejner GTM zůstávají vaše a licenci CMP platíte přímo poskytovateli. Pracujeme s přístupy pro čtení, při nastavení pro úpravy, a po předání je můžete kdykoli odebrat.

## Obsah stránky

### [sekce] 
- `a`: Přeskočit na obsah
- `a`: Úvod
- `a`: Služby
- `li`: Cookie lišta a Consent Mode v2
- `p`: [ consent ]
- `h1`: Cookie lišta a Consent Mode v2 nastavené a ověřené
- `p`: Cookie lišta sbírá souhlas návštěvníka, Consent Mode v2 ho předává značkám Googlu a Google Tag Manager podle něj spouští ostatní tagy, třeba Metu nebo Sklik. Lištu vybereme a nastavíme tak, aby tagy souhlas respektovaly od prvního načtení stránky. Pak ověříme, co web posílá před souhlasem a po něm, a vysvětlíme dopad na data.
- `a`: [ Zkontrolovat můj web ]
- `a`: [ Co web posílá před souhlasem ]
- `p`: Úvodní konzultace zdarma · nejsme advokátní kancelář, s právníkem rádi spolupracujeme
- `li`: Nastavení podle zákona a doporučení ÚOOÚ
- `li`: Cookiebot, české CMP i vlastní lišta
- `li`: Výsledek doložíme záznamem z prohlížeče

### [sekce] Poznáváte se?
- `p`: [ symptomy ]
- `h2`: Poznáváte se?
- `p`: „Cookie lištu přece máme.“ To, že web lištu zobrazí, ale ještě neznamená, že tagy souhlas respektují. Ani certifikovaná CMP podle Googlu sama soulad nezaručí – rozhoduje, jak ji nasadíte.
- `span`: před souhlasem
- `h3`: Tagy běží bez ohledu na lištu
- `div`: Meta Pixel, Sklik nebo chatovací widget odešlou data ještě před kliknutím, nebo dokonce po odmítnutí.
- `span`: unassigned
- `h3`: Consent Mode startuje pozdě
- `div`: Výchozí stav přichází až po načtení GTM, chybí nové reklamní signály a v GA4 roste podíl „Unassigned“.
- `span`: konverze
- `h3`: Po nasazení lišty spadly konverze
- `div`: Tagy naběhnou až na další stránce nebo basic režim běží bez rozhodnutí a data mizí i u lidí, kteří souhlasili.
- `span`: ÚOOÚ
- `h3`: Lišta neodpovídá doporučení ÚOOÚ
- `div`: Chybí „Odmítnout“ v první vrstvě, tlačítka nejsou rovnocenná, nebo lišta jen informuje tlačítkem „Rozumím“.

### [sekce] Co uděláme a co dostanete
- `p`: [ výstupy ]
- `h2`: Co uděláme a co dostanete
- `p`: Službu nabízíme ve dvou variantách: audit, když lištu máte, a nastavení na klíč, když ji zavádíte nebo měníte.
- `span`: inventory.csv
- `h3`: Inventura cookies a tagů
- `div`: Všechny cookies, tagy a skripty včetně kódů mimo GTM – v šabloně, pluginech, chatu nebo videu.
- `span`: cmp
- `h3`: Lišta a podklady pro texty
- `div`: Doporučíme CMP nebo navrhneme vlastní lištu a připravíme technické podklady pro texty, které pak schválí právník.
- `span`: consent-mode
- `h3`: Consent Mode v2
- `div`: Výchozí stav před načtením značek, aktualizace po volbě, všechny čtyři signály a režim podle rozhodnutí s právníkem.
- `span`: gtm · sgtm
- `h3`: Napojení všech tagů
- `div`: Tagy Mety, TikToku nebo LinkedInu naběhnou hned po souhlasu. Stav souhlasu předáme i do server-side GTM a backendu, pokud je máte.
- `a`: server-side GTM
- `span`: sem
- `h3`: Sklik a Seznam Event Measurement
- `div`: Souhlas předáme i novému měření Seznamu – přes IAB TCF, nebo ve formátu Google Consent Mode.
- `span`: protocol.har
- `h3`: Protokol a dokumentace
- `div`: Osm testovacích scénářů se záznamem HAR, matice tagů a souhlasů, popis verzí GTM a seznam oprav pro vývojáře.

### [sekce] Jak souhlas putuje od lišty k tagům
- `p`: [ tok souhlasu ]
- `h2`: Jak souhlas putuje od lišty k tagům
- `p`: Pořadí je klíčové. Výchozí stav souhlasu musí platit dřív, než prohlížeč načte jakoukoli značku – jinak se značky Googlu chovají, jako by Consent Mode neexistoval.
- `span`: před GTM
- `li`: consent default: denied pro všechny signály
- `p`: musí proběhnout jako první
- `span`: načtení GTM
- `li`: značky Googlu: v advanced režimu jen ping bez cookies, v basic nic
- `li`: Meta, Sklik, TikTok: čekají na souhlas
- `span`: volba v liště
- `li`: web zobrazí lištu
- `li`: návštěvník přijme, nebo odmítne
- `span`: po volbě
- `li`: consent update a událost cookie_consent_update
- `li`: souhlas: plné měření Googlu a tagy s udělenou kategorií
- `li`: odmítnutí: ostatní tagy dál nic neposílají
- `figcaption`: Tok souhlasu: výchozí stav denied platí ještě před načtením GTM, značky Googlu v advanced režimu posílají jen pingy bez cookies a ostatní tagy čekají. Po volbě v liště přijde aktualizace souhlasu a GTM spustí tagy s udělenou kategorií. Po odmítnutí ostatní tagy nic neposílají.
- `li`: Googlu stačí Consent Mode. Meta, Sklik nebo TikTok ho nečtou a potřebují podmínku souhlasu v GTM.
- `li`: Hned po volbě. Tagy naběhnou na stránce, kde návštěvník klikl, ne až na další.
- `li`: Méně dat je v pořádku. Nástroje dřív měřily i lidi bez souhlasu, část konverzí Google dopočítá modelováním.

### [sekce] Basic, nebo advanced? A jakou lištu?
- `p`: [ rozhodnutí ]
- `h2`: Basic, nebo advanced? A jakou lištu?
- `p`: Režim i typ lišty volíme spolu s vámi a s právníkem nebo DPO. Neprodáváme žádnou CMP, nastavíme kteroukoli a ověříme i lištu e-shopové platformy, třeba Shoptetu.
- `span`: basic
- `h3`: Basic: konzervativní varianta
- `div`: Značky Googlu čekají na souhlas a před volbou neodejde nic.
- `li`: Google Ads modeluje konverze jen obecným modelem
- `li`: GA4 chování bez souhlasu nemodeluje
- `li`: hodí se pro přísný právní výklad, regulované obory a malou návštěvnost
- `span`: advanced
- `h3`: Advanced: přesnější modelování
- `div`: Prohlížeč načte značky Googlu hned a bez souhlasu odejdou jen pingy bez cookies.
- `li`: Google Ads modeluje konverze modelem pro váš účet
- `li`: GA4 modeluje chování, pokud web splní prahy
- `li`: hodí se pro inzerenty v Google Ads s dostatkem návštěv, když právník souhlasí s přenosem pingů
- `h3`: Mezinárodní CMP
- `div`: Cookiebot, CookieYes nebo Usercentrics pro víc zemí a domén a pro vydavatele, kteří potřebují certifikovanou CMP s TCF.
- `h3`: Česká CMP
- `div`: Cookies správně nebo Consentio s nižší licencí, fakturací v korunách a českou podporou pro malé a střední weby a e-shopy.
- `h3`: Vlastní lišta
- `div`: Ve vašem designu, s minimem kódu a bez licence, pro weby bez reklamy třetích stran. Záznam souhlasů pak řešíme zvlášť.

### [sekce] Tři věci, které říká zákon, ÚOOÚ a Google
- `p`: [ právní rámec ]
- `h2`: Tři věci, které říká zákon, ÚOOÚ a Google
- `p`: Technické nastavení stavíme na těchto pravidlech. U každého uvádíme zdroj, ať si ho právník může ověřit.
- `span`: § 89 ZEK
- `h3`: Souhlas předem
- `div`: K ukládání a čtení netechnických údajů v zařízení návštěvníka potřebujete předchozí prokazatelný souhlas. Výjimku má jen technicky nezbytné ukládání.
- `span`: Q&A ÚOOÚ
- `h3`: Odmítnout stejně snadno jako přijmout
- `div`: „Odmítnout“ patří do první vrstvy, tlačítka musí být rovnocenná a zavření lišty souhlas není. Odvolat souhlas musí jít stejně snadno jako ho udělit.
- `span`: Google
- `h3`: Souhlas i s personalizací reklam
- `div`: U uživatelů z EHP chce Google platný souhlas s cookies i s personalizací reklam. Při nesouladu může pozastavit publika a měření konverzí.
- `p`: Nejde o právní radu
- `div`: Nejsme advokátní kancelář. Texty lišty, zásady cookies a právní titul pro další zpracování patří vašemu právníkovi nebo pověřenci. Rádi s ním spolupracujeme a dodáme mu technické podklady.

### [sekce] Jak to probíhá
- `p`: [ postup ]
- `h2`: Jak to probíhá
- `p`: Stejných pět kroků jako u všech našich služeb. Nejvíc času obvykle zabere rozhodnutí o režimu a textech s právníkem.
- `li`: 01 Audit Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací. od vás: přístupy pro čtení
- `h3`: Audit
- `p`: Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.
- `li`: 02 Měřicí plán Byznys cíle převedeme na události, parametry a pravidla pojmenování. od vás: hodinová schůzka a schválení plánu
- `h3`: Měřicí plán
- `p`: Byznys cíle převedeme na události, parametry a pravidla pojmenování.
- `li`: 03 Implementace Po rozhodnutí s právníkem nastavíme lištu, Consent Mode v2, tagy v GTM, Sklik a SEM, případně server-side GTM. od vás: kontakt na právníka nebo DPO, přístupy pro úpravy do GTM a CMP, případně vývojář
- `h3`: Implementace
- `p`: Po rozhodnutí s právníkem nastavíme lištu, Consent Mode v2, tagy v GTM, Sklik a SEM, případně server-side GTM.
- `li`: 04 Validace Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM. od vás: testovací objednávka a export z administrace
- `h3`: Validace
- `p`: Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.
- `li`: 05 Předání a podpora Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu. od vás: předávací schůzka
- `h3`: Předání a podpora
- `p`: Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

### [sekce] Co web posílá před souhlasem a po něm
- `p`: [ ověření ]
- `h2`: Co web posílá před souhlasem a po něm
- `p`: Ověření je jádro naší práce. Výsledek dostanete jako záznam síťových požadavků z vašeho webu a screenshoty – ne jen jako „máte to dobře“.
- `pre`: ✓ googletagmanager.com/gtm.js 200 ◐ …/g/collect?en=page_view&gcs=G100 ping bez cookies ✕ connect.facebook.net/…/fbevents.js čeká na souhlas ✕ sul.js čeká na souhlas
- `span`: ilustrační ukázka
- `h3`: Před souhlasem
- `div`: Odchází jen ping Googlu bez cookies, skripty Mety, Skliku a TikToku čekají na souhlas.
- `pre`: ✓ …/g/collect?en=page_view&gcs=G111 200 ✓ connect.facebook.net/…/fbevents.js 200 ✓ sul.js 200 ✓ analytics.tiktok.com 200
- `span`: ilustrační ukázka
- `h3`: Po souhlasu
- `div`: GTM spustí tagy s udělenou kategorií a Google měří s cookies.
- `h3`: Co ověří testovací protokol
- `li`: první návštěva bez kliknutí: od Googlu nanejvýš ping bez cookies, od ostatních nic
- `li`: po odmítnutí nenaběhne nic ani na další stránce, ani po změně volby v patičce
- `li`: po přijetí naběhnou tagy hned, na stejné stránce
- `li`: při návratu platí uložená volba od první stránky a zdroj z reklamy nezmizí

### [sekce] Časté otázky
- `p`: [ FAQ ]
- `h2`: Časté otázky
- `p`: Nenašli jste odpověď? Napište nám.
- `a`: Napište nám
- `summary`: Technické detaily: jak napojujeme souhlas v Google Tag Manageru
- `li`: Výchozí stav nastavujeme před načtením GTM, nebo spouštěčem Consent Initialization – All Pages, který běží před všemi ostatními tagy.
- `li`: Značky Googlu mají vestavěné kontroly souhlasu. Meta, Sklik, TikTok, LinkedIn, Hotjar ani Clarity Consent Mode nečtou – dostanou dodatečný požadavek na souhlas a spouštění na aktualizaci souhlasu.
- `li`: Při víc kontejnerech nebo se server-side GTM inicializujeme souhlas v každém z nich.
- `li`: Seznam Event Measurement čte souhlas z IAB TCF, nebo ho dostane přes SEM('updateConsent', …). Cookies sid a udid vytvoří až po souhlasu s ad_storage.
- `span`: html
- `button`: Kopírovat
- `pre`: <script> window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', personalization_storage: 'denied', functionality_storage: 'granted', // jen pokud je skutečně nezbytné security_storage: 'granted', wait_for_update: 500 }); gtag('set', 'ads_data_redaction', true); gtag('set', 'url_passthrough', true); // posoudit s právníkem </script> <!-- až teď Google Tag Manager -->
- `figcaption`: Výchozí stav souhlasu patří do kódu stránky ještě před GTM
- `p`: wait_for_update dává liště čas poslat uloženou volbu dřív, než značky odešlou data. ads_data_redaction při odmítnutí reklamních cookies redukuje identifikátory prokliku a url_passthrough přenáší informace o prokliku v URL i bez cookies – i to doporučujeme probrat s právníkem.
- `p`: Stav souhlasu najdete v požadavcích Googlu v parametru gcs: G100 znamená odmítnuté reklamní i analytické úložiště, G111 povolené. Google parametr oficiálně nedokumentuje, proto výsledek vždy potvrzujeme v Tag Assistantu.
- `caption`: Signály Consent Mode v2 a kategorie v liště
- `th`: Signál
- `th`: Co řídí
- `th`: Kategorie v liště
- `th`: ad_storage
- `td`: reklamní cookies a identifikátory
- `td`: marketingové
- `th`: ad_user_data
- `td`: údaje o uživateli pro reklamu, třeba u rozšířených konverzí
- `td`: marketingové
- `th`: ad_personalization
- `td`: personalizovanou reklamu a remarketing
- `td`: marketingové
- `th`: analytics_storage
- `td`: analytické cookies
- `td`: analytické
- `th`: functionality_storage
- `td`: funkce webu, třeba jazyk
- `td`: nezbytné nebo preferenční
- `th`: personalization_storage
- `td`: personalizaci obsahu
- `td`: preferenční
- `th`: security_storage
- `td`: bezpečnost a prevenci podvodů
- `td`: nezbytné
- `summary`: Je cookie lišta povinná?
- `div`: Pokud web používá jen technicky nezbytné cookies, třeba pro košík nebo přihlášení, lištu se souhlasem nepotřebuje – informační povinnost ale trvá. Jakmile používáte analytiku, reklamní pixely nebo remarketing, potřebujete podle § 89 odst. 3 zákona o elektronických komunikacích předchozí prokazatelný souhlas, a to i pro GA4. Výjimka pro malé weby neexistuje.
- `summary`: Je Google Consent Mode v2 povinný?
- `div`: Zákon vyžaduje souhlas, ne Consent Mode. Google ale Consent Mode fakticky vyžaduje po inzerentech, kteří chtějí u uživatelů z EHP měřit konverze a personalizovat reklamu – bez signálů souhlasu přicházíte o remarketingová publika. Od 15. června 2026 navíc Google Analytics u účtů propojených s Google Ads řídí reklamní data jen přes Consent Mode.
- `summary`: Proč po nasazení lišty klesly konverze?
- `div`: Část poklesu je očekávaná, protože nástroje dřív měřily i lidi bez souhlasu. Často jde ale o chybu: basic režim bez modelování, tagy, které naběhnou až po znovunačtení stránky, výchozí stav až po GTM nebo nastavení bez signálu ad_user_data, které blokuje rozšířené konverze. Audit proto obsahuje i odhad dopadu na data.
- `code`: ad_user_data
- `summary`: Kolik to stojí a jak dlouho to trvá?
- `div`: Cenu skládáme podle rozsahu: počet domén a jazyků, tagů a nástrojů, jestli lištu vybíráme, nebo vyvíjíme, a kolik kódů běží mimo GTM. Licenci CMP platíte přímo poskytovateli. Délka závisí na stejných faktorech a nejvíc času obvykle zabere rozhodnutí o textech a režimu s právníkem.
- `summary`: Jste právníci? Kdo připraví texty lišty?
- `div`: Nejsme advokátní kancelář. Odpovídáme za technické nastavení a připravíme podklady: seznam cookies, účely, poskytovatele a dobu uložení. Z nich právník sestaví texty lišty a zásady cookies a vývojáři nebo správce GTM dostanou od nás seznam oprav.
- `summary`: Komu patří lišta, účet CMP a přístupy?
- `div`: Vám. Účet CMP i kontejner GTM zůstávají vaše a licenci CMP platíte přímo poskytovateli. Pracujeme s přístupy pro čtení, při nastavení pro úpravy, a po předání je můžete kdykoli odebrat.

### [sekce] 
- `p`: [ pokračujte ]
- `a`: Měření konverzí Ads, Meta, Sklik i Heureka vidí totéž
- `a`: Server-side tracking měření na vaší doméně
- `a`: Audit měření zjistíme, kde data utíkají

### [sekce] Nastavíme souhlas podle pravidel – a bez zbytečné ztráty dat
- `p`: [ Kontakt ]
- `h2`: Nastavíme souhlas podle pravidel – a bez zbytečné ztráty dat
- `p`: Na úvodní konzultaci zdarma se podíváme, co web posílá před souhlasem, a řekneme, jestli stačí oprava, nebo je potřeba nové nastavení.
- `li`: E-mail one@datalayer.cz
- `a`: one@datalayer.cz
- `span`: VN
- `span`: Odpovídá Vít Novotný
- `span`: obvykle do jednoho pracovního dne
- `li`: Do jednoho pracovního dne navrhneme termín.
- `li`: Na třicet minut projdeme web a cíle.
- `li`: Do dvou pracovních dnů po konzultaci dostanete shrnutí a návrh dalšího kroku.

### [sekce] 
- `nav@aria-label`: Drobečková navigace

### [sekce] Co web posílá před souhlasem a po něm
- `pre@aria-label`: Ilustrativní ukázka
- `pre@aria-label`: Ilustrativní ukázka

### [sekce] Časté otázky
- `div@aria-label`: Signály Consent Mode v2 a kategorie v liště
- `td@data-label`: Co řídí
- `td@data-label`: Kategorie v liště
- `td@data-label`: Co řídí
- `td@data-label`: Kategorie v liště
- `td@data-label`: Co řídí
- `td@data-label`: Kategorie v liště
- `td@data-label`: Co řídí
- `td@data-label`: Kategorie v liště
- `td@data-label`: Co řídí
- `td@data-label`: Kategorie v liště
- `td@data-label`: Co řídí
- `td@data-label`: Kategorie v liště
- `td@data-label`: Co řídí
- `td@data-label`: Kategorie v liště

### [sekce] Nastavíme souhlas podle pravidel – a bez zbytečné ztráty dat
- `ol@aria-label`: Co se stane po odeslání