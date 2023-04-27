import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@mui/material";


const styles = {
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
    borderRadius: "30px"
  }
};


const FavoriteBtn: React.FC = () => {
  return (
    <Button sx={styles.favoriteBtn}>お気に入り</Button>
  );
};

export default FavoriteBtn;