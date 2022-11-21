import Layout from "../../layouts/layout.js";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ChatHeader from "./components/chatHeader/ChatHeader";
import ChatContent from "./components/chatContent/ChatContent";
import ChatFooter from "./components/chatFooter/ChatFooter";
import styles from "./ChatView.module.scss";

const Test = () => {
  const router = useRouter();
  const { id } = router.query;
  const selectedChat = useSelector((state) => {
    return state.chatSlice.selectedChat;
  });
  const chats = useSelector((state) => {
    return state.chatSlice;
  });
  const dispatch = useDispatch();
  const [message, setMessage] = useState();

//   useEffect(() => {
//     return getData();
//   }, []);
  function sendMessage(event) {
    Promise.resolve()
      .then(() => {
        event.preventDefault();
        dispatch({
          type: "chat/sendMessage",
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
//   function getData() {
//     if (id) {
//       JSON.parse(localStorage.getItem("chats")).map((item) => {
//         if (item.id === parseInt(id)) {
//           dispatch({ type: "chat/selectedChat", payload: item });
//         }
//       });
//     }
  }
  return (
    <>
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
    </>
  );
};

Test.getLayout = Layout;

export default Test;
