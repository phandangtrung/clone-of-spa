import { SideBarLink } from '~/components/UI/SideBar';
import HomeIcon from '~/assets/icons/home.svg';
import CalendarIcon from '~/assets/icons/calendar.svg';
import CustomerIcon from '~/assets/icons/customer.svg';
import DepositIcon from '~/assets/icons/deposit.svg';
import SettingsIcon from '~/assets/icons/setting.svg';

function SideBar() {
  const { t } = useTranslation();
  return (
    <div id="sideBar" className="fixed pos-sidebar overflow-x-hidden text-gray-700 bg-white border-r pos-border-color z-999">
      <nav className="h-ful">
        <div className="flex h-full flex-col justify-between">
          <div className="flex-col">
            <SideBarLink id="home-button" to="/">
              <img src={HomeIcon} alt="home" />
              {t('Home')}
            </SideBarLink>
            <SideBarLink id="calendar-button" to="/calendar">
              <img src={CalendarIcon} alt="calendar" />
              {t('Calendar')}
            </SideBarLink>

            <SideBarLink id="customer-button" to="/">
              <img src={CustomerIcon} alt="customer" />
              {t('Customer')}
            </SideBarLink>

            <SideBarLink id="deposit-button" to="/">
              <img src={DepositIcon} alt="charge deposit" />
              {t('Charge Deposit')}
            </SideBarLink>

            <SideBarLink id="settings-button" to="/">
              <img src={SettingsIcon} alt="settings" />
              {t('Settings')}
            </SideBarLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
