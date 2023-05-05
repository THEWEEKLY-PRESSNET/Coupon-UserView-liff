import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Button, Container } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import WinCase from "./WinCase";
import theme from "../styles/theme";
import type { Root } from "../stores";
import covor from "../images/start-dev.png";
import video from "../images/gsample.mp4";
import "../styles/index.scss";
import { delay } from "@reduxjs/toolkit/dist/utils";
import { updateTopState } from "../stores/topState";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    minHeight: "100vh",
    mx: "auto",
    p: 0,
  },
  body: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    minHeight: "100vh",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  animation: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100vh",
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
      // bgcolor: "white",
      transform: "translate(0,1px)",
    },
  },
  easing: {
    width: "100%",
    height: "100%",
    bgcolor: "#FFF",
    opacity: 0,
  },
};

const Lotto: React.FC = () => {
  const [isButton, setIsButton] = useState(true);
  // const coupons = useSelector((s: Root) => s.coupons);
  const [springValue, set] = useSpring(() => ({
    opacity: 1,
  }));
  const { opacity } = springValue;
  const videoRef = useRef<any>(null);
  const dispatch = useDispatch();

  const lotto = () => {
    return Math.floor(Math.random() * 2);
  };

  const handleClick = async () => {
    setIsButton(false);
    if (videoRef.current !== null) {
      videoRef.current.play();
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    await set({ opacity: 0 });
    await new Promise(resolve => setTimeout(resolve, 1000));
    const result = lotto();
    if (result === 0) {
      await dispatch(updateTopState({ view: "win" }));
    }
    if (result === 1) {
      await dispatch(updateTopState({ view: "lose" }));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="layout-container" sx={styles.container}>
        <Box className="layout-" sx={styles.body}>
          <animated.div
            onClick={handleClick}
            style={{
              opacity,
              ...styles.animation,
            }}
          >
            <video muted poster={covor} style={styles.video} ref={videoRef}>
              <source src={video} type="video/mp4" />
            </video>
          </animated.div>
          {isButton && (
            <Button
              variant="contained"
              onClick={handleClick}
              sx={styles.button}
            >
              スタート
            </Button>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Lotto;
