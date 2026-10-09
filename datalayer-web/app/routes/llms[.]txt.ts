import { getAll } from '~/lib/articles.server';
import { listPages } from '~/lib/cms/pages.server';
import { getTexts } from '~/lib/cms/singletons.server';
import { redirectFor } from '~/lib/redirects';
import { BLOG_PUBLIC, absoluteUrl } from '~/lib/site';

// /llms.txt – stručný přehled webu pro jazykové modely a AI vyhledávače
// (formát llmstxt.org) ze stránek a článků v administraci.

export async function loader() {
  const line = (title: string, path: string, desc: string) => `- [${title}](${absoluteUrl(path)}): ${desc}`;
  const [pages, texts, articles] = await Promise.all([listPages(), getTexts(), BLOG_PUBLIC ? getAll().catch(() => []) : Promise.resolve([])]);
  // přesměrované (zrušené) stránky vynechá, i když v databázi ještě jsou
  const visible = pages.map((p) => p.page).filter((p) => p.published && !p.noindex && !redirectFor(`/${p.path}`));
  const group = (kind: string) => visible.filter((p) => p.kind === kind).map((p) => line(p.navTitle, `/${p.path}`, p.seo.description));

  const out = [
    '# datalayer.cz',
    '',
    `> ${texts.organization.description} Účty a data zůstávají klientovi, ke každému projektu patří dokumentace.`,
    '',
    '## Služby',
    ...group('service'),
    '',
    '## Řešení podle typu firmy',
    ...group('solution'),
    '',
    '## O nás a spolupráce',
    ...group('page'),
    ...(articles.length ? ['', '## Články', ...articles.map((a) => line(a.title, `/blog/${a.slug}`, a.description || 'Článek na blogu datalayer.cz.'))] : []),
    '',
  ].join('\n');

  return new Response(out, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
