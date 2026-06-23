"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { T, ANCHORS, SOCIAL_LINKS, btnDark, btnGold, btnGhost, ABOUT_PAGES, LOGO } from "../lib/data";

export function A({ i, t }) { return <a href="https://businessvolunteers.online" target="_blank" rel="noopener noreferrer" style={{ color: T.primary, fontWeight: 700, borderBottom: `1px solid ${T.gold}` }}>{t || ANCHORS[i % ANCHORS.length]}</a>; }
// Internal link — navigates within the Business Volunteers site

export function L({ go, page, children }) { return <a onClick={(e) => { e.preventDefault(); go(page); }} href="#" style={{ color: T.primary, fontWeight: 700, borderBottom: `1px solid ${T.gold}`, cursor: "pointer" }}>{children}</a>; }

export function SocIcon({ n, size = 16 }) {
  const P = {
    Facebook: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z",
    Instagram: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2m0-2.2C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.39 2.13a5.9 5.9 0 0 0 2.13 1.39c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.39-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 3.99zm7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z",
    LinkedIn: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
    YouTube: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12z",
  };
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-label={n}><path d={P[n]} /></svg>;
}

export function SocialIconRow({ dark }) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {SOCIAL_LINKS.map(s => (
        <a key={s.n} href={s.url} target="_blank" rel="noopener noreferrer" title={s.n}
          style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${dark ? "rgba(229,192,123,0.35)" : T.cardB}`, display: "flex", alignItems: "center", justifyContent: "center", color: dark ? T.goldLight : s.color, transition: "all .2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = s.color; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = dark ? T.goldLight : s.color; e.currentTarget.style.borderColor = dark ? "rgba(229,192,123,0.35)" : T.cardB; }}>
          {s.svg}
        </a>
      ))}
    </div>
  );
}

// ── SEO META REGISTRY (per blueprint) ─────────────────────────────────────────

export function CountUp({ target, go }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!go) return;
    const n = parseFloat(String(target).replace(/[^0-9.]/g, ""));
    if (!n) return;
    let s = null, raf;
    const step = ts => { if (!s) s = ts; const p = Math.min((ts - s) / 1600, 1); setV(Math.floor((1 - (1 - p) ** 3) * n)); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [go, target]);
  const suffix = String(target).replace(/[0-9,. ]/g, "");
  return <>{v.toLocaleString("en-IN")}{suffix}</>;
}

export function useInView(t = 0.1) {
  const ref = useRef(null); const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: t });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [t]);
  return [ref, vis];
}

export function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(28px)", transition: `opacity .7s ${delay}ms cubic-bezier(.22,.61,.36,1), transform .7s ${delay}ms cubic-bezier(.22,.61,.36,1)`, ...style }}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, center, light }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: center ? "center" : "flex-start", marginBottom: 14 }}>
      <span style={{ width: 32, height: 1, background: T.gold }} />
      <span style={{ fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase", color: light ? T.goldLight : T.gold, fontWeight: 700 }}>{children}</span>
      {center && <span style={{ width: 32, height: 1, background: T.gold }} />}
    </div>
  );
}

export function SectionHead({ eyebrow, title, sub, delay = 0 }) {
  return (
    <FadeIn delay={delay} style={{ textAlign: "center", marginBottom: 44 }}>
      {eyebrow && <Eyebrow center>{eyebrow}</Eyebrow>}
      <h2 style={{ fontSize: "clamp(26px,3.4vw,38px)", fontWeight: 700, margin: "0 0 10px", color: T.ink, fontFamily: T.serif, letterSpacing: -.3 }}>{title}</h2>
      {sub && <p style={{ color: T.text2, fontSize: 15, margin: "0 auto", maxWidth: 580, lineHeight: 1.7 }}>{sub}</p>}
    </FadeIn>
  );
}

// SEO Bar — hidden from UI (metadata only for dev reference, no visible badge)

export function SEOBar() { return null; }

export function Crumb({ items, go }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 20, fontSize: 11.5, letterSpacing: .5 }}>
      {items.map((it, i) => (
        <span key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {i > 0 && <span style={{ color: T.text2 }}>›</span>}
          {it.page
            ? <button onClick={() => go(it.page)} style={{ background: "none", border: "none", color: T.gold, cursor: "pointer", fontWeight: 700, padding: 0, fontSize: 11.5, letterSpacing: .5 }}>{it.label}</button>
            : <span style={{ color: T.text2 }}>{it.label}</span>}
        </span>
      ))}
    </div>
  );
}

export function Nav({ page, go }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const items = [
    { k: "home", l: "Home" },
    { k: "about", l: "About", drop: true },
    { k: "services", l: "Services" },
    { k: "portfolio", l: "Portfolio" },
    { k: "industries", l: "Industries" },
    { k: "casestudies", l: "Case Studies" },
    { k: "blog", l: "Blog" },
    { k: "pricing", l: "Pricing" },
    { k: "contact", l: "Contact" },
  ];
  const aboutActive = ABOUT_PAGES.some(a => a.k === page);

  const handleNav = (p) => {
    go(p);
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav style={{ background: "rgba(250,246,240,0.94)", borderBottom: `1px solid ${T.cardB}`, position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(18px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", minHeight: 66, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 24px", gap: 10 }}>
        <div onClick={() => handleNav("home")} style={{ display: "flex", alignItems: "center", gap: 11, cursor: "pointer", flexShrink: 0 }}>
          <div style={{ width: 40, height: 40, borderRadius: 11, overflow: "hidden", boxShadow: `0 6px 18px ${T.shadowWarm}`, flexShrink: 0 }}>
            <img src={LOGO} alt="Business Volunteers Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={e => { e.target.style.display = "none"; e.target.parentNode.style.background = T.gradLux; e.target.parentNode.innerHTML = "<span style='color:#fff;font-weight:900;font-size:14px;font-family:Georgia,serif;display:flex;align-items:center;justify-content:center;height:100%'>BV</span>"; }} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15, color: T.ink, fontFamily: T.serif, letterSpacing: .3, lineHeight: 1.1 }}>Business Volunteers</div>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="bv-desktop-nav-links" style={{ gap: 2 }}>
          {items.map(it => it.drop ? (
            <div key="about" style={{ position: "relative" }}>
              <button onClick={() => setAboutOpen(!aboutOpen)}
                style={{ background: "none", border: "none", borderBottom: aboutActive ? `2px solid ${T.gold}` : "2px solid transparent", color: aboutActive ? T.ink : T.text2, padding: "8px 12px", cursor: "pointer", fontSize: 13, fontWeight: aboutActive ? 700 : 500, letterSpacing: .3 }}>
                About ▾
              </button>
              {aboutOpen && (
                <div style={{ position: "absolute", top: "110%", left: 0, background: T.bg2, border: `1px solid ${T.cardBGold}`, borderRadius: 16, padding: 8, minWidth: 260, boxShadow: `0 24px 60px ${T.shadow}`, zIndex: 200 }}>
                  {ABOUT_PAGES.map(a => (
                    <button key={a.k} onClick={() => handleNav(a.k)}
                      style={{ display: "block", width: "100%", textAlign: "left", background: page === a.k ? T.bg3 : "none", border: "none", borderRadius: 10, padding: "10px 14px", fontSize: 12.5, color: page === a.k ? T.ink : T.text2, fontWeight: page === a.k ? 700 : 500, cursor: "pointer" }}>
                      {a.l}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button key={it.k} onClick={() => handleNav(it.k)}
              style={{ background: "none", border: "none", borderBottom: page === it.k ? `2px solid ${T.gold}` : "2px solid transparent", color: page === it.k ? T.ink : T.text2, padding: "8px 11px", cursor: "pointer", fontSize: 13, fontWeight: page === it.k ? 700 : 500, letterSpacing: .3 }}>
              {it.l}
            </button>
          ))}
          <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer"
            style={{ marginLeft: 8, background: T.ink, color: "#fff", borderRadius: 50, padding: "10px 20px", fontWeight: 700, fontSize: 12, whiteSpace: "nowrap", letterSpacing: .5 }}>
            Start a Project →
          </a>
        </div>

        {/* Mobile Nav Button */}
        <button className="bv-mobile-nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation menu">
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div className={`bv-mobile-drawer-overlay ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen(false)} />

      {/* Mobile Drawer */}
      <div className={`bv-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, borderBottom: `1px solid ${T.cardB}`, paddingBottom: 12 }}>
          <span style={{ fontWeight: 800, fontSize: 16, color: T.ink, fontFamily: T.serif }}>Navigation</span>
          <button onClick={() => setMobileMenuOpen(false)} style={{ background: "none", border: "none", fontSize: 20, color: T.ink, cursor: "pointer" }}>✕</button>
        </div>

        {items.map(it => it.drop ? (
          <div key="mob-about" style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              style={{ background: "none", border: "none", borderBottom: `1px solid ${aboutActive ? T.gold : "transparent"}`, color: aboutActive ? T.ink : T.text2, padding: "12px 0", cursor: "pointer", fontSize: 14.5, fontWeight: aboutActive ? 700 : 500, textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>About</span>
              <span style={{ fontSize: 12 }}>{mobileAboutOpen ? "▲" : "▼"}</span>
            </button>
            {mobileAboutOpen && (
              <div style={{ paddingLeft: 14, display: "flex", flexDirection: "column", gap: 2, marginTop: 4, borderLeft: `2px solid ${T.cardBGold}` }}>
                {ABOUT_PAGES.map(a => (
                  <button key={a.k} onClick={() => handleNav(a.k)}
                    style={{ background: "none", border: "none", color: page === a.k ? T.ink : T.text2, padding: "8px 0", fontSize: 13, fontWeight: page === a.k ? 700 : 500, cursor: "pointer", textAlign: "left" }}>
                    {a.l}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <button key={it.k} onClick={() => handleNav(it.k)}
            style={{ background: "none", border: "none", borderBottom: `1px solid ${page === it.k ? T.gold : "transparent"}`, color: page === it.k ? T.ink : T.text2, padding: "12px 0", cursor: "pointer", fontSize: 14.5, fontWeight: page === it.k ? 700 : 500, textAlign: "left" }}>
            {it.l}
          </button>
        ))}

        <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}
          style={{ marginTop: 24, background: T.ink, color: "#fff", borderRadius: 50, padding: "13px 20px", fontWeight: 700, fontSize: 13, textAlign: "center", display: "block", textDecoration: "none", letterSpacing: .5 }}>
          Start a Project →
        </a>
      </div>
    </nav>
  );
}

export function Ticker() {
  const items = ["✦ 2,700+ Happy Clients", "✦ 89 Industries Served", "✦ Founder-Led Team", "✦ Post-Pay Available", "✦ 100% Satisfaction", "✦ +91 85869 89832", "✦ Posters from ₹149", "✦ Reels from ₹380", "✦ Dashboards from ₹2,000", "✦ No Lock-In Contracts"];
  const all = [...items, ...items, ...items];
  return (
    <div style={{ overflow: "hidden", background: T.ink, padding: "9px 0" }}>
      <div style={{ display: "flex", gap: 44, animation: "ticker 32s linear infinite", whiteSpace: "nowrap" }}>
        {all.map((t, i) => <span key={i} style={{ color: "rgba(255,255,255,0.75)", fontSize: 11.5, flexShrink: 0, letterSpacing: 1.2 }}>{t}</span>)}
      </div>
    </div>
  );
}

// About sub-navigation strip (internal linking)

export function AboutSubnav({ page, go }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 30 }}>
      {ABOUT_PAGES.map(a => (
        <button key={a.k} onClick={() => go(a.k)}
          style={{ background: page === a.k ? T.ink : "transparent", color: page === a.k ? "#fff" : T.text2, border: `1px solid ${page === a.k ? T.ink : T.cardB}`, borderRadius: 50, padding: "8px 16px", fontSize: 11.5, fontWeight: 600, cursor: "pointer", letterSpacing: .3 }}>
          {a.l.replace("Founder — ", "").replace("Co-Founder — ", "Co-Founder: ").replace("About Business Volunteers", "About BV")}
        </button>
      ))}
    </div>
  );
}

// ── FOUNDER PAGE ──────────────────────────────────────────────────────────────

export function ServiceDetail({ s, go, back }) {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div style={{ paddingTop: 36 }}>
      <Crumb go={go} items={[{ label: "Home", page: "home" }, { label: "Services", page: "services" }, { label: s.n }]} />
      <button onClick={back} style={{ background: "none", border: "none", color: T.gold, cursor: "pointer", fontSize: 12, marginBottom: 18, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: 0 }}>← All Services</button>

      {/* SEO snapshot for service */}
      <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 14, padding: "13px 18px", marginBottom: 26, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ fontSize: 12.5, color: T.ink, fontWeight: 700, marginBottom: 3 }}>{s.seoTitle}</div>
          <div style={{ fontSize: 12, color: T.text2, lineHeight: 1.55 }}>{s.meta}</div>
        </div>
      </div>

      {/* Hero */}
      <FadeIn>
        <div style={{ background: T.bg2, border: `1px solid ${T.cardBGold}`, borderRadius: 24, padding: "36px 32px", marginBottom: 28, position: "relative", overflow: "hidden", boxShadow: `0 20px 52px ${T.shadow}` }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: T.gradLux }} />
          <div style={{ fontSize: 44, marginBottom: 14 }}>{s.icon}</div>
          <h1 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: "clamp(24px,3.4vw,34px)", color: T.ink, margin: "0 0 8px" }}>{s.n}</h1>
          <div style={{ fontSize: 20, fontWeight: 800, fontFamily: T.serif, background: T.gradLux, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 12 }}>{s.p}</div>
          <p style={{ color: T.text2, fontSize: 14.5, lineHeight: 1.85, margin: "0 0 22px", maxWidth: 680 }}>{s.d}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={btnDark}>Get a Quote →</a>
            <button onClick={() => go("casestudies")} style={btnGhost}>Related Case Studies</button>
          </div>
        </div>
      </FadeIn>

      {/* Pain points */}
      <SectionHead eyebrow="Sound Familiar?" title="Problems We Solve" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14, marginBottom: 44 }}>
        {s.pain.map((p, i) => (
          <FadeIn key={i} delay={i * 55}>
            <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderLeft: `3px solid #B0413E`, borderRadius: 16, padding: 22, height: "100%", boxShadow: `0 6px 20px ${T.shadow}` }}>
              <div style={{ color: T.ink, fontSize: 13.5, lineHeight: 1.7, fontWeight: 600 }}>{p}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* What we do */}
      <SectionHead eyebrow="Deliverables" title="What We Do" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 12, marginBottom: 44 }}>
        {s.del.map((d, i) => (
          <FadeIn key={i} delay={i * 40}>
            <div style={{ background: T.bg3, borderRadius: 14, padding: "16px 18px", display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ color: T.gold, fontWeight: 800, flexShrink: 0 }}>✓</span>
              <span style={{ color: T.ink, fontSize: 13, lineHeight: 1.6, fontWeight: 600 }}>{d}</span>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Full price list (graphic design) */}
      {s.priceTable && (<>
        <SectionHead eyebrow="Transparent Pricing" title="Graphic Design Price List" sub="Clear per-design pricing across every format — no hidden charges. GST applicable as per norms; prices subject to change." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16, marginBottom: 44 }}>
          {s.priceTable.map((cat, ci) => (
            <FadeIn key={ci} delay={ci * 35}>
              <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 18, padding: "22px 22px 12px", height: "100%", boxShadow: `0 8px 24px ${T.shadow}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gradLux }} />
                <h3 style={{ fontFamily: T.serif, fontWeight: 700, fontSize: 16, color: T.ink, margin: "2px 0 3px" }}>{cat.cat}</h3>
                {cat.note && <div style={{ fontSize: 11.5, color: T.text2, marginBottom: 8 }}>{cat.note}</div>}
                <div style={{ marginTop: 6 }}>
                  {cat.items.map(([name, price], ii) => (
                    <div key={ii} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, padding: "8px 0", borderTop: ii === 0 ? "none" : `1px solid ${T.cardB}` }}>
                      <span style={{ fontSize: 13, color: T.ink, lineHeight: 1.4 }}>{name}</span>
                      <span style={{ fontSize: 12.5, fontWeight: 800, color: T.gold, whiteSpace: "nowrap", flexShrink: 0, fontFamily: T.serif }}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </>)}

      {/* Approach + result */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 16, marginBottom: 44 }}>
        <FadeIn>
          <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 20, padding: 28, height: "100%", boxShadow: `0 10px 28px ${T.shadow}` }}>
            <Eyebrow>Our Approach</Eyebrow>
            <p style={{ color: T.text2, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{s.approach}</p>
          </div>
        </FadeIn>
        <FadeIn delay={70}>
          <div style={{ background: T.ink, borderRadius: 20, padding: 28, height: "100%", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gradGold }} />
            <Eyebrow light>Typical Results</Eyebrow>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 14.5, lineHeight: 1.85, margin: 0, fontFamily: T.serif }}>{s.result}</p>
          </div>
        </FadeIn>
      </div>

      {/* FAQs */}
      <SectionHead eyebrow="Questions" title={`${s.n} FAQs`} />
      <div style={{ marginBottom: 44 }}>
        {s.faqs.map(([q, a], i) => (
          <FadeIn key={i} delay={i * 40}>
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
        <div style={{ background: T.ink, borderRadius: 24, padding: "38px 30px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gradGold }} />
          <h3 style={{ color: "#fff", fontFamily: T.serif, fontSize: 23, fontWeight: 700, margin: "0 0 10px" }}>Ready to start with {s.n}?</h3>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13.5, margin: "0 0 24px" }}>Free audit and strategy session — we respond within 2 hours.</p>
          <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={btnGold}>Start on WhatsApp →</a>
        </div>
      </FadeIn>
    </div>
  );
}

// ── CASE STUDIES PAGE ─────────────────────────────────────────────────────────

export function WebsiteMockup({ p }) {
  const renderHero = () => {
    if (p.mockup === "ecom") {
      return (
        <>
          <div style={{ background: `linear-gradient(135deg,${p.color1}22,${p.color2}11)`, padding: "22px 18px 16px", borderBottom: `1px solid ${p.color1}22` }}>
            <div style={{ fontSize: 10, color: p.color1, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>NEW ARRIVALS</div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, marginBottom: 6, fontFamily: T.serif }}>{p.hero}</div>
            <div style={{ fontSize: 10, color: "#666", marginBottom: 10, lineHeight: 1.4 }}>{p.sub}</div>
            <div style={{ background: p.color1, color: "#fff", display: "inline-block", padding: "6px 14px", borderRadius: 4, fontSize: 9, fontWeight: 700, letterSpacing: 1 }}>{p.cta} →</div>
          </div>
          <div style={{ padding: "12px 14px", background: "#fff" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#1A1A1A", marginBottom: 8, letterSpacing: 1.2, textTransform: "uppercase" }}>Shop by Category</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {p.products.map((pr, i) => (
                <div key={i} style={{ background: `linear-gradient(135deg,${p.color1}15,${p.color2}10)`, borderRadius: 6, padding: "10px 8px", textAlign: "center", border: `1px solid ${p.color1}22` }}>
                  <div style={{ fontSize: 18, marginBottom: 3 }}>{pr.split(" ")[0]}</div>
                  <div style={{ fontSize: 8, color: "#333", fontWeight: 600 }}>{pr.split(" ").slice(1).join(" ")}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    if (p.mockup === "nonprofit") {
      return (
        <>
          <div style={{ background: `linear-gradient(135deg,${p.color3},${p.color1}22)`, padding: "24px 18px", textAlign: "center", borderBottom: `1px solid ${p.color1}33` }}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>🧘‍♀️</div>
            <div style={{ fontSize: 11, color: p.color2, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>Welcome</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2, marginBottom: 6, fontFamily: T.serif, fontStyle: "italic" }}>{p.hero}</div>
            <div style={{ fontSize: 10, color: "#666", marginBottom: 12, lineHeight: 1.5 }}>{p.sub}</div>
            <div style={{ background: p.color1, color: "#fff", display: "inline-block", padding: "7px 18px", borderRadius: 50, fontSize: 9, fontWeight: 700, letterSpacing: 1.5 }}>{p.cta}</div>
          </div>
          <div style={{ padding: "14px", background: "#fff" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5 }}>
              {p.products.map((pr, i) => (
                <div key={i} style={{ background: `${p.color1}08`, borderRadius: 8, padding: "10px 4px", textAlign: "center", border: `1px solid ${p.color1}18` }}>
                  <div style={{ fontSize: 16, marginBottom: 3 }}>{pr.split(" ")[0]}</div>
                  <div style={{ fontSize: 7, color: "#666", fontWeight: 600 }}>{pr.split(" ").slice(1).join(" ")}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    if (p.mockup === "portfolio") {
      return (
        <>
          <div style={{ background: p.color1, padding: "26px 20px", borderBottom: `2px solid ${p.color2}` }}>
            <div style={{ fontSize: 9.5, color: p.color2, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>INTERIOR DESIGN STUDIO</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 8, fontFamily: T.serif }}>{p.hero}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", marginBottom: 12, lineHeight: 1.5 }}>{p.sub}</div>
            <div style={{ background: p.color2, color: p.color1, display: "inline-block", padding: "7px 16px", borderRadius: 2, fontSize: 9, fontWeight: 800, letterSpacing: 1.5 }}>{p.cta} →</div>
          </div>
          <div style={{ padding: "12px 14px", background: p.color3 }}>
            <div style={{ fontSize: 8.5, fontWeight: 800, color: p.color1, marginBottom: 8, letterSpacing: 2, textTransform: "uppercase" }}>Selected Projects</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
              {p.products.slice(0, 4).map((pr, i) => (
                <div key={i} style={{ background: "#fff", border: `1px solid ${p.color1}22`, padding: "10px 8px", textAlign: "center" }}>
                  <div style={{ fontSize: 16, marginBottom: 3 }}>{pr.split(" ")[0]}</div>
                  <div style={{ fontSize: 7.5, color: p.color1, fontWeight: 700, letterSpacing: .5 }}>{pr.split(" ").slice(1).join(" ").toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    if (p.mockup === "realestate") {
      return (
        <>
          <div style={{ background: `linear-gradient(135deg,${p.color3},${p.color1})`, padding: "22px 18px", borderBottom: `1px solid ${p.color1}` }}>
            <div style={{ fontSize: 10, color: p.color2, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>PREMIUM PROPERTIES</div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 6, fontFamily: T.serif }}>{p.hero}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", marginBottom: 10, lineHeight: 1.4 }}>{p.sub}</div>
            <div style={{ background: p.color2, color: "#fff", display: "inline-block", padding: "7px 16px", borderRadius: 6, fontSize: 9, fontWeight: 800, letterSpacing: 1 }}>{p.cta} →</div>
          </div>
          <div style={{ padding: "12px 14px", background: "#F9FAFB" }}>
            <div style={{ display: "flex", gap: 5, marginBottom: 8, padding: "6px 8px", background: "#fff", borderRadius: 6, border: `1px solid ${p.color1}22` }}>
              <span style={{ fontSize: 11 }}>🔍</span>
              <span style={{ fontSize: 8.5, color: "#999" }}>Search by city, area or builder...</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
              {p.products.map((pr, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 8, padding: "10px 6px", textAlign: "center", border: `1px solid ${p.color1}22`, boxShadow: `0 2px 6px ${p.color1}11` }}>
                  <div style={{ fontSize: 18, marginBottom: 3 }}>{pr.split(" ")[0]}</div>
                  <div style={{ fontSize: 8, color: p.color1, fontWeight: 700 }}>{pr.split(" ").slice(1).join(" ")}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    if (p.mockup === "agency") {
      return (
        <>
          <div style={{ background: p.color2, padding: "24px 18px", position: "relative", overflow: "hidden", borderBottom: `3px solid ${p.color1}` }}>
            <div style={{ position: "absolute", top: -10, right: -10, width: 60, height: 60, background: p.color1, borderRadius: "50%", opacity: .6 }} />
            <div style={{ position: "absolute", bottom: -15, left: -15, width: 40, height: 40, background: p.color3, borderRadius: "50%", opacity: .4 }} />
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 10, color: p.color3, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>★ CREATIVE STUDIO ★</div>
              <div style={{ fontSize: 19, fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 6, letterSpacing: -.3 }}>{p.hero}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", marginBottom: 10, lineHeight: 1.4 }}>{p.sub}</div>
              <div style={{ background: p.color1, color: "#fff", display: "inline-block", padding: "8px 16px", borderRadius: 0, fontSize: 9, fontWeight: 900, letterSpacing: 1.5, textTransform: "uppercase" }}>{p.cta} →</div>
            </div>
          </div>
          <div style={{ padding: "12px 14px", background: "#fff" }}>
            <div style={{ fontSize: 9, fontWeight: 900, color: p.color2, marginBottom: 8, letterSpacing: 2, textTransform: "uppercase" }}>What We Do</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
              {p.products.map((pr, i) => (
                <div key={i} style={{ background: i % 2 ? p.color2 : p.color1, color: "#fff", padding: "11px 8px", textAlign: "center" }}>
                  <div style={{ fontSize: 17, marginBottom: 3 }}>{pr.split(" ")[0]}</div>
                  <div style={{ fontSize: 8, fontWeight: 800, letterSpacing: 1 }}>{pr.split(" ").slice(1).join(" ").toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    // fashion
    return (
      <>
        <div style={{ background: p.color1, padding: "26px 20px", borderBottom: `1px solid ${p.color2}` }}>
          <div style={{ fontSize: 9.5, color: p.color2, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", marginBottom: 10 }}>FW '26 COLLECTION</div>
          <div style={{ fontSize: 19, fontWeight: 300, color: "#fff", lineHeight: 1.2, marginBottom: 6, fontFamily: T.serif, letterSpacing: -.5 }}>{p.hero}</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", marginBottom: 12, lineHeight: 1.5 }}>{p.sub}</div>
          <div style={{ background: "transparent", color: p.color2, display: "inline-block", padding: "7px 18px", border: `1px solid ${p.color2}`, fontSize: 9, fontWeight: 700, letterSpacing: 2 }}>{p.cta} →</div>
        </div>
        <div style={{ padding: "12px 14px", background: p.color3 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4 }}>
            {p.products.map((pr, i) => (
              <div key={i} style={{ background: "#fff", padding: "12px 4px", textAlign: "center", border: `1px solid ${p.color1}11` }}>
                <div style={{ fontSize: 17, marginBottom: 3 }}>{pr.split(" ")[0]}</div>
                <div style={{ fontSize: 7.5, color: p.color1, fontWeight: 700, letterSpacing: 1 }}>{pr.split(" ").slice(1).join(" ").toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  if (p.img) {
    return (
      <div style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: `0 20px 50px rgba(0,0,0,0.2)`, border: `1px solid rgba(255,255,255,0.1)` }}>
        {/* Browser chrome */}
        <div style={{ background: "#E8E8E8", padding: "7px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #D1D1D1" }}>
          <div style={{ display: "flex", gap: 5 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF5F57" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FEBC2E" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#28C840" }} />
          </div>
          <div style={{ flex: 1, background: "#fff", borderRadius: 5, padding: "3px 10px", fontSize: 9, color: "#666", textAlign: "center", border: "1px solid #DDD", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            🔒 {p.url.replace("https://", "")}
          </div>
        </div>
        <img src={p.img} alt={`${p.title} website preview`} style={{ display: "block", width: "100%", height: "auto" }} />
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: `0 20px 50px rgba(0,0,0,0.2)`, border: `1px solid rgba(255,255,255,0.1)` }}>
      {/* Browser chrome */}
      <div style={{ background: "#E8E8E8", padding: "7px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #D1D1D1" }}>
        <div style={{ display: "flex", gap: 5 }}>
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF5F57" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FEBC2E" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#28C840" }} />
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 5, padding: "3px 10px", fontSize: 9, color: "#666", textAlign: "center", border: "1px solid #DDD", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          🔒 {p.url.replace("https://", "")}
        </div>
      </div>
      {/* Site nav */}
      <div style={{ background: "#fff", padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${p.color1}22` }}>
        <div style={{ fontSize: 11, fontWeight: 900, color: p.color1, letterSpacing: 1.5, fontFamily: T.serif }}>{p.nav}</div>
        <div style={{ display: "flex", gap: 9, fontSize: 8, color: "#666", fontWeight: 600, letterSpacing: .5 }}>
          <span>Home</span><span>Shop</span><span>About</span><span>Contact</span>
        </div>
      </div>
      {/* Page content */}
      {renderHero()}
      {/* Footer strip */}
      <div style={{ background: p.color1, padding: "8px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.6)", letterSpacing: .5 }}>© 2026 {p.nav}</div>
        <div style={{ display: "flex", gap: 5 }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7 }}>f</span>
          <span style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7 }}>📷</span>
        </div>
      </div>
    </div>
  );
}

