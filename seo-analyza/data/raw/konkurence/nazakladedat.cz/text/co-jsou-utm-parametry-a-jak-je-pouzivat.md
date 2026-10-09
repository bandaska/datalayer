# URL: https://nazakladedat.cz/co-jsou-utm-parametry-a-jak-je-pouzivat/

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

# Co jsou UTM parametry a jak je používat

16. 1. 2026

 

**UTM v marketingu** neznamenají [Univerzální transverzální Mercatorův systém souřadnic](https://cs.wikipedia.org/wiki/UTM), ale způsob, jak **označovat kampaně** tak, aby je šlo v nástroji jako [Google Analytics 4](https://nazakladedat.cz/co-jsou-google-analytics-4/) vyhodnotit.

1. [Co jsou UTM parametry](#co_jsou_utm)
2. [Jak UTM použít](#jak_utm_pouzit)
3. [Kde se s UTM parametry setkáš](#kde_se_setkas)
4. [Konvence při používání UTM parametrů](#konvence)
5. [Automatické značkování](#automaticke_znackovani)
6. [Campaign URL Builder](#campaign_url_builder)
7. [Na co si dát pozor](#na_co_si_dat_pozor)

## Co jsou UTM parametry

Jde o **sérii parametrů,** které připojíš k cílové adrese odkazu. Díky nim pak Google Analytics zjistí další informace o tom, přes jaký odkaz člověk na tvůj web přišel.

Nejčastěji se používají parametry:

* **utm\_source** (zdroj)
* **utm\_medium** (médium)
* **utm\_campaign** (kampaň)

Přičemž utm\_source a utm\_medium jsou **povinné**.

Existují i další parametry a to **utm\_content** a **utm\_term**, **utm\_source\_platform**, **utm\_creative\_format**, **utm\_marketing\_tactic** či **utm\_id**. Jejich použití je ale už velmi specifické a většinou si vystačíš se třemi výše zmíněnými.

## Jak UTM použít

Řekněme, že chceš udělat **příspěvek na Facebooku** a odkázat na tento článek. A protože kdybys v příspěvku použil odkaz jen *https://nazakladedat.cz/co-jsou-utm-parametry-a-jak-je-pouzivat/*, viděl bych to pak ve statistikách jako prosté návštěvy z Facebooku.

Ty ale víš, že zdroje návštěvnosti na tomto blogu pravidelně kontroluji a tak mi **chceš dát vědět,** že lidé přivedení díky tvému příspěvku jsou od tebe.

A k tomu bude stačit k odkazu **přidat UTM parametry.**

Do příspěvku tak neuvedeš odkaz *https://nazakladedat.cz/co-jsou-utm-parametry-a-jak-je-pouzivat/*, ale přidáš k němu následující parametry s hodnotami.

* utm\_source=facebook
* utm\_medium=social
* utm\_campaign=prispevek\_o\_utm

Takže výsledná URL bude vypadat:

*https://nazakladedat.cz/co-jsou-utm-parametry-a-jak-je-pouzivat/?utm\_source=facebook&utm\_medium=social&utm\_campaign=prispevek\_o\_utm*

Když pak někdo proklikne odkaz s UTM parametry, ve statistikách Google Analytics 4 to uvidím jako návštěvu ze zdroje ***facebook*** a média ***social***. Díky tomu budu hned vědět od koho odkaz je.

![](https://nazakladedat.cz/wp-content/uploads/2023/12/Navsteva-oznacena-UTM-parametry-v-GA4.png)

Návštěva označená UTM parametry

## Kde se s UTM parametry setkáš

Všude kde **odkazuješ na svůj web** a chceš tento odkaz ve statistikách identifikovat. Typicky jde o PR články, e-maily, příspěvky na sociálních sítích a taky u všech reklam. V reklamních systémech většinou pro jejich nastavení využiješ [automatické značkování](http://automaticke_znackovani).

## Konvence při používání UTM parametrů

Aby se s UTM parametry dobře pracovalo, dodržuj následující pravidla.

* V **utm\_source** popisuj z jaké stránky / aplikace / nástroje odkaz vede. Příkladem může být *facebook, newsletter, internal, podpis\_v\_emailu, ecomail.*
* V **utm\_medium** označ druh odkazujícího zdroje. Dle něj se daná návštěva zatřídí i do [seskupení kanálů](https://nazakladedat.cz/co-znamenaji-kanaly-navstevnosti-v-google-analytics/). Nepsané konvence jsou
  + *cpc* pro placené PPC systémy,
  + *display* pro bannerové reklamy,
  + *email* pro emailové kampaně,
  + *affiliate* pro sponzorované odkazy,
  + *banner* pro bannery na jiných webech,
  + *social* pro sociální sítě,
  + *rtb* pro real time bidding systémy,
  + *link* pro placené zpětné odkazy, PR články,
  + *product* pro zbožové vyhledávače.
* V **utm\_campaign** blíže charakterizuj konkrétní odkaz z daného zdroje a média. Např. *2026\_04\_19\_jarni\_newsletter, banner\_kotatko\_300x600px*.

Dále pro všechny parametry platí:

* nepoužívej **diakritiku a mezery**,
* **kratší hodnoty** jsou lepší hodnoty,
* neuváděj **osobní údaje**,
* mysli na to, že parametry budou po prokliknutí **vidět v adresním řádku** prohlížeče,
* používej jen **malá písmena**,
* **sjednoť si pojmenování** napříč systémy.

## Automatické značkování

Možná se ptáš, zda opravdu musíš vyplňovat UTM parametry u **všech svých desítek tisíc reklam** v [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/) nebo [Skliku](https://nazakladedat.cz/co-je-sklik/).

Neboj, nemusíš. Většina inzertních systémů nabízí funkci **automatického značkování** (autotaggingu) a tak UTM parametry přidají k cílové URL adrese automaticky.

V **Google Ads** najdeš nastavení automatického značkování ve *Všechny kampaně -> Nastavení -> Nastavení účtu*. V základu je automatické značkování povolené.

![](https://nazakladedat.cz/wp-content/uploads/2023/12/Automaticke-znackovani-kampani-v-Google-Ads-1024x164.jpg)

Automatické značkování kampaní v Google Ads

V **[Skliku](https://nazakladedat.cz/co-je-sklik/)** se k automatickému značkování dostaneš přes *Nástroje -> Automatické tagování URL* a musíš ho ručně zapnout.

[![Automatické značkování kampaní v Skliku](https://nazakladedat.cz/wp-content/uploads/2019/02/Automatické-značkování-kampaní-vSkliku.jpg)](https://nazakladedat.cz/wp-content/uploads/2019/02/Automatické-značkování-kampaní-vSkliku.jpg)

Automatické značkování kampaní v Skliku

V **Skliku** je navíc potřeba udělat další úpravy, aby se ti do [Google](https://nazakladedat.cz/co-jsou-google-analytics/) [A](https://nazakladedat.cz/co-jsou-google-analytics-4/)[nalytics](https://nazakladedat.cz/co-jsou-google-analytics/) propisovala i **reklamní sestava.** Podívej se na článek o [přenosu reklamní sestavy z Skliku do Google Analytics](https://nazakladedat.cz/jak-prenest-nazev-sestavy-z-skliku-do-google-analytics/).

Pokud už v Skliku máš v cílových URL reklam a nebo u odkazů ve feedu produktů pro zboží.cz UTM parametry, tak je nastavení v automatickém tagování **přepíše**.

V **Microsoft Ads** najdeš možnost automatického značkování v All campaigns > Settings > Account level options kde zaškrtneš Add UTM tags to my destination URLs.

![](https://nazakladedat.cz/wp-content/uploads/2024/01/Automaticke-znackovani-v-Microsoft-Ads.jpg)

Automatické značkování v Microsoft Ads

I **Facebook** umí automatické značkování, byť ne tak jednodušše. U každé reklamy musíš jednotlivé UTM parametry vyplnit sám. Využít ale můžeš dynamická pole jako je {{campaign.name}}. V takovém případě pak Facebook doplní skutečný název kampaně sám. Ale funguje to trochu zrádně, jak popisuje žlutá hláška na následujícím obrázku.

![](https://nazakladedat.cz/wp-content/uploads/2024/02/Automaticke-znackovani-ve-Facebook-reklame-875x1024.jpg)

Automatické značkování ve Facebook reklamě

## Campaign URL Builder

A když inzertní systém automatické značkování nemá? Pak nezbývá než ke všem odkazům přidat **UTM parametry ručně.**

I tuto práci si ale můžeš usnadnit.

A to využitím nástroje [**URL Builder**](https://ga-dev-tools.appspot.com/campaign-url-builder/), kam jen vyplníš cílovou URL, zdroj, médium a kampaň a on již celou výslednou URL i s parametry poskládá sám.

Přidanou hodnotu má ještě v tom, že si poradí s **diakritikou** v parametrech nebo s tím, aby ve výsledné adrese nebyly **dva otazníky**.

[![Campaign URL Builder](https://nazakladedat.cz/wp-content/uploads/2019/02/Campaign-URL-Builder-707x1024.jpg)](https://nazakladedat.cz/wp-content/uploads/2019/02/Campaign-URL-Builder.jpg)

Campaign URL Builder

## Na co si u UTM dát pozor

**Nejčastější chyba** v používání UTM parametrů je jejich **nepoužívání**.

Pokud v **e-mailovém newsletteru** nenastavíš UTM parametry a někdo odkaz v Outlooku proklikne, označí se ti taková návštěva v Google Analytics jako **[přímá](https://nazakladedat.cz/co-znamenaji-kanaly-navstevnosti-v-google-analytics/)**. A vůbec nezjistíš, že byla z e-mailu.

Proto označuj, co se dá. Zároveň buď ale důsledný a **konzistentní**, ať odkaz z Facebooku není jednou se zdrojem *fb*, podruhé *facebook* a potřetí *Jančin\_facebook*.

Google Analytics rozlišují i **malá a velká písmena**, takže email a Email se ve statistikách ukáží jako dvě rozdílná media. To vše **znepřehlední** vyhodnocení statistik.

UTM jsou ti co platná jen u **odkazů na tvůj web**, na kterém máš Google Analytics. Pokud UTMka přidáš například k odkazu na stránku na Facebooku nebo Youtube kanál, statistiky proklikovosti nezměříš.

A v neposlední řadě. UTM parametry slouží ke značení odkazů vedoucích na tvůj web. Nikdy je nepoužívej k označení **odkazů v rámci webu**! Povede to ke zničení některých statistik v Google Analytics.

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