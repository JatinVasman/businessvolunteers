"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useGo } from "../../lib/nav";
import { T, MINDSET, SCHEMA_ORG, btnDark, btnGhost } from "../../lib/data";
import { AboutSubnav, SEOBar, Eyebrow, FadeIn, SectionHead, useInView, CountUp, Crumb, A } from "../ui";

function AboutOverview({ go }) {
  const [ref, vis] = useInView();
  return (
    <div style={{ paddingTop: 36 }} ref={ref}>
      <Crumb go={go} items={[{ label: "Home", page: "home" }, { label: "About Business Volunteers" }]} />
      <SEOBar pageKey="about-overview" schema={SCHEMA_ORG} schemaLabel="ORG SCHEMA" />
      <AboutSubnav page="about-overview" go={go} />

      <SectionHead eyebrow="Our Story" title="About Business Volunteers" sub="A founder-led, pan-India digital marketing agency built on one belief: affordable excellence." />

      <FadeIn>
        <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 22, padding: 32, marginBottom: 24, boxShadow: `0 10px 32px ${T.shadow}` }}>
          <p style={{ color: T.text2, fontSize: 14.5, lineHeight: 1.95, margin: 0 }}>
            Business Volunteers was founded in 2025 in Noida Sector 62 & New Ashok Nagar, Delhi, 110096 with a simple, stubborn idea: every Indian business — from a single-chair dental clinic to a multi-city hospital chain — deserves marketing that is transparent, measurable and genuinely cared for. In one year we've partnered with 2,700+ businesses across 89 industries, holding a 4.9★ average rating and a post-pay option that puts the risk on us, not you. The name says it all — we show up like volunteers for your mission, and work like owners of your results.
          </p>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginBottom: 48 }}>
        <FadeIn>
          <div style={{ background: T.ink, borderRadius: 20, padding: 28, height: "100%", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gradGold }} />
            <Eyebrow light>Mission</Eyebrow>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14.5, lineHeight: 1.85, margin: 0, fontFamily: T.serif }}>Transparent, data-driven marketing for every Indian business — priced so growth is never out of reach.</p>
          </div>
        </FadeIn>
        <FadeIn delay={70}>
          <div style={{ background: T.bg2, border: `1px solid ${T.cardBGold}`, borderRadius: 20, padding: 28, height: "100%", position: "relative", overflow: "hidden", boxShadow: `0 10px 30px ${T.shadow}` }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gradLux }} />
            <Eyebrow>Vision</Eyebrow>
            <p style={{ color: T.text2, fontSize: 14.5, lineHeight: 1.85, margin: 0, fontFamily: T.serif }}>To be India's most trusted growth partner — the agency 10,000 founders name when asked who actually moved the needle.</p>
          </div>
        </FadeIn>
      </div>

      <SectionHead eyebrow="What Makes Us Different" title="The Business Volunteers Mindset" sub="Seven principles every project is run on — no exceptions, no fine print." />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 30 }}>
        {MINDSET.map((m, i) => (
          <FadeIn key={i} delay={i * 45} style={{ flex: "1 1 300px", maxWidth: 360 }}>
            <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 18, padding: 26, height: "100%", boxShadow: `0 8px 24px ${T.shadow}`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gradLux }} />
              <div style={{ fontSize: 28, marginBottom: 12 }}>{m.icon}</div>
              <div style={{ fontFamily: T.serif, fontWeight: 700, fontSize: 15.5, color: T.ink, marginBottom: 8 }}>{m.t}</div>
              <div style={{ color: T.text2, fontSize: 13, lineHeight: 1.75 }}>{m.d}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div style={{ background: `linear-gradient(135deg,${T.gold}10,${T.primary}08)`, border: `1px solid ${T.cardBGold}`, borderRadius: 20, padding: 28, marginBottom: 48 }}>
          <p style={{ color: T.ink, fontSize: 14.5, lineHeight: 1.95, margin: 0, fontFamily: T.serif, fontStyle: "italic" }}>
            "At Business Volunteers, we embrace a founder's mindset: we don't just run ads, we obsess over your business. We believe in building long-term partnerships, not one-off projects. Our mantra is simple — your success is our success. Clients tell us they feel we treat their budget as if it were our own. This ethic of ownership, combined with continuous learning and data-driven tactics, is the heart of the Business Volunteers Mindset."
          </p>
        </div>
      </FadeIn>

      <SectionHead eyebrow="Our Values" title="What We Stand By" />
      <FadeIn>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
          {["Integrity", "Innovation", "Inclusion", "Ownership", "Transparency", "Craftsmanship", "Curiosity"].map((v, i) => (
            <span key={i} style={{ background: T.bg2, border: `1px solid ${T.cardBGold}`, color: T.ink, padding: "10px 22px", borderRadius: 50, fontSize: 13, fontWeight: 700, fontFamily: T.serif, boxShadow: `0 4px 14px ${T.shadow}` }}>{v}</span>
          ))}
        </div>
      </FadeIn>

      <SectionHead eyebrow="Our Process" title="How Every Engagement Runs" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14, marginBottom: 48 }}>
        {[["01", "Audit", "We study your business, market and current numbers — baseline established."], ["02", "Strategy", "A KPI-mapped plan: channels, budgets, timelines and what success looks like."], ["03", "Execution", "Weekly sprints: content shipped, ads optimised, dashboards updated live."], ["04", "Optimise", "Monthly reviews turn data into the next round of improvements — compounding growth."]].map(([n, t, d], i) => (
          <FadeIn key={i} delay={i * 60}>
            <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 18, padding: 24, height: "100%", boxShadow: `0 8px 24px ${T.shadow}` }}>
              <div style={{ fontFamily: T.serif, fontSize: 26, fontWeight: 800, background: T.gradLux, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>{n}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: T.ink, marginBottom: 6, fontFamily: T.serif }}>{t}</div>
              <div style={{ color: T.text2, fontSize: 12.5, lineHeight: 1.7 }}>{d}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="bv-stats-band-dark" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", background: T.ink, borderRadius: 22, overflow: "hidden", marginBottom: 30 }}>
          {[{ n: "2700+", l: "Happy Clients" }, { n: "89", l: "Industries" }, { n: "300+", l: "Projects Delivered" }, { n: "4.9★", l: "Average Rating" }].map((s, i) => (
            <div key={i} className="bv-stats-item" style={{ padding: "28px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 800, fontFamily: T.serif, background: T.gradGold, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}><CountUp target={s.n} go={vis} /></div>
              <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.55)", marginTop: 6, letterSpacing: 1.5, textTransform: "uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <div style={{ textAlign: "center", display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => go("founder")} style={btnDark}>Meet the Founder →</button>
          <button onClick={() => go("why")} style={btnGhost}>Why Choose Us</button>
        </div>
      </FadeIn>
    </div>
  );
}

// ── WHY BV PAGE (differentiators + comparison) ────────────────────────────────

export default function AboutOverviewRoute() {
  const go = useGo();
  return <AboutOverview go={go} />;
}