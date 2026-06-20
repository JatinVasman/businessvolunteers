// ── MonkeysMail API client with retry logic ───────────────────────────────────

import type { MonkeysMailPayload, MonkeysMailResponse, EmailResult } from "./types";

// ── Config from environment ──────────────────────────────────────────────────

function getConfig() {
  const apiKey = process.env.MONKEYSMAIL_API_KEY;
  const domain = process.env.MONKEYSMAIL_DOMAIN;

  if (!apiKey || !domain) {
    throw new Error(
      "[Email] Missing env vars: MONKEYSMAIL_API_KEY and MONKEYSMAIL_DOMAIN must be set."
    );
  }

  return {
    apiKey,
    domain,
    baseUrl: `https://api.monkeysmail.com/api/v2/${domain}`,
  };
}

// ── Retry helper ─────────────────────────────────────────────────────────────

const MAX_RETRIES = 3;
const INITIAL_DELAY_MS = 500;

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Core send function ───────────────────────────────────────────────────────

/**
 * Send an email via the MonkeysMail REST API.
 *
 * Retries transient failures (5xx, network errors) up to 3 times with
 * exponential backoff. Client errors (4xx) fail immediately.
 */
export async function sendEmail(payload: MonkeysMailPayload): Promise<EmailResult> {
  const { apiKey, baseUrl } = getConfig();

  const authHeader =
    "Basic " + Buffer.from(`api:${apiKey}`).toString("base64");

  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(`${baseUrl}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        body: JSON.stringify(payload),
      });

      // 4xx → client error, don't retry
      if (res.status >= 400 && res.status < 500) {
        const body = await res.text();
        console.error(`[Email] Client error ${res.status}:`, body);
        return {
          ok: false,
          error: {
            code: "API",
            message: `MonkeysMail returned ${res.status}`,
            details: body,
          },
        };
      }

      // 5xx → server error, retry
      if (res.status >= 500) {
        const body = await res.text();
        console.warn(
          `[Email] Server error ${res.status} (attempt ${attempt}/${MAX_RETRIES}):`,
          body
        );
        lastError = body;
        if (attempt < MAX_RETRIES) {
          await sleep(INITIAL_DELAY_MS * Math.pow(2, attempt - 1));
          continue;
        }
        return {
          ok: false,
          error: {
            code: "API",
            message: `MonkeysMail returned ${res.status} after ${MAX_RETRIES} attempts`,
            details: body,
          },
        };
      }

      // Success
      const data = (await res.json()) as MonkeysMailResponse;
      console.log(`[Email] Sent successfully: ${data.data.id}`);
      return { ok: true, id: data.data.id };
    } catch (err) {
      // Network / DNS / timeout errors → retry
      console.warn(
        `[Email] Network error (attempt ${attempt}/${MAX_RETRIES}):`,
        err instanceof Error ? err.message : err
      );
      lastError = err;
      if (attempt < MAX_RETRIES) {
        await sleep(INITIAL_DELAY_MS * Math.pow(2, attempt - 1));
      }
    }
  }

  return {
    ok: false,
    error: {
      code: "NETWORK",
      message: `Failed to reach MonkeysMail after ${MAX_RETRIES} attempts`,
      details: lastError instanceof Error ? lastError.message : String(lastError),
    },
  };
}
