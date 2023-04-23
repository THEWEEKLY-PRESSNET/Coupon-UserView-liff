import React from "react";
import { Box, Typography } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    // mt: 4,
    px: "auto",
  },
};

const Test: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="subtitle">
        まだクーポンを所持していません。
      </Typography>
      <Typography variant="subtitle">クジをお楽しみください。</Typography>
      <Typography
        component="a"
        href="https://www.higashihiroshima-digital.com/"
      >
        抽選はこちら
      </Typography>
    </Box>
  );
};

export default Test;
