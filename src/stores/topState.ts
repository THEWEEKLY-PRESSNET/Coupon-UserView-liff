import { createSlice } from "@reduxjs/toolkit";

export type TopState = {
  view:
    | "login"
    | "lotted"
    | "stoped"
    | "lotto"
    | "lose"
    | "win"
    | "coupons"
    | "top"
    | "detail"
    | "use"
    | "used";
  isStop: boolean;
  lottered: boolean;
};

const initialState: TopState = {
  view: "top",
  isStop: false,
  lottered: false,
};

const slice = createSlice({
  name: "topState",
  initialState,
  reducers: {
    updateTopState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateTopState } = slice.actions;
export default slice.reducer;
