# URL: https://www.khoder.cz/consent-mode-v2

1. [Domů](/)
2. Consent Mode v2


Průvodce · Consent Mode v2

# Consent Mode v2: most mezi souhlasem a měřením.

Cookie lišta souhlas sbírá — **Consent Mode v2** ho předává Googlu a rozhoduje, jak se měří. Vysvětlím signály, rozdíl basic vs advanced a kde se to nejčastěji pokazí.

[Konzultace k vašemu měření](#kontakt)[Rychlá odpověď](#rychla-odpoved)

Rychlá odpověď

Aktualizováno 16. 5. 2026 · Tomáš Khoder, e-commerce konzultant

## Co je Consent Mode v2?

**Consent Mode v2** je mechanismus Googlu, kterým web předává do GA4 a Google Ads informaci o souhlasu návštěvníka s cookies. Verze 2 přidala signály **ad\_user\_data** a **ad\_personalization** a je od roku 2024 vyžadována pro remarketing a měření konverzí v EU.

Klíčové rozhodnutí je **basic vs advanced** režim: v advanced se chybějící konverze modelují, takže datová ztráta je výrazně menší. Consent Mode není cookie lišta — je to vrstva mezi [lištou](/cookie-lista-consent-mode) a měřením, řízená v [GTM](/nastaveni-google-tag-manageru).

Consent Mode v2 · co to je

## Mechanismus, ne cookie lišta

**Consent Mode v2** (režim souhlasu, verze 2) je způsob, jakým web komunikuje Google nástrojům — Google Analytics 4 a Google Ads — jestli návštěvník udělil souhlas se zpracováním analytických a reklamních cookies. Není to cookie lišta; je to vrstva mezi lištou a měřením.

Google rozlišuje čtyři consent signály. Verze 2 přidala k původním dvěma analytickým/reklamním signálům dva nové, klíčové pro reklamu:

Consent Mode v2 — signály

analytics\_storage · ad\_storage · **ad\_user\_data** · **ad\_personalization**

Bez korektně předaných signálů ad\_user\_data a ad\_personalization Google od roku 2024 omezuje remarketing a měření konverzí pro evropský provoz — proto „v2".

Web tyto signály nastaví na „granted" nebo „denied" podle toho, co návštěvník zvolí v cookie liště, a Google podle nich rozhodne, jak měřit.

Basic vs Advanced

## Proč režim rozhoduje o datech

Existují dva režimy a rozdíl mezi nimi je pro e-shop zásadní:

**Základní (basic) režim.** Při chybějícím souhlasu se Google tagy vůbec nenačtou. Data o těchto návštěvnících a jejich konverzích úplně chybí — žádné modelování. Jednodušší na nasazení, ale velká datová ztráta.

**Pokročilý (advanced) režim.** Tagy se načtou vždy, ale při odmítnutí souhlasu posílají jen anonymní signály bez cookies. Z nich Google **statisticky modeluje** chybějící konverze. Datová ztráta je výrazně menší.

Doporučení pro e-shop

advanced režim + pokročilé modelování konverzí

U e-shopu s placenou reklamou je rozdíl mezi basic a advanced často desítky procent naměřených konverzí — proto v drtivé většině případů volím advanced.

Volba režimu se nastavuje v [Google Tag Manageru](/nastaveni-google-tag-manageru) a musí sedět s tím, jak cookie lišta předává souhlas.

V praxi

## Špatný Consent Mode = děravá data v reportu.

Když se konverze měří bez správného Consent Mode, algoritmy Google Ads se učí na neúplných datech a report ukazuje méně, než e-shop reálně vydělal. Správné nastavení je proto zároveň compliance i kvalita dat — řeším je společně s měřením konverzí.

* Advanced režim — modelované konverze místo chybějících
* Signály v2 ověřené v Tag Assistantu
* Data, na kterých se dá stavět rozhodování

[Nastavení cookie lišty a Consent Modearrow\_outward](/cookie-lista-consent-mode)

locktagassistant.google.com/consent

![Špatný Consent Mode = děravá data v reportu.](assets/analytika.png)

Signályověřené

fact\_checkCompliance + data

Časté chyby

## Tři chyby v Consent Mode v2

Tři chyby, na které u Consent Mode narážím nejčastěji:

**Lišta je na webu, ale Consent Mode není napojený.** Lišta sbírá souhlas, jenže do Google nástrojů se nic nepředává. Navenek to vypadá jako compliance, fakticky se měří špatně. Ověřte signály v Tag Assistantu.

**Basic režim tam, kde měl být advanced.** E-shop zbytečně přichází o desítky procent konverzí, protože se při odmítnutí nic nemodeluje. Přejděte na advanced, pokud to lišta a CMP umožní.

**Chybí signály v2 (ad\_user\_data, ad\_personalization).** Starší Consent Mode v1 už pro EU remarketing nestačí. Doplňte v2 signály v GTM a ověřte je.

![Tomáš Khoder, e-commerce konzultant z Litoměřic](assets/khoder-transparent.png)

Praxe10+ letv e-commerce

5,0

★★★★★

16 recenzí  
na Googlu

O mně · Kdo to nastavuje

## Tomáš Khoder.

Přes **10 let** se věnuji e-shopům a měření. Consent Mode řeším tak, aby seděl s GDPR a zároveň nezničil data — ne jako zaškrtnutí v liště.

* **10+ let** praxe v e-commerce
* Sídlo v **Litoměřicích** · klienti po celé ČR i SK
* **5,0 / 5,0** ze 16 hodnocení na Googlu

[Nezávazně poptat konzultaciarrow\_outward](#kontakt)
[Více o mně na khoder.cz](/)

Reference · Co říkají klienti

## Nejlepší argumenty vám dají moji klienti.

Hodnocení chodí přímo na Google — bez editace, bez filtrů. Čtěte si to samé, co vidí každý, kdo si mě vygoogluje před první schůzkou.

5,0

★★★★★

16 recenzíprůměr 5,0 přímo na Googlu

[Zobrazit všechny arrow\_outward](https://www.google.com/search?q=tom%C3%A1%C5%A1+khoder)

★★★★★

S panem Khoderem spolupracujeme už delší dobu a musím říct, že jsme naprosto spokojení. Pomáhá nám s nastavením měření konverzí, analytiky a přehledného reportingu pro naše klienty – všechno funguje perfektně a jeho reporting je opravdu na špičkové úrovni. Oceňuji hlavně jeho rychlost, preciznost a skvělou komunikaci. Na všem se dá domluvit a naše požadavky řeší doslova obratem. Díky tomu máme jistotu, že měření konverzí běží na 100 % správně, což je pro naši agenturu klíčové při správě kampaní. Děkujeme za spolupráci a určitě tě můžeme s klidným svědomím doporučit dál.

Číst celou recenzi →

T

Tomáš Veits

CEOPortine.czListopad 2025

★★★★★

Spolupráce s panem Khoderem je pro náš tým velkým přínosem. Jeho přístup je mimořádně profesionální a pragmatický – vždy se opírá o reálná data, vlastní zkušenosti a jasné argumenty. Od prvního převzetí našich marketingových kampaní se zaměřil na jejich efektivitu a návratnost, a výsledky na sebe nenechaly dlouho čekat. Výrazně se zlepšila výkonnost i přehlednost našich PPC aktivit. Pan Khoder nám navíc připravil velmi podrobnou analýzu e-shopu s návrhem desítek konkrétních vylepšení. Vše systematicky rozčlenil podle priorit a náročnosti implementace, což nám výrazně usnadnilo rozhodování o dalších krocích v rozvoji webu. Velmi si vážíme jeho schopnosti komunikovat složité věci srozumitelně, poskytovat kvalitní reporty a být skutečným partnerem, který přemýšlí v širším kontextu byznysu, ne jen v číslech z kampaní. Doporučujeme spolupráci s panem Khoderem každému, kdo to myslí s online marketingem a webem vážně.

Číst celou recenzi →

![RehaVitalCare s.r.o.](assets/logo-rehavita.png)

Martin Skala

ManažerRehaVitalCare s.r.o.Srpen 2025

★★★★★

Na spolupráci s panem Khoderem oceňuji především perfektně připravené podklady, podle kterých se i neprofesionál okamžitě orientuje a může dosáhnout vytyčeného cíle. Profesionálem je tady on. Určitě s ním budeme spolupracovat i v budoucnu a všem ostatním zájemcům můžeme jeho služby jedině doporučit. Pana Khodera jsme oslovili na základě doporučení, abychom zefektivnili měření a analytiku našich webů a kampaní. Jeho odborný přístup a detailní analýzy nás úspěšně dovedly k vytčenému cíli. Vedle stoprocentní profesionality oceňujeme i bezproblémovou komunikaci a bezchybné podklady, které nám umožnily implementovat potřebné změny hned napoprvé. Spolupráci s ním s klidným svědomím doporučujeme.

Číst celou recenzi →

P

Pavel Kuchár

DesignérJežek software s.r.o.Květen 2026

★★★★★

S panem Khoderem máme výbornou zkušenost – je velmi vstřícný, nemá problém za námi kdykoliv osobně přijet, což si v dnešní době opravdu ceníme. Skvělé jsou především jeho perfektně zpracované reporty, které jsou přehledné, praktické a hned se s nimi dá pracovat. Má široký přehled v e-commerce, vždy přináší nové pohledy a je na něm vidět opravdová snaha posouvat věci směrem k maximální efektivitě. Spolupráce s ním je přínosná a rozhodně ho můžeme doporučit.

Číst celou recenzi →

J

Jan Kalista

JednatelHealth Brands s.r.o.Září 2025

★★★★★

S Tomášem byla skvělá komunikace, vše trpělivě vysvětlil, nastavil a otestoval. Děkuju za přátelské jednání a myslím, že v budoucnu jeho služeb dál využiji.

Číst celou recenzi →

J

Jan Barančík

OwnerDronista.czBřezen 2026

★★★★★

Spolupráce s panem Tomášem Khoderem je vždy naprosto bezproblémová. Velice oceňujeme jeho rychlost, s jakou řeší vzniklé problémy na našem e-shopu, dále pak smysl pro detail a skutečné nasazení – vždy dokáže nabídnout funkční řešení. Doporučujeme pana Khodera jako spolehlivého partnera pro tvorbu i správu e-shopu.

Číst celou recenzi →

I

Ilona Kocmanová

JednatelkaZlatnictví ZlatíčkoListopad 2025

★★★★★

Děkuji Tomášovi za skvělý přístup a vhled při tvorbě webu, určitě se budu těšit na další spolupráci do budoucna. Výsledkem jsme nadšeni všichni ve firmě. Vřele doporučuji!

Číst celou recenzi →

R

Radka Balšánková

SpolečníkCITUS s.r.o.Duben 2025

★★★★★

Velice si vážím osobního přístupu a empatie ze strany pana Khodera. Kampaně jsou vždy navrženy s citem a dle potřeb zákazníka a fungují velmi dobře.

Číst celou recenzi →

R

Radek Ploc

JednatelStudio PLOC s.r.o.Listopad 2025

★★★★★

Díky perfektní spolupráci je několik do detailu vyladěných webů za námi a minimálně 2 před námi. V každém odvětví je těžké najít toho pravého – spolehlivého profesionála na svém místě, který dodá perfektní služby, kde spolupráce nedrhne, a tohle všechno je znát i na výsledku. Tak teď máte štěstí, že tuhle recenzi čtete, už jste totiž našli.

Číst celou recenzi →

A

Alžběta Mrázová

JednatelkaMácha Hotels s.r.o.Únor 2024

★★★★★

Chtěl bych poděkovat panu Khoderovi za pomoc s nastavením Google účtů a také za služby, které jsem požadoval se svou propagací na Google. Vyzkoušel jsem více možností a pokaždé to dopadlo špatně. U pana Khodera musím říct, že na čem jsme se domluvili, tak to tak bylo. Za mě skvělá práce a milý přístup. Ještě jednou Vám moc děkuji a jsem si jistý, že ve spolupráci s Vámi budu nadále pokračovat.

Číst celou recenzi →

V

Václav Zrno

JednatelZÁMEČNICTVÍ & AUTOKLÍČE Chomutov s.r.o.Listopad 2025



close

★★★★★



FAQ · Často kladené otázky

## Časté otázky ke Consent Mode v2

Co je Consent Mode v2?expand\_more

Mechanismus Googlu, kterým web předává do [GA4](/nastaveni-google-analytics) a Google Ads informaci o souhlasu s cookies. Verze 2 přidala signály **ad\_user\_data** a **ad\_personalization** a je od 2024 vyžadována pro remarketing a konverze v EU.


Jaký je rozdíl mezi základním a pokročilým režimem?expand\_more

**Basic**: bez souhlasu se tagy nenačtou, data úplně chybí. **Advanced**: tagy se načtou, bez cookies posílají anonymní signály a Google **modeluje chybějící konverze** — výrazně menší ztráta. Pro e-shop doporučuji advanced.


Je Consent Mode v2 povinný?expand\_more

Pro EU weby s **Google Ads remarketingem** nebo měřením konverzí ano, bez něj Google funkce omezuje. Zároveň je to cesta k měření v souladu s [GDPR](/gdpr) a [cookie lištou](/cookie-lista-consent-mode).


Přijdu při Consent Mode v2 o data?expand\_more

Část dat chybí vždy, ale pokročilý režim chybějící konverze **statisticky modeluje** — reálná ztráta je výrazně menší než při tvrdém blokování. Závisí na míře souhlasů a objemu dat.


Jak Consent Mode souvisí s cookie lištou a GTM?expand\_more

Lišta souhlas **sbírá**, Consent Mode ho **předává** Googlu, [GTM](/nastaveni-google-tag-manageru) to celé řídí. Funguje jen když jsou všechny tři propojené.


Kdo by měl Consent Mode v2 nastavit?expand\_more

Každý e-shop s GA4 nebo Google Ads cílící na EU. Není to zaškrtnutí v liště — vyžaduje konfiguraci v GTM a ověření, že tagy reálně reagují na souhlas. Viz [měření konverzí](/mereni-konverzi).

Související

## Pokračujte dál

Navazující průvodci a služby. Kompletní přehled najdete v [rozcestníku služeb a průvodců](/rozcestnik).

cookie

#### [Cookie lišta a Consent Mode](/cookie-lista-consent-mode)

GDPR cookie lišta napojená na Consent Mode v2 — měření i compliance.

monitoring

#### [Webová analytika pro e-shopy](/webova-analytika-pro-eshopy)

Hub: kompletní měření přes GTM — GA4, Consent Mode v2, e-commerce eventy.

sell

#### [Nastavení Google Tag Manageru](/nastaveni-google-tag-manageru)

GTM kontejner, dataLayer, triggery a tagy — čistě a bez vývojáře.

Začneme

## Nevíte, jestli máte Consent Mode správně?

Ověřím signály a režim a ukážu, kolik dat zbytečně ztrácíte. Úvodní konzultace je zdarma a nezávazná.

[Domluvit konzultaciarrow\_outward](#kontakt)
[Napsat e-mail](mailto:tomas@khoder.cz)

Případové studie [Jak to dopadlo u klientů](/pripadove-studie)