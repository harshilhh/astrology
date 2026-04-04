"use client";
const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const serviceCategories = [
  {
    category: "Consultation & Prediction", icon: "📞", accent: "#C9A55A",
    services: [
      { title: "Talk To Astrologer Online", desc: "Comprehensive kundali analysis, planetary transit evaluation, instant guidance for professional and personal challenges.", href: "/services/talk-to-astrologer" },
      { title: "Kundali Matching", desc: "Expert horoscope matching using Astakoota (8 Gunas) system. Compatibility assessment, dosha analysis & marriage remedies.", href: "/services/kundali-matching" },
      { title: "Marriage Prediction", desc: "Thorough birth chart analysis — optimal timing, love vs arranged marriage likelihood, spouse compatibility & delay remedies.", href: "/services/marriage-prediction" },
    ],
  },
  {
    category: "Love & Relationships", icon: "♥", accent: "#C0392B",
    services: [
      { title: "Love Marriage Problem Solution", desc: "Intercaste unions, parental resistance, manglik dosha, Venus issues & third-party interference. 25+ years expertise.", href: "/services/love-marriage-solution" },
      { title: "Inter-Caste Love Marriage", desc: "Parental attitude shifting, partner hesitation resolution, social obstacle overcoming & post-marriage harmony.", href: "/services/love-marriage-solution" },
      { title: "Live-in Partner Solutions", desc: "Communication breakdowns, trust issues, financial disagreements, intimacy problems & compatibility guidance.", href: "/services/live-in-partner-solution" },
    ],
  },
  {
    category: "Family & Spiritual", icon: "🛡️", accent: "#6A3FA0",
    services: [
      { title: "Black Magic Removal", desc: "Expert removal of black magic, evil eye & negative energies. Personalized Vedic remedies & complete spiritual protection.", href: "/services/black-magic-removal" },
      { title: "Child Birth Prediction", desc: "5th house affliction analysis, Jupiter placement & Saptamamsha chart. Fertility remedies & optimal parenthood timing.", href: "/services/child-birth-issue" },
      { title: "Husband & Wife Dispute", desc: "Horoscope-based remedies to restore peace, trust, love and harmony. Court case assistance and reconciliation.", href: "/services/love-marriage-solution" },
    ],
  },
  {
    category: "Career & Business", icon: "💼", accent: "#1A6B3A",
    services: [
      { title: "Wealth & Business Prediction", desc: "Planetary analysis for business success — lagna examination, dasha assessment. 5-year & 10-year predictions available.", href: "/services/wealth-business-prediction" },
      { title: "Job, Career & Study Report", desc: "Vedic + Western astrology for career prospects — job timing, income progression, sector suitability & promotion analysis.", href: "/services/job-career-study" },
      { title: "Vastu & Gemstone Consultation", desc: "Vastu shastra for home & office. Lucky gemstone recommendations based on birth chart for prosperity and health.", href: "/services/talk-to-astrologer" },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ background:"var(--bg-white)", padding:"96px 32px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.4), transparent)" }} />
      <div style={{ position:"absolute", top:0, right:0, width:500, height:500, background:"radial-gradient(circle at 80% 10%, rgba(201,165,90,0.05) 0%, transparent 60%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:72 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:16 }}>
            <div style={{ height:1, width:48, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.6))" }} />
            <span className="section-label">Our Services</span>
            <div style={{ height:1, width:48, background:"linear-gradient(90deg, rgba(201,165,90,0.6), transparent)" }} />
          </div>
          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.8rem,4.5vw,3rem)", fontWeight:700, letterSpacing:"0.08em", lineHeight:1.2, marginBottom:16, marginTop:16, color:"var(--text-primary)" }}>
            Ancient Wisdom for <span className="gold-text">Modern Problems</span>
          </h2>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:16 }}>
            <div style={{ height:1, width:60, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.4))" }} />
            <span style={{ color:"rgba(201,165,90,0.5)", letterSpacing:"0.4em", fontSize:"0.6rem", fontFamily:"var(--font-ui)" }}>✦</span>
            <div style={{ height:1, width:60, background:"linear-gradient(90deg, rgba(201,165,90,0.4), transparent)" }} />
          </div>
          <p style={{ fontFamily:"var(--font-body)", fontSize:"1.05rem", color:"var(--text-secondary)", maxWidth:520, margin:"0 auto", lineHeight:1.8 }}>
            Comprehensive Vedic astrology solutions tailored to your unique life challenges. Every problem has a divine remedy.
          </p>
        </div>

        {serviceCategories.map((cat) => (
          <div key={cat.category} style={{ marginBottom:64 }}>
            {/* Category header */}
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24, padding:"16px 20px", background:`rgba(${cat.accent === "#C9A55A" ? "201,165,90" : cat.accent === "#C0392B" ? "192,57,43" : cat.accent === "#6A3FA0" ? "106,63,160" : "26,107,58"},0.06)`, border:`1px solid ${cat.accent}22` }}>
              <div style={{ width:44, height:44, background:`${cat.accent}18`, border:`1px solid ${cat.accent}40`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", flexShrink:0 }}>
                {cat.icon}
              </div>
              <h3 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(0.9rem,2.5vw,1.2rem)", fontWeight:700, letterSpacing:"0.1em", color:"var(--text-primary)", textTransform:"uppercase" }}>
                {cat.category}
              </h3>
              <div style={{ flex:1, height:1, background:`linear-gradient(90deg, ${cat.accent}40, transparent)` }} />
            </div>

            {/* Service cards */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:2 }}>
              {cat.services.map((svc) => (
                <a
                  key={svc.title}
                  href={(svc as { title:string; desc:string; href:string }).href}
                  className="mystical-card"
                  style={{ display:"block", padding:"32px 28px", textDecoration:"none", position:"relative" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform="translateY(-6px)";
                    (e.currentTarget as HTMLElement).style.borderColor=`${cat.accent}50`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform="translateY(0)";
                    (e.currentTarget as HTMLElement).style.borderColor="rgba(201,165,90,0.2)";
                  }}
                >
                  {/* Accent dot */}
                  <div style={{ width:8, height:8, background:cat.accent, boxShadow:`0 0 14px ${cat.accent}80`, marginBottom:18 }} />
                  <h4 style={{ fontFamily:"var(--font-display)", fontSize:"0.85rem", fontWeight:700, letterSpacing:"0.08em", color:"var(--text-primary)", marginBottom:10, textTransform:"uppercase" }}>
                    {svc.title}
                  </h4>
                  <p style={{ fontFamily:"var(--font-body)", fontSize:"0.97rem", color:"var(--text-muted)", lineHeight:1.75 }}>
                    {svc.desc}
                  </p>
                  <div style={{ marginTop:20, fontFamily:"var(--font-ui)", fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:"var(--gold-warm)", display:"flex", alignItems:"center", gap:8 }}>
                    <span>Explore</span>
                    <div style={{ height:1, flex:1, background:`linear-gradient(90deg, ${cat.accent}50, transparent)` }} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div style={{ textAlign:"center", padding:"52px 32px", background:"var(--bg-cream)", border:"1px solid rgba(201,165,90,0.2)", position:"relative" }}>
          <div style={{ position:"absolute", top:0, left:0, width:32, height:32, borderTop:"1px solid rgba(201,165,90,0.5)", borderLeft:"1px solid rgba(201,165,90,0.5)" }} />
          <div style={{ position:"absolute", top:0, right:0, width:32, height:32, borderTop:"1px solid rgba(201,165,90,0.5)", borderRight:"1px solid rgba(201,165,90,0.5)" }} />
          <div style={{ position:"absolute", bottom:0, left:0, width:32, height:32, borderBottom:"1px solid rgba(201,165,90,0.5)", borderLeft:"1px solid rgba(201,165,90,0.5)" }} />
          <div style={{ position:"absolute", bottom:0, right:0, width:32, height:32, borderBottom:"1px solid rgba(201,165,90,0.5)", borderRight:"1px solid rgba(201,165,90,0.5)" }} />
          <p style={{ fontFamily:"var(--font-body)", color:"var(--text-secondary)", marginBottom:24, fontSize:"1.1rem", fontStyle:"italic" }}>
            Don&apos;t see your specific problem? Every life challenge has a divine solution.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding:"15px 48px", borderRadius:0, fontSize:"0.65rem" }}>
            Consult For Free →
          </a>
        </div>
      </div>
    </section>
  );
}
