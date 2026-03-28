"use client";
import { useState, useEffect, useRef } from "react";

const PHONE = "+917021932472";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

/* ── Illustration 1: Zodiac Mandala ── */
function ZodiacMandala() {
  const zodiacSymbols = ["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"];
  return (
    <svg viewBox="0 0 400 400" fill="none" style={{ width: "100%", maxWidth: 380, height: "auto" }} className="illustration-wrap">
      <circle cx="200" cy="200" r="188" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />
      <circle cx="200" cy="200" r="170" fill="url(#zm_outerRing)" opacity="0.08" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        return <line key={i} x1={200 + Math.cos(angle)*110} y1={200 + Math.sin(angle)*110} x2={200 + Math.cos(angle)*168} y2={200 + Math.sin(angle)*168} stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" />;
      })}
      {zodiacSymbols.map((sym, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        return <text key={i} x={200 + Math.cos(angle)*148} y={200 + Math.sin(angle)*148} textAnchor="middle" dominantBaseline="central" fontSize="14" fill="#B8860B" fontFamily="serif" opacity="0.85">{sym}</text>;
      })}
      <circle cx="200" cy="200" r="106" stroke="#D4AF37" strokeWidth="1.5" opacity="0.35" />
      <circle cx="200" cy="200" r="90" fill="url(#zm_middleRing)" opacity="0.12" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a1 = (i * 45 - 90) * (Math.PI / 180);
        const a2 = ((i * 45 + 22.5) - 90) * (Math.PI / 180);
        return <g key={i}><line x1={200 + Math.cos(a1)*82} y1={200 + Math.sin(a1)*82} x2={200 + Math.cos(a1)*30} y2={200 + Math.sin(a1)*30} stroke="#D4AF37" strokeWidth="1" opacity="0.5" /><circle cx={200 + Math.cos(a2)*68} cy={200 + Math.sin(a2)*68} r="2.5" fill="#FFD700" opacity="0.6" /></g>;
      })}
      <circle cx="200" cy="200" r="34" stroke="#D4AF37" strokeWidth="1.5" opacity="0.5" />
      <circle cx="200" cy="200" r="28" fill="url(#zm_sunGrad)" />
      <circle cx="200" cy="200" r="22" fill="url(#zm_sunInner)" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        return <line key={i} x1={200 + Math.cos(angle)*29} y1={200 + Math.sin(angle)*29} x2={200 + Math.cos(angle)*(i % 2 === 0 ? 38 : 34)} y2={200 + Math.sin(angle)*(i % 2 === 0 ? 38 : 34)} stroke="#FFD700" strokeWidth={i % 2 === 0 ? "2" : "1"} opacity="0.9" />;
      })}
      <text x="200" y="205" textAnchor="middle" dominantBaseline="central" fontSize="18" fill="#1a1208" fontFamily="serif" fontWeight="bold" opacity="0.9">☀</text>
      <defs>
        <radialGradient id="zm_sunGrad" cx="40%" cy="35%"><stop offset="0%" stopColor="#FFD700"/><stop offset="100%" stopColor="#B8860B"/></radialGradient>
        <radialGradient id="zm_sunInner" cx="40%" cy="35%"><stop offset="0%" stopColor="#FFF3C4"/><stop offset="100%" stopColor="#FFD700"/></radialGradient>
        <radialGradient id="zm_outerRing" cx="50%" cy="50%"><stop offset="0%" stopColor="#FFD700" stopOpacity="1"/><stop offset="100%" stopColor="#FFD700" stopOpacity="0"/></radialGradient>
        <radialGradient id="zm_middleRing" cx="50%" cy="50%"><stop offset="0%" stopColor="#D4AF37" stopOpacity="1"/><stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/></radialGradient>
      </defs>
    </svg>
  );
}

