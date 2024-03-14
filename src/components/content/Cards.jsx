import React from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const Cards = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 ">
        <div className="card bg-blue-500 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-2xl">Total Orders</h3>
            <InventoryIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">1500</h1>
        </div>
        <div className="card  bg-green-600 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-xl">Orders delivered</h3>
            <DoneIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">500</h1>
        </div>
        <div className="card  bg-red-500 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className=" text-xl">Orders Canceled</h3>
            <CancelIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">500</h1>
        </div>
        <div className="card bg-yellow-600 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-xl">Orders Shipped</h3>
            <LocalShippingIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">500</h1>
        </div>
      </div>
    </>
  );
};

export default Cards;
