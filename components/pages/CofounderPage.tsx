"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useGo } from "../../lib/nav";
import { T, SCHEMA_COFOUNDER, btnDark, btnGold, btnGhost, COFOUNDER_IMG } from "../../lib/data";
import { AboutSubnav, SEOBar, Eyebrow, FadeIn, SectionHead, Crumb, A } from "../ui";

function CofounderPage({ go }) {
  return (
    <div style={{ paddingTop:36 }}>
      <Crumb go={go} items={[{label:"Home",page:"home"},{label:"About",page:"about-overview"},{label:"Co-Founder"}]} />
      <SEOBar pageKey="cofounder" schema={SCHEMA_COFOUNDER} schemaLabel="PERSON SCHEMA" />
      <AboutSubnav page="cofounder" go={go} />

      <FadeIn>
        <div style={{ background:T.bg2, border:`1px solid ${T.cardBGold}`, borderRadius:28, padding:"44px 40px", marginBottom:30, position:"relative", overflow:"hidden", boxShadow:`0 24px 60px ${T.shadow}` }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:T.gradLux }} />
          <div style={{ display:"flex", gap:34, flexWrap:"wrap", alignItems:"center" }}>
            <div style={{ width:150, height:150, borderRadius:"50%", background:T.gradGold, display:"flex", alignItems:"center", justifyContent:"center", color:T.ink, fontFamily:T.serif, fontSize:46, fontWeight:800, flexShrink:0, boxShadow:`0 18px 44px ${T.shadow}`, overflow:"hidden" }}><img src={COFOUNDER_IMG} alt="Khwahish Sahai" style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%" }} /></div>
            <div style={{ flex:1, minWidth:260 }}>
              <Eyebrow>Co-Founder & Creative Director</Eyebrow>
              <h1 style={{ fontFamily:T.serif, fontSize:"clamp(28px,4vw,42px)", fontWeight:700, color:T.ink, margin:"0 0 10px", letterSpacing:-.5 }}>Khwahish Sahai</h1>
              <p style={{ color:T.text2, fontSize:15.5, lineHeight:1.8, margin:"0 0 20px", maxWidth:580, fontFamily:T.serif, fontStyle:"italic" }}>
                "Design isn't decoration — it's the fastest way a brand earns trust before a single word is read."
              </p>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <a href="https://www.linkedin.com/in/khwahish-sahai/" target="_blank" rel="noopener noreferrer" style={btnDark}>Connect on LinkedIn</a>
                <button onClick={()=>go("contact")} style={btnGhost}>Talk to Khwahish →</button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:22, padding:32, marginBottom:24, boxShadow:`0 10px 32px ${T.shadow}` }}>
          <Eyebrow>Background & Role</Eyebrow>
          <p style={{ color:T.text2, fontSize:14.5, lineHeight:1.95, margin:"0 0 14px" }}>
            Khwahish leads everything visual at Business Volunteers — brand identities, campaign creative, content systems and the look-and-feel of every client touchpoint. Her path into marketing came through design: an early fascination with how colour, type and layout change the way people feel about a business, sharpened through years of hands-on creative work for brands across healthcare, education, wellness and retail.
          </p>
          <p style={{ color:T.text2, fontSize:14.5, lineHeight:1.95, margin:0 }}>
            As Co-Founder, she built the agency's creative engine — the system that lets a ₹149 poster and a full website rebuild share the same standard of polish. Her philosophy: premium isn't a budget, it's a discipline.
          </p>
        </div>
      </FadeIn>

      <SectionHead eyebrow="Creative Philosophy" title="How Khwahish Builds Brands" />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:16, marginBottom:44 }}>
        {[
          { icon:"🎨", t:"Clarity Before Cleverness", d:"A confused viewer never converts. Every design starts with one job — communicate the offer in under three seconds." },
          { icon:"📐", t:"Systems, Not One-Offs", d:"Brand kits, templates and content systems mean every post, page and deck feels unmistakably yours — at scale." },
          { icon:"💛", t:"Emotion Wins Attention", d:"From smile-transformation reels to festival creatives, work designed to make people feel something always outperforms." },
        ].map((p,i)=>(
          <FadeIn key={i} delay={i*70}>
            <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:18, padding:26, height:"100%", boxShadow:`0 8px 24px ${T.shadow}` }}>
              <div style={{ fontSize:30, marginBottom:12 }}>{p.icon}</div>
              <div style={{ fontFamily:T.serif, fontWeight:700, fontSize:16, color:T.ink, marginBottom:8 }}>{p.t}</div>
              <div style={{ color:T.text2, fontSize:13.5, lineHeight:1.75 }}>{p.d}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <SectionHead eyebrow="Selected Work" title="Creative That Performed" />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:16, marginBottom:44 }}>
        {[
          { t:"Dental Before-After System", r:"Reel framework behind SmileCraft's 1.4 lakh-view viral hit and 4x cosmetic enquiry growth." },
          { t:"Premium Website Rebuilds", r:"Conversion-first designs like Apex Implant Centre's site — supporting ₹15.7L/month in digital revenue." },
          { t:"Healthcare Brand Kits", r:"Trust-led identity systems for clinics and hospitals — compliant, warm, and instantly credible." },
        ].map((c,i)=>(
          <FadeIn key={i} delay={i*60}>
            <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:18, padding:24, height:"100%", boxShadow:`0 8px 24px ${T.shadow}`, position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradGold }} />
              <div style={{ fontFamily:T.serif, fontWeight:700, fontSize:15.5, color:T.ink, marginBottom:8 }}>{c.t}</div>
              <div style={{ color:T.text2, fontSize:13, lineHeight:1.7 }}>{c.r}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div style={{ background:T.ink, borderRadius:26, padding:"42px 34px", textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradGold }} />
          <h3 style={{ color:"#fff", fontFamily:T.serif, fontSize:26, fontWeight:700, margin:"0 0 10px" }}>Give Your Brand the Premium Treatment</h3>
          <p style={{ color:"rgba(255,255,255,0.65)", fontSize:14, margin:"0 auto 26px", maxWidth:440 }}>Book a creative consultation with Khwahish and the design studio.</p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={btnGold}>Start on WhatsApp →</a>
            <button onClick={()=>go("founder")} style={{ ...btnGhost, color:"#fff", border:"1.5px solid rgba(255,255,255,0.4)" }}>Meet the Founder</button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

// ── ABOUT OVERVIEW (Mission + Mindset) ────────────────────────────────────────

export default function CofounderPageRoute(){
  const go=useGo();
  return <CofounderPage go={go} />;
}