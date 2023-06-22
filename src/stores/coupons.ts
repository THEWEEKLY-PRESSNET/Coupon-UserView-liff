import { createSlice } from "@reduxjs/toolkit";

export type Issued = {
  issuedCouponId: number;
  userId: number;
  storeId: number;
  couponId: number;
  storeName: string;
  storeUrl: string;
  issueStart: string;
  issueEnd: string;
  validStart: string;
  validEnd: string;
  usedAt: null;
  favored: false;
  expired: false;
};

const initialState: Issued[] = [];

const slice = createSlice({
  name: "coupons",
  initialState,
  reducers: {
    updateCoupons: (_, action) => {
      return [...action.payload];
    },
  },
});

export const { updateCoupons } = slice.actions;
export default slice.reducer;
