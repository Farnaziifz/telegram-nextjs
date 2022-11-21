import styles from "./sidebar.module.scss";
import SidebarHeader from "../sidebarHeader/SidebarHeader";
import SidebarContent from "../sidebarContent/SidebarContent";
import chats from "../../../constants/chats.json";
function Sidebar() {
  return (
    <>
      <div className={styles.container}>
        <SidebarHeader />
        {/* selectChat={selectChat} data={chats} */}
        <SidebarContent data={chats} />
      </div>
    </>
  );
}

export default Sidebar;
