// SchoolSafetyView.jsx — example results screen for /school-safety.

function SchoolSafetyView() {
  const { Search: SearchIcon } = window.Icons;
  const { ScoreBadge, GradientBar } = window;

  return (
    <div style={{ maxWidth: 880, margin: "0 auto", padding: "32px 16px" }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 600, color: "#d9e2ec", margin: "0 0 8px", letterSpacing: "-0.01em" }}>
          School Safety
        </h1>
        <p style={{ color: "#829ab1", margin: 0 }}>
          Search for any school in the US to see the environmental safety score
          for the surrounding area.
        </p>
      </div>

      <div style={{ position: "relative", marginBottom: 24 }}>
        <SearchIcon
          size={18}
          style={{
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#627d98",
          }}
        />
        <input
          value="Eleanor Roosevelt High School"
          readOnly
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "12px 16px 12px 44px",
            background: "rgba(22,32,50,0.6)",
            border: "1px solid rgba(36,59,85,0.6)",
            borderRadius: 8,
            color: "#e4edf8",
            fontSize: 14,
            outline: "none",
          }}
        />
      </div>

      <div style={{ marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 14, color: "#829ab1" }}>Analysis radius:</span>
        <div
          style={{
            display: "inline-flex",
            gap: 4,
            background: "rgba(22,32,50,0.6)",
            border: "1px solid rgba(36,59,85,0.4)",
            borderRadius: 8,
            padding: 4,
          }}
        >
          {[0.5, 1, 3, 5].map((r) => (
            <button
              key={r}
              style={{
                padding: "6px 14px",
                fontSize: 13,
                borderRadius: 6,
                border: 0,
                cursor: "pointer",
                background: r === 1 ? "#06b6d4" : "transparent",
                color: r === 1 ? "#fff" : "#829ab1",
                transition: "all 150ms",
              }}
            >
              {r} mi
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "rgba(22,32,50,0.4)",
          borderRadius: 12,
          border: "1px solid rgba(36,59,85,0.4)",
          padding: 24,
          marginBottom: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
          <ScoreBadge score={72} size="lg" />
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#d9e2ec", margin: 0 }}>
              Eleanor Roosevelt High School
            </h2>
            <p style={{ fontSize: 13, color: "#829ab1", margin: "4px 0 0" }}>
              7601 Hanover Pkwy, Greenbelt, MD 20770
            </p>
            <p style={{ fontSize: 13, color: "#627d98", margin: "4px 0 0" }}>
              High School · Prince George's County
            </p>
            <div style={{ fontSize: 12, color: "#486581", marginTop: 8 }}>
              Score for 1-mile radius around this school
            </div>
          </div>
        </div>
        <div style={{ marginTop: 16, display: "flex", gap: 16, textAlign: "center" }}>
          {[
            { v: 72, l: "This Area" },
            { v: 64, l: "State Avg" },
            { v: 58, l: "National Avg" },
          ].map((s) => (
            <div
              key={s.l}
              style={{
                flex: 1,
                padding: 12,
                background: "rgba(36,59,85,0.3)",
                borderRadius: 8,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 700, color: "#d9e2ec" }}>{s.v}</div>
              <div style={{ fontSize: 11, color: "#627d98" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "rgba(22,32,50,0.4)",
          borderRadius: 12,
          border: "1px solid rgba(36,59,85,0.4)",
          padding: 24,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "#bcccdc", margin: "0 0 16px" }}>
          Contributing Factors
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <GradientBar score={82} label="Violent Crime Rate" rawValue="312 per 100k" />
          <GradientBar score={64} label="Sex Offender Density" rawValue="247 per 100k" />
          <GradientBar score={48} label="Poverty Rate" rawValue="13.2%" />
          <GradientBar score={22} label="Environmental Hazards" rawValue="low" />
          <GradientBar score={12} label="Youth-Attraction Areas" rawValue="7 in radius" />
        </div>
      </div>
    </div>
  );
}

window.SchoolSafetyView = SchoolSafetyView;
