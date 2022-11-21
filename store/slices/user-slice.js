import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    profile: { Name: "", LastName: "", Bio: "", image: "" },
  },
  reducers: {
    profile: (state, payload) => {
      state.profile = payload.payload;
    },
  },
});

export default userSlice;
