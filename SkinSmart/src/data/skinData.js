import { COLORS } from "./constants";

export const SKIN_DATA = {
  Oily: {
    emoji: "✦",
    color: COLORS.sage,
    bg: COLORS.sageLight,
    desc: "Your skin produces excess sebum, giving it a shiny appearance and making you prone to enlarged pores and breakouts. The key is gentle control without stripping.",
    routine: [
      { step: "Cleanser",    detail: "Gel or foaming cleanser with salicylic acid — AM & PM" },
      { step: "Toner",       detail: "Niacinamide toner to minimize pores — AM" },
      { step: "Serum",       detail: "Vitamin C in the morning, niacinamide at night" },
      { step: "Moisturizer", detail: "Lightweight, oil-free gel moisturizer — AM & PM" },
      { step: "Sunscreen",   detail: "Matte-finish SPF 50+ — every morning" },
    ],
  },
  Dry: {
    emoji: "◆",
    color: COLORS.terra,
    bg: COLORS.terraLight,
    desc: "Your skin lacks sufficient moisture and lipids, leading to tightness, flakiness, and a dull complexion. Rich, nourishing formulas are your best friends.",
    routine: [
      { step: "Cleanser",    detail: "Cream or balm cleanser — AM & PM" },
      { step: "Toner",       detail: "Hydrating mist with hyaluronic acid — AM" },
      { step: "Serum",       detail: "Hyaluronic acid serum on damp skin — AM & PM" },
      { step: "Moisturizer", detail: "Rich cream with ceramides and shea butter — AM & PM" },
      { step: "Sunscreen",   detail: "Hydrating SPF 50+ — every morning" },
    ],
  },
  Normal: {
    emoji: "●",
    color: COLORS.gold,
    bg: "#FDF5E8",
    desc: "You have well-balanced skin with a healthy moisture level, minimal imperfections, and a radiant glow. Maintenance and protection are your main priorities.",
    routine: [
      { step: "Cleanser",    detail: "Gentle gel or foam cleanser — AM & PM" },
      { step: "Toner",       detail: "Balancing toner — AM" },
      { step: "Serum",       detail: "Vitamin C in AM, retinol PM (2–3x/week)" },
      { step: "Moisturizer", detail: "Lightweight daily moisturizer — AM & PM" },
      { step: "Sunscreen",   detail: "Broad-spectrum SPF 50+ — every morning" },
    ],
  },
  Combination: {
    emoji: "◈",
    color: "#8B7AB8",
    bg: "#F0EDF8",
    desc: "Your T-zone (forehead, nose, chin) tends to be oily, while your cheeks are normal to dry. Targeted, zone-based care is the secret to balance.",
    routine: [
      { step: "Cleanser",    detail: "Gentle balancing gel cleanser — AM & PM" },
      { step: "Toner",       detail: "Balancing toner, focusing on T-zone — AM" },
      { step: "Serum",       detail: "Niacinamide for T-zone, hydrating for cheeks" },
      { step: "Moisturizer", detail: "Lightweight gel-cream for T-zone, richer on cheeks" },
      { step: "Sunscreen",   detail: "Lightweight SPF 50+ — every morning" },
    ],
  },
};