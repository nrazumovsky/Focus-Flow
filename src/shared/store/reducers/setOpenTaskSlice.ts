import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOpenEditTaskFromSlice {
  isOpen: boolean;
}

const initialState: IOpenEditTaskFromSlice = {
  isOpen: false,
};

export const openTaskEditFormSlice = createSlice({
  name: "togglePanel",
  initialState,
  reducers: {
    setOpenTaskEditForm(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        isOpen: action.payload,
      };
    },
  },
});

export const { setOpenTaskEditForm } = openTaskEditFormSlice.actions;

export default openTaskEditFormSlice.reducer;
