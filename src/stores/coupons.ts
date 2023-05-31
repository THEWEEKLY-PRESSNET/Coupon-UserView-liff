import { createSlice } from "@reduxjs/toolkit";
import { Coupon } from "./coupon";

const initialState: Coupon[] = [];
const slice = createSlice({
  name: "coupons",
  initialState,
  reducers: {
    updateCoupons: (_, action) => {
      const newArr = [...action.payload];
      newArr.sort((a, b) => {
        return (a.validEnd > b.validEnd && 1) || -1;
      });
      newArr.sort((a, b) => {
        if (a.favored && !b.favored) {
          return -1;
        }
        if (!a.favored && b.favored) {
          return 1;
        }
        return 0;
      });
      newArr.sort((a, b) => {
        if (a.used && !b.used) {
          return 1;
        }
        if (!a.used && b.used) {
          return -1;
        }
        return 0;
      });
      return newArr;
    },
  },
});

export const { updateCoupons } = slice.actions;
export default slice.reducer;
