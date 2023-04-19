import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import coupons from "./coupons";
import coupon, { Coupon } from "./coupon";
import modal, { Modal } from "./modal";
import topState, { TopState } from "./topState";

export type Root = {
  coupons: Coupon[];
  coupon: Coupon;
  topState: TopState;
  modal: Modal;
};

const reducer = combineReducers({
  coupons,
  coupon,
  topState,
  modal,
});

const store = configureStore({ reducer });
export default store;
