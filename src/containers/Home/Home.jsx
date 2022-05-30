import { Link } from 'react-router-dom';
import { Row, Col } from '~/components/UI/Grid';
import { QueryHandler } from '~/components/ReactQuery';
import coinRankingApi from '../../services/CoinRanking';
import PlusIcon from '~/assets/icons/plus.svg';
import { IconButton } from '~/components/UI/Buttons';
import ScheduleBar from '~/components/UI/ScheduleBar';

export default function Home() {
  const { t } = useTranslation();

  const { data, status } = coinRankingApi.coins().list(10);

  const coins = data?.data.data.coins?.slice(0, 10);

  return (
    <QueryHandler status={status}>
      <div className='w-full h-900px pl-44px pr-44px flex justify-between'>
        <div className='w-4/6 h-full bg-[#ffff] border-solid-1px border-#ECEEF1 rounded-full-[4px]'>
          <div className='w-full h-56px flex pl-16px pr-16px pt-12px pb-12px justify-between'>
            <div>
              {'This Week’s Schedule (32)'}
            </div>
            <IconButton className="flex bg-[#1B74E8] w-149px h-32px rounded-[4px] items-center justify-around">
              <img src={PlusIcon} alt="book appointment"></img>
              <div className='text-[14px] text-[#ffff] pl-3px'>{'Book Appointment'}</div>
            </IconButton>
          </div>
          <div className='w-full pl-16px pr-16px'>
            <ScheduleBar></ScheduleBar>
          </div>
        </div>
        <div className='w-2/7 h-full bg-[#ffff] border-solid-1px border-#ECEEF1 rounded-full-[4px]'>
          <div>

          </div>
        </div>
      </div>
    </QueryHandler>
  );
}
