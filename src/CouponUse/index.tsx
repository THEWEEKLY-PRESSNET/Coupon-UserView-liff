import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import type { Root } from "../stores";
import Detail from "../components/DetailUnit";
// import UseText from "./UseText";
import UseButton from "../components/UseButton";
import { strToDate } from "../utils/formatter";

const CouponUse = () => {
  console.log("coupon use");
  const coupon = useSelector((s: Root) => s.coupon);
  const { validStart } = coupon;
  const hide = useMemo(() => {
    const startDate = strToDate(validStart);
    const today = new Date();
    if (today > startDate) {
      return true;
    }
    return false;
  }, [validStart]);

  return (
    <>
      <Detail {...coupon} red hide={hide} />
      {/* <UseText /> */}
      <UseButton />
    </>
  );
};

export default CouponUse;
