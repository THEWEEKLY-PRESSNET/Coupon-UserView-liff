import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import Badge from "./Ticket.Badge";
import Flag from "./Ticket.Flag";
import Shadow from "./Ticket.Shadow";
import { dateTrance } from "../../utils/formatter";

const styles = {
  container: {
    position: "relative",
    boxSizing: "border-box",
    overflow: "hidden",
    width: "100%",
    maxWidth: "380px",
    px: "3px",
    py: "8px",
  },
  ellipseR: {
    position: "absolute",
    width: "50px",
    height: "50px",
    top: "49px",
    right: "-36px",
    borderRadius: "50%",
    // borderTopLeftRadius: "50%/11%",
    // borderBottomLeftRadius: "50px",
    bgcolor: "bg1.main",
    boxShadow: "3px 4px 4px rgba(64, 64, 64, 0.25) inset",
    zIndex: 2,
  },
  ellipseL: {
    position: "absolute",
    width: "50px",
    height: "50px",
    top: "46px",
    left: "-36px",
    borderRadius: "50%",
    // borderTopLeftRadius: "50%/11%",
    // borderBottomLeftRadius: "50px",
    bgcolor: "bg1.main",
    boxShadow: "-3px 4px 4px rgba(64, 64, 64, 0.25) inset",
    zIndex: 2,
  },
  border: {
    position: "absolute",
    borderLeft: "2px dotted #000",
    height: "84%",
    top: "7%",
    left: "48px",
  },
  copy: {
    position: "absolute",
    top: "44%",
    left: -4,
    transform: "rotate(270deg)",
    fontWeight: 700,
    fontSize: "10px",
    letterSpacing: "0.5em",
  },
  title: {
    position: "absolute",
    top: "10%",
    left: "18%",
    fontWeight: 600,
    fontSize: "23px",
    lineHeight: "34.5px",
  },
  subtitle: {
    position: "absolute",
    top: "31%",
    left: "18%",
    fontWeight: 300,
    fontSize: "13px",
    lineHeight: "20px",
  },
  name: {
    position: "absolute",
    top: "47%",
    left: "18%",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "19.5px",
  },
  start: {
    position: "absolute",
    top: "64%",
    left: "18%",
    fontWeight: 600,
    fontSize: "10px",
    lineHeight: "15px",
    color: "#E74343",
  },
  limit: {
    position: "absolute",
    top: "78%",
    left: "18%",
    fontWeight: 300,
    fontSize: "10px",
    lineHeight: "15px",
  },
  favor: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // width: "100px",
    top: "78%",
    right: "4%",
    bgcolor: "#E57A7A",
    color: "#FFF",
  },
  favorText: {
    // position: "absolute",
    // display: "flex",
    // verticalAlign: "middle",
    pt: "2px",
    pr: "4px",
    // top: "78%",
    // left: "18%",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "12px",
    // bgcolor: "#E57A7A",
    color: "#FFF",
  },
  favorIcon: {
    color: "#FFF",
    height: "12px",
    // pt: "1px",
  },
  ticket: {
    background: "#FFF",
    boxShadow: "0px 4px 4px rgba(64, 64, 64, 0.25)",
    borderRadius: "5px",
    // width: "345px",
    height: "128px",
    // filter: "drop-shadow(0px 4px 4px #404040)",
  },
  badge: {
    position: "absolute",
    top: "8px",
    left: "3px",
  },
};

type Props = {
  couponTitleBig: string;
  couponTitleSmall: string;
  storeName: string;
  valiedStart: string;
  valiedEnd: string;
  badgeText?: number;
  favored?: boolean;
  used?: boolean;
  isFlag?: boolean;
};

const Test: React.FC<Props> = ({
  couponTitleBig,
  couponTitleSmall,
  storeName,
  valiedStart,
  valiedEnd,
  badgeText,
  favored,
  used,
  isFlag,
}) => {
  const startStr = dateTrance(valiedStart);
  const valiedStr = dateTrance(valiedEnd);
  return (
    <Box sx={styles.container}>
      <Box className="coupon-ticket" sx={styles.ticket} />
      <Box sx={styles.ellipseR} />
      <Box sx={styles.ellipseL} />
      <Box sx={styles.border} />
      <Typography sx={styles.copy}>Coupon</Typography>
      <Typography sx={styles.title}>{couponTitleBig}</Typography>
      <Typography sx={styles.subtitle}>{couponTitleSmall}</Typography>
      <Typography sx={styles.name}>{storeName}</Typography>
      <Typography sx={styles.limit}>{`有効期限　${valiedStr}まで`}</Typography>
      {favored && (
        <Box sx={styles.favor}>
          <StarIcon sx={styles.favorIcon} />
          <Typography sx={styles.favorText}>お気に入り</Typography>
        </Box>
      )}
      {badgeText && (
        <Box sx={styles.badge}>
          <Badge badgeText={badgeText} />
        </Box>
      )}
      {isFlag && <Flag />}
      {isFlag && (
        <Typography
          sx={styles.start}
        >{`${startStr}からご利用いただけます。`}</Typography>
      )}
      {used && <Shadow />}
    </Box>
  );
};

export default Test;
