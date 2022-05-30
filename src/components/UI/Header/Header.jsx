import Logo from '~/assets/images/POSLogo.png';
import Avatar from '~/assets/images/avatar.png';
import NotificationIcon from '~/assets/icons/notification.svg';

const Header = () => {
  return (
    <div className="navbar fixed pos-header bg-white min-h-0 border-b pos-border-color z-999">
      <div className="flex-1">
        <a href="/" className="cursor-pointer normal-case text-xl">
          <img alt="logo" src={Logo} />
        </a>
      </div>
      <div className="flex-none">
        <button type="button" className="btn btn-ghost btn-circle mr-6 hover:(bg-transparent border-transparent)">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary !bg-blue-800 p-1.5 h-1" />
            <img src={NotificationIcon} className="max-w-[40px]" alt="notification" />
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:(bg-transparent border-transparent) mr-3">
            <div className="w-10 h-10 rounded-full max-w-[40px]">
              <img src={Avatar} />
            </div>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
