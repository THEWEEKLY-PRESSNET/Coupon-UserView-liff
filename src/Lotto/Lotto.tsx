import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import { updateTopState } from "../stores/topState";
import postLotto from "../providers/PostLotto";
import { updateCoupon } from "../stores/coupon";
import covor from "../images/open.png";
import video from "../images/movie.mp4";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { updateModal } from "../stores/modal";

const styles = {
  container: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    minHeight: "100vh",
  },
  video: {
    // width: "100vw",
    height: "100vh",
    maxWidth: "600px",
    objectFit: "cover",
    pointerEvents: "none",
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
  const [state] = useLocalStorage("state");
  const [springValue, set] = useSpring(() => ({
    opacity: 1,
  }));
  const { opacity } = springValue;
  const videoRef = useRef<any>(null);
  const dispatch = useDispatch();

  // const dummyClick = async () => {
  //   setIsButton(false);
  //   if (videoRef.current !== null) {
  //     videoRef.current.play();
  //   }
  //   await new Promise(resolve => setTimeout(resolve, 3900));
  //   await set({ opacity: 0 });
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   const result = lotto();
  //   if (result === 0) {
  //     await dispatch(updateTopState({ view: "win" }));
  //   }
  //   if (result === 1) {
  //     await dispatch(updateTopState({ view: "lose" }));
  //   }
  // };

  const handleClick = async () => {
    setIsButton(false);
    if (videoRef.current !== null) {
      videoRef.current.play();
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    await set({ opacity: 0 });
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await postLotto({ state });
    if (res.result) {
      if (res.payload.result === "win") {
        dispatch(updateTopState({ view: "win" }));
        dispatch(updateCoupon(res.payload.coupon));
      } else {
        dispatch(updateTopState({ view: "lose" }));
      }
    } else {
      console.log("failed");
      dispatch(
        updateModal({
          body: "error",
          isModal: true,
          text: "発行可能なクーポンが有りません",
        })
      );
      // window.location.href = "https://www.higashihiroshima-digital.com/";
    }
  };

  return (
    <Box className="layout-" sx={styles.container}>
      <animated.div
        onClick={handleClick}
        style={{
          opacity,
          ...styles.video,
        }}
      >
        <video
          muted
          playsInline
          poster={covor}
          style={styles.video}
          ref={videoRef}
        >
          <source src={video} type="video/mp4" />
        </video>
      </animated.div>
      {isButton && (
        <Button variant="contained" onClick={handleClick} sx={styles.button}>
          ガチャを引く
        </Button>
      )}
    </Box>
  );
};

export default Lotto;
