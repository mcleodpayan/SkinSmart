import { COLORS } from "../data/constants";
import { SKIN_DATA } from "../data/skinData";
import { PRODUCTS } from "../data/products";

export default function ProfilePage({ skinType, setSkinType, setPage }) {
  const data = skinType ? SKIN_DATA[skinType] : null;
  const products = skinType ? (PRODUCTS[skinType] || []).slice(0, 3) : [];

  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "2.5rem 1.5rem" }}>
      <p
        style={{
          fontSize: 12,
          color: COLORS.brownMid,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        Your Skincare Profile
      </p>
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 36,
          fontWeight: 500,
          color: COLORS.brown,
          marginBottom: 32,
        }}
      >
        My Results
      </h1>

      {!skinType ? (
        /* ── Empty state ── */
        <div
          style={{
            textAlign: "center",
            padding: "4rem 2rem",
            background: COLORS.white,
            borderRadius: 20,
            border: "1px solid #E8DDD6",
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>🌿</div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 24,
              fontWeight: 500,
              color: COLORS.brown,
              marginBottom: 12,
            }}
          >
            No results yet
          </h2>
          <p style={{ color: COLORS.brownMid, marginBottom: 24, fontSize: 15 }}>
            Take the consultation quiz or try our AI skin analysis to get personalized results.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button
              onClick={() => setPage("Home")}
              style={{
                background: COLORS.terra,
                color: COLORS.white,
                border: "none",
                borderRadius: 24,
                padding: "12px 28px",
                cursor: "pointer",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              Take the Quiz
            </button>
            <button
              onClick={() => setPage("Analysis")}
              style={{
                background: "none",
                border: `1.5px solid ${COLORS.terra}`,
                color: COLORS.terra,
                borderRadius: 24,
                padding: "12px 28px",
                cursor: "pointer",
                fontSize: 15,
              }}
            >
              AI Analysis
            </button>
          </div>
        </div>
      ) : (
        /* ── Results ── */
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Skin type card */}
          <div
            style={{
              background: data.bg,
              border: `1.5px solid ${data.color}30`,
              borderRadius: 20,
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: data.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                color: COLORS.white,
                flexShrink: 0,
              }}
            >
              {data.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 12,
                  color: COLORS.brownMid,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Your skin type
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontWeight: 600,
                  color: COLORS.brown,
                  marginBottom: 6,
                }}
              >
                {skinType}
              </h2>
              <p style={{ color: COLORS.brownMid, fontSize: 14, lineHeight: 1.6, maxWidth: 480 }}>
                {data.desc}
              </p>
            </div>
            <button
              onClick={() => { setSkinType(null); setPage("Home"); }}
              style={{
                background: "none",
                border: `1px solid ${data.color}`,
                color: data.color,
                borderRadius: 16,
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: 13,
                whiteSpace: "nowrap",
              }}
            >
              Retake
            </button>
          </div>

          {/* Daily routine */}
          <div
            style={{
              background: COLORS.white,
              borderRadius: 20,
              border: "1px solid #E8DDD6",
              padding: "24px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                fontWeight: 500,
                color: COLORS.brown,
                marginBottom: 20,
              }}
            >
              Your Daily Routine
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {data.routine.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 16px",
                    background: COLORS.cream,
                    borderRadius: 12,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: data.color,
                      color: COLORS.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 600,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, color: COLORS.brown, fontSize: 14 }}>
                      {r.step}
                    </div>
                    <div style={{ color: COLORS.brownMid, fontSize: 13 }}>{r.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top product picks */}
          <div
            style={{
              background: COLORS.white,
              borderRadius: 20,
              border: "1px solid #E8DDD6",
              padding: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  fontWeight: 500,
                  color: COLORS.brown,
                }}
              >
                Top Picks for You
              </h3>
              <button
                onClick={() => setPage("Shop")}
                style={{
                  color: COLORS.terra,
                  background: "none",
                  border: "none",
                  fontSize: 13,
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                View all →
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
              {products.map((p) => (
                <a
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #E8DDD6", textDecoration: "none", display: "block" }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: "100%", height: 120, objectFit: "cover" }}
                  />
                  <div style={{ padding: "10px 12px" }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: COLORS.brown, marginBottom: 2 }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: 13, color: COLORS.terra, fontWeight: 600 }}>
                      {p.price}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <button
              onClick={() => setPage("Influencers")}
              style={{
                background: COLORS.sage,
                color: COLORS.white,
                border: "none",
                borderRadius: 16,
                padding: "18px",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Find {skinType} Skin Creators →
            </button>
            <button
              onClick={() => setPage("Analysis")}
              style={{
                background: COLORS.terra,
                color: COLORS.white,
                border: "none",
                borderRadius: 16,
                padding: "18px",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Retake AI Analysis →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}