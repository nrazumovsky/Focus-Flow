import React from "react";
import styles from "./progressbar.module.css";

interface IProgressBar {
  progressWidth: number;
}

function ProgressBar(props: IProgressBar) {
  const { progressWidth } = props;

  return (
    <div className={styles.timerProgressBar}>
      <div
        className={styles.timerProgressBarFill}
        style={{ width: `${progressWidth}%` }}
      />
    </div>
  );
}

export default ProgressBar;
