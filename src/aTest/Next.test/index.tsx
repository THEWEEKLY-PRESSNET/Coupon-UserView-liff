import React, { useState, useEffect, useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import TestComponent from "../../Lotto/DoneCase";
import { theme } from "../../styles/theme";
import store from "../../stores";
import { updateTopState } from "../../stores/topState";
import { updateArticles } from "../../stores/articles";

import type { Root } from "../../stores";

const mockData: Root = {
  topState: {
    view: "top",
    isStop: false,
    lottered: false,
  },
  articles: [
    {
      articleId: 1,
      articleTitle:
        "【移転オープン】店名を「LOCO FOUNDATION」に変更し、くらら隣りにオープン！！ 東広島市西条昭和町の美容室「LOCOPICARO本店」が移転をして、店名を「LOCO FOUNDATION」に変更して、4月14日にオープンします。新店舗は東広島市西条栄町の東広島市芸術文化ホールくらら隣のビル１階で、 大きなガラス張りでシンプルなデザインの店舗となっています。新店舗は東広島市西条栄町の東広島市芸術文化ホールくらら隣のビル１階で、 大きなガラス張りでシンプルなデザインの店舗となっています。",
      articleUrl:
        "https://www.higashihiroshima-digital.com/news-230420-lccopicaro/",
      articleImg:
        "https://www.higashihiroshima-digital.com/wp-content/uploads/2023/04/IMG_20230419_095426-1536x768.jpg",
      createdAt: 1234567,
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
  useEffect(() => {
    dispatch(updateTopState(mockData.topState));
    dispatch(updateArticles(mockData.articles));
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
