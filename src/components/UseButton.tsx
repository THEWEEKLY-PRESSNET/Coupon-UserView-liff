import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Paper } from "@mui/material";
import { updateTopState } from "../stores/topState";
import { updateModal } from "../stores/modal";
import type { Root } from "../stores";

const styles = {
  container: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "100vw", sm: 600 },
    maxWidth: 600,
    height: 67,
    bottom: "72px",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: 0,
    fontSize: "18px",
    fontWeight: 600,
  },
};

const UseBtn = () => {
  const { view } = useSelector((s: Root) => s.topState);
  const dispatch = useDispatch();
  const useBtn = useMemo(() => {
    switch (view) {
      case "detail":
        return {
          value: "クーポンを提示する",
          style: {
            color: "#FFF",
            bgcolor: "primary.main",
          },
          onClick: () => {
            dispatch(
              updateTopState({
                view: "use",
              })
            );
          },
        };
      case "use":
        return {
          value: "クーポンを使う",
          style: {
            color: "#FFF",
            bgcolor: "accent.p",
          },
          onClick: () => {
            dispatch(
              updateModal({
                body: "use",
                isModal: true,
              })
            );
          },
        };
      case "used":
        return {
          value: "使用済み",
          style: {
            color: "#FFF",
            bgcolor: "#B7B7B7",
          },
          onClick: undefined,
        };

      default:
        break;
    }
  }, [view]);
  const handleClick = () => {
    window.location.href = "https://lin.ee/f62Smod";
  };

  return (
    <Paper
      className="usebtn"
      elevation={5}
      onClick={useBtn?.onClick}
      sx={{ ...styles.container, ...useBtn?.style }}
    >
      {useBtn?.value}
    </Paper>
  );
};

export default UseBtn;
