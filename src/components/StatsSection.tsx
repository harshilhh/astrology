"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 25, suffix: "+", label: "Years Experience" },
  { num: 90000, suffix: "+", label: "Consultations" },
  { num: 5, suffix: "th Gen", label: "Astrologer" },
  { num: 49, suffix: "★", label: "Client Rating", prefix: "4." },
];

function StatItem({ num, suffix, label, prefix, active }: {
  num: number; suffix: string; label: string; prefix?: string; active: boolean;
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
    <div style={{
      flex: 1, textAlign: "center", padding: "0 24px",
    }}>
      <div style={{
        fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
        fontWeight: 700, fontStyle: "italic", lineHeight: 1, color: "var(--text-primary)",
        marginBottom: 8,
      }}>
        {prefix || ""}{count.toLocaleString()}{suffix}
      </div>
      <div style={{
        fontFamily: "var(--font-ui)", fontSize: "0.62rem", fontWeight: 600,
        letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-muted)",
      }}>
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
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      background: "#fff", padding: "52px 32px",
      borderBottom: "1px solid rgba(0,0,0,0.08)",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "center",
      }} className="stats-row">
        {stats.map((s, i) => (
          <div key={s.label} style={{ display: "contents" }}>
            <StatItem {...s} active={active} />
            {i < stats.length - 1 && (
              <div style={{
                width: 1, height: 48, background: "rgba(0,0,0,0.1)", flexShrink: 0,
              }} />
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .stats-row { flex-wrap: wrap !important; gap: 28px 0; }
          .stats-row > div > div[style*="width: 1px"] { display: none; }
        }
      `}</style>
    </section>
  );
}
