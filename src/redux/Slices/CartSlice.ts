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
    removeCard(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addCard, removeCard, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
