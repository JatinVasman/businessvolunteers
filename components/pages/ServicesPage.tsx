"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useGo } from "../../lib/nav";
import { T, SERVICES } from "../../lib/data";
import { ServiceDetail, FadeIn, SectionHead, Crumb } from "../ui";

function ServicesPage({ go, activeService, setActiveService }) {
  if (activeService) {
    const s = SERVICES.find(x=>x.id===activeService);
    return <ServiceDetail s={s} go={go} back={()=>setActiveService(null)} />;
  }
  // Display order for the Services page: requested six first, everything else kept as-is.
  const ORDER = ["smm","graphic-design","webdev","poster","reels","kpi"];
  const ordered = [
    ...ORDER.map(id=>SERVICES.find(x=>x.id===id)).filter(Boolean),
    ...SERVICES.filter(x=>!ORDER.includes(x.id)),
  ];
  return (
    <div style={{ paddingTop:36 }}>
      <Crumb go={go} items={[{label:"Home",page:"home"},{label:"Services"}]} />
      <SectionHead eyebrow="Our Craft" title="Services & Transparent Pricing" sub="No lock-in contracts. No hidden fees. Click any service for the full breakdown: pain points, deliverables, approach and FAQs." />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(255px,1fr))", gap:16 }}>
        {ordered.map((s,i)=>(
          <FadeIn key={s.id} delay={(i%6)*40}>
            <div onClick={()=>{ setActiveService(s.id); window.scrollTo({top:0,behavior:"smooth"}); }}
              style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:18, padding:26, height:"100%", display:"flex", flexDirection:"column", position:"relative", overflow:"hidden", boxShadow:`0 8px 24px ${T.shadow}`, transition:"transform .35s cubic-bezier(.22,.61,.36,1), box-shadow .35s cubic-bezier(.22,.61,.36,1), border-color .3s ease", cursor:"pointer" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow=`0 18px 40px ${T.shadowWarm}`; e.currentTarget.style.borderColor=T.cardBGold; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow=`0 8px 24px ${T.shadow}`; e.currentTarget.style.borderColor=T.cardB; }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradLux }} />
              <div style={{ fontSize:30, marginBottom:13 }}>{s.icon}</div>
              <div style={{ fontWeight:700, fontSize:15.5, marginBottom:7, color:T.ink, fontFamily:T.serif }}>{s.n}</div>
              <div style={{ color:T.text2, fontSize:12.5, marginBottom:12, lineHeight:1.65 }}>{s.d}</div>
              <div style={{ fontWeight:800, fontSize:14, fontFamily:T.serif, background:T.gradLux, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", marginTop:"auto", marginBottom:10 }}>{s.p}</div>
              <div style={{ color:T.gold, fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase" }}>Full Details →</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPageRoute(){
  const go=useGo(); const [activeService,setActiveService]=useState(null);
  return <ServicesPage go={go} activeService={activeService} setActiveService={setActiveService} />;
}