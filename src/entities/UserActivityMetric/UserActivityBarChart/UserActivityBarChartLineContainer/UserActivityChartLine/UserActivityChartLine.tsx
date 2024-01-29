import React from "react";
import styles from "./useractivitychartline.module.css";

function UserActivityChartLine() {
  return (
    <div className={styles.chartLineContainer}>
      <svg
        className={styles.chartLine}
        height="1"
        viewBox="0 0 866 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="866" y2="0.5" />
      </svg>
    </div>
  );
}

export default UserActivityChartLine;
