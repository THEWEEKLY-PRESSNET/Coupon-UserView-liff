import React, { useState, useEffect, useCallback, ReactNode } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Box } from "@mui/material";

import TestComponent from "../../components/DetailUnit";
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

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        bgcolor: "#D9D9D9",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "600px",
          bgcolor: "#FFF",
        }}
      >
        {children}
      </Box>
    </Container>
  );
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
    <Wrapper>
      <TestComponent
        couponTitleBig="10%OFFクーポン"
        valiedStart="20230429"
        storeName="【24】スイーツ専門無人販売所　西条店"
        valiedEnd="20230505"
        couponDescription="東広島市西条大坪町に「24（トゥエンティフォー）スイーツ専門無人販売所西条店」がオープン。24時間営業の無人販売所で、アイスやケーキなどのテイクアウトスイーツを販売しています。"
        storeUrl="https://www.instagram.com/24_sweetsshop3/"
        storeImg="https://www.higashihiroshima-digital.com/wp-content/uploads/2023/04/24-tennai-1-720x480.jpg"
      />
    </Wrapper>
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
