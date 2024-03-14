import { createSlice } from "@reduxjs/toolkit";
import { orders_json } from "../data/ordersData";

export const orderSlice = createSlice({
  name: "orders",
  initialState: { value: orders_json },
  reducers: {
    toggleOrderStatus: (state, action) => {
      const { orderId, newStatus } = action.payload;
      state.value = state.value.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      );
    },
    deleteOrder: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((order) => order.id !== id);
    },
  },
});

export const { toggleOrderStatus, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
