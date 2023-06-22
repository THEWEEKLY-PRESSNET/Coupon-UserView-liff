import { createSlice } from "@reduxjs/toolkit";

export type CouponState = {
  view: "coupons" | "detail" | "use" | "used";
  idToken?: string;
};

const initialState: CouponState = {
  view: "coupons",
};

const slice = createSlice({
  name: "topState",
  initialState,
  reducers: {
    updateCouponState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateCouponState } = slice.actions;
export default slice.reducer;
