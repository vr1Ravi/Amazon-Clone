import { configureStore } from "@reduxjs/toolkit";
import addedProduct from "./addedProductSlice";
import user from "./userSlice";
const store = configureStore({
  reducer: {
    addedProduct,
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
