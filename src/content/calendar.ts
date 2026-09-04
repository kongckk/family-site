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
  dateLabel: "Friday 4 September 2026",
  timezone: "Asia/Singapore",
  events: [
    {
      id: "1",
      title: "Confirm SJI Sep fees GIRO",
      startTime: "12:00",
      endTime: "12:15",
    },
    {
      id: "2",
      title: "Check FSM S68 fills / open orders",
      startTime: "12:15",
      endTime: "12:30",
    },
    {
      id: "3",
      title: "CIMB FastSaver: fund S$1,000 if needed",
      startTime: "13:00",
      endTime: "13:15",
    },
  ],
};
