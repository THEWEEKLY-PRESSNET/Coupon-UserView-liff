import React, { useState, ReactNode } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import type { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";

import ModalBox from "./ModalBox";
import Use from "./Body.use";
import Used from "./Body.used";
import { useDispatch, useSelector } from "react-redux";

import { updateModal } from "../stores/modal";
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

const ModalUse: React.FC = () => {
  const { body, isModal } = useSelector((s: Root) => s.modal);
  // console.log("body", "isModal", body, isModal);
  const dispatch = useDispatch();
  console.log("open", open);
  const setOpen = () => {
    dispatch(
      updateModal({
        isModal: !isModal,
      })
    );
  };

  return (
    <ModalBox open={isModal} setOpen={setOpen} actions={<div />}>
      {body === "use" && <Use setOpen={setOpen} />}
      {body === "used" && <Used setOpen={setOpen} />}
    </ModalBox>
  );
};

export default ModalUse;
