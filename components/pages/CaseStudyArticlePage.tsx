"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGo } from "../../lib/nav";
import { T, getAllCaseStudies, openCaseStudyGlobal, btnGold, btnGhost, btnDark, SERVICES } from "../../lib/data";
import { Crumb, FadeIn, Eyebrow } from "../ui";

function CaseStudyArticlePage({ cs, onBack, go, goInd }) {
  const related = useMemo(
    () => getAllCaseStudies().filter(c => c.indId === cs.indId && c.title !== cs.title).slice(0, 3),
    [cs.indId, cs.title]
  );
  const Section = ({ label, children }) => (
    <FadeIn>
      <div style={{ marginBottom: 26 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
        <div style={{ fontSize: 15.5, lineHeight: 1.85, color: T.ink }}>{children}</div>
      </div>
    </FadeIn>
  );
  const Ilink = ({ onClick, children }) => (
    <button onClick={onClick} style={{ background: "none", border: "none", padding: 0, color: cs.color, fontWeight: 700, cursor: "pointer", textDecoration: "underline", font: "inherit" }}>{children}</button>
  );

  return (
    <div style={{ paddingTop: 32, maxWidth: 880, margin: "0 auto" }}>
      <Crumb go={go} items={[{ label: "Home", page: "home" }, { label: "Case Studies", page: "casestudies" }, { label: cs.ind }]} />
      <button onClick={onBack} style={{ background: "none", border: "none", color: T.gold, cursor: "pointer", fontSize: 12, marginBottom: 18, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: 0 }}>← Back to Case Studies</button>

      {/* Hero */}
      <FadeIn>
        <button onClick={() => goInd(cs.indId)} style={{ background: `${cs.color}12`, color: cs.color, padding: "5px 14px", borderRadius: 14, fontSize: 11.5, fontWeight: 700, letterSpacing: .5, border: "none", cursor: "pointer", marginBottom: 14 }}>{cs.ind} →</button>
        <h1 style={{ fontFamily: T.serif, fontSize: "clamp(26px,4vw,40px)", lineHeight: 1.15, color: T.ink, marginBottom: 16 }}>{cs.title}</h1>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
          <span style={{ background: `${T.gold}16`, color: "#9C7424", padding: "7px 16px", borderRadius: 14, fontSize: 13, fontWeight: 700 }}>ROI {cs.roi}</span>
          {cs.spend && <span style={{ background: "rgba(31,138,76,0.1)", color: "#1F8A4C", padding: "7px 16px", borderRadius: 14, fontSize: 13, fontWeight: 700 }}>{cs.spend}</span>}
          {cs.duration && <span style={{ background: `${T.ink}0D`, color: T.ink, padding: "7px 16px", borderRadius: 14, fontSize: 13, fontWeight: 700 }}>⏱ {cs.duration}</span>}
        </div>
      </FadeIn>

      <FadeIn>
        <p style={{ fontSize: 16.5, lineHeight: 1.9, color: T.text2, marginBottom: 28, paddingBottom: 24, borderBottom: `1px solid ${T.cardB}` }}>
          How Business Volunteers partnered with a {cs.ind.toLowerCase()} business to turn a real growth challenge into a measurable result — delivering an ROI of {cs.roi}. Here is the full breakdown of the challenge, the strategy, and the outcome.
        </p>
      </FadeIn>

      <Section label="The Challenge">{cs.challenge}</Section>
      <Section label="Our Strategy">{cs.strategy}</Section>

      {cs.tactics && cs.tactics.length > 0 && (
        <FadeIn>
          <div style={{ marginBottom: 26 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.gold, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>What We Did</div>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {cs.tactics.map((t, i) => (
                <li key={i} style={{ fontSize: 15, color: T.ink, lineHeight: 1.8, marginBottom: 6 }}>{t}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      )}

      {cs.before && cs.after && (
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 26 }}>
            <div style={{ flex: 1, background: T.bg3, borderRadius: 12, padding: "16px 18px", textAlign: "center" }}>
              <div style={{ fontSize: 10, color: T.text2, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>Before</div>
              <div style={{ fontSize: 15, color: T.ink, fontWeight: 600 }}>{cs.before}</div>
            </div>
            <span style={{ color: cs.color, fontSize: 22, fontWeight: 800 }}>→</span>
            <div style={{ flex: 1, background: `${cs.color}12`, borderRadius: 12, padding: "16px 18px", textAlign: "center" }}>
              <div style={{ fontSize: 10, color: cs.color, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>After</div>
              <div style={{ fontSize: 15, color: T.ink, fontWeight: 700 }}>{cs.after}</div>
            </div>
          </div>
        </FadeIn>
      )}

      <FadeIn>
        <div style={{ background: `${cs.color}0A`, border: `1px solid ${cs.color}20`, borderRadius: 16, padding: "22px 24px", marginBottom: 26 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: cs.color, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>The Results</div>
          <div style={{ fontSize: 16, color: T.ink, fontWeight: 600, lineHeight: 1.8 }}>{cs.result}</div>
        </div>
      </FadeIn>

      {cs.testimonial && (
        <FadeIn>
          <blockquote style={{ fontFamily: T.serif, fontSize: 18, fontStyle: "italic", color: T.ink, lineHeight: 1.7, borderLeft: `3px solid ${T.gold}`, paddingLeft: 20, margin: "0 0 30px" }}>
            “{cs.testimonial}”
          </blockquote>
        </FadeIn>
      )}

      {/* Internal links into the rest of the site */}
      <FadeIn>
        <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 16, padding: "20px 24px", marginBottom: 30, lineHeight: 1.9, fontSize: 15, color: T.text2 }}>
          This engagement drew on the full Business Volunteers toolkit. Explore <Ilink onClick={() => go("services")}>our services and pricing</Ilink>, see how we approach <Ilink onClick={() => goInd(cs.indId)}>{cs.ind} marketing</Ilink>, or <Ilink onClick={() => go("contact")}>get in touch</Ilink> to start your own project.
        </div>
      </FadeIn>

      {/* Service chips → services page */}
      <FadeIn>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 34 }}>
          {SERVICES.slice(0, 6).map(s => (
            <button key={s.id} onClick={() => go("services")} style={{ background: T.bg3, border: `1px solid ${T.cardB}`, borderRadius: 50, padding: "8px 18px", fontSize: 12, fontWeight: 600, color: T.ink, cursor: "pointer" }}>{s.n} →</button>
          ))}
        </div>
      </FadeIn>

      {/* CTA band */}
      <FadeIn>
        <div style={{ background: T.ink, borderRadius: 22, padding: "40px 30px", textAlign: "center", marginBottom: 40 }}>
          <Eyebrow center light>Your Turn</Eyebrow>
          <h2 style={{ fontFamily: T.serif, fontSize: 26, color: "#fff", margin: "8px 0 10px" }}>Want results like this for your business?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 22 }}>Book a free strategy session — 2-hour response, post-pay available.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => go("contact")} style={{ ...btnGold, padding: "15px 36px" }}>Start Your Project →</button>
            <button onClick={() => go("pricing")} style={{ ...btnGhost, color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", padding: "15px 36px" }}>See Pricing</button>
          </div>
        </div>
      </FadeIn>

      {/* Related case studies — also openable */}
      {related.length > 0 && (
        <div style={{ marginBottom: 50 }}>
          <div style={{ fontFamily: T.serif, fontSize: 20, color: T.ink, marginBottom: 16 }}>More {cs.ind} case studies</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14 }}>
            {related.map((rc, i) => (
              <div key={i} onClick={() => openCaseStudyGlobal(rc)} style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 14, padding: 18, cursor: "pointer" }}>
                <div style={{ fontWeight: 700, color: T.ink, fontSize: 14.5, fontFamily: T.serif, marginBottom: 6 }}>{rc.title}</div>
                <span style={{ background: `${T.gold}16`, color: "#9C7424", padding: "3px 10px", borderRadius: 12, fontSize: 11, fontWeight: 700 }}>ROI {rc.roi}</span>
                <div style={{ color: cs.color, fontSize: 12, fontWeight: 700, marginTop: 10 }}>Read case study →</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CaseStudyArticlePageRoute({ cs }) {
  const go = useGo();
  const router = useRouter();
  const goInd = (id) => router.push("/industries/" + id);
  return <CaseStudyArticlePage cs={cs} onBack={() => router.push("/case-studies")} go={go} goInd={goInd} />;
}
