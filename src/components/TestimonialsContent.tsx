"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const stats = [
  { num: 25, suffix: "+", label: "Years Experience" },
  { num: 90000, suffix: "+", label: "Consultations" },
  { num: 5, suffix: "th Gen", label: "Astrologer" },
  { num: 49, suffix: "\u2605", label: "Client Rating", prefix: "4." },
];

const testimonials = [
  { name: "Priya Sharma", location: "Delhi", stars: 5, text: "I had lost all hope of getting my ex back after 2 years of separation. Vikram Bhai\u2019s guidance and remedies worked like a miracle. We are happily together now. I can never thank him enough.", service: "Ex Love Back", avatar: "P" },
  { name: "Rajesh Kumar", location: "Mumbai", stars: 5, text: "My business had been in loss for 3 years and I was drowning in debt. After the consultation and performing the remedies, things turned around within a month. Highly recommended!", service: "Business & Finance", avatar: "R" },
  { name: "Anjali Singh", location: "Jaipur", stars: 5, text: "Our parents were completely against our intercaste marriage. Vikram Bhai helped us in every way \u2014 our parents gave their blessings within weeks! It felt nothing short of a miracle.", service: "Love Marriage", avatar: "A" },
  { name: "Mohan Verma", location: "Pune", stars: 5, text: "Constant fights with my wife had pushed us to the edge of divorce. After just two sessions with Vikram Bhai, there was a visible change. Our home is peaceful again. God bless him.", service: "Husband-Wife Dispute", avatar: "M" },
  { name: "Sunita Patel", location: "Ahmedabad", stars: 5, text: "I was suffering from severe black magic for years with unexplained problems in every area of life. Vikram Bhai identified it instantly and removed it. I feel like a new person now.", service: "Black Magic Removal", avatar: "S" },
  { name: "Vikram Rao", location: "Hyderabad", stars: 5, text: "I was stuck in my career for 5 years with no growth. After following the astrological remedies, I got a promotion and a 40% salary hike within 3 months. Incredible experience.", service: "Career Growth", avatar: "V" },
];

const reviews = [
  { name: "Deepika Nair", location: "Kochi", stars: 5, text: "Was struggling with health issues for over a year with no medical explanation. Vikram Bhai identified planetary afflictions and the remedies brought visible improvement within weeks.", service: "Health Problems", avatar: "D" },
  { name: "Arun Mehta", location: "Chandigarh", stars: 5, text: "My visa had been rejected 3 times. After following Vikram Bhai\u2019s guidance and performing the recommended puja, my 4th application was approved. Now settled in Canada.", service: "Visa & Immigration", avatar: "A" },
  { name: "Kavita Desai", location: "Surat", stars: 5, text: "We were trying for a baby for 6 years. Doctors had given up hope. Vikram Bhai\u2019s remedies changed everything \u2014 we are now blessed with a beautiful daughter.", service: "Child Birth Issue", avatar: "K" },
  { name: "Ravi Shankar", location: "Lucknow", stars: 5, text: "Property dispute with my brother had been going on for 8 years. Within 3 months of following the remedies, we reached an amicable settlement. Truly grateful.", service: "Property Disputes", avatar: "R" },
  { name: "Neha Gupta", location: "Indore", stars: 5, text: "My husband was having an extra-marital affair and I was devastated. Vikram Bhai\u2019s remedies brought my husband back and our relationship is stronger than ever.", service: "Extra Marital Affairs", avatar: "N" },
  { name: "Sanjay Tiwari", location: "Patna", stars: 5, text: "Failed in competitive exams twice despite hard work. After the consultation and wearing the recommended gemstone, I cleared UPSC in my third attempt.", service: "Education & Career", avatar: "S" },
  { name: "Pooja Reddy", location: "Bangalore", stars: 5, text: "My in-laws were making my life miserable. After Vikram Bhai\u2019s intervention, there has been a complete change in their attitude. My home is finally peaceful.", service: "In-Laws Problem", avatar: "P" },
  { name: "Amit Joshi", location: "Nagpur", stars: 5, text: "I was going through severe depression and nothing was helping. The astrological remedies along with Vikram Bhai\u2019s counseling gave me a new perspective on life. Forever thankful.", service: "Mental Health", avatar: "A" },
];

/* ── Animated stat counter ── */
function StatCounter({ num, suffix, label, prefix, active }: {
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
    <div className="tmc-stat">
      <div className="tmc-stat-num">
        {prefix || ""}{count.toLocaleString()}{suffix}
      </div>
      <div className="tmc-stat-label">{label}</div>
    </div>
  );
}

