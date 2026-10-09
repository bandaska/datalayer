# URL: https://www.advisio.cz/blog/jak-nastavit-conversion-api-pres-google-tag-manager/

**Obsah článku:**

* [Conversin API měření [CAPI]](#conversin-api-mereni-capi)
* [3 cesty, jak nastavit CAPI měření](#3-cesty-jak-nastavit-capi-mereni)
* [Implementace Conversion API](#implementace-conversion-api)

Souhlasím, nesouhlasím? Tato slova vídáte na webových stránkách neustále. Jedná se o cookie lištu, prostřednictvím které si uživatel vybere, zda umožní měřícím kódům tzv. **trackovat aktivitu na stránce** [zobrazení konkrétní stránky, přidání zboží do košíku nebo dokončení objednávky]. Mezi nejčastější měřící kódy patří Meta Pixel a Google Analytics. My se dnes blíže seznámíme s Meta Pixel.

## Conversin API měření [CAPI]

Možnost nastavit si Conversion API [dále už jen CAPI] měření se uživatelům otevřela díky povinné existenci cookie lišty a faktu, že Google oznámil [blokování souborů cookies třetích stran](https://www.advisio.cz/blog/co-jsou-cookies-tretich-stran-a-jak-jejich-konec-ovlivni-e-shopy/) v prohlížeči Google Chrome. Dalším faktorem je existence verze operačního systému iOS 14.5+, která umožňuje uživatelům vypnout možnost trackování a tím zakázat měřícím kódům zaznamenat aktivitu.

**Meta Pixel** díky CAPI měření nesleduje uživatele z prohlížeče, ale přímo **ze serveru stránky**. Lze tak díky server-side měření zaznamenat aktivitu o uživatelích, kteří používají nástroje pro blokování reklam nebo prohlížeče neukládající soubory cookies. Když prohlížeč požádá o zobrazení nějaké stránky, webový server ji pošle, ale zároveň o tom notifikuje i Meta Pixel.

Vy tak získáte informace, že někdo vaši stránku navštívil nebo si prohlížel produkty. Tato data lze následně použít například k **personalizaci** a **optimalizaci reklam**.

Pokud však stále **CAPI měření nepoužíváte**, pravděpodobně **přicházíte** **o velké množství analytických dat** o uživatelích, kteří interagovali s vaší stránkou. To má za následek výrazné zhoršení efektivity a výkonu aktivních kampaní, které v minulosti fungovaly velmi dobře. Výkon se odvíjí i podle odvětví a bohatství státu. Čím je země konkurenceschopnější, tím bývá propad větší.

## 3 cesty, jak nastavit CAPI měření

První možností je integrovat CAPI měření pomocí modulu v jednom z hotových e-shopových řešení [Shoptet, Upgates]. Pokud máte více zkušeností, můžete se vydat cestou vlastní implementace. Stejně dobře funguje také implementace prostřednictvím Google Tag Manageru.

### E-shopové řešení

Tento způsob vypadá z pohledu uživatele **nejsnadněji**, obsahuje ale mnoho omezení. CAPI implementujete během pár minut. Do administrace e-shopu vložíte váš Meta Pixel ID a přístupový token, který lze **vygenerovat ve správci události v Business Manageru**, uložíte a máte hotovo.

S omezením se setkáte až při měření událostí. Mezi nejčastěji podporované události patří page\_view, view\_content, addToCart a purchase. Hlavní nevýhodou je absence měření i dalších procesů [přechod k zaplacení, dokončení registrace nebo odeslání kontaktního formuláře]. Úroveň kvality párovatelnosti a deduplikace dat může být kvůli zasílaní omezených informací do značné míry limitovaná.

### Vlastní implementace

Doporučujeme **zkušenějším programátorům**, kteří si díky vlastnímu nastavení mohou do zdrojového kódu stránky vložit a měřit prakticky jakoukoliv událost.

Nejste až tak zkušení? Vlastní implementace se vám může snadno prodražit, protože si budete muset najít programátora. Ti si účtují hodinovou sazbu. **Pozor!** Programátor ale daný systém nemusí vůbec znát, což se může projevit nejen na množství odpracovaných hodin, ale také na chybovosti. Ve finále zaplatíte za implementaci, ale i za školení programátora.

### Nastavení pomocí GTM [Google Tag Manager]

Tuto metodu v Advisio **doporučujeme**. Proč? Pomocí **GTM lze vzdáleně** [bez nutnosti zásahu do zdrojového kódu] **vkládat** na vaši stránku **měření Meta Pixel** nebo i Google Analytics. Pokud používáte GTM na správu měřících kódů, všechny skripty jsou tak na jednom místě a máte dokonalý přehled i “pořádek” o všech měřeních na stránce.

Pro získávání hodnot ze stránek potřebujete, aby stránka měla dobře zpracované datové vrstvy. Výhodu v tomto způsobu nastavení vidíme i tehdy, pokud spolupracujete s reklamní agenturou. Snadno **nasdílíte přístupy** a CAPI měření vám nastaví i bez komunikace s programátory. Provedení je rychlé a výrazně levnější.

## Implementace Conversion API

K implementaci budete potřebovat základní měřící Meta Pixel kód, který se poté rozšíří o měření ze strany serveru, Pixel ID a přístupový token.

Ve správci událostí se nachází možnost **nastavení CAPI podle průvodce**.

![](https://www.advisio.cz/wp-content/uploads/2022/09/image5.png)Celý postup je velmi jednoduchý a intuitivní. V prvním kroku si zvolte, **které události si přejete měřit**. Pokud vlastníte internetový e-shop, vyberte kategorii *“E-komerce a maloobchod”* a k tomu příslušné události.

![](https://www.advisio.cz/wp-content/uploads/2022/09/image2.png)

V další fázi si **nastavte jednotlivé parametry**, které budete společně s událostmi posílat. Více parametrů znamená přesnější spárovatelnost a deduplikaci dat.

![](https://www.advisio.cz/wp-content/uploads/2022/09/image4.png)

Proveďte kontrolu nastavení a pokyny společně s přístupovým tokenem zašlete vývojáři nebo reklamní agentuře, která je schopna přes GTM měření nastavit.

[Áčkový tip]: **Přístupový token představuje unikátní klíč**. Opakované generování tokenu ve správci událostí s již propojeným CAPI má za následek vygenerování tokenu nového a ztrátu správného fungování měření. Oprava měření sice zabere jen pár minut, ale pokud jste problém zaregistrovali pozdě, pravděpodobně vám za tu dobu systémem proklouzlo mnoho dat.

![](https://www.advisio.cz/wp-content/uploads/2022/09/image3-1.png)

![](https://www.advisio.cz/wp-content/uploads/2022/09/image1.png)Všechny důležité [informace o měření CAPI](https://developers.facebook.com/docs/marketing-api/conversions-api) najdete v dokumentaci Meta for Developers.

A co přinesl rok 2023? Změnily se nějak možnosti reportování dat? Máme pro vás informace o [Conversion API](https://www.advisio.cz/blog/conversion-api-jak-se-letos-zmenily-moznosti-reportovani/) a možnostech reportování v roce 2023.

Nenechte si proklouznout cenná data. Nevíte si rady s nastavením Conversion API? A ještě jste neimplementovali [DataPlus](https://dataplus.advisio.cz/)? Kontaktujte naše áčka na analytiku a vytěžte z vašich dat co nejvíce.

### Co je to Conversion API Facebook? [1]

[1]

Conversion API Facebook, nebo taky Facebook CAPI je nástroj přímo od Facebooku. Díky němu mohou webové stránky a aplikace poskytovat informace o událostech o datech a konverzích přímo do rozhraní Facebooku. Díky využití Facebook Conversion API se nemusí spoléhat na tradiční Pixel.

### Jak nainstalovat Facebook API Conversion? [2]

[2]

Nainstalovat Facebook API Conversion lze několika způsoby, ale jedním z nich je pomocí Google Tag Manageru. Pomocí Google Tag Manageru můžete nastavit a nakonfigurovat tagy pro odesílání dat z vaší webové stránky do Facebook Conversion API.

### Jaký je rozdíl mezi Meta Pixel a Conversion API? [3]

[3]

Meta Pixel a Conversion API jsou oba nástroje poskytované Facebookem pro sběr dat o uživatelských aktivitách na webových stránkách. Hlavní rozdíl spočívá v tom, jak data jsou přenášena. Meta Pixel využívá sledování prostřednictvím klientského prohlížeče, zatímco Conversion API umožňuje odesílat data přímo z serveru, což může být v některých případech spolehlivější a přesnější.

### Je Facebook API zdarma? [4]

[4]

Ano, Facebook API je zdarma k použití. Nicméně některé pokročilé funkce nebo vysoký objem dat mohou vyžadovat předplatné nebo další poplatky.

### Proč potřebuji Conversion API? [5]

[5]

Využít Facebook Conversion API můžete například pro přesnější sledování konverzí a uživatelských aktivit, hlavně pokud Pixel nefunguje správně.

**Štítky:**
[CAPI](https://www.advisio.cz/blog/stitek/capi/) [Conversion API měření](https://www.advisio.cz/blog/stitek/conversion-api-mereni/) [google tag manager](https://www.advisio.cz/blog/stitek/google-tag-manager/) [Implementace Conversion API](https://www.advisio.cz/blog/stitek/implementace-conversion-api/) [Meta Pixel](https://www.advisio.cz/blog/stitek/meta-pixel/)

**Sdílejte článek:**

![fotografie David Hlinka](https://www.advisio.cz/wp-content/uploads/2021/11/David_Hlinka.png)

**David Hlinka** [1]  
[1] Social Ads Specialist

[Napište si autorovi o radu](mailto:blog@advisio.cz)

Zapálený fanoušek hokeje a milovník sladkého, který rád sleduje, co je v onlinu [a hlavně] na sítích nového.