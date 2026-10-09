# URL: https://datalayer.vitnovotny.cz/sluzby/cookie-lista-consent-mode

1. [Úvod](/)
2. [Služby](/sluzby)
3. Cookie lišta a Consent Mode v2

souhlas

# Cookie lišta a Consent Mode v2 nastavené a ověřené

Cookie lišta sbírá souhlas návštěvníka, Consent Mode v2 ho předává tagům Googlu a Google Tag Manager (GTM) podle něj spouští ostatní tagy, třeba Mety nebo Skliku. Lištu vybereme a nastavíme tak, aby tagy souhlas respektovaly od prvního načtení stránky. Pak ověříme, co web posílá před souhlasem a po něm, a vysvětlíme dopad na data.

[Zkontrolovat můj web](#kontakt)[Co web posílá před souhlasem](#overeni)

Úvodní konzultace zdarma a nezávazně

* Nastavení podle zákona a doporučení ÚOOÚ
* Cookiebot, české platformy pro správu souhlasů i vlastní lišta
* Výsledek doložíme záznamem z prohlížeče

symptomy

## Poznáváte se?

To, že web lištu zobrazí, ještě neznamená, že tagy souhlas respektují. Ani platforma pro správu souhlasů (CMP) s certifikací od Googlu sama soulad nezaručí – rozhoduje, jak ji nasadíte.

před souhlasem

### Tagy běží bez ohledu na lištu

Meta Pixel, Sklik nebo chatovací widget odešlou data ještě před kliknutím, nebo dokonce po odmítnutí.

unassigned

### Consent Mode startuje pozdě

Výchozí stav přichází až po načtení GTM, chybí nové reklamní signály a v GA4 roste podíl „Unassigned“.

konverze

### Po nasazení lišty spadly konverze

Tagy naběhnou až na další stránce nebo web zbytečně běží v režimu basic bez modelování a data mizí i u lidí, kteří souhlasili.

ÚOOÚ

### Lišta neodpovídá doporučení ÚOOÚ

Chybí „Odmítnout“ v první vrstvě, tlačítka nejsou rovnocenná nebo lišta jen informuje tlačítkem „Rozumím“.

výstupy

## Co uděláme a co dostanete

Službu nabízíme ve dvou variantách: audit, když lištu máte, a nastavení na klíč, když ji zavádíte nebo měníte.

inventory.csv

### Inventura cookies a tagů

Všechny cookies, tagy a skripty včetně kódů mimo GTM – v šabloně, pluginech, chatu nebo videu.

CMP

### Lišta a podklady pro texty

Doporučíme CMP nebo navrhneme vlastní lištu a připravíme technické podklady, ze kterých právník sestaví texty lišty.

signály souhlasu

### Consent Mode v2

Výchozí stav před načtením tagů, aktualizace po volbě, všechny čtyři reklamní a analytické signály a režim podle rozhodnutí s právníkem.

GTM a server-side GTM

### Napojení všech tagů

Tagy Mety, TikToku nebo LinkedInu naběhnou hned po souhlasu. Stav souhlasu předáme i do [server-side GTM](/sluzby/server-side-tracking) a backendu, pokud je máte.

sul.js

### Sklik a Seznam Event Measurement

Souhlas předáme i novému měření Seznamu – přes standard IAB TCF (Transparency and Consent Framework), nebo ve formátu Google Consent Mode.

protocol.har

### Protokol a dokumentace

Osm testovacích scénářů se záznamem síťového provozu ve formátu HAR, matice tagů a souhlasů, popis verzí GTM a seznam oprav pro vývojáře.

tok souhlasu

## Jak souhlas putuje od lišty k tagům

Na pořadí záleží. Výchozí stav souhlasu musí platit dřív, než prohlížeč načte jakýkoli tag – jinak se tagy Googlu chovají, jako by Consent Mode neexistoval.

před GTM

* `consent default`: denied pro všechny signály

musí proběhnout jako první

načtení GTM

* tagy Googlu: v režimu advanced jen ping bez cookies, v režimu basic nic
* Meta, Sklik, TikTok: čekají na souhlas

volba v liště

* web zobrazí lištu
* návštěvník přijme, nebo odmítne

po volbě

* `consent update` a událost `cookie_consent_update`
* souhlas: plné měření Googlu a tagy v povolených kategoriích
* odmítnutí: ostatní tagy dál nic neposílají

Tok souhlasu: výchozí stav denied platí ještě před načtením GTM, tagy Googlu v režimu advanced posílají jen pingy bez cookies a ostatní tagy čekají. Po volbě v liště přijde aktualizace souhlasu a GTM spustí tagy v povolených kategoriích. Po odmítnutí ostatní tagy nic neposílají.

* **Googlu stačí Consent Mode.** Meta, Sklik nebo TikTok ho nečtou a potřebují podmínku souhlasu v GTM.
* **Hned po volbě.** Tagy naběhnou na stránce, kde návštěvník klikl, ne až na další.
* **Méně dat je v pořádku.** Nástroje dřív měřily i lidi bez souhlasu. Část konverzí Google dopočítá modelováním.

rozhodnutí

## Režim basic nebo advanced a výběr lišty

Režim i typ lišty volíme spolu s vámi a s právníkem nebo pověřencem pro ochranu osobních údajů. Neprodáváme žádnou CMP – nastavíme kteroukoli a ověříme i lištu e-shopové platformy, třeba Shoptetu.

basic

### Basic jako konzervativní varianta

Tagy Googlu čekají na souhlas a před volbou neodejde nic.

* Google Ads modeluje konverze jen obecným modelem
* GA4 chování bez souhlasu nemodeluje
* hodí se pro přísný právní výklad, regulované obory a malou návštěvnost

advanced

### Advanced pro přesnější modelování

Prohlížeč načte tagy Googlu hned a bez souhlasu odejdou jen pingy bez cookies.

* Google Ads modeluje konverze modelem pro váš účet
* GA4 modeluje chování, pokud web překročí prahy, které stanovil Google
* hodí se pro inzerenty v Google Ads s dostatkem návštěv, když právník souhlasí s přenosem pingů

### Mezinárodní CMP

Cookiebot, CookieYes nebo Usercentrics pro více zemí a domén a pro vydavatele, kteří potřebují certifikovanou CMP s TCF.

### Česká CMP

„Cookies správně“ nebo Consentio s levnější licencí, fakturací v korunách a českou podporou pro malé a střední weby a e-shopy.

### Vlastní lišta

Ve vašem designu, s minimem kódu a bez licence, pro weby bez reklamy třetích stran. Záznam souhlasů pak řešíme zvlášť.

právní rámec

## Tři věci, které říká zákon, ÚOOÚ a Google

Technické nastavení stavíme na těchto pravidlech. U každého uvádíme zdroj, aby si ho právník mohl ověřit.

§ 89 zákona o elektronických komunikacích

### Souhlas předem

K ukládání a čtení netechnických údajů v zařízení návštěvníka potřebujete předchozí prokazatelný souhlas. Výjimku má jen technicky nezbytné ukládání.

Otázky a odpovědi ÚOOÚ

### Odmítnout stejně snadno jako přijmout

„Odmítnout“ patří do první vrstvy, tlačítka musí být rovnocenná a zavření lišty souhlas není. Odvolat souhlas musí jít stejně snadno jako ho udělit.

Google

### Souhlas i s personalizací reklam

U uživatelů z EHP chce Google platný souhlas s cookies i s personalizací reklam. Při nesouladu může pozastavit publika a měření konverzí.

Nejde o právní radu

Texty lišty, zásady cookies a právní titul pro další zpracování patří vašemu právníkovi nebo pověřenci. Rádi s ním spolupracujeme a dodáme mu technické podklady.

postup

## Jak to probíhá

Stejných pět kroků jako u všech našich služeb.

1. 01

   ### Audit

   Projdeme GA4, GTM, souhlas a reklamní systémy a porovnáme je s administrací nebo CRM.

   Od vás: přístupy pro čtení
2. 02

   ### Měřicí plán

   Obchodní cíle převedeme na události, parametry a pravidla pojmenování.

   Od vás: hodinová schůzka a schválení plánu
3. 03

   ### Implementace

   Po rozhodnutí s právníkem nastavíme lištu, Consent Mode v2, tagy v GTM, Sklik a Seznam Event Measurement, případně server-side GTM.

   Od vás: kontakt na právníka nebo pověřence, přístupy pro úpravy do GTM a CMP, případně vývojář
4. 04

   ### Validace

   Projdeme testovací scénáře před souhlasem, po přijetí i po odmítnutí a zkontrolujeme, co web v každém z nich posílá.

   Od vás: testovací objednávka nebo poptávka a export z administrace nebo CRM
5. 05

   ### Předání a podpora

   Předáme dokumentaci, proškolíme tým a budeme hlídat, aby měření po dalším releasu nepřestalo fungovat.

   Od vás: předávací schůzka

ověření

## Co web posílá před souhlasem a po něm

Ověření je jádro naší práce. Místo pouhého „máte to dobře“ dostanete záznam síťových požadavků z webu a snímky obrazovky.

```
✓ googletagmanager.com/gtm.js  200
◐ …/g/collect?en=page_view&gcs=G100  ping bez cookies
✕ connect.facebook.net/…/fbevents.js  čeká na souhlas
✕ sul.js  čeká na souhlas
```

ilustrační ukázka

### Před souhlasem

Odchází jen ping Googlu bez cookies. Skripty Mety, Skliku a TikToku čekají na souhlas.

```
✓ …/g/collect?en=page_view&gcs=G111  200
✓ connect.facebook.net/…/fbevents.js  200
✓ sul.js  200
✓ analytics.tiktok.com  200
```

ilustrační ukázka

### Po souhlasu

GTM spustí tagy v povolených kategoriích a Google měří s cookies.

### Co ověří testovací protokol

* Při první návštěvě bez kliknutí pošle Google nanejvýš ping bez cookies a ostatní nástroje nic.
* Po odmítnutí nenaběhne nic ani na další stránce, ani po otevření nastavení v patičce.
* Po přijetí naběhnou tagy hned, na stejné stránce.
* Při návratu platí uložená volba od první stránky a zdroj z reklamy nezmizí.

FAQ

## Časté otázky

Technické detailyNapojení souhlasu v GTM

* Výchozí stav nastavujeme **před** načtením GTM, nebo spouštěčem *Consent Initialization – All Pages*, který běží před všemi ostatními tagy.
* Tagy Googlu mají vestavěné kontroly souhlasu. Consent Mode nečtou Meta, Sklik, TikTok, LinkedIn, Hotjar ani Clarity – dostanou *dodatečný požadavek na souhlas* a spouštěč navázaný na aktualizaci souhlasu.
* Při více kontejnerech nebo při server-side GTM inicializujeme souhlas v každém z nich.
* Seznam Event Measurement čte souhlas z IAB TCF, nebo ho dostane přes `SEM('updateConsent', …)`. Cookies `sid` a `udid` vytvoří až po souhlasu s `ad_storage`.

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

Výchozí stav souhlasu patří do kódu stránky ještě před GTM.

`wait_for_update` dává liště čas poslat uloženou volbu dřív, než tagy odešlou data. `ads_data_redaction` při odmítnutí reklamních cookies odstraňuje z požadavků identifikátory prokliku a `url_passthrough` přenáší informace o prokliku v URL i bez cookies – i to doporučujeme probrat s právníkem.

Stav souhlasu najdete v požadavcích Googlu v parametru `gcs`: `G100` znamená odmítnuté reklamní i analytické cookies (`ad_storage` a `analytics_storage`), `G111` povolené. Google parametr oficiálně nedokumentuje, proto výsledek vždy potvrzujeme v Tag Assistantu.

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

Pokud web používá jen technicky nezbytné cookies, třeba pro košík nebo přihlášení, lištu se souhlasem nepotřebuje – informační povinnost ale trvá. Jakmile používáte analytiku, reklamní pixely nebo remarketing, potřebujete podle § 89 odst. 3 zákona o elektronických komunikacích předchozí prokazatelný souhlas, a to i pro GA4. Výjimka pro malé weby neexistuje.

Je Google Consent Mode v2 povinný?

Zákon vyžaduje souhlas, ne Consent Mode. Google ale Consent Mode fakticky vyžaduje po inzerentech, kteří chtějí u uživatelů z EHP měřit konverze a personalizovat reklamu – bez signálů souhlasu přicházíte o remarketingová publika. Od 15. června 2026 navíc Google Analytics u účtů propojených s Google Ads řídí reklamní data jen přes Consent Mode.

Proč po nasazení lišty klesly konverze?

Část poklesu je očekávaná, protože nástroje dřív měřily i lidi bez souhlasu. Často jde ale o chybu: režim basic bez modelování; tagy, které naběhnou až po znovunačtení stránky; výchozí stav až po GTM; nebo nastavení bez signálu `ad_user_data`, které blokuje rozšířené konverze. Audit proto obsahuje i odhad dopadu na data.

Kolik to stojí a jak dlouho to trvá?

Cenu skládáme podle rozsahu: počet domén a jazyků, tagů a nástrojů, jestli lištu vybíráme, nebo vyvíjíme, a kolik kódů běží mimo GTM. Licenci CMP platíte přímo poskytovateli. Délka závisí na stejných faktorech a nejvíc času obvykle zabere rozhodnutí o textech a režimu s právníkem.

Jste právníci? Kdo připraví texty lišty?

Nejsme advokátní kancelář. Odpovídáme za technické nastavení a připravíme podklady: seznam cookies, účely, poskytovatele a dobu uložení. Z nich právník sestaví texty lišty a zásady cookies; vývojáři nebo správce GTM dostanou od nás seznam oprav.

Komu patří lišta, účet CMP a přístupy?

Vám. Účet CMP i kontejner GTM zůstávají vaše. Pracujeme s přístupy pro čtení, při nastavení pro úpravy, a po předání je můžete kdykoli odebrat.

pokračujte

[**Měření konverzí**Google Ads, Meta, Sklik i Heureka vidí totéž](/sluzby/mereni-konverzi)[**Server-side tracking**měření na vaší doméně](/sluzby/server-side-tracking)[**Audit měření**zjistíme, kde data utíkají](/sluzby/audit-mereni)

Kontakt

## Nastavíme sběr souhlasu podle pravidel – a bez zbytečné ztráty dat

Na úvodní konzultaci se podíváme, co web posílá před souhlasem, a řekneme, jestli stačí oprava, nebo je potřeba nové nastavení.

* E-mail[one@datalayer.cz](mailto:one@datalayer.cz)
* Telefon[+420 704 664 774](tel:+420704664774)

1. Domluvíme termín callu
2. Projdeme web a cíle
3. Připravíme návrh na míru

Web firmy

Jméno a příjmeníE-mail

Telefon (nepovinné)Web (nepovinné)

Co řešíte? (nepovinné)

GA4 a GTMServer-side měřeníCookie lišta a souhlasKonverze a reklamyBigQuery a reportingAuditJiné

S čím vám můžeme pomoci?

Údaje použijeme jen k odpovědi na zprávu a případné nabídce. [Jak s nimi zacházíme](/zpracovani-osobnich-udaju). Žádný newsletter, žádný spam.

Odeslat zprávu