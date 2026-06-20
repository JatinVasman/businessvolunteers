"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useGo } from "../../lib/nav";
import { T, SCHEMA_FAQ, btnGold } from "../../lib/data";
import { SEOBar, Eyebrow, FadeIn, SectionHead, Crumb } from "../ui";

function PricingPage({ go }) {
  const [openFaq, setOpenFaq] = useState(null);
  const FAQS = [
    ["What makes Business Volunteers different from other agencies?", "We are a founder-led team focused on measurable growth. Our pay-as-you-go model (starting at ₹3,500/mo) and transparent reporting ensure you only pay for real results."],
    ["How long before I see SEO results?", "Typically, clients see notable improvements in 3–6 months. We set milestones and report progress regularly so you always know where your campaign stands."],
    ["Is there a lock-in contract?", "Never. Every plan is month-to-month. We retain 91%+ of clients because the results keep them, not paperwork."],
    ["Is post-pay available at Business Volunteers?", "Yes — post-pay is optionally available at Business Volunteers. Selected projects can begin before full payment; you review initial deliverables first and pay after satisfaction. This option is available on request during onboarding. It is our way of putting the financial risk on us, not you."],
    ["Do you offer B2B or agency discounts?", "Yes — white-label and volume pricing from 10% to 20%+ off based on account count. See the partnership tiers below."],
    ["Which package should I choose?", "Starter suits new digital presences; Growth fits businesses ready for ads; Pro is for brands that want full-funnel domination. Unsure? The free consultation will map it for you."],
  ];
  return (
    <div style={{ paddingTop: 36 }}>
      <Crumb go={go} items={[{ label: "Home", page: "home" }, { label: "Pricing" }]} />
      <SEOBar pageKey="pricing" schema={SCHEMA_FAQ} schemaLabel="FAQ SCHEMA" />
      <SectionHead eyebrow="Transparent Value" title="Packages & Pay-As-You-Go" sub="Flexible plans, no retainer traps. Only pay for outcomes that matter." />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 22, marginBottom: 48 }}>
        {[
          { n: "Starter", p: "₹3,499", per: "/mo", badge: null, f: ["2 Social Platforms", "12 Posts/Month", "3 Reels Edited", "1 Festival Poster", "Monthly Report"] },
          { n: "Growth", p: "₹5,999", per: "/mo", badge: "Most Popular", f: ["3 Social Platforms", "20 Posts/Month", "8 Reels Edited", "3 Festival Posters", "Meta Ads Setup", "Monthly Strategy Call"] },
          { n: "Pro", p: "₹8,999", per: "/mo", badge: "Best ROI", f: ["4 Social Platforms", "30 Posts/Month", "12 Reels Edited", "6 Festival Posters", "Full Meta Ads Management", "Google My Business", "Weekly Report"] },
        ].map((pkg, i) => (
          <FadeIn key={pkg.n} delay={i * 90}>
            <div style={{ background: pkg.badge === "Most Popular" ? T.ink : T.bg2, border: `1.5px solid ${pkg.badge ? T.cardBGold : T.cardB}`, borderRadius: 26, padding: 32, position: "relative", boxShadow: `0 18px 48px ${T.shadow}`, height: "100%" }}>
              {pkg.badge && <div style={{ position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)", background: T.gradGold, color: T.ink, padding: "6px 22px", borderRadius: 50, fontSize: 11, fontWeight: 800, whiteSpace: "nowrap", letterSpacing: 1.5, textTransform: "uppercase" }}>{pkg.badge}</div>}
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6, color: pkg.badge === "Most Popular" ? T.goldLight : T.gold, letterSpacing: 2.5, textTransform: "uppercase" }}>{pkg.n}</div>
              <div style={{ marginBottom: 22 }}>
                <span style={{ fontWeight: 800, fontSize: 36, fontFamily: T.serif, color: pkg.badge === "Most Popular" ? "#fff" : T.ink }}>{pkg.p}</span>
                <span style={{ fontSize: 14, color: pkg.badge === "Most Popular" ? "rgba(255,255,255,0.6)" : T.text2 }}>{pkg.per}</span>
              </div>
              {pkg.f.map((f, j) => (
                <div key={j} style={{ display: "flex", gap: 10, marginBottom: 10, fontSize: 13.5, color: pkg.badge === "Most Popular" ? "rgba(255,255,255,0.8)" : T.text2 }}>
                  <span style={{ color: T.gold, fontWeight: 800 }}>✓</span>{f}
                </div>
              ))}
              <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", marginTop: 22, background: pkg.badge === "Most Popular" ? T.gradGold : T.ink, color: pkg.badge === "Most Popular" ? T.ink : "#fff", borderRadius: 50, padding: "14px", fontWeight: 800, fontSize: 13.5, textAlign: "center", letterSpacing: .5 }}>
                Get Started →
              </a>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div style={{ background: `linear-gradient(135deg,${T.gold}10,${T.primary}08)`, border: `1px solid ${T.cardBGold}`, borderRadius: 20, padding: 26, marginBottom: 48 }}>
          <Eyebrow>Pay-As-You-Go</Eyebrow>
          <p style={{ color: T.ink, fontSize: 14, lineHeight: 1.85, margin: 0 }}>
            Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for leads that meet criteria agreed upfront — budget, location and intent. Single deliverables start tiny: posters from ₹149, reels from ₹380, dashboards from ₹2,000. Request a quote and we'll build a plan around your numbers.
          </p>
        </div>
      </FadeIn>

      <SectionHead eyebrow="Partnerships" title="B2B & Agency Tiers" sub="White-label execution and volume pricing for agencies, resellers and enterprise teams." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(235px,1fr))", gap: 16, marginBottom: 52 }}>
        {[
          { r: "3–4 Accounts", d: "10% OFF", c: "#1F8A4C", note: "Perfect for boutique agencies" },
          { r: "5–9 Accounts", d: "15% OFF", c: T.primary, note: "Mid-size agencies & resellers", badge: "Most Popular" },
          { r: "10–49 Accounts", d: "20% OFF", c: "#7C5295", note: "Large agency portfolios", badge: "Best Value" },
          { r: "50+ Accounts", d: "Custom", c: T.gold, note: "Enterprise + dedicated manager", badge: "Enterprise" },
        ].map((t, i) => (
          <FadeIn key={t.r} delay={i * 55}>
            <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 22, padding: 28, position: "relative", boxShadow: `0 12px 32px ${T.shadow}`, textAlign: "center", height: "100%" }}>
              {t.badge && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: t.c, color: "#fff", padding: "5px 16px", borderRadius: 50, fontSize: 10, fontWeight: 800, whiteSpace: "nowrap", letterSpacing: 1.5, textTransform: "uppercase" }}>{t.badge}</div>}
              <div style={{ fontWeight: 700, fontSize: 15.5, color: T.ink, marginBottom: 10, fontFamily: T.serif }}>{t.r}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: t.c, marginBottom: 8, fontFamily: T.serif }}>{t.d}</div>
              <div style={{ color: T.text2, fontSize: 12.5 }}>{t.note}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <SectionHead eyebrow="Common Questions" title="Pricing & Process FAQs" />
      <div style={{ maxWidth: 760, margin: "0 auto 40px" }}>
        {FAQS.map(([q, a], i) => (
          <FadeIn key={i} delay={i * 35}>
            <div style={{ background: T.bg2, border: `1px solid ${openFaq === i ? T.gold : T.cardB}`, borderRadius: 14, marginBottom: 9, overflow: "hidden", transition: "border-color .25s" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: "100%", background: "none", border: "none", padding: "16px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                <span style={{ fontWeight: 600, color: T.ink, fontSize: 13.5, textAlign: "left", lineHeight: 1.45 }}>{q}</span>
                <span style={{ color: openFaq === i ? T.gold : T.text2, fontSize: 16, flexShrink: 0, transition: "transform .25s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>＋</span>
              </button>
              {openFaq === i && <div style={{ padding: "0 20px 16px", color: T.text2, fontSize: 13.5, lineHeight: 1.8 }}>{a}</div>}
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn>
        <div style={{ textAlign: "center" }}>
          <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={btnGold}>Request a Quote →</a>
        </div>
      </FadeIn>
    </div>
  );
}

// ── CONTACT PAGE ──────────────────────────────────────────────────────────────

export default function PricingPageRoute() {
  const go = useGo();
  return <PricingPage go={go} />;
}