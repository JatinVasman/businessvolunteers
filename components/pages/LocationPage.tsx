"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useGo } from "../../lib/nav";
import { T, btnDark, btnGold, btnGhost } from "../../lib/data";
import { Eyebrow, FadeIn, SectionHead, Crumb, A } from "../ui";

function LocationPage({ loc, go }) {
  const [openFaq, setOpenFaq] = useState(null);
  const isIntl = loc.type === "intl";
  const place = loc.name;
  const seoTitle = `Digital Marketing Services in ${place} | Business Volunteers`;
  const meta = `Looking for a results-driven digital marketing agency in ${place}? Business Volunteers offers SEO, social media, Google & Meta ads, web design and graphic design for businesses in ${place}. Get a free quote on WhatsApp.`;
  const offerings = [
    ["🔍","Search Engine Optimisation (SEO)",`Rank your ${place} business at the top of Google and capture high-intent local searches.`],
    ["🎯","Google Ads (PPC)",`High-intent Search, Display & YouTube campaigns engineered for ROI in the ${place} market.`],
    ["📱","Meta Ads (Facebook & Instagram)",`Targeted social campaigns that turn ${place} audiences into real leads.`],
    ["📣","Social Media Marketing",`Content, reels and community management that grow your ${place} brand.`],
    ["💻","Website Design & Development",`Fast, SEO-ready, mobile-first websites built to convert ${place} visitors.`],
    ["🎨","Graphic Design & Branding",`Posters, logos, packaging and brand identity — from ₹150 per design.`],
  ];
  const whyUs = [
    ["Local Insight, National Strength", isIntl
      ? `We help ${place}-based brands and Indian businesses expanding into ${place} reach the right audience with culturally-tuned campaigns.`
      : `We tailor every campaign to ${place}'s local search behaviour, competition and customer intent.`],
    ["Transparent Pricing","Clear, scope-based pricing with no hidden charges — from graphic design at ₹150 to full monthly retainers."],
    ["Founder-Led Delivery","A hands-on, founder-led team that treats your business as our own. You always know who is driving your project."],
    ["Measurable ROI","Data-driven work with live dashboards and monthly reports — every rupee mapped to a result."],
  ];
  const faqs = [
    [`Do you offer digital marketing services in ${place}?`, `Yes. Business Volunteers serves clients in ${place} ${isIntl ? "and worldwide" : "and across India"} with SEO, paid ads, social media, web development and graphic design — delivered remotely with regular reporting and strategy calls.`],
    [`How much does digital marketing cost in ${place}?`, `Pricing is transparent and scope-based: graphic design starts at ₹150 per design, SEO from ₹4,000/month, and ads management at 18% of ad spend. Share your goals on WhatsApp for a tailored ${place} quote.`],
    [`Which industries do you work with in ${place}?`, `We serve 89+ industries — healthcare, education, real estate, restaurants, retail, D2C and more — with strategies tuned to each sector and the ${place} market.`],
    [`How soon can we start?`, `Message us on WhatsApp or request a quote. We run a free audit, share a strategy and timeline, and begin as soon as you're ready.`],
  ];
  return (
    <div style={{ paddingTop:36 }}>
      <Crumb go={go} items={[{label:"Home",page:"home"},{label:`Digital Marketing in ${place}`}]} />

      {/* SEO snapshot */}
      <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:14, padding:"13px 18px", marginBottom:26, display:"flex", gap:16, flexWrap:"wrap" }}>
        <div style={{ flex:1, minWidth:240 }}>
          <div style={{ fontSize:12.5, color:T.ink, fontWeight:700, marginBottom:3 }}>{seoTitle}</div>
          <div style={{ fontSize:12, color:T.text2, lineHeight:1.55 }}>{meta}</div>
        </div>
      </div>

      {/* Hero */}
      <FadeIn>
        <div style={{ background:T.bg2, border:`1px solid ${T.cardBGold}`, borderRadius:24, padding:"40px 32px", marginBottom:30, position:"relative", overflow:"hidden", boxShadow:`0 20px 52px ${T.shadow}` }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:T.gradLux }} />
          <Eyebrow>{isIntl ? "International" : "India"} · Digital Marketing</Eyebrow>
          <h1 style={{ fontFamily:T.serif, fontWeight:700, fontSize:"clamp(26px,4vw,40px)", color:T.ink, margin:"0 0 12px", lineHeight:1.15 }}>Digital Marketing Services in {place}</h1>
          <p style={{ color:T.text2, fontSize:14.5, lineHeight:1.85, margin:"0 0 22px", maxWidth:720 }}>
            Business Volunteers is a founder-led digital marketing agency helping businesses in {place} grow online with SEO, Google &amp; Meta ads, social media, websites and graphic design. We combine local market understanding with proven, data-driven execution — so your brand in {place} gets found, gets leads and gets results.
          </p>
          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            <a href={`https://wa.me/918586989832?text=Hi%20Business%20Volunteers%2C%20I%20want%20digital%20marketing%20in%20${encodeURIComponent(place)}`} target="_blank" rel="noopener noreferrer" style={btnDark}>Get a Free {place} Quote →</a>
            <button onClick={()=>go("services")} style={btnGhost}>View All Services</button>
          </div>
        </div>
      </FadeIn>

      {/* Offerings */}
      <SectionHead eyebrow="What We Offer" title={`Our Digital Marketing Services in ${place}`} sub={`Full-service growth for ${place} businesses — every channel, one accountable team.`} />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16, marginBottom:46 }}>
        {offerings.map(([ic,t,d],i)=>(
          <FadeIn key={i} delay={i*40}>
            <div style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:18, padding:24, height:"100%", boxShadow:`0 8px 24px ${T.shadow}`, position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradLux }} />
              <div style={{ fontSize:30, marginBottom:12 }}>{ic}</div>
              <h3 style={{ fontFamily:T.serif, fontWeight:700, fontSize:16, color:T.ink, margin:"0 0 7px" }}>{t}</h3>
              <p style={{ color:T.text2, fontSize:13, lineHeight:1.7, margin:0 }}>{d}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Why us */}
      <SectionHead eyebrow="Why Business Volunteers" title={`Why ${place} Businesses Choose Us`} />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16, marginBottom:46 }}>
        {whyUs.map(([t,d],i)=>(
          <FadeIn key={i} delay={i*45}>
            <div style={{ background:T.bg3, borderRadius:16, padding:22, height:"100%" }}>
              <h3 style={{ fontFamily:T.serif, fontWeight:700, fontSize:15, color:T.ink, margin:"0 0 7px" }}>{t}</h3>
              <p style={{ color:T.text2, fontSize:13, lineHeight:1.75, margin:0 }}>{d}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* FAQs */}
      <SectionHead eyebrow="Questions" title={`Digital Marketing in ${place} — FAQs`} />
      <div style={{ marginBottom:44 }}>
        {faqs.map(([q,a],i)=>(
          <FadeIn key={i} delay={i*40}>
            <div style={{ background:T.bg2, border:`1px solid ${openFaq===i?T.gold:T.cardB}`, borderRadius:14, marginBottom:9, overflow:"hidden", transition:"border-color .25s" }}>
              <button onClick={()=>setOpenFaq(openFaq===i?null:i)}
                style={{ width:"100%", background:"none", border:"none", padding:"16px 20px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center", gap:10 }}>
                <span style={{ fontWeight:600, color:T.ink, fontSize:13.5, textAlign:"left", lineHeight:1.45 }}>{q}</span>
                <span style={{ color:openFaq===i?T.gold:T.text2, fontSize:16, flexShrink:0, transition:"transform .25s", transform:openFaq===i?"rotate(45deg)":"none" }}>＋</span>
              </button>
              {openFaq===i && <div style={{ padding:"0 20px 16px", color:T.text2, fontSize:13.5, lineHeight:1.8 }}>{a}</div>}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div style={{ background:T.ink, borderRadius:24, padding:"38px 30px", textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:T.gradGold }} />
          <h3 style={{ color:"#fff", fontFamily:T.serif, fontSize:23, fontWeight:700, margin:"0 0 10px" }}>Grow your business in {place}</h3>
          <p style={{ color:"rgba(255,255,255,0.65)", fontSize:13.5, margin:"0 0 24px" }}>Free audit and strategy session — we respond within 2 hours.</p>
          <a href={`https://wa.me/918586989832?text=Hi%20Business%20Volunteers%2C%20I%20want%20digital%20marketing%20in%20${encodeURIComponent(place)}`} target="_blank" rel="noopener noreferrer" style={btnGold}>Start on WhatsApp →</a>
        </div>
      </FadeIn>
    </div>
  );
}

// ── ROOT APP ──────────────────────────────────────────────────────────────────

export default function LocationPageRoute({ loc }){
  const go=useGo();
  return <LocationPage loc={loc} go={go} />;
}