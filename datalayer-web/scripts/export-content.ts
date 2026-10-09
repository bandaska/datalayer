// Export textů webu do jednoho JSON pro revizi textace dalšími AI modely.
//
//   npm run export:content [-- cesta/k/souboru.json]
//
// Zdroj je výchozí obsah v kódu (app/content/defaults): stránky, menu, patička
// a texty webu ve stavu, který na web nasazují migrace. Úpravy udělané později
// v administraci export nevidí. Ze stránek vynechá jen vzhled (pozadí, rozvržení,
// piktogramy, sloupce, OG obrázek, stav zveřejnění, nastavení formuláře); texty,
// kotvy, typy bloků a odkazy nechá, aby šly navržené varianty vrátit na stejné
// místo. Skrytý blog a nepoužité texty (postup spolupráce, osoba u formuláře)
// v exportu nejsou.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { DEFAULT_NAVIGATION, DEFAULT_PAGES, DEFAULT_TEXTS } from '../app/content/defaults';
import type { Block, PageContent } from '../app/content/schema';
import { pageTexts, plainText } from '../app/lib/textRules';
import { SITE_URL } from '../app/lib/site';

const OUT = resolve(process.argv[2] ?? '../seo-analyza/2026-10-09_export-textu/obsah-webu.json');

const KIND: Record<PageContent['kind'], string> = {
  home: 'úvodní stránka',
  service: 'služba',
  solution: 'řešení pro segment',
  page: 'stránka',
  legal: 'právní stránka',
};

/** Vynechá prázdné hodnoty, ať export nese jen to, co je na webu vidět. */
function compact<T>(value: T): T {
  if (Array.isArray(value)) return value.map(compact) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, v]) => v !== undefined && v !== '' && !(Array.isArray(v) && v.length === 0))
        .map(([k, v]) => [k, compact(v)]),
    ) as T;
  }
  return value;
}

/** Blok bez nastavení vzhledu (sloupce, piktogramy, zvýrazněný sloupec). */
function block(b: Block): unknown {
  switch (b.type) {
    case 'cards':
      return { type: b.type, variant: b.variant, items: b.items.map(({ pictogram: _p, ...c }) => c) };
    case 'table': {
      const { highlightColumn: _h, ...rest } = b;
      return rest;
    }
    default:
      return b;
  }
}

function words(page: PageContent): number {
  return pageTexts(page)
    .filter((t) => !t.where.startsWith('SEO') && !t.where.startsWith('Schema'))
    .reduce((n, t) => n + plainText(t.text).split(/\s+/).filter(Boolean).length, 0);
}

function pageExport(p: PageContent) {
  // formulář hned pod úvodem (Kontakt): nadpis a úvod bloku šablona nezobrazuje, nabídnout jen nápovědu
  const contact =
    p.contact.enabled === false
      ? undefined
      : p.contact.position === 'top'
        ? { placeholder: p.contact.placeholder }
        : { title: p.contact.title, lead: p.contact.lead, placeholder: p.contact.placeholder };
  return compact({
    url: `/${p.path}`,
    druh: KIND[p.kind],
    pocet_slov: words(p),
    obsah: {
      navTitle: p.navTitle,
      tagline: p.tagline,
      seo: p.seo,
      hero: { h1: p.hero.h1, h1Highlight: p.hero.h1Highlight, subtitle: p.hero.subtitle, primaryCta: p.hero.primaryCta },
      sections: p.sections.filter((s) => !s.hidden).map((s) => ({ id: s.id, title: s.title, lead: s.lead, blocks: s.blocks.map(block) })),
      faqTitle: p.faqTitle,
      faq: p.faq,
      contact,
      schema: p.schema,
    },
  });
}

const t = DEFAULT_TEXTS;
const nav = DEFAULT_NAVIGATION;

