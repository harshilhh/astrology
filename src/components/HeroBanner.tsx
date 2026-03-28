import Image from "next/image";

const PHONE = "+917021932472";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

/* Planet illustration for decorative use */
function PlanetIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" style={{ width: 100, height: 100, opacity: 0.4 }}>
      <circle cx="60" cy="60" r="28" fill="url(#planetGrad)" />
      <ellipse cx="60" cy="60" rx="52" ry="14" stroke="#D4AF37" strokeWidth="2.5" fill="none" opacity="0.7" />
      <circle cx="44" cy="48" r="5" fill="rgba(255,255,255,0.3)" />
      <defs>
        <radialGradient id="planetGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6400" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function HeroBanner() {
  return (
    <section
      style={{
        background: "var(--bg-white)",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      {/* Decorative top line */}
      <div className="gold-divider-thick" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0, right: 0,
          width: 350,
          height: 350,
          background: "radial-gradient(circle at 80% 20%, rgba(255,215,0,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0,
          width: 250,
          height: 250,
          background: "radial-gradient(circle at 20% 80%, rgba(255,215,0,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Planet decoration */}
      <div style={{ position: "absolute", top: 20, right: 60 }}>
        <PlanetIllustration />
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px, 6vw, 72px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="banner-grid"
      >
        {/* Left: Brand image */}
        <div
          style={{
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 12px 60px rgba(180,140,0,0.2), 0 4px 20px rgba(180,140,0,0.1)",
            border: "2px solid rgba(212,175,55,0.4)",
          }}
        >
          <Image
            src="/hero-banner.jpg"
            alt="Shri Rajyog Astrologer — Love Problem Solution Specialist"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
          {/* Gold shimmer overlay at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: "25%",
              background: "linear-gradient(180deg, transparent, rgba(255,245,200,0.4))",
            }}
          />
          {/* Gold border highlight */}
          <div
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: 4,
              background: "linear-gradient(90deg, transparent, var(--gold-glow), transparent)",
            }}
          />
        </div>

        {/* Right: Content */}
        <div>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-block" }}>
            Trusted Love Guru
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              lineHeight: 1.2,
              marginBottom: 20,
              marginTop: 14,
              color: "var(--text-primary)",
            }}
          >
            Predict Solutions to{" "}
            <span className="gold-text">All Problems</span>
          </h2>

          <div className="gold-divider" style={{ marginBottom: 24 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {[
              { icon: "♥", text: "Horoscope Match Making" },
              { icon: "🌹", text: "Love Vashikaran" },
              { icon: "💒", text: "Love & Intercaste Marriage" },
              { icon: "🏠", text: "Husband-Wife Dispute" },
              { icon: "⚖️", text: "Divorce Matters" },
              { icon: "💔", text: "Breakup Issues — Get Ex Back" },
              { icon: "👶", text: "Childbirth Problems" },
              { icon: "💏", text: "Extra Marital Affair" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "rgba(255,215,0,0.12)",
                    border: "1px solid rgba(212,175,55,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href={`tel:${PHONE}`}
              className="btn-gold"
              style={{ padding: "13px 28px", borderRadius: 8, fontSize: "0.8rem" }}
            >
              📞 Get a Quick Solution
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
              style={{ padding: "13px 24px", borderRadius: 8, fontSize: "0.8rem" }}
            >
              💬 WhatsApp
            </a>
          </div>

          <div
            style={{
              marginTop: 20,
              fontFamily: "var(--font-heading)",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--gold-deep)",
              letterSpacing: "0.08em",
            }}
          >
            📞 {PHONE}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .banner-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
