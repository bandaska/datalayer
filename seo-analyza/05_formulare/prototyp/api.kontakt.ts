// app/routes/api.kontakt.ts
// React Router v7 (framework mode, SSR na Cloud Run) – server action pro nativní kontaktní formulář.
// Nahrazuje HubSpot embed. Formulář posílá POST multipart/form-data na /api/kontakt
// (fetch z kontakt.js, nebo klasický POST bez JS → redirect na /dekujeme).
//
// Proměnné prostředí (Secret Manager / Cloud Run env):
//   TURNSTILE_SECRET   – Cloudflare Turnstile secret key
//   RESEND_API_KEY     – nebo jiný e-mailový provider (SMTP, Postmark, SES…)
//   LEAD_TO            – kam posílat poptávky, např. one@datalayer.cz
//   LEAD_WEBHOOK_URL   – volitelně: Slack / Make / n8n / CRM webhook

import type { ActionFunctionArgs } from "react-router";

const TOPICS = new Set(["ga4", "gtm", "server-side", "consent", "konverze", "bigquery", "audit"]);

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}

async function verifyTurnstile(token: string | null, ip: string | null) {
  if (!process.env.TURNSTILE_SECRET) return true; // dev
  if (!token) return false;
  const body = new URLSearchParams({ secret: process.env.TURNSTILE_SECRET, response: token });
  if (ip) body.set("remoteip", ip);
  const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
  const d = (await r.json()) as { success: boolean };
  return d.success === true;
}

export async function action({ request }: ActionFunctionArgs) {
  const isAjax = request.headers.get("X-Requested-With") === "XMLHttpRequest";
  const fd = await request.formData();
  const get = (k: string) => String(fd.get(k) ?? "").trim();

  // 1) honeypot – boti vyplní skryté pole „website“ → tváříme se, že je vše OK
  if (get("website")) return isAjax ? json({ ok: true }) : Response.redirect(new URL("/dekujeme", request.url), 303);

  // 2) validace
  const jmeno = get("jmeno").slice(0, 120);
  const email = get("email").slice(0, 200);
  const telefon = get("telefon").slice(0, 40);
  const web = get("web").slice(0, 200);
  const zprava = get("zprava").slice(0, 5000);
  const temata = fd.getAll("tema").map(String).filter((t) => TOPICS.has(t));
  const formId = get("form_id") || "kontakt";
  const errors: Record<string, string> = {};
  if (!jmeno) errors.jmeno = "Vyplňte prosím jméno.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Zkontrolujte prosím e-mail.";
  if (!zprava) errors.zprava = "Napište prosím, co řešíte.";
  if (Object.keys(errors).length) return json({ ok: false, message: "Zkontrolujte prosím zvýrazněná pole.", errors }, 422);

  // 3) anti-spam
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const human = await verifyTurnstile(fd.get("cf-turnstile-response") as string | null, ip);
  if (!human) return json({ ok: false, message: "Ověření proti spamu selhalo. Zkuste to prosím znovu." }, 400);

  // 4) doručení poptávky
  const leadId = `L-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
  const text = [
    `Nová poptávka ${leadId} (${formId})`,
    `Jméno: ${jmeno}`, `E-mail: ${email}`, `Telefon: ${telefon || "-"}`, `Web: ${web || "-"}`,
    `Témata: ${temata.join(", ") || "-"}`, `Stránka: ${request.headers.get("referer") ?? "-"}`, "", zprava,
  ].join("\n");

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "web@datalayer.cz",
        to: [process.env.LEAD_TO ?? "one@datalayer.cz"],
        reply_to: email,
        subject: `Poptávka z webu: ${temata.join(", ") || "obecná"} – ${jmeno}`,
        text,
      }),
    });
    if (process.env.LEAD_WEBHOOK_URL) {
      // volitelně CRM / Slack – bez osobních údajů navíc, jen co je potřeba
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadId, formId, jmeno, email, telefon, web, temata, zprava }),
      });
    }
  } catch (e) {
    console.error("lead delivery failed", leadId, e);
    return json({ ok: false, message: "Zprávu se nepodařilo odeslat. Napište nám prosím přímo na one@datalayer.cz." }, 502);
  }

  // 5) odpověď – leadId vrací klient do dataLayer (deduplikace, offline konverze z CRM)
  return isAjax
    ? json({ ok: true, leadId, message: "Děkujeme, ozveme se do 1 pracovního dne." })
    : Response.redirect(new URL(`/dekujeme?lead=${leadId}`, request.url), 303);
}
