import React from "react";
import styles from '../styles/loader.module.css';
export default function Loader() {
  return (
    <div classNameName={styles.loader}>
      <span className={styles.loader-text}>loading</span>
      <span className={styles.load}></span>
    </div>
  );
}
