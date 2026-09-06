# K06 – Právní a smluvní vrstva: čím se dá podepřít slib reakční doby a jak si trh omezuje odpovědnost

3. kolo, úkol C4 ze seznamu `10-doplneni-a-overeni-r2.md` § 6. Datum přístupu u všech zdrojů: **2026-09-06**.
Data: `data/fragments/r3-k06-evidence.csv` (37 důkazů, `EK6-001`–`EK6-037`, `phase=12`). Cenový fragment
tento úkol nemá – nenašel jsem jedinou veřejnou cenu, která by se vázala k právní vrstvě (pojistné je
individuální, SLA kredity se počítají z odměny, ne z ceníku).

Metoda: pouze veřejné dokumenty – SLA a VOP dodavatelů, text zákona a nařízení, stanoviska ÚOOÚ,
pojistné podmínky. Žádný kontakt s dodavatelem ani s právníkem. Kde byl zdroj nedostupný, je to
zapsáno jako negativní zjištění s důvodem (`EK6-036`, `EK6-037`).

---

## 1. Shrnutí

**Odpověď na hlavní otázku: slib reakční doby se dá publikovat teprve tehdy, když je ve smlouvě
definován jako lhůta k *zahájení práce* od nahlášení nebo od vlastní detekce, když je jedinou sankcí
za jeho nedodržení *sleva z naší vlastní odměny* v číselné výši a se stropem, a když je vedle toho
náhrada škody omezena na 1–6 měsíčních odměn s vyloučením ušlého zisku – protože přesně takto to dělá
celý dodavatelský řetězec od Googlu dolů a protože § 2898 občanského zákoníku to vůči podnikateli
dovoluje.**

1. **Omezit náhradu škody předem lze.** § 2898 zakazuje jen tři věci: újmu na přirozených právech
   člověka, újmu způsobenou **úmyslně nebo z hrubé nedbalosti** a omezení práva **slabší strany**.
   Číselný strop vůči e-shopu-podnikateli je platný, pokud z něj úmysl a hrubou nedbalost vyjmeme.
   `EK6-012`
2. **Trh si limituje odpovědnost dvěma nezávislými technikami a nejsilnější je kombinace obou:**
   (a) omezení **druhu** škody – „nahrazuje se pouze skutečná škoda, ušlý zisk se nenahrazuje“
   `EK6-023`, (b) číselný **strop** odvozený z vlastní odměny, v ČR mezi **1 měsíční odměnou**
   (Konverzky `EK6-020`) a **6 měsíci** (ADEO `EK6-019`). Promarněný reklamní spend je typově ušlý
   zisk – jediná věta pod (a) tedy odstraňuje přesně to riziko, kterým argumentujeme v prodeji.
3. **Sankce za nedodržení SLA se v ČR i u Googlu platí výhradně slevou z vlastní ceny, nikdy náhradou
   škody.** Google: kredit 10/25/50 % měsíční faktury se stropem 50 % a formulkou „**sole and exclusive
   remedy**“ `EK6-001`. Master Internet: sleva 1/30 měsíční ceny za den výpadku nad 6 hodin a výslovný
   zákaz vymáhat cokoli jiného `EK6-008`. vshosting~: smluvní pokuta **1/10 měsíčního paušálu za každou
   započatou hodinu prodlení, maximálně 1 měsíční paušál** `EK6-009`.
4. **Pojištění profesní odpovědnosti tuhle mezeru nezaplní – naopak ji vysvětluje.** Kryje čistou
   finanční škodu **včetně pokut uložených klientovi** `EK6-033`, ale **nekryje odpovědnost převzatou
   ve smlouvě nad rámec zákona ani újmy z nedodržení smluvních lhůt a termínů** `EK6-034`. SLA sankce
   je tedy nepojistitelná a platí se z marže. To je tvrdý důvod, proč ji celý trh drží malou.
5. **Ani placená GA360 nemá SLA na BigQuery export ani na propojení s Google Ads** – jsou výslovně
   vyňaty jako „Integration Features“ `EK6-006`. Chybějící denní tabulka ani rozbitý import konverzí
   tedy nespadají pod žádný slib Googlu na žádné cenové úrovni. Bezplatná GA4 má strop odpovědnosti
   **500 USD (≈ 11 500 Kč)** a nulovou záruku vhodnosti k účelu `EK6-031`.
6. **Google navíc definuje „Downtime“ tak, že tichá chyba SLA vůbec nespustí:** u BigQuery začíná až
   nad **10% chybovostí** `EK6-002`, u GA360 je z Downtime vyloučeno vše, co je na straně webu klienta
   `EK6-007`. Přesně to je 90 % příčin v našem pain-logu – a přesně proto tam vzniká prodejná mezera.
7. **Latka v oboru je nízko.** GA4Dataform, specializovaný dodavatel GA4/BigQuery vrstvy s veřejným
   SLA, slibuje jako nejvyšší záruku **první odpověď do 3 pracovních dnů**, žádný čas do vyřešení,
   žádnou sankci – a v bodě 7 uvádí, že *„This SLA is not a legally binding service guarantee unless
   otherwise agreed in a signed enterprise contract“* `EK6-003`. Measurelab prodává „SLA-backed tag
   management“ a „guaranteed response times“, ale **žádné číslo nezveřejňuje** `EK6-018`. DASE
   nezveřejňuje VOP ani SLA vůbec `EK6-036`.
