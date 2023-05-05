import React from "react";
import { Box, Typography } from "@mui/material";

import Coupon from "./coupon";
import ImgBox from "../ImgBox";
import { dateTrance } from "../../utils/formatter";
import type { Detail } from "../../stores/coupon";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    gap: 1,
  },
  ticket: {
    // py: 1,
  },
  start: {
    // py: 1,
    color: "#E74343",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "19.5px",
  },
  store: {
    // py: 1,
    color: "#404040",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "19.5px",
  },
  limit: {
    color: "#404040",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "18px",
  },
  limitRed: {
    color: "#E74343",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "18px",
  },
  description: {
    py: 1,
  },
  link: {
    color: "#53A0E0",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "19.5px",
  },
};

// type Props = {
//   couponTitleBig: string;
//   valiedStart: string;
//   storeName: string;
//   valiedEnd: string;
//   couponDescription: string;
//   storeImg: string;
//   storeUrl: string;

// };

const Test: React.FC<Detail> = ({
  couponTitleBig,
  validStart,
  storeName,
  validEnd,
  couponDescription,
  storeImg,
  storeUrl,
  red,
  hide
}) => {
  const startStr = dateTrance(validStart);
  const valiedStr = dateTrance(validEnd);
  return (
    <Box sx={styles.container}>
      <Box sx={styles.ticket}>
        <Coupon couponTitleBig={couponTitleBig} />
      </Box>
      {hide ? "" : <Typography sx={styles.start} >{`${startStr}からご利用いただけます。`}</Typography> }
      <Typography sx={styles.store}>{storeName || "description"}</Typography>
      {red ? (
        <Typography
          sx={styles.limitRed}
        >{`有効期限　${valiedStr}まで`}</Typography>
      ) : (
        <Typography
          sx={styles.limit}
        >{`有効期限　${valiedStr}まで`}</Typography>
      )}
      <Typography sx={styles.description}>
        {couponDescription || "description"}
      </Typography>
      <Box>
        <ImgBox img={storeImg} width={100} height={100} size="contain" />
      </Box>
      <Typography
        component="a"
        href={storeUrl || "https://www.higashihiroshima-digital.com/"}
        sx={styles.link}
      >
        店舗の詳しい情報
      </Typography>
    </Box>
  );
};

export default Test;
