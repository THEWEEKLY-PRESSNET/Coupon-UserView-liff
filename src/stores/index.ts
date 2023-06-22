import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import articles, { Article } from "./articles";
// import question, { Question } from "./question";
import coupons, { Issued } from "./coupons";
import coupon, { Coupon } from "./coupon";
// import modal, { Modal } from "./modal";
import couponState, { CouponState } from "./couponState";

export type Root = {
  articles: Article[];
  // question: Question;
  coupons: Issued[];
  coupon: Coupon;
  couponState: CouponState;
  // modal: Modal;
};

const reducer = combineReducers({
  couponState,
  articles,
  // question,
  coupons,
  coupon,

  // modal,
});

const store = configureStore({ reducer });
export default store;
