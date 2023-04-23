import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Box, Paper } from "@mui/material";

import Header from "../Header";
import FooterNav from "../components/FooterNav";
import theme from "../styles/theme";
import "../styles/index.scss";

const styles = {
  container: {
    display: { sm: "flex" },
    justifyContent: { sm: "center" },
    maxWidth: "600px",
    width: { xs: "100vw", sm: "600px" },
    minHeight: "calc(100vh - 110px)",
    p: 0,
    pt: "90px",
    bgcolor: "bg1.main",
    overflow: "hidden",
  },
  header: {
    position: "fixed",
    width: "100%",
    maxWidth: "600px",
    height: "110px",
    top: 0,
    p: "10px",
    bgcolor: "#FFFEE8",
    boxSizing: "border-box",
    borderRadius: 0,
    zIndex: 10,
  },
  body: {
    width: { xs: "100vw", sm: 600 },
    maxWidth: 600,
    mt: "110px",
  },
  footer: {
    position: "fixed",
    width: "100%",
    maxWidth: "600px",
    bottom: 0,
    p: 1,
    // bgcolor: "#FFF",
    boxSizing: "border-box",
    borderRadius: 0,
    zIndex: 10,
  },
};

type props = {
  children: ReactNode;
};

const Layout: React.FC<props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container className="layout-container" sx={styles.container}>
      <Paper className="layout-header" elevation={5} sx={styles.header}>
        <Header />
      </Paper>
      <Box className="layout-body" sx={styles.body}>
        {children}
      </Box>
      <Paper className="layout-footer" elevation={5} sx={styles.footer}>
        <FooterNav />
      </Paper>
    </Container>
  </ThemeProvider>
);

export default Layout;
