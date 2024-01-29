import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISetTimerDuration {
  timerFocusDuration: string;
  timerShortBreakDuration: string;
  timerLongBreakDuration: string;
}

const initialState: ISetTimerDuration = {
  timerFocusDuration: "15",
  timerShortBreakDuration: "5",
  timerLongBreakDuration: "10",
};

const setTimerDurationSlice = createSlice({
  name: "timerDuration",
  initialState,
  reducers: {
    setTimerFocusDuration(state, actions: PayloadAction<string>) {
      return {
        ...state,
        timerFocusDuration: actions.payload,
      };
    },
    setTimerShortBreakDuration(state, actions: PayloadAction<string>) {
      return {
        ...state,
        timerShortBreakDuration: actions.payload,
      };
    },
    setTimerLongBreakDuration(state, actions: PayloadAction<string>) {
      return {
        ...state,
        timerLongBreakDuration: actions.payload,
      };
    },
  },
});

export const {
  setTimerFocusDuration,
  setTimerShortBreakDuration,
  setTimerLongBreakDuration,
} = setTimerDurationSlice.actions;

export default setTimerDurationSlice.reducer;
