# URL: https://www.marketingppc.cz/utm-builder/

[Domů](https://www.marketingppc.cz/) » UTM builder – generátor UTM zdarma a bez reklam

# UTM builder – generátor UTM zdarma a bez reklam

UTM builder (nebo také URL builder) slouží k vytvoření adresy s UTM parametry ([co to jsou UTM parametry a jak je použít](https://www.marketingppc.cz/ppc/utm-parametry/)), které pomáhají odlišit různé typy návštěv v Google Analytics nebo [Google Analytics 4](https://www.marketingppc.cz/google-analytics/google-analytics-4/).

U některých kampaní bez použití UTM parametrů totiž dojde k tomu, že se v Google Analytics smíchají placené a neplacené zdroje návštěv, potažmo zdroj návštěvy skončí v kolonce (not set) nebo [(direct) / (none)](https://www.marketingppc.cz/ppc/direct-none/).

### Zadejte adresu URL webu a informace o kampani

URL cílové stránky (musí začínat na https:// nebo http://)

Zdroj

Médium

Kampaň

Klíčové slovo

Obsah kampaně

ID kampaně

Výsledná url:

zkopírováno do schránky

## Kdy UTM builder nejčastěji potřebujete a kdy potřeba není

Obecně lze říci, že UTM builder má smysl použít u každé marketingové kampaně, jejíž výsledky chcete sledovat v Google Analytics. Výjimkou jsou **Google Ads kampaně**, protože ty umí všechny statistiky do Google Analytics posílat automaticky.

U **Sklik** kampaní a Bing (**Microsoft Ads**) není potřeba URL adresy tvořit v UTM builderu, protože přímo v rozhraní lze zapnout automatické přidávání UTM parametrů.

U neplacených příspěvků na sociálních sítích zpravidla UTM parametry také nepotřebujete, protože většina zdrojů návštěv pošle do Google Analytics informaci pomocí refereru a jednotlivé sociální sítě snadno odlišíte. Pokud byste ale chtěli odlišit více neplacených kampaní na jedné sociální síti, hodí se UTM parametry i tady.

U všech ostatních kampaní **je vhodné UTM builder použít**. Nejčastěji budete UTM builder řešit pro:

* Facebook reklamy (abyste v Google Analytics dokázali odlišit placené návštěvy od neplacených)
* Reklamy z dalších sociálních sítí (TikTok, Pinterest, LinkedIn atp.)
* Newslettery a obecně všechny obchodní e-maily
* PDF dokumenty
* QR kódy
* Návštěvy z jiných webů, např. affiliate, PR články, nativní reklama, advertorial atp.

## Návod na použití UTM builderu

1. Do kolonky URL vložíte stránku, na kterou v reklamě nebo kampani uživatele posíláte
2. Vyplníte další kolonky. Vždy potřebujete minimálně zdroj a médium, často i kampaň, ostatní jsou volitelné často je potřebovat nebudete.
3. Zkopírujete výslednou URL nebo jen část s UTM parametry za otazníkem (např. pro Facebook reklamy, kde stačí do políčka [při tvorbě Facebook reklamy](https://www.marketingppc.cz/socialni-site/jak-nastavit-facebook-reklamu-jako-profesional/) vložit jen parametry).

### Příklad použití UTM parametrů

Konkrétně pokud bych [rozesílal náš newsletter](https://www.marketingppc.cz/newsletter/), ve kterém budu [lákat na webináře o online marketingu](https://www.marketingppc.cz/online-marketing-webinare/) , tak v newsletteru namísto adresy https://www.marketingppc.cz/online-marketing-webinare/ použiji tuto adresu:

```
https://www.marketingppc.cz/online-marketing-webinare/?utm_source=newsletter&utm_medium=email&utm_campaign=webinare
```

Nepoužívejte UTM parametry u interních odkazů (odkazy, které z jedné stránky vašeho webu vedou na jinou stránku vašeho webu)! Zkreslíte si tím (znehodnotíte) statistiky v Google Ads. Pro měření provozu z jedné stránky vašeho webu na jinou se používají přehledy v Google Analytics.

### Jak vyplnit jednotlivá pole

Názvosloví pro jednotlivé pole je teoreticky libovolné, ale je vhodné používat některé termíny přesně v tom tvaru, jak je znají Google Analytics a hlavně být konzistentní napříč kampaněmi.

Pokud jednou použijete *Google*, podruhé *google* a potřetí *Google.com*, budete mít jeden zdroj návštěv na čtyřech řádcích (protože Google Analytics používají *google.com*) a interpretace statistik bude velmi složitá.

#### URL cílové stránky

Použijte adresu, na kterou chcete uživatele v reklamě nebo kampani poslat. URL musí začínat na http:// nebo https://

#### Zdroj

Zdroj pomáhá identifikovat, odkud návštěva na web přišla. Nejčastěji tedy použijete název webu nebo v případě newsletteru název aplikace, ze které emaily posíláte.

Příklad: utm\_source=facebook, utm\_source=ecomail.

#### Médium

Slouží pro odlišení, zda se jedná o placenou kampaň, e-mail, banner či návštěvu ze sociální sítě.

Příklad: utm\_medium=email, utm\_medium=banner, utm\_medium=cpc.

#### Kampaň

Pomůže odlišit kampaně, které mají stejný zdroj a médium. Může sloužit i k vyfiltrování kampaní, které provozujete napříč několika platformami.

Příklad: utm\_campaign=leden-2023, utm\_campaign=retargeting

#### Klíčové slovo

Většinou nevyužijete, protože v Sklik nebo Bing rozhraní můžete zapnout automatické dosazování UTM parametrů. Může se hodit ale např. pro další rozlišení kampaní.

#### Obsah kampaně

Slouží pro odlišení více reklam nebo příspěvků na stejné platformě, např. pokud budete [provádět A/B testování](https://www.marketingppc.cz/ppc/ab-testovani/).

Příklad: utm\_content=bile-pozadi, utm\_content=modre-pozadi

#### ID kampaně

Většinou nevyužijete, slouží spíš pro systémy než pro lidi (jednodušší kampaně odlišit podle názvu než ID). Pokud provádíte import dat do Google Analytics 4 nebo používáte CRM systém, který pracuje s ID kampaní.

### Pravidla pro názvosloví UTM parametrů

Na jednu stranu je skutečně jedno, jestli do zdroje návštěvy napíšete *facebook* nebo *modra-socialni-sit* (pokud se v tom pak sami vyznáte), na druhou stranu některá pravidla je dobré dodržovat:

* Pište vše malými písmeny. Velká písmena jsou sice povolena, ale pokud jednou napíšete Facebook a jindy facebook, pro Google Analytics se jedná o dva odlišné termíny. Protože je snazší si zapamatovat, že vždy vše malými písmeny.
* Nepoužívejte mezery ani diakritiku, místo mezer použijte pomlčku nebo podtržítko.
* Použijte popisné názvy, aby ostatní lidí snadno pochopili, co se měří.
* Nepoužívejte UTM parametry pro interní odkazy.

Jak už bylo řečeno, hlavně buďte v názvosloví konzistentní. Pokud ve vaší firmě pracuje na kampaních více lidí, ujistěte se, že všichni používají stejné termíny.