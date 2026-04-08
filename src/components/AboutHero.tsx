"use client";
import Image from "next/image";
import Link from "next/link";

const milestones = [
  { year: "1998", text: "Began Vedic studies under family lineage" },
  { year: "2005", text: "Established independent astrology practice" },
  { year: "2012", text: "Crossed 25,000+ consultations milestone" },
  { year: "2018", text: "Expanded guidance to international clients" },
  { year: "2024", text: "90,000+ lives transformed across the globe" },
];

const galleryImages = [
  { src: "/services/black-magic-removal.jpg", alt: "Black magic removal consultation" },
  { src: "/services/husband-wife-problem.jpg", alt: "Husband wife problem solution" },
  { src: "/services/intercaste-love-marriage.jpg", alt: "Intercaste love marriage guidance" },
  { src: "/services/family-problem.jpg", alt: "Family problem resolution" },
  { src: "/services/business-problem.jpg", alt: "Business problem astrology" },
  { src: "/services/health-problem.jpg", alt: "Health problem remedies" },
  { src: "/services/finance-problem.jpg", alt: "Finance problem solutions" },
  { src: "/services/relationship-problem.jpg", alt: "Relationship problem guidance" },
];

export default function AboutHero() {
  return (
    <>
      {/* ── About Us Header with Breadcrumb ── */}
      <section className="abt-header-bar">
        <div className="abt-header-inner">
          <h1 className="abt-page-title">About Us</h1>
          <nav className="abt-breadcrumb">
            <Link href="/">Home</Link>
            <span className="abt-breadcrumb-sep">›</span>
            <span className="abt-breadcrumb-current">About Us</span>
          </nav>
        </div>
        <div className="abt-header-decor" />
      </section>

      {/* ── Main Bio Section ── */}
      <section className="abt-bio">
        <div className="abt-bio-bg-pattern" />
        <div className="abt-bio-container">
          <div className="abt-bio-grid">
            {/* Left: Label + Name + Photo */}
            <div className="abt-bio-left">
              <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>
                Best Ambaji Upashak Astrologer
              </span>
              <h2 className="abt-bio-name">
                <span className="gold-shimmer">Vikram Bhai Joshi</span>
              </h2>

              {/* Photo with play button overlay */}
              <div className="abt-photo-wrap">
                <div className="abt-photo-frame">
                  <Image
                    src="/about-vikram.jpg"
                    alt="Vikram Bhai Joshi — Best Ambaji Upasak Astrologer"
                    width={480}
                    height={540}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    priority
                  />
                  <div className="abt-photo-overlay" />
                  {/* Play button */}
                  <div className="abt-play-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="deco-corner-tl" />
                <div className="deco-corner-tr" />
                <div className="deco-corner-bl" />
                <div className="deco-corner-br" />
              </div>

              {/* Mini stats */}
              <div className="abt-mini-stats">
                {[
                  { val: "25+", lbl: "Years Experience" },
                  { val: "90K+", lbl: "Consultations" },
                  { val: "4.9★", lbl: "Client Rating" },
                ].map((s) => (
                  <div key={s.lbl} className="abt-mini-stat">
                    <span className="abt-mini-val">{s.val}</span>
                    <span className="abt-mini-lbl">{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Bio Text */}
            <div className="abt-bio-right">
              <div className="abt-accent-bar" />
              <h3 className="abt-bio-subtitle">
                Providing Accurate &amp; <span className="gold-text">Life-Changing Predictions</span>
              </h3>

              <p className="abt-bio-text">
                Pandit Vikram Bhai Joshi is a <strong>5th generation Vedic astrologer</strong> and renowned
                Ambaji Upasak, carrying forward a sacred lineage of Jyotish Shastra spanning over a century.
                With more than <strong>25 years of dedicated practice</strong>, he has become one of the most
                trusted and sought-after astrologers in India and abroad.
              </p>

              <p className="abt-bio-text">
                His expertise lies in providing highly accurate predictions and effective remedies for
                all aspects of life — including <strong>love &amp; marriage problems, career guidance,
                business solutions, health issues, black magic removal, Vastu consultation,
                and Kundali reading</strong>. Every consultation is backed by deep Vedic knowledge
                and genuine care for the client&apos;s well-being.
              </p>

              <p className="abt-bio-text">
                Based in <strong>Ahmedabad, Gujarat</strong>, Pandit Vikram Bhai Joshi serves people of
                <strong> all religions, castes and communities</strong> with equal devotion and compassion.
                His guidance reaches every corner of the globe through phone, WhatsApp and
                in-person sessions — available <strong>24/7</strong> for those seeking divine direction.
              </p>

              <p className="abt-bio-text">
                What truly sets him apart is his <strong>honest and non-judgmental approach</strong>. He
                believes that the stars do not compel — they guide. His mission is to illuminate your
                path so you may walk it with confidence, clarity and inner peace.
              </p>

              {/* Quick credentials */}
              <div className="abt-credentials">
                {[
                  "5th Generation Astrology Family",
                  "Serving All Religions & Castes",
                  "Available 24/7 Worldwide",
                  "100% Confidential Consultations",
                ].map((item) => (
                  <div key={item} className="abt-credential-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8562A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Extended Description Section ── */}
      <section className="abt-extended">
        <div className="abt-extended-container">
          <div className="abt-extended-header">
            <div className="abt-tl-line" />
            <span className="section-label">Our Legacy &amp; Expertise</span>
            <div className="abt-tl-line" />
          </div>

          <div className="abt-extended-content">
            <p>
              Vikram Bhai Joshi comes from a family deeply rooted in Vedic astrology. For over five generations,
              his family has dedicated their lives to studying the celestial sciences, performing sacred rituals,
              and guiding people towards a better future. This rich heritage has given Pandit Vikram Bhai Joshi
              an unparalleled depth of knowledge that blends traditional wisdom with practical solutions for modern-day challenges.
            </p>

            <p>
              His specialties include <strong>Kundali Reading &amp; Matching</strong>, <strong>Love &amp; Marriage Problem Solutions</strong>,
              <strong> Career &amp; Business Guidance</strong>, <strong>Black Magic Removal &amp; Protection</strong>,
              <strong> Vastu Shastra Consultation</strong>, <strong>Health &amp; Wealth Remedies</strong>, and
              <strong> Family Dispute Resolution</strong>. Each solution is custom-tailored to the individual&apos;s birth
              chart and life circumstances, ensuring maximum effectiveness and lasting results.
            </p>

            <p>
              Over the course of his <strong>25+ year career</strong>, Pandit Vikram Bhai Joshi has successfully
              guided more than <strong>90,000 clients</strong> across India, the United States, the United Kingdom,
              Canada, Australia, Africa, and Southeast Asia. His clientele includes business professionals, couples
              seeking marital harmony, students navigating career choices, and families dealing with health or
              spiritual challenges.
            </p>

            <p>
              He firmly believes that astrology is a divine science meant to empower, not frighten. His consultations
              are conducted with <strong>complete confidentiality, honesty, and a genuine desire to help</strong>.
              Unlike many practitioners, Pandit Vikram Bhai Joshi never creates fear or dependency — instead, he
              provides clear, actionable guidance that puts the power back in your hands.
            </p>

            <p>
              Whether you are facing challenges in love, struggling with financial difficulties, dealing with
              negative energies, or simply seeking clarity about your life&apos;s direction — Pandit Vikram Bhai
              Joshi is here to help. His remedies are simple, effective, and rooted in authentic Vedic traditions
              that have stood the test of time.
            </p>
          </div>

          {/* Highlight callout */}
          <div className="abt-callout">
            <div className="abt-callout-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8562A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <p>
              <strong>Call Us For Immediate Solutions — Don&apos;t Wait, Luck Is In Your Life!</strong><br />
              <span>Available 24/7 via Phone &amp; WhatsApp for consultations worldwide.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="abt-gallery">
        <div className="abt-gallery-container">
          <div className="abt-extended-header" style={{ marginBottom: 48 }}>
            <div className="abt-tl-line" />
            <span className="section-label">Our Work &amp; Services</span>
            <div className="abt-tl-line" />
          </div>

          <div className="abt-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.src} className="abt-gallery-item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={240}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div className="abt-gallery-overlay">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ── */}
      <section className="abt-timeline-section">
        <div className="abt-timeline-container">
          <div className="abt-extended-header" style={{ marginBottom: 48 }}>
            <div className="abt-tl-line" />
            <span className="section-label">The Journey</span>
            <div className="abt-tl-line" />
          </div>

          <div className="abt-timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className="abt-tl-item">
                <div className="abt-tl-dot" />
                {i < milestones.length - 1 && <div className="abt-tl-connector" />}
                <div className="abt-tl-year">{m.year}</div>
                <div className="abt-tl-text">{m.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ── Header Bar ── */
        .abt-header-bar {
          position: relative;
          background: linear-gradient(180deg, var(--bg-pale-yellow) 0%, var(--bg-cream) 100%);
          padding: 40px 32px;
          border-bottom: none;
        }
        .abt-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .abt-page-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }
        .abt-breadcrumb {
          font-family: var(--font-ui);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .abt-breadcrumb a {
          color: var(--gold-warm);
          text-decoration: none;
          transition: color 0.2s;
        }
        .abt-breadcrumb a:hover {
          color: var(--gold-glow);
        }
        .abt-breadcrumb-sep {
          color: var(--text-muted);
          font-size: 1rem;
        }
        .abt-breadcrumb-current {
          color: var(--text-muted);
        }
        .abt-header-decor {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 15%, rgba(232,86,42,0.2) 50%, transparent 85%);
        }

        /* ── Bio Section ── */
        .abt-bio {
          position: relative;
          background: linear-gradient(180deg, var(--bg-cream) 0%, var(--bg-void) 15%, var(--bg-void) 85%, var(--bg-white) 100%);
          padding: 80px 32px 88px;
          overflow: hidden;
        }
        .abt-bio-bg-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.02;
          background-image: radial-gradient(circle at 1px 1px, #E8562A 0.5px, transparent 0.5px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .abt-bio-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .abt-bio-grid {
          display: grid;
          grid-template-columns: 0.45fr 0.55fr;
          gap: 56px;
          align-items: start;
        }

        /* Left column */
        .abt-bio-left {}
        .abt-bio-name {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 900;
          letter-spacing: 0.06em;
          line-height: 1.1;
          margin-bottom: 28px;
        }

        /* Photo */
        .abt-photo-wrap {
          position: relative;
          padding: 16px;
          margin-bottom: 20px;
        }
        .abt-photo-frame {
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.12), 0 0 0 1px rgba(232,86,42,0.1);
        }
        .abt-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(46,26,26,0.3) 0%, transparent 50%);
          pointer-events: none;
        }
        .abt-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(232,86,42,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(232,86,42,0.5), 0 0 0 4px rgba(255,255,255,0.2);
          transition: all 0.3s ease;
          z-index: 3;
          animation: playPulse 2.5s ease-in-out infinite;
        }
        .abt-play-btn:hover {
          background: rgba(232,86,42,1);
          transform: translate(-50%, -50%) scale(1.1);
        }
        .abt-play-btn svg {
          margin-left: 3px;
        }
        @keyframes playPulse {
          0%,100% { box-shadow: 0 8px 32px rgba(232,86,42,0.5), 0 0 0 4px rgba(255,255,255,0.2), 0 0 0 0 rgba(232,86,42,0.3); }
          50% { box-shadow: 0 8px 32px rgba(232,86,42,0.5), 0 0 0 4px rgba(255,255,255,0.2), 0 0 0 16px rgba(232,86,42,0); }
        }

        /* Mini stats */
        .abt-mini-stats {
          display: flex;
          gap: 0;
        }
        .abt-mini-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 18px 8px;
          border: 1px solid rgba(232,86,42,0.12);
          border-right: none;
          background: rgba(232,86,42,0.02);
          transition: background 0.3s;
        }
        .abt-mini-stat:last-child { border-right: 1px solid rgba(232,86,42,0.12); }
        .abt-mini-stat:hover { background: rgba(232,86,42,0.06); }
        .abt-mini-val {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1;
          background: linear-gradient(135deg, #E8562A, #F06830);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .abt-mini-lbl {
          font-family: var(--font-ui);
          font-size: 0.56rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 4px;
        }

        /* Right column */
        .abt-bio-right {
          padding-top: 60px;
        }
        .abt-accent-bar {
          width: 44px;
          height: 3px;
          background: linear-gradient(90deg, #E8562A, #F06830);
          margin-bottom: 20px;
        }
        .abt-bio-subtitle {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 2.8vw, 1.9rem);
          font-weight: 700;
          letter-spacing: 0.04em;
          line-height: 1.25;
          color: var(--text-primary);
          margin-bottom: 24px;
        }
        .abt-bio-text {
          font-family: var(--font-body);
          font-size: clamp(0.92rem, 1.5vw, 1.06rem);
          color: var(--text-secondary);
          line-height: 1.9;
          margin-bottom: 14px;
        }
        .abt-bio-text strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        /* Credentials checklist */
        .abt-credentials {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 24px;
        }
        .abt-credential-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(232,86,42,0.04);
          border: 1px solid rgba(232,86,42,0.1);
          font-family: var(--font-ui);
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text-secondary);
          transition: all 0.25s;
        }
        .abt-credential-item:hover {
          background: rgba(232,86,42,0.08);
          border-color: rgba(232,86,42,0.25);
        }
        .abt-credential-item svg {
          flex-shrink: 0;
        }

        /* ── Extended Description ── */
        .abt-extended {
          background: linear-gradient(180deg, var(--bg-white) 0%, var(--bg-cream) 100%);
          padding: 80px 32px;
          position: relative;
        }
        .abt-extended-container {
          max-width: 900px;
          margin: 0 auto;
        }
        .abt-extended-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
        }
        .abt-tl-line {
          height: 1px;
          width: 56px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.5));
        }
        .abt-tl-line:last-child {
          background: linear-gradient(90deg, rgba(232,86,42,0.5), transparent);
        }
        .abt-extended-content {
          text-align: left;
        }
        .abt-extended-content p {
          font-family: var(--font-body);
          font-size: clamp(0.94rem, 1.5vw, 1.08rem);
          color: var(--text-secondary);
          line-height: 1.9;
          margin-bottom: 18px;
        }
        .abt-extended-content strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        /* Callout box */
        .abt-callout {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 36px;
          padding: 24px 28px;
          background: linear-gradient(135deg, rgba(232,86,42,0.06) 0%, rgba(232,86,42,0.02) 100%);
          border: 1px solid rgba(232,86,42,0.2);
          border-left: 4px solid #E8562A;
        }
        .abt-callout-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(232,86,42,0.08);
          border: 1px solid rgba(232,86,42,0.2);
        }
        .abt-callout p {
          font-family: var(--font-ui);
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .abt-callout strong {
          color: var(--text-primary);
          font-size: 0.88rem;
          letter-spacing: 0.06em;
        }
        .abt-callout span {
          color: var(--text-muted);
        }

        /* ── Photo Gallery ── */
        .abt-gallery {
          background: linear-gradient(180deg, var(--bg-cream) 0%, var(--bg-light-yellow) 50%, var(--bg-cream) 100%);
          padding: 80px 32px;
          position: relative;
          overflow: hidden;
        }
        .abt-gallery::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 20%, rgba(232,86,42,0.15) 50%, transparent 80%);
        }
        .abt-gallery-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .abt-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4px;
        }
        .abt-gallery-item {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          cursor: pointer;
        }
        .abt-gallery-item img {
          transition: transform 0.5s ease;
        }
        .abt-gallery-item:hover img {
          transform: scale(1.08);
        }
        .abt-gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(46,26,26,0.8) 0%, rgba(46,26,26,0.1) 50%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .abt-gallery-item:hover .abt-gallery-overlay {
          opacity: 1;
        }
        .abt-gallery-overlay span {
          font-family: var(--font-ui);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: white;
        }

        /* ── Timeline ── */
        .abt-timeline-section {
          background: linear-gradient(180deg, var(--bg-cream) 0%, var(--bg-void) 30%, var(--bg-void) 70%, var(--bg-white) 100%);
          padding: 80px 32px 96px;
          position: relative;
        }
        .abt-timeline-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .abt-timeline {
          display: flex;
          justify-content: center;
          gap: 0;
          position: relative;
        }
        .abt-tl-item {
          flex: 1;
          max-width: 200px;
          text-align: center;
          position: relative;
          padding-top: 32px;
        }
        .abt-tl-dot {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E8562A, #F06830);
          border: 3px solid var(--bg-void);
          box-shadow: 0 0 0 2px rgba(232,86,42,0.3), 0 2px 8px rgba(232,86,42,0.2);
          z-index: 2;
        }
        .abt-tl-connector {
          position: absolute;
          top: 6px;
          left: calc(50% + 7px);
          width: calc(100% - 14px);
          height: 1px;
          background: linear-gradient(90deg, rgba(232,86,42,0.4), rgba(232,86,42,0.15));
          z-index: 1;
        }
        .abt-tl-year {
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
        .abt-tl-text {
          font-family: var(--font-ui);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          line-height: 1.45;
          padding: 0 8px;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .abt-bio-grid {
            grid-template-columns: 1fr !important;
            gap: 40px;
          }
          .abt-bio-left {
            max-width: 480px;
            margin: 0 auto;
            text-align: center;
          }
          .abt-bio-right {
            padding-top: 0;
            text-align: center;
          }
          .abt-accent-bar {
            margin-left: auto;
            margin-right: auto;
          }
          .abt-credentials {
            grid-template-columns: 1fr;
          }
          .abt-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .abt-header-inner {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
          .abt-bio { padding: 48px 20px 56px; }
.abt-extended { padding: 56px 20px; }
          .abt-gallery { padding: 56px 20px; }
          .abt-timeline-section { padding: 56px 20px 72px; }
          .abt-timeline {
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }
          .abt-tl-item {
            max-width: 100%;
            padding-top: 0;
            padding-left: 40px;
            text-align: left;
          }
          .abt-tl-dot {
            top: 4px;
            left: 0;
            transform: none;
          }
          .abt-tl-connector {
            top: 18px;
            left: 6px;
            width: 1px;
            height: calc(100% + 24px);
            background: linear-gradient(180deg, rgba(232,86,42,0.4), rgba(232,86,42,0.1));
          }
          .abt-callout {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .abt-mini-stats {
            flex-direction: column;
          }
          .abt-mini-stat {
            border-right: 1px solid rgba(232,86,42,0.12) !important;
            border-bottom: none;
          }
          .abt-mini-stat:last-child {
            border-bottom: 1px solid rgba(232,86,42,0.12);
          }
          .abt-gallery-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2px;
          }
        }
      `}</style>
    </>
  );
}
