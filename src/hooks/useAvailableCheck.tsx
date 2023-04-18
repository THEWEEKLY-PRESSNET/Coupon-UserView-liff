import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateTopState } from "../stores/topState";
import { getUserSeatcheck } from "../Provider/GetUserSeratcheck";
import type { Root } from "../stores";

export const useTimetableCheck = (date: string | undefined) => {
  const [check, setCheck] = useState();
  // const { reservationDate } = useSelector((s: Root) => s.reservation);
  const dispatch = useDispatch();
  useEffect(() => {
    const bookings = async () => {
      if (!date) {
        return;
      }
      dispatch(
        updateTopState({
          isCalenderLoading: true,
        })
      );
      const res = await getUserSeatcheck({
        siteId: "osakajo",
        date,
      });
      if (res.result) {
        console.log("amount", res.payload);
        setCheck(res.payload.amounts);
        // setBooking(res.payload);
        dispatch(
          updateTopState({
            isCalenderLoading: false,
          })
        );
      } else {
        console.log("error");
      }
    };
    bookings();
  }, [date]);
  return check;
};

export const dateCheck = async (month: string | undefined) => {
  if (!month) {
    return;
  }
  // console.log("month", date.slice(0, 6));
  // const dispatch = useDispatch();
  // dispatch(
  //   updateTopState({
  //     isCalenderLoading: true,
  //   })
  // );
  const res = await getUserSeatcheck({
    siteId: "osakajo",
    month,
  });
  console.log("ress", res);
  if (res.result) {
    // dispatch(
    //   updateTopState({
    //     isCalenderLoading: false,
    //   })
    // );
    return res.payload;
    // setBooking(res.payload);
  } else {
    // dispatch(
    //   updateTopState({
    //     isCalenderLoading: false,
    //   })
    // );
    console.log("error");
  }
  return res;
};
