import React from 'react';
import { RxChevronRight } from "react-icons/rx";

const Breadcrumbs = () => {
  return (
    <div className="bg-white">
      <ul className="flex border p-2 gap-6 text-xl text-[#2E4053] items-center">
        <li className="cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md">
          Home
        </li>
        {/* Slash Icon */}
        <RxChevronRight className="w-5 h-5 text-[#2E4053]" />
        <li className="cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300">
          About
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
