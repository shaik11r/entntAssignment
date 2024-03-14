import React, { useEffect, useState } from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PendingIcon from "@mui/icons-material/Pending";
import { useSelector } from "react-redux";
import BorderAllIcon from "@mui/icons-material/BorderAll";
const DashBoard = () => {
  const Orderslist = useSelector((state) => state.orders.value);
  const productsList = useSelector((state) => state.products.value);

  const [totalOrders, setTotalOrders] = useState(0);
  const [deliveredOrders, setDeliveredOrders] = useState(0);
  const [cancelledOrders, setCancelledOrders] = useState(0);
  const [shippedOrders, setShippedOrders] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);

  useEffect(() => {
    let deliverd = 0;
    let cancelled = 0;
    let shipped = 0;
    let pending = 0;

    for (let order of Orderslist) {
      if (order.status === "delivered") {
        deliverd++;
      } else if (order.status === "cancelled") {
        cancelled++;
      } else if (order.status === "shipped") {
        shipped++;
      } else if (order.status === "pending") {
        pending++;
      }
    }
    setTotalOrders(Orderslist.length);
    setDeliveredOrders(deliverd);
    setCancelledOrders(cancelled);
    setShippedOrders(shipped);
    setPendingOrders(pending);
  }, [Orderslist]);

  return (
    <>
      <div className="flex flex-wrap gap-4 ">
        <div className="card bg-blue-500 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-2xl">Total Orders</h3>
            <InventoryIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">{totalOrders}</h1>
        </div>
        <div className="card  bg-green-600 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-xl">Orders delivered</h3>
            <DoneIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">{deliveredOrders}</h1>
        </div>
        <div className="card  bg-red-500 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className=" text-xl">Orders Cancelled</h3>
            <CancelIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">{cancelledOrders}</h1>
        </div>
        <div className="card bg-yellow-500 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-xl">Orders Shipped</h3>
            <LocalShippingIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">{shippedOrders}</h1>
        </div>
        <div className="card bg-blue-400 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-xl">Orders Pending</h3>
            <PendingIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">{pendingOrders}</h1>
        </div>
        <div className="card bg-purple-600 h-[200px] p-4 rounded-lg">
          <div className="flex justify-between py-5 text-3xl items-center">
            <h3 className="text-xl">Orders Pending</h3>
            <BorderAllIcon style={{ fontSize: 50 }} />
          </div>
          <h1 className="text-3xl">{productsList.length}</h1>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
