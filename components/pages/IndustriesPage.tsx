"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGo } from "../../lib/nav";
import { T, CATEGORIES } from "../../lib/data";
import { SEOBar, FadeIn, SectionHead, Crumb } from "../ui";

function IndustriesPage({ setInd, go }) {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const allSubs = useMemo(()=>CATEGORIES.flatMap(c=>c.sub.map(s=>({ ...s, catLabel:c.label, catColor:c.color }))),[]);
  const filtered = allSubs.filter(s=>{
    const ms = !search || s.name.toLowerCase().includes(search.toLowerCase());
    const mc = cat==="All" || s.catLabel===cat;
    return ms && mc;
  });
  return (
    <div style={{ paddingTop:36 }}>
      <Crumb go={go} items={[{label:"Home",page:"home"},{label:"Industries"}]} />
      <SEOBar pageKey="industries" />
      <SectionHead eyebrow="Our Expertise" title="89 Industries. One Standard of Excellence." sub="Explore our fully launched industry authority hubs — complete with case studies, market intelligence and content libraries. More launching shortly." />
      <div style={{ display:"flex", gap:10, marginBottom:18, flexWrap:"wrap", justifyContent:"center" }}>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search industries..."
          style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:50, padding:"11px 22px", color:T.ink, fontSize:13, minWidth:260, boxShadow:`0 4px 16px ${T.shadow}` }} />
      </div>
      <div style={{ display:"flex", gap:7, flexWrap:"wrap", justifyContent:"center", marginBottom:26 }}>
        {["All",...CATEGORIES.map(c=>c.label)].map(c=>(
          <button key={c} onClick={()=>setCat(c)}
            style={{ background:cat===c?T.ink:"transparent", color:cat===c?"#fff":T.text2, border:`1px solid ${cat===c?T.ink:T.cardB}`, borderRadius:50, padding:"6px 16px", fontSize:11.5, fontWeight:600, cursor:"pointer" }}>{c}</button>
        ))}
      </div>
      <div style={{ color:T.text2, fontSize:12, textAlign:"center", marginBottom:22, letterSpacing:1 }}>{filtered.length} INDUSTRIES SHOWN</div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(185px,1fr))", gap:12 }}>
        {filtered.map((ind,i)=>(
          <FadeIn key={ind.id} delay={(i%8)*30}>
            <div onClick={()=>ind.ready && setInd(ind.id)}
              style={{ background:ind.ready?T.bg2:T.bg3, border:`1px solid ${ind.ready?T.cardBGold:T.cardB}`, borderRadius:16, padding:18, cursor:ind.ready?"pointer":"default", transition:"transform .35s cubic-bezier(.22,.61,.36,1), box-shadow .35s cubic-bezier(.22,.61,.36,1), border-color .3s ease", position:"relative", overflow:"hidden", opacity:ind.ready?1:0.65, boxShadow:ind.ready?`0 6px 20px ${T.shadow}`:"none", height:"100%" }}
              onMouseEnter={e=>{ if(ind.ready){ e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow=`0 18px 40px ${T.shadowWarm}`; e.currentTarget.style.borderColor=T.cardBGold; }}}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow=ind.ready?`0 8px 24px ${T.shadow}`:"none"; e.currentTarget.style.borderColor=T.cardB; }}>
              {ind.ready && <div style={{ position:"absolute", top:10, right:10, background:T.gradGold, color:T.ink, fontSize:8.5, fontWeight:800, padding:"3px 9px", borderRadius:10, letterSpacing:1 }}>LIVE</div>}
              <div style={{ fontSize:27, marginBottom:9 }}>{ind.icon}</div>
              <div style={{ fontWeight:700, fontSize:13, color:T.ink, marginBottom:4, lineHeight:1.35, fontFamily:T.serif }}>{ind.name}</div>
              <div style={{ fontSize:10.5, color:ind.catColor, fontWeight:600, letterSpacing:.4 }}>{ind.catLabel}</div>
              {ind.ready ? <div style={{ fontSize:11, color:T.gold, fontWeight:700, marginTop:6 }}>Explore →</div>
                : <div style={{ fontSize:10, color:T.text2, marginTop:6, fontStyle:"italic" }}>Coming soon</div>}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

// ── INDUSTRY DETAIL PAGE ──────────────────────────────────────────────────────

export default function IndustriesPageRoute(){
  const go=useGo(); const router=useRouter(); const setInd=(id)=>router.push("/industries/"+id);
  return <IndustriesPage go={go} setInd={setInd} />;
}