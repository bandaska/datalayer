import { z } from 'zod';
import { DEFAULT_NEXT_STEPS, DEFAULT_PAGE_TEXTS, DEFAULT_PROCESS, DEFAULT_THANK_YOU_LINKS } from './textDefaults';
import { LEGACY_TOPICS, TOPIC_VALUES } from './topics';

// Schéma veškerého obsahu webu, který se edituje v administraci a ukládá do
// Firestore: stránky (kolekce `pages`), navigace (`content/navigation`)
// a texty webu (`content/texts`). Stejné schéma validuje uložení z administrace,
// import migrací i čtení – do databáze se tak nedostane rozbitý obsah.
//
// Inline HTML: pole označená „HTML“ smí obsahovat jen <strong>, <em>, <code>,
// <br> a <a href>. Server je před uložením vyčistí (app/lib/cms/sanitize.server.ts).

export const PICTOGRAMS = [
  'ga4',
  'gtm',
  'datalayer',
  'serverside',
  'consent',
  'conversion',
  'bigquery',
  'dashboard',
  'audit',
  'perf',
  'monitor',
  'eshop',
  'lead',
  'gov',
  'warn',
] as const;

export { LEGACY_TOPICS, TOPIC_VALUES } from './topics';

export const PAGE_KINDS = ['home', 'service', 'solution', 'page', 'legal'] as const;

const REQUIRED = 'Povinné pole';
const tooLong = (max: number) => `Nejvýš ${max} znaků`;

/** Text bez omezení obsahu (může být prázdný). */
const str = (max = 2000) => z.string().max(max, tooLong(max));
/** Povinný text. */
const req = (max = 200) => z.string().trim().min(1, REQUIRED).max(max, tooLong(max));
/** Identifikátor do URL nebo kotvy: malá písmena, číslice, pomlčky. */
export const slug = z
  .string()
  .trim()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Jen malá písmena bez diakritiky, číslice a pomlčky');

/** Identifikátor pro měření (skupina záložek): malá písmena, číslice, pomlčky a podtržítka. */
const measureId = z
  .string()
  .trim()
  .regex(/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/, 'Jen malá písmena bez diakritiky, číslice, pomlčky a podtržítka');

