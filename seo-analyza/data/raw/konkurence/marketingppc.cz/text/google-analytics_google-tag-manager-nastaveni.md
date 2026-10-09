# URL: https://www.marketingppc.cz/google-analytics/google-tag-manager-nastaveni/

[Domů](https://www.marketingppc.cz/) » [Webová analytika](https://www.marketingppc.cz/category/google-analytics/) » Jak nastavit Google Tag Manager: kompletní průvodce

# Jak nastavit Google Tag Manager: kompletní průvodce

Autor: [Filip Hvízdal](https://www.marketingppc.cz/author/filip/)

![GTM, GA4 a Consent mode](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

## GTM, GA4 a Consent mode

Pomůžeme vám měřit to, co je důležité – a spolehlivě.

[Zjistit více](https://www.marketingppc.cz/sluzby/ga4/)

![nastavení google tag manager](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Aktualizováno: 12.07.2025

Prosíte svého IT technika o nasazení remarketingového kódu již několikátý týden? Máte na webu tolik značek, že už ani nevíte, kde začínají a kde končí? Nebo máte více webů a ničí vás kontrolovat každý zvlášť?

Všechny **tyto požadavky mají jednu odpověď: Google Tag Manager**, česky Správce značek Google (dále jen GTM)**.**

### V čem nám může GTM pomoci a jak si ho (zdarma) pořídit?

Toto je první ze tří článků o Google Tag Manageru, který popisuje základy. V dalších dílech se podíváme na složitější nastavení, jako je [měření cílů pro Google Analytics](https://www.marketingppc.cz/google-analytics/gtm-udalosti/) nebo [nasazení Facebook Pixelu prostřednictvím GTM](https://www.marketingppc.cz/google-analytics/facebook-pixel-gtm/).

Na konci tohoto článku vám zároveň prozradím, jak snadno zjistit, jestli vaše Google kódy fungují jak mají.

* [Co je Google Tag Manager (Správce značek Google)](#Co_je_Google_Tag_Manager_Spravce_znacek_Google)
* [Proč Google Tag Manager používat](#Proc_Google_Tag_Manager_pouzivat)
* [Na co si dát u GTM pozor](#Na_co_si_dat_u_GTM_pozor)
* [Jak s Google Tag Managerem začít](#Jak_s_Google_Tag_Managerem_zacit)
* [Vložení Google Analytics 4 pomocí GTM](#Vlozeni_Google_Analytics_4_pomoci_GTM)
* [Náhled a publikace GTM](#Nahled_a_publikace_GTM)
* [Google Tag Assistant](#Google_Tag_Assistant)

## Co je Google Tag Manager (Správce značek Google)

Google Tag Manager je **systém pro správu měřicích a dalších kódů**, GTM jim říká značky. Funguje pro správu značek na webových stránkách, AMP verzi webu i v mobilních aplikacích.

Na web umístíte pouze jeden kód – GTM. Všechny další kódy (pro GA4, remarketing, retargeting, FB pixel atp.) pak vkládáte prostřednictvím webového rozhraní GTM a většinou už není potřeba zasahovat do zdrojového kódu webu.

Pro měření hodnot, které se mění (typicky hodnota nákupu) je nezbytné [mít na webu datovou vrstvu](https://www.marketingppc.cz/ppc/datova-vrstva/). Datovou vrstvu zpravidla nasadí programátor jen jednou, zabere mu to pár hodin a jakýkoliv kód si může brát informace z datové vrstvy.

Celý postup značně **usnadňuje a zrychluje práci s kódy** (angl. tagy), protože z nasazení jsou (většinou) vynecháni webmasteři – kteří skoro nikdy nemají čas a stojí peníze.

## Proč Google Tag Manager používat

* **Úspora času**: GTM umožňuje vložení nových značek (kódů, tagů) během několika minut. O vložení kódů už není potřeba žádat webmastera.
* **Hledání chyb (debugging)**: Usnadňuje odhalení a opravu případných nefunkčních kódů před i po jejich nasazení na web.
* **Přehlednost**: Výrazně zlepšuje přehled o tom, které kódy web používá.
* **Pokročilejší měření**: Protože je od Google, nabízí řadu možností v oblasti Google Analytics a Google Ads.
* **Kódy třetích stran**: Vedle kódů společnosti Google umožňuje vkládat i kódy třetích stran (Facebook, Sklik) a vlastní skripty.
* **Knihovna šablon**: GTM má rozsáhlou knihovnu šablon, které vytvořili uživatelé, takže často najdete šablonu i pro méně používané kódy (např. pro Sklik).
* **Snazší implementace kódů**: Vložení a správa značek je v GTM rozhraní pro většinu uživatelů daleko snazší a méně hrozivá, než jejich vkládání přímo do kódu „živého“ webu.
* **Sdílení přístupu ke kódům**: Pokud je potřeba dát ke kódům přístup více lidem nebo agenturám, díky uložené historii změn je snadné vypátrat, kdo kdy provedl jakou změnu. Navíc umožňuje přiřadit uživatelům různé úrovně oprávnění (náhled, editace, publikace značek).
* **Rychlost načítání**: Zmenšení objemu html kódu na webu a asynchronní načítání kódů v GTM může mírně zlepšit rychlost načítání webu.

[![nastavení google analytics ga4](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/sluzby/ga4/)

###### Správné nastavení GA4 + GTM dá zabrat. Uděláme to za Vás.

[S čím umíme pomoci](https://www.marketingppc.cz/sluzby/ga4/)

## Na co si dát u GTM pozor

* GTM nemusí být vhodný pro instituce se specifickými nároky na zabezpečení (typicky banky). Data a měřicí kódy jsou totiž uchovány u třetí strany – Google.
* Některá rozšíření prohlížečů v základním nastavení GTM blokují, takže u části uživatelů se nespustí ani kódy v něm obsažené.
* Výjimečně některé kódy třetích stran přes GTM nefungují, je dobré si to předem ověřit u poskytovatele kódu.
* Kódy jsou zapeklitá věc. Přestože přes GTM je dokáže vložit i laik, občas vložený kód rozbije něco na webu a můžete to zjistit až za pár dnů. Většinou se nepříjemnostem dá snadno zabránit pomocí použití náhledu GTM.
* Někdy se bez pomoci programátora neobejdete ani s GTM, např. pokud je potřeba upravit datovou vrstvu nebo si nechat vytvořit javascript na míru.

*Související*

[![nastavení google analytics ga4](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/google-analytics/google-analytics-4/)

###### Google Analytics 4: kompletní průvodce nastavením a využitím funkcí

[přečíst článek…](https://www.marketingppc.cz/google-analytics/google-analytics-4/)

## Jak s Google Tag Managerem začít

Na stránce [tagmanager.google.com](https://tagmanager.google.com) si vytvořte účet *Správce značek Google*.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Po odsouhlasení podmínek získáte svůj GTM kód.

![instalace správce značek google ](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Kód je rozdělen na dvě části: část *<script>* se vkládá do záhlaví stránky *<head>* a část *<noscript>* do těla za značku *<body>*.

Jakmile je kód na webu, můžete do GTM přidat své kódy (značky).

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Jestli **přidáváte GTM na nový web**, bude to většinou jediný kód, který na web vložíte a všechny další značky už přidáte přes GTM.

Pokud jste **přidali GTM na starší web**, je nejlepší provést kontrolu stávajících kódů na webu a maximum z nich vložit přes GTM. V tom případě nezapomeňte stávající značky z webu odstranit. V žádném případě nechcete mít stejnou značku na webu dvakrát – jednou přímo v kódu webu a podruhé přes GTM (abyste např. v GA neměli zkreslené statistiky).

**Nejčastěji budete přes GTM řešit tyto značky**:

* Google Analytics 4 (gtag),
* Google Ads remarketing a měření konverzí,
* Sklik retargeting a měření konverzí,
* Facebook pixel.

**Pokud máte více webů**, můžete použít jeden GTM pro všechny weby nebo mít na každém webu jiný GTM kód. První varianta často usnadní práci, protože můžete většinu kódů snadno rozkopírovat, ale může být méně přehledná.

### Pro zvídavé: proč má kód dvě části a proč se má každá část umístit jinam?

Část *<script>* je zodpovědná za minimálně 98 % práce GTM. **Část *<noscript>* slouží jen jako záloha** pro případy, kdy má prohlížeč uživatele vypnutý JavaScript. Jelikož většina webů bez JavaScriptu vypadá hůř a spousta věcí na nich nefunguje, dá se bezpečně říct, že drtivá většina lidí nechává JavaScript zapnutý.

Ve skutečnosti zase tak moc nevadí, pokud část *<noscript>* na web vůbec nedáte; jednak přijdete o data jen u 0.2 % – 2 % uživatelů, za druhé řada funkcí GTM funguje jen se zapnutým JavaScriptem a nezachrání to ani *<noscript>*.

Část *<script>* může být teoreticky kdekoliv na webu (např. pokud do záhlaví kód vložit nemůžete). Proč je dobré jej umístit co nejvýše do části *<head>?* **Čím výš ve struktuře stránky kód umístíte, tím rychleji se bude načítat** a zvýší se pravděpodobnost, že se kódy v GTM obsažené zavčas aktivují.

Pokud byste jej dali třeba do zápatí a měli přes GTM vloženy Google Analytics 4 (GA4), pravděpodobně budete mít zkreslené statistiky směrem dolů, protože se GA4 kód nestačí vždy aktivovat.

Část *<noscript>* aktivuje iFrame, která není v *<head>* podporována, proto musí být dle pokynů v těle stránky *<body>*.

## Vložení Google Analytics 4 pomocí GTM

Protože se bude jednat o nejčastější kód na webu, podíváme se na nasazení [Google Analytics 4](https://www.marketingppc.cz/google-analytics/google-analytics-4/) prostřednictvím GTM. Jejich nasazení přes GTM je otázka maximálně pěti minut.

V GTM v levém menu vyberete položku *Značky* a kliknete na tlačítko *Nová*. Značku můžete pojmenovat Google Analyticss 4 nebo GA4.

Pokud plánujete přes GTM vkládat více značek, např. pro měření GA4 událostí, popřemýšlejte nad **srozumitelným systémem názvů značek**. Člověk do GTM chodí třeba jednou za půl roku a snadno zapomene, co tam vlastně před půlrokem vkládal.

Při výběru typu značky **zvolíte Značka Google**. V nabídce je i volba Google Analytics, přes kterou se dostanete na měření GA4 událostí (v dalším článku).

Do políčka ID měření vložíte své ID z GA4. ID najdete v nastavení GA4 pod *Administrátor – Datové streamy* po kliknutí na datový stream

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Pokud ale budete měřit i GA4 události, je praktičtější si ID z GA4 vložit jako proměnnou, abyste nemuseli při každé tvorbě GA4 události vkládat celé ID znovu.

### Vytvoření proměnné ID z GA4

Následující postup je vytvoření proměnné od nuly, můžete postupovat i tak, že při tvorbě Značky Google kliknete na ikonku v políčku ID značky a proměnnou vytvoříte tam.

V levém menu zvolte *Proměnné* a v rámečku *Proměnné definované uživatelem* vložte novou proměnnou typu *Konstanta*. Do pole *Hodnota* vložíte ID z GA4 a uložíte.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

Hlavně nezapomeňte **proměnnou výstižně pojmenovat**, např. *Proměnná GA4*. Při měření událostí nebo transakcí budete totiž přidávat více Google Analytics značek, tak abyste proměnnou snadno našli.

*Mohlo by vás zajímat…*

[![nejzajímavější ga4 reporty článek hero image](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/google-analytics/ga4-prehledy/)

##### 6 Google Analytics přehledů, které musíte znát

[Přejít na článek](https://www.marketingppc.cz/google-analytics/ga4-prehledy/)

### Dokončení GA4 značky

Jakmile tedy máte vloženo ID z GA4 nebo vytvořenou konstantu, stačí už jen zvolit, na kterých stránkách se bude kód spouštět. V kolonce *Spouštění* vyberete *All Pages* a značku uložíte.

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

## Náhled a publikace GTM

Posledním krokem je publikování upraveného GTM přes tlačítko *Odeslat* vpravo nahoře.

Občas si při práci s GTM lámu hlavu nad tím, proč mi nově vložené kódy nefungují, abych posléze zjistil, že jsem je zapomněl odeslat. Do té doby jsou totiž jen v GTM, nikoliv na webu.

Ještě **před odesláním je moudré provést náhled**, zejména pokud jste prováděli složitější změny nebo experimentujete s něčím, kde si nejste jisti výsledkem. Tlačítko *Náhled* najdete také vpravo nahoře.

## Google Tag Assistant

Kliknutím na tlačítko pro náhled se vám otevře Tag Assistant, díky kterému můžete rychle a snadno zkontrolovat funkčnost kódů na webu, podívat se, které události odesílají, popř. [zkontrolovat consent mode](https://www.marketingppc.cz/google-analytics/consent-mode-v2/).

Výhoda náhledu je ta, že dokud v GTM nekliknete na tlačítko *Odeslat*, vidíte změny v kódech jen vy v náhledu. Ostatní uživatelé zatím web vidí ve stavu před změnami, takže pokud při pokusech s kódy něco dočasně polámete, nikdo se o tom nemusí dozvědět.

Tag Assistant **můžete použít i bez GTM** (ať už že ho nemáte, nebo nejste přihlášeni). V tom případě se vám zobrazí pouze aktivita kódů od Google (nejčastěji gtag pro GA4 nebo Google Ads).

### Jak použít Google Tag Assistant

V rozhraní vložíte doménu svého webu a kliknete na *Connect*. V dalším okně se vám otevře náhled vašeho webu, kde můžete testovat co potřebujete a v okně Tag Assistant uvidíte, které značky se na jednotlivých stránkách spouštějí a další informace. Viz obrázek a informace níže:

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)

1. Výběr jednotlivých Google kódů
2. Posloupnost jednotlivých kroků, jak se kódy spouští. Kliknutí na konkrétní krok poskytne další informace.
3. Přehled značek, které se spustily nebo nespustily. Pokud je vlevo vybráno Summary, vidíte všechny značky na dané stránce. Můžete zvolit i konkrétní krok a podívat se, co se v něm spustilo.
4. Jednotlivé proměnné (je potřeba mít vybrán konkrétní krok z levého menu).
5. Obsah datové vrstvy.
6. Souhlasy s cookies (consent mode).
7. Pokud se nespustil některý kód, jehož spuštění chcete, při kliknutí na show a na konkrétní kód zjistíte, co je špatně.

[![nastavení google analytics ga4](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)](https://www.marketingppc.cz/sluzby/ga4/)

###### Správné nastavení GA4 + GTM dá zabrat. Uděláme to za Vás.

[S čím umíme pomoci](https://www.marketingppc.cz/sluzby/ga4/)

Článek napsal/a Filip Hvízdal

![](data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=)Filip se on-line marketingu začal věnovat v roce 2012, kdy vyzkoušel své první Google Ads kampaně za vlastní peníze. V současné době aktivně spravuje kampaně našich VIP klientů s měsíční útratou přes 4.300.000 Kč.  
  
Máte k článku dotaz nebo připomínku? Napište mi na [LinkedIn](https://www.linkedin.com/in/hvizdal/)

Štítky:[Google Tag Manager](https://www.marketingppc.cz/tag/google-tag-manager/ "Google Tag Manager")[Nejčtenější články](https://www.marketingppc.cz/tag/nejctenejsi/ "Nejčtenější články")

[PředchozíCookies a cookie lišta z pohledu marketingu](https://www.marketingppc.cz/google-analytics/cookies-cookie-lista/)

[DalšíTone of Voice: Jak vybrat ten správný tón pro vaši značku](https://www.marketingppc.cz/marketing/tone-voice/)