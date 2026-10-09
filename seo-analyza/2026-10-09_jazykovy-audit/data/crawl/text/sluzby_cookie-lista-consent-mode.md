# URL: https://datalayer.vitnovotny.cz/sluzby/cookie-lista-consent-mode

1. [Úvod](/)
2. [Služby](/sluzby)
3. Cookie lišta a Consent Mode v2

[ consent ]

# Cookie lišta a Consent Mode v2 nastavené a ověřené

Cookie lišta sbírá souhlas návštěvníka, Consent Mode v2 ho předává značkám Googlu a Google Tag Manager podle něj spouští ostatní tagy, třeba Metu nebo Sklik. Lištu vybereme a nastavíme tak, aby tagy souhlas respektovaly od prvního načtení stránky. Pak ověříme, co web posílá před souhlasem a po něm, a vysvětlíme dopad na data.

[[ Zkontrolovat můj web ]](#kontakt)[[ Co web posílá před souhlasem ]](#overeni)

Úvodní konzultace zdarma · nejsme advokátní kancelář, s právníkem rádi spolupracujeme

* Nastavení podle zákona a doporučení ÚOOÚ
* Cookiebot, české CMP i vlastní lišta
* Výsledek doložíme záznamem z prohlížeče

[ symptomy ]

## Poznáváte se?

„Cookie lištu přece máme.“ To, že web lištu zobrazí, ale ještě neznamená, že tagy souhlas respektují. Ani certifikovaná CMP podle Googlu sama soulad nezaručí – rozhoduje, jak ji nasadíte.

před souhlasem

### Tagy běží bez ohledu na lištu

Meta Pixel, Sklik nebo chatovací widget odešlou data ještě před kliknutím, nebo dokonce po odmítnutí.

unassigned

### Consent Mode startuje pozdě

Výchozí stav přichází až po načtení GTM, chybí nové reklamní signály a v GA4 roste podíl „Unassigned“.

konverze

### Po nasazení lišty spadly konverze

Tagy naběhnou až na další stránce nebo basic režim běží bez rozhodnutí a data mizí i u lidí, kteří souhlasili.

ÚOOÚ

### Lišta neodpovídá doporučení ÚOOÚ

Chybí „Odmítnout“ v první vrstvě, tlačítka nejsou rovnocenná, nebo lišta jen informuje tlačítkem „Rozumím“.

[ výstupy ]

## Co uděláme a co dostanete

Službu nabízíme ve dvou variantách: audit, když lištu máte, a nastavení na klíč, když ji zavádíte nebo měníte.

inventory.csv

### Inventura cookies a tagů

Všechny cookies, tagy a skripty včetně kódů mimo GTM – v šabloně, pluginech, chatu nebo videu.

cmp

### Lišta a podklady pro texty

Doporučíme CMP nebo navrhneme vlastní lištu a připravíme technické podklady pro texty, které pak schválí právník.

consent-mode

### Consent Mode v2

Výchozí stav před načtením značek, aktualizace po volbě, všechny čtyři signály a režim podle rozhodnutí s právníkem.

gtm · sgtm

### Napojení všech tagů

Tagy Mety, TikToku nebo LinkedInu naběhnou hned po souhlasu. Stav souhlasu předáme i do [server-side GTM](/sluzby/server-side-tracking) a backendu, pokud je máte.

sem

### Sklik a Seznam Event Measurement

Souhlas předáme i novému měření Seznamu – přes IAB TCF, nebo ve formátu Google Consent Mode.

protocol.har

### Protokol a dokumentace

Osm testovacích scénářů se záznamem HAR, matice tagů a souhlasů, popis verzí GTM a seznam oprav pro vývojáře.

[ tok souhlasu ]

## Jak souhlas putuje od lišty k tagům

Pořadí je klíčové. Výchozí stav souhlasu musí platit dřív, než prohlížeč načte jakoukoli značku – jinak se značky Googlu chovají, jako by Consent Mode neexistoval.

před GTM

* `consent default`: denied pro všechny signály

musí proběhnout jako první

načtení GTM

* značky Googlu: v advanced režimu jen ping bez cookies, v basic nic
* Meta, Sklik, TikTok: čekají na souhlas

volba v liště

* web zobrazí lištu
* návštěvník přijme, nebo odmítne

po volbě

* `consent update` a událost `cookie_consent_update`
* souhlas: plné měření Googlu a tagy s udělenou kategorií
* odmítnutí: ostatní tagy dál nic neposílají

Tok souhlasu: výchozí stav denied platí ještě před načtením GTM, značky Googlu v advanced režimu posílají jen pingy bez cookies a ostatní tagy čekají. Po volbě v liště přijde aktualizace souhlasu a GTM spustí tagy s udělenou kategorií. Po odmítnutí ostatní tagy nic neposílají.

* **Googlu stačí Consent Mode.** Meta, Sklik nebo TikTok ho nečtou a potřebují podmínku souhlasu v GTM.
* **Hned po volbě.** Tagy naběhnou na stránce, kde návštěvník klikl, ne až na další.
* **Méně dat je v pořádku.** Nástroje dřív měřily i lidi bez souhlasu, část konverzí Google dopočítá modelováním.

[ rozhodnutí ]

## Basic, nebo advanced? A jakou lištu?

Režim i typ lišty volíme spolu s vámi a s právníkem nebo DPO. Neprodáváme žádnou CMP, nastavíme kteroukoli a ověříme i lištu e-shopové platformy, třeba Shoptetu.

basic

### Basic: konzervativní varianta

Značky Googlu čekají na souhlas a před volbou neodejde nic.

* Google Ads modeluje konverze jen obecným modelem
* GA4 chování bez souhlasu nemodeluje
* hodí se pro přísný právní výklad, regulované obory a malou návštěvnost

advanced

### Advanced: přesnější modelování

Prohlížeč načte značky Googlu hned a bez souhlasu odejdou jen pingy bez cookies.

* Google Ads modeluje konverze modelem pro váš účet
* GA4 modeluje chování, pokud web splní prahy
* hodí se pro inzerenty v Google Ads s dostatkem návštěv, když právník souhlasí s přenosem pingů

### Mezinárodní CMP

Cookiebot, CookieYes nebo Usercentrics pro víc zemí a domén a pro vydavatele, kteří potřebují certifikovanou CMP s TCF.

### Česká CMP

Cookies správně nebo Consentio s nižší licencí, fakturací v korunách a českou podporou pro malé a střední weby a e-shopy.

### Vlastní lišta

Ve vašem designu, s minimem kódu a bez licence, pro weby bez reklamy třetích stran. Záznam souhlasů pak řešíme zvlášť.

[ právní rámec ]

## Tři věci, které říká zákon, ÚOOÚ a Google

Technické nastavení stavíme na těchto pravidlech. U každého uvádíme zdroj, ať si ho právník může ověřit.

§ 89 ZEK

### Souhlas předem

K ukládání a čtení netechnických údajů v zařízení návštěvníka potřebujete předchozí prokazatelný souhlas. Výjimku má jen technicky nezbytné ukládání.

Q&A ÚOOÚ

### Odmítnout stejně snadno jako přijmout

„Odmítnout“ patří do první vrstvy, tlačítka musí být rovnocenná a zavření lišty souhlas není. Odvolat souhlas musí jít stejně snadno jako ho udělit.

Google

### Souhlas i s personalizací reklam

U uživatelů z EHP chce Google platný souhlas s cookies i s personalizací reklam. Při nesouladu může pozastavit publika a měření konverzí.

Nejde o právní radu

Nejsme advokátní kancelář. Texty lišty, zásady cookies a právní titul pro další zpracování patří vašemu právníkovi nebo pověřenci. Rádi s ním spolupracujeme a dodáme mu technické podklady.

[ postup ]

## Jak to probíhá

Stejných pět kroků jako u všech našich služeb. Nejvíc času obvykle zabere rozhodnutí o režimu a textech s právníkem.

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

   Po rozhodnutí s právníkem nastavíme lištu, Consent Mode v2, tagy v GTM, Sklik a SEM, případně server-side GTM.

   od vás: kontakt na právníka nebo DPO, přístupy pro úpravy do GTM a CMP, případně vývojář
4. 04

   ### Validace

   Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.

   od vás: testovací objednávka a export z administrace
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.

   od vás: předávací schůzka

[ ověření ]

## Co web posílá před souhlasem a po něm

Ověření je jádro naší práce. Výsledek dostanete jako záznam síťových požadavků z vašeho webu a screenshoty – ne jen jako „máte to dobře“.

```
✓ googletagmanager.com/gtm.js  200
◐ …/g/collect?en=page_view&gcs=G100  ping bez cookies
✕ connect.facebook.net/…/fbevents.js  čeká na souhlas
✕ sul.js  čeká na souhlas
```

ilustrační ukázka

### Před souhlasem

Odchází jen ping Googlu bez cookies, skripty Mety, Skliku a TikToku čekají na souhlas.

```
✓ …/g/collect?en=page_view&gcs=G111  200
✓ connect.facebook.net/…/fbevents.js  200
✓ sul.js  200
✓ analytics.tiktok.com  200
```

ilustrační ukázka

### Po souhlasu

GTM spustí tagy s udělenou kategorií a Google měří s cookies.

### Co ověří testovací protokol

* první návštěva bez kliknutí: od Googlu nanejvýš ping bez cookies, od ostatních nic
* po odmítnutí nenaběhne nic ani na další stránce, ani po změně volby v patičce
* po přijetí naběhnou tagy hned, na stejné stránce
* při návratu platí uložená volba od první stránky a zdroj z reklamy nezmizí

[ FAQ ]

## Časté otázky

Nenašli jste odpověď? [Napište nám](#kontakt).

Technické detaily: jak napojujeme souhlas v Google Tag Manageru

* Výchozí stav nastavujeme **před** načtením GTM, nebo spouštěčem *Consent Initialization – All Pages*, který běží před všemi ostatními tagy.
* Značky Googlu mají vestavěné kontroly souhlasu. Meta, Sklik, TikTok, LinkedIn, Hotjar ani Clarity Consent Mode nečtou – dostanou *dodatečný požadavek na souhlas* a spouštění na aktualizaci souhlasu.
* Při víc kontejnerech nebo se server-side GTM inicializujeme souhlas v každém z nich.
* Seznam Event Measurement čte souhlas z IAB TCF, nebo ho dostane přes `SEM('updateConsent', …)`. Cookies `sid` a `udid` vytvoří až po souhlasu s `ad_storage`.

htmlKopírovat

```
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    personalization_storage: 'denied',
    functionality_storage: 'granted',  // jen pokud je skutečně nezbytné
    security_storage: 'granted',
    wait_for_update: 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true); // posoudit s právníkem
</script>
<!-- až teď Google Tag Manager -->
```

Výchozí stav souhlasu patří do kódu stránky ještě před GTM

`wait_for_update` dává liště čas poslat uloženou volbu dřív, než značky odešlou data. `ads_data_redaction` při odmítnutí reklamních cookies redukuje identifikátory prokliku a `url_passthrough` přenáší informace o prokliku v URL i bez cookies – i to doporučujeme probrat s právníkem.

Stav souhlasu najdete v požadavcích Googlu v parametru `gcs`: `G100` znamená odmítnuté reklamní i analytické úložiště, `G111` povolené. Google parametr oficiálně nedokumentuje, proto výsledek vždy potvrzujeme v Tag Assistantu.

Signály Consent Mode v2 a kategorie v liště

| Signál | Co řídí | Kategorie v liště |
| --- | --- | --- |
| `ad_storage` | reklamní cookies a identifikátory | marketingové |
| `ad_user_data` | údaje o uživateli pro reklamu, třeba u rozšířených konverzí | marketingové |
| `ad_personalization` | personalizovanou reklamu a remarketing | marketingové |
| `analytics_storage` | analytické cookies | analytické |
| `functionality_storage` | funkce webu, třeba jazyk | nezbytné nebo preferenční |
| `personalization_storage` | personalizaci obsahu | preferenční |
| `security_storage` | bezpečnost a prevenci podvodů | nezbytné |

Je cookie lišta povinná?

Pokud web používá jen technicky nezbytné cookies, třeba pro košík nebo přihlášení, lištu se souhlasem nepotřebuje – informační povinnost ale trvá. Jakmile používáte analytiku, reklamní pixely nebo remarketing, potřebujete podle § 89 odst. 3 zákona o elektronických komunikacích předchozí prokazatelný souhlas, a to i pro GA4. Výjimka pro malé weby neexistuje.

Je Google Consent Mode v2 povinný?

Zákon vyžaduje souhlas, ne Consent Mode. Google ale Consent Mode fakticky vyžaduje po inzerentech, kteří chtějí u uživatelů z EHP měřit konverze a personalizovat reklamu – bez signálů souhlasu přicházíte o remarketingová publika. Od 15. června 2026 navíc Google Analytics u účtů propojených s Google Ads řídí reklamní data jen přes Consent Mode.

Proč po nasazení lišty klesly konverze?

Část poklesu je očekávaná, protože nástroje dřív měřily i lidi bez souhlasu. Často jde ale o chybu: basic režim bez modelování, tagy, které naběhnou až po znovunačtení stránky, výchozí stav až po GTM nebo nastavení bez signálu `ad_user_data`, které blokuje rozšířené konverze. Audit proto obsahuje i odhad dopadu na data.

Kolik to stojí a jak dlouho to trvá?

Cenu skládáme podle rozsahu: počet domén a jazyků, tagů a nástrojů, jestli lištu vybíráme, nebo vyvíjíme, a kolik kódů běží mimo GTM. Licenci CMP platíte přímo poskytovateli. Délka závisí na stejných faktorech a nejvíc času obvykle zabere rozhodnutí o textech a režimu s právníkem.

Jste právníci? Kdo připraví texty lišty?

Nejsme advokátní kancelář. Odpovídáme za technické nastavení a připravíme podklady: seznam cookies, účely, poskytovatele a dobu uložení. Z nich právník sestaví texty lišty a zásady cookies a vývojáři nebo správce GTM dostanou od nás seznam oprav.

Komu patří lišta, účet CMP a přístupy?

Vám. Účet CMP i kontejner GTM zůstávají vaše a licenci CMP platíte přímo poskytovateli. Pracujeme s přístupy pro čtení, při nastavení pro úpravy, a po předání je můžete kdykoli odebrat.

[ pokračujte ]

[**Měření konverzí**Ads, Meta, Sklik i Heureka vidí totéž](/sluzby/mereni-konverzi)[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)[**Audit měření**zjistíme, kde data utíkají](/sluzby/audit-mereni)

[ Kontakt ]

## Nastavíme souhlas podle pravidel – a bez zbytečné ztráty dat

Na úvodní konzultaci zdarma se podíváme, co web posílá před souhlasem, a řekneme, jestli stačí oprava, nebo je potřeba nové nastavení.

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