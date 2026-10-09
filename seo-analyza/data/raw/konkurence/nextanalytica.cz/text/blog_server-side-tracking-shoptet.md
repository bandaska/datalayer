# URL: https://www.nextanalytica.cz/blog/server-side-tracking-shoptet

[✨Novinka: MaxAI Chat → konverzační analytika nad vašimi zdrojovými datyBudoucnost analytiky →](/maxai-chat)

[![NEXT analytica](https://assets.macaly-user-data.dev/rwsgg7y2w6pkg5rqlyocukkq/lqavc5ihdvun17rrxd7kj7j2/65Kv0PwucA58Jsj_aKt7i.svg)](/)

[Server-side Tracking](/server-side-tracking)[Next Reporting](/next-reporting)[MaxAI Chat](/maxai-chat)[Reference](/reference)[O nás](/o-nas)[Kontakt](/kontakt)

[🇬🇧EN](https://www.nextanalytica.io/blog/server-side-tracking-shoptet "Switch to English")[Přihlášení / Registrace](https://app.nextanalytica.io/auth/sign-in?returnTo=%2Fdashboard)[Poptat](/kontakt)

1. [Domů](/)
2. /
3. [Blog](/blog)
4. /
5. Server-Side Tracking na platformě Shoptet: Jak jsme našli spolehlivé řešení (srovnání 14 e-shopů)

Server-Side Tracking6. 12. 2024•10 min čtení

# Server-Side Tracking na platformě Shoptet: Jak jsme našli spolehlivé řešení (srovnání 14 e-shopů)

![Server-Side Tracking na platformě Shoptet: Jak jsme našli spolehlivé řešení (srovnání 14 e-shopů)](https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/rwsgg7y2w6pkg5rqlyocukkq/lqavc5ihdvun17rrxd7kj7j2/p1Kbgkhc4Gsy7gKH3lFcT.png)

V NEXT analytica jsme úspěšně implementovali serverové měření na desítkách e-shopů postavených na platformě Shoptet a nyní jsme jich 14 porovnali. I přes to, že Shoptet aktuálně přímo nepodporuje odesílání údajů z webu na Server Tracking Endpoint, našli naši analytici efektivní a spolehlivé řešení, které umožňuje plnohodnotné využití Server-Side Trackingu i na této platformě.

![Server-Side Tracking na Shoptet – schéma řešení](https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/rwsgg7y2w6pkg5rqlyocukkq/lqavc5ihdvun17rrxd7kj7j2/xyfPxJiR1L4sD0kucM0z5.png)

## Co je Server-Side Tracking a proč je důležitý?

Server-Side Tracking představuje moderní technologii, která umožňuje přesun měření údajů o návštěvnosti a nákupech z prohlížeče na server. Odtud se data bezpečně a efektivně odesílají do koncových systémů jako je Google Analytics, Google Ads, Meta Ads a dalších marketingových a analytických nástrojů. Tento přístup nejen zvyšuje přesnost údajů, ale také pomáhá překonat omezení způsobená blokováním cookies nebo zkrácením jejich životnosti v některých prohlížečích.

V tomto článku vám ukážeme, jak se nám podařilo vyřešit výzvu na platformě Shoptet a proč je Server-Side Tracking nevyhnutelným krokem pro moderní e-shopy.

Od nastavení Server Side Trackingu uživatelé nejvíce očekávají:

* Zvýšení objemu naměřených dat (v průměru zvýšení 15,32 %)
* Zvýšení rychlosti načítání webových stránek (Google PageSpeed)

## Zvýšení objemu naměřených dat

Zvýšení objemu naměřených dat je vnímáno jako hlavní benefit při nasazení měření přes Server-side. Ve studiích je zmíněno zvýšení objemu naměřených dat až o 30 %, každopádně je tahle pomyslná hranice dosáhnutá málokdy. Záleží jednak na nastavení analytiky webu před nasazením SST a také na řadě externích faktorů, které se nedají vždy ovlivnit.

Pro vyhodnocení úspěšnosti SST jsme se rozhodli použít nástroj **Adblock Detection**, který byl vyvinutý interně v Next analytica. Jak napovídá název nástroje, funguje na principu zjišťování blokování odesílaných údajů do jednotlivých systémů (Google Analytics 4, Google Ads, Facebook Ads apod.) až na úrovni jednotlivých událostí.

Tyto údaje jsou primárně blokované díky nainstalovanému adblockeru v prohlížeči, případně kvůli konkrétnímu nastavení prohlížeče uživatele. Skutečná funkcionalita Server-Side Trackingu tedy spočívá v obcházení těchto adblockerů a díky správně nastavenému SST dokážeme blokovaná data znovu obnovit a změřit.

![Měření analytiky – přehled blokovaných událostí](https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/rwsgg7y2w6pkg5rqlyocukkq/lqavc5ihdvun17rrxd7kj7j2/GoyecfVN7RD5BbAxfRxmj.png)

Přehled blokovaných událostí napříč 14 e-shopy na Shoptetu

Z dostupných dat vyplývá, že při celkovém počtu téměř **780 000 naměřených událostí** bylo v rámci celého sledovacího období zablokovaných **15,23 %** alespoň jednou. Konkrétní čísla podle zablokovaných systémů můžete vidět v tabulce výše.

## Které události jsou nejvíce ovlivněné blokováním?

Nejvíce naměřených událostí evidujeme u eventu **view\_item\_list**, kde se v průměru blokuje 18 % těchto událostí. Tato data dokážeme díky Server-Side trackingu obnovit a neztratit.

Při události **purchase** je zablokovaných 13,23 % eventů, které by bez Server-Side trackingu zůstaly ztracené. V absolutních číslech to znamená, že z celkového počtu 3 879 nákupů se podařilo obnovit celkem **513 transakcí**. Díky SST dokážeme zachytit přesnější údaje o transakcích a lépe optimalizovat marketingové aktivity.

780 000+

naměřených událostí

15,23 %

průměrně blokovaných dat

513

obnovených transakcí

## Role Google Tag Manager (GTM) v blokování údajů

Ve sloupci "% GTM" vidíme podíl případů, ve kterých by byl klasický kód Google Tag Manager zablokovaný při načítání. Tuto metriku dokážeme měřit díky úpravě webového kódu pro Google Tag Manager, který využívá právě Server-Side Tracking.

Nástroj Adblock Detection zároveň také zkoumá využitelnost prohlížečů. Výsledky mohou vypadat i takhle:

![Rozložení prohlížečů uživatelů](https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/rwsgg7y2w6pkg5rqlyocukkq/lqavc5ihdvun17rrxd7kj7j2/HzqidrTKVUc9JPtZbkItm.png)

Rozložení prohlížečů — drtivá většina (67 %) používá Chrome, 17 % Safari a Firefox

Z grafu je zřejmé, že drtivá většina uživatelů (až 67 %) používá prohlížeč Google Chrome. Dalších 17 % uživatelů používá prohlížeče Safari a Firefox. Tyto prohlížeče jsou ovšem známé svým omezením životnosti cookies (včetně cookies třetích stran), což může významně ovlivnit přesnost a spolehlivost dat v e-commerce odvětví.

## Proč je zkrácená životnost cookies problémem?

Zkrácená životnost cookies v prohlížečích Safari a Firefox znamená, že marketingové nástroje mají omezené možnosti sledování uživatelů a jejich chování na stránce. To může zkreslit výsledky analytiky a komplikovat vyhodnocení kampaní, což se negativně projeví na celkové efektivitě e-shopů.

Správně implementovaný Server-Side Tracking umožňuje ukládat cookies v kontextu první strany (**first-party cookies**), což zaručuje jejich delší životnost i u prohlížečů, které standardně zkracují čas uchování cookies. Tímto způsobem dokážeme zachovat kvalitu a přesnost dat, což je klíčové pro optimalizaci marketingových strategií a efektivní řízení reklamních kampaní.

## Zvýšení rychlosti načítání webových stránek

Další výhodou Server-Side Trackingu je přesun měřících, retargetingových a konverzních kódů z webového prohlížeče na server. Javascriptové kódy, které se obvykle načítají přímo v prohlížeči, jsou zpracovány mimo něj — na serverové úrovni.

Na základě porovnání výsledků testu rychlosti stránek pomocí PageSpeed Insights jsme zjistili, že implementace Server-Side Trackingu přinesla měřitelné zlepšení. Celkové skóre výkonnosti se zvýšilo o 3 body — z původních 37 na 40.

PageSpeed skóre

Před37

Po SST40

+8 %

Total Blocking Time

Před1 900 ms

Po SST1 120 ms

−41 %

Speed Index

Před4,1 s

Po SST3,8 s

zlepšení

## Shrnutí výhod Server-Side Trackingu na Shoptet

Obnova ztracených dat

* V průměru 15,23 % událostí napříč 14 e-shopy bylo blokovaných adblockery nebo omezeními cookies.
* Díky SST dokážeme tyto údaje obnovit a přesně zaznamenat.

Zvýšení přesnosti analytických nástrojů

* Lepší sledování klíčových metrik pro Google Analytics, Google Ads, Meta Ads a další systémy.
* Schopnost pracovat s prohlížeči, které omezují životnost cookies (Safari, Firefox).

Zlepšení výkonu webu

* Přesun javascriptových kódů z prohlížeče na server zvyšuje rychlost načítání stránek.
* Výrazné zlepšení metrik Total Blocking Time (−41 %) a Speed Index.

Překonání limitů platformy Shoptet

* Shoptet přímo nepodporuje SST — naše řešení tento limit spolehlivě obchází.
* Zabezpečuje úplné, přesné a dlouhodobě použitelné údaje pro marketingové nástroje.

**Zdroj:** E-shopy, které jsme porovnávali: Nutsman, Kava, Marmelády s příběhem, Winehouse, Renovality, Vingo, Danlux, GamePC, Bornature, Solar Import, Higarden, Kompresory-Vzduchotechnika

## Chcete zlepšit výkonnost vašeho e-shopu na Shoptet?

Pomůžeme vám implementovat Server-Side Tracking a maximalizovat výhody pro váš e-shop. Kontaktujte nás!

[sales@nextanalytica.io](mailto:sales@nextanalytica.io)

[Zpět na blog](/blog)

[![NEXT analytica](/logo.svg?dpl=dpl_GpdBX3A83fk2MxGU55uoKJPU4z9K)](/)

Od Server-side trackingu přes pokročilý reporting k AI predikcím.

#### Služby

* [Server-side Tracking](/server-side-tracking)
* [Next Reporting](/next-reporting)
* [MaxAI Chat](/maxai-chat)
* [Profit Import](/profit-import)

#### Firma

* [O nás](/o-nas)
* [Kariéra](/kariera)
* [Blog](/blog)
* [Kontakt](/kontakt)

#### Další

* [Reference](/reference)
* [Přihlášení / Registrace](https://app.nextanalytica.io/auth/sign-in?returnTo=%2Fdashboard)
* [Partnerský program](/partnersky-program)
* [Measure Club](/hanspaulsky-measure-club)

[![Microsoft for Startups](https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/rwsgg7y2w6pkg5rqlyocukkq/lqavc5ihdvun17rrxd7kj7j2/pIhiHIodytC2R5AwxU58K.png)](https://www.microsoft.com/cs-cz/startups)[Google recenze](https://www.google.com/search?sca_esv=aa86132b60f0534c&sxsrf=ANbL-n5LNIpIER6UQ30UZUJiMetVfT0RPQ:1772023362588&q=next+analytica&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdgn7euXxbIH7fqAOkDTwRDukyUoYOwMRNobhRcD9T0ZMy0CXP6owg_q7ucCf6n654EHDGs%3D&uds=ALYpb_mM1P_6lpjjfowRxWEKPgkkwPiXXjQDYr0NimnwfocWKFsvQUnjhnZ9LU-WkeJxBdOMM2iISlrwsWiFu0XSiLOwuOt5z0MbAOBfsOggiPbm_OrPkY8&sa=X&ved=2ahUKEwiR97241fSSAxWkBtsEHcwmEnoQ3PALegQIMRAF&biw=1920&bih=934&dpr=1)

© 2026 NEXT analytica. Všechna práva vyhrazena.

[Ochrana soukromí](/ochrana-soukromi)[Obchodní podmínky](/vop)

Made with AI in Macaly×