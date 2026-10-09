import type { SiteTexts } from '../schema';
import { DEFAULT_NEXT_STEPS, DEFAULT_PAGE_TEXTS, DEFAULT_PROCESS, DEFAULT_THANK_YOU_LINKS } from '../textDefaults';

// Výchozí texty webu mimo stránky (kontaktní formulář, cookie lišta, blog,
// děkovací a chybová stránka) – po migraci se editují v administraci (Texty webu).

export const DEFAULT_TEXTS: SiteTexts = {
  contact: {
    eyebrow: 'Kontakt',
    defaultTitle: 'Napište nám, co řešíte',
    leadWithPhone:
      'Napište nám, zavolejte nebo vyplňte formulář. Na úvodní konzultaci projdeme vaše měření a řekneme, co opravit jako první – nezávazně a zdarma.',
    leadWithoutPhone:
      'Napište nám e-mail nebo vyplňte formulář. Na úvodní konzultaci projdeme vaše měření a řekneme, co opravit jako první – nezávazně a zdarma.',
    defaultPlaceholder: 'Krátce napište, co řešíte…',
    legal:
      'Údaje použijeme jen k odpovědi na zprávu a případné nabídce. <a href="/zpracovani-osobnich-udaju">Jak s nimi zacházíme</a>. Žádný newsletter, žádný spam.',
    // žádné sliby lhůt (rozhodnutí klienta) – prázdná poznámka se nezobrazí
    note: '',
    submit: 'Odeslat zprávu',
    successTitle: 'Děkujeme, zpráva dorazila',
    successText: 'Ozveme se vám na {email}.',
    successPhone: 'Pokud to spěchá, zavolejte na {phone}.',
    // web zatím nemá kontaktní osobu – s prázdným jménem se karta u formuláře nezobrazí
    personName: '',
    personNote: '',
    nextSteps: DEFAULT_NEXT_STEPS,
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
    title: 'Děkujeme, zpráva dorazila',
    text: 'Ozveme se vám e-mailem.',
    errorTitle: 'Zprávu se nepodařilo odeslat',
    back: 'Zpět na úvod',
    links: DEFAULT_THANK_YOU_LINKS,
  },
  notFound: {
    title: 'Stránka neexistuje',
    text: 'Tuto stránku jsme nenašli. Možná jsme ji přesunuli.',
    home: 'Zpět na úvod',
    services: 'Přehled služeb',
  },
  organization: {
    description:
      'Webová analytika a měření pro e-shopy, B2B firmy a velké firmy: implementace GA4, Google Tag Manager, server-side tracking, Consent Mode v2, BigQuery a dashboardy.',
  },
  process: DEFAULT_PROCESS,
  page: DEFAULT_PAGE_TEXTS,
};
