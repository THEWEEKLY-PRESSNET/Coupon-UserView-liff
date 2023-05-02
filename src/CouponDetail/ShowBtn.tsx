import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@mui/material";
import FvaroiteIcon from "../images/favorite.png"


const styles = {
  showBtn: {
    color: "#fff",
    bgcolor: "primary.main",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "18px 30px",
    width: "100%",
    fontSize: "18px",
    boxShadow: "0px -4px 4px rgba(64, 64, 64, 0.25)",
  },
};


const ShowBtn: React.FC = () => {
  return (
      <Button sx={styles.showBtn}>クーポンを提示する</Button>
  );
};

export default ShowBtn;