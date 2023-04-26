import { createSlice } from "@reduxjs/toolkit";

export type Ticket = {
  couponTitleBig: string;
  couponTitleSmall: string;
  storeName: string;
  valiedStart: string;
  valiedEnd: string;
  badgeText?: number;
  favored?: boolean;
  used?: boolean;
  isFlag?: boolean;
};

export type Detail = {
  couponTitleBig: string;
  valiedStart: string;
  storeName: string;
  valiedEnd: string;
  couponDescription: string;
  storeImg: string;
  storeUrl: string;
};

export type Coupon = {
  couponTitleBig: string;
  valiedStart: string;
  storeName: string;
  valiedEnd: string;
  couponDescription: string;
  storeImg: string;
  storeUrl: string;
  couponTitleSmall: string;

  issuedCouponId: number;
  userId: number;
  usedAt: number | null;
  favorite: boolean;
  expired: boolean;
  couponId: number;
  storeId: number;
  // storeImg: string;
  storeRemark: string;
  // couponTitleBig: string;
  // couponTitleSmall: string;
  issueStart: string;
  issueEnd: string;
  validStart: string;
  validEnd: string;
  issueNumber: number;
  issueRatio: number;
  // couponDescription: string;
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
  storeImg: "",
  storeRemark: "",
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
  usageguideId: 0,
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
