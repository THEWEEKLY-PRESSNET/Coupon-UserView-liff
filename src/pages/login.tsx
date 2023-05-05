import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import Seo from "../components/seo";
import Lotto from "../Lotto";
import { usePreRender } from "../hooks/usePreRender";
import store from "../stores";

const PreRender: React.FC = () => <div>loading...</div>;

const LottoPage: React.FC = () => {
  return usePreRender(
    <PreRender />,
    <Provider store={store}>
      <Lotto />
    </Provider>
  );
};

export default LottoPage;
