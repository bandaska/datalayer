import type { LandingPageContent } from '../types';

// Zdroj: seo-analyza/03_landing-pages/11_sprava-webu-a-mereni.md (návrh v1, 8. 10. 2026).
// Zadání je návrh služby k potvrzení klientem (moduly A/B/C). Vynecháno do dodání
// podkladů: hodnoty SLA, pracovní doba a pohotovost, délky kroků onboardingu,
// platformy a zkušební obnova záloh v modulu B, minimální délka spolupráce
// a výpovědní lhůta (otázka FAQ 8 vypuštěna), hodiny na úpravy v paušálu,
// partnerské webové studio, konkrétní nástroj pro testy, počet spravovaných webů,
// případová studie (MiniCase).

export const page: LandingPageContent = {
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
    eyebrow: 'monitor · audity a správa',
    h1: 'Technická správa webu, která hlídá i měření',
    subtitle:
      'Aktualizace, zálohy a dostupnost webu – a k tomu hlídání tagů, datové vrstvy a souhlasu po každém releasu. Když měření přestane fungovat, dozvíte se to týž den, ne za měsíc z propadu v reportu.',
    quickAnswer:
      '<strong>Správa webu a měření</strong> je průběžná technická péče o web. Kromě aktualizací, záloh a dostupnosti hlídá i to, co běžná správa webu neřeší: že po každém nasazení dál fungují tagy, datová vrstva a souhlas s cookies. Chybu v měření zachytíme automatickými testy a kontrolou dat, opravíme ji podle SLA a jednou měsíčně dostanete report kvality dat.',
    primaryCta: { label: 'Domluvit správu webu', href: '#kontakt' },
    secondaryCta: { label: 'Co hlídáme', href: '#co-hlidame' },
    microcopy:
      'Pracujeme online po celé ČR · Nejsme webové studio – grafiku a texty neděláme · Úvodní konzultace zdarma',
  },

  trust: [
    'Automatický test měření po každém nasazení webu',
    'Reakční doby podle priority sepíšeme do smlouvy',
    'Měsíční report kvality dat – čísla, ne dojmy',
    'Všechny účty, přístupy a data zůstávají vaše',
  ],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Znáte to?',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Měření přestalo fungovat a nikdo si nevšiml',
              text: 'Po releasu přestaly do GA4 chodit nákupy. Někdo si toho všiml až za tři týdny a reklamní systémy mezitím optimalizovaly kampaně naslepo.',
              pictogram: 'monitor',
            },
            {
              title: 'Cookie lišta po aktualizaci přestala fungovat',
              text: 'Nová verze lišty nebo šablony a najednou web spouští tagy před souhlasem. Nebo naopak vůbec.',
              pictogram: 'consent',
            },
            {
              title: 'V GTM publikuje kdokoli',
              text: 'Agentura, PPC specialista i vývojář. Nikdo neví, co se v které verzi změnilo, a staré tagy se hromadí.',
              pictogram: 'gtm',
            },
            {
              title: 'Aktualizace rozbila formulář',
              text: 'Po aktualizaci pluginu nebo knihovny formulář hlásí úspěšné odeslání, ale lead nedorazí a měření ho nezachytí.',
              pictogram: 'lead',
            },
            {
              title: 'Web dělá agentura, za data neodpovídá nikdo',
              text: 'Vývojáři řeší funkce, marketing kampaně. Měření stojí mezi nimi a padá pokaždé, když se něco mění.',
              pictogram: 'warn',
            },
            {
              title: 'Porada řeší propad, který neexistuje',
              text: 'Report ukazuje pokles tržeb z kampaní. Po týdnu se ukáže, že šlo o chybu měření, ne o kampaně.',
              pictogram: 'dashboard',
            },
          ],
        },
      ],
    },

    {
      id: 'srovnani',
      eyebrow: 'srovnání',
      title: 'Čím se lišíme od běžné správy webových stránek',
      lead: 'Běžná správa webu se stará o to, aby web běžel a byl aktuální. My k tomu přidáváme to, co webová studia obvykle neřeší: aby web dál správně měřil.',
      tone: 'dark',
      blocks: [
        {
          type: 'paragraphs',
          items: ['Pokud máte správu u studia, můžete si od nás vzít jen hlídání měření.'],
        },
        {
          type: 'table',
          caption: 'Popisujeme typickou nabídku, konkrétní studia se liší.',
          head: ['Oblast', 'Typická správa webu u studia', 'Správa webu a měření u nás'],
          highlightColumn: 2,
          rows: [
            [
              'Aktualizace systému, pluginů a závislostí',
              '✓',
              '✓ s testem na stagingu a kontrolou měření po aktualizaci',
            ],
            ['Zálohy', '✓', '✓'],
            ['Monitoring dostupnosti a certifikátu', 'obvykle ✓', '✓'],
            ['Úpravy textů, obrázků a nových stránek', '✓', '– neděláme, zůstávají na marketingu nebo studiu'],
            [
              'Grafika a vývoj nových funkcí',
              '✓',
              '– spolupracujeme s vývojem a dodáme zadání datové vrstvy pro nové funkce',
            ],
            ['Kontrola tagů a datové vrstvy po každém releasu', '–', '✓ automaticky'],
            ['Kontrola souhlasu a Consent Mode', 'zřídka', '✓ měsíčně a po každé změně lišty'],
            ['Pořádek v Google Tag Manageru: verze, práva, úklid', '–', '✓'],
            ['Hlídání anomálií v datech GA4 nebo BigQuery', '–', '✓'],
            ['Release checklist pro vývojáře', '–', '✓'],
            ['Měsíční report', 'výkaz hodin', 'report kvality dat a doporučení'],
            ['Kde', 'často místní studio', 'online po celé ČR'],
          ],
        },
      ],
    },

    {
      id: 'co-hlidame',
      eyebrow: 'moduly',
      title: 'Co hlídáme: tři moduly, které lze kombinovat',
      lead: 'Základem je modul A. Moduly B a C přidáme podle toho, kdo web vyvíjí a jak často se mění.',
      tone: 'light',
      blocks: [
        {
          type: 'list',
          style: 'check',
          title: 'Modul A – hlídání měření, základ služby',
          items: [
            '<strong>Automatické testy klíčových cest.</strong> Headless prohlížeč projde po každém nasazení a jednou denně cesty, na kterých stojí byznys: zobrazení produktu, košík, objednávku v testovacím režimu a odeslání formuláře. Ověří, že web načte GTM, že datová vrstva obsahuje očekávané události a parametry, třeba <code>purchase</code>, <code>transaction_id</code>, <code>value</code> a <code>items</code>, a že web spouští tagy jen po souhlasu.',
            '<strong>Hlídání dat.</strong> Denně porovnáváme počty klíčových událostí s průměrem posledních týdnů a poměr objednávek v GA4 k objednávkám v e-shopu. Jako levnou první vrstvu nastavíme i vlastní statistiky v GA4 s upozorněním e-mailem. Google jich dovoluje až padesát na property.',
            '<strong>Kontrola souhlasu.</strong> Měsíčně a po každé změně cookie lišty ověříme výchozí stav Consent Mode a jeho aktualizaci po volbě návštěvníka u signálů <code>ad_storage</code>, <code>analytics_storage</code>, <code>ad_user_data</code> a <code>ad_personalization</code>. Hledáme i nové cookies a nové domény třetích stran.',
            '<strong>Pořádek v GTM.</strong> Zapneme e-mailové notifikace o publikování verzí, nastavíme pravidla pojmenování a práva podle rolí a pravidelně uklidíme nepoužívané tagy.',
            '<strong>Měsíční report kvality dat.</strong> Co v něm najdete, popisujeme níže.',
            '<strong>Drobné úpravy měření.</strong> Nové události, parametry a konverze v rozsahu, který dohodneme ve smlouvě.',
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Modul B – technická správa webu',
          items: [
            '<strong>Aktualizace a zálohy.</strong> Jádro systému, pluginy, knihovny a závislosti aktualizujeme nejdřív na testovacím prostředí, pak v produkci a vždy s kontrolou měření po nasazení. Web pravidelně zálohujeme.',
            '<strong>Dostupnost a certifikát.</strong> Hlídáme dostupnost webu, platnost HTTPS certifikátu a domény a při problému pošleme upozornění.',
            '<strong>Bezpečnostní hlavičky.</strong> Konfiguraci HSTS, CSP, Referrer-Policy a dalších hlaviček udržujeme v souladu s tagy, které web používá.',
            '<strong>Rychlost.</strong> Každý měsíc přehled Core Web Vitals a hlídání výkonnostního rozpočtu, aby web s každým novým skriptem nezpomaloval.',
          ],
        },
        {
          type: 'list',
          style: 'check',
          title: 'Modul C – release partner pro vlastní nebo externí vývoj',
          items: [
            '<strong>Release checklist</strong> pro vývojáře a kontrola na testovacím prostředí před nasazením.',
            '<strong>Regresní test měření</strong> po každém nasazení – automaticky a u velkých změn i ručně.',
            '<strong>Zadání datové vrstvy pro nové funkce.</strong> Když vzniká nový košík, formulář nebo sekce, dodáme specifikaci událostí dřív, než vývojáři začnou programovat.',
            '<strong>Konzultace pro vývojáře</strong> v rozsahu, na kterém se dohodneme.',
          ],
        },
      ],
    },

    {
      id: 'jak-hlidani-funguje',
      eyebrow: 'smyčka',
      title: 'Jak hlídání funguje: od releasu po report',
      lead: 'Hlídání má dvě vrstvy. Testy v prohlížeči zachytí chybu hned po nasazení, ještě než se projeví v datech.',
      tone: 'dark',
      blocks: [
        {
          type: 'paragraphs',
          items: [
            'Kontrola dat odhalí to, co testy nepokryjí: chybu jen na některém zařízení, v jiné jazykové verzi nebo u části zákazníků.',
          ],
        },
        {
          type: 'flow',
          caption:
            'Smyčka hlídání měření. Vývojáři nebo agentura připraví release, projdou release checklist a otestují ho na stagingu. Po nasazení do produkce automatický test projde produkt, košík, objednávku a formulář a zkontroluje datovou vrstvu, tagy a souhlas. Souběžně denní kontrola porovná data v GA4 nebo BigQuery s průměrem a s objednávkami v e-shopu. Když test nebo kontrola najde problém, přijde alert e-mailem nebo do Slacku a vznikne incident s prioritou podle SLA. GTM opravíme my, kód vývojáři, a po opravě následuje ověření. Všechno končí v logu a v měsíčním reportu kvality dat.',
          columns: [
            {
              label: 'Release',
              items: ['vývojáři nebo agentura', 'release checklist a test na stagingu', 'nasazení do produkce'],
            },
            {
              label: 'Automatický test',
              items: ['produkt → košík → objednávka', 'formulář → lead', 'dataLayer, tagy a souhlas v pořádku?'],
              note: 'když ne, přijde alert',
            },
            {
              label: 'Denní kontrola dat',
              items: ['GA4 nebo BigQuery proti průměru', 'GA4 proti objednávkám v e-shopu', 'anomálie?'],
              note: 'když ano, přijde alert',
            },
            {
              label: 'Alert a oprava',
              items: [
                'alert e-mailem nebo do Slacku',
                'incident P1–P3 podle SLA',
                'oprava: GTM my, kód vývojáři',
                'ověření po opravě',
              ],
            },
            {
              label: 'Log a report',
              items: ['záznam do logu', 'měsíční report kvality dat'],
            },
          ],
        },
      ],
    },

    {
      id: 'release-checklist',
      eyebrow: 'checklist',
      title: 'Release checklist: dvanáct kontrol, které chrání data',
      lead: 'Tento seznam dostanou vývojáři. Prvních šest kontrol proběhne na testovacím prostředí před nasazením, dalších šest v produkci po nasazení. Většinu z nich hlídá automatický test.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['#', 'Kdy', 'Kontrola', 'Kdo', 'Automaticky'],
          rows: [
            [
              '1',
              'před',
              'Mění release šablony, které odesílají <code>purchase</code>, <code>generate_lead</code> nebo jinou klíčovou událost? Pokud ano, dejte nám vědět předem.',
              'vývoj',
              '–',
            ],
            [
              '2',
              'před',
              'Datová vrstva na testovacím prostředí odpovídá specifikaci: názvy událostí, povinné parametry, datové typy.',
              'my',
              '✓',
            ],
            ['3', 'před', 'Web načítá kontejner GTM a konzole neukazuje chyby JavaScriptu.', 'my', '✓'],
            [
              '4',
              'před',
              'Cookie lišta: výchozí stav souhlasu „denied“, po volbě aktualizace, žádné marketingové tagy před souhlasem.',
              'my',
              '✓',
            ],
            [
              '5',
              'před',
              'Formuláře: validace, odeslání a událost <code>generate_lead</code> bez osobních údajů v čitelné podobě.',
              'my',
              '✓',
            ],
            [
              '6',
              'před',
              'Nové skripty třetích stran prošly schválením: výkon, souhlas, bezpečnostní hlavičky.',
              'vývoj a my',
              '–',
            ],
            [
              '7',
              'po',
              'Testovací nákup nebo formulář v produkci: událost dorazila do GA4, ověříme v DebugView nebo v přehledu v reálném čase.',
              'my',
              '✓',
            ],
            [
              '8',
              'po',
              'Google Ads, Meta a Sklik přijímají konverze. U server-side kontrolujeme deduplikaci přes <code>event_id</code>.',
              'my',
              'částečně',
            ],
            ['9', 'po', 'Přesměrování a canonical u URL, které se změnily; aktuální sitemap.', 'vývoj', 'částečně'],
            ['10', 'po', 'Core Web Vitals šablon v laboratorním testu nepřekračují výkonnostní rozpočet.', 'my', '✓'],
            [
              '11',
              'po',
              'Počty klíčových událostí v první hodině a první den po releasu odpovídají průměru.',
              'my',
              '✓',
            ],
            ['12', 'po', 'Záznam v release logu: verze webu, verze GTM, kdo a co změnil.', 'vývoj a my', '–'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Checklist upravíme na míru platformě a release procesu a dostanete ho jako šablonu v Markdownu, Confluence nebo Jiře.',
          ],
        },
      ],
    },

    {
      id: 'mesicni-report',
      eyebrow: 'report',
      title: 'Co najdete v měsíčním reportu kvality dat',
      lead: 'Report není výkaz odpracovaných hodin. Odpovídá na otázku, jestli se můžete na data spolehnout – a co je potřeba udělat příští měsíc.',
      tone: 'dark',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            { tag: '01', title: 'Shrnutí', text: 'Stav měření jednou větou a tři hlavní body.' },
            {
              tag: '02',
              title: 'Incidenty',
              text: 'Co se stalo, kdy, jak rychle jsme reagovali, příčina, oprava a prevence.',
            },
            {
              tag: '03',
              title: 'Shoda dat',
              text: 'Poměr objednávek nebo leadů v GA4 k e-shopu či CRM v čase. Reklamní systémy proti GA4.',
            },
            {
              tag: '04',
              title: 'Souhlas',
              text: 'Podíl relací se souhlasem, změny cookie lišty, nové cookies a domény.',
            },
            {
              tag: '05',
              title: 'Změny',
              text: 'Verze webu a GTM za měsíc, kdo co publikoval a které tagy jsme uklidili.',
            },
            {
              tag: '06',
              title: 'Rychlost a dostupnost',
              text: 'Core Web Vitals podle šablon, dostupnost a doporučení na příští měsíc.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Ukázka dlaždic z reportu za září 2026, ukázková data',
          head: ['Ukazatel', 'Hodnota'],
          rows: [
            ['Incidenty', 'dva – jeden P1 a jeden P3'],
            ['Shoda objednávek GA4 a e-shopu', '86,4 %, cíl alespoň 85 %, stabilní'],
            ['Podíl relací se souhlasem', '71 %, po změně lišty 15. září o dva procentní body méně'],
            ['Verze GTM', 'šest nových verzí, úklid čtrnácti tagů'],
            ['LCP na mobilu, 75. percentil', '2,3 s'],
            ['Dostupnost', '99,98 %'],
          ],
        },
        {
          type: 'list',
          style: 'bullet',
          title: 'Doporučení na říjen, ukázka',
          items: [
            'Sjednotit názvy událostí formulářů.',
            'Odložit načítání chatu.',
            'Přidat <code>item_category</code> do <code>view_item_list</code>.',
          ],
        },
      ],
    },

    {
      id: 'sla',
      eyebrow: 'SLA',
      title: 'SLA: priority a reakční doby',
      lead: 'Ve smlouvě si dohodneme priority, reakční doby a cíle řešení. V měsíčním reportu pak měříme, jak rychle jsme reagovali a za jak dlouho jsme problém vyřešili.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          head: ['Priorita', 'Příklady'],
          rows: [
            [
              '<strong>P1 – kritická</strong>',
              'Web neměří nákupy nebo leady, tagy běží bez souhlasu, u modulu B i nedostupnost webu.',
            ],
            [
              '<strong>P2 – závažná</strong>',
              'Jeden reklamní systém nepřijímá konverze, chybí parametry nebo nefunguje část formulářů.',
            ],
            ['<strong>P3 – běžná</strong>', 'Nová událost, úprava konverze, drobné nesrovnalosti v datech.'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'U chyb v kódu webu závisí oprava na vývojářích. My dodáme diagnostiku, přesné zadání a po nasazení ověření.',
          ],
        },
      ],
    },

    {
      id: 'co-dostavate',
      eyebrow: 'každý měsíc',
      title: 'Co dostáváte každý měsíc',
      tone: 'dark',
      blocks: [
        {
          type: 'list',
          style: 'check',
          items: [
            'Automatické testy měření po každém releasu a denně.',
            'Upozornění na anomálie v datech a jejich prověření.',
            'Kontrolu souhlasu a Consent Mode – měsíčně a po změnách lišty.',
            'Pořádek v GTM: verze, práva, úklid.',
            'Opravy incidentů podle SLA.',
            'Drobné úpravy měření v rozsahu, který dohodneme.',
            'Měsíční report kvality dat a třicetiminutový hovor nad ním.',
            '<strong>Modul B:</strong> aktualizace, zálohy, monitoring dostupnosti a rychlosti.',
            '<strong>Modul C:</strong> release checklist, regresní testy a zadání datové vrstvy pro nové funkce.',
          ],
        },
      ],
    },

    {
      id: 'jak-zaciname',
      eyebrow: 'onboarding',
      title: 'Jak začínáme',
      lead: 'Hlídat má smysl jen funkční měření. Proto začínáme vstupní kontrolou: zjistíme výchozí stav a podle něj nastavíme testy a hranice pro upozornění.',
      tone: 'light',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Vstupní kontrola měření a webu',
              text: 'Projdeme GA4, GTM, souhlas, datovou vrstvu a technický stav webu.',
              output: 'Seznam chyb k opravě a výchozí hodnoty shody dat, souhlasu a Core Web Vitals',
              fromClient: 'Přístupy do GA4, GTM, Search Console a reklamních systémů, testovací prostředí',
            },
            {
              title: 'Opravy ze vstupní kontroly',
              text: 'Opravíme chyby, které vstupní kontrola našla.',
              output: 'Funkční výchozí stav',
              fromClient: 'Součinnost vývojářů u změn v kódu',
            },
            {
              title: 'Nastavení hlídání',
              text: 'Podle výchozího stavu nastavíme testy a hranice pro upozornění.',
              output: 'Automatické testy, alerty, vlastní statistiky v GA4 a notifikace z GTM',
              fromClient: 'Testovací účet nebo testovací režim objednávky a kanál pro alerty: e-mail, Slack nebo Teams',
            },
            {
              title: 'Release proces a SLA',
              text: 'Na jedné schůzce domluvíme release proces, kontakty a priority chyb.',
              output: 'Release checklist, kontakty, priority',
              fromClient: 'Kontakt na vývoj a release manažera',
            },
            {
              title: 'Běžný provoz',
              text: 'Každý měsíc hlídáme, opravujeme a upravujeme měření.',
              output: 'Report kvality dat, opravy, úpravy',
              fromClient: 'Třicet minut měsíčně nad reportem',
            },
            {
              title: 'Čtvrtletní revize',
              text: 'Jednou za čtvrtletí upravíme testy a hranice upozornění.',
              output: 'Plán na další čtvrtletí',
            },
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Pokud jsme vám měření nasazovali my, vstupní kontrola je kratší, protože výchozí stav známe. Chcete nejdřív jen jednorázovou kontrolu? Začněte <a href="/sluzby/audit-mereni">auditem měření</a>.',
          ],
        },
      ],
    },

    {
      id: 'cena',
      eyebrow: 'cena',
      title: 'Z čeho se skládá cena správy webu',
      lead: 'Ceník na webu neuvádíme, protože weby se liší víc než ceníkové balíčky. Po vstupní kontrole dostanete <strong>pevnou měsíční částku</strong> a předem víte, co v ní je a co platíte zvlášť.',
      tone: 'dark',
      blocks: [
        {
          type: 'list',
          style: 'bullet',
          title: 'Cenu ovlivňuje',
          items: [
            'Počet webů, domén a jazykových verzí.',
            'Platforma: SaaS e-shop, WordPress, vlastní řešení, headless.',
            'Kolik cest a konverzí hlídáme: nákup, formuláře, registrace, B2B portál.',
            'Frekvence releasů: jednou měsíčně, nebo několikrát týdně.',
            'Moduly, které si vyberete: A, A + B, A + C, nebo všechny.',
            'Úroveň SLA.',
            'Rozsah drobných úprav měření.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Co platíte zvlášť',
          text: 'Nástroje a infrastrukturu na vašich účtech, třeba hosting, Google Cloud pro server-side nebo BigQuery a placené nástroje pro monitoring, pokud je chcete. Vždy po dohodě a na vaše jméno.',
        },
      ],
    },

    {
      id: 'pro-koho',
      eyebrow: 'segmenty',
      title: 'Co je jinak u e-shopu, B2B a velké firmy',
      tone: 'light',
      blocks: [
        {
          type: 'tabs',
          group: 'sp_segment',
          items: [
            {
              id: 'eshop',
              label: 'E-shop',
              paragraphs: [
                'Hlídáme hlavně pokladnu: <code>purchase</code>, <code>transaction_id</code>, hodnotu a položky a napojení na Google Ads, Metu, Sklik a srovnávače.',
                'Na SaaS platformách, jako je Shoptet, Upgates nebo Shopify, hlídáme i změny, které přinese aktualizace platformy nebo šablony. Tu neovlivníte, ale můžete o ní vědět.',
                '<a href="/reseni/e-shopy">Měření pro e-shopy</a>',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B a leady',
              paragraphs: [
                'Hlídáme formuláře, chatovací a rezervační widgety a tok leadů do CRM. Lead, který formulář odešle, ale do CRM nedorazí, je drahá chyba.',
                '<a href="/reseni/b2b-a-lead-generation">Měření pro B2B a lead generation</a>',
              ],
            },
            {
              id: 'velka-firma',
              label: 'Velká firma',
              paragraphs: [
                'Více týmů a agentur v jednom GTM, časté releasy a požadavky na auditní stopu. Nastavíme práva podle rolí, pravidla publikace, release log a SLA, které zapadne do ITSM procesu.',
                'Spolupracujeme s interním týmem, nenahrazujeme ho.',
                '<a href="/reseni/velke-firmy">Měření pro velké firmy</a>',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Co dělá správce webu?',
      a: 'Správce webu se stará o to, aby web technicky fungoval: aktualizuje systém a doplňky, zálohuje, hlídá dostupnost a bezpečnost a řeší chyby. Často k tomu patří i úpravy obsahu. Naše správa míří jinam. Obsah a grafiku neděláme, zato hlídáme to, co běžný správce obvykle neřeší: že po každé změně webu dál fungují měřicí kódy, datová vrstva a souhlas s cookies a že čísla v GA4 a reklamních systémech odpovídají skutečnosti.',
    },
    {
      q: 'Kolik stojí správa webu?',
      a: 'Ceník neuvádíme, protože rozsah se liší web od webu. Po vstupní kontrole dostanete pevnou měsíční částku. Rozhoduje počet webů a domén, platforma, počet cest a konverzí, které hlídáme, a jak často vydáváte nové verze. Dále moduly, které si vyberete, tedy hlídání měření, technická správa nebo release partner, úroveň SLA a rozsah drobných úprav měření. Nástroje a infrastruktura, třeba hosting nebo Google Cloud, běží na vašich účtech a platíte je přímo dodavatelům.',
    },
    {
      q: 'Upravujete i texty, obrázky a nové stránky?',
      a: 'Ne. Nejsme webové studio – obsah, grafiku a vývoj nových funkcí nechte marketingu, studiu nebo vývojářům. My se postaráme, aby nové stránky a funkce správně měřily: dodáme zadání datové vrstvy, zkontrolujeme je před nasazením a ohlídáme po něm.',
    },
    {
      q: 'Jak poznáte, že se rozbilo měření?',
      a: 'Dvěma způsoby. Automatický test v prohlížeči projde po každém nasazení a jednou denně klíčové cesty, například produkt, košík a objednávku v testovacím režimu nebo odeslání formuláře. Zkontroluje, že web odeslal správné události s povinnými parametry a jen po souhlasu. Druhá vrstva hlídá data: porovnává počty klíčových událostí s průměrem a s objednávkami v e-shopu. Když něco nesedí, přijde upozornění e-mailem nebo do Slacku a incident řešíme podle SLA.',
    },
    {
      q: 'Web nám vyvíjí jiná agentura. Jak spolupráce funguje?',
      a: 'To je častá situace a službu jsme postavili právě pro ni. Agentura dál vyvíjí. My jí dodáme release checklist, zadání datové vrstvy pro nové funkce a po každém nasazení zkontrolujeme měření. Když najdeme chybu v kódu, pošleme přesný popis s reprodukcí a po opravě ji ověříme. V GTM nastavíme pravidla, kdo smí publikovat, aby se práce nepřekrývala. Pomáhá, když se s vývojáři na začátku potkáme.',
    },
    {
      q: 'Na jakých platformách správu děláte?',
      a: 'Hlídání měření, tedy modul A, funguje na jakékoli platformě, protože testujeme výsledný web v prohlížeči a data v GA4. Rozsah technické správy webu v modulu B domluvíme podle platformy a hostingu. U SaaS e-shopů, jako je Shoptet, Upgates nebo Shopify, řeší aktualizace provozovatel platformy a my hlídáme jejich dopad na měření.',
    },
    {
      q: 'Co je SLA a co v něm garantujete?',
      a: 'SLA je dohoda o úrovni služeb: jak rychle zareagujeme a do kdy se pokusíme problém vyřešit podle jeho závažnosti. Typicky rozlišujeme tři úrovně. Kritická chyba znamená, že web neměří nákupy či leady, tagy běží bez souhlasu nebo je web nedostupný. Pak následují chyby závažné a běžné. Reakční doby a pracovní dobu sepíšeme do smlouvy a v měsíčním reportu je vyhodnocujeme. Opravy v kódu webu závisejí na vývojářích – garantujeme diagnostiku, zadání a ověření.',
    },
    {
      q: 'Hlídáte i cookie lištu a souhlas?',
      a: 'Ano, technicky. Měsíčně a po každé změně lišty kontrolujeme, že Consent Mode má správný výchozí stav a po volbě návštěvníka ho aktualizuje, že web nespouští marketingové tagy před souhlasem a jestli se neobjevily nové cookies nebo domény třetích stran. Nejsme ale advokátní kancelář – soulad textů lišty a zásad s právem posoudí váš právník. Nastavení nebo výměnu lišty řešíme v samostatné službě <a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode</a>.',
    },
    {
      q: 'Potřebujeme mít BigQuery?',
      a: 'Ne. Základní hlídání funguje nad GA4, kde využijeme vlastní statistiky s upozorněním, a nad automatickými testy v prohlížeči. BigQuery ale hlídání výrazně zpřesní: můžeme denně porovnávat přesné počty událostí s objednávkami v e-shopu, hlídat jednotlivé parametry a uchovávat historii incidentů. Pokud export GA4 do BigQuery už máte, využijeme ho. Pokud ne, doporučíme, kdy se vyplatí. Víc na stránce <a href="/sluzby/bigquery">BigQuery a datový sklad</a>.',
    },
    {
      q: 'Kdo má přístupy a co se stane po ukončení spolupráce?',
      a: 'Všechny účty – GA4, GTM, Search Console, reklamní systémy, Google Cloud – zůstávají vaše. My dostaneme uživatelské přístupy s rolí, kterou potřebujeme, a vedeme jejich seznam. Testy a skripty pro hlídání běží na vaší infrastruktuře, nebo je při ukončení předáme. Po skončení spolupráce si přístupy odeberete a dostanete předávací balíček: dokumentaci, release checklist, nastavení upozornění a poslední report.',
    },
  ],

  relatedArticles: [
    { slug: 'ga4-checklist-kvality-dat', title: 'Checklist kvality dat v GA4: 25 kontrol' },
    { slug: 'audit-gtm-kontejneru', title: 'Audit GTM kontejneru: nejčastější chyby a jak udržet pořádek' },
    { slug: 'merici-plan', title: 'Měřicí plán: jak naplánovat měření dřív, než vznikne první tag' },
    { slug: 'consent-mode-v2-pruvodce', title: 'Consent Mode v2: kompletní průvodce' },
    { slug: 'proc-nesedi-data', title: 'Proč nesedí čísla: GA4 vs. Google Ads vs. Meta vs. administrace e-shopu' },
  ],

  relatedPages: ['sluzby/audit-mereni', 'sluzby/technicky-audit-webu', 'sluzby/google-tag-manager'],

  contact: {
    formId: 'lp-sprava',
    topics: ['sprava'],
    title: 'Ať vaše měření nepřestane fungovat',
    lead: 'Napište nám, nebo rovnou vyplňte formulář. Na úvodní třicetiminutové konzultaci zjistíme, kdo vám web vyvíjí, jak často vydáváte nové verze a co je potřeba hlídat. Pak navrhneme rozsah správy.',
    placeholder:
      'Např. web nám vyvíjí externí agentura, release je každý týden a měření nákupů se nám už několikrát rozbilo…',
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
