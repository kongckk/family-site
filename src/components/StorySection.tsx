import { dailyStory } from "@/content/dailyStory";

export function StorySection() {
  const {
    headline,
    sourceName,
    sourceUrl,
    dateLabel,
    summary,
    keyImplications,
  } = dailyStory;

  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
          Today&apos;s story
        </p>
        <h2
          id="story-heading"
          className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          {headline}
        </h2>
        <p className="mt-3 text-sm text-muted">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {sourceName}
          </a>
          <span aria-hidden="true"> · </span>
          <time dateTime="2026-08-25">{dateLabel}</time>
        </p>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/90">
          {summary.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-accent-soft/40 px-5 py-6 sm:px-6">
          <h3 className="text-lg font-semibold text-ink">
            What to take away
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/90 marker:text-accent">
            {keyImplications.map((item) => (
              <li key={item.slice(0, 40)} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
