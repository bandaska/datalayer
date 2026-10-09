# URL: https://www.marketingppc.cz/sluzby/kontrola-cookies/

#### Důležité upozornění pro inzerenty v Google Ads

# Váš web patrně\* posílá data Googlu bez souhlasu uživatelů.

# Google to ví.

# A může vám kvůli tomu zablokovat měření konverzí i remarketing.

### Pokud používáte Google Ads a na vašem webu není správně implementován režim souhlasu (consent mode v2), pravděpodobně porušujete [Google EU User Consent Policy](https://www.google.com/about/company/user-consent-policy/) — i v případě, že cookie lištu máte.

\*na základě 250+ provedených auditů se to týká 42% webů

[Chci vědět, jak to opravit](#kontakt)

## Google aktivně audituje weby inzerentů. A posílá jim výzvy k odstranění chyb.

Toto není jen teorie, ale skutečný problém pro inzerenty. Příklad e-mailu, který Google rozesílá.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

###### Google v e-mailu stanoví konkrétní termín — tento měl 3 týdny na nápravu.

Po uplynutí lhůty bez reakce může Google okamžitě omezit remarketing a měření konverzí. Bez varování, bez dalšího mailu.

Google provádí tyto audity již několik let, ale **v posledních měsících výrazně zintenzivnil**.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Jejich vlastní dokumentace říká:

*„Pokud s námi partner nekomunikuje nebo neprokáže snahu dosáhnout v přiměřené době souladu, může to vést k zásahu proti příslušným účtům, **včetně pozastavení funkcí publika, personalizace reklam (například remarketingu) a měření konverzí.**„*

— Google: [Pomoc se zásadami pro souhlas uživatele z EU](https://www.google.com/intl/cs/about/company/user-consent-policy-help/)

Bez měření konverzí jsou vaše Google Ads kampaně slepé — algoritmus optimalizuje na prázdno a vy nevíte co funguje. A bez remarketingu přicházíte o uživatele, kteří váš web už navštívili a byli nejblíž nákupu.

### Co se stane, když to opravíme správně.

"Největší přínos pro mě měla odborná pomoc od MarketingPPC s nastavením Google Tag Manageru a implementací všem tolik „oblíbeného“ Cookie Consentu. Vše mi dokázali srozumitelně vysvětlit, doporučili nejlepší postupy a postarali se o hladké nasazení do praxe. Díky tomu mám jistotu, že sběr dat i souhlasy uživatelů na webu probíhají správně a v souladu s požadavky."

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Jiří Hrma

Šéfredaktor SMARTmania.cz

Správně nastavený režim souhlasu consent mode v2 dělá dvě věci najednou: chrání vás před auditem a zároveň Googlu umožňuje modelovat konverze od uživatelů, kteří souhlas neudělili. Kampaně mají více dat a lépe se optimalizují — bez porušení pravidel.

### „Ale já přece cookie lištu mám." Přesně toto říká většina lidí, u kterých jsme problém našli.

Existence cookie lišty neznamená soulad s pravidly. Google neaudituje přítomnost lišty — audituje její funkčnost. Konkrétně ověřuje:

* jestli se signály souhlasu správně předávají do Google značek
* jestli se cookies nenastavují *před* udělením souhlasu
* jestli lišta obsahuje zmínku o personalizaci reklam
* jestli je na liště nebo v podmínkách ochrany osobních údajů odkaz na zásady Google

Co k tomu říká Google dokumentace:

*„Použití certifikované platformy CMP samo o sobě nezaručuje soulad se zásadami společnosti Google pro souhlas uživatele z EU. Záleží totiž na způsobu začlenění platformy CMP a konkrétní žádosti o souhlas předložené uživatelům.“*

— Google: [Pomoc se zásadami pro souhlas uživatele z EU](https://www.google.com/intl/cs/about/company/user-consent-policy-help/)

Ani certifikovaná placená CMP vás automaticky nezachrání. Záleží na konkrétní implementaci. A implementaci dělal někdo, otázka je, jak správně je provedena. Dle našich zkušeností často nefunguje, jak by měla.

## 250+

auditů implementace cookie lišty, které jsme provedli

## 42%

webů mělo závažný problém — i s existující cookie lištou

## 39%

mělo na první pohled cookie lištu, která ale nefungovala správně

A existuje i opačný problém — weby, které mají nastavení příliš přísné a zbytečně přicházejí o data která sbírat mohou. Jejich kampaně optimalizují na neúplná čísla.

### 3 nejčastější typy problémů. Který z nich má váš web?

Na základě 250+ auditů jsme identifikovali tři základní kategorie. Každá má jiné příčiny, jiná rizika a jiné řešení.

### Kategorie A: Žádná cookie lišta

Bez cookie lišty spouštíte Google Ads remarketing, Meta pixel nebo GA4 bez souhlasu uživatele. Google to identifikuje okamžitě. A jejich vlastní dokumentace říká jasně: souhlas musí být získán *před* spuštěním značek, ne po.

* Okamžitý cíl auditu — absence lišty je nejviditelnější porušení
* Riziko pozastavení remarketingu a měření konverzí
* Další rizika, protože web porušuje GDPR

* Nainstalujeme a nakonfigurujeme funkční řešení přes GTM — bezplatné nebo placené
* Zajistíme správné předávání režimu souhlasu do Google Ads a GA4
* Připravíme zadání pro váš tým nebo provedeme implementaci sami

### Kategorie B: Lišta je, ale značky se spouští bez souhlasu

Nejčastější případ. Cookie lišta se zobrazí, uživatel odmítne cookies — ale Meta pixel nebo Google Ads značka se spustí stejně. Z pohledu Googlu je výsledek identický jako bez lišty. Technicky to vypadá v pořádku. Ve skutečnosti data web předává bez souhlasu a Google to při auditu vidí stejně jasně jako v kategorii A.

* Stejné riziko jako bez lišty — Google to při auditu odhalí
* Falešný pocit bezpečí — majitel webu si myslí, že je v pořádku

* Otestujeme reálné chování značek v GTM před a po souhlasu — naživo uvidíte co se děje
* Opravíme konfiguraci tak, aby se žádná značka nespustila bez souhlasu

### Kategorie C: Režim souhlasu běží, ale některé cookies "prosakují"

Pokud není výchozí stav souhlasu nastaven před spuštěním GTM, Google značky se spustí jako by consent mode vůbec neexistoval. To říká přímo Google ve své dokumentaci. A toto nastavení chybí na většině webů které prošly naším auditem.

* Cookies se ukládají ještě před rozhodnutím uživatele — přímé porušení
* Riziko auditu, riziko GDPR
* Problém se týká i webů s jinak správně nastaveným consent mode

* Nastavíme správné výchozí hodnoty consent mode v2 v GTM
* Ověříme, že žádný tag se nespustí před rozhodnutím uživatele — ani při první návštěvě

Víme, do které kategorie váš web patří. Chcete vědět jak to opravit?

[Chci vědět, jak to opravit](#kontakt)

### Otázky, které dostáváme nejčastěji — a srozumitelné odpovědi.

Odpovědi vycházejí i z [oficiální české dokumentace Google k zásadám pro souhlas uživatele z EU](https://www.google.com/intl/cs/about/company/user-consent-policy-help/).

###### OtázkaKdy potřebuji cookie lištu?

Skoro vždy. Pokud na webu běží Google Analytics 4, Meta pixel, nebo jakýkoliv jiný analytický nebo reklamní nástroj, potřebujete souhlas návštěvníka.

Bez cookie lišty tyto nástroje spouštíte bez vědomí uživatele. To je problém právní (GDPR) i praktický — Google při auditu absenci lišty okamžitě vidí a může omezit funkce vašich reklamních kampaní.

###### Mýtus„Mám cookie lištu, takže jsem v pořádku."

Tohle je nejrozšířenější mylná představa — právě proto, že dává falešný pocit bezpečí. Google neaudituje přítomnost lišty, ale její funkčnost. Ani certifikovaná CMP nezaručuje soulad. Google to říká doslova: *„Záleží na způsobu začlenění platformy CMP a konkrétní žádosti o souhlas předložené uživatelům.“*

###### Mýtus„Toto se týká jen velkých firem."

Google audituje všechny weby a aplikace, které používají jeho reklamní služby — bez ohledu na velikost. Podmínka je jediná: máte Google Ads, remarketing, nebo GA4 s návštěvníky z EU. Google provádí tyto audity i manuálně, jejich kontroloři navštěvují weby jako běžní uživatelé.

###### OtázkaCo je consent mode v2 (režim souhlasu) a proč na tom záleží?

Consent mode je způsob jak váš web komunikuje s Google produkty — říká jim co smí a co nesmí dělat s daty konkrétního návštěvníka. V2 přidala dva nové parametry: jeden řeší jestli mohou být data použita v reklamních systémech, druhý jestli může být návštěvník zařazen do remarketingových publik.

Bez consent mode v2 Google značky buď nevědí co smí, nebo předpokládají že smí vše — a obojí je problém. Buď přicházíte o data, nebo porušujete pravidla.

###### OtázkaCo se stane když consent mode v2 nemám nebo je špatně nastavený?

Mohou přestat fungovat dvě věci. Za prvé remarketing — Google nebude mít souhlas k zařazení uživatelů do remarketingových publik. Za druhé modelování konverzí v Google Ads — Google přestane dopočítávat konverze od lidí kteří cookie lištu odmítli.

Výsledek: kampaně budou mít méně dat, budou se hůře optimalizovat nebo mít horší výkon. Přitom příčina není ve výkonu kampaní — je v technické konfiguraci.

###### OtázkaCo se stane, když dostanu mail od Googlu a neudělám nic?

Google dá přiměřenou lhůtu a jeho prioritou je spolupráce na nápravě, ne okamžitý trest. Ale pokud nereagujete nebo neprokážete dobrou vůli, může dojít k pozastavení remarketingu, měření konverzí, nebo omezení na tzv. Limited Ads. Klíčové slovo je *„neprokáže snahu“* — kdo komunikuje a pracuje na opravě, minimalizuje riziko.

###### OtázkaJak poznám jestli consent mode v2 na svém webu mám?

Nejjednodušší způsob přes Tag Assistant:

1. Jděte na tagassistant.google.com a klikněte na „Add domain“
2. Zadejte adresu vašeho webu včetně https://
3. Klikněte na aktivní GA4 stream a vyberte záložku Consent
4. Pokud vidíte parametry ad\_user\_data a ad\_personalization — consent mode v2 máte

Pokud tyto parametry chybí, nebo si výsledkem nejste jistí, rádi to zkontrolujeme za vás.

###### OtázkaPotřebuji souhlas i pro nepersonalizované reklamy?

Ano. Google to uvádí explicitně: *„I nepersonalizované reklamy zobrazované na webech potřebují ke svému fungování soubory cookie.“* Souhlas je potřeba pro cookies obecně — bez ohledu na účel.

###### OtázkaProč mi v GA4 přibývá „unassigned" nebo „not set"?

Často jde o chybu v načasování consent mode. Pokud se consent mode inicializuje pozdě, GA4 nedostane UTM parametry z první stránky a návštěva skončí v „unassigned“ — bez informace odkud uživatel přišel. To přímo zhoršuje atribuci a optimalizaci kampaní. Opravitelné správnou konfigurací v GTM.

###### OtázkaMusím mít v liště výslovnou zmínku o „personalizaci reklam"?

Pokud používáte remarketing, tak ano — a toto je jeden z nejčastějších konkrétních důvodů nesouladu. Nestačí obecná fráze „zlepšení služeb“. Google vyžaduje výslovnou zmínku o personalizaci reklam. Dále musí být viditelný odkaz na [business.safety.google/privacy](https://business.safety.google/privacy/) — buď přímo v cookie liště, nebo ve vašich podmínkách na ochranu osobních údajů.

### Kdo vám s tímto dokáže pomoci

MarketingPPC je výkonnostní agentura s vlastním IT oddělením. Nejsme právníci — jsme technici kteří implementují GTM, GA4 a consent mode v2 každý den. Consent mode není pro nás novinka. Je to součást každé analytiky kterou stavíme.

![Picture of Ing. Petr Honzík Ph.D.](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

#### Ing. Petr Honzík Ph.D.

Absolvent FEKT VUT v Brně a Fern Universität v Hagenu (strojové učení a statistika). Deset let odborný asistent na VUT Brno. V MarketingPPC vyvíjí vlastní nástroje pro automatizaci PPC kampaní a věnuje se pokročilé implementaci měření a analytiky.

Nejsme právníci a neradíme k GDPR obecně. Řešíme technickou stránku — správnou implementaci consent mode v2 v GTM tak, aby váš web splňoval Google zásady pro souhlas uživatele z EU a zároveň nepřicházel o data která sbírat může.

Správná implementace consent mode v2 vyžaduje znalost GTM na úrovni která není běžná ani mezi vývojáři. Většina agentur to outsourcuje nebo odhaduje. My máme Petra — Ing. Ph.D., deset let VUT, který toto řeší každý den jako součást kampaní které spravujeme.

Výsledek: z 250+ auditů, které jsem provedl, mělo 42 % webů problém. I weby kde to „někdo nastavil“.

### Chci vědět jak to opravit

Víme co na vašem webu nefunguje. Stačí jeden krátký hovor přes Google Meet.

###### Co dostanete v hovoru:

* Ukážeme přesně kde na vašem webu je problém — naživo v prohlížeči
* Jestli vám unikají konverzní data a přibližně proč
* Konkrétní kroky k nápravě — co říci svému IT nebo vývojáři
* Jestli a jak může pomoci správné nastavení consent mode v2
* Orientační náklady na opravu — pokud budete chtít aby to udělal někdo za vás
* Cena implementace se odvíjí od složitosti vašeho webu — orientačně od 3 990 Kč

Odejdete s přesným zadáním co opravit a jak — ať už to budete řešit sami, nebo s námi. Hovor trvá 15–30 minut.

Jméno

Adresa vašeho webu

E-mail

Kdy vám hovor vyhovuje? 

--Úterý dopoledneÚterý odpoledneČtvrtek dopoledneČtvrtek odpoledne

Chci vědět, jak to opravit

Kapacita těchto hovorů je omezená — zvládneme 12 měsíčně.

### Proč jednat teď, ne až přijde další mail od Googlu.

Google ve své dokumentaci říká, že jeho první prioritou je spolupráce na nápravě — ne okamžitá sankce. To znamená, že kdo reaguje a pracuje na opravě, minimalizuje riziko. Kdo ignoruje, riskuje pozastavení remarketingu a měření konverzí.

Nevíme kdy přijde audit na váš web. Google to neoznamuje předem a nerozlišuje podle velikosti inzerenta. Víme ale, že v posledních měsících auditů přibývá.

Rozdíl mezi problémem a jeho řešením je jeden hovor. [**Rezervujte si ho.**](#kontakt)

![mergado odznak zlaty](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

![CSS Partner MarketingPPC](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

*Tato stránka není spojena se společností Google LLC. Google, Google Ads a Google Analytics jsou ochranné známky společnosti Google LLC.*