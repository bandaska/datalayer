# URL: https://datanostro.com/cs/tools/sgtm-detector/

1. [DataNostro](/cs/)
3. [Nástroje](/cs/tools/)
5. sGTM Detector

🔍

# sGTM Detector

Bezplatný nástroj · Bez registrace

Zjistěte, jestli libovolný web používá server-side Google Tag Manager. Kontrolujeme DNS záznamy, CNAME řetězce, HTML kód a GTM konfiguraci.

Zadejte URL webu

Analyzovat



Analyzuji web...

Kontroluji DNS záznamy...

## Co kontrolujeme?

🌐

### DNS CNAME

Skenujeme 12+ subdomén (sgtm., gtm., track., ss., ...) a hledáme CNAME záznamy na známé sGTM poskytovatele.

🏷️

### GTM Container

Detekujeme GTM container ID (GTM-XXXXXX), noscript fallback a server-side konfiguraci v HTML kódu.

🔗

### Transport URL

Hledáme transport\_url nebo server\_container\_url v gtag konfiguraci — klíčový indikátor server-side trackingu.

🛡️

### Custom Loader

Kontrolujeme, jestli je GTM JavaScript načítán z vlastní (first-party) domény místo googletagmanager.com.

🏢

### Provider

Identifikujeme poskytovatele sGTM — DataNostro, Google Cloud Run, AWS, Cloudflare Workers a jiní.

❤️

### Health Check

Pokud najdeme sGTM endpoint, ověříme jeho dostupnost přes /healthy endoint.

## Nemáte ještě server-side tracking?

S DataNostro nastavíte sGTM za 5 minut. Žádné GCP, žádná údržba. Od 349 Kč/měsíc.

[Začít zdarma](/cs/pricing/)