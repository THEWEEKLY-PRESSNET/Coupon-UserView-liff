import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Typography } from "@mui/material";

import Seo from "../../images/home.png";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
  },
  img: {
    display: "flex",
    flexDirection: "column",
  },
};

const HomeBtn = () => (
  <Box sx={styles.container}>
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

    <Typography>公式ライン</Typography>
  </Box>
);

export default HomeBtn;
