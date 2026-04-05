"use client";
const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

/* Kundli chart SVG */
function KundliChart() {
  return (
    <svg viewBox="0 0 300 300" fill="none" style={{ width: "100%", maxWidth: 340, height: "auto" }} className="illustration-wrap">
      {/* Outer square */}
      <rect x="10" y="10" width="280" height="280" stroke="#A52020" strokeWidth="2" fill="rgba(165,32,32,0.03)" />
      {/* Inner square rotated 45° (diamond) */}
      <rect x="75" y="75" width="150" height="150" stroke="#A52020" strokeWidth="1.5" fill="rgba(181,36,36,0.04)" transform="rotate(45 150 150)" />
      {/* Inner square */}
      <rect x="90" y="90" width="120" height="120" stroke="#A52020" strokeWidth="1.5" fill="rgba(165,32,32,0.06)" />
      {/* Diagonal lines */}
      <line x1="10" y1="10" x2="290" y2="290" stroke="#A52020" strokeWidth="1" opacity="0.35" />
      <line x1="290" y1="10" x2="10" y2="290" stroke="#A52020" strokeWidth="1" opacity="0.35" />
      {/* Cross lines */}
      <line x1="150" y1="10" x2="150" y2="290" stroke="#A52020" strokeWidth="1" opacity="0.35" />
      <line x1="10" y1="150" x2="290" y2="150" stroke="#A52020" strokeWidth="1" opacity="0.35" />
      {/* House number labels */}
      {[
        [150, 50, "I"],   [240, 80, "II"],  [270, 150, "III"], [240, 220, "IV"],
        [150, 258, "V"],  [60, 220, "VI"],  [30, 150, "VII"],  [60, 80, "VIII"],
        [110, 110, "IX"], [190, 110, "X"],  [190, 190, "XI"],  [110, 190, "XII"],
      ].map(([x, y, label]) => (
        <text key={String(label)} x={x} y={y} textAnchor="middle" dominantBaseline="central"
          fontSize="11" fill="#A52020" fontFamily="serif" fontWeight="bold" opacity="0.9">
          {label}
        </text>
      ))}
      {/* Center sun */}
      <circle cx="150" cy="150" r="28" fill="url(#kundliGreen)" />
      <text x="150" y="155" textAnchor="middle" dominantBaseline="central"
        fontSize="22" fill="#FFFFFF" fontFamily="serif">☀</text>
      {/* Decorative planets */}
      {[
        [53, 53, "♄"], [247, 53, "♃"], [247, 247, "♂"], [53, 247, "♀"],
        [150, 30, "☿"], [270, 150, "☽"], [150, 270, "⊕"],
      ].map(([x, y, sym]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="12" fill="rgba(165,32,32,0.12)" stroke="#A52020" strokeWidth="0.8" />
          <text x={x} y={y} textAnchor="middle" dominantBaseline="central"
            fontSize="9" fill="#6B0E0E" fontFamily="serif">{sym}</text>
        </g>
      ))}
      <defs>
        <radialGradient id="kundliGreen" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#F2C8C8" />
          <stop offset="100%" stopColor="#A52020" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function KundliSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #2E1A1A 0%, #3D1F1F 50%, #2E1A1A 100%)",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(181,36,36,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(165,32,32,0.08) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="kundli-grid"
      >
        {/* Left: Content */}
        <div>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-ui)",
              fontSize: "0.94rem",
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--gold-amber)",
              border: "1px solid rgba(76,175,90,0.35)",
              borderRadius: 100,
              padding: "6px 18px",
              background: "rgba(76,175,90,0.12)",
              marginBottom: 20,
            }}
          >
            Vedic Compatibility
          </span>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "#FFFFFF",
              marginTop: 16,
              marginBottom: 16,
              lineHeight: 1.25,
            }}
          >
            Kundli <span style={{ color: "var(--gold-amber)" }}>Matching</span>
          </h2>

          <div style={{ height: 2, background: "linear-gradient(90deg, var(--gold-amber), transparent)", maxWidth: 180, marginBottom: 24 }} />

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.85,
              marginBottom: 24,
            }}
          >
            Our expert Vedic kundli matching analyses 36-point Guna Milan, doshas,
            planetary positions and compatibility to give you a comprehensive
            marriage compatibility report.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {[
              { icon: "✦", text: "36-Point Guna Milan Analysis" },
              { icon: "✦", text: "Manglik Dosha Detection" },
              { icon: "✦", text: "Planetary Compatibility Check" },
              { icon: "✦", text: "Detailed Remedies if Required" },
              { icon: "✦", text: "Future Predictions & Guidance" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontFamily: "var(--font-ui)",
                  fontSize: "1.02rem",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "var(--gold-amber)", fontSize: "0.84rem" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href={`tel:${PHONE}`}
              className="btn-gold"
              style={{ padding: "14px 32px", borderRadius: 8, fontSize: "0.83rem" }}
            >
              📞 Get Kundli Read
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                borderRadius: 8,
                fontSize: "0.83rem",
                fontFamily: "var(--font-ui)",
                fontWeight: 700,
                color: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(255,255,255,0.25)",
                textDecoration: "none",
                transition: "all 0.2s",
                background: "rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
            >
              Read More →
            </a>
          </div>
        </div>

        {/* Right: Kundli chart illustration */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <KundliChart />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .kundli-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
