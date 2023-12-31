import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import liff from "@line/liff";
import { useLiff } from "react-liff";

import GetArticles from "../providers/GetArticle";
import Layout from "../Layout";
import List from "../Coupon.List";
import Detail from "../Coupon.Detail";
// import Use from "../CouponUse";
// import Used from "../CouponUsed";
import Loading from "../components/Loading";
// import Modal from "../Modal";
import { getCoupons } from "../providers/GetCoupons";
import { updateCoupons } from "../stores/coupons";
import type { Root } from "../stores";

const liff = (() => {
  if (typeof window !== "undefined") {
    return require("@line/liff");
  }
  return undefined;
})();
// import { useLiff } from "react-liff";

const liffId = "1661486792-mWQ6Adxo";
const styles = {};

const Coupons: React.FC = () => {
  console.log("Coupons");
  const [loading, setLoading] = useState(true);
  const { view } = useSelector((s: Root) => s.couponState);
  const { isReady } = useLiff();
  console.log("view", view);
  // console.log("idToken", idToken);
  const coupons = useSelector((s: Root) => s.coupons);
  console.log("coupons", coupons);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCoupons = async () => {
      const getToken = () => {
        return liff
          .init({
            liffId,
          })
          .then(() => {
            console.log("liff", liff);
            const newId = liff.getIDToken();
            console.log("newId", newId);
            return newId;
          })
          .then(token => {
            console.log("token", token);
            return token;
          });
      };
      const idToken = (isReady && (await getToken())) || "";
      console.log("idToken", idToken);
      const res = await getCoupons({ idToken });
      if (res.result) {
        await dispatch(updateCoupons(res.payload));
        await setLoading(false);
      } else {
        setLoading(false);
      }
    };

    if (typeof window !== "undefined") {
      fetchCoupons();
    }
  }, []);
  return (
    <>
      <GetArticles userId={""} />
      <Layout>
        {(loading && <Loading />) || (
          <>
            {view === "coupons" && (
              <>
                <List />
                <button className="App-button" onClick={liff.logout}>
                  Logout
                </button>
              </>
            )}
            {/* {view === "detail" && <Detail />} */}
            {/* {view === "use" && <Use />}
            {view === "used" && <Used />} */}
          </>
        )}
      </Layout>
      {/* <Modal /> */}
    </>
  );
};

export default Coupons;
