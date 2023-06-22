import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GetArticles from "../providers/GetArticle";
import Layout from "../Layout";
import List from "../Coupon.List";
// import Detail from "../CouponDetail";
// import Use from "../CouponUse";
// import Used from "../CouponUsed";
import Loading from "../components/Loading";
// import Modal from "../Modal";
import { getCoupons } from "../providers/GetCoupons";
import { updateCoupons } from "../stores/coupons";
import type { Root } from "../stores";

const styles = {};

const Coupons: React.FC = () => {
  console.log("Coupons");
  const [loading, setLoading] = useState(true);
  const { view, idToken } = useSelector((s: Root) => s.couponState);
  console.log("view", view);
  const coupons = useSelector((s: Root) => s.coupons);
  console.log("coupons", coupons);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCoupons = async () => {
      const res = await getCoupons({ idToken });
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
            {view === "coupons" && <List />}
            {/* {view === "detail" && <Detail />}
            {view === "use" && <Use />}
            {view === "used" && <Used />} */}
          </>
        )}
      </Layout>
      {/* <Modal /> */}
    </>
  );
};

export default Coupons;
