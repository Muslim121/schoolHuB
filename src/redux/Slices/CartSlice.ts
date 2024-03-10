import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./types";

interface OpenState {
  items: CartItem[];
}

const initialState: OpenState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<CartItem>) {
      state.items.push({
        ...action.payload,
      });
    },
  },
});

export const { addCard } = CartSlice.actions;

export default CartSlice.reducer;