/* ── Illustration 2: Love / Heart ── */
function LoveIllustration() {
  return (
    <svg viewBox="0 0 400 400" fill="none" style={{ width: "100%", maxWidth: 380, height: "auto" }} className="illustration-wrap float-anim">
      <circle cx="200" cy="200" r="188" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
      <circle cx="200" cy="200" r="170" stroke="#D4AF37" strokeWidth="0.5" opacity="0.25" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45) * Math.PI / 180;
        const cx = 200 + Math.cos(angle) * 130;
        const cy = 200 + Math.sin(angle) * 130;
        return <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 10 : 6} fill={i % 2 === 0 ? "rgba(255,215,0,0.4)" : "rgba(212,175,55,0.3)"} />;
      })}
      <circle cx="200" cy="200" r="100" fill="rgba(255,215,0,0.06)" stroke="rgba(212,175,55,0.3)" strokeWidth="1" />
      <path d="M200 290 C110 248, 88 162, 126 132 C152 112, 180 122, 200 148 C220 122, 248 112, 274 132 C312 162, 290 248, 200 290Z" fill="url(#lv_heartGrad)" />
      <path d="M200 262 C135 228, 120 172, 150 150 C168 138, 188 146, 200 164 C212 146, 232 138, 250 150 C280 172, 265 228, 200 262Z" fill="url(#lv_heartInner)" opacity="0.6" />
      <text x="200" y="210" textAnchor="middle" dominantBaseline="central" fontSize="44" fill="rgba(26,14,0,0.75)">♥</text>
      {[{x:148,y:118,s:"★",fs:"18"},{x:252,y:112,s:"✦",fs:"14"},{x:136,y:278,s:"✦",fs:"12"},{x:264,y:272,s:"★",fs:"16"},{x:200,y:88,s:"✦",fs:"16"}].map((star, i) => (
        <text key={i} x={star.x} y={star.y} textAnchor="middle" fontSize={star.fs} fill="#D4AF37" opacity="0.75">{star.s}</text>
      ))}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 - 30) * Math.PI / 180;
        return <line key={i} x1={200 + Math.cos(angle)*100} y1={200 + Math.sin(angle)*100} x2={200 + Math.cos(angle)*165} y2={200 + Math.sin(angle)*165} stroke="#D4AF37" strokeWidth="1" opacity="0.3" />;
      })}
      <defs>
        <radialGradient id="lv_heartGrad" cx="40%" cy="30%"><stop offset="0%" stopColor="#FFD700"/><stop offset="55%" stopColor="#D4AF37"/><stop offset="100%" stopColor="#B8860B"/></radialGradient>
        <radialGradient id="lv_heartInner" cx="40%" cy="30%"><stop offset="0%" stopColor="#FFFDF0"/><stop offset="100%" stopColor="#FFD700"/></radialGradient>
      </defs>
    </svg>
  );
}

/* ── Illustration 3: Vashikaran Yantra ── */
function YantraIllustration() {
  return (
    <svg viewBox="0 0 400 400" fill="none" style={{ width: "100%", maxWidth: 380, height: "auto" }} className="illustration-wrap spin-slow">
      <circle cx="200" cy="200" r="185" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 4" opacity="0.45" />
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5) * Math.PI / 180;
        const cx = 200 + Math.cos(angle) * 150;
        const cy = 200 + Math.sin(angle) * 150;
        return <ellipse key={i} cx={cx} cy={cy} rx="13" ry="6" fill={i % 2 === 0 ? "rgba(255,215,0,0.3)" : "rgba(212,175,55,0.2)"} transform={`rotate(${i * 22.5 + 90},${cx},${cy})`} />;
      })}
      <circle cx="200" cy="200" r="120" stroke="#D4AF37" strokeWidth="1.5" opacity="0.5" />
      <polygon points="200,78 105,252 295,252" stroke="#D4AF37" strokeWidth="2" fill="rgba(255,215,0,0.08)" />
      <polygon points="200,322 105,148 295,148" stroke="#D4AF37" strokeWidth="2" fill="rgba(212,175,55,0.08)" />
      <polygon points="200,110 125,242 275,242" stroke="#E8A800" strokeWidth="1.5" fill="rgba(255,215,0,0.05)" />
      <polygon points="200,290 125,158 275,158" stroke="#E8A800" strokeWidth="1.5" fill="rgba(212,175,55,0.05)" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 - 22.5) * Math.PI / 180;
        return <circle key={i} cx={200 + Math.cos(angle)*120} cy={200 + Math.sin(angle)*120} r="4" fill="#FFD700" opacity="0.7" />;
      })}
      <circle cx="200" cy="200" r="32" fill="url(#yn_center)" />
      <circle cx="200" cy="200" r="22" fill="url(#yn_inner)" />
      <text x="200" y="205" textAnchor="middle" dominantBaseline="central" fontSize="22" fill="#1a1208" opacity="0.9">ॐ</text>
      <defs>
        <radialGradient id="yn_center" cx="40%" cy="35%"><stop offset="0%" stopColor="#FFF3C4"/><stop offset="100%" stopColor="#E8A800"/></radialGradient>
        <radialGradient id="yn_inner" cx="40%" cy="35%"><stop offset="0%" stopColor="#FFFBEE"/><stop offset="100%" stopColor="#FFD700"/></radialGradient>
      </defs>
    </svg>
  );
}

