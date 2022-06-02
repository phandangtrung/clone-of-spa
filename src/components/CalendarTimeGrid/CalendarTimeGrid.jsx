import { useState, useRef, useEffect } from 'react';
import { calendarHeader, calendarSlot, VIEW_GRID, SLOT_DURATION } from './CalendarConfigs';
import DayjsUtils from '~/modules/utils/DayjsUtils';
import '@fullcalendar/react/dist/vdom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import CalendarHeader from './CalendarHeader';

import './styles.css';

import { resources } from './data';

const CalendarTimeGrid = () => {
  const calendarRef = useRef();

  const [isChange, setIsChange] = useState(false);
  const [calendarTitle, setCalendarTitle] = useState('');
  const [selectDate, setSelectDate] = useState(DayjsUtils.today()); // value get from datepicker
  const [currentStartDate, setCurrentStartDate] = useState(null); // to using get start date for datepicker
  const [slotDuration, setSlotDuration] = useState('00:15:00');

  const [calendarApi, setCalendarApi] = useState(null);

  useEffect(() => {
    if (calendarRef.current) {
      setCalendarApi(calendarRef.current.getApi());
    }
  }, [calendarRef.current]);

  // use effect every change view
  useEffect(() => {
    if (isChange) {
      const title = calendarApi.view.title || '';
      const startDate = calendarApi?.getDate();
      setCalendarTitle(title);
      setCurrentStartDate(startDate);

      // remove is change
      setIsChange(false);
    }
  }, [isChange]);

  const handleSelectDateFromDP = (date) => {
    setSelectDate(date);
    if (calendarApi) {
      calendarApi.gotoDate(new Date(date));
    }
  };

  const handleChangeSlotDuration = (size) => {
    setSlotDuration(size);
  };

  return (
    <>
      <CalendarHeader
        calendarApi={calendarApi}
        title={calendarTitle}
        selectDate={selectDate}
        currentStartDate={currentStartDate}
        onZoom={handleChangeSlotDuration}
        onSelectDateFromDP={handleSelectDateFromDP}
      />
      <FullCalendar
        ref={calendarRef}
        themeSystem="bootstrap5"
        initialView={VIEW_GRID.TIME_GRID_DAY}
        plugins={[timeGridPlugin, dayGridPlugin, resourceTimeGridPlugin]}
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        slotDuration={slotDuration}
        {...calendarHeader()}
        {...calendarSlot()}
        datesSet={() => setIsChange(true)}
        resources={resources}
      />
    </>
  );
};

export default CalendarTimeGrid;
