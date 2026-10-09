import { Link, useLoaderData, useRouteLoaderData } from 'react-router';
import type { MetaFunction } from 'react-router';
import { ContactBlock } from '~/components/ContactBlock';
import { HeroDiagram } from '~/components/HeroDiagram';
import { FaqList } from '~/components/landing/LandingPage';
import { Pi } from '~/components/Pictograms';
import type { Faq, Pictogram } from '~/content/types';
import { getAll } from '~/lib/articles.server';
import { pushEvent } from '~/lib/dataLayer';
import type { RootData } from '~/lib/rootData';
import { faqLd, organizationLd, seoMeta, websiteLd } from '~/lib/seo';
import { CONTACT_EMAIL } from '~/lib/site';
import { formatDate, perex } from '~/lib/text';

// Homepage podle návrhu seo-analyza/04_homepage-ux/homepage-audit-a-navrh.md:
// hero (vizuál beze změny) → pro koho → poznáváte se? → služby jako pipeline →
// jak pracujeme → s čím pracujeme → do hloubky → FAQ → kontakt.
// Sekce „Ověřte si nás“ čeká, až na webu poběží i server-side GTM (podmínka
// z návrhu, kap. 5).

export const handle = { hasContact: true };

export async function loader() {
  let articles: { slug: string; title: string; date: string; perex: string }[] = [];
  try {
    articles = (await getAll()).slice(0, 3).map((a) => ({
      slug: a.slug,
      title: a.title,
      date: a.date,
      perex: a.description || perex(a.content, 140),
    }));
  } catch (err) {
    console.error('homepage: načtení článků selhalo', err);
  }
  return { articles };
}

const FAQ: Faq[] = [
  {
    q: 'Pracujete i s menšími e-shopy, nebo jen s velkými firmami?',
    a: 'S obojím. U menších e-shopů obvykle začínáme auditem a opravou základního měření: GA4, consentu a konverzí. Server-side a BigQuery doporučujeme až tam, kde se vyplatí – a řekneme vám to rovnou.',
  },
  {
    q: 'Komu patří účty a data?',
    a: 'Vždy vám. GA4, Tag Manager, Google Cloud i reklamní účty běží pod vaší firmou, my dostáváme přístup. Po skončení spolupráce nic nemigrujete a dostanete dokumentaci, podle které může pokračovat kdokoli jiný.',
  },
  {
    q: 'Jak se tvoří cena?',
    a: 'Podle rozsahu: počet webů a domén, platforma e-shopu, kolik reklamních systémů napojujeme a jestli stavíme server-side nebo BigQuery. Po úvodní konzultaci dostanete nabídku s pevným rozsahem a výstupy. Provoz Google Cloudu platíte napřímo Googlu.',
  },
  {
    q: 'Spolupracujete s naším vývojářem nebo agenturou?',
    a: 'Ano, je to běžné. Vývojářům dodáme specifikaci datové vrstvy a testovací scénáře, s PPC agenturou se domluvíme na konverzích a jejich hodnotách.',
  },
  {
    q: 'Je server-side tracking v souladu s GDPR?',
    a: 'Server-side nemění nic na tom, kdy potřebujete souhlas. Nastavujeme ho tak, aby respektoval volbu v cookie liště a aby na servery třetích stran odcházelo jen to, co odcházet má. Právní posouzení konkrétního zpracování patří vašemu právníkovi.',
  },
];

export const meta: MetaFunction = ({ matches }) => {
  const root = matches.find((m) => m.id === 'root')?.data as RootData | undefined;
  return seoMeta({
    title: 'Webová analytika a měření pro e-shopy a firmy | datalayer.cz',
    description:
      'Implementace GA4, Google Tag Manager, server-side tracking a Consent Mode v2. Měření, které sedí s tržbami – s dokumentací. Konzultace zdarma.',
    path: '/',
    jsonLd: [
      organizationLd({
        email: root?.email || CONTACT_EMAIL,
        telephone: root?.phone || undefined,
        sameAs: root?.linkedinUrl ? [root.linkedinUrl] : undefined,
      }),
      websiteLd(),
      faqLd(FAQ),
    ],
  });
};

