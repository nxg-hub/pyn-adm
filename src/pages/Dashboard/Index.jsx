import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";

const Dashboard = () => {
  return (
    <div className="flex gap-82">
        <Navbar />
      <Sidebar />
      <div className="flex-grow p-6 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
