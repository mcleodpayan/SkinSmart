import { useState } from "react";
import { COLORS } from "../data/constants";
import { SKIN_DATA } from "../data/skinData";
import { PRODUCTS } from "../data/products";

const CATEGORIES = ["All", "Cleanser", "Moisturizer", "Sunscreen", "Treatment"];
const SKIN_TYPES = ["All", "Oily", "Dry", "Normal", "Combination"];

export default function ShopPage({ skinType }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSkinType, setActiveSkinType] = useState(skinType || "All");

  // Get products based on selected skin type
  const getProducts = () => {
    if (activeSkinType === "All") {
      return Object.entries(PRODUCTS).flatMap(([type, items]) =>
        items.map((p) => ({ ...p, skinType: type }))
      );
    }
    return (PRODUCTS[activeSkinType] || []).map((p) => ({ ...p, skinType: activeSkinType }));
  };

  const products = getProducts();
  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const currentData = activeSkinType !== "All" ? SKIN_DATA[activeSkinType] : null;

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <p
          style={{
            fontSize: 12,
            color: COLORS.brownMid,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {activeSkinType !== "All" ? `Curated for ${activeSkinType} skin` : "Browse all products"}
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 36,
            fontWeight: 500,
            color: COLORS.brown,
          }}
        >
          {activeSkinType !== "All" ? `${activeSkinType} Skin Picks` : "All Products"}
        </h1>
      </div>

      {/* Skin Type Filter */}
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 11, color: COLORS.brownMid, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
          Skin Type
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {SKIN_TYPES.map((type) => {
            const d = type !== "All" ? SKIN_DATA[type] : null;
            const isActive = activeSkinType === type;
            return (
              <button
                key={type}
                onClick={() => setActiveSkinType(type)}
                style={{
                  background: isActive ? (d ? d.color : COLORS.brown) : (d ? d.bg : COLORS.creamDark),
                  color: isActive ? COLORS.white : (d ? d.color : COLORS.brownMid),
                  border: "none",
                  borderRadius: 20,
                  padding: "8px 20px",
                  fontSize: 13.5,
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: isActive ? 500 : 400,
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {d && <span style={{ fontSize: 12 }}>{d.emoji}</span>}
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #E8DDD6", marginBottom: 16 }} />

      {/* Category Filter */}
      <div style={{ marginBottom: 32 }}>
        <p style={{ fontSize: 11, color: COLORS.brownMid, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
          Category
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{
                background: activeCategory === c ? COLORS.terra : COLORS.white,
                color: activeCategory === c ? COLORS.white : COLORS.brownMid,
                border: activeCategory === c ? "none" : "1px solid #E8DDD6",
                borderRadius: 20,
                padding: "8px 18px",
                fontSize: 13.5,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p style={{ fontSize: 13, color: COLORS.brownMid, marginBottom: 20 }}>
        Showing <strong style={{ color: COLORS.brown }}>{filtered.length}</strong> products
        {activeSkinType !== "All" ? ` for ${activeSkinType} skin` : ""}
        {activeCategory !== "All" ? ` · ${activeCategory}` : ""}
      </p>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {filtered.map((p, index) => {
          const cardData = SKIN_DATA[p.skinType];
          return (
            <div
              key={`${p.skinType}-${p.id}-${index}`}
              style={{
                background: COLORS.white,
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid #E8DDD6",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={{ height: 200, overflow: "hidden" }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "18px 20px" }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                  {/* Category badge */}
                  <div
                    style={{
                      display: "inline-block",
                      background: cardData ? cardData.bg : COLORS.creamDark,
                      color: cardData ? cardData.color : COLORS.brownMid,
                      fontSize: 11,
                      fontWeight: 500,
                      padding: "3px 10px",
                      borderRadius: 10,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {p.category}
                  </div>
                  {/* Skin type badge — only show when viewing All */}
                  {activeSkinType === "All" && (
                    <div
                      style={{
                        display: "inline-block",
                        background: cardData ? cardData.color : COLORS.brownMid,
                        color: COLORS.white,
                        fontSize: 11,
                        fontWeight: 500,
                        padding: "3px 10px",
                        borderRadius: 10,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {p.skinType}
                    </div>
                  )}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: COLORS.brown,
                    marginBottom: 6,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: COLORS.brownMid,
                    lineHeight: 1.6,
                    marginBottom: 14,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontWeight: 600, color: COLORS.terra, fontSize: 16 }}>
                    {p.price}
                  </span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: COLORS.terra,
                      color: COLORS.white,
                      border: "none",
                      borderRadius: 20,
                      padding: "8px 18px",
                      fontSize: 13,
                      cursor: "pointer",
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    View Product
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}