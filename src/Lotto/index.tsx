import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import Lotto from "./Lotto";
import WinCase from "./WinCase";
import LoseCase from "./LoseCase";
import DoneCase from "./DoneCase";
import Modal from "../Modal";
import theme from "../styles/theme";
import type { Root } from "../stores";
import "../styles/index.scss";
import { updateTopState } from "../stores/topState";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    minHeight: "100vh",
    p: 0,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "600px",
    width: { xs: "100vw", sm: "600px" },
    boxSizing: "border-box",
    p: 0,
    bgcolor: "bg1.main",
    // overflow: "hidden",
  },
};

const LottoIndex: React.FC = () => {
  console.log("Lotto");
  const { view } = useSelector((s: Root) => s.topState);
  console.log("top view", view);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTopState({ view: "lotto" }));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container className="layout-container" sx={styles.wrapper}>
        <Box sx={styles.container}>
          {view === "lotto" && <Lotto />}
          {view === "win" && <WinCase />}
          {view === "lose" && <LoseCase />}
          {view === "lotted" && <DoneCase />}
        </Box>
        <Modal />
      </Container>
    </ThemeProvider>
  );
};

export default LottoIndex;
