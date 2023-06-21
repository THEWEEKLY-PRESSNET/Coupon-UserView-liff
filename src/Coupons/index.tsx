import React, {
  useState,
  useEffect,
  ReactElement,
  useCallback,
  useMemo,
} from "react";
import { useLiff } from "react-liff";

import { usePreRender } from "../hooks/usePreRender";

const liffId = "1661486792-ryW8Ay5o";
const PreRender: React.FC = () => <div>loading...</div>;

const Coupons: React.FC<PageProps> = ({ location }) => {
  //   console.log("location", location);
  const { liff } = useLiff();
  const idToken = useMemo(() => {
    return liff
      .init({
        liffId: "123456-abcedfg",
      })
      .then(() => {
        const idToken = liff.getIDToken();
        return idToken;
      });
  }, [liff]);
  console.log("idToken", idToken);
  return usePreRender(
    PreRender,
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div>hello!</div>
      </Provider>
    </ThemeProvider>
  );
};

export default Coupons;
