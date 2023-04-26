import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import CouponList from "./Coupons.lists";
import CouponEmpty from "./Coupns.empty";
import type { Root } from "../stores";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: "auto",
  },
};

const Coupons: React.FC = () => {
  const coupons = useSelector((s: Root) => s.coupons);
  return (
    <Box sx={styles.container}>
      {coupons.length > 0 && <CouponList coupons={coupons} />}
      {coupons.length === 0 && <CouponEmpty />}
    </Box>
  );
};

export default Coupons;
