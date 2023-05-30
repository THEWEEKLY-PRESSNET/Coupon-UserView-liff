import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import Seo from "../components/seo";
import Lotto from "../Lotto";
import { usePreRender } from "../hooks/usePreRender";
import store from "../stores";

const PreRender: React.FC = () => <div>loading...</div>;

const IndexPage: React.FC = ({ location }) => {
  console.log("location", location);
  return (
    <Provider store={store}>
      <Lotto />
    </Provider>
  );
};

export default IndexPage;
