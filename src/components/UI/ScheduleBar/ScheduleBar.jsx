import CircleWavyCheck from '~/assets/icons/circleWavyCheck.svg';

const ScheduleBar = () => {
  return (
    <div id="schedule-container" className='w-full p-16px border-#ECEEF1 rounded-full-[4px] flex items-center'>
      <div id="small-calendar" className='w-46px h-49px p-4px pl-8px pr-8px mr-16px bg-[#F8FAFC] text-center flex flex-col justify-between'>
        <div className='text-bold-[24px]'>07</div>
        <div className='text-[13px]'>MON</div>
      </div>
      <img src={CircleWavyCheck} alt="circle WavyCheck" className='w-20px h-20px bg-[#5F9EEF] rounded-full' />
    </div>
  )
}

export default ScheduleBar
