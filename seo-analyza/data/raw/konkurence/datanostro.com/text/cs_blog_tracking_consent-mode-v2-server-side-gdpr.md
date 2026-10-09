# URL: https://datanostro.com/cs/blog/tracking/consent-mode-v2-server-side-gdpr/

[BLOG](/cs/blog/)
/
[TRACKING](/cs/blog/tracking/)

# Consent Mode v2 a server-side GTM: GDPR prakticky

Co po vás EU u Consent Mode v2 vlastně chce, jak ho nastavit se server-side GTM a co se stane, když návštěvník odmítne souhlas. Bez právničiny, prakticky.

T

Tým DataNostro

7. 6. 2026 · 11 min · Středně pokročilý

Consent Mode v2 zní jako další byrokracie, ale ve skutečnosti jde o jednoduchou věc: říct Googlu a Metě, zda návštevník dal souhlas se sledováním — a podle toho upravit, jaká data se posílají. Tady je, jak to funguje se server-side GTM a co reálně musíte nastavit.

## Co je Consent Mode v2

Consent Mode je způsob, jakým váš web předává reklamním a analytickým nástrojům Googlu informaci o tom, jaký souhlas návštěvník udělil. Od března 2024 je verze v2 povinná pro každého, kdo cílí na uživatele v EHP a chce v Google Ads používat remarketing nebo publika.

Verze v2 přidala k původním dvěma signálům dva nové. Celkem jde o čtyři:

* `ad_storage` — souhlas s ukládáním cookies pro reklamu;
* `analytics_storage` — souhlas s cookies pro analytiku (GA4);
* `ad_user_data` — souhlas s odesíláním uživatelských dat Googlu pro reklamní účely;
* `ad_personalization` — souhlas s personalizovanou reklamou a remarketingem.

## Basic vs. Advanced mode

Consent Mode má dva režimy a je důležité vědět, který používáte:

* **Basic mode:** dokud návštěvník nedá souhlas, žádné tagy se nespustí a do Googlu neletí vůbec nic. Po souhlasu se měří normálně. Jednodušší, ale přicházíte o data těch, kdo souhlas nedají.
* **Advanced mode:** i bez souhlasu se odešle tzv. *cookieless ping* — anonymní signál bez cookies a bez identifikátorů. Google z těchto pingů a z chování těch, kdo souhlas dali, dopočítá **modelované konverze**. Získáte tak odhad i tam, kde byste jinak měli nulu.

## Jak do toho zapadá server-side

Tady se hodí vyjasnit jeden častý omyl: **server-side tracking neobchází souhlas.** Consent signály se vyhodnocují stále — server-side jen mění, kde se data zpracovávají.

Server-side ale dává dvě praktické výhody:

* **Jedno místo pro pravidla.** V server-side GTM kontejneru máte centrální bod, kde rozhodujete, co se podle consent stavu pošle dál a co se zahodí. Nemusíte to řešit v každém tagu zvlášť.
* **Méně dat opouští prohlížeč.** Místo desítek volání cizích domén jde z prohlížeče jeden požadavek na vaši doménu. Server pak respektuje consent signály při dalším rozesílání.

## Jak to nastavit

Postup ve zkratce:

* **1.** Nasaďte certifikovanou consent management platformu (CMP) — banner, který sbírá souhlas a předává ho přes `gtag('consent', ...)`.
* **2.** Nastavte výchozí stav (`default`) všech čtyř signálů na `denied` před načtením tagů.
* **3.** Po interakci s bannerem pošlete `update` s reálnými hodnotami.
* **4.** V server-side GTM kontejneru čtěte consent stav z příchozí události a podle něj se rozhodněte, zda událost přeposlat do GA4, Meta CAPI a dalších.

Detailní postup najdete v dokumentaci v článku [Google Consent Mode V2 se server-side GTM](/cs/docs/pokrocile/consent-mode/).

## Co se stane, když návštěvník odmítne

Při Advanced mode se i po odmítnutí odešle cookieless ping a Google z něj dopočítá modelované konverze. Při Basic mode se nepošle nic. Pro většinu e-shopů, které spoléhají na přesnost konverzí pro Google Ads, je Advanced mode výhodnější — pokud ho správně doprovodíte korektním bannerem a default stavem.

## Časté chyby

* **Chybějící `default` stav.** Pokud nenastavíte výchozí `denied` před tagy, Google to bere jako nezavedený Consent Mode.
* **Zapomenuté nové signály.** Bez `ad_user_data` a `ad_personalization` přijdete o remarketingová publika v EHP.
* **Spoléhání na to, že server-side „vyřeší souhlas".** Nevyřeší — banner a CMP potřebujete tak jako tak.

## Shrnutí

Consent Mode v2 není volitelný — pro cílení na EHP je povinný. Server-side GTM ho neobchází, ale dává vám jedno centrální místo, kde consent pravidla vynutíte čistě a konzistentně. Kombinace správně nastaveného banneru, Advanced mode a server-side rozesílání je dnes nejlepší způsob, jak měřit přesně a přitom respektovat GDPR. [Vyzkoušejte DataNostro zdarma](/cs/pricing/).

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