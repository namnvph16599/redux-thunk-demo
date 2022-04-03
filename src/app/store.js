import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import ProductReducer from "../features/products/ProductsSlice"
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    products: ProductReducer,
  },
});
