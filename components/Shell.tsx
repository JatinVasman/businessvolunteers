"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Nav, Ticker, WhatsAppWidget, SocialIconRow } from "./ui";
import { T, LOCATIONS, LOGO, registerOpenBlog, registerOpenCaseStudy, slugify, pathToKey } from "../lib/data";
import { useGo } from "../lib/nav";

export default function Shell({ children }: { children: React.ReactNode }) {
  const go = useGo();
  const router = useRouter();
  const pathname = usePathname();
  const page = pathToKey(pathname);
  useEffect(() => { registerOpenBlog((b: any) => router.push("/blog/" + slugify(b.title))); }, [router]);
  useEffect(() => { registerOpenCaseStudy((cs: any) => router.push("/case-studies/" + slugify(cs.title))); }, [router]);
  return (
    <div style={{ fontFamily:T.sans, background:T.bg, color:T.ink, minHeight:"100vh", overflowX:"hidden" }}>
      <Nav page={page} go={go} />
      <Ticker />
      <div style={{ maxWidth:1180, margin:"0 auto", padding:"0 24px 90px" }}>
        {children}
      </div>
      <footer style={{ background:T.ink, padding:"48px 24px 26px" }}>
              <div style={{ maxWidth:1180, margin:"0 auto", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:32, marginBottom:30 }}>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                    <div style={{ width:36, height:36, borderRadius:10, overflow:"hidden", flexShrink:0 }}>
                      <img src={LOGO} alt="BV Logo" style={{ width:"100%", height:"100%", objectFit:"cover" }}
                        onError={e=>{ e.target.style.display="none"; e.target.parentNode.style.background=T.gradGold; e.target.parentNode.innerHTML="<span style='color:#1C140D;font-weight:900;font-size:13px;font-family:Georgia,serif;display:flex;align-items:center;justify-content:center;height:100%'>BV</span>"; }} />
                    </div>
                    <span style={{ fontWeight:700, color:"#fff", fontSize:16, fontFamily:T.serif }}>Business Volunteers</span>
                  </div>
                  <p style={{ color:"rgba(255,255,255,0.55)", fontSize:12.5, maxWidth:240, lineHeight:1.8, marginBottom:16 }}>89 industries. 2,200+ clients. Premium digital marketing from Noida Sector 62, Delhi NCR.</p>
                  <SocialIconRow dark />
                </div>
                <div>
                  <div style={{ fontWeight:700, fontSize:11, marginBottom:14, color:T.goldLight, letterSpacing:2.5, textTransform:"uppercase" }}>Company</div>
                  {[["About BV","about-overview"],["Founder","founder"],["Co-Founder","cofounder"],["Why Us","why"],["Our Team","team"]].map(([l,p])=>(
                    <button key={p} onClick={()=>go(p)} style={{ display:"block", background:"none", border:"none", color:"rgba(255,255,255,0.6)", fontSize:12.5, marginBottom:8, cursor:"pointer", textAlign:"left", padding:0 }}>{l}</button>
                  ))}
                </div>
                <div>
                  <div style={{ fontWeight:700, fontSize:11, marginBottom:14, color:T.goldLight, letterSpacing:2.5, textTransform:"uppercase" }}>Explore</div>
                  {[["Services","services"],["Portfolio","portfolio"],["Industries","industries"],["Case Studies","casestudies"],["Blog","blog"],["Pricing","pricing"],["Contact","contact"]].map(([l,p])=>(
                    <button key={p} onClick={()=>go(p)} style={{ display:"block", background:"none", border:"none", color:"rgba(255,255,255,0.6)", fontSize:12.5, marginBottom:8, cursor:"pointer", textAlign:"left", padding:0 }}>{l}</button>
                  ))}
                </div>
                <div>
                  <div style={{ fontWeight:700, fontSize:11, marginBottom:14, color:T.goldLight, letterSpacing:2.5, textTransform:"uppercase" }}>Contact</div>
                  <a href="mailto:contact.businessvolunteers@gmail.com" style={{ display:"block", color:"rgba(255,255,255,0.6)", fontSize:12.5, marginBottom:8 }}>contact.businessvolunteers@gmail.com</a>
                  <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={{ display:"block", color:"rgba(255,255,255,0.6)", fontSize:12.5, marginBottom:8 }}>+91 85869 89832</a>
                  <div style={{ color:"rgba(255,255,255,0.6)", fontSize:12.5 }}>Noida Sector 62, UP 201309</div>
                </div>
              </div>
              {/* Service locations */}
              <div style={{ maxWidth:1180, margin:"0 auto 28px", borderTop:"1px solid rgba(255,255,255,0.12)", paddingTop:26 }}>
                <div style={{ fontWeight:700, fontSize:13.5, color:"#fff", marginBottom:13, fontFamily:T.serif }}>Our Services Are Available In Domestic Locations</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:9, marginBottom:24 }}>
                  {LOCATIONS.filter(l=>l.type==="domestic").map(l=>(
                    <a key={l.id} href={`/digital-marketing-services-${l.id}/`}
                      onMouseEnter={e=>{ e.currentTarget.style.borderColor=T.gold; e.currentTarget.style.color="#fff"; e.currentTarget.style.background="rgba(201,150,59,0.14)"; }}
                      onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,0.18)"; e.currentTarget.style.color="rgba(255,255,255,0.82)"; e.currentTarget.style.background="rgba(255,255,255,0.05)"; }}
                      style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.18)", color:"rgba(255,255,255,0.82)", borderRadius:50, padding:"7px 16px", fontSize:12.5, cursor:"pointer", fontWeight:500, transition:"all .2s", display:"inline-block", textDecoration:"none" }}>{l.name}</a>
                  ))}
                </div>
                <div style={{ fontWeight:700, fontSize:13.5, color:"#fff", marginBottom:13, fontFamily:T.serif }}>Our Services Are Available In International Locations</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:9 }}>
                  {LOCATIONS.filter(l=>l.type==="intl").map(l=>(
                    <a key={l.id} href={`/digital-marketing-services-${l.id}/`}
                      onMouseEnter={e=>{ e.currentTarget.style.borderColor=T.gold; e.currentTarget.style.color="#fff"; e.currentTarget.style.background="rgba(201,150,59,0.14)"; }}
                      onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,0.18)"; e.currentTarget.style.color="rgba(255,255,255,0.82)"; e.currentTarget.style.background="rgba(255,255,255,0.05)"; }}
                      style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.18)", color:"rgba(255,255,255,0.82)", borderRadius:50, padding:"7px 16px", fontSize:12.5, cursor:"pointer", fontWeight:500, transition:"all .2s", display:"inline-block", textDecoration:"none" }}>{l.name}</a>
                  ))}
                </div>
              </div>
              <div style={{ maxWidth:1180, margin:"0 auto", borderTop:"1px solid rgba(255,255,255,0.12)", paddingTop:18, color:"rgba(255,255,255,0.4)", fontSize:11, textAlign:"center", letterSpacing:.5 }}>
                © 2026 Business Volunteers · All rights reserved · Made with care in India
              </div>
            </footer>
      <WhatsAppWidget />
    </div>
  );
}
