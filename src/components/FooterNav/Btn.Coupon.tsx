import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Typography } from "@mui/material";

import Seo from "../../images/home.png";

const HomeBtn = () => (
  <Box>
    <StaticImage
      src="../../images/coupon.png"
      loading="eager"
      width={30}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    />
    <Typography>クーポン一覧</Typography>
  </Box>
);

export default HomeBtn;
