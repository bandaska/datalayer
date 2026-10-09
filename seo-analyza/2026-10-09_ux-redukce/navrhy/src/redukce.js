/*
 * Návrh redukce webu datalayer.cz – 9. 10. 2026
 * Skript aplikuje navržené úpravy na hotovou stránku (stačí vložit do konzole prohlížeče na stagingu),
 * aby šlo výsledek vidět přímo v reálném vzhledu webu. Není to produkční kód – je to přesný seznam zásahů.
 *
 * window.__redukce(cfg)
 *   cfg.keep        – ID sekcí v <main>, které zůstávají (ostatní sekce se odstraní)
 *   cfg.faqKeep     – kolik otázek FAQ ponechat (výchozí 4)
 *   cfg.keepFigures – ponechat v sekci #rozhodnuti tabulku a čísla (výchozí false)
 *   cfg.remove      – další selektory k odstranění
 *   cfg.text        – náhrady textů {selektor: 'nový text'}
 *   cfg.hideMobileBarOnHero – skrýt spodní lištu Zavolat/Napsat, dokud je vidět hero (výchozí true)
 */
window.__redukce = function (cfg) {
  cfg = Object.assign({ keep: null, remove: [], faqKeep: 4, keepFigures: false, text: {}, hideMobileBarOnHero: true }, cfg || {});
  const $ = (q, r) => (r || document).querySelector(q);
  const $$ = (q, r) => Array.from((r || document).querySelectorAll(q));
  const kill = (q, r) => $$(q, r).forEach(e => e.remove());
  const main = $('main');
  const log = [];

  /* ---------- 1. Opravy CSS ---------- */
  const css = document.createElement('style');
  css.id = 'redukce-css';
  css.textContent = `
    /* sekce s jedním sloupcem po odebrání štítků */
    .lp-card--nohead .lp-card__head { display: none; }
    @media (max-width: 640px) { .lp-cards--symptoms .lp-card.lp-card--nohead { display: block; } }
    /* zjednodušené menu */
    .mega--flat { min-width: 300px; }
    .mega--flat ul { list-style: none; margin: 0; padding: 0; }
    .mega--flat .mega__item { padding: 10px 12px; }
    .mega--flat .mega__item > span > span { display: none; }
    /* jednodušší patička */
    .site-footer .site-footer__brand + .small { display: none; }
  `;
  document.head.appendChild(css);
  // Oprava CTA: pravidlo .btn-cta{display:block;width:100%} v @media (max-width:991px) patří jen tlačítku v menu
  Array.from(document.styleSheets).forEach(sh => {
    let rules; try { rules = sh.cssRules; } catch (e) { return; }
    Array.from(rules).forEach(r => {
      if (r.media && /max-width:\s*991px/.test(r.media.mediaText)) {
        Array.from(r.cssRules).forEach(x => { if (x.selectorText === '.btn-cta') { x.selectorText = '.site-menu__cta .btn-cta'; log.push('CSS: .btn-cta → .site-menu__cta .btn-cta'); } });
      }
    });
  });

  /* ---------- 2. Navigace ---------- */
  const services = [
    ['Audit měření', '/sluzby/audit-mereni'],
    ['GA4 a Google Tag Manager', '/sluzby/implementace-ga4'],
    ['Server-side tracking', '/sluzby/server-side-tracking'],
    ['Cookie lišta a Consent Mode', '/sluzby/cookie-lista-consent-mode'],
    ['Měření konverzí', '/sluzby/mereni-konverzi'],
    ['BigQuery a dashboardy', '/sluzby/bigquery'],
  ];
  const menu = $('.site-menu__list');
  if (menu) {
    const megas = $$('li.has-mega', menu);
    // Služby: jeden plochý seznam šesti služeb bez skupin, popisků a odkazu „Všechny služby“
    if (megas[0]) {
      const mega = $('.mega', megas[0]);
      const tmplItem = $('.mega__item', mega);
      mega.classList.add('mega--flat', 'mega--narrow');
      mega.innerHTML = '<ul></ul>';
      const ul = $('ul', mega);
      services.forEach(([t, h]) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = 'mega__item mega__item--plain';
        a.href = h;
        a.innerHTML = '<span><strong>' + t + '</strong></span>';
        li.appendChild(a); ul.appendChild(li);
      });
    }
    // Řešení: rozbalovací menu nahradit dvěma přímými odkazy
    if (megas[1]) {
      const li1 = document.createElement('li');
      li1.innerHTML = '<a class="site-menu__link" href="/reseni/e-shopy">E-shopy</a>';
      const li2 = document.createElement('li');
      li2.innerHTML = '<a class="site-menu__link" href="/reseni/b2b-a-lead-generation">B2B</a>';
      megas[1].replaceWith(li1); li1.after(li2);
    }
    // Blog pryč, dokud nejsou skutečné články
    $$('a.site-menu__link', menu).forEach(a => { if (a.getAttribute('href') === '/blog') a.closest('li').remove(); });
    log.push('menu: 15 položek → 6 služeb + 2 segmenty + O nás');
  }

  /* ---------- 3. Patička ---------- */
  const ft = $('footer.site-footer');
  if (ft) {
    const cols = $$('.row > div', ft);
    // sloupec Služby
    if (cols[1]) $('ul', cols[1]).innerHTML = services.map(([t, h]) => `<li class="mb-1"><a href="${h}">${t}</a></li>`).join('');
    // sloupec Řešení → Pro koho
    if (cols[2]) { $('.site-footer__title', cols[2]).textContent = 'Pro koho'; $('ul', cols[2]).innerHTML = '<li class="mb-1"><a href="/reseni/e-shopy">E-shopy</a></li><li class="mb-1"><a href="/reseni/b2b-a-lead-generation">B2B a lead generation</a></li>'; }
    // sloupec O nás – bez blogu
    if (cols[3]) $$('a', cols[3]).forEach(a => { if (a.getAttribute('href') === '/blog') a.closest('li').remove(); });
  }

  if (!main) return log;

  /* ---------- 4. Sekce mimo seznam „keep“ ---------- */
  if (cfg.keep) {
    $$(':scope > section, :scope > header', main).forEach(s => {
      const id = s.id || (s.matches('header, .hero-section') ? 'hero' : '');
      if (!cfg.keep.includes(id)) { log.push('sekce pryč: #' + (id || s.className)); s.remove(); }
    });
  }

  /* ---------- 5. Prvky, které nevedou k formuláři ---------- */
  kill('.eyebrow', main);                                  // nadtitulky (hero i sekce)
  kill('.crumbs', main);                                   // drobečková navigace (zůstává ve strukturovaných datech)
  kill('.hero-micro, .lp-hero__micro', main);              // mikrotext pod CTA
  kill('.lp-hero__trust', main);                           // trojice „trust“ bodů
  $$('.hero-ctas, .lp-hero__ctas', main).forEach(w => $$('a', w).slice(1).forEach(a => a.remove())); // druhé CTA
  kill('.lp-card .tag, .lp-card__tags', main);             // mono štítky a čipy platforem na kartách
  kill('.lp-console, .lp-card pre', main);                 // mockupy konzole
  $$('.has-console', main).forEach(e => e.classList.remove('has-console'));
  $$('.lp-card', main).forEach(c => { const h = $('.lp-card__head', c); if (!h || (!h.children.length && !h.textContent.trim())) c.classList.add('lp-card--nohead'); });
  kill('.lp-cards__more', main);                           // tlačítko „Zobrazit další (3)“
  $$('.is-collapsed', main).forEach(e => e.classList.remove('is-collapsed'));
  kill('.lp-note', main);                                  // „Čísla v ukázkách jsou ilustrativní.“
  kill('details.lp-tech', main);                           // „Technické detaily“
  kill('.lp-section--strip, #navazujici', main);           // pás „pokračujte“
  if (!cfg.keepFigures) kill('#rozhodnuti .lp-table-wrap, #rozhodnuti .lp-figures-wrap, #rozhodnuti .lp-figures__note', main);
  // FAQ – nejvýš cfg.faqKeep otázek
  $$('.faq', main).forEach(f => $$(':scope > details', f).slice(cfg.faqKeep).forEach(d => d.remove()));

  /* ---------- 6. Kontaktní blok a formulář ---------- */
  $$('#kontakt', main).forEach(c => {
    kill('.dl-next', c);                                   // tři kroky po odeslání
    kill('.dl-topics', c);                                 // čipy „Co řešíte?“ (téma nese skryté pole form_id)
    const web = $('input[name="web"]', c);
    if (web) { const row = web.closest('.dl-form__row'); web.closest('label').remove(); if (row) row.classList.add('dl-form__row--single'); }
    const ta = $('textarea[name="zprava"]', c);
    if (ta) ta.setAttribute('placeholder', 'Adresa webu a co řešíte, např. „GA4 ukazuje o pětinu méně objednávek než e-shop“');
    const legal = $('.dl-form__legal', c);
    if (legal) legal.innerHTML = 'Údaje použijeme jen k odpovědi. <a href="/zpracovani-osobnich-udaju">Jak s nimi zacházíme</a>';
  });

  cfg.remove.forEach(q => kill(q, main));

  /* ---------- 7. Textové náhrady ---------- */
  Object.entries(cfg.text).forEach(([q, t]) => { const e = $(q); if (e) e.innerHTML = t; });

  /* ---------- 8. Spodní lišta na mobilu až za hero ---------- */
  const bar = $('.mobile-bar');
  const hero = $('.hero-section, .lp-hero, .article-hero', main);
  if (bar && hero && cfg.hideMobileBarOnHero) {
    const upd = () => { bar.style.transform = hero.getBoundingClientRect().bottom > 0 ? 'translateY(110%)' : ''; };
    bar.style.transition = 'transform .2s'; upd(); window.addEventListener('scroll', upd, { passive: true });
  }
  return log;
};