const SEGMENTS: {
  id: string;
  title: string;
  pain: string;
  bullets: string[];
  tags: string[];
  pictogram: Pictogram;
  href: string;
  linkText: string;
}[] = [
  {
    id: 'eshop',
    title: 'E-shopy',
    pain: 'GA4 ukazuje jiné tržby než administrace a reklamní systémy si přivlastňují stejné objednávky.',
    bullets: [
      'e-commerce měření podle schématu GA4',
      'Google Ads, Meta, Sklik i Heureka se stejnou hodnotou objednávky',
      'marže a vratky v reportu',
    ],
    tags: ['Shoptet', 'Upgates', 'WooCommerce', 'Shopify'],
    pictogram: 'eshop',
    href: '/reseni/e-shopy',
    linkText: 'Měření pro e-shopy',
  },
  {
    id: 'b2b',
    title: 'B2B a lead generation',
    pain: 'Víte, kolik přišlo poptávek. Nevíte, které z nich se změnily v zakázku – a reklamy to nevědí taky.',
    bullets: [
      'měření formulářů a hovorů bez osobních údajů v analytice',
      'propojení s CRM a offline konverze',
      'cena za lead i za zakázku',
    ],
    tags: ['HubSpot', 'Pipedrive', 'Raynet'],
    pictogram: 'lead',
    href: '/reseni/b2b-a-lead-generation',
    linkText: 'Měření pro B2B',
  },
  {
    id: 'enterprise',
    title: 'Velké firmy',
    pain: 'Více domén, týmů a dodavatelů. Každý měří trochu jinak a nikdo nemá celkový obraz.',
    bullets: [
      'měřicí plán, názvosloví a verzování jako standard',
      'server-side a BigQuery ve vašem Google Cloudu',
      'spolupráce s IT, testy a jasná pravidla předávání',
    ],
    tags: ['governance', 'sGTM', 'BigQuery'],
    pictogram: 'gov',
    href: '/reseni/velke-firmy',
    linkText: 'Měření pro velké firmy',
  },
];

const SYMPTOMS: { console: string[]; title: string; text: string; href: string; linkText: string }[] = [
  {
    console: ['GA4 purchase        812', 'e-shop objednávky  1 046', '⚠ rozdíl −22 %'],
    title: 'GA4 ukazuje o pětinu méně objednávek než e-shop',
    text: 'Typicky chybí měření u některých plateb, cookie lišta špatně ukládá souhlas nebo web posílá nákup dvakrát a GA4 ho zahodí.',
    href: '/sluzby/audit-mereni',
    linkText: 'Audit měření',
  },
  {
    console: ["consent default 'denied'", 'google_ads konverze −38 %', '⚠ od nasazení lišty'],
    title: 'Po nasazení cookie lišty spadly konverze v Google Ads',
    text: 'Lišta blokuje tagy, ale Consent Mode v2 neposílá signály, takže Google nemá z čeho modelovat.',
    href: '/sluzby/cookie-lista-consent-mode',
    linkText: 'Cookie lišta a Consent Mode',
  },
  {
    console: ['meta Purchase   418', 'ga4 purchase    633', '⚠ event_id chybí'],
    title: 'Meta, Google a Sklik hlásí každý jiná čísla',
    text: 'Část rozdílů způsobuje atribuce a je normální. Zbytek tvoří chyby: chybí Conversions API nebo deduplikace, případně každý systém dostává jinou hodnotu objednávky.',
    href: '/sluzby/mereni-konverzi',
    linkText: 'Měření konverzí',
  },
  {
    console: ['GTM tagy        146', 'aktivní         41 ?', 'verze v212 bez popisu'],
    title: 'V Tag Manageru je 140 tagů a nikdo neví, které jsou potřeba',
    text: 'Nánosy po agenturách zpomalují web a posílají data tam, kam nemají. Uklidíme a nastavíme pravidla, aby to vydrželo.',
    href: '/sluzby/google-tag-manager',
    linkText: 'Google Tag Manager',
  },
  {
    console: ['form odesláno   94', 'CRM zakázky     ?', '⚠ CRM gclid neukládá'],
    title: 'Poptávky končí v e-mailu, ne v CRM ani v Google Ads',
    text: 'Reklamní systémy pak optimalizují na počet formulářů, ne na zakázky. Propojíme web, CRM a reklamní systémy.',
    href: '/reseni/b2b-a-lead-generation',
    linkText: 'Měření pro B2B',
  },
  {
    console: ['report zdroj    Excel', 'aktualizace     ručně, Po 8:00', 'GA4 vzorkování  ano'],
    title: 'Report pro vedení každé pondělí někdo skládá ručně',
    text: 'Data z GA4, reklam a e-shopu spojíme v BigQuery a postavíme dashboard, který obnovuje data sám a sedí s účetnictvím.',
    href: '/sluzby/bigquery',
    linkText: 'BigQuery a dashboardy',
  },
];

