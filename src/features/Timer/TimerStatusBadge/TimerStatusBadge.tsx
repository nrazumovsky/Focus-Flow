import React from "react";
import EColors from "../../../shared/UI/EColors/EColors";
import Text from "../../../shared/UI/Text/Text";
import { useAppSelector } from "../../../shared/hooks/useRedux";
import styles from "./timerstatusbadge.module.css";

function TimerStatusBadge() {
  const timerTitle = useAppSelector(
    (state) => state.setTimerTypeReducer.timerTitle,
  );

  return (
    <div className={styles.timerStatusBadge}>
      <Text
        As="span"
        size={24}
        color={EColors.red}
        className={styles.timerStatusBadgeText}
      >
        {timerTitle}
      </Text>
    </div>
  );
}

export default TimerStatusBadge;
