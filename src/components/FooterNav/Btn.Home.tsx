import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Typography } from "@mui/material";

import Seo from "../../images/home.png";

const HomeBtn = () => (
  <Box>
    <StaticImage
      src="../../images/home.png"
      loading="eager"
      width={30}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    />
    <Typography>東広島デジタル</Typography>
  </Box>
);

export default HomeBtn;
