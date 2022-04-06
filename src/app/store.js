import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../features/CategorySlice";
import ProductReducer from "../features/ProductsSlice"
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    products: ProductReducer,
    category: CategoryReducer,
  },
});
