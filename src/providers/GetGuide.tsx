import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { requestGet, promiseResolver, typeRequest } from "./requestMethods";
// import { updateArticles } from "../stores/articles";
// import { updateSnackBar } from "../../stores/snackBar";

type Params = {
  userId: string;
};

export const getGuides = async (params: Params) => {
  const url =
    "https://asia-northeast2-coupon-proj.cloudfunctions.net/Guide-dev";
  const requestParams: typeRequest = {
    url,
    params,
  };
  const response = await promiseResolver(requestGet(requestParams));
  console.log("get guide response", response);
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

export default getGuides;
