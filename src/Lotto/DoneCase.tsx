import React from "react";
import { useSelector } from "react-redux";
import { StaticImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import TicketUnit from "../components/TicketUnit";
import type { Root } from "../stores";
import covor from "../images/win.png";
import video from "../images/gsample.mp4";
import "../styles/index.scss";
import { delay } from "@reduxjs/toolkit/dist/utils";

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
  ticket: {
    position: "absolute",
    width: "300px",
    // zIndex: 10,
    top: "70%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

const WinCase: React.FC = () => {
  const coupon = useSelector((s: Root) => s.coupon);
  const [springValue, set] = useSpring(() => ({
    opacity: 1,
  }));
  const { opacity } = springValue;

  return (
    <Box className="lotto-next" sx={styles.body}>
      <animated.div
        style={{
          opacity,
          ...styles.img,
        }}
      >
        <StaticImage
          src="../images/next-dev.png"
          loading="eager"
          width={600}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </animated.div>
      <Box sx={styles.ticket}>
        <TicketUnit {...coupon} />
      </Box>
    </Box>
  );
};

export default WinCase;
