export default function MarqueeBar() {
  const items = [
    "✦ Love Problem Solution",
    "✦ Kundali Matching",
    "✦ Black Magic Removal",
    "✦ Love Marriage Specialist",
    "✦ Husband-Wife Dispute",
    "✦ Career & Business Growth",
    "✦ Child Birth Prediction",
    "✦ Marriage Prediction",
    "✦ Intercaste Marriage",
    "✦ Ex Love Back",
    "✦ Visa Immigration Problem",
    "✦ Vastu Consultation",
  ];
  const doubled = [...items, ...items];

  return (
    <div style={{
      background: "linear-gradient(90deg, #0A0714 0%, #141020 20%, #0A0714 50%, #141020 80%, #0A0714 100%)",
      borderTop: "1px solid rgba(201,165,90,0.4)",
      borderBottom: "1px solid rgba(201,165,90,0.4)",
      padding: "0",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Gold top line */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(242,201,76,0.6), transparent)" }} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(201,165,90,0.4), transparent)" }} />

      <div className="marquee-track" style={{ display:"flex", width:"max-content", padding:"0" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            display:"inline-flex", alignItems:"center",
            padding:"14px 32px",
            fontFamily:"var(--font-ui)",
            fontSize:"0.58rem",
            fontWeight:700,
            letterSpacing:"0.28em",
            textTransform:"uppercase",
            color:"rgba(201,165,90,0.85)",
            whiteSpace:"nowrap",
            borderRight:"1px solid rgba(201,165,90,0.12)",
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
