import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-line bg-canvas/90 backdrop-blur-sm sticky top-0 z-20">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-ink hover:text-accent transition-colors"
        >
          {site.title}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 text-sm font-medium">
          <a
            href="#calendar"
            className="rounded-lg px-3 py-2 text-muted hover:bg-surface hover:text-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Calendar
          </a>
          <a
            href="#story"
            className="rounded-lg px-3 py-2 text-muted hover:bg-surface hover:text-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Today&apos;s story
          </a>
        </nav>
      </div>
    </header>
  );
}
