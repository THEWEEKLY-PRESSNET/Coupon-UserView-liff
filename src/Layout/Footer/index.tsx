import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Box, Divider } from "@mui/material";

import HomeBtn from "./Btn.Home";
import CouponBtn from "./Btn.Coupon";
import LineBtn from "./Btn.Line";
import { updateTopState } from "../../stores/couponState";

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
    flexGrow: 1,
    cursor: "pointer",
  },
};

const FooterNav: React.FC = () => {
  const dispatch = useDispatch();
  const couponsClick = () => {
    dispatch(
      updateTopState({
        view: "top",
      })
    );
    window.scroll(0, 0);
  };
  const homeClick = () => {
    window.location.href = "https://www.higashihiroshima-digital.com/";
  };
  const lineClick = () => {
    window.location.href = "https://lin.ee/LWvjdI0";
  };
  return (
    <Box className="footernav" sx={styles.container}>
      <Box onClick={homeClick} sx={styles.btnWrapper}>
        <HomeBtn />
      </Box>
      <Divider orientation="vertical" flexItem sx={styles.divider} />
      <Box onClick={couponsClick} sx={styles.btnWrapper}>
        <CouponBtn />
      </Box>
      <Divider orientation="vertical" flexItem sx={styles.divider} />
      <Box onClick={lineClick} sx={styles.btnWrapper}>
        <LineBtn />
      </Box>
    </Box>
  );
};

export default FooterNav;
