import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { useSelector, useDispatch } from "react-redux";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Box } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import TicketUnit from "../components/TicketUnit";
import { updateTopState } from "../stores/topState";
import img from "../images/win.png";
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
  ticket: {
    position: "absolute",
    width: "300px",
    top: "70%",
  },
  img: {
    width: "100vw",
    height: "100vh",
    maxWidth: "600px",
    // height: "100%",

    // height: "100vh",
    // aspectRatio: "calc(100vw / 100vh)",
    objectFit: "cover",
  },
  button2: {
    position: "absolute",
    top: "60%",
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
  console.log("coupon", coupon);
  const [size, setSize] = useState({
    width: 600,
    height: 1950,
  });
  const [springValue, set] = useSpring(() => ({
    opacity: 1,
  }));
  const { opacity } = springValue;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateTopState({ view: "detail" }));
    navigate("/");
  };

  const retryClick = () => {
    dispatch(updateTopState({ view: "lotto" }));
    // navigate("/");
  };

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <Box className="lotto-win" sx={styles.container}>
      <animated.div
        style={{
          opacity,
          ...styles.img,
        }}
      >
        <img src={img} style={styles.img} />
      </animated.div>
      <Box sx={styles.ticket}>
        <TicketUnit {...coupon} handleClick={handleClick} />
      </Box>
      <Button variant="contained" onClick={retryClick} sx={styles.button2}>
        もう一度引く
      </Button>
    </Box>
  );
};

export default WinCase;
