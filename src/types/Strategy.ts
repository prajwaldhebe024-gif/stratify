export interface Strategy {
  id: number;

  name: string;

  category: "General" | "Stratify Special";

  shortDescription: string;

  marketOutlook:
    | "Bullish"
    | "Bearish"
    | "Neutral";

  volatilityOutlook:
    | "High"
    | "Low"
    | "Neutral";

  riskLevel:
    | "Low"
    | "Medium"
    | "High";

  capitalRequired: string;

  suitableFor: string;

  score: number;

  profitability: number;
  consistency: number;
  capitalEfficiency: number;
  easeOfExecution: number;
  adaptability: number;

  overview: string;

  advantages: string[];

  disadvantages: string[];

  bestMarketConditions: string[];

  worstMarketConditions: string[];
}