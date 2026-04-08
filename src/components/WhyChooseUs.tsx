"use client";

const features = [
  { icon: "⚡", title: "Instant Solutions", desc: "Fast, accurate remedies without lengthy delays. Solutions delivered with clarity and expert guidance for immediate peace of mind." },
  { icon: "🌍", title: "Available Globally", desc: "Serving clients across India, Europe, Africa and Asia Pacific. Consultations available anytime, anywhere in the world." },
  { icon: "🎯", title: "Clarity & Expert Remedies", desc: "Concise advice, effective remedies and personalized solutions combining traditional Vedic wisdom with modern methodology." },
  { icon: "💎", title: "Lifetime Support", desc: "Ongoing guidance beyond the first consultation. We stay with you for sustained life improvement and continued success." },
  { icon: "✅", title: "Effective Life Solutions", desc: "Proven Vedic techniques for love, career, health and spirituality. Thousands of transformed lives across all religions and castes." },
  { icon: "🛡️", title: "Ultimate Problem Remedies", desc: "Deep Vedic knowledge backed by 25+ years of practice as a 5th generation astrologer with 90K+ successful consultations." },
  { icon: "🔮", title: "Accurate Predictions", desc: "Precise Kundali reading and birth chart analysis using authentic Vedic methodology passed down through five generations." },
  { icon: "🙏", title: "All Religions Welcome", desc: "Compassionate service to people of every faith, caste and community with equal devotion and respect." },
];

export default function WhyChooseUs() {
  return (
    <section className="wcu">
      <div className="wcu-bg-mesh" />
      <div className="wcu-border-top" />
      <div className="wcu-border-bottom" />

      <div className="wcu-inner">
        {/* Header */}
        <div className="wcu-header">
          <div className="wcu-header-lines">
            <div className="wcu-header-line wcu-header-line--left" />
            <span className="section-label">Why Choose Us</span>
            <div className="wcu-header-line wcu-header-line--right" />
          </div>
          <h2 className="wcu-title">
            Trusted by Thousands, <span className="gold-text">Proven by Results</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="wcu-grid">
          {features.map((f, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={f.title}
                className="wcu-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Left fire stripe */}
                <div className="wcu-stripe" />

                {/* Background ghost number */}
                <span className="wcu-ghost-num">{num}</span>

                {/* Content */}
                <div className="wcu-card-body">
                  <div className="wcu-num-label">{num}</div>
                  <h4 className="wcu-card-title">{f.title}</h4>
                  <p className="wcu-card-desc">{f.desc}</p>
                </div>

                {/* Bottom corner deco */}
                <div className="wcu-corner-br" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .wcu {
          position: relative;
          background: linear-gradient(180deg, var(--bg-white) 0%, var(--bg-light-yellow) 20%, var(--bg-light-yellow) 80%, var(--bg-pale-yellow) 100%);
          padding: 96px 32px;
          overflow: hidden;
        }
        .wcu-bg-mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 0%, rgba(232,86,42,0.045) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, rgba(240,104,48,0.035) 0%, transparent 50%);
          pointer-events: none;
        }
        .wcu-border-top {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.4), transparent);
        }
        .wcu-border-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.3), transparent);
        }

        .wcu-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .wcu-header { text-align: center; margin-bottom: 64px; }
        .wcu-header-lines {
          display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 16px;
        }
        .wcu-header-line { height: 1px; width: 48px; }
        .wcu-header-line--left { background: linear-gradient(90deg, transparent, rgba(232,86,42,0.6)); }
        .wcu-header-line--right { background: linear-gradient(90deg, rgba(232,86,42,0.6), transparent); }
        .wcu-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4.5vw, 3rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1.2;
          margin-top: 16px;
          color: var(--text-primary);
        }

        /* Grid */
        .wcu-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        /* ── Card ── */
        .wcu-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 32px 24px 28px 28px;
          overflow: hidden;
          cursor: default;
          transition: transform 0.45s cubic-bezier(0.23,1,0.32,1),
                      box-shadow 0.45s cubic-bezier(0.23,1,0.32,1),
                      border-color 0.4s ease;
          animation: wcuReveal 0.6s ease both;
        }
        .wcu-card:hover {
          transform: translateY(-6px);
          border-color: rgba(232,86,42,0.4);
          box-shadow:
            0 20px 48px rgba(0,0,0,0.08),
            0 0 0 1px rgba(232,86,42,0.15),
            0 0 40px rgba(232,86,42,0.06);
        }

        /* Left fire stripe */
        .wcu-stripe {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--gold-warm), var(--gold-glow));
          opacity: 0.3;
          transition: opacity 0.4s ease, width 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease;
        }
        .wcu-card:hover .wcu-stripe {
          opacity: 1;
          width: 4px;
          box-shadow: 4px 0 24px rgba(232,86,42,0.25), 0 0 12px rgba(232,86,42,0.15);
        }

        /* Ghost number watermark */
        .wcu-ghost-num {
          position: absolute;
          top: -8px; right: 6px;
          font-family: var(--font-display);
          font-size: 5.5rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          color: rgba(232,86,42,0.04);
          pointer-events: none;
          transition: transform 0.5s cubic-bezier(0.23,1,0.32,1), color 0.4s ease;
          user-select: none;
        }
        .wcu-card:hover .wcu-ghost-num {
          transform: translateY(-6px);
          color: rgba(232,86,42,0.08);
        }

        /* Card body */
        .wcu-card-body {
          position: relative;
          z-index: 1;
        }
        .wcu-num-label {
          font-family: var(--font-ui);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold-warm);
          opacity: 0.6;
          margin-bottom: 4px;
          transition: opacity 0.3s ease;
        }
        .wcu-card:hover .wcu-num-label {
          opacity: 1;
        }
        .wcu-card-title {
          font-family: var(--font-display);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-bottom: 8px;
          transition: color 0.35s ease;
        }
        .wcu-card:hover .wcu-card-title {
          color: var(--gold-warm);
        }
        .wcu-card-desc {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        /* Bottom-right corner deco */
        .wcu-corner-br {
          position: absolute;
          bottom: 0; right: 0;
          width: 24px; height: 24px;
          border-bottom: 1px solid rgba(232,86,42,0.15);
          border-right: 1px solid rgba(232,86,42,0.15);
          transition: border-color 0.4s ease, width 0.4s ease, height 0.4s ease;
        }
        .wcu-card:hover .wcu-corner-br {
          width: 32px; height: 32px;
          border-color: rgba(232,86,42,0.45);
        }

        @keyframes wcuReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .wcu-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .wcu { padding: 64px 20px; }
          .wcu-header { margin-bottom: 48px; }
          .wcu-ghost-num { font-size: 4.5rem; }
        }
        @media (max-width: 520px) {
          .wcu-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
