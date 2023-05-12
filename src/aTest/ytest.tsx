import React from "react";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import GetCoupons from "../providers/GetCoupons";
import Comp from "../App/ytest";
import store from "../stores";
import { theme } from "../styles/theme";
import GetArticles from "../providers/GetArticle";

const TestComponent: React.FC = () => {
  const store = useSelector(s => s);
  // console.log('stores', store);
  return <Comp />;
};

const Test: React.FC = () => {
  // return <div></div>;

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GetCoupons userId="test" />
        <GetArticles userId="test" />
        <TestComponent />
      </Provider>
    </ThemeProvider>
  );
};

export default Test;

const sampleArr = ["a", "b", "c", 1, 2, 3, ["nest1"], { nest2: "2" }];

const sampleObj = {
  a: "a",
  b: "b",
  c: "c",
  nest1: {
    a: "a",
    nest2: {
      b: "b",
    },
  },
};
