// Icons.jsx — Lucide-style stroke SVGs as React components.
// One-liner so each is a clean function. Stroke matches Lucide defaults.

const Ic = ({ children, size = 18, className = "", ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

const Map = (p) => (
  <Ic {...p}>
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8" y2="18" />
    <line x1="16" y1="6" x2="16" y2="22" />
  </Ic>
);
const GraduationCap = (p) => (
  <Ic {...p}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </Ic>
);
const Route = (p) => (
  <Ic {...p}>
    <circle cx="6" cy="19" r="3" />
    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
    <circle cx="18" cy="5" r="3" />
  </Ic>
);
const Shield = (p) => (
  <Ic {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Ic>
);
const Search = (p) => (
  <Ic {...p}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </Ic>
);
const Menu = (p) => (
  <Ic {...p}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </Ic>
);
const X = (p) => (
  <Ic {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Ic>
);
const ArrowRight = (p) => (
  <Ic {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Ic>
);
const ChevronRight = (p) => (
  <Ic {...p}>
    <polyline points="9 18 15 12 9 6" />
  </Ic>
);
const Filter = (p) => (
  <Ic {...p}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </Ic>
);
const AlertTriangle = (p) => (
  <Ic {...p}>
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </Ic>
);

window.Icons = { Map, GraduationCap, Route, Shield, Search, Menu, X, ArrowRight, ChevronRight, Filter, AlertTriangle };
