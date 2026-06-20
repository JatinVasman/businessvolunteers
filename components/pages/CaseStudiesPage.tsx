"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useGo } from "../../lib/nav";
import { T, INDUSTRY_DATA, btnGold, openCaseStudyGlobal } from "../../lib/data";
import { SEOBar, FadeIn, SectionHead, Crumb } from "../ui";

function CaseStudiesPage({ go }) {
  const [filter, setFilter] = useState("All");
  const all = useMemo(()=>Object.entries(INDUSTRY_DATA).flatMap(([k,d])=>d.caseStudies.map(c=>({...c, ind:d.name, color:d.color}))),[]);
  const inds = useMemo(()=>["All",...Object.values(INDUSTRY_DATA).map(d=>d.name).sort()],[]);
  const filtered = filter==="All"?all:all.filter(c=>c.ind===filter);
  const shown = filter==="All"?filtered.slice(0,48):filtered;
  return (
    <div style={{ paddingTop:36 }}>
      <Crumb go={go} items={[{label:"Home",page:"home"},{label:"Case Studies"}]} />
      <SEOBar pageKey="casestudies" />
      <SectionHead eyebrow="Proof of Work" title="Real Results, Real Businesses" sub={`${all.length}+ documented engagements across ${inds.length-1} industries — challenge, strategy, spend and outcome.`} />
      <div style={{ display:"flex", gap:6, flexWrap:"wrap", justifyContent:"center", marginBottom:16, maxHeight:150, overflowY:"auto", padding:"4px 0" }}>
        {inds.map(f=>(
          <button key={f} onClick={()=>setFilter(f)}
            style={{ background:filter===f?T.ink:"transparent", color:filter===f?"#fff":T.text2, border:`1px solid ${filter===f?T.ink:T.cardB}`, borderRadius:50, padding:"5px 13px", fontSize:11, fontWeight:600, cursor:"pointer" }}>{f}</button>
        ))}
      </div>
      <div style={{ textAlign:"center", color:T.text2, fontSize:11.5, marginBottom:24, letterSpacing:1.2, textTransform:"uppercase" }}>
        {filter==="All" ? `Showing ${shown.length} of ${all.length} — select an industry for its full set` : `${shown.length} case studies · ${filter}`}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:18, marginBottom:40 }}>
        {shown.map((cs,i)=>(
          <FadeIn key={cs.title} delay={(i%6)*40}>
            <div onClick={()=>openCaseStudyGlobal(cs)} style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:20, padding:26, position:"relative", overflow:"hidden", boxShadow:`0 10px 30px ${T.shadow}`, height:"100%", cursor:"pointer" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradLux }} />
              <span style={{ background:`${cs.color}10`, color:cs.color, padding:"3px 11px", borderRadius:12, fontSize:10.5, fontWeight:700, letterSpacing:.5 }}>{cs.ind}</span>
              <div style={{ fontWeight:700, color:T.ink, fontSize:15.5, margin:"10px 0 6px", fontFamily:T.serif }}>{cs.title}</div>
              <div style={{ display:"flex", gap:8, marginBottom:14, flexWrap:"wrap" }}>
                <span style={{ background:`${T.gold}16`, color:"#9C7424", padding:"4px 12px", borderRadius:14, fontSize:11, fontWeight:700 }}>ROI {cs.roi}</span>
                <span style={{ background:"rgba(31,138,76,0.1)", color:"#1F8A4C", padding:"4px 12px", borderRadius:14, fontSize:11, fontWeight:700 }}>{cs.spend}</span>
                {cs.duration && <span style={{ background:`${T.ink}0D`, color:T.ink, padding:"4px 12px", borderRadius:14, fontSize:11, fontWeight:700 }}>⏱ {cs.duration}</span>}
              </div>
              <div style={{ marginBottom:10 }}>
                <span style={{ fontSize:10, fontWeight:700, color:T.gold, display:"block", marginBottom:3, letterSpacing:2, textTransform:"uppercase" }}>Challenge</span>
                <span style={{ fontSize:13, color:T.ink }}>{cs.challenge}</span>
              </div>
              <div style={{ marginBottom:10 }}>
                <span style={{ fontSize:10, fontWeight:700, color:T.gold, display:"block", marginBottom:3, letterSpacing:2, textTransform:"uppercase" }}>Strategy</span>
                <span style={{ fontSize:13, color:T.ink }}>{cs.strategy}</span>
              </div>
              {cs.tactics && (
                <div style={{ marginBottom:10 }}>
                  <span style={{ fontSize:10, fontWeight:700, color:T.gold, display:"block", marginBottom:5, letterSpacing:2, textTransform:"uppercase" }}>What We Did</span>
                  <ul style={{ margin:0, paddingLeft:16 }}>
                    {cs.tactics.map((tc,ti)=>(
                      <li key={ti} style={{ fontSize:12.5, color:T.text2, lineHeight:1.6, marginBottom:2 }}>{tc}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div style={{ background:`${cs.color}08`, border:`1px solid ${cs.color}18`, borderRadius:12, padding:"11px 15px", marginBottom:12 }}>
                <span style={{ fontSize:10, fontWeight:700, color:cs.color, display:"block", marginBottom:3, letterSpacing:2, textTransform:"uppercase" }}>Results</span>
                <span style={{ fontSize:13, color:T.ink, fontWeight:600 }}>{cs.result}</span>
              </div>
              {cs.before && cs.after && (
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
                  <div style={{ flex:1, background:T.bg3, borderRadius:10, padding:"8px 10px", textAlign:"center" }}>
                    <div style={{ fontSize:9, color:T.text2, letterSpacing:1.5, textTransform:"uppercase", marginBottom:2 }}>Before</div>
                    <div style={{ fontSize:12, color:T.ink, fontWeight:600 }}>{cs.before}</div>
                  </div>
                  <span style={{ color:cs.color, fontSize:16, fontWeight:800 }}>→</span>
                  <div style={{ flex:1, background:`${cs.color}10`, borderRadius:10, padding:"8px 10px", textAlign:"center" }}>
                    <div style={{ fontSize:9, color:cs.color, letterSpacing:1.5, textTransform:"uppercase", marginBottom:2 }}>After</div>
                    <div style={{ fontSize:12, color:T.ink, fontWeight:700 }}>{cs.after}</div>
                  </div>
                </div>
              )}
              <div style={{ fontSize:12.5, color:T.text2, fontStyle:"italic", lineHeight:1.65, fontFamily:T.serif }}>{cs.testimonial}</div>
              <div style={{ color:cs.color, fontSize:12.5, fontWeight:700, marginTop:14 }}>Read full case study →</div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn>
        <div style={{ textAlign:"center" }}>
          <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={btnGold}>Become Our Next Case Study →</a>
        </div>
      </FadeIn>
    </div>
  );
}

// ── BLOG PAGE ─────────────────────────────────────────────────────────────────

export default function CaseStudiesPageRoute(){
  const go=useGo();
  return <CaseStudiesPage go={go} />;
}