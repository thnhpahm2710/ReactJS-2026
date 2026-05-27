import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";

// Khởi tạo store tập trung
export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cart,
    status: status,
    error: error
  },
});