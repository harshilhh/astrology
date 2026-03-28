"use client";

const PHONE = "+917021932472";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

function ZodiacMandala() {
  const zodiacSymbols = ["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"];
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 420, height: "auto" }} className="illustration-wrap">
      <circle cx="200" cy="200" r="188" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
      <circle cx="200" cy="200" r="178" stroke="#FFD700" strokeWidth="0.5" opacity="0.3" />
      <circle cx="200" cy="200" r="170" fill="url(#outerRing)" opacity="0.08" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        return (
          <line key={i}
            x1={200 + Math.cos(angle) * 110} y1={200 + Math.sin(angle) * 110}
            x2={200 + Math.cos(angle) * 168} y2={200 + Math.sin(angle) * 168}
            stroke="#D4AF37" strokeWidth="0.8" opacity="0.4"
          />
        );
      })}
      {zodiacSymbols.map((sym, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = 200 + Math.cos(angle) * 148;
        const y = 200 + Math.sin(angle) * 148;
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="central"
            fontSize="14" fill="#B8860B" fontFamily="serif" opacity="0.85">{sym}</text>
        );
      })}
      <circle cx="200" cy="200" r="106" stroke="#D4AF37" strokeWidth="1.5" opacity="0.35" />
      <circle cx="200" cy="200" r="90" fill="url(#middleRing)" opacity="0.12" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a1 = (i * 45 - 90) * (Math.PI / 180);
        const a2 = ((i * 45 + 22.5) - 90) * (Math.PI / 180);
        return (
          <g key={i}>
            <line x1={200 + Math.cos(a1)*82} y1={200 + Math.sin(a1)*82}
              x2={200 + Math.cos(a1)*30} y2={200 + Math.sin(a1)*30}
              stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
            <circle cx={200 + Math.cos(a2)*68} cy={200 + Math.sin(a2)*68} r="2.5" fill="#FFD700" opacity="0.6" />
          </g>
        );
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45) * (Math.PI / 180);
        const cx = 200 + Math.cos(angle) * 42;
        const cy = 200 + Math.sin(angle) * 42;
        return <ellipse key={i} cx={cx} cy={cy} rx="14" ry="7" fill="#FFD700" opacity="0.18" transform={`rotate(${i * 45 + 90}, ${cx}, ${cy})`} />;
      })}
      <circle cx="200" cy="200" r="34" stroke="#D4AF37" strokeWidth="1.5" opacity="0.5" />
      <circle cx="200" cy="200" r="28" fill="url(#sunGrad)" />
      <circle cx="200" cy="200" r="22" fill="url(#sunInner)" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        return (
          <line key={i}
            x1={200 + Math.cos(angle)*29} y1={200 + Math.sin(angle)*29}
            x2={200 + Math.cos(angle)*(i % 2 === 0 ? 38 : 34)} y2={200 + Math.sin(angle)*(i % 2 === 0 ? 38 : 34)}
            stroke="#FFD700" strokeWidth={i % 2 === 0 ? "2" : "1"} opacity="0.9"
          />
        );
      })}
      <text x="200" y="205" textAnchor="middle" dominantBaseline="central" fontSize="18" fill="#1a1208" fontFamily="serif" fontWeight="bold" opacity="0.9">☀</text>
      <defs>
        <radialGradient id="sunGrad" cx="40%" cy="35%"><stop offset="0%" stopColor="#FFD700"/><stop offset="100%" stopColor="#B8860B"/></radialGradient>
        <radialGradient id="sunInner" cx="40%" cy="35%"><stop offset="0%" stopColor="#FFF3C4"/><stop offset="100%" stopColor="#FFD700"/></radialGradient>
        <radialGradient id="outerRing" cx="50%" cy="50%"><stop offset="0%" stopColor="#FFD700" stopOpacity="1"/><stop offset="100%" stopColor="#FFD700" stopOpacity="0"/></radialGradient>
        <radialGradient id="middleRing" cx="50%" cy="50%"><stop offset="0%" stopColor="#D4AF37" stopOpacity="1"/><stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/></radialGradient>
      </defs>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: "120px 24px 80px", overflow: "hidden", background: "var(--bg-cream)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(255,215,0,0.12) 0%, transparent 55%), radial-gradient(ellipse at 30% 30%, rgba(212,175,55,0.08) 0%, transparent 40%), radial-gradient(ellipse at 50% 90%, rgba(255,200,60,0.07) 0%, transparent 40%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,215,0,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="spin-slow" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "min(680px, 95vw)", height: "min(680px, 95vw)", borderRadius: "50%", border: "1px dashed rgba(212,175,55,0.18)", pointerEvents: "none" }} />
      <div className="spin-reverse" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "min(520px, 78vw)", height: "min(520px, 78vw)", borderRadius: "50%", border: "1px solid rgba(212,175,55,0.1)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 6vw, 80px)", alignItems: "center" }} className="hero-grid">
        {/* Left: Text */}
        <div>
          <div className="fade-up" style={{ marginBottom: 24 }}>
            <span className="section-label">✦ 20+ Years of Trusted Guidance ✦</span>
          </div>
          <h1 className="fade-up-1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5.5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "0.04em", marginBottom: 16, color: "var(--text-primary)" }}>
            <span className="gold-shimmer">Shri Rajyog</span>
            <br />
            <span style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)", color: "var(--text-secondary)" }}>Expert Astrologer</span>
          </h1>
          <div className="fade-up-2 ornament-sep" style={{ margin: "20px 0", maxWidth: 340, justifyContent: "flex-start" }}>✦</div>
          <p className="fade-up-2" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1rem, 2.2vw, 1.4rem)", fontWeight: 600, letterSpacing: "0.05em", color: "var(--gold-deep)", marginBottom: 14 }}>
            You Are Just One Call Away From Solution
          </p>
          <p className="fade-up-3" style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 500, marginBottom: 36 }}>
            Fast, accurate & 100% confidential astrology guidance for love, marriage,
            career & spiritual healing. Transform your life with ancient Vedic wisdom.
          </p>
          <div className="fade-up-4" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
            <a href={`tel:${PHONE}`} className="btn-gold" style={{ padding: "15px 32px", borderRadius: 8, fontSize: "0.82rem" }}>📞 Call Now — Free</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding: "15px 32px", borderRadius: 8, fontSize: "0.82rem", fontWeight: 700 }}>💬 WhatsApp Now</a>
          </div>
          <div className="fade-up-5" style={{ display: "flex", gap: "clamp(8px, 2vw, 16px)", flexWrap: "wrap" }}>
            {[{ icon: "🔒", text: "100% Confidential" }, { icon: "⚡", text: "Instant Solutions" }, { icon: "🌙", text: "Available 24/7" }, { icon: "✅", text: "10,000+ Happy Clients" }].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--text-secondary)", fontWeight: 600, background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: 100, padding: "5px 12px" }}>
                <span style={{ fontSize: "0.9rem" }}>{item.icon}</span>{item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Zodiac Mandala */}
        <div className="fade-up-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ZodiacMandala />
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "var(--text-muted)", fontFamily: "var(--font-ui)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, var(--gold-warm), transparent)", animation: "float 2s ease-in-out infinite" }} />
        Scroll
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { order: -1; }
          .hero-grid > div:last-child svg { max-width: 260px !important; }
        }
      `}</style>
    </section>
  );
}
