import CircleWavyCheck from '~/assets/icons/circleWavyCheck.svg';

const ScheduleBar = () => {
  return (
    <div id="schedule-container" className="w-full p-16px border-[#ECEEF1] border-solid-1px flex justify-between ">
      <div className="schedule-left w-1/2 rounded-full-[4px] flex items-center ">
        <div
          id="small-calendar"
          className="w-46px h-49px p-4px pl-8px pr-8px mr-16px bg-[#F8FAFC] text-center flex flex-col justify-between"
        >
          <div className="text-bold-[24px] font-medium">07</div>
          <div className="text-[13px] font-medium">MON</div>
        </div>
        <div className="flex items-center">
          <img src={CircleWavyCheck} alt="circle WavyCheck" className="w-20px h-20px bg-[#5F9EEF] rounded-full" />
          <div className="flex w-100 justify-between">
            <div className="schedule-time ml-16px gap-y-2px flex flex-col">
              <p className="font-medium ">9:00 AM</p>
              <p className="text-[12px] text-[#8995A6]">12 min</p>
            </div>
            <div className="schedule-info flex flex-col gap-y-4px">
              <p className="leading-[21.6px] text-[18px] font-normal">Customer's Name</p>
              <div className="flex gap-x-16px">
                <p className="text-[#5F9EEF] text-[12px] leading-[17px]">Nail</p>
                <p className="text-[12px] leading-[17px]">Staff’s Name 1</p>
                <p className="text-[#40C075] text-[12px] leading-[17px]">$25.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="schedule-right w-1/2 flex justify-end ">
        <button className="px-4px py-3px bg-[#CFD6DE] h-max rounded-[4px]">
          <p className="font-medium leading-[14px] text-[10px] tracking-[0.5PX]">COMPLETED</p>
        </button>
      </div>
    </div>
  );
};

export default ScheduleBar;
