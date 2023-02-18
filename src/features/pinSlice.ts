import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Pin = {
  pin: {
    success: boolean;
    pin: string;
    msisdn: string;
  };
};

const initialState: Pin = {
  pin: {
    success: false,
    pin: "",
    msisdn: "",
  },
};

export const pinSlice = createSlice({
  name: "pin",
  initialState,
  reducers: {
    getPinResponse: (state, action: PayloadAction<any>) => {
      state.pin = action.payload;
    },
  },
});

export const { getPinResponse } = pinSlice.actions;
export default pinSlice.reducer;
