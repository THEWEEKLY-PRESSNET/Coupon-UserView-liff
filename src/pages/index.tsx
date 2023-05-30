import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import Seo from "../components/seo";
import Question from "../Question";
import Lotto from "../Lotto";

import { usePreRender } from "../hooks/usePreRender";
import { serchQueryToOgj } from "../utils/handlePath";
import store from "../stores";
import { Link, PageProps, navigate } from "gatsby";

const PreRender: React.FC = () => <div>loading...</div>;

const IndexPage: React.FC<PageProps> = ({ location }) => {
  console.log("location", location);
  console.log("state", serchQueryToOgj(location.search));
  const { state, hash } = serchQueryToOgj(location.search);
  useEffect(() => {
    if (!state && !hash) {
      // window.location.href = "https://www.higashihiroshima-digital.com/";
      navigate("/404");
      console.log("");
    }
  }, [state, hash]);

  return usePreRender(
    PreRender,
    <Provider store={store}>
      {state !== undefined && <Question />}
      {hash !== undefined && <Lotto />}
    </Provider>
  );
};

export default IndexPage;
