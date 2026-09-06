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
 * Topic: Isar Aerospace Spectrum reaches orbit from Norway.
 */
export const dailyStory: DailyStory = {
  headline:
    "German startup sends Europe’s first fully commercial rocket to orbit — from Arctic Norway",
  sourceName: "Ars Technica",
  sourceUrl:
    "https://arstechnica.com/space/2026/09/german-company-becomes-first-in-europe-to-launch-fully-commercial-orbital-rocket/",
  dateLabel: "7 September 2026",
  summary: [
    "On 5 September 2026, a slim white rocket called Spectrum lifted off from Andøya Spaceport in northern Norway — above the Arctic Circle — and reached orbit about seven minutes later. The company behind it, Isar Aerospace, was founded in 2018 by three students at a German university. This was only the rocket’s second flight; the first one in March 2025 failed less than a minute after liftoff.",
    "Spectrum is a two-stage, privately built launcher about 28 metres tall. It burns propane and liquid oxygen in nine Aquila engines on the first stage, then a vacuum-optimised engine on the upper stage. After circling into a higher orbit, it deployed five CubeSats (plus a science experiment that stayed attached) — real payloads on a return-to-flight mission.",
    "Why it matters: Europe has launched satellites for decades, but mostly from places like French Guiana or with government-led rockets. This flight is the first fully commercial European rocket to reach orbit from Western European soil. Geography helps too — Arctic Norway is a great launch pad for polar and Earth-observation satellites. One success doesn’t mean routine flights yet, but it shows a new generation of European startups can compete in the small-satellite launch race.",
  ],
  keyImplications: [
    "Failure isn’t the end of a rocket programme — diagnosing what went wrong and flying again is how launch companies grow up.",
    "Where you launch from shapes what orbits you can reach; polar routes from Norway suit Earth-watching satellites.",
    "Commercial competition can give countries more independent ways to put satellites in space, not just one big national rocket.",
    "Small satellites (CubeSats) need affordable rides — dedicated small rockets try to offer schedule control that huge rideshare flights can’t.",
    "STEM careers aren’t only at NASA or ESA agencies: university founders and private engineering teams are rewriting spaceflight.",
  ],
};
