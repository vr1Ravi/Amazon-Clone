import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    signin: (state, action) => {
      state.value = action.payload;
    },
    signOut: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signin, signOut } = userSlice.actions;
export default userSlice.reducer;
