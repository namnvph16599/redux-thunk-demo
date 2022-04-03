import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increament(state, action) {
      console.log(action);
    },
  },
});

export default counterSlice.reducer;
