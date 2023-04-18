import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import topState, { TopState } from "./topState";

export type Root = {
  topState: TopState;
};

const reducer = combineReducers({
  topState,
});

const store = configureStore({ reducer });
export default store;
