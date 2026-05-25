// Footer.jsx — three-column footer with disclosure.

function Footer() {
  const link = {
    color: "#627d98",
    fontSize: 12,
    textDecoration: "none",
    display: "block",
    padding: "4px 0",
  };
  return (
    <footer
      style={{
        background: "#0a1120",
        borderTop: "1px solid rgba(22,32,50,0.5)",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "32px 16px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: 32,
        }}
      >
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "#bcccdc", marginBottom: 12 }}>
            SafeNSound
          </h3>
          <p style={{ fontSize: 12, color: "#486581", lineHeight: 1.6, margin: 0, maxWidth: 360 }}>
            Data-driven safety insights for families and women. All data is
            sourced from publicly available datasets. Scores are statistical
            estimates, not guarantees.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "#bcccdc", marginBottom: 12 }}>
            Navigation
          </h3>
          <a style={link} href="#">Interactive Map</a>
          <a style={link} href="#">School Safety</a>
          <a style={link} href="#">Route Safety</a>
        </div>
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "#bcccdc", marginBottom: 12 }}>
            Legal
          </h3>
          <a style={link} href="#">Transparency & Methodology</a>
          <a style={link} href="#">Disclaimers</a>
          <a style={link} href="#">Data Sources</a>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "16px 16px 28px",
          borderTop: "1px solid rgba(22,32,50,0.5)",
          fontSize: 11,
          color: "#3b4f6b",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} SafeNSound. All safety scores are estimates for educational purposes only.
      </div>
    </footer>
  );
}

window.Footer = Footer;
