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
    author: 'datalayer.cz',
    date: Timestamp.fromDate(new Date('2025-01-15')),
    description:
      'Co je server-side Google Tag Manager, proč přesouvá měření z prohlížeče na server a jak začít. Přesnější data a rychlejší web, vždy se souhlasem návštěvníka.',
    content: `
      <p class="article-perex">Server-Side Google Tag Manager posouvá měření z prohlížeče na server.
      Získáte přesnější data, rychlejší web a odolnější first-party měření, vždy v souladu se souhlasem návštěvníka.</p>
      <h2>Proč server-side</h2>
      <p>Klientské měření naráží na limity prohlížečů, blokátory reklam a omezení cookies v Safari a Firefoxu.
      Přesunem zpracování na server získáte kontrolu nad daty.</p>
      <div class="code-container">
        <div class="code-header">
          <span class="code-lang">javascript</span>
          <button class="btn-copy" type="button">Kopírovat</button>
        </div>
        <pre class="code-content"><code class="language-javascript">dataLayer.push({
  event: 'purchase',
  ecommerce: { transaction_id: 'T123', value: 1290 }
});</code></pre>
      </div>
      <h3>Shrnutí</h3>
      <p>Server-side měření je dnes standard pro datově řízené e-shopy.</p>
    `,
  });

  await db.collection('articles').doc('ga4-bigquery-export').set({
    slug: 'ga4-bigquery-export',
    title: 'GA4 → BigQuery: vlastní data bez limitů',
    author: 'datalayer.cz',
    date: Timestamp.fromDate(new Date('2025-02-20')),
    description:
      'Napojení GA4 na BigQuery: surová data o událostech bez vzorkování, spojení dat napříč zdroji a základ pro reporting. Na co si dát pozor u sandboxu.',
    content: `
      <p class="article-perex">Napojení GA4 na BigQuery vám otevře surová data k pokročilým analýzám.</p>
      <h2>Co získáte</h2>
      <ul>
        <li>Surová eventová data bez samplingu</li>
        <li>Možnost spojit data napříč zdroji</li>
        <li>Základ pro reporting a machine learning</li>
      </ul>
      <div class="infobox">
        <div class="infobox-icon">i</div>
        <div class="infobox-content">
          <h5>Tip</h5>
          <p>Sandbox BigQuery nic nestojí, ale tabulky v něm po šedesáti dnech vyprší, streamovaný export nefunguje a úložiště má limit deset GiB. Pro trvalý export proto připojte k projektu platební účet a upravte výchozí expiraci tabulek.</p>
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
      <p><a href="#kontakt" class="btn btn-cta">[ Nezávazná konzultace ]</a></p>
    `,
  });

  console.log('Seed hotov (articles + pages).');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
