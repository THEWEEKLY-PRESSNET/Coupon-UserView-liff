import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";

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
  border: {
    position: "absolute",
    borderLeft: "2px dotted #000",
    height: "84%",
    top: "7%",
    left: "48px",
  },
  copy: {
    position: "absolute",
    top: "44%",
    left: -4,
    transform: "rotate(270deg)",
    fontWeight: 700,
    fontSize: "10px",
    letterSpacing: "0.5em",
  },
  title: {
    position: "absolute",
    top: "10%",
    left: "18%",
    fontWeight: 600,
    fontSize: "23px",
    lineHeight: "34.5px",
  },
  subtitle: {
    position: "absolute",
    top: "31%",
    left: "18%",
    fontWeight: 300,
    fontSize: "13px",
    lineHeight: "20px",
  },
  name: {
    position: "absolute",
    top: "45%",
    left: "18%",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "19.5px",
  },
  limit: {
    position: "absolute",
    top: "78%",
    left: "18%",
    fontWeight: 300,
    fontSize: "10px",
    lineHeight: "15px",
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
      <Box className="coupon-ticket" sx={styles.ticket} />
      <Box sx={styles.ellipseR} />
      <Box sx={styles.ellipseL} />
      <Box sx={styles.border} />
      <Typography sx={styles.copy}>Coupon</Typography>
      <Typography sx={styles.title}>10%OFF</Typography>
      <Typography sx={styles.subtitle}>
        平日に使える味噌ラーメン割引券
      </Typography>
      <Typography sx={styles.name}>みそラーメン東口店</Typography>
      <Typography sx={styles.limit}>有効期限　2023年03月15日まで</Typography>
    </Box>
  );
};

export default Test;
