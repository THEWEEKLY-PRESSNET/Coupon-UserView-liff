import React, { useState, useEffect, useCallback, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";
import FavoriteIcon from "../images/favorite.png"
import FavoriteIconBefore from "../images/favoriteBefore.png"
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
  const coupon = useSelector((s: Root) => s.coupon);
  console.log("coupons", coupon);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (!coupon.favorite) {
      dispatch(
        updateCoupon({
          favorite: true,
        })
      );
      return
    }
    else {
      dispatch(
        updateCoupon({
          favorite: false,
        })
      );
    }
  }
  return (
    <Box sx={styles.btnWrapper}>
      <Button sx={!coupon.favorite ? styles.favoriteBtnBefore : styles.favoriteBtn} onClick={handleClick}>
        <img style={styles.iconImg} src={!coupon.favorite ? FavoriteIconBefore : FavoriteIcon} alt="" />
        お気に入り
      </Button>
    </Box>
  );
};

export default FavoriteBtn;