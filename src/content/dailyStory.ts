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
 * Topic: 2026 "supersized" El Niño / WMO extreme-weather warning.
 */
export const dailyStory: DailyStory = {
  headline:
    "UN warns of a 'supersized' El Niño as extreme weather spreads worldwide",
  sourceName: "BBC News",
  sourceUrl: "https://www.bbc.co.uk/news/articles/c17jqp0xzpzo",
  dateLabel: "3 September 2026",
  summary: [
    "The United Nations says the world has entered a \"danger zone of extreme weather\" as a powerful El Niño builds across the Pacific. The World Meteorological Organization reports it could be the strongest in more than 70 years and may last until at least February 2027. El Niño is a natural pattern: warmer Pacific waters shift wind and rain around the planet, so some places get droughts while others face heavier storms and floods.",
    "Forecasts point to drier conditions across large parts of South East Asia, Central America, and northern South America — raising wildfire and drought risk. Indonesia is already fighting large dry-season fires. Meanwhile, wetter weather is expected in places such as eastern Africa, southern Brazil, and parts of the southern United States, which can mean flooding and landslides. China has also linked a busy typhoon season to this super El Niño.",
    "Scientists stress that El Niño sits on top of long-term human-caused warming, which can make heat and extremes worse. Countries are strengthening early-warning systems, medical readiness, and trade plans — for example, Panama is reducing canal ship traffic as rainfall drops. Understanding this one ocean pattern helps explain why weather news can feel connected across continents.",
  ],
  keyImplications: [
    "One Pacific climate pattern can reshape rain, heat, and storms for billions of people at once.",
    "South East Asia may see drier months — wildfire smoke, water stress, and hotter days become more likely.",
    "Extreme weather abroad can still affect you through food prices, shipping delays, and global supply chains.",
    "Early warnings and preparation matter more than panic: forecasts give communities time to act.",
    "Climate literacy helps you read maps and headlines — geography is part of how daily life stays safe.",
  ],
};
