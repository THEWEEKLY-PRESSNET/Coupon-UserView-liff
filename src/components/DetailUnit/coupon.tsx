import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { dateTrance } from "../../utils/formatter";

const styles = {
  container: {
    position: "relative",
    boxSizing: "border-box",
    overflow: "hidden",
    width: "293px",
    maxWidth: "293px",
    height: "96px",
    px: "3px",
    py: "8px",
  },
  ticket: {
    background: "#F9F7F1",
    boxShadow: "0px 4px 4px rgba(64, 64, 64, 0.25)",
    borderRadius: "5px",
    width: "287px",
    height: "80px",
    // filter: "drop-shadow(0px 4px 4px #404040)",
  },
  ellipseR: {
    position: "absolute",
    width: "42px",
    height: "42px",
    top: "50px",
    right: "-32px",
    borderRadius: "50%",
    transform: "translate(0, -50%)",
    bgcolor: "bg1.main",
    boxShadow: "1px 2px 3px rgba(64, 64, 64, 0.25) inset",
    zIndex: 2,
  },
  ellipseL: {
    position: "absolute",
    width: "42px",
    height: "42px",
    top: "50px",
    left: "-32px",
    borderRadius: "50%",
    transform: "translate(0, -50%)",
    bgcolor: "bg1.main",
    boxShadow: "-1px 2px 3px rgba(64, 64, 64, 0.25) inset",
    zIndex: 2,
  },
  border: {
    position: "absolute",
    borderLeft: "1px dotted #000",
    height: "75%",
    top: "50%",
    left: "38px",
    transform: "translateY(-50%)",
  },
  copy: {
    position: "absolute",
    textAlign: "center",
    top: "50%",
    left: -3,
    transform: "translateY(-55%) rotate(270deg)",
    fontWeight: 600,
    fontSize: "7px",
    lineHeight: "10px",
    letterSpacing: "0.3em",
  },
  title: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
  },
};

type Props = {
  couponTitleBig: string;
};

const Test: React.FC<Props> = ({ couponTitleBig }) => {
  return (
    <Box sx={styles.container}>
      <Box className="coupon-ticket" sx={styles.ticket} />
      <Box sx={styles.ellipseR} />
      <Box sx={styles.ellipseL} />
      <Box sx={styles.border} />
      <Typography sx={styles.copy}>Coupon</Typography>
      <Typography sx={styles.title}>{couponTitleBig}</Typography>
    </Box>
  );
};

export default Test;
