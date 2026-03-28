"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    stars: 5,
    text: "I had lost all hope of getting my ex back after 2 years of separation. Rajyog ji's guidance and remedies worked like a miracle. We are happily together now. I can never thank him enough.",
    service: "Ex Love Back",
    avatar: "P",
  },
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    stars: 5,
    text: "My business had been in loss for 3 years and I was drowning in debt. After the consultation and performing the remedies, things turned around within a month. Highly recommended!",
    service: "Business & Finance",
    avatar: "R",
  },
  {
    name: "Anjali Singh",
    location: "Jaipur",
    stars: 5,
    text: "Our parents were completely against our intercaste marriage. Rajyog ji helped us in every way — our parents gave their blessings within weeks! It felt nothing short of a miracle.",
    service: "Love Marriage",
    avatar: "A",
  },
  {
    name: "Mohan Verma",
    location: "Pune",
    stars: 5,
    text: "Constant fights with my wife had pushed us to the edge of divorce. After just two sessions with Rajyog ji, there was a visible change. Our home is peaceful again. God bless him.",
    service: "Husband-Wife Dispute",
    avatar: "M",
  },
  {
    name: "Sunita Patel",
    location: "Ahmedabad",
    stars: 5,
    text: "I was suffering from severe black magic for years with unexplained problems in every area of life. Rajyog ji identified it instantly and removed it. I feel like a new person now.",
    service: "Black Magic Removal",
    avatar: "S",
  },
  {
    name: "Vikram Rao",
    location: "Hyderabad",
    stars: 5,
    text: "I was stuck in my career for 5 years with no growth. After following the astrological remedies, I got a promotion and a 40% salary hike within 3 months. Incredible experience.",
    service: "Career Growth",
    avatar: "V",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      style={{
        background: "var(--bg-white)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gold line */}
      <div className="gold-divider-thick" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 400,
          background: "radial-gradient(ellipse, rgba(255,215,0,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-block" }}>Testimonials</span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              lineHeight: 1.2,
              marginBottom: 20,
              marginTop: 16,
              color: "var(--text-primary)",
            }}
          >
            Real People,{" "}
            <span className="gold-text">Real Transformations</span>
          </h2>
          <div className="ornament-sep" style={{ maxWidth: 300, margin: "0 auto" }}>✦</div>
        </div>

        {/* Featured testimonial */}
        <div
          style={{
            background: "white",
            border: "2px solid rgba(212,175,55,0.3)",
            borderRadius: 24,
            padding: "clamp(28px, 5vw, 52px)",
            marginBottom: 40,
            position: "relative",
            maxWidth: 800,
            margin: "0 auto 40px",
            boxShadow: "0 8px 40px rgba(180,140,0,0.1)",
          }}
        >
          {/* Large quote mark */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 30,
              fontFamily: "Georgia, serif",
              fontSize: "5rem",
              color: "rgba(212,175,55,0.2)",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.9,
              fontStyle: "italic",
              marginBottom: 28,
              paddingTop: 24,
            }}
          >
            {testimonials[active].text}
          </p>

          <div className="gold-divider" style={{ marginBottom: 20 }} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--gold-deep), var(--gold-amber))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {testimonials[active].avatar}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 3,
                  }}
                >
                  {testimonials[active].name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.76rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {testimonials[active].location} · {testimonials[active].service}
                </div>
              </div>
            </div>
            <div className="stars-rating" style={{ fontSize: "1.1rem" }}>
              {"★".repeat(testimonials[active].stars)}
              {"☆".repeat(5 - testimonials[active].stars)}
            </div>
          </div>
        </div>

        {/* Testimonial nav dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginBottom: 56,
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 28 : 10,
                height: 10,
                borderRadius: 5,
                background: i === active ? "var(--gold-amber)" : "rgba(212,175,55,0.3)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Grid of mini testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              style={{
                padding: "22px",
                borderRadius: 14,
                textAlign: "left",
                border: i === active ? "2px solid rgba(212,175,55,0.5)" : "1px solid rgba(212,175,55,0.2)",
                cursor: "pointer",
                background: i === active ? "rgba(255,215,0,0.06)" : "white",
                width: "100%",
                boxShadow: i === active
                  ? "0 8px 32px rgba(180,140,0,0.14)"
                  : "0 2px 12px rgba(180,140,0,0.06)",
                transition: "all 0.25s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--gold-deep), var(--gold-amber))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div className="stars-rating" style={{ fontSize: "0.82rem" }}>
                  {"★".repeat(t.stars)}
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: 12,
                  fontStyle: "italic",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {t.text}
              </p>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8rem",
                  color: "var(--text-primary)",
                  fontWeight: 700,
                }}
              >
                — {t.name}, {t.location}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
