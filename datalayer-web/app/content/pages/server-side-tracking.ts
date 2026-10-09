import type { LandingPageContent } from '../types';

// Zdroj: seo-analyza/03_landing-pages/04_server-side-tracking.md (návrh v1, 8. října 2026).
// Dokud klient nedodá podklady, stránka neobsahuje: počet implementací a sGTM na
// datalayer.cz v trust baru, loga klientů, případovou studii (MiniCase), délky kroků
// a typickou délku projektu, větu „bez naší přirážky“, délku podpory po spuštění,
// kontrolu nákladů v rámci správy, kanál alertů, partnerství s hostingy,
// infrastrukturu jako kód a výčet e-shopových platforem. Řádek Microsoft Ads
// v tabulce platforem chybí, dokud zadání neověří serverové API Microsoftu.
// Ilustrační mockup monitoringu s fiktivními čísly stránka vynechává.

export const page: LandingPageContent = {
  path: 'sluzby/server-side-tracking',
  kind: 'service',
  navTitle: 'Server-side tracking',
  tagline: 'měření na vaší doméně',
  pictogram: 'serverside',
  menuGroup: 'sber',

  seo: {
    title: 'Server-side tracking – měření na vaší doméně | datalayer.cz',
    description:
      'Server-side GTM na vaší doméně a ve vašem Google Cloudu. Meta CAPI, Google Ads, GA4 i Sklik přes server, v souladu se souhlasem. Konzultace zdarma.',
  },

  hero: {
    eyebrow: 'server-side GTM',
    h1: 'Server-side tracking na vaší doméně a vašem cloudu',
    subtitle:
      'Nasadíme server-side Google Tag Manager na subdoménu webu a do Google Cloudu, který patří vám. Data pro GA4, Google Ads, Metu, Sklik a TikTok pak odcházejí přes server, který máte pod kontrolou – vždy podle souhlasu návštěvníka.',
    quickAnswer:
      'Server-side tracking přesouvá odesílání měřicích dat z prohlížeče na server na vaší doméně. Prohlížeč pošle událost jednou – na server-side GTM – a ten ji podle pravidel a souhlasu návštěvníka předá do GA4, Google Ads, Meta Conversions API nebo Skliku. Získáte kontrolu nad tím, co a komu odchází. Na povinnosti souhlasu to nic nemění.',
    primaryCta: { label: 'Konzultovat architekturu', href: '#kontakt' },
    secondaryCta: { label: 'Jak to funguje', href: '#diagram' },
    microcopy: 'Úvodní konzultace je zdarma. Provoz serveru platíte napřímo Googlu nebo hostingu.',
  },

  trust: [
    'Server běží ve vašem Google Cloudu, faktury chodí od Googlu',
    'Kontejnery, dokumentace i přístupy zůstávají vaše',
    'Vlastní hosting neprodáváme',
  ],

  sections: [
    {
      id: 'symptomy',
      eyebrow: 'symptomy',
      title: 'Poznáváte se v některé z těchto situací?',
      lead: 'Server-side tracking dává smysl, když měření funguje, ale narazilo na limity prohlížeče, rychlosti nebo kontroly nad daty.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Meta vidí méně nákupů než e-shop',
              text: 'Pixel v prohlížeči zachytí jen část objednávek. Bez Conversions API a deduplikace optimalizuje Meta na neúplná data.',
              pictogram: 'conversion',
              tag: 'meta',
            },
            {
              title: 'Návštěvníci ze Safari se „rozpadají“',
              text: 'Safari zkracuje platnost cookies z JavaScriptu na sedm dní, po prokliku z odkazu s identifikátorem prokliku až na 24 hodin. Vracející se zákazník pak vypadá jako nový a atribuce mizí.',
              pictogram: 'warn',
              tag: 'itp',
            },
            {
              title: 'IT tlačí na rychlost a bezpečnost webu',
              text: 'Desítka marketingových skriptů z cizích domén zpomaluje stránku a komplikuje bezpečnostní politiku CSP.',
              pictogram: 'perf',
              tag: 'perf',
            },
            {
              title: 'Bezpečnost nebo DPO chtějí vědět, co komu odchází',
              text: 'V prohlížeči posílá každý skript data přímo svému provozovateli. Bez prostředníka nemáte jak doložit ani omezit, co odchází.',
              pictogram: 'gov',
              tag: 'pii',
            },
            {
              title: 'Server-side už máte – jako černou skříňku',
              text: 'Dodavatel provozuje server u sebe, kontejner nevidíte a odchod znamená začít znovu.',
              pictogram: 'serverside',
              tag: 'lock-in',
            },
            {
              title: 'Konverze mimo prohlížeč se do reklam nedostanou',
              text: 'Platbu, kterou brána potvrdí až po návratu, storno, vratku ani schválení v CRM prohlížeč nevidí.',
              pictogram: 'eshop',
              tag: 's2s',
            },
          ],
        },
      ],
    },

    {
      id: 'co-vyresi',
      eyebrow: 'hranice služby',
      title: 'Co server-side tracking vyřeší – a co ne',
      lead: 'Server-side GTM je prostředník mezi webem a reklamními systémy. Silný nástroj, ale ne zázrak.',
      tone: 'dark',
      blocks: [
        {
          type: 'list',
          style: 'check',
          title: 'Co server-side přinese',
          items: [
            '<strong>Kontrolu nad daty.</strong> Před odesláním můžete osobní údaje odstranit nebo zahashovat a poslat jen to, co platforma potřebuje.',
            '<strong>Méně skriptů v prohlížeči.</strong> Jedna knihovna místo několika: rychlejší stránka a jednodušší CSP.',
            '<strong>First-party kontext.</strong> Měřicí endpoint běží na vaší doméně a cookies nastavuje server této domény podle pravidel prohlížeče.',
            '<strong>Spolehlivější konverze do reklam.</strong> Meta Conversions API, rozšířené konverze Google Ads a události z backendu, třeba platby a storna.',
            '<strong>Jeden proud událostí.</strong> Stejné ID objednávky a stejná hodnota pro všechny platformy.',
            '<strong>Auditovatelnost.</strong> Verze kontejneru, logy a přístupová práva máte ve vlastním účtu.',
          ],
        },
        {
          type: 'list',
          style: 'cross',
          title: 'Co server-side neudělá',
          items: [
            '<strong>Nenahradí souhlas.</strong> Kdo cookies odmítne, toho neměříme ani jinou cestou.',
            '<strong>Není nástroj proti blokátorům ani ochraně prohlížečů.</strong> Když návštěvník měření omezí, respektujeme to.',
            '<strong>Neopraví špatnou datovou vrstvu.</strong> Chybu v <code>dataLayer</code> server jen přenese dál.',
            '<strong>Nezaručí úplná data.</strong> Rozdíly mezi systémy zůstanou kvůli atribuci, oknům a modelování.',
            '<strong>Nepoběží bez údržby.</strong> Server potřebuje monitoring, aktualizace a vlastníka.',
            '<strong>Nesníží náklady na nulu.</strong> Provoz serveru stojí každý měsíc peníze.',
          ],
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Server-side nemění nic na povinnosti souhlasu',
          text: 'Podle § 89 odst. 3 zákona č. 127/2005 Sb., o elektronických komunikacích, potřebujete k ukládání údajů do zařízení návštěvníka a k přístupu k nim předem prokazatelný souhlas, s výjimkou technicky nezbytného ukládání. Evropský sbor pro ochranu osobních údajů v pokynech 2/2023 řadí pod stejné pravidlo i měřicí pixely, sledování přes URL a unikátní identifikátory. Proto server v našich implementacích dostává s každou událostí stav souhlasu a podle něj rozhoduje, kam smějí data odejít. <em>Nejsme advokátní kancelář – zpracování musí právně posoudit váš právník nebo pověřenec.</em>',
        },
      ],
    },

    {
      id: 'diagram',
      eyebrow: 'architektura',
      title: 'Jak funguje server-side GTM: client-side vs. server-side měření',
      lead: 'Rozdíl je v tom, kdo posílá data reklamním systémům. Při client-side měření je to prohlížeč návštěvníka: každý skript posílá data zvlášť do jiné cizí domény. Při server-side měření pošle prohlížeč událost jednou na váš server a teprve ten ji rozdělí dál.',
      tone: 'light',
      blocks: [
        {
          type: 'flow',
          caption:
            'Server-side měření: prohlížeč pošle jednu událost se stavem souhlasu na server-side GTM na vaší doméně. Server data podle souhlasu rozdělí platformám a přijímá i události z backendu.',
          columns: [
            {
              label: 'Zdroje událostí',
              items: ['prohlížeč: dataLayer, web GTM a stav souhlasu', 'backend nebo CRM: platby, storna a leady přes webhook'],
            },
            {
              label: 'sgtm.vasweb.cz',
              items: ['server-side GTM', 'Cloud Run ve vašem Google Cloudu', 'rozhodnutí podle souhlasu'],
              note: 'jeden požadavek místo pěti',
            },
            {
              label: 'Platformy',
              items: ['GA4', 'Google Ads a rozšířené konverze', 'Meta Conversions API', 'Seznam SEM přes server-to-server', 'TikTok Events API'],
              note: 'Seznam SEM potřebuje i v tomto režimu skript sul.js v prohlížeči.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Client-side vs. server-side měření',
          head: ['Kritérium', 'Client-side měření', 'Server-side GTM'],
          rows: [
            ['Kdo posílá data platformám', 'Prohlížeč, každý skript zvlášť', 'Váš server, prohlížeč posílá událost jen jednou'],
            ['Skripty třetích stran na webu', 'Jeden na každou platformu', 'Méně – Meta Pixel, <code>sul.js</code> a skripty Heureky ale zůstávají'],
            ['Kontrola nad obsahem dat', 'Omezená – co skript sebere, to odešle', 'Plná – data můžete upravit, zahashovat nebo vyřadit'],
            ['Cookies', 'Nastavuje je JavaScript, v Safari platí nejvýš sedm dní', 'Může je nastavit server vaší domény, v mezích pravidel prohlížeče'],
            ['Souhlas návštěvníka', '<strong>Nutný</strong>', '<strong>Stejně nutný</strong> – server jen vynucuje rozhodnutí'],
            ['Události mimo prohlížeč', 'Nejdou', 'Jdou přes webhook nebo API do stejného kontejneru'],
            ['Provozní náklady', 'Žádné navíc', 'Hosting serveru, desítky až stovky dolarů měsíčně'],
            ['Složitost a údržba', 'Nižší', 'Vyšší – infrastruktura, monitoring, aktualizace'],
            ['Auditovatelnost', 'Rozptýlená v prohlížeči', 'Centrálně: verze kontejneru, logy, IAM'],
          ],
        },
      ],
    },

    {
      id: 'hybridni-architektura',
      eyebrow: 'platformy',
      title: 'Hybridní architektura: co jde přes server a co zůstává v prohlížeči',
      lead: 'V praxi stavíme kombinaci. Prohlížeč dál sbírá události z datové vrstvy a stav souhlasu, server je zpracuje a předá platformám. Některé skripty v prohlížeči zůstat musí – vyžaduje to platforma, nebo to doporučuje kvůli deduplikaci.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          caption: 'Co jde přes server a co zůstává v prohlížeči',
          head: ['Platforma', 'Přes server', 'V prohlížeči', 'Deduplikace', 'Na co si dát pozor'],
          rows: [
            [
              '<strong>GA4</strong>',
              'Událost přes GA4 klienta v sGTM',
              'Google tag, který posílá data na vaši doménu',
              '–',
              'Souhlas <code>analytics_storage</code>; volitelně identifikátor klienta ze serveru',
            ],
            [
              '<strong>Google Ads</strong>',
              'Konverze, rozšířené konverze s hashovanými údaji, remarketing',
              'Google tag a zachycení <code>gclid</code>',
              '<code>transaction_id</code>',
              'Od roku 2026 jedno nastavení rozšířených konverzí pro web i leady; signál <code>ad_user_data</code>',
            ],
            [
              '<strong>Meta</strong>',
              'Conversions API s hashovaným e-mailem a telefonem, <code>fbp</code>, <code>fbc</code>, IP a user agentem',
              'Meta Pixel – Meta doporučuje pixel a CAPI souběžně',
              'Stejné <code>event_name</code> a <code>event_id</code>, 48 hodin',
              'Kvalita shody, tedy Event Match Quality',
            ],
            [
              '<strong>Seznam</strong>: Sklik a Seznam Nákupy',
              'Seznam Event Measurement server-to-server',
              'Povinný <code>sul.js</code>; cookies <code>sid</code> a <code>udid</code> vytvoří až po souhlasu <code>ad_storage</code>',
              'Plná deduplikace je podle Seznamu „v přípravě“ – stejnou událost posíláme jen jednou cestou',
              'SEM je v betě, přepnutí účtu je nevratné, testujeme v sandboxu',
            ],
            ['<strong>TikTok</strong>', 'Events API', 'TikTok Pixel', 'Stejná událost a <code>event_id</code>, 48 hodin', 'Konzistentní názvy událostí'],
            [
              '<strong>LinkedIn</strong>',
              'Conversions API',
              'Insight Tag',
              'Stejné <code>eventId</code>; při shodě LinkedIn započítá Insight Tag',
              'Pro každý zdroj vlastní konverzní pravidlo',
            ],
            ['<strong>BigQuery</strong>, volitelně', 'Kopie surových událostí do vaší tabulky', '–', '–', 'Pro audit a srovnání s backendem, náklady zvlášť'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Heureka do server-side architektury nepatří: měřicí skripty běží v šabloně a Ověřeno zákazníky voláme z backendu. Řešíme ji v rámci služby <a href="/sluzby/mereni-konverzi">měření konverzí</a>.',
          ],
        },
      ],
    },

    {
      id: 'hosting',
      eyebrow: 'hosting',
      title: 'Kde server poběží: váš Google Cloud, nebo spravovaný hosting?',
      lead: 'Velkým firmám doporučujeme Google Cloud Run ve vlastním projektu, menším e-shopům může víc vyhovět spravovaný hosting. Implementaci uděláme na kterékoli variantě a vlastní hosting neprodáváme – rozhoduje, kdo bude server vlastnit a spravovat.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption: 'Varianty hostingu server-side GTM',
          head: [
            'Kritérium',
            'Google Cloud Run ve vašem projektu',
            'Stape – spravovaný hosting',
            'DataNostro – český spravovaný hosting',
            'Vlastní infrastruktura – Kubernetes, VM',
          ],
          highlightColumn: 1,
          rows: [
            ['Kdo vlastní účet a fakturaci', 'Vy, faktury chodí od Googlu', 'Vy, nebo agentura', 'Vy, nebo agentura', 'Vy'],
            ['Kde běží data', 'Region podle volby, třeba Frankfurt nebo Varšava', 'Podle plánu a regionu', 'V EU, v Německu', 'Ve vlastním datacentru nebo cloudu'],
            ['Provozní náklady', 'Výkon, logy a síť – rozpis níže', 'Měsíční plán podle počtu požadavků', 'Měsíční plán podle počtu požadavků, fakturace v Kč', 'Interní náklady'],
            ['Škálování a aktualizace', 'Cloud Run škáluje sám, aktualizace řešíme my, nebo interní tým', 'Řeší poskytovatel', 'Řeší poskytovatel', 'Interní tým'],
            ['Doplňky, třeba filtr botů', 'Vlastní konfigurace', 'Hotové doplňky poskytovatele', 'Hotové doplňky poskytovatele', 'Vlastní konfigurace'],
            ['Audit, logy, přístupová práva', 'Ve vlastním IAM a Cloud Logging', 'V rozhraní poskytovatele', 'V rozhraní poskytovatele', 'Ve vlastní správě'],
            ['Odchod k jinému dodavateli', 'Nic nestěhujete', 'Export kontejneru a změna DNS', 'Export kontejneru a změna DNS', 'Nic nestěhujete'],
            [
              'Kdy ji volíme',
              'Velké firmy, regulované obory, požadavky IT a bezpečnosti, víc domén',
              'Rychlý start, menší rozpočet, bez cloudového týmu',
              'Malé a střední české e-shopy, česká fakturace a podpora',
              'Firmy s vlastním platform týmem a přísnými pravidly',
            ],
          ],
        },
      ],
    },

    {
      id: 'naklady',
      eyebrow: 'náklady',
      title: 'Kolik stojí samotný provoz serveru',
      lead: 'Cenu implementace skládáme podle rozsahu. Provoz serveru je samostatná položka, kterou platíte přímo poskytovateli – tady je, z čeho se skládá.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          caption: 'Položky provozu server-side GTM',
          head: ['Položka', 'Google Cloud Run ve vašem projektu', 'Spravovaný hosting', 'Poznámka'],
          rows: [
            [
              'Servery',
              'Google uvádí zhruba 45 dolarů měsíčně za server s jedním vCPU a 0,5 GB paměti a do produkce doporučuje aspoň dva',
              'V ceně plánu',
              'Při vyšší návštěvnosti Cloud Run servery přidá sám, horní limit nastavujeme',
            ],
            ['Preview server pro ladění', 'Jedna malá instance, obvykle zanedbatelná položka', 'V ceně', 'Pro náhled a testování kontejneru'],
            ['Logování', 'Logy nad zhruba milion požadavků měsíčně mohou podle Googlu náklady výrazně zvýšit', 'Podle plánu', 'Nastavíme rozumnou úroveň logů'],
            [
              'Load balancer nebo CDN',
              'Jen pro endpoint na stejné doméně, třeba <code>/metrics</code>, nebo pro víc regionů',
              'Některé plány ho zahrnují',
              'Souvisí s omezením cookies v Safari',
            ],
            ['Síť', 'Podle objemu, u běžných webů malá položka', 'V ceně', '–'],
            ['BigQuery, volitelně', 'Úložiště a dotazy podle objemu', '–', 'Jen pokud chcete surová data'],
            [
              'Plán spravovaného hostingu',
              '–',
              'Stape od sedmnácti dolarů měsíčně za 500 tisíc požadavků při roční platbě, DataNostro od 349 Kč měsíčně za 500 tisíc požadavků',
              'Veřejné ceníky, stav k říjnu 2026',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Ukázkový příklad, ne nabídka',
          text: 'Dvě instance na Cloud Run po zhruba 45–50 dolarech dají přibližně 90–100 dolarů měsíčně. S load balancerem za zhruba osmnáct dolarů a s logy vychází provoz realisticky na 110–150 dolarů měsíčně podle ceníku Google Cloud k říjnu 2026. Region <code>europe-west3</code> ve Frankfurtu patří do dražšího pásma Tier 2 a sezónní špičky, třeba Black Friday, mohou krátkodobě potřebovat víc instancí. Před spuštěním spočítáme odhad v kalkulačce Google Cloud a nastavíme upozornění na rozpočet.',
        },
      ],
    },

    {
      id: 'google-tag-gateway',
      eyebrow: 'gateway',
      title: 'Google Tag Gateway, nebo server-side GTM?',
      lead: 'Google v květnu 2025 spustil Google tag gateway for advertisers, dříve známou jako „first-party mode“. Načítá Google značku z vaší domény přes CDN nebo load balancer a část měřicích požadavků posílá Googlu přes tuto doménu. Jde o jednodušší, ale užší řešení než server-side GTM a oba přístupy můžete kombinovat.',
      tone: 'light',
      blocks: [
        {
          type: 'table',
          caption: 'Google Tag Gateway a server-side GTM',
          head: ['Kritérium', 'Google Tag Gateway', 'Server-side GTM'],
          rows: [
            ['Platformy', 'Jen Google značky: GA4, Google Ads, Floodlight', 'Google, Meta, TikTok, LinkedIn, Seznam, vlastní API, BigQuery'],
            ['Úprava dat před odesláním', 'Ne', 'Ano – odstranění osobních údajů, obohacení o marži nebo stav objednávky'],
            ['Události z backendu', 'Ne', 'Ano'],
            ['Infrastruktura', 'Vaše CDN nebo load balancer: Cloudflare, Akamai, Fastly, Google Cloud', 'Hosting kontejneru a doména'],
            ['Provozní náklady', 'Obvykle nízké, v rámci CDN', 'Hosting serveru podle rozpisu výše'],
            ['Náročnost nasazení', 'Nízká, bez změny značek na webu', 'Střední až vyšší'],
            ['Souhlas', 'Consent Mode platí stejně', 'Consent Mode platí stejně, k tomu pravidla pro ostatní platformy'],
            ['Kdy zvolit', 'Používáte hlavně Google a chcete rychlé zlepšení bez provozu serveru', 'Víc platforem, kontrola nad daty, backendové události, požadavky IT'],
          ],
        },
        {
          type: 'paragraphs',
          items: [
            'Podle Googlu měli inzerenti s gateway o jedenáct procent víc signálů – jde o medián podle načtení Google tagu za období od 9. do 16. dubna 2025. Menším webům, které inzerují hlavně v Google Ads, proto často doporučíme začít gateway a server-side GTM zvážit později.',
          ],
        },
      ],
    },

    {
      id: 'kdy-ne',
      eyebrow: 'kdy ne',
      title: 'Kdy vám server-side doporučíme nenasazovat',
      lead: 'Server-side tracking není první krok a nehodí se každému. V těchto situacích vám rovnou řekneme, že peníze dáte jinam s lepším efektem.',
      tone: 'dark',
      blocks: [
        {
          type: 'table',
          caption: 'Situace, kdy server-side nepomůže',
          head: ['Situace', 'Proč server-side nepomůže', 'Co doporučíme místo toho'],
          rows: [
            [
              'Datová vrstva nebo základní měření nesedí',
              'Server přenese chybná data dál – jen dráž',
              '<a href="/sluzby/audit-mereni">Audit měření</a> a oprava <a href="/sluzby/datova-vrstva">datové vrstvy</a>',
            ],
            [
              'Chybí funkční cookie lišta a Consent Mode',
              'Server musí respektovat souhlas – nejdřív musí být jasné, co smí odejít',
              '<a href="/sluzby/cookie-lista-consent-mode">Cookie lišta a Consent Mode v2</a>',
            ],
            [
              'Malý rozpočet na reklamu a malá návštěvnost',
              'Provoz a údržba se nevrátí v lepší optimalizaci kampaní',
              'Čisté client-side měření, rozšířené konverze Google Ads, případně Google Tag Gateway',
            ],
            [
              'Inzerujete jen v Google Ads',
              'Většinu přínosu dá Google Tag Gateway s rozšířenými konverzemi',
              'Google Tag Gateway a <a href="/sluzby/mereni-konverzi">měření konverzí</a>',
            ],
            [
              'Nikdo nebude server vlastnit a hlídat',
              'Výpadek serveru vyřadí měření všech platforem najednou',
              'Spravovaný hosting a <a href="/sluzby/sprava-webu-a-mereni">správa měření</a>, nebo počkat',
            ],
            [
              'Hlavní problém je atribuce nebo kvalita leadů',
              'Server-side nezmění, jak systémy přiřazují konverze, ani kvalitu poptávek',
              'Offline konverze z CRM, <a href="/reseni/b2b-a-lead-generation">měření pro B2B</a>',
            ],
            [
              'Čekáte úplná data, nebo měření bez souhlasu',
              'To server-side neumí a dělat by to neměl',
              'Realistické cíle: lepší signál u souhlasících a modelování v nástrojích Googlu',
            ],
            [
              'Web nedovolí vlastní subdoménu ani úpravu DNS',
              'Bez vlastní domény chybí hlavní výhoda first-party kontextu',
              'Řešení s provozovatelem webu, jinak odložit',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Nejste si jistí? Na konzultaci řekneme, jestli se vám server-side vyplatí – i když odpověď bude ne.',
        },
      ],
    },

    {
      id: 'co-dostanete',
      eyebrow: 'výstupy',
      title: 'Co od nás dostanete',
      lead: 'Výstup není „zapnutý server“, ale zdokumentovaná architektura, kterou převezme interní tým nebo kterýkoli jiný dodavatel.',
      tone: 'light',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              tag: 'architecture.pdf',
              title: 'Návrh architektury',
              text: 'Co jde přes server, co zůstává v prohlížeči, kde padá rozhodnutí o souhlasu a jaká data dostane která platforma.',
            },
            {
              tag: 'gcp',
              title: 'Infrastruktura ve vašem účtu',
              text: 'Projekt v Google Cloudu, Cloud Run s nejméně dvěma servery, preview server, doména, certifikát, přístupy a rozpočtový alert.',
            },
            {
              tag: 'gtm-web · gtm-server',
              title: 'Webový a serverový kontejner GTM',
              text: 'Verze s popisem a jednotná jmenná konvence.',
            },
            {
              tag: 'events.csv',
              title: 'Mapa událostí',
              text: 'Události z datové vrstvy, jejich parametry a platformy a specifikace <code>event_id</code> pro deduplikaci.',
            },
            {
              tag: 'consent-matrix',
              title: 'Matice souhlasu',
              text: 'Který webový i serverový tag smí běžet při jakém stavu souhlasu.',
            },
            {
              tag: 'test-report',
              title: 'Testovací protokol',
              text: 'Přijatý, odmítnutý i změněný souhlas, nákup, storno, Safari a iOS – s výsledky a srovnáním s backendem.',
            },
            {
              tag: 'monitor',
              title: 'Monitoring',
              text: 'Alerty na výpadek, chybovost a pokles událostí a denní srovnání objednávek v backendu, na serveru, v GA4 a v Metě.',
            },
            {
              tag: 'runbook.md',
              title: 'Provozní příručka',
              text: 'Co dělat při výpadku, jak aktualizovat server, kdo má přístupy a exit plán pro výměnu dodavatele.',
            },
            {
              tag: 'handover',
              title: 'Předání a zaškolení',
              text: 'Schůzka pro marketing a IT a její záznam.',
            },
          ],
        },
      ],
    },

    {
      id: 'postup',
      eyebrow: 'postup',
      title: 'Jak nasazení probíhá',
      lead: 'U velkých firem prodlužuje harmonogram hlavně schvalování přístupů a bezpečnostní revize – s tím počítáme od začátku.',
      tone: 'dark',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Audit a návrh',
              text: 'Projdeme měření, datovou vrstvu, souhlas a reklamní účty a navrhneme architekturu.',
              fromClient: 'Přístup pro čtení do GTM, GA4, Google Ads, Meta Business a Skliku, kontakt na vývojáře',
            },
            {
              title: 'Infrastruktura',
              text: 'Projekt v Google Cloudu, Cloud Run, doména, certifikát, přístupy a rozpočtový alert.',
              fromClient: 'Fakturační účet Google Cloud, úprava DNS, schválení IT',
            },
            {
              title: 'Napojení webu',
              text: 'Google tag začne posílat data na server, GA4 poběží přes server a server dostane stav souhlasu.',
              fromClient: 'Případné úpravy datové vrstvy od vývojáře',
            },
            {
              title: 'Reklamní platformy',
              text: 'Meta CAPI, Google Ads s rozšířenými konverzemi, TikTok a Seznam SEM, deduplikace přes <code>event_id</code>, volitelně webhooky z backendu.',
              fromClient: 'Přístupy do reklamních účtů přes role, ne hesla, a tokeny API',
            },
            {
              title: 'Souběžný běh a validace',
              text: 'Starý i nový způsob měření běží vedle sebe a výsledky denně porovnáváme s backendem.',
              fromClient: 'Export objednávek nebo leadů',
            },
            {
              title: 'Přepnutí a předání',
              text: 'Vypneme duplicity, předáme dokumentaci a monitoring a zaškolíme tým.',
              fromClient: 'Účast na předávací schůzce',
            },
          ],
        },
      ],
    },

    {
      id: 'monitoring',
      eyebrow: 'monitoring',
      title: 'Jak poznáte, že server-side funguje a nevypadl',
      lead: 'Když server vypadne, nepřestane fungovat jedna značka, ale měření všech platforem najednou. Proto je monitoring součást každého nasazení, ne příplatek.',
      tone: 'light',
      blocks: [
        {
          type: 'list',
          style: 'bullet',
          title: 'Co hlídáme',
          items: [
            '<code>uptime</code> – dostupnost měřicího endpointu a upozornění při výpadku',
            '<code>5xx / 4xx</code> – chybovost serveru a odmítnuté požadavky',
            '<code>volume</code> – počet událostí proti obvyklému průběhu dne',
            '<code>purchase diff</code> – denní srovnání objednávek: backend, server, GA4, Meta',
            '<code>dedup</code> a <code>emq</code> – deduplikace a kvalita shody událostí v Metě',
            '<code>consent</code> – změna podílu souhlasů, náhlý skok často znamená chybu lišty',
            '<code>cost</code> – rozpočtový alert v Google Cloudu',
            '<code>versions</code> – kdo a kdy publikoval verzi kontejneru',
          ],
        },
        {
          type: 'paragraphs',
          items: ['Dlouhodobý dohled nad měřením nabízí služba <a href="/sluzby/sprava-webu-a-mereni">Správa webu a měření</a>.'],
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
          group: 'segments',
          items: [
            {
              id: 'enterprise',
              label: 'Velká firma',
              paragraphs: [
                'U velkých firem rozhoduje vlastnictví a kontrola: server ve vlastním Google Cloudu, přístupy přes firemní IAM, region v EU, logy, verzování, matice souhlasu pro DPO a dokumentace pro interní audit. Pracujeme s více doménami a zeměmi, s interním platform týmem i s bezpečnostní revizí. Surová data mohou téct rovnou do firemního BigQuery. Víc o <a href="/reseni/velke-firmy">měření pro velké firmy</a>.',
              ],
            },
            {
              id: 'eshop',
              label: 'E-shop',
              paragraphs: [
                'U e-shopu jde hlavně o nákupy v Metě a Google Ads: Conversions API s deduplikací, rozšířené konverze a stejné ID objednávky všude. Přes server pošleme i události, které prohlížeč nevidí, třeba zaplacení po návratu z platební brány nebo storno. Pro české e-shopy řešíme také Seznam Event Measurement a Heureku.',
              ],
            },
            {
              id: 'b2b',
              label: 'B2B / lead-gen',
              paragraphs: [
                'U poptávek je hodnota až v CRM. Server-side GTM je jedno místo, kam formulář pošle lead s hashovaným e-mailem a kam později CRM pošle informaci, že z leadu je zakázka. Odtud jdou konverze do Google Ads, Mety i LinkedInu. Navazuje na <a href="/reseni/b2b-a-lead-generation">měření pro B2B a lead generation</a>.',
              ],
            },
          ],
        },
      ],
    },
  ],

  faq: [
    {
      q: 'Co je server-side tracking a jak se liší od běžného měření?',
      a: 'Při běžném client-side měření posílá data reklamním systémům prohlížeč návštěvníka – každý skript zvlášť a přímo. Při server-side trackingu pošle prohlížeč událost jednou na server, který běží na vaší doméně, typicky server-side Google Tag Manager. Server ji zpracuje a podle pravidel a souhlasu předá do GA4, Google Ads, Meta Conversions API a dalších platforem. Server-side přináší kontrolu nad obsahem dat, méně skriptů na webu a možnost posílat i události z backendu. Nevýhoda je provozní náklad a nutnost server hlídat.',
    },
    {
      q: 'Je server-side tracking legální? Potřebuju pořád cookie lištu?',
      a: 'Ano, cookie lištu potřebujete dál. Server-side je jen jiná technická cesta, právní pravidla zůstávají stejná. Podle § 89 odst. 3 zákona o elektronických komunikacích potřebujete k ukládání a čtení netechnických údajů v zařízení návštěvníka jeho předchozí souhlas. Evropský sbor pro ochranu osobních údajů do tohoto pravidla řadí i pixely a sledování přes URL. Server-side proto nastavujeme tak, aby s každou událostí dostal stav souhlasu a podle něj data poslal, nebo neposlal. Nejsme advokátní kancelář – právní posouzení zajistí váš právník.',
    },
    {
      q: 'Pomůže server-side proti adblockům a Safari ITP?',
      a: 'Není to cíl ani slib. Pokud návštěvník měření odmítne – souhlasem nebo nástrojem v prohlížeči – respektujeme to. Server-side ale pomůže tam, kde limity prohlížeče dopadají i na souhlasící návštěvníky: cookies, které nastaví server vaší domény, Safari neomezuje stejně jako cookies z JavaScriptu. Safari přitom zkracuje i serverové cookies na sedm dní, pokud měřicí server vyhodnotí jako skrytou třetí stranu, třeba kvůli jiné IP adrese nebo CNAME. Proto u velkých webů zvažujeme provoz na stejné doméně přes CDN nebo load balancer, jak doporučuje i Google. A „konec cookies třetích stran“? Chrome je podle oznámení Googlu z dubna 2025 ponechává a volbu nechává na uživateli – server-side tedy není reakce na jejich zánik.',
    },
    {
      q: 'Kolik stojí provoz serveru a kdo ho platí?',
      a: 'Provoz platíte přímo poskytovateli – Googlu u Cloud Run, případně spravovanému hostingu. Google pro Cloud Run uvádí orientačně 45–50 dolarů měsíčně za instanci a do produkce doporučuje aspoň dvě. Minimální konfigurace tak vychází zhruba na 90–100 dolarů měsíčně, s load balancerem za zhruba osmnáct dolarů a s logy realisticky na 110–150 dolarů měsíčně podle ceníku Google Cloud k říjnu 2026. Navíc může přibýt BigQuery. Spravované hostingy mají měsíční plány podle počtu požadavků. Před spuštěním spočítáme odhad pro konkrétní návštěvnost a nastavíme rozpočtový alert.',
    },
    {
      q: 'Stape, DataNostro, nebo vlastní Google Cloud – co vybrat?',
      a: 'Záleží na tom, kdo má server vlastnit a spravovat. Velkým firmám a regulovaným oborům doporučujeme Google Cloud Run ve vlastním projektu: přístupy, logy i fakturace zůstávají u vás a odchod k jinému dodavateli nic nestojí. Menším e-shopům bez vlastního cloudového týmu obvykle víc vyhoví spravovaný hosting jako Stape nebo DataNostro – rychlejší start, hotové doplňky a správa serveru v ceně plánu. Implementaci uděláme na kterékoli variantě a vlastní hosting neprodáváme.',
    },
    {
      q: 'Jak dlouho trvá nasazení a co od vás potřebujeme?',
      a: 'Délku určuje hlavně souběžný běh, kdy nové měření porovnáváme s backendem, a u velkých firem bezpečnostní revize a schvalování přístupů. Harmonogram s vámi naplánujeme hned v prvním kroku. Potřebujeme přístupy do GTM, GA4 a reklamních účtů přes role, ne hesla, dál fakturační účet Google Cloud, někoho, kdo upraví DNS, a vývojáře pro případné úpravy datové vrstvy.',
    },
    {
      q: 'Z čeho se skládá cena implementace?',
      a: 'Cenu neuvádíme paušálně, protože se liší hlavně podle rozsahu. Rozhoduje, kolik platforem napojujeme, kolik domén a zemí měříme, v jakém stavu je datová vrstva, jestli posíláme i události z backendu nebo CRM a jaké požadavky má IT, třeba na bezpečnostní revizi. Provoz serveru platíte zvlášť a přímo poskytovateli. Po úvodní konzultaci dostanete nabídku s rozpadem na kroky a výstupy.',
    },
    {
      q: 'Co je Google Tag Gateway a nahradí server-side GTM?',
      a: 'Google Tag Gateway načítá Google značku z vaší domény přes CDN nebo load balancer a část požadavků posílá Googlu přes tuto doménu. Je jednodušší a levnější, ale týká se jen Google značek a data neumí upravovat ani přijímat události z backendu. Pokud inzerujete hlavně v Google Ads, může to být dobrý první krok. Pokud potřebujete Metu, TikTok, Seznam, kontrolu nad osobními údaji nebo serverové události, potřebujete server-side GTM. Obojí můžete kombinovat.',
    },
    {
      q: 'Jak zajistíte, aby systémy nezapočítaly konverzi dvakrát?',
      a: 'Každá událost dostane v datové vrstvě unikátní <code>event_id</code>, které posíláme z prohlížeče i ze serveru. Meta podle shody názvu události a <code>event_id</code> duplicitu do 48 hodin zahodí, podobně TikTok a LinkedIn. U Google Ads hlídáme <code>transaction_id</code>. U Seznamu je plná deduplikace teprve v přípravě, proto tam stejnou událost neposíláme z webu i serveru zároveň. Deduplikaci ověřujeme v testovacím protokolu i v monitoringu.',
    },
    {
      q: 'Komu patří data, účty a kontejnery? Co když spolupráci ukončíme?',
      a: 'Vám. Server běží ve vašem Google Cloudu, kontejnery GTM i reklamní účty zůstávají ve vašich účtech a my dostáváme jen role s potřebnými oprávněními. Při ukončení spolupráce odebereme své přístupy podle provozní příručky – měření běží dál beze změny a převezme ho interní tým nebo jiný dodavatel. Na webu přitom stačí málo změn: subdoména nebo cesta, kterou směrujeme na server, a funkční datová vrstva.',
    },
  ],

  relatedArticles: [
    { slug: 'server-side-tracking-pruvodce', title: 'Server-side tracking: průvodce pro e-shopy i firmy' },
    {
      slug: 'propojeni-client-side-a-server-side',
      title: 'Propojení client-side a server-side trackingu: hybridní architektura krok za krokem',
    },
    { slug: 'hosting-server-side-gtm', title: 'Kde provozovat server-side GTM: Stape, Google Cloud Run, nebo český hosting?' },
    { slug: 'google-tag-gateway', title: 'Google Tag Gateway a first-party mode: co to je a čím se liší od server-side GTM' },
    { slug: 'server-side-tracking-a-souhlas', title: 'Je server-side tracking legální? Server-side a souhlas uživatele' },
  ],

  relatedPages: ['sluzby/mereni-konverzi', 'sluzby/cookie-lista-consent-mode', 'sluzby/bigquery'],

  contact: {
    formId: 'lp-server-side',
    topics: ['server-side', 'konverze'],
    title: 'Probereme, jestli se vám server-side vyplatí',
    lead: 'Napište nám e-mail, nebo vyplňte formulář. Na úvodní konzultaci projdeme současné měření a řekneme, jestli server-side dává smysl – a pokud ano, v jaké variantě a s jakými provozními náklady. Nezávazně a zdarma.',
    placeholder:
      'Např. Meta hlásí o třetinu méně nákupů než e-shop, IT nechce další skripty a zvažujeme server-side ve vlastním Google Cloudu…',
    leadType: 'consultation',
  },

  schema: {
    name: 'Server-side tracking přes server-side Google Tag Manager',
    serviceType: 'Server-side tagging a měření konverzí',
    description:
      'Návrh a nasazení server-side Google Tag Manageru na doméně a v Google Cloudu klienta: GA4, Google Ads, Meta Conversions API, Seznam Event Measurement a TikTok Events API přes server, deduplikace, monitoring a dokumentace. Vždy v souladu se souhlasem návštěvníka.',
    audience: 'E-shopy, B2B firmy a velké firmy',
  },
};
