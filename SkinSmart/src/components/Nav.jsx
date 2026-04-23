import { COLORS } from "../data/constants";

export default function Nav({ page, setPage, skinType }) {
  const links = ["Home", "Shop", "Influencers", "Analysis", "Profile"];

  return (
    <nav
      style={{
        background: COLORS.white,
        borderBottom: "1px solid #E8DDD6",
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: "0 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <div
          onClick={() => setPage("Home")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 600,
              color: COLORS.terra,
              letterSpacing: "0.03em",
            }}
          >
            SkinSmart
          </span>
          <span
            style={{
              fontSize: 11,
              color: COLORS.brownMid,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginTop: 2,
            }}
          >
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {links.map((l) => (
            <button
              key={l}
              onClick={() => setPage(l)}
              style={{
                background: page === l ? COLORS.terraLight : "transparent",
                color: page === l ? COLORS.terra : COLORS.brownMid,
                border: "none",
                borderRadius: 20,
                padding: "6px 14px",
                fontSize: 13.5,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: page === l ? 500 : 400,
                transition: "all 0.2s",
              }}
            >
              {l === "Home" ? "Consult" : l}
            </button>
          ))}

          {skinType && (
            <div
              style={{
                background: COLORS.terra,
                color: COLORS.white,
                borderRadius: 20,
                padding: "5px 12px",
                fontSize: 12,
                fontWeight: 500,
                marginLeft: 4,
              }}
            >
              {skinType}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
