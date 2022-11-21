import Sidebar from "./components/sidebar/sidebar";
import styles from "./layout.module.scss";
function getLayout(page) {
  return (
    <>
      <div className={styles.header}>
        <p>Telegram</p>
        <p>Contact</p>
      </div>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.chatContainer}>{page}</div>
      </div>
    </>
  );
}

export default getLayout;
