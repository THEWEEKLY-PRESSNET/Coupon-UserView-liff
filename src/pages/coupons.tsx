import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import Seo from "../components/seo";
import List from "../List";
import { usePreRender } from "../hooks/usePreRender";
import store from "../stores";
import { updateTopState } from "../stores/topState";

const PreRender: React.FC = () => <div>loading...</div>;

const Coupons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      updateTopState({
        view: "top",
      })
    );
  }, []);
  return <List />;
};

const CouponsPage: React.FC = () => {
  return usePreRender(
    <PreRender />,
    <Provider store={store}>
      <Coupons />
    </Provider>
  );
};

export default CouponsPage;
