import { createSlice } from "@reduxjs/toolkit";

export type Gender = "male" | "female" | "others" | "";
export type Age = "10s" | "20s" | "30s" | "40s" | "50s" | "60s" | "70s" | "";
export type Living =
  | "saijo"
  | "hachihonmatsu"
  | "shiwa"
  | "takaya"
  | "kurose"
  | "fukutomi"
  | "toyosaka"
  | "kouchi"
  | "akitu"
  | "others"
  | "";
export type Interesting = {
  gourmet: boolean;
  shoping: boolean;
  fashion: boolean;
  car: boolean;
  health: boolean;
  living: boolean;
  study: boolean;
  entertainment: boolean;
  sports: boolean;
  childcare: boolean;
  work: boolean;
  jobchange: boolean;
  travel: boolean;
  money: boolean;
};

export type Question = {
  gender?: Gender;
  age?: Age;
  living?: Living;
  interesting?: Interesting;
};

const initialState: Question = {
  gender: "",
  age: "",
  living: "",
  interesting: {
    gourmet: false,
    shoping: false,
    fashion: false,
    car: false,
    health: false,
    living: false,
    study: false,
    entertainment: false,
    sports: false,
    childcare: false,
    work: false,
    jobchange: false,
    travel: false,
    money: false,
  },
};

console.log("interesting22", initialState.interesting);

const slice = createSlice({
  name: "question",
  initialState,
  reducers: {
    updateQuestion: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateQuestion } = slice.actions;
export default slice.reducer;
