// ── TypeScript types for the email service layer ──────────────────────────────

/** Shape of the contact form data coming from the frontend. */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

/** Payload accepted by the Resend API POST /emails endpoint. */
export interface ResendPayload {
  from: string;
  to: string | string[];
  subject: string;
  html: string;
  reply_to?: string;
  tags?: { name: string; value: string }[];
}

/** Successful response from Resend. */
export interface ResendResponse {
  id: string;
}

/** Structured error for failed sends. */
export interface EmailError {
  code: "VALIDATION" | "API" | "NETWORK" | "CONFIG";
  message: string;
  details?: unknown;
}

/** Result of an email send attempt. */
export type EmailResult =
  | { ok: true; id: string }
  | { ok: false; error: EmailError };
