"use client";
import React from "react";

const reviews = [
  {
    name: "Rajesh Patel",
    location: "Navrangpura, Ahmedabad",
    text: "Vikram Bhai solved my 5-year-long business dispute within weeks. His Vedic remedies were incredibly accurate. My family and I are forever grateful for his guidance.",
    rating: 5,
    service: "Career & Business",
  },
  {
    name: "Priya Sharma",
    location: "Satellite, Ahmedabad",
    text: "After consulting Vikram Bhai for Kundali matching, my daughter found the perfect match. The compatibility analysis was detailed and spot on. Highly recommended!",
    rating: 5,
    service: "Kundali Matching",
  },
  {
    name: "Amit Desai",
    location: "Maninagar, Ahmedabad",
    text: "I was struggling with black magic effects for months. Vikram Bhai's spiritual remedies gave me complete relief. He is truly a blessed astrologer with divine powers.",
    rating: 5,
    service: "Black Magic Removal",
  },
  {
    name: "Neha Joshi",
    location: "Bopal, Ahmedabad",
    text: "My husband and I were on the verge of divorce. Vikram Bhai's love problem solution saved our marriage. We are happily together now. Thank you so much!",
    rating: 5,
    service: "Love & Marriage",
  },
  {
    name: "Kiran Mehta",
    location: "Vastrapur, Ahmedabad",
    text: "Vikram Bhai predicted my job change with exact timing. His career guidance helped me land a role with double the salary. His Kundali reading is unmatched.",
    rating: 5,
    service: "Horoscope Forecast",
  },
  {
    name: "Suresh Agarwal",
    location: "Paldi, Ahmedabad",
    text: "We had Vastu issues in our new home causing constant health problems. Vikram Bhai's consultation and remedies brought peace and prosperity back into our lives.",
    rating: 5,
    service: "Vastu Consultation",
  },
  {
    name: "Divya Shah",
    location: "SG Highway, Ahmedabad",
    text: "After 7 years of trying, Vikram Bhai's guidance blessed us with a child. His prayers and Vedic remedies worked miracles. He is a true Ambaji Upasak.",
    rating: 5,
    service: "Child Birth Prediction",
  },
];

function ReviewCard({ r }: { r: typeof reviews[0] }) {
  return (
    <div className="rmc-card">
      <div className="rmc-stars">
        {Array.from({ length: r.rating }).map((_, i) => (
          <span key={i} className="rmc-star">★</span>
        ))}
      </div>
      <p className="rmc-text">&ldquo;{r.text}&rdquo;</p>
      <div className="rmc-divider" />
      <div className="rmc-author">
        <div className="rmc-avatar">{r.name.charAt(0)}</div>
        <div className="rmc-info">
          <div className="rmc-name">{r.name}</div>
          <div className="rmc-location">{r.location}</div>
        </div>
      </div>
      <div className="rmc-service">{r.service}</div>
    </div>
  );
}

export default function ReviewsCarousel() {
  return (
    <section className="rmc-section">
      <div className="rmc-bg-glow rmc-bg-glow--l" />
      <div className="rmc-bg-glow rmc-bg-glow--r" />

      {/* Header */}
      <div className="rmc-header">
        <div className="rmc-header-lines">
          <div className="rmc-hl" />
          <span className="section-label">Client Testimonials</span>
          <div className="rmc-hl rmc-hl--r" />
        </div>
        <h2 className="rmc-title">
          Voices of <span className="gold-text">Trust & Transformation</span>
        </h2>
      </div>

      {/* Marquee track */}
      <div className="rmc-marquee-wrap">
        <div className="rmc-fade rmc-fade--l" />
        <div className="rmc-fade rmc-fade--r" />
        <div className="rmc-marquee-track">
          {[...Array(2)].map((_, setIdx) => (
            <React.Fragment key={setIdx}>
              {reviews.map((r) => (
                <ReviewCard key={`${setIdx}-${r.name}`} r={r} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .rmc-section {
          position: relative;
          overflow: hidden;
          background: var(--bg-void);
          padding: 80px 0;
        }
        .rmc-bg-glow {
          position: absolute;
          width: 350px; height: 350px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(100px);
        }
        .rmc-bg-glow--l {
          top: -80px; left: -120px;
          background: radial-gradient(circle, rgba(232,86,42,0.06) 0%, transparent 70%);
        }
        .rmc-bg-glow--r {
          bottom: -60px; right: -100px;
          background: radial-gradient(circle, rgba(232,86,42,0.05) 0%, transparent 70%);
        }

        /* Header */
        .rmc-header {
          text-align: center;
          margin-bottom: 44px;
          padding: 0 32px;
        }
        .rmc-header-lines {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 14px;
        }
        .rmc-hl {
          height: 1px; width: 48px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.5));
        }
        .rmc-hl--r {
          background: linear-gradient(90deg, rgba(232,86,42,0.5), transparent);
        }
        .rmc-title {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 3.5vw, 2.4rem);
          font-weight: 700;
          letter-spacing: 0.06em;
          line-height: 1.2;
          color: var(--text-primary);
          margin-top: 14px;
        }

        /* Marquee */
        .rmc-marquee-wrap {
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .rmc-fade {
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .rmc-fade--l {
          left: 0;
          background: linear-gradient(90deg, var(--bg-void), transparent);
        }
        .rmc-fade--r {
          right: 0;
          background: linear-gradient(270deg, var(--bg-void), transparent);
        }
        .rmc-marquee-track {
          display: flex;
          width: max-content;
          gap: 20px;
          animation: rmcScroll 45s linear infinite;
          padding: 8px 0;
        }
        .rmc-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes rmcScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* Card */
        .rmc-card {
          flex-shrink: 0;
          width: 340px;
          background: #fff;
          border: 1px solid rgba(232,86,42,0.12);
          padding: 28px 24px 20px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .rmc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 40px rgba(232,86,42,0.1);
          border-color: rgba(232,86,42,0.3);
        }
        .rmc-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 14px;
        }
        .rmc-star {
          color: #E8562A;
          font-size: 0.9rem;
        }
        .rmc-text {
          font-family: var(--font-body);
          font-size: 0.96rem;
          font-style: italic;
          color: var(--text-secondary);
          line-height: 1.8;
          margin: 0 0 16px;
          flex: 1;
        }
        .rmc-divider {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, rgba(232,86,42,0.4), transparent);
          margin-bottom: 16px;
        }

        /* Author */
        .rmc-author {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .rmc-avatar {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E8562A, #F06830);
          color: #fff;
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 3px 10px rgba(232,86,42,0.25);
        }
        .rmc-info { text-align: left; }
        .rmc-name {
          font-family: var(--font-display);
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .rmc-location {
          font-family: var(--font-ui);
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .rmc-service {
          font-family: var(--font-ui);
          font-size: 0.56rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #E8562A;
          background: rgba(232,86,42,0.06);
          border: 1px solid rgba(232,86,42,0.15);
          padding: 4px 10px;
          width: fit-content;
        }

        @media (max-width: 600px) {
          .rmc-section { padding: 56px 0; }
          .rmc-card { width: 290px; padding: 22px 18px 16px; }
          .rmc-fade { width: 40px; }
        }
      `}</style>
    </section>
  );
}
