import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import ImgBox from "../ImgBox";
import type { Root } from "../../stores";

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
    justfyContent: "center",
  },
  badge: {
    display: "inline-block",
    color: "#FFF",
    bgcolor: "#A64996",
    height: "20px",
    lineHeight: "20px",
    px: 0.5,
    mr: 0.5,
  },
  title: {
    display: "inline-block",
    height: "20px",
    lineHeight: "20px",
    fontSize: 13,
    fontWeight: "bold",
    color: "#404040",
  },
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
  artText: {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": "3",
    overflow: "hidden",
  },
  dummy: {
    width: "100%",
    height: "100%",
    bgcolor: "#D9D9D9",
  },
  link: {
    position: "absolute",
    right: "10px",
    bottom: "10px",
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
        <Typography noWrap sx={styles.title}>
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
          <Typography variant="note" sx={styles.artText}>
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
