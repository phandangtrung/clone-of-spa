import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import useOnClickOutside from '~/hooks/useOnClickOutside';
import { DayPicker } from 'react-day-picker';
import { usePopper } from 'react-popper';
import { defaultDateFormat } from '~/modules/utils/DayjsUtils';

import 'react-day-picker/dist/style.css';
import './styles.css';

const nexMonth = new Date(dayjs().add(1, 'month'));

// input, output: dateStr
const SingleDatePicker = (props) => {
  const { id = '', container, show, value = '', currentMonth, onShow, onChange, dateFormat = defaultDateFormat, isTodayFooter } = props;
  const [popperElement, setPopperElement] = useState(null);
  const [month, setMonth] = useState(nexMonth);

  useOnClickOutside(popperElement, () => {
    if (show) {
      onShow(false);
    }
  });

  useEffect(() => {
    // to set datepicker render to month to select from props
    if (currentMonth) {
      const newMonth = new Date(currentMonth);
      setMonth(newMonth);
    }
  }, [currentMonth]);

  const popper = usePopper(container, popperElement, {
    placement: 'bottom-start',
  });

  const handleDaySelect = (date) => {
    if (date) {
      onChange(dayjs(date).format(dateFormat));
      onShow(false);
    } else {
      onChange(value);
    }
  };

  const handleClickToday = () => setMonth(new Date());

  const renderDatePickerFooter = () => {
    const isDisable = dayjs().isSame(month, 'month');
    return (
      <div className="dp-footer">
        <button type="button" disabled={isDisable} onClick={handleClickToday}>
          Today
        </button>
      </div>
    );
  };

  if (!show || !container) return null;

  return (
    <div
      id={id}
      tabIndex={-1}
      style={popper.styles.popper}
      className="bg-white rounded shadow z-999 border border-neutral-200"
      {...popper.attributes.popper}
      ref={setPopperElement}
      role="dialog"
    >
      <DayPicker
        className="pos-single-datepicker"
        mode="single"
        showOutsideDays
        fixedWeeks
        month={month}
        weekStartsOn={1}
        onMonthChange={setMonth}
        selected={new Date(value)}
        onSelect={handleDaySelect}
        footer={isTodayFooter ? renderDatePickerFooter() : null}
      />
    </div>
  );
};

export default SingleDatePicker;
