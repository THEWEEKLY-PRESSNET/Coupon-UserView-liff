import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import Detail from "../components/DetailUnit";
import FavoriteBtn from "./FavoriteBtn";
import UseBtn from "../components/UseButton";
import CouponNote from "./CouponNote";
import type { Root } from "../stores";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: "auto",
    mb: 10,
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

const CouponDetail: React.FC = () => {
  const coupon = useSelector((s: Root) => s.coupon);
  console.log("coupon", coupon);

  return (
    <Box sx={styles.container}>
      <Detail {...coupon} red hide />
      <FavoriteBtn />
      <CouponNote />
      <UseBtn />
    </Box>
  );
};

export default CouponDetail;
