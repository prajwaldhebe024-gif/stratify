import type { Strategy } from "../types/Strategy";

export const strategies: Strategy[] = [
  {
    id: 1,
    name: "Bull Call Spread",
    category: "General",

    shortDescription:
      "Moderately bullish strategy with limited risk.",

    marketOutlook: "Bullish",
    volatilityOutlook: "Neutral",
    riskLevel: "Low",

    capitalRequired: "Medium",

    suitableFor: "Bullish Markets",

    score: 8.2,

    profitability: 8,
    consistency: 7,
    capitalEfficiency: 8,
    easeOfExecution: 9,
    adaptability: 7,

    overview:
      "A Bull Call Spread is a defined-risk bullish options strategy involving the purchase of a lower strike call and sale of a higher strike call.",

    advantages: [
      "Limited risk",
      "Lower capital requirement than long calls",
      "Benefits from bullish market moves",
    ],

    disadvantages: [
      "Limited profit potential",
      "Time decay can hurt returns",
      "Requires correct directional view",
    ],

    bestMarketConditions: [
      "Bull Markets",
      "Moderately Bullish Markets",
    ],

    worstMarketConditions: [
      "Bear Markets",
      "Range Bound Markets",
    ],
  },

  {
    id: 2,
    name: "Bull Put Spread",
    category: "General",

    shortDescription:
      "Income strategy for mildly bullish markets.",

    marketOutlook: "Bullish",
    volatilityOutlook: "Low",
    riskLevel: "Medium",

    capitalRequired: "Medium",

    suitableFor: "Bullish Markets",

    score: 8.4,

    profitability: 8,
    consistency: 8,
    capitalEfficiency: 9,
    easeOfExecution: 8,
    adaptability: 8,

    overview:
      "A Bull Put Spread collects premium while maintaining defined risk. It performs best when the market remains above the sold strike.",

    advantages: [
      "High probability of profit",
      "Limited risk",
      "Benefits from time decay",
    ],

    disadvantages: [
      "Limited profit",
      "Can be affected by sudden downside moves",
      "Requires margin",
    ],

    bestMarketConditions: [
      "Bull Markets",
      "Sideways Markets",
    ],

    worstMarketConditions: [
      "Sharp Bear Markets",
      "High Volatility Selloffs",
    ],
  },

  {
    id: 3,
    name: "Iron Condor",
    category: "General",

    shortDescription:
      "Premium selling strategy for range-bound markets.",

    marketOutlook: "Neutral",
    volatilityOutlook: "Low",
    riskLevel: "Medium",

    capitalRequired: "High",

    suitableFor: "Range Bound Markets",

    score: 8.8,

    profitability: 9,
    consistency: 9,
    capitalEfficiency: 7,
    easeOfExecution: 7,
    adaptability: 8,

    overview:
      "The Iron Condor is a premium collection strategy designed for range-bound markets. It profits when the underlying remains within a defined range until expiry.",

    advantages: [
      "High probability of profit",
      "Limited risk",
      "Benefits from time decay",
      "Works well in low volatility environments",
    ],

    disadvantages: [
      "Limited profit potential",
      "Can suffer in trending markets",
      "Requires active adjustment when tested",
    ],

    bestMarketConditions: [
      "Range Bound Markets",
      "Falling Volatility",
      "Stable Market Conditions",
    ],

    worstMarketConditions: [
      "Strong Bullish Trends",
      "Strong Bearish Trends",
      "Volatility Expansion",
    ],
  },

  {
    id: 101,
    name: "Stratify Momentum Engine",
    category: "Stratify Special",

    shortDescription:
      "Proprietary momentum-based directional strategy.",

    marketOutlook: "Bullish",
    volatilityOutlook: "Neutral",
    riskLevel: "Medium",

    capitalRequired: "Medium",

    suitableFor: "Trending Markets",

    score: 9.3,

    profitability: 9,
    consistency: 8,
    capitalEfficiency: 9,
    easeOfExecution: 7,
    adaptability: 10,

    overview:
      "A proprietary Stratify strategy focused on identifying momentum shifts and capturing directional trends while managing downside risk.",

    advantages: [
      "Captures strong trends",
      "Highly adaptable",
      "Strong risk-adjusted returns",
    ],

    disadvantages: [
      "Can underperform in sideways markets",
      "Requires monitoring",
      "Dependent on momentum continuation",
    ],

    bestMarketConditions: [
      "Trending Markets",
      "Bull Markets",
      "Breakout Conditions",
    ],

    worstMarketConditions: [
      "Range Bound Markets",
      "Low Volume Conditions",
    ],
  },
];