# URL: https://datanostro.com/cs/blog/tracking/server-side-tracking-kompletni-pruvodce-2026/

[BLOG](/cs/blog/)
/
[TRACKING](/cs/blog/tracking/)

# Server-side tracking: kompletní průvodce 2026

Co je server-side tracking, jak funguje, kdy se vyplatí a jak ho nasadit. Srozumitelné vysvětlení od základů po praktické nasazení přes server-side GTM.

T

Tým DataNostro

7. 6. 2026 · 12 min · Začátečník

Server-side tracking přestal být doménou velkých e-shopů s vlastním vývojovým týmem. Dnes je to standardní způsob, jak měřit konverze přesně i ve světě ad-blockerů, iOS omezení a přísnějšího GDPR. Tento průvodce vysvětluje, co server-side tracking je, jak funguje a jak ho nasadíte — bez marketingových frází.

## Co je server-side tracking

Klasické (client-side) měření funguje tak, že v prohlížeči návštěvníka běží JavaScript, který posílá data přímo do Google Analytics, Meta Pixelu, TikToku a desítek dalších nástrojů. Každý nástroj má svůj vlastní skript a každý si v prohlížeči nastavuje cookies.

Server-side tracking tuto logiku přesouvá z prohlížeče na server. Prohlížeč pošle jeden požadavek do vašeho vlastního **server-side GTM kontejneru** (sGTM) a ten teprve rozesílá data jednotlivým platformám — ze serveru, server-to-server. Návštěvníkův prohlížeč už nekomunikuje s desítkami cizích domén.

## Proč na tom záleží

Client-side měření má v roce 2026 čtyři velké slabiny:

* **Ad-blockery** blokují skripty Google Analytics, Meta Pixelu i dalších nástrojů. Podle různých měření je v Česku zapnutý ad-block u 20–35 % návštěvníků. Jejich konverze se vám prostě nezapočítají.
* **Safari ITP a iOS** omezují životnost cookies nastavených JavaScriptem na 7 dní (v některých případech 24 hodin). Vracející se zákazník tak vypadá jako nový a atribuce se rozpadá.
* **Výkon webu.** Každý měřicí skript zpomaluje načítání. Server-side přesouvá tuto zátěž ze zařízení návštěvníka na server.
* **Soukromí a kontrola dat.** Server-side vám dává jedno místo, kde rozhodujete, jaká data a komu odcházejí — což výrazně usnadňuje GDPR compliance.

## Jak server-side tracking funguje krok za krokem

Tok dat při server-side měření vypadá takto:

* **1. Web GTM** v prohlížeči zachytí událost (zobrazení stránky, přidání do košíku, nákup).
* **2.** Místo aby ji poslal přímo do GA4 a Meta, pošle ji do vašeho **server-side GTM kontejneru** na vaší vlastní (sub)doméně, např. `sgtm.vasdomena.cz`.
* **3. sGTM kontejner** událost zpracuje, obohatí ji (např. o IP geolokaci) a rozešle ji server-to-server do GA4 přes Measurement Protocol, do Meta přes Conversions API, do Google Ads, TikToku a dalších.
* **4.** Cookies pro identifikaci návštěvníka se nastavují přes HTTP hlavičku z první strany — proto nepodléhají 7dennímu limitu jako klient-side cookies.

Klíčové je, že celá komunikace běží přes vaši doménu. Pro prohlížeč i pro ad-blocker to vypadá jako běžný požadavek na váš web, ne jako volání cizí tracking domény.

## Deduplikace: nezdvojujte konverze

Většina e-shopů jede přechodné období, kdy běží zároveň client-side i server-side měření. Aby se konverze nepočítaly dvakrát, posílají se s jednoznačným `event_id` (případně `transaction_id`), podle kterého platforma spáruje pixelovou a server-side událost. Detailně to rozebíráme v článku o [deduplikaci GA4 a Meta CAPI](/cs/blog/tracking/ga4-meta-capi-deduplikace-co-se-pokazi/).

## Kdy se server-side tracking vyplatí

Server-side dává smysl prakticky pro každý web, který měří konverze a investuje do reklamy. Návratnost je ale nejrychlejší, pokud:

* utrácíte za výkonnostní reklamu (Google Ads, Meta, Sklik, TikTok) — přesnější data znamenají lepší optimalizaci a nižší cenu za konverzi;
* máte výrazný podíl mobilní a Safari/iOS návštěvnosti;
* řešíte GDPR a chcete mít kontrolu nad tím, jaká data komu odcházejí;
* používáte více reklamních platforem najednou.

## Co potřebujete k nasazení

K provozu server-side GTM potřebujete tři věci: server-side GTM kontejner, místo kde poběží (Google Cloud nebo managed hosting) a napojení na vaše reklamní platformy. Postavit a provozovat sGTM na holém Google Cloudu jde, ale obnáší to správu serveru, škálování, monitoring a aktualizace. Managed hosting jako DataNostro tohle řeší za vás — nasazení je otázkou minut a o infrastrukturu se nestaráte. Rozdíly jsme porovnali v článku [Stape vs Addingwell vs Google Cloud vs DataNostro](/cs/blog/migrace/stape-addingwell-google-cloud-vs-datanostro-2026/).

## Časté omyly

* **„Server-side obejde souhlas."** Ne. Server-side tracking neobchází GDPR ani Consent Mode — naopak vám dává lepší nástroje, jak souhlas respektovat. Viz [Consent Mode v2 prakticky](/cs/blog/tracking/consent-mode-v2-server-side-gdpr/).
* **„Je to jen pro velké e-shopy."** Dnes ho nasadíte za odpoledne i na malém e-shopu.
* **„Nahradí web GTM."** Nenahradí — server-side a client-side GTM spolu spolupracují.

## Shrnutí

Server-side tracking je dnes nejspolehlivější způsob měření konverzí. Přesouvá sběr dat z křehkého prostředí prohlížeče na server, kde ho neomezí ad-blockery ani ITP — a zároveň vám dává plnou kontrolu nad daty kvůli GDPR. Pokud investujete do reklamy, je to jedna z mála změn, které se projeví přímo na ceně za konverzi. [Vyzkoušejte si DataNostro zdarma](/cs/pricing/) nebo si projděte [základy server-side GTM](/cs/docs/zaciname/sgtm-zaklady/) v dokumentaci.

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