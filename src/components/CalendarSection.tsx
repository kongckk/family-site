import { todayCalendar } from "@/content/calendar";

export function CalendarSection() {
  const { dateLabel, timezone, events } = todayCalendar;

  return (
    <section
      id="calendar"
      aria-labelledby="calendar-heading"
      className="scroll-mt-20 border-b border-line px-4 py-12 sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="calendar-heading"
              className="text-2xl font-semibold tracking-tight text-ink"
            >
              Family calendar
            </h2>
            <p className="mt-1 text-muted">{dateLabel}</p>
          </div>
          <p className="text-sm text-muted">{timezone}</p>
        </div>

        {events.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line bg-surface/50 px-5 py-10 text-center">
            <p className="text-muted">No events on the calendar today.</p>
            <p className="mt-1 text-sm text-muted/80">
              Check back tomorrow — the agenda refreshes daily.
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-3" role="list">
            {events.map((event) => (
              <li
                key={event.id}
                className="flex gap-4 rounded-2xl border border-line bg-surface/40 px-4 py-4 sm:px-5"
              >
                <div className="shrink-0 pt-0.5 text-sm font-medium tabular-nums text-accent sm:w-28">
                  <time dateTime={event.startTime}>{event.startTime}</time>
                  <span className="text-muted">–</span>
                  <time dateTime={event.endTime}>{event.endTime}</time>
                </div>
                <p className="min-w-0 flex-1 text-base leading-snug text-ink">
                  {event.title}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
