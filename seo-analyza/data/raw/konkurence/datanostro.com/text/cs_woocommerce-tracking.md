# URL: https://datanostro.com/cs/woocommerce-tracking/

🟣
WOOCOMMERCE · WORDPRESS · CZ

# Server-side tracking *pro WooCommerce* — bez page builderu, bez Tag Manager pluginu.

WordPress + WooCommerce mají desítky tracking pluginů, ale všechny běží klient-side a všechny vám přidají 100+ KB do bundle. DataNostro server-side běží mimo váš WordPress — žádné pluginy navíc, žádný impact na page speed, plná kontrola přes GTM container.

0 KB

page bloat

+25 %

recovered events

5 min

setup

[Začít zdarma — 14 dní](/cs/accounts/signup/)
[Zobrazit ceník](/cs/pricing/)

Bez kreditní karty · EU servery · Setup za pět minut

PROČ WOOCOMMERCE PŘES SERVER-SIDE

## Server-side > WordPress tracking pluginy

### Žádný impact na page speed

Tracking pluginy přidávají 100+ KB JS do každé stránky. DataNostro běží mimo WordPress, načítáte jen GTM bootstrap (~6 KB). Core Web Vitals zůstávají čisté.

### Žádné konflikty s pluginy

WP tracking pluginy si často šlapou navzájem do dataLayeru. DataNostro standardní GA4 e-commerce dataLayer formát = kompatibilita s libovolnou kombinací pluginů.

### Sklik a Heureka pro CZ e-shopy

WooCommerce nemá native Sklik nebo Heureku — řeší se přes 3rd-party pluginy s vlastními bugy. DataNostro to má built-in jako platformu.

### Stripe / WooPayments fanout

Stripe webhook → DataNostro → GA4 + Meta + Ads + Klaviyo. Žádný plugin, žádný cron na WP serveru, žádné race conditions s order\_id.

SETUP

## Tři kroky a data tečou.

1. 1

   ### Vygenerujte GTM container

   Setup Assistant pozná WooCommerce a generuje JSON container s purchase, add\_to\_cart, view\_item, begin\_checkout eventy.
2. 2

   ### Naimportujte do GTM

   V GTM → Admin → Import Container → vyberte JSON. Pak GTM web container ID vložte do WordPress (Site Kit by Google nebo GTM4WP plugin — minimum jedné integrace).
3. 3

   ### Tracking subdoména

   V GTM → Server container → tags pošlete na vaši DataNostro subdoménu. CNAME, SSL — automatika.

CO JE V CENĚ

## WooCommerce + CZ-first stack

Vše ve STARTER plánu od 349 Kč. Bez per-pixel poplatků.

**Sklik (SEM)**

Server-to-server (S2S)

**Heureka**

Ověřeno + feed proxy

**GA4 + Google Ads**

Deduplikace

**Meta CAPI**

Pixel + S2S

**Klaviyo**

WP forms + WooCommerce

**Stripe / WooPayments**

Webhook fanout

**ISDOC fakturace**

Pohoda kompatibilní

**Multi-language site**

Polylang / WPML aware

JEDEN TARIF — VŠECHNY PLATFORMY

## Bez per-pixel placení. *Neomezené platformy.*

WooCommerce + 17 dalších platforem (Sklik, Heureka, GA4, Google Ads, TikTok…) v jednom STARTER plánu od **349 Kč/měsíc**. Bez příplatků za pixely.

[Zobrazit ceník](/cs/pricing/)
[Začít zdarma](/cs/accounts/signup/)

FAQ

## Časté otázky

Co je server-side tracking pro WooCommerce a jak funguje?
+

Server-side tracking (nebo server-side tagging) pro WooCommerce znamená, že se konverzní eventy — purchase, add\_to\_cart, begin\_checkout — neposílají z prohlížeče, ale z vašeho serveru přes server-side GTM kontejner. DataNostro běží na vlastní subdoméně mimo WordPress, takže eventy obejdou ad-blockery i Safari ITP, nezatíží Core Web Vitals a dorazí kompletní do GA4, Google Ads, Meta CAPI, Sklik i Heureky. Žádný tracking plugin ve WordPressu navíc.



Je to WordPress plugin pro server-side tracking?
+

Ne — a to je záměr. Klasické WordPress tracking pluginy běží klient-side a přidají 100+ KB JS do každé stránky. DataNostro server-side běží mimo WordPress: stačí GTM kontejner ID přes Site Kit nebo GTM4WP a eventy pak tečou přes náš server-side kontejner na vaší subdoméně. Žádný těžký plugin, žádné konflikty v dataLayeru, žádný dopad na rychlost webu.



Potřebuji speciální WooCommerce plugin?
+

Ne. Stačí GTM container ID v site kit nebo GTM4WP. Eventy posíláme přes server-side GTM, ne přes WordPress backend.



Funguje to s subscriptions / memberships?
+

Ano. WooCommerce Subscriptions, Memberships i Bookings posílají standardní WC actions, které GTM4WP zachytí a propaguje do našeho dataLayeru.



Co Polylang / WPML?
+

Multi-jazykové eventy podporujeme. Posíláme parametr `language` v každém eventu, GA4 reporty filtrujte podle něj.



WooPayments vs. Stripe — kterou variantu?
+

Obě podporujeme. WooPayments používá Stripe pod kapotou — webhooky chytáme oba a routujeme do platforem s deduplikací.

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
[Shoptet](/cs/shoptet-tracking/)
[Upgates](/cs/upgates-tracking/)

## WooCommerce server-side bez balastu

Žádný plugin, žádný page bloat, žádný plugin konflikt. GTM container + subdoména + 14 dní zdarma.

[Začít zdarma — 14 dní](/cs/accounts/signup/)
[Mám otázky](/cs/contact/)