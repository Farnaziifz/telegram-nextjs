import React from "react";
import SidebarItem from "../sidebarItem/SidebarItem";
import ProfilePlaceHolder from "../../../assets/images/profileImagePlaceholder.png";
import styles from "./SidebarContent.module.scss";

function SidebarContent({ data, selectChat }) {
  return (
    <div className={styles.container}>
      {data &&
        data.length &&
        data.map((item) => {
          return (
            <SidebarItem
              key={item.id}
              id={item.id}
              profileImage={
                item.profileImage ? item.profileImage : ProfilePlaceHolder
              }
              userName={item.userName}
              previewText={item.previewText}
              onClick={selectChat}
            />
          );
        })}
    </div>
  );
}

export default SidebarContent;
