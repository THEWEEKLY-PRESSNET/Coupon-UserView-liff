import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { requestPost, promiseResolver, RequestParam } from "./requestMethods";

type Params = {
  state: string;
};

export const postLotto = async (params: Params) => {
  const url =
    "https://asia-northeast2-coupon-proj.cloudfunctions.net/Lotto-dev";
  // const urlParams = { userId: params.userId };
  // const bodyParams = params;
  const requestParams: RequestParam = {
    url,
    // urlParams: { userId: params.userId },
    bodyParams: params,
  };
  const response = await promiseResolver(requestPost(requestParams));
  console.log("post lotto response", response);
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

export default postLotto;
