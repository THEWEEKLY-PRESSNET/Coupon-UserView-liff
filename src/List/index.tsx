import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

import GetCoupons from "../providers/GetCoupons";
import GetArticles from "../providers/GetArticle";
import Layout from "../components/Layout";
import Coupons from "../Coupons";
import Detail from "../CouponDetail";
import CouponUse from "../CouponUse";
import Modal from "../Modal";
import type { Root } from "../stores";
import { useLocalStorage } from "../hooks/useLocalstorage";

const styles = {};

type props = {
  children: ReactNode;
};

const List: React.FC = () => {
  const { view } = useSelector((s: Root) => s.topState);
  // const coupons = useSelector((s: Root) => s.coupons);
  const [state] = useLocalStorage("state");
  console.log("state", state);
  return (
    <>
      <GetCoupons state={state} />
      <GetArticles userId={""} />
      <Layout>
        {view === "top" && <Coupons />}
        {view === "detail" && <Detail />}
        {view === "use" && <CouponUse />}
      </Layout>
      <Modal />
    </>
  );
};

export default List;
