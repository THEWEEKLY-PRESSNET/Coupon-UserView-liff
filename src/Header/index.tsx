import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import ImgBox from "../components/ImgBox";
import type { Root } from "../stores";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    p: 0.5,
    bgcolor: "#FFF",
  },
  titleBox: {
    display: "flex",
    width: "100%",
  },
  badge: {
    display: "inline-block",
    color: "#FFF",
    bgcolor: "#A64996",
    fontSize: "10px",
    lineHeight: "10px",
    px: 0.5,
    mr: 0.5,
  },
  title: {},
  body: {
    display: "flex",
    gap: 1,
    height: "100%",
    mt: 0.5,
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

const Header: React.FC = () => {
  const articles = useSelector((s: Root) => s.articles);
  const { articleTitle, articleUrl, articleImg } = articles[0] || [
    {
      articleTitle: undefined,
      articleUrl: undefined,
      articleImg: undefined,
    },
  ];
  // console.log("article", articles);

  return (
    <Box className="footernav" sx={styles.container}>
      <Box sx={styles.titleBox}>
        <Typography sx={styles.badge}>NEW</Typography>
        <Typography variant="subtitle" noWrap sx={{ display: "inline-block" }}>
          東広島デジタル新着記事
        </Typography>
      </Box>
      <Box sx={styles.body}>
        <Box sx={styles.img}>
          {<ImgBox width={80} height={54} size="cover" img={articleImg} /> || (
            <Box sx={styles.dummy} />
          )}
        </Box>
        <Box sx={styles.article}>
          <Typography variant="note" sx={{ display: "block" }}>
            {articleTitle}
          </Typography>
          <Typography
            component="a"
            href={articleUrl || "https://www.higashihiroshima-digital.com/"}
            sx={styles.link}
          >
            記事を読む ＞
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
