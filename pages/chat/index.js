import Layout from "../../layouts/layout.js";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatHeader from "./components/chatHeader/ChatHeader";
import ChatContent from "./components/chatContent/ChatContent";
import ChatFooter from "./components/chatFooter/ChatFooter";
import styles from "./ChatView.module.scss";
import { useRouter } from "next/router";
import ch from "../../constants/chats.json";

function ChatView() {
  const dispatch = useDispatch();

  const selectedChat = useSelector((state) => {
    return state.chatSlice.selectedChat;
  });
  const chats = useSelector((state) => {
    return state.chatSlice;
  });
  const [message, setMessage] = useState();

  function sendMessage(event) {
    Promise.resolve()
      .then(() => {
        event.preventDefault();
        dispatch({
          type: "chatSlice/sendMessage",
          payload: {
            id: Math.floor(Math.random() * 1000),
            content: message,
            date: Date.now(),
            type: 1,
          },
        });
        setMessage("");
      })
      .then(() => {
        localStorage.setItem("chats", JSON.stringify(chats));
      });
  }
  function handleMessage(event) {
    setMessage(event.target.value);
  }

  return (
    <div className={styles.container}>
      <ChatHeader
        userName={selectedChat.userName}
        profileImage={selectedChat.profileImage}
      />
      <ChatContent chats={selectedChat.chats} />
      <ChatFooter
        message={message}
        handleMessage={handleMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

ChatView.getLayout = Layout;

export default ChatView;
