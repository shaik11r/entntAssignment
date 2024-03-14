import { createSlice } from "@reduxjs/toolkit";
import { Products_JSON } from "../data/productData";

export const productSlice = createSlice({
  name: "products",
  initialState: { value: Products_JSON },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
    updateProduct: (state, action) => {
      state.value.map((product) => {
        if (product.id === action.payload.id) {
          product.title = action.payload.title;
          product.quantity = action.payload.quantity;
          product.price = action.payload.price;
          product.rating.rate = action.payload.rating;
          product.rating.count = action.payload.userCount;
          product.image = action.payload.image;
        }
        return product;
      });
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((prod) => prod.id !== id);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
