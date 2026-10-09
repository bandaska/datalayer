import { PAGES } from '~/content/registry.server';
import { getAll } from '~/lib/articles.server';
import { absoluteUrl } from '~/lib/site';

// /llms.txt – stručný přehled webu pro jazykové modely a AI vyhledávače
// (formát llmstxt.org): kdo jsme, služby, řešení a články s odkazy.

export async function loader() {
  const line = (title: string, path: string, desc: string) => `- [${title}](${absoluteUrl(path)}): ${desc}`;
  const services = PAGES.filter((p) => p.kind === 'service');
  const solutions = PAGES.filter((p) => p.kind === 'solution');
  let articles: { slug: string; title: string; description: string }[] = [];
  try {
    articles = await getAll();
  } catch {
    articles = [];
  }

  const out = [
    '# datalayer.cz',
    '',
    '> Webová analytika a měření pro e-shopy, B2B firmy a velké firmy v Česku: implementace GA4, Google Tag Manager, datová vrstva, server-side tracking, cookie lišta a Consent Mode v2, měření konverzí, BigQuery a dashboardy. Účty a data zůstávají klientovi, ke každému projektu patří dokumentace.',
    '',
    '## Služby',
    ...services.map((p) => line(p.navTitle, `/${p.path}`, p.seo.description)),
    '',
    '## Řešení podle typu firmy',
    ...solutions.map((p) => line(p.navTitle, `/${p.path}`, p.seo.description)),
    '',
    '## O nás a spolupráce',
    line('Jak pracujeme', '/jak-pracujeme', 'Postup spolupráce od auditu po předání a podporu.'),
    line('O nás', '/o-nas', 'Kdo za webem stojí a jak přistupujeme k měření.'),
    line('Kontakt', '/kontakt', 'Kontaktní formulář a e-mail one@datalayer.cz.'),
    ...(articles.length ? ['', '## Články', ...articles.map((a) => line(a.title, `/blog/${a.slug}`, a.description || 'Článek na blogu datalayer.cz.'))] : []),
    '',
  ].join('\n');

  return new Response(out, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
