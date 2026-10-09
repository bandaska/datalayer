/* ==========================================================================
   Kontaktní formulář (Anna Novotná)
   Odešle formulář přes fetch, ukáže stav a po úspěchu pošle do dataLayeru
   událost form_submit včetně SHA-256 hashů e-mailu a telefonu (pro enhanced
   conversions v kampaních). Bez závislostí. Funguje i bez JS (fallback POST).
   ========================================================================== */
(function () {
	'use strict';

	var forms = document.querySelectorAll('[data-contact-form]');
	if (!forms.length) return;

	function normalizeEmail(v) {
		return (v || '').trim().toLowerCase();
	}

	// Telefon do podoby blízké E.164 (české číslo bez předvolby → +420,
	// mezinárodní prefix 00 → +).
	function normalizePhone(v) {
		if (!v) return '';
		var s = v.replace(/[^\d+]/g, '');
		if (s[0] === '+') {
			return '+' + s.slice(1).replace(/\D/g, '');
		}
		var digits = s.replace(/\D/g, '');
		if (digits.slice(0, 2) === '00') return '+' + digits.slice(2);
		if (digits.length === 9) return '+420' + digits;
		return digits ? '+' + digits : '';
	}

	// Identifikace formuláře pro dataLayer. Přednost má klíč obalujícího
	// formulářového bloku (data-form), protože ten je pro blok závazný;
	// jinak se vezme klíč stránky z atributu formuláře.
	function formId(form) {
		var block = form.closest ? form.closest('[data-form]') : null;
		var fromBlock = block && block.getAttribute('data-form');
		if (fromBlock) return fromBlock;
		return form.getAttribute('data-contact-form') || 'kontakt';
	}

	function sha256Hex(str) {
		if (!str || !window.crypto || !window.crypto.subtle) return Promise.resolve('');
		var buf = new TextEncoder().encode(str);
		return window.crypto.subtle.digest('SHA-256', buf).then(function (hash) {
			var bytes = new Uint8Array(hash), out = '';
			for (var i = 0; i < bytes.length; i++) {
				out += bytes[i].toString(16).padStart(2, '0');
			}
			return out;
		}).catch(function () { return ''; });
	}

	function pushDataLayer(form, email, phone) {
		Promise.all([sha256Hex(normalizeEmail(email)), sha256Hex(normalizePhone(phone))])
			.then(function (h) {
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					event: 'form_submit',
					form_id: formId(form),
					form_location: location.pathname,
					user_data: {
						sha256_email_address: h[0] || undefined,
						sha256_phone_number: h[1] || undefined
					}
				});
			});
	}

	forms.forEach(function (form) {
		var note = form.querySelector('[data-form-note]');
		var btn = form.querySelector('button[type="submit"]');
		var success = form.querySelector('[data-form-success]');
		var successText = form.querySelector('[data-success-text]');
		var againBtn = form.querySelector('[data-success-again]');
		var defaultNote = note ? note.textContent : '';

		function showSuccess(msg) {
			if (successText && msg) { successText.textContent = msg; }
			if (success) { success.hidden = false; }
			form.classList.add('is-sent');
		}

		function resetForm() {
			if (success) { success.hidden = true; }
			form.classList.remove('is-sent');
			if (btn) { btn.disabled = false; }
			if (note) { note.textContent = defaultNote; note.className = 'contact-form__note'; }
			var first = form.querySelector('input[name="jmeno"]');
			if (first) { first.focus(); }
		}

		if (againBtn) { againBtn.addEventListener('click', resetForm); }

		form.addEventListener('submit', function (e) {
			e.preventDefault();
			if (btn) { btn.disabled = true; }
			if (note) { note.textContent = 'Odesílám…'; note.className = 'contact-form__note'; }

			var email = (form.querySelector('[name="email"]') || {}).value || '';
			var phone = (form.querySelector('[name="telefon"]') || {}).value || '';

			fetch(form.action, {
				method: 'POST',
				headers: { 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json' },
				credentials: 'same-origin',
				body: new FormData(form)
			})
				.then(function (r) { return r.json().catch(function () { return { ok: r.ok, message: '' }; }); })
				.then(function (d) {
					if (d && d.ok) {
						pushDataLayer(form, email, phone);
						form.reset();
						showSuccess(d.message);
					} else {
						if (note) { note.textContent = (d && d.message) || 'Zprávu se nepodařilo odeslat.'; note.className = 'contact-form__note is-err'; }
						if (btn) { btn.disabled = false; }
						// reset Turnstile widgetu, aby šlo odeslat znovu
						if (window.turnstile && typeof window.turnstile.reset === 'function') {
							try { window.turnstile.reset(); } catch (err) {}
						}
					}
				})
				.catch(function () {
					if (note) { note.textContent = 'Spojení selhalo. Zkuste to prosím znovu.'; note.className = 'contact-form__note is-err'; }
					if (btn) { btn.disabled = false; }
				});
		});
	});
})();
