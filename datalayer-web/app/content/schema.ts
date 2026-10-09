import { z } from 'zod';

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

export const TOPIC_VALUES = [
  'ga4',
  'gtm',
  'datalayer',
  'server-side',
  'consent',
  'konverze',
  'bigquery',
  'audit',
  'leady-crm',
  'tech-audit',
  'sprava',
  'governance',
] as const;

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
export const topicSchema = z.enum(TOPIC_VALUES);

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
    items: z.array(cardSchema).min(1, 'Aspoň jedna karta'),
  }),
  z.object({
    type: z.literal('steps'),
    items: z
      .array(
        z.object({
          title: req(200),
          text: str(2000), // HTML
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
  /** Nejnovější články z blogu. */
  z.object({ type: z.literal('articles'), count: z.number().int().min(1).max(12).optional() }),
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
  tone: z.enum(['light', 'dark', 'deep']).optional(),
  /** Drobná poznámka pod sekcí (např. „Čísla v ukázkách jsou ilustrativní.“). */
  note: str(300).optional(),
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
}): string[] {
  return [
    'site-menu',
    ...(page.contact.enabled !== false ? ['kontakt', 'contact-form'] : []),
    ...(page.faq.length ? ['faq'] : []),
    ...(page.relatedPages?.length ? ['navazujici'] : []),
    ...(page.relatedArticles?.length ? ['do-hloubky'] : []),
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
    relatedArticles: z.array(z.object({ slug, title: str(200) })).optional(),
    relatedPages: z.array(pathSchema).optional(),
    contact: z.object({
      /** Vypnutý kontaktní blok se na stránce nezobrazí (např. zásady). */
      enabled: z.boolean().optional(),
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
  thankYou: z.object({ title: req(120), text: req(400), errorTitle: req(120), back: req(60) }),
  notFound: z.object({ title: req(80), text: req(300), home: req(60), services: req(60) }),
  organization: z.object({ description: req(500) }),
});

export type SiteTexts = z.infer<typeof textsSchema>;
