import React, { useState, useEffect, useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import TestComponent from "../../CouponUse";
import Modal from "../../Modal";
import { theme } from "../../styles/theme";
import store from "../../stores";

import { updateCoupon } from "../../stores/coupon";
import { updateTopState } from "../../stores/topState";
import { Root } from "../../stores";

const mockData: Root = {
  topState: {
    view: "top",
  },
  coupon: {
    couponDescription: "一回限り、週末限定でカレー全品１０％OFF！",
    couponId: 5658646574792704,
    couponTitleBig: "カレー１０％OFF",
    couponTitleSmall: "週末限定割引券",
    createdAt: 1683161210,
    expired: false,
    favored: false,
    issueEnd: "20230701",
    issueStart: "20230601",
    issuedCouponId: 5950627578380288,
    storeId: 5638358357245952,
    storeImg:
      "https://www.higashihiroshima-digital.com/wp-content/uploads/2023/04/42400-640x480.jpg",
    storeName: "ゴーゴーカレー&フジヤマ55東広島スタジアム",
    storeRemark:
      "インパクトのあるゴリラの看板と、黄色と赤のカラーリングが目を引く外観です",
    storeUrl: "https://www.gogocurry.com/shop/306/index.html",
    used: false,
    usedAt: null,
    userId: "test",
    validEnd: "20230701",
    validStart: "20230601",
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
    dispatch(updateTopState(mockData.topState));
    dispatch(updateCoupon(mockData.coupon));
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
    <>
      <Modal />
      <TestComponent />
    </>
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
