# URL: https://datalayer.vitnovotny.cz/blog/server-side-gtm-uvod

15. 1. 2025 Vít Novotný

# Server-Side GTM: proč a jak začít

Server-Side Google Tag Manager posouvá měření z prohlížeče na server.
Získáte přesnější data, lepší výkon webu a odolnost vůči blokátorům.

## Proč server-side

Klientské měření naráží na limity prohlížečů, blokátory a konec cookies třetích stran.
Přesunem zpracování na server získáte kontrolu nad daty.

javascript
 Copy

```
dataLayer.push({
  event: 'purchase',
  ecommerce: { transaction_id: 'T123', value: 1290 }
});
```

### Shrnutí

Server-side měření je dnes standardem pro datově řízené e-shopy.