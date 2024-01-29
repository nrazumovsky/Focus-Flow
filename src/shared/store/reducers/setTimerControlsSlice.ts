import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITimerControlsSlice {
  initializeTimer: boolean;
  startTimer: boolean;
  pauseTimer: boolean;
  resetTimer: boolean;
  skipTimer: boolean;
}

const initialState: ITimerControlsSlice = {
  initializeTimer: false,
  startTimer: false,
  pauseTimer: false,
  resetTimer: false,
  skipTimer: false,
};

const timerControlsSlice = createSlice({
  name: "setTimer",
  initialState,
  reducers: {
    setInitializeTimer(state, actions: PayloadAction<boolean>) {
      return {
        ...state,
        initializeTimer: actions.payload,
      };
    },
    setStartTimer(state) {
      return {
        ...state,
        startTimer: true,
        pauseTimer: false,
        resetTimer: false,
        skipTimer: false,
      };
    },
    setPauseTimer(state) {
      return {
        ...state,
        startTimer: false,
        pauseTimer: true,
        skipTimer: false,
      };
    },
    setResetTimer(state) {
      return {
        ...state,
        startTimer: false,
        resetTimer: true,
        skipTimer: false,
      };
    },
    setSkipTimer(state) {
      return {
        ...state,
        startTimer: false,
        resetTimer: false,
        skipTimer: true,
      };
    },
  },
});

export const {
  setInitializeTimer,
  setStartTimer,
  setPauseTimer,
  setResetTimer,
  setSkipTimer,
} = timerControlsSlice.actions;

export default timerControlsSlice.reducer;
