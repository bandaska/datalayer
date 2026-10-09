# URL: https://nazakladedat.cz/jak-nastavit-facebook-pixel-s-pomoci-gtm/

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

# Jak nastavit Meta pixel s pomocí GTM

23. 6. 2020

 

Úspěch reklam na Metě hodně záleží na tom, zda mu poskytneš **dostatek dat**, na základě kterých se jeho algorytmus učí.

A jedním z důležitých zdrojů dat je **Meta pixel** nasazený na tvůj web.

![
Facebook pixel](https://nazakladedat.cz/wp-content/uploads/2020/06/Facebook-pixel-1.jpg)

Meta pixel

V tomto návodu neřeším, **co to Meta** **pixel** je a jak jej použít v reklamách. O tom se dočteš třeba [v článku o Meta pixelu od Včeliště](https://vceliste.cz/blog/naucte-se-nastavit-a-pouzivat-meta-pixel-vyplati-se-to/).

Ukáži ti zde ale, jak **správně Meta** **pixel vložit na web**, aby odesílal potřebná data. Využijeme k tomu [Google Tag Manager](https://nazakladedat.cz/co-je-google-tag-manager/).

* [Základní kód pixelu](#zakladni_kod)
* [Event ViewContent](#viewcontent)
* [Event AddToCart](#addtocart)
* [Event Purchase](#purchase)
* [Další eventy](#dalsi_eventy)
* [Kontrola správné implementace](#kontrola)

Pokud si chceš práci zjednodušit, můžeš si všechny kód popsané níže jednoduše **do GTM naimportovat** s pomocí této [šablony FB pixelu pro GTM](https://nazakladedat.cz/gtm-sablona-facebook-pixel/).

## Základní kód pixelu

Základní kód pixelu posílá Metě informace **o zobrazených stránkách**. Díky němu tak budeš moci v Metě cílit na všechny návštěvníky webu nebo jen na ty, kteří viděli konkrétní stránku.

**Kód pixelu** pro tvůj web získáš v nastavení pixelu po kliknutí na Install Pixel, kde vybereš manuální vložení kódu na web.

![](https://nazakladedat.cz/wp-content/uploads/2020/06/Získání-kódu-Facebook-pixelu-1.jpg)

Získání kódu Meta pixelu

Tento kód pak vložíš v Google Tag Manageru **jako novou značku *Facebook – Pixel*** typu Vlastní HTML a spouštět ji budeš na všech stránkách webu.

V Advanced Settings ještě uprav, že značku chceš spouštět **pouze jednou za stránku.**

![Konfigurace značky pro základní kód Facebook pixelu](https://nazakladedat.cz/wp-content/uploads/2020/06/Konfigurace-značky-pro-základní-kód-Facebook-pixelu-680x1024.jpg)

Konfigurace značky pro základní kód Metapixelu

Tímto nejjednodušší nastavení Meta pixelu končí. Pokud máš ale e-shop a chceš používat dynamické reklamy, měřit do Facebooku objednávky nebo odeslané formuláře, je potřeba **donastavit ještě eventy.**

## Event ViewContent

Event ViewContent slouží k odeslání informací **o zobrazeném detailu produktu.** Využiješ ho tak, pokud máš e-shop. Díky němu bude Meta vědět, které produkty si uživatel na webu prohlížel a které mu tak má ukazovat v dynamických reklamách. Můžeš si pak též tvořit vlastní publika podle zobrazených produktů nebo jejich kategorií.

**Vytvoř novou značku *Facebook – ViewContent*** typu Vlastní HTML a do ní vlož tento kód.

```
<script>
fbq('track', 'ViewContent', {
    content_name: '{{dl.ecommerce.detail.products.0.name}}',
    content_category: '{{dl.ecommerce.detail.products.0.category}}',
    content_ids: ['{{dl.ecommerce.detail.products.0.id}}'],
    content_type: 'product',
    currency: '{{dl.ecommerce.currencyCode}}',
    value: '{{dl.ecommerce.detail.products.0.price}}'
});
</script>
```

**Pravidlo spouštění** nastav dle svého webu tak, aby odpovídal zobrazení detailu produktu.

![Konfigurace ViewContent](https://nazakladedat.cz/wp-content/uploads/2020/06/Konfigurace-ViewContent-1.jpg)

Konfigurace ViewContent

V Advanced Settings, sekci **Tag Sequencing** nastav, aby se před touto značkou vždy stihla ještě odpálit značka se základním kódem pixelu. Jen tak bude vše správně fungovat.

![](https://nazakladedat.cz/wp-content/uploads/2020/06/Tag-Sequencing-nastavení-1.jpg)

Tag Sequencing nastavení

Uvedený kód odpovídá **standarní implementaci Enhanced Ecommerce** měření pro [Google Analytics](https://nazakladedat.cz/co-jsou-google-analytics-4/), odkud bere i potřebná data. Části kódu ve dvou složených závorkách se tak ve tvém případě nejspíše budou lišit. Nezbytným krokem je tak i vytvoření a nadefinování zmíněných proměnných. Pokud se s tím budeš trápit, [dej mi vědět a pomohu](https://nazakladedat.cz/kontakt/).

ViewContent lze použít **i na jiných webech**, než jen na e-shopech. Místo údajů o produktu pak posíláš informace o zobrazeném obsahu.

V proměnné *content\_type* můžeš místo hodnoty *product* posílat ***product\_group***. V tom případě Metě říkáš, že uživatel neviděl konkrétní produkt, ale produkt z dané produktové skupiny. Samozřejmě feed produktů pak musí obsahovat odpovídající *item\_group\_id*.

## Event AddToCart

Další event, který oceníš u e-shopu, je **AddToCart**. Díky němu Meta pozná, které produkty uživatel přidal do košíku.

**Vytvoř novou značku *Facebook – AddToCart*** typu Vlastní HTML a vyplň ji kódem.

```
<script>
fbq('track', 'AddToCart', {
    content_name: '{{dl.ecommerce.add.products.0.name}}', 
    content_category: '{{dl.ecommerce.add.products.0.category}}',
    content_ids: ['{{dl.ecommerce.add.products.0.id}}'],
    content_type: 'product',
    value: {{dl.ecommerce.add.products.0.price}},
    currency: '{{dl.ecommerce.currencyCode}}' 
});          
</script>
```

Stejně jako u ViewContent nastav v sekci **Tag Sequencing**, aby se před toutou značkou vždy stihla ještě odpálit značka se základním kódem pixelu.

No a samozřejmě nezapomeň vybrat správné pravidlo spouštění. Tento kód je potřeba vykonat již **v okamžiku přidání do košíku**, ne až při zobrazení stránky košíku.

![Konfigurace AddToCart](https://nazakladedat.cz/wp-content/uploads/2020/06/Konfigurace-AddToCart-1.jpg)

Konfigurace AddToCart

Mysli na to, že tlačítko na přidání do košíku se může nacházet i na **homepage, v kategorii a detailu produktu**.

## Event Purchase

Nejdůležitějším eventem u e-shopu je Purchase. Díky němu se do Mety odešlou informace **o provedené objednávce**. Meta tak bude moci reportovat, kolik konverzí přinesl a jakou měly hodnotu. Pozor si ale dej na [různé atribuční modely](https://nazakladedat.cz/atribuce/).

Navíc Meta uvidí, jací uživatelé objednávají a co. Díky tomu budou jeho algorytmy moci úspěšněji hledat **uživatele jim podobné** přes lookalike publika. Při plné implementaci včetně nakoupených produktů pak dokážeš definovat v Metě publika typu *Nakoupili konkrétní produkt před 20-30 dny* a jim ukazovat speciální reklamy.

Pro měření eventu Purchase **vytvoř novou značku *Facebook – Purchase*** typu Vlastní HTML a do ní nakopíruj kód.

```
<script>
fbq('track', 'Purchase', {
    currency: '{{dl.ecommerce.currencyCode}}', 
    value: {{dl.ecommerce.purchase.actionField.revenue}},
    content_type: 'product',
    contents: {{js.contentsForFacebookPurchase}}
});
</script>
```

V Advanced Settings, sekci **Tag Sequencing** nastav, aby se před toutou značkou vždy stihla odpálit značka s pixelem.

Pravidlo spouštění nastav na **zobrazení děkovací stránky** po nákupu.

![Konfigurace Purchase](https://nazakladedat.cz/wp-content/uploads/2020/06/Konfigurace-Purchase.jpg)

Konfigurace Purchase

Složitější na nastavení je proměnná ***js.contentsForFacebookPurchase***. Meta totiž potřebuje v proměnné contents zaslat pole, které obsahuje ID a množství objednaných produktů. To jde naštěstí poskládat z údajů pro měření [transakce](https://nazakladedat.cz/co-jsou-transakce/) do Google Analytics. Proměnná *js.contentsForFacebookPurchase* je tak typu Vlastní JavaScript a obsahuje následující kód.

```
function() {
  var contents = [];
  for (i = 0; i &lt; {{dl.ecommerce.purchase.products}}.length; i++) {
    contents[i] =  {
      id: {{dl.ecommerce.purchase.products}}[i].id, 
      quantity: {{dl.ecommerce.purchase.products}}[i].quantity
    }
  }
  return contents;
}
```

Celá konfigurace proměné tak vypadá takto.

![Konfigurace js.contentsForFacebookPurchase](https://nazakladedat.cz/wp-content/uploads/2020/06/Konfigurace-js.contentsForFacebookPurchase-1.jpg)

Konfigurace js.contentsForFacebookPurchase

## Další eventy

Meta má i celou řadu dalších [**standardizovaných eventů**](https://www.facebook.com/business/help/402791146561655?id=1205376682832142) a můžeš si posílat i **eventy vlastní** např. při odeslání formuláře nebo stažení souboru. To využije k definování publik nebo nastavení vlastních konverzí.

Posílání vlastního eventu uděláš v [Google Tag Manageru](https://nazakladedat.cz/co-je-google-tag-manager/) přes vložení tohoto kódu do značky typu Vlastní HTML a nadefinování správného pravidla spouštění.

```
<script>
fbq('track', 'stazeniCeniku');
</script>
```

Řetězec *stazeniCeniku* samozřejmě nahraď **vlastním názvem eventu.**

Ani zde nezapomeň nastavit v **Advanced Settings**, že značka se má spustit až po značce základního kódu pixelu.

![Konfigurace vlastního eventu](https://nazakladedat.cz/wp-content/uploads/2020/06/Konfigurace-vlastního-eventu.jpg)

Konfigurace vlastního eventu

## Kontrola správné implementace

Až budeš mít vše v Google Tag Manageru hotové, přepni se do **Preview módu**. Do Chromu si přidej rozšíření [Meta Pixel Helper](https://chromewebstore.google.com/detail/meta-ads-data-advisor/fdgfkebogiimcoedlicjlajpkdmockpc) a stránku obnov.

![](https://nazakladedat.cz/wp-content/uploads/2020/06/Chrome-rozsireni-Meta-pixel-helper.jpg)

Chrome rozšíření Meta pixel helper

Dále pokračuj podle [návodu na kontrolu implementace Facebook pixelu.](https://nazakladedat.cz/kontrola-implementace-fb-pixelu/)

  
  
  

Trápíš se s nastavením a něco ti nejde? [Ozvi se mi a rád pomohu](https://nazakladedat.cz/kontakt/).

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