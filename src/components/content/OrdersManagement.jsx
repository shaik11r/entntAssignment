import React from "react";
import { useSidebar } from "../ContextApi/SidebarContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteOrder, toggleOrderStatus } from "../../reducers/ordersReducer";
const OrdersManagement = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSidebar();
  const Orderslist = useSelector((state) => state.orders.value);
  const handleToggleStatus = (orderId, newStatus) => {
    if (newStatus !== "delivered") {
      dispatch(toggleOrderStatus({ orderId, newStatus }));
    }
  };
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };
  return (
    <>
      <div
        className={`  ${
          isSidebarOpen ? `ml-[200px]` : `ml-[0px]`
        } responsiveorders h-svh bg-slate-500   text-white no-scrollbar mt-[65px]`}>
        <div className="p-4 rounded-lg  bg-slate-700">
          <h1 className="text-3xl font-mono mb-5">Orders List</h1>
          {Orderslist.map((order) => {
            return (
              <div
                className={` ${
                  order.status === "pending"
                    ? "border-blue-400 border"
                    : order.status === "delivered"
                    ? "border-green-400 border"
                    : order.status === "cancelled"
                    ? "border-red-400 border"
                    : order.status === "shipped"
                    ? "border-yellow-400 border"
                    : ""
                }
                     rounded-lg p-6 mb-5 font-mono`}
                key={order.id}>
                <h2>Order ID: ABV00{order.id}</h2>
                <p>Date: {order.date}</p>
                <p>Name: {order.name}</p>
                <p>Total: ₹ {order.orderTotal}</p>
                <div className="flex gap-4 items-center ">
                  <p>Status:</p>
                  <div
                    className={`p-2 rounded ${
                      order.status === "pending"
                        ? "bg-blue-400 text-white"
                        : order.status === "delivered"
                        ? "bg-green-400 text-white"
                        : order.status === "cancelled"
                        ? "bg-red-400 text-white"
                        : order.status === "shipped"
                        ? "bg-yellow-400 text-black"
                        : ""
                    }`}>
                    {order.status}
                  </div>
                </div>

                <p>Payment Mode: {order.paymentMode}</p>
                <p>Expected Date: {order.expectedDate}</p>
                <div className="flex gap-2 items-center">
                  <p>updateStatus:</p>
                  <select
                    className="bg-black rounded p-1"
                    value={order.status}
                    onChange={(e) => handleToggleStatus(order.id, e.target.value)}>
                    <option value="pending">Pending</option>
                    <option value="shipped">Shipped</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <button
                  className="bg-red-500 p-2 rounded-lg mt-2"
                  onClick={() => {
                    handleDeleteOrder(order.id);
                  }}>
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OrdersManagement;