8. **Zpracovatelská smlouva je u denní rekonciliace objednávek povinná, ale je to příloha, ne překážka.**
   ÚOOÚ: průběžná správa systému zahrnující osobní údaje zpracovatele dělá, jednorázová oprava IT ne;
   *„Nemusí se jednat o samostatnou smlouvu, podstatné je, aby určené náležitosti vyplývaly z písemného
   závazného dokumentu“* `EK6-026`. Úplný seznam náležitostí je v čl. 28 odst. 3 GDPR `EK6-024`.
9. **Za špatně nastavený consent platí pokutu klient, ne my.** Všechny české pokuty šly „provozovatelům
   webových stránek“, tj. správcům: **4 443 000 Kč uloženo, 1 640 000 Kč pravomocně, nejvyšší
   jednotlivá 898 000 Kč** `EK6-027`. Podle čl. 82 odst. 2 GDPR odpovídá zpracovatel jen za porušení
   vlastních povinností nebo za jednání nad rámec pokynů správce `EK6-025`. Naše riziko není pokuta –
   je to **regres klienta** (a tam platí náš smluvní strop) a **pozastavení účtu Googlem** `EK6-035`.
10. **Účty patří klientovi a je to Googlova vlastní doporučená praxe** `EK6-029`; past je jinde: účet
    **založený dodavatelem** je automaticky ve vlastnictví dodavatele. Českou rozhodovací praxi ke
    sporům o přístupy jsem nenašel – trh to řeší provozně („po ukončení spolupráce stačí přístupy
    jedním klikem odebrat“ `EK6-030`), ne soudně.

---

## 2. FAKTA

### 2.1 Jak si trh omezuje odpovědnost – srovnávací tabulka

Přepočet na naše tiery: „strop v Kč“ je aplikace daného vzorce na paušál **19 900 Kč/měs**.

| Subjekt | Sankce za nedodržení slibu | Strop náhrady škody | Ušlý zisk | Strop v Kč (19 900) | Důkaz |
|---|---|---|---|---|---|
| Google Cloud / BigQuery | kredit 10 / 25 / 50 % měsíční faktury, max 50 % | poplatky za 12 měsíců | vyloučen | 238 800 | `EK6-001`, `EK6-032` |
| Google Analytics 360 | kredit 5 / 10 / 15 / 25 %, max 25 % měsíčního poplatku | – (kredit je jediný nárok) | vyloučen | – | `EK6-005` |
| Google Analytics 4 (zdarma) | žádná | **500 USD ≈ 11 500 Kč** | vyloučen | 11 500 | `EK6-031` |
| Master Internet (CZ) | sleva 1/30 měsíční ceny za den výpadku > 6 h; nad 6 dní 100 % | **žádná jiná náhrada není možná** | vyloučen | 19 900 (= 1 paušál) | `EK6-008` |
| vshosting~ (CZ) | **1/10 měsíčního paušálu za každou započatou hodinu**, max 1 paušál | 1/3 odměny za posledních 6 měsíců | zahrnut do stropu | 39 800 | `EK6-009`, `EK6-010` |
| Konverzky (CZ, SaaS) | – | odměna za předchozí zúčtovací měsíc | zahrnut do stropu | 19 900 | `EK6-020` |
| ADEO (CZ) | – | cena služeb za 6 měsíců před vznikem škody | vyloučen | 119 400 | `EK6-019` |
| Fragile / skupina KNOW (CZ) | – | odměna za konkrétní dotčené služby; promlčení 1 rok | vyloučen, i „ztráta nebo zkreslení dat“ | dle služby | `EK6-021` |
| Více než agentura (CZ) | – | 5× měsíční úhrada (jinde v týchž VOP 2× cena služeb) | vyloučen | 99 500 | `EK6-022` |
| Promedeus (CZ) | – | **jen skutečná škoda**, ušlý zisk nikdy | vyloučen úplně | neomezeno co do částky | `EK6-023` |
| ADS-Tracking (DE) | – | hodnota zakázky („Auftragswert“) | – | dle zakázky | `EK6-016` |
| GA4Dataform (EE) | žádná | – („SLA není právně závazná záruka“) | – | – | `EK6-003` |

**Rozpětí českého trhu: strop náhrady škody 1–6 měsíčních odměn.** Medián nalezených českých vzorců
leží kolem **3 měsíčních odměn**. Mezinárodní standard (Google) je 12 měsíců – tedy **výrazně
velkorysejší než český zvyk**.

### 2.2 Doslovné znění klíčových klauzulí

**Nejcitovanější český vzor omezení odpovědnosti (ADEO, `EK6-019`):**

> „9.2./ Poskytovatel neodpovídá za nepřímé škody, ušlý zisk ani výpadek příjmů. Celková výše náhrady
> škody, k níž je poskytovatel povinen z jednoho či více souvisejících porušení, je omezena do výše
> ceny služeb skutečně uhrazené objednatelem za období 6 měsíců předcházejících vzniku škody. Omezení
> a vyloučení náhrady újmy dle tohoto článku se nevztahují na újmu způsobenou úmyslně nebo z hrubé
> nedbalosti, na újmu způsobenou člověku na jeho přirozených právech, ani na jiné případy, v nichž
> právo na náhradu újmy nelze dle kogentních právních předpisů předem omezit či vyloučit
> (§ 2898 občanského zákoníku).“

**Dvoustupňová konstrukce, která omezení drží (vshosting~, `EK6-010`; stejně Konverzky `EK6-020`):**

> „…celková náhrada újmy podle smlouvy o provozování služeb včetně ušlého zisku je omezena výší jedné
> třetiny odměny poskytovatele skutečně uhrazené objednatelem … v posledních šesti měsících …
> **Smluvní strany … konstatují, že úhrnná předvídatelná újma včetně ušlého zisku, jež by mohla
> objednateli … vzniknout, může činit maximálně částku odpovídající výši jedné třetiny odměny …**“

