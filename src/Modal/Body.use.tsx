import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";

import { updateModal } from "../stores/modal";
import { updateCoupons } from "../stores/coupons";
import patchIssued from "../providers/PatchIssued";
import { getCoupons } from "../providers/GetCoupons";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { Root } from "../stores";

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
  const { issuedCouponId } = useSelector((s: Root) => s.coupon);
  const [state] = useLocalStorage("state");
  const dispatch = useDispatch();
  const handleUse = async () => {
    const res = await patchIssued({
      issuedCouponId,
      state,
      used: true,
    });
    if (res.result) {
      dispatch(
        updateModal({
          body: "used",
        })
      );
      getCoupons({ state }).then(response => {
        dispatch(updateCoupons(response.payload));
      });
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="subtitle">クーポンを使用済みにしますか？</Typography>
      <Typography>
        この操作は取り消せません。
        店舗スタッフに使用済みにするをタップしてもらってください。
        店舗の指示がある場合は、ご自身で使用済みにしてください。
      </Typography>
      <Box sx={styles.buttonBox}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleUse}
          sx={styles.button}
        >
          使用済みにする
        </Button>
        <Button
          variant="outlined"
          onClick={() => setOpen(false)}
          sx={styles.button}
        >
          キャンセル
        </Button>
      </Box>
    </Box>
  );
};

export default ModalIndex;
