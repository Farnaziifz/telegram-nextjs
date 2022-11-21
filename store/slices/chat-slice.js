import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    selectedChat: {},
    chats: [],
  },
  reducers: {
    selectedChat: (state, payload) => {
      state.selectedChat = payload.payload;
    },
    setChats: (state, payload) => {
      console.log(payload);
      state.chats = payload.payload;
    },
    sendMessage: (state, payload) => {
      let newMessage = state.selectedChat;
      newMessage.chats.push(payload.payload);
      state.selectedChat = newMessage;
    },
  },
});

export default chatSlice;
