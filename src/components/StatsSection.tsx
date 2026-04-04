"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 25, suffix: "+", label: "Years Experience", icon: "⭐", desc: "Vedic practice" },
  { num: 90000, suffix: "+", label: "Consultations", icon: "🤝", desc: "Lives transformed" },
  { num: 100, suffix: "%", label: "Privacy Guarantee", icon: "🔒", desc: "Strictly confidential" },
  { num: 24, suffix: "/7", label: "Quick Booking", icon: "📞", desc: "Always available" },
];

function StatItem({ num, suffix, label, icon, desc, active }: {
  num:number; suffix:string; label:string; icon:string; desc:string; active:boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const duration = 2400;
    const step = (num / duration) * 16;
    const timer = setInterval(() => {
      current += step;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [active, num]);

  return (
    <div
      className="mystical-card"
      style={{ borderRadius:0, padding:"40px 28px", textAlign:"center", position:"relative", overflow:"hidden" }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 60px rgba(0,0,0,0.7), 0 0 40px rgba(201,165,90,0.15)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
      }}
    >
      {/* Background radial glow */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 50% 0%, rgba(201,165,90,0.06) 0%, transparent 65%)", pointerEvents:"none" }} />

      {/* Icon circle */}
      <div style={{ width:60, height:60, margin:"0 auto 20px", position:"relative" }}>
        <div style={{ width:60, height:60, border:"1px solid rgba(201,165,90,0.35)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.6rem", background:"rgba(201,165,90,0.06)", position:"relative" }}>
          {icon}
          {/* Corner marks */}
          <div style={{ position:"absolute", top:-4, left:-4, width:10, height:10, borderTop:"1px solid rgba(201,165,90,0.7)", borderLeft:"1px solid rgba(201,165,90,0.7)" }} />
          <div style={{ position:"absolute", top:-4, right:-4, width:10, height:10, borderTop:"1px solid rgba(201,165,90,0.7)", borderRight:"1px solid rgba(201,165,90,0.7)" }} />
          <div style={{ position:"absolute", bottom:-4, left:-4, width:10, height:10, borderBottom:"1px solid rgba(201,165,90,0.7)", borderLeft:"1px solid rgba(201,165,90,0.7)" }} />
          <div style={{ position:"absolute", bottom:-4, right:-4, width:10, height:10, borderBottom:"1px solid rgba(201,165,90,0.7)", borderRight:"1px solid rgba(201,165,90,0.7)" }} />
        </div>
      </div>

      {/* Number */}
      <div style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2.4rem,5vw,3.4rem)", fontWeight:700, lineHeight:1, marginBottom:8 }} className="gold-text">
        {count.toLocaleString()}<span>{suffix}</span>
      </div>

      {/* Label */}
      <div style={{ fontFamily:"var(--font-ui)", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--text-primary)", marginBottom:6 }}>
        {label}
      </div>
      <div style={{ fontFamily:"var(--font-body)", fontSize:"0.85rem", color:"var(--text-muted)", fontStyle:"italic" }}>
        {desc}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background:"var(--bg-cream)", padding:"88px 32px", position:"relative", overflow:"hidden" }}>
      {/* Decorative lines */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.4), transparent)" }} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.3), transparent)" }} />
      {/* BG glow blobs */}
      <div style={{ position:"absolute", top:-60, right:-60, width:240, height:240, borderRadius:"50%", background:"radial-gradient(circle, rgba(201,165,90,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:-60, left:-60, width:200, height:200, borderRadius:"50%", background:"radial-gradient(circle, rgba(201,165,90,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", position:"relative" }}>
        <div style={{ textAlign:"center", marginBottom:56 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:16 }}>
            <div style={{ height:1, width:48, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.6))" }} />
            <span className="section-label">Our Track Record</span>
            <div style={{ height:1, width:48, background:"linear-gradient(90deg, rgba(201,165,90,0.6), transparent)" }} />
          </div>
          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,3.5vw,2.6rem)", fontWeight:700, letterSpacing:"0.08em", color:"var(--text-primary)", marginTop:16, marginBottom:8 }}>
            Numbers That Speak <span className="gold-text">For Themselves</span>
          </h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:2 }}>
          {stats.map(s => (
            <StatItem key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
