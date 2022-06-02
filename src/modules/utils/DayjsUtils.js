import dayjs from 'dayjs';

export const defaultDateFormat = 'MM-DD-YYYY';

const today = (dateFormat = defaultDateFormat) => dayjs().format(dateFormat);

const format = (date, dateFormat = defaultDateFormat) => dayjs(date).format(dateFormat);

const getWeekRange = (date) => ({
  from: dayjs(date).startOf('week').toDate(),
  to: dayjs(date).endOf('week').toDate(),
});

const getMonthRange = (date) => ({
  from: dayjs(date).startOf('month').toDate(),
  to: dayjs(date).endOf('month').toDate(),
});

function getArrRangeDate(date, unit) {
  const newDate = dayjs.isDayjs(date) ? date.toDate() : date;
  const defaultRange = {
    day: [newDate],
    week: getWeekRange(newDate),
    month: getMonthRange(newDate),
  };
  return defaultRange[unit];
}

export default {
  today,
  format,
  getArrRangeDate,
};