/* ── Illustration 4: Protection Shield ── */
function ProtectionIllustration() {
  return (
    <svg viewBox="0 0 400 400" fill="none" style={{ width: "100%", maxWidth: 380, height: "auto" }} className="illustration-wrap float-anim">
      <circle cx="200" cy="200" r="185" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.5" />
      <circle cx="200" cy="200" r="168" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        return <line key={i} x1={200 + Math.cos(angle)*82} y1={200 + Math.sin(angle)*82} x2={200 + Math.cos(angle)*162} y2={200 + Math.sin(angle)*162} stroke="#FFD700" strokeWidth={i % 3 === 0 ? "2" : "1"} opacity="0.45" strokeLinecap="round" />;
      })}
      <path d="M200 62 L278 96 L298 188 Q298 268 200 318 Q102 268 102 188 L122 96 Z" fill="url(#sh_grad)" stroke="#D4AF37" strokeWidth="2" opacity="0.9" />
      <path d="M200 90 L258 118 L274 190 Q274 256 200 298 Q126 256 126 190 L142 118 Z" fill="url(#sh_inner)" opacity="0.65" />
      <text x="200" y="205" textAnchor="middle" dominantBaseline="central" fontSize="52" fill="rgba(26,14,0,0.72)">✦</text>
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60) * Math.PI / 180;
        return <circle key={i} cx={200 + Math.cos(angle)*168} cy={200 + Math.sin(angle)*168} r="6" fill="#FFD700" opacity="0.8" />;
      })}
      <text x="200" y="348" textAnchor="middle" fontFamily="serif" fontSize="15" fill="#D4AF37" letterSpacing="5" opacity="0.7">ॐ नमः शिवाय</text>
      <defs>
        <linearGradient id="sh_grad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#FFD700"/><stop offset="100%" stopColor="#B8860B"/></linearGradient>
        <linearGradient id="sh_inner" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#FFF3C4"/><stop offset="100%" stopColor="#FFD700"/></linearGradient>
      </defs>
    </svg>
  );
}

