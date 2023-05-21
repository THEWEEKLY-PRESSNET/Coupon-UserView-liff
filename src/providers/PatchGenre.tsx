import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { requestPatch, promiseResolver, RequestParam } from "./requestMethods";

type Params = {
  genreId: number;
  genreName: string;
};

export const patchGenre = async (params: Params) => {
  const url =
    "https://asia-northeast2-coupon-proj.cloudfunctions.net/Genre-dev";
  const requestParams: RequestParam = {
    url,
    bodyParams: params,
  };
  const response = await promiseResolver(requestPatch(requestParams));
  console.log("patch genre response", response);
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

export default patchGenre;
