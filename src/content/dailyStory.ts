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
 * Topic: OECD PISA 2025 — teen reading at worst levels this century.
 */
export const dailyStory: DailyStory = {
  headline:
    "Teen reading hit its worst level this century — phones, skimming, and less reading for fun",
  sourceName: "Reuters",
  sourceUrl:
    "https://www.reuters.com/world/china/teen-reading-slumps-worst-this-century-due-surge-screen-time-2026-09-08/",
  dateLabel: "9 September 2026",
  summary: [
    "The OECD’s PISA 2025 test covered about 760,000 15-year-olds in 91 countries. Reading, maths, and science scores were the lowest since the program began in 2000 — and reading was the clearest drop.",
    "On average, teens read at a level once expected of students a year younger. The OECD reading score fell from a 2012 peak of 501 to 466. Leaders said more screen time and less reading for pleasure go hand in hand with weaker results, plus more “hasty reading” — rushing a text and picking a quick wrong answer.",
    "Science and maths also slid (science from a 2009 high of 506 to 486; maths from 502 to 469). Digital distraction was linked to lower science scores in most systems studied. Nearly half of students use AI chatbots for learning regularly; those who lean on them to draft, summarize, or research often scored about 20 points lower in science — roughly a year of learning.",
  ],
  keyImplications: [
    "Deep reading is a skill you practice — skimming feeds and short posts doesn’t build the same muscle.",
    "Screens aren’t the enemy by themselves; distraction during class and endless leisure scroll are the costly parts.",
    "East Asia (plus Singapore, Japan, Korea, Taiwan, and some Chinese cities) still led overall — systems matter as much as phones.",
    "Using AI to finish work fast can hide weak understanding when the chatbot isn’t there on a test.",
    "Protecting quiet time with longer texts (books, articles, science write-ups) is a practical edge, not just a vibe.",
  ],
};