const slides = [
  {
    tag: "✦ 20+ Years of Trusted Guidance ✦",
    title: "Shri Rajyog",
    subtitle: "Expert Astrologer",
    tagline: "You Are Just One Call Away From Solution",
    desc: "Fast, accurate & 100% confidential astrology guidance for love, marriage, career & spiritual healing. Transform your life with ancient Vedic wisdom.",
    badges: [{ icon: "🔒", text: "100% Confidential" }, { icon: "⚡", text: "Instant Solutions" }, { icon: "🌙", text: "Available 24/7" }, { icon: "✅", text: "10,000+ Happy Clients" }],
    Illustration: ZodiacMandala,
  },
  {
    tag: "♥ Love Problem Specialist",
    title: "Love Problem",
    subtitle: "Solution",
    tagline: "Reunite with Your Lost Love in Just 3 Days",
    desc: "Powerful Vedic remedies for ex love back, one-sided love, breakup pain, and clearing all obstacles in your love life — guaranteed results.",
    badges: [{ icon: "💑", text: "Ex Love Back" }, { icon: "💔", text: "Breakup Solution" }, { icon: "🌹", text: "Love Vashikaran" }, { icon: "💍", text: "Love Marriage" }],
    Illustration: LoveIllustration,
  },
  {
    tag: "🔮 Ancient Vedic Methods",
    title: "Vashikaran",
    subtitle: "Specialist",
    tagline: "Attract the Love of Your Life with Sacred Mantras",
    desc: "Authentic Vedic vashikaran techniques to attract your desired person, remove obstacles blocking your happiness, and bring harmony in relationships.",
    badges: [{ icon: "🎯", text: "100% Accurate" }, { icon: "🔒", text: "Strictly Private" }, { icon: "⚡", text: "Fast Results" }, { icon: "🌙", text: "24/7 Available" }],
    Illustration: YantraIllustration,
  },
  {
    tag: "🛡️ Spiritual Protection Expert",
    title: "Black Magic",
    subtitle: "Removal Expert",
    tagline: "Cleanse All Negative Energies from Your Life",
    desc: "Detect and neutralize black magic, evil eye, and negative energies that are blocking your success, love, health, and overall prosperity.",
    badges: [{ icon: "👁️", text: "Evil Eye Removal" }, { icon: "⚡", text: "Instant Cleansing" }, { icon: "🛡️", text: "Full Protection" }, { icon: "✅", text: "Proven Results" }],
    Illustration: ProtectionIllustration,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const isPaused = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  /* Auto-play */
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) setCurrent(c => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setCurrent(i);
  const goPrev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent(c => (c + 1) % slides.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 50 && dy < 80) {
      dx > 0 ? goNext() : goPrev();
    }
  };

  const slide = slides[current];
  const Illustration = slide.Illustration;

  return (
    <section
      id="home"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden", background: "var(--bg-cream)" }}
    >
      {/* Decorative BG */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(255,215,0,0.12) 0%, transparent 55%), radial-gradient(ellipse at 30% 30%, rgba(212,175,55,0.08) 0%, transparent 40%), radial-gradient(ellipse at 50% 90%, rgba(255,200,60,0.07) 0%, transparent 40%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,215,0,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div className="spin-slow" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "min(680px, 95vw)", height: "min(680px, 95vw)", borderRadius: "50%", border: "1px dashed rgba(212,175,55,0.15)", pointerEvents: "none" }} />
      <div className="spin-reverse" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "min(520px, 78vw)", height: "min(520px, 78vw)", borderRadius: "50%", border: "1px solid rgba(212,175,55,0.1)", pointerEvents: "none" }} />

      {/* Slide content */}
      <div
        key={current}
        style={{
          position: "relative", zIndex: 2,
          minHeight: "100vh",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: "120px 24px 100px",
          animation: "heroSlideIn 0.65s ease both",
        }}
      >
        <div style={{ maxWidth: 1200, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 6vw, 80px)", alignItems: "center" }} className="hero-grid">
          {/* Left: Text */}
          <div>
            <div style={{ marginBottom: 22 }}>
              <span className="section-label">{slide.tag}</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5.5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "0.04em", marginBottom: 16, color: "var(--text-primary)" }}>
              <span className="gold-shimmer">{slide.title}</span>
              <br />
              <span style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)", color: "var(--text-secondary)" }}>{slide.subtitle}</span>
            </h1>
            <div className="ornament-sep hero-ornament" style={{ margin: "20px 0", maxWidth: 340, justifyContent: "flex-start" }}>✦</div>
            <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1rem, 2.2vw, 1.35rem)", fontWeight: 600, letterSpacing: "0.05em", color: "var(--gold-deep)", marginBottom: 14 }}>
              {slide.tagline}
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 500, marginBottom: 36 }}>
              {slide.desc}
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
              <a href={`tel:${PHONE}`} className="btn-gold" style={{ padding: "14px 28px", borderRadius: 8, fontSize: "0.82rem" }}>📞 Call Now — Free</a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding: "14px 28px", borderRadius: 8, fontSize: "0.82rem", fontWeight: 700 }}>💬 WhatsApp Now</a>
            </div>
            <div style={{ display: "flex", gap: "clamp(6px, 2vw, 12px)", flexWrap: "wrap" }}>
              {slide.badges.map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-ui)", fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 600, background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: 100, padding: "5px 11px" }}>
                  <span style={{ fontSize: "0.85rem" }}>{item.icon}</span>{item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Illustration />
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 44, height: 44, borderRadius: "50%", background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.4)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: "var(--gold-deep)", lineHeight: 1, transition: "background 0.25s" }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.32)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.15)"; }}
      >‹</button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 44, height: 44, borderRadius: "50%", background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.4)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: "var(--gold-deep)", lineHeight: 1, transition: "background 0.25s" }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.32)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.15)"; }}
      >›</button>

      {/* Dot indicators */}
      <div style={{ position: "absolute", bottom: 38, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{ width: i === current ? 30 : 10, height: 10, borderRadius: 5, background: i === current ? "var(--gold-amber)" : "rgba(212,175,55,0.35)", border: "none", cursor: "pointer", transition: "all 0.35s ease", padding: 0 }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: "var(--text-muted)", fontFamily: "var(--font-ui)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.6 }}>
        <div style={{ width: 1, height: 20, background: "linear-gradient(180deg, var(--gold-warm), transparent)", animation: "float 2s ease-in-out infinite" }} />
        Scroll
      </div>

      <style>{`
        @keyframes heroSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 24px !important; text-align: center; }
          .hero-grid > div:last-child { order: -1; }
          .hero-grid > div:last-child svg { max-width: 220px !important; margin: 0 auto; }
          .hero-ornament { justify-content: center !important; max-width: 100% !important; }
          .hero-grid .btn-gold, .hero-grid .btn-wa { flex: 1; min-width: 140px; justify-content: center; }
        }
        @media (max-width: 480px) {
          .hero-grid > div:last-child svg { max-width: 180px !important; }
        }
      `}</style>
    </section>
  );
}
