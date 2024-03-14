import React from "react";
import Calendar from "react-calendar";
import { useSidebar } from "../ContextApi/SidebarContext";
const OrdersCalender = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <div
      className={`  ${
        isSidebarOpen ? `ml-[200px]` : `ml-[0px]`
      } responsiveorders h-svh bg-slate-700 flex justify-center  text-white no-scrollbar mt-[65px]`}>
      <div className="p-4 rounded-lg">
        <Calendar className="w-[80%] bg-blue-500 rounded-lg p-4 font-mono" />
      </div>
    </div>
  );
};

export default OrdersCalender;
