import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

// import GetCoupons from "../providers/GetCoupons";
import Layout from "../components/Layout";
import Coupons from "../Coupons";
import Detail from "../CouponDetail";
import CouponUse from "../CouponUse";
import Modal from "../Modal";
import type { Root } from "../stores";

const styles = {};

type props = {
  children: ReactNode;
};

const App: React.FC = () => {
  const { view } = useSelector((s: Root) => s.topState);
  // const coupons = useSelector((s: Root) => s.coupons);
  // console.log("coupons", coupons);
  return (
    <>
      <Layout>
        {view === "top" && <Coupons />}
        {view === "detail" && <Detail />}
        {view === "use" && <CouponUse />}
      </Layout>
      <Modal />
    </>
  );
};

export default App;
