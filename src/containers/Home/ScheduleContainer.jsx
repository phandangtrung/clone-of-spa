import ScheduleBar from './ScheduleBar';


const ScheduleContainer = () => {
  return (
    <div id="schedule-container" className="w-full p-[16px] border-[#ECEEF1] border-solid-1px flex ">
      <div className="schedule-left w-full rounded-full-[4px] flex items-center justify-between">
        <ScheduleBar />
      </div>
    </div>
  );
};

export default ScheduleContainer;
