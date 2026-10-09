# URL: https://nazakladedat.cz/jak-merit-konverze-v-google-ads/

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

# Jak měřit konverze v Google Ads

21. 3. 2024

 

Pro každou kampaň je dobré měřit její přínos a pro **Google Ads kampaně** to platí také. Vyhodnocení pak můžeš dělat buď v analytických nástrojích jako jsou [Google Analytics 4](https://nazakladedat.cz/co-jsou-google-analytics-4/), nebo přímo v [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/). Oboje má své [výhody i nevýhody](https://nazakladedat.cz/rozdil-v-mereni-konverzi-google-ads-a-importem-z-google-analytics/) a tak je lepší měřit konverze raději v obou systémech.

Navíc v Google Ads dnes **měření konverzí** neslouží jen k vyhodnocování kampaní, ale též jej používají automatické bidovací strategie.

A proto je nesmírně důležité, abys konverze v Google Ads měřil a **měřil je správně.** Úplně stejné je to i [se zachytáváním konverzí v Skliku](https://nazakladedat.cz/jak-merit-konverze-v-skliku/).

## Postup pro nastavení konverzí v Google Ads

Celý postup rozděluji na čtyři kroky. U jednoduchého webíku zabere pár minut, u složitého e-shopu klidně hodiny. Skládá se z kroků:

1. [Stanovení, co měřit](#co_merit)
2. [Založení konverze v Ads](#zalozeni_konverze)
3. [Nastavení konverze na webu s GTM](#nastaveni_konverze)
4. [Kontrola měření](#kontrola)

### 1) Stanovení, co měřit

Ze všeho nejdříve si ujasni, co má být konverzí. To se odvíjí od cílů kampaně. U e-shopu to bude většinou odeslaná objednávka, ale klidně to může být i vyplněná registrace či [přihlášení se k newsletteru](https://nazakladedat.cz/newsletter/).

Pro účely tohoto článku budeme dále nastavovat konverzi pro **objednávku na e-shopu.**

### 2) Založení konverze v Ads

Nyní přejdi do svého [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/) účtu. V levé nabídce vyber **Cíle** a u Konverze klikni na **Přehled**.

![](https://nazakladedat.cz/wp-content/uploads/2024/06/Konverze-v-menu-Google-Ads.jpg)

Konverze v menu Google Ads

Pro přidání nové konverze klikni namodré tlačítko **+Nová konverzní akce.**

![](https://nazakladedat.cz/wp-content/uploads/2024/06/Tlacitko-pro-pridani-konverzni-akce.jpg)

Tlačítko pro přidání konverzní akce

A vyber typ konverze. V našem případě **Webové stránky.**

![Výběr typu konverze](https://nazakladedat.cz/wp-content/uploads/2021/01/Výběr-typu-konverze-1024x314.jpg)

Výběr typu konverze

Systém po tobě bude chtít zadat **doménu webu**, aby zjistil, co se tam již měří a zda to nejde využít. Vyplň ji, i když většinou to k ničemu není.

![](https://nazakladedat.cz/wp-content/uploads/2024/06/Vyplneni-domeny-pro-mereni-konverzi.jpg)

Vyplnění domény pro měření konverzí

Protože chceme mít vše pod kontrolou, tak si ve spodní části vyber vytvoření konverzní akce **ručně**.

![](https://nazakladedat.cz/wp-content/uploads/2024/06/Rucni-vytvoreni-konverze.jpg)

Ruční vytvoření konverze

#### Kategorie a název konverze

Otevře se delší formulář, ve kterém postupně nastavíš **kategorii a název konverze.**

![Kategorie a název konverze](https://nazakladedat.cz/wp-content/uploads/2021/01/Kategorie-a-název-konverze-1.jpg)

Kategorie a název konverze

#### Hodnota konverze

U hodnoty vyber jednu z možností. Protože chceme u objednávek z e-shopu vědět i za kolik byly, vyber možnost **Použít u jednotlivých konverzí různé hodnoty**. Díky tomu se hodnota konverze bude brát z údajů v měřícím kódu. V této variantě ještě vyplňujeme výchozí hodnotu pro případ, že by z měřícího kódu hodnota nedorazila.

![](https://nazakladedat.cz/wp-content/uploads/2021/01/Hodnota-konverze-1.jpg)

Hodnota konverze

Další možností je použít u všech konverzí stejnou fixní hodnotu nebo hodnotu vůbec nepoužívat. Pokud daná **konverze hodnotu nemá** jako třeba v případě přihlášení k newsleteru, vyber poslední možnost a hodnotu nepoužívej.

#### Započítávání konverzí

Teď se rozhodni, jak chceš konverze započítávat. Zda **každou**, nebo jen tu **první** po prokliku reklamy.

![Započítávání konverzí](https://nazakladedat.cz/wp-content/uploads/2021/01/Započítávání-konverzí.jpg)

Započítávání konverzí

Představ si situaci, kdy člověk přijde přes reklamu a udělá po sobě **dvě samostatné objednávky**, klidně s odstupem několika dní. Tato volba tak určuje, zda tuto situaci uvidíš jako jednu konverzi, nebo dvě konverze v [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/).

#### Konverzní okno

Výběrem konverzního okna určuješ, **kolik dní od prokliku** se uskutečněná konverze přisoudí danému prokliku.

![Konverzní okno](https://nazakladedat.cz/wp-content/uploads/2021/01/Konverzní-okno-1.jpg)

Konverzní okno

Pokud máš nastaveno například 30 dní, člověk proklikne reklamu a pak nakoupí po 35 dnech, konverze se prokliku **nepřipíše**.

Okno zvol o něco delší, než je **předpokládaný nákupní cyklus**. Většinou si ale vystačíš se základní hodnotou 30 dní.

#### Konverzní okno po zobrazení

Obdobně vyber délku konverzního okna po zobrazení reklamy.

![Konverzní okno po zobrazení](https://nazakladedat.cz/wp-content/uploads/2021/01/Konverzní-okno-po-zobrazení-1.jpg)

Konverzní okno po zobrazení

#### Atribuční model

Předposledním bodem je **volba atribučního modelu**. Ten určuje, jak se zásluha za konverzi rozpočte mezi kampaně, pokud se jich na jejím získání podílelo víc. Ve většině případů ti nejlépe poslouží model **Na základě dat.** O atribučních modelech se dočteš více v [článku o atribuci](https://nazakladedat.cz/atribuce/).

![](https://nazakladedat.cz/wp-content/uploads/2024/06/Volba-atribucniho-modelu-v-Google-Ads.jpg)

Volba atribučního modelu v Google Ads

Pozor, tento atribuční model se vztahuje **pouze na Google Ads** a jen na kampaně ve vyhledávací síti a Google Nákupech. Pokud člověk sice přišel přes reklamu, ale poté ještě přes Facebook a e-mail, tak v Google Ads uvidíš 1 konverzi a ne jen 1/3. Atribuci mezi jednotlivé kanály online marketingu Google Ads neřeší.

**Vylepšené konverze**

V závěru už jen vyber, zda se mají u této konverze použít **[vylepšené konverze](https://nazakladedat.cz/jak-nastavit-rozsirene-konverze-v-google-ads/).**

![](https://nazakladedat.cz/wp-content/uploads/2024/06/Vylepsene-konverze-u-nastaveni-konverze-v-Google-Ads.jpg)

Vylepšené konverze u nastavení konverze v Google Ads

**Dokončení**

Po kliknutí na **Hotovo** a **Uložit** se zobrazí možnosti nastavení značky. Pokud máš přístup ke [Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/), vyber poslední záložku. Zajímat tě na ní budou hodnoty **Číslo konverze** a **Štítek konverze**. Ty budeš potřebovat v dalším kroku.

![](https://nazakladedat.cz/wp-content/uploads/2024/06/Moznosti-nastaveni-znacky-1024x460.jpg)

Možnosti nastavení značky

### 3) Nastavení konverze na webu

V [Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/) přidej novou značku typu Měření konverzí Google Ads (Google Ads Conversion Tracking). V ní jako Číslo konverze vyplň **číslo konverze**, které ti vygenerovaly Ads. Stejně tak uveď i **štítek konverze**.

![](https://nazakladedat.cz/wp-content/uploads/2024/06/Nastaveni-Google-Ads-konverze-v-GTM-869x1024.jpg)

Nastavení Google Ads konverze v GTM

Protože chceš měřit objednávku na e-shopu, tak se ti u ní hodí znát i její **hodnotu, ID a měnu**. Díky tomu v Google Ads uvidíš tržby. S pomocí ID transakce a měny Google Ads dokáží odfiltrovat duplicity a správně přepočítat objednávky v jiných měnách.

**Hodnoty proměnných** pochopitelně definuj dle podoby tvého [dataLayeru](https://nazakladedat.cz/co-je-datalayer/) na děkovací stránce eshopu. Stejně tak spouštěcí pravidlo uzpůsob svému webu. Pokud tápeš, [ozvi se mi](https://nazakladedat.cz/kontakt/) a poradím.

Po uložení nezapomeň přidat ještě **Propojovač konverzí**, tzv. Conversion Linker. Ten pomáhá propojit údaje o prokliku s objednávkou pro přesnější doměřování.

![](https://nazakladedat.cz/wp-content/uploads/2024/06/Conversion-Linker-1024x762.jpg)

Conversion Linker

Nezapomeň úpravy **publikovat**. Resp. úplně správný postup je v preview módu vše otestovat. To už je ale and rámec toho článku.

### 4) Kontrola měření

Od této chvíle se objednávky do [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/) měří. Doporučuji se na měření **za několik dní** ještě podívat a zkontrolovat, že objednávky i s hodnotou v Ads vidíš.

![Konverze a jejich hodnota v Google Ads](https://nazakladedat.cz/wp-content/uploads/2021/01/Konverze-a-jejich-hodnota-v-Google-Ads-1.jpg)

Konverze a jejich hodnota v Google Ads

A ještě lépe porovnej, že čísla rámcově odpovídají tomu, co vidíš za Google Ads v Google Analytics. Drobné rozdíly tam budou vlivem různých [atribučních modelů](https://nazakladedat.cz/atribuce/), ale přibližně by se měla čísla podobat.

## Závěr

Pokud už konverzi měříš do [Google Analytics](https://nazakladedat.cz/co-jsou-google-analytics-4/), tak je možné ji jednoduše do [Google Ads](https://nazakladedat.cz/co-jsou-google-ads/) importovat. Není pak potřeba nastavovat nové měření. Tato možnost má ale i své nevýhody. Více se dozvíš v článku [Proč měřit konverze do Google Ads vlastní značkou](https://nazakladedat.cz/rozdil-v-mereni-konverzi-google-ads-a-importem-z-google-analytics/).

**Přesnějšího měření** konverzí docílíš případnou [implementací rozšířených konverzí.](https://nazakladedat.cz/jak-nastavit-rozsirene-konverze-v-google-ads/)

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