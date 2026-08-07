// ── Resend API client with retry logic ────────────────────────────────────────

import type { ResendPayload, ResendResponse, EmailResult } from "./types";

// ── Config from environment ──────────────────────────────────────────────────

function getApiKey(): string {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "[Email] Missing env var: RESEND_API_KEY must be set."
    );
  }
  return apiKey;
}

// ── Retry helper ─────────────────────────────────────────────────────────────

const MAX_RETRIES = 3;
const INITIAL_DELAY_MS = 500;

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Core send function ───────────────────────────────────────────────────────

/**
 * Send an email via the Resend REST API.
 *
 * Retries transient failures (5xx, 429, network errors) up to 3 times with
 * exponential backoff. Client errors (4xx except 429) fail immediately.
 */
export async function sendEmail(payload: ResendPayload): Promise<EmailResult> {
  const apiKey = getApiKey();

  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      // 429 → rate limited, retry
      if (res.status === 429) {
        console.warn(
          `[Email] Rate limited (attempt ${attempt}/${MAX_RETRIES})`
        );
        lastError = "Rate limited";
        if (attempt < MAX_RETRIES) {
          await sleep(INITIAL_DELAY_MS * Math.pow(2, attempt - 1));
          continue;
        }
        return {
          ok: false,
          error: {
            code: "API",
            message: `Resend rate limited after ${MAX_RETRIES} attempts`,
          },
        };
      }

      // 4xx → client error, don't retry
      if (res.status >= 400 && res.status < 500) {
        const body = await res.text();
        console.error(`[Email] Client error ${res.status}:`, body);
        return {
          ok: false,
          error: {
            code: "API",
            message: `Resend returned ${res.status}`,
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
            message: `Resend returned ${res.status} after ${MAX_RETRIES} attempts`,
            details: body,
          },
        };
      }

      // Success
      const data = (await res.json()) as ResendResponse;
      console.log(`[Email] Sent successfully: ${data.id}`);
      return { ok: true, id: data.id };
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
      message: `Failed to reach Resend after ${MAX_RETRIES} attempts`,
      details: lastError instanceof Error ? lastError.message : String(lastError),
    },
  };
}
