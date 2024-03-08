import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface OpenState {
  indexValue: number;
  sortRedux: { name: string; sortProperty: string };
}
type Sort = {
  name: string;
  sortProperty: string;
};

const initialState: OpenState = {
  indexValue: 0,
  sortRedux: { name: "популярности DESC", sortProperty: "rating" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setIndexValue(state, action: PayloadAction<number>) {
      state.indexValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sortRedux = action.payload;
    },
  },
});

export const { setIndexValue, setSort } = filterSlice.actions;

export default filterSlice.reducer;
