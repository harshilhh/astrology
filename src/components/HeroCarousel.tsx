"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const slides = [
  {
    bg: "linear-gradient(120deg, #F5E5E5 0%, #EED8D8 40%, #F9EFEF 100%)",
    badge: "✦ 20+ Years of Vedic Wisdom",
    heading: "Find Your Path\nWith Ancient\nAstrology",
    sub: "Vikram Bhai Joshi — Best Ambaji Upasak & Vedic Astrology Expert",
    cta1: "📞 Free Consultation",
    cta2: "💬 WhatsApp Now",
    accent: "#A52020",
  },
  {
    bg: "linear-gradient(120deg, #F9EFEF 0%, #F2C8C8 40%, #F5E5E5 100%)",
    badge: "✦ 10,000+ Happy Clients",
    heading: "Love Problem\nSolution\nSpecialist",
    sub: "Instant solutions for love, marriage, career & spiritual healing. 100% confidential.",
    cta1: "📞 Call Now — Free",
    cta2: "💬 Chat on WhatsApp",
    accent: "#8B1A1A",
  },
  {
    bg: "linear-gradient(120deg, #FDF7F7 0%, #EED8D8 40%, #F2C8C8 100%)",
    badge: "✦ Available 24/7",
    heading: "Transform Your\nLife With\nVedic Remedies",
    sub: "Expert guidance for all life challenges — love, family, career, black magic removal.",
    cta1: "📞 Get Solution Now",
    cta2: "💬 WhatsApp Us",
    accent: "#B52424",
  },
  {
    bg: "linear-gradient(120deg, #F5E5E5 0%, #F9EFEF 40%, #FDF7F7 100%)",
    badge: "✦ Certified Jyotish Acharya",
    heading: "Horoscope &\nKundli Reading\nExpert",
    sub: "Personalized birth chart analysis, kundli matching, and life path predictions.",
    cta1: "📞 Book Consultation",
    cta2: "💬 WhatsApp Now",
    accent: "#A52020",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((p) => (p + 1) % slides.length);
        setAnimating(false);
      }, 300);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    if (i === active) return;
    setAnimating(true);
    setTimeout(() => { setActive(i); setAnimating(false); }, 250);
  };

  const s = slides[active];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: 0,
      }}
    >
      {/* Slide */}
      <div
        style={{
          background: s.bg,
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          transition: "background 0.5s ease",
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(8px)" : "translateY(0)",
          transitionProperty: "opacity, transform",
          transitionDuration: "0.35s",
        }}
      >
        {/* Decorative SVG elements */}
        <svg
          style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "50%", opacity: 0.08, pointerEvents: "none" }}
          viewBox="0 0 400 600" fill="none"
        >
          <circle cx="300" cy="300" r="250" stroke="#A52020" strokeWidth="1" />
          <circle cx="300" cy="300" r="200" stroke="#A52020" strokeWidth="0.5" strokeDasharray="6 4" />
          <circle cx="300" cy="300" r="150" stroke="#A52020" strokeWidth="1" />
          <circle cx="300" cy="300" r="80" fill="rgba(165,32,32,0.12)" />
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
            <line key={i}
              x1={300 + Math.cos(deg*Math.PI/180)*80}
              y1={300 + Math.sin(deg*Math.PI/180)*80}
              x2={300 + Math.cos(deg*Math.PI/180)*250}
              y2={300 + Math.sin(deg*Math.PI/180)*250}
              stroke="#A52020" strokeWidth="0.5" opacity="0.5"
            />
          ))}
        </svg>

        {/* Left: Content */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "100px 24px 80px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
          className="carousel-grid"
        >
          <div>
            <div style={{ marginBottom: 20 }}>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.94rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: s.accent,
                  border: `1px solid ${s.accent}50`,
                  borderRadius: 100,
                  padding: "6px 18px",
                  background: `${s.accent}10`,
                }}
              >
                {s.badge}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "0.03em",
                color: "#2E1A1A",
                marginBottom: 20,
                whiteSpace: "pre-line",
              }}
            >
              {s.heading.split("\n").map((line, i) => (
                <span key={i}>
                  {i === 1 ? <span style={{ color: s.accent }}>{line}</span> : line}
                  {i < 2 && <br />}
                </span>
              ))}
            </h1>

            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "rgba(46,26,26,0.7)",
                lineHeight: 1.8,
                marginBottom: 36,
                maxWidth: 480,
              }}
            >
              {s.sub}
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
              <a
                href={`tel:${PHONE}`}
                className="btn-gold"
                style={{ padding: "15px 32px", borderRadius: 8, fontSize: "0.94rem" }}
              >
                {s.cta1}
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
                style={{ padding: "15px 32px", borderRadius: 8, fontSize: "0.94rem" }}
              >
                {s.cta2}
              </a>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {["🔒 100% Private", "⚡ Instant Reply", "🌙 24/7 Available"].map((t) => (
                <span key={t} style={{ fontFamily: "var(--font-ui)", fontSize: "1.02rem", color: "rgba(46,26,26,0.55)", fontWeight: 600 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                border: `2px solid ${s.accent}40`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.1), 0 0 40px ${s.accent}20`,
                maxWidth: 480,
                width: "100%",
              }}
            >
              <Image
                src="/hero-banner.jpg"
                alt="Vikram Bhai Joshi — Vedic Astrologer"
                width={480}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(135deg, ${s.accent}15, transparent 60%)`,
                pointerEvents: "none",
              }} />
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(transparent, rgba(229,245,229,0.4))", pointerEvents: "none" }} />
      </div>

      {/* Slide indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === active ? 32 : 10,
              height: 10,
              borderRadius: 5,
              background: i === active ? "#A52020" : "rgba(165,32,32,0.35)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Prev/Next arrows */}
      {[
        { dir: "prev", icon: "‹", pos: "left" },
        { dir: "next", icon: "›", pos: "right" },
      ].map(({ dir, icon, pos }) => (
        <button
          key={dir}
          onClick={() => {
            if (dir === "prev") goTo((active - 1 + slides.length) % slides.length);
            else goTo((active + 1) % slides.length);
          }}
          style={{
            position: "absolute",
            top: "50%",
            [pos]: 20,
            transform: "translateY(-50%)",
            background: "rgba(165,32,32,0.12)",
            border: "1px solid rgba(165,32,32,0.3)",
            color: "#A52020",
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            cursor: "pointer",
            zIndex: 10,
            lineHeight: 1,
            transition: "all 0.2s",
            backdropFilter: "blur(4px)",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(165,32,32,0.25)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(165,32,32,0.12)"; }}
        >
          {icon}
        </button>
      ))}

      <style>{`
        @media (max-width: 768px) {
          .carousel-grid { grid-template-columns: 1fr !important; }
          .carousel-grid > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
