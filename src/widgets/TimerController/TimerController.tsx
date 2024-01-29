import React from "react";
import TimerCounter from "../../features/Timer/TimerCounter/TimerCounter";
import TimerRoundIndicator from "../../features/Timer/TimerRoundIndicator/TimerRoundIndicator";
import TimerStatusBadge from "../../features/Timer/TimerStatusBadge/TimerStatusBadge";
import styles from "./timercontroller.module.css";

function TimerController() {
  return (
    <div className={styles.timerContainer}>
      <TimerStatusBadge />
      <TimerRoundIndicator />
      <TimerCounter />
    </div>
  );
}

export default TimerController;
