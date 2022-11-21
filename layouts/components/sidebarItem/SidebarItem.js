import React from "react";
import styles from "./SidebarItem.module.scss";

function SidebarItem({ id, profileImage, userName, previewText, onClick }) {
  return (
    <div
      className={styles.container}
      onClick={() => {
        return onClick(id);
      }}
      id={id}
    >
      <img
        src={profileImage.src}
        className={styles.profileImage}
        alt="profileImage"
      />
      <div className={styles.content}>
        <label className={styles.userName}>{userName}</label>
        <label className={styles.previewText}>{previewText}</label>
      </div>
    </div>
  );
}

export default SidebarItem;
