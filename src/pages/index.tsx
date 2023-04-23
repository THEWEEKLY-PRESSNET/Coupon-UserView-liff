import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import Seo from "../components/seo";
import App from "../App";
import { usePreRender } from "../hooks/usePreRender";
import store from "../stores";

const PreRender: React.FC = () => <div>loading...</div>;

const IndexPage: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const test = () => {
  const topState = useSelector((s: Root) => s.topState);
  console.log("topstate", topState);

  return <Box>hello</Box>;
};

export const Head = () => (
  <Seo title="Home" description="" children={undefined} />
);

export default IndexPage;