Druhá věta není opakování první. První větou se náhrada *omezuje*; druhou se **předem vymezuje
předvídatelnost škody** ve smyslu § 2913 odst. 1 `EK6-013`. Nejde tedy o zakázané „předem se vzdát
práva“, ale o vymezení toho, s čím strany při uzavření smlouvy počítaly. To je technika, kterou má
smysl převzít doslovně.

**Jediná sankce = sleva, nic jiného (Master Internet, `EK6-008`):**

> „…má uživatel právo na snížení měsíční ceny o jednu třicetinu. … **Uživatel nemůže na poskytovateli
> soudně ani jinou cestou vymáhat jakékoli jiné náhrady, než slevu podle bodu 6.4** těchto Všeobecných
> podmínek.“

**Číselná SLA sankce (vshosting~, `EK6-009`):**

> „22.1. V případě, že poskytovatel poruší ustanovení … ohledně celkové dostupnosti dle čl. 3.15 …
> vzniká objednateli právo na smluvní pokutu ve výši 1/10 (jedna desetina) z měsíční paušální odměny
> poskytovatele … **za každou započatou hodinu prodlení** poskytovatele, maximálně však v jednom
> kalendářním měsíci **do výše jedné (1) měsíční paušální odměny**.“

Tentýž dodavatel odděluje **dostupnost** (99,92 % měsíčně) od **doby opravy** (60 minut od nahlášení).
Pro nás je použitelná jen druhá osa: měřit „dostupnost měření“ v procentech nedává smysl, měřit lhůtu
od nahlášení ano.

**Klauzule, které kryjí nejčastější příčinu rozbitého měření (vshosting~, `EK6-011`):**

> „23.2. … poskytovatel nenese odpovědnost za **výsledky činnosti**, ke kterým je služba užívána.“
> „23.3. … poskytovatel nenese odpovědnost za vady či nedostatky služby vzniklé v důsledku **nastavení
> provedeného objednatelem nástrojem pro správu či jinou osobou, které objednatel umožnil přístup
> k nástrojům pro správu**.“

23.3 je v našem kontextu nejcennější věta celé rešerše: pokrývá kód `gtm_change_dev` a `unknown_owner`
z pain-logu, tedy „někdo jiný sáhl do GTM“.

**Nejtvrdší vyloučení (Fragile, `EK6-021`):**

> „Agentura však neodpovídá za **ztrátu nebo zkreslení dat**, ušlý zisk, ztrátu obchodní příležitosti
> ani za jakékoli nepřímé nebo následné škody.“

Velká česká agentura tedy vylučuje odpovědnost přesně za to, co my slibujeme hlídat. Je to zároveň
obchodní zvyklost, o kterou se lze opřít podle § 1801 `EK6-015`, a prostor, kde se lze odlišit.

**Lhůta, která klienta poškozuje (Více než agentura, `EK6-022`):**

> „Reklamace musí být uplatněna do **3 dnů** ode dne, kdy vada při náležité péči mohla být Klientem
> zjištěna, nejpozději však do 6 měsíců …“

Při mediánu doby do odhalení 21 dní by taková lhůta klientovi zabila nárok dřív, než by o problému
věděl. Je to argument **pro** naši službu, ne proti.

### 2.3 Co říká zákon

| Ustanovení | Co z něj plyne pro nás | Důkaz |
|---|---|---|
| § 2898 OZ | Omezit lze vše kromě úmyslu, hrubé nedbalosti, přirozených práv a práv slabší strany | `EK6-012` |
| § 2896 OZ | Jednostranné oznámení (věta na webu, patička nabídky) je **bezúčinné** – musí to být ujednání | `EK6-012` (pozn.) |
| § 2913 odst. 1 OZ | Za porušení smluvní povinnosti se hradí škoda objektivně, bez ohledu na zavinění | `EK6-013` |
| § 2913 odst. 2 OZ | Zprostit se lze jen překážkou **mimořádnou, nepředvídatelnou a nepřekonatelnou zároveň** – užší než běžná „vyšší moc“ | `EK6-013` |
| § 2912 odst. 2 OZ | Kdo se zaváže k činnosti vyžadující zvláštní odbornost a neuplatní ji, **presumuje se nedbalým** | `EK6-013` |
| **§ 2950 OZ** | Odborník za odměnu odpovídá za škodu způsobenou **neúplnou nebo nesprávnou informací nebo škodlivou radou** | `EK6-014` |
| § 1800 odst. 2, § 1801 OZ | Omezení jen ve VOP je vůči podnikateli platné, dokud **hrubě neodporuje obchodním zvyklostem** – proto se vyplatí držet se tržního standardu | `EK6-015` |
| čl. 28 GDPR | Náležitosti zpracovatelské smlouvy; odst. 2 zákaz sub-zpracovatele bez povolení; odst. 10 kdo určuje účel a prostředky, je správce | `EK6-024` |
| čl. 82 GDPR | Za pokutu odpovídá primárně správce; zpracovatel jen za vlastní povinnosti nebo jednání mimo pokyny; solidarita vůči subjektu údajů a regres | `EK6-025` |

**§ 2950 je nejpřehlíženější riziko celé služby.** Neplatí jen na rozbité měření – platí i na situaci,
kdy měření funguje, ale my dodáme špatné číslo v měsíčním komentáři nebo v rekonciliaci a klient podle
něj rozhodne o rozpočtu. Data ze správy měření jsou z podstaty „informace za odměnu“.

