export function generateMarketSummary(
  regime: string,
  volatility: string,
  trend: string
) {

  if (
    regime === "Range Bound" &&
    volatility === "Low"
  ) {
    return `
        Premium-selling strategies currently
        offer the strongest risk-adjusted
        opportunity due to stable market
        conditions and muted volatility.
        `;
  }

  if (
    trend === "Bullish"
  ) {
    return `
        Bullish market conditions favor
        directional strategies capable of
        participating in upside momentum.
        `;
  }

  if (
    trend === "Bearish"
  ) {
    return `
        Bearish conditions favor defensive
        and downside-focused strategies with
        defined risk characteristics.
        `;
  }

  if (
    volatility === "High"
  ) {
    return `
        Elevated volatility creates
        opportunities for volatility-based
        strategies that benefit from large
        price movements.
        `;
  }

  return `
    Current market conditions support a
    balanced approach with emphasis on
    risk management and adaptability.
    `;
}