/** Služby ve třech vrstvách datové pipeline (rozdělení podle návrhu homepage). */
const PIPELINE: { step: string; title: string; items: { path: string; label: string; tagline: string; pictogram: Pictogram }[] }[] = [
  {
    step: '01 / sběr',
    title: 'Sběr dat',
    items: [
      { path: '/sluzby/datova-vrstva', label: 'Datová vrstva', tagline: 'zadání pro vývojáře, které funguje', pictogram: 'datalayer' },
      { path: '/sluzby/google-tag-manager', label: 'Google Tag Manager', tagline: 'pořádek v tazích a verzích', pictogram: 'gtm' },
      { path: '/sluzby/implementace-ga4', label: 'Implementace GA4', tagline: 'čísla, která sedí s tržbami', pictogram: 'ga4' },
      { path: '/sluzby/server-side-tracking', label: 'Server-side tracking', tagline: 'měření na vaší doméně', pictogram: 'serverside' },
      { path: '/sluzby/mereni-konverzi', label: 'Měření konverzí', tagline: 'Ads, Meta, Sklik i Heureka vidí totéž', pictogram: 'conversion' },
    ],
  },
  {
    step: '02 / souhlas a kvalita',
    title: 'Souhlas a kvalita',
    items: [
      { path: '/sluzby/cookie-lista-consent-mode', label: 'Cookie lišta a Consent Mode v2', tagline: 'legálně a bez zbytečné ztráty dat', pictogram: 'consent' },
      { path: '/sluzby/audit-mereni', label: 'Audit měření', tagline: 'zjistíme, kde data utíkají', pictogram: 'audit' },
      { path: '/sluzby/technicky-audit-webu', label: 'Technický audit webu', tagline: 'rychlost, tagy a technické SEO', pictogram: 'perf' },
      { path: '/sluzby/sprava-webu-a-mereni', label: 'Správa webu a měření', tagline: 'hlídáme, aby měření po releasu nespadlo', pictogram: 'monitor' },
    ],
  },
  {
    step: '03 / data a reporting',
    title: 'Data a reporting',
    items: [
      { path: '/sluzby/bigquery', label: 'BigQuery', tagline: 'surová data bez limitů GA4', pictogram: 'bigquery' },
      { path: '/sluzby/dashboardy-a-reporting', label: 'Dashboardy a reporting', tagline: 'Data Studio (dříve Looker Studio) i Power BI', pictogram: 'dashboard' },
    ],
  },
];

const PROCESS: { title: string; text: string; output: string }[] = [
  { title: 'Audit', text: 'Projdeme GA4, GTM, consent a reklamní systémy a porovnáme je s administrací.', output: 'report s prioritami A/B/C' },
  { title: 'Měřicí plán', text: 'Byznys cíle převedeme na události, parametry a pravidla pojmenování.', output: 'měřicí plán + specifikace dataLayer' },
  { title: 'Implementace', text: 'Nasadíme GTM na webu i serveru, Consent Mode v2 a konverze do reklamních systémů.', output: 'verzované kontejnery' },
  { title: 'Validace', text: 'Projdeme testovací scénáře, zkontrolujeme každou událost a porovnáme čísla s e-shopem nebo CRM.', output: 'protokol testů' },
  { title: 'Předání a podpora', text: 'Předáme dokumentaci, proškolíme tým a hlídáme, aby měření nespadlo po dalším releasu.', output: 'dokumentace + monitoring' },
];

