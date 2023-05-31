import React, { useState, useEffect, useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

// import TestComponent from "../../Lotto";
import { theme } from "../styles/theme";
import store from "../stores";
import { updateTopState } from "../stores/topState";
import { updateArticles } from "../stores/articles";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { postOauth } from "../providers/PostOauth";

import type { Root } from "../stores";
import { navigate } from "gatsby";

const mockData: Root = {
  topState: {
    view: "lotto",
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

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    gap: 2,
  },
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
  // return <TestComponent />;
  const [hash, setHash] = useLocalStorage("hash");
  const [state, setState] = useLocalStorage("state");
  console.log("hash", hash);
  console.log("state", state);

  //  INIT case
  const init = () => {
    const initState = Math.random().toString(32).substring(2);
    setState(initState);
    const baseUrl =
      "https://access.line.me/oauth2/v2.1/authorize?response_type=code";
    const clientId = "1660941787";
    const callbackUrl =
      "https%3A%2F%2Fasia-northeast2-coupon-proj.cloudfunctions.net%2FLineLogin-dev";
    // const state = "test";
    const scope = "profile%20openid";
    const redirect = `${baseUrl}&client_id=${clientId}&redirect_uri=${callbackUrl}&state=${initState}&bot_prompt=aggressive&scope=${scope}`;
    window.location.href = redirect;
  };

  //  oauth case
  const oauth = async (params: { state: string; hash: string }) => {
    const res = await postOauth(params);
    if (res.result) {
      setHash(res.payload.hash);
      setState(res.payload.state);
      navigate("/lotto", {
        state: {
          state,
          hash,
        },
      });
    } else {
      setState("");
    }
  };

  const handleClick = () => {
    if (state === "") {
      console.log("state click init", state);
      init();
    } else {
      console.log("oauth", oauth);
      // oauth({ hash, state });
    }
  };

  return (
    <Box sx={styles.box}>
      <Button variant="contained" onClick={handleClick}>
        くじを引く
      </Button>
    </Box>
  );
};

const Test: React.FC = () => {
  console.log("lotto test");
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <TestApp />
      </Provider>
    </ThemeProvider>
  );
};

export default Test;
