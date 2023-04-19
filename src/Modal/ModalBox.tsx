import React, { ReactNode } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import type { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";

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

const ModalBox: React.FC<Props> = ({
  open,
  setOpen,
  children,
  sx,
  actions,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose} sx={sx}>
      <DialogContent>{children}</DialogContent>
      <DialogActions sx={styles.actions}>
        {(actions && actions) || <Button onClick={handleClose}>戻る</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default ModalBox;
