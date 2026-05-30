export type Lesson = {
  slug: string;
  title: string;
  description: string;
  icon: string;

  sections: {
    title: string;
    content: string;
  }[];
};

export const lessons: Lesson[] = [
  {
    slug: "what-are-options",

    title: "What Are Options?",

    description:
      "Understand how options work and why they exist.",

    icon: "📘",

    sections: [
      {
        title: "What Is An Option?",
        content:
          "An option is a contract that gives the buyer a right, but not an obligation, to buy or sell an asset at a predefined price before expiry."
      },

      {
        title: "Why Do Options Exist?",
        content:
          "Options allow traders and investors to hedge risk, generate income and create leveraged directional positions."
      },

      {
        title: "Key Participants",
        content:
          "Every option contract has a buyer and a seller. The buyer purchases rights, while the seller assumes obligations."
      }
    ]
  },

  {
    slug: "calls-vs-puts",

    title: "Calls vs Puts",

    description:
      "Learn bullish and bearish option positions.",

    icon: "📈",

    sections: [
      {
        title: "Call Option",
        content:
          "A call option gives the buyer the right to buy an asset at a predetermined strike price."
      },

      {
        title: "Put Option",
        content:
          "A put option gives the buyer the right to sell an asset at a predetermined strike price."
      },

      {
        title: "When To Use",
        content:
          "Calls are typically used when bullish. Puts are typically used when bearish."
      }
    ]
  },

  {
    slug: "option-greeks",

    title: "Option Greeks",

    description:
      "Delta, Gamma, Theta and Vega explained visually.",

    icon: "⚡",

    sections: [
      {
        title: "Delta",
        content:
          "Measures how much an option's price changes for a ₹1 move in the underlying."
      },

      {
        title: "Theta",
        content:
          "Measures the impact of time decay on an option's value."
      },

      {
        title: "Vega",
        content:
          "Measures sensitivity to changes in implied volatility."
      }
    ]
  },

  {
    slug: "strategy-building",

    title: "Strategy Building",

    description:
      "Combine contracts into powerful strategies.",

    icon: "🧩",

    sections: [
      {
        title: "Single-Leg Strategies",
        content:
          "Buying or selling a single option contract."
      },

      {
        title: "Multi-Leg Strategies",
        content:
          "Combining multiple option positions to create defined risk-reward profiles."
      }
    ]
  },

  {
    slug: "risk-management",

    title: "Risk Management",

    description:
      "Position sizing, drawdowns and capital allocation.",

    icon: "🛡️",

    sections: [
      {
        title: "Position Sizing",
        content:
          "Never risk a large portion of capital on a single trade."
      },

      {
        title: "Drawdown Control",
        content:
          "Protect capital by limiting losses and preserving emotional discipline."
      }
    ]
  },

  {
    slug: "execution-framework",

    title: "Execution Framework",

    description:
      "When to enter, adjust and exit trades.",

    icon: "🎯",

    sections: [
      {
        title: "Entry",
        content:
          "Enter only when the strategy conditions are satisfied."
      },

      {
        title: "Adjustment",
        content:
          "Manage risk through rolling, hedging and position adjustments."
      },

      {
        title: "Exit",
        content:
          "Define exits before entering the trade."
      }
    ]
  }
];