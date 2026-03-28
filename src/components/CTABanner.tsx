"use client";
const PHONE = "+917021932472";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

/* Sun ray illustration for CTA */
function SunRaysIllustration() {
  return (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "min(600px, 100%)",
        height: "auto",
        opacity: 0.12,
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: 18 }).map((_, i) => {
        const angle = (i * 20 - 90) * Math.PI / 180;
        return (
          <line
            key={i}
            x1={150 + Math.cos(angle) * 20}
            y1={100 + Math.sin(angle) * 20}
            x2={150 + Math.cos(angle) * 200}
            y2={100 + Math.sin(angle) * 200}
            stroke="#1a0e00"
            strokeWidth={i % 3 === 0 ? "4" : "2"}
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="150" cy="100" r="18" fill="#1a0e00" />
    </svg>
  );
}

export default function CTABanner() {
  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, var(--gold-deep) 0%, var(--gold-amber) 35%, var(--gold-glow) 60%, var(--gold-amber) 80%, var(--gold-deep) 100%)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Sun rays decoration */}
      <SunRaysIllustration />

      {/* Corner mandalas */}
      <div
        style={{
          position: "absolute",
          top: -40,
          left: -40,
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "2px solid rgba(26,14,0,0.15)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -40,
          right: -40,
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "2px solid rgba(26,14,0,0.15)",
          pointerEvents: "none",
        }}
      />

      {/* Top & bottom borders */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 4,
          background: "linear-gradient(90deg, transparent, rgba(26,14,0,0.3), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: 4,
          background: "linear-gradient(90deg, transparent, rgba(26,14,0,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Urgency badge */}
        <div style={{ marginBottom: 28 }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-ui)",
              fontSize: "0.68rem",
              fontWeight: 800,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "white",
              background: "rgba(26,14,0,0.25)",
              borderRadius: 100,
              padding: "7px 22px",
              border: "1px solid rgba(26,14,0,0.2)",
            }}
          >
            ⚡ Limited Free Consultations Available
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 900,
            letterSpacing: "0.04em",
            lineHeight: 1.2,
            marginBottom: 20,
            color: "var(--text-on-gold)",
          }}
        >
          Your Solution Awaits
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(26,14,0,0.75)",
            lineHeight: 1.85,
            marginBottom: 16,
          }}
        >
          Stop suffering in silence. Thousands have already transformed their lives with
          Shri Rajyog ji&apos;s guidance. Your situation — no matter how difficult — has a solution.
        </p>

        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "var(--text-on-gold)",
            marginBottom: 44,
          }}
        >
          &ldquo;You are just one call away from your solution.&rdquo;
        </p>

        <div
          style={{
            display: "flex",
            gap: 18,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          <a
            href={`tel:${PHONE}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "17px 42px",
              borderRadius: 10,
              fontSize: "0.88rem",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "rgba(26,14,0,0.18)",
              color: "var(--text-on-gold)",
              border: "2px solid rgba(26,14,0,0.3)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              backdropFilter: "blur(4px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(26,14,0,0.28)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(26,14,0,0.18)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            📞 Call Now — FREE
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            style={{ padding: "17px 42px", borderRadius: 10, fontSize: "0.88rem" }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Trust line */}
        <div
          style={{
            display: "flex",
            gap: "clamp(12px, 3vw, 28px)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {["🔒 100% Private", "⚡ Instant Reply", "🌙 Available Now", "❤️ Free First Call"].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.8rem",
                color: "rgba(26,14,0,0.7)",
                fontWeight: 600,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
