# URL: https://nazakladedat.cz/checklist-spravneho-nastaveni-ga4/

Close

* [Newsletter](https://nazakladedat.cz/newsletter/)
* [GTM šablony](https://nazakladedat.cz/gtm-sablony/)
* [Rozcestník](https://nazakladedat.cz/rozcestnik/)
* [Kontakt](https://nazakladedat.cz/kontakt/)

##### Newsletter

[Přihlásit se k newsletteru](/newsletter/)
  
  

Přihlas se k odběru newsletteru. Jednou za čas ti pošlu odkaz na nový článek.

Vyhledávání



##### Nejnovější příspěvky

* [Co vše mám kontrolovat při redesignu webu z pohledu PPC reklam](https://nazakladedat.cz/co-vse-kontrolovat-pri-redesignu-webu-z-pohledu-ppc-reklam/)
* [Co jsou symboly značky](https://nazakladedat.cz/co-jsou-symboly-znacky/)
* [Co má obsahovat stránka o dopravě na e-shopu](https://nazakladedat.cz/co-ma-obsahovat-stranka-o-doprave-na-e-shopu/)
* [Co je Meta CAPI a kdy se vyplatí](https://nazakladedat.cz/co-je-meta-capi-a-kdy-se-vyplati/)
* [Jak přidat přístup k e-shopu v Mergadu](https://nazakladedat.cz/jak-pridat-uzivatele-do-mergada/)

### [nazakladedat.cz](https://nazakladedat.cz)

Návody pro PPC specialisty

* [Newsletter](https://nazakladedat.cz/newsletter/)
* [GTM šablony](https://nazakladedat.cz/gtm-sablony/)
* [Rozcestník](https://nazakladedat.cz/rozcestnik/)
* [Kontakt](https://nazakladedat.cz/kontakt/)

# Checklist správného nastavení GA4

17. 8. 2024

 

Chceš zkontrolovat, jestli máš na webu **[Google Analytics 4](https://nazakladedat.cz/co-jsou-google-analytics-4/)** **správně nastavené** a že data v nich jsou v pořádku? Tak přesně v tom ti pomůže tento checklist.

V checklistu popisuji, co kontrolovat a jak. Nerozebírám už ale do podrobna, **jaký je žádaný stav** či co v případě **problému udělat**. To se totiž liší web od webu, byznys od byznysu.

> Pokud by ti checklist přišel moc složitý, ozvi se mi. Kontrolu s jeho pomocí nabízím jako [službu](https://www.rajtmajer.cz/sluzby/).
>
> [Chci zkontrolovat GA4 od Františka](https://www.rajtmajer.cz/audit-google-analytics/)  
>   
>
> V ní zkontroluji tvé Analytics a co půjde, rovnou opravím. U zbylých problémů poradím, jak s nimi naložit.

A teď už k samotnému checklistu. Nejprve zkontrolujeme **implementaci**, pak **nastavení** a na závěr **naměřená data**.

## Kontrola implementace

Ze všeho nejdříve zkontroluj, zda jsou [GA4](https://nazakladedat.cz/co-jsou-google-analytics-4/) na webu nasazené správně.

### Jsou GA4 na webu vůbec nasazené?

Podívej se **do zdrojového kódu**, zda v něm vidíš měřící kód GA4 nebo [GTM](https://nazakladedat.cz/co-je-google-tag-manager/). Pokud je tam jen kód GTM, zkontroluj nastavení značky v něm.

### Odchází hity v pořádku?

Např. s pomocí Chrome rozšíření [WASP.inspector](https://chrome.google.com/webstore/detail/waspinspector-analytics-s/niaoghengfohplclhbjnjheodgkejpih) zkontroluj podobu **odchozích hitů**. Vidíš mezi nimi standardní události s vhodnými parametry? Není tam duplicitní měření?

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Ukazka-podoby-hitu-ve-WASP.inspector-1024x798.jpg)

Ukázka podoby hitu ve WASP.inspector

### Respektuje měření cookies lištu?

Před udělením souhlasu v cookies liště se nesmí založit \_ga cookie. Samotné GA4 ale měřit mohou v tzv. [cookiless režimu](https://nazakladedat.cz/cookieless-mereni-ga4/). Zkontroluj, zda to platí a pokud je nastaven [Google Consent Mode](https://support.google.com/analytics/answer/9976101?hl=cs), že se správně vyplňují parametry gcs.

Pro kontrolu celkového chování cookies lišty ti poslouží návod [Jak zkontrolovat fungování cookies lišty z pohledu analytiky](https://nazakladedat.cz/jak-zkontrolovat-cookies-listu/).

### Je měření nasazeno na všech stránkách webu?

Projdi všechny **typové stránky webu** (homepage, kategorie, detail produktu, blogový příspěvek, košík, kontaktní stránka…), zda na nich měření nechybí.

### Vidíš svou návštěvu v přehledu v reálném čase?

Doplňkově ještě zkontroluj, zda své procházení webu vidíš **v přehledu *v reálném čase* v GA4**. Pokud se nevidíš, zkontroluj, zda je odsouhlasná cookies lišta nebo není vyloučena tvá IP adresa filtrem.

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Prehled-v-realnem-case.jpg)

Přehled v reálném čase

## Revize nastavení

Nyní se přesuneme do nastavení GA4. V rozhraní klikni vlevo dole na *Administrátor*.

### Měna a časové pásmou jsou správně?

V druhém sloupci vlevo vyber *Nastavení služby* *-> Služba -> Podrobnosti o službě*. Jsou **časové pásmo a měna** vybrány vhodně?

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Nastaveni-meny-a-casoveho-pasma.jpg)

Nastavení měny a časového pásma

### Zpracovávají se signály souhlasu správně?

Běž do *Nastavení služby -> Shromažďování a úprava dat -> Datové streamy* a tam klikni na název tvého datového streamu.

![](https://nazakladedat.cz/wp-content/uploads/2024/08/Vyber-datoveho-streamu-1024x659.jpg)

Výběr datového streamu

Najdeš tam sekci *Nastavení souhlasu* a u ní po rozbalení uvidíš dvě zelené fajfky.

![](https://nazakladedat.cz/wp-content/uploads/2024/08/Diagnostika-signalu-souhlasu.jpg)

Diagnostika signálů souhlasu

### Je aktivní vylepšené měření?

U *Vylepšeného měření* na stejné stránce klikni na ozubené kolečko vpravo. Tam zkontroluj, že všechna vhodná vylepšená měření jsou **aktivovaná**.

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Nastaveni-vylepseneho-mereni-1024x220.jpg)

Nastavení vylepšeného měření

### Modifikují a vytvářejí se nějaké události?

V nastavení datového streamu ještě proklikej možnosti *Modifikace událostí* a *Vytvořit vlastní události*. V ideálním případě by tam **nemělo nic být**. Pokud tam něco najdeš, zvaž, jestli by nebylo lepší to přesunout do [Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/).

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Modifikace-a-vytvareni-udalosti.jpg)

Modifikace a vytváření událostí

### Je vyloučena interní návštěvnost?

Dále v nastavení datového streamu klikni na *Konfigurace nastavení značky.*

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Konfigurace-nastaveni-znacky-1024x185.jpg)

Konfigurace nastavení značky

A následně na *Definování interní návštěvnosti*. Tato možnost se ukáže až po kliknutí na tlačítko dole *Zobrazit více.*

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Definovani-interni-navstevnosti.jpg)

Definování interní návštěvnosti

Zde zkontroluj, že je nastavené pravidlo pro vyloučení všech **relevantních interních IP adres.**

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Vylouceni-interni-IP-adresy-v-GA4.jpg)

Vyloučení interní IP adresy v GA4

### Je nastavení návštěvy standardní?

V *Konfiguraci nastavení značky* ještě klikni na *Úprava časového limitu návštěvy*.

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Uprava-casoveho-limitu-navstevy.jpg)

Úprava časového limitu návštěvy

Tam ověř, že *časový limit relace* je 30 minut a *časovač pro relace se zapojením* je 10 sekund. Pokud tam jsou jiné hodnoty, nemusí to být nutně špatně, ale je to **nestandardní**.

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Konfigurace-limitu-relace-1.jpg)

Konfigurace limitů relace

### Jsou vybrány klíčové události?

Zpět v hlavní nabídce *Administrátor* klikni *Zobrazení dat ->* *Události* a podívej se, zda jsou všechny vhodné události označeny šoupátkem jako **klíčové.** Jako klíčové události by měly být označeny události měřící **hlavní akce na webu.**

![](https://nazakladedat.cz/wp-content/uploads/2024/08/Oznaceni-udalosti-za-klicove-1024x301.jpg)

Označená událostí za konverzi

### Jaká je metoda počítání konverzí?

V menu přejdi na *Hlavní události*. U jednotlivých klíčových událostí klikni na tři tečky na konci řádku a vyber ***Změnit metodu počítání*.**

Tam ověř, zda je vybráno *Jednou za událost*. Pokud je vybráno *Jednou za relaci*, tak to není špatně. Ovšem je to nestandardní nastavení s dopadem na vyhodnocování konverzí.

![](https://nazakladedat.cz/wp-content/uploads/2024/08/Metoda-pocitani.jpg)

Metoda počítání

### Jsou aktivované Google Signals?

V *Nastavení služby -> Shromažďování a úprava dat -> Shromažďování dat* ověř, zda jsou aktivované **Google Signals**. Zda je mít nebo nemít aktivované je složitější otázka, ale pokud o tom nic nevíš, bude pro tebe přínosnější je zapnout.

![](https://nazakladedat.cz/wp-content/uploads/2024/08/Nastaveni-Google-Signals.jpg)

Nastavení Google Signals

### Je retence dat 14 měsíců?

Hned o dvě položky v menu níže v *Uchovávání dat* zkontroluj, že je vybráno **14 měsíců**. Pokud tam jsou jen dva měsíce, přepni se na 14 a ulož.

![](https://nazakladedat.cz/wp-content/uploads/2024/08/Retence-dat-v-GA4.jpg)

Retence dat v GA4

### Je aktivní filtr na vyloučení interních IP?

Pokud máš vyplněné IP adresy pro vylučování **interní návštěvnosti**, viz pár bodů výše, tak je potřeba jejich vylučování ještě aktivovat.

V *Nastavení služby -> Shromažďování a úprava dat -> Filtry* *dat* tak zkontroluj, že u filtru *Internal Traffic* je stav ***Aktivní***. Pokud ne, aktivuj jej přes tři tečky vpravo.

![](https://nazakladedat.cz/wp-content/uploads/2024/08/Filtry-dat-v-GA4.jpg)

Filtry dat v GA4

### Je vyloučena návštěvnost z DEVu?

Ověř, že je ze statistik vyloučena návštěvnost z vývojářského prostředí. Nejčastěji to bývá řešené už v [GTM](https://nazakladedat.cz/co-je-google-tag-manager/).

### Jsou GA4 propojené s Google Ads?

Pokud na web vede reklama z **[Google Ads](https://nazakladedat.cz/co-jsou-google-ads/)**, je více než vhodné propojit GA4 a Google Ads. Propojení zkontroluješ v podsekci *Propojení služeb*. Pokud tam žádné propojení ještě není, postupuj dle návodu [Jak propojit GA4 a Google Ads](https://nazakladedat.cz/jak-propojit-ga4-a-google-ads/).

![](https://nazakladedat.cz/wp-content/uploads/2024/08/Propojeni-GA4-a-Google-Ads-1024x679.jpg)

Propojení GA4 a Google Ads

### Exportují se data do BigQuery?

V některých případech je vhodné si surová GA4 data odlévat do **[Google BigQuery](https://nazakladedat.cz/co-je-bigquery/)**. V P*ropojení se službou BigQuery* zkontroluj, zda je export dat aktivní. A pokud není a měl by být, nastav jej podle návodu [Jak nastavit export GA4 dat do BigQuery](https://nazakladedat.cz/jak-nastavit-export-ga4-dat-do-bigquery/).

![](https://nazakladedat.cz/wp-content/uploads/2024/08/Propojeni-GA4-a-BigQuery-1024x760.jpg)

Propojení GA4 a BigQuery

## Ověření naměřených dat

A nyní se ještě podíváme na již naměřená data.

### Měří se návštěvnost jen na doméně webu?

Jdi do přehledu *Zapojení -> Události*. Do vyhledávacího pole nad tabulkou napiš *page\_view*.

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Vyhledani-udalosti-page_view-1024x591.jpg)

Vyhledání události page\_view

Přes plusko u názvu sloupce *Název události* pak přidej sekundární dimenzi *Doména*. Tím ověříš, zda se události *page\_view* měří **jen na doméně tvého webu**. Pokud tam vidíš i nějaké jiné domény, tak to může být někdy žádoucí, ale většinou je to chyba.

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Kontrola-domen.jpg)

Kontrola domén

Dost často se mezi doménami objevují **vývojové verze webu** jako *localhost*, nebo např. *dev.domena.cz*, *vyvoj.domena.cz* či tak. Návštěvnost generovanou programátorem při vývoji webu ve statistikách většinou nechceme a tak je vhodné ji vyloučit filtrem.

### Měří se interní vyhledávání?

Pokud má tvůj web **interní vyhledávání**, je záhodno si jej měřit. Že měření vyhledávání funguje ověříš v *Zapojení -> Události*. Tam vyhledej událost *view\_search\_results*. Pokud tam je, klikni na ní. Na další stránce pak najdi kartu s parametrem *search\_term* a podívej se, že v ní jsou nějaké hodnoty.

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Karta-s-vyrazy-vyhledavanymi-na-webu.jpg)

Karta s výrazy vyhledávanými na webu

Pokud měření nefunguje a chceš jej nastavit, podívej se do návodu na [Založení GA4](https://nazakladedat.cz/jak-zalozit-google-analytics-4/).

### Nejsou ve zdrojích návštěvnosti platební brány?

Podívej se do přehledu *Akvizice ->Akvizice návštěvnosti* a změň primární dimenzi na *Relace – Zdroj / médium*. Není mezi položkami nějaká **platební brána**? V jejím odhalení a případném vyloučení ti poslouží návod [Jak vyloučit platební brány v Google Analytics](https://nazakladedat.cz/vylouceni-platebnich-bran/).

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Navstevy-z-platebni-brany-v-GA4-1-1024x545.jpg)

Návštěvy z platební brány v GA4

### Jsou zdroje návštěvnosti správně označené?

V tom samém přehledu zkontroluj všechny zdroj / médium, zda v nich nejsou nesmysly. A pokud jo, nejspíše půjde o problém s [UTM parametry](https://nazakladedat.cz/co-jsou-utm-parametry-a-jak-je-pouzivat/).

### Měří se objednávky i s produkty?

Pokud máš e-shop, tak jdi do přehledu *Zpeněžení -> Přehled.* Vidíš tam naměřené tržby? Odpovídají cca reálným tržbám e-shopu?

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Kontrola-mereni-objednavek-1024x566.jpg)

Kontrola měření objednávek

V *Zpeněžení -> Nákupy elektronického obchodu* zkontroluj, že se měří **údaje o jednotlivých produktech.** Čili že vidíš v tabulce čísla ve sloupcích pro zobrazení, přidání do košíku, nákup a i tržby.

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Udaje-o-produktech-1024x254.jpg)

Údaje o produktech

### Odpovídají tržby po produktech celkovým tržbám?

V přehledu *Zpeněžení -> Nákupy elektronického obchodu* se podívej na hodnotu ve sloupci *Tržba z položky*. Odpovídá celková hodnota tomu, co vidíš ve *Zpeněžení -> Přehled* u celkových tržeb? Pokud ne, nejspíše někde bude problém.

![](https://nazakladedat.cz/wp-content/uploads/2023/08/Celkove-trzby-e-shopu.jpg)

Celkové tržby e-shopu

### Jsou tržby bez DPH?

Ověř, že třžby měřené po objednávkách i po položkách objednávky **jsou bez DPH**. A tržby u objednávky neobsahují částku za dopravu.

### Měří se slevové kódy?

Ve vlastním průzkumu ověř, že se u objednávky měří slevové kódy, pokud je na e-shopu máš.

### Neobjevují se abnormální objednávky?

Seřaď si objednávky podle tržeb od nejvyšší a pak od nejnižší. Nejsou tam podezřelé hodnoty?

## Závěr

Po úspěšném projití tohoto checklistu máš jistotu, že GA4 **máš nastavené téměř správně.** Píši téměř, protože zcela správně nastavit GA4 ještě obnáší pochopit potřeby byznysu a toho, kdo se na data bude koukat. A to je pro každý web jiné, takže to úplně nejde zachytit do obecného návodu.

Každopádně pokud si s nějakým krokem nevíš rady, [dej vědět a rád pomohu](https://nazakladedat.cz/kontakt/).

Vyhledávání

##### Newsletter

[Přihlásit se k newsletteru](/newsletter/)
  
  

Přihlas se k odběru newsletteru. Jednou za čas ti pošlu odkaz na nový článek.

[![František Rajtmajer](https://nazakladedat.cz/wp-content/uploads/2019/06/frantisek_profilovka_svetla-300x279.jpg)](https://nazakladedat.cz/wp-content/uploads/2019/06/frantisek_profilovka_svetla.jpg)

Jsem František Rajtmajer a na volné noze pomáhám klientům jako [PPC specialista s přesahem do webové analytiky](https://www.rajtmajer.cz/).

Pokud máš nápad na vylepšení tohoto webu nebo ti tu něco chybí, [ozvi se mi](https://nazakladedat.cz/kontakt/).

[Zpět nahoru](#top)

Návody pro tebe tvoří František Rajtmajer. Jako [PPC specialista s přesahem do webové analytiky](https://www.rajtmajer.cz/) nastavuje měření, vyhodnocuje data, řídí PPC kampaně a pomáhám podnikatelům s rozhodováním na základě dat.   
[Zásady ochrany osobních údajů](/zasady-ochrany-osobnich-udaju/)  
[Používání cookies](/pouzivani-cookies/)

Search: