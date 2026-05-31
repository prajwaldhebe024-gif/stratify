import { strategies } from "../data/strategies";

export function getRecommendations(
  regime: string,
  volatility: string,
  trend: string
) {

  return strategies
    .map((strategy) => {

      let score = 0;

      const rankingReasons: string[] = [];

      // Outlook Match

      if (
        strategy.marketOutlook === trend
      ) {
        score += 30;

        rankingReasons.push(
          `Matches ${trend.toLowerCase()} market outlook`
        );
      }

      // Range Bound Logic

      if (
        regime === "Range Bound"
      ) {

        if (
          strategy.name === "Iron Condor"
        ) {
          score += 40;

          rankingReasons.push(
            "Strong match for range-bound markets"
          );
        }

        if (
          strategy.name === "Iron Fly"
        ) {
          score += 35;

          rankingReasons.push(
            "Benefits from stable price action"
          );
        }

        if (
          strategy.name === "Short Straddle"
        ) {
          score += 30;

          rankingReasons.push(
            "Performs well in low movement environments"
          );
        }
      }

      // Bullish Logic

      if (
        trend === "Bullish"
      ) {

        if (
          strategy.name === "Bull Put Spread"
        ) {
          score += 40;

          rankingReasons.push(
            "High probability bullish income strategy"
          );
        }

        if (
          strategy.name === "Bull Call Spread"
        ) {
          score += 35;

          rankingReasons.push(
            "Defined-risk bullish strategy"
          );
        }

        if (
          strategy.name ===
          "Stratify Momentum Engine"
        ) {
          score += 30;

          rankingReasons.push(
            "Captures strong bullish momentum"
          );
        }
      }

      // Bearish Logic

      if (
        trend === "Bearish"
      ) {

        if (
          strategy.name === "Bear Put Spread"
        ) {
          score += 40;

          rankingReasons.push(
            "Defined-risk bearish strategy"
          );
        }

        if (
          strategy.name === "Bear Call Spread"
        ) {
          score += 35;

          rankingReasons.push(
            "Benefits from downside pressure"
          );
        }
      }

      // High Volatility

      if (
        volatility === "High"
      ) {

        if (
          strategy.name === "Long Straddle"
        ) {
          score += 30;

          rankingReasons.push(
            "Profits from volatility expansion"
          );
        }

        if (
          strategy.name ===
          "Long & Short Straddle"
        ) {
          score += 25;

          rankingReasons.push(
            "Suitable for large price swings"
          );
        }

        if (
          strategy.name ===
          "Call Ratio Spread"
        ) {
          score += 20;

          rankingReasons.push(
            "Flexible volatility strategy"
          );
        }
      }

      // Strategy quality

      if (
        strategy.score >= 8.5
      ) {
        rankingReasons.push(
          "High overall strategy score"
        );
      }

      if (
        strategy.consistency >= 8
      ) {
        rankingReasons.push(
          "Strong consistency profile"
        );
      }

      score += strategy.score;

      return {
        strategy,
        finalScore: score,
        rankingReasons,
      };

    })
    .sort(
      (a, b) =>
        b.finalScore -
        a.finalScore
    )
    .slice(0, 3);

}