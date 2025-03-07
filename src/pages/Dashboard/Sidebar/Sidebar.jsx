import React from "react";
import logo from "../../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
const Sidebar = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const sideBarItems = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <RxDashboard size={24} />,
    },
    {
      path: "/Dashboard/Users",
      name: "Users",
      icon: <FaRegUserCircle size={24} />,
    },
    {
      path: "/Dashboard/Accounts",
      name: "Accounts",
      icon: <MdAccountBalance size={24} />,
    },
  ];
  return (
    <div className="bg-secondary ">
      <nav className="bg-[#CCDFE6] w-24 md:w-60 h-screen p-4 text-primary font-bold">
        <div className="mb-5">
          <img className="h-[100px]" src={logo} alt="logo" />
        </div>
        <ul>
          {sideBarItems.map((item, i) => {
            return (
              <li key={i} className="mb-2">
                <Link
                  to={item.path}
                  className={` text-sm   hover:text-blue-500 ${
                    currentRoute === item.path ? "text-blue-500 " : ""
                  }  block p-2 rounded`}>
                  <div className="flex items-center gap-2 md:text-xl">
                    <span>{item?.icon}</span>
                    <span className="hidden md:block">{item.name}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
