"use client";
import { useState, useEffect, useCallback } from "react";

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

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="tsc">
      {/* BG */}
      <div className="tsc-bg" />
      <div className="tsc-border-top" />
      <div className="tsc-border-bottom" />

      <div className="tsc-inner">
        {/* Header */}
        <div className="tsc-header">
          <div className="tsc-header-lines">
            <div className="tsc-header-line tsc-header-line--left" />
            <span className="section-label">Client Testimonials</span>
            <div className="tsc-header-line tsc-header-line--right" />
          </div>
          <h2 className="tsc-title">
            Real People, <span className="gold-text">Real Transformations</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="tsc-carousel">
          {testimonials.map((item, i) => (
            <div
              key={item.name}
              className={`tsc-slide ${i === active ? "tsc-slide--active" : ""}`}
            >
              <div className="tsc-card">
                {/* Top accent stripe */}
                <div className="tsc-card-stripe" />

                {/* Corner decos */}
                <div className="tsc-corner tsc-corner--tl" />
                <div className="tsc-corner tsc-corner--tr" />
                <div className="tsc-corner tsc-corner--bl" />
                <div className="tsc-corner tsc-corner--br" />

                {/* Quote mark */}
                <div className="tsc-quote-mark">&ldquo;</div>

                {/* Text */}
                <p className="tsc-text">{item.text}</p>

                {/* Separator */}
                <div className="tsc-separator" />

                {/* Author row */}
                <div className="tsc-author">
                  <div className="tsc-avatar">{item.avatar}</div>
                  <div className="tsc-author-info">
                    <span className="tsc-name">{item.name}</span>
                    <span className="tsc-meta">{item.location} &middot; {item.service}</span>
                  </div>
                  <div className="tsc-stars">
                    {"★".repeat(item.stars)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="tsc-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`tsc-dot ${i === active ? "tsc-dot--active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Reviews Grid ── */}
      <div className="tsc-reviews-wrap">
        <div className="tsc-reviews-divider">
          <div className="tsc-reviews-divider-line" />
          <span className="tsc-reviews-divider-label">More Reviews</span>
          <div className="tsc-reviews-divider-line" />
        </div>

        <div className="tsc-reviews-grid">
          {reviews.map((r, i) => (
            <div key={r.name} className="tsc-review" style={{ animationDelay: `${i * 0.06}s` }}>
              {/* Fire stripe */}
              <div className="tsc-review-stripe" />
              {/* Ghost number */}
              <span className="tsc-review-ghost">{String(i + 1).padStart(2, "0")}</span>

              <div className="tsc-review-stars">{"★".repeat(r.stars)}</div>
              <p className="tsc-review-text">{r.text}</p>
              <div className="tsc-review-footer">
                <div className="tsc-review-avatar">{r.avatar}</div>
                <div className="tsc-review-info">
                  <span className="tsc-review-name">{r.name}</span>
                  <span className="tsc-review-meta">{r.location} &middot; {r.service}</span>
                </div>
              </div>
              {/* Corner deco */}
              <div className="tsc-review-corner" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tsc {
          position: relative;
          padding: 96px 32px;
          overflow: hidden;
        }
        .tsc-bg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, var(--bg-cream) 0%, var(--bg-pale-yellow) 30%, var(--bg-pale-yellow) 70%, var(--bg-cream) 100%);
          pointer-events: none;
        }
        .tsc-border-top {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.3), transparent);
        }
        .tsc-border-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.2), transparent);
        }

        .tsc-inner {
          max-width: 780px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .tsc-header {
          text-align: center;
          margin-bottom: 52px;
        }
        .tsc-header-lines {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .tsc-header-line { height: 1px; width: 48px; }
        .tsc-header-line--left { background: linear-gradient(90deg, transparent, rgba(232,86,42,0.6)); }
        .tsc-header-line--right { background: linear-gradient(90deg, rgba(232,86,42,0.6), transparent); }
        .tsc-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1.2;
          margin-top: 16px;
          color: var(--text-primary);
        }

        /* Carousel */
        .tsc-carousel {
          position: relative;
          min-height: 320px;
        }
        .tsc-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: translateX(40px);
          pointer-events: none;
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.23,1,0.32,1);
        }
        .tsc-slide--active {
          opacity: 1;
          transform: translateX(0);
          pointer-events: all;
          position: relative;
        }

        /* Card */
        .tsc-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid rgba(232,86,42,0.18);
          padding: 48px 52px 44px;
          box-shadow:
            0 20px 60px rgba(0,0,0,0.06),
            0 0 40px rgba(232,86,42,0.04);
          overflow: hidden;
        }

        .tsc-card-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold-warm), var(--gold-glow), var(--gold-warm), transparent);
        }

        /* Corners */
        .tsc-corner {
          position: absolute;
          width: 28px; height: 28px;
        }
        .tsc-corner--tl { top: 0; left: 0; border-top: 1px solid rgba(232,86,42,0.45); border-left: 1px solid rgba(232,86,42,0.45); }
        .tsc-corner--tr { top: 0; right: 0; border-top: 1px solid rgba(232,86,42,0.45); border-right: 1px solid rgba(232,86,42,0.45); }
        .tsc-corner--bl { bottom: 0; left: 0; border-bottom: 1px solid rgba(232,86,42,0.45); border-left: 1px solid rgba(232,86,42,0.45); }
        .tsc-corner--br { bottom: 0; right: 0; border-bottom: 1px solid rgba(232,86,42,0.45); border-right: 1px solid rgba(232,86,42,0.45); }

        /* Quote mark */
        .tsc-quote-mark {
          font-family: Georgia, serif;
          font-size: 4.5rem;
          color: rgba(232,86,42,0.12);
          line-height: 1;
          user-select: none;
          margin-bottom: 4px;
        }

        /* Text */
        .tsc-text {
          font-family: var(--font-body);
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.95;
          font-style: italic;
          margin: 0 0 32px;
        }

        /* Separator */
        .tsc-separator {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.3), transparent);
          margin-bottom: 28px;
        }

        /* Author row */
        .tsc-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .tsc-avatar {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--gold-warm);
          background: rgba(232,86,42,0.07);
          border: 1px solid rgba(232,86,42,0.25);
          flex-shrink: 0;
        }
        .tsc-author-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .tsc-name {
          font-family: var(--font-ui);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-primary);
        }
        .tsc-meta {
          font-family: var(--font-ui);
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold-warm);
          opacity: 0.65;
        }
        .tsc-stars {
          margin-left: auto;
          font-size: 1.2rem;
          color: var(--gold-warm);
          letter-spacing: 0.08em;
        }

        /* Dots */
        .tsc-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }
        .tsc-dot {
          width: 10px;
          height: 10px;
          border: none;
          background: rgba(232,86,42,0.18);
          cursor: pointer;
          transition: all 0.35s ease;
          padding: 0;
        }
        .tsc-dot--active {
          width: 36px;
          background: linear-gradient(90deg, #A53A15, var(--gold-glow));
        }
        .tsc-dot:hover:not(.tsc-dot--active) {
          background: rgba(232,86,42,0.35);
        }

        /* ── Reviews Grid ── */
        .tsc-reviews-wrap {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          padding: 0 0;
        }
        .tsc-reviews-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 56px 0 36px;
        }
        .tsc-reviews-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.2), transparent);
        }
        .tsc-reviews-divider-label {
          font-family: var(--font-ui);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .tsc-reviews-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .tsc-review {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 24px 22px 22px 24px;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1),
                      box-shadow 0.4s cubic-bezier(0.23,1,0.32,1),
                      border-color 0.35s ease;
          animation: tscReviewIn 0.5s ease both;
        }
        .tsc-review:hover {
          transform: translateY(-4px);
          border-color: rgba(232,86,42,0.3);
          box-shadow: 0 14px 36px rgba(0,0,0,0.06), 0 0 28px rgba(232,86,42,0.04);
        }

        .tsc-review-stripe {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--gold-warm), var(--gold-glow));
          opacity: 0.2;
          transition: opacity 0.35s ease, width 0.35s ease, box-shadow 0.35s ease;
        }
        .tsc-review:hover .tsc-review-stripe {
          opacity: 1;
          width: 4px;
          box-shadow: 3px 0 16px rgba(232,86,42,0.18);
        }

        .tsc-review-ghost {
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
        .tsc-review:hover .tsc-review-ghost {
          color: rgba(232,86,42,0.07);
          transform: translateY(-3px);
        }

        .tsc-review-stars {
          font-size: 0.9rem;
          color: var(--gold-warm);
          letter-spacing: 0.06em;
          margin-bottom: 12px;
        }

        .tsc-review-text {
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

        .tsc-review-footer {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .tsc-review-avatar {
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
        .tsc-review-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
          min-width: 0;
        }
        .tsc-review-name {
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
        .tsc-review-meta {
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

        .tsc-review-corner {
          position: absolute;
          bottom: 0; right: 0;
          width: 18px; height: 18px;
          border-bottom: 1px solid rgba(232,86,42,0.1);
          border-right: 1px solid rgba(232,86,42,0.1);
          transition: border-color 0.3s, width 0.3s, height 0.3s;
        }
        .tsc-review:hover .tsc-review-corner {
          width: 26px; height: 26px;
          border-color: rgba(232,86,42,0.35);
        }

        @keyframes tscReviewIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .tsc-reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .tsc { padding: 64px 20px; }
          .tsc-card { padding: 32px 28px 28px; }
          .tsc-quote-mark { font-size: 3.5rem; }
          .tsc-carousel { min-height: 360px; }
          .tsc-author { flex-wrap: wrap; }
          .tsc-stars { margin-left: 0; width: 100%; margin-top: 6px; }
        }
        @media (max-width: 520px) {
          .tsc-card { padding: 28px 20px 24px; }
          .tsc-carousel { min-height: 400px; }
          .tsc-corner { width: 20px; height: 20px; }
          .tsc-reviews-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
