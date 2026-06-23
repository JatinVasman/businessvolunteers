"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useGo } from "../../lib/nav";
import { T, SCHEMA_FOUNDER, btnDark, btnGold, btnGhost, FOUNDER_IMG } from "../../lib/data";
import { AboutSubnav, SEOBar, Eyebrow, FadeIn, SectionHead, useInView, CountUp, Crumb, A } from "../ui";

function FounderPage({ go }) {
  const [ref, vis] = useInView();
  return (
    <div style={{ paddingTop: 36 }} ref={ref}>
      <Crumb go={go} items={[{ label: "Home", page: "home" }, { label: "About", page: "about-overview" }, { label: "Founder" }]} />
      <SEOBar pageKey="founder" schema={SCHEMA_FOUNDER} schemaLabel="PERSON SCHEMA" />
      <AboutSubnav page="founder" go={go} />

      {/* Hero */}
      <FadeIn>
        <div style={{ background: T.bg2, border: `1px solid ${T.cardBGold}`, borderRadius: 28, padding: "44px 40px", marginBottom: 30, position: "relative", overflow: "hidden", boxShadow: `0 24px 60px ${T.shadow}` }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: T.gradLux }} />
          <div className="bv-hero-flex">
            <div className="bv-hero-image" style={{ width: 150, height: 150, borderRadius: "50%", background: T.gradLux, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: T.serif, fontSize: 46, fontWeight: 800, flexShrink: 0, boxShadow: `0 18px 44px ${T.shadowWarm}`, overflow: "hidden" }}><img src={FOUNDER_IMG} alt="Harsh Chaudhary" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} /></div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <Eyebrow>Founder & CEO</Eyebrow>
              <h1 style={{ fontFamily: T.serif, fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, color: T.ink, margin: "0 0 10px", letterSpacing: -.5 }}>Harsh Chaudhary</h1>
              <p style={{ color: T.text2, fontSize: 15.5, lineHeight: 1.8, margin: "0 0 20px", maxWidth: 580, fontFamily: T.serif, fontStyle: "italic" }}>
                "Great businesses deserve great marketing — my mission is to make every brand we work with unstoppable."
              </p>
              <div className="bv-hero-cta">
                <a href="https://www.linkedin.com/in/heyharsh2026" target="_blank" rel="noopener noreferrer" style={btnDark}>Connect on LinkedIn</a>
                <button onClick={() => go("contact")} style={btnGhost}>Work with Harsh →</button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Quick stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 14, marginBottom: 40 }}>
        {[{ n: "2700+", l: "Clients Guided" }, { n: "89", l: "Industries" }, { n: "2025", l: "Agency Founded" }, { n: "4.9★", l: "Average Rating" }].map((s, i) => (
          <FadeIn key={i} delay={i * 50}>
            <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 16, padding: "22px 14px", textAlign: "center", boxShadow: `0 6px 20px ${T.shadow}` }}>
              <div style={{ fontSize: 24, fontWeight: 800, fontFamily: T.serif, background: T.gradLux, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}><CountUp target={s.n} go={vis} /></div>
              <div style={{ fontSize: 10.5, color: T.text2, marginTop: 6, letterSpacing: 1.5, textTransform: "uppercase" }}>{s.l}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* The Story */}
      <FadeIn>
        <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 22, padding: 32, marginBottom: 24, boxShadow: `0 10px 32px ${T.shadow}` }}>
          <Eyebrow>The Founder's Story</Eyebrow>
          <h3 style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 700, color: T.ink, margin: "0 0 16px" }}>Why Business Volunteers Exists</h3>
          <p style={{ color: T.text2, fontSize: 14.5, lineHeight: 1.95, margin: "0 0 14px" }}>
            I started Business Volunteers because I saw so many small brands bursting with potential yet left behind by big agencies' one-size-fits-all approach. From Day 1, my philosophy has been simple: <strong style={{ color: T.ink }}>great businesses deserve great marketing.</strong> By combining data-driven insights with creative storytelling, we help our clients not just reach new customers, but build lasting brand loyalty.
          </p>
          <p style={{ color: T.text2, fontSize: 14.5, lineHeight: 1.95, margin: 0 }}>
            My journey began with a B.Sc in Animation & VFX from AAFT, Film City Noida — a creative foundation that taught me how stories move people. Years of hands-on marketing, operations and performance-tracking experience taught me the other half: how numbers move businesses. Business Volunteers is the marriage of both. Today, after guiding 2,700+ companies to growth, I still roll up my sleeves on every project — treating each client's business as my own is at the heart of everything we do.
          </p>
        </div>
      </FadeIn>

      {/* Philosophy */}
      <SectionHead eyebrow="Leadership Philosophy" title="Three Pillars of How Harsh Works" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16, marginBottom: 44 }}>
        {[
          { icon: "📊", t: "Data-Driven Strategy", d: "Every decision begins with a number — baseline KPIs, target KPIs, and a dashboard the client can see. If it can't be measured, it can't be promised." },
          { icon: "✨", t: "Creative Storytelling", d: "Rooted in a VFX & animation education, Harsh believes brands win attention through story — then keep it through consistency and craft." },
          { icon: "⚡", t: "Bold Execution", d: "Strategy decks don't grow businesses; shipped work does. Weekly sprints, fast creative cycles and aggressive optimisation turn plans into ROI." },
        ].map((p, i) => (
          <FadeIn key={i} delay={i * 70}>
            <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 18, padding: 26, height: "100%", boxShadow: `0 8px 24px ${T.shadow}` }}>
              <div style={{ fontSize: 30, marginBottom: 12 }}>{p.icon}</div>
              <div style={{ fontFamily: T.serif, fontWeight: 700, fontSize: 16, color: T.ink, marginBottom: 8 }}>{p.t}</div>
              <div style={{ color: T.text2, fontSize: 13.5, lineHeight: 1.75 }}>{p.d}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Journey timeline */}
      <SectionHead eyebrow="The Journey" title="Milestones" />
      <div style={{ marginBottom: 44 }}>
        {[
          { y: "Foundation", t: "Creative Education", d: "B.Sc in Animation & VFX from AAFT, Film City Noida — building the visual storytelling instincts that now power our creative studio." },
          { y: "Apprenticeship", t: "Hands-On Marketing & Operations", d: "Years across HR operations, executive support, MIS reporting and performance dashboards — learning how businesses really run from the inside." },
          { y: "2025", t: "Business Volunteers Founded", d: "Launched in Noida Sector 62 with a singular mission: make every brand we work with unstoppable through affordable, accountable marketing." },
          { y: "2026", t: "2,700+ Clients · 89 Industries", d: "Featured profiles on Medium, a 4.9★ client rating, and signature offerings like KPI Dashboard Systems setting the agency apart." },
        ].map((m, i) => (
          <FadeIn key={i} delay={i * 60}>
            <div style={{ display: "flex", gap: 20, marginBottom: 6 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: 13, height: 13, borderRadius: "50%", background: T.gradGold, boxShadow: `0 0 0 4px ${T.bg3}` }} />
                {i < 3 && <div style={{ width: 2, flex: 1, background: T.cardB, minHeight: 54 }} />}
              </div>
              <div style={{ paddingBottom: 26 }}>
                <span style={{ fontSize: 10.5, fontWeight: 800, color: T.gold, letterSpacing: 2.5, textTransform: "uppercase" }}>{m.y}</span>
                <div style={{ fontFamily: T.serif, fontWeight: 700, fontSize: 16, color: T.ink, margin: "4px 0 5px" }}>{m.t}</div>
                <div style={{ color: T.text2, fontSize: 13.5, lineHeight: 1.7, maxWidth: 620 }}>{m.d}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Notable projects */}
      <SectionHead eyebrow="Proof of Work" title="Signature Campaigns" sub="A few results Harsh has personally led — explore the full library for the complete picture." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16, marginBottom: 26 }}>
        {[
          { t: "Metro Heart Hospital", r: "340% increase in cardiac surgery enquiries", roi: "8.2x ROI" },
          { t: "SmileCraft Cosmetic Dental", r: "Viral reel: 1.4 lakh views, 85 cosmetic enquiries", roi: "13.4x ROI" },
          { t: "Apex Implant Centre", r: "₹15.7L monthly revenue from digital channels", roi: "17.4x ROI" },
        ].map((c, i) => (
          <FadeIn key={i} delay={i * 60}>
            <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 18, padding: 24, boxShadow: `0 8px 24px ${T.shadow}`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gradLux }} />
              <div style={{ fontFamily: T.serif, fontWeight: 700, fontSize: 15.5, color: T.ink, marginBottom: 8 }}>{c.t}</div>
              <div style={{ color: T.text2, fontSize: 13, lineHeight: 1.65, marginBottom: 12 }}>{c.r}</div>
              <span style={{ background: `${T.gold}16`, color: "#9C7424", padding: "4px 12px", borderRadius: 12, fontSize: 11, fontWeight: 700 }}>{c.roi}</span>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn><div style={{ textAlign: "center", marginBottom: 48 }}><button onClick={() => go("casestudies")} style={btnGhost}>View All Case Studies →</button></div></FadeIn>

      {/* Thought leadership + personal */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 16, marginBottom: 44 }}>
        <FadeIn>
          <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 18, padding: 26, height: "100%", boxShadow: `0 8px 24px ${T.shadow}` }}>
            <Eyebrow>Thought Leadership</Eyebrow>
            <p style={{ color: T.text2, fontSize: 13.5, lineHeight: 1.8, margin: 0 }}>
              Harsh writes on founder-led marketing, AI-era SEO and data-driven growth — with featured profiles on Medium and an active voice on LinkedIn. He regularly trains client teams on dashboards and reporting, living the "Volunteers" spirit of the agency's name.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={70}>
          <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 18, padding: 26, height: "100%", boxShadow: `0 8px 24px ${T.shadow}` }}>
            <Eyebrow>Beyond Work</Eyebrow>
            <p style={{ color: T.text2, fontSize: 13.5, lineHeight: 1.8, margin: 0 }}>
              Off the clock, Harsh is a systems-builder at heart — refining Excel craft, exploring design trends, and studying the brands that win hearts in India. He believes the best marketers stay curious students forever.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* CTA */}
      <FadeIn>
        <div style={{ background: T.ink, borderRadius: 26, padding: "42px 34px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gradGold }} />
          <h3 style={{ color: "#fff", fontFamily: T.serif, fontSize: 26, fontWeight: 700, margin: "0 0 10px" }}>Build Your Growth Story with Harsh</h3>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, margin: "0 auto 26px", maxWidth: 440 }}>Free 30-minute strategy session — direct with the founder, not a sales rep.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={btnGold}>Message on WhatsApp →</a>
            <button onClick={() => go("cofounder")} style={{ ...btnGhost, color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)" }}>Meet the Co-Founder</button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

// ── CO-FOUNDER PAGE ───────────────────────────────────────────────────────────

export default function FounderPageRoute() {
  const go = useGo();
  return <FounderPage go={go} />;
}