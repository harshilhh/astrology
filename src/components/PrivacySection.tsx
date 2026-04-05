"use client";
export default function PrivacySection() {
  return (
    <section style={{ background:"var(--bg-pale-yellow)", padding:"80px 32px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 50%, rgba(232,86,42,0.04) 0%, transparent 60%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(232,86,42,0.4), transparent)" }} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(232,86,42,0.25), transparent)" }} />

      <div style={{ maxWidth:900, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
        {/* Icon */}
        <div style={{ width:80, height:80, border:"1px solid rgba(232,86,42,0.4)", background:"rgba(232,86,42,0.07)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2.4rem", margin:"0 auto 28px", position:"relative", boxShadow:"0 0 40px rgba(232,86,42,0.12)" }}>
          🔒
          <div style={{ position:"absolute", inset:-6, border:"1px solid rgba(232,86,42,0.15)" }} />
        </div>

        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:16 }}>
          <div style={{ height:1, width:40, background:"linear-gradient(90deg, transparent, rgba(232,86,42,0.6))" }} />
          <span className="section-label">Privacy & Confidentiality</span>
          <div style={{ height:1, width:40, background:"linear-gradient(90deg, rgba(232,86,42,0.6), transparent)" }} />
        </div>

        <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,4vw,2.4rem)", fontWeight:700, letterSpacing:"0.08em", marginBottom:16, marginTop:16, color:"var(--text-primary)" }}>
          Your Privacy Is <span className="gold-text">Sacred to Us</span>
        </h2>

        <p style={{ fontFamily:"var(--font-body)", fontSize:"1.1rem", color:"var(--text-secondary)", lineHeight:1.9, maxWidth:660, margin:"0 auto 48px" }}>
          We understand that your personal problems are deeply sensitive. Every consultation with Vikram Bhai Joshi is completely private and confidential. Your name, contact details, and the nature of your problem will never be shared with anyone — not family, friends, or any third party. What you share stays between you and us.
        </p>

        {/* Privacy guarantees */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:2 }}>
          {[
            { icon:"🔐", title:"End-to-End Privacy", desc:"Your conversations are never recorded or disclosed" },
            { icon:"🤫", title:"No Public Sharing", desc:"Your case will never be discussed publicly or online" },
            { icon:"📵", title:"No Spam Calls", desc:"We never call unless you initiate contact first" },
            { icon:"🗂️", title:"Secure Data", desc:"Personal details are never stored without your consent" },
          ].map((item) => (
            <div key={item.title} style={{ padding:"28px 20px", textAlign:"center", background:"var(--card-bg)", border:"1px solid rgba(232,86,42,0.15)", transition:"all 0.3s ease", position:"relative" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(232,86,42,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(232,86,42,0.15)"; }}
            >
              <div style={{ width:52, height:52, border:"1px solid rgba(232,86,42,0.3)", background:"rgba(232,86,42,0.06)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.6rem", margin:"0 auto 14px" }}>
                {item.icon}
              </div>
              <h4 style={{ fontFamily:"var(--font-display)", fontSize:"0.84rem", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--text-primary)", marginBottom:8 }}>{item.title}</h4>
              <p style={{ fontFamily:"var(--font-body)", fontSize:"1.04rem", color:"var(--text-muted)", lineHeight:1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
