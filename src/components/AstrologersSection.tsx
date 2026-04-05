"use client";
const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const astrologers = [
  { name: "Pt. Rajyog Sharma", title: "Vedic Astrology Expert", exp: "20+ Years", rating: "4.9", icon: "🔮", specialty: "Love & Marriage" },
  { name: "Acharya Suresh Ji", title: "Kundli & Jyotish Specialist", exp: "15+ Years", rating: "4.8", icon: "📿", specialty: "Career & Finance" },
  { name: "Pt. Narayan Das", title: "Black Magic Removal Expert", exp: "18+ Years", rating: "4.9", icon: "🌙", specialty: "Spiritual Healing" },
  { name: "Guru Vishwas Ji", title: "Vashikaran & Tantra Expert", exp: "22+ Years", rating: "4.7", icon: "⭐", specialty: "Vashikaran" },
];

const avatarColors = [
  ["#A53A15", "#F06830"],
  ["#B8401A", "#E8724A"],
  ["#C4461E", "#E8562A"],
  ["#0D4A18", "#F06830"],
];

export default function AstrologersSection() {
  return (
    <section
      style={{
        background: "var(--bg-cream)",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="gold-divider-thick" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Two-column intro */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
            marginBottom: 64,
          }}
          className="astro-intro-grid"
        >
          {/* Left content */}
          <div>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>
              Expert Guidance
            </span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "var(--text-primary)",
                marginTop: 16,
                marginBottom: 20,
                lineHeight: 1.25,
              }}
            >
              Talk to <span className="gold-text">Astrologer</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                marginBottom: 28,
                maxWidth: 480,
              }}
            >
              Connect with India's most trusted Vedic astrologers for personalised guidance.
              Our experts combine ancient wisdom with modern insights to provide accurate
              solutions for all life challenges.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {[
                "✦ Immediate consultation available",
                "✦ 100% confidential sessions",
                "✦ Authentic Vedic remedies",
                "✦ Solutions in 24 hours",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "1.02rem",
                    color: "var(--text-secondary)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: "14px 36px", borderRadius: 8, fontSize: "0.96rem" }}
            >
              Consult Now →
            </a>
          </div>

          {/* Right: decorative visual */}
          <div
            style={{
              background: "linear-gradient(135deg, var(--gold-deep), var(--gold-amber))",
              borderRadius: 24,
              padding: "48px 32px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(232,86,42,0.18)",
            }}
          >
            {/* Decorative rings */}
            <div style={{ position: "absolute", top: -30, right: -30, width: 180, height: 180, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -20, left: -20, width: 120, height: 120, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", pointerEvents: "none" }} />

            <div style={{ fontSize: "4rem", marginBottom: 16 }} className="float-anim">🔮</div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 900,
                color: "#FFFFFF",
                marginBottom: 8,
                letterSpacing: "0.05em",
              }}
            >
              Vikram Bhai Joshi
            </h3>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "1.04rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 24 }}>
              Chief Astrologer
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { v: "20+", l: "Years Exp." },
                { v: "10K+", l: "Clients" },
                { v: "50K+", l: "Problems" },
                { v: "4.9★", l: "Rating" },
              ].map((stat) => (
                <div
                  key={stat.l}
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: 10,
                    padding: "12px 8px",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 900, color: "#FFFFFF" }}>{stat.v}</div>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.94rem", color: "rgba(255,255,255,0.75)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 astrologer profile cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
          className="astro-cards-grid"
        >
          {astrologers.map((a, i) => (
            <a
              key={a.name}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "28px 20px",
                borderRadius: 16,
                background: "white",
                border: "1px solid rgba(232,86,42,0.2)",
                boxShadow: "0 4px 20px rgba(232,86,42,0.07)",
                textDecoration: "none",
                transition: "all 0.28s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = "0 16px 48px rgba(232,86,42,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 20px rgba(232,86,42,0.07)";
              }}
            >
              {/* Circular avatar */}
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${avatarColors[i][0]}, ${avatarColors[i][1]})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  marginBottom: 16,
                  border: "3px solid rgba(232,86,42,0.3)",
                  boxShadow: "0 6px 24px rgba(232,86,42,0.2)",
                }}
              >
                {a.icon}
              </div>

              {/* Stars */}
              <div style={{ color: "var(--gold-amber)", fontSize: "1.04rem", letterSpacing: 2, marginBottom: 8 }}>
                ★★★★★
              </div>

              {/* Name */}
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  textAlign: "center",
                  marginBottom: 4,
                  letterSpacing: "0.04em",
                }}
              >
                {a.name}
              </div>

              {/* Title */}
              <div
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.84rem",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  marginBottom: 14,
                }}
              >
                {a.title}
              </div>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 14 }}>
                <span style={{
                  background: "rgba(232,86,42,0.08)",
                  border: "1px solid rgba(232,86,42,0.25)",
                  borderRadius: 20,
                  padding: "3px 10px",
                  fontFamily: "var(--font-ui)",
                  fontSize: "1.02rem",
                  fontWeight: 700,
                  color: "var(--gold-deep)",
                }}>
                  {a.exp}
                </span>
                <span style={{
                  background: "rgba(232,86,42,0.08)",
                  border: "1px solid rgba(232,86,42,0.25)",
                  borderRadius: 20,
                  padding: "3px 10px",
                  fontFamily: "var(--font-ui)",
                  fontSize: "1.02rem",
                  fontWeight: 700,
                  color: "var(--gold-deep)",
                }}>
                  {a.specialty}
                </span>
              </div>

              <div
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.84rem",
                  fontWeight: 700,
                  color: "var(--gold-deep)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Consult Now →
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .astro-intro-grid { grid-template-columns: 1fr !important; }
          .astro-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .astro-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
