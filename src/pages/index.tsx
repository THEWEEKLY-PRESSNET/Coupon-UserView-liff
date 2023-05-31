import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import Question from "../Question";
import Lotto from "../Lotto";

import { usePreRender } from "../hooks/usePreRender";
import { serchQueryToOgj } from "../utils/handlePath";
import store from "../stores";
import { Link, PageProps, navigate } from "gatsby";

const PreRender: React.FC = () => <div>loading...</div>;

const IndexPage: React.FC<PageProps> = ({ location }) => {
  console.log("location", location);
  // console.log("state", serchQueryToOgj(location.state));
  const { state, hash } = (location.state as {
    state: string;
    hash: string;
  }) || { state: "", hash: "" };
  // useEffect(() => {
  //   if (state === "") {
  //     window.location.href = "https://www.higashihiroshima-digital.com/";
  //     navigate("/404");
  //     console.log("");
  //   }
  // }, [state, hash]);

  return usePreRender(
    PreRender,
    <Provider store={store}>
      <Question />
    </Provider>
  );
};

export default IndexPage;
