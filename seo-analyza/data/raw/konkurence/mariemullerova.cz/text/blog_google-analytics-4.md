# URL: https://www.mariemullerova.cz/blog/google-analytics-4/

1. [Domů](/) /
2. [Blog](/blog/) /
3. Google Analytics 4: návod pro začátečníky

# Google Analytics 4: návod pro začátečníky

![](/_astro/marie-portret.CxDjTv2c_Z1z1LNd.webp) [Marie Müllerová](/o-mne/)   **Publikováno** 3. října 2026

Obsah článku

1. [Co je Google Analytics 4 a k čemu slouží](#co-je-google-analytics-4-a-k-čemu-slouží)
2. [GA4 vs. Universal Analytics: hlavní rozdíly jednoduše](#ga4-vs-universal-analytics-hlavní-rozdíly-jednoduše)
3. [Co si připravit před nastavením GA4](#co-si-připravit-před-nastavením-ga4)
4. [Jak založit účet a službu v Google Analytics 4](#jak-založit-účet-a-službu-v-google-analytics-4)
5. [Jak vytvořit datový stream pro web](#jak-vytvořit-datový-stream-pro-web)
6. [Jak nasadit GA4 na web přes Google Tag Manager](#jak-nasadit-ga4-na-web-přes-google-tag-manager)
7. [Jak ověřit, že GA4 správně měří](#jak-ověřit-že-ga4-správně-měří)
8. [Události v GA4: co se měří automaticky a co nastavit ručně](#události-v-ga4-co-se-měří-automaticky-a-co-nastavit-ručně)
9. [Konverze v GA4: jak nastavit nejdůležitější akce](#konverze-v-ga4-jak-nastavit-nejdůležitější-akce)
10. [Základní reporty v GA4 pro začátečníky](#základní-reporty-v-ga4-pro-začátečníky)
11. [Co sledovat podle typu webu nebo e-shopu](#co-sledovat-podle-typu-webu-nebo-e-shopu)
12. [Propojení GA4 s Google Search Console a Google Ads](#propojení-ga4-s-google-search-console-a-google-ads)
13. [Nejčastější chyby při nastavení GA4](#nejčastější-chyby-při-nastavení-ga4)
14. [Checklist: minimální správné nastavení GA4](#checklist-minimální-správné-nastavení-ga4)
15. [FAQ: Google Analytics 4 pro začátečníky](#faq-google-analytics-4-pro-začátečníky)

Google Analytics 4 je aktuální verze Google Analytics pro měření webů a aplikací. Začátečník ji nastaví ve čtyřech krocích: založí účet a službu, vytvoří webový datový stream, vloží měřicí ID přes Google Tag Manager a ověří data v Realtime a DebugView. Platnost údajů v návodu: 5. 9. 2026.

GA4 neberte jako statistiku návštěvnosti pro občasnou kontrolu. U webu, e-shopu i placené reklamy podle ní rozhodujete o penězích. Když GA4 měří špatně, špatně vyhodnotíte SEO, PPC (platbu za proklik), affiliate i obsah.

## Co je Google Analytics 4 a k čemu slouží

Google Analytics 4, zkráceně GA4, měří návštěvy a chování lidí na webu nebo v aplikaci. Google ji označuje jako nástupce Universal Analytics. Standardní Universal Analytics přestaly zpracovávat nová data 1. 7. 2023. U placené verze Analytics 360 skončilo prodloužené zpracování 1. 7. 2024.

GA4 pracuje hlavně s událostmi. Událost je konkrétní akce, například `page_view`, `scroll`, `click`, `form_submit`, `add_to_cart` nebo `purchase`. Webový datový stream používá měřicí ID ve formátu `G-` a další znaky, například `G-PSW1MY7HB4`. Podle tohoto ID Google pozná, do kterého streamu má data z webu posílat.

Po nasazení GA4 řešte hlavně čtyři věci: zda se měří návštěvy, odkud lidé přicházejí, jaké stránky používají a které akce mají obchodní význam. Bez toho neuvidíte rozdíl mezi návštěvností, která jen plní graf, a návštěvností, která pomáhá firmě.

K základní terminologii v SEO se hodí samostatný přehled: [SEO slovníček: 50 pojmů vysvětleno](/seo/seo-slovnik/).

## GA4 vs. Universal Analytics: hlavní rozdíly jednoduše

Universal Analytics stály na relacích, stránkách a cílech. GA4 stojí na událostech, parametrech a key events. V praxi to znamená, že v GA4 nesledujete jen zobrazení stránky, ale i konkrétní akce uživatele.

| Oblast | Universal Analytics | Google Analytics 4 |
| --- | --- | --- |
| Základ měření | session a hit | event |
| Cíle | goals | key events |
| Zobrazení stránky | pageview | `page_view` jako událost |
| Zapojení | bounce rate | engagement rate a engaged sessions |
| Struktura | účet, služba, výběry dat | účet, služba, datové streamy |
| Aktivní měření po roce 2024 | ne | ano |

Engaged session v GA4 vzniká například tehdy, když relace trvá déle než 10 sekund, obsahuje alespoň 2 zobrazení stránek nebo má key event. Bounce rate v GA4 proto není přímá kopie staré metriky z Universal Analytics. Pro běžné vyhodnocení se více hodí engagement rate, zdroje návštěvnosti a key events.

Google změnil i názvosloví. Odděluje key event v Analytics od konverze používané pro Google Ads. Zjednodušený tok podle dokumentace je: event → key event → conversion. Pro reporty v GA4 označte důležité akce jako key events. Pro optimalizaci reklam z nich poté vytvoříte konverze v Google Ads.

## Co si připravit před nastavením GA4

Před založením GA4 si připravte přístup ke Google účtu, administraci webu a Google Tag Manageru. U WordPressu, Shoptetu nebo jiného systému budete potřebovat místo, kam vložíte kontejner GTM nebo přímo Google tag. U e-shopu počítejte s tím, že e-commerce události jako `add_to_cart`, `begin_checkout` a `purchase` často vyžadují datovou vrstvu.

Druhá příprava je měřicí plán. Nemusí mít deset stran. Pro malý web stačí tabulka se 4 sloupci: akce, název události, kde vzniká a zda jde o key event. Firemní web obvykle měří odeslání formuláře, kliknutí na telefon nebo e-mail a návštěvu děkovací stránky. E-shop potřebuje minimálně `purchase`; bez ní nelze rozumně vyhodnocovat kampaně podle tržeb.

Třetí bod je souhlas s cookies a Consent Mode. Google od roku 2024 vyžaduje pro uživatele z Evropského hospodářského prostoru předávání voleb souhlasu do Google tagů. Consent Mode API pracuje mimo jiné s parametry `ad_user_data` a `ad_personalization`. U webu s reklamou v Google Ads proto nestačí nalepit cookie lištu. Musí správně předat stav souhlasu.

Na podrobnější práci se značkami navazuje samostatný článek Google Tag Manager: úvod.

## Jak založit účet a službu v Google Analytics 4

V Google Analytics vytvoříte nejdříve účet a potom službu. Účet je organizační úroveň, typicky firma nebo projekt. Služba je konkrétní měřený web nebo aplikace. Google uvádí, že jeden účet může obsahovat jednu nebo více služeb. Ve službě se spravují reporty, sběr dat, atribuční nastavení, soukromí a propojení s dalšími produkty.

Postup pro začátečníka:

1. Otevřete `analytics.google.com`.
2. V administraci zvolte vytvoření účtu.
3. Pojmenujte účet podle firmy nebo projektu.
4. Vytvořte službu GA4.
5. Nastavte zemi, měnu a časové pásmo.
6. Zkontrolujte, že jste ve správné službě.

Časové pásmo nepodceňujte. Pokud český e-shop nastaví jiné pásmo než Evropa/Praha, denní přehledy budou hůře sedět na objednávky v administraci. Měna má stejný význam u e-commerce měření a Google Ads. Když v účtu vyhodnocujete české kampaně v korunách, nastavte českou korunu hned při založení.

V účtech, kde se pracuje s více weby, považuji pojmenování za součást měření. Při 2 000+ spravovaných PPC kampaních se ukáže, že nepořádek v názvech není drobnost. Zpomaluje kontrolu a zvyšuje riziko, že někdo upraví nesprávnou službu.

## Jak vytvořit datový stream pro web

Datový stream je zdroj dat uvnitř služby GA4. Pro web vytvoříte webový stream, pro aplikace existují streamy pro iOS a Android. Podle dokumentace Googlu je datový stream koncept GA4 a při nastavení webu v něm najdete měřicí ID ve formátu `G-XXXXXXXXXX`.

Ve webovém streamu vyplníte URL webu a název streamu. Po vytvoření zkontrolujte měřicí ID a rozšířené měření. Rozšířené měření umí bez úprav kódu sbírat vybrané interakce: zobrazení stránky, scroll, odchozí kliknutí, vyhledávání na webu, interakce s videem, stažení souboru a formulářové interakce. Platí to jen tehdy, když je GA4 na konkrétním webu dokáže zachytit.

Název streamu pište tak, aby byl srozumitelný i za rok. `mariemullerova.cz - web` je lepší než `Web stream 1`. U větších projektů rozlišujte produkční web a testovací prostředí. Testovací doména nemá míchat data s ostrým webem.

Po založení streamu si uložte měřicí ID. Budete ho potřebovat v Google Tag Manageru, v CMS nebo při kontrole implementace.

## Jak nasadit GA4 na web přes Google Tag Manager

Google Tag Manager, zkráceně GTM, je správce značek. Do webu vložíte jeden kontejner a v něm spravujete GA4, Google Ads, měření formulářů a další značky bez opakovaných zásahů do šablony webu. Pro začátečníka je to nejpraktičtější cesta, pokud web GTM podporuje.

Základní postup:

1. Vytvořte kontejner v Google Tag Manageru pro typ Web.
2. Vložte GTM kód do webu podle instrukcí nástroje.
3. V GTM vytvořte novou značku typu Google tag.
4. Do Tag ID vložte měřicí ID z GA4 ve formátu `G-...`.
5. Jako spouštěč nastavte `All Pages`.
6. Otevřete Preview mode a otestujte načtení webu.
7. Publikujte kontejner.

Od září 2023 Google v Tag Manageru používá Google tag místo dřívějšího názvu GA4 Configuration tag. Ve starších návodech stále najdete původní označení, proto se může lišit text tlačítka v rozhraní. Princip zůstává stejný: základní tag posílá data do správného GA4 streamu.

Nejčastější chyba je dvojité měření. Vzniká, když někdo vloží GA4 přímo do šablony webu a zároveň ho spustí přes GTM. V Realtime potom vidíte nápadně nafouknuté event count a v reportech se zkreslí návštěvnost i konverzní poměry.

## Jak ověřit, že GA4 správně měří

Ověření po nasazení je povinná část práce. Google uvádí, že Realtime report zobrazuje události z posledních 30 minut. DebugView ukazuje události z jednoho laděného zařízení. Před použitím vyžaduje zapnutý debug mode, například přes Tag Assistant nebo Preview mode v Google Tag Manageru.

Postup testu:

1. Otevřete web v anonymním okně.
2. V GA4 otevřete Reports → Realtime.
3. Projděte 2-3 stránky webu.
4. Klikněte na měřený odkaz, formulář nebo tlačítko.
5. V GTM Preview zkontrolujte, zda se značky spustily.
6. V GA4 otevřete Admin → DebugView.
7. Ověřte názvy událostí a parametry.

Realtime používejte jen jako rychlou kontrolu, že data tečou. DebugView je přesnější pro kontrolu konkrétní události. Pokud v GTM Preview značka vystřelí, ale v DebugView ji nevidíte, hledejte problém v měřicím ID, consent nastavení, blokování skriptů nebo ve filtru interní návštěvnosti.

Po nasazení se k reportům vraťte po 24-48 hodinách. Některá data se v běžných reportech nezobrazují okamžitě. Realtime potvrzuje tok dat, ale nenahrazuje kontrolu druhý den.

## Události v GA4: co se měří automaticky a co nastavit ručně

GA4 sbírá část událostí automaticky. Google rozlišuje automaticky sbírané události, rozšířené měření, doporučené události a vlastní události. Automaticky se objevují například `first_visit`, `session_start` nebo `user_engagement`. Rozšířené měření může přidat `page_view`, `scroll`, `click`, `file_download` a další události podle nastavení streamu.

Ručně nastavujte akce, které mají pro web obchodní význam a GA4 je neumí spolehlivě poznat samo. Typicky jde o kliknutí na hlavní CTA tlačítko, úspěšné odeslání formuláře, registraci, přidání do košíku nebo nákup. Pro e-shop Google doporučuje používat standardní e-commerce názvy, například `view_item`, `add_to_cart`, `begin_checkout` a `purchase`.

Názvy událostí držte krátké a stabilní. Google u key events uvádí limit 40 znaků pro název události. Parametrů u jedné události může být podle limitů GA4 25. Pro začátečnické měření to stačí, pokud z událostí neděláte odpadkový koš pro každý detail na stránce.

Příklad jednoduchého pojmenování:

| Akce | Doporučený název události | Poznámka |
| --- | --- | --- |
| Odeslání kontaktního formuláře | `generate_lead` | Vhodné jako key event |
| Kliknutí na e-mail | `click_email` | Vlastní událost |
| Kliknutí na telefon | `click_phone` | Vlastní událost |
| Přidání do košíku | `add_to_cart` | Doporučená e-commerce událost |
| Dokončený nákup | `purchase` | Základ pro vyhodnocení e-shopu |

## Konverze v GA4: jak nastavit nejdůležitější akce

V GA4 se důležité akce označují jako key events. Google je definuje jako události důležité pro úspěch firmy. Od roku 2024 rozlišujte key event v Analytics a conversion v Google Ads: událost nejdříve označíte jako key event v GA4 a pro reklamní optimalizaci z ní vytvoříte konverzi v Google Ads.

Začátečník by měl označit jen akce, podle kterých se opravdu rozhoduje. U firemního webu to bývá `generate_lead`, úspěšné odeslání formuláře nebo návštěva děkovací stránky. U e-shopu je základ `purchase`; podle situace přidejte `begin_checkout` nebo `add_to_cart`, ale nenahrazujte jimi vyhodnocení nákupů.

Příliš mnoho key events škodí přehledu. Pokud jako key event označíte každé kliknutí, report přestane říkat, co je obchodně důležité. U malého webu začněte s 1-3 key events. U e-shopu oddělte hlavní nákup od pomocných kroků v košíku.

Pozor na děkovací stránky. Měří se jednoduše, ale mohou se spustit opakovaným obnovením stránky nebo návratem z historie prohlížeče. U formuláře je čistší měřit skutečné úspěšné odeslání, pokud to technicky zvládnete.

Pro rozhodování nad čísly doporučuji navázat na článek [KPI v marketingu: které sledovat](/blog/kpi-marketing/).

## Základní reporty v GA4 pro začátečníky

Začněte v Reports, ne v Explorations. Standardní reporty stačí pro první kontrolu návštěvnosti, zdrojů a důležitých akcí. Realtime používejte na testování posledních 30 minut, Acquisition na zdroje návštěvnosti, Engagement na události a Pages and screens na výkon konkrétních URL.

Pro SEO sledujte hlavně organickou návštěvnost, vstupní stránky a zapojení. Pro PPC sledujte návštěvy z `google/cpc`, kampaně, key events a později konverze propojené s Google Ads. U obsahu se dívejte na stránky, které přivádějí návštěvnost, a na to, zda lidé po přečtení pokračují k důležité akci.

Dvě nastavení zkontrolujte hned. První je období reportu. Začátečníci často porovnávají dnešek s minulým měsícem a vyvozují závěr z nedokončeného dne. Druhé je data retention. Google u standardních GA4 služeb umožňuje retenci uživatelských dat 2 měsíce nebo 14 měsíců. U části eventových dat v Analytics 360 existují i 26, 38 a 50 měsíců. Retence ovlivňuje hlavně explorace a funnel reporty, ne standardní agregované reporty.

Pro pravidelné reportování se hodí dashboard mimo GA4: [Looker Studio: dashboardy zdarma](/blog/looker-studio/).

## Co sledovat podle typu webu nebo e-shopu

Typ webu určuje, co má měření považovat za výsledek. Firemní web bez e-shopu nemá hodnotit úspěch podle `purchase`. Magazín nemá vydávat scroll za obchodní výkon. E-shop bez `purchase` nevidí objednávky.

| Typ webu | Sledujte jako první | Typické události | Poznámka |
| --- | --- | --- | --- |
| Firemní web | poptávky a kontakty | `generate_lead`, `form_submit`, `click_phone`, `click_email` | Key event má být odeslaný kontakt, ne běžné kliknutí |
| E-shop | objednávky a kroky košíku | `purchase`, `add_to_cart`, `begin_checkout` | Bez hodnoty objednávky je PPC vyhodnocení slabé |
| Blog nebo magazín | zdroje a zapojení | `scroll`, `user_engagement`, `page_view` | Scroll není obchodní výsledek |
| Web pro sběr kontaktů | formuláře a CTA | `generate_lead`, `form_submit`, vlastní CTA kliknutí | Testujte skutečné odeslání, nejen kliknutí na tlačítko |

U obsahových webů dávám pozor na falešnou radost z návštěvnosti. V obsahovém provozu, kde vzniklo 5 000+ publikovaných článků, se opakovaně ukazuje, že samotný počet zobrazení nestačí. Důležitý je vztah mezi tématem, zdrojem návštěvy a navazující akcí.

U e-shopu platí podobná disciplína. Pokud kampaně přivádějí levné návštěvy bez objednávek, GA4 vám to má ukázat co nejdříve. Když e-commerce měření chybí, rozhodujete podle neúplného obrazu.

## Propojení GA4 s Google Search Console a Google Ads

GA4 propojte se Search Console a Google Ads, pokud tyto nástroje používáte. Search Console ukazuje výkon ve výsledcích Google vyhledávání, GA4 chování po příchodu na web. Čísla se nemusí rovnat, protože každý nástroj měří jinou část cesty.

Propojení s Google Ads má přímý dopad na reklamu. Google uvádí, že jedna GA4 služba může mít až 400 propojení s Google Ads účty, přičemž propojení s manager account se počítá jako 1 propojení. Po vytvoření propojení se data z Google Ads zobrazí v Analytics do 48 hodin. Pro použití v reklamě je potřeba z key events vytvořit konverze v Google Ads nebo pracovat s publikem pro remarketing.

V administraci GA4 hledejte Product links. Pro Google Ads potřebujete v Analytics roli administrator nebo editor a v Google Ads administrátorský přístup. Při propojení zkontrolujte automatické značkování, protože `gclid` pomáhá přiřadit kliknutí z reklam ke kampaním.

S UTM parametry zde záměrně nejdu do detailu. Patří do samostatného PPC postupu. Pro začátek stačí vědět, že placené kampaně mimo Google Ads musí mít konzistentní značení. Jinak se v akvizici rozpadnou do nepřehledných zdrojů.

## Nejčastější chyby při nastavení GA4

Nejvíce škodí chyby, které nejsou vidět na první pohled. GA4 může vypadat funkčně, ale data přesto nejdou použít pro rozhodování.

| Chyba | Jak ji poznáte | Dopad |
| --- | --- | --- |
| GA4 měří dvakrát | podezřele vysoký počet `page_view` | nafouknuté návštěvy a události |
| Chybí Consent Mode | problém u uživatelů z EEA a reklamních funkcí | slabší měření a publika pro Ads |
| Nejsou key events | reporty ukazují návštěvy bez výsledku | nejde hodnotit výkon |
| Měří se interní návštěvy | vlastní testy se objevují v datech | zkreslené reporty u malých webů |
| Není propojení s Ads | kampaně chybí v reklamních reportech | horší práce s konverzemi |
| Špatné období | porovnává se neúplný den s celým obdobím | chybné závěry |
| Špatná služba | tým sleduje jiný web nebo test | rozhodování podle cizích dat |

U malých webů dokáže interní návštěvnost výrazně zkreslit data. Pokud má web desítky návštěv denně a tým ho při správě opakovaně otevírá, v reportech vznikne šum. U větších e-shopů je menší relativně, ale při testování objednávek stále vadí.

Druhá častá chyba je slepé přebírání starších návodů. Pokud návod mluví primárně o Universal Analytics, goals nebo GA4 Configuration tagu bez vysvětlení novějšího názvosloví, ověřte ho proti aktuální dokumentaci Googlu.

## Checklist: minimální správné nastavení GA4

Minimální správné nastavení GA4 pro malý web má být krátké a ověřitelné. Pokud některý bod neumíte potvrdit, měření není hotové.

* V Google Analytics existuje správný účet a GA4 služba.
* Webový datový stream má správnou URL a měřicí ID ve formátu `G-...`.
* Google tag je nasazený jednou, ideálně přes Google Tag Manager.
* GTM kontejner je publikovaný, ne jen uložený v pracovním prostoru.
* Realtime ukazuje návštěvu z posledních 30 minut.
* DebugView ukazuje testovací události z vašeho zařízení.
* Rozšířené měření je zkontrolované, ne jen ponechané bez kontroly.
* Hlavní akce jsou pojmenované jako události.
* Nejdůležitější akce jsou označené jako key events.
* U e-shopu se měří `purchase` včetně hodnoty a měny.
* Cookie lišta předává souhlasy do Consent Mode.
* GA4 je propojené se Search Console a Google Ads, pokud je používáte.
* Data retention je vědomě nastavená na 2 měsíce nebo 14 měsíců.
* Po 24-48 hodinách proběhla kontrola standardních reportů.

Tento checklist je záměrně přísný. GA4 není hotové ve chvíli, kdy se v administraci objeví první návštěva. Hotové je tehdy, když umíte vysvětlit, co se měří, proč se to měří a jak podle toho rozhodnete o další práci.

## FAQ: Google Analytics 4 pro začátečníky

### Je Google Analytics 4 zdarma?

Standardní Google Analytics 4 je dostupné zdarma. Placená podniková varianta je Google Analytics 360. Malý web nemusí platit za základní měření; rozdíl je v limitech, správě a funkcích pro velké organizace.

### Jak dlouho trvá, než se data objeví v GA4?

Realtime ukazuje události z posledních 30 minut. DebugView ukazuje laděné události po zapnutí debug mode. Pro běžné reporty počítejte s kontrolou po 24-48 hodinách, protože standardní reporty nejsou totéž co okamžitý test.

### Co je měřicí ID v GA4?

Měřicí ID je identifikátor webového datového streamu. Má formát `G-` a kombinaci písmen a číslic, například `G-PSW1MY7HB4`. Vkládá se do Google tagu, Google Tag Manageru nebo nastavení webové platformy.

### Jaký je rozdíl mezi událostí a key event?

Událost je jakákoliv měřená akce, například `page_view` nebo `click`. Key event je událost, kterou označíte jako důležitou pro úspěch webu, například `generate_lead` nebo `purchase`. Pro Google Ads se z key event může vytvořit konverze.

### Musím používat Google Tag Manager?

Nemusíte. GA4 lze nasadit i přímo přes Google tag nebo integraci v redakčním systému. GTM se vyplatí, když chcete měřit formuláře, kliknutí, reklamní značky a další události bez zásahu vývojáře při každé změně.

### Stačí zapnout rozšířené měření?

Nestačí. Rozšířené měření pomůže s událostmi jako `scroll`, `click` nebo `file_download`, ale obchodně důležité akce musíte zkontrolovat a často nastavit ručně. U e-shopu je samostatná implementace e-commerce měření prakticky nutná.

### Proč GA4 nesedí se Search Console nebo administrací e-shopu?

Každý nástroj měří jinou věc. Search Console řeší výkon ve vyhledávání Google, GA4 chování na webu a e-shopová administrace objednávky ve vlastním systému. Rozdíly nejsou automaticky chyba, ale velké odchylky po nasazení měření prověřte.

### Kolik key events nastavit na začátku?

U malého firemního webu začněte s 1-3 key events. U e-shopu nastavte minimálně `purchase`, případně doplňte `add_to_cart` a `begin_checkout`. Více key events neznamená lepší analytiku, pokud mezi nimi nerozlišujete skutečný obchodní význam.

## Zdroje

* [Google Analytics Help: Introducing the next generation of Analytics](https://support.google.com/analytics/answer/10089681)
* [Google Analytics Help: Property](https://support.google.com/analytics/answer/9355666)
* [Google Analytics Help: Measurement ID](https://support.google.com/analytics/answer/12270356)
* [Google Analytics Help: About events](https://support.google.com/analytics/answer/9322688)
* [Google Analytics Help: Enhanced measurement events](https://support.google.com/analytics/answer/9216061)
* [Google Analytics Help: About key events](https://support.google.com/analytics/answer/9267568)
* [Google Analytics Help: Conversions vs. key events](https://support.google.com/analytics/answer/13965727)
* [Google Analytics Help: Monitor events in DebugView](https://support.google.com/analytics/answer/7201382)
* [Google Analytics Help: Connect Google Ads to Google Analytics](https://support.google.com/analytics/answer/9379420)
* [Google Tag Manager Help: Updates to consent mode for EEA traffic](https://support.google.com/tagmanager/answer/13695607)
* [Google Analytics Help: Data retention](https://support.google.com/analytics/answer/7667196)
* [Google Analytics Help: Event collection limits](https://support.google.com/analytics/answer/9267744)

 ![Marie Müllerová](/_astro/marie-portret.CxDjTv2c_Z2nS1wq.webp)

[Marie Müllerová](/o-mne/)

Marketingu se věnuje přes šest let. Zaměřuje se na SEO a PPC reklamu v Google Ads a Seznam Sklik. K oboru se dostala v porovnávači cen Srovnáme, ve firmě Converso se vypracovala z asistentky na marketingovou specialistku a dodnes vede projekt Recenzer.cz. Za tu dobu spravovala přes 2 000 PPC kampaní, spolupracovala se 40+ affiliate partnery a stojí za více než 5 000 publikovanými články.

## Komentáře

Máte k článku dotaz nebo vlastní zkušenost? Napište mi a já vám ráda odpovím.

Načítám komentáře…

Přidat komentář

Jméno
  
E-mail

Komentář
  

Odeslat komentář

 

Doporučené

1. [1Konverzní optimalizace (CRO): úvod pro majitele webu](/blog/konverzni-optimalizace/)
2. [2Looker Studio: dashboardy zdarma](/blog/looker-studio/)
3. [3Marketingový mix 4P a 7P](/blog/marketingovy-mix/)