# URL: https://datalayer.vitnovotny.cz/blog/server-side-gtm-uvod

1. [Úvod](/)
2. [Blog](/blog)
3. Server-side GTM: proč a jak začít

15. 1. 2025datalayer.cz

# Server-side GTM: proč a jak začít

Server-side Google Tag Manager posouvá měření z prohlížeče na server.
Cílem jsou přesnější data, rychlejší web a odolnější first-party měření – vždy v souladu se souhlasem návštěvníka.

## Proč server-side

Měření na straně prohlížeče (client-side) naráží na limity prohlížečů, blokátory reklam a omezení cookies v Safari a Firefoxu.
Přesunem zpracování na server sami rozhodujete, která data a kam odcházejí.

javascript
Kopírovat

```
dataLayer.push({
  event: 'purchase',
  ecommerce: { transaction_id: 'T123', value: 1290 }
});
```

### Shrnutí

Server-side měření je dnes běžné u e-shopů, které se rozhodují podle dat.

Kontakt

## Napište nám, co řešíte

Napište, s čím si nevíte rady, a řekneme, kde začít.

Web firmy

Jméno a příjmeníE-mail

Telefon (nepovinné)Web (nepovinné)

Co řešíte? (nepovinné)

GA4 a GTMServer-side měřeníCookie lišta a souhlasKonverze a reklamyBigQuery a reportingAuditJiné

S čím vám můžeme pomoci?

Údaje použijeme jen k odpovědi na zprávu a případné nabídce. [Jak s nimi zacházíme](/zpracovani-osobnich-udaju). Žádný newsletter, žádný spam.

Odeslat zprávu