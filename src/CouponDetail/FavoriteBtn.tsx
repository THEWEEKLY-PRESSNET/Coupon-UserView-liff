import React, { useState, useEffect, useCallback, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";
import FavoriteIcon from "../images/favorite.png";
import FavoriteIconBefore from "../images/favoriteBefore.png";
import { updateCoupon } from "../stores/coupon";
import { updateCoupons } from "../stores/coupons";
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
    "&:hover":{
      opacity: "1"
    }
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
    "&:hover":{
      color: "#fff",
      bgcolor: "accent.p",
    }
  },
  iconImg: {
    width: "12px",
    height: "12px",
  },
};

const FavoriteBtn: React.FC = () => {
  const coupon = useSelector((s: Root) => s.coupon);
  const coupons = useSelector((s: Root) => s.coupons);
  console.log("coupon", coupon);
  // console.log("coupons", coupons);
  const newArr = coupon;
  // const newArr = [...newArr0];

  //クーポンリストの中のどのクーポンか
  const favoriteObject = coupons.filter((o) => o.issuedCouponId === coupon.issuedCouponId)
  console.log("favoriteObject", favoriteObject);

  const dispatch = useDispatch();
  // const favorite = true;

  if (coupon.favorite) {
    // newArr.push({ key: index });
    favoriteObject.favorite = true
  } else {
    // newArr.pop({ key: "gourmet", label: "グルメ" });
    favoriteObject.favorite = false
  }

  const handleClick = () => {
    if (!coupon.favorite) {
      dispatch(
        updateCoupon({
          favorite: true,
        })
      );
      return;
    } else {
      dispatch(
        updateCoupon({
          favorite: false,
        })
      );
    }
  };
  return (
    <Box sx={styles.btnWrapper}>
      <Button
        variant={coupon.favorite ? "contained" : "outlined"}
        sx={!coupon.favorite ? styles.favoriteBtnBefore : styles.favoriteBtn}
        color="inherit"
        onClick={handleClick}
      >
        <img
          style={styles.iconImg}
          src={!coupon.favorite ? FavoriteIconBefore : FavoriteIcon}
          alt=""
        />
        お気に入り
      </Button>
    </Box>
  );
};

export default FavoriteBtn;
