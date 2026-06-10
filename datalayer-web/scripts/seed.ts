import { Firestore, Timestamp } from '@google-cloud/firestore';

// Naplní Firestore ukázkovými daty (články + jedna landing page).
// Spusť: npm run db:seed
//   - lokálně proti emulátoru: FIRESTORE_EMULATOR_HOST=localhost:8080 npm run db:seed
//   - proti reálnému projektu:  GOOGLE_CLOUD_PROJECT=<id> npm run db:seed (s ADC)

const db = new Firestore({
  projectId: process.env.FIRESTORE_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT,
  ignoreUndefinedProperties: true,
});

async function main() {
  await db.collection('articles').doc('server-side-gtm-uvod').set({
    slug: 'server-side-gtm-uvod',
    title: 'Server-Side GTM: proč a jak začít',
    author: 'Vít Novotný',
    date: Timestamp.fromDate(new Date('2025-01-15')),
    content: `
      <p class="article-perex">Server-Side Google Tag Manager posouvá měření z prohlížeče na server.
      Získáte přesnější data, lepší výkon webu a odolnost vůči blokátorům.</p>
      <h2>Proč server-side</h2>
      <p>Klientské měření naráží na limity prohlížečů, blokátory a konec cookies třetích stran.
      Přesunem zpracování na server získáte kontrolu nad daty.</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">javascript</span>
          <button class="btn-copy" type="button"><i class="far fa-copy"></i> Copy</button>
        </div>
        <pre class="code-content"><code class="language-javascript">dataLayer.push({
  event: 'purchase',
  ecommerce: { transaction_id: 'T123', value: 1290 }
});</code></pre>
      </div>
      <h3>Shrnutí</h3>
      <p>Server-side měření je dnes standardem pro datově řízené e-shopy.</p>
    `,
  });

  await db.collection('articles').doc('ga4-bigquery-export').set({
    slug: 'ga4-bigquery-export',
    title: 'GA4 → BigQuery: vlastní data bez limitů',
    author: 'Vít Novotný',
    date: Timestamp.fromDate(new Date('2025-02-20')),
    content: `
      <p class="article-perex">Napojení GA4 na BigQuery vám otevře surová data k pokročilým analýzám.</p>
      <h2>Co získáte</h2>
      <ul>
        <li>Surová eventová data bez samplingu</li>
        <li>Možnost spojit data napříč zdroji</li>
        <li>Základ pro reporting a machine learning</li>
      </ul>
      <div class="infobox">
        <div class="infobox-icon"><i class="fas fa-lightbulb"></i></div>
        <div class="infobox-content">
          <h5>Tip</h5>
          <p>Export je zdarma v rámci sandbox limitů BigQuery.</p>
        </div>
      </div>
    `,
  });

  // Ukázková landing page – dostupná na /kampan-ga4
  await db.collection('pages').doc('kampan-ga4').set({
    slug: 'kampan-ga4',
    title: 'Implementace GA4 na klíč',
    perex: 'Nastavíme vám měření, kterému budete věřit. Bez výpadků dat a duplicit.',
    content: `
      <p>Kompletní technická implementace GA4 od auditu po předání.</p>
      <ul>
        <li>Audit a strategie měření</li>
        <li>Specifikace datové vrstvy</li>
        <li>Server-Side měření a BigQuery export</li>
      </ul>
      <p><a href="#contact-form" class="btn btn-cta">[ Nezávazná konzultace ]</a></p>
    `,
  });

  console.log('Seed hotov (articles + pages).');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