### 2.4 SLA velkých dodavatelů: co přesně slibují a s jakou odpovědností

| Dodavatel | Slib | Sankce | Co je vyloučeno | Důkaz |
|---|---|---|---|---|
| BigQuery (mimo Standard) | 99,99 % měsíčně | kredit 10 / 25 / 50 %, max 50 % | „Downtime“ = **nad 10 % chybovosti**; chyby SW klienta a třetích stran; kvóty | `EK6-001`, `EK6-002` |
| BigQuery Data Transfer Service | doručení dat **do 24 h** | kredit ve výši poplatků za dotčenou konfiguraci za daný den | jen automaticky plánované běhy | `EK6-002` |
| GA 360 – Collection | 99,9 % uptime sběru | 5 / 10 / 15 / 25 % měsíčního poplatku, strop 25 % | poruchy na webu klienta; client-side sampling | `EK6-005`, `EK6-007` |
| GA 360 – Data Processing | zpracování do 4 h (Normal) / 48 h (Large) / 7 dní (XL) při 98 % | tatáž škála | – | `EK6-007` |
| **GA 360 – export do BigQuery a Google Ads** | **žádný slib** | – | „Integration Features“ jsou z SLA vyňaty | `EK6-006` |
| GA4Dataform (Premium/Custom) | první odpověď do **3 pracovních dnů** | žádná | misuse, misconfiguration, třetí strany; SLA není závazná bez enterprise smlouvy | `EK6-003`, `EK6-004` |
| ADS-Tracking (DE) | „Betrieb, Monitoring und Störungsbehebung“ v každém tieru | **žádná reakční doba neuvedena**; místo ní 10/20/30 h konzultací **ročně** | kein Erfolgsversprechen | `EK6-017` |
| Measurelab (UK) | „SLA-backed tag management … guaranteed response times“ | **číslo nezveřejněno** | – | `EK6-018` |
| DASE (SK) | – | – | žádné VOP ani SLA na webu | `EK6-036` |

**Nejdůležitější řádek je pátý.** Ani na 360 úrovni nemá klient žádný slib ohledně BigQuery exportu.
To je věcné odůvodnění existence tieru 3 – a zároveň důvod, proč v něm nesmíme garantovat *výsledek*,
jen *kontrolu a reakci*.

### 2.5 Zpracovatelská smlouva k objednávkovým datům

**Jsme zpracovatel?** ÚOOÚ `EK6-026`: *„Zpracovatel naopak není subjekt, který internetovému obchodu
pouze provede jednoduchou opravu IT zařízení, byť může při této činnosti mít přístup k datům.“*
Ale typickým zpracovatelem je ten, kdo *„prováděl by i rozsáhlejší údržbu systému, zahrnující i osobní
údaje“*. **Denní čtení objednávek z e-shopu přes API je průběžné a systematické – jsme zpracovatel a
DPA je povinná.** Jednorázový audit měření bez přístupu k objednávkám zpracovatelem nedělá.

Hranice, která rozhoduje o rozsahu: pokud si z API bereme **jen `transaction_id`, částku a čas**,
je to stále osobní údaj (nepřímý identifikátor vázaný na konkrétní nákup), ale rozsah je minimální –
a minimalizace je samostatná povinnost správce, kterou tím plníme za něj. To patří do nabídky
jako argument, ne do drobného písma.

**Náležitosti DPA podle čl. 28 odst. 3 GDPR `EK6-024` – kontrolní seznam:**

Návětí (musí být uvedeno vždy): 1) předmět zpracování, 2) doba trvání, 3) povaha zpracování,
4) účel zpracování, 5) typ osobních údajů, 6) kategorie subjektů údajů, 7) povinnosti a práva správce.

Osm povinností zpracovatele:
| Písm. | Povinnost | Co to u nás konkrétně znamená |
|---|---|---|
| a) | zpracování **jen na doložené pokyny správce** | mít písemné zadání, co z e-shopu čteme a proč; bez toho hrozí čl. 28 odst. 10 |
| b) | mlčenlivost osob oprávněných zpracovávat | NDA se subdodavateli a spolupracujícími OSVČ |
| c) | opatření podle čl. 32 (zabezpečení) | 2FA, oddělené účty, šifrované úložiště, seznam přístupů |
| d) | podmínky zapojení dalšího zpracovatele | seznam sub-zpracovatelů: Google Cloud, alerting, ticketing – **s předchozím povolením správce** |
| e) | součinnost při žádostech subjektů údajů | postup, jak dohledat a smazat data konkrétní objednávky |
| f) | součinnost při čl. 32–36 (bezpečnost, ohlašování, DPIA) | lhůta, do kdy klientovi hlásíme incident (klient má na ÚOOÚ 72 h) |
| g) | **po skončení služby data smazat nebo vrátit**, včetně kopií | offboarding: co s cache rekonciliace, s exporty, s BQ datasety |
| h) | doložit splnění a **umožnit audit včetně inspekcí** | jak často, kdo platí, jak dlouho dopředu se ohlašuje |

Dále: odst. 2 – **bez písemného povolení správce nesmíme zapojit dalšího zpracovatele**; odst. 4 – za
sub-zpracovatele odpovídáme správci plně; odst. 9 – **písemná forma, elektronická stačí**;
odst. 10 – **kdo určí účely a prostředky, považuje se za správce**.

