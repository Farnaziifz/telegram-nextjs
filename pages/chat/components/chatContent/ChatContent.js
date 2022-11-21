import React from 'react';
import ChatItem from '../chatItem/ChatItem';
import styles from './ChatContent.module.scss';

function ChatContent({ chats }) {
  return (
    <div className={styles.body}>
      {chats && chats.length
        ? chats.map((chat, index) => {
            return (
              <ChatItem
                key={index}
                id={chat.id}
                type={chat.type}
                content={chat.content}
                date={chat.date}
              />
            );
          })
        : 'No message...'}
    </div>
  );
}
export default ChatContent;
