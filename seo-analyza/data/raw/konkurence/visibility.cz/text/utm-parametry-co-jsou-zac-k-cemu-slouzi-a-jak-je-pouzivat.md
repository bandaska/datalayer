# URL: https://www.visibility.cz/utm-parametry-co-jsou-zac-k-cemu-slouzi-a-jak-je-pouzivat/

[![Visibility](https://www.visibility.cz/wp-content/uploads/2025/12/visibility-logo.svg)](https://www.visibility.cz/)

* [Služby](#)
  + Kampaně a média
    - [Reklama na sociálních sítích](https://www.visibility.cz/reklama-na-socialnich-sitich/)
    - [Online video reklama](https://www.visibility.cz/online-video-reklama/)
    - [Programmatic & Display](https://www.visibility.cz/programaticka-reklama-display-reklama/)
    - [PPC reklama](https://www.visibility.cz/ppc-reklama/)
  + Značka a obsah
    - [SEO & AIO](https://www.visibility.cz/seo/)
    - [Obsahový marketing](https://www.visibility.cz/obsahovy-marketing/)
    - [PR & Influencer marketing](https://www.visibility.cz/pr-influencer-marketing/)
    - [Komunikace na sociálních sítích](https://www.visibility.cz/komunikace-na-socialnich-sitich/)
  + Strategie a data
    - [Marketingová strategie](https://www.visibility.cz/marketingova-strategie/)
    - [Marketingové konzultace](https://www.visibility.cz/marketingove-konzultace/)
    - [Data & Analytika](https://www.visibility.cz/webova-analytika/)
* [Blog](https://www.visibility.cz/blog/)
* [Kariéra](https://www.visibility.cz/kariera/)
* [Visičtvrtek](https://www.visibility.cz/visictvrtky/)
* [Kontakt](https://www.visibility.cz/kontakt/)

Vyberte stránku

 

# UTM parametry – co jsou zač, k čemu slouží a jak je používat?

UTM (Urchin Tracking Module) parametry - ošklivá slova mnohým znějící jako cizí řeč. Můžete se setkat také s výrazem “tagování”, který není o nic příjemnější. Pokud však využíváte placené reklamy a chcete (věřte, že potřebujete!) přiřazovat v rámci Google Analytics správné zdroje návštěv, pak je nezbytné mít právě UTM parametry nastaveny resp. mít “otagováno”. Co […]

5. 05. 2021 • Libor Trlifaj

[Facebook](https://www.visibility.cz/blog/?kategorie=facebook)[Google](https://www.visibility.cz/blog/?kategorie=google)[PPC reklama](https://www.visibility.cz/blog/?kategorie=ppc-reklama-clanky)[Sklik](https://www.visibility.cz/blog/?kategorie=sklik)[Webová analytika](https://www.visibility.cz/blog/?kategorie=analytika)

UTM (Urchin Tracking Module) parametry – ošklivá slova mnohým znějící jako cizí řeč. Můžete se setkat také s výrazem “tagování”, který není o nic příjemnější. Pokud však využíváte placené reklamy a chcete (věřte, že potřebujete!) přiřazovat v rámci Google Analytics správné zdroje návštěv, pak je nezbytné mít právě UTM parametry nastaveny resp. mít “otagováno”.

# Co jsou UTM parametry?

Zjednodušeně řečeno se jedná o část textu přiřazeného za URL adresu, díky které přesněji určíte, odkud na zmíněnou URL uživatelé chodí.

# K čemu slouží?

Jak již bylo zmíněno, slouží především k přesnějšímu určení, odkud lidé na vámi sledovanou URL chodí. To ovšem není vše. Pomohou vám také rozdělit uživatele, kteří přišli z placených nebo naopak neplacených zdrojů. Pokud byste UTM parametry neměli nasazeny, pak se vám přesně tyto zdroje budou míchat do jednoho, budete mít zkreslená data a to vám velmi ztíží rozhodování, jak řídit efektivně investice mezi jednotlivými kanály.

# Jak je používat?

Tak jdeme na to! Rozlišíme návštěvy Facebook reklam, Sklik reklam a dalších případných aktivit pomocí UTM parametrů, které **samotné** mohou zjednodušeně vypadat např. takto:

utm\_source=**facebook**&utm\_medium=**cpc**

Tahle úprava způsobí v Google Analytics rozdělení neplacených a placených návštěv. Neplacené budou mít zdroj / medium facebook.com / referral (můžete se setkat také s podzdroji  m.facebook.com apod.), oproti tomu placené budou mít zdroj / médium **facebook** **/** **cpc**, jak jsme si určili výše.

Běžně používané UTM **pro základní přehled** jsou za URL zpravidla: 

* Zdroj (Campaign Source) – dá Google Analytics informaci, že **zdrojem** návštěvy je   
  v našem případě Facebook (dále mohou být např. Seznam, Google apod.),
* Médium (Campaign Medium) – slouží k odlišení, který kanál uživatele přivedl,   
  v našem případě cpc (můžete použít prakticky cokoliv pro odlišení, nejčastěji taky ppc, email, display atp.),
* Kampaň (Campaign Name) – jednoduše odlišíte, o kterou konkrétní kampaň se jedná. Oceníte zejména v případech, kdy vám běží více kampaní najednou.

Kompletní URL adresa s tagováním pak může vypadat následovně:

https://www.visibility.cz/blog/?utm\_source=**facebook**&utm\_medium=**cpc**&utm\_campaign=**blog\_newsletter**

*\*\*\** ***Rada k nezaplacení****, při tvorbě UTM parametrů sjednoťte názvosloví i velikost písmen. Nejjednodušší je používat jen malá písmena. Pokud totiž jako zdroj uvedete jednou* *Facebook**, podruhé**facebook* *a potřetí* *FACEBOOK**, budou vám započítány* *tři různé zdroje návštěv**. V případě, že byste jednotlivé zdroje chtěli vyhodnotit např. na roční bázi, budete muset data ručně dopočítávat. Stejné pravidlo platí také pro Médium.*

## Jak je nastavit?

### Google Ads

* Zde je situace nejjednodušší – nic nastavovat nemusíte. Stačí účet Google Ads propojit s Google Analytics a tyhle dvě služby, protože jsou od Google, už se mezi sebou “domluví” bez vaší další asistence.

### Sklik

* Ten už vaši pomoc potřebuje. Nemusíte se však bát a hledat v tom složitosti. Stačí jít v reklamním systému cestou **1. Nástroje – 2. Automatické tagování URL – 3. Zapnout automatické tagování**.![](https://www.visibility.cz/wp-content/uploads/2021/05/UTM_1.jpg)

* Tagování si samozřejmě můžete dle libosti upravit, nicméně pro základní přehled by tohle nastavení mělo stačit. Doporučuji však zkontrolovat, zda se vám i základní nastavení propisuje do Google Analytics.

### Facebook

* Na Facebooku je jednou z cest přidání UTM parametrů při vytváření samotných reklam.
* Ve spodní sekci s názvem “Sledování” se nachází tlačítko pro “Vytvořit parametr URL”

* pak už stačí přidat minimálně **Zdroj kampaně: facebook.com** (příp. facebook, fb, apod.), **Médium kampaně: cpc** (příp. ppc nebo jinak dle vašich preferencí) a **Název kampaně**, kde použijete z nabídky  **{{campaign.name}}**.

![](https://www.visibility.cz/wp-content/uploads/2021/05/UTM_2.jpg)

Ostatní

* V ostatních případech, jako jsou třeba emaily, newslettery apod. je dobré přidat tagování ručně
* K tvorbě UTM parametrů vám může pomoci [generátor](https://ga-dev-tools.appspot.com/campaign-url-builder/)

## Závěrem

Snad jsme vás přesvědčili že základní tagování, nebo chcete-li UTM parametry, nejsou žádnou jadernou fyzikou. Jeho nastavení není nikterak složité, vám rozhodně může jen zpříjemnit život a hlavně efektivněji řídit investice mezi jednotlivé reklamní kanály 🙂

Potřebujete zajistit komplexní řešení pro vaši značku?   
Od analytiky, SEO, kampaně s kreativou?

## Napište nám

Máte otázky?  
Nebojte se zeptat jsme tu pro vás!

Napište nám zprávu a společně najdeme cestu, jak posunout váš web ve vyhledávačích na vyšší pozice.

Chcete rovnou zavolat?

![Ikona telefonu](https://www.visibility.cz/wp-content/uploads/2025/12/telefon.svg)

[607 007 111](tel:+420607007111)

![Popis 1](https://www.visibility.cz/wp-content/uploads/2025/12/tiktok.svg)
![Popis 2](https://www.visibility.cz/wp-content/uploads/2025/12/partner-program-badge-cy25-elite-1536x530-1.png)
![Popis 3](https://www.visibility.cz/wp-content/uploads/2025/12/adform.svg)
![Popis 3](https://www.visibility.cz/wp-content/uploads/2025/12/google-marketing-platform-logo-png.png)
![Popis 3](https://www.visibility.cz/wp-content/uploads/2026/03/sklik_overeni.png)
![Popis 3](https://www.visibility.cz/wp-content/uploads/2025/12/premierpartner-rgb.png)

**[[email protected]](/cdn-cgi/l/email-protection#e083888389a09689938982898c899499ce839a)**

**VISIBILITY DIGITAL s.r.o.**Vchod D, Štefánikova 43a  
150 00 Praha 5

[![Facebook](https://www.visibility.cz/wp-content/themes/Divi-child-wplama/img/soc/facebook.svg)](https://www.facebook.com/VISIBILITYcz/)[![Instagram](https://www.visibility.cz/wp-content/themes/Divi-child-wplama/img/soc/instagram.svg)](https://www.instagram.com/visibilitycz/)[![Linkedin](https://www.visibility.cz/wp-content/themes/Divi-child-wplama/img/soc/linkedin.svg)](https://www.linkedin.com/company/visibility-digital-s-r-o-)[![Youtube](https://www.visibility.cz/wp-content/themes/Divi-child-wplama/img/soc/youtube.svg)](https://www.youtube.com/@VISIBILITYcz)

#### Odebírejte náš newsletter

Pravidelný přístup k novinkám ze světa marketingu, pozvánkám na události a sem tam i k pár informacím ze světa samotné Visibility.

* [Služby](#)
* [Blog](https://www.visibility.cz/blog/)
* [Kariéra](https://www.visibility.cz/kariera/)
* [Visičtvrtek](https://www.visibility.cz/visictvrtky/)
* [Kontakt](https://www.visibility.cz/kontakt/)

Online marketingová agentura Visibility Praha © 2026 VISIBILITY DIGITAL s.r.o.  
[Zásady zpracování osobních údajů](https://www.visibility.cz/zasady-zpracovani-osobnich-udaju/)