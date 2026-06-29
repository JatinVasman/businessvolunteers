#!/usr/bin/env python3
import os, html, json

OUT = "/home/claude/dist_site"
DOMAIN = "https://businessvolunteers.online"
WA = "https://wa.me/918586989832"
LOGO = open("/home/claude/vbs_black_b64.txt").read().strip()

LOCATIONS = [
    ("mumbai","Mumbai","domestic"),("delhi","Delhi","domestic"),("bangalore","Bangalore","domestic"),
    ("hyderabad","Hyderabad","domestic"),("chennai","Chennai","domestic"),("kolkata","Kolkata","domestic"),
    ("ahmedabad","Ahmedabad","domestic"),("pune","Pune","domestic"),("noida","Noida","domestic"),
    ("gurgaon","Gurgaon","domestic"),("jaipur","Jaipur","domestic"),("dehradun","Dehradun","domestic"),
    ("uttarakhand","Uttarakhand","domestic"),("chandigarh","Chandigarh","domestic"),("lucknow","Lucknow","domestic"),
    ("surat","Surat","domestic"),("indore","Indore","domestic"),("nagpur","Nagpur","domestic"),
    ("kochi","Kochi","domestic"),("coimbatore","Coimbatore","domestic"),
    ("usa","USA","intl"),("australia","Australia","intl"),("uk","UK","intl"),
    ("canada","Canada","intl"),("dubai","Dubai","intl"),
]

def disp(name):
    return "the "+name if name in ("USA","UK") else name

SERVICES = [
    ("🔍","Search Engine Optimisation (SEO)","Climb to the top of Google for the searches your {C} customers actually type — with technical fixes, local optimisation and content that earns rankings and 24/7 organic leads."),
    ("🎯","Google Ads (PPC)","Capture buyers the moment they search. We build and tune Search, Display and YouTube campaigns mapped to real leads, not just clicks, for businesses {IN}."),
    ("📱","Meta Ads — Facebook & Instagram","Put your brand in front of the right {C} audience with creative-led Facebook and Instagram campaigns engineered around conversions and cost-per-lead."),
    ("📣","Social Media Marketing","Consistent posts, reels and community management that keep your {C} brand visible, credible and growing month after month."),
    ("💻","Website Design & Development","Fast, mobile-first, SEO-ready websites and landing pages designed to turn {C} visitors into enquiries and sales."),
    ("🎨","Graphic Design & Branding","Posters, logos, packaging and a complete brand identity — polished creative for {C} businesses, starting at just ₹150 per design."),
]

WHY = [
    ("Founder-Led & Hands-On","You work directly with a senior, founder-led team that treats your business like our own — no junior hand-offs, no guesswork."),
    ("Built Around Your Market","We study local competition and search intent so your campaigns speak to the customers who matter most {IN}."),
    ("Transparent, Honest Pricing","Clear scope-based pricing and no lock-in contracts. From ₹150 creatives to full monthly retainers, you always know exactly what you are paying for."),
    ("Measurable Results","Live dashboards and plain-English monthly reports tie every rupee to leads, traffic and revenue — never just vanity metrics."),
]

PROCESS = [
    ("01","Discovery & Audit","We learn your goals and audit your current online presence to find the fastest wins {IN}."),
    ("02","Strategy & Roadmap","You get a clear, prioritised plan with timelines, channels and the outcomes to expect."),
    ("03","Execution","Our team builds, launches and optimises your campaigns, content and creative — week after week."),
    ("04","Reporting & Growth","Transparent monthly reviews, then we double down on what works to compound your results."),
]

def faqs(name):
    IN = "in "+disp(name)
    beyond = "and worldwide" if name in ("USA","UK","Australia","Canada","Dubai") else "and across India"
    return [
        (f"Do you provide digital marketing services {IN}?",
         f"Yes. Business Volunteers works with businesses {IN} {beyond}, delivering SEO, paid ads, social media, websites and graphic design. We work remotely with regular strategy calls and clear reporting, so distance is never a barrier to results."),
        (f"What does digital marketing cost {IN}?",
         "It depends on your goals and scope. Graphic design starts at ₹150 per design, SEO from ₹4,000 per month, and paid-ad management at 18% of your ad spend. Share your goals on WhatsApp and we will send a tailored quote."),
        ("How long before I see results?",
         "Paid advertising can start generating leads within days, while SEO usually builds momentum over three to six months. We set clear milestones from day one so you always know where your campaign stands."),
        (f"Which industries do you serve {IN}?",
         "We support more than 89 industries — from healthcare, education and real estate to restaurants, retail and D2C brands — with strategies tuned to each sector's buyers."),
        ("How do we get started?",
         "Send us a message on WhatsApp or request a quote. We run a free audit, share a clear plan and timeline, and begin as soon as you are happy to proceed."),
    ]

TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>__TITLE__</title>
<meta name="description" content="__DESC__" />
<link rel="canonical" href="__CANON__" />
<meta property="og:type" content="website" />
<meta property="og:title" content="__TITLE__" />
<meta property="og:description" content="__DESC__" />
<meta property="og:url" content="__CANON__" />
<meta name="twitter:card" content="summary" />
<script type="application/ld+json">__JSONLD__</script>
<style>
:root{
  --bg:#FAF6F0;--bg2:#FFFFFF;--bg3:#F4EDE3;--ink:#1C140D;--text2:#6E6258;
  --gold:#C9963B;--goldL:#E5C07B;--primary:#C2410C;
  --cardB:rgba(28,20,13,0.09);--cardBGold:rgba(201,150,59,0.35);
  --shadow:rgba(28,20,13,0.10);--shadowW:rgba(194,65,12,0.18);
  --serif:Georgia,'Times New Roman',serif;--sans:'Segoe UI',system-ui,-apple-system,sans-serif;
  --gradLux:linear-gradient(120deg,#C2410C 0%,#C9963B 50%,#EA6A2C 100%);
  --gradGold:linear-gradient(135deg,#C9963B,#E5C07B);
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:var(--sans);background:var(--bg);color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased}
a{text-decoration:none;color:inherit}
img{max-width:100%}
.wrap{max-width:1100px;margin:0 auto;padding:0 22px}
.serif{font-family:var(--serif)}
/* header */
header{position:sticky;top:0;z-index:50;background:rgba(250,246,240,0.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--cardB)}
.hd{display:flex;align-items:center;justify-content:space-between;gap:14;padding:12px 0}
.brand{display:flex;align-items:center;gap:10}
.logo{width:38px;height:38px;border-radius:10px;overflow:hidden;flex-shrink:0;box-shadow:0 6px 18px var(--shadowW)}
.logo img{width:100%;height:100%;object-fit:cover}
.bn{font-family:var(--serif);font-weight:700;font-size:16px}
.hd nav{display:flex;align-items:center;gap:8;flex-wrap:wrap}
.lnk{color:var(--text2);font-size:13px;font-weight:600;padding:6px 8px}
.btn{display:inline-block;border-radius:50px;padding:11px 22px;font-weight:800;font-size:13px;cursor:pointer;border:none}
.btn-gold{background:var(--gradGold);color:var(--ink)}
.btn-dark{background:var(--ink);color:#fff;font-weight:700}
.btn-ghost{background:transparent;color:var(--ink);border:1.5px solid var(--ink);font-weight:700}
/* hero */
.hero{padding:60px 0 46px;position:relative}
.herogrid{display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:start}
.eyebrow{font-size:11px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:14px}
h1{font-family:var(--serif);font-weight:700;font-size:clamp(28px,5vw,46px);line-height:1.12;margin-bottom:16px}
h1 .accent{background:var(--gradLux);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.lead{font-size:16px;color:var(--text2);max-width:720px;margin-bottom:26px;line-height:1.85}
.cta-row{display:flex;gap:12px;flex-wrap:wrap}
/* form */
.formcard{background:var(--bg2);border:1px solid var(--cardBGold);border-radius:22px;padding:26px;box-shadow:0 20px 52px var(--shadow);position:relative;overflow:hidden}
.formcard::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--gradLux)}
.formh{font-family:var(--serif);font-size:21px;font-weight:700;margin-bottom:4px}
.formp{font-size:13px;color:var(--text2);margin-bottom:16px}
.formcard label{display:block;font-size:12px;font-weight:700;color:var(--ink);margin-bottom:12px}
.formcard label span{color:var(--primary);margin-left:3px}
.formcard label em{color:var(--text2);font-weight:500;font-style:normal}
.formcard input,.formcard textarea{width:100%;margin-top:5px;padding:11px 13px;border:1px solid var(--cardB);border-radius:10px;font-size:13.5px;font-family:var(--sans);background:var(--bg);color:var(--ink);resize:vertical}
.formcard input:focus,.formcard textarea:focus{outline:none;border-color:var(--gold)}
.formnote{font-size:11.5px;color:var(--text2);text-align:center;margin-top:12px}
.formnote a{color:var(--primary);font-weight:700}
/* stats */
.stats{display:flex;gap:30px;flex-wrap:wrap;margin-top:38px;padding-top:26px;border-top:1px solid var(--cardB)}
.stat .n{font-family:var(--serif);font-weight:700;font-size:26px;background:var(--gradLux);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.stat .l{font-size:12px;color:var(--text2)}
/* sections */
section.blk{padding:46px 0}
.head{margin-bottom:26px}
.head .eyebrow{margin-bottom:8px}
h2{font-family:var(--serif);font-weight:700;font-size:clamp(22px,3.4vw,30px);line-height:1.2}
.sub{color:var(--text2);font-size:14.5px;margin-top:8px;max-width:680px}
.grid{display:grid;gap:16px}
.g3{grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
.g4{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.card{background:var(--bg2);border:1px solid var(--cardB);border-radius:18px;padding:24px;box-shadow:0 8px 24px var(--shadow);position:relative;overflow:hidden}
.card::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:var(--gradLux)}
.card .ic{font-size:30px;margin-bottom:12px}
.card h3{font-family:var(--serif);font-weight:700;font-size:16.5px;margin-bottom:7px}
.card p{color:var(--text2);font-size:13.5px;line-height:1.7}
.soft{background:var(--bg3);border-radius:16px;padding:22px;border:none}
.soft::before{display:none}
.step .num{font-family:var(--serif);font-weight:700;font-size:24px;color:var(--gold);margin-bottom:8px}
/* faq */
details{background:var(--bg2);border:1px solid var(--cardB);border-radius:14px;margin-bottom:10px;overflow:hidden}
details[open]{border-color:var(--gold)}
summary{list-style:none;cursor:pointer;padding:16px 20px;font-weight:600;font-size:14.5px;display:flex;justify-content:space-between;gap:10;align-items:center}
summary::-webkit-details-marker{display:none}
summary::after{content:"+";color:var(--gold);font-size:20px;flex-shrink:0}
details[open] summary::after{content:"–"}
details .ans{padding:0 20px 16px;color:var(--text2);font-size:14px;line-height:1.8}
/* cta band */
.band{background:var(--ink);border-radius:24px;padding:44px 30px;text-align:center;position:relative;overflow:hidden;margin:46px 0}
.band::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:var(--gradGold)}
.band h2{color:#fff}
.band p{color:rgba(255,255,255,0.65);font-size:14px;margin:10px 0 24px}
/* footer */
footer{background:var(--ink);color:rgba(255,255,255,0.6);padding:44px 0 26px;margin-top:30px}
footer h4{color:var(--goldL);font-size:11px;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:14px}
.fchips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px}
.fchip{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.18);color:rgba(255,255,255,0.82);border-radius:50px;padding:6px 14px;font-size:12px;transition:all .2s}
.fchip:hover{border-color:var(--gold);color:#fff;background:rgba(201,150,59,0.14)}
.fbot{border-top:1px solid rgba(255,255,255,0.12);margin-top:26px;padding-top:18px;font-size:11px;color:rgba(255,255,255,0.4);text-align:center}
.copy{font-size:11px;color:var(--text2);margin-top:14px}
@media(max-width:860px){.herogrid{grid-template-columns:1fr;gap:28px}}
@media(max-width:640px){.hd nav .lnk{display:none}}
</style>
</head>
<body>
<header><div class="wrap hd">
  <a class="brand" href="../">
    <span class="logo"><img src="__LOGO__" alt="Business Volunteers logo" /></span>
    <span class="bn">Business Volunteers</span>
  </a>
  <nav>
    <a class="lnk" href="../">Home</a>
    <a class="lnk" href="../#services">Services</a>
    <a class="btn btn-dark" href="__WA__?text=__WATXT__" target="_blank" rel="noopener">Get a Quote</a>
  </nav>
</div></header>

<section class="hero"><div class="wrap">
  <div class="herogrid">
    <div class="herocol">
      <div class="eyebrow">__REGION__ &middot; Digital Marketing</div>
      <h1>Digital Marketing Services in <span class="accent">__CITY__</span></h1>
      <p class="lead">__INTRO__</p>
      <div class="cta-row">
        <a class="btn btn-gold" href="__WA__?text=__WATXT__" target="_blank" rel="noopener">Get a Free __CITY__ Quote &rarr;</a>
        <a class="btn btn-ghost" href="../#services">Explore Our Services</a>
      </div>
    </div>
    <div class="formcol">
      <div class="formcard">
        <h2 class="formh">Send Us a Message</h2>
        <p class="formp">Tell us about your goals in __CITY__ &mdash; we usually reply within 2 hours.</p>
        <form onsubmit="return bvSend(event)">
          <label>Name<span>*</span><input id="f_name" type="text" required placeholder="Your name" /></label>
          <label>Email<span>*</span><input id="f_email" type="email" required placeholder="you@email.com" /></label>
          <label>Contact No<span>*</span><input id="f_phone" type="tel" required placeholder="+91 ..." /></label>
          <label>Website <em>(if any)</em><input id="f_site" type="text" placeholder="yourbusiness.com" /></label>
          <label>Your Message<span>*</span><textarea id="f_msg" rows="3" required placeholder="What do you need help with?"></textarea></label>
          <button type="submit" class="btn btn-gold" style="width:100%">Submit Enquiry Now</button>
          <div class="formnote">Or message us directly on <a href="__WA__" target="_blank" rel="noopener">WhatsApp</a>.</div>
        </form>
      </div>
    </div>
  </div>
  <div class="stats">
    <div class="stat"><div class="n">89+</div><div class="l">Industries served</div></div>
    <div class="stat"><div class="n">2,700+</div><div class="l">Clients & projects</div></div>
    <div class="stat"><div class="n">₹150</div><div class="l">Design starts from</div></div>
    <div class="stat"><div class="n">24/7</div><div class="l">Organic lead engine</div></div>
  </div>
</div></section>

<section class="blk"><div class="wrap">
  <div class="head"><div class="eyebrow">What We Offer</div><h2>Our Digital Marketing Services in __CITY__</h2><p class="sub">__SUBSERV__</p></div>
  <div class="grid g3">__SERVICES__</div>
</div></section>

<section class="blk" style="background:var(--bg3)"><div class="wrap">
  <div class="head"><div class="eyebrow">Why Business Volunteers</div><h2>Why __CITY__ Businesses Choose Us</h2></div>
  <div class="grid g3">__WHY__</div>
</div></section>

<section class="blk"><div class="wrap">
  <div class="head"><div class="eyebrow">How We Work</div><h2>A Simple, Transparent Process</h2></div>
  <div class="grid g4">__PROCESS__</div>
</div></section>

<section class="blk"><div class="wrap">
  <div class="head"><div class="eyebrow">Questions</div><h2>Digital Marketing in __CITY__ &mdash; FAQs</h2></div>
  __FAQ__
</div></section>

<div class="wrap"><div class="band">
  <h2 class="serif">Grow your business in __CITY__</h2>
  <p>Free audit and strategy session &mdash; we usually respond within 2 hours.</p>
  <a class="btn btn-gold" href="__WA__?text=__WATXT__" target="_blank" rel="noopener">Start on WhatsApp &rarr;</a>
</div></div>

<footer><div class="wrap">
  <h4>We Also Serve These Locations</h4>
  <div class="fchips">__CROSS__</div>
  <div class="fbot">&copy; 2026 Business Volunteers &middot; SEO, ads, social, web &amp; design &middot; Noida Sector 62, India &middot; New Ashok Nagar, Delhi, 110096 &middot; <a href="__WA__" target="_blank" rel="noopener" style="color:var(--goldL)">+91 85869 89832</a></div>
</div></footer>
<script>
function bvSend(e){
  e.preventDefault();
  var g=function(id){return (document.getElementById(id)||{}).value||"";};
  var txt="New enquiry from the __CITY__ page%0A%0A"
    +"Name: "+encodeURIComponent(g("f_name"))+"%0A"
    +"Email: "+encodeURIComponent(g("f_email"))+"%0A"
    +"Contact: "+encodeURIComponent(g("f_phone"))+"%0A"
    +"Website: "+encodeURIComponent(g("f_site"))+"%0A"
    +"Message: "+encodeURIComponent(g("f_msg"));
  window.open("__WA__?text="+txt,"_blank");
  return false;
}
</script>
</body>
</html>
"""

def esc(s): return html.escape(s, quote=True)

os.makedirs(OUT, exist_ok=True)
all_slugs = [(s,n,t) for s,n,t in LOCATIONS]

for slug, name, typ in LOCATIONS:
    C = name
    IN = "in " + disp(name)
    region = "International" if typ=="intl" else "India"
    beyond = "and clients worldwide" if typ=="intl" else "and across India"
    canon = f"{DOMAIN}/digital-marketing-services-{slug}/"
    title = f"Digital Marketing Services in {C} | Business Volunteers"
    desc = (f"Results-driven digital marketing {IN}: SEO, Google &amp; Meta ads, social media, "
            f"web design and graphic design from ₹150. Founder-led, transparent pricing. Get a free quote.")
    intro = (f"Business Volunteers is a founder-led digital marketing agency helping businesses {IN} grow online. "
             f"From search rankings and paid ads to social media, websites and standout design, we combine local "
             f"market insight with proven, data-driven execution — so your brand gets found, gets leads and gets results.")
    subserv = f"Full-service growth for {C} businesses — every channel handled by one accountable team."

    services_html = "".join(
        f'<div class="card"><div class="ic">{ic}</div><h3>{esc(t)}</h3><p>{esc(d.replace("{C}",C).replace("{IN}",IN))}</p></div>'
        for ic,t,d in SERVICES)
    why_html = "".join(
        f'<div class="card soft"><h3>{esc(t)}</h3><p>{esc(d.replace("{IN}",IN))}</p></div>'
        for t,d in WHY)
    process_html = "".join(
        f'<div class="card soft step"><div class="num">{num}</div><h3>{esc(t)}</h3><p>{esc(d.replace("{IN}",IN))}</p></div>'
        for num,t,d in PROCESS)
    fq = faqs(name)
    faq_html = "".join(
        f'<details><summary>{esc(q)}</summary><div class="ans">{esc(a)}</div></details>'
        for q,a in fq)
    # cross links: all others
    cross = "".join(
        f'<a class="fchip" href="../digital-marketing-services-{s2}/">{esc(n2)}</a>'
        for s2,n2,t2 in all_slugs if s2!=slug)

    jsonld = {
      "@context":"https://schema.org",
      "@graph":[
        {"@type":"ProfessionalService","name":f"Business Volunteers — Digital Marketing in {C}",
         "url":canon,"areaServed":C,"telephone":"+91-85869-89832",
         "description":f"Digital marketing agency offering SEO, paid ads, social media, web and design services {IN}.",
         "address":{"@type":"PostalAddress","addressLocality":"Noida","addressRegion":"Uttar Pradesh","addressCountry":"IN"}},
        {"@type":"FAQPage","mainEntity":[
            {"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in fq
        ]}
      ]
    }
    watxt = ("Hi%20Business%20Volunteers%2C%20I%20want%20digital%20marketing%20in%20" +
             C.replace(" ","%20"))

    pagedir = os.path.join(OUT, f"digital-marketing-services-{slug}")
    os.makedirs(pagedir, exist_ok=True)
    page = TEMPLATE
    repl = {
      "__TITLE__":esc(title),"__DESC__":desc,"__CANON__":canon,
      "__JSONLD__":json.dumps(jsonld,ensure_ascii=False),
      "__LOGO__":LOGO,"__WA__":WA,"__WATXT__":watxt,
      "__REGION__":region,"__CITY__":esc(C),"__INTRO__":esc(intro),
      "__SUBSERV__":esc(subserv),"__SERVICES__":services_html,"__WHY__":why_html,
      "__PROCESS__":process_html,"__FAQ__":faq_html,"__CROSS__":cross,
    }
    for k,v in repl.items():
        page = page.replace(k,v)
    open(os.path.join(pagedir,"index.html"),"w",encoding="utf-8").write(page)

# sitemap + robots
urls = [f"{DOMAIN}/"] + [f"{DOMAIN}/digital-marketing-services-{s}/" for s,_,_ in LOCATIONS]
sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for u in urls:
    sm += f"  <url><loc>{u}</loc><changefreq>monthly</changefreq><priority>{'1.0' if u.endswith('online/') else '0.8'}</priority></url>\n"
sm += "</urlset>\n"
open(os.path.join(OUT,"sitemap.xml"),"w").write(sm)
open(os.path.join(OUT,"robots.txt"),"w").write(f"User-agent: *\nAllow: /\nSitemap: {DOMAIN}/sitemap.xml\n")

print("Generated", len(LOCATIONS), "location pages + sitemap.xml + robots.txt")
print("Sample dir listing:")
for d in sorted(os.listdir(OUT))[:6]:
    print("  ", d)
