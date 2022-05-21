import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "../features/widget/widgetSlice";

export const store = configureStore({
  reducer: {
    widget: widgetReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch