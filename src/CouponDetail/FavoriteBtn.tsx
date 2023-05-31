import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useMemo,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, Typography } from "@mui/material";
import FavoriteIcon from "../images/favorite.png";
import FavoriteIconBefore from "../images/favoriteBefore.png";
import { updateCoupon } from "../stores/coupon";
import { updateCoupons } from "../stores/coupons";
import type { Root } from "../stores";
import { patchIssued } from "../providers/PatchIssued";

const userId = "test";

const styles = {
  btnWrapper: {
    pt: "20px",
    textAlign: "center",
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
  noteSml: {
    fontSize: "12px",
  },
};

const FavoriteBtn: React.FC = () => {
  const coupons = useSelector((s: Root) => s.coupons);
  const { favored, issuedCouponId } = useSelector((s: Root) => s.coupon);

  const newArr = useMemo(() => {
    return coupons.map(coupon => {
      if (coupon.issuedCouponId === issuedCouponId) {
        console.log("iss", coupon.issuedCouponId);
        const newCoupon = { ...coupon };
        newCoupon.favored = !favored;
        return newCoupon;
      }
      return coupon;
    });
  }, [favored, issuedCouponId, coupons]);

  const dispatch = useDispatch();
  const handleClick = async () => {
    dispatch(
      updateCoupon({
        favored: !favored,
      })
    );
    const res = await patchIssued({
      issuedCouponId,
      userId,
      favored: !favored,
    });
    if (res.result) {
      dispatch(updateCoupons(newArr));
    }
  };

  return (
    <Box sx={styles.btnWrapper}>
      <Button
        variant={favored ? "contained" : "outlined"}
        sx={!favored ? styles.favoriteBtnBefore : styles.favoriteBtn}
        color="inherit"
        onClick={handleClick}
      >
        <img
          style={styles.iconImg}
          src={!favored ? FavoriteIconBefore : FavoriteIcon}
          alt=""
        />
        お気に入り
      </Button>
      <Typography sx={styles.noteSml} variant="note">
        お気に入りを押すと<br />
        クーポン一覧の上部に掲載されます。
      </Typography>


    </Box>
  );
};

export default FavoriteBtn;
