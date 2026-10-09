// Typovaný obsah landing pages (služby, řešení, podpůrné stránky).
//
// Zdroj textů: zadání v `seo-analyza/03_landing-pages/`. Jedna stránka = jeden
// soubor v `app/content/pages/`, registr je v `app/content/registry.ts`.
// Komponenta `LandingPage` z dat složí stránku, `FAQPage`, `Service`
// a `BreadcrumbList` JSON-LD generuje ze stejných dat jako viditelný obsah.
//
// Inline HTML: textová pole označená „HTML“ smí obsahovat jen <strong>, <em>,
// <code>, <br> a <a href="/…">. Ostatní pole jsou čistý text.

/** Piktogramy ze sady `app/components/Pictograms.tsx` (sprite `pi-…`). */
export type Pictogram =
  | 'ga4'
  | 'gtm'
  | 'datalayer'
  | 'serverside'
  | 'consent'
  | 'conversion'
  | 'bigquery'
  | 'dashboard'
  | 'audit'
  | 'perf'
  | 'monitor'
  | 'eshop'
  | 'lead'
  | 'gov'
  | 'warn';

/** Témata ve formuláři (chips). Hodnota jde do e-mailu a do `lead_topics`. */
export type Topic =
  | 'ga4'
  | 'gtm'
  | 'datalayer'
  | 'server-side'
  | 'consent'
  | 'konverze'
  | 'bigquery'
  | 'audit'
  | 'leady-crm'
  | 'tech-audit'
  | 'sprava'
  | 'governance';

export type Link = { label: string; href: string };

/** Obsahové bloky uvnitř sekce. */
export type Block =
  /** Odstavce. Každá položka = jeden odstavec (HTML). */
  | { type: 'paragraphs'; items: string[] }
  /** Seznam. `check` = zelená fajfka, `cross` = co neděláme, `bullet` = běžný. Položky HTML. */
  | { type: 'list'; style?: 'check' | 'cross' | 'bullet'; title?: string; items: string[] }
  /**
   * Karty v mřížce. `console` = volitelná „konzole“ (2–4 řádky mono textu,
   * řádek začínající „⚠“ se zvýrazní). `tag` = mono štítek nad nadpisem.
   */
  | {
      type: 'cards';
      columns?: 2 | 3 | 4;
      items: {
        title: string;
        text: string; // HTML
        pictogram?: Pictogram;
        tag?: string;
        console?: string[];
        link?: Link;
      }[];
    }
  /** Kroky postupu (časová osa). `output` = výstup kroku, `duration` jen když je známá. */
  | {
      type: 'steps';
      items: { title: string; text: string; output?: string; duration?: string; fromClient?: string }[];
    }
  /** Tabulka. Buňky HTML. `highlightColumn` = index sloupce, který se zvýrazní (doporučená varianta). */
  | { type: 'table'; caption?: string; head: string[]; rows: string[][]; highlightColumn?: number }
  /**
   * Schéma toku dat (náhrada SVG diagramu ze zadání): sloupce zleva doprava,
   * na mobilu pod sebou. Každý sloupec = vrstva/uzel s popiskem a položkami.
   */
  | {
      type: 'flow';
      caption: string; // popis schématu (slouží i jako alternativní text)
      columns: { label: string; items: string[]; note?: string }[];
    }
  /** Zvýrazněný box. `warn` = upozornění / co služba nemění, `info` = tip. Text HTML. */
  | { type: 'callout'; tone?: 'info' | 'warn'; title?: string; text: string }
  /** Ukázka kódu (kopírovatelná). */
  | { type: 'code'; lang: string; code: string; caption?: string }
  /** Záložky (segmenty, platformy). Obsah záložky = odstavce a odrážky (HTML). */
  | {
      type: 'tabs';
      group: string; // id skupiny pro měření `tab_select`
      items: { id: string; label: string; paragraphs?: string[]; bullets?: string[] }[];
    };

export type Section = {
  /** Kotva sekce (bez diakritiky, např. `jak-to-funguje`). */
  id: string;
  /** Mono štítek nad H2 – zobrazí se jako `[ text ]`. */
  eyebrow?: string;
  title: string; // H2
  lead?: string; // úvodní 1–2 věty (HTML)
  /** Pozadí sekce, střídat pro rytmus stránky. Výchozí `dark`. */
  tone?: 'light' | 'dark';
  blocks: Block[];
};

export type Faq = { q: string; a: string /* HTML */ };

export type PageKind = 'service' | 'solution' | 'page';

export type LandingPageContent = {
  /** Cesta bez úvodního lomítka, např. `sluzby/server-side-tracking`. */
  path: string;
  kind: PageKind;
  /** Krátký název do menu, drobečkové navigace a karet (např. „Server-side tracking“). */
  navTitle: string;
  /** Řádek „co to řeší“ do mega-menu a karet (max. 45 znaků). */
  tagline: string;
  pictogram: Pictogram;
  /** Do které skupiny mega-menu služba patří (jen kind = service). */
  menuGroup?: 'sber' | 'data' | 'audity';

  seo: {
    title: string; // 50–60 znaků, včetně „| datalayer.cz“
    description: string; // 140–155 znaků
  };

  hero: {
    eyebrow: string; // mono štítek, např. „server-side GTM“
    h1: string;
    subtitle: string;
    /** Rychlá odpověď pro čtenáře a AI přehledy (40–60 slov, HTML). */
    quickAnswer?: string;
    primaryCta: Link; // obvykle { label: 'Konzultovat …', href: '#kontakt' }
    secondaryCta?: Link;
    microcopy?: string;
  };

  /** Pruh 3–4 ověřitelných faktů pod hero (žádná vymyšlená čísla). */
  trust?: string[];

  sections: Section[];

  faq: Faq[];

  /** Slugy článků z `/blog/<slug>`, odkaz se zobrazí jen u existujícího článku. */
  relatedArticles?: { slug: string; title: string }[];
  /** Cesty souvisejících stránek z registru (např. `sluzby/mereni-konverzi`). */
  relatedPages?: string[];

  contact: {
    formId: string; // např. `lp-server-side`
    topics?: Topic[]; // předvybraná témata
    title: string; // H2 kontaktního bloku
    lead?: string;
    placeholder: string; // placeholder pole zprávy
    leadType?: 'consultation' | 'audit' | 'quick_check';
  };

  /** Podklady pro JSON-LD `Service` (jen service / solution). */
  schema?: {
    name: string;
    serviceType: string;
    description: string;
    audience?: string;
  };
};
