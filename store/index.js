import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/app-slice";
import userSlice from "./slices/user-slice";
import chatSlice from "./slices/chat-slice";

const store = configureStore({
  reducer: {
    appSlice: appSlice.reducer,
    userSlice: userSlice.reducer,
    chatSlice: chatSlice.reducer,
  },
});

export default store;
