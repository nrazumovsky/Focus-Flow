import React, { useEffect, useState } from "react";
import ProgressBar from "../../../entities/ProgressBar/ProgressBar";
import Timer from "../../../entities/Timer/Timer";
import { SECONDS } from "../../../shared/consts/consts";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/useRedux";
import {
  setCountTimerRoundsValue,
  setResetCountTimerRoundsValue,
} from "../../../shared/store/reducers/setCountTimerRoundsValue";
import {
  setInitializeTimer,
  setPauseTimer,
  setStartTimer,
} from "../../../shared/store/reducers/setTimerControlsSlice";
import {
  setTimerTypeFocus,
  setTimerTypeLongBreak,
  setTimerTypeShortBreak,
} from "../../../shared/store/reducers/setTimerType";
import {
  incrementNumberOfFocuses,
  incrementPauseTime,
  incrementWorkingTime,
} from "../../../widgets/Statistics/reducers/setStatisticsMetricsSlice";
import styles from "./timercounter.module.css";

function TimerCounter() {
  const dispatch = useAppDispatch();
  const timerActiveRound = useAppSelector(
    (state) => state.setCountTimerRoundsValueReducer.timerRoundsCount,
  );

  const timerRounds = useAppSelector(
    (state) => state.setTaskReducer.taskRoundsNumber,
  );

  const timerFocusDuration = useAppSelector(
    (state) => state.setTimerDurationReducer.timerFocusDuration,
  );
  const timerShortBreakDuration = useAppSelector(
    (state) => state.setTimerDurationReducer.timerShortBreakDuration,
  );
  const timerLongBreakDuration = useAppSelector(
    (state) => state.setTimerDurationReducer.timerLongBreakDuration,
  );

  const timerTypeFocus = useAppSelector(
    (state) => state.setTimerTypeReducer.timerTypeFocus,
  );
  const timerTypeShortBreak = useAppSelector(
    (state) => state.setTimerTypeReducer.timeTypeShortBreak,
  );
  const timerTypeLongBreak = useAppSelector(
    (state) => state.setTimerTypeReducer.timeTypeLongBreak,
  );

  const startTimer = useAppSelector(
    (state) => state.setTimerControlsReducer.startTimer,
  );
  const resetTimer = useAppSelector(
    (state) => state.setTimerControlsReducer.resetTimer,
  );
  const skipTimer = useAppSelector(
    (state) => state.setTimerControlsReducer.skipTimer,
  );
  const pauseTimer = useAppSelector(
    (state) => state.setTimerControlsReducer.pauseTimer,
  );

  const progressBarInitialWidth = 100;

  const [timer, setTimer] = useState(
    parseInt(timerFocusDuration, 10) * SECONDS,
  );

  const [tickType, setTickType] = useState(timerFocusDuration);
  const [progressBarWidth, setProgressBarWidth] = useState(
    progressBarInitialWidth,
  );

  const progressBarStep =
    progressBarInitialWidth / (parseInt(tickType, 10) * SECONDS);

  const tasks = useAppSelector((state) => state.setTaskReducer.tasks);

  useEffect(() => {
    const timerCountdown = setInterval(() => {
      if (startTimer) {
        setTimer((prevTimer) => prevTimer - 1);
        setProgressBarWidth(
          (prevProgressBarWidth) => prevProgressBarWidth - progressBarStep,
        );
        dispatch(incrementWorkingTime());
        if (timer <= 1) {
          if (timerTypeFocus) {
            dispatch(setTimerTypeShortBreak());
            dispatch(incrementNumberOfFocuses());
            setTimer(parseInt(timerShortBreakDuration, 10) * SECONDS);
            setTickType(timerShortBreakDuration);
            setProgressBarWidth(progressBarInitialWidth);
          } else if (timerTypeShortBreak) {
            dispatch(setTimerTypeFocus());
            dispatch(setCountTimerRoundsValue());
            setTimer(parseInt(timerFocusDuration, 10) * SECONDS);
            setTickType(timerFocusDuration);
            setProgressBarWidth(progressBarInitialWidth);
          } else if (timerActiveRound === Number(timerRounds)) {
            dispatch(setTimerTypeLongBreak());
            setTickType(timerLongBreakDuration);
            setTimer(parseInt(timerLongBreakDuration, 10) * SECONDS);
            setProgressBarWidth(progressBarInitialWidth);
          } else if (timerTypeLongBreak) {
            dispatch(setTimerTypeFocus());
            dispatch(setResetCountTimerRoundsValue());
            setTimer(parseInt(timerFocusDuration, 10) * SECONDS);
            setTickType(timerFocusDuration);
            setProgressBarWidth(progressBarInitialWidth);
            dispatch(setPauseTimer());
          }
        }
      }

      if (pauseTimer) {
        dispatch(incrementPauseTime());
      }
    }, 1000);

    return () => clearInterval(timerCountdown);
  }, [
    dispatch,
    progressBarStep,
    timer,
    startTimer,
    pauseTimer,
    timerActiveRound,
    timerFocusDuration,
    timerLongBreakDuration,
    timerRounds,
    timerShortBreakDuration,
    timerTypeFocus,
    timerTypeLongBreak,
    timerTypeShortBreak,
  ]);

  useEffect(() => {
    if (resetTimer) {
      dispatch(setTimerTypeFocus());
      dispatch(setResetCountTimerRoundsValue());
      setTimer(parseInt(timerFocusDuration, 10) * SECONDS);
      setTickType(timerFocusDuration);
      setProgressBarWidth(progressBarInitialWidth);
    }
  }, [dispatch, resetTimer, timerFocusDuration]);

  useEffect(() => {
    if (skipTimer) {
      if (timerTypeFocus && timerActiveRound !== Number(timerRounds)) {
        dispatch(setTimerTypeShortBreak());
        dispatch(setStartTimer());
        setTimer(parseInt(timerShortBreakDuration, 10) * SECONDS);
        setTickType(timerShortBreakDuration);
        setProgressBarWidth(progressBarInitialWidth);
      } else if (
        timerTypeFocus &&
        timerActiveRound === parseInt(timerRounds, 10)
      ) {
        dispatch(setTimerTypeLongBreak());
        dispatch(setStartTimer());
        setTimer(parseInt(timerLongBreakDuration, 10) * SECONDS);
        setTickType(timerLongBreakDuration);
        setProgressBarWidth(progressBarInitialWidth);
      } else if (timerTypeShortBreak) {
        dispatch(setTimerTypeFocus());
        dispatch(setStartTimer());
        dispatch(setCountTimerRoundsValue());
        setTimer(parseInt(timerFocusDuration, 10) * SECONDS);
        setTickType(timerFocusDuration);
        setProgressBarWidth(progressBarInitialWidth);
      } else if (timerTypeLongBreak) {
        dispatch(setTimerTypeFocus());
        dispatch(setStartTimer());
        dispatch(setResetCountTimerRoundsValue());
        setTimer(parseInt(timerFocusDuration, 10) * SECONDS);
        setTickType(timerFocusDuration);
        setProgressBarWidth(progressBarInitialWidth);
      }
    }
  }, [
    dispatch,
    timerActiveRound,
    timerRounds,
    pauseTimer,
    startTimer,
    resetTimer,
    skipTimer,
    timerFocusDuration,
    timerShortBreakDuration,
    timerLongBreakDuration,
    timerTypeFocus,
    timerTypeShortBreak,
    timerTypeLongBreak,
    tasks.length,
  ]);

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(setInitializeTimer(false));
      dispatch(setPauseTimer());
      dispatch(setTimerTypeFocus());
      dispatch(setResetCountTimerRoundsValue());
      setTimer(parseInt(timerFocusDuration, 10) * SECONDS);
      setTickType(timerFocusDuration);
      setProgressBarWidth(progressBarInitialWidth);
    }
  }, [dispatch, tasks.length, timerFocusDuration]);

  const timerMinutes = Math.floor(timer / SECONDS)
    .toString()
    .padStart(2, "0");

  const timerSeconds = Math.floor(timer % SECONDS)
    .toString()
    .padStart(2, "0");

  return (
    <div className={styles.timerContainer}>
      <Timer>
        {timerMinutes}:{timerSeconds}
      </Timer>
      <ProgressBar progressWidth={progressBarWidth} />
    </div>
  );
}

export default TimerCounter;
