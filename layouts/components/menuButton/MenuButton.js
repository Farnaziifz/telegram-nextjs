import React from "react";
import Button from "../../../assets/images/hamburger-icon.svg";
import Back from "../../../assets/images/back-arrow.svg";
import styles from "./MenuButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
function MenuButton() {
  const dispatch = useDispatch();
  const isProfileVisible = useSelector((state) => {
    return state.appSlice.isProfileVisible;
  });

  function profileVisibility() {
    dispatch({ type: "appSlice/isProfileVisible", payload: !isProfileVisible });
    console.log(isProfileVisible);
  }

  return (
    <div className={styles.container} onClick={profileVisibility}>
      <img src={isProfileVisible ? Back.src : Button.src} alt="MenuIcon" />
    </div>
  );
}

export default MenuButton;