const TOOLS: { label: string; href?: string }[] = [
  { label: 'GA4', href: '/sluzby/implementace-ga4' },
  { label: 'Google Tag Manager', href: '/sluzby/google-tag-manager' },
  { label: 'server-side GTM', href: '/sluzby/server-side-tracking' },
  { label: 'Google Cloud Run' },
  { label: 'BigQuery', href: '/sluzby/bigquery' },
  { label: 'Data Studio', href: '/sluzby/dashboardy-a-reporting' },
  { label: 'Power BI', href: '/sluzby/dashboardy-a-reporting' },
  { label: 'Google Ads', href: '/sluzby/mereni-konverzi' },
  { label: 'Meta CAPI', href: '/sluzby/mereni-konverzi' },
  { label: 'Sklik / Seznam', href: '/sluzby/mereni-konverzi' },
  { label: 'Heureka', href: '/reseni/e-shopy' },
  { label: 'Shoptet', href: '/reseni/e-shopy#shoptet' },
  { label: 'Upgates', href: '/reseni/e-shopy#upgates' },
  { label: 'WooCommerce', href: '/reseni/e-shopy#woocommerce' },
  { label: 'Shopify', href: '/reseni/e-shopy#shopify' },
  { label: 'HubSpot', href: '/reseni/b2b-a-lead-generation' },
  { label: 'Pipedrive', href: '/reseni/b2b-a-lead-generation' },
  { label: 'Raynet', href: '/reseni/b2b-a-lead-generation' },
];

const cta = (id: string, text: string, section: string) => () => pushEvent('cta_click', { cta_id: id, cta_text: text, section });

