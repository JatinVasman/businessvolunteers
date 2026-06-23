"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useGo } from "../../lib/nav";
import { T, DIFFS, COMPARE, btnGold, btnGhost } from "../../lib/data";
import { AboutSubnav, SEOBar, FadeIn, SectionHead, Crumb } from "../ui";

function WhyPage({ go }) {
  return (
    <div style={{ paddingTop: 36 }}>
      <Crumb go={go} items={[{ label: "Home", page: "home" }, { label: "About", page: "about-overview" }, { label: "Why Business Volunteers" }]} />
      <SEOBar pageKey="why" />
      <AboutSubnav page="why" go={go} />

      <SectionHead eyebrow="The Difference" title="Why Business Volunteers?" sub="Four honest reasons 2,700+ businesses chose us — and stayed." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginBottom: 48 }}>
        {DIFFS.map((d, i) => (
          <FadeIn key={i} delay={i * 60}>
            <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 18, padding: 26, height: "100%", boxShadow: `0 8px 24px ${T.shadow}`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gradLux }} />
              <div style={{ fontSize: 30, marginBottom: 12 }}>{d.icon}</div>
              <div style={{ fontFamily: T.serif, fontWeight: 700, fontSize: 15.5, color: T.ink, marginBottom: 8 }}>{d.t}</div>
              <div style={{ color: T.text2, fontSize: 13.5, lineHeight: 1.75 }}>{d.d}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div style={{ background: T.ink, borderRadius: 20, padding: "24px 28px", marginBottom: 48, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{ color: T.goldLight, fontFamily: T.serif, fontSize: 18, fontWeight: 700 }}>Over 2,700 businesses trust us</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>·</span>
          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>4.9★ Google rating</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>·</span>
          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>89 industries served</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>·</span>
          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>No lock-in contracts</span>
        </div>
      </FadeIn>

      <SectionHead eyebrow="Honest Comparison" title="BV vs Freelancers vs Big Agencies vs In-House" sub="How the four paths really stack up — judge for yourself." />
      <FadeIn>
        <div style={{ overflowX: "auto", marginBottom: 30, borderRadius: 20, border: `1px solid ${T.cardBGold}`, boxShadow: `0 16px 44px ${T.shadow}` }}>
          <table style={{ width: "100%", minWidth: 760, borderCollapse: "collapse", background: T.bg2 }}>
            <thead>
              <tr style={{ background: T.ink }}>
                {["Aspect", "Business Volunteers", "Freelancers", "Big Agencies", "In-House Team"].map((h, i) => (
                  <th key={i} style={{ padding: "16px 18px", textAlign: "left", color: i === 1 ? T.goldLight : "rgba(255,255,255,0.75)", fontSize: 12, letterSpacing: 1, textTransform: "uppercase", fontWeight: 700, whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={i} style={{ borderTop: `1px solid ${T.cardB}`, background: i % 2 ? T.bg3 : "transparent" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "15px 18px", fontSize: 12.5, lineHeight: 1.6, color: j === 0 ? T.ink : T.text2, fontWeight: j === 0 ? 700 : j === 1 ? 600 : 400, background: j === 1 ? `${T.gold}0d` : "transparent", fontFamily: j === 0 ? T.serif : T.sans }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>

      <FadeIn>
        <div style={{ textAlign: "center", display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={btnGold}>Get a Quote →</a>
          <button onClick={() => go("casestudies")} style={btnGhost}>See the Proof</button>
        </div>
      </FadeIn>
    </div>
  );
}

// ── TEAM PAGE ─────────────────────────────────────────────────────────────────

export default function WhyPageRoute() {
  const go = useGo();
  return <WhyPage go={go} />;
}