export function getRegimeReasons(
  regime: string,
  volatility: string,
  trend: string
) {

  const reasons: string[] = [];

  if (
    regime === "Range Bound"
  ) {
    reasons.push(
      "Price remains inside established trading range"
    );
  }

  if (
    volatility === "Low"
  ) {
    reasons.push(
      "Volatility continues to contract"
    );
  }

  if (
    trend === "Neutral"
  ) {
    reasons.push(
      "Momentum indicators remain balanced"
    );
  }

  if (
    trend === "Bullish"
  ) {
    reasons.push(
      "Price action shows upward momentum"
    );
  }

  if (
    trend === "Bearish"
  ) {
    reasons.push(
      "Price action favors downside continuation"
    );
  }

  return reasons;
}