export default function Home() {
  const { articles } = useLoaderData<typeof loader>();
  const root = useRouteLoaderData('root') as RootData | undefined;

  return (
    <>
      {/* 1 – Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <p className="eyebrow">Webová analytika a měření · e-shopy · B2B · velké firmy</p>
              <h1 className="hero-heading">
                Stavíme neprůstřelné <span className="cyan-underline">datové základy</span> pro váš růst.
              </h1>
              <p className="hero-sub">
                Navrhneme, nasadíme a ověříme měření od datové vrstvy po BigQuery: GA4, Google Tag Manager,
                server-side tracking a Consent Mode v2. S dokumentací a s daty, která vlastníte vy.
              </p>
              <div className="hero-ctas">
                <a href="#kontakt" className="btn btn-cta" onClick={cta('home_hero_primary', 'Konzultovat projekt', 'hero')}>
                  [ Konzultovat projekt ]
                </a>
                <Link to="/jak-pracujeme" className="btn btn-outline-custom" onClick={cta('home_hero_secondary', 'Jak pracujeme', 'hero')}>
                  [ Jak pracujeme ]
                </Link>
              </div>
              <p className="hero-micro">Úvodní třicetiminutová konzultace zdarma · odpověď do jednoho pracovního dne</p>
            </div>
            <div className="col-lg-7 hero-svg-container">
              <HeroDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* 2 – Pro koho */}
      <section className="lp-section lp-section--light" id="pro-koho">
        <div className="container lp-container">
          <p className="eyebrow">[ Pro koho ]</p>
          <h2 className="lp-h2">Měření podle toho, jak vyděláváte</h2>
          <p className="lp-lead">E-shop potřebuje jiná data než firma, která prodává přes obchodníky. Vyberte si, co je vám nejblíž.</p>
          <div className="seg">
            {SEGMENTS.map((s) => (
              <Link key={s.id} to={s.href} className="seg__card" onClick={cta(`home_segment_${s.id}`, s.linkText, 'segments')}>
                <Pi name={s.pictogram} />
                <h3>{s.title}</h3>
                <p className="seg__pain">{s.pain}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="seg__tags">
                  {s.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </p>
                <span className="seg__more">{s.linkText} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3 – Poznáváte se? */}
      <section className="lp-section lp-section--dark" id="symptomy">
        <div className="container lp-container">
          <p className="eyebrow">[ Poznáváte se? ]</p>
          <h2 className="lp-h2">Šest situací, se kterými za námi klienti chodí nejčastěji</h2>
          <p className="lp-lead">
            Každá z nich má technickou příčinu, kterou umíme najít a opravit. Žádnou z nich nevyřeší „lepší report“.
          </p>
          <div className="lp-cards lp-cards--3">
            {SYMPTOMS.map((s, i) => (
              <article className="lp-card" key={s.title}>
                <pre className="lp-console" aria-label="Ilustrativní ukázka">
                  {s.console.map((line) => (
                    <span key={line} className={line.startsWith('⚠') ? 'w' : undefined}>
                      {line}
                      {'\n'}
                    </span>
                  ))}
                </pre>
                <h3 className="lp-card__title">{s.title}</h3>
                <p className="lp-card__text">{s.text}</p>
                <Link className="lp-card__link" to={s.href} onClick={cta(`home_symptom_${i + 1}`, s.linkText, 'symptoms')}>
                  {s.linkText} →
                </Link>
              </article>
            ))}
          </div>
          <p className="lp-note">Čísla v ukázkách jsou ilustrativní.</p>
        </div>
      </section>

      {/* 4 – Služby jako pipeline */}
      <section className="lp-section lp-section--deep" id="sluzby">
        <div className="container lp-container">
          <p className="eyebrow">[ Služby ]</p>
          <h2 className="lp-h2">Od sběru dat po report, kterému věří vedení</h2>
          <p className="lp-lead">Data procházejí třemi vrstvami. Postavíme celou cestu, nebo jen tu část, která vám chybí.</p>
          <div className="pipe">
            {PIPELINE.map((col) => (
              <div className="pipe__col" key={col.step}>
                <p className="pipe__step">{col.step}</p>
                <h3 className="pipe__title">{col.title}</h3>
                {col.items.map((s) => (
                  <Link className="svc" to={s.path} key={s.path} onClick={cta(`home_service_${s.path.split('/').pop()}`, s.label, 'services')}>
                    <Pi name={s.pictogram} />
                    <span>
                      <strong>{s.label}</strong>
                      <span>{s.tagline}</span>
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 – Jak pracujeme */}
      <section className="lp-section lp-section--light" id="jak-pracujeme">
        <div className="container lp-container">
          <p className="eyebrow">[ Jak pracujeme ]</p>
          <h2 className="lp-h2">Pět kroků, po každém dostanete konkrétní výstup</h2>
          <p className="lp-lead">
            Žádné „nastavíme to“. Každý krok končí dokumentem nebo ověřením, které můžete předat vlastnímu týmu.
          </p>
          <ol className="lp-steps lp-steps--5">
            {PROCESS.map((p, i) => (
              <li className="lp-step" key={p.title}>
                <span className="lp-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="lp-step__title">{p.title}</h3>
                <p className="lp-step__text">{p.text}</p>
                <p className="lp-step__out">
                  <span className="lp-step__label">výstup:</span> {p.output}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-4">
            <Link to="/jak-pracujeme" className="lp-card__link">
              Celý postup a co od vás budeme potřebovat →
            </Link>
          </p>
        </div>
      </section>

      {/* 7 – S čím pracujeme */}
      <section className="lp-section lp-section--dark" id="nastroje">
        <div className="container lp-container">
          <p className="eyebrow">[ S čím pracujeme ]</p>
          <div className="plat">
            {TOOLS.map((t) =>
              t.href ? (
                <Link key={t.label} to={t.href}>
                  {t.label}
                </Link>
              ) : (
                <span key={t.label}>{t.label}</span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* 8 – Do hloubky */}
      {articles.length ? (
        <section className="lp-section lp-section--dark lp-section--tight" id="do-hloubky">
          <div className="container lp-container">
            <p className="eyebrow">[ Do hloubky ]</p>
            <h2 className="lp-h2">Vysvětlujeme, jak měření doopravdy funguje</h2>
            <p className="lp-lead">Návody s diagramy, kódem a odkazy na dokumentaci. Bez marketingových zkratek.</p>
            <div className="art">
              {articles.map((a) => (
                <Link key={a.slug} to={`/blog/${a.slug}`} className="art__card" onClick={cta(`home_article_${a.slug}`, a.title, 'articles')}>
                  <span className="art__date">{formatDate(a.date)}</span>
                  <h3>{a.title}</h3>
                  <p>{a.perex}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 9 – FAQ */}
      <FaqList items={FAQ} title="Než se ozvete" />

      {/* 10 – Kontakt */}
      <ContactBlock
        formId="home"
        title="Pojďme se podívat, kde vám utíkají data"
        lead={
          root?.phone
            ? 'Napište nám, zavolejte, nebo vyplňte formulář. Na úvodní třicetiminutové konzultaci projdeme měření a řekneme vám, co opravit jako první.'
            : 'Napište nám, nebo vyplňte formulář. Na úvodní třicetiminutové konzultaci projdeme měření a řekneme vám, co opravit jako první.'
        }
        placeholder="Např. GA4 ukazuje o třicet procent méně objednávek než e-shop a nevíme proč…"
      />
    </>
  );
}
