import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import { updateTopState } from "../stores/topState";
import covor from "../images/open.png";
import video from "../images/movie.mp4";
import postLotto from "../providers/PostLotto";
import { updateCoupon } from "../stores/coupon";

const styles = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    minHeight: "100vh",
  },
  video: {
    width: "100vh",
    height: "100vw",
    objectFit: "cover",
  },
  animation: {
    position: "absolute",
    top: 0,
    width: "100%",
    aspectRatio: 1290 / 1780,
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

  const dummyClick = async () => {
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

  const handleClick = async () => {
    setIsButton(false);
    if (videoRef.current !== null) {
      videoRef.current.play();
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    await set({ opacity: 0 });
    await new Promise(resolve => setTimeout(resolve, 1000));

    const result = await postLotto({ userId: "test" });
    if (result.payload.result === "win") {
      dispatch(updateTopState({ view: "win" }));
      dispatch(updateCoupon(result.payload.coupon));
    } else {
      dispatch(updateTopState({ view: "lose" }));
    }
  };

  return (
    <Box className="layout-" sx={styles.container}>
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
        <Button variant="contained" onClick={dummyClick} sx={styles.button}>
          スタート
        </Button>
      )}
      {isButton && (
        <Button variant="contained" onClick={handleClick} sx={styles.button2}>
          通信（実際に抽選）
        </Button>
      )}
    </Box>
  );
};

export default Lotto;