**Praktický důsledek odst. 10:** když o nastavení měření a o tom, co se sbírá, rozhodujeme sami bez
doloženého pokynu klienta, přebíráme roli **správce** – a s ní přímou pokutovou odpovědnost. Doložený
měřicí plán schválený klientem tedy není administrativa, je to pojistka.

### 2.6 Consent a odpovědnost: kdo nese pokutu

**Vůči úřadu nese pokutu klient.** Všech 4 443 000 Kč uložených pokut šlo „různým provozovatelům
webových stránek“, tedy správcům `EK6-027`. Pravomocně 1 640 000 Kč, nejvyšší jednotlivá **898 000 Kč**
za „nahrávání cookies … do koncových zařízení návštěvníků, bez jejich souhlasu“. Před pokutami odeslal
Úřad **přes 120 vytýkacích dopisů**.

Právní základ není GDPR, ale **§ 89 odst. 1 a 3 zákona č. 127/2005 Sb.** `EK6-028` – povinnost získat
předem prokazatelný souhlas má ten, kdo ukládá údaje do koncového zařízení, tj. provozovatel webu.

**Vůči nám má klient regres.** Podle čl. 82 odst. 2 GDPR `EK6-025` odpovídá zpracovatel jen tehdy,
když nesplnil vlastní zpracovatelské povinnosti nebo jednal **nad rámec pokynů správce nebo v rozporu
s nimi**. Odst. 4 zavádí solidaritu vůči subjektu údajů, odst. 5 regres mezi správcem a zpracovatelem.
Prakticky: klient zaplatí pokutu a pak ji po nás může vymáhat jako škodu – a tam už platí náš smluvní
strop a vyloučení ušlého zisku.

**Vůči Googlu máme vlastní, oddělené riziko.** EU user consent policy `EK6-035`: *„If you fail to
comply with this policy, we may limit or suspend your use of the Google product and/or terminate your
agreement“*, a to i pro weby „under the control of … your client“. Naše riziko není pokuta, ale ztráta
účtu Google, ze kterého žijeme.

**Devítipoložkový seznam vad cookie lišt od ÚOOÚ** `EK6-028` je hotový checklist kvartální kontroly
consentu (netechnické cookies bez souhlasu, nepřiměřená platnost, chybějící „nesouhlas“ v první
vrstvě, špatná kategorizace, chybějící výčet cookies, rozdílná viditelnost tlačítek, informace
v cizím jazyce, lišta blokující čtení webu). Šestibodový seznam z roku 2023 `EK6-027` k tomu přidává
**„cookies lišta na individuální nastavení … buď nereaguje nebo reaguje nedostatečně“** – což je
přesně vada, kterou odhalí technická kontrola consent mode a kterou právník od stolu nenajde.

### 2.7 Vlastnictví přístupů a účtů

| Zjištění | Zdroj |
|---|---|
| „Klientský účet je stále vlastníkem dat a vlastnický přístup může být odebrán odpojením.“ | `EK6-029` |
| „Pokud správce vytvoří nový účet, stane se automaticky jeho vlastníkem. Pokud však správce připojí stávající účet, jeho vlastníkem se automaticky nestane.“ | `EK6-029` |
| Google doporučuje: „aby správce byl zároveň vlastníkem pouze v případě, kdy účet správce tato oprávnění skutečně potřebuje“ | `EK6-029` |
| „Po ukončení spolupráce s agenturou stačí přístupy jedním klikem odebrat. … Přidáním agentury jako uživatele nikdy nepřicházíte o vlastnictví účtu.“ | `EK6-030` |
| „Nikdy nesdílejte hesla. Sdílení hesel porušuje podmínky většiny platforem…“ | `EK6-030` |
| ADS-Tracking na dotaz „Wem gehören die erfassten Daten?“ odpovídá „Dir“ a slibuje „strukturiertes Offboarding“ | `EK6-017` |

**Českou rozhodovací praxi (soudní spory o držení účtů agenturou) jsem nenašel** – viz § 4. Trh to
řeší provozně a preventivně, ne soudně. Riziková je jen jedna situace: účet **založený námi** je
automaticky náš, a přesně tak vzniká pain `access_lost`.

---

## 3. INTERPRETACE – co to mění na závěrech verze 2

### 3.1 Na cenových pásmech 8 900 / 19 900 / 39 000

**(a) Tier 1 za 8 900 Kč nesmí argumentovat promarněným spendem.** Je to nejtvrdší závěr úkolu.
Kdybychom převzali nejnižší český vzorec (Konverzky, 1 měsíční odměna `EK6-020`), je strop naší
odpovědnosti **8 900 Kč**. To je méně, než kolik dělá jediný den ztraceného měření u e-shopu se
spendem 300 tis. Kč/měs. Nabídka, která argumentuje ztrátou v desítkách tisíc a ve smlouvě ručí
osmi tisíci, je při prvním pozorném čtení nedůvěryhodná. Vstupní tier proto musí prodávat
**kontrolu a klid**, ne pojištění ztráty – což mimochodem dává i lepší odlišení od Signals Bar
za 2 500 Kč: ten neručí ani osmi tisíci.

**(b) Tier 3 za 39 000 Kč dostává první věcné (ne srovnávací) odůvodnění.** Verze 2 uznává, že
39 000 Kč nemá tržní oporu. Právní vrstva ji nedodá, ale dodá **obsah**: ani placená GA360 nemá SLA
na BigQuery export ani na propojení s Google Ads `EK6-006`, u BigQuery se Downtime počítá až nad 10 %
chybovosti `EK6-002` a všechny chyby na straně webu klienta jsou vyloučeny `EK6-007`. Tier 3 tedy
prodává **jedinou kontrolu v celém řetězci, kterou nikdo jiný nedělá a nikdo za ni neručí**. To je
argument, který v korpusu dosud nebyl.

