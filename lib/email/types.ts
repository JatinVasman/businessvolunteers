// ── TypeScript types for the email service layer ──────────────────────────────

/** Shape of the contact form data coming from the frontend. */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

/** Payload accepted by the MonkeysMail REST API v2 /messages endpoint. */
export interface MonkeysMailPayload {
  from: string;
  from_name: string;
  to: string;
  subject: string;
  html: string;
  variables?: Record<string, string>;
  tags?: string[];
}

/** Successful response from MonkeysMail. */
export interface MonkeysMailResponse {
  data: { id: string; message: string };
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
