// MapView.jsx — placeholder map chrome (legend + tutorial + emergency).

function MapView() {
  const { MapLegend, TutorialCard, EmergencyButton, Toggle, Icons } = window;
  const { Search: SearchIcon, Filter } = Icons;
  const [tutorialOpen, setTutorialOpen] = React.useState(true);
  const [filters, setFilters] = React.useState({
    crime: true,
    offenders: true,
    environment: false,
    civic: true,
  });

  return (
    <div
      style={{
        position: "relative",
        height: 720,
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 30% 60%, #1a2a40 0%, #0a1120 60%) #0a1120",
      }}
      data-screen-label="Map"
    >
      {/* Fake hex pattern */}
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.85 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="hex" width="56" height="48" patternUnits="userSpaceOnUse">
            <polygon
              points="14,0 42,0 56,24 42,48 14,48 0,24"
              fill="none"
              stroke="rgba(34,211,238,0.04)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
        {/* A few colored hex highlights to suggest data */}
        {[
          { x: 180, y: 220, c: "#34d399", o: 0.55 },
          { x: 236, y: 196, c: "#22c55e", o: 0.65 },
          { x: 292, y: 220, c: "#22c55e", o: 0.7 },
          { x: 264, y: 244, c: "#fbbf24", o: 0.6 },
          { x: 320, y: 196, c: "#fbbf24", o: 0.5 },
          { x: 348, y: 220, c: "#e82c2c", o: 0.65 },
          { x: 376, y: 196, c: "#be1c1c", o: 0.75 },
          { x: 404, y: 220, c: "#82123b", o: 0.7 },
          { x: 432, y: 244, c: "#82123b", o: 0.6 },
          { x: 460, y: 220, c: "#e82c2c", o: 0.5 },
          { x: 488, y: 196, c: "#fbbf24", o: 0.55 },
          { x: 516, y: 220, c: "#22c55e", o: 0.65 },
          { x: 220, y: 268, c: "#22c55e", o: 0.5 },
          { x: 276, y: 292, c: "#34d399", o: 0.6 },
          { x: 332, y: 268, c: "#fbbf24", o: 0.55 },
          { x: 388, y: 292, c: "#e82c2c", o: 0.6 },
          { x: 444, y: 268, c: "#be1c1c", o: 0.65 },
          { x: 500, y: 292, c: "#22c55e", o: 0.5 },
          { x: 580, y: 244, c: "#22c55e", o: 0.55 },
          { x: 636, y: 220, c: "#34d399", o: 0.5 },
          { x: 720, y: 268, c: "#fbbf24", o: 0.5 },
          { x: 800, y: 220, c: "#22c55e", o: 0.55 },
          { x: 880, y: 244, c: "#22c55e", o: 0.4 },
        ].map((p, i) => (
          <polygon
            key={i}
            points={`${p.x - 14},${p.y} ${p.x},${p.y - 24} ${p.x + 14},${p.y} ${p.x + 14},${p.y + 24} ${p.x},${p.y + 24} ${p.x - 14},${p.y}`}
            fill={p.c}
            fillOpacity={p.o}
            stroke="rgba(255,255,255,0.04)"
          />
        ))}
      </svg>

      {/* Top-left: search */}
      <div style={{ position: "absolute", top: 16, left: 16, width: 280 }}>
        <div
          style={{
            position: "relative",
            background: "rgba(13,28,50,0.90)",
            border: "1px solid rgba(36,59,85,0.4)",
            borderRadius: 10,
            padding: "10px 14px 10px 38px",
            backdropFilter: "blur(10px)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.45)",
            color: "#9fb3c8",
            fontSize: 13,
          }}
        >
          <SearchIcon
            size={16}
            style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#627d98" }}
          />
          Search any US address or city…
        </div>
      </div>

      {/* Top-right: filter button */}
      <button
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px",
          borderRadius: 10,
          background: "rgba(13,28,50,0.90)",
          border: "1px solid rgba(36,59,85,0.4)",
          color: "#a5f3fc",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          backdropFilter: "blur(10px)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.45)",
        }}
      >
        <Filter size={14} /> Filters
      </button>

      {/* Right filter panel (mini) */}
      <div
        style={{
          position: "absolute",
          top: 76,
          right: 16,
          width: 240,
          padding: 16,
          background: "rgba(13,28,50,0.90)",
          border: "1px solid rgba(36,59,85,0.4)",
          borderRadius: 12,
          backdropFilter: "blur(10px)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.45)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#829ab1",
          }}
        >
          Layers
        </div>
        <Toggle
          checked={filters.crime}
          onChange={(v) => setFilters({ ...filters, crime: v })}
          label="Violent Crime"
        />
        <Toggle
          checked={filters.offenders}
          onChange={(v) => setFilters({ ...filters, offenders: v })}
          label="Sex Offender Density"
        />
        <Toggle
          checked={filters.environment}
          onChange={(v) => setFilters({ ...filters, environment: v })}
          label="Environmental Hazards"
          color="#0ea5e9"
        />
        <Toggle
          checked={filters.civic}
          onChange={(v) => setFilters({ ...filters, civic: v })}
          label="Detention & Protest"
          color="#a78bfa"
        />
      </div>

      {/* Bottom-left: legend */}
      <div style={{ position: "absolute", bottom: 16, left: 16 }}>
        <MapLegend />
      </div>

      {/* Bottom-right: emergency button */}
      <div style={{ position: "absolute", bottom: 24, right: 28 }}>
        <EmergencyButton />
      </div>

      {/* Tutorial card overlay */}
      {tutorialOpen && (
        <>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.25)",
              zIndex: 40,
            }}
            onClick={() => setTutorialOpen(false)}
          />
          <div
            style={{
              position: "absolute",
              bottom: 36,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 41,
            }}
          >
            <TutorialCard onDismiss={() => setTutorialOpen(false)} />
          </div>
        </>
      )}
    </div>
  );
}

window.MapView = MapView;
