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
      background: "linear-gradient(90deg, #F9EFEF 0%, #F5E5E5 20%, #F9EFEF 50%, #F5E5E5 80%, #F9EFEF 100%)",
      borderTop: "1px solid rgba(165,32,32,0.3)",
      borderBottom: "1px solid rgba(165,32,32,0.3)",
      padding: "0",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Green top line */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(181,36,36,0.5), transparent)" }} />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(165,32,32,0.35), transparent)" }} />

      <div className="marquee-track" style={{ display:"flex", width:"max-content", padding:"0" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            display:"inline-flex", alignItems:"center",
            padding:"14px 32px",
            fontFamily:"var(--font-ui)",
            fontSize:"0.84rem",
            fontWeight:700,
            letterSpacing:"0.28em",
            textTransform:"uppercase",
            color:"rgba(165,32,32,0.85)",
            whiteSpace:"nowrap",
            borderRight:"1px solid rgba(165,32,32,0.12)",
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
