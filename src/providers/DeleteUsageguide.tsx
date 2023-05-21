import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { requestDelete, promiseResolver, RequestParam } from "./requestMethods";

type Params = {
  usageguideId: number;
};

export const deleteGuide = async (params: Params) => {
  const url =
    "https://asia-northeast2-coupon-proj.cloudfunctions.net/Guide-dev";
  const requestParams: RequestParam = {
    url,
    bodyParams: params,
  };
  console.log("req", requestParams);
  const response = await promiseResolver(requestDelete(requestParams));
  console.log("delete guide response", response);
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

export default deleteGuide;
