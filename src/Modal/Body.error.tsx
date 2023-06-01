import React from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";

import { updateTopState } from "../stores/topState";

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
  text: string;
  setOpen: (e: boolean) => void;
};

const ModalIndex: React.FC<Props> = ({ setOpen, text }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    dispatch(
      updateTopState({
        view: "top",
      })
    );
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="subtitle">{text}</Typography>
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
