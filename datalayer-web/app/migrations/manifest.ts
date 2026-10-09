/**
 * MANIFEST migrací Firestore – jediný zdroj pravdy o pořadí.
 *
 * PRAVIDLO (CLAUDE.md, docs/migrace.md): každá připravená změna dat nebo
 * struktury ve Firestore (nastavení, import článků, hromadná úprava obsahu…)
 * je soubor `app/migrations/scripts/<YYYYMMDD_nazev>.ts` (export `migration`)
 * a **zároveň** se zapíše na konec tohoto seznamu. Nasazuje se jedním
 * kliknutím na stránce Migrace (/admin/migrations) nebo migrační URL
 * `/migrate?run=1`. Soulad manifestu se soubory hlídá tests/migrations.test.ts.
 *
 * Pořadí je závazné: běh se zastaví na první chybě a další migrace nepouští.
 */
import type { Migration } from './types';
import { migration as m20261009SettingsDefaults } from './scripts/20261009_settings_defaults';
import { migration as m20261009ArticlesSeoFixes } from './scripts/20261009_articles_seo_fixes';
import { migration as m20261009CmsContentImport } from './scripts/20261009_cms_content_import';
import { migration as m20261009LpStihlaSablona } from './scripts/20261009_lp_stihla_sablona';
import { migration as m20261009BezKontaktniOsoby } from './scripts/20261009_bez_kontaktni_osoby';

export const MIGRATIONS: Migration[] = [
  m20261009SettingsDefaults, // výchozí příjemce formuláře v settings/site
  m20261009ArticlesSeoFixes, // opravy původních článků podle SEO auditu
  m20261009CmsContentImport, // stránky, menu a texty webu z kódu do administrace
  m20261009LpStihlaSablona, // štíhlá šablona stránek podle vyhodnocení webu
  m20261009BezKontaktniOsoby, // web bez kontaktní osoby: texty, stránky, autor článků
];
