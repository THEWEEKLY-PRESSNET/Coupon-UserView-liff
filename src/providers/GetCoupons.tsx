import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { requestGet, promiseResolver, typeRequest } from "./requestMethods";
import { updateCoupons } from "../stores/coupons";
// import { updateSnackBar } from "../../stores/snackBar";

type Params = {
  userId: number;
};

export const getCoupons = async (params: Params) => {
  const url = "https://";
  const requestParams: typeRequest = {
    url,
    params,
  };
  const response = await promiseResolver(requestGet(requestParams));
  console.log("get coupons response", response);
  return response;
};

const GetCoupons: React.FC<Params> = ({ userId }) => {
  console.log("get coupons");
  const dispatch = useDispatch();
  useEffect(() => {
    const resolvePromise = async () => {
      const response = await getCoupons({ userId });
      if (response.result) {
        console.log("success", response.payload);
        dispatch(updateCoupons(response.payload));
      } else {
        // dispatch(
        //   updateSnackBar({
        //     open: true,
        //     comment: "サーバー通信に失敗しました",
        //     severity: "error",
        //   })
        // );
      }
    };
  }, []);
  return <></>;
};

export default GetCoupons;
