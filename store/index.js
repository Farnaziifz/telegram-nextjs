import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/app-slice";
import userSlice from "./slices/user-slice";

const store = configureStore({
  reducer: {
    appSlice: appSlice.reducer,
    userSlice: userSlice.reducer,
  },
});

export default store;
