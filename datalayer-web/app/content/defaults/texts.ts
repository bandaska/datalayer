import type { SiteTexts } from '../schema';
import { DEFAULT_FORM_INTRO, DEFAULT_PAGE_TEXTS, DEFAULT_PROCESS, DEFAULT_THANK_YOU_LINKS } from '../textDefaults';

// Výchozí texty webu mimo stránky (kontaktní formulář, cookie lišta, blog,
// děkovací a chybová stránka) – po migraci se editují v administraci (Texty webu).

export const DEFAULT_TEXTS: SiteTexts = {
  // formulář a hlášky podle auditu z 2. listopadu 2026 (G05)
  contact: {
    formIntro: DEFAULT_FORM_INTRO,
    defaultTitle: 'Proberme vaše měření',
    leadWithPhone:
      'Napište adresu webu a stručně popište, co potřebujete vyřešit. Na úvodní konzultaci upřesníme zadání a navrhneme další postup. Konzultace je nezávazná a zdarma.',
    leadWithoutPhone:
      'Napište adresu webu a stručně popište, co potřebujete vyřešit. Na úvodní konzultaci upřesníme zadání a navrhneme další postup. Konzultace je nezávazná a zdarma.',
    // nápověda pod popiskem zprávy (ne placeholder)
    defaultPlaceholder: 'Například rozdíly v objednávkách, nové měření nebo propojení s CRM.',
    legal:
      'Údaje z formuláře použijeme k vyřízení vaší poptávky. Informace o dalším zpracování najdete na stránce <a href="/zpracovani-osobnich-udaju">Zpracování osobních údajů</a>.',
    // žádné sliby lhůt (rozhodnutí klienta) – prázdná poznámka se nezobrazí
    note: '',
    submit: 'Odeslat poptávku',
    successTitle: 'Děkujeme, poptávku jsme přijali',
    successText: 'Ozveme se na uvedený e-mail.',
    successPhone: 'Pokud to spěchá, zavolejte na {phone}.',
    // web zatím nemá kontaktní osobu – s prázdným jménem se karta u formuláře nezobrazí
    personName: '',
    personNote: '',
  },
  cookieBar: {
    title: 'Cookies na tomto webu',
    text: 'Analytické a marketingové cookies k měření návštěvnosti a kampaní použijeme jen s vaším souhlasem. Volbu změníte kdykoli v patičce. Podrobnosti najdete v <a href="/cookies">zásadách cookies</a>.',
    necessary: '<strong>Nezbytné</strong> – základní chod webu a ochrana formuláře proti spamu. Vždy aktivní.',
    analytics: '<strong>Analytické</strong> – měření návštěvnosti přes Google Analytics 4.',
    marketing: '<strong>Marketingové</strong> – měření kampaní a remarketing v Google Ads, Metě a Skliku.',
    reject: 'Odmítnout vše',
    settings: 'Nastavení',
    save: 'Uložit volbu',
    accept: 'Přijmout vše',
  },
  blog: {
    seoTitle: 'Blog o měření, GA4 a server-side trackingu | datalayer.cz',
    seoDescription:
      'Návody k GA4, Google Tag Manageru, Consent Mode v2, server-side trackingu a BigQuery. S diagramy, kódem a odkazy na dokumentaci, bez marketingového zjednodušování.',
    eyebrow: 'Blog',
    title: 'Vysvětlujeme, jak měření doopravdy funguje',
    perex:
      'Návody k GA4, Google Tag Manageru, Consent Mode v2, server-side trackingu a BigQuery. Píšeme o tom, co sami řešíme na projektech, s diagramy, kódem a odkazy na dokumentaci.',
    empty: 'První články právě připravujeme.',
    readMore: 'Číst článek',
    ctaTitle: 'Napište nám, co řešíte',
    ctaLead: 'Napište, s čím si nevíte rady, a řekneme, kde začít.',
    ctaPlaceholder: 'Napište, s čím si nevíte rady…',
  },
  thankYou: {
    title: 'Děkujeme, poptávku jsme přijali',
    text: 'Ozveme se na uvedený e-mail.',
    errorTitle: 'Poptávku se nepodařilo odeslat',
    back: 'Zpět na úvod',
    links: DEFAULT_THANK_YOU_LINKS,
  },
  notFound: {
    title: 'Stránka neexistuje',
    text: 'Tuto stránku jsme nenašli. Možná jsme ji přesunuli.',
    home: 'Zpět na úvod',
  },
  organization: {
    description:
      'Webová analytika a měření pro e-shopy a B2B firmy: GA4 a Google Tag Manager, server-side tracking, cookie lišta a Consent Mode v2, měření konverzí, BigQuery a dashboardy.',
  },
  process: DEFAULT_PROCESS,
  page: DEFAULT_PAGE_TEXTS,
};
