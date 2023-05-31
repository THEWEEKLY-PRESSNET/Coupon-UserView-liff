import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import Badge from "./Ticket.Badge";
import Flag from "./Ticket.Flag";
import Shadow from "./Ticket.Shadow";
import { dateTrance, strToDate } from "../../utils/formatter";

const styles = {
  container: {
    position: "relative",
    boxSizing: "border-box",
    overflow: "hidden",
    width: "100%",
    maxWidth: "380px",
    px: "3px",
    py: "8px",
    cursor: "pointer",
  },
  ellipseR: {
    position: "absolute",
    width: "50px",
    height: "50px",
    top: "49px",
    right: "-36px",
    borderRadius: "50%",
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
    top: "78%",
    right: "4%",
    bgcolor: "#E57A7A",
    color: "#FFF",
  },
  favorText: {
    pt: "2px",
    pr: "4px",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "12px",
    color: "#FFF",
  },
  favorIcon: {
    color: "#FFF",
    height: "12px",
  },
  ticket: {
    background: "#FFF",
    boxShadow: "0px 4px 4px rgba(64, 64, 64, 0.25)",
    borderRadius: "5px",
    height: "128px",
  },
  badge: {
    position: "absolute",
    top: "8px",
    left: "3px",
  },
};

type Props = {
  handleClick: (coupon: any) => void;
  couponTitleBig: string;
  couponTitleSmall: string;
  storeName: string;
  validStart: string;
  validEnd: string;
  badgeText?: number;
  favored?: boolean;
  used?: boolean;
};

const TicketUnit: React.FC<Props> = ({
  handleClick,
  couponTitleBig,
  couponTitleSmall,
  storeName,
  validStart,
  validEnd,
  badgeText,
  favored,
  used,
}) => {
  const startStr = dateTrance(validStart);
  const validStr = dateTrance(validEnd);
  const isFlag = useMemo(() => {
    const now = new Date();
    const past = strToDate(validStart);
    return now < past;
  }, [validStart]);
  const expired = useMemo(() => {
    const now = new Date();
    const past = strToDate(validEnd);
    return now > past;
  }, [validEnd]);

  return (
    <Box
      onClick={used || expired ? undefined : handleClick}
      sx={styles.container}
    >
      <Box className="coupon-ticket" sx={styles.ticket} />
      <Box sx={styles.ellipseR} />
      <Box sx={styles.ellipseL} />
      <Box sx={styles.border} />
      <Typography sx={styles.copy}>Coupon</Typography>
      <Typography sx={styles.title}>{couponTitleBig}</Typography>
      <Typography sx={styles.subtitle}>{couponTitleSmall}</Typography>
      <Typography sx={styles.name}>{storeName}</Typography>
      <Typography sx={styles.limit}>{`有効期限　${validStr}まで`}</Typography>
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
      {used && <Shadow text="使用済み" />}
      {expired && <Shadow text="期限切れ" />}
    </Box>
  );
};

export default TicketUnit;
