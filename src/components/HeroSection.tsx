"use client";
import { useState, useEffect, useRef } from "react";

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

/* ── Art Deco corner marks ── */
function DecoFrame() {
  return (
    <>
      {/* TL */}
      <div style={{ position:"absolute", top:28, left:28, width:56, height:56, borderTop:"1.5px solid rgba(201,165,90,0.7)", borderLeft:"1.5px solid rgba(201,165,90,0.7)", pointerEvents:"none", zIndex:3 }} />
      {/* TR */}
      <div style={{ position:"absolute", top:28, right:28, width:56, height:56, borderTop:"1.5px solid rgba(201,165,90,0.7)", borderRight:"1.5px solid rgba(201,165,90,0.7)", pointerEvents:"none", zIndex:3 }} />
      {/* BL */}
      <div style={{ position:"absolute", bottom:80, left:28, width:56, height:56, borderBottom:"1.5px solid rgba(201,165,90,0.7)", borderLeft:"1.5px solid rgba(201,165,90,0.7)", pointerEvents:"none", zIndex:3 }} />
      {/* BR */}
      <div style={{ position:"absolute", bottom:80, right:28, width:56, height:56, borderBottom:"1.5px solid rgba(201,165,90,0.7)", borderRight:"1.5px solid rgba(201,165,90,0.7)", pointerEvents:"none", zIndex:3 }} />
    </>
  );
}

/* ── Constellation SVG for gradient slides ── */
function ConstellationBg({ color = "#1B0F35" }: { color?: string }) {
  const stars: {cx:number;cy:number;r:number}[] = [];
  for (let i = 0; i < 80; i++) {
    stars.push({ cx: Math.random()*100, cy: Math.random()*100, r: Math.random()*1.2+0.3 });
  }
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"
      style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.55 }}>
      {stars.map((s,i) => (
        <circle key={i} cx={`${s.cx}%`} cy={`${s.cy}%`} r={s.r} fill="rgba(201,165,90,0.6)" />
      ))}
      {/* A few connecting lines */}
      {[[10,20,30,15],[50,10,70,30],[20,60,45,50],[60,70,80,55],[15,80,40,75]].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke="rgba(201,165,90,0.15)" strokeWidth="0.3"/>
      ))}
    </svg>
  );
}

/* ── Mandala ring for dark slides ── */
function MandalaRing() {
  return (
    <svg viewBox="0 0 400 400" fill="none"
      style={{ position:"absolute", right:"-5%", top:"50%", transform:"translateY(-50%)", width:"min(420px,55vw)", height:"auto", opacity:0.18, pointerEvents:"none" }}>
      <circle cx="200" cy="200" r="190" stroke="#C9A55A" strokeWidth="0.8" strokeDasharray="6 6"/>
      <circle cx="200" cy="200" r="160" stroke="#C9A55A" strokeWidth="0.5"/>
      <circle cx="200" cy="200" r="120" stroke="#F2C94C" strokeWidth="0.8" strokeDasharray="2 8"/>
      <circle cx="200" cy="200" r="80"  stroke="#C9A55A" strokeWidth="0.5"/>
      <circle cx="200" cy="200" r="40"  stroke="#F2C94C" strokeWidth="1" fill="none"/>
      {Array.from({length:12}).map((_,i)=>{
        const a=(i*30-90)*Math.PI/180;
        return <line key={i} x1={200+Math.cos(a)*44} y1={200+Math.sin(a)*44} x2={200+Math.cos(a)*188} y2={200+Math.sin(a)*188} stroke="#C9A55A" strokeWidth="0.4" opacity="0.7"/>;
      })}
      {Array.from({length:12}).map((_,i)=>{
        const a=(i*30)*Math.PI/180;
        return <circle key={i} cx={200+Math.cos(a)*160} cy={200+Math.sin(a)*160} r="4" fill="#C9A55A" opacity="0.8"/>;
      })}
      <text x="200" y="207" textAnchor="middle" dominantBaseline="central" fontSize="28" fill="#C9A55A" fontFamily="serif" opacity="0.9">ॐ</text>
    </svg>
  );
}

