import React from "react";
import { navigate } from "gatsby";
import { useSelector, useDispatch } from "react-redux";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Box } from "@mui/material";
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
    aspectRatio: 1290 / 1780,
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

  return (
    <Box className="lotto-win" sx={styles.container}>
      <animated.div
        style={{
          opacity,
          ...styles.img,
        }}
      >
        <StaticImage
          src="../images/win-dev.png"
          loading="eager"
          width={600}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
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
