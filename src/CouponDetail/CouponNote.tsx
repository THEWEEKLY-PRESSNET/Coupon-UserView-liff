import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";

const styles = {
  noteWrapper: {
    padding: "30px 0",
    maxWidth: "305px",
    margin: "auto",
    mb: "70px",
  },
  note: {
    display: "block",
    fontSize: "13px",
  },
  noteSml: {
    fontSize: "12px",
  }
};


const CouponNote: React.FC = () => {
  return (
    <>
      <Box sx={styles.noteWrapper}>
        <Box>
          <Typography sx={styles.note} variant="subtitle">必ず、ご利用時にスタッフにご提示ください</Typography>
        </Box>
        <Box>
          <Typography sx={styles.noteSml} variant="note">＊ご注文時に本画面をご提示ください。<br />
            ＊他のクーポンとの併用不可<br />
            ＊「使用済み」のクーポンはご利用いただけません。<br />
            （お客さまの操作で誤って使用済みにしてしまった場合も対応しかねます）</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CouponNote;