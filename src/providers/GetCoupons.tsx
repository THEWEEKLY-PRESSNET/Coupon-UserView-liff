import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { requestGet, promiseResolver, typeRequest } from "./requestMethods";
// import { updateBookings } from "../stores/bookings";
// import { updateSnackBar } from "../../stores/snackBar";

type Params = {
  userId?: number;
  siteId?: string;
  date?: string;
};

export const getUserReservation = async (params: Params) => {
  const url =
    // "https://asia-northeast2-bbq-project-324201.cloudfunctions.net/Test-user-reservation";
    "https://asia-northeast2-bbq-project-324201.cloudfunctions.net/Osakajo-user-reservation";
  // const url =
  //   "https://osakajyo-v1-dev-k4vm4puezq-dt.a.run.app/reservation/user";
  const requestParams: typeRequest = {
    url,
    // params: { userId },
  };
  if (params?.userId !== undefined) {
    requestParams.params = { userId: params.userId };
  }
  if (params?.siteId !== undefined) {
    requestParams.params = { ...requestParams.params, siteId: params.siteId };
  }
  if (params?.date !== undefined) {
    requestParams.params = { ...requestParams.params, date: params.date };
  }
  console.log("params", params);
  console.log("requestParams", requestParams);
  const response = await promiseResolver(requestGet(requestParams));
  console.log("get user reservations response", response);
  return response;
};

type Props = { userId: number };
const GetUserReservation: React.FC<Props> = ({ userId }) => {
  console.log("get user reservations");
  const dispatch = useDispatch();
  useEffect(() => {
    const resolvePromise = async () => {
      const response = await getUserReservation({ userId });
      if (response.result) {
        console.log("success", response.payload);
        dispatch(updateBookings(response.payload));
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

export default GetUserReservation;
