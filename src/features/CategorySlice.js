import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cateList } from "../api/category";

export const getCategory = createAsyncThunk("category/getAll", async () => {
  const { data } = await cateList();
  return data;
});
const CategorySlice = createSlice({
  name: "Category",
  initialState: {
    value: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      // console.log(action);
      state.value = action.payload;
    });
  },
});

export default CategorySlice.reducer;
