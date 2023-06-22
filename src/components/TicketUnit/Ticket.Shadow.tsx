import React from "react";
import { Box, Typography } from "@mui/material";

import type { Coupon } from "../../stores/coupon";

const styles = {
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(100% - 6px)",
    height: "calc(100% - 16px)",
    top: "8px",
    left: "3px",
    borderRadius: "5px",
    bgcolor: "#8B8B8BD9",
    cursor: "auto",
  },

  label: {
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "10%",
    lineHeight: "19.5px",
    color: "#FFF",
  },
};

type Props = {
  text: string;
  handleUsed: (coupon: Coupon) => void;
};

const Flag: React.FC<Props> = ({ text, handleUsed }) => {
  return (
    <Box className="flag-shadow" onClick={handleUsed} sx={styles.container}>
      <Typography sx={styles.label}>{text}</Typography>
    </Box>
  );
};

export default Flag;
