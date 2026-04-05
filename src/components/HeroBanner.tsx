"use client";
import Image from "next/image";

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const services = [
  { icon: "♥", text: "Horoscope Match Making" },
  { icon: "🌹", text: "Love Vashikaran" },
  { icon: "💒", text: "Love & Intercaste Marriage" },
  { icon: "🏠", text: "Husband-Wife Dispute" },
  { icon: "⚖️", text: "Divorce Matters" },
  { icon: "💔", text: "Breakup — Get Ex Back" },
  { icon: "👶", text: "Childbirth Problems" },
  { icon: "💏", text: "Extra Marital Affair" },
];

export default function HeroBanner() {
  return (
    <section style={{ background:"var(--bg-light-yellow)", padding:"88px 32px", position:"relative", overflow:"hidden" }}>
      {/* Decorative border lines */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(232,86,42,0.5), transparent)" }} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(232,86,42,0.3), transparent)" }} />

      {/* BG glow */}
      <div style={{ position:"absolute", top:0, right:0, width:400, height:400, background:"radial-gradient(circle at 80% 20%, rgba(232,86,42,0.06) 0%, transparent 60%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:0, left:0, width:300, height:300, background:"radial-gradient(circle at 20% 80%, rgba(232,86,42,0.05) 0%, transparent 60%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(32px,6vw,80px)", alignItems:"center", position:"relative", zIndex:1 }} className="banner-grid">

        {/* Left: Photo */}
        <div style={{ position:"relative" }}>
          {/* Art Deco frame */}
          <div style={{ position:"absolute", inset:-12, zIndex:0, pointerEvents:"none" }}>
            <div style={{ position:"absolute", top:0, left:0, width:40, height:40, borderTop:"1.5px solid rgba(232,86,42,0.6)", borderLeft:"1.5px solid rgba(232,86,42,0.6)" }} />
            <div style={{ position:"absolute", top:0, right:0, width:40, height:40, borderTop:"1.5px solid rgba(232,86,42,0.6)", borderRight:"1.5px solid rgba(232,86,42,0.6)" }} />
            <div style={{ position:"absolute", bottom:0, left:0, width:40, height:40, borderBottom:"1.5px solid rgba(232,86,42,0.6)", borderLeft:"1.5px solid rgba(232,86,42,0.6)" }} />
            <div style={{ position:"absolute", bottom:0, right:0, width:40, height:40, borderBottom:"1.5px solid rgba(232,86,42,0.6)", borderRight:"1.5px solid rgba(232,86,42,0.6)" }} />
          </div>
          <div style={{ position:"relative", overflow:"hidden", border:"1px solid rgba(232,86,42,0.3)", boxShadow:"0 16px 60px rgba(0,0,0,0.12), 0 0 40px rgba(232,86,42,0.08)" }}>
            <Image
              src="/hero-banner.jpg"
              alt="Vikram Bhai Joshi — Best Ambaji Upasak Astrologer"
              width={520} height={520}
              style={{ width:"100%", height:"auto", display:"block" }}
              priority
            />
            {/* Overlay at bottom */}
            <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"30%", background:"linear-gradient(180deg, transparent, rgba(46,26,26,0.6))" }} />
            {/* Name badge */}
            <div style={{ position:"absolute", bottom:20, left:20, right:20, background:"rgba(255,255,255,0.92)", backdropFilter:"blur(12px)", border:"1px solid rgba(232,86,42,0.35)", padding:"14px 18px", display:"flex", alignItems:"center", gap:14 }}>
              <div style={{ width:40, height:40, borderRadius:"50%", background:"radial-gradient(circle, rgba(232,86,42,0.2) 0%, rgba(232,86,42,0.06) 100%)", border:"1px solid rgba(232,86,42,0.5)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", flexShrink:0 }}>🔮</div>
              <div>
                <div style={{ fontFamily:"var(--font-display)", fontSize:"0.96rem", fontWeight:700, letterSpacing:"0.12em", color:"#2E1A1A" }}>Vikram Bhai Joshi</div>
                <div style={{ fontFamily:"var(--font-ui)", fontSize:"0.52rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"rgba(232,86,42,0.75)", marginTop:2 }}>Best Ambaji Upasak Astrologer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
            <div style={{ height:1, width:32, background:"linear-gradient(90deg, rgba(232,86,42,0.8), transparent)" }} />
            <span className="section-label">Trusted Love Guru</span>
          </div>

          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3.5vw,2.8rem)", fontWeight:700, letterSpacing:"0.06em", lineHeight:1.15, marginBottom:10, marginTop:14, color:"var(--text-primary)" }}>
            Predict Solutions to{" "}
            <span className="gold-text">All Life Problems</span>
          </h2>

          <p style={{ fontFamily:"var(--font-body)", fontSize:"1rem", color:"var(--text-muted)", marginBottom:28, lineHeight:1.8 }}>
            5th generation Vedic astrologer serving all religions globally. Traditional wisdom meets modern guidance for lasting solutions.
          </p>

          <div style={{ height:1, background:"linear-gradient(90deg, rgba(232,86,42,0.4), transparent)", marginBottom:28 }} />

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:32 }}>
            {services.map((item) => (
              <div key={item.text} style={{
                display:"flex", alignItems:"center", gap:10,
                padding:"10px 14px",
                background:"rgba(232,86,42,0.04)",
                border:"1px solid rgba(232,86,42,0.15)",
                transition:"all 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="rgba(232,86,42,0.09)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(232,86,42,0.35)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="rgba(232,86,42,0.04)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(232,86,42,0.15)"; }}
              >
                <span style={{ fontSize:"1rem", flexShrink:0 }}>{item.icon}</span>
                <span style={{ fontFamily:"var(--font-ui)", fontSize:"0.84rem", letterSpacing:"0.06em", color:"var(--text-secondary)", fontWeight:600 }}>{item.text}</span>
              </div>
            ))}
          </div>

          <div style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:20 }}>
            <a href={`tel:${PHONE}`} className="btn-gold" style={{ padding:"14px 28px", borderRadius:0, fontSize:"1.02rem" }}>
              📞 Get a Quick Solution
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding:"14px 24px", borderRadius:0, fontSize:"1.02rem" }}>
              💬 WhatsApp
            </a>
          </div>

          <div style={{ fontFamily:"var(--font-ui)", fontSize:"1rem", fontWeight:700, letterSpacing:"0.18em", color:"var(--gold-warm)" }}>
            📞 {PHONE}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:768px) {
          .banner-grid { grid-template-columns:1fr !important; gap:32px !important; }
        }
      `}</style>
    </section>
  );
}
