# URL: https://datanostro.com/cs/roadmap/

ROADMAP

# Co *stavíme* a o čem přemýšlíme.

Veřejná, transparentní. Kliknutím na šipku ▲ hlasujete pro funkci, kterou chcete prioritně. Vaše hlasy nám pomáhají rozhodnout, co dělat dřív.

## V práci

4

1

### DataNostro Academy (CZ knowledge base)

Tutorialy a kurzy v češtině — server-side tracking, sGTM, Consent Mode, GDPR. Free pro klienty, prémiové sekce pro nákup.

2026 Q4
 [1. 5. 2026](/cs/changelog/datanostro-academy-launched/)

0

### DataNostro Care (managed onboarding)

Placená služba — náš tým vám sGTM nastaví, otestuje a předá hotové. SLA na proxy uptime, 1-on-1 onboarding call, prioritní support.

2026 Q4
 [1. 5. 2026](/cs/changelog/datanostro-care-launched/)

0

### Power-Up Marketplace UI

Katalog instalovatelných power-upů s konfigurací z dashboardu.

2026 Q3

0

### Single Sign-On (SAML / OIDC)

SSO pro Enterprise — Google Workspace, Azure AD, Okta. Provisioning týmů přes SCIM.

2026 Q4
 [1. 5. 2026](/cs/changelog/sso-config-skeleton/)

## Plánováno

0

Žádné položky.

## Nápady

0

Žádné položky.

## Vydáno

28

0

### API dokumentace (Swagger)

Public Swagger/Redoc s try-it-now příklady payloadů.

2026 Q3
 [25. 3. 2026](/cs/changelog/public-api-swagger/)

0

### Click ID Restorer

Automatické obnovení \_gcl\_aw / \_fbc / \_ttp / \_ScCid z URL parametrů i po ITP / iCloud Private Relay vyčištění.

2026 Q3
 [11. 4. 2026](/cs/changelog/click-id-restorer/)

0

### Consent Mode v2 enforcement

Server-side respektuje ad\_user\_data / ad\_personalization. Strict mode úplně zablokuje dispatch při denied; default strip PII a \_fbp / \_fbc / \_gcl\_aw cookies.

2026 Q3
 [19. 4. 2026](/cs/changelog/consent-mode-v2-enforcement/)

0

### Custom HTTP forwarder UI

Vytvoření vlastního HTTP destination tagu z dashboardu (bez sGTM Custom HTTP).

[28. 3. 2026](/cs/changelog/klaviyo-custom-http/)

0

### DataNostro Store (KV / file store API)

Per-tenant key-value store dostupný z sGTM šablon — kešování, deduplikace eventů, lookup tabulky. Stape parity.

2026 Q3
 [4. 4. 2026](/cs/changelog/datanostro-store/)

0

### Dedikovaná landing pro migraci z Addingwell

EU vs EU srovnání — DataNostro přidává ISDOC, Sklik native, Heureka XML feed proxy a CZ/SK podporu. Importer ?source=addingwell s addingwell-specific export hi…

2026 Q2
 [16. 5. 2026](/cs/changelog/addingwell-migration-landing/)

0

### Fakturoid jako alternativa k Superfakturze

Druhý invoicing provider — DataNostro vystavuje faktury rovnou do vašeho Fakturoid účtu nebo Superfaktury, podle preference.

2026 Q3
 [2. 4. 2026](/cs/changelog/fakturoid-provider/)

0

### Heureka feed proxy

Server-side proxy pro Heureka XML feed s cache, transformacemi a ověření. Specifické pro CZ/SK e-shopy.

2026 Q3
 [12. 4. 2026](/cs/changelog/heureka-feed-proxy/)

0

### ISDOC 6.0.2 export faktur

Stahování faktur v českém formátu ISDOC pro automatické zpracování v účetních systémech (Pohoda, Money S3, ABRA).

2026 Q3
 [3. 4. 2026](/cs/changelog/isdoc-export/)

0

### Klaviyo native integration

Forwarding e-commerce eventů přímo do Klaviyo accounts.

[28. 3. 2026](/cs/changelog/klaviyo-custom-http/)

0

### Lead-Gen → CRM + Ad Platforms (Stape Lead Gen parity)

