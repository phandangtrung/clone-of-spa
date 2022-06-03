import CircleWavyCheck from '~/assets/icons/circleWavyCheck.svg';

const ScheduleBar = () => {
  return (
    <div className="flex items-center w-full">
      <div
        id="small-calendar"
        className="w-50px h-57px p-4px px-[8px] mr-16px bg-[#F8FAFC] flex flex-col justify-center"
      >
        <div className="text-bold-[24px] font-medium">07</div>
        <div className="text-[13px] font-medium">MON</div>
      </div>
      <div className="w-full flex flex-col items-center ">
        <div className="flex flex-col-reverse md:flex-row justify-between w-full pb-[14px] border-b-[1px] border-[#ECEEF1]">
          <div className="flex">
            <div className="schedule-time flex items-center">
              <img src={CircleWavyCheck} alt="circle WavyCheck" className="w-20px h-20px bg-[#5F9EEF] rounded-full mr-16px" />
              <div>
                <div className="text-[12px] md:text-[14px] w-[80px] mb-[4px]">9:00 AM</div>
                <p className="text-[12px] text-[#8995A6]">12 min</p>
              </div>
            </div>
            <div className="schedule-info min-w-[163px] flex flex-col ml-[7px] lg:ml-[40px] md:{ml-[16px] mt-0}">
              <p className="text-[14px] md:text-[18px] mb-[4px] font-normal">{'Customer\'s Name'}</p>
              <div className="flex gap-x-5px md:gap-x-16px">
                <p className="text-[#5F9EEF] text-[12px] leading-[17px]">Nail</p>
                <p className="text-[12px] leading-[17px]">{'Staff\'s Name 1'}</p>
                <p className="text-[#40C075] text-[12px] leading-[17px]">$25.00</p>
              </div>
            </div>
          </div>
          <div className="schedule-right h-full w-full">
            <div className="py-3px bg-[#CFD6DE] rounded-[4px] float-right">
              <p className="font-medium leading-[14px] text-[10px] tracking-[0.5PX]">COMPLETED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBar;
