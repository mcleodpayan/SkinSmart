import { useState } from "react";
import { COLORS } from "../data/constants";
import { SKIN_DATA } from "../data/skinData";
import { SURVEY_QUESTIONS } from "../data/survey";
import { detectSkinType } from "../utils/skinDetection";

export default function HomePage({ skinType, setSkinType, setPage }) {
  const [showSurvey, setShowSurvey] = useState(false);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(skinType || null);
  const [step, setStep] = useState(0);

  const handleSkinSelect = (type) => {
    setSkinType(type);
    setResult(type);
    setShowSurvey(false);
  };

  const handleAnswer = (ans) => {
    const newAns = { ...answers, [step]: ans };
    setAnswers(newAns);
    if (step < SURVEY_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      const allAns = SURVEY_QUESTIONS.map((_, i) => newAns[i]).filter(Boolean);
      const detected = detectSkinType(allAns);
      setSkinType(detected);
      setResult(detected);
      setShowSurvey(false);
    }
  };

  const data = result ? SKIN_DATA[result] : null;

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(135deg, ${COLORS.terraLight} 0%, ${COLORS.cream} 60%, ${COLORS.sageLight} 100%)`,
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: COLORS.brownMid,
            marginBottom: 16,
          }}
        >
          Your Personalized Skincare Journey
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
            fontWeight: 500,
            color: COLORS.brown,
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Discover Your
          <br />
          <em>Skin Type</em>
        </h1>
        <p
          style={{
            color: COLORS.brownMid,
            maxWidth: 480,
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
            fontSize: 15.5,
          }}
        >
          Every skin is unique. Start with a quick consultation to get a
          personalized routine and product recommendations crafted just for you.
        </p>
        {!showSurvey && !result && (
          <button
            onClick={() => setShowSurvey(true)}
            style={{
              background: COLORS.terra,
              color: COLORS.white,
              border: "none",
              borderRadius: 30,
              padding: "14px 36px",
              fontSize: 15,
              cursor: "pointer",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            Take the Quiz →
          </button>
        )}
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "3rem 1.5rem" }}>
        {/* Direct Skin Type Selector */}
        {!result && (
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 28,
                fontWeight: 500,
                color: COLORS.brown,
                marginBottom: 8,
                textAlign: "center",
              }}
            >
              Already know your skin type?
            </h2>
            <p
              style={{
                color: COLORS.brownMid,
                textAlign: "center",
                marginBottom: 2,
                fontSize: 14,
              }}
            >
              Select yours below or use the quiz above
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 28,
              }}
            >
              {Object.entries(SKIN_DATA).map(([type, d]) => (
                <button
                  key={type}
                  onClick={() => handleSkinSelect(type)}
                  style={{
                    background: d.bg,
                    border: `2px solid ${d.color}30`,
                    borderRadius: 20,
                    padding: "24px 32px",
                    cursor: "pointer",
                    minWidth: 150,
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontSize: 26, color: d.color, marginBottom: 8 }}>
                    {d.emoji}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 20,
                      fontWeight: 600,
                      color: COLORS.brown,
                    }}
                  >
                    {type}
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.brownMid, marginTop: 4 }}>
                    Select
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Survey */}
        {showSurvey && !result && (
          <div
            style={{
              background: COLORS.white,
              borderRadius: 20,
              padding: "2.5rem",
              maxWidth: 600,
              margin: "0 auto",
              boxShadow: "0 4px 40px rgba(44,26,20,0.08)",
            }}
          >
            {/* Progress bar */}
            <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
              {SURVEY_QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 4,
                    borderRadius: 2,
                    background: i <= step ? COLORS.terra : COLORS.creamDark,
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>

            <p
              style={{
                fontSize: 12,
                color: COLORS.brownMid,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Question {step + 1} of {SURVEY_QUESTIONS.length}
            </p>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 24,
                fontWeight: 500,
                color: COLORS.brown,
                marginBottom: 24,
                lineHeight: 1.4,
              }}
            >
              {SURVEY_QUESTIONS[step].q}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {SURVEY_QUESTIONS[step].opts.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  style={{
                    background: COLORS.cream,
                    border: `1.5px solid ${COLORS.creamDark}`,
                    borderRadius: 12,
                    padding: "14px 18px",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: 14.5,
                    color: COLORS.brown,
                    transition: "all 0.15s",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = COLORS.terra;
                    e.target.style.background = COLORS.terraLight;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = COLORS.creamDark;
                    e.target.style.background = COLORS.cream;
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>

            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                style={{
                  marginTop: 16,
                  background: "none",
                  border: "none",
                  color: COLORS.brownMid,
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                ← Previous
              </button>
            )}
          </div>
        )}

        {/* Result & Routine */}
        {result && data && (
          <div>
            <div
              style={{
                background: data.bg,
                border: `1.5px solid ${data.color}30`,
                borderRadius: 20,
                padding: "2.5rem",
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 36, color: data.color, marginBottom: 12 }}>
                {data.emoji}
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 32,
                  fontWeight: 600,
                  color: COLORS.brown,
                  marginBottom: 12,
                }}
              >
                You have <em>{result}</em> skin
              </h2>
              <p
                style={{
                  color: COLORS.brownMid,
                  maxWidth: 560,
                  margin: "0 auto 24px",
                  lineHeight: 1.7,
                  fontSize: 15,
                }}
              >
                {data.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={() => {
                    setResult(null);
                    setSkinType(null);
                    setAnswers({});
                    setStep(0);
                  }}
                  style={{
                    background: "none",
                    border: `1.5px solid ${data.color}`,
                    color: data.color,
                    borderRadius: 24,
                    padding: "10px 24px",
                    cursor: "pointer",
                    fontSize: 14,
                  }}
                >
                  Retake Quiz
                </button>
                <button
                  onClick={() => setPage("Shop")}
                  style={{
                    background: data.color,
                    color: COLORS.white,
                    border: "none",
                    borderRadius: 24,
                    padding: "10px 24px",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Shop for {result} Skin →
                </button>
              </div>
            </div>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 26,
                fontWeight: 500,
                color: COLORS.brown,
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Your Recommended Routine
            </h3>
            <div style={{ display: "grid", gap: 12 }}>
              {data.routine.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    background: COLORS.white,
                    borderRadius: 14,
                    padding: "18px 22px",
                    border: "1px solid #E8DDD6",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: data.bg,
                      color: data.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, color: COLORS.brown, marginBottom: 3 }}>
                      {r.step}
                    </div>
                    <div style={{ fontSize: 13.5, color: COLORS.brownMid }}>{r.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}