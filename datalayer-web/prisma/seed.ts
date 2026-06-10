import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function main() {
  const author = await db.author.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, name: 'Vít Novotný' },
  });

  await db.article.upsert({
    where: { slug: 'server-side-gtm-uvod' },
    update: {},
    create: {
      slug: 'server-side-gtm-uvod',
      title: 'Server-Side GTM: proč a jak začít',
      date: new Date('2025-01-15'),
      authorId: author.id,
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
    },
  });

  await db.article.upsert({
    where: { slug: 'ga4-bigquery-export' },
    update: {},
    create: {
      slug: 'ga4-bigquery-export',
      title: 'GA4 → BigQuery: vlastní data bez limitů',
      date: new Date('2025-02-20'),
      authorId: author.id,
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
    },
  });

  console.log('Seed hotov.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
