import React from "react";
import Button from "../../../shared/UI/Button/Button";
import EColors from "../../../shared/UI/EColors/EColors";
import EIcons from "../../../shared/UI/Icon/EIcons";
import Icon from "../../../shared/UI/Icon/Icon";
import Text from "../../../shared/UI/Text/Text";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/useRedux";
import {
  setPauseTimer,
  setResetTimer,
  setSkipTimer,
  setStartTimer,
} from "../../../shared/store/reducers/setTimerControlsSlice";
import {
  incrementNumberOfResets,
  setCurrentDateStatisticsItem,
} from "../../../widgets/Statistics/reducers/setStatisticsMetricsSlice";
import styles from "./timercontrols.module.css";

function TimerControls() {
  const dispatch = useAppDispatch();
  const startTimer = useAppSelector(
    (state) => state.setTimerControlsReducer.startTimer,
  );

  const startHandler = () => {
    dispatch(setCurrentDateStatisticsItem());
    dispatch(setStartTimer());
  };

  const pauseHandler = () => {
    dispatch(setPauseTimer());
  };

  const resetHandler = () => {
    dispatch(incrementNumberOfResets());
    dispatch(setResetTimer());
  };

  const skipHandler = () => {
    dispatch(setSkipTimer());
  };

  return (
    <div className={styles.timerControlsContainer}>
      <Button
        As="button"
        onClick={resetHandler}
        className={`${styles.button} ${styles.buttonSecondary}`}
      >
        <Icon
          name={EIcons.reset}
          color={EColors.black}
          size={24}
          className={styles.timerControlsIcon}
        />
        <Text As="span" color={EColors.black} size={14}>
          Сбросить
        </Text>
      </Button>
      {!startTimer ? (
        <Button
          As="button"
          onClick={startHandler}
          className={`${styles.button} ${styles.buttonPrimary}`}
        >
          <Icon
            name={EIcons.play}
            color={EColors.white}
            size={24}
            className={styles.timerControlsIcon}
          />
          <Text As="span" color={EColors.white} size={14}>
            Старт
          </Text>
        </Button>
      ) : (
        <Button
          As="button"
          onClick={pauseHandler}
          className={`${styles.button} ${styles.buttonPrimary}`}
        >
          <Icon
            name={EIcons.pause}
            color={EColors.white}
            size={24}
            className={styles.timerControlsIcon}
          />
          <Text As="span" color={EColors.white} size={14}>
            Пауза
          </Text>
        </Button>
      )}
      <Button
        As="button"
        onClick={skipHandler}
        className={`${styles.button} ${styles.buttonSecondary}`}
      >
        <Icon
          name={EIcons.next}
          color={EColors.black}
          size={24}
          className={styles.timerControlsIcon}
        />
        <Text As="span" color={EColors.black} size={14}>
          Пропустить
        </Text>
      </Button>
    </div>
  );
}

export default TimerControls;
