"use client";

function CelestialIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" style={{ width: 140, height: 140, opacity: 0.85 }} className="illustration-wrap float-anim">
      <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="1" strokeDasharray="5 3" opacity="0.5" />
      <circle cx="100" cy="100" r="66" stroke="#D4AF37" strokeWidth="1.5" opacity="0.4" />
      <circle cx="100" cy="100" r="44" fill="url(#celestialGrad)" opacity="0.9" />
      <circle cx="100" cy="100" r="36" fill="url(#celestialInner)" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45) * Math.PI / 180;
        return <line key={i} x1={100 + Math.cos(angle)*44} y1={100 + Math.sin(angle)*44} x2={100 + Math.cos(angle)*(i%2===0?72:58)} y2={100 + Math.sin(angle)*(i%2===0?72:58)} stroke="#FFD700" strokeWidth={i%2===0?"2.5":"1.5"} strokeLinecap="round" opacity="0.8" />;
      })}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 - 30) * Math.PI / 180;
        return <circle key={i} cx={100 + Math.cos(angle)*66} cy={100 + Math.sin(angle)*66} r="4" fill={i%2===0?"#FFD700":"#D4AF37"} opacity="0.8" />;
      })}
      <text x="100" y="107" textAnchor="middle" dominantBaseline="central" fontSize="28" fill="#1a1208" fontFamily="serif" opacity="0.9">✦</text>
      <defs>
        <radialGradient id="celestialGrad" cx="40%" cy="35%"><stop offset="0%" stopColor="#FFF3C4"/><stop offset="100%" stopColor="#E8A800"/></radialGradient>
        <radialGradient id="celestialInner" cx="40%" cy="35%"><stop offset="0%" stopColor="#FFFBEE"/><stop offset="100%" stopColor="#FFD700"/></radialGradient>
      </defs>
    </svg>
  );
}

const features = [
  { icon: "🎯", title: "100% Accurate Predictions", desc: "Decades of practice with thousands of verified cases. Backed by deep Vedic knowledge and proven results." },
  { icon: "🔒", title: "Strictly Confidential", desc: "Your personal details and problems are completely private. We never share information with anyone, ever." },
  { icon: "⚡", title: "Fast & Instant Results", desc: "Most solutions show results within days. We understand urgency and work swiftly to resolve your situation." },
  { icon: "🌙", title: "Available 24/7", desc: "Problems don't wait for business hours. Our expert is available around the clock for emergency consultations." },
  { icon: "💎", title: "Genuine Vedic Methods", desc: "Only authentic, time-tested Vedic astrology techniques. No fraud, no fake promises — only real spiritual solutions." },
  { icon: "🛡️", title: "Guaranteed Satisfaction", desc: "We are committed to your happiness. Our track record of 10,000+ solved cases speaks for itself." },
];

export default function WhyChooseUs() {
  return (
    <section id="about" style={{ background: "var(--bg-light-yellow)", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 90% 10%, rgba(255,215,0,0.12) 0%, transparent 40%), radial-gradient(circle at 10% 90%, rgba(212,175,55,0.1) 0%, transparent 40%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}><CelestialIllustration /></div>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-block" }}>Why Choose Us</span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, letterSpacing: "0.04em", lineHeight: 1.2, marginBottom: 20, marginTop: 16, color: "var(--text-primary)" }}>
            Trusted by Thousands, <span className="gold-text">Proven by Results</span>
          </h2>
          <div className="ornament-sep" style={{ maxWidth: 300, margin: "0 auto" }}>✦</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="why-grid">
          {/* Features */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {features.map((f) => (
              <div key={f.title} className="mystical-card" style={{ padding: "24px 20px", borderRadius: 14, background: "white" }}>
                <div style={{ width: 50, height: 50, borderRadius: 12, background: "rgba(255,215,0,0.12)", border: "1px solid rgba(212,175,55,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", marginBottom: 14 }}>{f.icon}</div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.83rem", fontWeight: 700, letterSpacing: "0.05em", color: "var(--text-primary)", marginBottom: 8 }}>{f.title}</h4>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Profile card */}
          <div style={{ borderRadius: 24, padding: "48px 36px", textAlign: "center", position: "relative", overflow: "hidden", background: "white", border: "2px solid rgba(212,175,55,0.35)", boxShadow: "0 16px 60px rgba(180,140,0,0.14)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg, transparent, var(--gold-glow), var(--gold-amber), var(--gold-glow), transparent)" }} />
            <div className="float-anim" style={{ width: 120, height: 120, borderRadius: "50%", border: "3px solid var(--gold-warm)", background: "radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,193,7,0.1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "3.5rem", boxShadow: "0 0 30px rgba(212,175,55,0.3), 0 0 60px rgba(212,175,55,0.1)" }}>🔮</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 6 }} className="gold-text">Shri Rajyog Ji</h3>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 24 }}>Vedic Astrology Expert</p>
            <div className="gold-divider" style={{ marginBottom: 24 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 28, textAlign: "left" }}>
              {["🎓 20+ Years of Vedic Practice","📚 Certified Jyotish Acharya","🌍 Served Clients Across India & Abroad","🏆 5000+ Love Problems Resolved","⭐ Featured in Multiple Publications"].map((item) => (
                <div key={item} style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 12px", background: "rgba(255,215,0,0.06)", borderRadius: 8 }}>{item}</div>
              ))}
            </div>
            <div className="stars-rating" style={{ fontSize: "1.3rem", marginBottom: 8 }}>★★★★★</div>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.15em" }}>4.9 / 5 — Based on 2,400+ Reviews</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