const slides = [
  {
    image: "/hero-banner.jpg",
    gradient: null,
    overlay: "linear-gradient(110deg, rgba(6,3,12,0.82) 0%, rgba(6,3,12,0.55) 55%, rgba(6,3,12,0.2) 100%)",
    eyebrow: "5th Generation Vedic Astrologer",
    title: "Vikram Bhai Joshi",
    sub: "Best Ambaji Upasak",
    tagline: "Your Faithful Companion in Astrology",
    desc: "25+ years of Vedic wisdom. Serving all religions globally from Ahmedabad, Gujarat. 90,000+ consultations completed with honesty and unwavering commitment.",
    badges: [{ v:"25+", l:"Years" }, { v:"90K+", l:"Clients" }, { v:"100%", l:"Private" }, { v:"24/7", l:"Available" }],
  },
  {
    image: null,
    gradient: "radial-gradient(ellipse at 25% 50%, #1C0E38 0%, #0E0820 45%, #06030C 100%)",
    overlay: null,
    eyebrow: "Horoscope Compatibility Expert",
    title: "Kundali Matching",
    sub: "Astakoota Gun Milan System",
    tagline: "Find Your Perfect Life Partner",
    desc: "Expert 8-Gunas Kundali analysis for marriage compatibility. Manglik dosha remedies, optimal timing identification and comprehensive life-partner guidance.",
    badges: [{ v:"8", l:"Gunas" }, { v:"36", l:"Points" }, { v:"100%", l:"Accurate" }, { v:"Online", l:"Consult" }],
  },
  {
    image: "/love-couple.jpg",
    gradient: null,
    overlay: "linear-gradient(110deg, rgba(6,3,12,0.85) 0%, rgba(6,3,12,0.6) 55%, rgba(6,3,12,0.25) 100%)",
    eyebrow: "Love Problem Specialist — 25+ Years",
    title: "Love Marriage",
    sub: "Problem Solution",
    tagline: "Remove Every Obstacle from Your Love Life",
    desc: "Specialized Vedic solutions for love marriages, intercaste unions, breakups, ex-partner issues and parental resistance. Gemstones, yantras and powerful remedies.",
    badges: [{ v:"Ex", l:"Love Back" }, { v:"Inter", l:"Caste" }, { v:"Break", l:"Up Fix" }, { v:"Parent", l:"Approval" }],
  },
  {
    image: null,
    gradient: "radial-gradient(ellipse at 75% 40%, #0F1535 0%, #08081A 45%, #06030C 100%)",
    overlay: null,
    eyebrow: "Spiritual Protection Expert",
    title: "Black Magic",
    sub: "Removal & Protection",
    tagline: "Cleanse All Negative Energies from Your Life",
    desc: "Expert detection and neutralization of black magic, evil eye and negative forces using potent Vedic mantras, yantras and rituals. Complete spiritual protection.",
    badges: [{ v:"Evil", l:"Eye Fix" }, { v:"Full", l:"Protect" }, { v:"Fast", l:"Results" }, { v:"100%", l:"Proven" }],
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const isPaused = useRef(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) goNext();
    }, 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const goTo = (i: number) => {
    setPrev(current);
    setCurrent(i);
  };
  const goPrev = () => goTo((current - 1 + slides.length) % slides.length);
  const goNext = () => goTo((current + 1) % slides.length);

  const s = slides[current];

  return (
    <section
      id="home"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
      onTouchStart={e => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        const dx = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 50) dx > 0 ? goNext() : goPrev();
      }}
      style={{ position:"relative", height:"100vh", minHeight:640, overflow:"hidden", background:"#06030C" }}
    >
      {/* ── Slide backgrounds ── */}
      {slides.map((sl, i) => (
        <div
          key={i}
          style={{
            position:"absolute", inset:0,
            backgroundImage: sl.image ? `url(${sl.image})` : undefined,
            background: sl.gradient ?? undefined,
            backgroundSize:"cover",
            backgroundPosition:"center top",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s cubic-bezier(0.4,0,0.2,1)",
            zIndex: 0,
          }}
        >
          {/* Dark directional overlay */}
          {sl.overlay && (
            <div style={{ position:"absolute", inset:0, background:sl.overlay }} />
          )}
          {/* Bottom vignette */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg, transparent 40%, rgba(6,3,12,0.7) 100%)" }} />
          {/* Top gradient for navbar readability */}
          <div style={{ position:"absolute", top:0, left:0, right:0, height:160, background:"linear-gradient(180deg, rgba(6,3,12,0.5) 0%, transparent 100%)" }} />
          {/* Constellation for gradient slides */}
          {!sl.image && <ConstellationBg />}
          {/* Mandala decoration for gradient slides */}
          {!sl.image && <MandalaRing />}
        </div>
      ))}

      {/* ── Art Deco Frame ── */}
      <DecoFrame />

      {/* ── Slide Content ── */}
      <div
        key={current}
        style={{
          position:"relative", zIndex:2,
          height:"100%",
          display:"flex", alignItems:"center",
          padding:"100px 32px 100px",
          animation:"heroIn 0.8s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <div style={{ maxWidth:1280, margin:"0 auto", width:"100%" }}>
          <div style={{ maxWidth:700 }}>
            {/* Eyebrow */}
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:24 }}>
              <div style={{ height:1, width:40, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.8))" }} />
              <span style={{
                fontFamily:"var(--font-ui)", fontSize:"0.6rem", fontWeight:700,
                letterSpacing:"0.35em", textTransform:"uppercase", color:"var(--gold-warm)",
              }}>
                {s.eyebrow}
              </span>
              <div style={{ height:1, width:40, background:"linear-gradient(90deg, rgba(201,165,90,0.8), transparent)" }} />
            </div>

            {/* Main Title */}
            <h1 style={{
              fontFamily:"var(--font-display)",
              fontSize:"clamp(2.6rem,7vw,5.2rem)",
              fontWeight:700,
              letterSpacing:"0.06em",
              lineHeight:1.05,
              color:"#F2E8D5",
              marginBottom:8,
              textShadow:"0 4px 40px rgba(0,0,0,0.8)",
            }}>
              {s.title}
            </h1>

            {/* Subtitle */}
            <h2 style={{
              fontFamily:"var(--font-display)",
              fontSize:"clamp(1rem,2.5vw,1.8rem)",
              fontWeight:400,
              letterSpacing:"0.14em",
              color:"rgba(201,165,90,0.9)",
              marginBottom:24,
              textShadow:"0 2px 20px rgba(0,0,0,0.6)",
            }}>
              {s.sub}
            </h2>

            {/* Gold divider */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <div style={{ height:1, width:60, background:"linear-gradient(90deg, rgba(201,165,90,0.8), transparent)" }} />
              <span style={{ color:"rgba(201,165,90,0.6)", fontSize:"0.55rem", letterSpacing:"0.4em", fontFamily:"var(--font-ui)", textTransform:"uppercase" }}>✦</span>
              <div style={{ height:1, width:30, background:"rgba(201,165,90,0.3)" }} />
            </div>

            {/* Tagline */}
            <p style={{
              fontFamily:"var(--font-body)",
              fontSize:"clamp(1.05rem,2.2vw,1.4rem)",
              fontWeight:600,
              letterSpacing:"0.04em",
              color:"rgba(242,232,213,0.9)",
              marginBottom:12,
              fontStyle:"italic",
            }}>
              &ldquo;{s.tagline}&rdquo;
            </p>

            {/* Description */}
            <p style={{
              fontFamily:"var(--font-body)",
              fontSize:"clamp(0.95rem,1.8vw,1.1rem)",
              color:"rgba(196,168,122,0.85)",
              lineHeight:1.8,
              maxWidth:560,
              marginBottom:36,
            }}>
              {s.desc}
            </p>

            {/* CTA Buttons */}
            <div style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:40 }}>
              <a href={`tel:${PHONE}`} className="btn-gold"
                style={{ padding:"14px 32px", borderRadius:0, fontSize:"0.65rem", letterSpacing:"0.2em" }}>
                📞 Book Consultation
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa"
                style={{ padding:"14px 28px", borderRadius:0, fontSize:"0.65rem", letterSpacing:"0.12em" }}>
                💬 WhatsApp Now
              </a>
            </div>

            {/* Badges */}
            <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
              {s.badges.map((b) => (
                <div key={b.l} style={{
                  display:"flex", flexDirection:"column", alignItems:"center",
                  padding:"10px 18px",
                  background:"rgba(6,3,12,0.6)",
                  border:"1px solid rgba(201,165,90,0.3)",
                  backdropFilter:"blur(8px)",
                  minWidth:72,
                }}>
                  <span style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1rem,2.5vw,1.4rem)", fontWeight:700, color:"#F2C94C", lineHeight:1, letterSpacing:"0.05em" }}>{b.v}</span>
                  <span style={{ fontFamily:"var(--font-ui)", fontSize:"0.5rem", letterSpacing:"0.25em", textTransform:"uppercase", color:"rgba(201,165,90,0.7)", marginTop:4 }}>{b.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Prev/Next arrows ── */}
      <button onClick={goPrev} aria-label="Previous"
        style={{ position:"absolute", left:20, top:"50%", transform:"translateY(-50%)", zIndex:10, width:48, height:48, background:"rgba(6,3,12,0.6)", border:"1px solid rgba(201,165,90,0.4)", cursor:"pointer", color:"#C9A55A", fontSize:"1.4rem", backdropFilter:"blur(8px)", transition:"all 0.3s", display:"flex", alignItems:"center", justifyContent:"center" }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="rgba(201,165,90,0.2)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="rgba(6,3,12,0.6)"; }}
      >‹</button>
      <button onClick={goNext} aria-label="Next"
        style={{ position:"absolute", right:20, top:"50%", transform:"translateY(-50%)", zIndex:10, width:48, height:48, background:"rgba(6,3,12,0.6)", border:"1px solid rgba(201,165,90,0.4)", cursor:"pointer", color:"#C9A55A", fontSize:"1.4rem", backdropFilter:"blur(8px)", transition:"all 0.3s", display:"flex", alignItems:"center", justifyContent:"center" }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="rgba(201,165,90,0.2)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="rgba(6,3,12,0.6)"; }}
      >›</button>

      {/* ── Slide progress & dots ── */}
      <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", zIndex:10, display:"flex", alignItems:"center", gap:10 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i+1}`}
            style={{
              width: i===current ? 36 : 8, height:8,
              background: i===current ? "linear-gradient(90deg, #C9A55A, #F2C94C)" : "rgba(201,165,90,0.3)",
              border:"none", cursor:"pointer", transition:"all 0.4s cubic-bezier(0.4,0,0.2,1)", padding:0,
            }}
          />
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div style={{ position:"absolute", bottom:34, right:36, zIndex:10, fontFamily:"var(--font-ui)", fontSize:"0.55rem", letterSpacing:"0.3em", color:"rgba(201,165,90,0.6)" }}>
        {String(current+1).padStart(2,"0")} / {String(slides.length).padStart(2,"0")}
      </div>

      <style>{`
        @keyframes heroIn {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @media (max-width:768px) {
          #home h1 { font-size:2.4rem !important; }
          #home h2 { font-size:1rem !important; }
        }
      `}</style>
    </section>
  );
}
