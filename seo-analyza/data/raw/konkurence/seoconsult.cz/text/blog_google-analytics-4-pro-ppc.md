# URL: https://www.seoconsult.cz/blog/google-analytics-4-pro-ppc

## Drobečková navigace

1. [Domů](/)
2. [Blog](/blog)
3. Google Analytics 4 pro PPC

# Google Analytics 4 pro PPC

[Google Analytics](/stitky/google-analytics)

![Analytics](/sites/default/files/styles/fullwidth/public/images/2022/11/analytics-925379_640.jpg.webp?itok=cS8z9EG8)

[![Profile picture for user Vlastimil Malík](/sites/default/files/styles/thumbnail/public/images/2025/12/vlastminil-malik.jpg.webp?itok=_46rHz7o)](/user/64)

Vlastimil Malík
| 25. 11. 2022

Chcete používat Google Analytics 4 pro vyhodnocování placených reklam? Tento článek vám ukáže, jak na to.

## Co v článku najdete

* [Jaké jsou rozdíly mezi UA a GA4?](#sec-1)
* [Jak přejít na Google Analytics 4?](#sec-2)
* [Nastavení konverzí](#sec-3)
* [Nové koncepty](#sec-4)
* [PPC reklamy Google Ads](#sec-5)
* [Pokročilé sestavy jsou velmi omezené](#sec-6)

Služba Universal Analytics odchází a již brzy bude kompletně nahrazena službou Google Analytics 4 (GA4). Bohužel pro mnohé, tato nová služba se od **původní verze Google Analytics** v mnohém liší, takže se ji budete muset naučit znovu používat. Je proto velice důležité nainstalovat GA4 hned, i když původní Universal Analytics budou fungovat až do příštího léta. Pokud totiž budete čekat až do července 2023, kdy bude původní služba vypnuta, nemusíte mít dost času na to, abyste se ho naučili plně používat.

V červenci 2023 totiž Universal Analytics (UA) zmizí. Budete však muset mít možnost porovnávat meziroční údaje. To nebudete moci udělat, pokud jste GA4 na své webové stránky nenainstalovali již letos.

Můžete samozřejmě exportovat sestavy z UA a GA4 a nějakým způsobem je spojit, například v Google  Data Studiu, ale není to nic jednoduchého a představuje to zbytečnou komplikaci.

## Jaké jsou rozdíly mezi UA a GA4?

Google Analytics 4 používá model založený na událostech, na rozdíl od starého modelu založeného na relacích, který používá současné **Universal Analytics**. To umožňuje odesílat do analytických systémů mnohem více dat.

Značka GA4 může odeslat až 25 parametrů událostí, zatímco Universal Analytics mohl odeslat pouze čtyři na jednu událost.

GA4 může mít až 500 jasně pojmenovaných událostí. Limit 500 událostí platí pouze pro vámi nastavené události. Tento limit se nepočítá do událostí GA4, které jsou standardně dodávány jako page view, click nebo video start.

## Jak přejít na Google Analytics 4?

Nebudu zde popisovat postup instalace, ten má na svých stránkách dobře popsaný samotný Google. Jediné co bych zdůraznil a na co byste neměli zapomenout, je **zapnout rozšířené měření**.

To uděláte tak, že přejdete do nabídky Správce > Datové toky vlastnosti, se kterou pracujete. Klikněte na kartu Web a ujistěte se, že je zapnutý posuvník **Rozšířené měření**.

Pokud kliknete na ikonu ozubeného kola úplně vpravo, zobrazí se vám všechny různé věci k měření, jako je Scrolls a Outbound clicks.

## Nastavení konverzí

Pokud již máte nastavené cíle v nástroji Universal Analytics, společnost Google zavedla nástroj pro **přesun konverzí do aplikace GA4**. Pokud jej nemáte, budete muset pomocí nástroje Google Tag Manager nastavit vlastní značku HTML, která data o konverzích přesune do datové vrstvy.

Některé pluginy a služby třetích stran to samozřejmě mohou udělat za vás. Jakmile události existují, stačí přejít do hlavní nabídky a kliknout na Konfigurovat. První, co se vám zobrazí, jsou právě Události.

Když chcete vytvořit konverzi, vždy ji nejprve zkontrolujte zde. To, co chcete započítat jako konverzi, zde již může být. Stačí najít příslušnou událost a kliknutím na posuvník ji aktivovat.

## Nové koncepty

Jedním z hlavních konceptů GA4 je rozlišování mezi zapojením uživatele a zapojením relace. Hlavní rozdíl spočívá v tom, že statistika zapojení uživatele může zahrnovat více než jednu relaci.

Zapojení do relace zahrnuje **údaje pro každou relaci**. V GA4 jde především o zapojení.

Největší rozdíl, kterého si v GA4 všimnete, je, že zmizela míra opuštění. Byla nahrazena položkou "Engaged Sessions" (Zapojené relace). Relace je buď zapojená, nebo ne.

►**Aby se relace počítala jako zapojená, musí uživatel zůstat na webu déle než 10 sekund, spustit konverzi nebo mít 2 a více zobrazení stránek.**

Místo průměrné doby trvání relace nyní máme průměrnou dobu zapojení na relaci. Pokud to, co hledáte, není v systému GA4 k dispozici, a je toho hodně, co oproti starému systému není k dispozici, můžete přejít na kartu Prozkoumat a vytvořit si vlastní sestavu. Vlastní přehledy se hodně podobají aplikaci Data Studio nebo Analytickému centru v aplikaci Universal Analytics.

## PPC reklamy Google Ads

První věc, které si v GA4 všimnete, je, že nabídka vlevo je mnohem menší a je zde méně podnabídek a mnoho věcí chybí nebo je pohřbeno hlouběji v menu.

Uvidíte také, že ne všechny sekce mají možnost změnit zobrazované časové období. Konkrétně pokud v knihovně spouštíte vlastní sestavu, nemůžete u ní změnit časové období.

Řešením je přejít do jiné sekce, například do **hlavní nabídky sestavy**, která má možnost časové období změnit. Poté se vraťte do sestavy a změna se v ní projeví.

U placeného vyhledávání nám chybí sekce Google Ads. Sekci Google Ads naleznete v podnabídce Přehled akvizic v nabídce Report > Akvizice na druhém řádku, ve třetím poli vpravo dole.

Jedním z největších problémů systému GA4 je to, že již neumožňuje snadno zobrazovat přehledy, které zobrazují tabulky, na které lze kliknout a prohloubit je, abyste viděli více podrobností. Pokud přejdete do sestavy Google Ads, kterou jsem zmínil výše, ve výchozím nastavení se zobrazí **statistiky o vašich kampaních**.

Nemůžete na ně již kliknout a zobrazit skupiny reklam. Musíte změnit rozbalovací nabídku, abyste viděli Skupiny reklam, Klíčová slova nebo jiné položky Google Ads.

Pokud vyberete možnost Skupiny reklam, zobrazí se pouze všechny Skupiny reklam. Neexistuje žádný způsob, jak zobrazit pouze Skupiny reklam z konkrétní kampaně.

Stejné je to s jakoukoli dimenzí, kterou vyberete. Pokud chcete tabulku filtrovat, je v horní části velmi jednoduché **vyhledávací pole**. Neumožňuje použití regulárních výrazů ani nemá pěkný vizuální filtr, který máte k dispozici v nástroji Universal Analytics.

Tato funkce, respektive její absence, je na všech tabulkových sestavách. Všimněte si, že každá tabulka má malé modré znaménko plus, které umožňuje přidat další dimenzi, například prohlížeč nebo město.

Z nějakého důvodu to v sestavě Google Ads **není k dispozici**. Chcete-li tyto informace zobrazit, musíte přejít do sestavy Report > Acquisition > User Acquisition a podívat se na tabulku na druhém řádku sestavy. Zde máte přístup pouze k dimenzi Skupiny reklam. Nyní můžete použít rozbalovací nabídku sekundární dimenze.

## Pokročilé sestavy jsou velmi omezené

Zdá se, že výchozí nastavení GA4 je určeno pro začínající uživatele, kteří chtějí rychle získat přehledné informace.

Mnoho podrobných reportů, které byly snadno dostupné a snadno použitelné, již nejsou bez pokročilých znalostí GA4 k dispozici. Vlastní reporty, které si můžete vytvořit v nabídce Explore, jsou sice mimořádně výkonné, ale pouze pokud víte, jak je nastavit.

K dispozici je galerie předpřipravených sestav, ale v tuto chvíli jich není mnoho. Jakmile bude GA4 existovat déle, pravděpodobně bude k dispozici více vlastních sestav a článků o tom, jak vytvářet konkrétní sestavy pro PPC reklamy.

Zdroj: marketingland.com, facebook.com, cpcstrategy.com

Autor: Vlastimil Malík

Foto zdroj: pixabay.com

![Profile picture for user Vlastimil Malík](/sites/default/files/styles/kontakt/public/images/2025/12/vlastminil-malik.jpg.webp?itok=No2xkq9n)

### **Autor článku:** Vlastimil Malík

SEO manažer

**Vlastimil** patří mezi zkušené SEO specialisty s více než dvacetiletou praxí v online marketingu. Optimalizaci pro vyhledávače se věnuje již od roku **2001**, kdy bylo SEO teprve na začátku svého vývoje. Díky dlouholetým zkušenostem pomohl stovkám firem zvýšit návštěvnost webů, zlepšit pozice ve vyhledávačích a získat více zákazníků z organického vyhledávání. Specializuje se na komplexní SEO strategie, obsahový marketing, copywriting, tvorbu PR článků i optimalizaci webů pro moderní AI vyhledávače a asistenty. Má bohaté zkušenosti s tvorbou obsahu pro e-shopy, magazíny, firemní weby i rozsáhlé obsahové portály. Dokáže připravit odborné i prodejní texty na téměř jakékoli téma – od módy, stavebnictví a gastronomie až po automobilový průmysl nebo technické obory. Při své práci propojuje technické SEO, kvalitní obsah a marketingovou strategii tak, aby texty přinášely nejen lepší pozice ve vyhledávačích, ale především skutečné obchodní výsledky.

## Více článků z blogu

[![Umělá inteligence a obsah YMYL: Co nesmíte podcenit?](/sites/default/files/styles/upoutavka/public/images/2026/10/image-8-10-2026-09_38_25.jpg.webp?itok=CtAZdplY)](/blog/jak-tvorit-ymyl-obsah-ktery-budou-ai-vyhledavace-bez-obav-citovat)

### [Jak tvořit YMYL obsah, který budou AI vyhledávače bez obav citovat](/blog/jak-tvorit-ymyl-obsah-ktery-budou-ai-vyhledavace-bez-obav-citovat)

Martin Kulhánek
| 7. 10. 2026

Jaké signály důvěry musí vykazovat obsah s vysokým dopadem na život a zdraví (YMYL), aby se jej umělá inteligence nebála citovat jako prověřený zdroj?

[Přečíst článek](/blog/jak-tvorit-ymyl-obsah-ktery-budou-ai-vyhledavace-bez-obav-citovat)

[![Jak rozpumpovat linkbuilding ve věku umělé inteligence](/sites/default/files/styles/upoutavka/public/images/2026/10/image-8-10-2026-09_39_57.jpg.webp?itok=IV7sXWqm)](/blog/budovani-odkazu-v-ere-ai-nebojte-se-rozsirit-sve-page-obzory)

### [Budování odkazů v éře AI: Nebojte se rozšířit své off-page obzory](/blog/budovani-odkazu-v-ere-ai-nebojte-se-rozsirit-sve-page-obzory)

Martin Kulhánek
| 6. 10. 2026

Kvalitní obsah, online PR i oslovování těch správných partnerů: Posuňte budování zpětných odkazů do nové doby a udělejte ze své značky uznávanou autoritu.

[Přečíst článek](/blog/budovani-odkazu-v-ere-ai-nebojte-se-rozsirit-sve-page-obzory)

[![12 vylepšení pro reklamní platformu sítě Reddit](/sites/default/files/styles/upoutavka/public/images/2026/10/image-8-10-2026-09_41_42.jpg.webp?itok=3VhdZ2z3)](/blog/reklamni-system-platformy-reddit-12-tipu-jak-ho-udelat-pritazlivejsi)

### [Reklamní systém platformy Reddit: 12 tipů, jak ho udělat přitažlivější](/blog/reklamni-system-platformy-reddit-12-tipu-jak-ho-udelat-pritazlivejsi)

Martin Kulhánek
| 5. 10. 2026

Co chybí placené inzerci na globální komunitní platformě Reddit, aby mohla konkurovat zavedeným hráčům na trhu a stala se pro značky ještě atraktivnější?

[Přečíst článek](/blog/reklamni-system-platformy-reddit-12-tipu-jak-ho-udelat-pritazlivejsi)

[Zobrazit všechny články](/blog)

## Používáme tyto nástroje

![WordPress](/sites/default/files/images/2022/12/wordpress_logo.svg)

![PrestaShop](/sites/default/files/images/2022/12/prestashop-logo-vector.png)

![WooCommerce](/sites/default/files/images/2022/12/woocommerce_logo_woo_commerce.png)

![Shoptet](/sites/default/files/images/2022/12/shoptet-logo-1.png)

![Upgates](/sites/default/files/images/2022/12/upgates-logo.png)

![FastCentrik](/sites/default/files/images/2022/12/fastcentrik.png)

![GA4](/sites/default/files/images/2024/02/ga4.jpg)

![Google Merchant](/sites/default/files/images/2024/02/google-merchant-center.jpg)

![Google Tag Manager](/sites/default/files/images/2024/02/tag-manager.jpg)

![Collabim](/sites/default/files/images/2024/02/collabim.jpg)

![Marketing Miner](/sites/default/files/images/2024/02/marketing-miner.jpg)

![ahrefs](/sites/default/files/images/2024/02/ahrefs.jpg)

![Ecomail](/sites/default/files/images/2024/02/ecomail.jpg)

![Mailchimp](/sites/default/files/images/2024/02/mailchimp.jpg)