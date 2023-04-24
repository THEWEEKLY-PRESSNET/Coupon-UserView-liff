import React, { useState, useEffect, useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import TestComponent from "../../App";
import { theme } from "../../styles/theme";
import store from "../../stores";

import { updateCoupons } from "../../stores/coupons";
import type { Root } from "../../stores";

const mockData: Root = {
  coupons: [
    {
      couponTitleBig: "10%OFF",
      couponTitleSmall: "平日に使える味噌ラーメン割引券",
      storeName: "みそラーメン東口店",
      valiedStart: "20230429",
      valiedEnd: "20230505",
      badgeText: 3,
      favored: true,
    },
    {
      couponTitleBig: "10%OFF",
      couponTitleSmall: "平日に使える味噌ラーメン割引券",
      storeName: "みそラーメン東口店",
      valiedStart: "20230429",
      valiedEnd: "20230505",
    },
    {
      couponTitleBig: "10%OFF",
      couponTitleSmall: "平日に使える味噌ラーメン割引券",
      storeName: "みそラーメン東口店",
      valiedStart: "20230429",
      valiedEnd: "20230505",
      isFlag: true,
    },
    {
      couponTitleBig: "10%OFF",
      couponTitleSmall: "平日に使える味噌ラーメン割引券",
      storeName: "みそラーメン東口店",
      valiedStart: "20230429",
      valiedEnd: "20230505",
      favored: true,
    },
    {
      couponTitleBig: "10%OFF",
      couponTitleSmall: "平日に使える味噌ラーメン割引券",
      storeName: "みそラーメン東口店",
      valiedStart: "20230429",
      valiedEnd: "20230505",
      badgeText: 3,
      favored: true,
      used: true,
    },
    {
      couponTitleBig: "10%OFF",
      couponTitleSmall: "平日に使える味噌ラーメン割引券",
      storeName: "みそラーメン東口店",
      valiedStart: "20230429",
      valiedEnd: "20230505",
      favored: true,
      isFlag: true,
    },
  ],
};

const TestApp: React.FC = () => {
  // const topState = useSelector((s: root) => s.topState);
  // const newR = useSelector((s: root) => s.newReservation);
  // const rState = useSelector((s: root) => s.reservationState);
  // console.log("new", newR);
  // console.log("top", topState);
  // console.log("rst", rState);

  const dispatch = useDispatch();
  // useEffect(() => {
  dispatch(updateCoupons(mockData.coupons));
  //   dispatch(updateUser(mockData.user));
  // }, []);
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
  return <TestComponent />;
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
