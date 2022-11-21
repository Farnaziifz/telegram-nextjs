import React from "react";
import ProfilePlaceHolder from "../../../../assets/images/profileImagePlaceholder.png";
import styles from "./ChatHeader.module.scss";

function ChatHeader({ profileImage, userName, status }) {
  return (
    <div className={styles.header}>
      <img
        src={profileImage ? profileImage : ProfilePlaceHolder.src}
        className={styles.profileImage}
        alt="profileImage"
      />
      <div className={styles.content}>
        <label className={styles.userLabel}>
          {userName ? userName : "Unkown"}
        </label>
        <label className={styles.timeLabel}>
          {status ? status : "last seen recently"}
        </label>
      </div>
    </div>
  );
}
export default ChatHeader;
