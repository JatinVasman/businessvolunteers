"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useGo } from "../../lib/nav";
import { T, SERVICES, TEAM_FUNCTIONS, btnGold, FOUNDER_IMG, COFOUNDER_IMG } from "../../lib/data";
import { AboutSubnav, SEOBar, Eyebrow, FadeIn, SectionHead, Crumb, A } from "../ui";

function TeamPage({ go }) {
  return (
    <div style={{ paddingTop:36 }}>
      <Crumb go={go} items={[{label:"Home",page:"home"},{label:"About",page:"about-overview"},{label:"Our Team"}]} />
      <SEOBar pageKey="team" />
      <AboutSubnav page="team" go={go} />

      <SectionHead eyebrow="The People" title="Meet Our Team" sub="A founder-led crew of strategists, designers, developers and analysts — every member dedicated to your growth." />

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))", gap:18, marginBottom:40 }}>
        {[
          { ini:"HC", grad:T.gradLux, img:FOUNDER_IMG, name:"Harsh Chaudhary", role:"Founder & CEO", d:"Strategy, growth systems and KPI dashboards. The owner's eye on every account.", page:"founder", inkBtn:true },
          { ini:"KS", grad:T.gradGold, img:COFOUNDER_IMG, name:"Khwahish Sahai", role:"Co-Founder & Creative Director", d:"Brand identity, campaign creative and the premium standard across all deliverables.", page:"cofounder" },
        ].map((p,i)=>(
          <FadeIn key={i} delay={i*70}>
            <div style={{ background:T.bg2, border:`1px solid ${T.cardBGold}`, borderRadius:22, padding:30, boxShadow:`0 14px 36px ${T.shadow}`, display:"flex", gap:20, alignItems:"center", flexWrap:"wrap" }}>
              <div style={{ width:84, height:84, borderRadius:"50%", background:p.grad, display:"flex", alignItems:"center", justifyContent:"center", color:i===0?"#fff":T.ink, fontFamily:T.serif, fontSize:27, fontWeight:800, flexShrink:0, overflow:"hidden" }}>{p.img ? <img src={p.img} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%" }} /> : p.ini}</div>
              <div style={{ flex:1, minWidth:180 }}>
                <div style={{ fontFamily:T.serif, fontWeight:700, fontSize:18, color:T.ink }}>{p.name}</div>
                <div style={{ color:T.gold, fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", margin:"4px 0 8px" }}>{p.role}</div>
                <div style={{ color:T.text2, fontSize:12.5, lineHeight:1.65, marginBottom:12 }}>{p.d}</div>
                <button onClick={()=>go(p.page)} style={{ background:"none", border:"none", color:T.gold, fontWeight:700, fontSize:11.5, letterSpacing:1.5, textTransform:"uppercase", cursor:"pointer", padding:0 }}>Full Profile →</button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:16, marginBottom:48 }}>
        {TEAM_FUNCTIONS.map((f,i)=>(
          <FadeIn key={i} delay={i*55}>
            <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:18, padding:26, height:"100%", boxShadow:`0 8px 24px ${T.shadow}`, position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradLux }} />
              <div style={{ fontSize:28, marginBottom:12 }}>{f.icon}</div>
              <div style={{ fontFamily:T.serif, fontWeight:700, fontSize:15, color:T.ink, marginBottom:8 }}>{f.t}</div>
              <div style={{ color:T.text2, fontSize:12.5, lineHeight:1.7 }}>{f.d}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:22, padding:30, marginBottom:40, boxShadow:`0 10px 30px ${T.shadow}` }}>
          <Eyebrow>Our Culture</Eyebrow>
          <p style={{ color:T.text2, fontSize:14, lineHeight:1.9, margin:0 }}>
            We run an open, continuously learning studio: weekly skill-share sessions, dashboards on every wall, and a standing rule that anyone can challenge any idea — including the founders'. The "Volunteers" in our name isn't decoration; the team regularly trains client staff and supports community initiatives, because growth we don't share isn't really growth.
          </p>
        </div>
      </FadeIn>

      <SectionHead eyebrow="Working With Us" title="The Collaboration Rhythm" />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:14, marginBottom:40 }}>
        {[["Kick-off","Goals, access and KPI baselines locked in one focused session."],["Weekly Check-ins","Shipped work, numbers and next steps — 20 minutes, no fluff."],["Live Dashboards","Your performance data visible 24/7, not hidden in monthly PDFs."],["Monthly Strategy","Review, learn, redirect — the plan evolves with the data."]].map(([t,d],i)=>(
          <FadeIn key={i} delay={i*60}>
            <div style={{ background:T.bg3, borderRadius:16, padding:22, height:"100%" }}>
              <div style={{ fontWeight:700, fontSize:14, color:T.ink, marginBottom:6, fontFamily:T.serif }}>{t}</div>
              <div style={{ color:T.text2, fontSize:12.5, lineHeight:1.65 }}>{d}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div style={{ textAlign:"center" }}>
          <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={btnGold}>Work With This Team →</a>
        </div>
      </FadeIn>
    </div>
  );
}

// ── SERVICES PAGE (hub + detail) ──────────────────────────────────────────────

export default function TeamPageRoute(){
  const go=useGo();
  return <TeamPage go={go} />;
}