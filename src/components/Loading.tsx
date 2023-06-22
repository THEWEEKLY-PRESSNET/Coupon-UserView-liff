import React from "react";
import { Box, CircularProgress } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { sx: "100vw", sm: "600px" },
    height: "100%",
    minHeight: "100%",
    color: "#FFF",
    bgcolor: "rgba(0,0,0,0.25)",
  },
};

const Loading: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Loading;
