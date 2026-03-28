const PHONE = "+917021932472";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const serviceCategories = [
  {
    category: "Love & Relationships", icon: "♥", color: "#c0392b", bgColor: "rgba(192,57,43,0.06)",
    services: [
      { title: "One-Sided Love", desc: "Transform unrequited love into mutual devotion with ancient Vedic remedies." },
      { title: "Ex Love Back", desc: "Powerful spiritual solutions to reunite you with your soulmate quickly." },
      { title: "Breakup Solution", desc: "Heal broken bonds and restore your relationship to its former glory." },
      { title: "Extra Marital Affairs", desc: "Discreet and effective remedies to secure your partner's loyalty." },
      { title: "Long-Distance Relationship", desc: "Keep your connection strong across any distance." },
      { title: "Love Marriage", desc: "Remove all obstacles blocking your love marriage. Get family blessings." },
    ],
  },
  {
    category: "Family & Marriage", icon: "🏠", color: "#6a3fa0", bgColor: "rgba(106,63,160,0.06)",
    services: [
      { title: "Intercaste Marriage", desc: "Spiritual guidance for intercaste unions and family harmony." },
      { title: "Parents Convincing", desc: "Get your parents' approval through gentle Vedic persuasion." },
      { title: "Husband-Wife Disputes", desc: "Restore peace, love, and harmony in your marriage." },
      { title: "Divorce Prevention", desc: "Court case assistance and spiritual reconciliation." },
      { title: "Childbirth Issues", desc: "Sacred Vedic rituals for fertility and childbirth blessings." },
      { title: "Delay in Marriage", desc: "Remove obstacles causing marriage delays." },
    ],
  },
  {
    category: "Career & Finance", icon: "💼", color: "#1a6b3a", bgColor: "rgba(26,107,58,0.06)",
    services: [
      { title: "Business Loss & Debt", desc: "Remove negative energies blocking your prosperity." },
      { title: "Job & Career Growth", desc: "Accelerate your professional growth with astrological guidance." },
      { title: "Higher Studies", desc: "Remove mental blocks and achieve academic success." },
    ],
  },
  {
    category: "Spiritual & Special", icon: "✨", color: "#b8860b", bgColor: "rgba(184,134,11,0.06)",
    services: [
      { title: "Black Magic Removal", desc: "Detect and neutralize black magic and negative energies." },
      { title: "Love Vashikaran", desc: "Ancient Vedic vashikaran mantras for attracting the love of your life." },
      { title: "Horoscope Predictions", desc: "Detailed birth chart analysis revealing your destiny and life path." },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: "var(--bg-white)", padding: "100px 24px", position: "relative" }}>
      <div className="gold-divider-thick" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, background: "radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-block" }}>Our Services</span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, letterSpacing: "0.04em", lineHeight: 1.2, marginBottom: 20, marginTop: 16, color: "var(--text-primary)" }}>
            Ancient Wisdom for <span className="gold-text">Modern Problems</span>
          </h2>
          <div className="ornament-sep" style={{ maxWidth: 300, margin: "0 auto 20px" }}>☽</div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
            Comprehensive Vedic astrology solutions tailored to your unique life challenges. Every problem has a divine remedy.
          </p>
        </div>

        {serviceCategories.map((cat) => (
          <div key={cat.category} style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, padding: "16px 20px", background: cat.bgColor, borderRadius: 12, border: `1px solid ${cat.color}22` }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: `${cat.color}15`, border: `1px solid ${cat.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>{cat.icon}</div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 700, letterSpacing: "0.06em", color: "var(--text-primary)" }}>{cat.category}</h3>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${cat.color}40, transparent)` }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
              {cat.services.map((svc) => (
                <a key={svc.title} href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mystical-card"
                  style={{ display: "block", padding: "28px 24px", borderRadius: 14, textDecoration: "none", cursor: "pointer", background: "white" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: cat.color, boxShadow: `0 0 10px ${cat.color}80`, marginBottom: 16 }} />
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.93rem", fontWeight: 700, letterSpacing: "0.05em", color: "var(--text-primary)", marginBottom: 10 }}>{svc.title}</h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{svc.desc}</p>
                  <div style={{ marginTop: 18, fontFamily: "var(--font-ui)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-deep)" }}>Get Solution →</div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: 16, padding: "48px 32px", background: "var(--bg-light-yellow)", borderRadius: 20, border: "1px solid rgba(212,175,55,0.3)" }}>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", marginBottom: 24, fontSize: "1.05rem" }}>Don&apos;t see your specific problem? Every life challenge has a solution.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "16px 48px", borderRadius: 8, fontSize: "0.85rem" }}>Consult For Free →</a>
        </div>
      </div>
    </section>
  );
}