**(c) SLA sankce musí být menší, než trh napovídá, a musí mít strop na incident.** Kdybychom převzali
vshostingův vzorec (1/10 měsíčního paušálu za započatou hodinu prodlení `EK6-009`) na reakční dobu,
znamená to u tieru 2 **1 990 Kč za hodinu** – a deset hodin zpoždění sebere celý měsíční paušál.
Protože SLA sankci **nekryje pojištění** (nekryje odpovědnost převzatou ve smlouvě ani újmy
z nedodržení lhůt `EK6-034`), platí se z hrubé marže 43–65 %. Doporučená konstrukce: **10 % měsíční
odměny za každou započatou dvojnásobek-lhůty (tj. za každých dalších 8 h u tieru 2), strop 50 %
měsíční odměny za kalendářní měsíc.** Cenu tierů to nemění, mění to jejich rizikový profil.

**(d) Vyšší tier smí slibovat rychlejší reakci právě proto, že má větší sankční rozpočet.** Rozestup
tierů se tím poprvé dá obhájit něčím měřitelným: při 10% sankci a 50% stropu je maximální měsíční
expozice 4 450 / 9 950 / 19 500 Kč. Reakční doba 4 h u tieru 3 je tedy dvakrát dražší slib než
reakční doba 8 h u tieru 2 – a je vidět, za co klient platí.

**(e) Ceny se nemění.** Právní vrstva nedodala žádný nový cenový bod. Dodala nákladovou položku
(pojištění profesní odpovědnosti, `EK6-033`) a rizikovou položku (SLA sankce z marže), které je nutné
zahrnout do ekonomiky dodávky v úkolu A3.

### 3.2 Na otevřené otázce, jestli poptávka existuje

**Právní vrstva na otázku poptávky neodpovídá – ale posouvá dva její dílčí body a jeden nový přidává.**

1. **Prázdná pozice je potvrzena z nového směru.** Ve skupině srovnatelných dodavatelů správy měření
   (GA4Dataform, Measurelab, ADS-Tracking, DASE) **neexistuje jediný veřejný dokument s číselnou
   reakční dobou a sankcí** `EK6-003`, `EK6-018`, `EK6-017`, `EK6-036`. Nejlepší veřejné SLA v oboru
   slibuje první odpověď do tří pracovních dnů a samo o sobě říká, že není závazné. Publikované SLA
   s číslem by bylo v tomto vzorku první.
2. **Ale je to slabší diferenciátor, než vypadá.** Důvod, proč ho nikdo nemá, není nevšímavost:
   je nepojistitelný, platí se z marže a Google – dodavatel, na kterém služba stojí – se sám
   nezavazuje k ničemu, co by šlo dolů propsat. Prázdná pozice tu má **doložitelnou ekonomickou
   příčinu**, ne jen náhodu. To je argument spíš pro hypotézu „hřbitov“ než „příležitost“, a měl by
   se dostat do zadání testu poptávky (A2) jako varianta B landing stránky: „reakce do 8 hodin
   se smluvní pokutou“ vs. „kontrola měření bez SLA“.
3. **Nový, dosud nepoužitý prodejní argument, který poptávku netvoří, ale rozšiřuje:** ÚOOÚ má veřejná
   čísla (4 443 000 Kč, nejvyšší pokuta 898 000 Kč, 120+ vytýkacích dopisů `EK6-027`) a veřejný
   devítibodový seznam vad cookie lišt `EK6-028`. Kontrola consentu proti tomuto seznamu je
   **artefakt s externí autoritou**, který v ČR nikdo jako součást paušálu neprodává, dá se udělat
   kvartálně a je jediné místo v celé nabídce, kde umíme ukázat **doložené české číslo v korunách**
   – zatímco kvantifikace ztráty z rozbitého měření v korunách stále chybí. Pozor ale na to, že tím
   vstupujeme do sousedství právních a CMP dodavatelů, kteří to prodávají také.
4. **Jeden bod verze 2 se právní vrstvou oslabuje:** diferenciátor „garantovaná reakční doba“ byl
   ve verzi 2 uveden jako to, co v ČR ani na SK veřejně neslibuje nikdo. Platí to dál, ale nově víme,
   že v **sousedních oborech** je to běžně ceněná osa (Externí IT, SKOMATECH – viz `K04`) a že
   v našem oboru chybí z ekonomických důvodů. Tvrzení „nikdo to nemá“ tedy zůstává pravdivé,
   ale přestává být samo o sobě důkazem příležitosti.

### 3.3 Co MUSÍ být ve smlouvě, aby se dal slib reakční doby publikovat

Bez těchto bodů slib publikovat nelze. Pořadí je podle rizika, ne podle pořadí ve smlouvě.

**A. Definice slibu**
1. **Reakční doba = lhůta k zahájení práce**, nikoli k vyřešení. Vzor: GA4Dataform slibuje „first
   response“ `EK6-003`, Google slibuje uptime, nikdo neslibuje výsledek.
2. **Odkdy lhůta běží:** od nahlášení klientem *nebo* od okamžiku, kdy problém zachytí naše kontrola –
   podle toho, co nastane dřív. Master i vshosting počítají lhůtu **od nahlášení** `EK6-008`,
   `EK6-009`; my nabízíme víc, a musí to být vidět.
3. **Provozní doba SLA** (pracovní dny, hodiny) a co se děje mimo ni. GA4Dataform: „Monday–Friday,
   10:00–01:00 CET/CEST“ `EK6-003`.