export default function TestimonialsContent() {
  const [active, setActive] = useState(0);
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── Header Bar ── */}
      <section className="tmc-header-bar">
        <div className="tmc-header-inner">
          <h1 className="tmc-page-title">Testimonials</h1>
          <nav className="tmc-breadcrumb">
            <Link href="/">Home</Link>
            <span className="tmc-breadcrumb-sep">&rsaquo;</span>
            <span className="tmc-breadcrumb-current">Testimonials</span>
          </nav>
        </div>
        <div className="tmc-header-decor" />
      </section>

      {/* ── Stats Section ── */}
      <section className="tmc-stats" ref={statsRef}>
        <div className="tmc-stats-inner">
          {stats.map((s, i) => (
            <div key={s.label} className="tmc-stat-wrap">
              <StatCounter {...s} active={statsActive} />
              {i < stats.length - 1 && <div className="tmc-stat-divider" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Carousel ── */}
      <section className="tmc-carousel-section">
        <div className="tmc-carousel-bg" />
        <div className="tmc-carousel-wrap">
          {/* Section header */}
          <div className="tmc-section-header">
            <div className="tmc-section-header-lines">
              <div className="tmc-sh-line tmc-sh-line--left" />
              <span className="tmc-sh-label">Featured Stories</span>
              <div className="tmc-sh-line tmc-sh-line--right" />
            </div>
            <h2 className="tmc-section-title">
              Real People, <span className="gold-text">Real Transformations</span>
            </h2>
          </div>

          {/* Carousel */}
          <div className="tmc-carousel">
            {testimonials.map((item, i) => (
              <div
                key={item.name}
                className={`tmc-slide ${i === active ? "tmc-slide--active" : ""}`}
              >
                <div className="tmc-card">
                  <div className="tmc-card-stripe" />
                  <div className="tmc-corner tmc-corner--tl" />
                  <div className="tmc-corner tmc-corner--tr" />
                  <div className="tmc-corner tmc-corner--bl" />
                  <div className="tmc-corner tmc-corner--br" />

                  <div className="tmc-quote-mark">&ldquo;</div>
                  <p className="tmc-card-text">{item.text}</p>
                  <div className="tmc-card-sep" />

                  <div className="tmc-card-author">
                    <div className="tmc-card-avatar">{item.avatar}</div>
                    <div className="tmc-card-info">
                      <span className="tmc-card-name">{item.name}</span>
                      <span className="tmc-card-meta">{item.location} &middot; {item.service}</span>
                    </div>
                    <div className="tmc-card-stars">{"★".repeat(item.stars)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="tmc-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`tmc-dot ${i === active ? "tmc-dot--active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews Grid ── */}
      <section className="tmc-reviews-section">
        <div className="tmc-reviews-wrap">
          <div className="tmc-reviews-header">
            <div className="tmc-rh-line" />
            <span className="tmc-rh-label">More Reviews</span>
            <div className="tmc-rh-line" />
          </div>

          <div className="tmc-reviews-grid">
            {reviews.map((r, i) => (
              <div key={r.name} className="tmc-review" style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="tmc-review-stripe" />
                <span className="tmc-review-ghost">{String(i + 1).padStart(2, "0")}</span>

                <div className="tmc-review-stars">{"★".repeat(r.stars)}</div>
                <p className="tmc-review-text">{r.text}</p>
                <div className="tmc-review-footer">
                  <div className="tmc-review-avatar">{r.avatar}</div>
                  <div className="tmc-review-info">
                    <span className="tmc-review-name">{r.name}</span>
                    <span className="tmc-review-meta">{r.location} &middot; {r.service}</span>
                  </div>
                </div>
                <div className="tmc-review-corner" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ══════════════════════════════════
           HEADER BAR
           ══════════════════════════════════ */
        .tmc-header-bar {
          position: relative;
          background: linear-gradient(180deg, var(--bg-pale-yellow) 0%, var(--bg-cream) 100%);
          padding: 40px 32px;
        }
        .tmc-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tmc-page-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }
        .tmc-breadcrumb {
          font-family: var(--font-ui);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .tmc-breadcrumb a {
          color: var(--gold-warm);
          text-decoration: none;
          transition: color 0.2s;
        }
        .tmc-breadcrumb a:hover { color: var(--gold-glow); }
        .tmc-breadcrumb-sep { color: var(--text-muted); font-size: 1rem; }
        .tmc-breadcrumb-current { color: var(--text-muted); }
        .tmc-header-decor {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 15%, rgba(232,86,42,0.2) 50%, transparent 85%);
        }

        /* ══════════════════════════════════
           STATS
           ══════════════════════════════════ */
        .tmc-stats {
          background: linear-gradient(180deg, var(--bg-cream) 0%, var(--bg-void) 100%);
          padding: 48px 32px;
        }
        .tmc-stats-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tmc-stat-wrap {
          display: flex;
          align-items: center;
          flex: 1;
        }
        .tmc-stat {
          flex: 1;
          text-align: center;
          padding: 0 20px;
        }
        .tmc-stat-num {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 700;
          font-style: italic;
          line-height: 1;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .tmc-stat-label {
          font-family: var(--font-ui);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .tmc-stat-divider {
          width: 1px;
          height: 44px;
          background: linear-gradient(180deg, transparent, rgba(232,86,42,0.2), transparent);
          flex-shrink: 0;
        }

        /* ══════════════════════════════════
           CAROUSEL SECTION
           ══════════════════════════════════ */
        .tmc-carousel-section {
          position: relative;
          padding: 80px 32px 72px;
          overflow: hidden;
        }
        .tmc-carousel-bg {
          position: absolute;
          inset: 0;
          background: #FFFFFF;
          pointer-events: none;
        }
        .tmc-carousel-wrap {
          max-width: 780px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Section header */
        .tmc-section-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .tmc-section-header-lines {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .tmc-sh-line { height: 1px; width: 48px; }
        .tmc-sh-line--left { background: linear-gradient(90deg, transparent, rgba(232,86,42,0.6)); }
        .tmc-sh-line--right { background: linear-gradient(90deg, rgba(232,86,42,0.6), transparent); }
        .tmc-sh-label {
          font-family: var(--font-ui);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold-warm);
        }
        .tmc-section-title {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1.2;
          margin-top: 12px;
          color: var(--text-primary);
        }

        /* Carousel */
        .tmc-carousel {
          position: relative;
          min-height: 310px;
        }
        .tmc-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: translateX(36px);
          pointer-events: none;
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.23,1,0.32,1);
        }
        .tmc-slide--active {
          opacity: 1;
          transform: translateX(0);
          pointer-events: all;
          position: relative;
        }

        /* Card */
        .tmc-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid rgba(232,86,42,0.18);
          padding: 44px 48px 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.06), 0 0 40px rgba(232,86,42,0.04);
          overflow: hidden;
        }
        .tmc-card-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold-warm), var(--gold-glow), var(--gold-warm), transparent);
        }

        /* Corner decos */
        .tmc-corner {
          position: absolute;
          width: 28px; height: 28px;
        }
        .tmc-corner--tl { top: 0; left: 0; border-top: 1px solid rgba(232,86,42,0.45); border-left: 1px solid rgba(232,86,42,0.45); }
        .tmc-corner--tr { top: 0; right: 0; border-top: 1px solid rgba(232,86,42,0.45); border-right: 1px solid rgba(232,86,42,0.45); }
        .tmc-corner--bl { bottom: 0; left: 0; border-bottom: 1px solid rgba(232,86,42,0.45); border-left: 1px solid rgba(232,86,42,0.45); }
        .tmc-corner--br { bottom: 0; right: 0; border-bottom: 1px solid rgba(232,86,42,0.45); border-right: 1px solid rgba(232,86,42,0.45); }

        .tmc-quote-mark {
          font-family: Georgia, serif;
          font-size: 4.2rem;
          color: rgba(232,86,42,0.12);
          line-height: 1;
          user-select: none;
          margin-bottom: 4px;
        }
        .tmc-card-text {
          font-family: var(--font-body);
          font-size: clamp(1.02rem, 2vw, 1.2rem);
          color: var(--text-secondary);
          line-height: 1.95;
          font-style: italic;
          margin: 0 0 28px;
        }
        .tmc-card-sep {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.3), transparent);
          margin-bottom: 24px;
        }

        /* Author */
        .tmc-card-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .tmc-card-avatar {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--gold-warm);
          background: rgba(232,86,42,0.07);
          border: 1px solid rgba(232,86,42,0.25);
          flex-shrink: 0;
        }
        .tmc-card-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .tmc-card-name {
          font-family: var(--font-ui);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-primary);
        }
        .tmc-card-meta {
          font-family: var(--font-ui);
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold-warm);
          opacity: 0.65;
        }
        .tmc-card-stars {
          margin-left: auto;
          font-size: 1.15rem;
          color: var(--gold-warm);
          letter-spacing: 0.08em;
        }

        /* Dots */
        .tmc-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }
        .tmc-dot {
          width: 10px;
          height: 10px;
          border: none;
          background: rgba(232,86,42,0.18);
          cursor: pointer;
          transition: all 0.35s ease;
          padding: 0;
        }
        .tmc-dot--active {
          width: 36px;
          background: linear-gradient(90deg, #A53A15, var(--gold-glow));
        }
        .tmc-dot:hover:not(.tmc-dot--active) {
          background: rgba(232,86,42,0.35);
        }

        /* ══════════════════════════════════
           REVIEWS GRID
           ══════════════════════════════════ */
        .tmc-reviews-section {
          background: linear-gradient(180deg, var(--bg-void) 0%, var(--bg-void) 85%, var(--bg-white) 100%);
          padding: 0 32px 80px;
        }
        .tmc-reviews-wrap {
          max-width: 1200px;
          margin: 0 auto;
        }

        .tmc-reviews-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 36px;
        }
        .tmc-rh-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.2), transparent);
        }
        .tmc-rh-label {
          font-family: var(--font-ui);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .tmc-reviews-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        /* Review card */
        .tmc-review {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 24px 22px 22px 24px;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1),
                      box-shadow 0.4s cubic-bezier(0.23,1,0.32,1),
                      border-color 0.35s ease;
          animation: tmcRevIn 0.5s ease both;
        }
        .tmc-review:hover {
          transform: translateY(-4px);
          border-color: rgba(232,86,42,0.3);
          box-shadow: 0 14px 36px rgba(0,0,0,0.06), 0 0 28px rgba(232,86,42,0.04);
        }

        .tmc-review-stripe {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--gold-warm), var(--gold-glow));
          opacity: 0.2;
          transition: opacity 0.35s ease, width 0.35s ease, box-shadow 0.35s ease;
        }
        .tmc-review:hover .tmc-review-stripe {
          opacity: 1;
          width: 4px;
          box-shadow: 3px 0 16px rgba(232,86,42,0.18);
        }

        .tmc-review-ghost {
          position: absolute;
          top: -4px; right: 6px;
          font-family: var(--font-display);
          font-size: 3.5rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          color: rgba(232,86,42,0.035);
          pointer-events: none;
          user-select: none;
          transition: color 0.3s, transform 0.4s cubic-bezier(0.23,1,0.32,1);
        }
        .tmc-review:hover .tmc-review-ghost {
          color: rgba(232,86,42,0.07);
          transform: translateY(-3px);
        }

        .tmc-review-stars {
          font-size: 0.9rem;
          color: var(--gold-warm);
          letter-spacing: 0.06em;
          margin-bottom: 12px;
        }
        .tmc-review-text {
          font-family: var(--font-body);
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.75;
          font-style: italic;
          margin: 0 0 18px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tmc-review-footer {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .tmc-review-avatar {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--gold-warm);
          background: rgba(232,86,42,0.06);
          border: 1px solid rgba(232,86,42,0.2);
          flex-shrink: 0;
        }
        .tmc-review-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
          min-width: 0;
        }
        .tmc-review-name {
          font-family: var(--font-ui);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tmc-review-meta {
          font-family: var(--font-ui);
          font-size: 0.55rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold-warm);
          opacity: 0.6;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tmc-review-corner {
          position: absolute;
          bottom: 0; right: 0;
          width: 18px; height: 18px;
          border-bottom: 1px solid rgba(232,86,42,0.1);
          border-right: 1px solid rgba(232,86,42,0.1);
          transition: border-color 0.3s, width 0.3s, height 0.3s;
        }
        .tmc-review:hover .tmc-review-corner {
          width: 26px; height: 26px;
          border-color: rgba(232,86,42,0.35);
        }

        @keyframes tmcRevIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ══════════════════════════════════
           RESPONSIVE
           ══════════════════════════════════ */
        @media (max-width: 1100px) {
          .tmc-reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .tmc-header-inner {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
          .tmc-stats { padding: 36px 20px; }
          .tmc-stats-inner { flex-wrap: wrap; gap: 24px 0; }
          .tmc-stat-divider { display: none; }
          .tmc-stat-wrap { min-width: 50%; }
          .tmc-carousel-section { padding: 56px 20px 52px; }
          .tmc-card { padding: 32px 28px 28px; }
          .tmc-quote-mark { font-size: 3.2rem; }
          .tmc-carousel { min-height: 350px; }
          .tmc-card-author { flex-wrap: wrap; }
          .tmc-card-stars { margin-left: 0; width: 100%; margin-top: 6px; }
          .tmc-reviews-section { padding: 0 20px 64px; }
        }
        @media (max-width: 520px) {
          .tmc-card { padding: 28px 20px 24px; }
          .tmc-carousel { min-height: 400px; }
          .tmc-corner { width: 20px; height: 20px; }
          .tmc-reviews-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
