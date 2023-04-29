import React from "react";
import { navigate } from "gatsby";
import { useSelector, useDispatch } from "react-redux";
import { StaticImage } from "gatsby-plugin-image";
import { Box } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

import TicketUnit from "../components/TicketUnit";
import { updateTopState } from "../stores/topState";
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

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateTopState({ view: "detail" }));
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
          src="../images/win.png"
          loading="eager"
          width={600}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </animated.div>
      <Box onClick={handleClick} sx={styles.ticket}>
        <TicketUnit {...coupon} />
      </Box>
    </Box>
  );
};

export default WinCase;