/** Odkaz: cesta na webu, kotva, https, e-mail nebo telefon. Nikdy javascript: apod. */
export const href = z
  .string()
  .trim()
  .min(1, REQUIRED)
  .max(500, tooLong(500))
  .refine((v) => /^(\/(?!\/)|#|https:\/\/|mailto:|tel:)/.test(v), 'Odkaz musí začínat /, #, https://, mailto: nebo tel:');

export const linkSchema = z.object({ label: req(80), href });

export const pictogramSchema = z.enum(PICTOGRAMS);
export const topicSchema = z.preprocess((v) => (typeof v === 'string' && v in LEGACY_TOPICS ? LEGACY_TOPICS[v] : v), z.enum(TOPIC_VALUES));

// ---------- bloky obsahu ----------

const cardSchema = z.object({
  title: req(200),
  text: str(3000), // HTML
  pictogram: pictogramSchema.optional(),
  tag: str(60).optional(),
  /** „Konzole“: 2–4 řádky mono textu, řádek začínající „⚠“ se zvýrazní. */
  console: z.array(str(160)).optional(),
  bullets: z.array(str(400)).optional(), // HTML
  tags: z.array(str(60)).optional(),
  link: linkSchema.optional(),
});

const prosItemSchema = z.object({
  text: req(400), // HTML
  /** Drobný doplněk pod položkou, např. „→ nejdřív audit měření“ (HTML). */
  note: str(300).optional(),
});

export const blockSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('paragraphs'), items: z.array(str(6000)).min(1, 'Aspoň jeden odstavec') }),
  z.object({
    type: z.literal('list'),
    style: z.enum(['check', 'cross', 'bullet']).optional(),
    title: str(200).optional(),
    items: z.array(str(2000)).min(1, 'Aspoň jedna položka'),
  }),
  z.object({
    type: z.literal('cards'),
    columns: z.union([z.literal(2), z.literal(3), z.literal(4)]).optional(),
    /** symptoms = na mobilu kompaktní seznam (piktogram vlevo), u víc než čtyř karet tři a tlačítko „Zobrazit další“. */
    variant: z.enum(['default', 'symptoms']).optional(),
    items: z.array(cardSchema).min(1, 'Aspoň jedna karta'),
  }),
  z.object({
    type: z.literal('steps'),
    /** grid = karty vedle sebe (sloupce podle počtu kroků), rows = kroky pod sebou s podkroky (stránka Jak pracujeme). */
    layout: z.enum(['grid', 'rows']).optional(),
    items: z
      .array(
        z.object({
          title: req(200),
          text: str(2000), // HTML
          /** Podkroky jako krátký seznam pod popisem (HTML). */
          substeps: z.array(str(300)).max(8, 'Nejvýš osm podkroků').optional(),
          output: str(300).optional(),
          duration: str(100).optional(),
          fromClient: str(400).optional(),
        }),
      )
      .min(1, 'Aspoň jeden krok'),
  }),
  z.object({
    type: z.literal('table'),
    caption: str(300).optional(),
    head: z.array(str(300)).min(1, 'Tabulka potřebuje záhlaví'),
    rows: z.array(z.array(str(1500))),
    highlightColumn: z.number().int().min(0).optional(),
  }),
  z.object({
    type: z.literal('flow'),
    caption: str(1500),
    columns: z
      .array(z.object({ label: req(120), items: z.array(str(600)), note: str(400).optional() }))
      .min(1, 'Aspoň jeden uzel')
      .max(8, 'Nejvýš osm uzlů'),
  }),
  z.object({
    type: z.literal('callout'),
    tone: z.enum(['info', 'warn']).optional(),
    title: str(200).optional(),
    text: str(4000), // HTML
  }),
  z.object({ type: z.literal('code'), lang: str(30), code: str(30000), caption: str(300).optional() }),
  z.object({
    type: z.literal('tabs'),
    group: measureId,
    items: z
      .array(
        z.object({
          id: slug,
          label: req(80),
          paragraphs: z.array(str(4000)).optional(),
          bullets: z.array(str(1000)).optional(),
        }),
      )
      .min(1, 'Aspoň jedna záložka'),
  }),
  /** Volný obsah z vizuálního editoru (jako u článků). */
  z.object({ type: z.literal('html'), html: str(200000) }),
  /** Štítky (nástroje, platformy), volitelně s odkazem. */
  z.object({
    type: z.literal('tags'),
    items: z.array(z.object({ label: req(80), href: href.optional() })).min(1, 'Aspoň jeden štítek'),
  }),
  /** Nejnovější články z blogu. Blok se ukáže, až má blog aspoň `minCount` článků (výchozí tři). */
  z.object({
    type: z.literal('articles'),
    count: z.number().int().min(1).max(12).optional(),
    minCount: z.number().int().min(1).max(12).optional(),
  }),
  /** Rozhodnutí: dva sloupce „Dává smysl, když…“ (✓) a „Doporučíme počkat, když…“ (✕). */
  z.object({
    type: z.literal('proscons'),
    yes: z.object({ title: req(120), items: z.array(prosItemSchema).min(1, 'Aspoň jedna položka') }),
    no: z.object({ title: req(120), items: z.array(prosItemSchema).min(1, 'Aspoň jedna položka') }),
  }),
  /** Dvě až čtyři čísla v boxech (např. náklady provozu) a poznámka se zdrojem. */
  z.object({
    type: z.literal('figures'),
    items: z
      .array(z.object({ value: req(40), label: req(300) }))
      .min(1, 'Aspoň jedno číslo')
      .max(4, 'Nejvýš čtyři čísla'),
    note: str(600).optional(), // HTML
  }),
  /** Jednotný postup spolupráce (pět kroků z Textů webu); u služby jde upravit krok 3 – implementaci. */
  z.object({
    type: z.literal('process'),
    implementation: str(400).optional(),
    implementationFromClient: str(200).optional(),
    /** Co ukázat pod krokem: „od vás“ (výchozí), nebo výstup kroku. */
    detail: z.enum(['fromClient', 'output']).optional(),
  }),
  /** Identifikace provozovatele z Nastavení (jméno nebo firma, IČO, sídlo, e-mail). */
  z.object({ type: z.literal('operator'), title: str(120).optional() }),
  /**
   * Osoba za webem: fotka z Textů webu (kontakt), LinkedIn z Nastavení.
   * Bez fotky i bez textu o praxi se blok nezobrazí – čeká na podklady.
   */
  z.object({
    type: z.literal('person'),
    /** Jméno v nadpisu bloku; prázdné = jméno z Textů webu (Kontakt) bez „Odpovídá“. */
    name: str(120).optional(),
    role: str(120).optional(),
    paragraphs: z.array(str(1500)).max(6, 'Nejvýš šest odstavců').optional(), // HTML
    /** Nástroje a certifikace jako štítky. */
    facts: z.array(str(80)).max(12, 'Nejvýš dvanáct štítků').optional(),
  }),
  /** Přehled odkazů z menu (např. všechny služby ve sloupcích jako v mega-menu). */
  z.object({
    type: z.literal('menuGrid'),
    menuId: slug,
    extraMenuId: slug.optional(),
    extraTitle: str(120).optional(),
  }),
  /** Tlačítko, které otevře nastavení cookies. */
  z.object({ type: z.literal('consentSettings'), label: str(80).optional() }),
]);

