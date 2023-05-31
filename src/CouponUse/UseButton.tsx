import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateModal } from "../stores/modal";

const styles = {
  button: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    bgcolor: "#F6AD3C",
    padding: "20px 0",
    boxShadow: "0px -4px 4px rgba(64, 64, 64, 0.25)",
  },
  text: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: 600,
    fontFamily: ['"Noto Sans JP"', "sans-serif", "Roboto"].join(","),
  },
};

const UseButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      updateModal({
        body: "use",
        isModal: true,
      })
    );
  };
  return (
    <Box variant="contained" sx={styles.button} onClick={handleClick}>
      <Typography variant="subtitle" sx={styles.text}>
        クーポンを使う
      </Typography>
    </Box>
  );
};

export default UseButton;
