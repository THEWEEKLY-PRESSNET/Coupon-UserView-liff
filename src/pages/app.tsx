import React, { useState, useEffect, ReactElement } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider, Typography } from "@mui/material";

// import Question from "../Question";
import Lotto from "../Lotto";

import { usePreRender } from "../hooks/usePreRender";
// import { serchQueryToOgj } from "../utils/handlePath";
import store from "../stores";
import { Link, PageProps, navigate } from "gatsby";
// import { useLocalStorage } from "../hooks/useLocalstorage";
import theme from "../styles/theme";
// import postOauth from "../providers/PostOauth";

const PreRender: React.FC = () => <div>loading...</div>;

const IndexPage: React.FC<PageProps> = ({ location }) => {
  console.log("location", location);

  return usePreRender(
    PreRender,
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div>hello!</div>
      </Provider>
    </ThemeProvider>
  );
};

export default IndexPage;
