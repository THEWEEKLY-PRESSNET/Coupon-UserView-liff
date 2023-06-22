import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Typography } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  img: {
    width: "50px",
    height: "50px",
  },
  labelBox: {
    position: "absolute",
    top: "52%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "13px",
    color: "#FFF",
  },
};

type Props = {
  badgeText: number;
};

const Badge: React.FC<Props> = ({ badgeText }) => {
  return (
    <Box sx={styles.img}>
      <StaticImage
        src="../../images/badge.png"
        loading="eager"
        width={50}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="ticket-badge"
        style={{ marginBottom: `var(--space-3)` }}
      />
      <Box sx={styles.labelBox}>
        <Typography sx={styles.label}>残り</Typography>
        <Typography sx={styles.label}>{`${badgeText || 0}日`}</Typography>
      </Box>
    </Box>
  );
};

export default Badge;
