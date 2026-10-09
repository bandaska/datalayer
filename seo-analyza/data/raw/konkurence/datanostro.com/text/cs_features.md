# URL: https://datanostro.com/cs/features/

FUNKCE

# Vše, co potřebujete. *Hotovo.*

Hosting, monitoring, doplňky, fakturace v Kč. 18 platforem připojených jedním kliknutím — totéž na vlastním Cloud Runu by vás stálo dny DevOps.

INFRASTRUKTURA

## Postaveno na *evropské infrastruktuře.*

### Architektura

* ✓ Dedikovaný kontejner per klient
* ✓ EU datacentrum (DE)
* ✓ HTTP/2 + auto SSL (Let's Encrypt)
* ✓ Custom subdoména z vaší domény

### Spolehlivost

* ✓ [99,5% SLA (Enterprise 99,95%)](/cs/status/ "Live status platformy")
* ✓ Automatický health-check / restart
* ✓ Log retention 30 dní
* ✓ Real-time alerting

### GDPR / DPA

* ✓ Data zůstávají v EU
* ✓ DPA na vyžádání
* ✓ Anonymizer (PII strip)
* ✓ Consent Mode v2

### Škálování

* ✓ Black Friday-ready
* ✓ Multi-domain z jednoho kontejneru
* ✓ Load balancing u větších tarifů
* ✓ Vertikální upgrade do 1 hodiny

⚡ VŠECH 14 POWER-UPŮ

## Power-ups

Server-side rozšíření, která prohlížeč ani adblock neuvidí. Zapínáte v dashboardu jedním kliknutím.

### Custom Loader

Vlastní doména pro GTM loader. First-party origin, který ad-blockery a iOS ITP neořezávají jako third-party skripty.

### Cookie Keeper

First-party cookie persistence. Bez ITP/ETP ztrát.

### Anonymizer

30+ pravidel pro PII. GDPR-ready.

### Bot Detection

Filtruje automatický traffic. V našich nasazeních +15–20 % kvalita dat.

### GEO Headers

MaxMind Geo — Country/Region/City.

### Click ID Restorer

gclid / fbclid přežijí iOS tracking prevention.

### User-Agent Info

Browser, OS, device do každého requestu.

### User ID Sync

Stabilní first-party user ID napříč session.

### Ad-blocker Info

Detekce ad-block uživatelů jako vlastní property.

### Preview Header

Debug + GTM preview přes vlastní subdoménu.

### Open for Bots

Crawl access pro Googlebot bez consent.

### File Proxy

Proxy pro vendor JS přes vlastní doménu.

### Multi-domains

Více domén z jednoho sGTM kontejneru.

### POAS Data Feed

UNIKÁTNÍ

Profit-on-Ad-Spend — bidding na zisk místo obratu. Margin lookup z Heureka feedu nebo CSV.

STRIPE → ATRIBUCE

## Stripe Events Forwarder

Server-side propagace Stripe webhooků (purchase, refund, subscription) jako conversion eventů do GA4, Meta CAPI, Google Ads — bez nutnosti GTM tagů, bez psaní šablon.

* ✓ Verifikace Stripe-Signature (HMAC-SHA256)
* ✓ Auto event\_id z payment\_intent → deduplication s Pixel eventem
* ✓ Recurring revenue: invoice.paid pro subscriptions
* ✓ Refundace forwardujeme zpět jako reverse conversion

```
# Stripe Dashboard → Webhooks → Add endpoint
URL: https://app.datanostro.com/tracking/stripe/tk_8f3a.../

Events:
  payment_intent.succeeded
  checkout.session.completed
  invoice.paid
  charge.refunded

# Result (per event)
→ GA4 purchase event_id=pi_xxx
→ Meta CAPI Purchase event_id=pi_xxx
→ Google Ads conversion id=pi_xxx
```

PRO AGENTURY

## White-label

Klient platí vám, my fakturujeme vám. Vlastní logo, doména, oddělené klientské účty. Konsolidovaná měsíční faktura.

* ✓ Custom branding (logo, barvy)
* ✓ Vlastní subdoména pro dashboard
* ✓ Klientské účty
* ✓ Konsolidovaná fakturace
* ✓ API pro orchestraci

```
$ curl -X POST https://api.datanostro.com/v1/tenants \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "name": "Klient s.r.o.",
    "domain": "klient.cz",
    "plan": "pro",
    "container_config": "..."
  }'

{
  "id": "project_abc123",
  "status": "deploying",
  "preview_url": "https://klient.sgtm.datanostro.com",
  "estimated_ready": "2m 30s"
}
```

PŘIPRAVENI?

## Zkuste *celý balík.*

14 dní zdarma · Bez kreditní karty · Setup do pěti minut

[Začít zdarma](/cs/accounts/signup/)
[Zobrazit ceník](/cs/pricing/)

Hostujete sGTM jinde? Migrace za odpoledne — [Stape](/cs/migrace-ze-stape/), [Addingwell](/cs/migrace-z-addingwell/), [Google Cloud](/cs/migrace-z-google-cloud/) nebo [odjinud](/cs/migrate/).