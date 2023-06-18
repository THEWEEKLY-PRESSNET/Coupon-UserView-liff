import React, { useState, useEffect, useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import TestComponent from "../../components/TicketUnit";
import { updateCoupon } from "../../stores/coupon";
import { theme } from "../../styles/theme";
import store from "../../stores";

import type { Root } from "../../stores";

const mockData: Root = {
  coupon: {
    storeName: "みそラーメン東口店",
    issuedCouponId: 0,
    userId: 0,
    usedAt: null,
    favored: false,
    expired: false,
    couponId: 0,
    storeId: 0,
    couponTitleBig: "",
    couponTitleSmall: "",
    issueStart: "",
    issueEnd: "",
    validStart: "",
    validEnd: "",
    issueNumber: 0,
    issueRatio: 1,
    couponDescription: "",
    couponImg: "",
    usageguideId: 0,
    usageguideText: "",
    couponNote: "",
    createdAt: 0,
  },
};

// const useLogin = () => {};

const TestApp: React.FC = () => {
  // const topState = useSelector((s: root) => s.topState);
  // const newR = useSelector((s: root) => s.newReservation);
  // const rState = useSelector((s: root) => s.reservationState);
  // console.log("new", newR);
  // console.log("top", topState);
  // console.log("rst", rState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateCoupon(mockData.coupon));
    // dispatch(updateUser(mockData.user));
  }, []);
  // useEffect(() => {
  //   const setTopState = async () => {
  //     const { result, payload } = await useLogin();
  //     if (result) {
  //       dispatch(
  //         updateTopState({
  //           login: {
  //             logged: true,
  //             ...payload,
  //           },
  //         })
  //       );
  //     }
  //   };
  //   setTopState();
  // }, []);
  return (
    <TestComponent
      couponTitleBig="10%OFF"
      couponTitleSmall="平日に使える味噌ラーメン割引券"
      storeName="みそラーメン東口店"
      valiedStart="20230429"
      valiedEnd="20230505"
      badgeText={5}
      // favored

      // used
      // isFlag
    />
  );
};

const Test: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <TestApp />
      </Provider>
    </ThemeProvider>
  );
};

export default Test;
