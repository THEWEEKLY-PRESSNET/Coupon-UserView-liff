import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { requestPost, promiseResolver, RequestParam } from "./requestMethods";

type Params = {
  genreName: string;
};

//postQuestionが実行される時に引数のparamsの内容がきまる
export const postQuestion = async (params: Params) => {
  const url =
    "https://asia-northeast2-coupon-proj.cloudfunctions.net/Genre-dev";

  //引数として使われる変数の定義 
  const requestParams: RequestParam = {
    url,
    bodyParams: params,
  };

  // promiseResolverに引数にrequestPostの結果を渡す
  // requestPostに引数のrequestParamsを渡す
  const response = await promiseResolver(requestPost(requestParams));
  console.log("post genre response", response);
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

export default postQuestion;
