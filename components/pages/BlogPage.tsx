"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useGo } from "../../lib/nav";
import { T, INDUSTRY_DATA, NAME2ID, blogMeta, openBlogGlobal, GENERAL_BLOGS, btnGhost } from "../../lib/data";
import { SEOBar, FadeIn, SectionHead, Crumb } from "../ui";

function BlogPage({ go }) {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");
  const all = useMemo(()=>[
    ...GENERAL_BLOGS,
    ...Object.values(INDUSTRY_DATA).flatMap(d=>d.blogs.map(b=>({...b, tag:d.name}))),
  ],[]);
  const tags = useMemo(()=>["All",...[...new Set(all.map(b=>b.tag))].sort()],[all]);
  const filtered = all.filter(b=>(filter==="All"||b.tag===filter) && (!q || b.title.toLowerCase().includes(q.toLowerCase()) || b.keyword.toLowerCase().includes(q.toLowerCase())));
  const shown = filtered.slice(0,30);
  return (
    <div style={{ paddingTop:36 }}>
      <Crumb go={go} items={[{label:"Home",page:"home"},{label:"Blog"}]} />
      <SEOBar pageKey="blog" />
      <SectionHead eyebrow="Insights" title="The Business Volunteers Blog" sub={`${all.length}+ SEO articles and pillar guides across services and industries — written for humans, structured for Google and AI search.`} />
      <div style={{ display:"flex", gap:10, marginBottom:16, flexWrap:"wrap", justifyContent:"center" }}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search articles or keywords..."
          style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:50, padding:"11px 22px", color:T.ink, fontSize:13, minWidth:280, boxShadow:`0 4px 16px ${T.shadow}` }} />
      </div>
      <div style={{ display:"flex", gap:6, flexWrap:"wrap", justifyContent:"center", marginBottom:14, maxHeight:130, overflowY:"auto", padding:"4px 0" }}>
        {tags.map(f=>(
          <button key={f} onClick={()=>setFilter(f)}
            style={{ background:filter===f?T.ink:"transparent", color:filter===f?"#fff":T.text2, border:`1px solid ${filter===f?T.ink:T.cardB}`, borderRadius:50, padding:"5px 12px", fontSize:10.5, fontWeight:600, cursor:"pointer" }}>{f}</button>
        ))}
      </div>
      <div style={{ textAlign:"center", color:T.text2, fontSize:11.5, marginBottom:24, letterSpacing:1.2, textTransform:"uppercase" }}>
        {filtered.length>shown.length ? `Showing ${shown.length} of ${filtered.length} — filter or search to narrow` : `${shown.length} articles${filter!=="All"?` · ${filter}`:""}`}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:16, marginBottom:40 }}>
        {shown.map((b,i)=>{
          const mt = blogMeta(b);
          const ind = NAME2ID[b.tag] ? INDUSTRY_DATA[NAME2ID[b.tag]] : null;
          return (
            <FadeIn key={b.title} delay={(i%6)*35}>
              <div onClick={()=>openBlogGlobal(b)}
                style={{ background:T.bg2, border:`1px solid ${b.pillar?T.cardBGold:T.cardB}`, borderRadius:18, overflow:"hidden", boxShadow:`0 6px 22px ${T.shadow}`, height:"100%", cursor:"pointer", transition:"transform .35s cubic-bezier(.22,.61,.36,1), box-shadow .35s cubic-bezier(.22,.61,.36,1), border-color .3s ease", display:"flex", flexDirection:"column" }}
                onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow=`0 18px 40px ${T.shadowWarm}`; e.currentTarget.style.borderColor=T.cardBGold; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow=`0 8px 24px ${T.shadow}`; e.currentTarget.style.borderColor=T.cardB; }}>
                <div style={{ background:ind?`linear-gradient(120deg,${ind.color},${T.gold})`:T.gradLux, height:96, display:"flex", alignItems:"center", justifyContent:"center", fontSize:40, position:"relative" }}>
                  {ind?ind.icon:"✦"}
                  {b.pillar && <span style={{ position:"absolute", top:10, right:10, background:T.gradGold, color:T.ink, padding:"3px 11px", borderRadius:12, fontSize:9, fontWeight:800, letterSpacing:1.5 }}>PILLAR</span>}
                </div>
                <div style={{ padding:"18px 20px 20px", flex:1, display:"flex", flexDirection:"column" }}>
                  <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:9, flexWrap:"wrap" }}>
                    <span style={{ fontSize:10.5, color:T.text2 }}>📅 {mt.date}</span>
                    <span style={{ fontSize:10.5, color:T.text2 }}>⏱ {mt.read}</span>
                    <span style={{ background:`${T.gold}14`, color:"#9C7424", padding:"2px 9px", borderRadius:10, fontSize:10, fontWeight:700 }}>{mt.words}</span>
                  </div>
                  <div style={{ fontWeight:700, color:T.ink, fontSize:14.5, marginBottom:7, lineHeight:1.45, fontFamily:T.serif }}>{b.title}</div>
                  <div style={{ fontSize:12.5, color:T.text2, marginBottom:12, lineHeight:1.6, flex:1 }}>{b.desc}</div>
                  <div style={{ display:"flex", gap:6, flexWrap:"wrap", alignItems:"center" }}>
                    <span style={{ background:T.bg3, color:T.text2, padding:"3px 10px", borderRadius:10, fontSize:10, fontWeight:600 }}>{b.tag}</span>
                    <span style={{ background:`${T.primary}0d`, color:T.primary, padding:"3px 10px", borderRadius:10, fontSize:10, fontWeight:700 }}>{b.keyword}</span>
                    <span style={{ marginLeft:"auto", color:T.gold, fontSize:10.5, fontWeight:800, letterSpacing:1, textTransform:"uppercase" }}>Read →</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
      <FadeIn>
        <div style={{ textAlign:"center" }}>
          <button onClick={()=>go("services")} style={btnGhost}>Explore Our Content Marketing Service →</button>
        </div>
      </FadeIn>
    </div>
  );
}

// ── PRICING PAGE (packages + B2B + FAQ) ──────────────────────────────────────

export default function BlogPageRoute(){
  const go=useGo();
  return <BlogPage go={go} />;
}