import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { VIEW_GRID, SLOT_DURATION } from './CalendarConfigs';
import Button from '~/components/UI/Buttons';
import ZoomModal from './ZoomModal';
import SingleDatePicker from '~/components/UI/DatePicker';
import LeftArrowIcon from '~/assets/icons/left-arrow.svg';
import RightArrowIcon from '~/assets/icons/right-arrow.svg';
import SettingIcon from '~/assets/icons/setting.svg';
import DrownArrowIcon from '~/assets/icons/down-arrow.svg';

const buttonActiveStyle = 'bg-[#1B74E8] text-[#FFF] border-none';

const CalendarHeader = (props) => {
  const { t } = useTranslation();
  const datePickerRef = useRef(null);
  const zoomButtonRef = useRef(null);
  const { calendarApi, title, selectDate, currentStartDate, onZoom, onSelectDateFromDP } = props;
  const [showDatePicker, setShowDatePicker] = useState(false); // show datepicker
  const [showZoomModal, setShowZoomModal] = useState(false); // show zoom setting
  const [zoomRange, setZoomRange] = useState('3');

  const handleGotoToday = () => {
    calendarApi.today();
  };

  const handleClickPrev = () => {
    calendarApi.prev();
  };

  const handleClickNext = () => {
    calendarApi.next();
  };

  const handleChangeView = (viewType) => () => {
    calendarApi.changeView(viewType);
  };

  const handleChangeZoom = (e) => {
    // setShowZoomModal(true);
    const { value } = e.target;
    setZoomRange(value);
    onZoom(SLOT_DURATION[value]);
  };

  if (!calendarApi) return false;
  const viewType = calendarApi?.view?.type || VIEW_GRID.TIME_GRID_DAY;

  return (
    <>
      <div className="w-full h-auto px-10 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-items-center">
            <Button type="button" onClick={handleGotoToday}>
              {t('Today')}
            </Button>
            <div>
              <div className="flex justify-center items-center w-fit mx-4 px-0 border-0 hover:bg-transparent focus:bg-transparent">
                <img className="px-2 py-2 cursor-pointer" src={LeftArrowIcon} alt="prev" onClick={handleClickPrev} />
                <div
                  ref={datePickerRef}
                  type="button"
                  className="flex justify-center items-center px-2 min-w-[180px] w-fit py-0 cursor-pointer"
                  onClick={() => setShowDatePicker(true)}
                >
                  <p className="pr-2 text-base font-normal text-[#1b74e8]">{title}</p>
                  <img src={DrownArrowIcon} alt="show" />
                </div>

                <img className="px-2 py-2 cursor-pointer" src={RightArrowIcon} alt="next" onClick={handleClickNext} />
              </div>
            </div>
            <Button
              ref={zoomButtonRef}
              type="button"
              className="w-fit px-0 py-0 border-0 hover:bg-transparent focus:bg-transparent"
            >
              <img src={SettingIcon} alt="zoom" className="cursor-pointer" onClick={() => setShowZoomModal(true)} />
            </Button>
          </div>
          <div className="right">
            <Button
              type="button"
              className={clsx('font-normal', viewType === VIEW_GRID.TIME_GRID_DAY && buttonActiveStyle)}
              onClick={handleChangeView(VIEW_GRID.TIME_GRID_DAY)}
            >
              {t('Daily')}
            </Button>
            <Button
              type="button"
              className={clsx('font-normal', viewType === VIEW_GRID.TIME_GRID_WEEK && buttonActiveStyle)}
              onClick={handleChangeView(VIEW_GRID.TIME_GRID_WEEK)}
            >
              {t('Weekly')}
            </Button>
            <Button
              type="button"
              className={clsx('font-normal', viewType === VIEW_GRID.DAY_GRID_MONTH && buttonActiveStyle)}
              onClick={handleChangeView(VIEW_GRID.DAY_GRID_MONTH)}
            >
              {t('Monthly')}
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <ul>
            <li>
              <Button type="button">Resource 1</Button>
            </li>
          </ul>
        </div>
      </div>
      <SingleDatePicker
        id="calendar-dp"
        isTodayFooter
        show={showDatePicker}
        value={selectDate}
        container={datePickerRef.current}
        currentMonth={currentStartDate}
        onShow={setShowDatePicker}
        onChange={onSelectDateFromDP}
      />
      <ZoomModal
        id="zoom-modal"
        container={zoomButtonRef.current}
        show={showZoomModal}
        onShow={setShowZoomModal}
        zoomRange={zoomRange}
        onChangeZoom={handleChangeZoom}
      />
    </>
  );
};

export default CalendarHeader;
