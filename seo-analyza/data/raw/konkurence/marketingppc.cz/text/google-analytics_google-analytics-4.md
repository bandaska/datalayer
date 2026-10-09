# URL: https://www.marketingppc.cz/google-analytics/google-analytics-4/

[Domů](https://www.marketingppc.cz/) » [Webová analytika](https://www.marketingppc.cz/category/google-analytics/) » Google Analytics 4: kompletní průvodce nastavením a využitím funkcí (2026)

# Google Analytics 4: kompletní průvodce nastavením a využitím funkcí (2026)

Autor: [Filip Hvízdal](https://www.marketingppc.cz/author/filip/)

![GTM, GA4 a Consent mode](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

## GTM, GA4 a Consent mode

Pomůžeme vám měřit to, co je důležité – a spolehlivě.

[Zjistit více](https://www.marketingppc.cz/sluzby/ga4/)

![nastavení google analytics ga4](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Aktualizováno: 19.01.2026

Google Analytics 4 je analytický nástroj, který vám ukáže, jak se lidé chovají na vašem webu – odkud přichází, co dělají, jestli nakupují nebo vyplňují formuláře.

Článek je použitelný jak pro úplné začátečníky, kteří zakládají GA4 poprvé, tak pro pokročilé uživatele, kteří chtějí zkontrolovat, jestli mají vše správně nastavené.

**V článku projdeme:**

* [Jak založit Google Analytics 4 od nuly](#Jak_zalozit_Google_Analytics_4_od_nuly)
* [Orientace v rozhraní GA4](#Orientace_v_rozhrani_GA4)
* [Nastavení Google Analytics 4](#Nastaveni_Google_Analytics_4)
* [Nejdůležitější statistiky v GA4](#Nejdulezitejsi_statistiky_v_GA4)
* [Publika v GA4 a Google signály](#Publika_v_GA4_a_Google_signaly)
* [Atribuce v GA4](#Atribuce_v_GA4)
* [Proč GA4 měří nepřesně](#Proc_GA4_meri_nepresne)
* [Nejčastější problémy s GA4 a jak je vyřešit](#Nejcastejsi_problemy_s_GA4_a_jak_je_vyresit)
* [Co je nového v GA4 (2025-2026)](#Co_je_noveho_v_GA4_2025-2026)
* [Často kladené dotazy k GA4](#Casto_kladene_dotazy_k_GA4)

Vzpomínám si, když jsem se před lety poprvé dostal ke Google Analytics stylem *„používají to všichni, tak to asi bude dobrý“*. Registrace a přidání kódu na web nebylo nic složitého, začínalo se mi to líbit.

Ještě větší radost přišla v okamžiku, kdy se v přehledech objevily první statistiky. Celých 24 návštěv? Vypadá to, že web má první fanoušky! Pravda, 22 návštěv bylo ode mě, minimálně jednou na web zavítal nějaký bot a jednou moje máma.

Naštěstí jsem toho tehdy věděl málo na to, aby mi zbytečné vědomosti mohly pokazit náladu.

Potom přišlo na řadu prozkoumání jednotlivých přehledů. *„**Toto nevím, co znamená, tady je potřeba ještě něco nastavit, tady mi to ukazuje nevím proč samý nuly“*. Další půlrok jsem se do Google Analytics ani nepodíval.

Bylo to sice jako koupit si Porsche a jezdit jen na jedničku se zataženou ruční brzdou, ale byl jsem spokojen. Dneska s Google Analytics pracuji denně, protože úspěšný online **marketing se bez kvalitních statistik dělat nedá**.

[![nastavení google analytics ga4](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/sluzby/ga4/)

###### Správné nastavení GA4 + GTM dá zabrat. Uděláme to za Vás.

[S čím umíme pomoci](https://www.marketingppc.cz/sluzby/ga4/)

### Nepřeceňujte statistiky v Google Analytics

Než se pustíme na praktické věci, tak jedno hodně důležité varování. Marketing se postupně dostal ze stavu, kdy nedokázal měřit skoro nic (TV reklama, billboardy) přes měření konkrétních kampaní (direct mail, katalogy) do stavu, kdy zdánlivě umíme změřit téměř vše a dohledat, který kanál a jakou měrou se na konverzi podílel (atribuce).

Což zdaleka neumíme, protože **v GA4 některé statistiky chybí (cookie lišta atp.), většina metrik je zkreslená (viz konec článku) a řadu statistik GA4 nezměří vůbec**.

### Nepodceňujte sílu značky

Úplně nejdůležitější majetek každé firmy je [brand](https://www.marketingppc.cz/ppc/brand/). Bohužel **většinu aktivit, které vedou k [vybudování silné značky](https://www.marketingppc.cz/ppc/branding/), v GA4 nezměříme**.

Jak v GA4 zjistíte, jestli konkrétní zákazník nebo klient:

* Se o vás dozvěděl na základě doporučení od spokojeného zákazníka?
* Nakoupil poté, co půl roku sleduje vaše YouTube videa nebo obsah na sociálních sítích?
* Sledoval pravidelně vaše živá vysílání nebo poslouchal váš podcast?
* Potkal se s vámi na nějaké konferenci?
* Četl si dva roky vaše blogové články, než měl potřebu u vás něco poptat?
* Kupuje u vás pravidelně třetím rokem jen proto, že přes vyšší ceny máte perfektní pro-zákaznický přístup?

Dejme si velký pozor, abychom **neomezovali své marketingové aktivity pouze na takové, které umíme změřit**. Nezměřitelné aktivity se často podílejí na úspěchu konkrétní firmy daleko více.

*Související*

[![nejzajímavější ga4 reporty článek hero image](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/google-analytics/ga4-prehledy/)

###### 6 Google Analytics přehledů, které musíte znát

[přečíst článek…](https://www.marketingppc.cz/google-analytics/ga4-prehledy/)

## Jak založit Google Analytics 4 od nuly

Do Google Analytics se přihlásíte na adrese [https://analytics.google.com/](https://analytics.google.com/analytics/web/). Pokud zatím nepoužíváte žádnou službu společnosti Google (Google Ads, Gmail apod.), budete vyzváni k vytvoření nového Google účtu. Jinak se můžete do GA4 zaregistrovat se stávajícím Google účtem.

Jestli používáte [Google Ads](https://www.marketingppc.cz/ppc/google-ads/), [Google Search Console](https://www.marketingppc.cz/marketing/google-search-console-vyuziti/) nebo AdSense, přihlaste se do Google Analytics pod stejným emailem, usnadní vám to propojení služeb.

Při zakládání nového GA4 účtu vytváříte i novou *Službu* (pro většinu uživatelů platí, že jedna služba = jeden web), ve které zvolíte web, pro který GA4 nastavujete. U nastavování nezapomeňte správně zvolit časové pásmo a měnu, abyste neměli zkreslené statistiky.

Pro další nastavení můžete přejít na [kapitolu o datovém stramu](#stream).

### Přidání kódu Google Analytics 4 na web

Aby začal web do GA4 odesílat data, je potřeba mít na webu [globální značku gtag](https://www.marketingppc.cz/ppc/globalni-znacka-webu-gtag/). Pokud máte nějaký hotový systém typu Shoptet, v administraci najdete kolonku na ID z GA4 a nemusíte se s kódy zabývat.

U bezplatných řešení jako WordPress, Prestashop atp. většinou můžete kód vložit pomocí nějakého modulu.

U ostatních webů můžete GA4 měřicí kód vložit buď přímo do kódu webu, nebo v lepším případě pomocí Google Tag Manageru.

*Mohlo by vás zajímat…*

[![nastavení google tag manager](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/google-analytics/google-tag-manager-nastaveni/)

##### Google Tag Manager – základní nastavení

[Přejít na článek](https://www.marketingppc.cz/google-analytics/google-tag-manager-nastaveni/)

### Nasazení GA4 pomocí Google Tag Manageru

Pokud používáte [Google Tag Manager](https://www.marketingppc.cz/ppc/google-tag-manager/) (GTM nebo Správce značek Google), je nejjednodušší přidat na web GA4 pomocí něj. Pokud jej nepoužíváte a nemáte z kódů vyloženě hrůzu, **doporučuji se [seznámit se základy GTM](https://www.marketingppc.cz/google-analytics/google-tag-manager-nastaveni/) a přejít na něj**, usnadníte si tím život do budoucna.

Přidání GA4 přes GTM je skutečně jednoduché. Jako typ značky vyberete Google Analytics – Značka Google, přidáte ID značky.

ID značky GA4 najdete v datovém streamu v podrobnostech webového streamu:

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Přidáte ID do GTM, zvolíte spouštění na všech webových stránkách a máte hotovo.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

### Přidání kódu Google Analytics 4 na web bez GTM

Globální značku pro GA4 najdete v datovém streamu v podrobnostech o webovém streamu:

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Zkopírujete ji, vložíte na web a hotovo.

Rád bych zdůraznil, že **vložení Značky Google nevyřeší všechny situace**. Pokud potřebujete měřit vlastní konverze nebo pro e-shop [měření transakcí](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce?client_type=gtag), zpravidla bude potřeba toto ještě dořešit samostatně.

![Online marketing služby](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

### Potřebujete pomoci s online marketingem?

Pomůžeme vám s PPC kampaněmi, analytikou a propagací e-shopů i služeb. Transparentně, bez zbytečných slov, jen výsledky.

* Správa Google Ads
* GA4 + GTM implementace
* Meta reklamy
* Marketing pro e-shopy

[Nezávazná poptávka](/kontakt/)

[Zobrazit všechny služby →](/sluzby/)

## Orientace v rozhraní GA4

Hlavní menu po levé straně je celkem jednoduché:

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

* **Domovská stránka** obsahuje několik vybraných karet se statistikami, které slouží spíš jen pro povrchní orientaci.
* Volba **Přehledy** bude nejnavštěvovanější, protože v ní najdete vše potřebné pro analýzu návštěvnosti webu.
* Pokud vám základní přehledy nebudou vyhovovat, můžete si vytvořit libovolné vlastní přehledy pod volbou **Prozkoumat**.
* Pod volbou **Reklama** najdete nejen údaje o inzerci, ale i atribuční modely a konverzní trasy.
* Vesměs všechna nastavení najdete na obrazovce pod položkou **Administrátor** vlevo dole.

### Administrátor v Google Analytics 4

Struktura GA4 obsahuje *Účet* a *Službu*.

Účet vám zpravidla stačí jeden, i v případě, že máte více webů je to praktičtější. Služeb můžete mít více, zpravidla platí jedna služba = jeden web.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

V horním obdélníku *Účet* najdete předvolby pro celý účet, které většinou stačí nastavit jen při zakládání GA4 a dále neřešit. Ve spodních rámečcích sloupečku je spousta užitečných nastavení, na které se podíváme dále v článku.

Nejdůležitější nastavení jsou ukryta pod volbou *Datové streamy*.

## Nastavení Google Analytics 4

### Datový stream v Google Analytics 4

Datový stream je místo, kde definujete, který web (nebo aplikace, více webů) **chcete v dané GA4 službě měřit**.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Zpravidla definujete jen jeden datový stream (jeden web). Pokud ale chcete nastavit měření napříč více doménami se stejným GA4 ID nebo máte i aplikaci, vložíte na tomto místě streamů více. V přehledech můžete pomocí filtrů zobrazit data jen pro konkrétní streamy.

Po založení streamu se vám zobrazí i ID měření GA4, potažmo přes pokyny ke značce se dostane na celý GA4 kód.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

### Vylepšené měření v Google Analytics 4

V datovém streamu také nastavíte některé podstatné věci, zejména *Vylepšené měření*.

GA4 umí **automaticky měřit řadu událostí**, stačí v datovém streamu nechat zapnuto vylepšené měření.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

V přehledech se vám tak vedle zobrazení stránek **objeví i další události**:

Událost **posunutí** (scroll) se aktivuje v okamžiku, kdy uživatel zobrazil 90 % stránky. Pokud byste chtěli měřit třeba 50 % načtení stránky, je potřeba to nastavit ručně (nejsnáze v [GTM](https://www.marketingppc.cz/ppc/google-tag-manager/)).

**Odchozí kliknutí** měří kliknutí na odkazy, které vedou na jinou doménu (lze použít i pro [měření kliknutí na telefonní číslo](https://www.youtube.com/watch?v=A-5kPW3zTFU) nebo e-mail).

**Vyhledávání na webu** se aktivuje, když uživatel na webu něco vyhledává. Nebude fungovat ve 100 % případů, je potřeba mít v hledané URL jeden z 5 parametrů (q, s, search, query, keyword). Pokud web používá jiný parametr, můžete jej v nastavení přidat.

**Interakce s videem** sleduje spuštění videa a různá procenta shlédnutí. Opět nemusí fungovat vždy, např. u videích vložených přes iframe.

**Stažení souboru** měří počty stažení souboru běžného typu.

**Interakce s formulářem** je jediná událost, kterou v 90 % případů doporučuji vypnout. Někdy odešle do GA4 událost i v případě, když k žádné interakci nedojde. Jindy interakci s formulářem nezměří, i když k ní dojde. Měření formulářů [raději nastavte přes GTM](https://www.marketingppc.cz/google-analytics/gtm-udalosti/#Mereni_odeslani_formulare_pomoci_GTM).

### Důležitá nastavení v Google Analytics 4

V podrobnostech o webovém streamu najdete další nastavení pod volbou *Konfigurace nastavení značky*, kde doporučuji udělat několik změn.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Pokud byste chtěli jeden stream používat na více doménách, je potřeba je specifikovat pod volbou *Konfigurace vašich domén* (1).

Jestli příliš neměníte IP adresu (např. PC v práci), je vhodné ji vložit do **vyloučení interní návštěvnosti** (2), abyste si nezkreslovali statistiky vlastními návštěvami webu (poté je potřeba jít do nastavení *Filtry dat* a filtr pro interní návštěvnost aktivovat).

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Pro e-shopy je zcela klíčové **vyloučení domén platebních bran** (3), aby se vám v přehledech nezobrazovaly jako zdroje návštěv/nákupů.

Můžete i [upravit časový limit](https://youtu.be/AaxovyQ5mB0?t=198) (4), kde můžete prodloužit dobu trvání relace (pro e-shopy můžete ponechat), pro weby s rozsáhlým obsahem jako je třeba náš blog o marketingu můžete prodloužit klidně na maximum (7h55m).

Dále pod stejným bodem můžete prodloužit [časovač pro relace se zapojením](https://www.youtube.com/watch?v=vCuWn2RnUPo). Přednastavených 10 vteřin je zpravidla příliš málo, doporučuji zvýšit na 30-60 vteřin.

Poslední věc, kterou můžete změnit, je **zvýšení doby uchování dat** ze 2 měsíců na 14. Toto můžete udělat pod volbou *Uchovávání dat*.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

### Propojení Google Analytics s Google Ads

V Google Ads nemáte bez kvalitních statistik šanci. Řadu zajímavých statistik najdete přímo v Google Ads, propojení obou systémů vás však posune na další úroveň.

Pokud máte v Google Analytics nastaveno měření elektronického obchodu nebo cíle (typicky vyplnění [formuláře s poptávkou](https://www.marketingppc.cz/kontakt/)), můžete je po propojení **do Google Ads importovat jako konverze** a nemusíte dávat na web další kód pro měření konverzí.

V GA4 tak uvidíte všechny své kampaně s údaji, jako je procento nových návštěv, doba pobytu návštěvníků na webu nebo míra okamžitého opuštění. Zároveň můžete snadno porovnat výkonnost Google Ads kampaní s ostatními zdroji návštěv.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Propojení GA4 s Google Ads je snadné:

* Ujistěte se, že máte oba účty pod stejným emailem s oprávněním k úpravám.
* Přihlaste se do svého účtu Google Analytics.
* Zvolte v levém menu dole možnost *Administrátor*.
* Vyberte si *Účet* a *Službu*, kterou chcete propojit (pokud máte jen jeden web, tak netřeba nic vybírat).
* Ve sloupečku *Propojení služeb* klikněte na možnost *Propojení Google Ads*.
* Klikněte na modré tlačítko *PROPOJIT.*
* Zvolte Google Ads účet, který chcete propojit a klikněte na *Další.*
* U volby *Konfigurace dat* můžete nechat vše zapnuto, jen co se týče personalizované inzerce pozor na to, ať máte všechny potřebné souhlasy (GDPR, cookie lišta).

### Propojení GA4 s Google Search Console

Byť se můžete na organické vyhledávací dotazy dívat v Google Search Console, je praktičtější obě služby propojit a dotazy sledovat v Google Analytics se všemi podrobnými statistikami.

Google Search Console s GA4 propojíte podobně jako Google Ads, hledejte ve stejném menu. E-mail, pod kterým se do GA4 přihlašujete, musí mít administrátorská práva i v Google Search Console. Potom můžete obě služby snadno propojit a přehledy Search Console se v GA4 začnou fungovat.

### Důsledné používání UTM parametrů

UTM parametry vám pomohou sledovat statistiky většiny kampaní. GA4 často netuší, odkud uživatelé na web přišli. Někdy sice umí přiřadit zdroj, ale nerozeznáte placené a neplacené návštěvy. Proto je potřeba ve všech kampaních mimo Google Ads [používat UTM parametry](https://www.marketingppc.cz/ppc/utm-parametry/).

UTM parametry předají do GA4 **informaci o zdroji návštěv**. Statistiky o kampani najdeme pomocí UTM parametrů v sekci *Akvizice > Akvizice návštěvnosti*, v prvním sloupečku změníme na *Relace – zdroj/médium*.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

V Google Ads UTM parametry nepoužívejte. Pokud propojíte GA4 s Google Ads, budou se všechny potřebné informace předávat automaticky. V Sklik kampaních můžete parametry zapnout v menu *Nástroje – Automatické tagování*.

Pro ostatní kampaně si můžete UTM parametry vytvořit pomocí [nástroje na tvorbu UTM parametrů](https://www.marketingppc.cz/utm-builder/).

[![nastavení google analytics ga4](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/sluzby/ga4/)

###### Správné nastavení GA4 + GTM dá zabrat. Uděláme to za Vás.

[S čím umíme pomoci](https://www.marketingppc.cz/sluzby/ga4/)

## Nejdůležitější statistiky v GA4

### Pokročilé reporty pod volbou Průzkumy

Pokud komukoliv standardně nabízené přehledy v GA4 nestačí, může si pod volbou *Průzkumy* sestavit vlastní přehled.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Pokročilejším uživatelům bych ale doporučil [spíš Looker Studio](https://www.marketingppc.cz/ppc/looker-studio/), které je na různé tabulky se statistikami nebo vizualizace daleko lepší. Je zdarma a od Google, takže do něj snadno potřebné statistiky z Google Ads nebo GA4 naimportujete.

### Co znamenají nejdůležitější statistiky v GA4

* **Návštěvy** či relace – zahrnují nové i vracející se uživatele. Pokud byl jeden uživatel na webu 5x, započte se mu 5 návštěv.
* **Uživatelé** – počet lidí, kteří web navštívili. I když byl jeden uživatel na webu 5x, započte se do statistiky *Uživatelé* jen jednou.
* **Relace se zapojením** – je nová statistika v GA4. V základním nastavení se započtou návštěvy, při kterých si uživatel zobrazil alespoň dvě stránky nebo provedl konverzi nebo byl na webu alespoň 10 vteřin (časový limit lze změnit).
* **Zobrazení** – celkový počet zobrazení stránek ze všech návštěv. Včetně těch, kdy si jeden návštěvník prohlédl stejnou stránku víckrát. Někteří návštěvníci web hned opustí, jiní si prohlédnou třeba pět stránek.
* **Průměrná doba zapojení**– jak dlouho průměrně trvá jedna návštěva na webu. GA4 zjistit, kdy uživatel web opustil, takže statistika je celkem přesná.
* **Počet událostí** – relativně nezajímavé metrika, protože mezi událostmi je započteno vše od zahájení relace, zobrazení stránek až po zhlédnutí videa, nicméně můžete si vyfiltrovat události jednu po druhé.
* **Míra zapojení** – uvádí se jako procento ze všech návštěv (relace) se zapojením. Tedy něco jako [míra okamžitého opuštění (bounce rate)](https://www.marketingppc.cz/ppc/bounce-rate/), jen tu platí, že čím vyšší procento, tím lépe.

### Interpretace statistik

Co vám tyto statistiky řeknou? Samy o sobě celkem nic. Je míra zapojení 45 % dobrá nebo špatná? Znamená průměrná doba zapojení, že je váš web zajímavý, nebo jen návštěvníci na webu nenajdou, co potřebují?

Smysl dává **porovnávat statistiky mezi sebou** – tedy ne jako absolutní hodnoty, ale jako relativní ve vztahu k jinému časovému období nebo jinému zdroji návštěv. Pokud máte míru zapojení z organického vyhledávání 55 % a z Google Ads 25 %, na první pohled je jasné, že s Google Ads je něco špatně.

Nebo pokud jste loni měli míru zapojení 55 %, předělali jste mezitím web a nyní máte 59 %, předělání webu bylo asi úspěšné (to ‚asi‘ tam patří proto, protože důležitější metrikou jsou častěji konverze nebo obraty).

V mnoha případech bude tou **nejdůležitější statistikou počet konverzí**, případně [konverzní poměr](https://www.marketingppc.cz/ppc/konverzni-pomer/). Máte e-shop? Asi vás budou zajímat hlavně obraty. Máte na webu poptávkový formulář? Počet vyplněných poptávek bude nejzajímavější statistika.

## Publika v GA4 a Google signály

Pokud chcete používat remarketingová publika z GA4, musíte nejprve zapnout *Shromažďování dat – Google signály*.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Další výhodou zapnutí signálů je možnost podrobnějších statistik co se týče **demografických údajů**. Můžete zjistit, jak se na vašem webu chovají jednotlivé věkové skupiny, muži vs. ženy či uživatelé z jednotlivých měst.

1. Uvidíte v Analytics přehledech **věk, pohlaví a zájmy návštěvníků webu**. Google tato data u všech návštěvníků nezná, přesto získáte statisticky významný vzorek a docela dobrou představu o lidech, kteří na váš web chodí. Získané údaje můžete použít ke zlepšování obsahu webu nebo při dalších marketingových aktivitách, například [ve Facebook reklamě](https://www.marketingppc.cz/socialni-site/jak-nastavit-facebook-reklamu-jako-profesional/) nebo v [obsahové síti Google Ads](https://www.marketingppc.cz/google-ads/jak-nastavit-google-ads-obsahovou-sit/).
2. **Remarketingová publika** z Google Analytics mají daleko víc možností [než remarketingová publika z Google Ads](https://www.marketingppc.cz/google-ads/google-ads-remarketing/), protože při tvorbě můžete použít GA segmenty. Lze např. vytvořit publikum vracejících se návštěvníků nebo uživatelů, kteří na webu strávili alespoň 5 minut atp.
3. Získáte statistiky o **uživatelích, kteří navštěvují váš web z více zařízení**. Můžete jim dokonce ukazovat remarketing reklamu na více zařízeních. Funkce je logicky omezena jen na uživatele, kteří jsou na zařízeních přihlášeni přes stejný Google účet.

### Remarketingová publika v Google Analytics 4

[Google Ads remarketing](https://www.marketingppc.cz/google-ads/google-ads-remarketing/) můžete spustit pomocí publik přímo v Google Ads a pro většinu menších webů to bude zcela dostačující. Pokud ale máte desítky nebo stovky tisíc návštěv měsíčně, daleko lepší je vytvořit publika v GA4. V případě propojení GA4 s Google Ads je můžete v Google Ads kampaních použít.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Hlavní výhodou je možnost daleko **podrobnější segmentace**. Můžete např. zacílit jen na lidi, kteří byli v poslední době aktivní, spustili konkrétní událost nebo naopak pokusit se přivést zpět uživatele, kteří aktivní nebyli.

## Atribuce v GA4

Trochu pokročilejší kapitola, nicméně je fajn vědět, co je to atribuce a jak nám může pokazit statistiky. Z vlastní praxe asi víte, že zejména u dražších produktů nebo služeb zřídkakdy se dnes rozhodnete něco koupit, kliknete na reklamu a koupíte to.

Zpravidla navštívíte více webů opakovaně a dost možná z různých zdrojů. Nejprve budete hledat obecné informace, možní se dostanete na článek na blogu. Poté porovnáte ceny produktů, kliknete na web přes Google Nákupy. Nakonec na vás zacílí remarketingem třeba na Instagramu a pak koupíte.

Tři návštěvy ze tří odlišných zdrojů, kdo dostane zásluhu na nákupu – konverzi?

### Atribuční model pro přehledy

GA4 používají atribuční model **Na základě dat**, který… nikdo neví, jak přesně funguje. Je ale lepší, než další dvě volby, takže toto měnit nemusíte.

Co si určitě zkontrolujte a případně změňte je nastavení kanálů, které mohou získávat kredit (pokud máte propojeno s Google Ads)

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

### Kanály, které mohou získávat kredit

V základu je nastaveno bude použita volba *Placené kanály Google*, která do značné míry „nespravedlivě“ zvýhodňuje placené reklamy na úkor jiných zdrojů návštěv.

Touto volbou Google říká, že neplacené kanály nemají na konverzi (nákupu) žádnou zásluhu a 100 % zásluhy se připíše **pouze placeným Google Ads kampaním**. Což je samozřejmě hloupost a cílem je vzbudit pocit, že Google Ads kampaně fungují lépe než je realita.

## Proč GA4 měří nepřesně

A na to navážu už poslední kapitolou, kde do jisté míry shodím vše, co jsme si řekli :-). Přestože jsme prošli spoustu nastavení s cílem statistiky co nejvíce zpřesnit, tak GA4 statistiky jsou **z několika objektivních důvodů značně nepřesné**.

**Narazíme na dva druhy nepřesností**. Některé uživatele GA4 vůbec nezměří, tedy nám zcela budou chybět jejich návštěvy potažmo konverze. Ve druhém případě sice uživatele změří a konverzi zaznamenají, ale přiřadí ji nesprávný zdroj návštěv (direct nebo not set).

### Sledování napříč zařízeními

Google není příliš dobrý ve sledování jednotlivých uživatelů, pokud přechází mezi různými zařízeními. Do jisté míry je schopen spárovat uživatele pomocí Google účtu, nicméně pokud přejdete z mobilu na PC, Google vás bude často považovat za jiného člověka.

### Cookie lišta

Cookie lišta má velký vliv na nepřesné statistiky, o to více, že je často nesprávně nasazena. Z mé zkušenosti tipuji, že cca třetina webů nemá [cookie lištu správně nasazenou](https://www.marketingppc.cz/google-analytics/cookies-cookie-lista/). I správně nasazená cookie lišta samozřejmě nezměří chování lidí, kteří cookies neodsouhlasí nebo odmítnou.

*Mohlo by vás zajímat…*

[![co je to cookie lišta](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/google-analytics/cookies-cookie-lista/)

##### Cookies a cookie lišta z pohledu marketingu

[Přejít na článek](https://www.marketingppc.cz/google-analytics/cookies-cookie-lista/)

### Použití emailových klientů nebo aplikací

Když uživatelé kliknou na odkaz ve svém emailovém klientu nebo v aplikaci, která neodesílá referenční informace, návštěva může být zaznamenána v GA4 jako *not set* namísto skutečného zdroje návštěvy.

### Chybějící nebo nesprávné UTM parametry

UTM parametry v URL jsou běžně používány k identifikaci zdroje, média a kampaně pro návštěvy. Pokud tyto parametry chybí nebo jsou nesprávné, GA4 nemusí být schopen určit zdroj návštěvy.

### Přesměrování

Někdy může být informace o zdroji ztracena během přesměrování URL. To se může stát, pokud přesměrování nezachovává původní UTM parametry nebo referenční informace.

### Blokování refererů

Některé prohlížeče nebo rozšíření pro blokování reklam mohou odstranit referenční informace, které jsou obvykle posílány v hlavičce HTTP požadavku. To může vést k tomu, že GA4 nemůže určit, odkud návštěvník přišel.

### Co s nepřesnými statistikami?

Pokud se jedná o analýzu statistik jakékoliv firmy, nejdůležitější statistikou je zpravidla **čistý zisk**. Cokoliv dalšího, vč. statistik v GA4, je pouze pomocná statistika, která vás může nasměrovat správným směrem. Tím chci říct to, že se nemusíme chybějícími statistikami zase tolik stresovat.

V praxi doporučuji při interpretaci statistik **porovnat skutečná čísla** z vašeho systému (nákupy, vyplnění formuláře, kliknutí na telefonní číslo atp.) se statistikami v GA4 a na základě toho zjistit, **o kolik se GA4 rozcházejí s realitou**. U e-shopu není výjimkou, že GA4 podměřují i o několik desítek procent.

Pokud vidím v GA4 obraty 400.000 Kč a ze svého systému vím, že ve skutečnosti jsem prodal za 600.000 Kč, tak s touto odchylkou musím pracovat i při správě kampaní a určování [jejich návratnosti investic](https://www.marketingppc.cz/ppc/co-je-to-roi/).

Pokud bych naopak viděl v GA4 větší hodnoty prodejů nebo počty konverzí než je realita, tak je zpravidla někde chyba; u e-shopu nejčastěji posílání obratů vč. DPH nebo dopravy.

[![nastavení google analytics ga4](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/sluzby/ga4/)

###### Správné nastavení GA4 + GTM dá zabrat. Uděláme to za Vás.

[S čím umíme pomoci](https://www.marketingppc.cz/sluzby/ga4/)

## Nejčastější problémy s GA4 a jak je vyřešit

Z naší praxe s klienty víme, že při nastavení GA4 narazíte nejčastěji na tyto problémy. Tady jsou konkrétní řešení.

### GA4 vůbec nezobrazují data

**1. Zkontrolujte správné ID měření**

* V GA4: Administrátor – Datové streamy – Podrobnosti streamu
* Zkopírujte ID měření (formát G-XXXXXXXXXX)
* Ověřte, že stejné ID máte v GTM nebo přímo v kódu webu

**2. Otestujte v reálném čase**

* GA4: Přehledy – V reálném čase
* Otevřete váš web v anonymním okně
* Během 10 sekund byste měli vidět 1 aktivního uživatele
* Pokud ne, kód není správně nasazený

**3. Zkontrolujte GTM (pokud používáte)**

* GTM: Náhled (Preview mode)
* Otevřete web a podívejte se, jestli se spouští značka GA4
* Pokud ne tak zkontrolujte spouštěcí pravidlo

**Časté chyby:**

* Špatně zkopírované ID (G-ABC123 vs GA-ABC123)
* GTM značka se spouští jen na některých stránkách
* Problém s cookie lištou

### Konverze se neměří / nezobrazují

**1. Ověřte, že událost vůbec přichází**

* GA4: Administrátor – DebugView
* Proveďte konverzi (nákup, odeslání formuláře)
* Událost by se měla okamžitě zobrazit v DebugView
* Pokud ano, událost funguje, problém je jinde
* Pokud ne tak událost není správně nastavená

**2. Zkontrolujte, že je událost označená jako konverze**

* GA4: Administrátor – Události
* Najděte svou událost (např. *generate\_lead*)
* Je vidět v Klíčových událostech nebo jen v *Nedávné události*?
* Pokud ji chcete mít jako konverzi, zařaďte ji mezi klíčové události

**3. Počkejte 24-48 hodin**

* GA4 má zpoždění, konverze se neobjevují okamžitě v přehledech
* DebugView je v reálném čase, přehledy ne

**Pro e-shopy – specifické problémy:**

* Měření e-shopu není správně nastavené
* Platební brána přesměruje na jinou doménu; nezapomeňte na vyloučení domén
* Konverze se počítají včetně DPH nebo dopravy – opravte posílání hodnot do GA4

### GA4 zobrazuje jiná čísla než můj e-shop

**Příznaky:** GA4 říká 100 objednávek, ale ve Shoptetu jich máte 130 (nebo naopak).

**1. Cookie lišta blokuje měření**

* 20-40 % lidí odmítne cookies nebo lištu ignoruje
* Řešení: Google Consent Mode v2 částečně doplní chybějící data. Podoba cookie lišty má také velký vliv.

*Mohlo by vás zajímat…*

[![Consent mode v2](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/google-analytics/consent-mode-v2/)

##### Google Consent Mode V2 – koho se týká?

[Přejít na článek](https://www.marketingppc.cz/google-analytics/consent-mode-v2/)

**2. Duplicitní měření konverzí**

* Konverze se počítá 2x (např. purchase + potvrzeni\_objednavky)
* Řešení: Zkontrolujte události a smažte duplicity

**3. Problém s platební bránou**

* Uživatel dokončí nákup, ale vrátí se přes tlačítko *Zpět* v prohlížeči místo přes platební bránu
* Konverze se nezměří
* Řešení: Technicky složité, nejlepší je server-side tracking

**4. Časové pásmo**

* GA4 počítá podle UTC, váš e-shop podle českého času
* Nákup ve 23:50 se může započítat do jiného dne
* Řešení: Nastavte správné časové pásmo v GA4

**Jak s tím pracovat:**

Porovnejte skutečné obraty z vašeho systému se statistikami v GA4. Pokud vidíte rozdíl:

* **10-20 %** = normální (cookie lišta, blokování GA4 kódu)
* **30-40 %** = může být příliš malá cookie lišta nebo problém s nastavením
* **přes 50 %** = vážný problém, přehledy jsou nepoužitelné

### Vše funguje, ale některá data nedávají smysl

**1) Měřicí kód je na webu dvakrát**

* Může se stát, že jednou jej někdo vložil přes GTM a podruhé rovnou do kódu webu
* Řešení: zkontrolujte pomocí <https://tagassistant.google.com>

**2) Chybějící nebo špatně použité UTM parametry**

* Všechny placené kampaně vypadají jak direct nebo organic
* Řešení: Důsledně používejte UTM parametry ve všech kampaních a zároveň nikdy nepoužívejte UTM pro interní odkazy

**3) Platební brána není vyloučená**

* Paypal.com nebo gopay.com se zobrazuje jako zdroj návštěv
* Řešení: Vyloučení domén platebních bran (v nastavení datového streamu)

**4) Interní návštěvnost není vyloučená**

* Sami sobě zvedáte statistiky
* Řešení: Vyloučení interní návštěvnosti podle IP adresy

### Google Ads konverze se neimportují

**Kontrolní seznam:**

* GA4 a Google Ads jsou propojené? (Administrátor – Propojení služeb)
* Konverze je označená jako primární v Google Ads? (důležité pro automatické nabídky)
* V Google Ads: Cíle – Přehled – Vidíte tam GA4 konverze?
* Čekali jste 24-48 hodin? (import není okamžitý)

### Univerzální kontrolní seznam

Když něco nefunguje, projděte tento seznam:

1. **Data v reálném čase** – Zobrazují se v GA4 – V reálném čase?
2. **DebugView** – Vidíte tam události?
3. **GTM Preview** – Spouští se značky?
4. **Chyby v konzoli** – Otevřete DevTools (F12) – Konzole – Nejsou tam červené chyby?
5. **Cookie lišta** – Máte Consent Mode správně?
6. **Blokátor reklam** – Vypnout a zkusit znovu

**Když nic nepomůže:**

* Export dat do CSV a ruční kontrola
* Použít jiný nástroj pro kontrolu (Matomo, Plausible)
* [Napište nám](https://www.marketingppc.cz/kontakt/) – diagnostikujeme to za vás

## Co je nového v GA4 (2025-2026)

Google Analytics 4 se aktivně vyvíjí. Pokud jste GA4 nastavovali v roce 2023 nebo 2024, tyto změny byste měli znát.

### AI asistent v GA4 (prosinec 2025)

GA4 dostalo vlastního chatbota postaveného na Gemini. Najdete ho vpravo nahoře nebo přes vyhledávání:

* Odpovídá na otázky o vašich datech
* Vysvětluje náhlé poklesy nebo nárůsty
* Vytváří grafy na požádání
* Radí s nastavením

Prakticky: Místo hledání v reportech se prostě zeptáte *Proč mi klesly konverze minulý týden?* a dostanete (snad) odpověď.

### Poznámky v reportech (březen 2025)

Možnost přidat poznámky přímo do GA4. Když spustíte kampaň nebo změníte web, označíte si to přímo v GA4 (Administrátor – Zobrazení dat – Poznámky).

K čemu se to hodí: Za měsíc už nevíte, proč tam byl skok v návštěvnosti. S poznámkou vidíte hned – *Spuštěn Black Friday*, *Virální příspěvek na LinkedIn*, atd.

### Automatické vysvětlení výkyvů

GA4 teď samo upozorní na anomálie ve statistikách a řekne proč. Například když některá událost vyskočí z 9 500 na 21 000, systém vám řekne: *Návštěvnost z USA narostla o 200 %, uživatelů Chrome +170 %*.

### Kopírování reportů mezi weby (březen 2025)

Pokud spravujete víc GA4 účtů (agentura, více webů), můžete zkopírovat vlastní reporty z jednoho GA4 do druhého.

### Lepší možnosti pro remarketing

Nové šablony pro publika:

* Zákazníci s vysokou hodnotou (podle počtu nákupů nebo toho, kolik u vás utrácejí)
* Top X % nejcennějších zákazníků

GA4 také teď umí automaticky sdílet informace o produktech, které si lidé prohlédli, s Google Ads. V remarketingu pak vidí přesně ty produkty, co je zajímaly.

Podmínka: Musíte mít správně nastavené měření e-shopu včetně parametrů produktů.

### Import nákladů z Facebooku a TikToku

Konečně můžete importovat data o útratě z Facebook/Instagram a TikTok kampaní přímo do GA4.

Najdete to v: Administrátor – Shromažďování a úprava dat – Import dat.

### Přesnější měření konverzí (srpen 2025)

Google opravil dlouhodobé problémy:

* Konverze se nezapočítávaly
* Duplikované návštěvy
* Zpožděné reporty

Pokud vám GA4 dlouhodobě podměřují, update z srpna 2025 by měl pomoci. Ale stále počítejte s nepřesností kvůli cookie lištám a dalším faktorům.

### Co se změnilo v rozhraní

* Jednodušší navigace v levém menu
* Rychlejší načítání reportů (až o 40 %)
* Lepší export do Looker Studio
* Vylepšené vyhledávání

### Co plánuje Google pro 2026

**Druhý kvartál 2026: Vylepšení vlastních dat o zákaznících**

Google přestavuje systém, kterým můžete do GA4 nahrávat vlastní data o zákaznících (třeba z vašeho CRM nebo e-shopu). Mělo by to zlepšit:

* Přesnost přiřazení konverzí ke zdrojům
* Remarketing na vaše existující zákazníky
* Celkovou přesnost dat

**Další AI funkce**

Google potvrdil, že automatické analýzy budou dál expandovat. Očekávejte:

* Lepší předpovědi, kteří zákazníci vás opustí
* Automatická doporučení, co zlepšit
* AI návrhy na segmenty publika

### Co byste měli zkontrolovat teď

Pokud jste GA4 nastavovali před rokem nebo víc:

1. **Consent Mode V2** – máte správně nastavenou cookie lištu? Bez toho remarketing nefunguje.
2. **Časový limit relace** – doporučuji 30-60 sekund místo defaultních 10.
3. **Vyloučení platebních bran** – stále potřeba, jinak se vám GoPay, PayPal atp. zobrazuje jako zdroj konverzí.
4. **Propojení s Google Ads** – zkontrolujte, že se konverze importují správně.
5. **Uchovávání dat** – 14 měsíců místo 2 (Administrátor → Uchovávání dat).

## Často kladené dotazy k GA4

### Jak nastavit konverze (klíčové události) v GA4?

V GA4 se konverze nazývají *klíčové události* (key events). Nastavení konverzí v GA4 probíhá ve třech krocích:

1. V administraci GA4 přejděte do sekce *Události*
2. Najděte událost, kterou chcete označit jako konverzi (např. *form\_submit*)
3. Přes volbu tří teček ji označte jako klíčovou událost

Pokud událost neexistuje, musíte ji nejprve vytvořit pomocí Google Tag Manageru nebo v sekci *Vytvoření události*.

Pro [měření e-commerce](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce?client_type=gtag) doporučujeme sledovat minimálně tyto konverze: nákup (purchase), přidání do košíku (add\_to\_cart), první stránka košíku (begin\_checkout). Pro správné měření musí být GA4 propojené s [Google Ads](https://www.marketingppc.cz/google-ads/nastaveni-google-ads/), aby konverze fungovaly v reklamních kampaních.

### Jak založit Google Analytics 4 od nuly?

Založení Google Analytics 4 vyžaduje Google účet a web s možností upravit HTML kód. Postup:

1. Přejděte na analytics.google.com a klikněte na *Začít měřit*
2. Vyplňte základní údaje (název účtu, název webu, URL, časové pásmo, měna)
3. Přijměte podmínky služby Google Analytics
4. Zkopírujte měřicí kód (gtag.js) a vložte ho do <head> sekce všech stránek webu

Pokud používáte WordPress, instalujte GA4 pomocí pluginu nebo ručně přes záhlaví šablony. Pro pokročilé nastavení doporučujeme implementaci přes [Google Tag Manager](https://www.marketingppc.cz/google-analytics/google-tag-manager-nastaveni/), který umožňuje sledování interakcí bez úprav kódu webu. Po instalaci ověřte, že GA4 sbírá data v reálném čase v sekci *Přehledy v reálném čase*.

### Co znamenají nejdůležitější statistiky v GA4?

Klíčové metriky v GA4:

* **Uživatelé** (Users) – počet jedinečných návštěvníků vašeho webu
* **Relace** (Sessions) – jednotlivé návštěvy, relace končí po 30 minutách neaktivity (lze v nastavení změnit) nebo o půlnoci
* **Zobrazení stránek** (Page views) – kolikrát byla stránka načtena
* **Míra zapojení** (Engagement rate) – procento relací, které trvaly déle než 10 sekund (lze v nastavení změnit) NEBO měly konverzi NEBO měly 2+ zobrazení stránek
* **Průměrná doba zapojení** (Average engagement time) – jak dlouho byli uživatelé aktivní na webu
* **Konverze** (klíčové události – Key events) – počet dokončených cílových akcí

Pro e-commerce jsou důležité: **Tržby** (Revenue), **Transakce** (Transactions), **Průměrná hodnota objednávky** (Average order value).

### Proč GA4 měří nepřesně a jak to ovlivňuje data?

GA4 má několik známých nepřesností:

1. **Consent Mode** – při nepřijetí cookies GA4 nesbírá úplná data, používá modelování (může být odchylka 10-30%)
2. **Ad blockery** – blokují GA4 kód, skutečný počet návštěvníků může být o 15-25% vyšší
3. **Sampling** – při velkých datech (500k+ událostí) GA4 používá vzorkování, není 100% přesné
4. **Cross-domain tracking** – pokud máte web na více doménách, musí být správně nastaven
5. **Duplikace měření** – pokud máte GA4 tag 2x (např. v GTM + přímo na webu), data se zdvojnásobí

Pravidelně kontrolujte sekci *DebugView* pro odhalení chyb v měření. Pro kritická rozhodnutí porovnávejte GA4 data s daty z jiných zdrojů (Google Ads, Facebook Ads Manager, interní CRM).

### Jak nastavit remarketingová publika v GA4?

Remarketing v GA4 funguje přes vytvoření *publika* a jeho propojení s Google Ads:

1. V GA4 přejděte do sekce *Administráto*r → *Publika*
2. Klikněte na *Nové publikum*
3. Vyberte šablonu (např. *Uživatelé, kteří nedokončili nákup*) nebo vytvořte vlastní podmínky
4. Definujte parametry (např. Navštívil stránku /kosik/ ale nenavštívil /dekujeme/)
5. Nastavte dobu trvání (maximálně 540 dní)
6. Uložte publikum

Pro aktivaci remarketingu v Google Ads: Propojte GA4 s Google Ads v nastavení, počkejte 24-48 hodin než se publikum naplní daty (minimum 100 uživatelů), v Google Ads vytvořte kampaň zacílenou na toto publikum.

Užitečná publika pro e-commerce: Návštěvníci produktových stránek (7 dní), Přidali do košíku ale nenakoupili (14 dní), Nakoupili v minulosti (180 dní). Pro větší dosah kombinujte s [remarketingem na Meta](https://www.marketingppc.cz/socialni-site/jak-nastavit-facebook-reklamu-jako-profesional/).

### Jak propojit Google Analytics 4 s Google Ads?

Propojení GA4 s Google Ads probíhá v několika krocích:

1. V GA4 přejděte do Administrace → Propojení služeb → Propojení Google Ads
2. Klikněte *Propojit* a vyberte Google Ads účet (musíte mít administrátorská práva v obou účtech)
3. Potvrďte propojení a nastavte v Google Ads import klíčových událostí (konverzí)
4. V Google Ads zkontrolujte, že se GA4 konverze zobrazují (může trvat 24 hodin)

Po propojení získáte: Import GA4 konverzí do Google Ads (nákupy, poptávky, registrace), export Google Ads dat do GA4 (náklady, kliknutí, zobrazení), možnost vytvářet remarketing publika z GA4 pro Google Ads kampaně, lepší statistiky.

Časté problémy: Duplicitní měření (máte-li konverze v Google Ads i GA4), rozdílná čísla (GA4 používá jiný atribuční model), zpoždění synchronizace (až 9 hodin). Pro správné nastavení doporučujeme [obrátit se na odborníky](https://www.marketingppc.cz/sluzby/google-ads-reklama/).

### Jak řešit problém, když GA4 neukazuje žádná data?

Pokud GA4 nesbírá data, postupujte systematicky:

1. **Zkontrolujte instalaci měřicího kódu** – Otevřte web, zobrazte zdrojový kód stránky (Ctrl+U), vyhledejte *gtag* nebo *gtm* – měřicí kód musí být v <head> sekci každé stránky
2. **Ověřte ID měření** – ID začíná „G-“ (např. G-XXXXXXXXXX), ne „UA-“ (to je starý Universal Analytics)
3. **Vypněte ad bloker a rozšíření prohlížeče** – testujte v inkognito režimu
4. **Zkontrolujte *Přehledy v reálném čase*** v GA4 – navštivte web a sledujte, jestli se zobrazí vaše návštěva
5. **Pokud používáte GTM** – zkontrolujte, že GA4 tag se spouští na všech stránkách a GTM kontejner je publikovaný (ne jen uložený v konceptu)
6. **Firewall/security plugin** – některé bezpečnostní pluginy na WordPressu blokují GA4, zkuste dočasně deaktivovat
7. **Cookie consent** – pokud máte cookie lištu, ujistěte se, že GA4 se spouští i po odmítnutí (v anonymním režimu)

Časté chyby: nedostatečná práva v GA4 účtu, web běží na testovací doméně (localhost), čekáte moc brzo (první data se objeví za 24-48 hodin). Pokud problém přetrvává, použijte [Google Tag Assistant](https://tagassistant.google.com/) pro diagnostiku nebo kontaktujte [naše specialisty na GA4](https://www.marketingppc.cz/sluzby/ga4/).

[![nastavení google analytics ga4](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/sluzby/ga4/)

###### Správné nastavení GA4 + GTM dá zabrat. Uděláme to za Vás.

[S čím umíme pomoci](https://www.marketingppc.cz/sluzby/ga4/)

Článek napsal/a Filip Hvízdal

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)Filip se on-line marketingu začal věnovat v roce 2012, kdy vyzkoušel své první Google Ads kampaně za vlastní peníze. V současné době aktivně spravuje kampaně našich VIP klientů s měsíční útratou přes 4.300.000 Kč.  
  
Máte k článku dotaz nebo připomínku? Napište mi na [LinkedIn](https://www.linkedin.com/in/hvizdal/)

Štítky:[Nejčtenější články](https://www.marketingppc.cz/tag/nejctenejsi/ "Nejčtenější články")

[Předchozí5 Google Ads reportů, které vám pomohou předehnat konkurenci](https://www.marketingppc.cz/google-ads/5-google-ads-reportu/)

[DalšíMarketingový mix 4P, 7P a 4C: kompletní průvodce s příklady](https://www.marketingppc.cz/marketing/marketingovy-mix/)