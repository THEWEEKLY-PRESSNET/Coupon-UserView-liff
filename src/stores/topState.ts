import { createSlice } from "@reduxjs/toolkit";

export type TopState = {
  view:
    | "top"
    | "login"
    | "loginNew"
    | "loginComp"
    | "step1"
    | "newStep1"
    | "step2"
    | "step3"
    | "step4"
    | "terms"
    | "forgetPw"
    | "updateUser";
  lastView: "top" | "login" | "step1" | "step2" | "step3" | "step4";
  activeStep: 0 | 1 | 2 | 3;
  membered: boolean;
  logged: boolean;
  checked: boolean; //  seat situation checked and pre reserved
  history: number[];
  loginType: "user" | "reservation";
  isModal: boolean;
  isNew: boolean;
  isLoading: boolean;
  isCalender: boolean;
  isCalenderLoading: boolean;
  isInnerLoading: boolean;
  // userIsReady: boolean;
  // preReserved: boolean;
  // logged: boolean;
  // login?: {
  //   userName?: string | undefined;
  //   userId?: number | undefined;
  //   userTel?: string | undefined;
  //   userMail?: string | undefined;
  //   token?: string | undefined;
  // };
  // setToken?: (token: string) => void;
};

const initialState: TopState = {
  view: "top",
  lastView: "top",
  activeStep: 0,
  membered: false,
  logged: false,
  checked: false,
  history: [],
  loginType: "reservation",
  isModal: false,
  isNew: false,
  isLoading: false,
  isCalender: false,
  isCalenderLoading: false,
  isInnerLoading: false,
  // userIsReady: false,
  // preReserved: false,
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
