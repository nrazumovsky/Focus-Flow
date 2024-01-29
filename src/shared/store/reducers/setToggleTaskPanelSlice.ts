import { createSlice } from "@reduxjs/toolkit";

interface ITaskPanelSlice {
  isToggle: boolean;
}

const initialState: ITaskPanelSlice = {
  isToggle: false,
};

export const taskPanelSlice = createSlice({
  name: "togglePanel",
  initialState,
  reducers: {
    setToggleTaskPanel(state) {
      return {
        ...state,
        isToggle: !state.isToggle,
      };
    },
  },
});

export const { setToggleTaskPanel } = taskPanelSlice.actions;

export default taskPanelSlice.reducer;
