"use client";
const zodiacSigns = [
  { name: "Aries",       symbol: "♈", dates: "Mar 21 – Apr 19", color: "#e74c3c", element: "Fire"  },
  { name: "Taurus",      symbol: "♉", dates: "Apr 20 – May 20", color: "#27ae60", element: "Earth" },
  { name: "Gemini",      symbol: "♊", dates: "May 21 – Jun 20", color: "#f39c12", element: "Air"   },
  { name: "Cancer",      symbol: "♋", dates: "Jun 21 – Jul 22", color: "#3498db", element: "Water" },
  { name: "Leo",         symbol: "♌", dates: "Jul 23 – Aug 22", color: "#e67e22", element: "Fire"  },
  { name: "Virgo",       symbol: "♍", dates: "Aug 23 – Sep 22", color: "#8e44ad", element: "Earth" },
  { name: "Libra",       symbol: "♎", dates: "Sep 23 – Oct 22", color: "#16a085", element: "Air"   },
  { name: "Scorpio",     symbol: "♏", dates: "Oct 23 – Nov 21", color: "#c0392b", element: "Water" },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 – Dec 21", color: "#d35400", element: "Fire"  },
  { name: "Capricorn",   symbol: "♑", dates: "Dec 22 – Jan 19", color: "#2c3e50", element: "Earth" },
  { name: "Aquarius",    symbol: "♒", dates: "Jan 20 – Feb 18", color: "#2980b9", element: "Air"   },
  { name: "Pisces",      symbol: "♓", dates: "Feb 19 – Mar 20", color: "#1abc9c", element: "Water" },
];

export default function ZodiacSection() {
  return (
    <section
      style={{
        background: "var(--bg-white)",
        padding: "80px 24px",
        position: "relative",
      }}
    >
      <div className="gold-divider-thick" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>
            Daily Predictions
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "var(--text-primary)",
              marginTop: 16,
              marginBottom: 12,
            }}
          >
            Horoscope <span className="gold-text">Forecast</span>
          </h2>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "1rem", color: "var(--text-muted)", maxWidth: 500, margin: "0 auto" }}>
            Click on your zodiac sign to get today's personalised horoscope reading
          </p>
        </div>

        {/* Decorative divider */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <svg width="320" height="20" viewBox="0 0 320 20" fill="none">
            <line x1="0" y1="10" x2="130" y2="10" stroke="#A52020" strokeWidth="1" opacity="0.5" />
            <circle cx="145" cy="10" r="4" fill="#A52020" />
            <circle cx="160" cy="10" r="7" fill="#B52424" opacity="0.9" />
            <circle cx="175" cy="10" r="4" fill="#A52020" />
            <line x1="190" y1="10" x2="320" y2="10" stroke="#A52020" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>

        {/* Zodiac grid — 6 columns on desktop, 4 on tablet, 3 on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 16,
          }}
          className="zodiac-grid"
        >
          {zodiacSigns.map((sign) => (
            <a
              key={sign.name}
              href={`#zodiac-${sign.name.toLowerCase()}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                padding: "20px 12px 16px",
                borderRadius: 16,
                background: "white",
                border: "1px solid rgba(165,32,32,0.18)",
                boxShadow: "0 2px 12px rgba(165,32,32,0.06)",
                textDecoration: "none",
                transition: "all 0.28s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 12px 32px rgba(165,32,32,0.15)";
                el.style.borderColor = "rgba(165,32,32,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 12px rgba(165,32,32,0.06)";
                el.style.borderColor = "rgba(165,32,32,0.18)";
              }}
            >
              {/* Circular icon */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${sign.color}22, ${sign.color}10)`,
                  border: `2px solid ${sign.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  boxShadow: `0 4px 16px ${sign.color}20`,
                }}
              >
                {sign.symbol}
              </div>

              {/* Sign name */}
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.94rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "var(--text-primary)",
                  textAlign: "center",
                }}
              >
                {sign.name}
              </div>

              {/* Date range */}
              <div
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "1.04rem",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {sign.dates}
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .zodiac-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (max-width: 640px)  { .zodiac-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 400px)  { .zodiac-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
