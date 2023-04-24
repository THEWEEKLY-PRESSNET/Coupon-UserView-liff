import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import CouponUnit from "../components/TicketUnit";
import type { Root } from "../stores";
// import Cou from "src/stores/coupon";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    // pt: 4,
    px: "auto",
  },
  title: {
    position: "fixed",
    width: "100%",
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
    width: "100%",
    boxSizing: "border-box",
    p: "10px",
    mt: 5,
    mb: 10,
  },
};

const Test: React.FC = () => {
  const coupons = useSelector((s: Root) => s.coupons);
  console.log("coupons", coupons);
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>お持ちのクーポン一覧</Typography>
      <Box sx={styles.coupons}>
        {coupons.map(coupon => (
          <CouponUnit {...coupon} />
        ))}
      </Box>
    </Box>
  );
};

export default Test;
