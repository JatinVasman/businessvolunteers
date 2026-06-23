"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGo } from "../../lib/nav";
import { T, INDUSTRY_DATA, NAME2ID, getCtx, blogMeta, openBlogGlobal, FBSTATS, articleFaqs, SERVICES, GENERAL_BLOGS, btnGold, btnGhost } from "../../lib/data";
import { Eyebrow, L, Crumb, A } from "../ui";

function BlogArticlePage({ blog, onBack, go }) {
  const indId = blog.indId || NAME2ID[blog.tag];
  const ind = indId ? INDUSTRY_DATA[indId] : null;
  const ctx = getCtx(indId) || { cu: "customers", u: (ind ? ind.name.replace(/s$/, "") : "Business"), kw: blog.keyword };
  const m = blogMeta(blog);
  const [fq, setFq] = useState(null);
  const lu = ctx.u.toLowerCase(), cu = ctx.cu, kw = ctx.kw || blog.keyword;
  const stats = ind ? ind.stats : FBSTATS;
  const faqs = articleFaqs(ctx, ind ? ind.name : blog.tag, kw);
  const toc = ["Introduction", "Market Landscape & Key Statistics", "The Core Challenges Holding Growth Back", "The Growth Framework That Works", "Channel Deep-Dive: SEO, Ads, Social & Retention", "Real-World Case References", "12 Actionable Tips You Can Apply This Month", "Common Mistakes & How to Avoid Them", "Budget, Tools & Timeline", "Choosing the Right Marketing Partner", "Conclusion", "Frequently Asked Questions"];
  const related = ind ? ind.blogs.filter(b => b.title !== blog.title).slice(0, 3) : GENERAL_BLOGS.filter(b => b.title !== blog.title).slice(0, 3);
  const H2 = ({ id, children }) => <h2 id={id} style={{ fontFamily: T.serif, fontSize: 24, fontWeight: 700, color: T.ink, margin: "44px 0 14px", scrollMarginTop: 90 }}>{children}</h2>;
  const H3 = ({ children }) => <h3 style={{ fontFamily: T.serif, fontSize: 17.5, fontWeight: 700, color: T.ink, margin: "22px 0 8px" }}>{children}</h3>;
  const P = ({ children }) => <p style={{ color: T.text2, fontSize: 14.5, lineHeight: 1.95, margin: "0 0 14px" }}>{children}</p>;
  return (
    <div style={{ paddingTop: 36, maxWidth: 840, margin: "0 auto" }}>
      <Crumb go={go} items={[{ label: "Home", page: "home" }, { label: "Blog", page: "blog" }, { label: blog.tag }]} />
      <button onClick={onBack} style={{ background: "none", border: "none", color: T.gold, cursor: "pointer", fontSize: 12, marginBottom: 18, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: 0 }}>← Back to Blog Library</button>

      {/* SEO snapshot */}
      <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 14, padding: "13px 18px", marginBottom: 20, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ fontSize: 12.5, color: T.ink, fontWeight: 700, marginBottom: 3 }}>{blog.title} | Business Volunteers</div>
          <div style={{ fontSize: 12, color: T.text2, lineHeight: 1.55 }}>{blog.desc} Target keyword: {blog.keyword}.</div>
        </div>
      </div>

      {/* Featured image block */}
      <div style={{ borderRadius: 24, overflow: "hidden", marginBottom: 8, boxShadow: `0 20px 52px ${T.shadow}` }}>
        <div style={{ background: ind ? `linear-gradient(120deg,${ind.color},${T.gold})` : T.gradLux, height: 240, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 84, filter: "drop-shadow(0 10px 24px rgba(0,0,0,0.25))" }}>
          {ind ? ind.icon : "✦"}
        </div>
      </div>
      <div style={{ fontSize: 11, color: T.text2, marginBottom: 20, fontStyle: "italic" }}>Suggested image alt text: "{blog.keyword} — {blog.title}"</div>

      <h1 style={{ fontFamily: T.serif, fontSize: "clamp(26px,4vw,40px)", fontWeight: 700, color: T.ink, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: -.5 }}>{blog.title}</h1>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 28 }}>
        <span style={{ fontSize: 12, color: T.text2 }}>📅 {m.date}</span><span style={{ color: T.cardB }}>·</span>
        <span style={{ fontSize: 12, color: T.text2 }}>⏱ {m.read}</span><span style={{ color: T.cardB }}>·</span>
        <span style={{ background: `${T.gold}14`, color: "#9C7424", padding: "3px 11px", borderRadius: 12, fontSize: 11, fontWeight: 700 }}>{m.words} words</span>
        <span style={{ background: T.bg3, color: T.text2, padding: "3px 11px", borderRadius: 12, fontSize: 11, fontWeight: 600 }}>{blog.tag}</span>
        <span style={{ background: `${T.primary}0d`, color: T.primary, padding: "3px 11px", borderRadius: 12, fontSize: 11, fontWeight: 700 }}>{blog.keyword}</span>
        {blog.pillar && <span style={{ background: T.gradGold, color: T.ink, padding: "3px 11px", borderRadius: 12, fontSize: 9.5, fontWeight: 800, letterSpacing: 1.5 }}>PILLAR</span>}
      </div>

      {/* TOC */}
      <div style={{ background: T.bg2, border: `1px solid ${T.cardBGold}`, borderRadius: 18, padding: "20px 24px", marginBottom: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: T.gold, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 12 }}>Table of Contents</div>
        {toc.map((t, i) => (
          <a key={i} href={`#s${i}`} style={{ display: "block", color: T.text2, fontSize: 13, padding: "5px 0", borderBottom: i < toc.length - 1 ? `1px dashed ${T.cardB}` : "none" }}>
            <span style={{ color: T.gold, fontWeight: 800, marginRight: 10 }}>{String(i + 1).padStart(2, "0")}</span>{t}
          </a>
        ))}
      </div>

      <H2 id="s0">Introduction</H2>
      <P>If you run a {lu} in India today, your next {cu} have already met you — on Google, on Instagram, in an AI answer — long before they ever walk in or call. {ind ? `The ${ind.name.toLowerCase()} sector is a ${ind.marketSize.replace(" (India)", "")} market growing at ${ind.growth.replace(" CAGR", "")} a year, and ` : ""}the businesses winning right now are not necessarily the best funded; they are the most findable. This guide distils what we at <A i={0} /> have learned executing campaigns for 2,700+ businesses across 89 industries into a practical playbook for {blog.keyword}.</P>
      <P>You will find market data, the challenges that actually cap growth, a channel-by-channel framework, real case references with numbers, and twelve tips you can apply this month — with no fluff and no jargon. Where you want hands-on help, our team of <A i={1} /> is one WhatsApp message away.</P>

      <H2 id="s1">Market Landscape & Key Statistics</H2>
      <P>Strategy without numbers is guesswork. Here is the data picture every {lu} owner should internalise before spending a rupee on marketing{ind ? ` in the ${ind.name.toLowerCase()} space` : ""}:</P>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 10, margin: "18px 0" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 14, padding: "16px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 800, fontFamily: T.serif, background: T.gradLux, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.n}</div>
            <div style={{ fontSize: 10, color: T.text2, marginTop: 5, lineHeight: 1.4 }}>{s.l}</div>
          </div>
        ))}
      </div>
      {ind && ind.didYouKnow.slice(0, 2).map((f, i) => (
        <div key={i} style={{ background: `${T.gold}0e`, borderLeft: `3px solid ${T.gold}`, borderRadius: 10, padding: "12px 16px", margin: "0 0 10px", fontSize: 13.5, color: T.ink }}>💡 {f}</div>
      ))}
      <P>Read those numbers again: the demand already exists. The only open question is whether it finds you or a competitor. That is a visibility problem — and visibility is an engineering discipline, not luck.</P>

      <H2 id="s2">The Core Challenges Holding Growth Back</H2>
      <P>Across hundreds of audits, the same patterns repeat. Before prescribing tactics, an honest diagnosis:</P>
      {(ind ? ind.challenges.slice(0, 3) : [{ t: "Invisible Where Demand Lives", d: "Page-2 of Google is functionally invisible — most buyers never scroll past the top three results." }, { t: "Activity Without Strategy", d: "Posting without a funnel produces likes, not leads. Every piece of content needs a job." }, { t: "No Retention System", d: "Acquiring a customer and never contacting them again is the most expensive habit in business." }]).map((c, i) => (
        <div key={i} style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderLeft: `3px solid #B0413E`, borderRadius: 14, padding: "16px 20px", marginBottom: 10 }}>
          <div style={{ fontWeight: 700, color: T.ink, fontSize: 14.5, fontFamily: T.serif, marginBottom: 5 }}>{c.t}</div>
          <div style={{ color: T.text2, fontSize: 13, lineHeight: 1.7 }}>{c.d}</div>
        </div>
      ))}
      <P>None of these are fatal — but all of them compound quietly. The framework below addresses each one in sequence, the same way our <A i={2} /> team structures a new engagement.</P>

      <H2 id="s3">The Growth Framework That Works</H2>
      <P>Sustainable growth for a {lu} rests on three layers: capture existing demand, create new demand, and retain every {cu.slice(0, -1)} you win. Here is how each layer translates into channels:</P>
      {(ind ? ind.services.slice(0, 3) : [{ s: "SEO & Local Search", d: "Own the searches your buyers type every day — the highest-intent traffic that exists." }, { s: "Paid Social & Search Ads", d: "Structured campaigns with tracking, not boosted posts — every rupee mapped to a lead." }, { s: "WhatsApp Retention", d: "Broadcasts and automations on the channel with 90%+ open rates." }]).map((s, i) => (
        <div key={i}>
          <H3>{i + 1}. {s.s}</H3>
          <P>{s.d} Executed consistently for 90 days, this layer alone typically moves the enquiry needle 2–3x. As a <A i={(i + 3) % 6} t={i === 0 ? "SEO Agency" : i === 1 ? "Performance Marketing Agency" : "Lead Generation Specialists"} />, we sequence it before anything experimental — fundamentals first, fireworks later.</P>
        </div>
      ))}
      <H3>Bringing It Together</H3>
      <P>The layers reinforce each other: ads generate first contact, content and reviews build belief, WhatsApp brings {cu} back. A modern, fast website ties it together — which is why our <A i={5} /> build every site conversion-first, from ₹6,500. Measure everything on a single dashboard so decisions take minutes, not meetings.</P>

      <H2 id="s4">Channel Deep-Dive: SEO, Ads, Social &amp; Retention</H2>
      <P>The framework above is the map; this section is the terrain. Below, each channel is broken down into what actually moves the needle for a {lu}, what it costs, how long it takes, and the mistakes that quietly drain budgets. You can explore any of these as a standalone offering on our <L go={go} page="services">services page</L>, or see exact figures on the <L go={go} page="pricing">pricing page</L>.</P>

      <H3>Search Engine Optimisation (SEO)</H3>
      <P>SEO is the compounding asset of digital marketing. Unlike ads, which stop the moment you stop paying, a page ranking for '{kw}' keeps delivering {cu} month after month at effectively zero marginal cost. For a {lu}, the highest-return SEO work is almost always local: optimising your Google Business Profile, earning consistent reviews, building location and service pages, and gathering citations across the directories {cu} actually use. Technical hygiene matters too — fast load times, mobile-first layouts, clean URL structure and FAQ schema so AI engines can quote you directly. The realistic timeline is three to six months for meaningful movement and six to nine for compounding lead flow, which is why we treat SEO as a foundation laid early, not a switch flipped late.</P>
      <P>A common question is whether SEO is worth it for a smaller {lu} on a tight budget. The honest answer: yes, but only if you commit to two quarters and resist the urge to channel-hop. The businesses that win at search are the ones that publish one genuinely useful article a week, answer the questions {cu} ask, and keep their profile fresh. If that sounds like more than you can sustain in-house, it is exactly the kind of ongoing work our <L go={go} page="services">SEO services</L> are built to run for you.</P>

      <H3>Paid Advertising: Google &amp; Meta</H3>
      <P>Where SEO compounds slowly, paid ads buy you speed. A well-structured Google Ads campaign can put your {lu} in front of someone searching '{kw} near me' within hours of going live, and a Meta campaign can introduce you to {cu} who did not yet know you existed. The difference between profitable and wasteful ad spend is almost never the budget — it is the structure. That means tight audience targeting, conversion tracking installed before the first rupee is spent, a dedicated landing page rather than your homepage, and a disciplined cadence of testing creatives and pausing losers. We manage Google Ads at 18% of ad spend and Meta Ads at 15%, with no lock-in — and we would rather you start with one focused campaign on a ₹15,000 monthly media budget than spread thin across five. To talk through which platform fits your ticket size, the fastest route is our <L go={go} page="contact">contact page</L>.</P>

      <H3>Social Media &amp; Content</H3>
      <P>Social media is where demand is created rather than captured. For a {lu}, the goal is not virality — it is consistent, proof-led content that makes a hesitant {cu.slice(0, -1)} feel they already know and trust you before the first conversation. That comes from a simple content system: education posts that answer real questions, social-proof posts that show results and reviews, and personality posts that make the brand human. Short-form video and reels earn the most organic reach, so a single hook-first 30-second video each week, built around {kw}, will usually outperform a dozen static posts. The work is in the consistency, which is why most {ind ? ind.name.toLowerCase() : "businesses"} eventually hand it to a partner rather than let it slip during busy weeks.</P>

      <H3>Retention: WhatsApp &amp; Email</H3>
      <P>The cheapest revenue in any business is the {cu.slice(0, -1)} you already won. Yet most {lu} owners acquire a customer and never contact them again — the single most expensive habit in marketing. An opted-in WhatsApp broadcast list, used to send one genuine value message a month rather than constant offers, typically lifts repeat business by 25–40%. Layer in automated reminders and re-activation flows and you have a retention engine that runs quietly in the background. This is the layer businesses skip first and regret most; building it is part of every retainer we run.</P>

      <H2 id="s5">Real-World Case References</H2>
      {ind ? (<>
        <P>Theory is cheap; here are documented engagements from the {ind.name.toLowerCase()} sector with real budgets and outcomes:</P>
        {ind.caseStudies.slice(0, 2).map((cs, i) => (
          <div key={i} style={{ background: T.bg2, border: `1px solid ${T.cardBGold}`, borderRadius: 16, padding: "18px 22px", marginBottom: 12, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gradLux }} />
            <div style={{ fontWeight: 700, color: T.ink, fontFamily: T.serif, fontSize: 15, marginBottom: 6 }}>{cs.title}</div>
            <div style={{ fontSize: 13, color: T.text2, lineHeight: 1.7, marginBottom: 8 }}><strong style={{ color: T.ink }}>Strategy:</strong> {cs.strategy}</div>
            <div style={{ fontSize: 13, color: T.ink, fontWeight: 600, marginBottom: 8 }}>📈 {cs.result}</div>
            <span style={{ background: `${T.gold}16`, color: "#9C7424", padding: "3px 11px", borderRadius: 12, fontSize: 11, fontWeight: 700 }}>ROI {cs.roi}</span>
            <span style={{ background: "rgba(31,138,76,0.1)", color: "#1F8A4C", padding: "3px 11px", borderRadius: 12, fontSize: 11, fontWeight: 700, marginLeft: 8 }}>{cs.spend}</span>
          </div>
        ))}
        <button onClick={() => go("casestudies")} style={{ background: "none", border: "none", color: T.gold, fontWeight: 700, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer", padding: 0, marginBottom: 8 }}>Browse the full case study library →</button>
      </>) : (
        <P>Across 89 industries, the pattern holds: businesses that pair search visibility with retention systems outgrow their markets. Browse our complete case study library for documented engagements with budgets, strategies and outcomes — or ask the <A i={0} /> team for references in your exact niche.</P>
      )}

      <H2 id="s6">12 Actionable Tips You Can Apply This Month</H2>
      <div style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 18, padding: "22px 26px", marginBottom: 14 }}>
        {[`Claim and fully complete your Google Business Profile — every field, every photo slot.`,
          `Ask your 20 happiest ${cu} for a Google review this week; reply to every single one.`,
          `Rewrite your website headline to say what you do, for whom, and where — in one line.`,
          `Install WhatsApp click-to-chat on every page and ad; respond within 15 minutes.`,
          `Publish one genuinely useful answer post per week targeting a question ${cu} actually ask.`,
          `Set up conversion tracking before spending another rupee on ads.`,
          `Run one hyper-local campaign within 5 km before dreaming about citywide reach.`,
          `Film one 30-second hook-first reel weekly around ${kw} — consistency beats production value.`,
          `Build an opted-in WhatsApp broadcast list; send one value message (not an ad) monthly.`,
          `Create a simple KPI dashboard: enquiries, cost per lead, revenue — reviewed weekly.`,
          `Add an FAQ section with schema to your top pages so AI engines can cite you.`,
          `Audit your top 3 competitors quarterly: their keywords, offers and review velocity.`].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: i < 11 ? 12 : 0, alignItems: "flex-start" }}>
              <span style={{ background: T.gradGold, color: T.ink, width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
              <span style={{ color: T.text2, fontSize: 13.5, lineHeight: 1.7 }}>{t}</span>
            </div>
          ))}
      </div>

      <H2 id="s7">Common Mistakes &amp; How to Avoid Them</H2>
      <P>Most {lu} marketing fails for predictable, avoidable reasons. Recognising these early saves months of wasted budget:</P>
      {[["Boosting posts instead of running structured campaigns", `The 'Boost' button is the most expensive button on the internet. Real campaigns use proper audiences, objectives and tracking — which is exactly what separates spend from investment.`],
      ["Sending ad traffic to the homepage", `A homepage tries to do everything and converts nothing. Every campaign needs a dedicated page with one message and one clear action.`],
      ["Ignoring reviews and replies", `${cu.charAt(0).toUpperCase() + cu.slice(1)} read reviews before they ever contact you. Silence on your profile reads as indifference — respond to every review, good or bad.`],
      ["No follow-up system", `Most enquiries do not convert on first contact. Without WhatsApp or email follow-up, you are paying to generate leads and then letting them go cold.`],
      ["Chasing every channel at once", `Spreading a small budget across five platforms guarantees five mediocre results. Win one channel, then expand.`]].map((mk, i) => (
        <div key={i} style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderLeft: `3px solid #B0413E`, borderRadius: 14, padding: "15px 19px", marginBottom: 9 }}>
          <div style={{ fontWeight: 700, color: T.ink, fontSize: 14, fontFamily: T.serif, marginBottom: 4 }}>{mk[0]}</div>
          <div style={{ color: T.text2, fontSize: 13, lineHeight: 1.7 }}>{mk[1]}</div>
        </div>
      ))}
      <P>If two or more of these sound familiar, you are not behind — you are normal. They are all fixable within a month, and an outside audit usually finds them fast. Our team offers exactly that through the <L go={go} page="contact">contact page</L>, with no obligation.</P>

      <H2 id="s8">Budget, Tools &amp; Timeline</H2>
      <P>What does sensible investment look like? Social media management starts at ₹3,499/month, Google Ads management runs 18% of ad spend, Meta Ads at 15%, conversion-ready websites from ₹6,500, and live KPI dashboards from ₹2,000. A focused {lu} stack — local SEO + one paid channel + WhatsApp retention — typically lands between ₹15,000 and ₹40,000 monthly all-in.</P>
      <P>Timeline expectations: paid campaigns produce enquiries within 7–14 days; map-pack movement in 60–90 days; SEO compounding from month 3–6 onward. The businesses that win commit to two quarters, measure weekly, and resist channel-hopping. If you want this run for you end-to-end, the <A i={0} /> operates exactly this playbook with no lock-in contracts.</P>

      <H2 id="s9">Choosing the Right Marketing Partner</H2>
      <P>Whether you build an in-house team, hire freelancers or partner with an agency, the decision comes down to senior attention versus cost. A junior in-house hire is affordable but inexperienced; a senior one is experienced but expensive and hard to retain. Freelancers are flexible but fragmented across SEO, ads, design and content. A founder-led partner sits in the sweet spot: senior strategy across every channel for a fraction of a full in-house team, with one accountable point of contact.</P>
      <P>When you evaluate any partner, ask four questions: Do they show you numbers or just activity? Do they lock you into long contracts or earn the relationship monthly? Do they understand your specific {lu} sector, or apply a generic template? And can you actually reach the people doing the work? Business Volunteers was built around honest answers to all four — transparent pricing from ₹150 deliverables to full retainers, no lock-in, founder-led delivery, and experience across 89 industries. You can review every service on the <L go={go} page="services">services page</L>, compare figures on the <L go={go} page="pricing">pricing page</L>, see proof on the <L go={go} page="casestudies">case studies page</L>, or simply start a conversation via the <L go={go} page="contact">contact page</L>.</P>

      <H2 id="s10">Conclusion</H2>
      <P>Digital marketing for {ind ? ind.name.toLowerCase() : `your ${lu.toLowerCase()}`} is no longer a side project — it is the front door of the business. Capture the demand that already exists, create demand with proof-led content, and never let a hard-won {cu.slice(0, -1)} go silent. Do those three things consistently and the growth curve takes care of itself.</P>
      <div style={{ background: T.ink, borderRadius: 20, padding: "30px 28px", textAlign: "center", margin: "22px 0 6px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: T.gradGold }} />
        <div style={{ color: "#fff", fontFamily: T.serif, fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Want this executed for you?</div>
        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, marginBottom: 18 }}>Free 30-minute strategy session · 2-hour response · businessvolunteers.online</div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/918586989832" target="_blank" rel="noopener noreferrer" style={btnGold}>WhatsApp Us →</a>
          <button onClick={() => go("contact")} style={{ ...btnGhost, color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)" }}>Contact Page</button>
        </div>
      </div>

      <H2 id="s11">Frequently Asked Questions</H2>
      <div style={{ marginBottom: 36 }}>
        {faqs.map(([q, a], i) => (
          <div key={i} style={{ background: T.bg2, border: `1px solid ${fq === i ? T.gold : T.cardB}`, borderRadius: 14, marginBottom: 9, overflow: "hidden", transition: "border-color .25s" }}>
            <button onClick={() => setFq(fq === i ? null : i)} style={{ width: "100%", background: "none", border: "none", padding: "15px 19px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
              <span style={{ fontWeight: 600, color: T.ink, fontSize: 13.5, textAlign: "left", lineHeight: 1.45 }}>{q}</span>
              <span style={{ color: fq === i ? T.gold : T.text2, fontSize: 16, flexShrink: 0, transition: "transform .25s", transform: fq === i ? "rotate(45deg)" : "none" }}>＋</span>
            </button>
            {fq === i && <div style={{ padding: "0 19px 15px", color: T.text2, fontSize: 13.5, lineHeight: 1.8 }}>{a}</div>}
          </div>
        ))}
      </div>

      {/* Related */}
      <div style={{ borderTop: `1px solid ${T.cardB}`, paddingTop: 32 }}>
        <Eyebrow>Keep Reading</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: 12, marginBottom: 24 }}>
          {related.map((rb, i) => (
            <div key={i} onClick={() => openBlogGlobal({ ...rb, tag: blog.tag, indId })} style={{ background: T.bg2, border: `1px solid ${T.cardB}`, borderRadius: 14, padding: 18, cursor: "pointer" }}>
              <div style={{ fontSize: 10, color: T.gold, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>Related Article</div>
              <div style={{ fontWeight: 700, color: T.ink, fontSize: 13, lineHeight: 1.45, fontFamily: T.serif }}>{rb.title}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
          {["SEO Services", "Meta Ads", "Google Ads", "WhatsApp Marketing"].map(s => (
            <button key={s} onClick={() => go("services")} style={{ background: T.bg3, border: `1px solid ${T.cardB}`, borderRadius: 50, padding: "8px 18px", fontSize: 12, fontWeight: 600, color: T.ink, cursor: "pointer" }}>{s} →</button>
          ))}
          <button onClick={() => go("casestudies")} style={{ background: T.bg3, border: `1px solid ${T.cardB}`, borderRadius: 50, padding: "8px 18px", fontSize: 12, fontWeight: 600, color: T.ink, cursor: "pointer" }}>Case Studies →</button>
        </div>
      </div>
    </div>
  );
}

// ── SERVICES (per blueprint: 12 core + creative + signature KPI) ──────────────

export default function BlogArticlePageRoute({ blog }) {
  const go = useGo(); const router = useRouter();
  return <BlogArticlePage blog={blog} onBack={() => router.push("/blog")} go={go} />;
}