import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Paper, Typography } from "@mui/material";

import CouponUnit from "../components/TicketUnit";
import type { Root } from "../stores";
import { Ticket, updateCoupon } from "../stores/coupon";
import { updateCoupons } from "../stores/coupons";
import { updateTopState } from "../stores/topState";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  titleBody: {
    position: "fixed",
    width: "100%",
    maxWidth: "600px",
    pb: 2,
    zIndex: 5,
    borderRadius: 0,
  },
  title: {
    textAlign: "center",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "12px",
    mt: 2,
    py: 1,
    color: "#FFF",
    bgcolor: "#F6AD3C",
    zIndex: 3,
  },
  coupons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    p: "10px",
    mt: 7,
    mb: 10,
  },
};

type Props = {
  coupons: Ticket[];
};

const Test: React.FC<Props> = ({ coupons }) => {
  const { favored, used, usedAt } = useSelector((s: Root) => s.coupon);
  const dispatch = useDispatch();
  const handleClick = useCallback(coupon => {
    dispatch(updateCoupon({ ...coupon }));
    dispatch(
      updateTopState({
        view: "detail",
      })
    );
  }, []);

  const hogeFunc = () => {
    dispatch(
      updateCoupons(finalArr)
    )
  }

  useEffect(
    hogeFunc, []
  )

  //usedがfalseだけをもった配列を作る = 使われていないクーポンの配列
  const usedItem = coupons.filter(o => {
    console.log(o); return o.used
      === false
  })
  console.log("usedItem", usedItem);

  //favoredがtrueだけをもった配列を作る = お気に入りされたクーポンの配列
  const favoredItem = coupons.filter(o => {
    return o.favored
      === true
  })
  console.log("favoredItem", favoredItem);

  //上2つを合体
  const goalItem = coupons.filter(o => { return o.used === false && o.favored === true });
  console.log("goalItem", goalItem);
  
  const couponsArr = [...coupons]
  console.log("couponsArr", couponsArr);
  // const goalItemOpo = coupons.filter(o => { return !(o.used === false && o.favored === true )});

  // const goalItemArr = goalItem.concat(goalItemOpo) 
  // console.log("goalItemArr", goalItemArr);

//validEndが小さい値(string)が先に来る配列を作る = 有効期限が近いクーポンの配列
  const goalItem3 = couponsArr.sort((a, b) => {
    if (a.validEnd < b.validEnd) {
      return 1;
    }
    return -1;
  });
  console.log("goalItem3", goalItem3);

  const finalArr = goalItem.concat(goalItem3)


  // const coupons = ["true", "true", "false", "true"]

  // １　falseだけの配列を作る
  // mid === ["false"]
  // const mid = coupons.filter((o) => o.used === "false")
  // const trueArr = coupons.filter((o) => o.used === "true")

  // ２　一番最後にtrue要素を足す
  // mid.push(trueArr)

  // ３完成！！！
  // goal === ["false", "true", "true", "true"] === mid



  // １　falseだけの配列を作る
  // mid === ["false"]
  // const falseArr = coupons.filter((o) => o.used === "false")
  // const trueArr = coupons.filter((o) => o.used === "true")

  // ２　一番最後にtrue要素を足す
  // const goal = falseArr + trueArr

  // ３完成！！！
  // goal === ["false", "true", "true", "true"] === goal



  return (
    <Box className="coupons-list" sx={styles.container}>
      <Paper elevation={2} sx={styles.titleBody}>
        <Typography sx={styles.title}>お持ちのクーポン一覧</Typography>
      </Paper>
      <Box sx={styles.coupons}>

        {/* {coupons.sort((a, b) => {
        if (){
        return(
        <CouponUnit
          {...coupon}
          handleClick={() => handleClick(coupon)}
          key={coupon.issuedCouponId}
        />
        )}
        if else(){

        }
      })}; */}

        {coupons.map(coupon => {
          // console.log("co", coupon);
          return (
            <CouponUnit
              {...coupon}
              handleClick={() => handleClick(coupon)}
              key={coupon.issuedCouponId}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Test;
