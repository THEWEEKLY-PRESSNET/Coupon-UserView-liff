import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { liff } from "@line/liff";
import { useLiff } from "react-liff";

import { usePreRender } from "../hooks/usePreRender";
import store from "../stores";
import { Link, PageProps, navigate } from "gatsby";

const homeUrl = "https://www.higashihiroshima-digital.com/";

const PreRender: React.FC = () => <div>loading...</div>;

const IndexPage: React.FC<PageProps> = ({ location }) => {
  console.log("location", location);
  const { error, isLoggedIn, isReady } = useLiff();
  // console.log("liff", liff);
  console.log("isLoggedIn", isLoggedIn);
  console.log("isReady", isReady);

  useEffect(() => {
    if (typeof window !== "undefined") {
      liff
        .init({ liffId: "1660941787-3qkMjKae" })
        .then(() => {
          // const root = createRoot(container);
          // root.render(element);
          console.log("init success");
        })
        .catch(e => {
          alert(`LIFF error: ${e.message}`);
        });
    }
  }, []);

  return usePreRender(
    PreRender,
    <Provider store={store}>
      <div>index</div>
    </Provider>
  );
};

export default IndexPage;
