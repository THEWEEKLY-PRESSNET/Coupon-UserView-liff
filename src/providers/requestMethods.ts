import axios, { AxiosResponse, AxiosError } from "axios";

/*   auth request    */
type authRequest = {
  url: string;
  token: string;
  urlParams: {
    aud: "Administrator" | "User";
  };
  params?: {};
  headerParams?: {};
};

export type RequestParam = {
  url: string;
  urlParams?: object;
  bodyParams?: object;
};

export const authGet = ({
  url,
  token,
  params,
}: {
  url: string;
  token: string;
  params: {};
}) => {
  return axios.get(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    params,
  });
};

export const authPost = ({ url, token, urlParams, params }: authRequest) => {
  const requestUrl = (urlParams && _appendUrlParams({ url, urlParams })) || url;
  return axios.post(requestUrl, params, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const authPatch = ({ url, token, params, urlParams }: authRequest) => {
  const requestUrl = _appendUrlParams({ url, urlParams });
  return axios.put(requestUrl, params, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const authDelete = ({ url, token, urlParams, params }: authRequest) => {
  const requestUrl = _appendUrlParams({ url, urlParams });
  return axios.delete(requestUrl, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    data: params,
  });
};

/*   request     */
export type typeRequest = {
  url: string;
  params?: {};
};
export const requestGet = ({ url, params }: typeRequest) => {
  return axios.get(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    params,
  });
};

//requestParamsを引数としてもらう
export const requestPost = ({ url, urlParams, bodyParams }: RequestParam) => {
  const requestUrl = (urlParams && _appendUrlParams({ url, urlParams })) || url;
  return axios.post(url, bodyParams, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const requestPatch = ({ url, urlParams, bodyParams }: RequestParam) => {
  const requestUrl = (urlParams && _appendUrlParams({ url, urlParams })) || url;
  return axios.patch(requestUrl, bodyParams, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};


export const requestDelete = ({ url, params }: typeRequest) => {
  return axios.delete(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: params,
  });
};

/*   utils     */
export const promiseResolver = (promise: any) => {
  const res = promise
  // promiseは、requestPost(requestParams)で、その処理が終わったら
    .then((r: AxiosResponse) => r.data)
    .catch((e: AxiosError) => {
      console.log("fetch failed");
      console.log(e);
      return { result: false };
    });
  return res;
};

/*   self methods     */
export const _appendUrlParams = ({
  url,
  urlParams,
}: {
  url: string;
  urlParams: {};
}) => {
  let newUrl = `${url}?`;
  Object.entries(urlParams).forEach((e, i) => {
    if (i != 0) {
      newUrl + "&";
    }
    newUrl = newUrl + `${e[0]}=${e[1]}`;
  });
  return newUrl;
};
