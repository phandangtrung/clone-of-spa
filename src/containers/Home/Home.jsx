import PlusIcon from '~/assets/icons/plus.svg';
import UserPlusIcon from '~/assets/icons/user-plus.svg';
import { QueryHandler } from '~/components/ReactQuery';
import { IconButton } from '~/components/UI/Buttons';
import ScheduleContainer from './ScheduleContainer';
import coinRankingApi from '../../services/CoinRanking';

export default function Home() {
  const { status } = coinRankingApi.coins().list(10);


  return (
    <QueryHandler status={status}>
      <div className="w-full h-630px pl-44px pr-44px flex justify-between">
        <div className="h-full w-full bg-[#ffff] border-solid-1px border-#ECEEF1 rounded-full-[4px]">
          <div className="w-full h-56px flex p-16px pt-12px pb-12px justify-between border-b-1 border-#ECEEF1">
            <div>{'This Week\'s Schedule (32)'}</div>
            <IconButton className="flex bg-[#1B74E8] w-149px h-32px rounded-[4px] items-center justify-around">
              <img src={PlusIcon} alt="book appointment" />
              <div className="text-[14px] text-[#ffff] pl-3px">Book Appointment</div>
            </IconButton>
          </div>
          <div className="p-16px flex justify-center">
            <ScheduleContainer />
          </div>
        </div>
        <div className="w-430px hidden lg:block ml-24px h-full bg-[#ffff] border-solid-1px border-#ECEEF1 rounded-full-[4px]">
          <div className="w-full p-[16px] border-b-1 border-#ECEEF1">
            <p className="font-medium text-[20px] leading-[24px]">{'This Week\'s Activity'}</p>
          </div>
          <ul className="p-[16px] flex flex-col gap-y-[8px]">
            <li className="p-[16px] border-1 border-#ECEEF1 flex">
              <div className="w-[32px] h-[32px] bg-[#F3F8FF] flex items-center justify-center mr-[16px]">
                <img className="w-full w-[24px] h-[24px] " src={UserPlusIcon} alt="" />
              </div>
              <div className="activity-info w-[200px] text-[14px] flex flex-col  leading-[19.6px]">
                <div>
                  <span className="font-normal">{'Customer\'s Name'}</span>
                  <span className=" text-[#8995A6]">{'payment\'s have been activated by'}</span>
                  <span> Dung Luu Minh</span>
                </div>
                <span className="text-[12px] mt-[4px] text-[#8995A6]">12 min ago</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </QueryHandler >
  );
}
