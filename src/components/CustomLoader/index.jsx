import React from 'react';
import styles from './styles.module.scss';

const CustomLoader = () => {
  return (
    <div className={styles.container}>

      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default CustomLoader