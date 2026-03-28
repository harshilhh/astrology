"use client";
const PHONE = "+917021932472";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

export default function Footer() {
  const services = ["Love Problem Solution","Ex Love Back","Vashikaran Specialist","Black Magic Removal","Love Marriage","Husband-Wife Dispute","Career Growth","Horoscope Reading"];

  return (
    <footer style={{ background: "var(--bg-dark)", padding: "72px 24px 24px", position: "relative", borderTop: "3px solid var(--gold-amber)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--gold-deep), var(--gold-glow), var(--gold-amber), var(--gold-glow), var(--gold-deep))" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 56 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--gold-deep), var(--gold-amber))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>🔮</div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 900, letterSpacing: "0.1em", marginBottom: 2 }} className="gold-shimmer">SHRI RAJYOG</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Expert Astrologer</div>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: 24, maxWidth: 300 }}>
              Trusted love guru and Vedic astrology expert with 20+ years of experience. Fast, accurate & 100% confidential solutions.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href={`tel:${PHONE}`} className="btn-gold" style={{ padding: "10px 20px", borderRadius: 6, fontSize: "0.73rem" }}>📞 Call Now</a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding: "10px 20px", borderRadius: 6, fontSize: "0.73rem" }}>💬 WhatsApp</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-amber)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid rgba(212,175,55,0.2)" }}>Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {services.map((s) => (
                <li key={s}>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s", display: "flex", alignItems: "center", gap: 8 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold-amber)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}>
                    <span style={{ color: "var(--gold-deep)", fontSize: "0.4rem" }}>◆</span>{s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-amber)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid rgba(212,175,55,0.2)" }}>Navigation</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[{label:"Home",href:"#home"},{label:"Services",href:"#services"},{label:"About",href:"#about"},{label:"Testimonials",href:"#testimonials"},{label:"Contact",href:"#contact"}].map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s", display: "flex", alignItems: "center", gap: 8 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold-amber)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}>
                    <span style={{ color: "var(--gold-deep)", fontSize: "0.4rem" }}>◆</span>{link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-amber)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid rgba(212,175,55,0.2)" }}>Get in Touch</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[{icon:"📞",label:"Call Us",value:PHONE,href:`tel:${PHONE}`},{icon:"💬",label:"WhatsApp",value:"Chat Now",href:WA_LINK},{icon:"🕐",label:"Available",value:"24/7, All Days",href:"#"}].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "flex-start", gap: 12, textDecoration: "none" }}>
                  <span style={{ width: 38, height: 38, borderRadius: 8, background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: 24, padding: "14px", background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: 8 }}>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.73rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>
                Best Astrologer in India · Love Problem Specialist · Vashikaran Expert · Black Magic Removal
              </p>
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: "rgba(212,175,55,0.2)", marginBottom: 24 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.73rem", color: "rgba(255,255,255,0.3)" }}>© {new Date().getFullYear()} Shri Rajyog Expert Astrologer. All rights reserved.</p>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.73rem", color: "rgba(255,255,255,0.3)" }}>For entertainment & spiritual guidance purposes only.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