export const BLOCK_TYPES = blockSchema.options.map((o) => o.shape.type.value);

export const sectionSchema = z.object({
  /** Kotva sekce (např. `jak-to-funguje`). */
  id: slug,
  eyebrow: str(80).optional(),
  /** H2 – prázdný nadpis se nezobrazí (např. sekce jen s volným textem). */
  title: str(200),
  lead: str(2000).optional(), // HTML
  /** Pozadí: světle šedé, bílé, tmavé, nebo tmavě modré. Na stránce nejvýš tři přechody tmavé ↔ světlé. */
  tone: z.enum(['light', 'white', 'dark', 'deep']).optional(),
  /** split = nadpis a úvod vlevo, bloky vpravo (např. blok Důkaz). */
  layout: z.enum(['default', 'split']).optional(),
  /** Drobná poznámka pod sekcí (např. „Čísla v ukázkách jsou ilustrativní.“). */
  note: str(300).optional(),
  /** Skrytou sekci web nevykreslí, obsah ale zůstane v databázi (např. čeká na nasazení měření). */
  hidden: z.boolean().optional(),
  blocks: z.array(blockSchema),
});

export const faqSchema = z.object({ q: req(300), a: str(5000) /* HTML */ });

/** Cesta stránky bez úvodního lomítka; homepage má prázdnou cestu. */
export const pathSchema = z
  .string()
  .trim()
  .regex(/^(?:[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*)?$/, 'Cesta: malá písmena, číslice, pomlčky a lomítka (např. sluzby/nova-sluzba)');

/** Kotvy, které na stránku vkládá šablona: kontaktní blok, FAQ, související stránky a články, menu. */
export function templateAnchors(page: {
  contact: { enabled?: boolean };
  faq: unknown[];
  relatedPages?: unknown[];
  relatedArticles?: unknown[];
  techDetails?: unknown;
}): string[] {
  return [
    'site-menu',
    ...(page.contact.enabled !== false ? ['kontakt', 'contact-form'] : []),
    ...(page.faq.length ? ['faq'] : []),
    ...(page.relatedPages?.length || page.relatedArticles?.length ? ['navazujici'] : []),
    ...(page.techDetails ? ['technicke-detaily'] : []),
  ];
}

export const pageSchema = z
  .object({
    path: pathSchema,
    kind: z.enum(PAGE_KINDS),
    /** Krátký název do drobečkové navigace, karet a výběru v menu. */
    navTitle: req(80),
    /** Řádek „co to řeší“ (max. 45 znaků doporučeně), nabízí se při přidání do menu. */
    tagline: str(80).default(''),
    pictogram: pictogramSchema,
    /** Dřívější skupina mega-menu – jen informativní, menu se edituje v Navigaci. */
    menuGroup: z.enum(['sber', 'data', 'audity']).optional(),
    /** Koncept se na webu nezobrazí (správci ho vidí s upozorněním). */
    published: z.boolean().default(true),
    noindex: z.boolean().default(false),
    seo: z.object({ title: req(90), description: req(220) }),
    /** Obrázek pro sdílení (1200×630), cesta nebo https URL. */
    ogImage: z.string().trim().max(500).optional(),
    hero: z.object({
      /** pictogram = rámeček s piktogramem, diagram = schéma z homepage, simple = jen text. */
      variant: z.enum(['pictogram', 'diagram', 'simple']).optional(),
      eyebrow: str(80),
      h1: req(160),
      /** Část H1, která se podtrhne (jen varianta diagram). */
      h1Highlight: str(80).optional(),
      subtitle: str(1200),
      quickAnswer: str(1500).optional(), // HTML
      primaryCta: linkSchema.optional(),
      secondaryCta: linkSchema.optional(),
      microcopy: str(300).optional(),
    }),
    trust: z.array(str(200)).optional(),
    sections: z.array(sectionSchema),
    faq: z.array(faqSchema),
    faqTitle: str(120).optional(),
    /** Technické detaily: sbalený blok u FAQ pro obsah, který jednou poputuje do článku. Nejvýš jeden na stránku. */
    techDetails: z.object({ summary: req(200), blocks: z.array(blockSchema) }).optional(),
    relatedArticles: z.array(z.object({ slug, title: str(200) })).optional(),
    relatedPages: z.array(pathSchema).optional(),
    contact: z.object({
      /** Vypnutý kontaktní blok se na stránce nezobrazí (např. zásady). */
      enabled: z.boolean().optional(),
      /** top = formulář hned pod úvodem stránky (stránka Kontakt), jinak na konci. */
      position: z.enum(['bottom', 'top']).optional(),
      formId: slug,
      topics: z.array(topicSchema).optional(),
      title: str(200),
      lead: str(1000).optional(),
      placeholder: str(300),
      leadType: z.enum(['consultation', 'audit', 'quick_check']).optional(),
    }),
    schema: z
      .object({ name: req(200), serviceType: req(200), description: req(1000), audience: str(300).optional() })
      .optional(),
  })
  .superRefine((page, ctx) => {
    if (page.kind === 'home' && page.path !== '') {
      ctx.addIssue({ code: 'custom', path: ['path'], message: 'Homepage má prázdnou cestu' });
    }
    if (page.kind !== 'home' && page.path === '') {
      ctx.addIssue({ code: 'custom', path: ['path'], message: 'Cesta je povinná' });
    }
    // kotvy sekcí a záložek sdílí jedno HTML id – nesmí se opakovat ani srazit
    // s pevnými kotvami šablony
    const ids = new Set<string>();
    const reserved = templateAnchors(page);
    const anchor = (id: string, path: (string | number)[]) => {
      if (reserved.includes(id)) ctx.addIssue({ code: 'custom', path, message: `Kotvu „${id}“ používá šablona stránky, zvolte jinou` });
      else if (ids.has(id)) ctx.addIssue({ code: 'custom', path, message: `Kotva „${id}“ se opakuje` });
      ids.add(id);
    };
    page.techDetails?.blocks.forEach((b, j) => {
      if (b.type === 'tabs') b.items.forEach((t, k) => anchor(t.id, ['techDetails', 'blocks', j, 'items', k, 'id']));
    });
    page.sections.forEach((s, i) => {
      anchor(s.id, ['sections', i, 'id']);
      s.blocks.forEach((b, j) => {
        if (b.type === 'tabs') b.items.forEach((t, k) => anchor(t.id, ['sections', i, 'blocks', j, 'items', k, 'id']));
      });
    });
  });

export type PageContent = z.infer<typeof pageSchema>;
export type PageInput = z.input<typeof pageSchema>;
export type Block = z.infer<typeof blockSchema>;
export type BlockType = Block['type'];
export type Section = z.infer<typeof sectionSchema>;
export type Faq = z.infer<typeof faqSchema>;
export type Pictogram = z.infer<typeof pictogramSchema>;
export type Topic = z.infer<typeof topicSchema>;
export type PageKind = (typeof PAGE_KINDS)[number];
export type Link = z.infer<typeof linkSchema>;

// ---------- navigace ----------

export const navLinkSchema = z.object({
  label: req(80),
  href,
  tagline: str(80).optional(),
  pictogram: pictogramSchema.optional(),
});

export const navItemSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('link'), label: req(60), href }),
  z.object({
    type: z.literal('menu'),
    /** Identifikátor menu – odkazuje na něj blok „Přehled z menu“. */
    id: slug,
    label: req(60),
    columns: z
      .array(z.object({ title: str(60).optional(), items: z.array(navLinkSchema) }))
      .min(1, 'Aspoň jeden sloupec')
      .max(4, 'Nejvýš čtyři sloupce'),
    footerLink: linkSchema.optional(),
  }),
]);

