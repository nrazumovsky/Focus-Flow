import { createSlice } from "@reduxjs/toolkit";

interface IGlobalTimer {
  timerSeconds: number;
}

const initialState: IGlobalTimer = {
  timerSeconds: 0,
};

const setGlobalTimerSlice = createSlice({
  name: "workingTime",
  initialState,
  reducers: {
    setWorkingTime(state) {
      return {
        ...state,
        timerSeconds: state.timerSeconds + 1,
      };
    },
  },
});

export const { setWorkingTime } = setGlobalTimerSlice.actions;

export default setGlobalTimerSlice.reducer;
