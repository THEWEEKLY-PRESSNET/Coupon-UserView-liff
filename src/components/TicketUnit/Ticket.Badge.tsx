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
    width: "60px",
    height: "60px",
  },
  label: {
    mt: 1,
    fontSize: "10px",
    fontWeight: 600,
  },
};

const LineBtn = () => {
  const handleClick = () => {
    window.location.href = "https://lin.ee/f62Smod";
  };

  return (
    <Box sx={styles.img}>
      <StaticImage
        src="../../images/badge.png"
        loading="eager"
        width={60}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </Box>
  );
};

export default LineBtn;
