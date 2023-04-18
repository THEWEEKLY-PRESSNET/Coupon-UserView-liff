import { requestPost, promiseResolver } from '../../utils/requestMethods';
import type {
  postUserLogin,
  postUserLoginResponse,
} from '../../interfaces/apiCall';

type requestType = {
  url: string;
  params: postUserLogin;
};

const useLogin = async () => {
  const url =
    'https://asia-northeast2-bbq-project-324201.cloudfunctions.net/BBQ-UserLogin';
  const params: requestType = {
    url,
    params: {
      userName: '大阪一郎',
      userPassword: 'test',
    },
  };
  const response: postUserLoginResponse = await promiseResolver(
    requestPost(params),
  );
  console.log('mock user login', response);
  return response;
};

export default useLogin;
