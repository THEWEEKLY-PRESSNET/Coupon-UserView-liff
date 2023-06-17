import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { navigate } from "gatsby";
import { Box, Button, Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import { updateTopState } from "../stores/topState";
import postLotto from "../providers/PostLotto";
import { updateCoupon } from "../stores/coupon";
import covor from "../images/open.png";
import video from "../images/movie.mp4";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { updateModal } from "../stores/modal";

const styles = {
  note: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "272px",
    width: "272px",
    // maxWidth: "70%",
    boxSizing: "border-box",
    borderRadius: "30px",
    mt: 12,
    p: 2,
    bgcolor: "#FFF",
  },
  button: {
    position: "absolute",
    bottom: "19%",
    height: "60px",
    px: 8,
    borderRadius: "30px",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "20%",
    "&:active": {
      boxShadow: 0,
      transform: "translate(0,1px)",
    },
  },
  typo: {
    display: "block",
    fontSize: "18px",
    fontWeight: 600,
  },
};

const Stop: React.FC = () => {
  const handleClick = () => {
    navigate("/coupons");
  };

  return (
    <>
      <Box sx={styles.note}>
        <Typography sx={styles.typo}>東広島デジタルガチャは</Typography>
        <Typography sx={styles.typo}>現在休止中です。</Typography>
      </Box>
      <Button variant="contained" onClick={handleClick} sx={styles.button}>
        クーポン一覧へ
      </Button>
    </>
  );
};

export default Stop;