4. **Co lhůtu nespouští** – převzít vzor: chyby na straně webu klienta, zásahy třetích osob do GTM
   a do měřicích nástrojů, výpadky Googlu, změny platforem `EK6-007`, `EK6-011`.
5. **Definice incidentu s prahem.** Bez prahu je alert fatigue smluvní povinností. Google používá
   práh 10 % chybovosti `EK6-002`; my máme z 2. kola prahy 10 / 30 %.

**B. Sankce a odpovědnost**
6. **Jediná sankce za nedodržení reakční doby = sleva/kredit z naší odměny**, číselně a se stropem.
   Formulace „jiné nároky z prodlení se vylučují“ podle vzoru Master `EK6-008` a Google „sole and
   exclusive remedy“ `EK6-001`.
7. **Vyloučení nepřímé škody a ušlého zisku** – bez toho je promarněný spend v hře `EK6-023`.
8. **Číselný strop náhrady škody** odvozený z odměny (trh: 1–6 měsíčních odměn) `EK6-019`, `EK6-020`.
9. **Věta o předvídatelné škodě** podle § 2913 odst. 1, aby strop obstál `EK6-010`, `EK6-013`.
10. **Výhrada podle § 2898** (úmysl, hrubá nedbalost, přirozená práva, slabší strana) `EK6-012`,
    `EK6-019`. Bez ní padá celý článek.
11. **Klauzule k § 2950** – povaha dodávaných čísel (odhad z měřicích systémů, nikoli účetní doklad),
    rozhodnutí činí klient `EK6-014`.
12. **Vyloučení odpovědnosti za výsledky činnosti, ke kterým se data užívají** `EK6-011`.
13. **Reklamační lhůta a promlčení** – ale ne dračí. Trh má 3 dny / 6 měsíců `EK6-022` a 1 rok
    `EK6-021`; u tiché chyby je krátká lhůta v rozporu s tím, co prodáváme.

**C. Součinnost a přístupy**
14. **Povinnost klienta hlásit releasy a změny předem** a důsledek jejího nesplnění (běh lhůty,
    vyloučení odpovědnosti) – vzor „er ist zur aktiven Mitarbeit und Mitwirkung verpflichtet“
    `EK6-016` a povinnost kontroly před nasazením `EK6-011`.
15. **Účty a přístupy pod klientem**, my jako správce; účty, které založíme, převádíme na klienta
    `EK6-029`; nesdílíme hesla `EK6-030`.
16. **Offboarding:** co předáme, do kdy, v jakém formátu; smazání nebo vrácení dat podle
    čl. 28 odst. 3 písm. g) `EK6-024`; „strukturiertes Offboarding“ jako slib v nabídce `EK6-017`.
17. **Changelog jako důkaz plnění SLA** – vzor Measurelab: „Jira-backed delivery with SLA tracking and
    a clear audit trail“ `EK6-018`. Bez auditní stopy je slib reakční doby nevymahatelný oběma směry.

**D. Data a consent**
18. **Zpracovatelská smlouva** se všemi náležitostmi čl. 28 odst. 3 (§ 2.5) `EK6-024`, `EK6-026`.
19. **Seznam sub-zpracovatelů** a mechanismus jejich změny `EK6-024`.
20. **Doložené pokyny klienta** k tomu, co se měří a sbírá (schválený měřicí plán) – ochrana proti
    čl. 28 odst. 10 `EK6-024`.
21. **Prohlášení klienta, že zajišťuje platný souhlas** podle § 89 zákona č. 127/2005 Sb., a naše
    právo pozastavit službu, když to neplatí – kvůli riziku vůči Googlu `EK6-035`, `EK6-028`.
22. **Rozdělení rolí u consentu:** klient je správce a nese pokutu `EK6-027`, my odpovídáme za to,
    že tagy respektují stav souhlasu tak, jak nám ho klient zadal `EK6-025`.

**E. Provoz**
23. **Pojištění profesní odpovědnosti** s krytím čisté finanční škody, uvedené ve smlouvě jako
    závazek je držet `EK6-033`; a vědomí, že SLA sankce se z něj neplatí `EK6-034`.
24. **Vyšší moc** formulovaná podle § 2913 odst. 2 (mimořádná, nepředvídatelná a nepřekonatelná
    zároveň), ne obecně `EK6-013`.

### 3.4 Vzor omezení odpovědnosti k převzetí

Složeno z ADEO `EK6-019`, vshosting~ `EK6-010` a Promedeus `EK6-023`; není to právní rada, je to
osnova pro právníka.

