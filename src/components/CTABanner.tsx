"use client";
import { useRef, useState, useEffect } from "react";

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

export default function CTABanner() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="cta-golden">
      {/* Background image */}
      <div className="cta-golden-bgimg" />
      {/* Warm layered background */}
      <div className="cta-golden-bg" />
      <div className="cta-golden-grain" />

      {/* Rotating astrology circle - left */}
      <div className="cta-astro-circle cta-astro-circle--left">
        <svg viewBox="0 0 400 400" fill="none">
          {/* Outer ring */}
          <circle cx="200" cy="200" r="190" stroke="#E8562A" strokeWidth="1.2" opacity="0.25" />
          <circle cx="200" cy="200" r="185" stroke="#E8562A" strokeWidth="0.5" opacity="0.15" strokeDasharray="6 4" />
          {/* Zodiac segments */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30) * Math.PI / 180;
            return (
              <g key={i}>
                <line
                  x1={200 + Math.cos(a) * 140}
                  y1={200 + Math.sin(a) * 140}
                  x2={200 + Math.cos(a) * 190}
                  y2={200 + Math.sin(a) * 190}
                  stroke="#E8562A"
                  strokeWidth="0.6"
                  opacity="0.3"
                />
                <circle
                  cx={200 + Math.cos(a) * 165}
                  cy={200 + Math.sin(a) * 165}
                  r="3"
                  fill="#E8562A"
                  opacity="0.2"
                />
              </g>
            );
          })}
          {/* Middle ring */}
          <circle cx="200" cy="200" r="140" stroke="#E8562A" strokeWidth="0.8" opacity="0.2" />
          <circle cx="200" cy="200" r="135" stroke="#E8562A" strokeWidth="0.4" opacity="0.12" strokeDasharray="3 8" />
          {/* Inner decorative ring */}
          <circle cx="200" cy="200" r="100" stroke="#E8562A" strokeWidth="1" opacity="0.18" />
          <circle cx="200" cy="200" r="95" stroke="#E8562A" strokeWidth="0.3" opacity="0.1" strokeDasharray="2 6" />
          {/* Inner radial lines */}
          {Array.from({ length: 36 }).map((_, i) => {
            const a = (i * 10) * Math.PI / 180;
            return (
              <line
                key={`inner-${i}`}
                x1={200 + Math.cos(a) * 95}
                y1={200 + Math.sin(a) * 95}
                x2={200 + Math.cos(a) * 100}
                y2={200 + Math.sin(a) * 100}
                stroke="#E8562A"
                strokeWidth="0.5"
                opacity="0.15"
              />
            );
          })}
          {/* Center sun */}
          <circle cx="200" cy="200" r="55" stroke="#E8562A" strokeWidth="0.6" opacity="0.15" />
          <circle cx="200" cy="200" r="20" fill="#E8562A" opacity="0.06" />
          <circle cx="200" cy="200" r="8" fill="#E8562A" opacity="0.1" />
          {/* Zodiac symbols around the middle ring */}
          {["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"].map((z, i) => {
            const a = (i * 30 - 90) * Math.PI / 180;
            const x = 200 + Math.cos(a) * 118;
            const y = 200 + Math.sin(a) * 118;
            return (
              <text
                key={z}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#E8562A"
                opacity="0.3"
                fontSize="16"
                fontFamily="serif"
              >
                {z}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Rotating astrology circle - right */}
      <div className="cta-astro-circle cta-astro-circle--right">
        <svg viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="#E8562A" strokeWidth="1" opacity="0.2" />
          <circle cx="200" cy="200" r="160" stroke="#E8562A" strokeWidth="0.5" opacity="0.15" strokeDasharray="8 4" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30) * Math.PI / 180;
            return (
              <line
                key={i}
                x1={200 + Math.cos(a) * 120}
                y1={200 + Math.sin(a) * 120}
                x2={200 + Math.cos(a) * 190}
                y2={200 + Math.sin(a) * 190}
                stroke="#E8562A"
                strokeWidth="0.5"
                opacity="0.2"
              />
            );
          })}
          <circle cx="200" cy="200" r="120" stroke="#E8562A" strokeWidth="0.8" opacity="0.15" />
          <circle cx="200" cy="200" r="70" stroke="#E8562A" strokeWidth="0.6" opacity="0.12" />
          <circle cx="200" cy="200" r="30" fill="#E8562A" opacity="0.05" />
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i * 15) * Math.PI / 180;
            return (
              <line
                key={`tick-${i}`}
                x1={200 + Math.cos(a) * 155}
                y1={200 + Math.sin(a) * 155}
                x2={200 + Math.cos(a) * 160}
                y2={200 + Math.sin(a) * 160}
                stroke="#E8562A"
                strokeWidth="0.4"
                opacity="0.18"
              />
            );
          })}
        </svg>
      </div>

      {/* Top/bottom accent lines */}
      <div className="cta-golden-line cta-golden-line--top" />
      <div className="cta-golden-line cta-golden-line--bot" />

      <div ref={contentRef} className={`cta-golden-content ${visible ? "cta-visible" : ""}`} style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <div className="cta-anim cta-anim--1" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 28 }}>
          <div className="cta-golden-hl" />
          <span className="cta-golden-label">⚡ Limited Free Consultations Available</span>
          <div className="cta-golden-hl cta-golden-hl--r" />
        </div>

        <h2 className="cta-golden-title cta-anim cta-anim--2">
          Your Solution <span className="cta-golden-accent">Awaits You</span>
        </h2>

        <p className="cta-golden-body cta-anim cta-anim--3">
          Stop suffering in silence. 90,000+ people have already transformed their lives with Vikram Bhai Joshi&apos;s guidance. Your situation — no matter how difficult — has a solution.
        </p>

        <p className="cta-golden-quote cta-anim cta-anim--4">
          &ldquo;Call Us For Immediate Solution — Give A New Look To Your Life.&rdquo;
        </p>

        {/* Buttons */}
        <div className="cta-anim cta-anim--5" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
          <a href={`tel:${PHONE}`} className="cta-golden-btn cta-golden-btn--outline">
            📞 Call Now — FREE
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cta-golden-btn cta-golden-btn--solid">
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className="cta-anim cta-anim--6" style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          {["🔒 100% Private", "⚡ Instant Reply", "🌙 Available Now", "❤️ Free First Call"].map(item => (
            <span key={item} className="cta-golden-badge">
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .cta-golden {
          position: relative;
          overflow: hidden;
          padding: 100px 32px;
          text-align: center;
          background: var(--bg-light-yellow);
        }
        .cta-golden-bgimg {
          position: absolute; inset: 0;
          background: url('/cta-bg.webp') center/cover no-repeat;
          opacity: 0.35;
          pointer-events: none;
        }
        .cta-golden-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 30% 20%, rgba(232,86,42,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(245,180,80,0.08) 0%, transparent 50%),
            linear-gradient(170deg, rgba(245,232,224,0.75) 0%, rgba(242,224,213,0.7) 30%, rgba(240,219,206,0.7) 60%, rgba(245,232,224,0.75) 100%);
        }
        .cta-golden-grain {
          position: absolute; inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 128px;
          pointer-events: none;
        }

        /* Rotating astrology circles */
        .cta-astro-circle {
          position: absolute;
          pointer-events: none;
        }
        .cta-astro-circle--left {
          left: -12%;
          top: 50%;
          transform: translateY(-50%);
          width: min(500px, 55vw);
          height: min(500px, 55vw);
          animation: cta-spin 60s linear infinite;
        }
        .cta-astro-circle--right {
          right: -12%;
          top: 50%;
          transform: translateY(-50%);
          width: min(420px, 45vw);
          height: min(420px, 45vw);
          animation: cta-spin-reverse 45s linear infinite;
        }

        @keyframes cta-spin {
          from { transform: translateY(-50%) rotate(0deg); }
          to { transform: translateY(-50%) rotate(360deg); }
        }
        @keyframes cta-spin-reverse {
          from { transform: translateY(-50%) rotate(0deg); }
          to { transform: translateY(-50%) rotate(-360deg); }
        }

        /* Accent lines */
        .cta-golden-line--top, .cta-golden-line--bot {
          position: absolute; left: 0; right: 0; height: 1px;
        }
        .cta-golden-line--top {
          top: 0;
          background: linear-gradient(90deg, transparent 10%, rgba(232,86,42,0.3) 30%, rgba(232,86,42,0.5) 50%, rgba(232,86,42,0.3) 70%, transparent 90%);
        }
        .cta-golden-line--bot {
          bottom: 0;
          background: linear-gradient(90deg, transparent 15%, rgba(232,86,42,0.2) 50%, transparent 85%);
        }

        /* Eyebrow line */
        .cta-golden-hl {
          height: 1px; width: 40px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.6));
        }
        .cta-golden-hl--r {
          background: linear-gradient(90deg, rgba(232,86,42,0.6), transparent);
        }

        .cta-golden-label {
          font-family: var(--font-ui);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #E8562A;
        }

        .cta-golden-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5.5vw, 3.8rem);
          font-weight: 700;
          letter-spacing: 0.06em;
          line-height: 1.1;
          margin-bottom: 20px;
          color: #2A0E04;
          text-shadow: 0 1px 8px rgba(245,232,224,0.8);
        }
        .cta-golden-accent {
          color: #E8562A;
          text-shadow: 0 1px 8px rgba(245,232,224,0.8);
        }

        .cta-golden-body {
          font-family: var(--font-body);
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(42,14,4,0.75);
          line-height: 1.85;
          margin-bottom: 16px;
        }
        .cta-golden-quote {
          font-family: var(--font-body);
          font-size: clamp(1.05rem, 2.3vw, 1.4rem);
          font-weight: 600;
          font-style: italic;
          letter-spacing: 0.04em;
          color: #E8562A;
          margin-bottom: 48px;
          text-shadow: 0 1px 6px rgba(245,232,224,0.7);
        }

        .cta-golden-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 40px;
          font-family: var(--font-ui);
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cta-golden-btn--outline {
          background: transparent;
          border: 1px solid rgba(232,86,42,0.4);
          color: #3B1A0A;
        }
        .cta-golden-btn--outline:hover {
          background: rgba(232,86,42,0.08);
          border-color: #E8562A;
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(232,86,42,0.15);
        }
        .cta-golden-btn--solid {
          background: #E8562A;
          border: 1px solid #E8562A;
          color: #fff;
        }
        .cta-golden-btn--solid:hover {
          background: #D14A22;
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(232,86,42,0.3);
        }

        .cta-golden-badge {
          font-family: var(--font-ui);
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(59,26,10,0.45);
          font-weight: 700;
        }

        /* ── Scroll-triggered staggered reveal ── */
        .cta-anim {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cta-anim--1 { transition-delay: 0s; }
        .cta-anim--2 { transition-delay: 0.12s; }
        .cta-anim--3 { transition-delay: 0.24s; }
        .cta-anim--4 { transition-delay: 0.36s; }
        .cta-anim--5 { transition-delay: 0.48s; }
        .cta-anim--6 { transition-delay: 0.6s; }

        .cta-visible .cta-anim {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 600px) {
          .cta-golden { padding: 72px 20px; }
          .cta-golden-badge { font-size: 0.64rem; letter-spacing: 0.12em; }
          .cta-astro-circle--left { width: 300px; height: 300px; left: -25%; }
          .cta-astro-circle--right { width: 260px; height: 260px; right: -25%; }
        }
      `}</style>
    </section>
  );
}
