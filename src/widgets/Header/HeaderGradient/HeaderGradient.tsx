import React from "react";
import styles from "./headergradient.module.css";

function HeaderGradient() {
  return (
    <div className={styles.header__bg}>
      <div className={styles.header__bg_left}>
        <div className={styles.header__bg_left_yellow} />
        <div className={styles.header__bg_left_orange} />
      </div>
      <div className={styles.header__bg_right}>
        <div className={styles.header__bg_right_pink} />
        <div className={styles.header__bg_right_red} />
      </div>
    </div>
  );
}

export default HeaderGradient;
