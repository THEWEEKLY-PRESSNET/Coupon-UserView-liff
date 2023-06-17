import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { requestGet, promiseResolver, typeRequest } from "./requestMethods";

type Params = {
  userId: string;
};

export const getSettings = async (params: Params) => {
  const url =
    "https://asia-northeast2-coupon-proj.cloudfunctions.net/Setting-dev";
  const requestParams: typeRequest = {
    url,
    params,
  };
  const response = await promiseResolver(requestGet(requestParams));
  console.log("get setting response", response);
  return response;
};

// const GetArticles: React.FC<Params> = ({ userId }) => {
//   console.log("get coupons");
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const resolvePromise = async () => {
//       const response = await getArticle({ userId });
//       if (response.result) {
//         console.log("success", response.payload);
//         // dispatch(updateArticles(response.payload));
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

export default getSettings;
