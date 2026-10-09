import type { Block, PageContent } from '~/content/schema';

// Strojově ověřitelná část pravidel českých textů (docs/HARD-RULES.md).
// Používá ji editor stránek v administraci (panel „Kontrola textů“) i testy
// výchozího obsahu. „error“ = porušení pravidla, „hint“ = možný problém
// (trpný rod, číslovky), který posoudí autor.

export type TextIssue = { where: string; message: string; level: 'error' | 'hint' };

/** Text bez inline kódu a HTML značek (atributy a <code> mají vlastní pravidla). */
export function plainText(t: string): string {
  return t
    .replace(/<code>[\s\S]*?<\/code>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

const BANNED = /obcház\w* blokátor|funkcionální ekosystém|100 % dat|GDPR compliant|FB CAPI/i;
// „neprůstřelné“ smí zůstat jen v claimu – H1 homepage (architektura webu, kap. 6)
const CLAIM_ONLY = /neprůstřeln/i;
const COMPARATIVE_JAK = /\b(větší|menší|vyšší|nižší|lepší|horší|více|méně|víc|míň|delší|kratší|rychlejší|pomalejší) jak\b/i;
// zástupný text jen velkými písmeny – sloveso „doplnit“ v běžné větě není chyba
const PLACEHOLDER = /\[DOPLNIT|\bDOPLNIT\b|\bTODO\b|[Ll]orem ipsum/;
// opisný trpný rod: „je nastaven“, „byla odeslána“, „jsou uloženy“…
const PASSIVE =
  /(?<!\p{L})(je|jsou|byl|byla|bylo|byli|byly|bude|budou|není|nejsou|nebyl|nebyla|nebylo)\s+(?:\p{L}+\s+)?(\p{L}+(?:en|ena|eno|eni|eny|án|ána|áno|áni|ány|nut|nuta|nuto|nuti|nuty))(?!\p{L})/iu;
const PASSIVE_STOP = new Set(['jen', 'ten', 'den', 'zdarma', 'připraven', 'připravena', 'připraveno', 'schopen', 'schopna', 'spokojen', 'spokojena', 'povinen', 'povinna', 'ochoten', 'ochotna', 'zaměřen', 'zaměřena', 'zvyklý', 'nucen', 'oprávněn', 'omezen', 'omezena', 'omezeno', 'závislý', 'dostupný', 'otevřen', 'otevřena', 'jasno', 'hotovo', 'potřeba', 'cena', 'změna', 'hodina', 'stránka', 'firma', 'doména', 'platforma', 'kampaň', 'konverzi', 'pravidla', 'jeden', 'týden', 'open', 'token', 'kontejnerem']);

/** Pravidla pro jeden text. `claim` = H1 homepage, kde klient schválil výjimku. */
export function checkText(text: string, where: string, opts: { claim?: boolean } = {}): TextIssue[] {
  const t = plainText(text);
  const out: TextIssue[] = [];
  const err = (message: string) => out.push({ where, message, level: 'error' });
  const hint = (message: string) => out.push({ where, message, level: 'hint' });

  if (t.includes('—')) err('Dlouhá pomlčka — – použijte krátkou pomlčku –.');
  if (/\s-\s/.test(t)) err('Spojovník místo pomlčky – mezi slovy patří –.');
  if (/(^|[\s(])"|"([\s.,;:!?)]|$)/.test(t)) err('Rovné uvozovky " – použijte české „…“.');
  if (t.includes('”')) err('Anglické uvozovky ” – použijte české „…“.');
  if ((t.match(/„/g) ?? []).length !== (t.match(/“/g) ?? []).length) err('Nespárované uvozovky – každá „ potřebuje “.');
  if (PLACEHOLDER.test(t)) err('Zástupný text (DOPLNIT, TODO, lorem ipsum).');
  if (BANNED.test(t) || (!opts.claim && CLAIM_ONLY.test(t))) err('Zakázaná formulace (např. „obcházení blokátorů“, „100 % dat“, „FB CAPI“, „neprůstřelné“).');
  if (COMPARATIVE_JAK.test(t)) err('„… jak“ při porovnání – správně „než“.');

  const passive = t.match(PASSIVE);
  if (passive && !PASSIVE_STOP.has(passive[2].toLowerCase())) hint(`Možný trpný rod („${passive[0]}“) – přepište do činného rodu.`);
  // mimo odkazy na předpisy (odst. 3, čl. 6), názvy (Google Analytics 4) a označení úrovní
  if (/(?<!(?:odst\.|čl\.|písm\.|§|Analytics|úroveň|úrovně|verze))(^|[\s(])([2-9])\s+(?=[a-záčďéěíňóřšťúůýž]{3,})/.test(t)) {
    hint('Číslovku vyjádřitelnou jedním slovem napište slovy (např. „pět kroků“).');
  }
  if (/\b\d{1,2}\.\s?\d{1,2}\.\s?\d{4}\b/.test(t)) hint('Datum pište s měsícem slovy (např. „16. února 2024“).');
  return out;
}

function blockTexts(b: Block, where: string, add: (where: string, text: string | undefined) => void) {
  switch (b.type) {
    case 'paragraphs':
      b.items.forEach((t, i) => add(`${where} › odstavec ${i + 1}`, t));
      break;
    case 'list':
      add(`${where} › nadpis`, b.title);
      b.items.forEach((t, i) => add(`${where} › položka ${i + 1}`, t));
      break;
    case 'cards':
      b.items.forEach((c, i) => {
        add(`${where} › karta ${i + 1}`, c.title);
        add(`${where} › karta ${i + 1} › text`, c.text);
        c.bullets?.forEach((t, j) => add(`${where} › karta ${i + 1} › odrážka ${j + 1}`, t));
        add(`${where} › karta ${i + 1} › odkaz`, c.link?.label);
      });
      break;
    case 'steps':
      b.items.forEach((s, i) => [s.title, s.text, ...(s.substeps ?? []), s.output, s.duration, s.fromClient].forEach((t) => add(`${where} › krok ${i + 1}`, t)));
      break;
    case 'table':
      add(`${where} › popisek`, b.caption);
      b.head.forEach((t) => add(`${where} › záhlaví`, t));
      b.rows.forEach((r, i) => r.forEach((t) => add(`${where} › řádek ${i + 1}`, t)));
      break;
    case 'flow':
      add(`${where} › popis schématu`, b.caption);
      b.columns.forEach((c, i) => [c.label, c.note, ...c.items].forEach((t) => add(`${where} › uzel ${i + 1}`, t)));
      break;
    case 'callout':
      add(`${where} › nadpis`, b.title);
      add(`${where} › text`, b.text);
      break;
    case 'code':
      add(`${where} › popisek`, b.caption);
      break;
    case 'tabs':
      b.items.forEach((t, i) => [t.label, ...(t.paragraphs ?? []), ...(t.bullets ?? [])].forEach((x) => add(`${where} › záložka ${i + 1}`, x)));
      break;
    case 'html':
      add(`${where} › volný text`, b.html);
      break;
    case 'tags':
      b.items.forEach((t) => add(`${where} › štítek`, t.label));
      break;
    case 'consentSettings':
      add(`${where} › tlačítko`, b.label);
      break;
    case 'proscons':
      for (const k of ['yes', 'no'] as const) {
        add(`${where} › ${k === 'yes' ? 'sloupec ✓' : 'sloupec ✕'}`, b[k].title);
        b[k].items.forEach((it, i) => {
          add(`${where} › ${k === 'yes' ? '✓' : '✕'} ${i + 1}`, it.text);
          add(`${where} › ${k === 'yes' ? '✓' : '✕'} ${i + 1} › poznámka`, it.note);
        });
      }
      break;
    case 'figures':
      b.items.forEach((f, i) => add(`${where} › číslo ${i + 1}`, f.label));
      add(`${where} › poznámka`, b.note);
      break;
    case 'process':
      add(`${where} › krok 3`, b.implementation);
      add(`${where} › krok 3 › od vás`, b.implementationFromClient);
      b.stepOverrides?.forEach((o, i) => {
        add(`${where} › krok ${i + 1}`, o.text);
        add(`${where} › krok ${i + 1} › od vás`, o.fromClient);
      });
      break;
    case 'operator':
      add(`${where} › nadpis`, b.title);
      break;
    case 'person':
      add(`${where} › jméno`, b.name);
      add(`${where} › role`, b.role);
      b.paragraphs?.forEach((t, i) => add(`${where} › odstavec ${i + 1}`, t));
      b.facts?.forEach((t, i) => add(`${where} › štítek ${i + 1}`, t));
      break;
    default:
      break;
  }
}

export type PageText = { where: string; text: string; claim?: boolean };

/** Všechny texty stránky s popisem, kde leží (pro panel kontroly a testy). */
export function pageTexts(page: PageContent): PageText[] {
  const out: PageText[] = [];
  const add = (where: string, text: string | undefined, claim?: boolean) => {
    if (text) out.push({ where, text, ...(claim ? { claim } : {}) });
  };
  add('SEO › title', page.seo.title);
  add('SEO › description', page.seo.description);
  add('Název v menu', page.navTitle);
  add('Podtitulek v menu', page.tagline);
  const h = page.hero;
  add('Hero › H1', h.h1, page.kind === 'home');
  add('Hero › podtitul', h.subtitle);
  add('Hero › tlačítko', h.primaryCta?.label);
  page.sections.forEach((s, i) => {
    const w = `Sekce ${i + 1} (${s.title || s.id})`;
    add(`${w} › nadpis`, s.title);
    add(`${w} › úvod`, s.lead);
    s.blocks.forEach((b, j) => blockTexts(b, `${w} › blok ${j + 1}`, add));
  });
  add('FAQ › nadpis', page.faqTitle);
  page.faq.forEach((f, i) => {
    add(`FAQ ${i + 1} › otázka`, f.q);
    add(`FAQ ${i + 1} › odpověď`, f.a);
  });
  add('Kontakt › nadpis', page.contact.title);
  add('Kontakt › úvod', page.contact.lead);
  add('Kontakt › placeholder', page.contact.placeholder);
  if (page.schema) {
    add('Schema › název', page.schema.name);
    add('Schema › popis', page.schema.description);
  }
  return out;
}

export function checkPage(page: PageContent): TextIssue[] {
  const issues = pageTexts(page).flatMap(({ where, text, claim }) => checkText(text, where, { claim }));
  const t = page.seo.title.length;
  const d = page.seo.description.length;
  if (t > 65) issues.push({ where: 'SEO › title', message: `Title má ${t} znaků, vyhledávač ho nejspíš zkrátí (doporučeno 50–60).`, level: 'hint' });
  if (t < 25) issues.push({ where: 'SEO › title', message: `Title má jen ${t} znaků (doporučeno 50–60).`, level: 'hint' });
  if (d > 165 || d < 100) issues.push({ where: 'SEO › description', message: `Description má ${d} znaků (doporučeno 140–155).`, level: 'hint' });
  if (page.hero.h1.length > 75) issues.push({ where: 'Hero › H1', message: 'H1 je delší než 75 znaků.', level: 'hint' });
  return issues;
}
