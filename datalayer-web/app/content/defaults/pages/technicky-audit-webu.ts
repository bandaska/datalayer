import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.10).
// Zdroj obsahu: seo-analyza/03_landing-pages/10_technicky-audit-webu.md. Jádro
// stránky jsou taby šesti oblastí, průnik rychlosti a měření shrnují dvě věty
// v tabu Výkon. Rozhodnutí spojuje vymezení „co děláme a co ne“ se třemi
// kartami místo srovnávací tabulky auditů. Mockup výstupu jako obrázek zatím
// chybí, proto výřez inventury tagů, vzorový úkol pro vývojáře a ukázkový
// průběh načtení stránky zůstávají ve sbalených Technických detailech, dokud
// nevyjde článek H3. Dokud klient nedodá podklady, stránka neobsahuje
// případovou studii, počet auditů, délku auditu a kroků, doporučeného SEO
// partnera ani checklist ke stažení – analýza zdarma má zatím pět bodů přímo
// na stránce.

export const page: PageInput = {
  path: 'sluzby/technicky-audit-webu',
  kind: 'service',
  navTitle: 'Technický audit webu',
  tagline: 'rychlost, tagy a technické SEO',
  pictogram: 'perf',
  menuGroup: 'audity',

  seo: {
    title: 'Technický audit webu – rychlost, tagy, SEO | datalayer.cz',
    description:
      'Technický audit a analýza webu: Core Web Vitals, dopad tagů na rychlost, indexace, strukturovaná data, hlavičky, formuláře a měření. S prioritami oprav.',
  },

  hero: {
    eyebrow: 'perf · audity a správa',
    h1: 'Technický audit webu: rychlost, tagy a technické SEO',
    subtitle:
      'Technický audit webu je kontrola toho, jak web funguje pod kapotou: rychlost a Core Web Vitals, dopad měřicích a reklamních skriptů, indexace a strukturovaná data, bezpečnostní hlavičky, přístupnost formulářů a měření. Na konci nedostanete obecná doporučení, ale konkrétní úkoly pro vývojáře s prioritou podle dopadu. Po opravě ověříme, že web opravdu zrychlil a měření funguje dál.',
    primaryCta: { label: 'Objednat technický audit', href: '#kontakt' },
    secondaryCta: { label: 'Co audit kontroluje', href: '#oblasti' },
    microcopy:
      'Nejsme SEO agentura: auditujeme techniku, ne obsah a odkazy · Úvodní třicetiminutová konzultace zdarma',
  },

  trust: ['Úkoly pro vývojáře, ne PDF z nástroje', 'Data reálných návštěvníků, ne jen laboratorní test', 'Po opravách ověříme výsledek'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Technický audit dává smysl, když web zpomaluje, stránky chybí v indexu nebo mizí leady – a také před redesignem či migrací.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Search Console hlásí špatné Core Web Vitals',
              text: 'U mobilu vidíte skupiny URL „Je třeba zlepšit“ nebo „Špatné“ a nikdo neví, co přesně je zpomaluje.',
              pictogram: 'perf',
              tag: 'cwv',
            },
            {
              title: 'Každý nový pixel web zpomalí',
              text: 'Chat, heatmapy, A/B test, další reklamní pixel – každý přidal pár set milisekund a nikdo neví, kolik dohromady.',
              pictogram: 'gtm',
              tag: 'tagy',
            },
            {
              title: 'Stránky nejsou v indexu',
              text: 'Search Console ukazuje stovky URL, které Google prošel, ale nezaindexoval, nebo duplicity z filtrů a parametrů e-shopu.',
              pictogram: 'audit',
              tag: 'index',
            },
            {
              title: 'Formulář, který odrazuje',
              text: 'Chybová hláška není u pole, formulář nejde vyplnit klávesnicí a odeslání nikdo neměří – leady mizí a nevíte kde.',
              pictogram: 'lead',
              tag: 'formulář',
            },
          ],
        },
      ],
    },

    {
      id: 'oblasti',
      eyebrow: 'oblasti auditu',
      title: 'Co audit kontroluje: šest oblastí',
      lead: 'Oblasti se vyplatí kombinovat – třeba kvůli zrychlení, které nerozbije měření.',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'ta_oblasti',
          items: [
            {
              id: 'vykon',
              label: 'Výkon a Core Web Vitals',
              paragraphs: [
                '<strong>Co kontrolujeme:</strong> tři metriky Core Web Vitals na 75. percentilu návštěv – <strong>LCP</strong> do 2,5 s, <strong>INP</strong> do 200 ms, který v březnu 2024 nahradil FID, a <strong>CLS</strong> do 0,1. Data reálných návštěvníků ze Search Console a Chrome UX Reportu porovnáme s laboratorním testem pro každý typ stránky.',
                '<strong>Kde se rychlost potkává s měřením:</strong> když web spustí měřicí skripty příliš brzy, soupeří s hlavním obsahem o síť i procesor a zhorší LCP i INP. Když je spustí příliš pozdě, část dat chybí.',
                '<strong>Ukázkový nález:</strong> cookie lišta, kterou vkládá GTM, posouvá obsah produktové stránky na mobilu a laboratorní test ukazuje CLS 0,24.',
              ],
            },
            {
              id: 'tagy',
              label: 'Měřicí skripty a tagy',
              paragraphs: [
                '<strong>Oblast, kterou SEO audity obvykle vynechávají.</strong> U každého skriptu třetí strany – GTM, Google tag, Meta Pixel, Sklik, Hotjar, chat nebo A/B test – zjistíme velikost, čas hlavního vlákna a okamžik spuštění.',
                'Hledáme duplicity, třeba GA4 přes gtag i GTM zároveň, mrtvé tagy v kontejneru a marketingové tagy, které web spouští před souhlasem. Doporučení vychází z návodů Googlu na web.dev.',
                '<strong>Ukázkový nález:</strong> chatovací widget zabírá na všech stránkách 380 ms hlavního vlákna, přitom stačí ho načíst po interakci.',
              ],
            },
            {
              id: 'technicke-seo',
              label: 'Technické SEO',
              paragraphs: [
                '<strong>Co kontrolujeme:</strong> indexaci v Search Console, <code>robots.txt</code>, canonical, přesměrování, stavové kódy a sitemapu, duplicity z filtrů e-shopu, vykreslování JavaScriptu, <code>hreflang</code> a validaci strukturovaných dat.',
                '<strong>Co víme k říjnu 2026:</strong> rozšířený výsledek FAQ Google od 7. května 2026 nezobrazuje a soubor <code>llms.txt</code> Google Search nepotřebuje. Takové věci vám nebudeme prodávat jako „SEO zlepšení“.',
                '<strong>Ukázkový nález:</strong> filtry kategorií vytvářejí 12 000 indexovatelných kombinací URL bez canonical.',
              ],
            },
            {
              id: 'hlavicky',
              label: 'Bezpečnostní hlavičky a soukromí',
              paragraphs: [
                '<strong>Co kontrolujeme:</strong> HTTPS, <code>Strict-Transport-Security</code>, <code>Referrer-Policy</code>, <code>Permissions-Policy</code>, ochranu proti vložení do rámu, smíšený obsah a <code>Content-Security-Policy</code>, která má povolit jen potřebné domény a neblokovat měření. Zjistíme také, které cookies a požadavky web pošle třetím stranám ještě <strong>před</strong> souhlasem.',
                '<strong>Vymezení:</strong> nejde o penetrační test. Hlavičky navrhneme podle doporučení OWASP a nejdřív je otestujeme v režimu „report-only“, aby nerozbily tagy.',
                '<strong>Ukázkový nález:</strong> Meta Pixel nastavuje cookie <code>_fbp</code> ještě před volbou v cookie liště.',
              ],
            },
            {
              id: 'formulare',
              label: 'Přístupnost formulářů',
              paragraphs: [
                '<strong>Co kontrolujeme:</strong> popisky a chybové hlášky polí, které přečte čtečka obrazovky, ovládání klávesnicí, fokus, kontrast a dotykové plochy podle WCAG 2.2 na úrovni AA. Ověříme i měření – <code>lead_form_start</code>, chyby validace a <code>generate_lead</code> bez čitelných osobních údajů.',
                '<strong>Proč i právně:</strong> zákon č. 424/2023 Sb. se od 28. června 2025 vztahuje mimo jiné na služby elektronického obchodování pro spotřebitele, ne však na mikropodniky, které poskytují služby. Zda se týká vás, posoudí váš právník, nejde o právní radu.',
                '<strong>Ukázkový nález:</strong> formulář ukazuje chyby jen barvou pole, takže je čtečka nepřečte a měření nezaznamená, kde lidé odpadají.',
              ],
            },
            {
              id: 'mereni',
              label: 'Kontrola měření',
              paragraphs: [
                '<strong>Co kontrolujeme rychle:</strong> načtení GA4 a GTM, datovou vrstvu, klíčové události jako nákup nebo lead bez duplicit a výchozí stav i aktualizaci signálů Consent Mode.',
                '<strong>Kdy jít hlouběji:</strong> když GA4 nesedí s e-shopem nebo CRM o desítky procent, doporučíme <a href="/sluzby/audit-mereni">audit měření</a>. Technický audit ho nenahrazuje.',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      eyebrow: 'výstupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Výstup jako úkoly pro vývojáře, ne PDF s 200 chybami z nástroje. Ukázku inventury tagů a vzorového úkolu najdete v Technických detailech u častých otázek.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'report',
              title: 'Shrnutí a technická analýza',
              text: 'Jedna strana pro vedení s pěti hlavními nálezy a podrobné nálezy podle šablon stránek s důkazy z měření a DevTools.',
            },
            {
              tag: 'tickety',
              title: 'Úkoly pro vývojáře',
              text: 'Priorita, reprodukce, doporučení a akceptační kritérium v nástroji, který používáte – Jira, GitHub, GitLab, Trello nebo tabulka.',
            },
            {
              tag: 'inventura tagů',
              title: 'Inventura tagů',
              text: 'Všechny skripty třetích stran s doporučením ponechat, odložit, sloučit, odstranit, nebo přesunout na server.',
            },
            {
              tag: 'rozpočet · hlavičky',
              title: 'Návrhy, aby web znovu nezpomalil',
              text: 'Výkonnostní rozpočet pro LCP, INP, CLS a JavaScript na šablonu, bezpečnostní hlavičky v režimu „report-only“ a checklist přístupnosti formulářů.',
            },
            {
              tag: 're-test',
              title: 'Prezentace a ověření po opravách',
              text: 'Šedesát až devadesát minut s vývojáři, po opravách laboratorní re-test, kontrola měření a krátký závěrečný report.',
            },
          ],
        },
      ],
    },

    {
      id: 'rozhodnuti',
      eyebrow: 'vymezení',
      title: 'Technický audit, ne SEO kampaň',
      lead: 'Jsme technici měření a webu, ne SEO agentura. Díváme se na to, jak web funguje v prohlížeči a pro roboty – obsah a odkazy nechte specialistům.',
      tone: 'light',
      blocks: [
        {
          type: 'proscons',
          yes: {
            title: 'Co uděláme',
            items: [
              { text: 'změříme rychlost na datech reálných návštěvníků i v laboratoři' },
              { text: 'najdeme skripty, které web brzdí, a navrhneme, jak je načítat' },
              { text: 'zkontrolujeme indexaci, hlavičky, formuláře, měření a souhlas' },
              { text: 'připravíme úkoly pro vývojáře a po opravě je zkontrolujeme' },
            ],
          },
          no: {
            title: 'Co neděláme',
            items: [
              { text: 'analýzu klíčových slov a obsahovou strategii', note: '→ výstup rádi předáme vaší SEO agentuře' },
              { text: 'psaní textů a linkbuilding' },
              { text: 'dlouhodobou správu SEO a UX výzkum s uživateli' },
              { text: 'penetrační testy', note: 'bezpečnostní hlavičky ano, hledání zranitelností ne' },
            ],
          },
        },
        {
          type: 'paragraphs',
          items: ['<strong>SEO audit, technický audit, nebo audit měření?</strong> Každý odpovídá na jinou otázku.'],
        },
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'SEO audit',
              text: 'Potřebujete, když řešíte, proč nemáte víc návštěv z vyhledávání – klíčová slova, obsah, konkurenci a odkazy. Dělá ho SEO agentura.',
            },
            {
              title: 'Technický audit webu',
              text: 'Potřebujete, když chcete vědět, co web zpomaluje a co mu technicky brání – včetně dopadu měřicích skriptů.',
              link: { label: 'Co audit kontroluje', href: '#oblasti' },
            },
            {
              title: 'Audit měření',
              text: 'Potřebujete, když nesedí data a nevíte, kde mizí konverze. Prověří do hloubky GA4, GTM, datovou vrstvu i reklamní systémy.',
              link: { label: 'Audit měření', href: '/sluzby/audit-mereni' },
            },
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak audit probíhá',
      lead: 'Stejných pět kroků jako u všech našich služeb. Na začátku vybereme šablony a klíčové cesty, jako je nákup nebo formulář, a data reálných návštěv doplníme laboratorním měřením.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Opravy v GTM, nastavení měření a Consent Mode uděláme sami, změny v šablonách, na serveru nebo v CDN převezmou vývojáři jako úkoly s akceptačním kritériem.',
          implementationFromClient: 'vývojáři pro změny v šablonách, serveru nebo CDN',
        },
      ],
    },

    {
      id: 'analyza-zdarma',
      eyebrow: 'zdarma',
      title: 'Analýza webu zdarma: co si zkontrolujete sami',
      lead: 'Těchto pět kontrol zvládnete za půl hodiny. Nástroje řeknou, <em>že</em> je problém, ale ne vždy <em>proč</em> – výsledky proto rádi projdeme na úvodní konzultaci zdarma.',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>PageSpeed Insights:</strong> nahoře data reálných návštěvníků, dole laboratorní test s doporučeními',
            '<strong>Search Console → Core Web Vitals:</strong> které skupiny stránek jsou na mobilu „Špatné“',
            '<strong>Search Console → Indexování stránek:</strong> kolik URL chybí v indexu a proč',
            '<strong>Rich Results Test:</strong> jestli produkty mají validní data o produktu a ceně',
            '<strong>Karta Network v anonymním okně:</strong> co web posílá Googlu a Metě před volbou v cookie liště',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Technické detaily: ukázka inventury tagů a úkolu pro vývojáře',
    blocks: [
      {
        type: 'paragraphs',
        items: [
          'Ukázková data: na mobilu prohlížeč vykreslí hlavní obrázek produktové stránky až za 3,8 s. Mezitím GTM vloží cookie lištu, která posune obsah, a na řadu přijdou Meta Pixel, retargeting Skliku, heatmapy a chat, který doběhne až za 4,2 s. Po optimalizaci je lišta přímo v HTML, heatmapy a chat přijdou na řadu až po načtení stránky nebo po interakci a LCP klesne na 2,1 s.',
        ],
      },
      {
        type: 'table',
        caption: 'Inventura tagů: výřez s ukázkovými daty',
        head: ['Skript', 'Hlavní vlákno', 'Doporučení'],
        rows: [
          ['<code>gtm.js</code>', '120 ms', 'ponechat, vyčistit 23 nepoužívaných tagů'],
          ['<code>gtag/js</code> – GA4', '160 ms', 'odstranit duplicitní vložení v šabloně'],
          ['<code>fbevents.js</code> – Meta', '110 ms', 'ponechat přes GTM, zvážit Conversions API přes server'],
          ['<code>hotjar-*.js</code>', '290 ms', 'spouštět jen na vybraných šablonách a po načtení stránky'],
          ['<code>chat-widget.js</code>', '380 ms', 'načítat až po kliknutí na ikonu chatu'],
          ['Custom HTML „starý remarketing“', '40 ms', '<strong>odstranit</strong>, nefunguje od roku 2023'],
        ],
      },
      {
        type: 'code',
        lang: 'text',
        caption: 'Vzorový úkol pro vývojáře, ukázková data',
        code: `[PERF-07] Cookie lišta posouvá obsah na mobilu (CLS)
Šablony: produkt, kategorie · Priorita: vysoká · Náročnost: S, do jednoho dne

Jak reprodukovat:
  Chrome DevTools → Performance, profil mobil, první návštěva bez souhlasu.
Zjištění:
  GTM vkládá lištu až po načtení stránky. Lišta posune obsah o 180 px,
  laboratorní test ukazuje CLS 0,24.
Doporučení:
  Vykreslit lištu přímo v HTML šablony, ne přes GTM, a to jako překryv,
  kterému šablona předem vyhradí místo. Logiku Consent Mode, tedy
  default a update, nechat beze změny.
Akceptační kritérium:
  CLS < 0,1 v laboratorním testu na obou šablonách. Po nasbírání dat
  z reálných návštěv skupina URL „Dobré“ v přehledu Core Web Vitals.
Kontrola měření po opravě:
  V GTM Preview ověřit událost cookie_consent_update a stav souhlasu
  před volbou a po ní. GTM spouští GA4 a reklamní tagy jen po souhlasu.`,
      },
    ],
  },

  faq: [
    {
      q: 'Kolik technický audit stojí a děláte analýzu zdarma?',
      a: 'Cenu stanovíme předem jako pevnou částku podle počtu typů stránek a domén, platformy a počtu tagů v kontejneru – a podle toho, jestli chcete ověření po opravách a pomoc s implementací. Úvodní třicetiminutová konzultace je zdarma: projdeme výsledky z PageSpeed Insights a Search Console a řekneme, jestli má smysl jít hlouběji.',
    },
    {
      q: 'Jak dlouho audit trvá a co od nás potřebujete?',
      a: 'Délka závisí hlavně na počtu typů stránek a domén, termín domluvíme spolu s rozsahem. Potřebujeme přístup do Search Console, kde stačí omezený uživatel, čtení v GA4 a GTM, seznam hlavních typů stránek a klíčových cest, adresu testovacího prostředí, pokud ho máte, a kontakt na vývojáře. Na konci si dáme šedesát až devadesát minut na prezentaci s vývojáři.',
    },
    {
      q: 'Kontrolujete i cookie lištu a souhlas?',
      a: 'Zkontrolujeme, které cookies web nastaví a jaké požadavky pošle třetím stranám ještě před volbou v cookie liště, a ověříme výchozí stav Consent Mode. Nastavení lišty a Consent Mode pak řeší služba <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode</a>. Jde o technickou kontrolu, ne o právní radu – texty lišty posoudí váš právník.',
    },
    {
      q: 'Zpomalují měřicí kódy web? Musíme se jich vzdát?',
      a: 'Každý skript třetí strany stojí síť a čas procesoru, měření se ale obvykle vzdávat nemusíte. Většinu zpomalení způsobují duplicitní vložení, staré nefunkční tagy, těžké skripty jako chat nebo heatmapy, které web spouští hned na všech stránkách, a cookie lišta, kterou vkládá tag manager. V auditu každý skript změříme a navrhneme, jestli ho ponechat, odložit, sloučit, odstranit, nebo přesunout na server.',
    },
    {
      q: 'Může optimalizace rychlosti rozbít měření?',
      a: 'Ano, a stává se to často: web odloží GTM tak pozdě, že nestihne zachytit nákup, minifikace rozbije datovou vrstvu nebo nová bezpečnostní hlavička zablokuje domény měření. Proto každé doporučení v auditu obsahuje i kontrolu měření po opravě. Re-test ověří obojí – že web zrychlil a že data tečou dál.',
    },
    {
      q: 'Opravíte chyby z auditu i sami?',
      a: 'Úpravy v Google Tag Manageru, nastavení měření, Consent Mode a strukturovaná data, která web vkládá přes tagy, uděláme sami. Změny v kódu šablon, serveru nebo CDN obvykle dělají vaši vývojáři – dodáme jim přesné zadání, odpovíme na dotazy a po nasazení vše ověříme.',
    },
  ],

  relatedArticles: [
    { slug: 'tagy-a-rychlost-webu', title: 'Měřicí skripty a rychlost webu' },
    { slug: 'audit-gtm-kontejneru', title: 'Audit GTM kontejneru: nejčastější chyby' },
    { slug: 'co-obsahuje-audit-mereni', title: 'Co má obsahovat audit měření' },
  ],

  relatedPages: ['sluzby/audit-mereni', 'sluzby/sprava-webu-a-mereni', 'sluzby/server-side-tracking'],

  contact: {
    formId: 'lp-tech-audit',
    topics: ['audit'],
    title: 'Zjistěte, co brzdí váš web',
    lead: 'Stačí adresa webu a jedna věta o tom, co vás trápí. Na úvodní konzultaci zdarma projdeme výsledky z PageSpeed Insights a Search Console a navrhneme rozsah auditu.',
    placeholder: 'Např. po přidání chatu a heatmap web na mobilu zpomalil…',
    leadType: 'audit',
  },

  schema: {
    name: 'Technický audit webu',
    serviceType:
      'Technický audit webu: výkon a Core Web Vitals, dopad měřicích skriptů, technické SEO, bezpečnostní hlavičky, přístupnost formulářů a kontrola měření',
    description:
      'Technická analýza webu, která končí úkoly pro vývojáře s prioritou podle dopadu a ověřením po opravách.',
    audience: 'E-shopy, B2B firmy, velké firmy',
  },
};
