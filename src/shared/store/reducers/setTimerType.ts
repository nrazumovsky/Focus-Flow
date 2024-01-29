import { createSlice } from "@reduxjs/toolkit";

interface ISetTimerType {
  timerTypeFocus: boolean;
  timeTypeShortBreak: boolean;
  timeTypeLongBreak: boolean;
  timerTitle: string;
}

const initialState: ISetTimerType = {
  timerTypeFocus: true,
  timeTypeShortBreak: false,
  timeTypeLongBreak: false,
  timerTitle: "Фокус",
};

const setTimerTypeSlice = createSlice({
  name: "timerType",
  initialState,
  reducers: {
    setTimerTypeFocus(state) {
      return {
        ...state,
        timerTypeFocus: true,
        timeTypeShortBreak: false,
        timeTypeLongBreak: false,
        timerTitle: "Фокус",
      };
    },
    setTimerTypeShortBreak(state) {
      return {
        ...state,
        timerTypeFocus: false,
        timeTypeShortBreak: true,
        timeTypeLongBreak: false,
        timerTitle: "Короткий перерыв",
      };
    },
    setTimerTypeLongBreak(state) {
      return {
        ...state,
        timerTypeFocus: false,
        timeTypeShortBreak: false,
        timeTypeLongBreak: true,
        timerTitle: "Длинный перерыв",
      };
    },
  },
});

export const {
  setTimerTypeFocus,
  setTimerTypeShortBreak,
  setTimerTypeLongBreak,
} = setTimerTypeSlice.actions;

export default setTimerTypeSlice.reducer;
