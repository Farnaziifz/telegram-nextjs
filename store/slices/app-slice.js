import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isSidebarCollapsed: false,
    isProfileVisible: false,
    isContactOpen: false,
  },
  reducers: {
    isSidebarCollapsed: (state, payload) => {
      state.isSidebarCollapsed = payload;
    },
    isProfileVisible: (state, payload) => {
      console.log("salam", payload);
      state.isProfileVisible = payload.payload;
    },

    isContactOpen: (state, payload) => {
      state.isContactOpen = payload.payload;
    },
  },
});

export default appSlice;
