import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GetArticles from "../providers/GetArticle";
import Layout from "../components/Layout";
import Coupons from "../Coupons";
import Detail from "../CouponDetail";
import CouponUse from "../CouponUse";
import CouponUsed from "../CouponUsed";
import Loading from "../Loading";
import Modal from "../Modal";
import { getCoupons } from "../providers/GetCoupons";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { updateCoupons } from "../stores/coupons";
import type { Root } from "../stores";

const styles = {};

const List: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { view } = useSelector((s: Root) => s.topState);
  // const view = "loading";
  const coupons = useSelector((s: Root) => s.coupons);
  // console.log("view", view);
  console.log("coupons", coupons);
  const [state] = useLocalStorage("state");
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCoupons = async () => {
      const res = await getCoupons({ state: state || "" });
      if (res.result) {
        await dispatch(updateCoupons(res.payload));
        await setLoading(false);
      } else {
        setLoading(false);
      }
    };
    fetchCoupons();
  }, []);
  return (
    <>
      <GetArticles userId={""} />
      <Layout>
        {(loading && <Loading />) || (
          <>
            {view === "top" && <Coupons />}
            {view === "detail" && <Detail />}
            {view === "use" && <CouponUse />}
            {view === "used" && <CouponUsed />}
          </>
        )}
      </Layout>
      <Modal />
    </>
  );
};

export default List;

{
  /* <GetCoupons state={state} /> */
}
