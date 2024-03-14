import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productReducer";
import ordersReducer from "../reducers/ordersReducer";
export const store = configureStore({
  reducer: {
    products: productReducer,
    orders: ordersReducer,
  },
});
