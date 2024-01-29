import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

export type IStatisticsItem = {
  date: string;
  numberOfFocuses: number;
  numberOfResets: number;
  workingTime: number;
  pauseTime: number;
};

interface IStatatisticsState {
  statisticsItems: IStatisticsItem[];
}

const currentDateStateItem: IStatisticsItem = {
  date: format(new Date(), "yyyy-MM-dd"),
  numberOfFocuses: 0,
  numberOfResets: 0,
  workingTime: 0,
  pauseTime: 0,
};

const initialStatState: IStatatisticsState = {
  statisticsItems: [currentDateStateItem],
};

export const statSlice = createSlice({
  name: "statistics",
  initialState: initialStatState,
  reducers: {
    setCurrentDateStatisticsItem(state) {
      const currentDate = format(new Date(), "yyyy-MM-dd");
      const findStatItem = state.statisticsItems.find(
        (statisitcsItem) => statisitcsItem.date === currentDate,
      );

      if (!findStatItem) {
        state.statisticsItems.push(currentDateStateItem);
      }
    },
    incrementNumberOfFocuses(state) {
      const currentDate = format(new Date(), "yyyy-MM-dd");
      const findStatItem = state.statisticsItems.find(
        (statisitcsItem) => statisitcsItem.date === currentDate,
      );

      if (findStatItem) {
        findStatItem.numberOfFocuses += 1;
      }
    },
    incrementNumberOfResets(state) {
      const currentDate = format(new Date(), "yyyy-MM-dd");
      const findStatItem = state.statisticsItems.find(
        (statisitcsItem) => statisitcsItem.date === currentDate,
      );

      if (findStatItem) {
        findStatItem.numberOfResets += 1;
      }
    },
    incrementPauseTime(state) {
      const currentDate = format(new Date(), "yyyy-MM-dd");
      const findStatItem = state.statisticsItems.find(
        (statisitcsItem) => statisitcsItem.date === currentDate,
      );

      if (findStatItem) {
        findStatItem.pauseTime += 1;
      }
    },
    incrementWorkingTime(state) {
      const currentDate = format(new Date(), "yyyy-MM-dd");
      const findStatItem = state.statisticsItems.find(
        (statisitcsItem) => statisitcsItem.date === currentDate,
      );

      if (findStatItem) {
        findStatItem.workingTime += 1;
      }
    },
  },
});

export const {
  incrementNumberOfFocuses,
  incrementNumberOfResets,
  incrementWorkingTime,
  incrementPauseTime,
  setCurrentDateStatisticsItem,
} = statSlice.actions;

export default statSlice.reducer;
