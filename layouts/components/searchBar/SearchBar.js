import React from "react";
import SearchIcon from "../../../assets/images/search-icon.svg";
import styles from "./SearchBar.module.scss";


function SearchBar() {
  return (
    <>
      <img
        className={styles.searchIcon}
        src={SearchIcon.src}
        alt="searchIcon"
      />
      <input type="text" className={styles.search} placeholder="Search" />
    </>
  );
}
export default SearchBar;
