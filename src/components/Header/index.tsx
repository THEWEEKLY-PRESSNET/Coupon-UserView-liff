import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    p: 0.5,
    bgcolor: "#FFF",
  },
  badge: {
    display: "inline-block",
    color: "#FFF",
    bgcolor: "#A64996",
    px: 0.5,
    mr: 0.5,
  },
  body: {
    display: "flex",
    gap: 1,
    height: "100%",
    mt: 0.5,
    // flexDirection: "column",
    // justifyContent: "space-around",
  },
  img: {
    flexGrow: 1,
    height: "100%",
  },
  article: {
    flexGrow: 2,
  },
  dummy: {
    width: "100%",
    height: "100%",
    bgcolor: "#D9D9D9",
  },
  link: {
    color: "#53A0E0",
  },
};

type Props = {
  title: string;
  img: string;
};

const Header: React.FC<Props> = ({ title, img }) => {
  return (
    <Box className="footernav" sx={styles.container}>
      <Box>
        <Typography sx={styles.badge}>NEW</Typography>
        <Typography variant="subtitle" sx={{ display: "inline-block" }}>
          {title || "東広島デジタル新着記事"}
        </Typography>
      </Box>
      <Box sx={styles.body}>
        <Box sx={styles.img}>{img || <Box sx={styles.dummy} />}</Box>
        <Box sx={styles.article}>
          <Typography variant="note" sx={{ display: "block" }}>
            東広島デジタル新着記事 東広島デジタル新着記事 東広島デジタル新着記事
          </Typography>
          <Typography variant="note" sx={styles.link}>
            記事を読む ＞
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
