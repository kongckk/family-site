import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="animate-fade-up border-b border-line bg-gradient-to-b from-accent-soft/60 to-canvas px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
          Family hub
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {site.title}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          {site.tagline}
        </p>
      </div>
    </section>
  );
}
