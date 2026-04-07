"use client";
const PHONE = "+919737168423";
const EMAIL = "astro@officialastrology.com";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

export default function Footer() {
  const services = ["Talk To Astrologer Online","Kundali Matching","Love Marriage Solution","Black Magic Removal","Child Birth Issue","Marriage Prediction","Business & Wealth Prediction","Job Career Study Report","Live-in Partner Solution"];

  return (
    <footer style={{ background:"linear-gradient(180deg, #ffffff 0%, #ffffff 65%, #F5E8E0 100%)", padding:"72px 32px 24px", position:"relative", overflow:"hidden", borderTop:"2px solid rgba(232,86,42,0.2)" }}>
      {/* Green top hairline */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg, transparent 0%, #A53A15 20%, #F06830 50%, #A53A15 80%, transparent 100%)" }} />
      {/* Atmospheric glow */}
      <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:600, height:200, background:"radial-gradient(ellipse, rgba(232,86,42,0.04) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1.5fr", gap:48, marginBottom:56 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
              <img src="/logo1.webp" alt="Vikram Astrology" style={{ width:56, height:56, objectFit:"contain", flexShrink:0 }} />
              <div>
                <div style={{ fontFamily:"var(--font-display)", fontSize:"1.1rem", fontWeight:700, letterSpacing:"0.12em", color:"#E8562A", marginBottom:2 }}>VIKRAM ASTROLOGY</div>
                <div style={{ fontFamily:"var(--font-ui)", fontSize:"0.58rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"rgba(232,86,42,0.5)" }}>Best Ambaji Upasak</div>
              </div>
            </div>
            <p style={{ fontFamily:"var(--font-body)", fontSize:"0.95rem", color:"rgba(94,45,45,0.7)", lineHeight:1.8, marginBottom:12, maxWidth:300 }}>
              Vikram Bhai Joshi — 5th generation Vedic astrologer & Best Ambaji Upasak with 25+ years experience. 90K+ consultations. Ahmedabad, Gujarat.
            </p>
            <p style={{ fontFamily:"var(--font-body)", fontSize:"0.9rem", color:"rgba(94,45,45,0.55)", lineHeight:1.7, maxWidth:300 }}>
              Trusted by thousands of families across India for accurate predictions, powerful remedies, and compassionate guidance in every aspect of life.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily:"var(--font-ui)", fontSize:"1.02rem", fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold-warm)", marginBottom:20, paddingBottom:10, borderBottom:"1px solid rgba(232,86,42,0.2)" }}>Services</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {services.map((s) => (
                <li key={s}>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily:"var(--font-ui)", fontSize:"0.84rem", color:"rgba(94,45,45,0.6)", textDecoration:"none", transition:"color 0.2s", display:"flex", alignItems:"center", gap:8, letterSpacing:"0.02em" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="var(--gold-warm)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color="rgba(94,45,45,0.6)"; }}>
                    <span style={{ color:"rgba(232,86,42,0.5)", fontSize:"0.4rem", flexShrink:0 }}>◆</span>{s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily:"var(--font-ui)", fontSize:"1.02rem", fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold-warm)", marginBottom:20, paddingBottom:10, borderBottom:"1px solid rgba(232,86,42,0.2)" }}>Navigation</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {[{label:"Home",href:"/"},{label:"About Us",href:"/about"},{label:"Main Services",href:"/services"},{label:"Astrology Services",href:"/astrology-services"},{label:"Testimonials",href:"/testimonials"},{label:"Contact Us",href:"/contact"}].map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    style={{ fontFamily:"var(--font-ui)", fontSize:"0.84rem", color:"rgba(94,45,45,0.6)", textDecoration:"none", transition:"color 0.2s", display:"flex", alignItems:"center", gap:8, letterSpacing:"0.02em" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="var(--gold-warm)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color="rgba(94,45,45,0.6)"; }}>
                    <span style={{ color:"rgba(232,86,42,0.5)", fontSize:"0.4rem", flexShrink:0 }}>◆</span>{link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily:"var(--font-ui)", fontSize:"1.02rem", fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold-warm)", marginBottom:20, paddingBottom:10, borderBottom:"1px solid rgba(232,86,42,0.2)" }}>Get in Touch</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {[
                {icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8562A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,value:PHONE,href:`tel:${PHONE}`},
                {icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8562A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,value:"Chat Now",href:WA_LINK},
                {icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8562A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,value:EMAIL,href:`mailto:${EMAIL}`},
                {icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8562A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,value:"Ahmedabad, Gujarat",href:"#"},
                {icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8562A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,value:"24/7, All Days",href:"#"},
              ].map((item, i) => (
                <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
                  <span style={{ flexShrink:0 }}>{item.icon}</span>
                  <div style={{ fontFamily:"var(--font-ui)", fontSize:"0.92rem", color:"rgba(94,45,45,0.85)", fontWeight:600 }}>{item.value}</div>
                </a>
              ))}
            </div>
            <div style={{ marginTop:20, padding:"12px 16px", background:"rgba(232,86,42,0.04)", border:"1px solid rgba(232,86,42,0.15)" }}>
              <p style={{ fontFamily:"var(--font-ui)", fontSize:"0.76rem", color:"rgba(232,86,42,0.5)", lineHeight:1.6, letterSpacing:"0.04em" }}>
                Best Astrologer Ahmedabad · Ambaji Upasak · Vedic Jyotish Expert · Black Magic Removal
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ height:1, background:"rgba(232,86,42,0.15)", marginBottom:24 }} />
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontFamily:"var(--font-ui)", fontSize:"0.76rem", color:"rgba(94,45,45,0.5)", letterSpacing:"0.06em" }}>© {new Date().getFullYear()} Official Astrology — Vikram Bhai Joshi. All Rights Reserved.</p>
          <p style={{ fontFamily:"var(--font-ui)", fontSize:"0.76rem", color:"rgba(94,45,45,0.5)", letterSpacing:"0.06em" }}>The best Ambaji worshipper, your faithful companion in astrology.</p>
        </div>
      </div>

      <style>{`
        @media (max-width:900px) { .footer-grid { grid-template-columns:1fr 1fr !important; gap:36px !important; } }
        @media (max-width:560px) { .footer-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </footer>
  );
}
