"use client";
const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const problems = [
  "Love Problems","Intercaste Love Marriage","Relationship Problem","Husband & Wife Problem",
  "Extra Marital Affairs","Divorce Problem","Education & Jobs Problems","Career & Financial Problems",
  "Health Problems","Black Magic Removal","Family Problems","Lucky Gems Stones",
  "Child Birth Issues","Business Problem","Property / Legal Disputes","Vastu Consultation",
  "Visa / Immigration Problem","Infertility / Family Issues","One Sided Love Problem","Ex Love Back",
  "Lost Love Back","Break up Relationship","Marriage Problem Prediction","In-Laws Problem",
  "Love Life Problem","Sexual Life Dissatisfaction","Personalized Problem Prediction","One Time Payment — Life Time Safe",
];

export default function ProblemsSection() {
  return (
    <section style={{ background:"var(--bg-cream)", padding:"96px 32px", position:"relative", overflow:"hidden" }}>
      {/* BG glow */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 50%, rgba(165,32,32,0.04) 0%, transparent 65%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(165,32,32,0.35), transparent)" }} />

      <div style={{ maxWidth:1100, margin:"0 auto", position:"relative" }}>
        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:64 }}>
          {/* Yantra SVG */}
          <div style={{ display:"flex", justifyContent:"center", marginBottom:24 }}>
            <svg viewBox="0 0 120 120" fill="none" style={{ width:80, height:80 }}>
              <circle cx="60" cy="60" r="56" stroke="rgba(165,32,32,0.3)" strokeWidth="1"/>
              <circle cx="60" cy="60" r="40" stroke="rgba(165,32,32,0.2)" strokeWidth="0.8" strokeDasharray="3 4"/>
              <polygon points="60,14 104,85 16,85" stroke="rgba(165,32,32,0.5)" strokeWidth="1.2" fill="rgba(165,32,32,0.04)"/>
              <polygon points="60,106 16,35 104,35" stroke="rgba(181,36,36,0.4)" strokeWidth="1" fill="rgba(165,32,32,0.03)"/>
              <circle cx="60" cy="60" r="14" fill="rgba(165,32,32,0.1)" stroke="rgba(165,32,32,0.5)" strokeWidth="1"/>
              <text x="60" y="65" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#A52020" fontFamily="serif">ॐ</text>
            </svg>
          </div>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:16 }}>
            <div style={{ height:1, width:48, background:"linear-gradient(90deg, transparent, rgba(165,32,32,0.6))" }} />
            <span className="section-label">Every Problem Has A Solution</span>
            <div style={{ height:1, width:48, background:"linear-gradient(90deg, rgba(165,32,32,0.6), transparent)" }} />
          </div>
          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.8rem,4.5vw,3rem)", fontWeight:700, letterSpacing:"0.08em", lineHeight:1.2, marginBottom:16, marginTop:16, color:"var(--text-primary)" }}>
            Are You Facing <span className="gold-text">Any of These?</span>
          </h2>
          <p style={{ fontFamily:"var(--font-body)", fontSize:"1.05rem", color:"var(--text-secondary)", maxWidth:520, margin:"0 auto", lineHeight:1.8 }}>
            One astro remedy can change your life. Whatever you are facing, Vikram Bhai Joshi has helped 90,000+ people overcome it.
          </p>
        </div>

        {/* Problems grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:2, marginBottom:52 }}>
          {problems.map((p, i) => (
            <a
              key={p}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:"flex", alignItems:"center", gap:12, padding:"13px 16px",
                background:"var(--card-bg)", border:"1px solid rgba(165,32,32,0.12)",
                textDecoration:"none", transition:"all 0.25s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(165,32,32,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(165,32,32,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--card-bg)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(165,32,32,0.12)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <span style={{ width:26, height:26, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(165,32,32,0.07)", border:"1px solid rgba(165,32,32,0.25)", fontFamily:"var(--font-display)", fontSize:"0.74rem", fontWeight:700, color:"var(--gold-warm)", flexShrink:0 }}>
                {String(i+1).padStart(2,"0")}
              </span>
              <span style={{ fontFamily:"var(--font-ui)", fontSize:"0.84rem", fontWeight:600, letterSpacing:"0.04em", color:"var(--text-secondary)", lineHeight:1.4 }}>
                {p}
              </span>
            </a>
          ))}
        </div>

        {/* Quote box */}
        <div style={{ textAlign:"center", background:"var(--card-bg)", border:"1px solid rgba(165,32,32,0.2)", padding:"44px 32px", position:"relative" }}>
          <div style={{ position:"absolute", top:0, left:0, width:36, height:36, borderTop:"1px solid rgba(165,32,32,0.5)", borderLeft:"1px solid rgba(165,32,32,0.5)" }} />
          <div style={{ position:"absolute", top:0, right:0, width:36, height:36, borderTop:"1px solid rgba(165,32,32,0.5)", borderRight:"1px solid rgba(165,32,32,0.5)" }} />
          <div style={{ position:"absolute", bottom:0, left:0, width:36, height:36, borderBottom:"1px solid rgba(165,32,32,0.5)", borderLeft:"1px solid rgba(165,32,32,0.5)" }} />
          <div style={{ position:"absolute", bottom:0, right:0, width:36, height:36, borderBottom:"1px solid rgba(165,32,32,0.5)", borderRight:"1px solid rgba(165,32,32,0.5)" }} />
          <p style={{ fontFamily:"var(--font-body)", fontSize:"clamp(1rem,2.5vw,1.3rem)", fontWeight:600, color:"var(--gold-warm)", letterSpacing:"0.05em", marginBottom:8, fontStyle:"italic" }}>
            &ldquo;Call Us For Immediate Solution — Give A New Look To Your Life&rdquo;
          </p>
          <p style={{ fontFamily:"var(--font-ui)", fontSize:"0.84rem", letterSpacing:"0.2em", color:"var(--text-muted)", marginBottom:28, textTransform:"uppercase" }}>
            Vikram Bhai Joshi — Best Ambaji Upasak
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding:"14px 44px", borderRadius:0, fontSize:"1.02rem" }}>
            💬 Get Your Solution Now
          </a>
        </div>
      </div>
    </section>
  );
}
