import type { MetaFunction } from 'react-router';
import { SimplePage } from '~/components/SimplePage';
import { openConsentSettings } from '~/lib/consent';
import { breadcrumbLd, seoMeta } from '~/lib/seo';

const PATH = '/cookies';

export const meta: MetaFunction = () =>
  seoMeta({
    title: 'Zásady cookies | datalayer.cz',
    description:
      'Které cookies web datalayer.cz používá, k čemu slouží a jak dlouho platí. Analytické a marketingové cookies jen se souhlasem, volbu můžete kdykoli změnit.',
    path: PATH,
    jsonLd: breadcrumbLd([
      { name: 'Úvod', path: '/' },
      { name: 'Zásady cookies', path: PATH },
    ]),
  });

const ROWS: [string, string, string, string][] = [
  ['dl_consent', 'Uloží vaši volbu v cookie liště.', '180 dní', 'Nezbytné'],
  ['dl_admin_session', 'Přihlášení do administrace webu, týká se jen správců.', 'sedm dní', 'Nezbytné'],
  ['_ga, _ga_<ID>', 'Google Analytics 4 rozlišuje návštěvníky a jejich návštěvy.', 'dva roky', 'Analytické'],
  ['_gcl_au, _gcl_aw', 'Google Ads měří konverze z reklam.', 'devadesát dní', 'Marketingové'],
  ['_fbp', 'Meta pixel měří konverze a publikum pro reklamy na Facebooku a Instagramu.', 'devadesát dní', 'Marketingové'],
];

export default function Cookies() {
  return (
    <SimplePage
      title="Zásady cookies"
      perex="Cookies jsou malé soubory, které web ukládá do prohlížeče. Nezbytné cookies drží web v chodu, analytické a marketingové používáme jen se souhlasem."
      path={PATH}
    >
      <p>
        <button type="button" className="btn btn-outline-custom" onClick={openConsentSettings}>
          [ Změnit nastavení cookies ]
        </button>
      </p>

      <h2>Jak souhlas funguje</h2>
      <p>
        Dokud v cookie liště nevyberete, web neukládá žádné analytické ani reklamní cookies. Měřicí nástroje
        Googlu v tu chvíli dostávají jen signál, že souhlas chybí (Google Consent Mode v2, výchozí stav
        „denied“). Odmítnout jde stejně snadno jako přijmout a volbu můžete kdykoli změnit odkazem
        Nastavení cookies v patičce. Postupujeme podle § 89 odst. 3 zákona č. 127/2005 Sb. a GDPR.
      </p>

      <h2>Přehled cookies</h2>
      <div className="lp-table-wrap" role="region" aria-label="Přehled cookies" tabIndex={0}>
        <table className="lp-table lp-table--light">
          <thead>
            <tr>
              <th scope="col">Název</th>
              <th scope="col">K čemu slouží</th>
              <th scope="col">Platnost</th>
              <th scope="col">Kategorie</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r[0]}>
                <th scope="row">
                  <code>{r[0]}</code>
                </th>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
                <td>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Analytické a marketingové cookies vznikají jen tehdy, když jste s nimi souhlasili a když je na webu
        zapnutý příslušný nástroj. Ochrana formuláře Cloudflare Turnstile cookies neukládá, pracuje jen
        s technickými údaji o prohlížeči.
      </p>
    </SimplePage>
  );
}
