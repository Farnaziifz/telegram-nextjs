import React from 'react';
import styles from './CustomInput.module.scss';

function CustomInput({ title, value, onChange, placeholder, name }) {
  return (
    <div className={styles.container}>
      <label>{title}</label>
      <input
        name={name}
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;
