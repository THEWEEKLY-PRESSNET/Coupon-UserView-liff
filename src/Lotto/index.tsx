import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";

import Lotto from "./Lotto";
import WinCase from "./WinCase";
import LoseCase from "./LoseCase";
import DoneCase from "./DoneCase";
import theme from "../styles/theme";
import type { Root } from "../stores";
import "../styles/index.scss";
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
};

const LottoIndex: React.FC = () => {
  const { view } = useSelector((s: Root) => s.topState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTopState({ view: "lotto" }));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container className="layout-container" sx={styles.container}>
        {view === "lotto" && <Lotto />}
        {view === "win" && <WinCase />}
        {view === "lose" && <LoseCase />}
        {view === "lotted" && <DoneCase />}
      </Container>
    </ThemeProvider>
  );
};

export default LottoIndex;
