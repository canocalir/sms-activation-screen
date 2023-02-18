import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "../features/phoneSlice"
import pinReducer from "../features/pinSlice"

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
    pin: pinReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
