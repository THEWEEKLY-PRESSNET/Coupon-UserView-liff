import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Button } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import { updateTopState } from "../stores/topState";
import img from "../images/next-dev.png";
import type { Root } from "../stores";

const styles = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    minHeight: "100vh",
  },
  img: {
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
  },
  button: {
    position: "absolute",
    top: "70%",
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
  button2: {
    position: "absolute",
    top: "80%",
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
    bgcolor: "gray",
  },
};

const WinCase: React.FC = () => {
  const coupon = useSelector((s: Root) => s.coupon);
  const [springValue, set] = useSpring(() => ({
    opacity: 1,
  }));
  const { opacity } = springValue;

  const dispatch = useDispatch();
  const retryClick = () => {
    dispatch(updateTopState({ view: "lotto" }));
  };

  return (
    <Box className="lotto-next" sx={styles.container}>
      <animated.div
        style={{
          opacity,
          ...styles.img,
        }}
      >
        <img src={img} style={styles.img} />
      </animated.div>
      <Button variant="contained" onClick={retryClick} sx={styles.button}>
        もう一度引く
      </Button>
    </Box>
  );
};

export default WinCase;
