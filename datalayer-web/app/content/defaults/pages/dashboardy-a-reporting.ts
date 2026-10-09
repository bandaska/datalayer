import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/08_dashboardy-a-reporting.md (návrh v1, 8. října 2026).
// Do dodání podkladů od klienta stránka neobsahuje: případovou studii, počet
// dashboardů v trust baru, délky kroků a projektů, seznam platforem a CRM,
// následnou údržbu dashboardů ani galerii se screenshoty (ukázky popisují karty).

export const page: PageInput = {
  path: 'sluzby/dashboardy-a-reporting',
  kind: 'service',
  navTitle: 'Dashboardy a reporting',
  tagline: 'Data Studio (dříve Looker Studio) i Power BI',
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
      'V Data Studiu (dříve Looker Studio) nebo v Power BI, napojené na GA4, Google Ads, Metu, Sklik a data e-shopu, CRM nebo ERP. Čísla sedí s účetnictvím a aktualizace běží automaticky.',
    quickAnswer:
      '<strong>Marketingový dashboard</strong> je jedna obrazovka, na které vedení i marketing vidí tržby, náklady a výkon kanálů ze všech systémů najednou. Stavíme ho podle rozhodnutí, která má podpořit: definujeme KPI, napojíme zdroje, sladíme čísla s účetnictvím a nastavíme automatickou aktualizaci. Data Studio, nebo Power BI volíme podle toho, kde už vaše firma pracuje.',
    primaryCta: { label: 'Konzultovat dashboard', href: '#kontakt' },
    secondaryCta: { label: 'Prohlédnout ukázky', href: '#ukazky' },
    microcopy: 'Úvodní třicetiminutová konzultace zdarma · Reporty i data zůstávají na vašich účtech',
  },

  trust: [
    'Tržby z účetnictví, podíly kanálů z GA4 a reklam – každé číslo má určený zdroj',
    'Reporty, datové zdroje i BigQuery na vašich účtech, ne na našich',
    'Data Studio i Power BI – doporučíme podle vašeho ekosystému',
    'Slovník metrik: jak přesně počítáme každé KPI',
  ],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Kdy je čas na nový reporting',
      lead: 'Problém obvykle není v grafech, ale v datech pod nimi a v tom, že nikdo neví, které číslo platí.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Pondělní Excel',
              text: 'Každý týden někdo hodiny kopíruje čísla z GA4, Ads, Mety a administrace do tabulky. Když onemocní, report nevyjde.',
              pictogram: 'monitor',
            },
            {
              title: 'Tři systémy, tři čísla',
              text: 'Google Ads hlásí 412 konverzí, GA4 289 a e-shop 356 objednávek. Porada řeší, kdo má pravdu, místo toho, co dál.',
              pictogram: 'conversion',
            },
            {
              title: 'Vedení vidí obrat, ne zisk',
              text: 'ROAS a PNO bez vratek, storen a nákupních cen. Kampaň s nejvyšším obratem může mít nejnižší marži.',
              pictogram: 'eshop',
            },
            {
              title: 'Dashboard, na který čekáte minutu',
              text: 'Report napojený přímo na GA4 zpomaluje a občas hlásí chybu. Konektor GA4 v Data Studiu podléhá kvótám Google Analytics Data API.',
              pictogram: 'warn',
            },
            {
              title: 'Leady bez zakázek',
              text: 'Marketing vykazuje počet leadů, obchod zakázky v CRM. Kolik zakázek přinesla která kampaň, neukazuje nikdo.',
              pictogram: 'lead',
            },
            {
              title: 'Report, který nikdo nečte',
              text: 'Čtrnáct stran a šedesát grafů, ale žádné rozhodnutí. Dobrý dashboard odpoví na tři až pět otázek na první obrazovce.',
              pictogram: 'dashboard',
            },
          ],
        },
      ],
    },
    {
      id: 'ukazky',
      eyebrow: 'ukázková data',
      title: 'Ukázky dashboardů: co uvidíte na obrazovce',
      lead: 'Šest typických dashboardů, které stavíme. U každého najdete, pro koho je, na jaké otázky odpovídá a odkud bere data. Čísla v náhledech jsou fiktivní.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'data studio',
              title: 'Týdenní přehled pro vedení e-shopu',
              text: '<strong>Pro koho:</strong> majitel, CEO a CFO, v pondělí ráno e-mailem jako PDF s odkazem. <strong>Odpovídá:</strong> Rosteme? Vyplácí se marketing po odečtení nákladů a marže? Sedí čísla s účetnictvím? <strong>Zdroje:</strong> tržby a marže z ERP, podíly kanálů z GA4, náklady z Google Ads, Mety, Skliku a srovnávačů.',
              console: ['čisté tržby 1 184 600 Kč ▲ 6,2 % t/t', 'PNO 18,1 % · POAS 2,30', 'shoda s ERP 99,6 %'],
            },
            {
              tag: 'data studio · power bi',
              title: 'Náklady a výnosy kampaní napříč systémy',
              text: '<strong>Pro koho:</strong> PPC specialisté a marketingový manažer, denně nebo týdně. <strong>Odpovídá:</strong> Které typy kampaní vydělávají po marži? Jak čerpáme měsíční rozpočet? <strong>Zdroje:</strong> Google Ads, Meta a Sklik přes BigQuery, marže z ERP, GA4.',
              console: [
                'Search: ROAS 6,0 · POAS 2,46',
                'Performance Max: ROAS 5,0 · POAS 1,75',
                '⚠ PMax má po marži nižší návratnost než Search',
              ],
            },
            {
              tag: 'power bi · data studio',
              title: 'Produkty, marže a vratky',
              text: '<strong>Pro koho:</strong> category manažer, nákup a e-commerce manažer, jednou měsíčně. <strong>Odpovídá:</strong> Které kategorie táhnou zisk a které ho „vracejí“? <strong>Zdroje:</strong> nákupní ceny a vratky z ERP nebo e-shopu, cesta od zobrazení produktu k nákupu z GA4.',
              console: ['sedačky: marže 34 % · vratky 9,8 %', 'doplňky: marže 52 % · vratky 2,2 %'],
            },
            {
              tag: 'power bi · data studio',
              title: 'B2B pipeline: od leadu k zakázce',
              text: '<strong>Pro koho:</strong> obchodní ředitel a marketing, týdně. <strong>Odpovídá:</strong> Kolik stojí zakázka z jednotlivých kanálů? Kde leady odpadají? <strong>Zdroje:</strong> formulář na webu přes událost <code>generate_lead</code> s <code>lead_id</code>, stav leadu a hodnota zakázky z CRM, náklady z Google Ads, LinkedInu a Skliku.',
              console: [
                '1 240 leadů → 410 kvalifikovaných → 31 zakázek',
                'cena za zakázku 47 600 Kč',
                'medián od leadu k zakázce 38 dní',
              ],
            },
            {
              tag: 'data studio',
              title: 'Zdraví měření',
              text: '<strong>Pro koho:</strong> marketing ops, analytik a vývojáři. Kontrola běží denně automaticky, člověk zasahuje jen při upozornění. <strong>Odpovídá:</strong> Měří web správně? Nerozbil poslední release nákupy nebo souhlas? Navazuje na službu <a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a>.',
              console: [
                'shoda objednávek GA4 vs. e-shop 86,2 %',
                'purchase bez transaction_id: 0',
                '⚠ release v2.31: pokles purchase o 94 %',
              ],
            },
            {
              tag: 'data studio',
              title: 'Organické vyhledávání a tržby',
              text: '<strong>Pro koho:</strong> marketing a SEO agentura, jednou měsíčně. <strong>Odpovídá:</strong> Rosteme mimo brand? Které stránky z organiky přinášejí tržby, ne jen kliky? <strong>Zdroje:</strong> hromadný export Search Console do BigQuery a GA4. Brandové a nebrandové dotazy dělíme vlastním pravidlem v BigQuery, aby rozdělení zůstalo v čase stejné.',
              console: ['48 300 kliků · brand 61 % / nebrand 39 %', 'CTR 2,5 %'],
            },
          ],
        },
      ],
    },
    {
      id: 'jak-stavime',
      eyebrow: 'řešení',
      title: 'Jak stavíme dashboard, kterému věří vedení',
      lead: 'Grafy jsou poslední krok. Nejdřív se domluvíme, co má dashboard rozhodovat a které číslo platí.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'kpi',
              title: 'Od rozhodnutí ke KPI',
              text: 'Na workshopu sepíšeme, kdo dashboard čte, jak často a jaké rozhodnutí podle něj dělá. Vznikne z toho strom KPI: nahoře tři až pět čísel pro vedení, pod nimi metriky pro marketing a obchod.',
            },
            {
              tag: 'slovník',
              title: 'Slovník metrik a zdroj pravdy',
              text: 'Ke každému číslu napíšeme definici, výpočet, zdroj a vlastníka. Tržby bereme z ERP nebo účetnictví, rozdělení podle kanálů z GA4 a reklamních systémů, leady a zakázky z CRM.',
            },
            {
              tag: 'data',
              title: 'Datová vrstva',
              text: 'U jednoduchých reportů stačí přímé konektory. Jakmile spojujete víc zdrojů nebo potřebujete marži či historii delší než čtrnáct měsíců, stavíme reporting nad <a href="/sluzby/bigquery">BigQuery</a>. Je rychlejší, šetří kvóty a čísla v něm počítáme jednou, na jednom místě.',
            },
            {
              tag: 'prototyp',
              title: 'Prototyp na vašich datech',
              text: 'Nejdřív drátěný model obrazovek, pak klikací prototyp s reálnými daty. Projekt zahrnuje dvě kola připomínek.',
            },
            {
              tag: 'erp',
              title: 'Sladění s účetnictvím',
              text: 'Vybraný měsíc porovnáme s účetnictvím řádek po řádku. Každý rozdíl vysvětlíme a necháme ho viditelný jako dlaždici „shoda s ERP“.',
            },
            {
              tag: 'auto',
              title: 'Automatizace a předání',
              text: 'Nastavíme aktualizaci dat, rozesílání e-mailem, upozornění na anomálie a přístupová práva. Předáme dokumentaci a proškolíme lidi, kteří budou s dashboardem pracovat.',
            },
          ],
        },
      ],
    },
    {
      id: 'tok-dat',
      eyebrow: 'tok dat',
      title: 'Odkud čísla v dashboardu pocházejí',
      lead: 'Data z GA4, reklamních systémů, Search Console, e-shopu a CRM tečou buď přímými konektory, nebo přes BigQuery. Každá metrika má jednu definici ve slovníku metrik a před zobrazením v dashboardu ji kontrolujeme proti účetnictví.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma toku dat: zdroje → přímé konektory nebo BigQuery → slovník metrik s kontrolou shody s ERP → dashboardy pro vedení, marketing, e-commerce a B2B.',
          columns: [
            {
              label: 'Zdroje',
              items: [
                'GA4',
                'Google Ads',
                'Meta Ads',
                'Sklik',
                'Search Console',
                'E-shop / ERP: tržby, marže, vratky',
                'CRM: leady, zakázky',
              ],
            },
            {
              label: 'Datová vrstva',
              items: ['Přímé konektory pro jednoduché reporty', 'BigQuery: model a historie'],
              note: 'Přímé konektory zvládnou GA4, Google Ads a Search Console. Ostatní zdroje vedou přes BigQuery.',
            },
            {
              label: 'Slovník metrik a kontrola',
              items: ['jedna definice = jeden výpočet', 'shoda s ERP', 'vysvětlený rozdíl'],
            },
            {
              label: 'Dashboardy',
              items: ['Vedení – týdně', 'Marketing – denně', 'E-commerce – měsíčně', 'B2B pipeline – týdně'],
            },
          ],
        },
      ],
    },
    {
      id: 'shoda-s-ucetnictvim',
      eyebrow: 'shoda s ERP',
      title: 'Report, který sedí s účetnictvím: jak to děláme',
      lead: 'GA4 nikdy neuvidí všechny objednávky. Část lidí odmítne cookies, část používá blokátory a některé objednávky vzniknou po telefonu. Proto peníze v dashboardu nebereme z GA4, ale z účetnictví nebo ERP. GA4 a reklamní systémy používáme k tomu, k čemu jsou dobré: rozdělit tržby podle kanálů a kampaní.',
      tone: 'light',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Tržby z ERP, rozdělení z marketingu.</strong> Absolutní čísla bereme z účetnictví, podíly kanálů z GA4 a reklam. Předpoklad, že nezměřené objednávky mají podobné rozdělení jako změřené, výslovně uvedeme v dokumentaci.',
            '<strong>Jedna definice tržby.</strong> Bez DPH, po stornech, s dopravou nebo bez – jak to má účetnictví. Totéž platí pro parametr <code>value</code> v GA4 i pro reklamní systémy.',
            '<strong>Stejné datum a časové pásmo.</strong> Datum objednávky, nebo fakturace, podle toho, s čím pracuje účetnictví. Ve všech zdrojích časové pásmo Europe/Prague.',
            '<strong>Vratky a storna tam, kam patří.</strong> Přehled podle data objednávky ukáže výkon kampaně, přehled podle data vratky cash flow.',
            '<strong>Rozdíl je číslo, ne tajemství.</strong> Dlaždice „shoda s ERP“ je přímo v dashboardu. Když náhle skočí, víte, že selhalo měření – ne že marketing přestal fungovat.',
          ],
        },
        {
          type: 'table',
          caption: 'Rekonciliační tabulka – ukázkový příklad za září 2026, Kč bez DPH.',
          head: ['Řádek', 'Částka', 'Zdroj'],
          rows: [
            ['Objednávky z webu', '5 132 600 Kč', 'administrace e-shopu'],
            ['− storna a nezaplacené objednávky', '−178 900 Kč', 'e-shop'],
            ['− vratky', '−141 400 Kč', 'ERP'],
            [
              '<strong>= čisté tržby, které sedí s účetnictvím</strong>',
              '<strong>4 812 300 Kč</strong>',
              'ERP / účetnictví',
            ],
            ['Objednávky změřené v GA4', '4 386 200 Kč', 'GA4 / BigQuery'],
            ['Podíl změřených objednávek z webu', '85,5 %', 'výpočet 4 386 200 / 5 132 600'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Jak velký rozdíl je normální, záleží na webu, liště souhlasu a zákaznících. Důležité je, aby byl stabilní a abyste znali jeho příčinu. Když nevíte, proč GA4 vidí o třicet procent méně než e-shop, začněte <a href="/sluzby/audit-mereni">auditem měření</a>.',
          ],
        },
      ],
    },
    {
      id: 'typy-dashboardu',
      eyebrow: 'typy',
      title: 'Čtyři typy dashboardů, které stavíme nejčastěji',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          head: ['Typ', 'Pro koho', 'Na co odpovídá', 'Klíčové KPI', 'Frekvence', 'Zdroje'],
          rows: [
            [
              '<strong>Manažerský přehled</strong>',
              'majitel, CEO, CFO',
              'Rosteme? Vyplácí se marketing? Sedí čísla?',
              'čisté tržby, hrubý zisk, marketingové náklady, PNO, POAS nebo cena za zakázku, shoda s ERP',
              'týdně a měsíčně',
              'ERP, GA4, reklamní systémy',
            ],
            [
              '<strong>Marketingový dashboard</strong>',
              'marketing, PPC tým, agentura',
              'Který kanál a kampaň vydělává po marži? Jak čerpáme rozpočet?',
              'náklady, alokované tržby, ROAS, POAS, CPA, podíl nových zákazníků, čerpání rozpočtu',
              'denně nebo týdně',
              'Google Ads, Meta, Sklik, srovnávače, GA4, ERP',
            ],
            [
              '<strong>E-commerce dashboard</strong>',
              'e-commerce a category manažer',
              'Které produkty a kategorie táhnou zisk? Kde lidé odpadají?',
              'konverzní poměr, košík → objednávka, průměrná objednávka, marže a vratky po kategoriích, kohorty',
              'týdně nebo měsíčně',
              'e-commerce události z GA4, e-shop nebo ERP',
            ],
            [
              '<strong>B2B pipeline</strong>',
              'obchodní ředitel, marketing',
              'Kolik stojí zakázka? Kde leady odpadají?',
              'leady, kvalifikované leady, nabídky, zakázky, cena za lead a za zakázku, doba do uzavření',
              'týdně',
              'formuláře v GA4, CRM, reklamní systémy',
            ],
          ],
        },
      ],
    },
    {
      id: 'data-studio-nebo-power-bi',
      eyebrow: 'srovnání',
      title: 'Data Studio (dříve Looker Studio), nebo Power BI?',
      lead: 'Oba nástroje jsou dobré. Rozhoduje, kde už vaše firma pracuje, kdo bude dashboard číst a jak složité výpočty potřebujete.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption:
            'Ceny podle webů Googlu a Microsoftu k říjnu 2026, bez DPH. Microsoft uvádí, že ceny na webu jsou orientační.',
          head: ['Kritérium', 'Data Studio (dříve Looker Studio)', 'Power BI'],
          rows: [
            [
              'Cena nástroje',
              'Zdarma. Data Studio Pro stojí devět dolarů za uživatele a projekt měsíčně.',
              'Power BI Desktop zdarma. Pro stojí čtrnáct dolarů za uživatele měsíčně, Premium Per User 24 dolarů při roční platbě, kapacita Fabric podle velikosti.',
            ],
            [
              'Sdílení s kolegy',
              'Odkazem nebo pozvánkou na Google účet, plánované e-maily',
              'Autor i čtenáři potřebují Pro nebo PPU. Výjimka: obsah v pracovním prostoru na kapacitě Fabric F64 a vyšší, pak čtenářům stačí i licence Free.',
            ],
            [
              'Komu reporty patří',
              'Ve verzi zdarma jednotlivým uživatelům, což je riziko při odchodu zaměstnance. V Pro organizaci a projektu v Google Cloudu.',
              'Pracovním prostorům ve vašem tenantovi Microsoft',
            ],
            [
              'GA4, Google Ads, Search Console',
              'Nativní konektory Googlu, konektor GA4 podléhá kvótám Data API',
              'GA4 přes konektor Google Analytics postavený na Data API, v Desktopu „Implementation 2.0“. Google Ads a Search Console typicky přes BigQuery nebo konektor třetí strany.',
            ],
            [
              'Meta, Sklik, Heureka',
              'Partnerské placené konektory nebo přes BigQuery',
              'Konektory třetích stran nebo přes BigQuery',
            ],
            [
              'BigQuery',
              'Nativně, volitelně se zrychlením BI Engine',
              'Konektor Google BigQuery v režimu Import i DirectQuery',
            ],
            [
              'Výpočty a datový model',
              'Vypočtená pole a spojování zdrojů. Na složitou logiku je lepší BigQuery.',
              'Silný datový model s relacemi a jazykem DAX',
            ],
            [
              'Řízení přístupu k řádkům',
              'Filtr podle e-mailu čtenáře u podporovaných zdrojů',
              'Row-Level Security',
            ],
            ['Ekosystém', 'Google Workspace, Google Sheets', 'Microsoft 365, Excel, Teams'],
            [
              'Aktualizace dat',
              'Konektor GA4 obnovuje cache po jedné, čtyřech nebo dvanácti hodinách, BigQuery už po minutách.',
              'Plánovaná obnova osmkrát denně na sdílené kapacitě, až 48krát denně na Premium, PPU nebo Fabric',
            ],
            [
              '<strong>Kdy volíme</strong>',
              'Marketingový tým v Google ekosystému, sdílení s agenturou a vedením bez licencí, data hlavně z Googlu a BigQuery',
              'Firma už má Power BI jako standard, finance a obchod pracují v Microsoftu, potřebujete složitý datový model',
            ],
          ],
        },
      ],
    },
    {
      id: 'konektory-nebo-bigquery',
      eyebrow: 'datová vrstva',
      title: 'Přímé konektory, nebo BigQuery?',
      lead: 'Rozhoduje počet zdrojů, potřebná historie a počet lidí, kteří report otevírají.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              tag: 'konektory',
              title: 'Přímé konektory stačí',
              text: 'Když report čte jeden až dva zdroje Googlu, stačí vám čtrnáct měsíců historie a report otevírá pár lidí.',
            },
            {
              tag: 'bigquery',
              title: 'BigQuery doporučujeme',
              text: 'Když spojujete víc než tři zdroje, potřebujete marži, vratky nebo CRM, report otevírá hodně lidí a naráží na kvóty GA4 Data API, nebo chcete stejná čísla v Data Studiu i Power BI. Více na stránce <a href="/sluzby/bigquery">BigQuery a datový sklad pro marketing</a>.',
            },
          ],
        },
      ],
    },
    {
      id: 'automatizace',
      eyebrow: 'automatizace',
      title: 'Reporting, který běží sám',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          items: [
            {
              title: 'Aktualizace dat',
              text: 'Nastavíme, jak čerstvá data potřebujete – od obnovy po několika hodinách až po minuty u BigQuery. Datum poslední aktualizace je na dashboardu vždy vidět.',
            },
            {
              title: 'Doručení e-mailem',
              text: 'Týdenní přehled přijde vedení v pondělí ráno jako PDF s odkazem. Data Studio Pro zvládne až 200 plánů doručení na report i doručení do Google Chatu. V Power BI používáme odběry.',
            },
            {
              title: 'Upozornění',
              text: 'Když metrika překročí hranici, třeba PNO nad cílem nebo pokles objednávek, přijde upozornění. Podle nástroje ho pošle Data Studio Pro, Power BI nebo vlastní kontrola v BigQuery do e-mailu či Slacku.',
            },
            {
              title: 'Hlídání kvality dat',
              text: 'Dlaždice „shoda s ERP“ a „zdraví měření“ odhalí rozbité měření dřív, než podle špatných čísel někdo rozhodne. Dlouhodobé hlídání řeší <a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a>.',
            },
          ],
        },
      ],
    },
    {
      id: 'co-dostanete',
      eyebrow: 'výstupy',
      title: 'Co dostanete',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          items: [
            {
              title: 'Strom KPI a slovník metrik',
              text: 'Definice, výpočet, zdroj a vlastník každého čísla.',
            },
            {
              title: 'Dashboardy',
              text: 'V Data Studiu nebo Power BI, počet a typ podle zadání, ve firemních barvách, pro desktop i mobil.',
            },
            {
              title: 'Napojené zdroje',
              text: 'Přímé konektory, nebo model v BigQuery.',
            },
            {
              title: 'Rekonciliační protokol',
              text: 'Porovnání vybraného měsíce s účetnictvím a vysvětlení rozdílů.',
            },
            {
              title: 'Automatizace',
              text: 'Aktualizace, doručení e-mailem, upozornění a přístupová práva.',
            },
            {
              title: 'Dokumentace',
              text: 'Jak dashboard číst, jak přidat uživatele a co dělat, když číslo nesedí.',
            },
            {
              title: 'Školení',
              text: 'Šedesát až devadesát minut pro uživatele, se záznamem ke sdílení.',
            },
            {
              title: 'Kontrola po třiceti dnech',
              text: 'Krátká schůzka: co lidé používají a co upravit.',
            },
          ],
        },
      ],
    },
    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak postupujeme a co od vás potřebujeme',
      tone: 'light',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Workshop: rozhodnutí a KPI',
              text: 'Projdeme, kdo bude dashboard číst a jaká rozhodnutí podle něj dělá.',
              output: 'Strom KPI, seznam čtenářů',
              fromClient: 'Devadesát minut se zadavatelem a budoucími uživateli',
            },
            {
              title: 'Zdroje a slovník metrik',
              text: 'Zmapujeme zdroje a ke každému číslu sepíšeme definici.',
              output: 'Slovník metrik, mapa zdrojů',
              fromClient:
                'Přístupy pro čtení do GA4 a reklamních systémů, export z ERP nebo CRM, případně kontakt na IT',
            },
            {
              title: 'Drátěný model a prototyp',
              text: 'Navrhneme obrazovky a postavíme klikací prototyp.',
              output: 'Klikací prototyp na vašich datech',
              fromClient: 'Dvě kola připomínek',
            },
            {
              title: 'Napojení a sladění s účetnictvím',
              text: 'Napojíme všechny zdroje a vybraný měsíc porovnáme s účetnictvím.',
              output: 'Rekonciliační protokol',
              fromClient: 'Kontrolní čísla z účetnictví za vybraný měsíc',
            },
            {
              title: 'Automatizace a předání',
              text: 'Nastavíme aktualizace, doručování a práva a předáme dokumentaci.',
              output: 'Aktualizace, doručení, práva, dokumentace',
              fromClient: 'Seznam uživatelů a příjemců e-mailů',
            },
            {
              title: 'Kontrola po třiceti dnech',
              text: 'Na krátké schůzce projdeme, co lidé z dashboardu používají a co upravit.',
              output: 'Seznam úprav',
              fromClient: 'Zpětnou vazbu uživatelů',
            },
          ],
        },
      ],
    },
    {
      id: 'pro-koho',
      eyebrow: 'pro koho',
      title: 'Co je jinak u e-shopu, B2B a velké firmy',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'dash_segment',
          items: [
            {
              id: 'eshop',
              label: 'E-shop',
              paragraphs: [
                'Řídíte se podle marže a vratek, ne podle obratu. Typicky stavíme týdenní přehled pro vedení, marketingový dashboard s POAS a e-commerce dashboard s kategoriemi. Náklady srovnávačů Heureka a Zboží.cz i Skliku napojíme stejně jako Google Ads a Metu.',
                'Více na stránce <a href="/reseni/e-shopy">Měření pro e-shopy</a>.',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B a leady',
              paragraphs: [
                'Lead není výsledek. Dashboard spojí formulář na webu se stavem v CRM a ukáže cenu za kvalifikovaný lead i za zakázku podle kanálu – včetně dlouhých obchodních cyklů.',
                'Více na stránce <a href="/reseni/b2b-a-lead-generation">Měření pro B2B a lead generation</a>.',
              ],
            },
            {
              id: 'velka-firma',
              label: 'Velká firma',
              paragraphs: [
                'Dashboard musí zapadnout do firemního standardu, často Power BI, do řízení přístupů a do pravidel IT. Marketingová data připravíme jako čistý a zdokumentovaný model, se kterým může pracovat interní BI tým.',
                'Více na stránce <a href="/reseni/velke-firmy">Měření pro velké firmy</a>.',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Je Looker Studio totéž co Data Studio?',
      a: 'Ano. Google v dubnu 2026 vrátil nástroji původní název Data Studio. Původně se jmenoval Google Data Studio, v roce 2022 ho Google přejmenoval na Looker Studio a teď je opět Data Studio s adresou datastudio.google.com. Stará adresa automaticky přesměruje na novou a reporty, které už máte, fungují bez úprav. Jen pokud firma omezuje přístup na externí weby přes proxy, musí IT povolit novou doménu. Na funkcích a cenách přejmenování nic nezměnilo.',
    },
    {
      q: 'Je Data Studio zdarma? Kolik stojí Data Studio Pro?',
      a: 'Data Studio je pro tvůrce i čtenáře reportů zdarma. Placená verze Data Studio Pro stojí podle Googlu k říjnu 2026 devět dolarů za uživatele a projekt měsíčně. Přidává hlavně funkce pro firmy: obsah patří organizaci místo jednotlivým uživatelům, týmové pracovní prostory, až 200 plánů doručení na report, upozornění, podporu Google Cloud a bezpečnostní funkce, třeba vlastní šifrovací klíče nebo volbu umístění dat. Pro většinu marketingových týmů stačí verze zdarma. Pro doporučujeme, když reporty spravuje víc lidí a vadí vám, že patří konkrétním osobám.',
    },
    {
      q: 'Kolik stojí Power BI a je zdarma?',
      a: 'Power BI Desktop pro tvorbu reportů je zdarma. Pro sdílení ale potřebujete licence: Power BI Pro stojí podle Microsoftu čtrnáct dolarů za uživatele měsíčně a Premium Per User 24 dolarů, obojí při roční platbě a k říjnu 2026. Uživatelé s licencí Free mohou sdílený obsah číst jen tehdy, když leží v pracovním prostoru na kapacitě Microsoft Fabric F64 nebo vyšší. Pokud už máte Microsoft 365 s Power BI, náklady na nástroj často odpadají. Microsoft upozorňuje, že ceny na webu jsou orientační – rozhoduje cena při nákupu.',
    },
    {
      q: 'Data Studio, nebo Power BI – co pro nás bude lepší?',
      a: 'Když pracujete hlavně v Google ekosystému s GA4, Google Ads a Workspace a chcete sdílet reporty s vedením a agenturou bez licencí, vychází lépe Data Studio. Když je Microsoft ve firmě standard, finance už mají reporty v Power BI nebo potřebujete složitý datový model s mnoha vazbami, volíme Power BI. Nad modelem v BigQuery fungují oba nástroje, takže volba není definitivní – stejná čísla mohou být v obou. Doporučení vždy zdůvodníme na úvodní konzultaci.',
    },
    {
      q: 'Proč se čísla v dashboardu liší od GA4 nebo Google Ads?',
      a: 'Každý systém počítá jinak. Google Ads připisuje konverzi ke dni kliknutí a podle vlastní atribuce. GA4 vidí jen návštěvníky se souhlasem a bez blokátorů a jeho rozhraní některá čísla odhaduje nebo modeluje. E-shop zná i objednávky po telefonu. Proto v dashboardu bereme tržby z účetnictví nebo ERP a ze systémů jen podíly kanálů. Rozdíly sepíšeme v rekonciliačním protokolu a necháme je viditelné. Když je rozdíl velký nebo nestabilní, je to signál pro <a href="/sluzby/audit-mereni">audit měření</a>.',
    },
    {
      q: 'Potřebujeme BigQuery, nebo stačí přímé konektory?',
      a: 'Pro jednoduchý report nad GA4 a Google Ads stačí přímé konektory. BigQuery doporučujeme, když spojujete víc zdrojů, třeba Metu, Sklik, ERP a CRM, potřebujete marži a vratky, delší historii, než dovolí GA4, nebo report otevírá hodně lidí. Konektor GA4 v Data Studiu podléhá kvótám Google Analytics Data API – standardní property má například 200 000 tokenů denně – a při velkém provozu hlásí chyby. V BigQuery čísla spočítáme jednou a dashboard jen zobrazuje hotové tabulky.',
    },
    {
      q: 'Jak často dashboard aktualizuje data?',
      a: 'Podle zdroje a nástroje. Data Studio obnovuje data z GA4 po jedné, čtyřech nebo dvanácti hodinách, data z ostatních reklamních a měřicích produktů Googlu po dvanácti hodinách a data z BigQuery i po minutách. V Power BI naplánujeme obnovu až osmkrát denně na sdílené kapacitě a až 48krát denně na kapacitě Premium, PPU nebo Fabric. Pro většinu manažerských přehledů stačí denní aktualizace. Častější má smysl jen tam, kde podle dat někdo během dne opravdu jedná.',
    },
    {
      q: 'Proč je náš dashboard v Data Studiu pomalý nebo hlásí chybu?',
      a: 'Nejčastěji ze tří důvodů: report má desítky grafů napojených přímo na GA4 a vyčerpává kvóty Data API, spojuje velké zdroje přímo v prohlížeči, nebo čte surová data místo připravených tabulek. Pomůže přesunout výpočty do BigQuery, použít extrahovaný zdroj dat se snímkem až do sta MB, zjednodušit úvodní stránku a nastavit rozumnou čerstvost dat. Reporty nad BigQuery zrychlí služba BI Engine. Před přestavbou uděláme rychlou diagnostiku, co přesně report zpomaluje.',
    },
    {
      q: 'Umíte napojit Sklik, Heureku, Shoptet nebo naše CRM?',
      a: 'Ano, pokud mají API nebo export. Pro Sklik Google žádný vlastní konektor nenabízí, proto náklady stahujeme přes Sklik API do BigQuery. Konektory třetích stran bývají placené, jejich dostupnost a spolehlivost vždy ověříme. Heureku a Zboží.cz napojujeme přes exporty nebo rozhraní, které účet nabízí, e-shopové platformy přes export objednávek nebo API a CRM přes API. Konkrétní zdroje ověříme na úvodní konzultaci.',
    },
    {
      q: 'Komu bude dashboard patřit a kdo ho může upravovat?',
      a: 'Vám. Reporty zakládáme na firemních účtech v Google Workspace nebo Microsoft 365 a datové zdroje v projektu Google Cloudu, který patří vám. V bezplatném Data Studiu reporty vlastní konkrétní uživatel. Proto je zakládáme pod firemním účtem, ne pod osobním účtem zaměstnance ani pod naším. Práva upravovat dostanou lidé, které určíte. My si necháme přístup jen po dobu spolupráce. Při předání dostanete seznam všech přístupů.',
    },
    {
      q: 'Jak dlouho to trvá a co od nás potřebujete?',
      a: 'Délka závisí hlavně na tom, jestli stačí přímé konektory, nebo stavíme reporting nad BigQuery s napojením ERP či CRM. Potřebujeme devadesát minut na úvodní workshop s lidmi, kteří budou dashboard číst, přístupy pro čtení do GA4 a reklamních systémů, export nebo API k e-shopu, ERP či CRM, kontrolní čísla z účetnictví za jeden měsíc a dvě kola připomínek k prototypu.',
    },
    {
      q: 'Jak stanovíte cenu?',
      a: 'Cenu stanovíme po úvodní konzultaci jako pevnou částku. Rozhoduje počet dashboardů a obrazovek a počet a typ zdrojů: zdroje Googlu napojíme rychle, ERP bez API dá víc práce. Roli hraje i to, jestli potřebujete BigQuery a sladění s účetnictvím, jaký nástroj zvolíte a jak velkou automatizaci chcete. Licence nástrojů jako Data Studio Pro nebo Power BI a provoz BigQuery platíte přímo Googlu nebo Microsoftu.',
    },
  ],

  relatedArticles: [
    { slug: 'looker-studio-pruvodce', title: 'Data Studio (dříve Looker Studio) pro marketing' },
    { slug: 'looker-studio-vs-power-bi', title: 'Data Studio (dříve Looker Studio) vs. Power BI' },
    { slug: 'marketingovy-dashboard', title: 'Marketingový dashboard: jaké KPI sledovat v e-shopu a v B2B' },
    {
      slug: 'proc-nesedi-data',
      title: 'Proč nesedí čísla: GA4 vs. Google Ads vs. Meta vs. administrace e-shopu',
    },
    { slug: 'atribuce-ga4', title: 'Atribuce v GA4 a reklamních systémech' },
  ],

  relatedPages: ['sluzby/bigquery', 'sluzby/audit-mereni', 'sluzby/sprava-webu-a-mereni'],

  contact: {
    formId: 'lp-dashboardy',
    topics: ['bigquery'],
    title: 'Propojíme data do jednoho dashboardu',
    lead: 'Napište nám e-mail, nebo vyplňte formulář. Na úvodní třicetiminutové konzultaci projdeme, co dnes reportujete a z jakých zdrojů, a doporučíme nástroj i rozsah – nezávazně a zdarma.',
    placeholder:
      'Např. chceme spojit GA4, Google Ads, Metu a data z ERP v Data Studiu (dříve Looker Studio). Report dnes děláme ručně v Excelu…',
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
