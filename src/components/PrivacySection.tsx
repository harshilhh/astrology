"use client";
export default function PrivacySection() {
  return (
    <section
      style={{
        background: "var(--bg-pale-yellow)",
        padding: "80px 24px",
        position: "relative",
        borderTop: "3px solid var(--gold-warm)",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Privacy icon */}
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            border: "3px solid rgba(212,175,55,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.8rem",
            margin: "0 auto 28px",
            background: "white",
            boxShadow: "0 8px 30px rgba(180,140,0,0.15)",
          }}
        >
          🔒
        </div>

        <span className="section-label" style={{ marginBottom: 20, display: "inline-block" }}>
          Privacy & Confidentiality
        </span>

        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700,
            letterSpacing: "0.05em",
            marginBottom: 16,
            marginTop: 16,
            color: "var(--text-primary)",
          }}
        >
          Your Privacy Is{" "}
          <span className="gold-text">Sacred to Us</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.9,
            maxWidth: 660,
            margin: "0 auto 40px",
          }}
        >
          We understand that your personal problems are deeply sensitive. Every consultation
          with Shri Rajyog ji is completely private and confidential. Your name, contact details,
          and the nature of your problem will never be shared with anyone — not family, friends,
          or any third party. What you share stays between you and us.
        </p>

        {/* Privacy guarantees */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
          }}
        >
          {[
            { icon: "🔐", title: "End-to-End Privacy", desc: "Your conversations are never recorded or disclosed" },
            { icon: "🤫", title: "No Public Sharing", desc: "Your case will never be discussed publicly or online" },
            { icon: "📵", title: "No Spam Calls", desc: "We never call unless you initiate contact first" },
            { icon: "🗂️", title: "Secure Data", desc: "Personal details are never stored without your consent" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "28px 20px",
                borderRadius: 16,
                textAlign: "center",
                background: "white",
                border: "1px solid rgba(212,175,55,0.3)",
                boxShadow: "0 4px 20px rgba(180,140,0,0.08)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(180,140,0,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(180,140,0,0.08)";
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(255,215,0,0.12)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  margin: "0 auto 14px",
                }}
              >
                {item.icon}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
