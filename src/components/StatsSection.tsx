"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 10000, suffix: "+", label: "Happy Clients", icon: "😊" },
  { num: 20, suffix: "+", label: "Years Experience", icon: "⭐" },
  { num: 50000, suffix: "+", label: "Problems Solved", icon: "✅" },
  { num: 100, suffix: "%", label: "Confidential", icon: "🔒" },
];

function StatItem({ num, suffix, label, icon, active }: {
  num: number; suffix: string; label: string; icon: string; active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const duration = 2200;
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
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: "32px 20px",
        background: "white",
        borderRadius: 16,
        border: "1px solid rgba(212,175,55,0.25)",
        boxShadow: "0 4px 20px rgba(180,140,0,0.08)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(180,140,0,0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(180,140,0,0.08)";
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(212,175,55,0.08) 100%)",
          border: "2px solid rgba(212,175,55,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.8rem",
          marginBottom: 4,
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
          fontWeight: 700,
          color: "var(--gold-deep)",
          lineHeight: 1,
        }}
      >
        {count.toLocaleString()}
        <span style={{ color: "var(--gold-amber)" }}>{suffix}</span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-secondary)",
        }}
      >
        {label}
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
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "var(--bg-light-yellow)",
        padding: "72px 24px",
        position: "relative",
        overflow: "hidden",
        borderTop: "3px solid var(--gold-warm)",
        borderBottom: "3px solid var(--gold-warm)",
      }}
    >
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,215,0,0.1)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -40, left: -40, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,215,0,0.1)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="section-label">Our Track Record</span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "var(--text-primary)",
            marginTop: 16,
          }}>
            Numbers That Speak <span className="gold-text">For Themselves</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