Forward leadů z webových formulářů do CRM (HubSpot, Pipedrive) a zároveň do Meta CAPI / Google Ads jako server-side conversion.

2026 Q3
 [9. 4. 2026](/cs/changelog/lead-gen-crm-ads/)

0

### LinkedIn Conversions API

Native konektor pro LinkedIn Conversions API.

2026 Q4
 [29. 3. 2026](/cs/changelog/snap-pin-li-msft-capi/)

0

### Live event debugger

Real-time log eventů z vašeho sGTM kontejneru s filtry a payload diff.

2026 Q2

0

### Microsoft Ads (Bing) UET

Native konektor pro Bing UET tag server-side.

2026 Q4
 [29. 3. 2026](/cs/changelog/snap-pin-li-msft-capi/)

0

### Multi-account switcher

Pro agentury — přepínání mezi tenanty z topbaru bez logoutu.

2026 Q1
 [24. 3. 2026](/cs/changelog/multi-account-switcher/)

0

### Pinterest Conversions API

Konektor pro Pinterest Conversions API.

[29. 3. 2026](/cs/changelog/snap-pin-li-msft-capi/)

0

### Platformy / Connections stránka

GA4, Meta CAPI, TikTok Events, Google Ads, Sklik, Seznam Brand Builder, LinkedIn CAPI, Microsoft UET — vše konfigurovatelné z jednoho dashboardu, bez nutnosti …

2026 Q3
 [13. 4. 2026](/cs/changelog/connections-page/)

0

### Power-Ups: Cookie Keeper, Anonymizer, Custom Loader, Bot Detection, GEO/UA Headers

Sada server-side power-upů známá ze Stape. Jeden kliknutí aktivace, konfigurace per kontejner, gated podle plánu.

2026 Q3
 [11. 4. 2026](/cs/changelog/power-up-marketplace/)

0

### Public changelog

Veřejný feed všech vydaných funkcí, opravte a infra změn.

2026 Q2

0

### Setup Assistant

Průvodce zapojením sGTM krok za krokem — detekce CMS, generování instrukcí pro WordPress / Shopify / custom, ověření DNS.

2026 Q3
 [20. 4. 2026](/cs/changelog/setup-assistant-launch/)

0

### Smart Pause (overlimit ochrana)

90 % → 100 % → 110 % → grace → pause. Místo tvrdého cutoffu varování + 10% buffer + 30denní grace pro Business+. Banner v dashboardu stejně tak v real-time.

2026 Q3
 [21. 4. 2026](/cs/changelog/smart-pause-overlimit/)

0

### Smart Pause / overlimit autoupgrade

Místo tvrdého cutoffu na limitu plánu kontejner pokračuje v 10% buffer zóně, Business+ má 30 dní grace period a autoupgrade přepne plán bez výpadku měření.

2026 Q2

0

### Snapchat CAPI

Konektor pro Snapchat Conversions API.

2026 Q1
 [29. 3. 2026](/cs/changelog/snap-pin-li-msft-capi/)

0

### Stripe events forwarding

Server-side propagace Stripe webhooků (purchase, refund, subscription.updated) do GA4 / Meta CAPI / Google Ads.

2026 Q4
 [1. 5. 2026](/cs/changelog/stripe-events-forwarding/)

0

### Tracking Checker API + audit nástroj

Veřejný free audit (/cs/tools/tracking-audit/) i programmatic API endpoint pro kontrolu kvality client- i server-side trackingu na cizí doméně.

2026 Q3
 [20. 4. 2026](/cs/changelog/tracking-audit-tools/)

0

### Veřejná stránka statusu

Real-time uptime, dostupnost služeb, historie incidentů.

2026 Q2

0

### Veřejný roadmap s voting

Tato stránka — visitors mohou upvoteovat, co chtějí prioritně.

2026 Q2

0

### Webhook management

Vytváření a monitoring webhooků pro forwarding eventů do externích systémů (Stripe, Klaviyo, custom).

2026 Q2
 [26. 3. 2026](/cs/changelog/webhook-management/)

## Chybí vám něco, co tady není?

Napište nám na [[email protected]](/cdn-cgi/l/email-protection) nebo přes kontaktní formulář. Reálné požadavky od reálných zákazníků mají prioritu.

[Navrhnout funkci](/cs/contact/)