import { createSlice } from "@reduxjs/toolkit";
import { Coupon } from "./coupon";

const initialState: Coupon[] = [];
const slice = createSlice({
  name: "topState",
  initialState,
  reducers: {
    updateCoupons: (_, action) => {
      return [...action.payload];
    },
  },
});

export const { updateCoupons } = slice.actions;
export default slice.reducer;
