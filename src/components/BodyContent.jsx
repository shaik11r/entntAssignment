import React from "react";
import { useSidebar } from "./ContextApi/SidebarContext";
import DashBoard from "./content/DashBoard";

const BodyContent = () => {
  const { isSidebarOpen } = useSidebar();
  console.log(isSidebarOpen);
  return (
    <div
      className={`  ${
        isSidebarOpen ? `ml-[200px]` : `ml-[0px]`
      } h-svh bg-slate-500   text-white no-scrollbar mt-[65px]`}>
      <div className="p-4 rounded-lg  bg-slate-700">
        <DashBoard />
      </div>
    </div>
  );
};

export default BodyContent;
