"use client";
const PHONE = "+919737168423";
const EMAIL = "astro@officialastrology.com";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

export default function Footer() {
  const services = ["Talk To Astrologer Online","Kundali Matching","Love Marriage Solution","Black Magic Removal","Child Birth Issue","Marriage Prediction","Business & Wealth Prediction","Job Career Study Report","Live-in Partner Solution"];

  return (
    <footer style={{ background:"var(--bg-light-yellow)", padding:"72px 32px 24px", position:"relative", overflow:"hidden", borderTop:"2px solid rgba(165,32,32,0.2)" }}>
      {/* Green top hairline */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg, transparent 0%, #6B0E0E 20%, #B52424 50%, #6B0E0E 80%, transparent 100%)" }} />
      {/* Atmospheric glow */}
      <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:600, height:200, background:"radial-gradient(ellipse, rgba(165,32,32,0.04) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1.5fr", gap:48, marginBottom:56 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              {/* Yantra logo */}
              <div style={{ width:44, height:44, border:"1px solid rgba(165,32,32,0.4)", background:"rgba(165,32,32,0.07)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg viewBox="0 0 40 40" fill="none" style={{ width:28, height:28 }}>
                  <polygon points="20,4 34,28 6,28" stroke="#A52020" strokeWidth="1" fill="rgba(165,32,32,0.08)"/>
                  <polygon points="20,36 6,12 34,12" stroke="#B52424" strokeWidth="0.8" fill="rgba(165,32,32,0.05)"/>
                  <circle cx="20" cy="20" r="4" fill="rgba(165,32,32,0.3)" stroke="#A52020" strokeWidth="0.8"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily:"var(--font-display)", fontSize:"1rem", fontWeight:700, letterSpacing:"0.12em", marginBottom:2 }} className="gold-shimmer">VIKRAM ASTROLOGY</div>
                <div style={{ fontFamily:"var(--font-ui)", fontSize:"0.55rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"rgba(165,32,32,0.5)" }}>Best Ambaji Upasak</div>
              </div>
            </div>
            <p style={{ fontFamily:"var(--font-body)", fontSize:"0.95rem", color:"rgba(94,45,45,0.7)", lineHeight:1.8, marginBottom:24, maxWidth:300 }}>
              Vikram Bhai Joshi — 5th generation Vedic astrologer & Best Ambaji Upasak with 25+ years experience. 90K+ consultations. Ahmedabad, Gujarat.
            </p>
            <div style={{ display:"flex", gap:2, flexWrap:"wrap" }}>
              <a href={`tel:${PHONE}`} className="btn-gold" style={{ padding:"10px 20px", borderRadius:0, fontSize:"0.76rem" }}>📞 Call Now</a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding:"10px 20px", borderRadius:0, fontSize:"0.76rem" }}>💬 WhatsApp</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily:"var(--font-ui)", fontSize:"1.02rem", fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold-warm)", marginBottom:20, paddingBottom:10, borderBottom:"1px solid rgba(165,32,32,0.2)" }}>Services</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {services.map((s) => (
                <li key={s}>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily:"var(--font-ui)", fontSize:"0.84rem", color:"rgba(94,45,45,0.6)", textDecoration:"none", transition:"color 0.2s", display:"flex", alignItems:"center", gap:8, letterSpacing:"0.02em" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="var(--gold-warm)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color="rgba(94,45,45,0.6)"; }}>
                    <span style={{ color:"rgba(165,32,32,0.5)", fontSize:"0.4rem", flexShrink:0 }}>◆</span>{s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily:"var(--font-ui)", fontSize:"1.02rem", fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold-warm)", marginBottom:20, paddingBottom:10, borderBottom:"1px solid rgba(165,32,32,0.2)" }}>Navigation</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {[{label:"Home",href:"/"},{label:"About Us",href:"/about"},{label:"Main Services",href:"/services"},{label:"Astrology Services",href:"/astrology-services"},{label:"Testimonials",href:"/testimonials"},{label:"Contact Us",href:"/contact"}].map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    style={{ fontFamily:"var(--font-ui)", fontSize:"0.84rem", color:"rgba(94,45,45,0.6)", textDecoration:"none", transition:"color 0.2s", display:"flex", alignItems:"center", gap:8, letterSpacing:"0.02em" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="var(--gold-warm)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color="rgba(94,45,45,0.6)"; }}>
                    <span style={{ color:"rgba(165,32,32,0.5)", fontSize:"0.4rem", flexShrink:0 }}>◆</span>{link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily:"var(--font-ui)", fontSize:"1.02rem", fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold-warm)", marginBottom:20, paddingBottom:10, borderBottom:"1px solid rgba(165,32,32,0.2)" }}>Get in Touch</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {[
                {icon:"📞",label:"Call Us",value:PHONE,href:`tel:${PHONE}`},
                {icon:"💬",label:"WhatsApp",value:"Chat Now",href:WA_LINK},
                {icon:"📧",label:"Email",value:EMAIL,href:`mailto:${EMAIL}`},
                {icon:"📍",label:"Location",value:"Ahmedabad, Gujarat",href:"#"},
                {icon:"🕐",label:"Available",value:"24/7, All Days",href:"#"},
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"flex-start", gap:12, textDecoration:"none" }}>
                  <span style={{ width:36, height:36, border:"1px solid rgba(165,32,32,0.2)", background:"rgba(165,32,32,0.07)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.02rem", flexShrink:0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily:"var(--font-ui)", fontSize:"0.84rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(165,32,32,0.5)", marginBottom:2 }}>{item.label}</div>
                    <div style={{ fontFamily:"var(--font-ui)", fontSize:"1.04rem", color:"rgba(94,45,45,0.85)", fontWeight:600 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ marginTop:20, padding:"12px 16px", background:"rgba(165,32,32,0.04)", border:"1px solid rgba(165,32,32,0.15)" }}>
              <p style={{ fontFamily:"var(--font-ui)", fontSize:"0.76rem", color:"rgba(165,32,32,0.5)", lineHeight:1.6, letterSpacing:"0.04em" }}>
                Best Astrologer Ahmedabad · Ambaji Upasak · Vedic Jyotish Expert · Black Magic Removal
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ height:1, background:"rgba(165,32,32,0.15)", marginBottom:24 }} />
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
