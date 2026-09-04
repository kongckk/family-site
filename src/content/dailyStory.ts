export type DailyStory = {
  headline: string;
  sourceName: string;
  sourceUrl: string;
  dateLabel: string;
  summary: string[];
  keyImplications: string[];
};

/**
 * One top story for teens — curious, calm, educational.
 * Topic: 2026 Strait of Hormuz / Iran conflict oil supply crisis.
 */
export const dailyStory: DailyStory = {
  headline:
    "Six months into the Iran war, almost half of global oil flows from war zones",
  sourceName: "Reuters",
  sourceUrl:
    "https://www.reuters.com/business/energy/six-months-into-iran-war-almost-half-global-oil-flows-war-zones-2026-08-25/",
  dateLabel: "25 August 2026",
  summary: [
    "About six months after fighting flared between Iran and a U.S.–Israel coalition, energy markets are still under strain. Reuters calculations show that countries affected by conflict now account for more than 40% of the world’s oil production — a bigger share than in earlier energy crises. Much of the trouble runs through one narrow waterway: the Strait of Hormuz.",
    "The Strait of Hormuz sits between Iran and the Arabian Peninsula. In normal times, roughly a fifth of the world’s oil — and a large slice of liquefied natural gas — passes through it on tankers. When traffic is blocked or slowed by military action, ships take longer routes or sit idle, and less fuel reaches buyers on schedule.",
    "That matters far beyond the Middle East. Oil and gas feed transport, heating, plastics, and fertiliser. When supply is tight or expensive, the cost can show up in petrol at the pump, electricity bills, and even food prices. Geography is not just a map fact — it is a real chokepoint in how daily life gets powered.",
  ],
  keyImplications: [
    "Fuel and food prices can rise when oil routes are disrupted — even if you live thousands of kilometres away.",
    "A few narrow sea lanes (like Hormuz) act as global trade chokepoints; blocking them hits many countries at once.",
    "Geography shapes power and prices: where oil is produced and how it travels still matter in 2026.",
    "Conflicts abroad can show up in ordinary life through energy costs, shipping delays, and inflation.",
    "Understanding maps and supply chains helps you read the news with clearer eyes.",
  ],
};
