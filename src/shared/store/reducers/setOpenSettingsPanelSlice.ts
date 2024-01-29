import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISetOpenSettings {
  isOpen: boolean;
}

const initialState: ISetOpenSettings = {
  isOpen: false,
};

const settingsPanelSlice = createSlice({
  name: "settingsPanel",
  initialState,
  reducers: {
    setOpenPanel(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        isOpen: action.payload,
      };
    },
  },
});

export const { setOpenPanel } = settingsPanelSlice.actions;

export default settingsPanelSlice.reducer;
