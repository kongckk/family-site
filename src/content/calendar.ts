export type CalendarEvent = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
};

export type CalendarDay = {
  dateLabel: string;
  timezone: string;
  events: CalendarEvent[];
};

/** Today's agenda from Google Calendar (Asia/Singapore). Titles + times only. */
export const todayCalendar: CalendarDay = {
  dateLabel: "Wednesday 9 September 2026",
  timezone: "Asia/Singapore",
  events: [],
};
