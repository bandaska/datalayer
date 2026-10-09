import type { PageInput } from '../../schema';

// Zdroj: seo-analyza/03_landing-pages/02_google-tag-manager.md (návrh v1, 8. 10. 2026).
// Dokud klient nedodá podklady, stránka neobsahuje: případovou studii (MiniCase),
// počet kontejnerů a loga v trust baru, délky kroků a délku auditu, reakční dobu
// a SLA u správy, formát a délku školení GTM, šablonu názvosloví ke stažení
// (lead magnet) ani graf velikosti kontejneru. H2 kontaktu drží tabulku 3.5
// specifikace formulářů (návrh „Dáme váš Tag Manager do pořádku“ klient zatím
// nepřijal). Kotva #audit míří na záložku `audit` v sekci `spoluprace`.

export const page: PageInput = {
  path: 'sluzby/google-tag-manager',
  kind: 'service',
  navTitle: 'Google Tag Manager',
  tagline: 'pořádek v tazích a verzích',
  pictogram: 'gtm',
  menuGroup: 'sber',

  seo: {
    title: 'Google Tag Manager – nastavení, audit, správa | datalayer.cz',
    description:
      'Desítky tagů, které nikdo nezná? Nastavíme, zaudítujeme a spravujeme Google Tag Manager: názvosloví, verze, práva, consent i výkon. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'gtm · sběr dat',
    h1: 'Google Tag Manager: nastavení, audit a správa',
    subtitle:
      'Nasadíme nový kontejner, zkontrolujeme a uklidíme ten stávající, nebo ho budeme dlouhodobě spravovat. S pravidly pro názvy, verze, oprávnění a souhlas návštěvníků, aby se v něm vyznal i další člověk.',
    quickAnswer:
      '<strong>Co je Google Tag Manager?</strong> Bezplatný nástroj Googlu, přes který nasadíte na web měřicí a marketingové kódy, tedy tagy, bez úprav zdrojového kódu. Spolehlivě funguje, když má datovou vrstvu, jednotné pojmenování, verze s popisem, jasná oprávnění a tagy, které respektují souhlas návštěvníka přes Consent Mode v2.',
    primaryCta: { label: 'Konzultovat GTM', href: '#kontakt' },
    secondaryCta: { label: 'Chci audit kontejneru', href: '#audit' },
    microcopy:
      'Kontejner zůstává na vašem účtu · každá změna jako verze s popisem · odpovíme do jednoho pracovního dne',
  },

  trust: [
    'Každá změna jako verze s popisem – datum, co a proč',
    'Kontejner na vašem účtu – administrátor jste vy',
    'Consent Mode v2 v každém kontejneru',
  ],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte svůj Tag Manager?',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Desítky tagů, které nikdo nezná',
              text: 'Agentury se střídaly, tagy zůstaly. Nikdo neví, které jsou potřeba, takže nikdo nic nemaže.',
              pictogram: 'gtm',
              tag: 'tags: 120',
            },
            {
              title: 'Názvy „New Tag (3)“',
              text: 'Z názvu nepoznáte platformu, událost ani účel. Hledání chyby trvá hodiny.',
              pictogram: 'warn',
              tag: 'naming',
            },
            {
              title: 'Publikuje každý, bez popisu',
              text: 'Verze 87 nemá popis. Když spadly konverze, nikdo neví, co se změnilo.',
              pictogram: 'monitor',
              tag: 'v87 ?',
            },
            {
              title: 'Kódy na třech místech',
              text: 'Část v šabloně webu, část v pluginu, část v GTM. Reklamní systémy pak počítají konverze dvakrát.',
              pictogram: 'conversion',
              tag: 'duplicate',
            },
            {
              title: 'Tagy běží před souhlasem',
              text: 'GTM spouští reklamní pixely dřív, než návštěvník klikne na cookie lištu.',
              pictogram: 'consent',
              tag: 'consent',
            },
            {
              title: 'Web zpomalil',
              text: 'V PageSpeed Insights vidíte <code>gtm.js</code> a desítky skriptů třetích stran.',
              pictogram: 'perf',
              tag: 'perf',
            },
          ],
        },
      ],
    },

    {
      id: 'spoluprace',
      eyebrow: 'služby',
      title: 'Nastavení, audit, nebo správa?',
      tone: 'dark',
      blocks: [
        {
          type: 'tabs',
          group: 'gtm_sluzba',
          items: [
            {
              id: 'nastaveni',
              label: 'Nastavení nového kontejneru',
              paragraphs: [
                '<strong>Kdy se hodí:</strong> nový web, redesign, přechod z kódů natvrdo, nebo kontejner tak chaotický, že je levnější začít znovu.',
                '<strong>Výstup:</strong> publikovaný kontejner, dokument „karta kontejneru“ a testovací protokol.',
              ],
              bullets: [
                'Návrh kontejneru podle měřicího plánu: které tagy, spouštěče a proměnné a proč.',
                'Google tag pro GA4 a Google Ads.',
                'Šablona CMP a Consent Mode v2.',
                'Tagy reklamních systémů podle potřeby: Google Ads, Meta, Sklik a Seznam Event Measurement, Heureka, TikTok nebo LinkedIn.',
                'Složky a názvosloví.',
                'Vývojové prostředí pro testy.',
                'Dokumentace.',
              ],
            },
            {
              id: 'audit',
              label: 'Audit a úklid',
              paragraphs: [
                '<strong>Kdy se hodí:</strong> převzetí kontejneru od agentury, konverze, které nesedí, pomalý web, chystaný redesign nebo nasazení server-side.',
                '<strong>Výstup:</strong> report s nálezy podle priority A, B a C, export inventury, tedy tabulka všech tagů s doporučením ponechat, upravit, nebo smazat, a plán úklidu. Úklid provedeme v samostatném workspace a publikujeme ho po dohodě.',
                'Audit samotného GTM je užší než <a href="/sluzby/audit-mereni">audit měření</a>, který prověří i GA4 a reklamní systémy a porovná data s e-shopem.',
              ],
              bullets: [
                'Inventura tagů, spouštěčů a proměnných: co používáte, co je duplicitní a co nikdy neběží.',
                'Názvosloví a složky.',
                'Custom HTML a šablony třetích stran: co smějí dělat.',
                'Kontroly souhlasu u každého tagu.',
                'Pořadí spouštění a závislosti.',
                'Verze, workspaces a oprávnění, včetně toho, kdo smí publikovat.',
                'Kódy mimo GTM, v šabloně webu nebo v pluginech.',
                'Dopad na rychlost webu.',
              ],
            },
            {
              id: 'sprava',
              label: 'Průběžná správa',
              paragraphs: [
                '<strong>Kdy se hodí:</strong> marketing průběžně potřebuje nové tagy, kampaně a testy a GTM interně nikdo nespravuje. Nebo velká firma chce externího „strážce“ pravidel.',
                '<strong>Výstup:</strong> changelog a měsíční přehled změn. Na správu GTM navazuje služba <a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a>.',
              ],
              bullets: [
                'Nové tagy na požadavek: ticket, workspace, test, verze s popisem a publikace.',
                'Měsíční kontrola, že klíčové tagy běží.',
                'Revize oprávnění.',
                'Aktualizace šablon a reakce na změny platforem, třeba Seznam Event Measurement nebo změny Google tagu.',
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'pravidla',
      eyebrow: 'governance',
      title: 'Pravidla, díky kterým GTM zůstane v pořádku i za rok',
      lead: 'Kontejner se nerozpadne najednou, ale postupně, s každou změnou, kterou nikdo nezdokumentoval. Proto do každého kontejneru zavádíme šest pravidel.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Oblast', 'Pravidlo', 'Proč'],
          rows: [
            [
              '<strong>Názvosloví</strong>',
              'Jednotný formát názvů tagů, spouštěčů a proměnných a složky podle platformy',
              'Z názvu poznáte platformu, typ a událost bez otevírání tagu',
            ],
            [
              '<strong>Verze</strong>',
              'Každá publikace má název <code>RRRR-MM-DD – co se mění</code> a popis „proč“. Před publikací test v náhledu a na testovacím prostředí',
              'Při problému víte, co se změnilo, a vrátíte se o verzi zpět',
            ],
            [
              '<strong>Workspaces</strong>',
              'Jeden workspace pro jednu změnu nebo projekt. Bezplatný GTM má tři workspaces, výchozí a dva další, GTM 360 neomezeně',
              'Agentura a interní tým si souběžnou práci nepřepíšou a konflikty vyřešíte před publikací',
            ],
            [
              '<strong>Oprávnění</strong>',
              'Osobní účty, princip nejnižších práv, právo publikovat jen pro jednoho až dva lidi a revize oprávnění každé čtvrtletí',
              'Žádné sdílené loginy ani bývalí dodavatelé s právem publikovat',
            ],
            [
              '<strong>Dokumentace</strong>',
              '„Karta kontejneru“: seznam tagů s účelem, vlastníkem, kategorií souhlasu a datem poslední kontroly, k tomu changelog',
              'Nový člověk nebo agentura se zorientuje za hodinu, ne za týden',
            ],
            [
              '<strong>Bezpečnost</strong>',
              'Šablony místo Custom HTML a kontrola oprávnění šablon třetích stran. V přísných prostředích blokace vlastních skriptů přes <code>gtm.blocklist</code> nebo politiky šablon',
              'Kód třetích stran nemůže bez kontroly číst a odesílat data z webu',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Názvosloví – ukázka konvence',
          head: ['Prvek', 'Formát', 'Příklady'],
          rows: [
            [
              'Tag',
              '<code>{Platforma} – {Typ} – {Událost / popis}</code>',
              '<code>GA4 – Event – purchase</code> · <code>Google Ads – Conversion – Nákup</code> · <code>Meta – Event – Purchase</code> · <code>Sklik – SEM – purchase</code> · <code>Utility – cHTML – oprava referreru</code>',
            ],
            [
              'Spouštěč',
              '<code>{Typ} – {Podmínka}</code>',
              '<code>CE – purchase</code> · <code>CE – generate_lead</code> · <code>Click – Link – tel:</code> · <code>PV – Děkovací stránka</code> · <code>Consent Init – All Pages</code>',
            ],
            [
              'Proměnná',
              '<code>{Typ} – {Název}</code>',
              '<code>DLV – ecommerce.transaction_id</code> · <code>DLV – ecommerce.items</code> · <code>CJS – items pro Meta</code> · <code>Const – GA4 ID</code> · <code>RegEx – hostname → prostředí</code>',
            ],
            [
              'Složky',
              'podle platformy',
              '<code>01 GA4</code> · <code>02 Google Ads</code> · <code>03 Meta</code> · <code>04 Seznam</code> · <code>05 Heureka</code> · <code>90 Consent</code> · <code>99 Utility</code>',
            ],
            [
              'Verze',
              '<code>RRRR-MM-DD – změna</code>',
              '<code>2026-10-08 – deduplikace purchase podle transaction_id</code>',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Zkratky: CE = vlastní událost neboli custom event; PV = zobrazení stránky; DLV = proměnná datové vrstvy; CJS = vlastní JavaScript.',
          ],
        },
        {
          type: 'table',
          caption: 'Oprávnění – doporučená matice',
          head: ['Kdo', 'Účet GTM', 'Kontejner', 'Poznámka'],
          rows: [
            ['Vlastník za firmu, třeba CMO nebo IT', 'Administrátor', 'Publikovat', 'Aspoň dva lidé z firmy, ne agentura'],
            ['Interní marketingový analytik', 'Uživatel', 'Publikovat, nebo Schválit', 'Podle velikosti týmu'],
            [
              'PPC nebo externí agentura',
              'Uživatel',
              'Upravit',
              'Změny ve vlastním workspace, publikuje vlastník nebo správce',
            ],
            ['Vývojář webu', 'Uživatel', 'Číst', 'Kontrola datové vrstvy v náhledu'],
            ['datalayer.cz při správě', 'Uživatel', 'Publikovat, jen při správě', 'Po skončení spolupráce oprávnění odeberte'],
            ['Dočasný dodavatel nebo audit', 'Uživatel', 'Číst', 'Po dokončení práce oprávnění odeberte'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Úrovně oprávnění odpovídají GTM. Účet má úrovně Administrátor a Uživatel, kontejner Bez přístupu, Číst, Upravit, Schválit a Publikovat. Schvalovací workflow a zóny nabízí jen Tag Manager 360.',
          ],
        },
      ],
    },

    {
      id: 'migrace',
      eyebrow: 'migrace',
      title: 'Jak přesuneme kódy z webu do GTM, aniž by vypadla data',
      tone: 'dark',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Inventura',
              text: 'Projdeme zdrojový kód, pluginy, vestavěné integrace platformy a síťové požadavky.',
              output: 'Seznam všech měřicích kódů',
            },
            {
              title: 'Mapování',
              text: 'Ke každému kódu určíme náhradu v GTM: šablonu, spouštěč, proměnné z datové vrstvy a kategorii souhlasu.',
            },
            {
              title: 'Příprava v GTM',
              text: 'Vše nastavíme v samostatném workspace a otestujeme na testovacím prostředí.',
            },
            {
              title: 'Přepnutí v jednom kroku',
              text: 'Odstranění kódů z webu a publikace kontejneru proběhnou ve stejném nasazení. Žádné dny se zdvojenými konverzemi.',
            },
            {
              title: 'Kontrola',
              text: 'Sedm až čtrnáct dní porovnáváme počty konverzí v GA4, Google Ads a dalších systémech s obdobím před migrací.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Ukázka inventury, fiktivní data',
          head: ['Měřicí kód', 'Kde je dnes', 'Kam v GTM', 'Souhlas'],
          rows: [
            [
              'Google Ads konverze',
              'natvrdo na děkovací stránce',
              '<code>Google Ads – Conversion – Nákup</code> + <code>CE – purchase</code>',
              '<code>ad_storage</code>, <code>ad_user_data</code>',
            ],
            [
              'Meta Pixel',
              'plugin e-shopu',
              'šablona Meta + <code>CE – purchase</code>, k tomu CAPI přes server-side',
              '<code>ad_storage</code>',
            ],
            [
              'Sklik konverzní kód',
              'šablona webu',
              'Seznam Event Measurement, šablona GTM',
              'podle doporučení Seznamu a CMP',
            ],
            [
              'Heureka Ověřeno zákazníky',
              'modul platformy',
              'ponechat v modulu, nebo šablona v GTM, rozhodneme podle situace',
              'podle CMP',
            ],
            [
              'Hotjar / Clarity',
              'natvrdo v hlavičce',
              'šablona + spouštěč všech stránek',
              '<code>analytics_storage</code>',
            ],
          ],
        },
      ],
    },

    {
      id: 'souhlas',
      eyebrow: 'consent mode',
      title: 'Jak v GTM nastavujeme souhlas návštěvníka',
      lead: 'Souhlas musí GTM znát dřív, než spustí první tag. Postupujeme takto:',
      tone: 'light',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'Šablona CMP, tedy cookie lišty, běží na spouštěči <strong>Consent Initialization – All Pages</strong>, který GTM spouští před všemi ostatními. Nastaví výchozí stav: pro návštěvníky z EHP všechny čtyři signály <code>denied</code>.',
            'Po volbě návštěvníka pošle lišta <strong>update</strong> souhlasu a tagy se podle něj chovají.',
            'Tagy Google mají <strong>vestavěné kontroly souhlasu</strong>. U ostatních tagů, třeba u Mety, Hotjaru nebo TikToku, nastavujeme <strong>dodatečné kontroly</strong>: tag poběží, jen když návštěvník udělil požadované typy souhlasu.',
            'Zapínáme přehled <strong>Consent Overview</strong>, kde u každého tagu vidíte stav nastavení souhlasu.',
            'Ověřujeme v Tag Assistantu: výchozí stav <code>denied</code>, po kliknutí na lištu <code>granted</code>.',
          ],
        },
        {
          type: 'table',
          caption: 'Tag → souhlas: ukázka standardního nastavení. Finální mapování určí vaše CMP a právní posouzení.',
          head: ['Tag', 'Kontrola souhlasu', 'Typ souhlasu'],
          rows: [
            [
              'Google tag / GA4',
              'vestavěná',
              '<code>analytics_storage</code>, pro reklamní funkce i <code>ad_storage</code> a <code>ad_user_data</code>',
            ],
            [
              'Google Ads konverze, remarketing',
              'vestavěná',
              '<code>ad_storage</code>, <code>ad_user_data</code>, <code>ad_personalization</code>',
            ],
            ['Meta Pixel', 'dodatečná', '<code>ad_storage</code>'],
            ['Sklik / Seznam Event Measurement', 'dodatečná nebo podle šablony', 'podle dokumentace Seznamu a CMP'],
            ['Hotjar / Microsoft Clarity', 'dodatečná', '<code>analytics_storage</code>'],
            [
              'Chat, A/B testy',
              'dodatečná',
              '<code>functionality_storage</code> nebo <code>personalization_storage</code> podle účelu',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          text: 'Lištu, texty a volbu režimu basic, nebo advanced řeší služba <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode v2</a>. Nejsme advokátní kancelář. Kategorie souhlasu by měl posoudit váš právník.',
        },
      ],
    },

    {
      id: 'vykon',
      eyebrow: 'výkon',
      title: 'GTM, který web nezpomaluje',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Úklid',
              text: 'Nepoužívané tagy, spouštěče a proměnné odstraníme. Podobné tagy sjednotíme přes proměnné a dlouhé vyhledávací tabulky nahradíme RegEx tabulkami. Google doporučuje optimalizovat, když ukazatel velikosti kontejneru přesáhne sedmdesát procent.',
            },
            {
              title: 'Méně Custom HTML',
              text: 'Šablony jsou bezpečnější a jejich údržba je snazší. Těžké skripty, třeba chaty a heatmapy, spouštíme jen tam, kde je potřebujete, ne na všech stránkách.',
            },
            {
              title: 'Google tag',
              text: 'GA4 a Google Ads sdílejí jeden Google tag. Od 10. dubna 2025 kontejnery s tagy Google Ads nebo Floodlight načítají Google tag automaticky. Hlídáme, aby nevznikaly duplicitní konfigurace.',
            },
            {
              title: 'Diagnostika značek',
              text: 'Sledujeme upozornění, když Google tag na stránce chybí nebo běží dvakrát, a pokrytí stránek.',
            },
            {
              title: 'Server-side',
              text: 'Část tagů můžeme přesunout na server, takže v prohlížeči poběží méně skriptů. Víc na stránce <a href="/sluzby/server-side-tracking">Server-side tracking</a>.',
            },
            {
              title: 'Google Tag Gateway',
              text: 'Načítání Google tagů z vaší domény přes CDN nebo load balancer: Cloudflare, Akamai, Fastly, Amazon CloudFront nebo Google Cloud.',
            },
          ],
        },
      ],
    },

    {
      id: 'jak-to-funguje',
      eyebrow: 'diagram',
      title: 'Co se děje uvnitř kontejneru',
      lead: 'Web zapíše událost do datové vrstvy. Spouštěč rozhodne, kterých tagů se týká. Kontrola souhlasu rozhodne, jestli je GTM smí spustit. A verze s popisem zajistí, že se k nastavení kdykoli vrátíte.',
      tone: 'light',
      blocks: [
        {
          type: 'flow',
          caption:
            'Schéma GTM: událost z datové vrstvy → spouštěč → kontrola souhlasu z cookie lišty → tagy GA4, Google Ads a Meta, volitelně server-side GTM. Celé nastavení drží verze s popisem, workspaces a oprávnění.',
          columns: [
            {
              label: 'dataLayer',
              items: ['event: purchase'],
              note: 'Web zapíše událost do datové vrstvy.',
            },
            {
              label: 'Spouštěč',
              items: ['CE – purchase'],
              note: 'GTM spustí tag jen při události purchase, ne při každém načtení stránky.',
            },
            {
              label: 'Kontrola souhlasu',
              items: ['Consent Initialization', 'výchozí stav denied', 'update z cookie lišty'],
            },
            {
              label: 'Tagy',
              items: [
                'GA4 – Event – purchase: analytics_storage',
                'Google Ads – Conversion: ad_storage + ad_user_data',
                'Meta – Event – Purchase: ad_storage',
                'server-side GTM, volitelně',
              ],
              note: 'Bez souhlasu tag čeká. Jen tagy Google v advanced režimu pošlou cookieless ping.',
            },
            {
              label: 'Governance',
              items: ['verze s popisem', 'workspaces', 'oprávnění'],
            },
          ],
        },
        {
          type: 'paragraphs',
          items: ['Přes GTM nasazujeme i <a href="/sluzby/implementace-ga4">implementaci GA4</a>.'],
        },
      ],
    },

    {
      id: 'srovnani',
      eyebrow: 'srovnání',
      title: 'Kde mají měřicí kódy žít?',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          head: ['Kritérium', 'Kódy natvrdo v šabloně', 'Google Tag Manager', 'GTM + server-side GTM'],
          highlightColumn: 2,
          rows: [
            [
              'Změna tagu',
              'Vývojář a nasazení webu',
              'Marketing nebo analytik, bez nasazení webu',
              'Stejně jako GTM. Serverová část vyžaduje správu',
            ],
            [
              'Kontrola souhlasu',
              'Ručně v kódu, často chybí',
              'Centrálně: Consent Mode a kontroly souhlasu',
              'Centrálně. Souhlas platí i pro serverovou část',
            ],
            ['Historie změn', 'Git webu, pokud vůbec', 'Verze kontejneru s popisem', 'Verze obou kontejnerů'],
            ['Počet skriptů v prohlížeči', 'Tolik, kolik je kódů', 'Stejně, ale řízeně', 'Méně, část tagů běží na serveru'],
            [
              'Náklady na provoz',
              'Žádné',
              'Žádné, kromě placeného GTM 360',
              'Hosting serveru, třeba Google Cloud nebo Stape, hradí klient napřímo',
            ],
            [
              'Kdy zvolit',
              'Prakticky nikdy, výjimka jsou kritické skripty webu',
              'Výchozí volba pro většinu webů',
              'E-shopy a firmy s reklamou ve větším rozsahu, požadavek na first-party měření',
            ],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Zvažujete třetí sloupec? Podívejte se na <a href="/sluzby/server-side-tracking">Server-side tracking</a>.',
          ],
        },
      ],
    },

    {
      id: 'co-dostanete',
      eyebrow: 'výstupy',
      title: 'Co od nás dostanete',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Výstup', 'Nastavení', 'Audit', 'Správa'],
          rows: [
            ['Publikovaný kontejner, každá verze s popisem', '✓', 'po úklidu ✓', '✓'],
            ['Karta kontejneru: tagy, účel, vlastník, souhlas', '✓', '✓', 'průběžně'],
            ['Inventura tagů s doporučením ponechat, upravit, nebo smazat', '–', '✓', 'čtvrtletně'],
            ['Report nálezů s prioritou A, B a C', '–', '✓', '–'],
            ['Konvence názvosloví a matice oprávnění', '✓', '✓', '✓'],
            ['Testovací protokol z Tag Assistantu a náhledu', '✓', '✓', 'u každé změny'],
            ['Changelog a měsíční přehled', '–', '–', '✓'],
            ['Předání a hodinové zaškolení', '✓', 'prezentace nálezů', 'podle dohody'],
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak spolupráce probíhá a co od vás potřebujeme',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          head: ['Služba', 'Kroky', 'Co potřebujeme od vás'],
          rows: [
            [
              'Nastavení',
              'konzultace → návrh kontejneru → případně datová vrstva u vývojářů → nastavení na testovacím prostředí → test → publikace → předání',
              'Administrátorská práva k účtu GTM nebo jeho založení, kontakt na vývojáře, testovací prostředí a přístup do CMP',
            ],
            [
              'Audit a úklid',
              'přístup → inventura a kontrola → report → prezentace nálezů → úklid ve workspace → publikace',
              'Oprávnění Číst pro audit, pak Upravit nebo Publikovat pro úklid. Seznam lidí a agentur s přístupem',
            ],
            [
              'Správa',
              'nastavení pravidel → požadavky přes ticket nebo e-mail → měsíční kontrola',
              'Jedna kontaktní osoba a schvalovatel změn',
            ],
          ],
        },
      ],
    },

    {
      id: 'pro-koho',
      eyebrow: 'pro koho',
      title: 'Co je jinak u e-shopu, B2B a velké firmy',
      tone: 'light',
      blocks: [
        {
          type: 'tabs',
          group: 'gtm_segment',
          items: [
            {
              id: 'eshop',
              label: 'E-shop',
              paragraphs: [
                'Nejvíc tagů: Google Ads, Meta, Sklik, Heureka, Zboží, srovnávače a retargeting. A nejvíc duplicit s moduly platformy. Hlídáme, aby každý systém počítal nákup jednou a všechny dostaly stejnou hodnotu.',
                'Víc na stránce <a href="/reseni/e-shopy">Měření pro e-shopy</a>.',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B a leady',
              paragraphs: [
                'Méně tagů, ale citlivější data: formuláře, telefon, e-mail. Formuláře rozlišujeme přes <code>form_id</code> a osobní údaje nikdy neposíláme v čitelné podobě.',
                'Víc na stránce <a href="/reseni/b2b-a-lead-generation">Měření pro B2B a lead generation</a>.',
              ],
            },
            {
              id: 'velka-firma',
              label: 'Velká firma',
              paragraphs: [
                'Více týmů a dodavatelů v jednom kontejneru potřebuje workspaces, schvalování, oprávnění, bezpečnostní politiky šablon a dokumentaci pro IT a audit. Zvážíme i GTM 360 s neomezenými workspaces, schvalovacím workflow a zónami.',
                'Víc na stránce <a href="/reseni/velke-firmy">Měření pro velké firmy</a>.',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Co je Google Tag Manager a jak funguje?',
      a: 'Google Tag Manager je bezplatný nástroj, přes který nasadíte na web měřicí a marketingové kódy. Vývojář jednou vloží na web kód kontejneru a všechny další tagy pak spravujete v rozhraní GTM. GTM spustí tag podle spouštěče, tedy pravidla, například při nákupu nebo odeslání formuláře.',
    },
    {
      q: 'Kolik stojí nastavení nebo audit GTM?',
      a: 'Cenu stanovujeme podle rozsahu. U nastavení rozhoduje počet platforem a událostí a to, jestli web má datovou vrstvu. U auditu velikost kontejneru a počet webů. U správy objem změn a požadovaná reakční doba. Po úvodní konzultaci dostanete nabídku s pevným rozsahem. Samotný Google Tag Manager je zdarma. Peníze stojí jen verze Tag Manager 360 a případný server pro server-side měření, který hradíte napřímo poskytovateli.',
    },
    {
      q: 'Co obsahuje audit GTM a jak dlouho trvá?',
      a: 'Projdeme všechny tagy, spouštěče a proměnné a zjistíme, co používáte, co je duplicitní a co nikdy neběží. Zkontrolujeme názvosloví, Custom HTML a šablony třetích stran, nastavení souhlasu u každého tagu, verze, workspaces a oprávnění. Dohledáme i kódy mimo GTM. Výstup je report s nálezy podle priority a tabulka všech tagů s doporučením. Jak dlouho audit trvá, záleží hlavně na velikosti kontejneru a počtu webů.',
    },
    {
      q: 'Zpomalí Google Tag Manager web?',
      a: 'Samotný kontejner web výrazně nezpomalí. Zpomalují ho tagy uvnitř, hlavně těžké skripty třetích stran, třeba chaty, heatmapy nebo desítky pixelů, když běží na všech stránkách. Při nastavení a úklidu proto mažeme nepoužívané tagy, omezujeme Custom HTML, spouštíme skripty jen tam, kde jsou potřeba, a hlídáme ukazatel velikosti kontejneru. Část tagů můžeme přesunout i na server.',
    },
    {
      q: 'Komu patří kontejner a kdo k němu bude mít přístup?',
      a: 'Kontejner zakládáme na firemním účtu GTM a administrátor jste vy, ideálně dva lidé z firmy. My i agentury dostáváme jen oprávnění, která potřebujeme: pro audit čtení, pro správu úpravy nebo publikaci. Doporučujeme osobní účty místo sdílených loginů a čtvrtletní revizi přístupů. Po skončení spolupráce nám oprávnění jednoduše odeberete.',
    },
    {
      q: 'Musí do toho zasahovat náš vývojář?',
      a: 'Většinou jen na začátku. Vývojář vloží kód kontejneru a doplní datovou vrstvu, tedy informace o produktech, objednávkách a formulářích, které GTM sám spolehlivě nezjistí. Specifikaci mu připravíme a jeho práci otestujeme. Další změny tagů už pak úpravy webu nevyžadují. U e-shopových platforem jako Shoptet nebo Shopify část datové vrstvy už existuje a vývojáře někdy nepotřebujete vůbec.',
    },
    {
      q: 'Co se stane s daty při přesunu kódů do GTM?',
      a: 'Když migraci uděláme v jednom kroku, nevznikne výpadek dat ani duplicity. Odstranění starých kódů z webu a publikaci kontejneru proto plánujeme do stejného nasazení. Před přepnutím vše otestujeme na testovacím prostředí. Po přepnutí sedm až čtrnáct dní porovnáváme počty konverzí v GA4 a reklamních systémech s obdobím před migrací. Přesun kódů historická data v GA4 ani v Google Ads nezmění.',
    },
    {
      q: 'Jak v GTM řešíte souhlas s cookies?',
      a: 'Šablona cookie lišty běží na spouštěči Consent Initialization, takže GTM zná výchozí stav souhlasu dřív než jakýkoli tag. Tagy Google mají vestavěné kontroly souhlasu, ostatním, třeba tagům Mety nebo Hotjaru, nastavujeme dodatečné kontroly. Vše ověřujeme v Tag Assistantu. Volbu lišty, texty a režim basic, nebo advanced řeší služba <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode v2</a>. Kategorie souhlasu by měl posoudit váš právník.',
    },
    {
      q: 'Potřebujeme server-side GTM?',
      a: 'Ne vždy. Server-side GTM přesouvá část zpracování z prohlížeče na váš server. Pomáhá s odolností měření vůči omezením prohlížečů, s kontrolou nad tím, co web posílá třetím stranám, a s rychlostí webu. Má ale provozní náklady a vyžaduje správu. Vyplatí se hlavně e-shopům a firmám s větším rozpočtem na reklamu. Souhlas návštěvníka platí i pro serverovou část. Jak se rozhodnout, popisuje stránka <a href="/sluzby/server-side-tracking">Server-side tracking</a>.',
    },
    {
      q: 'Co je Google Tag Gateway a máme ho nasadit?',
      a: 'Google Tag Gateway, dříve „first-party mode“, načítá Google tagy z vaší domény přes CDN nebo load balancer, například Cloudflare, Akamai, Fastly, Amazon CloudFront nebo Google Cloud. Nevyžaduje server-side GTM, ale můžete ho s ním kombinovat. Je to rychlejší krok než plné server-side měření, ale řeší jen Google tagy.',
    },
    {
      q: 'Naučíte náš tým s GTM pracovat?',
      a: 'Ano. Předání kontejneru zahrnuje hodinové zaškolení: názvosloví, jak přidat tag ve workspace, jak testovat v náhledu a jak popsat verzi. Pro marketingové týmy připravujeme i delší školení GTM na vašem kontejneru.',
    },
  ],

  relatedArticles: [
    { slug: 'google-tag-manager-pruvodce', title: 'Průvodce Google Tag Managerem' },
    { slug: 'audit-gtm-kontejneru', title: 'Checklist auditu GTM kontejneru' },
    { slug: 'datova-vrstva-specifikace', title: 'Specifikace datové vrstvy' },
    { slug: 'consent-mode-v2-pruvodce', title: 'Consent Mode v2 v praxi' },
    { slug: 'google-tag-gateway', title: 'Google Tag Gateway vs. server-side GTM' },
  ],

  relatedPages: ['sluzby/datova-vrstva', 'sluzby/server-side-tracking', 'sluzby/cookie-lista-consent-mode'],

  contact: {
    formId: 'lp-gtm',
    topics: ['gtm'],
    title: 'Uklidíme váš Tag Manager',
    lead: 'Napište nám, nebo vyplňte formulář. Na úvodní třicetiminutové konzultaci se podíváme na kontejner a řekneme, co řešit jako první.',
    placeholder: 'Např. v GTM máme 120 tagů a nikdo neví, co dělají…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Google Tag Manager – nastavení, audit a správa',
    serviceType: 'Implementace, audit a správa Google Tag Manageru',
    description:
      'Nastavení nového kontejneru GTM, audit a úklid existujícího a průběžná správa: názvosloví, verze, workspaces, oprávnění, dokumentace, Consent Mode v2 a výkon.',
  },
};
