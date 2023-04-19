import { createSlice } from "@reduxjs/toolkit";

export type Question = {
  gender?: "mail" | "femail" | "others";
  age?: "10s" | "20s" | "30s" | "40s" | "50s" | "60s" | "70s";
  living?:
    | "saijo"
    | "hachihonmatsu"
    | "shiwa"
    | "takaya"
    | "kurose"
    | "fukutomi"
    | "toyosaka"
    | "kouchi"
    | "akitu"
    | "others";
  interested?:
    | "gourmet"
    | "shoping"
    | "fashion"
    | "car"
    | "health"
    | "living"
    | "study"
    | "entertainment"
    | "sports"
    | "childcare"
    | "work"
    | "jobchange"
    | "travel"
    | "money";
};

const initialState: Question = {};

const slice = createSlice({
  name: "topState",
  initialState,
  reducers: {
    updateQuestion: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateQuestion } = slice.actions;
export default slice.reducer;
