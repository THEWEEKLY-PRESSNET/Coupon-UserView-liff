import React from "react";
import { Box, Typography } from "@mui/material";

const styles = {
  container: {
    position: "absolute",
    top: 8,
    overflow: "hidden",
    borderRadius: "5px",
  },
  flag: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "120px",
    height: "70px",
    pb: "3px",
    transform: "translate(-40px,-26px) rotate(-40deg)",
    bgcolor: "#00ACA9",
  },
  labelContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100px",
    height: "70px",
  },
  label: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    lineHeight: "12px",
    color: "#FFF",
  },
};

const Flag = () => {
  const handleClick = () => {
    window.location.href = "https://lin.ee/f62Smod";
  };

  return (
    <Box className="flag-container" sx={styles.container}>
      <Box sx={styles.flag}>
        <Typography sx={styles.label}>まもなく</Typography>
        <Typography sx={styles.label}>スタート</Typography>
      </Box>
    </Box>
  );
};

export default Flag;
