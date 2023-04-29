import React, { useState, useEffect, useCallback } from "react";
import { Button, Box } from "@mui/material";
import FvaroiteIcon from "../images/favorite.png"


const styles = {
  btnWrapper: {
    pt: "20px",
  },
  favoriteBtn: {
    color: "#fff",
    bgcolor: "accent.p",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 30px",
    gap: "10px",
    width: "162px",
    height: "46px",
    fontSize: "16px",
    borderRadius: "30px",
    whiteSpace: "nowrap",
    margin: "auto",
  },
  iconImg: {
    width: "12px",
    height: "12px"
  }
};


const FavoriteBtn: React.FC = () => {
  return (
    <Box sx={styles.btnWrapper}>
      <Button sx={styles.favoriteBtn}><img style={styles.iconImg} src={FvaroiteIcon} alt="" />お気に入り</Button>
    </Box>
  );
};

export default FavoriteBtn;