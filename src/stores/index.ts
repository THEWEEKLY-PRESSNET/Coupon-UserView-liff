import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import modal, { Modal } from "./modal";
import topState, { TopState } from "./topState";

export type Root = {
  topState: TopState;
  modal: Modal;
};

const reducer = combineReducers({
  topState,
  modal,
});

const store = configureStore({ reducer });
export default store;
