"use client";

const features = [
  { icon: "⚡", title: "Instant Solutions", desc: "Fast, accurate remedies without lengthy delays. Solutions delivered with clarity and expert guidance for immediate peace of mind." },
  { icon: "🌍", title: "Available Globally", desc: "Serving clients across India, Europe, Africa and Asia Pacific. Consultations available anytime, anywhere in the world." },
  { icon: "🎯", title: "Clarity & Expert Remedies", desc: "Concise advice, effective remedies and personalized solutions combining traditional Vedic wisdom with modern methodology." },
  { icon: "💎", title: "Lifetime Support", desc: "Ongoing guidance beyond the first consultation. We stay with you for sustained life improvement and continued success." },
  { icon: "✅", title: "Effective Life Solutions", desc: "Proven Vedic techniques for love, career, health and spirituality. Thousands of transformed lives across all religions and castes." },
  { icon: "🛡️", title: "Ultimate Problem Remedies", desc: "Deep Vedic knowledge backed by 25+ years of practice as a 5th generation astrologer with 90K+ successful consultations." },
];

export default function WhyChooseUs() {
  return (
    <section id="about" style={{ background:"var(--bg-light-yellow)", padding:"96px 32px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 90% 10%, rgba(201,165,90,0.06) 0%, transparent 40%), radial-gradient(circle at 10% 90%, rgba(201,165,90,0.04) 0%, transparent 40%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.4), transparent)" }} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.3), transparent)" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", position:"relative" }}>
        {/* Section header */}
        <div style={{ textAlign:"center", marginBottom:72 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:16 }}>
            <div style={{ height:1, width:48, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.6))" }} />
            <span className="section-label">Why Choose Us</span>
            <div style={{ height:1, width:48, background:"linear-gradient(90deg, rgba(201,165,90,0.6), transparent)" }} />
          </div>
          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.8rem,4.5vw,3rem)", fontWeight:700, letterSpacing:"0.08em", lineHeight:1.2, marginBottom:8, marginTop:16, color:"var(--text-primary)" }}>
            Trusted by Thousands, <span className="gold-text">Proven by Results</span>
          </h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"start" }} className="why-grid">
          {/* Feature cards */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:2 }} className="why-features">
            {features.map((f) => (
              <div key={f.title} className="mystical-card" style={{ padding:"28px 22px", borderRadius:0 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-6px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
              >
                <div style={{ width:48, height:48, border:"1px solid rgba(201,165,90,0.3)", background:"rgba(201,165,90,0.06)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.5rem", marginBottom:16, position:"relative" }}>
                  {f.icon}
                </div>
                <h4 style={{ fontFamily:"var(--font-display)", fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--text-primary)", marginBottom:8 }}>{f.title}</h4>
                <p style={{ fontFamily:"var(--font-body)", fontSize:"0.92rem", color:"var(--text-muted)", lineHeight:1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Profile card */}
          <div style={{ background:"var(--card-bg)", border:"1px solid rgba(201,165,90,0.25)", padding:"48px 36px", textAlign:"center", position:"relative", boxShadow:"0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(201,165,90,0.08)" }}>
            {/* Art Deco corners */}
            <div style={{ position:"absolute", top:0, left:0, width:36, height:36, borderTop:"1px solid rgba(201,165,90,0.6)", borderLeft:"1px solid rgba(201,165,90,0.6)" }} />
            <div style={{ position:"absolute", top:0, right:0, width:36, height:36, borderTop:"1px solid rgba(201,165,90,0.6)", borderRight:"1px solid rgba(201,165,90,0.6)" }} />
            <div style={{ position:"absolute", bottom:0, left:0, width:36, height:36, borderBottom:"1px solid rgba(201,165,90,0.6)", borderLeft:"1px solid rgba(201,165,90,0.6)" }} />
            <div style={{ position:"absolute", bottom:0, right:0, width:36, height:36, borderBottom:"1px solid rgba(201,165,90,0.6)", borderRight:"1px solid rgba(201,165,90,0.6)" }} />

            {/* Gold top bar */}
            <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg, transparent, #F2C94C, transparent)" }} />

            {/* Avatar */}
            <div className="float-anim" style={{ width:100, height:100, margin:"0 auto 24px", position:"relative" }}>
              <div style={{ width:100, height:100, border:"1px solid rgba(201,165,90,0.4)", background:"radial-gradient(circle, rgba(201,165,90,0.15) 0%, rgba(201,165,90,0.05) 100%)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2.8rem", boxShadow:"0 0 40px rgba(201,165,90,0.2)" }}>
                🔮
              </div>
              <div style={{ position:"absolute", inset:-8, border:"1px solid rgba(201,165,90,0.15)" }} />
            </div>

            <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.3rem", fontWeight:700, letterSpacing:"0.1em", marginBottom:4, textTransform:"uppercase" }} className="gold-text">Vikram Bhai Joshi</h3>
            <p style={{ fontFamily:"var(--font-ui)", fontSize:"0.58rem", fontWeight:700, letterSpacing:"0.35em", textTransform:"uppercase", color:"rgba(201,165,90,0.7)", marginBottom:24 }}>Best Ambaji Upasak Astrologer</p>

            <div style={{ height:1, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.4), transparent)", marginBottom:24 }} />

            <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:28, textAlign:"left" }}>
              {[
                "⭐ 25+ Years of Vedic Practice",
                "🌳 5th Generation Astrology Family",
                "🌍 Serving All Religions Globally",
                "🏆 90,000+ Successful Consultations",
                "📍 Based in Ahmedabad, Gujarat",
                "✦ Honesty & Unwavering Commitment",
              ].map((item) => (
                <div key={item} style={{ fontFamily:"var(--font-ui)", fontSize:"0.72rem", letterSpacing:"0.04em", color:"var(--text-secondary)", display:"flex", alignItems:"flex-start", gap:10, padding:"8px 12px", background:"rgba(201,165,90,0.05)", border:"1px solid rgba(201,165,90,0.1)" }}>
                  {item}
                </div>
              ))}
            </div>

            <div className="stars-rating" style={{ fontSize:"1.2rem", marginBottom:6 }}>★★★★★</div>
            <p style={{ fontFamily:"var(--font-ui)", fontSize:"0.62rem", color:"var(--text-muted)", letterSpacing:"0.18em", textTransform:"uppercase" }}>
              4.9 / 5 — Based on 5,000+ Reviews
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:900px) { .why-grid { grid-template-columns:1fr !important; gap:32px !important; } }
        @media (max-width:520px) { .why-features { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