> **X.1 Sankce za nedodržení reakční doby.** Nedodrží-li Poskytovatel reakční dobu sjednanou ve
> Smlouvě, vzniká Objednateli právo na slevu z měsíční odměny ve výši 10 % za každý započatý násobek
> sjednané reakční doby, o který byla lhůta překročena, nejvýše však do výše 50 % měsíční odměny
> v jednom kalendářním měsíci. **Tato sleva je jediným nárokem Objednatele z nedodržení reakční doby;
> jiné nároky, zejména na náhradu škody nebo smluvní pokutu, jsou vyloučeny.**
>
> **X.2 Kdy reakční doba neběží.** Reakční doba neběží po dobu, kdy je vada způsobena (a) zásahem
> Objednatele nebo třetí osoby, které Objednatel umožnil přístup k měřicím nástrojům, (b) změnou
> na straně webu, aplikace nebo systémů Objednatele, o které nebyl Poskytovatel předem informován,
> (c) výpadkem nebo změnou služeb třetích stran (zejména Google), (d) prodlením Objednatele
> se součinností.
>
> **X.3 Omezení náhrady újmy.** Poskytovatel neodpovídá za nepřímou nebo následnou škodu, ušlý zisk,
> výpadek příjmů, ztrátu obchodní příležitosti ani za ztrátu nebo zkreslení dat vzniklou mimo jeho
> plnění. Celková výše náhrady újmy, k níž je Poskytovatel povinen ze všech porušení Smlouvy
> souhrnně, je omezena výší odměny skutečně uhrazené Objednatelem za období **šesti (6) měsíců**
> předcházejících jednání, které vedlo ke vzniku újmy. **Smluvní strany s ohledem na všechny okolnosti
> související s uzavřením Smlouvy konstatují, že úhrnná předvídatelná újma včetně ušlého zisku, jež by
> mohla Objednateli v důsledku porušení povinností Poskytovatele vzniknout, může činit nejvýše tuto
> částku.**
>
> **X.4 Výhrada.** Omezení podle čl. X.1 a X.3 se nevztahují na újmu způsobenou úmyslně nebo z hrubé
> nedbalosti, na újmu způsobenou člověku na jeho přirozených právech, ani na jiné případy, v nichž
> právo na náhradu újmy nelze podle kogentních právních předpisů předem omezit či vyloučit
> (§ 2898 občanského zákoníku).
>
> **X.5 Povaha výstupů.** Výstupy Poskytovatele (měření, dopočty, srovnání s administrací e-shopu,
> komentáře) jsou odhadem založeným na datech měřicích systémů třetích stran a nejsou účetním ani
> daňovým dokladem. Poskytovatel neodpovídá za obchodní rozhodnutí Objednatele učiněná na jejich
> základě.

Volba 6 měsíců (nikoli 1) je vědomá: leží na horní hranici českého zvyku `EK6-019`, je stále pod
mezinárodním standardem 12 měsíců `EK6-032` a u tieru 2 dává strop 119 400 Kč – tedy číslo, které
se dá říct nahlas, aniž by protiřečilo prodejnímu argumentu.

---

## 4. MEZERY, které zůstávají

| # | Co chybí | Proč se to nepodařilo | Jak to doplnit |
|---|---|---|---|
| 1 | **WEDOS – VOP a SLA** | Web za anti-bot ochranou (WEDOS.protection, ALTCHA PoW), HTTP 401 na `/sla`, `/vseobecne-podminky` i `/cs/podminky`; archivní snímek existuje (`20250126112050`), ale jeho stažení končí resetem spojení `EK6-037` | Prohlížeč s JS nebo jiný výstupní bod; 15 minut práce |
| 2 | **Česká judikatura k omezení náhrady škody** | Vyhledávání na epravo.cz nevrátilo relevantní články; nemám přístup do NS/ÚS databází přes veřejné rozhraní | Rozhodnutí NS k § 2898 a k limitaci škody v B2B; nebo jeden komentář (Beck/Wolters Kluwer) |
| 3 | **Text konkrétního rozhodnutí ÚOOÚ ke cookies** | Úřad ho nezveřejňuje: *„S ohledem na neveřejnost správního řízení Úřad … nezveřejňuje konkrétní seznam těch, komu byla udělena pokuta“* `EK6-027` | Nelze veřejně; alternativou je žádost podle zák. 106/1999 Sb. o anonymizovaná rozhodnutí |
| 4 | **Cena pojištění profesní odpovědnosti pro náš profil** | Pojistné je individuální, limit „stanoví pojistník na vlastní odpovědnost“; kalkulačky nejsou veřejné `EK6-033` | 3 nabídky od makléře na limit 5 / 10 / 20 mil. Kč, s krytím čisté finanční škody a IT služeb – vstup do ekonomiky dodávky (A3) |
| 5 | **Zda pojistitel odmítne krýt škodu z porady/informace** | Výluky se liší produkt od produktu; ověřen jen jeden (Generali Profeska) | Porovnat s ČSOB „Pojištění odpovědnosti v souvislosti s poskytováním IT služeb“ – tam je krytí ztráty dat výslovně |
| 6 | **Česká rozhodovací praxe ke sporům o účty a přístupy** | Nenalezena; trh to řeší provozně, ne soudně | Dotaz do komunity (Webtrh, PPCkaři) na reálné případy – zároveň validace |
| 7 | **Obchodní podmínky Measurelab a DASE** | `/terms`, `/legal`, `/terms-and-conditions` vracejí 404; DASE nemá VOP na webu vůbec `EK6-018`, `EK6-036` | Jen na vyžádání – mimo rozsah tohoto kola (zákaz kontaktu) |
| 8 | **Zda klient strop 1–6 měsíčních odměn přijme** | Vyjednávací realita není veřejný zdroj | Součást validačních rozhovorů (A4): předložit návrh čl. X a sledovat, kde se klient zastaví |
| 9 | **Jestli reakční doba se sankcí zvedá ochotu platit** | Neověřitelné rešerší; K04 doložil, že v sousedních oborech ano (1,63× za stupeň), v našem oboru to nikdo nezkusil | Přímo do testu poptávky (A2) jako druhá landing stránka |
| 10 | **Zpracovatelská pozice u čistě agregovaných dat** | ÚOOÚ řeší hraniční případy jen obecně `EK6-026`; nenašel jsem stanovisko k tomu, kdy je součet objednávek za den ještě osobní údaj | Právní posouzení jedné konkrétní varianty API integrace (navazuje na K03) |
