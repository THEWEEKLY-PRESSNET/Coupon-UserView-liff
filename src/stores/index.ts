import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import question, { Question } from "./question";
import coupons from "./coupons";
import coupon, { Coupon } from "./coupon";
import modal, { Modal } from "./modal";
import topState, { TopState } from "./topState";

export type Root = {
  question: Question;
  coupons: Coupon[];
  coupon: Coupon;
  topState: TopState;
  modal: Modal;
};

const reducer = combineReducers({
  question,
  coupons,
  coupon,
  topState,
  modal,
});

const store = configureStore({ reducer });
export default store;