// SMM Instagram-grid mockup — uses real GitHub images

export function SMMMockup({ p }) {
  const [err, setErr] = useState(false);
  const img = p.img || (p.imgs && p.imgs[0]);
  return (
    <div style={{ background: "#fff", borderRadius: 18, overflow: "hidden", boxShadow: `0 16px 44px rgba(0,0,0,0.15)`, border: `1px solid ${T.cardB}` }}>
      {/* Brand-name header — centred, no logo */}
      <div style={{ background: "#fff", padding: "14px 16px 12px", borderBottom: `1px solid ${T.cardB}`, textAlign: "center" }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: T.ink, lineHeight: 1.2 }}>{p.title}</div>
        <div style={{ fontSize: 9.5, color: T.text2, marginTop: 3 }}>{p.category}</div>
      </div>
      {/* Single creative — real client image with gradient fallback */}
      <div style={{ aspectRatio: "4/5", overflow: "hidden", position: "relative", background: p.bg }}>
        {!err ? (
          <img src={img} alt={`${p.title} creative`}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={() => setErr(true)} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>📸</div>
        )}
      </div>
    </div>
  );
}

// ── LIGHTBOX (no body overflow lock — prevents scroll kill) ──────────────────

export function Lightbox({ item, onClose }) {
  useEffect(() => {
    const h = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);
  if (!item) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(10,8,5,0.92)", zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, overflowY: "auto" }}>
      <div onClick={e => e.stopPropagation()} style={{ maxWidth: 420, width: "100%", position: "relative", margin: "auto" }}>
        <button onClick={onClose} style={{ position: "absolute", top: -40, right: 0, background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: 32, height: 32, borderRadius: "50%", cursor: "pointer", fontSize: 18, lineHeight: "32px", textAlign: "center" }}>×</button>
        <SMMMockup p={item} />
        <div style={{ marginTop: 16, textAlign: "center", color: "#fff" }}>
          <div style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
          <div style={{ color: T.goldLight, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{item.category}</div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12.5, lineHeight: 1.65, maxWidth: 360, margin: "0 auto" }}>{item.desc}</div>
        </div>
      </div>
    </div>
  );
}

