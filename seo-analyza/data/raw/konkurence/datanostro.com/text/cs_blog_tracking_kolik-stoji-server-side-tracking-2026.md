# URL: https://datanostro.com/cs/blog/tracking/kolik-stoji-server-side-tracking-2026/

[BLOG](/cs/blog/)
/
[TRACKING](/cs/blog/tracking/)

# Kolik stojí server-side tracking? Rozpočet pro rok 2026

Holý Google Cloud, nebo managed hosting? Z čeho se skládá cena server-side trackingu, kde jsou skryté náklady a kdy se vyplatí managed řešení.

T

Tým DataNostro

7. 6. 2026 · 9 min · Začátečník

„Kolik mě bude server-side tracking stát?" je první otázka, kterou většina e-shopů řeší. Odpověď není jedno číslo — záleží na tom, jestli si infrastrukturu postavíte sami na Google Cloudu, nebo použijete managed hosting. Tady je rozklad nákladů bez marketingu.

## Z čeho se cena skládá

Náklady na server-side tracking mají tři složky, a ta první bývá nejmenší:

* **Infrastruktura** — server, na kterém běží server-side GTM kontejner.
* **Správa a čas** — nastavení, monitoring, aktualizace, řešení výpadků.
* **Cena chyby** — kolik vás stojí špatně nasazené měření (ztracené konverze, špatná optimalizace reklamy).

## Varianta A: holý Google Cloud (DIY)

Server-side GTM můžete provozovat sami na Google Cloudu (App Engine nebo Cloud Run). Samotná infrastruktura není drahá — pro menší a střední provoz jde o nižší stovky korun měsíčně, cena roste s počtem požadavků.

Skryté náklady jsou ale jinde:

* **Čas na nastavení.** Konfigurace App Engine/Cloud Run, vlastní doména, SSL, propojení s web GTM — pro někoho bez zkušeností je to dny práce.
* **Škálování.** Při náporu (Black Friday) musíte zajistit, aby server zvládl špičky a zároveň jste neplatili za zbytečně velký provoz mimo ně.
* **Monitoring a výpadky.** Pokud kontejner spadne, přestanete měřit — a nikdo vám to neřekne, dokud si nevšimnete propadu v datech.
* **Aktualizace.** Google verze kontejneru aktualizuje, vy musíte držet krok.

DIY dává smysl, pokud máte vlastní DevOps a chcete plnou kontrolu. Pro většinu e-shopů je „levný" Google Cloud ve skutečnosti nejdražší ve vynaloženém čase.

## Varianta B: managed hosting

Managed hosting (jako DataNostro) za vás řeší infrastrukturu, škálování, monitoring i aktualizace za fixní měsíční poplatek. Platíte za to, že se o nic nestaráte a nasazení je otázkou minut, ne dní.

Výhody:

* předvídatelná cena bez překvapení z cloudové faktury;
* nasazení za minuty přes hotové integrace;
* monitoring a alerty, takže o výpadku víte hned;
* podpora, když něco nesedí.

## Jak to porovnat férově

Při srovnávání nepočítejte jen cenu serveru. Připočtěte hodnotu svého času (nebo času vývojáře) a riziko, že špatně nasazené měření vás bude stát na reklamě víc než celý hosting. Reálné srovnání konkrétních poskytovatelů jsme udělali v článku [Stape vs Addingwell vs Google Cloud vs DataNostro](/cs/blog/migrace/stape-addingwell-google-cloud-vs-datanostro-2026/).

## Návratnost

Server-side tracking není čistý náklad — je to investice do přesnosti dat. Pokud díky němu reklamní systémy dostanou o desítky procent více konverzních dat, dokážou lépe optimalizovat a vy zaplatíte za stejný výsledek méně. U e-shopu s rozumným reklamním rozpočtem se měsíční poplatek za hosting typicky vrátí mnohonásobně už jen na úspoře v ceně za konverzi.

## Shrnutí

Cena server-side trackingu není o ceně serveru, ale o celkových nákladech včetně času a rizika. DIY na Google Cloudu je technicky levné, ale náročné na správu; managed hosting stojí fixní poplatek, ale ušetří čas a riziko. Pro většinu e-shopů je rozhodující návratnost přes přesnější reklamní data. [Podívejte se na ceník DataNostro](/cs/pricing/).

Sdílet

### Nový článek 1× měsíčně

Hloubkové návody pro server-side tracking + případové studie z CZ trhu. Žádný spam, jen 1 e-mail za měsíc. Odhlásit kdykoli.

Odebírat

[Zpět na Tracking](/cs/blog/tracking/)

DALŠÍ V TÉTO KATEGORII

[### Co je CRO (conversion rate optimization) a role měření

CRO je systematické zvyšování konverzního poměru. Stojí a padá na měření — bez spolehlivých dat optimalizujete naslepo. Jak …](/cs/blog/tracking/co-je-cro-a-role-mereni/)
[### Měření YouTube a video reklam se server-side trackingem

Video reklamy se měří jinak než vyhledávání — velkou roli hraje view-through a delší cesta od zhlédnutí k …](/cs/blog/tracking/mereni-youtube-a-video-reklam-server-side/)
[### Server-side tracking a A/B testování: aby výsledky seděly

A/B test je jen tak dobrý jako data, kterými měříte výsledek. Když měření ztrácí konverze nerovnoměrně, test klame. …](/cs/blog/tracking/server-side-tracking-a-ab-testovani/)