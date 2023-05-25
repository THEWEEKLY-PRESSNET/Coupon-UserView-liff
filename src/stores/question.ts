import { createSlice } from "@reduxjs/toolkit";

export type Gender = {
  gender: "male" | "female" | "others" | "";
};
export type Age = {
  age: "10s" | "20s" | "30s" | "40s" | "50s" | "60s" | "70s" | "";
};
export type Living = {
  living:
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
};
export type Interesting = {
  interesting:
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
  interesting: {},
};

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
