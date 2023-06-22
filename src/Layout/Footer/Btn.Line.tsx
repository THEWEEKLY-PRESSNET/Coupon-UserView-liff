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
    width: "30px",
    height: "30px",
  },
  label: {
    mt: 1,
    fontSize: "10px",
    fontWeight: 600,
  },
};

const LineBtn = () => {
  return (
    <Box className="linebtn" sx={styles.container}>
      <Box sx={styles.img}>
        <StaticImage
          src="../../images/line.png"
          loading="eager"
          width={30}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </Box>
      <Typography noWrap sx={styles.label}>
        公式ライン
      </Typography>
    </Box>
  );
};

export default LineBtn;
