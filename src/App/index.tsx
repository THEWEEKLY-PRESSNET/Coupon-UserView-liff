import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

import GetCoupons from "../providers/GetCoupons";
import Layout from "../components/Layout";
import Coupons from "../Coupons";
import type { Root } from "../stores";

const styles = {};

type props = {
  children: ReactNode;
};

const App: React.FC = () => {
  const { view } = useSelector((s: Root) => s.topState);
  return (
    <>
      <Layout>{view === "top" && <Coupons />}</Layout>
    </>
  );
};

export default App;
