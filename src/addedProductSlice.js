import { createSlice } from "@reduxjs/toolkit";

export const addedProductSlice = createSlice({
  name: "addedProduct",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.value = state.value.filter((item, idx) => idx !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = addedProductSlice.actions;
export default addedProductSlice.reducer;
