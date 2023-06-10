import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import Badge from "./Ticket.Badge";
import Flag from "./Ticket.Flag";
import Shadow from "./Ticket.Shadow";
import { dateTrance, strToDate } from "../../utils/formatter";
import type { Coupon } from "../../stores/coupon";

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
    filter: "drop-shadow(0px 4px 4px rgba(64, 64, 64, 0.25))",
  },
  clipPathContainer: {
    clipPath: "url(#coupon-path)",
  },
  svgBox: {
    height: 0,
    width: 0,
    position: 'absolute',
    top: 0,
    left: 0,
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
  handleClick: (coupon: Coupon) => void;
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
  // console.log("couponUnit");
  // console.log("valiedStart", validStart);
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
    <Box onClick={used || expired ? undefined : handleClick} sx={styles.container}>
      <Box sx={styles.clipPathContainer}>
        <Box className="coupon-ticket" sx={styles.ticket} />
        <Box sx={styles.svgBox}>
          <svg viewBox="0 0 374 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="coupon-path" clipPathUnits="objectBoundingBox">
              <path transform="scale(0.002673,0.007812)" d="M0 5C0 2.23858 2.23858 0 5 0H369C371.761 0 374 2.23858 374 5V43.2872C366.807 47.7822 362.079 55.3818 362.079 64C362.079 72.6182 366.807 80.2178 374 84.7128V123C374 125.761 371.761 128 369 128H4.99999C2.23857 128 0 125.761 0 123V84.0061C6.58616 79.4453 10.8468 72.1816 10.8468 64C10.8468 55.8184 6.58616 48.5547 0 43.9939V5Z" />
            </clipPath>
          </svg>
        </Box>
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
    </Box >
  );
};

export default TicketUnit;
