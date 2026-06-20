"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGo } from "../../lib/nav";
import { T, INDUSTRY_DATA, blogMeta, openBlogGlobal, btnDark, btnGold, GENERAL_BLOGS, openCaseStudyGlobal } from "../../lib/data";
import { FadeIn, useInView, CountUp, Crumb } from "../ui";

function IndustryPage({ id, onBack, go }) {
  const d = INDUSTRY_DATA[id];
  // Show up to 30 articles to match the blog page (which caps at 30).
  const blogList = useMemo(() => {
    const own = (d.blogs || []).map(b => ({ ...b, tag: d.name, indId: id }));
    if (own.length >= 30) return own.slice(0, 30);
    // Fallback (only if an industry has fewer than 30 of its own): top up from the library.
    const seen = new Set(own.map(b => b.title));
    const pool = [
      ...GENERAL_BLOGS,
      ...Object.entries(INDUSTRY_DATA)
        .filter(([k]) => k !== id)
        .flatMap(([k, dd]) => (dd.blogs || []).map(b => ({ ...b, tag: dd.name, indId: k }))),
    ];
    const extra = [];
    for (const b of pool) {
      if (own.length + extra.length >= 30) break;
      if (!seen.has(b.title)) { seen.add(b.title); extra.push(b); }
    }
    return [...own, ...extra];
  }, [id]);
  const [tab, setTab] = useState("overview");
  const [openFaq, setOpenFaq] = useState(null);
  const [ref, vis] = useInView();
  const tabs = [
    { k:"overview", label:"Overview" },{ k:"stats", label:"Market Stats" },{ k:"challenges", label:"Challenges" },
    { k:"services", label:"Services" },{ k:"benefits", label:"Benefits & ROI" },{ k:"casestudies", label:"Case Studies" },
    { k:"blogs", label:"Blog Library" },{ k:"faqs", label:"FAQs" },{ k:"metrics", label:"Success Metrics" },
  ];
  return (
    <div style={{ paddingTop:32 }} ref={ref}>
      <Crumb go={go} items={[{label:"Home",page:"home"},{label:"Industries",page:"industries"},{label:d.name}]} />
      <button onClick={onBack} style={{ background:"none", border:"none", color:T.gold, cursor:"pointer", fontSize:12, marginBottom:18, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", padding:0 }}>← All Industries</button>

      <div style={{ background:`linear-gradient(135deg,#FFFFFF, ${d.color}08)`, border:`1px solid ${T.cardB}`, borderRadius:24, padding:"38px 34px", marginBottom:28, position:"relative", overflow:"hidden", boxShadow:`0 24px 60px ${T.shadow}` }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:5, background:T.gradLux }} />
        <div style={{ display:"flex", alignItems:"flex-start", gap:22, flexWrap:"wrap" }}>
          <div style={{ fontSize:56 }}>{d.icon}</div>
          <div style={{ flex:1, minWidth:220 }}>
            <div style={{ display:"flex", gap:8, marginBottom:12, flexWrap:"wrap" }}>
              <span style={{ background:`${d.color}12`, color:d.color, padding:"5px 14px", borderRadius:20, fontSize:11, fontWeight:700 }}>{d.marketSize}</span>
              <span style={{ background:`${T.gold}18`, color:"#9C7424", padding:"5px 14px", borderRadius:20, fontSize:11, fontWeight:700 }}>{d.growth}</span>
              <span style={{ background:"rgba(31,138,76,0.1)", color:"#1F8A4C", padding:"5px 14px", borderRadius:20, fontSize:11, fontWeight:700 }}>{d.globalSize}</span>
            </div>
            <h1 style={{ fontSize:32, fontWeight:700, margin:"0 0 6px", color:T.ink, fontFamily:T.serif }}>{d.name}</h1>
            <p style={{ color:T.text2, margin:"0 0 8px", fontSize:14.5 }}>{d.tagline}</p>
            <p style={{ color:d.color, fontSize:13, fontWeight:700, margin:0 }}>◆ {d.digitalAdoption}</p>
          </div>
          <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={{ ...btnDark, alignSelf:"flex-end" }}>Request Strategy →</a>
        </div>
      </div>

      <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:14, padding:"13px 18px", marginBottom:24, display:"flex", gap:18, flexWrap:"wrap" }}>
        <div style={{ flex:1, minWidth:200 }}>
          <div style={{ fontSize:12.5, color:T.ink, fontWeight:700, marginBottom:3 }}>{d.seoTitle}</div>
          <div style={{ fontSize:12, color:T.text2, lineHeight:1.55 }}>{d.metaDesc}</div>
        </div>
      </div>

      <div style={{ display:"flex", gap:7, flexWrap:"wrap", marginBottom:28 }}>
        {tabs.map(t=>(
          <button key={t.k} onClick={()=>setTab(t.k)}
            style={{ background:tab===t.k?T.ink:"transparent", color:tab===t.k?"#fff":T.text2, border:`1px solid ${tab===t.k?T.ink:T.cardB}`, borderRadius:50, padding:"8px 17px", cursor:"pointer", fontSize:12, fontWeight:600, whiteSpace:"nowrap" }}>{t.label}</button>
        ))}
      </div>

      {tab==="overview" && (
        <div>
          <FadeIn>
            <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:20, padding:30, marginBottom:22, boxShadow:`0 10px 36px ${T.shadow}` }}>
              <h3 style={{ fontWeight:700, margin:"0 0 14px", color:T.ink, fontSize:20, fontFamily:T.serif }}>Industry Overview</h3>
              <p style={{ color:T.text2, lineHeight:1.85, margin:0, fontSize:14.5 }}>{d.overview}</p>
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <div style={{ background:`linear-gradient(135deg,${d.color}0a,${T.gold}0a)`, border:`1px solid ${d.color}20`, borderRadius:18, padding:24, marginBottom:22 }}>
              <h4 style={{ fontWeight:700, color:d.color, margin:"0 0 14px", fontSize:17, fontFamily:T.serif }}>Did You Know?</h4>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:12 }}>
                {d.didYouKnow.map((f,i)=>(
                  <div key={i} style={{ background:T.bg2, borderRadius:12, padding:"14px 18px", fontSize:13.5, color:T.ink, borderLeft:`3px solid ${T.gold}`, lineHeight:1.6, boxShadow:`0 4px 14px ${T.shadow}` }}>{f}</div>
                ))}
              </div>
            </div>
          </FadeIn>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(165px,1fr))", gap:14 }}>
            {d.stats.map((s,i)=>(
              <FadeIn key={i} delay={i*40}>
                <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:16, padding:"24px 14px", textAlign:"center", boxShadow:`0 6px 20px ${T.shadow}` }}>
                  <div style={{ fontSize:24, fontWeight:800, fontFamily:T.serif, background:T.gradLux, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}><CountUp target={s.n} go={vis} /></div>
                  <div style={{ fontSize:11, color:T.text2, marginTop:7, lineHeight:1.4 }}>{s.l}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      )}

      {tab==="stats" && (
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(195px,1fr))", gap:16, marginBottom:26 }}>
            {d.stats.map((s,i)=>(
              <FadeIn key={i} delay={i*40}>
                <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:18, padding:28, textAlign:"center", position:"relative", overflow:"hidden", boxShadow:`0 10px 30px ${T.shadow}` }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradLux }} />
                  <div style={{ fontSize:28, fontWeight:800, fontFamily:T.serif, background:`linear-gradient(135deg,${d.color},${T.gold})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", marginBottom:7 }}><CountUp target={s.n} go={vis} /></div>
                  <div style={{ fontSize:12, color:T.text2, lineHeight:1.4 }}>{s.l}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={80}>
            <div style={{ background:`${d.color}08`, border:`1px solid ${d.color}1c`, borderRadius:18, padding:24 }}>
              <h4 style={{ fontWeight:700, color:d.color, margin:"0 0 12px", fontSize:17, fontFamily:T.serif }}>Key Market Intelligence</h4>
              <p style={{ color:T.text2, fontSize:13.5, margin:"0 0 8px", lineHeight:1.75 }}>The {d.name.toLowerCase()} sector in India is experiencing unprecedented growth driven by increasing digital adoption, rising middle-class incomes, and post-pandemic accelerated digitisation.</p>
              <p style={{ color:T.text2, fontSize:13.5, margin:0, lineHeight:1.75 }}><strong style={{ color:T.ink }}>Growth Rate: {d.growth}</strong> — This industry is growing significantly faster than India's GDP, creating massive opportunities for businesses that invest in digital presence now, before the market matures.</p>
            </div>
          </FadeIn>
        </div>
      )}

      {tab==="challenges" && (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))", gap:16 }}>
          {d.challenges.map((c,i)=>(
            <FadeIn key={i} delay={i*50}>
              <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:16, padding:24, borderLeft:`3px solid #B0413E`, boxShadow:`0 6px 22px ${T.shadow}`, height:"100%" }}>
                <div style={{ fontWeight:700, color:T.ink, marginBottom:9, fontSize:15, fontFamily:T.serif }}>{c.t}</div>
                <div style={{ color:T.text2, fontSize:13.5, lineHeight:1.7 }}>{c.d}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      )}

      {tab==="services" && (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))", gap:16 }}>
          {d.services.map((s,i)=>(
            <FadeIn key={i} delay={i*45}>
              <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:16, padding:24, position:"relative", overflow:"hidden", boxShadow:`0 6px 22px ${T.shadow}`, height:"100%" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradLux }} />
                <div style={{ fontWeight:700, color:T.ink, marginBottom:9, fontSize:15, fontFamily:T.serif }}>{s.s}</div>
                <div style={{ color:T.text2, fontSize:13.5, lineHeight:1.7, marginBottom:14 }}>{s.d}</div>
                <button onClick={()=>go("services")} style={{ background:"none", border:"none", color:T.gold, fontSize:11.5, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", cursor:"pointer", padding:0 }}>View Service →</button>
              </div>
            </FadeIn>
          ))}
        </div>
      )}

      {tab==="benefits" && (
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))", gap:16, marginBottom:30 }}>
            {d.benefits.map((b,i)=>(
              <FadeIn key={i} delay={i*50}>
                <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:18, padding:26, boxShadow:`0 6px 22px ${T.shadow}`, height:"100%" }}>
                  <div style={{ fontSize:32, marginBottom:14 }}>{b.icon}</div>
                  <div style={{ fontWeight:700, color:T.ink, marginBottom:8, fontSize:16, fontFamily:T.serif }}>{b.t}</div>
                  <div style={{ color:T.text2, fontSize:13.5, lineHeight:1.7 }}>{b.d}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <div style={{ background:T.ink, borderRadius:22, padding:34, textAlign:"center", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradGold }} />
              <div style={{ fontSize:42, fontWeight:800, fontFamily:T.serif, background:T.gradGold, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", marginBottom:8 }}>{d.metrics.roi}</div>
              <div style={{ color:"rgba(255,255,255,0.7)", marginBottom:18, fontSize:14 }}>Average ROI Achieved by Our {d.name} Clients</div>
              <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={btnGold}>Start Your Journey →</a>
            </div>
          </FadeIn>
        </div>
      )}

      {tab==="casestudies" && (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:20 }}>
          {d.caseStudies.map((cs,i)=>(
            <FadeIn key={i} delay={i*40}>
              <div onClick={()=>openCaseStudyGlobal(cs)} style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:20, padding:28, position:"relative", overflow:"hidden", boxShadow:`0 10px 30px ${T.shadow}`, height:"100%", cursor:"pointer" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradLux }} />
                <div style={{ fontWeight:700, color:T.ink, fontSize:16, marginBottom:6, fontFamily:T.serif }}>{cs.title}</div>
                <div style={{ display:"flex", gap:8, marginBottom:16, flexWrap:"wrap" }}>
                  <span style={{ background:`${T.gold}16`, color:"#9C7424", padding:"4px 12px", borderRadius:14, fontSize:11, fontWeight:700 }}>ROI {cs.roi}</span>
                  <span style={{ background:"rgba(31,138,76,0.1)", color:"#1F8A4C", padding:"4px 12px", borderRadius:14, fontSize:11, fontWeight:700 }}>{cs.spend}</span>
                </div>
                <div style={{ marginBottom:11 }}>
                  <span style={{ fontSize:10, fontWeight:700, color:T.gold, display:"block", marginBottom:4, letterSpacing:2, textTransform:"uppercase" }}>Challenge</span>
                  <span style={{ fontSize:13.5, color:T.ink }}>{cs.challenge}</span>
                </div>
                <div style={{ marginBottom:11 }}>
                  <span style={{ fontSize:10, fontWeight:700, color:T.gold, display:"block", marginBottom:4, letterSpacing:2, textTransform:"uppercase" }}>Strategy</span>
                  <span style={{ fontSize:13.5, color:T.ink }}>{cs.strategy}</span>
                </div>
                <div style={{ background:`${d.color}08`, border:`1px solid ${d.color}18`, borderRadius:12, padding:"12px 16px", marginBottom:14 }}>
                  <span style={{ fontSize:10, fontWeight:700, color:d.color, display:"block", marginBottom:4, letterSpacing:2, textTransform:"uppercase" }}>Results</span>
                  <span style={{ fontSize:13.5, color:T.ink, fontWeight:600 }}>{cs.result}</span>
                </div>
                <div style={{ fontSize:13, color:T.text2, fontStyle:"italic", lineHeight:1.65, fontFamily:T.serif }}>{cs.testimonial}</div>
                <div style={{ color:d.color, fontSize:12.5, fontWeight:700, marginTop:12 }}>Read full case study →</div>
              </div>
            </FadeIn>
          ))}
        </div>
      )}

      {tab==="blogs" && (
        <div>
          <div style={{ marginBottom:18, color:T.text2, fontSize:13 }}>{blogList.length} SEO articles (3,000+ words each) in the {d.name} library — click any to read the full dedicated article.</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))", gap:16 }}>
            {blogList.map((b,i)=>{
              const mt = blogMeta(b);
              return (
                <FadeIn key={i} delay={(i%6)*35}>
                  <div onClick={()=>openBlogGlobal(b)}
                    style={{ background:T.bg2, border:`1px solid ${b.pillar?T.cardBGold:T.cardB}`, borderRadius:16, padding:22, position:"relative", overflow:"hidden", boxShadow:`0 6px 22px ${T.shadow}`, height:"100%", cursor:"pointer", transition:"transform .35s cubic-bezier(.22,.61,.36,1), box-shadow .35s cubic-bezier(.22,.61,.36,1), border-color .3s ease" }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow=`0 18px 40px ${T.shadowWarm}`; e.currentTarget.style.borderColor=T.cardBGold; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow=`0 8px 24px ${T.shadow}`; e.currentTarget.style.borderColor=T.cardB; }}>
                    <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradLux }} />
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:9, gap:8, flexWrap:"wrap" }}>
                      <span style={{ background:`${T.gold}14`, color:"#9C7424", padding:"3px 11px", borderRadius:12, fontSize:11, fontWeight:700 }}>{mt.words} words</span>
                      {b.pillar && <span style={{ background:T.gradGold, color:T.ink, padding:"3px 11px", borderRadius:12, fontSize:9, fontWeight:800, letterSpacing:1.5 }}>PILLAR</span>}
                    </div>
                    <div style={{ display:"flex", gap:10, marginBottom:8 }}>
                      <span style={{ fontSize:10.5, color:T.text2 }}>📅 {mt.date}</span>
                      <span style={{ fontSize:10.5, color:T.text2 }}>⏱ {mt.read}</span>
                    </div>
                    <div style={{ fontWeight:700, color:T.ink, fontSize:14.5, marginBottom:7, lineHeight:1.45, fontFamily:T.serif }}>{b.title}</div>
                    <div style={{ fontSize:12.5, color:T.text2, marginBottom:10, lineHeight:1.6 }}>{b.desc}</div>
                    <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                      <span style={{ background:`${d.color}10`, color:d.color, padding:"3px 10px", borderRadius:10, fontSize:11, fontWeight:700 }}>{b.keyword}</span>
                      <span style={{ marginLeft:"auto", color:T.gold, fontSize:10.5, fontWeight:800, letterSpacing:1, textTransform:"uppercase" }}>Read Full Article →</span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      )}

      {tab==="faqs" && (
        <div>
          <div style={{ marginBottom:18, color:T.text2, fontSize:13 }}>{d.faqs.length} questions covering everything patients and clients search for in this industry</div>
          {d.faqs.map((q,i)=>(
            <FadeIn key={i} delay={i*12}>
              <div style={{ background:T.bg2, border:`1px solid ${openFaq===i?T.gold:T.cardB}`, borderRadius:14, marginBottom:9, overflow:"hidden", transition:"border-color .25s" }}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)}
                  style={{ width:"100%", background:"none", border:"none", padding:"16px 20px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center", gap:10 }}>
                  <span style={{ fontWeight:600, color:T.ink, fontSize:13.5, textAlign:"left", lineHeight:1.45 }}>{q}</span>
                  <span style={{ color:openFaq===i?T.gold:T.text2, fontSize:16, flexShrink:0, transition:"transform .25s", transform:openFaq===i?"rotate(45deg)":"none" }}>＋</span>
                </button>
                {openFaq===i && (
                  <div style={{ padding:"0 20px 16px", color:T.text2, fontSize:13.5, lineHeight:1.75 }}>
                    This is a comprehensive {d.name.toLowerCase()} marketing FAQ covering strategy, budget, timelines, platforms, and measurable outcomes. Contact us for a personalised response tailored to your specific situation.
                    <div style={{ marginTop:10 }}>
                      <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={{ color:T.gold, fontWeight:700, fontSize:12, letterSpacing:1, textTransform:"uppercase" }}>Ask on WhatsApp →</a>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      )}

      {tab==="metrics" && (
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(185px,1fr))", gap:16, marginBottom:30 }}>
            {[
              { l:"Average ROI", v:d.metrics.roi, color:T.primary },
              { l:"Client Retention Rate", v:d.metrics.retention, color:"#1F8A4C" },
              { l:"Project Completion Rate", v:d.metrics.completion, color:"#2D6A9F" },
              { l:"Avg Lead Growth", v:d.metrics.growth, color:"#7C5295" },
              { l:"Client Satisfaction", v:d.metrics.satisfaction, color:T.gold },
            ].map((m,i)=>(
              <FadeIn key={i} delay={i*60}>
                <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:18, padding:28, textAlign:"center", position:"relative", overflow:"hidden", boxShadow:`0 10px 30px ${T.shadow}`, height:"100%" }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:`linear-gradient(135deg,${m.color},${m.color}88)` }} />
                  <div style={{ fontSize:23, fontWeight:800, color:m.color, marginBottom:7, fontFamily:T.serif }}>{m.v}</div>
                  <div style={{ fontSize:12, color:T.text2, lineHeight:1.4 }}>{m.l}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={300}>
            <div style={{ background:T.ink, borderRadius:24, padding:36, textAlign:"center", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradGold }} />
              <h3 style={{ fontWeight:700, fontSize:24, marginBottom:10, color:"#fff", fontFamily:T.serif }}>Ready to Achieve These Results?</h3>
              <p style={{ color:"rgba(255,255,255,0.65)", marginBottom:24, fontSize:14 }}>Free 30-minute strategy consultation — we respond within 2 hours.</p>
              <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
                <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={{ background:"#25d366", color:"#fff", borderRadius:50, padding:"13px 28px", fontWeight:700, fontSize:14 }}>WhatsApp Us</a>
                <a href="mailto:contact.businessvolunteers@gmail.com" style={btnGold}>Email Us</a>
              </div>
            </div>
          </FadeIn>
        </div>
      )}
    </div>
  );
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────

export default function IndustryPageRoute({ id }){
  const go=useGo(); const router=useRouter();
  return <IndustryPage id={id} onBack={()=>router.push("/industries")} go={go} />;
}