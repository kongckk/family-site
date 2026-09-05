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
 * Topic: 17-year-old completes century-old catalogue of noble polyhedra.
 */
export const dailyStory: DailyStory = {
  headline:
    "17-year-old maps 85 missing mathematical shapes — and finishes a 150-year puzzle",
  sourceName: "ZME Science",
  sourceUrl: "https://www.zmescience.com/science/connor-hill-missing-math/",
  dateLabel: "6 September 2026",
  summary: [
    "Connor Hill, a 17-year-old from Pennsylvania, just won the top prize at the 2026 Regeneron Science Talent Search for something that sounds almost like a video-game quest: finishing a list of special 3D shapes that mathematicians started in the 1870s. The shapes are called noble polyhedra — solids where every face is treated the same by symmetry, and every corner is too. Cubes count. So do wilder star-shaped figures whose faces can pass through one another.",
    "By 2020, researchers had found two infinite families of these shapes plus 61 one-off examples, but nobody knew if the catalogue was complete. Hill wrote computer programs that turned the endless geometric hunt into a finite set of algebra problems, then proved that — beyond those two infinite families — exactly 146 noble polyhedra exist under his rules. That means he added 85 shapes to the published list and argued that none are left to discover.",
    "His 34-page preprint is on arXiv, and he released the code and 3D models so other mathematicians can check the work. He plans to study computational mathematics at MIT. The story is a reminder that big open questions in math aren't only for professors — careful thinking plus code can still crack problems that sat unfinished for generations.",
  ],
  keyImplications: [
    "Some \"impossible\" math problems become solvable when you reframe them — Hill swapped endless 3D searching for finite algebra.",
    "Computers don't replace proof; they help check huge cases so humans can finish the argument.",
    "Sharing code and models lets the community verify a claim — science is a team sport, even for solo projects.",
    "Teenagers can contribute to real research when curiosity meets persistence and the right tools.",
    "Geometry isn't just school homework: symmetry ideas show up in chemistry, materials, graphics, and design.",
  ],
};
