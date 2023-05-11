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
      updateCoupons(finalArr3)
    )
  }

  useEffect(
    hogeFunc, []
  )

  const couponsArr = [...coupons]
  console.log("couponsArr", couponsArr);

  //お気に入りと、未使用のクーポンが入った新しい配列を作る
  const goalItem = coupons.filter(o => { return o.used === false && o.favored === true });
  console.log("goalItem", goalItem);

   //goalItemOpo2の配列の中を入れ替える（有効期限が近いものを前にする）
   goalItem.sort((a, b) => {
    if (a.validEnd > b.validEnd) {
      return 1;
    }
    return -1;
  });
  console.log("goalItem2", goalItem);

  //上ですでに該当済みのクーポンを除いた新しい配列をつくる 
  const goalItemOpo2 = coupons.filter(o => { return !(o.used === false && o.favored === true) });
  console.log("goalItemOpo1", goalItemOpo2);

  // goalItemOpo2から、使用済みを除いた新しい配列を作る
  const goalItemOpo3 = goalItemOpo2.filter(o => { return !(o.used === true) });
  console.log("goalItemOpo3-1", goalItemOpo3);

  // goalItemOpo2から、使用済みのみ新しい配列を作る
  const goalItemOpo4 = goalItemOpo2.filter(o => { return o.used === true});
  console.log("goalItemOpo3-1", goalItemOpo3);
  
  //goalItemOpo2の配列の中を入れ替える（有効期限が近いものを前にする）
  goalItemOpo3.sort((a, b) => {
    if (a.validEnd > b.validEnd) {
      return 1;
    }
    return -1;
  });
  console.log("goalItemOpo3", goalItemOpo3);

  const finalArr2 = goalItem.concat(goalItemOpo3);
  const finalArr3 = finalArr2.concat(goalItemOpo4);

  

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
