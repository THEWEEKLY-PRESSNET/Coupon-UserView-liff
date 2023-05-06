import React from "react";
import { useSelector } from "react-redux";
import type { Root } from "../stores";
import Detail from "../components/DetailUnit";
import UseText from "./UseText";
import UseButton from "../components/UseButton";

const CouponUse = () => {
  const coupon = useSelector((s: Root) => s.coupon);

  return (
    <>
      <Detail {...coupon} red hide />
      <UseText />
      <UseButton />
    </>
  );
};

export default CouponUse;
