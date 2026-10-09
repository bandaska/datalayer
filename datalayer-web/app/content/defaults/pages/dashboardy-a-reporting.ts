import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.8).
// Zdroj obsahu: seo-analyza/03_landing-pages/08_dashboardy-a-reporting.md.
// Hlavní vizuál je galerie čtyř typů dashboardů – zatím bez obrázků, protože
// screenshoty ani mockupy od klienta nemáme. Karty proto nesou piktogram
// a dvě věty, textové ukázky v konzoli zmizely. Ze sladění s účetnictvím
// zůstala na stránce tři pravidla a karta s příkladem odsouhlasení. Další
// pravidla a podrobné srovnání Data Studia a Power BI jsou ve sbalených
// Technických detailech, dokud nevyjdou články F4, G2 a G3. Vysvětlivka
// „dříve Looker Studio“ je jen u prvního výskytu (hero). Dokud klient nedodá
// podklady, stránka neobsahuje případovou studii, počet dashboardů, délky
// kroků ani seznam podporovaných platforem a CRM.

export const page: PageInput = {
  path: 'sluzby/dashboardy-a-reporting',
  kind: 'service',
  navTitle: 'Dashboardy a reporting',
  tagline: 'Data Studio i Power BI',
  pictogram: 'dashboard',
  menuGroup: 'data',

  seo: {
    title: 'Marketingový dashboard a reporting na míru | datalayer.cz',
    description:
      'Marketingový dashboard v Data Studiu (dříve Looker Studio) nebo Power BI, který sedí s účetnictvím. Data z GA4, Ads, Meta, Skliku i ERP. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'report · data a reporting',
    h1: 'Marketingové dashboardy a reporting na míru',
    subtitle:
      'Marketingový dashboard je jedna obrazovka, na které vedení i marketing vidí tržby, náklady a výkon kanálů ze všech systémů najednou. Postavíme ho v Data Studiu (dříve Looker Studio) nebo v Power BI a napojíme na GA4, Google Ads, Metu, Sklik i data e-shopu, CRM nebo ERP. Čísla sedí s účetnictvím, aktualizace běží automaticky a nástroj volíme podle toho, kde už firma pracuje.',
    primaryCta: { label: 'Konzultovat dashboard', href: '#kontakt' },
    secondaryCta: { label: 'Typy dashboardů', href: '#typy-dashboardu' },
    microcopy: 'Úvodní třicetiminutová konzultace zdarma · reporty i data zůstávají na vašich účtech',
  },

  trust: ['Tržby sedí s účetnictvím', 'Každé číslo má definici a zdroj', 'Data Studio i Power BI'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se?',
      lead: 'Problém obvykle není v grafech, ale v datech pod nimi a v tom, že nikdo neví, které číslo platí.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Pondělní Excel',
              text: 'Každý týden někdo hodiny kopíruje čísla z GA4, Ads, Mety a administrace do tabulky – a když onemocní, report nevyjde.',
              pictogram: 'monitor',
              tag: 'excel',
            },
            {
              title: 'Tři systémy, tři čísla',
              text: 'Google Ads hlásí 412 konverzí, GA4 289 a e-shop 356 objednávek, takže porada řeší, kdo má pravdu, místo toho, co dál.',
              pictogram: 'conversion',
              tag: '≠',
            },
            {
              title: 'Vedení vidí obrat, ne zisk',
              text: 'Reporty ukazují ROAS a PNO bez vratek, storen a nákupních cen – a kampaň s nejvyšším obratem může mít nejnižší marži.',
              pictogram: 'eshop',
              tag: 'marže',
            },
            {
              title: 'Leady bez zakázek',
              text: 'Marketing vykazuje počet leadů, obchod zakázky v CRM, ale kolik zakázek přinesla která kampaň, neukazuje nikdo.',
              pictogram: 'lead',
              tag: 'crm',
            },
          ],
        },
      ],
    },

    {
      id: 'typy-dashboardu',
      eyebrow: 'typy dashboardů',
      title: 'Čtyři typy dashboardů, které stavíme nejčastěji',
      lead: 'Každý odpovídá na jiné otázky a čte ho někdo jiný. Počet a podobu dashboardů určíme podle rozhodnutí, která mají podpořit.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          items: [
            {
              pictogram: 'dashboard',
              tag: 'vedení · týdně',
              title: 'Manažerský přehled',
              text: 'Majitel, CEO a CFO vidí čisté tržby, hrubý zisk, marketingové náklady a PNO nebo POAS. Odpoví, jestli firma roste a marketing se vyplácí.',
            },
            {
              pictogram: 'conversion',
              tag: 'marketing · denně',
              title: 'Marketingový dashboard',
              text: 'Ukáže náklady, alokované tržby, ROAS, POAS a čerpání rozpočtu podle kanálů a kampaní. PPC tým i agentura vidí, která kampaň vydělává po marži.',
            },
            {
              pictogram: 'eshop',
              tag: 'e-commerce · měsíčně',
              title: 'E-commerce dashboard',
              text: 'Ukáže konverzní poměr, průměrnou objednávku a marži i vratky po kategoriích. Category manažer vidí, které produkty táhnou zisk a kde lidé odpadají.',
            },
            {
              pictogram: 'lead',
              tag: 'b2b · týdně',
              title: 'B2B pipeline',
              text: 'Spojí formulář na webu se stavem leadu v CRM. Obchodní ředitel vidí cenu za lead i za zakázku podle kanálu a dobu do uzavření.',
            },
          ],
        },
      ],
    },

    {
      id: 'vystupy',
      eyebrow: 'výstupy',
      title: 'Co uděláme a co dostanete',
      lead: 'Grafy jsou poslední krok. Nejdřív se domluvíme, co má dashboard rozhodovat a které číslo platí.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'slovník metrik',
              title: 'Strom KPI a slovník metrik',
              text: 'Nahoře tři až pět čísel pro vedení, pod nimi metriky pro marketing a obchod – u každého definice, výpočet, zdroj a vlastník.',
            },
            {
              tag: 'data studio · power bi',
              title: 'Dashboardy na míru',
              text: 'Počet a typ podle zadání, ve firemních barvách a pro desktop i mobil – nejdřív jako klikací prototyp na vašich datech.',
            },
            {
              tag: 'bigquery',
              title: 'Zdroje dat a BigQuery',
              text: 'Přímé konektory pro jednoduché reporty, model v BigQuery, když spojujete víc zdrojů nebo potřebujete marži a delší historii.',
            },
            {
              tag: 'shoda s ERP',
              title: 'Rekonciliační protokol',
              text: 'Vybraný měsíc porovnáme s účetnictvím řádek po řádku a každý rozdíl vysvětlíme.',
            },
            {
              tag: 'automatizace',
              title: 'Reporting, který běží sám',
              text: 'Aktualizace dat, týdenní přehled e-mailem, upozornění, když metrika překročí hranici, a přístupová práva.',
            },
            {
              tag: 'dokumentace',
              title: 'Dokumentace a školení',
              text: 'Návod, jak dashboard číst a co dělat, když číslo nesedí, školení se záznamem a kontrola po třiceti dnech.',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'tok dat',
      title: 'Odkud čísla v dashboardu pocházejí',
      lead: 'GA4 nikdy neuvidí všechny objednávky – část lidí odmítne cookies nebo používá blokátory a některé objednávky vzniknou po telefonu. Peníze proto bereme z účetnictví nebo ERP a GA4 s reklamními systémy jen rozdělí tržby podle kanálů a kampaní.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Data tečou přímými konektory, nebo přes BigQuery. Každá metrika má jednu definici ve slovníku metrik a před zobrazením v dashboardu ji zkontrolujeme proti účetnictví.',
          columns: [
            {
              label: 'zdroje',
              items: ['GA4 a Search Console', 'Google Ads, Meta a Sklik', 'e-shop nebo ERP: tržby, marže, vratky', 'CRM: leady a zakázky'],
            },
            { label: 'datová vrstva', items: ['přímé konektory pro jednoduché reporty', 'BigQuery: model a historie'] },
            { label: 'slovník metrik', items: ['jedna definice, jeden výpočet', 'kontrola shody s ERP'] },
            { label: 'dashboardy', items: ['vedení – týdně', 'marketing – denně', 'e-commerce – měsíčně', 'B2B pipeline – týdně'] },
          ],
        },
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Peníze z účetnictví.</strong> Tržby bereme z ERP, podíly kanálů z GA4 a reklamních systémů.',
            '<strong>Jedna definice tržby.</strong> Bez DPH, po stornech, s dopravou nebo bez – jak to má účetnictví.',
            '<strong>Rozdíl zůstává vidět.</strong> Když dlaždice „shoda s ERP“ náhle skočí, selhalo měření, ne marketing.',
          ],
        },
      ],
    },

    {
      id: 'rozhodnuti',
      eyebrow: 'srovnání',
      title: 'Data Studio, nebo Power BI?',
      lead: 'Oba nástroje jsou dobré. Rozhoduje, kde už firma pracuje, kdo bude dashboard číst a jak složité výpočty potřebujete. Nad modelem v BigQuery fungují oba, takže volba není definitivní.',
      tone: 'light',
      note: 'Ceny podle webů Googlu a Microsoftu k říjnu 2026, bez DPH.',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'google',
              title: 'Data Studio',
              text: 'Volíme pro marketingový tým v Google ekosystému, který bere data hlavně z Googlu a BigQuery.',
              bullets: [
                'zdarma, verze Pro za devět dolarů za uživatele a projekt měsíčně',
                'sdílení s vedením a agenturou bez licencí',
                'nativní konektory na GA4, Google Ads, Search Console a BigQuery',
              ],
            },
            {
              tag: 'microsoft',
              title: 'Power BI',
              text: 'Volíme, když je Power BI ve firmě standard a finance i obchod pracují v Microsoftu.',
              bullets: [
                'silný datový model s relacemi a jazykem DAX',
                'sdílení obvykle vyžaduje licenci pro autora i čtenáře',
                'Desktop zdarma, Pro za čtrnáct dolarů za uživatele měsíčně při roční platbě',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak postupujeme a co od vás potřebujeme',
      lead: 'Stejných pět kroků jako u všech našich služeb. Na úvodním workshopu sepíšeme, kdo dashboard čte a jaká rozhodnutí podle něj dělá – grafy přijdou na řadu až potom.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Navrhneme obrazovky, postavíme klikací prototyp na vašich datech, napojíme zdroje a vybraný měsíc sladíme s účetnictvím.',
          implementationFromClient: 'export z ERP nebo CRM, kontrolní čísla z účetnictví a dvě kola připomínek',
        },
      ],
    },

    {
      id: 'jak-poznate',
      eyebrow: 'kontrola',
      title: 'Jak poznáte, že čísla sedí',
      lead: 'Jak velký rozdíl mezi GA4 a účetnictvím je normální, záleží na webu, liště souhlasu a zákaznících. Důležité je, aby byl stabilní a abyste znali jeho příčinu. Když nevíte, proč GA4 vidí o třicet procent méně než e-shop, začněte <a href="/sluzby/audit-mereni">auditem měření</a>.',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'dlaždice „shoda s ERP“ a „zdraví měření“ přímo v dashboardu',
            'datum poslední aktualizace na každé obrazovce',
            'týdenní přehled pro vedení v pondělí ráno, bez ručního kopírování',
            'upozornění, když PNO překročí cíl nebo klesnou objednávky',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Ukázkový příklad odsouhlasení: září 2026, Kč bez DPH',
          text: 'Objednávky z webu podle administrace: 5 132 600 Kč<br>Po stornech a vratkách: <strong>4 812 300 Kč, sedí s účetnictvím</strong><br>Změřeno v GA4: 4 386 200 Kč, tedy 85,5 % objednávek z webu',
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Technické detaily: sladění s účetnictvím a srovnání Data Studia s Power BI',
    blocks: [
      {
        type: 'list',
        style: 'bullet',
        title: 'Další pravidla sladění s účetnictvím',
        items: [
          '<strong>Objednávky mimo GA4.</strong> Předpoklad, že mají podobné rozdělení podle kanálů jako ty, které GA4 zachytí, výslovně uvedeme v dokumentaci.',
          '<strong>Stejné datum a časové pásmo.</strong> Datum objednávky, nebo fakturace podle toho, s čím pracuje účetnictví, ve všech zdrojích časové pásmo Europe/Prague.',
          '<strong>Vratky a storna.</strong> Přehled podle data objednávky ukáže výkon kampaně, přehled podle data vratky cash flow.',
          '<strong>Hodnota objednávky.</strong> Parametr <code>value</code> v GA4 i hodnoty v reklamních systémech počítáme podle stejné definice tržby jako účetnictví.',
        ],
      },
      {
        type: 'table',
        caption: 'Data Studio a Power BI – ceny k říjnu 2026 bez DPH, Microsoft je na webu uvádí jako orientační',
        head: ['Kritérium', 'Data Studio', 'Power BI'],
        rows: [
          ['Cena', 'zdarma, Pro devět dolarů za uživatele a projekt měsíčně', 'Desktop zdarma, Pro čtrnáct a Premium Per User 24 dolarů za uživatele měsíčně při roční platbě, kapacita Fabric podle velikosti'],
          ['Sdílení', 'odkazem nebo pozvánkou na Google účet, plánované e-maily', 'autor i čtenáři potřebují Pro nebo PPU, na kapacitě Fabric F64 a vyšší čtenářům stačí licence Free'],
          ['Komu reporty patří', 've verzi zdarma jednotlivým uživatelům, v Pro organizaci a projektu v Google Cloudu', 'pracovním prostorům ve vašem tenantovi Microsoft'],
          ['GA4, Google Ads, Search Console', 'nativní konektory Googlu, GA4 podléhá kvótám Data API', 'GA4 přes konektor Google Analytics, Ads a Search Console přes BigQuery nebo konektor třetí strany'],
          ['Meta, Sklik, Heureka', 'partnerské placené konektory nebo BigQuery', 'konektory třetích stran nebo BigQuery'],
          ['Aktualizace dat', 'GA4 po jedné, čtyřech nebo dvanácti hodinách, BigQuery po minutách', 'osmkrát denně na sdílené kapacitě, až 48krát na Premium, PPU nebo Fabric'],
        ],
      },
      {
        type: 'paragraphs',
        items: [
          'Data Studio běží od dubna 2026 na adrese datastudio.google.com. Stará adresa přesměruje na novou a reporty fungují bez úprav – jen když firma omezuje přístup na externí weby přes proxy, musí IT povolit novou doménu.',
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Kolik stojí dashboard na míru?',
      a: 'Cenu stanovíme po úvodní konzultaci jako pevnou částku. Rozhoduje počet dashboardů a typ zdrojů – zdroje Googlu napojíme rychle, ERP bez API dá víc práce – a to, jestli potřebujete BigQuery a sladění s účetnictvím. Licence Data Studia Pro nebo Power BI a provoz BigQuery platíte přímo Googlu nebo Microsoftu.',
    },
    {
      q: 'Jak dlouho to trvá a co od nás potřebujete?',
      a: 'Délka závisí hlavně na tom, jestli stačí přímé konektory, nebo stavíme reporting nad BigQuery s napojením ERP či CRM. Potřebujeme devadesát minut na úvodní workshop s lidmi, kteří budou dashboard číst, přístupy pro čtení do GA4 a reklamních systémů a export nebo API k e-shopu, ERP či CRM, případně kontakt na IT. K tomu kontrolní čísla z účetnictví za jeden měsíc a dvě kola připomínek k prototypu.',
    },
    {
      q: 'Komu bude dashboard patřit?',
      a: 'Vám. Reporty zakládáme na firemních účtech v Google Workspace nebo Microsoft 365 a datové zdroje v projektu Google Cloudu, který patří vám – nikdy pod osobním účtem zaměstnance ani pod naším. My si necháme přístup jen po dobu spolupráce a při předání dostanete seznam všech přístupů.',
    },
    {
      q: 'Proč se čísla v dashboardu liší od GA4 nebo Google Ads?',
      a: 'Každý systém počítá jinak: Google Ads připisuje konverzi ke dni kliknutí podle vlastní atribuce, GA4 vidí jen návštěvníky se souhlasem a bez blokátorů a e-shop zná i objednávky po telefonu. Proto tržby bereme z účetnictví nebo ERP a ze systémů jen podíly kanálů. Rozdíly sepíšeme v rekonciliačním protokolu, a když je rozdíl velký nebo nestabilní, doporučíme <a href="/sluzby/audit-mereni">audit měření</a>.',
    },
    {
      q: 'Potřebujeme BigQuery, nebo stačí přímé konektory?',
      a: 'Pro jednoduchý report nad GA4 a Google Ads stačí přímé konektory. <a href="/sluzby/bigquery">BigQuery</a> doporučujeme, když spojujete víc zdrojů, třeba Metu, Sklik, ERP a CRM, potřebujete marži, vratky nebo delší historii, než dovolí GA4, nebo report otevírá hodně lidí. Konektor GA4 v Data Studiu podléhá kvótám Google Analytics Data API a při velkém provozu hlásí chyby, kdežto v BigQuery čísla spočítáme jednou a dashboard jen zobrazí hotové tabulky.',
    },
    {
      q: 'Umíte napojit Sklik, Heureku, Shoptet nebo naše CRM?',
      a: 'Ano, pokud mají API nebo export. Pro Sklik Google vlastní konektor nenabízí, proto náklady stahujeme přes Sklik API do BigQuery, Heureku a Zboží.cz napojujeme přes exporty nebo rozhraní účtu a e-shopové platformy a CRM přes export nebo API. Konektory třetích stran většinou nejsou zdarma a jejich spolehlivost vždy ověříme – konkrétní zdroje probereme na úvodní konzultaci.',
    },
  ],

  relatedArticles: [
    { slug: 'looker-studio-pruvodce', title: 'Data Studio pro marketing' },
    { slug: 'looker-studio-vs-power-bi', title: 'Data Studio, nebo Power BI?' },
    { slug: 'marketingovy-dashboard', title: 'Marketingový dashboard: jaké KPI sledovat' },
  ],

  relatedPages: ['sluzby/bigquery', 'sluzby/audit-mereni', 'sluzby/sprava-webu-a-mereni'],

  contact: {
    formId: 'lp-dashboardy',
    topics: ['bigquery'],
    title: 'Propojíme data do jednoho dashboardu',
    lead: 'Na třicetiminutové konzultaci zdarma projdeme, co dnes reportujete a z jakých zdrojů, a doporučíme nástroj i rozsah.',
    placeholder: 'Např. report z GA4, Google Ads a ERP dnes skládáme ručně v Excelu…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Dashboardy a reporting na míru',
    serviceType:
      'Návrh a tvorba marketingových dashboardů a automatizovaného reportingu v Data Studiu a Power BI',
    description:
      'Marketingové, manažerské, e-commerce a B2B dashboardy v Data Studiu (dříve Looker Studio) nebo Power BI, které čerpají data z GA4, Google Ads, Meta, Skliku, e-shopu, CRM a ERP, sedí s účetnictvím a mají automatickou aktualizaci.',
    audience: 'E-shopy, B2B firmy, velké firmy',
  },
};
