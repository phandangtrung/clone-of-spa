import dayjs from 'dayjs';

// Header
export const calendarHeader = () => ({
  dayHeaderFormat: { day: 'numeric', weekday: 'short' },
  headerToolbar: {
    left: '',
    center: '',
    right: '',
  },
  firstDay: 1,
  dayHeaderContent: (content) => {
    const { date } = content;
    return (
      <div className="calendar-header">
        {dayjs(date)
          .format('ddd D')
          .split(' ')
          .map((item, index) => (
            <p key={index}>{item}</p>
          ))}
      </div>
    );
  },
});

export const calendarSlot = () => ({
  allDaySlot: false,
  slotLabelInterval: '01:00',
  expandRows: true,
});

export const VIEW_GRID = {
  TIME_GRID_DAY: 'timeGridDay',
  TIME_GRID_WEEK: 'timeGridWeek',
  DAY_GRID_MONTH: 'dayGridMonth',
};

export const RANG_UNIT = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
};

export const SLOT_DURATION = {
  1: '00:05:00',
  2: '00:10:00',
  3: '00:15:00',
  4: '00:20:00',
};