export const navigationSchema = z.object({
  items: z.array(navItemSchema).max(8, 'Nejvýš osm položek'),
  cta: z.object({ label: req(60) }),
  footer: z.object({
    description: str(600),
    columns: z
      .array(
        z.object({
          title: req(60),
          /** Odkazy z menu s tímto id (např. všechny služby) – pak se `links` nepoužije. */
          fromMenu: slug.optional(),
          links: z.array(linkSchema),
        }),
      )
      .max(4, 'Nejvýš čtyři sloupce'),
    contactTitle: req(60),
    bottomLinks: z.array(linkSchema),
    cookieSettingsLabel: req(60),
  }),
  mobileBar: z.object({ callLabel: req(30), writeLabel: req(30) }),
});

export type Navigation = z.infer<typeof navigationSchema>;
export type NavItem = z.infer<typeof navItemSchema>;
export type NavLink = z.infer<typeof navLinkSchema>;

// ---------- texty webu ----------
// Nová pole mají výchozí hodnotu, aby prošel i dokument content/texts uložený
// před jejich zavedením.

export { DEFAULT_NEXT_STEPS, DEFAULT_PAGE_TEXTS, DEFAULT_PROCESS, DEFAULT_THANK_YOU_LINKS } from './textDefaults';

const processStepSchema = z.object({ title: req(120), text: req(400), output: str(200).optional(), fromClient: str(200).optional() });

