import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import Detail from "../components/DetailUnit";
import FavoriteBtn from "./FavoriteBtn";
import CouponNote from "./CouponNote";
import UseButton from "../components/UseButton";
import type { Root } from "../stores";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: "auto",
    mt: 4,
    mb: 10,
  },
};

const CouponUsed = () => {
  console.log("coupon used");
  const coupon = useSelector((s: Root) => s.coupon);
  console.log("coupon", coupon);

  return (
    <Box sx={styles.container}>
      <Detail {...coupon} red hide />
      <FavoriteBtn />
      <CouponNote />
      <UseButton />
    </Box>
  );
};

export default CouponUsed;
