import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface OpenState {
  openValue: boolean;
}

const initialState: OpenState = {
  openValue: true,
};

export const openAssideSlice = createSlice({
  name: "openasside",
  initialState,
  reducers: {
    setOpen(state, action: PayloadAction<boolean>) {
      state.openValue = action.payload;
    },
  },
});

export const { setOpen } = openAssideSlice.actions;

export default openAssideSlice.reducer;
