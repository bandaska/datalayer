# URL: https://datanostro.com/cs/upgates-tracking/

🚀
UPGATES · CZ E-SHOP PLATFORMA

# Server-side tracking *pro Upgates* — GA4, Sklik a Meta CAPI bez šablony.

Upgates má vlastní GTM widget, který klient-side eventy posílá do GA4. Server-side přes DataNostro tu samou data pošle přes vaší doménu — odolné vůči ITP, ad-blockerům a iOS update. Plus Sklik a Heureka, které Upgates v základu neumí.

5 min

setup time

+25 %

recovered conversions

0 ×

šablona dotčena

[Začít zdarma — 14 dní](/cs/accounts/signup/)
[Zobrazit ceník](/cs/pricing/)

Bez kreditní karty · EU servery · Setup za pět minut

PROČ UPGATES PŘES SERVER-SIDE

## Co Upgates v základu neumí

### Sklik a Heureka native

Upgates posílá eventy do GA4 a Meta Pixel. Sklik server-side, Heureka feed a Heureka pixel musíte řešit ručně. DataNostro to má built-in.

### Server-side přes vlastní doménu

Upgates GTM widget běží jako klient-side script. Ad-blockery a iOS ho zlikvidují. DataNostro doručí data ze serveru — neblokovatelné.

### Pre-konfigurovaný GTM container

Setup Assistant pozná Upgates a vygeneruje GTM container s purchase, add\_to\_cart, view\_item, view\_category eventy. Stačí naimportovat.

### Comgate / GoPay / ThePay

Webhooky všech CZ payment gatewayů (Comgate, GoPay, ThePay, Adyen) jdou do DataNostro a fanout na GA4 + Meta + Sklik + Heureka s deduplikací.

SETUP

## Tři kroky a data tečou.

1. 1

   ### Setup Assistant pozná Upgates

   Vygeneruje GTM container s mapováním Upgates dataLayer eventů. Stažený JSON má 25 pre-konfigurovaných tagů.
2. 2

   ### Naimportujte do GTM

   Google Tag Manager → Admin → Import Container. Vybírejte mode "Merge" pokud už máte container, "Overwrite" pokud začínáte čistě.
3. 3

   ### Tracking subdoména v Upgates

   Upgates admin → Nastavení → Marketing → Google Tag Manager → vložíte naši subdoménu. SSL + DNS CNAME automaticky.

CO JE V CENĚ

## Upgates + DataNostro stack

Vše ve STARTER plánu od 349 Kč. Bez per-platforma fees.

**Sklik (SEM)**

Server-to-server měření

**Heureka Ověřeno + feed**

First-party

**GA4 + Google Ads**

Deduplikace

**Meta CAPI**

Hashed PII

**Klaviyo**

Email tracking

**Comgate / GoPay**

Webhook routing

**ISDOC fakturace**

CZ účetnictví

**13 power-upů**

Custom Loader, Cookie Keeper…

JEDEN TARIF — VŠECHNY PLATFORMY

## Bez per-pixel placení. *Neomezené platformy.*

Upgates + 17 dalších platforem (Sklik, Heureka, GA4, Google Ads, TikTok…) v jednom STARTER plánu od **349 Kč/měsíc**. Bez příplatků za pixely.

[Zobrazit ceník](/cs/pricing/)
[Začít zdarma](/cs/accounts/signup/)

FAQ

## Časté otázky

Funguje to s Upgates Standard / Premium / Enterprise?
+

Ano — DataNostro tracking pracuje přes GTM container, který je ve všech Upgates tarifech. Žádné rozdíly v podpoře.



Co Upgates Marketing modul?
+

Upgates Marketing posílá Sklik retargeting kód v base templátu. To si necháte aktivní pro retargeting cookies. Konverze posíláme my server-side přes vlastní pipeline.



Heureka feed se generuje v Upgates. Proč ho dublovat?
+

Upgates Heureka feed běží na \*.upgates.cz subdoméně. Náš feed běží na vaší doméně (např. `feed.eshop.cz/heureka.xml`) — first-party, lepší cache a brand control.



Můžu mít Upgates GTM a DataNostro paralelně?
+

Ano. Upgates GTM widget posílá pixel-side eventy, DataNostro server-side. Stejný event\_id = deduplikace v GA4 / Meta. Reportování v Ads Manageru bude konečně přesné.

## Další server-side integrace

Jeden sGTM kontejner, jeden plán — všechny vaše platformy server-side, mimo dosah ad-blockerů.

[**Nový v server-side trackingu?** Přečtěte si kompletního průvodce od základů →](/cs/docs/academy/academy-server-side-tracking-101/)

[Meta CAPI](/cs/meta-capi/)
[TikTok Events API](/cs/tiktok-events/)
[Microsoft Ads & Bing](/cs/microsoft-ads-tracking/)
[Pinterest CAPI](/cs/pinterest-capi/)
[Klaviyo Events API](/cs/klaviyo-events/)
[Awin server-to-server](/cs/awin-tracking/)
[Sklik & Seznam SEM](/cs/sklik-konverze/)
[Heureka](/cs/heureka/)
[WooCommerce](/cs/woocommerce-tracking/)
[Shoptet](/cs/shoptet-tracking/)

## Upgates server-side za pět minut

GTM container, tracking subdoména, Sklik a Heureka konverze. Bez vývojáře. 14 dní zdarma, bez kreditní karty.

[Začít zdarma — 14 dní](/cs/accounts/signup/)
[Mám otázky](/cs/contact/)