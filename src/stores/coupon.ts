import { createSlice } from "@reduxjs/toolkit";

export type Coupon = {
  issuedCouponId: number;
  userId: number;
  usedAt: number | null;
  favorite: boolean;
  expired: boolean;
  couponId: number;
  storeId: number;
  couponTitleBig: string;
  couponTitleSmall: string;
  issueStart: string;
  issueEnd: string;
  validStart: string;
  validEnd: string;
  issueNumber: number;
  issueRatio: number;
  couponDescription: string;
  couponImg: string;
  usageguideId: number;
  usageguideText: string;
  couponNote: string;
  createdAt: number;
  updatedAt?: number | null;
  deletedAt?: number | null;
};

const initialState: Coupon = {
  issuedCouponId: 0,
  userId: 0,
  usedAt: null,
  favorite: false,
  expired: false,
  couponId: 0,
  storeId: 0,
  couponTitleBig: "",
  couponTitleSmall: "",
  issueStart: "",
  issueEnd: "",
  validStart: "",
  validEnd: "",
  issueNumber: 0,
  issueRatio: 1,
  couponDescription: "",
  couponImg: "",
  usageguideId: 1234567890123456,
  usageguideText: "",
  couponNote: "",
  createdAt: 0,
};

const slice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    updateCoupon: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateCoupon } = slice.actions;
export default slice.reducer;
