import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";

const CouponNote: React.FC = () => {
  return (
    <>
      <Box>
        <Box>
          <Typography variant="subtitle">必ず、ご利用時にスタッフにご提示ください</Typography>
        </Box>
        <Box>
          <Typography variant="note">＊ご注文時に本画面をご提示ください。<br />
            ＊他のクーポンとの併用不可<br />
            ＊「使用済み」のクーポンはご利用いただけません。<br />
             （お客さまの操作で誤って使用済みにしてしまった場合も対応しかねます）</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CouponNote;