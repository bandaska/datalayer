# URL: https://digitalniarchitekti.cz/produkty/implementace-server-side-mereni-video/

# ****Implementace server-side měření**** – video ukázka

Na tom, že technologie server-side měření (SGTM, server-side tagging) **je pro budoucnost analytiky klíčová**, se shodují analytici napříč světem. A potvrzujeme to i my. Pro většinu společností a digitálních projektů je to však náročný technologický krok. Často vyžaduje nastavení a údržbu cloudové infrastruktury, kterou dosud pravděpodobně nepoužíváte. V takovém případě jsou tady profesionálové, jako jsme my, kteří vám pomohou s implementací server side měření od začátku.

Server-side měření se postupně stává standardem na trhu nejen kvůli faktu, že je to **technologický benefit**, ale také kvůli externím faktorům jako příchod marketplaces na trh v posledních letech, GDPR změny nebo změny prohlížečů. Google Chrome už několikrát upozorňoval na budoucí volbu zakázání cookies v rámci celého prohlížeče, což **zásadně změní způsob měření**. Poslední novinkou je update od Safari, kdy tento prohlížeč kromě již implementované funkce ITP, která má negativní vliv na měření, přidal ještě další překážku – **odstranění parametrů pro sledování** (gclid, fbclid, atd.)

[**Napište nám a rádi vám s implementací pomůžeme**](/kontakt)

**Krátké shrnutí celého článku**

* Jaký je rozdíl mezi serverovou a webovou metodou měření?
* Jak vyřešit problém s ukončením podpory 3rd party cookies?
* Kdy je vhodné serverovou metodu využít a jaké jsou její přínosy?
* Kolik vás to bude všechno stát?

## **Benefity** a přínosy

1. **Vyšší kvalita dat a menší ztráty** – Server-side měření minimalizuje chybovost způsobenou adblockery, blokováním skriptů nebo restrikcemi prohlížečů. Data jsou robustnější, méně náchylná ke ztrátám.
2. **Rychlejší načítání stránek a lepší UX** – Přesun části datové komunikace na server sníží množství JavaScriptu v prohlížeči a počet požadavků, což zrychlí načítání a zlepší uživatelský zážitek.
3. **Plná kontrola nad tím, co se posílá** – Na serveru můžete filtrovat, anonymizovat nebo upravovat data před tím, než je pošlete do reklamních platforem či analytiky. To přináší ochranu osobních údajů a bezpečnost pro vaše značky.
4. **Odolnost vůči omezením cookie / blokování třetích stran** – Protože kód běží mimo prohlížeč, omezení týkající se 3rd-party cookies nebo zásahy prohlížečů nemají tak velký dopad (např. adblockery)
5. **Možnost obohacení dat („data enrichment“) a unifikace toků** – Server má přístup i k interním systémům (CRM, databáze) – lze přidávat hodnoty (např. customer tier, marže) a posílat je dál. Také lépe sjednocujete data do jedné pipeline.
6. **Lepší zabezpečení a skrytí klíčů / identifikátorů** – API klíče, měřicí ID a další citlivé hodnoty zůstávají na serveru a nejsou snadno viditelné v klientském kódu, což snižuje možnost zneužití.
7. **Právní a souhlasová compliance** – Můžete vypořádat uživatelský souhlas (consent) na serveru, odstranit zakázané údaje dříve, než se odešlou ven, a lépe řídit, co se sdílí (v kontextu GDPR/CCPA).

## **Koncept server side měření** (SGTM)

Koncept server side měření (oproti client side, které používáte nyní běžně) není ničím novým. V principu jde o snahu ulehčit prohlížeči uživatele a maximum požadavků na měření vyřešit na serveru.

Dnes je běžná realita, že většina analytických a marketingových měření na webu je řešena tak, že do stránky vložíte pixely reklamních/marketingových a analytických nástrojů a ty vykonají práci za vás. Často ani nevíte, co přesně pixely dělají, jaká data sbírají a nemáte nad nimi kontrolu. V nástrojích vidíte čísla a nějak to funguje.

V takové chvíli prohlížeč uživatele při načtení stránky dotazuje množství domén poskytovatelů jednotlivých nástrojů. Prohlížeč musí zpracovávat enormní zátěž, což prodlužuje dobu načítání stránky a zpracovává množství JavaScript kódu.

## **Implementace přes Google Tag Manager** Server-Side kontejner

Historicky jste museli využít vlastní řešení, vlastní servery a vše nastavit sami. Nyní můžeme využít ready made řešení [Google Tag Manager](/clanek/google-tag-manager/) Server Side Container, které pomůže jak s deploymentem infrastruktury, tak i se samotným nastavením, debuggingem a dlouhodobou údržbou. Dalším možným řešením se v posledních letech nabízí externí servery jako Stape.io nebo Taggrs.io. Implementace prostřednictvím těchto serverů je technicky jednodušší, ale benefity server-side měření jako bezpečí a kontrola nad daty, přínos pro marketingové kampaně, mohou být však nižší.

Primárně je server side [GTM](/clanek/google-tag-manager/) (SGTM) hostován na [Google Cloud](/clanek/digitalni-architekti-funguji-na-cloudu/) App Engine. Můžeme ho nastavit i do Cloud Run (pro účely testování), případně ho můžete hostovat ve vlastním cloudu (či jiném cloudu např. AWS, či privátní cloud) pomocí Docker kontejneru (ten zajišťuje přenositelnost celé technologie server side měření od Googlu – je to takový cloudový flash disk).

## **Pro koho je server-side měření vhodné?**

[Google Tag Manager](/clanek/google-tag-manager/) server-side měření (SGTM) je vhodné především pro:

