import { createSlice } from "@reduxjs/toolkit";

export type Modal = {
  body: "use" | "used";
  isModal: boolean;
};

const initialState: Modal = {
  body: "use",
  isModal: false,
};

const slice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    updateModal: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateModal } = slice.actions;
export default slice.reducer;
