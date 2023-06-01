import { createSlice } from "@reduxjs/toolkit";

export type Modal = {
  body: "use" | "used" | "error";
  isModal: boolean;
};

const initialState: Modal = {
  body: "use",
  isModal: false,
};

const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateModal: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateModal } = slice.actions;
export default slice.reducer;
