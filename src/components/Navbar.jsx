import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSidebar } from "./ContextApi/SidebarContext";
const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <div className="w-[100%] bg-black text-white p-2 border-b-2 border-orange-400 fixed top-0 z-[999]">
        <div className="h-[100%] px-2 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={toggleSidebar}>
              <MenuIcon className="cursor-pointer mr-3" />
            </button>

            <span className="font-mono text-2xl text-orange-300">entnt</span>
          </div>
          <div className="">
            <div className="relative">
              <NotificationsIcon />
              <span className="absolute top-[-5px] right-[2px] text-white bg-red-500 rounded-full w-[15px] h-[15px] flex items-center justify-center">
                5
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
