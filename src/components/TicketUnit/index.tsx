import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";

const styles = {
  container: {
    position: "relative",
    overflow: "hidden",
    width: "fit-content",
    p: "10px",
    pr: "3px",
    mr: "8px",
    pl: "3px",
    ml: "8px",
  },
  ellipseR: {
    position: "absolute",
    width: "50px",
    height: "50px",
    top: "49px",
    left: "334px",
    borderRadius: "50%",
    // borderTopLeftRadius: "50%/11%",
    // borderBottomLeftRadius: "50px",
    bgcolor: "bg1.main",
    boxShadow: "3px 4px 4px rgba(64, 64, 64, 0.25) inset",
    zIndex: 2,
  },
  ellipseL: {
    position: "absolute",
    width: "50px",
    height: "50px",
    top: "46px",
    left: "-34px",
    borderRadius: "50%",
    // borderTopLeftRadius: "50%/11%",
    // borderBottomLeftRadius: "50px",
    bgcolor: "bg1.main",
    boxShadow: "-3px 4px 4px rgba(64, 64, 64, 0.25) inset",
    zIndex: 2,
  },
  ticket: {
    background: "#FFF",
    boxShadow: "0px 4px 4px rgba(64, 64, 64, 0.25)",
    borderRadius: "5px",
    width: "345px",
    height: "128px",
    // filter: "drop-shadow(0px 4px 4px #404040)",
  },
};

const Test: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.ellipseR} />
      <Box sx={styles.ellipseL} />
      <Box className="coupon-ticket" sx={styles.ticket} />
    </Box>
  );
};

export default Test;