* Velké digitální projekty, kterým **záleží na ochraně a bezpečnosti dat jejich zákazníků**,
* Projekty, kde záleží na **kompletní kontrole nad sběrem first party dat** (a vlastnictví procesů a infrastruktury) od sběru po vizualizace (odvětví jako jsou banky, pojišťovny, zdravotnictví, zásadní e-shopový hráči apod.),
* Projekty, které chtějí využít veškerých prostředků pro **omezení frontendového JavaScriptu** na straně prohlížeče. Zároveň chtějí zajistit **snížení počtu requestů** na knihovny a endpointy třetích stran,
* Projekty, které chtějí být **technologicky na špici** ve svém oboru a investují do nových technologií v oblasti sběru dat,
* Projekty, které chtějí **ulehčit nárokům na content security policy (CSP)**stránek. A také **zakázat přímo komunikaci jejich projektů se stránkami reklamních vendorů**,
* Projekty, které potřebují obohacovat [sbíraná data o údaje z interních databází](/produkty/analyzy-nad-internimi-statistikami/) v reálném čase (objednávky uživatele, marže produktů, id uživatelů napříč systémy apod.),
* Projekty, které potřebují **čistit data již při sběru** (odstranění osobních údajů, ip anonymizace, odstranění digitálních otisků – fingerprints apod.),
* Projekty, které chtějí **omezit konflikty jednotlivých knihoven na frontendu, předejít možnému zneužití datové vrstvy či ochránit svá měřící ID a API klíče**
* Projekty, které i díky správně implementované consentové politice přicházejí díky blokovačům reklam o data (paradoxy typu uživatel dá souhlas ale používá adblock či striktní privátní nastavení prohlížeče).

Smyslem Server-side měření však **není obcházení legislativních opatření jednotlivých států vztahující se na elektronickou komunikaci či marketing** nebo obcházení blokovačů reklam. Naopak při použití Server side měření **je potřeba být jako společnost daleko transparentnější.** Uvádět naprosto přesně, co se s daty děje. Neboť z pohledu běžného uživatele (i kontrolního subjektu) data odcházejí na místo, které není vůbec čitelné a nelze tak jednoduše prověřit, co se s daty děje bez jasné deklarace.

**Pro zpracování dat (převážně těch osobních) přes Server side měření potřebujete naprosto stejný právní základ jako pro měření z Client side (běžné měření z prohlížeče).** Hlavní motivace pro Server side měření tedy rozhodně nesmí být obejít výše uvedené. Na takovém projektu se bohužel nemůžeme jako [Digitální architekti](/) podílet.

## **Náklady na měření server-side**

Další stránkou, kterou je potřeba zvážit, jsou náklady. **Aktuálně jsme si na českém trhu zvykli, že sběr dat z vašich webů a aplikací je “zdarma”.** U Server side měření to neplat. Od první chvíle, kdy začnete tuto technologii využívat, **je potřeba počítat s náklady na infrastrukturu a její údržbu.** Ty mohou **začínat na jednotkách stovek korun měsíčně pro menší projekty**. Běžně lze očekávat **náklady v řádech nižších tisíců korun pro projekty** s 10 miliony hity měsíčně.

Tyto náklady jsou však k výše uvedeným výhodám marginální, často jsou v řádech jedné hodiny práce seniorního analytika, kterých se při server side měření proinvestují desítky. Pokud jsou výše uvedené částky pro váš projekt problémem, pravděpodobně pro vás server side měření zatím není vhodnou technologií a je nutné se zaměřit na růst marketingové a především analytické vyspělosti.

Marketing meter

změřte si vyspělost vaší firmy

[Změřit firmu](/marketing-meter-1/)

![](/assets/img/marketingmeter-ilu.svg)

## **Nejčastější úkony, které pro klienty přes server side měření řešíme**

### **Konsolidace datových streamů**

V ideálním případě odchází z prohlížeče veškerá data na jedno místo (a pouze 1x) a zde se následně rozesílají do jednotlivých marketingových vendorů (pozn. v prosinci 2021 zatím ne všichni hlavní vendoři podporují měření pomocí server side měření, ale je očekáváno, že budou postupně přibývat), **často se využívá unifikovaný datový model vycházející z**[**Google Analytics** **4**](/ga4-implementace/) jako moderního standardu pro sběr dat z webů a aplikací.

### **Měření v tzv. First party contextu**

Měření probíhá na vámi hostovanou subdoménu (např. server.domena.cz), která je stejná jako primární doména projektu (domena.cz). To umožňuje mimo jiné vytvářet zabezpečené 1st party cookies a pomáhá v zajištění maximálního možného počtu změřených interakcí.

### **Čištění dat**

Možnost v reálném čase čistit data již na sběru, což šetří prostředky, čas a duševní energii analytiků, nutnou pro čištění dat zpětně.

### **Serverové měření konverzí**

Pro hlavní reklamní platformy již měříme konverze pomocí API (např. Facebook Conversion API, Google Ads Conversion tracking apod.)

### **Geolokace uživatelů**

Server side měření může být jednou z cest, jak určovat přibližné polohy uživatelů, pokud je to pro váš projekt relevantní a máte k tomu příslušný právní základ.

### **Obohacení dat v reálném čase**

Doplnění údajů o zákazníkovi před uložením do databáze, návrat marže zpátky do prohlížeče, nápočet aktuální hodnoty daného zákazníka apod. to jsou témata, o kterých se s našimi zákazníky často bavíme.

## **Ozvěte se nám**

**Přemýšlíte ve vašem projektu o server side měření?** Potřebujete více informací či úvodní konzultaci? Neváhejte se ozvat a získejte technologický náskok před konkurencí ještě dnes.

[**Napište nám a rádi vám s implementací pomůžeme**](/kontakt/)