const shared = compact({
  menu: {
    polozky: nav.items.map((i) =>
      i.type === 'link'
        ? { label: i.label, href: i.href }
        : { label: i.label, podmenu: i.columns.flatMap((c) => c.items.map((l) => ({ label: l.label, href: l.href, tagline: l.tagline }))) },
    ),
    tlacitko: nav.cta.label,
    mobilni_lista: nav.mobileBar,
  },
  paticka: {
    popis: nav.footer.description,
    sloupce: nav.footer.columns.map((c) => ({
      title: c.title,
      links: c.fromMenu ? '(odkazy z menu Služby)' : c.links,
    })),
    contactTitle: nav.footer.contactTitle,
    bottomLinks: nav.footer.bottomLinks,
    cookieSettingsLabel: nav.footer.cookieSettingsLabel,
  },
  formular: {
    _poznamka: 'Kontaktní blok na konci stránek. Nadpis, úvod a nápovědu ve zprávě mají stránky vlastní (obsah.contact); tyto texty platí, když je stránka nemá. leadWithPhone se ukáže, když je v nastavení telefon (je).',
    defaultTitle: t.contact.defaultTitle,
    leadWithPhone: t.contact.leadWithPhone,
    leadWithoutPhone: t.contact.leadWithoutPhone,
    defaultPlaceholder: t.contact.defaultPlaceholder,
    pole: ['Jméno a příjmení', 'E-mail', 'Telefon (nepovinné)', 'S čím vám můžeme pomoci?'],
    legal: t.contact.legal,
    submit: t.contact.submit,
    note: t.contact.note,
    successTitle: t.contact.successTitle,
    successText: t.contact.successText,
    successPhone: t.contact.successPhone,
  },
  cookie_lista: t.cookieBar,
  dekujeme: { _poznamka: 'Stránka po odeslání formuláře bez JavaScriptu.', title: t.thankYou.title, text: t.thankYou.text, errorTitle: t.thankYou.errorTitle, back: t.thankYou.back },
  stranka_404: t.notFound,
  popis_firmy: { _poznamka: 'Popis firmy pro vyhledávače (schema.org Organization) a llms.txt.', description: t.organization.description },
  nadpis_faq: t.page.faqTitle,
});

const RULES = {
  jazyk_hard_rules: [
    'Žádný trpný rod, vždy činný („Zákonodárci zákon upravili.“, ne „Zákon byl upraven.“). Pozor i na zvratný trpný rod („se nepíšou“).',
    'Žádný formální ani úřednický jazyk.',
    'Místo přechodníků a participií vztažné věty („který vysvětluje“, ne „vysvětlující“), ale ne příliš mnoho vztažných zájmen v jedné větě.',
    '1. pád místo 7. po „je“: „je metoda“, ne „je metodou“.',
    'Spojka „než“, ne „jak“ (větší než).',
    'Málo přivlastňovacích zájmen (váš, vám, vašemu…).',
    'Co nejméně závorek – větu raději přeformuluj.',
    'České uvozovky „…“, pomlčka jen – (en dash), nikdy —.',
    'Číslovku, kterou jde napsat jedním slovem, piš slovy („čtrnáct“, „desetkrát“), výjimka jsou data.',
    'Data s měsícem slovy („16. února 2024“), měny skloňované („123 eur“, „123,9 eura“).',
    'Verzálky jen u zkratek.',
  ],
  obsah: [
    'Fakta, čísla, limity, ceny a nabídku neměň a nic nevymýšlej: žádné nové reference, klienty, výsledky, ceny ani sliby.',
    'Žádné sliby lhůt a délek („do jednoho pracovního dne“, „třicetiminutová konzultace“, „do 24 hodin“, „obvykle do…“). Fakta o nástrojích (limity GA4, Safari sedm dní…) sliby nejsou.',
    '„zdarma“ nejvýš dvakrát na stránku a nikdy v nadpisech.',
    'Web nemá kontaktní osobu – žádná jména lidí.',
    'Každý blok má vést k formuláři: odstranit pochybnost, ukázat, co klient dostane, nebo vysvětlit službu. Žádná vata.',
    'U služeb a řešení je první sekce nadepsaná přesně „Poznáváte se?“ (nejvýš čtyři karty). Jinak nadpisy oznamovací, bez dvojtečky „Téma: podtitul“ a bez tečky na konci; řečnická otázka nejvýš jednou na stránku.',
    'Nadpisy kontaktních bloků oznamovací (ne „Pojďme…“).',
    'Nápověda ve zprávě (contact.placeholder) začíná „Adresa webu a co řešíte, např. „…““ – formulář nemá pole Web.',
    'FAQ nejvýš čtyři otázky, odpovědi dvě až čtyři věty.',
    'Text tlačítek bez hranatých závorek – závorky kreslí šablona.',
  ],
  terminologie: [
    'souhlas (ne consent); „Consent Mode (v2)“ jen jako název funkce',
    'při prvním výskytu na stránce „Google Tag Manager (GTM)“, dál GTM; vždy „Google Ads“, nikdy holé „Ads“',
    'Meta se skloňuje (Metu, Metě, Mety); nesklonně jen „Meta Pixel“ a „Meta Conversions API“',
    '„server-side měření“ nebo „server-side GTM“, ne samotné „server-side“ jako podstatné jméno',
    'poptávka v běžném textu (lead jen jako název události a v B2B po zavedení)',
    'tag (ne značka), upozornění (ne alert), kontrolní seznam (ne checklist), snímek obrazovky, hovor nebo schůzka (ne call), správce (ne admin)',
    'přímo (ne napřímo), má smysl nebo vyplatí se (ne dává smysl), obvykle (ne typicky), obchodní cíle (ne byznys cíle), Sklik (ne Seznam jako reklamní systém)',
    'zkratky (CMP, CAPI, KPI, SLA…) rozepsat při prvním výskytu na stránce',
  ],
  typografie: [
    'Žádná středová tečka „·“, žádné šipky „→“ v textu ani na konci odkazů (šipky kreslí šablona), žádné hranaté závorky.',
    '„&“ jen v názvech produktů; lomítko bez mezer mezi jednoslovnými výrazy.',
    'Nedělitelné mezery (po jednopísmenných předložkách, mezi číslem a jednotkou) doplní šablona – nevkládej je.',
    'V jednom seznamu buď úryvky (malé písmeno, bez tečky), nebo celé věty (velké písmeno, tečka). Karty a odrážky jsou úryvky, kontrolní seznamy věty.',
  ],
  html: 'Pole lead, text, items, bullets, paragraphs, a (odpověď FAQ), note a buňky tabulek smí obsahovat jen <strong>, <em>, <code>, <br> a <a href="…">. Ostatní pole jsou čistý text.',
  limity: {
    'seo.title': '25–70 znaků včetně „ | datalayer.cz“ na konci',
    'seo.description': '100–170 znaků',
    'hero.h1': 'nejvýš 75 znaků (na úvodní stránce musí obsahovat hero.h1Highlight)',
    'stránka služby nebo řešení': 'nejvýš 1 200 slov včetně FAQ a kontaktu (pocet_slov ukazuje současný stav)',
  },
};

