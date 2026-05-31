export const marketPulse = {
  regime: "Range Bound",

  volatility: "Low",

  trend: "Neutral",

  regimeReasons: [
    "Price remains inside established trading range",
    "Volatility continues to contract",
    "Momentum indicators remain neutral",
    "No directional breakout observed"
  ],

  recommendations: [
    {
      strategyId: 12,
      confidence: 87,

      reasons: [
        "Benefits from time decay",
        "Ideal for range-bound conditions",
        "High consistency score",
        "Volatility conditions favorable"
      ]
    },

    {
      strategyId: 13,
      confidence: 81,

      reasons: [
        "High probability setup",
        "Works best in stable markets",
        "Defined risk structure",
        "Strong historical consistency"
      ]
    },

    {
      strategyId: 2,
      confidence: 72,

      reasons: [
        "Collects premium efficiently",
        "Defined risk profile",
        "Suitable for mild bullish bias",
        "Good capital efficiency"
      ]
    }
  ]
};