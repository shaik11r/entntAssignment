import React, { useEffect, useState } from "react";
import Cards from "./content/Cards";
import { useSidebar } from "./ContextApi/SidebarContext";

const BodyContent = () => {
  const { isSidebarOpen } = useSidebar();
  console.log(isSidebarOpen);
  return (
    <div
      className={`  ${
        isSidebarOpen ? `ml-[200px]` : `ml-[0px]`
      } h-svh bg-slate-500   text-white no-scrollbar mt-[65px]`}>
      <div className="p-4 rounded-lg  bg-slate-700">
        <Cards />
      </div>
    </div>
  );
};

export default BodyContent;
