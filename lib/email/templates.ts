// ── HTML email templates ──────────────────────────────────────────────────────
//
// All templates share a base layout for consistent BV branding.
// To add a new template: create a new exported function that calls baseLayout().

import type { ContactFormData, MonkeysMailPayload } from "./types";

// ── Brand tokens (matching the site theme) ───────────────────────────────────

const BRAND = {
  gold: "#C9963B",
  goldLight: "#E5C07B",
  ink: "#1C140D",
  bg: "#FAF6F0",
  bg2: "#FFFFFF",
  text2: "#6E6258",
  serif: "Georgia, 'Times New Roman', serif",
  sans: "'Segoe UI', system-ui, -apple-system, sans-serif",
  logoUrl: "https://businessvolunteers.online/img0.png",
  siteUrl: "https://businessvolunteers.online",
  companyName: "Business Volunteers",
};

// ── Base layout wrapper ──────────────────────────────────────────────────────

function baseLayout(title: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <style>
    body { margin:0; padding:0; background:${BRAND.bg}; font-family:${BRAND.sans}; color:${BRAND.ink}; }
    .container { max-width:600px; margin:0 auto; padding:0; }
    .header { background:${BRAND.ink}; padding:28px 32px; text-align:center; }
    .header img { height:36px; width:auto; }
    .header-text { color:#fff; font-family:${BRAND.serif}; font-size:18px; font-weight:700; margin-top:10px; }
    .body { background:${BRAND.bg2}; padding:36px 32px; }
    .gold-bar { height:4px; background:linear-gradient(90deg, ${BRAND.gold}, ${BRAND.goldLight}); }
    .footer { padding:24px 32px; text-align:center; font-size:12px; color:${BRAND.text2}; }
    .footer a { color:${BRAND.gold}; text-decoration:none; }
    h1 { font-family:${BRAND.serif}; font-size:22px; font-weight:700; color:${BRAND.ink}; margin:0 0 18px; }
    p { font-size:14px; line-height:1.75; color:${BRAND.ink}; margin:0 0 14px; }
    .label { font-size:11px; font-weight:700; color:${BRAND.gold}; text-transform:uppercase; letter-spacing:2px; margin:0 0 4px; }
    .value { font-size:14px; color:${BRAND.ink}; margin:0 0 16px; }
    .btn { display:inline-block; background:${BRAND.ink}; color:#fff; padding:14px 32px; border-radius:50px; font-size:13.5px; font-weight:800; text-decoration:none; }
    .divider { border:none; border-top:1px solid rgba(28,20,13,0.09); margin:22px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${BRAND.logoUrl}" alt="${BRAND.companyName}" />
      <div class="header-text">${BRAND.companyName}</div>
    </div>
    <div class="gold-bar"></div>
    <div class="body">
      ${bodyHtml}
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} ${BRAND.companyName} &middot; Noida Sector 62, UP 201309</p>
      <p>
        <a href="${BRAND.siteUrl}">Website</a> &middot;
        <a href="https://wa.me/918586989832">WhatsApp</a> &middot;
        <a href="mailto:contact.businessvolunteers@gmail.com">Email</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

// ── Template: Contact form notification (sent to BV team) ────────────────────

export function contactFormNotification(data: ContactFormData): MonkeysMailPayload {
  const domain = process.env.MONKEYSMAIL_DOMAIN || "mail.businessvolunteers.online";
  const to = process.env.CONTACT_EMAIL_TO || "contact.businessvolunteers@gmail.com";

  const serviceRow = data.service
    ? `<div class="label">Service Interested In</div><div class="value">${escapeHtml(data.service)}</div>`
    : "";

  const phoneRow = data.phone
    ? `<div class="label">Phone / WhatsApp</div><div class="value">${escapeHtml(data.phone)}</div>`
    : "";

  const html = baseLayout(
    `New Enquiry from ${data.name}`,
    `
    <h1>📩 New Contact Form Submission</h1>
    <p>A visitor just submitted the contact form on the website.</p>
    <hr class="divider" />
    <div class="label">Name</div>
    <div class="value">${escapeHtml(data.name)}</div>
    <div class="label">Email</div>
    <div class="value"><a href="mailto:${escapeHtml(data.email)}" style="color:${BRAND.gold}">${escapeHtml(data.email)}</a></div>
    ${phoneRow}
    ${serviceRow}
    <div class="label">Message</div>
    <div class="value" style="white-space:pre-wrap">${escapeHtml(data.message)}</div>
    <hr class="divider" />
    <p style="font-size:12px; color:${BRAND.text2}">Reply directly to this email or reach the visitor at the address above.</p>
    `
  );

  return {
    from: `noreply@${domain}`,
    from_name: BRAND.companyName,
    to,
    subject: `New Enquiry from ${data.name} – ${data.service || "General"}`,
    html,
    tags: ["contact-form", "notification"],
  };
}

// ── Template: Auto-reply confirmation (sent to the visitor) ──────────────────

export function contactFormAutoReply(data: ContactFormData): MonkeysMailPayload {
  const domain = process.env.MONKEYSMAIL_DOMAIN || "mail.businessvolunteers.online";

  const html = baseLayout(
    "We received your message!",
    `
    <h1>Thank you, ${escapeHtml(data.name)}!</h1>
    <p>We've received your message and our team will get back to you <strong>within 2 hours</strong> — we mean it.</p>
    <p>In the meantime, here's a summary of what you shared:</p>
    <hr class="divider" />
    ${data.service ? `<div class="label">Service</div><div class="value">${escapeHtml(data.service)}</div>` : ""}
    <div class="label">Your Message</div>
    <div class="value" style="white-space:pre-wrap">${escapeHtml(data.message)}</div>
    <hr class="divider" />
    <p>Need something urgently? Reach us on WhatsApp for an instant response:</p>
    <p style="text-align:center; margin:24px 0;">
      <a href="https://wa.me/918586989832" class="btn" style="background:#25d366;">💬 Chat on WhatsApp</a>
    </p>
    <p style="font-size:12px; color:${BRAND.text2}">This is an automated confirmation. Please do not reply to this email.</p>
    `
  );

  return {
    from: `noreply@${domain}`,
    from_name: BRAND.companyName,
    to: data.email,
    subject: "We received your message — Business Volunteers",
    html,
    tags: ["contact-form", "auto-reply"],
  };
}

// ── Utility ──────────────────────────────────────────────────────────────────

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
