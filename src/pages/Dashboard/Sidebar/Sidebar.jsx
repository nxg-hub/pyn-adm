import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdAccountBalance, MdVerified } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { HiUserAdd } from 'react-icons/hi';
import { TbSettings } from 'react-icons/tb';
import { VscSignOut } from 'react-icons/vsc';
import avatar from '../../../assets/avatar.png';

const Sidebar = ({ openModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = location.pathname;
  // const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const sideBarItems = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <RxDashboard size={22} />,
    },
    {
      path: "/Dashboard/Users",
      name: "Users",
      icon: <FaRegUserCircle size={22} />,
    },
    {
      path: "/Dashboard/Accounts",
      name: "Accounts",
      icon: <MdAccountBalance size={22} />,
    },
    {
      path: "/Dashboard/AdminInvite",
      name: "Invite an Admin",
      icon: <HiUserAdd size={22} />,
    }
  ];

  return (
      <div
          style={{
            overflowY: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          className="bg-[#CCDFE6] fixed left-0 top-[5.5rem] w-[312px] h-[calc(100vh-5.5rem)] overflow-y-auto rounded px-4 py-4 xl:block hidden scrollbar"
      >
        <div className="space-y-[52px] sticky flex flex-col w-full pb-20">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-20">
              <img src={avatar} alt="profile image" className="w-24 h-24 rounded-full" />
              <div className="font-semibold text-xl mt-2">Hi, User</div>
              <div
                  onClick={openModal}
                  className="flex items-center space-x-1 text-red-500 mt-2 justify-center cursor-pointer"
              >
                {/* <MdVerified size={16} />
                <span className="text-sm">Verify Now</span> */}
              </div>
            </div>
            <div className="space-y-[52px] flex flex-col w-full">
              {sideBarItems.map((item, i) => (
                  <Link
                      key={i}
                      to={item.path}
                      className={`flex items-center space-x-6 ${
                          currentRoute === item.path ? '!ml-3 font-bold text-lightBlue' : ''
                      }`}
                  >
                    {item.icon}
                    <span className="hover:text-lightBlue ease transition-colors">{item.name}</span>
                  </Link>
              ))}

              <Link
                  to="/account/settings"
                  className={`flex items-center space-x-6 ${
                      currentRoute === '/account/settings' ? '!ml-3 font-bold text-lightBlue' : ''
                  }`}
              >
                <TbSettings size={22} />
                <span className="hover:text-lightBlue ease transition-colors">Account Settings</span>
              </Link>

              <button
                  onClick={handleLogout}
                  className={`!mt-[10rem] flex items-center space-x-6 ${
                      currentRoute === '/' ? '!ml-3 font-bold text-lightBlue' : ''
                  }`}
              >
                <VscSignOut size={22} />
                <span className="hover:text-lightBlue ease transition-colors">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;