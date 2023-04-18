import React, { ReactNode } from "react";
import { Box, Divider } from "@mui/material";

import HomeBtn from "./Btn.Home";
import CouponBtn from "./Btn.Coupon";
import LineBtn from "./Btn.Line";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    px: 6,
    bgcolor: "#FFF",
  },
  divider: {
    borderColor: "black",
  },
};

const FooterNav: React.FC = () => {
  return (
    <Box className="footernav" sx={styles.container}>
      <Box>
        <HomeBtn />
      </Box>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={styles.divider}
      />
      <Box>
        <CouponBtn />
      </Box>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={styles.divider}
      />
      <Box>
        <LineBtn />
      </Box>
    </Box>
  );
};

export default FooterNav;
