import React, {useState} from 'react'
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateModal } from '../stores/modal';

const styles = {
  button: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#E57A7A;",
    padding: "20px 0",
    boxShadow: "0px -4px 4px rgba(64, 64, 64, 0.25)",
  },
  text: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: 600,
  },
};

const UseButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateModal({
      body: "use",
      isModal: true,
    }));
  };
  return (
    <Button variant="contained" sx={styles.button} onClick={handleClick}>
      <Typography sx={styles.text}>クーポンを使う</Typography>
    </Button>
  );
}

export default UseButton
