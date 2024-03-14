import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { motion } from "framer-motion";
import { useSidebar } from "./ContextApi/SidebarContext";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`fixed top-[64px] left-0 w-[200px] bg-black h-svh py-10 text-white border-r-2 border-orange-400 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
      <motion.div
        className="p-4 mt-4"
        initial={{ background: "transparent" }}
        whileHover={{ background: "orange", borderRadius: "1rem", border: "none" }}>
        <DashboardIcon />
        <span>
          <Link to="/">Dashboard</Link>
        </span>
      </motion.div>
      <motion.div
        className="p-4 mt-4"
        initial={{ background: "transparent" }}
        whileHover={{ background: "orange", borderRadius: "1rem" }}>
        <ShoppingCartIcon />
        <Link to="/products">Product Managment</Link>
      </motion.div>
      <motion.div
        className="p-4 mt-4"
        initial={{ background: "transparent" }}
        whileHover={{ background: "orange", borderRadius: "1rem" }}>
        <InventoryIcon />
        <span>Orders Management</span>
      </motion.div>
      <motion.div
        className="p-4 mt-4"
        initial={{ background: "transparent" }}
        whileHover={{ background: "orange", borderRadius: "1rem" }}>
        <CalendarTodayIcon />
        <span>Orders Calendar</span>
      </motion.div>
    </div>
  );
};

export default Sidebar;
