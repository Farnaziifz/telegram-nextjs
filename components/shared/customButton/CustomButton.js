import React from 'react';
import styles from './CustomButton.module.scss';

function CustomButton({ title, onClick }) {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        {title}
      </button>
    </>
  );
}

export default CustomButton;
