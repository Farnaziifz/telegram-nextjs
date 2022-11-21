import React from 'react';
import styles from './ChatItem.module.scss';

function ChatItem({ id, content, date, type }) {
  return (
    <div
      className={`${styles.content} ${
        type === 1 ? styles.mine : styles.notMine
      }`}
    >
      <span className={styles.content}>
        {content}
        <span className={styles.date}>
          {new Date(date).toLocaleDateString()}
        </span>
      </span>
    </div>
  );
}

export default ChatItem;
