import styles from "./sidebar.module.scss";
import SidebarHeader from "../sidebarHeader/SidebarHeader";

function Sidebar() {
  return (
    <>
      <div className={styles.container}>
        <SidebarHeader />
      </div>
    </>
  );
}

export default Sidebar;