const out = {
  format: 'datalayer-web/obsah-webu',
  verze: 1,
  web: SITE_URL,
  jazyk: 'cs',
  exportovano: new Date().toISOString().slice(0, 10),
  zdroj:
    'Výchozí obsah webu v kódu (app/content/defaults) ve stavu po UX redukci a jazykovém auditu z 9. října 2026 – tentýž obsah nasazují migrace do administrace. Skrytý blog v exportu není.',
  zadani_pro_ai: {
    ukol: 'Navrhni alternativní textaci stránek webu datalayer.cz (webová analytika a měření pro e-shopy a B2B firmy: GA4, Google Tag Manager, server-side tracking, cookie lišta a Consent Mode, měření konverzí, BigQuery a dashboardy, audit měření). Cíl textů: aby návštěvník poznal svůj problém, pochopil, co dostane, a vyplnil kontaktní formulář.',
    jak_odpovedet:
      'Vrať JSON ve stejném formátu (stejné klíče a pořadí). Měň jen textové hodnoty. U každé stránky můžeš přidat pole „poznamky“ se stručným zdůvodněním hlavních změn. Pokud navrhuješ změnu struktury (jiný počet karet, otázek, sekcí), napiš ji do „poznamky“, strukturu samotnou neměň.',
    nemenit: [
      'klíče JSON, url, druh, pocet_slov',
      'id sekcí a záložek, type a variant bloků, group u záložek',
      'href odkazů (cíle odkazů musí zůstat platné)',
      'počet položek v polích (sekce, bloky, karty, otázky FAQ, odrážky)',
      'hero.h1Highlight musí zůstat přesnou částí hero.h1',
    ],
    pravidla: RULES,
  },
  stranky: DEFAULT_PAGES.map(pageExport),
  sdilene_texty: shared,
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, `${JSON.stringify(out, null, 2)}\n`);
const total = out.stranky.reduce((n, p) => n + (p.pocet_slov ?? 0), 0);
console.log(`Export: ${OUT} – ${out.stranky.length} stránek, ${total} slov na stránkách`);
