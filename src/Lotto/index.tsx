import React, { useState, useRef } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Button, Container } from "@mui/material";
import { useSpringValue, animated } from "@react-spring/web";

import theme from "../styles/theme";
import type { Root } from "../stores";
import covor from "../images/mtitle.png";
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
  video: {
    width: "100%",
    height: "100%",
    // objectFit: "contain",
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
  },
};

const Lotto: React.FC = () => {
  const [isButton, setIsButton] = useState(true);
  // const coupons = useSelector((s: Root) => s.coupons);
  const videoRef = useRef<any>(null);
  const opacity = useSpringValue(0, {
    delay: 20,
    config: {
      duration: 200,
    },
  });

  const handleClick = () => {
    setIsButton(false);
    if (videoRef.current !== null) {
      videoRef.current.play();
    }
    opacity.start(1);

    const hello = to => {
      return `${to} ohayo`;
    };

    console.log("hello", hello("yumisan"));
  };
  return (
    <ThemeProvider theme={theme}>
      <Container className="layout-container" sx={styles.container}>
        <Box className="layout-" sx={styles.body}>
          <video muted poster={covor} style={styles.video} ref={videoRef}>
            <source src={video} type="video/mp4" />
          </video>
          {isButton && (
            <Button
              variant="contained"
              onClick={handleClick}
              sx={styles.button}
            >
              スタート
            </Button>
          )}
          <animated.div
            onClick={handleClick}
            style={{
              opacity,
              position: "absolute",
              width: "100%",
              height: "100vh",
            }}
          >
            <Box sx={styles.easing} />
          </animated.div>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Lotto;

// const some = Lotto()

// const some = (e:undefind) => {
//   retern Lotto()
// }

// some()
