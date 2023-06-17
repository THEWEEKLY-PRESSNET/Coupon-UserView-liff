import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import Lotto from "./Lotto";
import WinCase from "./WinCase";
import LoseCase from "./LoseCase";
import DoneCase from "./DoneCase";
import Stop from "./Stop";
import Modal from "../Modal";
import theme from "../styles/theme";
import type { Root } from "../stores";
import "../styles/index.scss";
import { updateTopState } from "../stores/topState";
import getSettings from "../providers/GetSettings";

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
    height: "100vh",
    boxSizing: "border-box",
    p: 0,
    // pt: 10,
    // pb: 20,
    bgcolor: "#FDFFCF",
  },
};

const PreRender: React.FC = () => <div>loading...</div>;

const LottoIndex: React.FC = () => {
  console.log("Lotto");
  // const [loading, setLoading] = useState(true);
  const { view } = useSelector((s: Root) => s.topState);
  console.log("top view", view);
  const dispatch = useDispatch();
  useEffect(() => {
    const check = async () => {
      const res = await getSettings({ userId: "" });
      if (res.result) {
        if (!res.payload.stop) {
          dispatch(updateTopState({ view: "lotto" }));
        } else {
          dispatch(updateTopState({ view: "stoped" }));
        }
      } else {
        dispatch(updateTopState({ view: "stoped" }));
      }
    };
    check();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container className="layout-container" sx={styles.wrapper}>
        <Box sx={styles.container}>
          {view === "loading" && <PreRender />}
          {view === "lotto" && <Lotto />}
          {view === "win" && <WinCase />}
          {view === "lose" && <LoseCase />}
          {view === "lotted" && <DoneCase />}
          {view === "stoped" && <Stop />}
        </Box>
        <Modal />
      </Container>
    </ThemeProvider>
  );
};

export default LottoIndex;
