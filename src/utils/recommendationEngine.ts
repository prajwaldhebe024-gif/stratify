import { strategies } from "../data/strategies";

export function getRecommendations(
  regime: string,
  volatility: string,
  trend: string
) {

  return strategies
    .map((strategy) => {

      let score = 0;

      // Outlook Match

      if (
        strategy.marketOutlook === trend
      ) {
        score += 30;
      }

      // Range Bound Logic

      if (
        regime === "Range Bound"
      ) {

        if (
          strategy.name === "Iron Condor"
        ) score += 40;

        if (
          strategy.name === "Iron Fly"
        ) score += 35;

        if (
          strategy.name === "Short Straddle"
        ) score += 30;
      }

      // Bullish Logic

      if (
        trend === "Bullish"
      ) {

        if (
          strategy.name === "Bull Put Spread"
        ) score += 40;

        if (
          strategy.name === "Bull Call Spread"
        ) score += 35;

        if (
          strategy.name ===
          "Stratify Momentum Engine"
        ) score += 30;
      }

      // Bearish Logic

      if (
        trend === "Bearish"
      ) {

        if (
          strategy.name === "Bear Put Spread"
        ) score += 40;

        if (
          strategy.name === "Bear Call Spread"
        ) score += 35;
      }

      // High Volatility

      if (
        volatility === "High"
      ) {

        if (
          strategy.name === "Long Straddle"
        ) score += 30;

        if (
          strategy.name ===
          "Long & Short Straddle"
        ) score += 25;

        if (
          strategy.name ===
          "Call Ratio Spread"
        ) score += 20;
      }

      score += strategy.score;

      return {
        strategy,
        finalScore: score,
      };

    })
    .sort(
      (a, b) =>
        b.finalScore -
        a.finalScore
    )
    .slice(0, 3);

}