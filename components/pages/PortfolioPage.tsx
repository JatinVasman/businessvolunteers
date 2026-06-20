"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useGo } from "../../lib/nav";
import { T, btnGold, btnGhost, SMM_PORTFOLIO, WEB_PORTFOLIO, LOCATIONS } from "../../lib/data";
import { WebsiteMockup, Lightbox, Eyebrow, FadeIn, SMMMockup, SectionHead, Crumb } from "../ui";

/* ── CSS injected once for card hover animations & cursor compatibility ── */
const CARD_STYLES = `
  /* Custom cursor fix: hide native cursor on all clickable portfolio elements */
  html.bv-cursor-on .bv-card,
  html.bv-cursor-on .bv-card * { cursor: none !important; }

  /* SMM card hover lift */
  .bv-card-smm {
    transition: transform .35s cubic-bezier(.22,.61,.36,1),
                box-shadow .35s cubic-bezier(.22,.61,.36,1);
  }
  .bv-card-smm:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px var(--bv-shadow-warm, rgba(194,65,12,.18));
  }

  /* Web card hover lift */
  .bv-card-web {
    transition: transform .35s cubic-bezier(.22,.61,.36,1),
                box-shadow .35s cubic-bezier(.22,.61,.36,1),
                border-color .35s ease;
  }
  .bv-card-web:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px var(--bv-shadow-warm, rgba(194,65,12,.18));
    border-color: var(--bv-gold, #C9963B) !important;
  }

  /* Visit Site button hover — colour set via data-attr to avoid inline style clashes */
  .bv-visit-btn { transition: background .3s ease; }
`;

function useInjectStyles(css: string) {
  useEffect(() => {
    const id = "bv-portfolio-styles";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
    return () => { try { document.head.removeChild(el); } catch {} };
  }, []);
}

function PortfolioPage({ go }) {
  const [tab, setTab] = useState("smm");
  const [lightbox, setLightbox] = useState(null);

  useInjectStyles(CARD_STYLES);

  return (
    <div style={{ paddingTop:36 }}>
      <Crumb go={go} items={[{label:"Home",page:"home"},{label:"Portfolio"}]} />
      <SectionHead eyebrow="The Work" title="Our Portfolio"
        sub="Real work for real brands across India — social media campaigns and live websites. Every project: strategy first, polish always." />

      {/* ── TAB SWITCHER ── */}
      <div style={{ display:"flex", gap:0, justifyContent:"center", marginBottom:40, background:T.bg2, padding:6, borderRadius:50, maxWidth:400, margin:"0 auto 40px", boxShadow:`0 8px 24px ${T.shadow}`, border:`1px solid ${T.cardBGold}` }}>
        {[{k:"smm",l:"Social Media",c:SMM_PORTFOLIO.length},{k:"web",l:"Websites",c:WEB_PORTFOLIO.length}].map(t=>(
          <button key={t.k} onClick={()=>setTab(t.k)}
            style={{ flex:1, background:tab===t.k?T.ink:"transparent", color:tab===t.k?"#fff":T.text2, border:"none", borderRadius:50, padding:"11px 16px", fontSize:13, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:7 }}>
            {t.l}
            <span style={{ background:tab===t.k?"rgba(201,150,59,0.9)":T.bg3, color:tab===t.k?T.ink:T.text2, padding:"2px 8px", borderRadius:10, fontSize:10, fontWeight:800 }}>{t.c}</span>
          </button>
        ))}
      </div>

      {/* ── SMM GRID ── */}
      {tab==="smm" && (
        <div style={{ width:"100%" }}>
          <p style={{ textAlign:"center", color:T.text2, fontSize:13, lineHeight:1.7, marginBottom:32, maxWidth:560, margin:"0 auto 32px" }}>
            {SMM_PORTFOLIO.length} live social media projects. Click any card to enlarge.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20, marginBottom:48 }}>
            {SMM_PORTFOLIO.map((p)=>(
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                aria-label={`View ${p.title}`}
                onClick={()=>setLightbox(p)}
                onKeyDown={e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); setLightbox(p); } }}
                className="bv-card bv-card-smm"
                style={{ minWidth:0, borderRadius:18 }}
              >
                <SMMMockup p={p} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── WEBSITES GRID ── */}
      {tab==="web" && (
        <div style={{ width:"100%" }}>
          <p style={{ textAlign:"center", color:T.text2, fontSize:13, lineHeight:1.7, marginBottom:32, maxWidth:560, margin:"0 auto 32px" }}>
            {WEB_PORTFOLIO.length} live websites — mobile-first, SEO-ready, conversion-focused.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:24, marginBottom:48 }}>
            {WEB_PORTFOLIO.map((p)=>(
              <div
                key={p.id}
                className="bv-card bv-card-web"
                style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:20, overflow:"hidden", boxShadow:`0 10px 30px ${T.shadow}`, display:"flex", flexDirection:"column" }}
              >
                {/* Mockup preview */}
                <div style={{ background:`linear-gradient(135deg,${p.color1}22,${p.color2}15)`, padding:"18px 18px 20px" }}>
                  <WebsiteMockup p={p} />
                </div>
                {/* Info */}
                <div style={{ padding:"18px 20px 20px", flex:1, display:"flex", flexDirection:"column" }}>
                  <div style={{ fontFamily:T.serif, fontWeight:700, fontSize:16, color:T.ink, marginBottom:6 }}>{p.title}</div>
                  <div style={{ display:"flex", gap:5, marginBottom:10, flexWrap:"wrap" }}>
                    {p.tags.map(t=>(
                      <span key={t} style={{ background:`${p.color1}14`, color:p.color1, padding:"2px 9px", borderRadius:50, fontSize:9.5, fontWeight:700 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ color:T.text2, fontSize:12, lineHeight:1.65, marginBottom:14, flex:1 }}>{p.desc}</div>
                  <VisitButton url={p.url} color={p.color1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div style={{ background:T.ink, borderRadius:24, padding:"38px 32px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradGold }} />
        <Eyebrow center light>Your Project Next?</Eyebrow>
        <h3 style={{ color:"#fff", fontFamily:T.serif, fontSize:24, fontWeight:700, margin:"0 0 10px" }}>Let's add your brand to this gallery</h3>
        <p style={{ color:"rgba(255,255,255,0.6)", fontSize:13, margin:"0 auto 24px", maxWidth:400, lineHeight:1.7 }}>
          Social media glow-up or brand-new website — premium, transparent, on time.
        </p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={btnGold}>Start a Project →</a>
          <button onClick={()=>go("services")} style={{ ...btnGhost, color:"#fff", border:"1.5px solid rgba(255,255,255,0.35)" }}>View Services</button>
        </div>
      </div>

      <Lightbox item={lightbox} onClose={()=>setLightbox(null)} />
    </div>
  );
}

/* Visit Site button — uses React state for hover colour so no inline mutation */
function VisitButton({ url, color }: { url: string; color: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bv-visit-btn"
      style={{ background:hovered ? color : T.ink, color:"#fff", borderRadius:50, padding:"10px 18px", fontWeight:700, fontSize:12, textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center", gap:7 }}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
    >
      Visit Live Site
      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/></svg>
    </a>
  );
}

// ── SERVICE LOCATIONS ─────────────────────────────────────────────────────────

export default function PortfolioPageRoute(){
  const go=useGo();
  return <PortfolioPage go={go} />;
}