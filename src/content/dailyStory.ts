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
 * Topic: Generative AI homework boost vs exam learning penalty.
 */
export const dailyStory: DailyStory = {
  headline:
    "Homework grades went up with AI — exam scores went down. A huge study of 26,000 teens explains why",
  sourceName: "NewsGram",
  sourceUrl:
    "https://www.newsgram.com/education/2026/09/07/ai-homework-scores-exam-performance-study-china",
  dateLabel: "8 September 2026",
  summary: [
    "Researchers tracked 26,811 students aged 12–18 in China for about 30 months — homework, monthly closed-book tests, and high-stakes entrance exams across nine subjects. The paper is called “The Generative AI Learning Penalty: Evidence From Chinese Secondary Education” (reported June 2026; covered this week).",
    "After six months of generative AI use, average homework scores rose about 18%, and time per assignment fell from roughly 64 minutes to 45. On exams without AI, those same students scored about 20% lower than peers who weren’t using AI the same way. Over about two years, big entrance-exam scores fell by roughly 18–24%.",
    "The pattern isn’t “AI is evil” — it’s how you use it. Most of the exam drop came from students who finished fast with high homework scores (skipping the hard thinking). Students who still spent real time and effort, even with AI nearby, barely saw a penalty. Homework started looking better while real practice quietly disappeared.",
  ],
  keyImplications: [
    "A high homework mark can hide weak understanding if a tool did the thinking for you.",
    "Closed-book exams still measure what stuck in your head when the chatbot isn’t there.",
    "Using AI as a tutor (explain, quiz, check) is different from using it as an answer machine.",
    "Schools may lean more on in-class work, oral checks, and process — not just take-home scores.",
    "Protecting your own practice time is a skill: speed isn’t the same as learning.",
  ],
};
