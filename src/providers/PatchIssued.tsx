import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { requestPatch, promiseResolver, RequestParam } from "./requestMethods";
// import { updateCoupons } from "../stores/coupons";
// import { updateSnackBar } from "../../stores/snackBar";

type Params = {
  state: string;
  issuedCouponId: number;
  favored?: boolean;
  used?: boolean;
};

export const patchIssued = async (params: Params) => {
  // console.log("patchi");
  const url =
    "https://asia-northeast2-coupon-proj.cloudfunctions.net/Issued-dev";
  // const urlParams = { userId: params.userId };
  // const bodyParams = params;
  const requestParams: RequestParam = {
    url,
    bodyParams: params,
  };
  const response = await promiseResolver(requestPatch(requestParams));
  console.log("patch issued response", response);
  return response;
};

// const PatchIssued: React.FC<Params> = ({ userId }) => {
//   console.log("get coupons");
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const resolvePromise = async () => {
//       const response = await getCoupons({ userId });
//       if (response.result) {
//         console.log("success", response.payload);
//         dispatch(updateCoupons(response.payload));
//       } else {
//         // dispatch(
//         //   updateSnackBar({
//         //     open: true,
//         //     comment: "サーバー通信に失敗しました",
//         //     severity: "error",
//         //   })
//         // );
//       }
//     };
//     resolvePromise();
//   }, []);
//   return <></>;
// };

export default patchIssued;
