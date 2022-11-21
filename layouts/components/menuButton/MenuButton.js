import React from "react";
import Button from "../../../assets/images/hamburger-icon.svg";
import Back from "../../../assets/images/back-arrow.svg";
import styles from "./MenuButton.module.scss";
// import { useDispatch, useSelector } from "react-redux";

function MenuButton() {
  // const dispatch = useDispatch();
  // const isProfileVisible = useSelector((state) => {
  //   return state.app.isProfileVisible;
  // });

  // function profileVisibility() {
  //   dispatch({ type: "app/isProfileVisible", payload: !isProfileVisible });
  // }

  return (
    // onClick={profileVisibility}
    <div className={styles.container}>
      {/* <img src={isProfileVisible ? Back : Button} alt="MenuIcon" /> */}
      <img src={Button.src} />
    </div>
  );
}

export default MenuButton;
