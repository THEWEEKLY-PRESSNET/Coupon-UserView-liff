import React, { ReactNode } from "react";

import Layout from "../components/Layout";
import Coupons from "../Coupons";

const styles = {};

type props = {
  children: ReactNode;
};

const App: React.FC<props> = () => {
  return (
    <Layout>
      <Coupons />
    </Layout>
  );
};

export default App;
