import React, { ReactNode } from "react";
import { Box, Divider } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    px: 6,
  },
  divider: {
    borderColor: "black",
  },
};

const FooterNav: React.FC = () => {
  return (
    <Box className="footernav" sx={styles.container}>
      <Box></Box>
    </Box>
  );
};

export default FooterNav;
