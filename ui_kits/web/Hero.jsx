// Hero.jsx — homepage hero with Shield icon, headline, CTAs.

function Hero() {
  const { Shield, Map: MapIc } = window.Icons;
  return (
    <section style={{ textAlign: "center", padding: "80px 16px 96px" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "rgba(6,182,212,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Shield size={32} style={{ color: "#22d3ee" }} />
        </div>
      </div>
      <h1
        style={{
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "#d9e2ec",
          margin: "0 0 16px",
          lineHeight: 1.1,
        }}
      >
        Know Before You Go
      </h1>
      <p
        style={{
          fontSize: 18,
          color: "#829ab1",
          maxWidth: 640,
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        Data-driven safety insights for families and women. Understand the
        safety landscape of any area in the United States using publicly
        available data.
      </p>
      <div
        style={{
          marginTop: 32,
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 24px",
            background: "#06b6d4",
            color: "#fff",
            border: 0,
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 10px 32px rgba(6,182,212,0.20)",
            transition: "background 150ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#22d3ee")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#06b6d4")}
        >
          <MapIc size={16} />
          Explore the Map
        </button>
        <button
          style={{
            padding: "12px 24px",
            background: "rgba(22,32,50,0.6)",
            color: "#bcccdc",
            border: "1px solid rgba(36,59,85,0.5)",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 150ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(36,59,85,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(22,32,50,0.6)";
          }}
        >
          How It Works
        </button>
      </div>
    </section>
  );
}

window.Hero = Hero;
