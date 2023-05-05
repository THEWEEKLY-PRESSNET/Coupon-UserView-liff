import React, { useState, useEffect, useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import TestComponent from "../../CouponUse";
import Modal from "../../Modal";
import { theme } from "../../styles/theme";
import store from "../../stores";

import type { Root } from "../../stores";

const mockData: Root = {
  // topState: {
  //   view: "top",
  //   lastView: "top",
  //   activeStep: 0,
  //   membered: false,
  //   logged: false,
  //   checked: false,
  //   history: [],
  //   loginType: "reservation",
  //   isModal: false,
  //   isNew: false,
  //   isLoading: true,
  // },
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
  // useEffect(() => {
  //   dispatch(updateTopState(mockData.topState));
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
  return (
    <>
      <Modal />
      <TestComponent />
    </>
  )
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
