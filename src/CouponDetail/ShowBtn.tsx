import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import type { Root } from "../stores";
import { updateTopState } from "../stores/topState";


const styles = {
  showBtn: {
    color: "#fff",
    bgcolor: "primary.main",
    position: "fixed",
    bottom: "0",
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
  const topState = useSelector((s: Root) => s.topState);
  console.log("topState", topState);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      updateTopState({
        view: "use"
      })
    );
  };

  return (
    <Button sx={styles.showBtn} onClick={handleClick}>クーポンを提示する</Button>
  );
};

export default ShowBtn;