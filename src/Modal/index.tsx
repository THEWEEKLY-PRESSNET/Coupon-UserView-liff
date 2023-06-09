import React from "react";

import ModalBox from "./ModalBox";
import Use from "./Body.use";
import Used from "./Body.used";
import Error from "./Body.error";
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

const ModalIndex: React.FC = () => {
  const { body, isModal, text } = useSelector((s: Root) => s.modal);
  // console.log("body", "isModal", body, isModal, text);
  const dispatch = useDispatch();
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
      {body === "error" && <Error setOpen={setOpen} text={text} />}
    </ModalBox>
  );
};

export default ModalIndex;
