import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
const styles = {
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(100% - 6px)",
    height: "calc(100% - 16px)",
    top: "8px",
    left: "3px",
    // mx: "3px",
    // my: "8px",
    borderRadius: "5px",
    bgcolor: "#8B8B8BD9",
  },

  label: {
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "10%",
    lineHeight: "19.5px",
    color: "#FFF",
  },
};

const Flag = () => {
  const handleClick = () => {
    window.location.href = "https://lin.ee/f62Smod";
  };

  return (
    <Box className="flag-shadow" sx={styles.container}>
      <Typography sx={styles.label}>使用済み</Typography>
    </Box>
  );
};

export default Flag;
