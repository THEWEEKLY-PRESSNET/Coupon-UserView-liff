import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateTopState } from "../stores/topState";
import type { Root } from "../stores";

const usePrice = () => {
  console.log("usePrice");
  const {
    reservationAdults,
    reservationChildren,
    reservationPlanId,
    reservationOptions,
  } = useSelector((s: Root) => s.reservation);
  const plans = useSelector((s: Root) => s.plans);
  const plan = plans.find(p => p.planId === reservationPlanId);
  // console.log("plan", plan);
  if (plan === undefined) {
    return 0;
  }
  let price = 0;
  price += (reservationAdults || 0) * plan.adultPrice;
  price += (reservationChildren || 0) * plan.childPrice;
  // console.log("price", price);
  // console.log("reservationOptions", reservationOptions);
  // console.log("length", reservationOptions.length);
  if (reservationOptions.length > 0) {
    // console.log("reservationOptions", reservationOptions);
    // console.log("option start");
    reservationOptions.forEach(op => {
      // console.log("opppp", op);
      let amount = 0;
      if (typeof op.amount !== "number") {
        amount = 0;
      } else if (op.amount > 0) {
        amount = op.amount;
      }
      price += amount * op.price;
    });
  }
  // console.log("price", price);
  return price;
};

export default usePrice;
