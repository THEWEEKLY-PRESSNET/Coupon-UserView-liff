import React, { useState, useEffect, useCallback, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";
import FavoriteIcon from "../images/favorite.png";
import FavoriteIconBefore from "../images/favoriteBefore.png";
import { updateCoupon } from "../stores/coupon";
import type { Root } from "../stores";

const styles = {
  btnWrapper: {
    pt: "20px",
  },
  favoriteBtnBefore: {
    color: "accent.p",
    // bgcolor: "accent.p",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 30px",
    gap: "10px",
    width: "162px",
    height: "46px",
    fontSize: "16px",
    border: "1px solid #E57A7A",
    borderRadius: "30px",
    whiteSpace: "nowrap",
    margin: "auto",
    "&:hover": {
      opacity: "1",
    },
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
    "&:hover": {
      color: "#fff",
      bgcolor: "accent.p",
    },
  },
  iconImg: {
    width: "12px",
    height: "12px",
  },
};

const FavoriteBtn: React.FC = () => {
  const coupon = useSelector((s: Root) => s.coupon);
  // console.log("coupons", coupon);

  const dispatch = useDispatch();
  // const favorite = true;

  const handleClick = () => {
    if (!coupon.favored) {
      dispatch(
        updateCoupon({
          favored: true,
        })
      );
      return;
    } else {
      dispatch(
        updateCoupon({
          favored: false,
        })
      );
    }
  };
  return (
    <Box sx={styles.btnWrapper}>
      <Button
        variant={coupon.favored ? "contained" : "outlined"}
        sx={!coupon.favored ? styles.favoriteBtnBefore : styles.favoriteBtn}
        color="inherit"
        onClick={handleClick}
      >
        <img
          style={styles.iconImg}
          src={!coupon.favored ? FavoriteIconBefore : FavoriteIcon}
          alt=""
        />
        お気に入り
      </Button>
    </Box>
  );
};

export default FavoriteBtn;
