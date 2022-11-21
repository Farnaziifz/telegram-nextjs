import React from 'react';
import MenuButton from '../menuButton/MenuButton';
import SearchBar from '../searchBar/SearchBar';
import styles from './SidebarHeader.module.scss';

function SidebarHeader() {
  return (
    <div className={styles.container}>
      <MenuButton />
      <SearchBar />
    </div>
  );
}

export default SidebarHeader;
