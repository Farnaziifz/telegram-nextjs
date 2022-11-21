import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    profile: { name: "", lastName: "", bio: "", image: "" },
  },
  reducers: {
    profile: (state, payload) => {
      state.profile = payload.payload;
    },
  },
});

export default userSlice;
