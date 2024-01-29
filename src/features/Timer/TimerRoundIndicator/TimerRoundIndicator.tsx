import React from "react";
import EColors from "../../../shared/UI/EColors/EColors";
import Text from "../../../shared/UI/Text/Text";
import { useAppSelector } from "../../../shared/hooks/useRedux";
import styles from "./timerroundindicator.module.css";

function TimerRoundIndicator() {
  const timerActiveRound = useAppSelector(
    (state) => state.setCountTimerRoundsValueReducer.timerRoundsCount,
  );

  const timerRounds = useAppSelector(
    (state) => state.setTaskReducer.taskRoundsNumber,
  );

  return (
    <Text
      As="span"
      size={20}
      color={EColors.black}
      className={styles.timerIntervalIndicator}
    >
      {timerActiveRound} из {timerRounds}
    </Text>
  );
}

export default TimerRoundIndicator;
