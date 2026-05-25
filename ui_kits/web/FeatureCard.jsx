// FeatureCard.jsx — accent-bordered link card from the homepage.

function FeatureCard({ icon: IconComp, iconColor, borderColor, hoverBorder, title, body }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        background: hover ? "rgba(22,32,50,0.6)" : "rgba(22,32,50,0.4)",
        borderRadius: 12,
        padding: 24,
        border: `1px solid ${hover ? hoverBorder : borderColor}`,
        textDecoration: "none",
        transition: "all 200ms",
      }}
    >
      <IconComp size={32} style={{ color: iconColor, marginBottom: 16 }} />
      <h2
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: hover ? "#fff" : "#d9e2ec",
          margin: "0 0 8px",
          transition: "color 200ms",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: 14,
          color: "#829ab1",
          lineHeight: 1.55,
          margin: 0,
        }}
      >
        {body}
      </p>
    </a>
  );
}

function FeatureCardGrid() {
  const { Map, GraduationCap, Route } = window.Icons;
  const features = [
    {
      icon: Map,
      iconColor: "#22d3ee",
      borderColor: "rgba(6,182,212,0.2)",
      hoverBorder: "rgba(6,182,212,0.4)",
      title: "Interactive Safety Map",
      body:
        "Explore a color-coded heat map of the US showing safety scores at state, county, and city levels. Filter by crime type, demographics, and more.",
    },
    {
      icon: GraduationCap,
      iconColor: "#22c55e",
      borderColor: "rgba(34,197,94,0.2)",
      hoverBorder: "rgba(34,197,94,0.4)",
      title: "School Safety",
      body:
        "Search any school in the US and see the safety score for the surrounding area. Compare across schools and adjust the analysis radius.",
    },
    {
      icon: Route,
      iconColor: "#f97316",
      borderColor: "rgba(249,115,22,0.2)",
      hoverBorder: "rgba(249,115,22,0.4)",
      title: "Route Safety Analysis",
      body:
        "Plan your route and understand the safety profile of your path. Get risk assessments by time of day and discover safer alternatives.",
    },
  ];
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
        marginBottom: 96,
      }}
    >
      {features.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </section>
  );
}

window.FeatureCard = FeatureCard;
window.FeatureCardGrid = FeatureCardGrid;
