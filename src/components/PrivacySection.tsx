"use client";

const privacyItems = [
  { title: "End-to-End Privacy", desc: "Your conversations are never recorded or disclosed to anyone" },
  { title: "No Public Sharing", desc: "Your case will never be discussed publicly or online" },
  { title: "No Spam Calls", desc: "We never call unless you initiate contact first" },
  { title: "Secure Data", desc: "Personal details are never stored without your consent" },
];

export default function PrivacySection() {
  return (
    <section className="prv">
      <div className="prv-bg-mesh" />
      <div className="prv-border-top" />
      <div className="prv-border-bottom" />

      <div className="prv-inner">
        {/* Header */}
        <div className="prv-header">
          <div className="prv-header-lines">
            <div className="prv-header-line prv-header-line--left" />
            <span className="section-label">Privacy &amp; Confidentiality</span>
            <div className="prv-header-line prv-header-line--right" />
          </div>
          <h2 className="prv-title">
            Your Privacy Is <span className="gold-text">Sacred to Us</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="prv-grid">
          {privacyItems.map((item, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={item.title}
                className="prv-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Left fire stripe */}
                <div className="prv-stripe" />

                {/* Background ghost number */}
                <span className="prv-ghost-num">{num}</span>

                {/* Content */}
                <div className="prv-card-body">
                  <div className="prv-num-label">{num}</div>
                  <h4 className="prv-card-title">{item.title}</h4>
                  <p className="prv-card-desc">{item.desc}</p>
                </div>

                {/* Bottom corner deco */}
                <div className="prv-corner-br" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .prv {
          position: relative;
          background: linear-gradient(180deg, var(--bg-pale-yellow) 0%, var(--bg-cream) 40%, var(--bg-cream) 60%, var(--bg-light-yellow) 100%);
          padding: 96px 32px;
          overflow: hidden;
        }
        .prv-bg-mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 0%, rgba(232,86,42,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 100%, rgba(240,104,48,0.03) 0%, transparent 50%);
          pointer-events: none;
        }
        .prv-border-top {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.4), transparent);
        }
        .prv-border-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.25), transparent);
        }

        .prv-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .prv-header { text-align: center; margin-bottom: 64px; }
        .prv-header-lines {
          display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 16px;
        }
        .prv-header-line { height: 1px; width: 48px; }
        .prv-header-line--left { background: linear-gradient(90deg, transparent, rgba(232,86,42,0.6)); }
        .prv-header-line--right { background: linear-gradient(90deg, rgba(232,86,42,0.6), transparent); }
        .prv-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1.2;
          margin-top: 16px;
          margin-bottom: 20px;
          color: var(--text-primary);
        }
        .prv-subtitle {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.9;
          max-width: 660px;
          margin: 0 auto;
        }

        /* Grid — 4 columns */
        .prv-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        /* Card */
        .prv-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 32px 24px 28px 28px;
          overflow: hidden;
          cursor: default;
          transition: transform 0.45s cubic-bezier(0.23,1,0.32,1),
                      box-shadow 0.45s cubic-bezier(0.23,1,0.32,1),
                      border-color 0.4s ease;
          animation: prvReveal 0.6s ease both;
        }
        .prv-card:hover {
          transform: translateY(-6px);
          border-color: rgba(232,86,42,0.4);
          box-shadow:
            0 20px 48px rgba(0,0,0,0.08),
            0 0 0 1px rgba(232,86,42,0.15),
            0 0 40px rgba(232,86,42,0.06);
        }

        /* Left fire stripe */
        .prv-stripe {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--gold-warm), var(--gold-glow));
          opacity: 0.3;
          transition: opacity 0.4s ease, width 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease;
        }
        .prv-card:hover .prv-stripe {
          opacity: 1;
          width: 4px;
          box-shadow: 4px 0 24px rgba(232,86,42,0.25), 0 0 12px rgba(232,86,42,0.15);
        }

        /* Ghost number watermark */
        .prv-ghost-num {
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
        .prv-card:hover .prv-ghost-num {
          transform: translateY(-6px);
          color: rgba(232,86,42,0.08);
        }

        /* Card body */
        .prv-card-body {
          position: relative;
          z-index: 1;
        }
        .prv-num-label {
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
        .prv-card:hover .prv-num-label {
          opacity: 1;
        }
        .prv-card-title {
          font-family: var(--font-display);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-bottom: 8px;
          transition: color 0.35s ease;
        }
        .prv-card:hover .prv-card-title {
          color: var(--gold-warm);
        }
        .prv-card-desc {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        /* Bottom-right corner deco */
        .prv-corner-br {
          position: absolute;
          bottom: 0; right: 0;
          width: 24px; height: 24px;
          border-bottom: 1px solid rgba(232,86,42,0.15);
          border-right: 1px solid rgba(232,86,42,0.15);
          transition: border-color 0.4s ease, width 0.4s ease, height 0.4s ease;
        }
        .prv-card:hover .prv-corner-br {
          width: 32px; height: 32px;
          border-color: rgba(232,86,42,0.45);
        }

        @keyframes prvReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .prv-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .prv { padding: 64px 20px; }
          .prv-header { margin-bottom: 48px; }
          .prv-ghost-num { font-size: 4.5rem; }
        }
        @media (max-width: 520px) {
          .prv-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
