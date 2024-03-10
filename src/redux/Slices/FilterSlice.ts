import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface OpenState {
  indexValue: number;
  sortRedux: { name: string; sortProperty: string };
  searchValue: string;
}
type Sort = {
  name: string;
  sortProperty: string;
};

const initialState: OpenState = {
  indexValue: 0,
  sortRedux: { name: "популярности DESC", sortProperty: "rating" },
  searchValue: "",
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
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setIndexValue, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
