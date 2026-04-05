"use client";
import { useState } from "react";

const testimonials = [
  { name: "Priya Sharma", location: "Delhi", stars: 5, text: "I had lost all hope of getting my ex back after 2 years of separation. Vikram Bhai's guidance and remedies worked like a miracle. We are happily together now. I can never thank him enough.", service: "Ex Love Back", avatar: "P" },
  { name: "Rajesh Kumar", location: "Mumbai", stars: 5, text: "My business had been in loss for 3 years and I was drowning in debt. After the consultation and performing the remedies, things turned around within a month. Highly recommended!", service: "Business & Finance", avatar: "R" },
  { name: "Anjali Singh", location: "Jaipur", stars: 5, text: "Our parents were completely against our intercaste marriage. Vikram Bhai helped us in every way — our parents gave their blessings within weeks! It felt nothing short of a miracle.", service: "Love Marriage", avatar: "A" },
  { name: "Mohan Verma", location: "Pune", stars: 5, text: "Constant fights with my wife had pushed us to the edge of divorce. After just two sessions with Vikram Bhai, there was a visible change. Our home is peaceful again. God bless him.", service: "Husband-Wife Dispute", avatar: "M" },
  { name: "Sunita Patel", location: "Ahmedabad", stars: 5, text: "I was suffering from severe black magic for years with unexplained problems in every area of life. Vikram Bhai identified it instantly and removed it. I feel like a new person now.", service: "Black Magic Removal", avatar: "S" },
  { name: "Vikram Rao", location: "Hyderabad", stars: 5, text: "I was stuck in my career for 5 years with no growth. After following the astrological remedies, I got a promotion and a 40% salary hike within 3 months. Incredible experience.", service: "Career Growth", avatar: "V" },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="testimonials" style={{ background:"var(--bg-cream)", padding:"96px 32px", position:"relative", overflow:"hidden" }}>
      {/* BG atmosphere */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 40%, rgba(165,32,32,0.04) 0%, transparent 60%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(165,32,32,0.4), transparent)" }} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(165,32,32,0.25), transparent)" }} />

      {/* Decorative mandala left */}
      <div style={{ position:"absolute", left:"-6%", top:"50%", transform:"translateY(-50%)", width:"min(300px,38vw)", height:"min(300px,38vw)", pointerEvents:"none" }}>
        <svg viewBox="0 0 200 200" fill="none" style={{ width:"100%", height:"100%", opacity:0.06 }}>
          <circle cx="100" cy="100" r="96" stroke="#A52020" strokeWidth="0.8"/>
          <circle cx="100" cy="100" r="72" stroke="#A52020" strokeWidth="0.5" strokeDasharray="3 5"/>
          <circle cx="100" cy="100" r="48" stroke="#B52424" strokeWidth="0.8"/>
          <circle cx="100" cy="100" r="24" stroke="#A52020" strokeWidth="0.5"/>
          {Array.from({length:8}).map((_,i)=>{const a=(i*45)*Math.PI/180;return <line key={i} x1={100+Math.cos(a)*24} y1={100+Math.sin(a)*24} x2={100+Math.cos(a)*96} y2={100+Math.sin(a)*96} stroke="#A52020" strokeWidth="0.4"/>;} )}
        </svg>
      </div>

      <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>
        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:72 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:16 }}>
            <div style={{ height:1, width:48, background:"linear-gradient(90deg, transparent, rgba(165,32,32,0.6))" }} />
            <span className="section-label">Client Testimonials</span>
            <div style={{ height:1, width:48, background:"linear-gradient(90deg, rgba(165,32,32,0.6), transparent)" }} />
          </div>
          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.8rem,4.5vw,3rem)", fontWeight:700, letterSpacing:"0.08em", lineHeight:1.2, marginBottom:8, marginTop:16, color:"var(--text-primary)" }}>
            Real People, <span className="gold-text">Real Transformations</span>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div style={{ background:"var(--card-bg)", border:"1px solid rgba(165,32,32,0.25)", padding:"clamp(28px,5vw,52px)", marginBottom:40, position:"relative", maxWidth:800, margin:"0 auto 40px", boxShadow:"0 20px 60px rgba(0,0,0,0.07), 0 0 40px rgba(165,32,32,0.06)" }}>
          {/* Art Deco corners */}
          <div style={{ position:"absolute", top:0, left:0, width:32, height:32, borderTop:"1px solid rgba(165,32,32,0.6)", borderLeft:"1px solid rgba(165,32,32,0.6)" }} />
          <div style={{ position:"absolute", top:0, right:0, width:32, height:32, borderTop:"1px solid rgba(165,32,32,0.6)", borderRight:"1px solid rgba(165,32,32,0.6)" }} />
          <div style={{ position:"absolute", bottom:0, left:0, width:32, height:32, borderBottom:"1px solid rgba(165,32,32,0.6)", borderLeft:"1px solid rgba(165,32,32,0.6)" }} />
          <div style={{ position:"absolute", bottom:0, right:0, width:32, height:32, borderBottom:"1px solid rgba(165,32,32,0.6)", borderRight:"1px solid rgba(165,32,32,0.6)" }} />
          {/* Green top bar */}
          <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg, transparent, #B52424, transparent)" }} />

          {/* Large quote */}
          <div style={{ fontFamily:"Georgia, serif", fontSize:"4rem", color:"rgba(165,32,32,0.15)", lineHeight:1, userSelect:"none", marginBottom:8 }}>&ldquo;</div>

          <p style={{ fontFamily:"var(--font-body)", fontSize:"clamp(1.05rem,2vw,1.25rem)", color:"var(--text-secondary)", lineHeight:1.9, fontStyle:"italic", marginBottom:28 }}>
            {t.text}
          </p>

          <div style={{ height:1, background:"linear-gradient(90deg, transparent, rgba(165,32,32,0.35), transparent)", marginBottom:24 }} />

          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
            <div style={{ display:"flex", alignItems:"center", gap:14 }}>
              <div style={{ width:48, height:48, border:"1px solid rgba(165,32,32,0.4)", background:"radial-gradient(circle, rgba(165,32,32,0.15) 0%, rgba(165,32,32,0.05) 100%)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-display)", fontSize:"1.2rem", fontWeight:700, color:"var(--gold-warm)" }}>
                {t.avatar}
              </div>
              <div>
                <div style={{ fontFamily:"var(--font-display)", fontSize:"1.02rem", fontWeight:700, letterSpacing:"0.08em", color:"var(--text-primary)", marginBottom:3 }}>{t.name}</div>
                <div style={{ fontFamily:"var(--font-ui)", fontSize:"0.76rem", color:"rgba(165,32,32,0.65)", letterSpacing:"0.15em", textTransform:"uppercase" }}>{t.location} · {t.service}</div>
              </div>
            </div>
            <div className="stars-rating" style={{ fontSize:"1.1rem" }}>{"★".repeat(t.stars)}</div>
          </div>
        </div>

        {/* Dot navigation */}
        <div style={{ display:"flex", justifyContent:"center", gap:10, marginBottom:48 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ width: i===active ? 36 : 10, height:10, background: i===active ? "linear-gradient(90deg, #6B0E0E, #B52424)" : "rgba(165,32,32,0.25)", border:"none", cursor:"pointer", transition:"all 0.3s", padding:0 }} />
          ))}
        </div>

        {/* Mini testimonial grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:2 }}>
          {testimonials.map((t, i) => (
            <button key={t.name} onClick={() => setActive(i)} style={{ padding:"22px", textAlign:"left", border: i===active ? "1px solid rgba(165,32,32,0.5)" : "1px solid rgba(165,32,32,0.12)", cursor:"pointer", background: i===active ? "rgba(165,32,32,0.06)" : "var(--card-bg)", width:"100%", transition:"all 0.25s ease", outline:"none" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                <div style={{ width:34, height:34, border:"1px solid rgba(165,32,32,0.35)", background:"rgba(165,32,32,0.08)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-display)", fontSize:"0.96rem", fontWeight:700, color:"var(--gold-warm)", flexShrink:0 }}>
                  {t.avatar}
                </div>
                <div className="stars-rating" style={{ fontSize:"1.04rem" }}>{"★".repeat(t.stars)}</div>
              </div>
              <p style={{ fontFamily:"var(--font-body)", fontSize:"1rem", color:"var(--text-muted)", lineHeight:1.65, marginBottom:10, fontStyle:"italic", display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical", overflow:"hidden" }}>
                {t.text}
              </p>
              <div style={{ fontFamily:"var(--font-ui)", fontSize:"0.76rem", color:"rgba(165,32,32,0.65)", letterSpacing:"0.12em", textTransform:"uppercase" }}>
                — {t.name}, {t.location}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
