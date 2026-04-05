"use client";
import Image from "next/image";

const milestones = [
  { year: "1998", text: "Began Vedic studies under family lineage" },
  { year: "2005", text: "Established independent astrology practice" },
  { year: "2012", text: "Crossed 25,000+ consultations milestone" },
  { year: "2018", text: "Expanded guidance to international clients" },
  { year: "2024", text: "90,000+ lives transformed across the globe" },
];

export default function AboutHero() {
  return (
    <section className="abh">
      {/* Decorative background */}
      <div className="abh-bg-pattern" />
      <div className="abh-bg-glow abh-bg-glow--1" />
      <div className="abh-bg-glow abh-bg-glow--2" />

      {/* Top decorative mandala */}
      <div className="abh-mandala">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="96" stroke="#E8562A" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="78" stroke="#E8562A" strokeWidth="0.3" strokeDasharray="3 5" />
          <circle cx="100" cy="100" r="58" stroke="#F06830" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="38" stroke="#E8562A" strokeWidth="0.3" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            return (
              <line key={i} x1={100 + Math.cos(a) * 38} y1={100 + Math.sin(a) * 38}
                x2={100 + Math.cos(a) * 96} y2={100 + Math.sin(a) * 96}
                stroke="#E8562A" strokeWidth="0.2" />
            );
          })}
        </svg>
      </div>

      <div className="abh-container">
        {/* ── Header ── */}
        <div className="abh-header">
          <div className="abh-header-line" />
          <span className="section-label" style={{ display: "inline-block", marginBottom: 12 }}>
            About Vikram Astrologer
          </span>
          <h1 className="abh-title">
            <span className="gold-shimmer">Vikram Bhai Joshi</span>
          </h1>
          <p className="abh-role">Best Ambaji Upasak Astrologer</p>
        </div>

        {/* ── Main grid: photo + story ── */}
        <div className="abh-grid">
          {/* Photo side */}
          <div className="abh-photo-col">
            <div className="abh-photo-wrapper">
              {/* Corner accents */}
              <div className="abh-corner abh-corner--tl" />
              <div className="abh-corner abh-corner--tr" />
              <div className="abh-corner abh-corner--bl" />
              <div className="abh-corner abh-corner--br" />

              <div className="abh-photo-frame">
                <Image
                  src="/about-vikram.jpg"
                  alt="Vikram Bhai Joshi — Best Ambaji Upasak Astrologer"
                  width={560}
                  height={660}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  priority
                />
                <div className="abh-photo-fade" />
              </div>

              {/* Badge */}
              <div className="abh-badge">
                <div className="abh-badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="abh-badge-val">5th Generation</div>
                  <div className="abh-badge-lbl">Vedic Astrologer</div>
                </div>
              </div>
            </div>

            {/* Mini stats below photo */}
            <div className="abh-mini-stats">
              {[
                { val: "25+", lbl: "Years" },
                { val: "90K+", lbl: "Clients" },
                { val: "4.9★", lbl: "Rating" },
              ].map((s) => (
                <div key={s.lbl} className="abh-mini-stat">
                  <span className="abh-mini-val">{s.val}</span>
                  <span className="abh-mini-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Story side */}
          <div className="abh-story-col">
            <div className="abh-accent-bar" />
            <h2 className="abh-story-heading">
              A Legacy of <span className="gold-text">Divine Wisdom</span>
            </h2>

            <p className="abh-story-body">
              Born into a revered family of astrologers, Pandit Vikram Bhai Joshi carries forward
              <strong> five generations</strong> of sacred Vedic knowledge. His journey began under the
              watchful guidance of his forefathers, who instilled in him the profound traditions of
              Jyotish Shastra and the spiritual devotion of an <strong>Ambaji Upasak</strong>.
            </p>

            <p className="abh-story-body">
              With over <strong>25 years</strong> of dedicated practice and more than <strong>90,000 consultations</strong>,
              he has earned the trust of individuals across India, Europe, Africa and Asia Pacific.
              His mastery spans Kundali reading, love &amp; marriage solutions, black magic removal,
              career guidance and Vastu consultation.
            </p>

            <p className="abh-story-body">
              What sets him apart is his compassionate, non-judgmental approach — serving people of
              <strong> all religions, castes and communities</strong> with equal devotion. Based in Ahmedabad, Gujarat,
              his guidance reaches every corner of the globe through phone, WhatsApp and in-person sessions.
            </p>

            {/* Quote */}
            <blockquote className="abh-quote">
              <svg className="abh-quote-svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
                <path d="M0 24V14.4C0 10.1 1.02 6.7 3.07 4.14C5.12 1.38 8.04 0 11.84 0L12.72 3.72C10.38 4.3 8.63 5.4 7.46 6.98C6.3 8.57 5.72 10.46 5.72 12.64H10.97V24H0ZM19.72 24V14.4C19.72 10.1 20.74 6.7 22.79 4.14C24.84 1.38 27.76 0 31.56 0L32.44 3.72C30.1 4.3 28.35 5.4 27.18 6.98C26.02 8.57 25.44 10.46 25.44 12.64H30.69V24H19.72Z" fill="rgba(232,86,42,0.1)" />
              </svg>
              <p>
                The stars do not compel — they guide. My mission is to illuminate your path
                so you may walk it with confidence, clarity and inner peace.
              </p>
              <cite>— Pandit Vikram Bhai Joshi</cite>
            </blockquote>
          </div>
        </div>

        {/* ── Journey timeline ── */}
        <div className="abh-timeline-section">
          <div className="abh-timeline-header">
            <div className="abh-tl-line" />
            <span className="section-label">The Journey</span>
            <div className="abh-tl-line" />
          </div>

          <div className="abh-timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className="abh-tl-item">
                <div className="abh-tl-dot" />
                {i < milestones.length - 1 && <div className="abh-tl-connector" />}
                <div className="abh-tl-year">{m.year}</div>
                <div className="abh-tl-text">{m.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .abh {
          position: relative;
          overflow: hidden;
          background: var(--bg-void);
          padding: 72px 32px 88px;
        }
        .abh-bg-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: radial-gradient(circle at 1px 1px, #E8562A 0.5px, transparent 0.5px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        .abh-bg-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(100px);
        }
        .abh-bg-glow--1 {
          width: 500px; height: 500px;
          top: -150px; right: -100px;
          background: radial-gradient(circle, rgba(232,86,42,0.07) 0%, transparent 70%);
        }
        .abh-bg-glow--2 {
          width: 400px; height: 400px;
          bottom: -100px; left: -80px;
          background: radial-gradient(circle, rgba(240,104,48,0.05) 0%, transparent 70%);
        }
        .abh-mandala {
          position: absolute;
          top: 60px; left: 50%;
          transform: translateX(-50%);
          width: 320px; height: 320px;
          opacity: 0.06;
          pointer-events: none;
          animation: abhMandalaSpin 60s linear infinite;
        }
        @keyframes abhMandalaSpin { to { transform: translateX(-50%) rotate(360deg); } }

        .abh-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .abh-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .abh-header-line {
          width: 48px; height: 3px;
          background: linear-gradient(90deg, #E8562A, #F06830);
          margin: 0 auto 20px;
        }
        .abh-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5.5vw, 3.6rem);
          font-weight: 900;
          letter-spacing: 0.06em;
          line-height: 1.1;
          color: var(--text-primary);
          margin-bottom: 10px;
        }
        .abh-role {
          font-family: var(--font-ui);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #E8562A;
        }

        /* Grid */
        .abh-grid {
          display: grid;
          grid-template-columns: 0.45fr 0.55fr;
          gap: 64px;
          align-items: start;
          margin-bottom: 80px;
        }

        /* Photo column */
        .abh-photo-col { position: relative; }
        .abh-photo-wrapper {
          position: relative;
          padding: 14px;
        }
        .abh-corner {
          position: absolute;
          width: 36px; height: 36px;
          z-index: 2;
        }
        .abh-corner::before,
        .abh-corner::after {
          content: '';
          position: absolute;
          background: linear-gradient(135deg, #E8562A, #F06830);
        }
        .abh-corner--tl { top: 0; left: 0; }
        .abh-corner--tl::before { top: 0; left: 0; width: 36px; height: 2px; }
        .abh-corner--tl::after  { top: 0; left: 0; width: 2px; height: 36px; }
        .abh-corner--tr { top: 0; right: 0; }
        .abh-corner--tr::before { top: 0; right: 0; width: 36px; height: 2px; }
        .abh-corner--tr::after  { top: 0; right: 0; width: 2px; height: 36px; }
        .abh-corner--bl { bottom: 0; left: 0; }
        .abh-corner--bl::before { bottom: 0; left: 0; width: 36px; height: 2px; }
        .abh-corner--bl::after  { bottom: 0; left: 0; width: 2px; height: 36px; }
        .abh-corner--br { bottom: 0; right: 0; }
        .abh-corner--br::before { bottom: 0; right: 0; width: 36px; height: 2px; }
        .abh-corner--br::after  { bottom: 0; right: 0; width: 2px; height: 36px; }

        .abh-photo-frame {
          position: relative;
          overflow: hidden;
          box-shadow: 0 28px 80px rgba(0,0,0,0.14), 0 0 0 1px rgba(232,86,42,0.1);
        }
        .abh-photo-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(40,15,8,0.35) 0%, rgba(40,15,8,0.08) 35%, transparent 60%);
          pointer-events: none;
        }

        /* Floating badge */
        .abh-badge {
          position: absolute;
          bottom: 0; right: 0;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #E8562A, #D04A22);
          color: #fff;
          padding: 14px 20px;
          box-shadow: 0 8px 28px rgba(232,86,42,0.4);
        }
        .abh-badge-icon {
          width: 36px; height: 36px;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .abh-badge-val {
          font-family: var(--font-display);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1.2;
        }
        .abh-badge-lbl {
          font-family: var(--font-ui);
          font-size: 0.56rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          opacity: 0.85;
        }

        /* Mini stats */
        .abh-mini-stats {
          display: flex;
          margin-top: 16px;
          margin-left: 14px;
          margin-right: 14px;
        }
        .abh-mini-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 18px 8px;
          border: 1px solid rgba(232,86,42,0.12);
          border-right: none;
          background: rgba(232,86,42,0.02);
        }
        .abh-mini-stat:last-child { border-right: 1px solid rgba(232,86,42,0.12); }
        .abh-mini-val {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1;
          background: linear-gradient(135deg, #E8562A, #F06830);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .abh-mini-lbl {
          font-family: var(--font-ui);
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 4px;
        }

        /* Story column */
        .abh-story-col {
          padding-top: 8px;
        }
        .abh-accent-bar {
          width: 40px; height: 3px;
          background: linear-gradient(90deg, #E8562A, #F06830);
          margin-bottom: 20px;
        }
        .abh-story-heading {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          font-weight: 700;
          letter-spacing: 0.05em;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 24px;
        }
        .abh-story-body {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.6vw, 1.08rem);
          color: var(--text-secondary);
          line-height: 1.9;
          margin-bottom: 14px;
        }
        .abh-story-body strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        /* Quote */
        .abh-quote {
          position: relative;
          margin: 28px 0 0;
          padding: 24px 28px;
          border-left: 3px solid #E8562A;
          background: linear-gradient(135deg, rgba(232,86,42,0.04) 0%, rgba(232,86,42,0.01) 100%);
        }
        .abh-quote-svg {
          position: absolute;
          top: 14px; right: 18px;
          opacity: 0.7;
        }
        .abh-quote p {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.5vw, 1.05rem);
          font-style: italic;
          color: var(--text-muted);
          line-height: 1.85;
          margin: 0 0 10px;
        }
        .abh-quote cite {
          font-family: var(--font-ui);
          font-size: 0.7rem;
          font-style: normal;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #E8562A;
        }

        /* Timeline */
        .abh-timeline-section {
          position: relative;
        }
        .abh-timeline-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }
        .abh-tl-line {
          height: 1px; width: 56px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.5));
        }
        .abh-tl-line:last-child {
          background: linear-gradient(90deg, rgba(232,86,42,0.5), transparent);
        }

        .abh-timeline {
          display: flex;
          justify-content: center;
          gap: 0;
          position: relative;
        }
        .abh-tl-item {
          flex: 1;
          max-width: 200px;
          text-align: center;
          position: relative;
          padding-top: 32px;
        }
        .abh-tl-dot {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 14px; height: 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E8562A, #F06830);
          border: 3px solid var(--bg-void);
          box-shadow: 0 0 0 2px rgba(232,86,42,0.3), 0 2px 8px rgba(232,86,42,0.2);
          z-index: 2;
        }
        .abh-tl-connector {
          position: absolute;
          top: 6px; left: calc(50% + 7px);
          width: calc(100% - 14px);
          height: 1px;
          background: linear-gradient(90deg, rgba(232,86,42,0.4), rgba(232,86,42,0.15));
          z-index: 1;
        }
        .abh-tl-year {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #E8562A, #F06830);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 6px;
        }
        .abh-tl-text {
          font-family: var(--font-ui);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          line-height: 1.45;
          padding: 0 8px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .abh { padding: 48px 20px 64px; }
          .abh-grid {
            grid-template-columns: 1fr !important;
            gap: 40px;
          }
          .abh-photo-col { max-width: 420px; margin: 0 auto; }
          .abh-story-col { text-align: center; }
          .abh-accent-bar { margin-left: auto; margin-right: auto; }
          .abh-quote {
            border-left: none;
            border-top: 3px solid #E8562A;
            text-align: center;
          }
          .abh-timeline {
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }
          .abh-tl-item {
            max-width: 100%;
            padding-top: 0;
            padding-left: 40px;
            text-align: left;
          }
          .abh-tl-dot {
            top: 4px; left: 0;
            transform: none;
          }
          .abh-tl-connector {
            top: 18px; left: 6px;
            width: 1px;
            height: calc(100% + 24px);
            background: linear-gradient(180deg, rgba(232,86,42,0.4), rgba(232,86,42,0.1));
          }
        }
        @media (max-width: 480px) {
          .abh-mini-stats { flex-direction: column; }
          .abh-mini-stat { border-right: 1px solid rgba(232,86,42,0.12) !important; border-bottom: none; }
          .abh-mini-stat:last-child { border-bottom: 1px solid rgba(232,86,42,0.12); }
        }
      `}</style>
    </section>
  );
}
