import React, { useState, useEffect, useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import TestComponent from "../../Modal";
import { theme } from "../../styles/theme";
import store from "../../stores";
import { updateModal } from "../../stores/modal";

import type { Root } from "../../stores";

const mockData: Root = {
  modal: {
    isModal: true,
    body: "used",
  },
};

const TestApp: React.FC = () => {
  // const topState = useSelector((s: root) => s.topState);
  // const newR = useSelector((s: root) => s.newReservation);
  // const rState = useSelector((s: root) => s.reservationState);
  // console.log("new", newR);
  // console.log("top", topState);
  // console.log("rst", rState);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(updateTopState(mockData.topState));
    dispatch(updateModal(mockData.modal));
  }, []);

  return <TestComponent />;
};

const Test: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <TestApp />
      </Provider>
    </ThemeProvider>
  );
};

export default Test;
