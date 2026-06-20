// ── Email service barrel export ───────────────────────────────────────────────
//
// Usage:
//   import { sendEmail, contactFormNotification, contactFormAutoReply } from "@/lib/email";

export { sendEmail } from "./client";
export { contactFormNotification, contactFormAutoReply } from "./templates";
export type { ContactFormData, EmailResult, EmailError } from "./types";
