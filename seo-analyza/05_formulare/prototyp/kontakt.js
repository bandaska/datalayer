/* ==========================================================================
   datalayer.cz – nativní kontaktní formulář (náhrada HubSpotu)
   Vzor: annanovotna.cz/assets/js/kontakt.js – rozšířeno o:
     - form_start (první interakce) a form_error (validace) do dataLayeru
     - GA4 doporučenou událost generate_lead (+ lead_topics, form_id)
     - normalizaci e-mailu dle Google (gmail.com bez teček) před SHA-256
     - předvyplnění tématu podle stránky (data-default-topic)
   Bez závislostí. Bez JS funguje klasický POST (fallback).
   ========================================================================== */
(function () {
  'use strict';

  var forms = document.querySelectorAll('[data-contact-form]');
  if (!forms.length) return;
  window.dataLayer = window.dataLayer || [];

  // ---------- normalizace pro enhanced conversions ----------
  function normalizeEmail(v) {
    var e = (v || '').trim().toLowerCase();
    var at = e.lastIndexOf('@');
    if (at < 1) return e;
    var local = e.slice(0, at), domain = e.slice(at + 1);
    if (domain === 'gmail.com' || domain === 'googlemail.com') {
      local = local.replace(/\./g, '');
    }
    return local + '@' + domain;
  }

  // Telefon do E.164 (české číslo bez předvolby → +420, prefix 00 → +)
  function normalizePhone(v) {
    if (!v) return '';
    var s = v.replace(/[^\d+]/g, '');
    if (s[0] === '+') return '+' + s.slice(1).replace(/\D/g, '');
    var d = s.replace(/\D/g, '');
    if (d.slice(0, 2) === '00') return '+' + d.slice(2);
    if (d.length === 9) return '+420' + d;
    return d ? '+' + d : '';
  }

  function sha256Hex(str) {
    if (!str || !window.crypto || !window.crypto.subtle) return Promise.resolve('');
    return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(str)).then(function (h) {
      return Array.prototype.map.call(new Uint8Array(h), function (b) {
        return b.toString(16).padStart(2, '0');
      }).join('');
    }).catch(function () { return ''; });
  }

  function formId(form) {
    var block = form.closest ? form.closest('[data-form]') : null;
    return (block && block.getAttribute('data-form')) || form.getAttribute('data-contact-form') || 'kontakt';
  }

  function topics(form) {
    return Array.prototype.map.call(form.querySelectorAll('input[name="tema"]:checked'), function (i) { return i.value; });
  }

  // ---------- validace (česky, přístupně) ----------
  var MSG = {
    jmeno: 'Napište prosím, jak vám máme říkat.',
    email: 'Zkontrolujte prosím e-mail – bez něj se vám nemůžeme ozvat.',
    zprava: 'Napište prosím pár slov o tom, co řešíte.'
  };

  function setError(input, msg) {
    var id = input.name + '-err';
    var el = input.parentNode.querySelector('#' + id);
    if (msg) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', id);
      if (!el) {
        el = document.createElement('span');
        el.className = 'dl-form__fielderr';
        el.id = id;
        input.parentNode.appendChild(el);
      }
      el.textContent = msg;
    } else {
      input.removeAttribute('aria-invalid');
      if (el) el.remove();
    }
  }

  function validate(form) {
    var bad = [];
    ['jmeno', 'email', 'zprava'].forEach(function (n) {
      var i = form.querySelector('[name="' + n + '"]');
      if (!i) return;
      var v = (i.value || '').trim();
      var ok = v.length > 0 && (n !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v));
      setError(i, ok ? '' : MSG[n]);
      if (!ok) bad.push(n);
    });
    return bad;
  }

  forms.forEach(function (form) {
    var note = form.querySelector('[data-form-note]');
    var btn = form.querySelector('button[type="submit"]');
    var success = form.querySelector('[data-form-success]');
    var successText = form.querySelector('[data-success-text]');
    var againBtn = form.querySelector('[data-success-again]');
    var defaultNote = note ? note.textContent : '';
    var started = false;

    // předvyplnění tématu podle stránky (např. LP server-side → „server-side“)
    var block = form.closest('[data-default-topic]');
    var preset = block && block.getAttribute('data-default-topic');
    if (preset) {
      preset.split(',').forEach(function (t) {
        var cb = form.querySelector('input[name="tema"][value="' + t.trim() + '"]');
        if (cb) cb.checked = true;
      });
    }

    // lead_form_start – první interakce s formulářem (pro analýzu odpadů)
    form.addEventListener('focusin', function () {
      if (started) return;
      started = true;
      window.dataLayer.push({ event: 'lead_form_start', form_id: formId(form), form_location: location.pathname });
    });

    form.addEventListener('input', function (e) {
      if (e.target.getAttribute('aria-invalid') === 'true') setError(e.target, '');
    });

    function showSuccess(email) {
      if (successText) {
        var section = form.closest('[data-form]') || document;
        var tel = section.querySelector('a[href^="tel:"]');
        successText.textContent = 'Ozveme se vám do 1 pracovního dne' + (email ? ' na ' + email : '') + '.' +
          (tel ? ' Spěchá to? Zavolejte na ' + tel.textContent.trim() + '.' : '');
      }
      if (success) { success.hidden = false; success.querySelector('h3').focus(); }
      form.classList.add('is-sent');
    }

    function resetForm() {
      if (success) success.hidden = true;
      form.classList.remove('is-sent');
      if (btn) btn.disabled = false;
      if (note) { note.textContent = defaultNote; note.className = 'dl-form__note'; }
      var first = form.querySelector('input[name="jmeno"]');
      if (first) first.focus();
    }
    if (againBtn) againBtn.addEventListener('click', resetForm);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = validate(form);
      if (bad.length) {
        window.dataLayer.push({ event: 'lead_form_error', form_id: formId(form), error_fields: bad.join(',') });
        var firstBad = form.querySelector('[aria-invalid="true"]');
        if (firstBad) firstBad.focus();
        return;
      }
      if (btn) btn.disabled = true;
      if (note) { note.textContent = 'Odesílám…'; note.className = 'dl-form__note'; }

      var email = (form.querySelector('[name="email"]') || {}).value || '';
      var phone = (form.querySelector('[name="telefon"]') || {}).value || '';
      var leadTopics = topics(form);

      fetch(form.action, {
        method: 'POST',
        headers: { 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json' },
        credentials: 'same-origin',
        body: new FormData(form)
      })
        .then(function (r) { return r.json().catch(function () { return { ok: r.ok, message: '' }; }); })
        .then(function (d) {
          if (d && d.ok) {
            Promise.all([sha256Hex(normalizeEmail(email)), sha256Hex(normalizePhone(phone))]).then(function (h) {
              window.dataLayer.push({
                event: 'generate_lead',              // GA4 doporučená událost
                form_id: formId(form),
                form_location: location.pathname,
                lead_topics: leadTopics.join(','),     // např. "ga4,server-side"
                lead_id: d.leadId || undefined,        // ID ze serveru – pro deduplikaci/offline konverze
                user_data: {                           // enhanced conversions (jen hash, nikdy plain text)
                  sha256_email_address: h[0] || undefined,
                  sha256_phone_number: h[1] || undefined
                }
              });
            });
            form.reset();
            showSuccess(email.trim());
          } else {
            if (note) { note.textContent = (d && d.message) || 'Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo nám napište e-mail.'; note.className = 'dl-form__note is-err'; }
            if (btn) btn.disabled = false;
            if (window.turnstile && typeof window.turnstile.reset === 'function') { try { window.turnstile.reset(); } catch (err) {} }
            window.dataLayer.push({ event: 'lead_form_error', form_id: formId(form), error_fields: 'server' });
          }
        })
        .catch(function () {
          if (note) { note.textContent = 'Spojení selhalo. Zkuste to prosím znovu.'; note.className = 'dl-form__note is-err'; }
          if (btn) btn.disabled = false;
        });
    });
  });
})();
