import styles from "./sidebar.module.scss";
import SidebarHeader from "../sidebarHeader/SidebarHeader";
import SidebarContent from "../sidebarContent/SidebarContent";
import chats from "../../../constants/chats.json";
import { useDispatch, useSelector } from "react-redux";
import ProfileView from "../profile/ProfileView";

function Sidebar() {
  const dispatch = useDispatch();
  const isProfileVisible = useSelector((state) => {
    return state.appSlice.isProfileVisible;
  });
  const selsectChat = useSelector((state) => {
    return state.chatSlice.selectedChat;
  });
  function selectChat(id) {
    chats.map((item) => {
      if (item.id === id) {
        dispatch({ type: "chatSlice/selectedChat", payload: item });
      }
    });
  }

  return (
    <>
      <div className={styles.container}>
        <SidebarHeader />
        {!isProfileVisible ? (
          <SidebarContent data={chats} selectChat={selectChat} />
        ) : (
          <ProfileView />
        )}
      </div>
    </>
  );
}

export default Sidebar;
