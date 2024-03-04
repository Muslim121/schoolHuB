import { configureStore } from "@reduxjs/toolkit";
import openReducer from "./Slices/OpenAssideSlice";

export const store = configureStore({
  reducer: {
    open: openReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
