import type { PageInput } from '../../schema';

// Štíhlá šablona LP podle vyhodnocení webu (9. října 2026, kap. 3.1 a 5.11).
// Zdroj obsahu: seo-analyza/03_landing-pages/11_sprava-webu-a-mereni.md (návrh
// v1, služba k potvrzení klientem). Jádro stránky jsou moduly A/B/C, srovnání
// s běžnou správou je ve dvou kartách, release checklist ukazuje pět kontrol
// z dvanácti a sdílí sekci s malou tabulkou SLA, měsíční report s ukázkovými
// daty z původního obsahu nahradil sekce „Měsíční report“ a „Co dostáváte“,
// cena je ve FAQ. Celý release checklist a technické podrobnosti testů jsou ve
// sbalených Technických detailech, dokud nevyjde checklist ke stažení nebo
// článek. Do dodání podkladů klientem chybí: hodnoty SLA (tabulka má jen
// priority a příklady), pracovní doba a pohotovost, délky kroků, platformy
// a zkušební obnova záloh v modulu B, minimální délka spolupráce a výpovědní
// lhůta, partnerské webové studio, nástroj pro testy, počet spravovaných webů
// a případová studie.

export const page: PageInput = {
  path: 'sluzby/sprava-webu-a-mereni',
  kind: 'service',
  navTitle: 'Správa webu a měření',
  tagline: 'hlídáme, aby měření nepřestalo fungovat',
  pictogram: 'monitor',
  menuGroup: 'audity',

  seo: {
    title: 'Správa webu a měření – tagy, consent, SLA | datalayer.cz',
    description:
      'Správa webu, která hlídá i měření: monitoring tagů a dataLayeru po každém releasu, kontrola consentu, aktualizace, měsíční report kvality dat a SLA.',
  },

  hero: {
    eyebrow: 'audity a správa',
    h1: 'Technická správa webu, která hlídá i měření',
    subtitle:
      'Správa webu a měření je průběžná technická péče o web: aktualizace, zálohy a dostupnost a k tomu hlídání tagů, datové vrstvy a souhlasu po každém releasu. Chybu v měření zachytí automatické testy a denní kontrola dat, opravíme ji podle SLA a jednou měsíčně dostanete report kvality dat. Když měření přestane fungovat, víte to týž den, ne za měsíc z propadu v reportu.',
    primaryCta: { label: 'Domluvit správu webu', href: '#kontakt' },
    secondaryCta: { label: 'Co hlídáme', href: '#co-hlidame' },
    microcopy: 'Úvodní konzultace zdarma · online po celé ČR · nejsme webové studio, grafiku a texty neděláme',
  },

  trust: ['Automatický test měření po každém nasazení', 'Reakční doby podle priority ve smlouvě', 'Účty, přístupy a data zůstávají vaše'],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Znáte to?',
      lead: 'Správa s hlídáním měření dává smysl, když se web často mění a nikdo nekontroluje, jestli po změně dál měří.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 4,
          variant: 'symptoms',
          items: [
            {
              title: 'Měření přestalo fungovat a nikdo si nevšiml',
              text: 'Po releasu přestaly do GA4 chodit nákupy, někdo si toho všiml až za tři týdny a reklamní systémy mezitím optimalizovaly naslepo.',
              pictogram: 'monitor',
              tag: 'release',
            },
            {
              title: 'Cookie lišta po aktualizaci přestala fungovat',
              text: 'Nová verze lišty nebo šablony a web najednou spouští tagy před souhlasem, nebo naopak vůbec.',
              pictogram: 'consent',
              tag: 'consent',
            },
            {
              title: 'V GTM publikuje kdokoli',
              text: 'Agentura, PPC specialista i vývojář – nikdo neví, co se v které verzi změnilo, a starých tagů přibývá.',
              pictogram: 'gtm',
              tag: 'gtm',
            },
            {
              title: 'Web dělá agentura, za data neodpovídá nikdo',
              text: 'Vývojáři řeší funkce, marketing kampaně a měření mezi nimi padá pokaždé, když se něco mění.',
              pictogram: 'warn',
              tag: 'vývoj',
            },
          ],
        },
      ],
    },

    {
      id: 'co-hlidame',
      eyebrow: 'moduly',
      title: 'Co hlídáme: tři moduly, které lze kombinovat',
      lead: 'Modul A je základ služby, moduly B a C přidáme podle toho, kdo web vyvíjí a jak často se mění.',
      tone: 'white',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'modul A · základ',
              title: 'Hlídání měření',
              text: 'Funguje na jakékoli platformě, protože testujeme výsledný web v prohlížeči a data v GA4.',
              bullets: [
                'test produktu, košíku, objednávky a formuláře po nasazení i denně',
                'denní srovnání událostí s průměrem a s objednávkami v e-shopu',
                'kontrola souhlasu měsíčně a po každé změně cookie lišty',
                'pořádek v GTM, měsíční report a drobné úpravy měření',
              ],
            },
            {
              tag: 'modul B',
              title: 'Technická správa webu',
              text: 'Aktualizace a údržba vždy s kontrolou měření, rozsah domluvíme podle platformy a hostingu.',
              bullets: [
                'aktualizace nejdřív na testovacím prostředí, pak v produkci',
                'pravidelné zálohy, hlídání dostupnosti, certifikátu a domény',
                'bezpečnostní hlavičky v souladu s tagy na webu',
                'Core Web Vitals a výkonnostní rozpočet každý měsíc',
              ],
            },
            {
              tag: 'modul C',
              title: 'Release partner',
              text: 'Pro firmy s vlastním nebo externím vývojem.',
              bullets: [
                'release checklist pro vývojáře a kontrola na stagingu',
                'regresní test měření po každém nasazení',
                'zadání datové vrstvy pro nové funkce dřív, než vývoj začne',
                'konzultace pro vývojáře v dohodnutém rozsahu',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'smyčka',
      title: 'Jak hlídání funguje: od releasu po report',
      lead: 'Hlídání má dvě vrstvy. Testy v prohlížeči zachytí chybu hned po nasazení, ještě než se projeví v datech, a kontrola dat odhalí to, co testy nepokryjí – třeba chybu jen na některém zařízení nebo v jiné jazykové verzi.',
      tone: 'dark',
      blocks: [
        {
          type: 'flow',
          caption:
            'Smyčka hlídání měření: po releasu projde automatický test klíčové cesty a denní kontrola porovná data s průměrem a s objednávkami v e-shopu. Když něco nesedí, přijde alert, opravu ověříme a zapíšeme do měsíčního reportu.',
          columns: [
            { label: 'release', items: ['vývojáři nebo agentura', 'release checklist a test na stagingu', 'nasazení do produkce'] },
            {
              label: 'test po nasazení',
              items: ['produkt → košík → objednávka', 'formulář → lead', 'datová vrstva, tagy a souhlas'],
              note: 'když něco chybí, přijde alert',
            },
            {
              label: 'denní kontrola dat',
              items: ['GA4 nebo BigQuery proti průměru', 'GA4 proti objednávkám v e-shopu'],
              note: 'při anomálii přijde alert',
            },
            {
              label: 'alert a oprava',
              items: ['alert e-mailem nebo do Slacku', 'incident podle priority v SLA', 'oprava: GTM my, kód vývojáři', 'ověření a záznam do reportu'],
            },
          ],
        },
        {
          type: 'list',
          style: 'check',
          items: [
            '<strong>Alert ještě týž den.</strong> Přijde e-mailem nebo do Slacku, jakmile test nebo kontrola dat najde chybu.',
            '<strong>Testy hlídají i souhlas.</strong> Ověří, že web spouští tagy jen po souhlasu návštěvníka.',
            '<strong>Každý incident má záznam.</strong> Skončí v logu a v měsíčním reportu kvality dat.',
          ],
        },
      ],
    },

    {
      id: 'srovnani',
      eyebrow: 'srovnání',
      title: 'Čím se lišíme od běžné správy webu',
      lead: 'Běžná správa se stará, aby web běžel a byl aktuální, my k tomu hlídáme, aby dál správně měřil. Texty, grafiku a nové funkce neděláme, takže správu u studia si můžete nechat a vzít si od nás jen hlídání měření.',
      tone: 'light',
      note: 'Popisujeme typickou nabídku, konkrétní studia se liší.',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Typická správa webu u studia',
              text: '',
              bullets: [
                'aktualizace systému a pluginů, zálohy',
                'obvykle i monitoring dostupnosti a certifikátu',
                'úpravy textů, obrázků a nových stránek',
                'grafika a vývoj nových funkcí',
                'měsíčně výkaz odpracovaných hodin',
              ],
            },
            {
              title: 'Správa webu a měření u nás',
              text: '',
              bullets: [
                'aktualizace s testem na stagingu a kontrolou měření',
                'automatická kontrola tagů a datové vrstvy po každém releasu',
                'kontrola souhlasu měsíčně a po každé změně lišty',
                'pořádek v GTM, hlídání anomálií a release checklist',
                'report kvality dat s doporučením místo výkazu hodin',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak začínáme',
      lead: 'Hlídat má smysl jen funkční měření, proto začínáme vstupní kontrolou – pokud jsme vám měření nasazovali my, je kratší. Chcete nejdřív jen jednorázovou kontrolu? Začněte <a href="/sluzby/audit-mereni">auditem měření</a>.',
      tone: 'white',
      blocks: [
        {
          type: 'process',
          implementation:
            'Opravíme chyby ze vstupní kontroly a nastavíme hlídání: automatické testy, alerty, vlastní statistiky v GA4 a notifikace z GTM. Na jedné schůzce domluvíme release proces, kontakty a priority chyb.',
          implementationFromClient: 'součinnost vývojářů, testovací režim objednávky a kanál pro alerty',
        },
      ],
    },

    {
      id: 'release-a-sla',
      eyebrow: 'release a SLA',
      title: 'Release checklist a SLA',
      lead: 'Vývojáři dostanou release checklist o dvanácti kontrolách – šest před nasazením a šest po něm, většinu z nich hlídá automatický test. Priority, reakční doby a cíle řešení sepíšeme do smlouvy.',
      tone: 'light',
      note: 'Opravy v kódu webu závisejí na vývojářích – garantujeme diagnostiku, přesné zadání a ověření po nasazení.',
      blocks: [
        {
          type: 'list',
          style: 'check',
          title: 'Pět kontrol z dvanácti',
          items: [
            'Datová vrstva na testovacím prostředí odpovídá specifikaci.',
            'Web načítá GTM a konzole neukazuje chyby JavaScriptu.',
            'Před souhlasem web nespustí žádný marketingový tag.',
            'Testovací nákup nebo formulář v produkci dorazí do GA4.',
            'Počty klíčových událostí první den po releasu odpovídají průměru.',
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Celý checklist upravíme na míru platformě a release procesu a dostanete ho jako šablonu v Markdownu, Confluence nebo Jiře. Všech dvanáct kontrol najdete v Technických detailech u <a href="#faq">častých otázek</a>.',
          ],
        },
        {
          type: 'table',
          caption: 'Priority incidentů ve smlouvě',
          head: ['Priorita', 'Příklady'],
          rows: [
            ['<strong>P1 – kritická</strong>', 'web neměří nákupy ani leady, tagy běží bez souhlasu, u modulu B i výpadek webu'],
            ['<strong>P2 – závažná</strong>', 'jeden reklamní systém nepřijímá konverze, chybí parametry nebo nefunguje část formulářů'],
            ['<strong>P3 – běžná</strong>', 'nová událost, úprava konverze, drobné nesrovnalosti v datech'],
          ],
        },
      ],
    },

    {
      id: 'mesicni-report',
      eyebrow: 'report',
      title: 'Co dostáváte každý měsíc',
      lead: 'Report kvality dat a třicetiminutový hovor nad ním. Report není výkaz odpracovaných hodin – odpovídá na otázku, jestli se můžete na data spolehnout, a co udělat příští měsíc. Jednou za čtvrtletí upravíme testy a hranice upozornění.',
      tone: 'dark',
      layout: 'split',
      blocks: [
        {
          type: 'figures',
          items: [
            { value: '86,4 %', label: 'shoda objednávek v GA4 a e-shopu, cíl aspoň 85 %' },
            { value: '71 %', label: 'relací se souhlasem, po změně lišty o dva procentní body méně' },
            { value: '99,98 %', label: 'dostupnost webu za měsíc' },
          ],
          note: 'Ukázková data z reportu za září 2026.',
        },
        {
          type: 'list',
          style: 'check',
          items: [
            'incidenty: co se stalo, jak rychle jsme reagovali, příčina a prevence',
            'shoda dat: GA4 proti e-shopu nebo CRM a reklamní systémy proti GA4',
            'změny: verze webu a GTM, nové cookies a domény a úklid tagů',
            'Core Web Vitals podle šablon a doporučení na další měsíc',
          ],
        },
      ],
    },
  ],

  techDetails: {
    summary: 'Technické detaily: celý release checklist a co testy kontrolují',
    blocks: [
      {
        type: 'list',
        style: 'check',
        title: 'Před nasazením, na testovacím prostředí',
        items: [
          'Vývojáři nám dají vědět předem, když release mění šablony, které odesílají <code>purchase</code>, <code>generate_lead</code> nebo jinou klíčovou událost.',
          'Datová vrstva odpovídá specifikaci: názvy událostí, povinné parametry, datové typy.',
          'Web načítá kontejner GTM a konzole neukazuje chyby JavaScriptu.',
          'Cookie lišta má výchozí stav souhlasu „denied“, po volbě ho aktualizuje a před souhlasem nespustí žádný marketingový tag.',
          'Formuláře validují vstup, odeslání funguje a <code>generate_lead</code> neposílá osobní údaje v čitelné podobě.',
          'Nové skripty třetích stran prošly schválením vývoje i naším: výkon, souhlas, bezpečnostní hlavičky.',
        ],
      },
      {
        type: 'list',
        style: 'check',
        title: 'Po nasazení, v produkci',
        items: [
          'Testovací nákup nebo formulář dorazil do GA4 – ověříme to v DebugView nebo v přehledu v reálném čase.',
          'Google Ads, Meta a Sklik přijímají konverze, u server-side kontrolujeme deduplikaci přes <code>event_id</code>.',
          'Změněné URL mají přesměrování a canonical a sitemap je aktuální.',
          'Core Web Vitals šablon v laboratorním testu nepřekračují výkonnostní rozpočet.',
          'Počty klíčových událostí v první hodině a první den odpovídají průměru.',
          'Release log obsahuje verzi webu a GTM a kdo co změnil.',
        ],
      },
      {
        type: 'paragraphs',
        items: [
          'Automatický test projde v headless prohlížeči produkt, košík, objednávku v testovacím režimu a formulář. Ověří, že web načte GTM, že datová vrstva obsahuje očekávané události a parametry, třeba <code>purchase</code> s <code>transaction_id</code>, <code>value</code> a <code>items</code>, a že tagy běží jen po souhlasu.',
          'U souhlasu kontrolujeme výchozí stav a aktualizaci signálů <code>ad_storage</code>, <code>analytics_storage</code>, <code>ad_user_data</code> a <code>ad_personalization</code>. Jako levnou první vrstvu hlídání dat nastavíme vlastní statistiky v GA4 s upozorněním e-mailem – Google jich dovoluje až padesát na property.',
        ],
      },
    ],
  },

  faq: [
    {
      q: 'Co dělá správce webu a čím se liší vaše správa?',
      a: 'Správce webu se stará, aby web technicky fungoval: aktualizuje systém a doplňky, zálohuje, hlídá dostupnost a bezpečnost a často upravuje i obsah. Naše správa míří jinam – obsah a grafiku neděláme, zato hlídáme, že po každé změně webu dál fungují měřicí kódy, datová vrstva a souhlas s cookies. Nové stránky a funkce zkontrolujeme před nasazením i po něm, aby správně měřily.',
    },
    {
      q: 'Kolik stojí správa webu a z čeho se skládá cena?',
      a: 'Ceník neuvádíme, protože weby se liší víc než ceníkové balíčky – po vstupní kontrole dostanete pevnou měsíční částku. Rozhoduje počet webů, domén a jazykových verzí, platforma, kolik cest a konverzí hlídáme, jak často vydáváte nové verze, zvolené moduly, úroveň SLA a rozsah drobných úprav měření. Nástroje a infrastrukturu na vašich účtech, třeba hosting, Google Cloud nebo BigQuery, platíte přímo dodavatelům.',
    },
    {
      q: 'Jak rychle hlídání začne a co od vás potřebujeme?',
      a: 'Začínáme vstupní kontrolou a opravou chyb, které najde, takže délka záleží hlavně na jejich rozsahu. Pokud jsme vám měření nasazovali my, je vstupní kontrola kratší, protože výchozí stav známe. Potřebujeme přístupy do GA4, GTM, Search Console a reklamních systémů, testovací prostředí a testovací režim objednávky.',
    },
    {
      q: 'Web nám vyvíjí jiná agentura. Jak spolupráce funguje?',
      a: 'Agentura dál vyvíjí, my jí dodáme release checklist a zadání datové vrstvy pro nové funkce a po každém nasazení zkontrolujeme měření. Když najdeme chybu v kódu, pošleme přesný popis s reprodukcí a po opravě ji ověříme. V GTM nastavíme pravidla, kdo smí publikovat, aby se práce nepřekrývala.',
    },
    {
      q: 'Hlídáte i cookie lištu a souhlas?',
      a: 'Ano, technicky. Měsíčně a po každé změně lišty kontrolujeme výchozí stav Consent Mode a jeho aktualizaci po volbě návštěvníka, marketingové tagy před souhlasem a nové cookies nebo domény třetích stran. Nejsme ale advokátní kancelář – soulad textů lišty a zásad s právem posoudí váš právník a nastavení lišty řešíme ve službě <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode</a>.',
    },
    {
      q: 'Komu patří účty a co se stane po ukončení spolupráce?',
      a: 'Všechny účty – GA4, GTM, Search Console, reklamní systémy i Google Cloud – zůstávají vaše a my v nich máme jen uživatelské přístupy s potřebnou rolí. Testy a skripty pro hlídání běží na vaší infrastruktuře, nebo je při ukončení předáme. Po skončení si přístupy odeberete a dostanete předávací balíček: dokumentaci, release checklist, nastavení upozornění a poslední report.',
    },
  ],

  relatedArticles: [
    { slug: 'ga4-checklist-kvality-dat', title: 'Checklist kvality dat v GA4' },
    { slug: 'audit-gtm-kontejneru', title: 'Audit GTM kontejneru' },
    { slug: 'proc-nesedi-data', title: 'Proč nesedí čísla mezi GA4, Ads a Metou' },
  ],

  relatedPages: ['sluzby/audit-mereni', 'sluzby/technicky-audit-webu', 'sluzby/google-tag-manager'],

  contact: {
    formId: 'lp-sprava',
    topics: ['jine'],
    title: 'Ať měření po dalším releasu nepřestane fungovat',
    lead: 'Na úvodní třicetiminutové konzultaci zdarma zjistíme, kdo web vyvíjí, jak často vydáváte nové verze a co je potřeba hlídat. Pak navrhneme rozsah správy.',
    placeholder: 'Např. web vyvíjí externí agentura, release je každý týden a měření nákupů se už několikrát rozbilo…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Správa webu a měření',
    serviceType: 'Průběžná technická správa webu a monitoring tagů, dataLayeru a consentu se SLA',
    description:
      'Monitoring tagů a datové vrstvy po každém releasu, kontrola souhlasu a Consent Mode, aktualizace a technická údržba webu, release checklist, měsíční report kvality dat a SLA.',
    audience: 'E-shopy, B2B firmy, velké firmy s vlastním nebo externím vývojem',
  },
};
