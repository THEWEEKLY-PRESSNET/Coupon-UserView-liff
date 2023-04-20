import React from "react";
import { Box, Divider } from "@mui/material";

import HomeBtn from "./Btn.Home";
import CouponBtn from "./Btn.Coupon";
import LineBtn from "./Btn.Line";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    px: { xs: 0, xm: 3 },
    height: "56px",
  },
  divider: {
    borderColor: "black",
  },
  btnWrapper: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
};

const FooterNav: React.FC = () => {
  return (
    <Box className="footernav" sx={styles.container}>
      <Box sx={styles.btnWrapper}>
        <HomeBtn />
      </Box>
      <Divider orientation="vertical" flexItem sx={styles.divider} />
      <Box sx={styles.btnWrapper}>
        <CouponBtn />
      </Box>
      <Divider orientation="vertical" flexItem sx={styles.divider} />
      <Box sx={styles.btnWrapper}>
        <LineBtn />
      </Box>
    </Box>
  );
};

export default FooterNav;
