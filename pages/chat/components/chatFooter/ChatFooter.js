import CustomInput from "../../../../components/customInput/CustomInput";
import React from "react";
import styles from "./ChatFooter.module.scss";

function ChatFooter({ message, handleMessage, sendMessage }) {
  return (
    <form className={styles.footer} onSubmit={sendMessage}>
      <CustomInput
        value={message}
        onChange={handleMessage}
        placeholder="message..."
      />
    </form>
  );
}
export default ChatFooter;
