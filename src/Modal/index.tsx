import React, { useState, ReactNode } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import type { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";

import ModalBox from "./ModalBox";
import Use from "./Body.use";
import Used from "./Body.used";
import { useSelector } from "react-redux";
import { Root } from "../stores";

const styles = {
  actions: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
};

type Props = {
  open: boolean;
  setOpen: (e: boolean) => void;
  children: ReactNode;
  actions?: ReactNode;
  sx?: SxProps;
};

const ModalUse: React.FC<Props> = () => {
  const { body, isModal } = useSelector((s: Root) => s.modal);
  console.log("body", "isModal", body, isModal);
  const [open, setOpen] = useState(isModal);
  console.log("open", open);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalBox open={isModal} setOpen={setOpen} actions={<div />}>
      {body === "use" && <Use setOpen={setOpen} />}
      {body === "used" && <Used setOpen={setOpen} />}
    </ModalBox>
  );
};

export default ModalUse;
