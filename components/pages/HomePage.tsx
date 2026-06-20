"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGo } from "../../lib/nav";
import { T, SERVICES, TESTIMONIALS, btnDark, btnGold, btnGhost, FOUNDER_IMG, COFOUNDER_IMG } from "../../lib/data";
import { Eyebrow, FadeIn, SectionHead, useInView, CountUp } from "../ui";

function HomePage({ go, openService }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref}>
      {/* Hero */}
      <div style={{ textAlign:"center", padding:"92px 20px 70px", position:"relative" }}>
        <div style={{ position:"absolute", top:60, left:"50%", transform:"translateX(-50%)", width:560, height:560, borderRadius:"50%", background:"radial-gradient(circle, rgba(201,150,59,0.10), transparent 65%)", pointerEvents:"none" }} />
        <FadeIn>
          <div style={{ display:"inline-flex", alignItems:"center", gap:10, background:T.bg2, color:T.ink, padding:"9px 26px", borderRadius:50, fontSize:12, fontWeight:600, marginBottom:30, border:`1px solid ${T.cardBGold}`, boxShadow:`0 8px 26px ${T.shadow}`, letterSpacing:.5 }}>
            <span style={{ color:T.gold }}>✦</span> Trusted by 2,786 Businesses Across 89 Industries <span style={{ color:T.gold }}>✦</span>
          </div>
        </FadeIn>
        <FadeIn delay={90}>
          <h1 style={{ fontSize:"clamp(34px,5.6vw,66px)", fontWeight:700, lineHeight:1.12, margin:"0 0 22px", color:T.ink, fontFamily:T.serif, letterSpacing:-1 }}>
            Your Brand Deserves To Be<br/>
            <em style={{ background:T.gradLux, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontStyle:"italic" }}>Seen. Heard. Chosen.</em>
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p style={{ color:T.text2, fontSize:17, maxWidth:540, margin:"0 auto 16px", lineHeight:1.8 }}>
            India's most comprehensive digital marketing agency — premium creative, data-driven strategy, and dashboards that turn growth into a science.
          </p>
          {/* Trust signals row */}
          <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap", marginBottom:28 }}>
            {["⚡ Immediate Response","🔓 Zero Lock-In","💳 Post-Pay Available","🏆 4.9★ Rated"].map((t,i)=>(
              <span key={i} style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:50, padding:"6px 14px", fontSize:11, fontWeight:700, color:T.ink, letterSpacing:.3 }}>{t}</span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={210}>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <button onClick={()=>go("services")} style={{ ...btnDark, padding:"16px 38px", fontSize:14.5 }}>Explore Our Services</button>
            <button onClick={()=>go("portfolio")} style={{ ...btnGhost, padding:"16px 38px", fontSize:14.5 }}>View Our Work</button>
          </div>
        </FadeIn>
      </div>

      {/* Stats Band */}
      <FadeIn>
        <div className="bv-stats-band-light" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", background:T.bg2, border:`1px solid ${T.cardBGold}`, borderRadius:24, overflow:"hidden", marginBottom:76, boxShadow:`0 24px 60px ${T.shadow}` }}>
          {[{n:"2786",l:"Happy Clients"},{n:"89",l:"Industries Served"},{n:"100%",l:"Satisfaction Rate"},{n:"501",l:"Delivered Projects"}].map((s,i)=>(
            <div key={i} className="bv-stats-item" style={{ padding:"30px 14px", textAlign:"center" }}>
              <div style={{ fontSize:30, fontWeight:800, fontFamily:T.serif, background:T.gradLux, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}><CountUp target={s.n} go={vis} /></div>
              <div style={{ fontSize:11.5, color:T.text2, marginTop:7, letterSpacing:1.5, textTransform:"uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Services Preview */}
      <SectionHead eyebrow="What We Do" title="Services Crafted for Growth" sub="Transparent pricing. Premium execution. Measurable outcomes — every single time." />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:18, marginBottom:30 }}>
        {[...SERVICES].sort((a,b)=> a.id==="smm"?-1:b.id==="smm"?1:0).slice(0,8).map((s,i)=>(
          <FadeIn key={s.id} delay={i*50}>
            <div onClick={()=>openService(s.id)}
              style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:20, padding:28, height:"100%", display:"flex", flexDirection:"column", position:"relative", overflow:"hidden", boxShadow:`0 8px 26px ${T.shadow}`, transition:"transform .35s cubic-bezier(.22,.61,.36,1), box-shadow .35s cubic-bezier(.22,.61,.36,1), border-color .3s ease", cursor:"pointer" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow=`0 18px 40px ${T.shadowWarm}`; e.currentTarget.style.borderColor=T.cardBGold; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow=`0 8px 24px ${T.shadow}`; e.currentTarget.style.borderColor=T.cardB; }}>
              <div style={{ fontSize:30, marginBottom:14 }}>{s.icon}</div>
              <div style={{ fontWeight:700, fontSize:16, marginBottom:8, color:T.ink, fontFamily:T.serif }}>{s.n}</div>
              <div style={{ color:T.text2, fontSize:13, marginBottom:14, lineHeight:1.7 }}>{s.d}</div>
              <div style={{ fontWeight:800, fontSize:14.5, fontFamily:T.serif, background:T.gradLux, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", marginTop:"auto" }}>{s.p}</div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn>
        <div style={{ textAlign:"center", marginBottom:80 }}>
          <button onClick={()=>go("services")} style={btnGhost}>View All Services & Pricing →</button>
        </div>
      </FadeIn>

      {/* Founders teaser */}
      <SectionHead eyebrow="Founder-Led" title="The People Behind the Results" sub="Decision-makers stay on your account — meet the founders who run every engagement." />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))", gap:18, marginBottom:80 }}>
        {[
          { ini:"HC", grad:T.gradLux, img:FOUNDER_IMG, inkTxt:false, name:"Harsh Chaudhary", role:"Founder & CEO", d:"Data-driven strategy, creative storytelling and bold execution — turning brands into category leaders.", page:"founder" },
          { ini:"KS", grad:T.gradGold, img:COFOUNDER_IMG, inkTxt:true, name:"Khwahish Sahai", role:"Co-Founder & Creative Director", d:"The premium creative standard behind every identity, campaign and conversion-first design.", page:"cofounder" },
        ].map((p,i)=>(
          <FadeIn key={p.ini} delay={i*80}>
            <div onClick={()=>go(p.page)}
              style={{ background:T.bg2, border:`1px solid ${T.cardBGold}`, borderRadius:24, padding:30, cursor:"pointer", boxShadow:`0 14px 36px ${T.shadow}`, display:"flex", gap:20, alignItems:"center", flexWrap:"wrap", transition:"transform .35s cubic-bezier(.22,.61,.36,1), box-shadow .35s cubic-bezier(.22,.61,.36,1), border-color .3s ease" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow=`0 18px 40px ${T.shadowWarm}`; e.currentTarget.style.borderColor=T.cardBGold; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow=`0 8px 24px ${T.shadow}`; e.currentTarget.style.borderColor=T.cardB; }}>
              <div style={{ width:84, height:84, borderRadius:"50%", background:p.grad, display:"flex", alignItems:"center", justifyContent:"center", color:p.inkTxt?T.ink:"#fff", fontFamily:T.serif, fontSize:27, fontWeight:800, flexShrink:0, overflow:"hidden" }}>{p.img ? <img src={p.img} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%" }} /> : p.ini}</div>
              <div style={{ flex:1, minWidth:180 }}>
                <div style={{ fontFamily:T.serif, fontWeight:700, fontSize:18, color:T.ink }}>{p.name}</div>
                <div style={{ color:T.gold, fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", margin:"4px 0 8px" }}>{p.role}</div>
                <div style={{ color:T.text2, fontSize:12.5, lineHeight:1.65, marginBottom:10 }}>{p.d}</div>
                <span style={{ color:T.gold, fontWeight:700, fontSize:11.5, letterSpacing:1.5, textTransform:"uppercase" }}>Read Their Story →</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Testimonials */}
      <SectionHead eyebrow="Client Voices" title="Loved by Businesses Across India" sub="Real words from the founders, doctors and directors we partner with." />
      <div style={{ marginBottom:80, marginLeft:"calc(50% - 50vw)", marginRight:"calc(50% - 50vw)", maxWidth:"100vw", overflow:"hidden", maskImage:"linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)", WebkitMaskImage:"linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)" }}>
        {[0,1].map(row=>{
          const items = row===0 ? TESTIMONIALS.filter((_,i)=>i%2===0) : TESTIMONIALS.filter((_,i)=>i%2===1);
          const loop = [...items, ...items];
          return (
            <div key={row} className="rev-track" style={{ display:"flex", gap:18, width:"max-content", padding:"6px 9px", animation:`revscroll ${row===0?128:144}s linear infinite` }}>
              {loop.map((t,i)=>(
                <div key={i} style={{ width:340, flexShrink:0, background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:20, padding:28, boxShadow:`0 8px 26px ${T.shadow}`, display:"flex", flexDirection:"column" }}>
                  <div style={{ fontSize:38, color:T.gold, fontFamily:T.serif, lineHeight:1, marginBottom:8 }}>&ldquo;</div>
                  <p style={{ color:T.ink, fontSize:13.5, lineHeight:1.75, margin:"0 0 18px", fontStyle:"italic", fontFamily:T.serif, flex:1 }}>{t.text}</p>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:10 }}>
                    <div>
                      <div style={{ fontWeight:700, color:T.ink, fontSize:13.5 }}>{t.name}</div>
                      <div style={{ color:T.text2, fontSize:11.5, marginTop:2 }}>{t.role}</div>
                      <div style={{ color:T.gold, fontSize:12, marginTop:5, letterSpacing:2 }}>{"★".repeat(t.rating)}</div>
                    </div>
                    <span style={{ background:`${T.gold}14`, color:"#9C7424", padding:"4px 12px", borderRadius:12, fontSize:10.5, fontWeight:700, whiteSpace:"nowrap" }}>{t.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <FadeIn>
        <div style={{ background:T.ink, borderRadius:28, padding:"52px 36px", textAlign:"center", position:"relative", overflow:"hidden", marginBottom:20 }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:T.gradGold }} />
          <Eyebrow center light>Let's Begin</Eyebrow>
          <h2 style={{ color:"#fff", fontSize:"clamp(24px,3.4vw,38px)", fontFamily:T.serif, fontWeight:700, margin:"0 0 14px" }}>Ready to Elevate Your Brand?</h2>
          <p style={{ color:"rgba(255,255,255,0.65)", fontSize:15, margin:"0 auto 30px", maxWidth:440, lineHeight:1.75 }}>
            Free strategy consultation, 2-hour response time, and a post-pay option that puts the risk on us — not you.
          </p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={{ ...btnGold, padding:"15px 36px" }}>Start on WhatsApp →</a>
            <button onClick={()=>go("contact")} style={{ ...btnGhost, color:"#fff", border:"1.5px solid rgba(255,255,255,0.4)", padding:"15px 36px" }}>Contact Us</button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

// ── PORTFOLIO DATA ────────────────────────────────────────────────────────────
// jsDelivr proxies GitHub raw files and works inside iframe/CSP sandboxes

export default function HomePageRoute(){
  const go=useGo(); const router=useRouter(); const openService=()=>router.push("/services");
  return <HomePage go={go} openService={openService} />;
}