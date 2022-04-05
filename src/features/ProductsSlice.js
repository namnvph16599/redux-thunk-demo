import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getAll", async () => {
  const { data } = await axios.get("http://localhost:3001/products");
  return data;
});
export const addProducts = createAsyncThunk("products/add", async (dataAdd) => {
  const { data } = await axios.post("http://localhost:3001/products", dataAdd);
  return data;
});
const ProductsSlice = createSlice({
  name: "Products",
  initialState: {
    value: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // console.log(action);
      state.value = action.payload;
    });
    builder.addCase(addProducts.fulfilled, (state, action) => {
      // console.log(action);
      state.value.push(action.payload);
    });
  },
});

export default ProductsSlice.reducer;