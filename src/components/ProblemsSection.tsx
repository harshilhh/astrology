"use client";
const PHONE = "+917021932472";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const problems = [
  "Intercaste Marriage",
  "Facing Marriage Problem",
  "Facing Love Problem",
  "Delay in Marriage",
  "Love Problem Solution",
  "Trust Issues",
  "Divorce Problem",
  "Business Problem",
  "Financial Problem",
  "Partner Ignoring You",
  "Breakup Pain",
  "Ex Love Back",
  "Career Confusion",
  "Family Dispute",
  "Job Delay",
  "Negative Energy",
  "Fear of Black Magic",
  "Anxiety & Fear",
  "Vashikaran Love",
  "Husband-Wife Dispute",
  "Husband Affair",
  "Mental Stress",
  "Future Worries",
  "Long Distance Relationship",
  "Business Growth Problem",
  "Hope & Reunion",
  "Family Approval Issue",
  "Childbirth Problem",
];

/* Lotus Illustration */
function LotusIllustration() {
  return (
    <svg viewBox="0 0 160 120" fill="none" style={{ width: 160, height: 120 }}>
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg - 90) * Math.PI / 180;
        const cx = 80 + Math.cos(rad) * 32;
        const cy = 65 + Math.sin(rad) * 28;
        return (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx="18" ry="10"
            fill={i % 2 === 0 ? "rgba(255,215,0,0.35)" : "rgba(212,175,55,0.25)"}
            stroke="#D4AF37"
            strokeWidth="0.8"
            transform={`rotate(${deg}, ${cx}, ${cy})`}
          />
        );
      })}
      {/* Center */}
      <circle cx="80" cy="65" r="16" fill="url(#lotusCenter)" />
      <circle cx="80" cy="65" r="10" fill="#FFD700" opacity="0.9" />
      <circle cx="75" cy="60" r="3" fill="rgba(255,255,255,0.6)" />
      {/* Stem line */}
      <line x1="80" y1="81" x2="80" y2="108" stroke="#B8860B" strokeWidth="2" />
      {/* Leaves */}
      <ellipse cx="68" cy="102" rx="14" ry="7" fill="rgba(180,140,0,0.25)" transform="rotate(-30, 68, 102)" />
      <ellipse cx="92" cy="102" rx="14" ry="7" fill="rgba(180,140,0,0.25)" transform="rotate(30, 92, 102)" />
      <defs>
        <radialGradient id="lotusCenter" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#FFF3C4" />
          <stop offset="100%" stopColor="#E8A800" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function ProblemsSection() {
  return (
    <section
      style={{
        background: "var(--bg-cream)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,215,0,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <LotusIllustration />
          </div>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>
            Every Problem Has A Solution
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              lineHeight: 1.25,
              marginBottom: 20,
              marginTop: 16,
              color: "var(--text-primary)",
            }}
          >
            Are You Facing{" "}
            <span className="gold-text">Any of These?</span>
          </h2>
          <div className="ornament-sep" style={{ maxWidth: 300, margin: "0 auto 20px" }}>
            ☽
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: 540,
              margin: "0 auto",
            }}
          >
            One astro remedy can change your life. Whatever you are facing,
            Shri Rajyog ji has helped thousands overcome it.
          </p>
        </div>

        {/* Problems grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
            gap: 12,
            marginBottom: 52,
          }}
        >
          {problems.map((p, i) => (
            <a
              key={p}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "13px 16px",
                borderRadius: 10,
                background: "white",
                border: "1px solid rgba(212,175,55,0.2)",
                textDecoration: "none",
                transition: "all 0.25s ease",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(180,140,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,215,0,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.5)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(180,140,0,0.14)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "white";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.2)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(180,140,0,0.06)";
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(255,215,0,0.15)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "var(--gold-deep)",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.83rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  lineHeight: 1.3,
                }}
              >
                {p}
              </span>
            </a>
          ))}
        </div>

        {/* Quote + CTA */}
        <div
          style={{
            textAlign: "center",
            background: "white",
            border: "2px solid rgba(212,175,55,0.3)",
            borderRadius: 20,
            padding: "40px 32px",
            boxShadow: "0 8px 32px rgba(180,140,0,0.1)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              fontWeight: 600,
              color: "var(--gold-deep)",
              letterSpacing: "0.05em",
              marginBottom: 8,
              fontStyle: "italic",
            }}
          >
            &ldquo;One Aghori Kriya Can Change Your Life&rdquo;
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-muted)",
              marginBottom: 28,
            }}
          >
            Immediate solution — Astro remedy starts on the same day
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: "15px 44px", borderRadius: 8, fontSize: "0.85rem" }}
          >
            💬 Get Your Solution Now
          </a>
        </div>
      </div>
    </section>
  );
}
