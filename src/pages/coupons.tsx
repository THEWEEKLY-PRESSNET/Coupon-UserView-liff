import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import Seo from "../components/seo";
import Coupons from "../Coupons";
import { usePreRender } from "../hooks/usePreRender";
import store from "../stores";

const PreRender: React.FC = () => <div>loading...</div>;

const CouponsPage: React.FC = () => {
  return usePreRender(
    <PreRender />,
    <Provider store={store}>
      <Coupons />
    </Provider>
  );
};

export default CouponsPage;
