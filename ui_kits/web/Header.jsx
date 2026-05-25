// Header.jsx — sticky glass header recreation.
// Mirrors src/components/layout/Header.tsx from the SafeNSound codebase.

function Header({ active = "/" }) {
  const { Menu: MenuIcon, X: XIcon } = window.Icons;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const links = [
    { href: "/map", label: "Map" },
    { href: "/state-overview", label: "State Overview" },
    { href: "/school-safety", label: "School Safety" },
    { href: "/route-safety", label: "Route Safety" },
    { href: "/transparency", label: "Transparency" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "rgba(13,28,50,0.97)",
        borderBottom: "1px solid rgba(36,59,85,0.5)",
        boxShadow:
          "0 1px 0 rgba(34,211,238,0.10), 0 4px 28px rgba(0,0,0,0.45)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 1rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
          className="sns-logo-link"
        >
          <span
            style={{ fontSize: "1.9rem", lineHeight: 1 }}
            className="helmet-pop"
            aria-hidden="true"
          >
            ⛑️
          </span>
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "-0.005em",
              color: "rgba(255,255,255,0.95)",
            }}
          >
            Safe<span style={{ color: "#67e8f9" }}>N</span>Sound
          </span>
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
          className="sns-nav-desktop"
        >
          {links.map((l) => {
            const isActive = l.href === active;
            return (
              <a
                key={l.href}
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: isActive ? "#a5f3fc" : "#829ab1",
                  background: isActive ? "rgba(34,211,238,0.14)" : "transparent",
                  boxShadow: isActive
                    ? "inset 0 0 0 1px rgba(34,211,238,0.30)"
                    : "none",
                  transition: "all 150ms",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "#e4edf8";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#829ab1";
                  }
                }}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

window.Header = Header;
