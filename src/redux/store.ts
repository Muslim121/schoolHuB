import { configureStore } from "@reduxjs/toolkit";
import openReducer from "./Slices/OpenAssideSlice";
import filterReducer from "./Slices/FilterSlice";

export const store = configureStore({
  reducer: {
    open: openReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
