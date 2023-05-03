import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import CouponUnit from "../components/TicketUnit";
import type { Root } from "../stores";
import type { Ticket } from "../stores/coupon";

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
  return (
    <Box className="coupons-list" sx={styles.container}>
      <Typography sx={styles.title}>お持ちのクーポン一覧</Typography>
      <Box sx={styles.coupons}>
        {coupons.map(coupon => {
          // console.log("co", coupon);
          return <CouponUnit {...coupon} key={coupon.issuedCouponId} />;
        })}
      </Box>
    </Box>
  );
};

export default Test;
