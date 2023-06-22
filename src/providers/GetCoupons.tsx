import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { requestPost, promiseResolver, typeRequest } from "./requestMethods";
import { updateCoupons } from "../stores/coupons";
// import { updateTopState } from "../stores/topState";
// import { updateSnackBar } from "../../stores/snackBar";

type Params = {
  idToken: string | undefined;
};

export const getCoupons = async (params: Params) => {
  const url = "https://asia-northeast2-coupon-proj.cloudfunctions.net/Issued";
  const requestParams: typeRequest = {
    url,
    params,
  };
  const response = await promiseResolver(requestPost(requestParams));
  console.log("get coupons response", response);
  return response;
};

const GetCoupons: React.FC<Params> = ({ idToken }) => {
  console.log("get coupons");
  const dispatch = useDispatch();
  useEffect(() => {
    //   dispatch(
    //     updateTopState({
    //       view: "loading",
    //     })
    //   );
    const resolvePromise = async () => {
      const response = await getCoupons({ idToken });
      if (response.result) {
        // console.log("success", response.payload);
        dispatch(updateCoupons(response.payload));
        // dispatch(updateTopState({ view: "top" }));
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
    resolvePromise();
  }, []);
  return <></>;
};

export default GetCoupons;
