import React from 'react'
import { Box, Typography } from "@mui/material";

const styles = {
  container: {
    width: "100%",
    backgroundColor: "rgb(0, 172, 169)",
    padding: "10px 0",
    marginTop: "22px",
    textAlign: "center",
    postion: "relative"
  },
  text: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#fff",
  },
}

const UseText = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>
        この画面をお店に確認後、<br />
        下の「クーポンを使う」ボタンを押してください
      </Typography>
    </Box>
  );
}

export default UseText
