import React from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PendingIcon from "@mui/icons-material/Pending";
import { useSelector } from "react-redux";
const DashBoard = () => {
  const Orderslist = useSelector((state) => state.orders.value);
  return (
    <>
      <div className="flex flex-wrap gap-4 ">
        <div className="card bg-blue-500 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-2xl">Total Orders</h3>
            <InventoryIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">{Orderslist.length}</h1>
        </div>
        <div className="card  bg-green-600 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-xl">Orders delivered</h3>
            <DoneIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">
            {Orderslist.reduce((accumulator, currentvalue) => {
              if (currentvalue.status === "delivered") {
                accumulator = accumulator + 1;
              }
              return accumulator;
            }, 0)}
          </h1>
        </div>
        <div className="card  bg-red-500 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className=" text-xl">Orders Cancelled</h3>
            <CancelIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">
            {Orderslist.reduce((accumulator, currentvalue) => {
              if (currentvalue.status === "cancelled") {
                accumulator = accumulator + 1;
              }
              return accumulator;
            }, 0)}
          </h1>
        </div>
        <div className="card bg-yellow-500 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-xl">Orders Shipped</h3>
            <LocalShippingIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">
            {" "}
            {Orderslist.reduce((accumulator, currentvalue) => {
              if (currentvalue.status === "shipped") {
                accumulator = accumulator + 1;
              }
              return accumulator;
            }, 0)}
          </h1>
        </div>
        <div className="card bg-blue-400 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-xl">Orders Pending</h3>
            <PendingIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">
            {" "}
            {Orderslist.reduce((accumulator, currentvalue) => {
              if (currentvalue.status === "pending") {
                accumulator = accumulator + 1;
              }
              return accumulator;
            }, 0)}
          </h1>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
