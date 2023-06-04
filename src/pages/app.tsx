import React, { useState, useEffect, ReactElement } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider, Typography } from "@mui/material";

import Question from "../Question";
import Lotto from "../Lotto";

import { usePreRender } from "../hooks/usePreRender";
import { serchQueryToOgj } from "../utils/handlePath";
import store from "../stores";
import { Link, PageProps, navigate } from "gatsby";
import { useLocalStorage } from "../hooks/useLocalstorage";
import theme from "../styles/theme";
import postOauth from "../providers/PostOauth";

const homeUrl = "https://www.higashihiroshima-digital.com/";

const PreRender: React.FC = () => <div>loading...</div>;

const IndexPage: React.FC<PageProps> = ({ location }) => {
  //   console.log("location", location);
  // const [loading, setLoading] = useState(false);
  const [Elm, setElm] = useState<ReactElement>(<PreRender />);
  const { state, question } = serchQueryToOgj(location.search);
  console.log("urlstate", state);
  const [storageState, setState, removeState] = useLocalStorage("state");
  const [hash, setHash, removeHash] = useLocalStorage("hash");
  console.log("localstate", storageState);
  console.log("hash", hash);

  //  INIT case
  const init = () => {
    const initState = Math.random().toString(32).substring(2);
    // setState(initState);
    const baseUrl =
      "https://access.line.me/oauth2/v2.1/authorize?response_type=code";
    const clientId = "1660941787";
    const callbackUrl =
      "https%3A%2F%2Fasia-northeast2-coupon-proj.cloudfunctions.net%2FLineLogin-dev";
    // "https%3A%2F%2Fasia-northeast2-coupon-proj.cloudfunctions.net%2FLineLogin-test";

    // const state = "test";
    const scope = "profile%20openid";
    const redirect = `${baseUrl}&client_id=${clientId}&redirect_uri=${callbackUrl}&state=${initState}&bot_prompt=aggressive&scope=${scope}`;
    window.location.href = redirect;
  };
  console.log("elm", Elm);

  useEffect(() => {
    const tryOauth = async () => {
      const res = await postOauth({ state: storageState, hash });
      console.log("res oauth", res);

      if (res.result) {
        setState(res.payload.state);
        setHash(res.payload.hash);
        navigate("/lotto");
      } else {
        setElm(<Typography>認証ができませんでした</Typography>);
        removeState();
        removeHash();
        console.log("failed");
        navigate("/test/login");
      }
    };
    if (!state && !storageState) {
      init();
      // window.location.href = "https://www.higashihiroshima-digital.com/";
    } else if (state && !storageState && question) {
      console.log("sec to lotto");
      setState(state);
      navigate("/lotto");
    } else if (state && !storageState && !question) {
      console.log("sec to q");
      setState(state);
      setElm(<Question />);
    } else {
      console.log("oauth challenge");
      console.log("q state", state);
      console.log("l state", storageState);
      tryOauth();
    }
  }, []);

  return usePreRender(
    PreRender,
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {Elm}
        {/* {!storageState && <Question />} */}
      </Provider>
    </ThemeProvider>
  );
};

export default IndexPage;