export const textsSchema = z.object({
  contact: z.object({
    eyebrow: req(40),
    defaultTitle: req(200),
    leadWithPhone: req(600),
    leadWithoutPhone: req(600),
    defaultPlaceholder: req(200),
    legal: req(600), // HTML
    note: req(200),
    submit: req(60),
    successTitle: req(120),
    /** {email} se nahradí adresou návštěvníka. */
    successText: req(300),
    /** {phone} se nahradí telefonem z nastavení. */
    successPhone: str(200),
    personName: req(120),
    personNote: req(160),
    /** Fotka osoby u kontaktu (cesta nebo https URL); bez ní web ukáže iniciály. */
    personPhoto: z.string().trim().max(500).optional(),
    /** Tři kroky „co se stane po odeslání“ pod formulářem. */
    nextSteps: z.array(req(200)).max(5).default(DEFAULT_NEXT_STEPS),
    /** Rozbalovací odkaz na nepovinná pole telefon a web. */
    moreFields: req(80).default('+ Přidat telefon a web (nepovinné)'),
  }),
  cookieBar: z.object({
    title: req(80),
    text: req(800), // HTML
    necessary: req(300),
    analytics: req(300),
    marketing: req(300),
    reject: req(40),
    settings: req(40),
    save: req(40),
    accept: req(40),
  }),
  blog: z.object({
    seoTitle: req(90),
    seoDescription: req(220),
    eyebrow: str(40),
    title: req(160),
    perex: str(600),
    empty: req(200),
    readMore: req(60),
    ctaTitle: req(200),
    ctaLead: req(600),
    ctaPlaceholder: req(200),
  }),
  thankYou: z.object({
    title: req(120),
    text: req(400),
    errorTitle: req(120),
    back: req(60),
    /** Další odkazy pod tlačítkem zpět. */
    links: z.array(linkSchema).max(4).default(DEFAULT_THANK_YOU_LINKS),
  }),
  notFound: z.object({ title: req(80), text: req(300), home: req(60), services: req(60) }),
  organization: z.object({ description: req(500) }),
  /** Jednotný postup spolupráce (blok „Postup“ na stránkách). */
  process: z.object({ steps: z.array(processStepSchema).length(5, 'Postup má přesně pět kroků') }).default(DEFAULT_PROCESS),
  /** Společné texty šablony stránek: FAQ a pruh „Pokračujte“. */
  page: z.object({ faqTitle: req(120), faqLead: str(300), continueLabel: req(60) }).default(DEFAULT_PAGE_TEXTS),
});

export type SiteTexts = z.infer<typeof textsSchema>;
