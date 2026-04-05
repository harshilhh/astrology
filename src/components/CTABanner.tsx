"use client";
const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

export default function CTABanner() {
  return (
    <section id="contact" style={{ background:"var(--bg-light-yellow)", padding:"100px 32px", position:"relative", overflow:"hidden", textAlign:"center" }}>
      {/* Layered bg with green glow */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 50%, rgba(165,32,32,0.07) 0%, transparent 60%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:0, right:0, width:300, height:300, background:"radial-gradient(circle, rgba(165,32,32,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:0, left:0, width:250, height:250, background:"radial-gradient(circle, rgba(165,32,32,0.04) 0%, transparent 70%)", pointerEvents:"none" }} />

      {/* Top / bottom hairlines */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(165,32,32,0.5), rgba(181,36,36,0.7), rgba(165,32,32,0.5), transparent)" }} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(165,32,32,0.3), transparent)" }} />

      {/* Art Deco outer corners */}
      <div style={{ position:"absolute", top:20, left:20, width:60, height:60, borderTop:"1px solid rgba(165,32,32,0.4)", borderLeft:"1px solid rgba(165,32,32,0.4)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:20, right:20, width:60, height:60, borderTop:"1px solid rgba(165,32,32,0.4)", borderRight:"1px solid rgba(165,32,32,0.4)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:20, left:20, width:60, height:60, borderBottom:"1px solid rgba(165,32,32,0.4)", borderLeft:"1px solid rgba(165,32,32,0.4)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:20, right:20, width:60, height:60, borderBottom:"1px solid rgba(165,32,32,0.4)", borderRight:"1px solid rgba(165,32,32,0.4)", pointerEvents:"none" }} />

      {/* Mandala ring decoration */}
      <div style={{ position:"absolute", right:"-8%", top:"50%", transform:"translateY(-50%)", width:"min(360px,45vw)", height:"min(360px,45vw)", pointerEvents:"none" }}>
        <svg viewBox="0 0 200 200" fill="none" style={{ width:"100%", height:"100%", opacity:0.07 }}>
          <circle cx="100" cy="100" r="96" stroke="#A52020" strokeWidth="0.8"/>
          <circle cx="100" cy="100" r="76" stroke="#A52020" strokeWidth="0.5" strokeDasharray="4 6"/>
          <circle cx="100" cy="100" r="52" stroke="#B52424" strokeWidth="0.8"/>
          <circle cx="100" cy="100" r="28" stroke="#A52020" strokeWidth="0.5"/>
          {Array.from({length:12}).map((_,i)=>{const a=(i*30)*Math.PI/180;return <line key={i} x1={100+Math.cos(a)*28} y1={100+Math.sin(a)*28} x2={100+Math.cos(a)*96} y2={100+Math.sin(a)*96} stroke="#A52020" strokeWidth="0.3"/>;} )}
        </svg>
      </div>

      <div style={{ maxWidth:700, margin:"0 auto", position:"relative", zIndex:1 }}>
        {/* Eyebrow */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:28 }}>
          <div style={{ height:1, width:40, background:"linear-gradient(90deg, transparent, rgba(165,32,32,0.6))" }} />
          <span className="section-label">⚡ Limited Free Consultations Available</span>
          <div style={{ height:1, width:40, background:"linear-gradient(90deg, rgba(165,32,32,0.6), transparent)" }} />
        </div>

        <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2rem,5.5vw,3.8rem)", fontWeight:700, letterSpacing:"0.06em", lineHeight:1.1, marginBottom:20, color:"#2E1A1A" }}>
          Your Solution <span className="gold-text">Awaits You</span>
        </h2>

        <p style={{ fontFamily:"var(--font-body)", fontSize:"clamp(1rem,2vw,1.2rem)", color:"rgba(94,45,45,0.85)", lineHeight:1.85, marginBottom:16 }}>
          Stop suffering in silence. 90,000+ people have already transformed their lives with Vikram Bhai Joshi&apos;s guidance. Your situation — no matter how difficult — has a solution.
        </p>

        <p style={{ fontFamily:"var(--font-body)", fontSize:"clamp(1.05rem,2.3vw,1.4rem)", fontWeight:600, fontStyle:"italic", letterSpacing:"0.04em", color:"rgba(165,32,32,0.9)", marginBottom:48 }}>
          &ldquo;Call Us For Immediate Solution — Give A New Look To Your Life.&rdquo;
        </p>

        {/* Buttons */}
        <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap", marginBottom:36 }} className="cta-btns">
          <a href={`tel:${PHONE}`}
            style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"16px 40px", background:"transparent", border:"1px solid rgba(165,32,32,0.6)", color:"#2E1A1A", fontFamily:"var(--font-ui)", fontSize:"0.84rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", textDecoration:"none", transition:"all 0.3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="rgba(165,32,32,0.1)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(165,32,32,1)"; (e.currentTarget as HTMLElement).style.transform="translateY(-3px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="transparent"; (e.currentTarget as HTMLElement).style.borderColor="rgba(165,32,32,0.6)"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
          >
            📞 Call Now — FREE
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa"
            style={{ padding:"16px 40px", borderRadius:0, fontSize:"0.84rem", letterSpacing:"0.12em" }}>
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div style={{ display:"flex", gap:24, justifyContent:"center", flexWrap:"wrap" }}>
          {["🔒 100% Private", "⚡ Instant Reply", "🌙 Available Now", "❤️ Free First Call"].map(item => (
            <span key={item} style={{ fontFamily:"var(--font-ui)", fontSize:"0.76rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(165,32,32,0.7)", fontWeight:700 }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
