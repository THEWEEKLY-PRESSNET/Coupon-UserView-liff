import React from "react";
import { Box, Button, Typography } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  buttonBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  button: {
    width: "190px",
    height: "57px",
    borderRadius: 0,
    fontWeight: 600,
    fontSize: "18px",
  },
};

type Props = {
  setOpen: (e: boolean) => void;
};

const ModalIndex: React.FC<Props> = ({ setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="subtitle">クーポンを使用しました！</Typography>
      <Box sx={styles.buttonBox}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleClose}
          sx={styles.button}
        >
          OK
        </Button>
      </Box>
    </Box>
  );
};

export default ModalIndex;
