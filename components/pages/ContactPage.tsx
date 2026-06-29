"use client";
import { useState } from "react";
import { useGo } from "../../lib/nav";
import { T } from "../../lib/data";
import { SectionHead, SocialIconRow, Crumb } from "../ui";

function ContactPage({ go }) {
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", message:"" });
  const [sent, setSent] = useState(false);

  const [error, setError] = useState("");

  const upd = (k,v) => { setForm(p=>({...p,[k]:v})); setError(""); };

  // Client-side validation
  function validate(): string | null {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.message.trim()) return "Please enter a message.";
    return null;
  }

  function openMailApp() {
    const validationError = validate();
    if (validationError) { setError(validationError); return; }

    const subject = encodeURIComponent(
      `Enquiry from ${form.name.trim()}${form.service ? ` – ${form.service}` : ""}`
    );
    const body = encodeURIComponent(
      `Hi Business Volunteers,\n\nName: ${form.name.trim()}\nEmail: ${form.email.trim()}\nPhone: ${form.phone.trim() || "N/A"}\nService: ${form.service || "N/A"}\n\n${form.message.trim()}`
    );
    window.location.href = `mailto:contact.businessvolunteers@gmail.com?subject=${subject}&body=${body}`;
  }

  function sendWhatsApp() {
    const msg = encodeURIComponent(
      `Hi Business Volunteers!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
    );
    window.open(`https://wa.me/918586989832?text=${msg}`, "_blank");
  }

  const inputStyle = { width:"100%", background:T.bg3, border:`1px solid ${T.cardB}`, borderRadius:12, padding:"13px 18px", color:T.ink, fontSize:13.5, marginBottom:13, fontFamily:T.sans, outline:"none" };

  return (
    <div style={{ paddingTop:36, maxWidth:680, margin:"0 auto" }}>
      <Crumb go={go} items={[{label:"Home",page:"home"},{label:"Contact"}]} />
      <SectionHead eyebrow="Get In Touch" title="Let's Build Something Remarkable" sub="We respond within 2 hours — always." />

      {/* Contact info cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:12, marginBottom:24 }}>
        {[
          { icon:"✉", l:"Email", v:"contact.businessvolunteers@gmail.com", h:"mailto:contact.businessvolunteers@gmail.com" },
          { icon:"☏", l:"WhatsApp", v:"+91 85869 89832", h:"https://wa.me/918586989832" },
          { icon:"◉", l:"Location", v:"Noida Sector 62, UP", h:"#" },
          { icon:"◉", l:"Location", v:"New Ashok Nagar, Delhi, 110096", h:"#" },
          { icon:"◷", l:"Hours", v:"Mon–Sat · 9AM–6PM IST", h:"#" },
        ].map((c,i)=>(
          <a key={i} href={c.h} {...(c.h.startsWith("mailto:") ? {} : { target:"_blank", rel:"noopener noreferrer" })}
            style={{ background:T.bg2, border:`1px solid ${T.cardB}`, borderRadius:16, padding:18, display:"flex", gap:14, alignItems:"center", boxShadow:`0 6px 20px ${T.shadow}` }}>
            <span style={{ fontSize:20, color:T.gold }}>{c.icon}</span>
            <div>
              <div style={{ fontSize:9.5, color:T.gold, marginBottom:3, letterSpacing:2, textTransform:"uppercase", fontWeight:700 }}>{c.l}</div>
              <div style={{ fontWeight:600, fontSize:12, color:T.ink }}>{c.v}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Contact form */}
      <div style={{ background:T.bg2, border:`1px solid ${T.cardBGold}`, borderRadius:24, padding:32, boxShadow:`0 20px 52px ${T.shadow}` }}>
        {sent ? (
          <div style={{ textAlign:"center", padding:"32px 0" }}>
            <div style={{ fontSize:52, marginBottom:14 }}>🎉</div>
            <div style={{ fontFamily:T.serif, fontSize:22, fontWeight:700, color:T.ink, marginBottom:8 }}>Message Sent!</div>
            <div style={{ color:T.text2, fontSize:14, marginBottom:22 }}>We'll get back to you within 2 hours. Check your inbox for a confirmation email.</div>
            <button onClick={()=>{ setSent(false); setForm({ name:"", email:"", phone:"", service:"", message:"" }); }} style={{ background:"none", border:`1px solid ${T.cardB}`, borderRadius:50, padding:"10px 24px", fontSize:12.5, fontWeight:600, color:T.ink, cursor:"pointer" }}>Send another →</button>
          </div>
        ) : (
          <>
            <div style={{ fontFamily:T.serif, fontWeight:700, fontSize:18, color:T.ink, marginBottom:20 }}>Send Us a Message</div>

            {/* Error banner */}
            {error && (
              <div style={{ background:"#FEF2F2", border:"1px solid #FECACA", borderRadius:12, padding:"12px 18px", marginBottom:16, color:"#991B1B", fontSize:13, fontWeight:600, display:"flex", alignItems:"center", gap:8 }}>
                <span>⚠️</span> {error}
              </div>
            )}

            <input value={form.name} onChange={e=>upd("name",e.target.value)} placeholder="Your Name *" style={inputStyle} />
            <input value={form.email} onChange={e=>upd("email",e.target.value)} placeholder="Email Address *" style={inputStyle} type="email" />
            <input value={form.phone} onChange={e=>upd("phone",e.target.value)} placeholder="Phone / WhatsApp Number" style={inputStyle} type="tel" />
            <select value={form.service} onChange={e=>upd("service",e.target.value)} style={{ ...inputStyle, color:form.service?T.ink:T.text2 }}>
              <option value="">Select a Service</option>
              {["Dashboard & KPI Systems","SEO","Google Ads","Meta Ads","Social Media","Website Development","E-commerce","CRM & Automation","Lead Generation","Content Marketing","Local SEO","WhatsApp Marketing","Logo & Branding","Poster Design","Reels & Video","B2B Partnership","Other"].map(s=><option key={s} value={s}>{s}</option>)}
            </select>
            <textarea value={form.message} onChange={e=>upd("message",e.target.value)} rows={4} placeholder="Tell us about your business and goals... *" style={{ ...inputStyle, resize:"vertical", marginBottom:20 }} />

            {/* Two CTA buttons */}
            <div className="bv-contact-btn-grid">
              <button onClick={openMailApp} style={{ background:T.ink, color:"#fff", borderRadius:50, padding:"14px", fontWeight:800, fontSize:13.5, border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                Send via Email
              </button>
              <button onClick={sendWhatsApp} style={{ background:"#25d366", color:"#fff", borderRadius:50, padding:"14px", fontWeight:800, fontSize:13.5, border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.39 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.27z"/></svg>
                Send via WhatsApp
              </button>
            </div>
            <div style={{ textAlign:"center", color:T.text2, fontSize:11.5, marginTop:12 }}>
              Email opens your mail app pre-filled. WhatsApp opens the app pre-filled.
            </div>
          </>
        )}
      </div>

      {/* Social row */}
      <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap", marginTop:24 }}>
        <SocialIconRow dark={false} />
      </div>

    </div>
  );
}

// ── INDUSTRIES HUB ────────────────────────────────────────────────────────────

export default function ContactPageRoute(){
  const go=useGo();
  return <ContactPage go={go} />;
}