import React, { useState, useEffect, useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import TestComponent from "../../App";
import { theme } from "../../styles/theme";
import store from "../../stores";
import { updateTopState } from "../../stores/topState";
import { updateUser } from "../../stores/user";
// import { updateNewReservation } from "../../stores/newReservation";
import useLogin from "./useLogin";

import type { Root } from "../../stores";

const mockData: Root = {
  topState: {
    view: "top",
    lastView: "top",
    activeStep: 0,
    membered: false,
    logged: false,
    checked: false,
    history: [],
    loginType: "reservation",
    isModal: false,
    isNew: false,
    isLoading: true,
  },
  user: {
    company: "新山田商会",
    firstName: "新太郎",
    firstRuby: "タロウ",
    lastName: "新規山田",
    lastRuby: "シンヤマダ",
    userId: 5113278539759616,
    userMail: "uniwork.contact@gmail.com",
    userOauthId: 4852205194575872,
    userTel: "090-2222-2222",
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
    dispatch(updateUser(mockData.user));
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
  return <TestComponent userId={null} userOauthId={null} userMail={null} />;
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
