import { createSlice } from "@reduxjs/toolkit";

interface ISetCountTimerRoundsValueSettings {
  timerRoundsCount: number;
}

const initialState: ISetCountTimerRoundsValueSettings = {
  timerRoundsCount: 1,
};

const setCountTimerRoundsValueSlice = createSlice({
  name: "countTimerRoundsValue",
  initialState,
  reducers: {
    setCountTimerRoundsValue(state) {
      return {
        ...state,
        timerRoundsCount: state.timerRoundsCount + 1,
      };
    },
    setResetCountTimerRoundsValue(state) {
      return {
        ...state,
        timerRoundsCount: 1,
      };
    },
  },
});

export const { setCountTimerRoundsValue, setResetCountTimerRoundsValue } =
  setCountTimerRoundsValueSlice.actions;

export default setCountTimerRoundsValueSlice.reducer;
