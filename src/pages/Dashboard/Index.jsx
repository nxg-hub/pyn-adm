import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