// ── PORTFOLIO PAGE ────────────────────────────────────────────────────────────

export function WhatsAppWidget() {
  const [openWA, setOpenWA] = useState(false);
  const [hoverWA, setHoverWA] = useState(false);
  const [openIG, setOpenIG] = useState(false);
  const [hoverIG, setHoverIG] = useState(false);
  const waUrl = "https://wa.me/918586989832?text=Hi%20Business%20Volunteers%2C%20I%20am%20interested%20in%20your%20services";
  const igUrl = "https://www.instagram.com/thebusinessvolunteers/";

  return (
    <div style={{ position: "fixed", bottom: 26, right: 26, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
      <style>{`
        @keyframes pulseRing { 0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5) } 100% { box-shadow: 0 0 0 20px rgba(37,211,102,0) } }
        @keyframes pulseRingIG { 0% { box-shadow: 0 0 0 0 rgba(225,48,108,0.5) } 100% { box-shadow: 0 0 0 20px rgba(225,48,108,0) } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: none } }
      `}</style>

      {/* ── INSTAGRAM POPUP ── */}
      {openIG && (
        <div style={{ width: 300, background: "#fff", borderRadius: 20, boxShadow: "0 24px 64px rgba(28,20,13,0.28)", overflow: "hidden", animation: "slideUp .35s cubic-bezier(.22,.61,.36,1)" }}>
          <div style={{ background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)", padding: "16px 18px", display: "flex", alignItems: "center", gap: 12, position: "relative" }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2m0-2.2C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.39 2.13a5.9 5.9 0 0 0 2.13 1.39c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.39-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 3.99zm7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" /></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13.5, fontFamily: T.serif }}>Business Volunteers</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff", display: "inline-block" }} />
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 10.5 }}>@thebusinessvolunteers</span>
              </div>
            </div>
            <button onClick={() => setOpenIG(false)} style={{ position: "absolute", top: 10, right: 12, background: "none", border: "none", color: "rgba(255,255,255,0.8)", fontSize: 18, cursor: "pointer", lineHeight: 1 }}>×</button>
          </div>
          <div style={{ padding: 18, background: "#fdf0f7" }}>
            <div style={{ background: "#fff", borderRadius: "14px 14px 14px 4px", padding: "12px 15px", fontSize: 13, color: T.ink, lineHeight: 1.6, boxShadow: "0 4px 14px rgba(28,20,13,0.08)" }}>
              📸 Follow us for daily marketing tips, reels & client results!
            </div>
          </div>
          <div style={{ padding: "14px 18px 18px", background: "#fdf0f7" }}>
            <a href={igUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)", color: "#fff", borderRadius: 50, padding: "13px", fontWeight: 800, fontSize: 13.5, textAlign: "center", letterSpacing: .4 }}>
              Follow on Instagram →
            </a>
          </div>
        </div>
      )}

      {/* ── INSTAGRAM BUTTON ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {hoverIG && !openIG && (
          <span style={{ background: T.ink, color: "#fff", fontSize: 11.5, fontWeight: 600, padding: "8px 16px", borderRadius: 50, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(28,20,13,0.25)", animation: "slideUp .25s ease" }}>
            Follow us on Instagram
          </span>
        )}
        <button onClick={() => { setOpenIG(!openIG); setOpenWA(false); }} onMouseEnter={() => setHoverIG(true)} onMouseLeave={() => setHoverIG(false)}
          style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 8px 28px rgba(225,48,108,0.45)", animation: openIG ? "none" : "pulseRingIG 2s infinite" }}>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2m0-2.2C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.39 2.13a5.9 5.9 0 0 0 2.13 1.39c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.39-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 3.99zm7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" /></svg>
        </button>
      </div>

      {/* ── WHATSAPP POPUP ── */}
      {openWA && (
        <div style={{ width: 300, background: "#fff", borderRadius: 20, boxShadow: "0 24px 64px rgba(28,20,13,0.28)", overflow: "hidden", animation: "slideUp .35s cubic-bezier(.22,.61,.36,1)" }}>
          <div style={{ background: T.ink, padding: "16px 18px", display: "flex", alignItems: "center", gap: 12, position: "relative" }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: T.gradGold, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: T.ink, fontSize: 13, fontFamily: T.serif, flexShrink: 0 }}>BV</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13.5, fontFamily: T.serif }}>Business Volunteers</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#25d366", display: "inline-block" }} />
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 10.5 }}>Replies in less than 5 mins</span>
              </div>
            </div>
            <button onClick={() => setOpenWA(false)} style={{ position: "absolute", top: 10, right: 12, background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: 18, cursor: "pointer", lineHeight: 1 }}>×</button>
          </div>
          <div style={{ padding: 18, background: "#F4EDE3" }}>
            <div style={{ background: "#fff", borderRadius: "14px 14px 14px 4px", padding: "12px 15px", fontSize: 13, color: T.ink, lineHeight: 1.6, boxShadow: "0 4px 14px rgba(28,20,13,0.08)" }}>
              👋 Hi! I'm interested in your digital marketing services.
            </div>
          </div>
          <div style={{ padding: "14px 18px 18px", background: "#F4EDE3" }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", background: "#25d366", color: "#fff", borderRadius: 50, padding: "13px", fontWeight: 800, fontSize: 13.5, textAlign: "center", letterSpacing: .4 }}>
              Start Chat →
            </a>
          </div>
        </div>
      )}

      {/* ── WHATSAPP BUTTON ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {hoverWA && !openWA && (
          <span style={{ background: T.ink, color: "#fff", fontSize: 11.5, fontWeight: 600, padding: "8px 16px", borderRadius: 50, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(28,20,13,0.25)", animation: "slideUp .25s ease" }}>
            Chat with us on WhatsApp
          </span>
        )}
        <button onClick={() => { setOpenWA(!openWA); setOpenIG(false); }} onMouseEnter={() => setHoverWA(true)} onMouseLeave={() => setHoverWA(false)}
          style={{ width: 56, height: 56, borderRadius: "50%", background: "#25d366", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 8px 28px rgba(37,211,102,0.45)", animation: openWA ? "none" : "pulseRing 2s infinite" }}>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.39 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.27z" /></svg>
        </button>
      </div>
    </div>
  );
}
