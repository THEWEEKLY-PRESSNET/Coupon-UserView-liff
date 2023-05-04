import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import CouponUnit from "../components/TicketUnit";
import type { Root } from "../stores";
import { Ticket, updateCoupon } from "../stores/coupon";
import { updateTopState } from "../stores/topState";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    position: "fixed",
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "12px",
    mt: 2,
    py: 1,
    color: "#FFF",
    bgcolor: "#F6AD3C",
    zIndex: 3,
  },
  coupons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    p: "10px",
    mt: 5,
    mb: 10,
  },
};

type Props = {
  coupons: Ticket[];
};

const Test: React.FC<Props> = ({ coupons }) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(coupon => {
    dispatch(updateCoupon({ ...coupon }));
    dispatch(
      updateTopState({
        view: "detail",
      })
    );
  }, []);

  return (
    <Box className="coupons-list" sx={styles.container}>
      <Typography sx={styles.title}>お持ちのクーポン一覧</Typography>
      <Box sx={styles.coupons}>
        {coupons.map(coupon => {
          // console.log("co", coupon);
          return (
            <CouponUnit
              {...coupon}
              handleClick={() => handleClick(coupon)}
              key={coupon.issuedCouponId}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Test;
