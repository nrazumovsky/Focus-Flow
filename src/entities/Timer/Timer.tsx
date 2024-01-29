import React, { ReactNode } from "react";
import styles from "./timer.module.css";

interface ITImer {
  children: ReactNode;
}

function Timer(props: ITImer) {
  const { children } = props;

  return <div className={styles.timerCounter}>{children}</div>;
}

export default Timer;
