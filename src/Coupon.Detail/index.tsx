import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import Detail from "../components/DetailUnit";
import FavoriteBtn from "./FavoriteBtn";
import UseBtn from "../components/UseButton";
import CouponNote from "./CouponNote";
import { strToDate } from "../utils/formatter";
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
  // console.log("coupon", coupon);
  const { validStart } = coupon;
  const hide = useMemo(() => {
    const startDate = strToDate(validStart);
    const today = new Date();
    if (today > startDate) {
      return true;
    }
    return false;
  }, [validStart]);
  console.log("hide", hide);

  return (
    <Box sx={styles.container}>
      <Detail {...coupon} red hide={hide} />
      <FavoriteBtn />
      <CouponNote />
      <UseBtn isValied={!hide} />
    </Box>
  );
};

export default CouponDetail;
