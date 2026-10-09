/* ==========================================================================
   Cookie lišta + Google Consent Mode v2 (Anna Novotná)
   Ukládá granulární souhlas, předává ho do Google Consent Mode i do
   dataLayeru a umožňuje ho kdykoli změnit. Bez závislostí.
   ========================================================================== */
(function () {
	'use strict';

	var COOKIE = 'an_consent';
	var MAX_AGE = 60 * 60 * 24 * 180; // 180 dní

	var bar = document.getElementById('cookie-consent');
	if (!bar) return;

	var options = bar.querySelector('.cc__options');
	var cbAnalytics = bar.querySelector('#cc-analytics');
	var cbMarketing = bar.querySelector('#cc-marketing');
	var saveBtn = bar.querySelector('.cc__save');

	function gtagSafe() {
		if (typeof window.gtag === 'function') {
			window.gtag.apply(window, arguments);
		}
	}

	function readConsent() {
		var m = document.cookie.match(/(?:^|; )an_consent=([^;]+)/);
		if (!m) return null;
		try { return JSON.parse(decodeURIComponent(m[1])); } catch (e) { return null; }
	}

	function writeConsent(c) {
		var secure = location.protocol === 'https:' ? ';secure' : '';
		document.cookie = COOKIE + '=' + encodeURIComponent(JSON.stringify(c)) +
			';path=/;max-age=' + MAX_AGE + ';samesite=Lax' + secure;
	}

	function apply(c, eventName) {
		gtagSafe('consent', 'update', {
			analytics_storage: c.analytics ? 'granted' : 'denied',
			ad_storage: c.marketing ? 'granted' : 'denied',
			ad_user_data: c.marketing ? 'granted' : 'denied',
			ad_personalization: c.marketing ? 'granted' : 'denied',
			personalization_storage: c.marketing ? 'granted' : 'denied'
		});
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: eventName || 'cookie_consent_update',
			consent_analytics: !!c.analytics,
			consent_marketing: !!c.marketing
		});
	}

	function choose(analytics, marketing) {
		var c = { analytics: !!analytics, marketing: !!marketing, ts: Date.now() };
		writeConsent(c);
		apply(c, 'cookie_consent_update');
		hide();
	}

	function show(prefill) {
		var stored = readConsent();
		if (cbAnalytics) cbAnalytics.checked = prefill && stored ? !!stored.analytics : false;
		if (cbMarketing) cbMarketing.checked = prefill && stored ? !!stored.marketing : false;
		bar.hidden = false;
	}

	function hide() { bar.hidden = true; }

	function openSettings() {
		if (options) options.hidden = false;
		if (saveBtn) saveBtn.hidden = false;
	}

	// Kliknutí na tlačítka lišty
	bar.addEventListener('click', function (e) {
		var t = e.target.closest('[data-cc]');
		if (!t) return;
		var action = t.getAttribute('data-cc');
		if (action === 'accept') {
			choose(true, true);
		} else if (action === 'reject') {
			choose(false, false);
		} else if (action === 'settings') {
			openSettings();
		} else if (action === 'save') {
			choose(cbAnalytics && cbAnalytics.checked, cbMarketing && cbMarketing.checked);
		}
	});

	// Odkaz „Nastavení cookies“ (v patičce) znovu otevře lištu s předvyplněním
	document.addEventListener('click', function (e) {
		var opener = e.target.closest('[data-cc-open]');
		if (!opener) return;
		e.preventDefault();
		show(true);
		openSettings();
	});

	// Při první návštěvě (bez uložené volby) lištu zobraz
	if (!readConsent()) {
		show(false);
	}
})();
