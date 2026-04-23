import { useState } from "react";
import { COLORS } from "../data/constants";
import { SKIN_DATA } from "../data/skinData";
import { INFLUENCERS } from "../data/influencers";

export default function InfluencerPage({ skinType }) {
  const [selected, setSelected] = useState(null);

  const shown = skinType
    ? INFLUENCERS.filter((i) => i.skinType === skinType)
    : INFLUENCERS;
  const displayList = shown.length > 0 ? shown : INFLUENCERS;

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 1.5rem" }}>
      <p
        style={{
          fontSize: 12,
          color: COLORS.brownMid,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        Community
      </p>
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 36,
          fontWeight: 500,
          color: COLORS.brown,
          marginBottom: 8,
        }}
      >
        {skinType ? `${skinType} Skin Creators` : "Skin Influencers"}
      </h1>
      <p style={{ color: COLORS.brownMid, marginBottom: 32, fontSize: 15 }}>
        Real people, real journeys — learn from creators with skin like yours.
      </p>

      {selected ? (
        /* ── Detail View ── */
        <div>
          <button
            onClick={() => setSelected(null)}
            style={{
              background: "none",
              border: "none",
              color: COLORS.terra,
              cursor: "pointer",
              marginBottom: 20,
              fontSize: 14,
            }}
          >
            ← Back to all
          </button>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: 32,
              background: COLORS.white,
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid #E8DDD6",
            }}
          >
            {/* Left: photo + badge */}
            <div>
              <img
                src={selected.img}
                alt={selected.name}
                style={{ width: "100%", height: 320, objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: COLORS.brown,
                  }}
                >
                  {selected.name}
                </div>
                <div style={{ color: COLORS.terra, fontSize: 14, marginBottom: 8 }}>
                  {selected.handle}
                </div>
                <div
                  style={{
                    background: SKIN_DATA[selected.skinType]?.bg || COLORS.creamDark,
                    color: SKIN_DATA[selected.skinType]?.color || COLORS.brownMid,
                    borderRadius: 12,
                    padding: "4px 12px",
                    display: "inline-block",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  {selected.skinType} Skin
                </div>
              </div>
            </div>

            {/* Right: story + tips */}
            <div style={{ padding: "2rem" }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 24,
                  fontWeight: 500,
                  color: COLORS.brown,
                  marginBottom: 16,
                }}
              >
                Her Story
              </h2>
              <p
                style={{
                  color: COLORS.brownMid,
                  lineHeight: 1.8,
                  fontSize: 15,
                  marginBottom: 28,
                }}
              >
                {selected.story}
              </p>

              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: COLORS.brown,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Top Tips
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {selected.tips.map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: COLORS.terraLight,
                        color: COLORS.terra,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        fontWeight: 600,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {i + 1}
                    </div>
                    <p style={{ color: COLORS.brownMid, fontSize: 14.5, lineHeight: 1.6 }}>{t}</p>
                  </div>
                ))}
              </div>

              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: COLORS.brown,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Products She Uses
              </h3>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {selected.products.map((p, i) => (
                  <span
                    key={i}
                    style={{
                      background: COLORS.creamDark,
                      color: COLORS.brownMid,
                      borderRadius: 16,
                      padding: "6px 14px",
                      fontSize: 13,
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ── Card Grid ── */
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: 20,
          }}
        >
          {displayList.map((inf) => (
            <div
              key={inf.name}
              onClick={() => setSelected(inf)}
              style={{
                background: COLORS.white,
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid #E8DDD6",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                <img
                  src={inf.img}
                  alt={inf.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    background: SKIN_DATA[inf.skinType]?.color || COLORS.terra,
                    color: COLORS.white,
                    borderRadius: 12,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontWeight: 500,
                  }}
                >
                  {inf.skinType} Skin
                </div>
              </div>
              <div style={{ padding: "18px 20px" }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: COLORS.brown,
                    marginBottom: 3,
                  }}
                >
                  {inf.name}
                </div>
                <div style={{ color: COLORS.terra, fontSize: 13, marginBottom: 10 }}>
                  {inf.handle}
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    color: COLORS.brownMid,
                    lineHeight: 1.6,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {inf.story}
                </p>
                <div
                  style={{
                    color: COLORS.terra,
                    fontSize: 13,
                    marginTop: 12,
                    fontWeight: 500,
                  }}
                >
                  Read her story →
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}