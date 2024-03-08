import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface OpenState {
  indexValue: number;
}

const initialState: OpenState = {
  indexValue: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setIndexValue(state, action: PayloadAction<number>) {
      state.indexValue = action.payload;
    },
  },
});

export const { setIndexValue } = filterSlice.actions;

export default filterSlice.reducer;
