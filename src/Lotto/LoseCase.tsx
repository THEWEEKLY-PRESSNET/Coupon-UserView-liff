import React from "react";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Button } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import { updateTopState } from "../stores/topState";

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
    width: "100%",
    height: "100%",
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
};

const LoseCase: React.FC = () => {
  const [springValue, set] = useSpring(() => ({
    opacity: 1,
  }));
  const { opacity } = springValue;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateTopState({ view: "coupons" }));
    navigate("/");
  };

  return (
    <Box className="lotto-win" sx={styles.container}>
      <animated.div
        style={{
          opacity,
          ...styles.img,
        }}
      >
        <StaticImage
          src="../images/lose-dev.png"
          loading="eager"
          width={600}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </animated.div>
      <Button variant="contained" onClick={handleClick} sx={styles.button}>
        スタート
      </Button>
    </Box>
  );
};

export default LoseCase;
