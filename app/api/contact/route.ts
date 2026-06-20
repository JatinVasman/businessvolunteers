// ── POST /api/contact/ — server-side contact form handler ─────────────────────

import { NextRequest, NextResponse } from "next/server";
import {
  sendEmail,
  contactFormNotification,
  contactFormAutoReply,
} from "../../../lib/email";
import type { ContactFormData } from "../../../lib/email";

// ── Simple in-memory rate limiter (per IP, 5 requests per minute) ─────────────

const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

// ── Validation & sanitization ─────────────────────────────────────────────────

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")   // strip HTML tags
    .trim()
    .slice(0, 2000);           // hard cap at 2000 chars
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    // Rate limit
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    // Parse body
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    // Sanitize
    const data: ContactFormData = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      service: sanitize(body.service),
      message: sanitize(body.message),
    };

    // Validate required fields
    if (!data.name) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }
    if (!data.email || !validateEmail(data.email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }
    if (!data.message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Send notification to BV team
    const notificationPayload = contactFormNotification(data);
    const notificationResult = await sendEmail(notificationPayload);

    if (!notificationResult.ok) {
      console.error("[Contact API] Notification email failed:", (notificationResult as any).error);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again or contact us via WhatsApp." },
        { status: 502 }
      );
    }

    // Send auto-reply to the visitor (best-effort — don't fail the request if this fails)
    const autoReplyPayload = contactFormAutoReply(data);
    const autoReplyResult = await sendEmail(autoReplyPayload);

    if (!autoReplyResult.ok) {
      console.warn("[Contact API] Auto-reply email failed (non-blocking):", (autoReplyResult as any).error);
    }

    return NextResponse.json(
      { message: "Message sent successfully! We'll get back to you within 2 hours." },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
