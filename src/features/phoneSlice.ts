import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Phone = {
  phoneNumber: string | null;
};

const initialState: Phone = {
  phoneNumber: null,
};

export const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setPhoneNumber } = phoneSlice.actions;
export default phoneSlice.reducer;
