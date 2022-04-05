import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/ProductsSlice"
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    products: ProductReducer,
  },
});
