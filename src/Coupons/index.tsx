import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import GetCoupons from "../providers/GetCoupons";
import CouponList from "./Coupons.lists";
import CouponEmpty from "./Coupns.empty";
import type { Root } from "../stores";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
};

const Coupons: React.FC = () => {
  const coupons = useSelector((s: Root) => s.coupons);
  // const {userId} = useSelector((s:Root) => s.user)
  return (
    <Box className="coupons" sx={styles.container}>
      {coupons.length > 0 && <CouponList coupons={coupons} />}
      {coupons.length === 0 && <CouponEmpty />}
    </Box>
  );
};

export default Coupons;
